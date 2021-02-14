<?php
  require_once("shared.php");

  $itype_admin = 99;
  $itype_architect = 1;
  $itype_inspector = 2;
  $itype_user = 3;

  $rc = -1;
  $msg = "";
  $rows = array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['itype']))
    {
      $uuid = $_POST['uuid'];
      $itype = (int)$_POST['itype'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $clause = "";

      // Non-admins restricted to see themselves...
      if ($itype != $itype_admin)
        $clause = "and u1.uuid=$uuid)";

      $dbselect = "select " .
                  "u1.uuid," .
                  "u1.firstname," .
                  "u1.lastname," .
                  "u1.itype," .
                  "concat(u1.firstname,' ',u1.lastname) name," .
                  "u1.regno " .
                  "from " .
                  "users u1 " .
                  "where " .
                  "u1.dateexpired is null " .
                  $clause . " " .
                  "order by " .
                  "name";
      error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $rows[] = $dbrow;

          $rc = 0;
        }
        else
          $msg = "Unable to fetch list of users...";
      }
      else
        $msg = "Unable to fetch list of users...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch users...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows);
  $json = json_encode($response);
  echo $json;
?>
