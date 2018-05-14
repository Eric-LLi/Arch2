<?php
  require_once("shared.php");
//  include 'ChromePhp.php';
  global $reportTypes;
  global $userTypes;
  global $footer; 
  global $header;

  function doMacros($h, $b)
  {
    global $reportTypes;
    global $userTypes;

    //Get the contents of the footer and header to the variables. 
    $header = file_get_contents('Email_Header.html');
    $footer = file_get_contents('Email_Footer.html'); 
    $h = str_replace("XXX_HEADER", $header, $h);
    $h = str_replace("XXX_FOOTER", $footer, $h);

    $h = str_replace("XXX_ARCHITECTNAME", $b['linked_firstname'] . ' ' . $b['linked_lastname'], $h);
    $h = str_replace("XXX_ARCHITECTPHONE", $b['linked_mobile'], $h);

    $h = str_replace("XXX_BOOKINGCODE", $b['linked_bookingcode'], $h);
//      ChromePhp::log($b);
//      error_log($b);
//    $h = str_replace("XXX_COMBOBOOKINGCODE", $b['linked_bookingcode'], $h);
    $h = str_replace("XXX_COMBOBOOKINGCODE", $b['bookingcode'], $h);
    $h = str_replace("XXX_CUSTFIRSTLASTNAME", $b['custfirstname'] . ' ' . $b['custlastname'], $h);
    $h = str_replace("XXX_CUSTFIRSTNAME", $b['custfirstname'], $h);
    $h = str_replace("XXX_CUSTADDRESS1", $b['custaddress1'], $h);
    $h = str_replace("XXX_CUSTADDRESS2", $b['custaddress2'], $h);
    $h = str_replace("XXX_CUSTCITY", $b['custcity'], $h);
    $h = str_replace("XXX_CUSTSTATE", $b['custstate'], $h);
    $h = str_replace("XXX_CUSTPOSTCODE", $b['custpostcode'], $h);
    $h = str_replace("XXX_CUSTPHONE", $b['custphone'], $h);
    $h = str_replace("XXX_CUSTMOBILE", $b['custmobile'], $h);
    $h = str_replace("XXX_CUSTEMAIL", $b['custemail'], $h);
    $h = str_replace("XXX_PROPADDRESS1", $b['address1'], $h);
    $h = str_replace("XXX_PROPADDRESS2", $b['address2'], $h);
    $h = str_replace("XXX_PROPCITY", $b['city'], $h);
    $h = str_replace("XXX_PROPSTATE", $b['state'], $h);
    $h = str_replace("XXX_PROPPOSTCODE", $b['postcode'], $h);
    $h = str_replace("XXX_REPORTTYPE", $reportTypes[$b['itype']], $h);

    $h = str_replace("XXX_ESTATEAGENTCOMPANY", $b['estateagentcompany'], $h);
    $h = str_replace("XXX_ESTATEAGENTCONTACT", $b['estateagentcontact'], $h);
    $h = str_replace("XXX_ESTATEAGENTMOBILE", $b['estateagentmobile'], $h);
    $h = str_replace("XXX_ESTATEAGENTPHONE", $b['estateagentphone'], $h);
    $h = str_replace("XXX_SITEMEETING", $b['meetingonsite'], $h);
    $h = str_replace("XXX_COMMISSION", $b['commission'], $h);
    $h = str_replace("XXX_STOREYS", $b['numstories'], $h);
    $h = str_replace("XXX_BEDROOMS", $b['numbedrooms'], $h);
    $h = str_replace("XXX_BATHROOMS", $b['numbathrooms'], $h);
    $h = str_replace("XXX_ROOMS", $b['numrooms'], $h);
    $h = str_replace("XXX_OUTBUILDINGS", $b['numoutbuildings'], $h);
    $h = str_replace("XXX_PROPERTYAGE", $b['age'], $h);
    $h = str_replace("XXX_NOTES", $b['notes'], $h);
    $h = str_replace("XXX_CONSTRUCTION", $b['construction'], $h);
    $h = str_replace("XXX_ADVICE", $b['renoadvice'], $h);
    $h = str_replace("XXX_INSPECTION", $b['pestinspection'], $h);

    $h = str_replace("XXX_COMBOARCHITECTNAME", $b['linked_firstname'] . ' ' . $b['linked_lastname'], $h);
    $h = str_replace("XXX_COMBOARCHITECTMOBILE", $b['linked_mobile'], $h);

    $h = str_replace("XXX_COMBOINSPECTORNAME", $b['inspectorfirstname'] . ' ' . $b['inspectorlastname'], $h);
    $h = str_replace("XXX_COMBOINSPECTORMOBILE", $b['inspectormobile'], $h);

    $h = str_replace("XXX_ITYPENAME", $userTypes[$b['usertype']], $h);

    return $h;
  }

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['archuuid']) && isset($_POST['inspectoruuid']) && isset($_POST['bookingcode']) && isset($_POST['linkedbookingcode']))
    {
      $uuid = SharedGetPostVar("uuid");
      $archuuid = SharedGetPostVar("archuuid");
      $inspectoruuid = SharedGetPostVar("inspectoruuid");
      $bookingcode = SharedGetPostVar("bookingcode");
      $linkedbookingcode = SharedGetPostVar("linkedbookingcode");

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $archid = SharedGetUserIdFromUuid($archuuid, $dblink);
      $inspectorid = SharedGetUserIdFromUuid($inspectoruuid, $dblink);

      if (($archid != 0) && ($inspectorid != 0))
      {
        $dbupdate1 = "update bookings set " .
                     "users_id=$inspectorid," .
                     "datemodified=CURRENT_TIMESTAMP," .
                     "usersmodified_id=$userid " .
                     "where " .
                     "id=$bookingcode";

        $dbupdate2 = "update bookings set " .
                     "users_id=$archid," .
                     "datemodified=CURRENT_TIMESTAMP," .
                     "usersmodified_id=$userid " .
                     "where " .
                     "id=$linkedbookingcode";

        $dbresult1 = SharedQuery($dbupdate1, $dblink);
        $dbresult2 = SharedQuery($dbupdate2, $dblink);




        if ($dbresult1 && $dbresult2)
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
                      "u1.email inspectoremail," .
                      "u1.firstname inspectorfirstname," .
                      "u1.lastname inspectorlastname," .

                      "u1.address1 inspectoraddress1," .
                      "u1.address2 inspectoraddress2," .
                      "u1.city inspectorcity," .
                      "u1.state inspectorstate," .
                      "u1.postcode inspectorpostcode," .
                      "u1.regno inspectorregno," .
                      "u1.company inspectorcompany," .
                      "u1.phone inspectorphone," .
                      "u1.mobile inspectormobile," .

                      // Linked booking for combined reports... (if any)
                      // Linked is the arch, base is inspector
                      "b2.id linked_bookingcode," .
                      "b2.itype linked_itype," .
                      "u2.itype linked_usertype," .
                      "u2.email linked_email," .
                      "u2.firstname linked_firstname," .
                      "u2.lastname linked_lastname," .

                      "u2.address1 linked_address1," .
                      "u2.address2 linked_address2," .
                      "u2.city linked_city," .
                      "u2.state linked_state," .
                      "u2.postcode linked_postcode," .
                      "u2.regno linked_regno," .
                      "u2.company linked_company," .
                      "u2.phone linked_phone," .
                      "u2.mobile linked_mobile " .

                      "from " .
                      "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
                      "            left join bookings b2 on (b1.bookings_id=b2.id) " .
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
//                error_log($booking);
//                ChromePhp::log($booking);
              // Let customer know...
              if ($booking['custemail'] != "")
              {
                $emailtemplate = $reportconfirmemails[$booking['itype']];
                $html = file_get_contents('email_architectallocation.html');
                //error_log($html);
                $html = doMacros($html, $booking);

		            SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], "Assessment/Inspection Confirmation", $html);
              }

              // Let architect/inspector know... (arch is the linked entries)...
              if ($booking['linked_bookingcode'] != "")
              {
                // Special case combined report - need to send separate emails to architect/inspector and let them know about each other...
                if ($booking['itype'] == 3)
                {
                  // Inspector notification...
                  $html1 = file_get_contents('email_comboinspectornotification.html');
                  $html1 = doMacros($html1, $booking);
                  SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['inspectoremail'], $booking['inspectorfirstname'] . ' ' . $booking['inspectorlastname'], "Timber Inspection Confirmation", $html1);

                  // Architect notification...
                  $html2 = file_get_contents('email_comboarchitectnotification.html');
                  $html2 = doMacros($html2, $booking);
                  SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['linked_email'], $booking['linked_firstname'] . ' ' . $booking['linked_lastname'], "Assessment Report Confirmation", $html2);
                }
              }
            }
          }
        }
        else
          $msg = "Error assigning architect and inspector...";
      }
      else
        $msg = "Unable to retrieve architect and inspector details for assignment...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to assign architect and inspector...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
