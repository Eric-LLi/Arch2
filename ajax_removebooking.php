<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
    {
      $uuid = $_POST['uuid'];
      $bookingcode = $_POST['bookingcode'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbupdate = "update bookings set " .
                  "users_id=" . SharedNullOrNum($id, $dblink) . "," .
                  "dateexpired=CURRENT_TIMESTAMP," .
                  "usersexpired_id=$userid " .
                  "where " .
                  "id=$bookingcode";
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
      {
        $rc = 0;

        // Fetch booking details so we can email customer...
        $dbselect = "select " .
                    "b1.id bookingcode," .
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
        if ($dbresult = SharedQuery($dbselect, $dblink))
        {
          if ($numrows = SharedNumRows($dbresult))
          {
            $booking = null;
            while ($dbrow = SharedFetchArray($dbresult))
              $booking = $dbrow;

            // Let customer know...
            // if ($booking['custemail'] != "")
            // {
            //   $emailtemplate = $reportconfirmemails[$booking['itype']];
            //   $html = file_get_contents('email_architectallocation.html');
            //   $html = doMacros($html, $booking);

            //   SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], "Assessment/Inspection Confirmation", $html);
            // }

            // Let architect/inspector know...
            // if ($booking['linked_bookingcode'] != "")
            // {
            //   // Special case combined report - need to send separate emails to architect/inspector and let them know about each other...
            //   if ($booking['itype'] == 3)
            //   {
            //     // Architect notification...
            //     $html1 = file_get_contents('email_comboarchitectnotification.html');
            //     $html1 = doMacros($html1, $booking);
            //     SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], "Assessment/Inspection Confirmation", $html1);

            //     // Inspector notification...
            //     $html2 = file_get_contents('email_comboinspectornotification.html');
            //     $html2 = doMacros($html2, $booking);
            //     SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['linked_archemail'], $booking['linked_archfirstname'] . ' ' . $booking['linked_archlastname'], "Timber Inspection Confirmation", $htm2);
            //   }
            // }
            if ($booking['archemail'] != "")
            {
              //single report, only need to send one email
              $html = file_get_contents('email_architectcancelnotification');
              //$html = doMacros($html, $booking);
              $html = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $h);

              SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode']. ' ' . "Booking Cancellation", $html);
            }
          }
        }
      }
      else
        $msg = "Error removing booking...";
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
