<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();
  $batchno = 0;
  $newbatchno = 0;
  $filename = "";

  try
  {
    SharedBeginTx($dblink);
    if (isset($_POST['uuid']) && isset($_POST['batchno']))
    {
      $batchno = $_POST['batchno'];
      // New batch?
      if ($batchno == 0)
      {
        error_log("Got request for suppliers report newbatchno");
        $dbselect = "select max(batchnosuppliersreport) batchno from bookings";
        if ($dbresult = SharedQuery($dbselect, $dblink))
        {
          if ($numrows = SharedNumRows($dbresult))
          {
            while ($dbrow = SharedFetchArray($dbresult))
              $newbatchno = $dbrow['batchno'];
            $newbatchno += 1;
            $rc = 0;
          }
        }
      }
      else
      {
        error_log("Got request for suppliers report batchno: $batchno");
        $rc = 0;
      }

      if ($rc == 0)
      {
        $dbselect = "select b1.id,b1.itype,b1.dateapproved,b1.commission,b1.travel,b1.spotter,b1.custfirstname,b1.custlastname,b1.custemail,b1.custaddress1,b1.custaddress2,b1.custcity,b1.custpostcode,b1.custstate,u1.firstname memberfirstname,u1.lastname memberlastname from bookings b1 left join users u1 on (b1.users_id=u1.id) where b1.dateapproved is not null and b1.datecancelled is null and b1.dateclosed is null and b1.dateexpired is null and b1.batchnosuppliersreport=$batchno order by u1.firstname,u1.lastname,b1.id";
        error_log($dbselect);
        if ($dbresult = SharedQuery($dbselect, $dblink))
        {
          if ($numrows = SharedNumRows($dbresult))
          {
            while ($dbrow = SharedFetchArray($dbresult))
              $rows[] = $dbrow;

            // If anything to do...
            if (sizeof($rows) > 0)
            {
              $filename = ($batchno == 0) ? $newbatchno : $batchno;
              $filename = "./tmp/Suppliers_report_" . $filename . ".csv";
              $myfile = fopen($filename, "w");

              if ($myfile !== false)
              {
                fwrite($myfile, '"Member","State","Date Approved","Booking #","Type","Name","Spotter\'s Fee","Commission","Travel","Email","Address 1","Address 2","City","Postcode"');
                fwrite($myfile, "\n");

                foreach ($rows as $row)
                {
                  fwrite
                  (
                    $myfile,
                    '"' . $row['memberfirstname'] . " " . $row['memberlastname'] . '",' .
                    '"' . $row['custstate'] . '",' .
                    '"' . $row['dateapproved'] . '",' .
                    '"' . $row['id'] . '",' .
                    '"' . $reportTypes[$row['itype']] . '",' .
                    '"' . $row['custfirstname'] .  " " . $row['custlastname'] . '",' .
                    '"' . $row['spotter'] . '",' .
                    '"' . $row['commission'] . '",' .
                    '"' . $row['travel'] . '",' .
                    '"' . $row['custemail'] . '",' .
                    '"' . $row['custaddress1'] . '",' .
                    '"' . $row['custaddress2'] . '",' .
                    '"' . $row['custcity'] . '",' .
                    '"' . $row['custpostcode'] . '",' .
                    ''
                  );
                  fwrite($myfile, "\n");

                  if ($batchno == 0)
                  {
                    $dbupdate = "update bookings set batchnosuppliersreport=$newbatchno,lastrunsuppliersreport=current_timestamp where id=" . $row['id'];
                    SharedQuery($dbupdate, $dblink);
                  }
                }

                fclose($myfile);
              else
              {
                $rc = -1;
                $msg = "Unable to create report file...";
              }
            }
            else
            {
              $rc = -1;
              $msg = "No matching bookings";
            }
          }
          else
          {
            $rc = -1;
            $msg = "No paid suppliers for report";
          }
        }
        else
        {
          $rc = -1;
          $msg = "Unable to fetch list of approved reports";
        }
      }
    }
    else
      $msg = "Missing parameters...";
    SharedCommit($dblink);
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch suppliers report...";
    SharedRollback($dblink);
  }

  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows, "filename" => $filename);
  $json = json_encode($response);
  echo $json;
?>
