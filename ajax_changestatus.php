<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  global $footer; 
  global $header;
global $reportTypes;

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
    {
      $uuid = $_POST['uuid'];
      $bookingcode = $_POST['bookingcode'];
      $header = file_get_contents('Email_Header.html');
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $linkBookingID = '';
      $bookings_id = '';
      $dbselect = "select " .
                  "b1.id bookingcode," .
                  "b1.bookings_id," .
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
                  "b1.notes," .
                  "b1.meetingonsite," .
                  "b1.renoadvice," .
                  "b1.pestinspection," .
                  "b1.commission," .
                  

                  "b1.estateagentcompany," .
                  "b1.estateagentcontact," .
                  "b1.estateagentmobile," .
                  "b1.estateagentphone," .

                  "b1.itype," .
                  "u1.itype usertype," .
                  "u1.email archemail," .
                  "u1.firstname archfirstname," .
                  "u1.lastname archlastname," .

                  "u1.address1 archaddress1," .
                  "u1.address2 archaddress2," .
                  "u1.city archcity," .
                  "u1.state archstate," .
                  "u1.postcode archpostcode," .
                  "u1.regno archregno," .
                  "u1.company regcompany," .
                  "u1.phone archphone," .
                  "u1.mobile archmobile," .

                  // Linked booking fro combined reports... (if any)
                  "b2.id linked_bookingcode," .
                  "b2.itype linked_itype," .
                  "u2.itype linked_usertype," .
                  "u2.email linked_archemail," .
                  "u2.firstname linked_archfirstname," .
                  "u2.lastname linked_archlastname," .

                  "u2.address1 linked_archaddress1," .
                  "u2.address2 linked_archaddress2," .
                  "u2.city linked_archcity," .
                  "u2.state linked_archstate," .
                  "u2.postcode linked_archpostcode," .
                  "u2.regno linked_archregno," .
                  "u2.company linked_regcompany," .
                  "u2.phone linked_archphone," .
                  "u2.mobile linked_archmobile " .

                  "from " .
                  "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
                  "            left join bookings b2 on (b1.id=b2.bookings_id) " .
                  "            left join users u2 on (b2.users_id=u2.id) " .
                  "where " .
                  "b1.id=$bookingcode";

        error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          $booking = null;
          
          while ($dbrow = SharedFetchArray($dbresult))
              $booking = $dbrow;
              //error_log($booking['archemail']);
              $bookings_id = $booking["bookings_id"];
              $linkBookingID = $booking['linked_bookingcode'];
              $workstate = $booking['state'];//the property's state, not the client's living state. 
              if($workstate == 'NSW')
              {
                  $footer = file_get_contents('Email_Footer_NSW.html');
              }
              elseif($workstate == 'SA')
              {
                $footer = file_get_contents('Email_Footer_SA.html');
              }
              else
              {
                  $footer = file_get_contents('Email_Footer.html'); 
              }

              //Footer , get current year. 
              $currentyear = date("Y");
              $footer = str_replace("XXX_YEAR",$currentyear,$footer);
              
              // Let client know...
               if ($booking['custemail'] != "")
              {
                error_log('i am in sending email to client');
                error_log($booking['custemail']);
                $html = file_get_contents('email_cancelreportnotification.html');
                $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
                $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
                $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html);
                $html = str_replace("XXX_HEADER", $header, $html);
                $html = str_replace("XXX_FOOTER", $footer, $html);
                $custemail = explode(",",$booking['custemail']);
                SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $custemail, $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html);
              }

              //let architect/insespector knows
             if ($booking['archemail'] != "")
              {
          
                if($booking['linked_bookingcode'] != "")//select the property assessment report in the combined report.after joined select, the result contains the linked timber report.  
                {
                  error_log('select the property assessment report in the combined report need to send two emails');
                  $linkBookingID = $booking['linked_bookingcode'];
                  error_log($booking['archfirstname']);
                  error_log($booking['archlastname']);
                  error_log($booking['linked_archfirstname']);
                  error_log($booking['linked_archlastname']);
                  error_log($booking['archemail']);
                  error_log($booking['linked_archemail']);
                  // Architect notification...
                  $html2 = file_get_contents('email_architectcancelnotification.html');
                  $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                  $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                  $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                  $html2 = str_replace("XXX_HEADER", $header, $html2);
                  $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                  SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                  
                  //Insepctor Notification
                  $html1 = file_get_contents('email_architectcancelnotification.html');
                  $html1 = str_replace("XXX_ARCHITECTNAME", $booking['linked_archfirstname'] . ' ' . $booking['linked_archlastname'], $html1);
                  $html1 = str_replace("XXX_BOOKINGCODE", $booking['linked_bookingcode'], $html1);//the timber report has its own booking code
                  $html1 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['linked_itype']], $html1);
                  $html1 = str_replace("XXX_HEADER", $header, $html1);
                  $html1 = str_replace("XXX_FOOTER", $footer, $html1);
                  SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['linked_archemail'], $booking['linked_archfirstname'] . ' ' . $booking['linked_archlastname'], $booking['linked_bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html1);
                }
                else if($booking["bookings_id"] != "")//select the timber report in the comibined reports, the booking will have the bookings_id for its linked property assessment report. 
                {
                  error_log("select the timber report in the combine dreport, need to send two emails");
                  error_log($booking['archfirstname']);
                  error_log($booking['archlastname']);
                  error_log($booking['linked_archfirstname']);
                  error_log($booking['linked_archlastname']);
                  error_log($booking['archemail']);
                  error_log($booking['linked_archemail']);
                  $bookings_id = $booking["bookings_id"];
                  //*****This select is to get the booking for property assessment report */
                  $dbselectlinkedbooking = "select " .
                    "b1.id bookingcode," .
                    "b1.bookings_id," .
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
                    "b1.notes," .
                    "b1.meetingonsite," .
                    "b1.renoadvice," .
                    "b1.pestinspection," .
                    "b1.commission," .
                    

                    "b1.estateagentcompany," .
                    "b1.estateagentcontact," .
                    "b1.estateagentmobile," .
                    "b1.estateagentphone," .

                    "b1.itype," .
                    "u1.itype usertype," .
                    "u1.email archemail," .
                    "u1.firstname archfirstname," .
                    "u1.lastname archlastname," .

                    "u1.address1 archaddress1," .
                    "u1.address2 archaddress2," .
                    "u1.city archcity," .
                    "u1.state archstate," .
                    "u1.postcode archpostcode," .
                    "u1.regno archregno," .
                    "u1.company regcompany," .
                    "u1.phone archphone," .
                    "u1.mobile archmobile," .

                    // Linked booking fro combined reports... (if any)
                    "b2.id linked_bookingcode," .
                    "b2.itype linked_itype," .
                    "u2.itype linked_usertype," .
                    "u2.email linked_archemail," .
                    "u2.firstname linked_archfirstname," .
                    "u2.lastname linked_archlastname," .

                    "u2.address1 linked_archaddress1," .
                    "u2.address2 linked_archaddress2," .
                    "u2.city linked_archcity," .
                    "u2.state linked_archstate," .
                    "u2.postcode linked_archpostcode," .
                    "u2.regno linked_archregno," .
                    "u2.company linked_regcompany," .
                    "u2.phone linked_archphone," .
                    "u2.mobile linked_archmobile " .

                    "from " .
                    "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
                    "            left join bookings b2 on (b1.id=b2.bookings_id) " .
                    "            left join users u2 on (b2.users_id=u2.id) " .
                    "where " .
                    "b1.id=$bookings_id";
                  error_log($dbselectlinkedbooking);
                  if ($dbresult2 = SharedQuery($dbselectlinkedbooking, $dblink))
                  {
                    if($numrows = SharedNumRows($dbresult))
                    {
                      $booking2 = null;
                      while($dbrow2 = SharedFetchArray($dbresult2))
                      $booking2 = $dbrow2;/**This bookings is the booking detailed for the linked property assessment report */
                      error_log($booking2['archfirstname']);
                      error_log($booking2['archlastname']);
                      error_log($booking2['archemail']);

                      //Notify the inspector
                      $html2 = file_get_contents('email_architectcancelnotification.html');
                      $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                      $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                      $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                      $html2 = str_replace("XXX_HEADER", $header, $html2);
                      $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                      SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);

                      //notify the architect
                      $html1 = file_get_contents('email_architectcancelnotification.html');
                      $html1 = str_replace("XXX_ARCHITECTNAME", $booking2['archfirstname'] . ' ' . $booking2['archlastname'], $html1);
                      $html1 = str_replace("XXX_BOOKINGCODE", $booking2['bookingcode'], $html1);
                      $html1 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking2['itype']], $html1);
                      $html1 = str_replace("XXX_HEADER", $header, $html1);
                      $html1 = str_replace("XXX_FOOTER", $footer, $html1);
                      SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking2['archemail'], $booking2['archfirstname'] . ' ' . $booking2['archlastname'], $booking2['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html1);
                    }
                  }

                }
                else
                {
                  //single report, only need to send one email
                  error_log("only select one single report");
                  $html = file_get_contents('email_architectcancelnotification.html');
                  $html = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html);
                  $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
                  $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html);
                  $html = str_replace("XXX_HEADER", $header, $html);
                  $html = str_replace("XXX_FOOTER", $footer, $html);
                  SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html);
                }
                
              }
            error_log($booking['linked_bookingcode']);
            error_log($booking["bookings_id"]);      
            error_log($bookings_id);  
            error_log($linkBookingID);         
        }

        error_log($linkBookingID);
        if($linkBookingID != '')
        {
          error_log("remove the bookings based on the link booking id");
          $dbupdate2 = "update bookings set " .
                      "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                      "datecancelled=CURRENT_TIMESTAMP," .
                      "userscancelled_id=$userid " .
                      "where " .
                      "id=$linkBookingID";
          $dbupdate = "update bookings set " .
                      "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                      "datecancelled=CURRENT_TIMESTAMP," .
                      "userscancelled_id=$userid " .
                      "where " .
                      "id=$bookingcode";
          if ($dbresult2 = SharedQuery($dbupdate, $dblink) && $dbresult3 = SharedQuery($dbupdate2, $dblink))
          {
            $rc = 0;
            $msg = "Booking has been cancelled";
          }
          else
          {
            $msg = "Error removing booking...";
          } 
        }
        else if($bookings_id != '')
        {
            error_log("remove the bookings based on the bookings_id");
            $dbupdate2 = "update bookings set " .
                        "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                        "datecancelled=CURRENT_TIMESTAMP," .
                        "userscancelled_id=$userid " .
                        "where " .
                        "id=$bookings_id";
            $dbupdate = "update bookings set " .
                        "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                        "datecancelled=CURRENT_TIMESTAMP," .
                        "userscancelled_id=$userid " .
                        "where " .
                        "id=$bookingcode";
            if ($dbresult2 = SharedQuery($dbupdate, $dblink) && $dbresult3 = SharedQuery($dbupdate2, $dblink))
            {
              $rc = 0;
              $msg = "Booking has been cancelled";
            }
            else
            {
              $msg = "Error removing booking...";
            }   
        } 
        else
        {
          error_log('not a combined report');
            $dbupdate = "update bookings set " .
                        "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                        "datecancelled=CURRENT_TIMESTAMP," .
                        "userscancelled_id=$userid " .
                        "where " .
                        "id=$bookingcode";
            if ($dbresult2 = SharedQuery($dbupdate, $dblink))
            {
              $rc = 0;
              $msg = "Booking has been cancelled";
            }
            else
            {
              $msg = "Error removing booking...";
            }  
        }
        error_log($dbupdate);
        error_log($dbupdate2);
         
      }
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to remove booking...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
