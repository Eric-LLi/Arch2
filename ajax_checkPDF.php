<?php
  require_once("shared.php");

  global $reportTypes;
  global $userTypes;
  $rc = -1;
  $msg = "";
  try
  {
    if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
    {
      $uuid = SharedGetPostVar("uuid");
      $bookingcode = SharedGetPostVar("bookingcode");

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
   
      $pdfPath = './pdfreport/'.$bookingcode.".pdf";
      error_log($pdfPath);
      error_log(file_exists($pdfPath));

      if(file_exists($pdfPath) == 1)
      {
          $rc = -1;
          $msg = "This PDF Report already existed";
      }
      else
      {
          $rc = 0;
          $msg = "PDF Report does not a copy";
      }
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to assign architect...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
