<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['useruuid']) && isset($_POST['password']))
    {
      $uuid = $_POST['uuid'];
      $memberuuid = $_POST['useruuid'];
      $password = $_POST['password'];

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $memberid = SharedGetUserIdFromUuid($memberuuid, $dblink);

      if ($memberid != 0)
      {
        $dbupdate = "update users set " .
                    "pwd=" . SharedNullOrQuoted($password, 50, $dblink) . "," .
                    "datemodified=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$memberid";
        error_log($dbupdate);
        if ($dbresult = SharedQuery($dbupdate, $dblink))
        {
          $rc = 0;
          $msg = "Password successfully changed...";
        }
        else
          $msg = "Error changing password...";
      }
      else
        $msg = "Unable to retrieve member details...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to change password...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
