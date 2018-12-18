<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['status']) && isset($_POST['bookingcode']) && isset($_POST['bookingcode2']) )
    {
      $statusfield = "";

      $uuid = $_POST['uuid'];
      $selectedstatus = $_POST['status'];
      $bookingcode = $_POST['bookingcode'];
      $bookingcode2 = $_POST['bookingcode2'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      error_log($uuid);
      error_log($selectedstatus);
      error_log($bookingcode);
      error_log($bookingcode2);
     
     
      if($selectedstatus == 0) // status == 0 --> No Paid
      {
        $dbupdate1 = "update bookings set " . 
                      "datepaid = NULL," . 
                      "usersmodified_id=$userid, " .
                      "datemodified=CURRENT_TIMESTAMP " .
                      "where " .
                      "id=$bookingcode";
        $dbupdate2 = "update bookings set " . 
                      "datepaid = NULL," . 
                      "usersmodified_id=$userid, " .
                      "datemodified=CURRENT_TIMESTAMP " .
                      "where " .
                      "id=$bookingcode2";
      }
      if($selectedstatus == 1) // status == 1 --> aggree price is not set
      {
        $dbupdate1 = "update bookings set " . 
                      "budget = NULL," . 
                      "usersmodified_id=$userid, " .
                      "datemodified=CURRENT_TIMESTAMP " .
                      "where " .
                      "id=$bookingcode";
        $dbupdate2 = "update bookings set " . 
                      "budget = NULL," . 
                      "usersmodified_id=$userid, " .
                      "datemodified=CURRENT_TIMESTAMP " .
                      "where " .
                      "id=$bookingcode2";
      }
      if($selectedstatus == 2) // status == 2 --> approved
      {
        $dbupdate1 = "update bookings set " . 
                      "dateapproved=CURRENT_TIMESTAMP," .
                      "usersmodified_id=$userid " .
                      "where " .
                      "id=$bookingcode";
        $dbupdate2 = "update bookings set " . 
                    "dateapproved=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode2";
      }
      if($selectedstatus == 3) // status == 3 --> completed
      {
        $dbupdate1 = "update bookings set " . 
                      "datecompleted=CURRENT_TIMESTAMP," .
                      "dateapproved=NULL," .
                      "usersmodified_id=$userid " .
                      "where " .
                      "id=$bookingcode";
        $dbupdate2 = "update bookings set " . 
                      "datecompleted=CURRENT_TIMESTAMP," .
                      "dateapproved=NULL," .
                      "usersmodified_id=$userid " .
                      "where " .
                      "id=$bookingcode2";
      }
      if($selectedstatus == 4) // status == 4 --> paid
      {
        $dbupdate1 = "update bookings set " . 
                      "datepaid=CURRENT_TIMESTAMP," .
                      "usersmodified_id=$userid " .
                      "where " .
                      "id=$bookingcode";
        $dbupdate2 ="update bookings set " . 
                    "datepaid=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode2";
      }
      if($selectedstatus == 6) // status == 6 --> Work Started
      {
        $dbupdate1 = "update bookings set " . 
                      "datecompleted=NULL," .
                      "dateapproved=NULL," .
                      "usersmodified_id=$userid, " .
                      "users_id=1 " .
                      "where " .
                      "id=$bookingcode";
        $dbupdate2 ="update bookings set " . 
                      "datecompleted=NULL," .
                      "dateapproved=NULL," .
                      "usersmodified_id=$userid, " .
                      "users_id=1 " .
                      "where " .
                      "id=$bookingcode2";
      }
      if($selectedstatus == 7) // status == 7 --> Work Closed
      {
        $dbupdate1 = "update bookings set " . 
                      "dateclosed=CURRENT_TIMESTAMP," .
                      "usersclosed_id=$userid " .
                      "where " .
                      "id=$bookingcode";
        $dbupdate2 = "update bookings set " . 
                      "dateclosed=CURRENT_TIMESTAMP," .
                      "usersclosed_id=$userid " .
                      "where " .
                      "id=$bookingcode2";
      }
      

      error_log($dbupdate2);
      
      $dbresult1 = SharedQuery($dbupdate1, $dblink);
      $dbresult2 = SharedQuery($dbupdate2, $dblink);

      
      if ($dbresult1 && $dbresult2)
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
