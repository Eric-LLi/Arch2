<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();

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
      $datefrom = $datefrom . " 00:00:00";
      $dateto = $dateto . " 23:59:59";
      $headings = '"Date Approved","Booking #","Type","Name","Address","Amount","Tax","Paid"';
      //
      $filename = "";
      $superfilename = "";
      //
      $myfile = false;
      $mysuperfile = false;
      //
      $totalamount = 0.0;
      $totaltax = 0.0;
      $totalpaid = 0.0;
      //
      $supertotalamount = 0.0;
      $supertotaltax = 0.0;
      $supertotalpaid = 0.0;

      $dbselect = "select b1.id,b1.itype,date_format(b1.dateapproved, '%d/%m/%Y') dateapproved,b1.commission,b1.travel,b1.spotter,b1.custfirstname,b1.custlastname,b1.custemail,b1.custaddress1,b1.custaddress2,b1.custcity,b1.custpostcode,b1.custstate,u1.uuid,u1.firstname memberfirstname,u1.lastname memberlastname,u1.gstinc from bookings b1 left join users u1 on (b1.users_id=u1.id) where b1.dateapproved is not null and b1.datecancelled is null and b1.dateclosed is null and b1.dateexpired is null and b1.dateapproved between '$datefrom' and '$dateto' and u1.uuid in ('$members') order by u1.firstname,u1.lastname,b1.id";
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
            $superfilename = "./tmp/Suppliers_" . $df[0] . "-" . $dt[0] . ".csv";
            $reports[] = $superfilename;
            $mysuperfile = fopen($superfilename, "w");
            // error_log($mysuperfile);
            if ($mysuperfile !== false)
            {
              fwrite($mysuperfile, '"Member",' . $headings);
              fwrite($mysuperfile, "\n");

              foreach ($rows as $row)
              {
                error_log("start to write");
                $membername = str_replace(" ", "_", $row['memberfirstname']) . "_" . str_replace(" ", "_", $row['memberlastname']);
                $spotter = $row['spotter'];
                $commission = $row['commission'];
                $travel = $row['travel'];

                // Start new file for each member
                error_log($previousuuid);
                if ($previousuuid != $row['uuid'])
                {
                  error_log("start individual member");
                  $previousuuid = $row['uuid'];
                  //error_log($myfile);
                  if ($myfile !== false)
                  {
                    fwrite($myfile, '"","","","","Total","$' . number_format($totalamount, 2) . '","$' . number_format($totaltax, 2) . '","$' . number_format($totalpaid, 2) . '"');
                    fclose($myfile);
                  }

                  $filename = "./tmp/" . $membername . "_" . $df[0] . "-" . $dt[0] . ".csv";
                  error_log($filename);
                  $reports[] = $filename;
                  $myfile = fopen($filename, "w");

                  // Headings...
                  if ($myfile !== false)
                  {
                    fwrite($myfile, $headings);
                    fwrite($myfile, "\n");
                  }

                  $totalamount = 0.0;
                  $totaltax = 0.0;
                  $totalpaid = 0.0;

                  $totalspotter = 0.0;
                  $totaltrasvel = 0.0;
                }

                if ($myfile !== false)
                {
                  $amount = floatval($commission);
                  $tax = ($row['gstinc'] == 1) ? $amount * 0.1 : 0.0;
                  $paid = $amount + $tax;

                  $totalamount += $amount;
                  $totaltax += $tax;
                  $totalpaid += $paid;

                  $supertotalamount += $amount;
                  $supertotaltax += $tax;
                  $supertotalpaid += $paid;

                  $lineitem = '"' . $row['dateapproved'] . '",' .
                              '"' . $row['id'] . '",' .
                              '"' . $reportTypes[$row['itype']] . '",' .
                              '"' . $row['custfirstname'] .  " " . $row['custlastname'] . '",' .
                              '"' . $row['custaddress1'] . " " . $row['custaddress2'] . " " . $row['custcity'] . " " . $row['custstate'] . " " . $row['custpostcode'] . '",' .
                              '"$' . number_format($amount, 2) . '",' .
                              '"$' . number_format($tax, 2) . '",' .
                              '"$' . number_format($paid, 2) . '"' .
                              '';
                  //Write to each member report
                  fwrite($myfile, $lineitem);
                  fwrite($myfile, "\n");
                  //Write to completed report
                  fwrite($mysuperfile, '"' . $row['memberfirstname'] . " " . $row['memberlastname'] . '",' . $lineitem);
                  fwrite($mysuperfile, "\n");

                  $spotter = floatval($spotter);
                  $travel = floatval($travel);

                  if ($spotter > 0.0)
                  {
                    error_log("has spotter fee need to add another row to the report,both completed and individual");
                    $tax = ($row['gstinc'] == 1) ? $spotter * 0.1 : 0.0;
                    $paid = $spotter + $tax;

                    $totalamount += $spotter;
                    $totaltax += $tax;
                    $totalpaid += $paid;

                    $supertotalamount += $spotter;
                    $supertotaltax += $tax;
                    $supertotalpaid += $paid;

                    $lineitem = '"' . $row['dateapproved'] . '",' .
                                '"' . $row['id'] . '",' .
                                '"Spotter",' .
                                '"' . $row['custfirstname'] .  " " . $row['custlastname'] . '",' .
                                '"' . $row['custaddress1'] . " " . $row['custaddress2'] . " " . $row['custcity'] . " " . $row['custstate'] . " " . $row['custpostcode'] . '",' .
                                '"$' . number_format($spotter, 2) . '",' .
                                '"$' . number_format($tax, 2) . '",' .
                                '"$' . number_format($paid, 2) . '"' .
                                '';

                    fwrite($myfile, $lineitem);
                    fwrite($myfile, "\n");

                    fwrite($mysuperfile, '"' . $row['memberfirstname'] . " " . $row['memberlastname'] . '",' . $lineitem);
                    fwrite($mysuperfile, "\n");
                  }

                  if ($travel > 0.0)
                  {
                    error_log("has traveller fee need to add another row to the report, both completed and indivdual");
                    $tax = ($row['gstinc'] == 1) ? $travel * 0.1 : 0.0;
                    $paid = $travel + $tax;

                    $totalamount += $travel;
                    $totaltax += $tax;
                    $totalpaid += $paid;

                    $supertotalamount += $travel;
                    $supertotaltax += $tax;
                    $supertotalpaid += $paid;

                    $lineitem = '"' . $row['dateapproved'] . '",' .
                                '"' . $row['id'] . '",' .
                                '"Travel",' .
                                '"' . $row['custfirstname'] .  " " . $row['custlastname'] . '",' .
                                '"' . $row['custaddress1'] . " " . $row['custaddress2'] . " " . $row['custcity'] . " " . $row['custstate'] . " " . $row['custpostcode'] . '",' .
                                '"$' . number_format($travel, 2) . '",' .
                                '"$' . number_format($tax, 2) . '",' .
                                '"$' . number_format($paid, 2) . '"' .
                                '';

                    fwrite($myfile, $lineitem);
                    fwrite($myfile, "\n");

                    fwrite($mysuperfile, '"' . $row['memberfirstname'] . " " . $row['memberlastname'] . '",' . $lineitem);
                    fwrite($mysuperfile, "\n");
                  }
                }

                
              }

              //The final rwo for the each member report. 
              if ($myfile !== false)
              {
                fwrite($myfile, '"","","","","Total","$' . number_format($totalamount, 2) . '","$' . number_format($totaltax, 2) . '","$' . number_format($totalpaid, 2) . '"');
                fclose($myfile);
              }

              //The final row for the full suppliers report. 
              fwrite($mysuperfile, '"","","","","","Total","$' . number_format($supertotalamount, 2) . '","$' . number_format($supertotaltax, 2) . '","$' . number_format($supertotalpaid, 2) . '"');
              fclose($mysuperfile);

              $rc = 0;
            }
            else
              $msg = "Unable to create totals report";
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
