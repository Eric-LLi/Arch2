<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['data']) && isset($_POST['bookingcode']))
    {
      $uuid = $_POST['uuid'];
      $data = $_POST['data'];
      $bookingcode = $_POST['bookingcode'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $data = str_replace("\\r\\n", "\\\\r\\\\n", $data);

      //error_log($data);

      $dbupdate = "update bookings set " .
                  "reportdata=" . SharedNullOrQuoted($data, 8192, $dblink) . "," .
                  "datemodified=CURRENT_TIMESTAMP," .
                  "usersmodified_id=$userid " .
                  "where " .
                  "id=$bookingcode";
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
      {
        $rc = 0;
        $msg = "Succesfully saved report...";
      }
      else
        $msg = "Error trying to save report...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to save report...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
