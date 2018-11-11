<?php
  require_once("shared.php");

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
                  "b1.quote_description," .

                  "b1.reportdata," .

                  "b1.datecreated," .
                  "b1.datemodified " .

                  "from " .
                  "bookings b1 " .
                  "where " .
                  "b1.id=$bookingcode";
      error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $booking = $dbrow;

          $rc = 0;
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
