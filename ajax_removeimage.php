<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['imageid']) && isset($_POST['bookingcode']))
    {
      $dbupdate = "update photos set dateexpired=CURRENT_TIMESTAMP where dateexpired is null and bookings_id=" . $_POST['bookingcode'] . " and imageid=" . SharedNullOrQuoted($_POST['imageid'], 50, $dblink);
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
        $rc = 0;
      else
        $msg = "Error trying to remove photo";
    }
    else
      $msg = "Didn't specify which photo to remove...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to remove photo...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
