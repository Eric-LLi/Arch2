<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $member = Array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['memberuuid']))
    {
      $uuid = $_POST['uuid'];
      $memberuuid = $_POST['memberuuid'];

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbselect = "select " .
                  "u1.firstname," .
                  "u1.lastname," .
                  "u1.itype," .
                  "u1.email," .
                  "u1.mobile," .
                  "u1.phone," .
                  "u1.regno," .
                  "u1.company," .
                  "u1.address1," .
                  "u1.address2," .
                  "u1.city," .
                  "u1.postcode," .
                  "u1.state," .
                  "u1.comments," .
                  "u1.gstinc," .
                  "u1.datecreated," .
                  "u1.datemodified " .
                  "from " .
                  "users u1 " .
                  "where " .
                  "u1.uuid=" . SharedNullOrQuoted($memberuuid, 50, $dblink);
      error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $member = $dbrow;

          $rc = 0;
        }
        else
          $msg = "Unable to fetch member details...";
      }
      else
        $msg = "Unable to query member details...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch member...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "member" => $member);
  $json = json_encode($response);
  echo $json;
?>
