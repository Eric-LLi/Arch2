<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $data = Array();

  try
  {
    if (isset($_POST['uuid']))
    {
      $uuid = $_POST['uuid'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbselect = "select " .
                  "count(b1.itype) numrep," .
                  "concat(u1.firstname, ' ' , u1.lastname) as member " .
                  "from " .
                  "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
                  "where " .
                  "b1.dateexpired is null " .
                  "group by " .
                  "member " .
                  "order by numrep";
      error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $data[] = $dbrow;

          $rc = 0;
        }
        else
          $msg = "Unable to fetch report data...";
      }
      else
        $msg = "Unable to query report data...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch report data...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "data" => $data);
  $json = json_encode($response);
  echo $json;
?>
