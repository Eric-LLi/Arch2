<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();

  try
  {
    if (isset($_POST['uuid']))
    {
      $dbselect = "select distinct batchnosalesreport batchno from bookings";
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $rows[] = $dbrow;

          $rc = 0;
        }
        else
            $msg = "Could not find any matching sales report run info";
      }
      else
        $msg = "Unable to fetch sales report run info...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch sales report run info...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows);
  $json = json_encode($response);
  echo $json;
?>
