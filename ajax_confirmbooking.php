<?php
  require_once("shared.php");

  global $reportTypes;
	global $reportemails;

  $rc = -1;
  $msg = "";
	$booking = Array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['archuuid']) && isset($_POST['bookingcode']))
    {
      $uuid = SharedGetPostVar("uuid");
      $archuuid = SharedGetPostVar("archuuid");
      $bookingcode = SharedGetPostVar("bookingcode");

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $archid = SharedGetUserIdFromUuid($archuuid, $dblink);

      if ($archid != 0)
      {
        $dbupdate = "update bookings set " .
                    "users_id=$archid," .
                    "datemodified=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
        error_log($dbupdate);
        if ($dbresult = SharedQuery($dbupdate, $dblink))
        {
          $rc = 0;

          // Fetch booking details so we can email customer...
          $dbselect = "select " .
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
                      "b1.itype," .
											
											"b1.address1," .
                  		"b1.address2," .
                  		"b1.city," .
                  		"b1.state," .
                  		"b1.postcode," .
											
											"b1.estateagentcompany," .
                  		"b1.estateagentcontact," .
                  		"b1.estateagentmobile," .
                  		"b1.estateagentphone," .

                      "u1.firstname archfirstname," .
                      "u1.lastname archlastname " .
											
                      "from " .
                      "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
											
                      "where " .
                      "b1.id=$bookingcode";
          if ($dbresult = SharedQuery($dbselect, $dblink))
          {
            if ($numrows = SharedNumRows($dbresult))
            {
              $booking = null;
              while ($dbrow = SharedFetchArray($dbresult))
                $booking = $dbrow;

              if ($booking['custemail'] != "")
              {
                $html = file_get_contents('email_architectallocation.html');

                $html = str_replace("XXX_CUSTFIRSTLASTNAME", $booking['custfirstname'] . ' ' . $booking['custlastname'], $html);
                $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
                $html = str_replace("XXX_CUSTEMAIL", $booking['custemail'], $html);
                $html = str_replace("XXX_CUSTMOBILE", $booking['custmobile'], $html);
                $html = str_replace("XXX_CUSTPHONE", $booking['custphone'], $html);
                $html = str_replace("XXX_BOOKINGCODE", $bookingcode, $html);
                $html = str_replace("XXX_CUSTADDRESS1", $booking['custaddress1'], $html);
                $html = str_replace("XXX_CUSTADDRESS2", $booking['custaddress2'], $html);
                $html = str_replace("XXX_CUSTCITY", $booking['custcity'], $html);
								$html = str_replace("XXX_CUSTSTATE", $booking['custstate'], $html);
								$html = str_replace("XXX_CUSTPOSTCODE", $booking['custpostcode'], $html);
                $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['itype']], $html);
								$html = str_replace("XXX_PROPADDRESS1", $booking['address1'], $html);
                $html = str_replace("XXX_PROPADDRESS2", $booking['address2'], $html);
								$html = str_replace("XXX_PROPCITY", $booking['city'], $html);
                $html = str_replace("XXX_PROPSTATE", $booking['state'], $html);
								$html = str_replace("XXX_PROPPOSTCODE", $booking['postcode'], $html);
								$html = str_replace("XXX_ESTATEAGENTCOMPANY", $booking['estateagentcompany'], $html);
								$html = str_replace("XXX_ESTATEAGENTCONTACT", $booking['estateagentcontact'], $html);
								$html = str_replace("XXX_ESTATEAGENTMOBILE", $booking['estateagentmobile'], $html);
                $html = str_replace("XXX_ESTATEAGENTPHONE", $booking['estateagentphone'], $html);
                $html = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . " " . $booking['archlastname'], $html);
                $html = str_replace("XXX_ARCHITECTPHONE", $booking['archmobile'], $html);

                SharedSendHtmlMail($gConfig['adminemail'], "Web Booking", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Howdy", $html);
              }
            }
          }
        }
        else
          $msg = "Error assigning architect...";
      }
      else
        $msg = "Unable to retrieve architect details for assignment...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to assign architect...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
