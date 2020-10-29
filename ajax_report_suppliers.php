<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();
  $batchno = 0;
  $newbatchno = 0;

  try
  {
    SharedBeginTx($dblink);
    if (isset($_POST['uuid']) && isset($_POST['batchno']) && isset($_POST['members']))
    {
      $batchno = $_POST['batchno'];
      $members = implode("','", $_POST['members']);
      $previousuuid = "";
      $reports = [];
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
        $rc = -1;

        $dbselect = "select b1.id,b1.itype,date_format(b1.dateapproved, '%d/%m/%Y') dateapproved,b1.commission,b1.travel,b1.spotter,b1.custfirstname,b1.custlastname,b1.custemail,b1.custaddress1,b1.custaddress2,b1.custcity,b1.custpostcode,b1.custstate,u1.uuid,u1.firstname memberfirstname,u1.lastname memberlastname,u1.gstinc from bookings b1 left join users u1 on (b1.users_id=u1.id) where b1.dateapproved is not null and b1.datecancelled is null and b1.dateclosed is null and b1.dateexpired is null and b1.batchnosuppliersreport=$batchno and u1.uuid in ('$members') order by u1.firstname,u1.lastname,b1.id";
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
              $ftmp = ($batchno == 0) ? $newbatchno : $batchno;
              $superfilename = "./tmp/Suppliers_" . $ftmp . ".csv";
              $reports[] = $superfilename;
              $mysuperfile = fopen($superfilename, "w");

              if ($mysuperfile !== false)
              {
                fwrite($mysuperfile, '"Member",' . $headings);
                fwrite($mysuperfile, "\n");

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
                      fwrite($myfile, '"","","","","Total","$' . number_format($totalamount, 2) . '","$' . number_format($totaltax, 2) . '","$' . number_format($totalpaid, 2) . '"');
                      fclose($myfile);
                    }

                    $filename = "./tmp/" . $membername . "_" . $ftmp . ".csv";
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

                    fwrite($myfile, $lineitem);
                    fwrite($myfile, "\n");

                    $spotter = floatval($spotter);
                    $travel = floatval($travel);

                    if ($spotter > 0.0)
                    {
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
                    }

                    if ($travel > 0.0)
                    {
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
                    }
                  }

                  fwrite($mysuperfile, '"' . $row['memberfirstname'] . " " . $row['memberlastname'] . '",' . $lineitem);
                  fwrite($mysuperfile, "\n");

                  if ($batchno == 0)
                  {
                    $dbupdate = "update bookings set batchnosuppliersreport=$newbatchno,lastrunsuppliersreport=current_timestamp where id=" . $row['id'];
                    SharedQuery($dbupdate, $dblink);
                  }
                }

                if ($myfile !== false)
                {
                  fwrite($myfile, '"","","","","Total","$' . number_format($totalamount, 2) . '","$' . number_format($totaltax, 2) . '","$' . number_format($totalpaid, 2) . '"');
                  fclose($myfile);
                }

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
