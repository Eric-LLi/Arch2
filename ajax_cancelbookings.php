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
      $timberid = $_POST['timberid'];
      $propertyid = $_POST['propertyid'];
      $reportid = $_POST['reportid'];
      $oldreports = $_POST['oldreports'];;
      error_log("reportid: $reportid");
      error_log("propertyid: $propertyid ");
      error_log("timberid: $timberid ");
      error_log("old reports: $oldreports");
      $header = file_get_contents('Email_Header.html');
      $footer = file_get_contents('Email_Footer.html'); 
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      if($reportid == 3)
      {
        error_log("combined reports, and select timber one, itype is 3,used the propertyid as id to the search");
        $searchid = $propertyid;
        $updatepropertyid = $propertyid;
        $updatetimberid = SharedGetPostVar("bookingcode");
      }
      else if ($reportid == 24)
      {
        error_log("combined reports, select the property one, itype is 24,use its own id to the search");
        $searchid = SharedGetPostVar("bookingcode");
        $updatepropertyid = SharedGetPostVar("bookingcode");
        $updatetimberid = $timberid;
      }
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
                  "            left join bookings b2 on (b2.id = $updatetimberid) " .
                  "            left join users u2 on (b2.users_id=u2.id) " .
                  "where " .
                  "b1.id=$searchid";

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

              // Let customer know...
            if ($booking['custemail'] != "")
            {
            error_log('i am in sending email to customer');
            error_log($booking['custemail']);
            $html = file_get_contents('email_cancelreportnotification.html');
            $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
            $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
            $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html);
            $html = str_replace("XXX_HEADER", $header, $html);
            $html = str_replace("XXX_FOOTER", $footer, $html);
            $custemail = explode(",",$booking['custemail']);
            // SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $custemail, $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html);
            SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $custemail, $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - Combined Property Assessment & Timber Pest " . " Booking Cancellation Notification", $html);

            }

              //let architect/insespector knows
            if($reportid == 24)
            {
                if($oldreports == true)
                {
                    error_log('reportid is 24, select the property assessment report in the combined report need to send two emails, and these are the old types combined');
                    $architectemail = $booking['linked_archemail'];
                    $archfirstname = $booking['linked_archfirstname'];
                    $archlastname = $booking['linked_archlastname'];
                    
                    $inspectoremail = $booking['archemail'];
                    $inspectorfirstname = $booking['archfirstname'];
                    $inspectorlastname = $booking['archlastname'];

                    error_log("archfirstname: $archfirstname");
                    error_log("archlastname: $archlastname");
                    error_log("linked_archfirstname: $inspectorfirstname");
                    error_log("linked_archlastname: $inspectorlastname");
                    error_log("archemail: $architectemail");
                    error_log("linked_archemail: $inspectoremail");

                    if($architectemail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $architectemail, $archfirstname . ' ' . $archlastname, $updatepropertyid . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                    if($inspectoremail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $inspectoremail, $inspectorfirstname . ' ' . $inspectorlastname, $updatetimberid . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                }
                else
                {
                    error_log('reportid is 24, select the property assessment report in the combined report need to send two emails, and these are the new types combined');
                    $architectemail = $booking['archemail'];
                    $archfirstname = $booking['archfirstname'];
                    $archlastname = $booking['archlastname'];
                    $inspectoremail = $booking['linked_archemail'];
                    $inspectorfirstname = $booking['linked_archfirstname'];
                    $inspectorlastname = $booking['linked_archlastname'];
                    error_log("archfirstname: $archfirstname");
                    error_log("archlastname: $archlastname");
                    error_log("linked_archfirstname: $inspectorfirstname");
                    error_log("linked_archlastname: $inspectorlastname");
                    error_log("archemail: $architectemail");
                    error_log("linked_archemail: $inspectoremail");

                    if($architectemail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                    if($inspectoremail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                }
                
            }
            else if ($reportid == 3)
            {
                if($oldreports == true)
                {
                    error_log('reportid is 24, select the property assessment report in the combined report need to send two emails, and these are the old types combined');
                
                    $architectemail = $booking['archemail'];
                    $archfirstname = $booking['archfirstname'];
                    $archlastname = $booking['archlastname'];
                    $inspectoremail = $booking['linked_archemail'];
                    $inspectorfirstname = $booking['linked_archfirstname'];
                    $inspectorlastname = $booking['linked_archlastname'];

                    error_log("archfirstname: $archfirstname");
                    error_log("archlastname: $archlastname");
                    error_log("linked_archfirstname: $inspectorfirstname");
                    error_log("linked_archlastname: $inspectorlastname");
                    error_log("archemail: $architectemail");
                    error_log("linked_archemail: $inspectoremail");

                    if($architectemail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $archfirstname . ' ' . $archlastname, $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $updatepropertyid, $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[24], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $architectemail, $archfirstname . ' ' . $archlastname, $updatepropertyid . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                    if($inspectoremail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $inspectorfirstname . ' ' . $inspectorlastname, $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[3], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $inspectoremail, $inspectorfirstname . ' ' . $inspectorlastname, $updatetimberid . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                }
                else
                {
                    error_log('reportid is 24, select the property assessment report in the combined report need to send two emails, and these are the new types combined');
                    $architectemail = $booking['linked_archemail'];
                    $archfirstname = $booking['linked_archfirstname'];
                    $archlastname = $booking['linked_archlastname'];
                    
                    $inspectoremail = $booking['archemail'];
                    $inspectorfirstname = $booking['archfirstname'];
                    $inspectorlastname = $booking['archlastname'];
                    error_log("archfirstname: $archfirstname");
                    error_log("archlastname: $archlastname");
                    error_log("linked_archfirstname: $inspectorfirstname");
                    error_log("linked_archlastname: $inspectorlastname");
                    error_log("archemail: $architectemail");
                    error_log("linked_archemail: $inspectoremail");

                    if($architectemail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $architectemail, $archfirstname . ' ' . $archlastname, $updatepropertyid . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                    if($inspectoremail != "")
                    {
                        $html2 = file_get_contents('email_architectcancelnotification.html');
                        $html2 = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html2);
                        $html2 = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html2);
                        $html2 = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html2);
                        $html2 = str_replace("XXX_HEADER", $header, $html2);
                        $html2 = str_replace("XXX_FOOTER", $footer, $html2);
                        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $inspectoremail, $inspectorfirstname . ' ' . $inspectorlastname, $updatetimberid . " - " . $reportTypes[$booking['itype']] . " Booking Cancellation Notification", $html2);
                    }
                }
            }                    
        }

        error_log($linkBookingID);
        if($linkBookingID != '')
        {
          error_log("remove the bookings based on the link booking id");
          $propertydbupdate = "update bookings set " .
                                // "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                                "users_id=null," .
                                "datecancelled=CURRENT_TIMESTAMP," .
                                "userscancelled_id=$userid " .
                                "where " .
                                "id=$updatetimberid";
          $timberupdate = "update bookings set " .
                      // "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                      "users_id=null," .
                      "datecancelled=CURRENT_TIMESTAMP," .
                      "userscancelled_id=$userid " .
                      "where " .
                      "id=$updatepropertyid";
          if ($timberresult = SharedQuery($timberupdate, $dblink) && $propertyresult = SharedQuery($propertydbupdate, $dblink))
          {
            $rc = 0;
            $msg = "Booking has been cancelled";
          }
          else
          {
            $msg = "Error removing bookings...";
          } 
        }
        error_log($dbupdate);
        error_log($propertydbupdate);
         
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
