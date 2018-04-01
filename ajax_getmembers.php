<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['itype']))
    {
      $uuid = $_POST['uuid'];
      $itype = (int)$_POST['itype'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $clause = "";

      // Non-admins can only see their own entry...
      if ($itype != 99)
        $clause = "and u1.uuid=" . SharedNullOrQuoted($uuid, 64, $dblink);

      $dbselect = "select " .
                  "u1.uuid," .
                  "concat(u1.firstname,' ',u1.lastname) name," .
                  "u1.email," .
                  "u1.itype," .
                  "u1.mobile," .
                  "u1.regno," .
                  "u1.company," .
                  "u1.datecreated," .
                  "u1.datemodified " .
                  "from " .
                  "users u1 " .
                  "where " .
                  "u1.dateexpired is null " .
                  "and " .
                  "u1.id!= 1 " .
                  $clause . " " .
                  "order by " .
                  "name";
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $rows[] = $dbrow;

          $rc = 0;
        }
        else
          $msg = "Unable to fetch list of members...";
      }
      else
        $msg = "Unable to fetch list of members...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch members...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows);
  $json = json_encode($response);
  echo $json;
?>
