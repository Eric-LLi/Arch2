<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();
  $filename = "";

  try
  {
    SharedBeginTx($dblink);
    if (isset($_POST['uuid']) && isset($_POST['datefrom']) && isset($_POST['dateto']))
    {
      $datefrom = $_POST['datefrom'];
      $dateto = $_POST['dateto'];

      $dbselect = "select b1.id,b1.itype,b1.dateapproved,b1.commission,b1.travel,b1.spotter,b1.custfirstname,b1.custlastname,b1.custemail,b1.custaddress1,b1.custaddress2,b1.custcity,b1.custpostcode,b1.custstate,u1.firstname memberfirstname,u1.lastname memberlastname from bookings b1 left join users u1 on (b1.users_id=u1.id) where b1.dateapproved is not null and b1.datecancelled is null and b1.dateclosed is null and b1.dateexpired is null and b1.datecreated between '$datefrom' and '$dateto' order by u1.firstname,u1.lastname,b1.id";
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
            $df =explode(" ", $datefrom);
            $dt =explode(" ", $dateto);
            $filename = "./tmp/Suppliers_report_" . $df[0] . "-" . $dt[0] . ".csv";
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
              }

              fclose($myfile);
              $rc = 0;
            }
            else
              $msg = "Unable to create report file...";
          }
          else
            $msg = "No matching bookings";
        }
        else
          $msg = "No paid suppliers for report";
      }
      else
        $msg = "Unable to fetch list of approved reports";
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
