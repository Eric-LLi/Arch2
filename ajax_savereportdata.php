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
      $recordsql = "insert into audit_log ".
                  "(bookings_id," .
                  "event, ".
                  "userscreated_id".
                  ")".
                  "values ".
                  "(".
                  $bookingcode ."," .
                  7 ."," .
                  SharedNullOrNum($userid, $dblink) .
                  ")";
      error_log($dbupdate);
      error_log($recordsql);
      $dbresult1 = SharedQuery($dbupdate, $dblink);
      $dbresult2 = SharedQuery($recordsql, $dblink);
      if ($dbresult1 && $dbresult2)
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
