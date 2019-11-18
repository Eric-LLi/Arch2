<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();
  $filename = "";

  try
  {
    SharedBeginTx($dblink);
    if (isset($_POST['uuid']) && isset($_POST['datefrom']) && isset($_POST['dateto']) && isset($_POST['members']))
    {
      $datefrom = $_POST['datefrom'];
      $dateto = $_POST['dateto'];
      $members = implode("','", $_POST['members']);
      $previousuuid = "";
      $reports = [];
      $df = explode(" ", $datefrom);
      $dt = explode(" ", $dateto);
      $myfile = false;
      $totalamount = 0.0;
      $totaltax = 0.0;
      $totalpaid = 0.0;

      $dbselect = "select b1.id,b1.itype,b1.dateapproved,b1.commission,b1.travel,b1.spotter,b1.custfirstname,b1.custlastname,b1.custemail,b1.custaddress1,b1.custaddress2,b1.custcity,b1.custpostcode,b1.custstate,u1.uuid,u1.firstname memberfirstname,u1.lastname memberlastname from bookings b1 left join users u1 on (b1.users_id=u1.id) where b1.dateapproved is not null and b1.datecancelled is null and b1.dateclosed is null and b1.dateexpired is null and b1.datecreated between '$datefrom' and '$dateto' and u1.uuid in ('$members') group by u1.uuid order by u1.uuid,b1.id";
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
            foreach ($rows as $row)
            {
              $membername = str_replace(" ", "_", $row['memberfirstname']) . "_" . str_replace(" ", "_", $row['memberlastname']);
              $spotter = $row['spotter'];
              $commission = $row['commission'];
              $travel = $row['travel'];

              // Start new file for each member
              if ($previousuuid != $row['uuid'])
              {
                $previousuuid = $row['uuid'];
                if ($myfile !== false)
                {
                  fwrite($myfile, '"","","","","Total","' . $totalamount . '","' . $totaltax . '","' . $totalpaid . '"');
                  fclose($myfile);
                }

                $filename = "./tmp/" . $membername . "_" . $df[0] . "-" . $dt[0] . ".csv";
                $reports[] = $filename;
                $myfile = fopen($filename, "w");

                // Headings...
                if ($myfile !== false)
                {
                  fwrite($myfile, '"Date Approved","Booking #","Type","Name","Address","Amount","Tax","Paid"');
                  fwrite($myfile, "\n");
                }

                $totalamount = 0.0;
                $totaltax = 0.0;
                $totalpaid = 0.0;
              }

              if ($myfile !== false)
              {
                $amount = floatval($spotter) + floatval($commission) + floatval($travel);
                $tax = $amount * 0.1;
                $paid = $amount + $tax;

                $totalamount += $amount;
                $totaltax += $tax;
                $totalpaid += $paid;

                fwrite
                (
                  $myfile,
                  '"' . $row['dateapproved'] . '",' .
                  '"' . $row['id'] . '",' .
                  '"' . $reportTypes[$row['itype']] . '",' .
                  '"' . $row['custfirstname'] .  " " . $row['custlastname'] . '",' .
                  '"' . $row['custaddress1'] . " " . $row['custaddress2'] . " " . $row['custcity'] . " " . $row['custstate'] . " " . $row['custpostcode'] . '",' .
                  '"' . $amount . '",' .
                  '"' . $tax . '",' .
                  '"' . $paid . '",' .
                  ''
                );
                fwrite($myfile, "\n");
              }
            }

            if ($myfile !== false)
            {
              fwrite($myfile, '"","","","","Total","' . $totalamount . '","' . $totaltax . '","' . $totalpaid . '"');
              fclose($myfile);
            }
            $rc = 0;
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

  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows, "reports" => $reports);
  $json = json_encode($response);
  echo $json;
?>
