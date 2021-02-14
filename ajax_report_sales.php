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
        error_log("Got request for sales report newbatchno");
        $dbselect = "select max(batchnosalesreport) batchno from bookings";
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
        error_log("Got request for sales report batchno: $batchno");
        $rc = 0;
      }
    
      if ($rc == 0)
      {
        $dbselect = "select id,itype,datepaid,budget,custfirstname,custlastname,custemail,custaddress1,custaddress2,custcity,custpostcode,custstate from bookings where datepaid is not null and datecancelled is null and dateclosed is null and dateexpired is null and batchnosalesreport=$batchno order by id";
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
              $filename = "./tmp/Sales_report_" . $filename . ".csv";
              $myfile = fopen($filename, "w");

              if ($myfile !== false)
              {
                fwrite($myfile, '"Booking #","Type","Date Paid","Name","Address","Agreed Price"');
                fwrite($myfile, "\n");

                foreach ($rows as $row)
                {
                  fwrite
                  (
                    $myfile,
                    '"' . $row['id'] . '",' .
                    '"' . $reportTypes[$row['itype']] . '",' .
                    '"' . $row['datepaid'] . '",' .
                    '"' . $row['custfirstname'] .  " " . $row['custlastname'] . '",' .
                    '"' . $row['custaddress1'] . " " . $row['custaddress2'] . " " . $row['custcity'] . " " . $row['custstate'] . " " . $row['custpostcode'] . '",' .
                    '"' . $row['budget'] . '",' .
                    ''
                  );
                  fwrite($myfile, "\n");

                  if ($batchno == 0)
                  {
                    $dbupdate = "update bookings set batchnosalesreport=$newbatchno,lastrunsalesreport=current_timestamp where id=" . $row['id'];
                    SharedQuery($dbupdate, $dblink);
                  }
                }

                fclose($myfile);
              }
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
            $msg = "No paid sales for report";
          }
        }
        else
        {
          $rc = -1;
          $msg = "Unable to fetch list of paid reports";
        }
      }
    }
    else
      $msg = "Missing parameters...";
    SharedCommit($dblink);
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch sales report...";
    SharedRollback($dblink);
  }

  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows, "filename" => $filename);
  $json = json_encode($response);
  echo $json;
?>
