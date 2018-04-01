<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['status']) && isset($_POST['bookingcode']))
    {
      $statusfield = "";

      $uuid = $_POST['uuid'];
      $status = $_POST['status'];
      $bookingcode = $_POST['bookingcode'];

      if ($status == "paid")
        $statusfield = "datepaid";
      else if ($status == "completed")
        $statusfield = "datecompleted";
      else if ($status == "approved")
        $statusfield = "dateapproved";

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      if($status == 'uncompleted')
      {
        $dbupdate = "update bookings set " .
                  "datecompleted=NULL," .
                  "usersmodified_id=$userid " .
                  "where " .
                  "id=$bookingcode";
      }
      else
      {
        $dbupdate = "update bookings set " .
                  "$statusfield=CURRENT_TIMESTAMP," .
                  "usersmodified_id=$userid " .
                  "where " .
                  "id=$bookingcode";
      }
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
        $rc = 0;
      else
        $msg = "Error assigning architect...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable set booking status...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
