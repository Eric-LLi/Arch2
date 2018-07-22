<?php
  require_once("shared.php");

  global $reportTypes;
  global $reportfiles;
  global $reportemails;
  global $userTypes;
  global $footer; 
  global $header;

  $rc = -1;
  $msg = "";
  $booking = Array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
    {
      $uuid = $_POST['uuid'];
      $bookingcode = $_POST['bookingcode'];

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbselect = "select " .
                  "b1.id bookingcode," .
                  "b1.bookings_id," .
                  "b1.code bc," .
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
          while ($dbrow = SharedFetchArray($dbresult))
            $booking = $dbrow;

            $bookings_id = $booking["bookings_id"];
            $linkBookingID = $booking['linked_bookingcode'];

            if($booking['linked_bookingcode'] != "")//select the property assessment report in the combined report.after joined select, the result contains the linked timber report.  
            {
              error_log('select the property assessment report in the combined report need to send two emails');
              $emailtemplate = $reportemails[3];
              error_log($emailtemplate);
              $html = file_get_contents($emailtemplate);

              //Get the contents of the footer and header to the variables. 
              $header = file_get_contents('Email_Header.html');
              $footer = file_get_contents('Email_Footer.html'); 
              $html = str_replace("XXX_HEADER", $header, $html);
              $html = str_replace("XXX_FOOTER", $footer, $html);

              $html = str_replace("XXX_DATE", date("l jS \of F Y"), $html);
              $html = str_replace("XXX_CUSTFIRSTLASTNAME", $booking['custfirstname'] . " " . $booking['custlastname'], $html);
              $html = str_replace("XXX_CUSTADDRESS1", $booking['custaddress1'], $html);
              // error_log("***********************");
              // error_log($booking['custaddress1']);
              // error_log('custaddress1');
              $html = str_replace("XXX_CUSTADDRESS2", $booking['custaddress2'], $html);
              $html = str_replace("XXX_CUSTCITY", $booking['custcity'], $html);
              $html = str_replace("XXX_CUSTSTATE", $booking['custstate'], $html);
              $html = str_replace("XXX_CUSTPOSTCODE", $booking['custpostcode'], $html);
              $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
              $html = str_replace("XXX_CUSTEMAIL", $booking['custemail'], $html);
              $html = str_replace("XXX_PROPADDRESS1", $booking['address1'], $html);
              $html = str_replace("XXX_PROPADDRESS2", $booking['address2'], $html);
              $html = str_replace("XXX_PROPCITY", $booking['city'], $html);
              $html = str_replace("XXX_PROPSTATE", $booking['state'], $html);
              $html = str_replace("XXX_ESTATEAGENTCOMPANY", $booking['estateagentcompany'], $html);
              $html = str_replace("XXX_ESTATEAGENTCONTACT", $booking['estateagentcontact'], $html);
              $html = str_replace("XXX_ESTATEAGENTMOBILE", $booking['estateagentmobile'], $html);
              $html = str_replace("XXX_ESTATEAGENTPHONE", $booking['estateagentphone'], $html);
              $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
              $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html);
              $html = str_replace("XXX_CUSTMOBILE", $booking['custmobile'], $html);
              $html = str_replace("XXX_CUSTPHONE", $booking['custphone'], $html);
              $html = str_replace("XXX_PROPPOSTCODE", $booking['postcode'], $html);
              $html = str_replace("XXX_COMMISSION", $booking['commission'], $html);
              $html = str_replace("XXX_STOREYS", $booking['numstories'], $html);
              $html = str_replace("XXX_BEDROOMS", $booking['numbedrooms'], $html);
              $html = str_replace("XXX_BATHROOMS", $booking['numbathrooms'], $html);
              $html = str_replace("XXX_ROOMS", $booking['numrooms'], $html);
              $html = str_replace("XXX_OUTBUILDINGS", $booking['numoutbuildings'], $html);
              $html = str_replace("XXX_CONSTRUCTION", $booking['notes'], $html);
              $html = str_replace("XXX_PROPERTYPE", $booking['age'], $html);
              $html = str_replace("XXX_SITEMEETING", ($booking['meetingonsite'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_ADVICE", ($booking['renoadvice'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_INSPECTION", ($booking['pestinspection'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_NOTE", $booking['notes'], $html);
              $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
              $html = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . " " . $booking['archlastname'], $html);
              $html = str_replace("XXX_ARCHITECTPHONE", $booking['archmobile'], $html);
              $html = str_replace("XXX_ITYPENAME", $userTypes[$booking['usertype']], $html);

              $link = "http://www.archicentreaustraliainspections.com/mybooking.php?bc=" . $booking['bc'];
              $html = str_replace("XXX_LINKREPORT", $link, $html);
              $reportPath1 = './pdfreport/'.$bookingcode.".pdf";
              error_log("the report path for the selected report is " . $reportPath1);
              $linkBookingID = $booking['linked_bookingcode'];
              $reportPath2 = './pdfreport/'.$linkBookingID.".pdf";
              error_log("the report path for the combined timber report is " . $reportPath2);
              $reportList = array($reportPath1,$reportPath2);
              SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Architect/Inspector Report ", $html,"", "", $reportList);
            }
            else if($booking["bookings_id"] != "")//select the timber report in the comibined reports, the booking will have the bookings_id for its linked property assessment report. 
            {
              error_log("select the timber report in the combine dreport, need to find the other booking id for the property assessment report");
              $linkBookingID = $booking["bookings_id"];
            
              $emailtemplate = $reportemails[3];
              error_log($emailtemplate);
              $html = file_get_contents($emailtemplate);
              //Get the contents of the footer and header to the variables. 
              $header = file_get_contents('Email_Header.html');
              $footer = file_get_contents('Email_Footer.html'); 
              $html = str_replace("XXX_HEADER", $header, $html);
              $html = str_replace("XXX_FOOTER", $footer, $html);

              $html = str_replace("XXX_DATE", date("l jS \of F Y"), $html);
              $html = str_replace("XXX_CUSTFIRSTLASTNAME", $booking['custfirstname'] . " " . $booking['custlastname'], $html);
              $html = str_replace("XXX_CUSTADDRESS1", $booking['custaddress1'], $html);
              // error_log("***********************");
              // error_log($booking['custaddress1']);
              // error_log('custaddress1');
              $html = str_replace("XXX_CUSTADDRESS2", $booking['custaddress2'], $html);
              $html = str_replace("XXX_CUSTCITY", $booking['custcity'], $html);
              $html = str_replace("XXX_CUSTSTATE", $booking['custstate'], $html);
              $html = str_replace("XXX_CUSTPOSTCODE", $booking['custpostcode'], $html);
              $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
              $html = str_replace("XXX_CUSTEMAIL", $booking['custemail'], $html);
              $html = str_replace("XXX_PROPADDRESS1", $booking['address1'], $html);
              $html = str_replace("XXX_PROPADDRESS2", $booking['address2'], $html);
              $html = str_replace("XXX_PROPCITY", $booking['city'], $html);
              $html = str_replace("XXX_PROPSTATE", $booking['state'], $html);
              $html = str_replace("XXX_ESTATEAGENTCOMPANY", $booking['estateagentcompany'], $html);
              $html = str_replace("XXX_ESTATEAGENTCONTACT", $booking['estateagentcontact'], $html);
              $html = str_replace("XXX_ESTATEAGENTMOBILE", $booking['estateagentmobile'], $html);
              $html = str_replace("XXX_ESTATEAGENTPHONE", $booking['estateagentphone'], $html);
              $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
              $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html);
              $html = str_replace("XXX_CUSTMOBILE", $booking['custmobile'], $html);
              $html = str_replace("XXX_CUSTPHONE", $booking['custphone'], $html);
              $html = str_replace("XXX_PROPPOSTCODE", $booking['postcode'], $html);
              $html = str_replace("XXX_COMMISSION", $booking['commission'], $html);
              $html = str_replace("XXX_STOREYS", $booking['numstories'], $html);
              $html = str_replace("XXX_BEDROOMS", $booking['numbedrooms'], $html);
              $html = str_replace("XXX_BATHROOMS", $booking['numbathrooms'], $html);
              $html = str_replace("XXX_ROOMS", $booking['numrooms'], $html);
              $html = str_replace("XXX_OUTBUILDINGS", $booking['numoutbuildings'], $html);
              $html = str_replace("XXX_CONSTRUCTION", $booking['notes'], $html);
              $html = str_replace("XXX_PROPERTYPE", $booking['age'], $html);
              $html = str_replace("XXX_SITEMEETING", ($booking['meetingonsite'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_ADVICE", ($booking['renoadvice'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_INSPECTION", ($booking['pestinspection'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_NOTE", $booking['notes'], $html);
              $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
              $html = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . " " . $booking['archlastname'], $html);
              $html = str_replace("XXX_ARCHITECTPHONE", $booking['archmobile'], $html);
              $html = str_replace("XXX_ITYPENAME", $userTypes[$booking['usertype']], $html);

              $link = "http://www.archicentreaustraliainspections.com/mybooking.php?bc=" . $booking['bc'];
              $html = str_replace("XXX_LINKREPORT", $link, $html);
              $reportPath1 = './pdfreport/'.$bookingcode.".pdf";
              error_log("the report path for the timber report is " . $reportPath1);
              $reportPath2 = './pdfreport/'.$linkBookingID.".pdf";
              error_log("the report path for the property assessment report is " . $reportPath2);
              $reportList = array($reportPath1,$reportPath2);
              SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Architect/Inspector Report ", $html,"", "", $reportList);
            }
            else
            {
              //single report, only need to send one email
              $emailtemplate = $reportemails[$booking['itype']];
              error_log($emailtemplate);
              $html = file_get_contents($emailtemplate);

              //Get the contents of the footer and header to the variables. 
              $header = file_get_contents('Email_Header.html');
              $footer = file_get_contents('Email_Footer.html'); 
              $html = str_replace("XXX_HEADER", $header, $html);
              $html = str_replace("XXX_FOOTER", $footer, $html);

              $html = str_replace("XXX_DATE", date("l jS \of F Y"), $html);
              $html = str_replace("XXX_CUSTFIRSTLASTNAME", $booking['custfirstname'] . " " . $booking['custlastname'], $html);
              $html = str_replace("XXX_CUSTADDRESS1", $booking['custaddress1'], $html);
              // error_log("***********************");
              // error_log($booking['custaddress1']);
              // error_log('custaddress1');

              $html = str_replace("XXX_CUSTADDRESS2", $booking['custaddress2'], $html);
              $html = str_replace("XXX_CUSTCITY", $booking['custcity'], $html);
              $html = str_replace("XXX_CUSTSTATE", $booking['custstate'], $html);
              $html = str_replace("XXX_CUSTPOSTCODE", $booking['custpostcode'], $html);
              $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
              $html = str_replace("XXX_CUSTEMAIL", $booking['custemail'], $html);
              $html = str_replace("XXX_PROPADDRESS1", $booking['address1'], $html);
              $html = str_replace("XXX_PROPADDRESS2", $booking['address2'], $html);
              $html = str_replace("XXX_PROPCITY", $booking['city'], $html);
              $html = str_replace("XXX_PROPSTATE", $booking['state'], $html);
              $html = str_replace("XXX_ESTATEAGENTCOMPANY", $booking['estateagentcompany'], $html);
              $html = str_replace("XXX_ESTATEAGENTCONTACT", $booking['estateagentcontact'], $html);
              $html = str_replace("XXX_ESTATEAGENTMOBILE", $booking['estateagentmobile'], $html);
              $html = str_replace("XXX_ESTATEAGENTPHONE", $booking['estateagentphone'], $html);
              $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
              $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html);
              $html = str_replace("XXX_CUSTMOBILE", $booking['custmobile'], $html);
              $html = str_replace("XXX_CUSTPHONE", $booking['custphone'], $html);
              $html = str_replace("XXX_PROPPOSTCODE", $booking['postcode'], $html);
              $html = str_replace("XXX_COMMISSION", $booking['commission'], $html);
              $html = str_replace("XXX_STOREYS", $booking['numstories'], $html);
              $html = str_replace("XXX_BEDROOMS", $booking['numbedrooms'], $html);
              $html = str_replace("XXX_BATHROOMS", $booking['numbathrooms'], $html);
              $html = str_replace("XXX_ROOMS", $booking['numrooms'], $html);
              $html = str_replace("XXX_OUTBUILDINGS", $booking['numoutbuildings'], $html);
              $html = str_replace("XXX_CONSTRUCTION", $booking['notes'], $html);
              $html = str_replace("XXX_PROPERTYPE", $booking['age'], $html);
              $html = str_replace("XXX_SITEMEETING", ($booking['meetingonsite'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_ADVICE", ($booking['renoadvice'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_INSPECTION", ($booking['pestinspection'] == 0) ? "No" : "Yes", $html);
              $html = str_replace("XXX_NOTE", $booking['notes'], $html);
              $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
              $html = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . " " . $booking['archlastname'], $html);
              $html = str_replace("XXX_ARCHITECTPHONE", $booking['archmobile'], $html);
              $html = str_replace("XXX_ITYPENAME", $userTypes[$booking['usertype']], $html);

              $link = "http://www.archicentreaustraliainspections.com/mybooking.php?bc=" . $booking['bc'];
              $html = str_replace("XXX_LINKREPORT", $link, $html);
              $reportPath = './pdfreport/'.$bookingcode.".pdf";
              error_log("the report path is " . $reportPath);

              error_log("only select one single report");
              SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Architect/Inspector Report ", $html,"", "", $reportPath);
            }
          // $fileName = $bookingcode."."."pdf";
          // $fileDestination = './pdfreport/'.$fileName;
          
          // error_log($fileDestination);
          // $pdf = file_get_contents($fileDestination);
          //($from, $fromName, $to, $toName, $subject, $msg, $cc = "", $ccName = "", $attachment = "")
          // error_log($gConfig['adminemail']);
          // error_log($booking['custemail']);
          //SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Architect/Inspector Report ", $html);

          // Now update email count and date...
          $dbupdate = "update bookings set lastemailed=current_timestamp,emailcount=emailcount+1 where id=$bookingcode";
          SharedQuery($dbupdate, $dblink);

          $rc = 0;
          $msg = "Send email to customer successfully";
        }
        else
          $msg = "Unable to fetch booking details...";
      }
      else
        $msg = "Unable toquery for booking...";
    }
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch booking...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "booking" => $booking);
  $json = json_encode($response);
  echo $json;
?>
