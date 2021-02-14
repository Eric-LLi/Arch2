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
    
      $dbselect = "select id,itype,datepaid,budget,custfirstname,custlastname,custemail,custaddress1,custaddress2,custcity,custpostcode,custstate from bookings where datepaid is not null and datecancelled is null and dateclosed is null and dateexpired is null and datecreated between '$datefrom' and '$dateto' order by id";
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
            $filename = "./tmp/Sales_report_" . $df[0] . "-" . $dt[0] . ".csv";
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
          $msg = "No paid sales for report";
      }
      else
        $msg = "Unable to fetch list of paid reports";
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
