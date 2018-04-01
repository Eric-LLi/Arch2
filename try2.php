<?php
  require_once("shared.php");

  try
  {
      $rows = [];
      $dbselect = "select id from bookings where itype=3";
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            echo $dbrow . "\n";
        }
        else
          $msg = "Unable to fetch list of bookings...";
      }
      else
        $msg = "Unable to fetch list of bookings...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch bookings...";
  }
?>
