<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['invoicetype']) && isset($_POST['bookingcode'])&& isset($_POST['msg']))
    {

      $uuid = $_POST['uuid'];
      $invoicetype = $_POST['invoicetype'];
      $bookingcode = $_POST['bookingcode'];
      $msg = $_POST['msg'];
      $b1archid = "";

      
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      error_log($uuid);
      error_log($selectedstatus);
      error_log($bookingcode);
      error_log($userid);


      if($selectedstatus == 0) // status == 0 --> No Paid
      {
        $dbupdate = "update bookings set " . 
                    "datepaid = NULL," . 
                    "usersmodified_id=$userid, " .
                    "datemodified=CURRENT_TIMESTAMP " .
                    "where " .
                    "id=$bookingcode";
      }
     
      if($selectedstatus == 1) // status == 1 --> aggree price is not set
      {
        $dbupdate = "update bookings set " . 
                    "budget = NULL," . 
                    "usersmodified_id=$userid, " .
                    "datemodified=CURRENT_TIMESTAMP " .
                    "where " .
                    "id=$bookingcode";
      }
      if($selectedstatus == 2) // status == 2 --> approved
      {
        $dbupdate = "update bookings set " . 
                    "dateapproved=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
      }
      if($selectedstatus == 3) // status == 3 --> completed
      {
        $dbupdate = "update bookings set " . 
                    "datecompleted=CURRENT_TIMESTAMP," .
                    "dateapproved=NULL," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
      }
      if($selectedstatus == 4) // status == 4 --> paid
      {
        $dbupdate = "update bookings set " . 
                    "datepaid=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
      }
      if($selectedstatus == 6) // status == 6 --> Work Started
      {
        $dbupdate = "update bookings set " . 
                    "datecompleted=NULL," .
                    "dateapproved=NULL," .
                    "usersmodified_id=$userid, " .
                    "users_id=$b1archid " .
                    "where " .
                    "id=$bookingcode";
      }
      if($selectedstatus == 7) // status == 7 --> Work Closed
      {
        $dbupdate = "update bookings set " . 
                    "dateclosed=CURRENT_TIMESTAMP," .
                    "usersclosed_id=$userid " .
                    "where " .
                    "id=$bookingcode";
      }
      
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
        $rc = 0;
      else
        $msg = "Error setting booking status...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable set booking status...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
