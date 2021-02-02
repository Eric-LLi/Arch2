<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['itype'])) 
    {
      // $page = isset($_POST['page']) ? intval($_POST['page']) : 0;
      // $row = isset($_POST['rows']) ? intval($_POST['rows']) : 10;
      // error_log($page);
      // error_log($row);
      $uuid = $_POST['uuid'];
      $itype = (int)$_POST['itype'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $bookingno = $_POST['bookingno'];
     
      // $pageNumber = ($_POST['pageNumber'] - 1);
      // $pageSize = $_POST['pageSize'];
      // $offset = $pageNumber * $pageSize;
      // error_log($offset);
      // error_log($pageSize);
      // error_log($selectedstatus);
      $clause ="where  b1.id = $bookingno or b2.id = $bookingno;";
    
    //   if ($itype != 99)
    //   {
    //     $clause = $clause . " " .   "b1.users_id=$userid and ";
        
    //   }
      error_log($clause);
    

      $dbselect = "select " .
                  "b1.id bookingcode," .
                  "b1.bookings_id linkedbookingcode," .
                  "b1.custfirstname," .
                  "b1.custlastname," .
                  "b1.custemail," .
                  "b1.custmobile," .
                  "b1.custphone," .
                  "b1.custaddress1," .
                  "b1.custaddress2," .
                  "b1.custcity," .
                  "b1.custpostcode," .
                  "b1.custstate," .

                  "b1.itype reportid," .
                  "b1.budget," .
                  "b1.commission," .
				          "b1.travel," .
                  "b1.spotter," .
                  "b1.cancellationfee," .
                  "b1.notes," .
                  "b1.clientnotes," .

                  "b1.numstories," .
                  "b1.numbedrooms," .
                  "b1.numbathrooms," .
                  "b1.numrooms," .
                  "b1.numoutbuildings," .
                  "b1.address1," .
                  "b1.address2," .
                  "b1.city," .
                  "b1.state," .
                  "b1.postcode," .
                  "b1.construction," .
                  "b1.age," .
                  "b1.meetingonsite," .
                  "b1.renoadvice," .
                  "b1.pestinspection," .

                  "b1.estateagentcompany," .
                  "b1.estateagentcontact," .
                  "b1.estateagentmobile," .
                  "b1.estateagentphone," .

                  "b1.cardname," .
                  "b1.cardno," .
                  "b1.cardccv2," .
                  "b1.cardexpiry," .

                  "b1.emailcount," .
                  "b1.lastemailed," .
                  "b1.invoicecount," .
                  "b1.lastinvoiced," .
                  "b1.datecompleted," .
                  "b1.datecancelled,".
                  "b1.dateapproved," .
                  "b1.datepaid," .
                  "b1.dateclosed," .

                  "b1.datecreated," .
                  "b1.datemodified," .

                  "b1.userscreated_id usercreatedid," .
                  "b1.usersmodified_id usermdifiedid," .

                  // Linked booking fro combined reports... (if any)
                  "b2.id linked_bookingcode," .

                  "u1.firstname usercreatedfirstname," .
                  "u1.lastname usercreatedlastname," .
                  "u1.itype usercreatetype, " .

                  "u2.firstname usermodifiedfirstname," .
                  "u2.lastname usermodifiedlastname," .

                  "u3.firstname archfirstname," .
                  "u3.lastname archlastname," .
                  "u3.email archemail," .
                  "u3.mobile archmobile," .
                  "u3.uuid archuuid," .
                  "u3.regno archregno," .
                  "u3.itype " .

                  "from " .
                  "bookings b1 left join users u1 on (b1.userscreated_id=u1.id) " .
                  "            left join users u2 on (b1.usersmodified_id=u2.id) " .
                  "            left join bookings b2 on (b1.id=b2.bookings_id) " .
                  "            left join users u3 on (b1.users_id=u3.id) " .
                  $clause;
      error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
            
          while ($dbrow = SharedFetchArray($dbresult))
            $rows[] = $dbrow;
            if(count($rows) == 1) // if the result is 1, check the linked_bookingcode column is if null
            {
                if($rows[0]['linked_bookingcode'] != null)
                {
                    error_log($rows[0]['linked_bookingcode']);
                    //has linked booking code, need to get the other booking, select again. 
                    $linkedbookingno = $rows[0]['linked_bookingcode'];
                    $dbselect2 = "select " .
                        "b1.id bookingcode," .
                        "b1.bookings_id linkedbookingcode," .
                        "b1.custfirstname," .
                        "b1.custlastname," .
                        "b1.custemail," .
                        "b1.custmobile," .
                        "b1.custphone," .
                        "b1.custaddress1," .
                        "b1.custaddress2," .
                        "b1.custcity," .
                        "b1.custpostcode," .
                        "b1.custstate," .

                        "b1.itype reportid," .
                        "b1.budget," .
                        "b1.commission," .
                                "b1.travel," .
                                "b1.spotter," .
                        "b1.notes," .

                        "b1.numstories," .
                        "b1.numbedrooms," .
                        "b1.numbathrooms," .
                        "b1.numrooms," .
                        "b1.numoutbuildings," .
                        "b1.address1," .
                        "b1.address2," .
                        "b1.city," .
                        "b1.state," .
                        "b1.postcode," .
                        "b1.construction," .
                        "b1.age," .
                        "b1.meetingonsite," .
                        "b1.renoadvice," .
                        "b1.pestinspection," .

                        "b1.estateagentcompany," .
                        "b1.estateagentcontact," .
                        "b1.estateagentmobile," .
                        "b1.estateagentphone," .

                        "b1.cardname," .
                        "b1.cardno," .
                        "b1.cardccv2," .
                        "b1.cardexpiry," .

                        "b1.emailcount," .
                        "b1.lastemailed," .
                        "b1.invoicecount," .
                        "b1.lastinvoiced," .
                        "b1.datecompleted," .
                        "b1.datecancelled,".
                        "b1.dateapproved," .
                        "b1.datepaid," .
                        "b1.dateclosed," .

                        "b1.datecreated," .
                        "b1.datemodified," .

                        "b1.userscreated_id usercreatedid," .
                        "b1.usersmodified_id usermdifiedid," .

                        // Linked booking fro combined reports... (if any)
                        "b2.id linked_bookingcode," .

                        "u1.firstname usercreatedfirstname," .
                        "u1.lastname usercreatedlastname," .
                        "u1.itype usercreatetype, " .

                        "u2.firstname usermodifiedfirstname," .
                        "u2.lastname usermodifiedlastname," .

                        "u3.firstname archfirstname," .
                        "u3.lastname archlastname," .
                        "u3.email archemail," .
                        "u3.mobile archmobile," .
                        "u3.uuid archuuid," .
                        "u3.regno archregno," .
                        "u3.itype " .

                        "from " .
                        "bookings b1 left join users u1 on (b1.userscreated_id=u1.id) " .
                        "            left join users u2 on (b1.usersmodified_id=u2.id) " .
                        "            left join bookings b2 on (b1.id=b2.bookings_id) " .
                        "            left join users u3 on (b1.users_id=u3.id) " .
                        "where b1.id = $linkedbookingno;";
                    if($dbresult2 = SharedQuery($dbselect2,$dblink))
                    {
                        if($numrows = SharedNumRows($dbresult2))
                        {
                            while($dbrow2 = SharedFetchArray($dbresult2))
                            {
                                array_push($rows,$dbrow2);
                                error_log(count($rows));
                            }
                        }
                    }
                    
                
                
                }
            }
          $rc = 0;
        }
        else
        {
            error_log($numrows);
            $msg = "Could not find any matching bookings";
        }
         
      }
      else
        $msg = "Unable to fetch list of bookings...";
    }
  }

  catch (Exception $e)
  {
    $msg = "3.Unable to fetch bookings...";
  }

  // $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows,"total" => 60); //The total is for the total row in the database, should use count(*) to get the exact number of rows
  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows);

  $json = json_encode($response);
  echo $json;
?>
