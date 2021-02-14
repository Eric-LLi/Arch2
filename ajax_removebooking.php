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
        $rc = 0;
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
