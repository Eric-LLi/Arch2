<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['useruuid']))
    {
      $uuid = $_POST['uuid'];
      $useruuid = $_POST['useruuid'];

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbupdate = "update users set " .
                  "dateexpired=CURRENT_TIMESTAMP," .
                  "usersexpired_id=$userid " .
                  "where " .
                  "uuid=" . SharedNullOrQuoted($useruuid, 50, $dblink);
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
      {
        $rc = 0;
        $msg = "Successfully removed membe...";
      }
      else
        $msg = "Error removing member...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to remove member...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
