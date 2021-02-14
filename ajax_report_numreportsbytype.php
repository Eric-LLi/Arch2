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
                  "case b1.itype " .
                  "  when 1 then 'Property Assessment' " .
                  "  when 2 then 'Timber Pest Inspection' " .
                  "  when 4 then 'Maintenance Advice' " .
                  "  when 5 then 'Architect\'s Advice' " .
                  "  when 6 then 'Construction -Stage 1' " .
                  "  when 7 then 'Construction -Stage 2' " .
                  "  when 8 then 'Construction -Stage 3' " .
                  "  when 9 then 'Construction -Stage 4' " .
                  "  when 10 then 'Construction -Stage 5' " .
                  "  when 11 then 'Construction -Stage 6' " .
                  "  when 12 then 'Construction -Stage 7' " .
                  "  when 13 then 'Construction -Stage 8' " .
                  "  when 14 then 'Design Consultation' " .
                  "  when 15 then 'Dilapidation Survey' " .
                  "  when 16 then 'Home Feasibility' " .
                  "  when 17 then 'Renovation Feasibility' " .
                  "  when 18 then 'Home Warranty Inspection - Residential' " .
                  "  when 19 then 'Property Assessment -Commercial' " .
                  "  when 21 then 'Home Access & Services - Residential' " .
                  "  when 22 then 'Post-Dilapidation Survey' " .

                  "end as 'report' " .
                  "from " .
                  "bookings b1 " .
                  "where " .
                  "b1.dateexpired is null " .
                  "group by " .
                  "b1.itype " .
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
