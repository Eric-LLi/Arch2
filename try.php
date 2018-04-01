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
            $rows[] = $dbrow;
          echo count($rows) . "\n";
          for ($i = 0; $i < count($rows); $i++)
          {
            $r = $rows[$i];
            $bc = SharedMakeUuid(8);
            $dbupdate = "update bookings set code=" . SharedNullOrQuoted($bc, 8, $dblink) . " where id=" . $r['id'];
            SharedQuery($dbupdate, $dblink);
            echo $dbupdate . "\n";
          }
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
