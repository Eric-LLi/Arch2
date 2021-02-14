<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['status']) && isset($_POST['bookingcode']))
    {

      $uuid = $_POST['uuid'];
      $selectedstatus = $_POST['status'];
      $bookingcode = $_POST['bookingcode'];
      $b1archid = "";

      
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      error_log($uuid);
      error_log($selectedstatus);
      error_log($bookingcode);
      error_log($userid);

      $dbupdate = "";
      $recordsql = "";

      $dbselect1 = "select " .
                  "b1.users_id ".

                  "from " .
                  "bookings b1  " .
                  "where ".
                  "b1.id = $bookingcode";
      error_log($dbselect1);
      if ($dbresult1 = SharedQuery($dbselect1, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult1))
        {
          while ($dbrow = SharedFetchArray($dbresult1))
            $row = $dbrow;
            
            $b1archid = $row['users_id'];
            
          $rc = 0;
        }
      }
      error_log($b1archid);
     
        
      if($b1archid == null)
      {
        $b1archid = 1;
      }
      error_log($b1archid);

      if($selectedstatus == 0) // status == 0 --> No Paid
      {
        $dbupdate = "update bookings set " . 
                    "datepaid = NULL," . 
                    "usersmodified_id=$userid, " .
                    "datemodified=CURRENT_TIMESTAMP " .
                    "where " .
                    "id=$bookingcode";
        $recordsql = "insert into audit_log ".
                      "(bookings_id," .
                      "event, ".
                      "userscreated_id".
                      ")".
                      "values ".
                      "(".
                      $bookingcode ."," .
                      4 ."," .
                      SharedNullOrNum($userid, $dblink) .
                      ")";
          error_log($recordsql);
      }
     
      if($selectedstatus == 1) // status == 1 --> aggree price is not set
      {
        $dbupdate = "update bookings set " . 
                    "budget = NULL," . 
                    "usersmodified_id=$userid, " .
                    "datemodified=CURRENT_TIMESTAMP " .
                    "where " .
                    "id=$bookingcode";
        $recordsql = "insert into audit_log ".
                    "(bookings_id," .
                    "event, ".
                    "userscreated_id".
                    ")".
                    "values ".
                    "(".
                    $bookingcode ."," .
                    5 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($recordsql);
      }
      if($selectedstatus == 2) // status == 2 --> approved
      {
        $dbupdate = "update bookings set " . 
                    "dateapproved=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
        $recordsql = "insert into audit_log ".
                    "(bookings_id," .
                    "event, ".
                    "userscreated_id".
                    ")".
                    "values ".
                    "(".
                    $bookingcode ."," .
                    9 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($recordsql);
      }
      if($selectedstatus == 3) // status == 3 --> completed
      {
        $dbupdate = "update bookings set " . 
                    "datecompleted=CURRENT_TIMESTAMP," .
                    "dateapproved=NULL," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
        $recordsql = "insert into audit_log ".
                    "(bookings_id," .
                    "event, ".
                    "userscreated_id".
                    ")".
                    "values ".
                    "(".
                    $bookingcode ."," .
                    8 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($recordsql);
      }
      if($selectedstatus == 4) // status == 4 --> paid
      {
        $dbupdate = "update bookings set " . 
                    "datepaid=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
        $recordsql = "insert into audit_log ".
                    "(bookings_id," .
                    "event, ".
                    "userscreated_id".
                    ")".
                    "values ".
                    "(".
                    $bookingcode ."," .
                    3 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($recordsql);
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
        $recordsql = "insert into audit_log ".
                    "(bookings_id," .
                    "event, ".
                    "userscreated_id".
                    ")".
                    "values ".
                    "(".
                    $bookingcode ."," .
                    6 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($recordsql);
      }
      if($selectedstatus == 7) // status == 7 --> Work Closed
      {
        $dbupdate = "update bookings set " . 
                    "dateclosed=CURRENT_TIMESTAMP," .
                    "usersclosed_id=$userid " .
                    "where " .
                    "id=$bookingcode";
        $recordsql = "insert into audit_log ".
                    "(bookings_id," .
                    "event, ".
                    "userscreated_id".
                    ")".
                    "values ".
                    "(".
                    $bookingcode ."," .
                    11 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($recordsql);
      }
      
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
      {
        if($dbresult = SharedQuery($recordsql, $dblink))
        {
          $rc = 0;
        }
      }
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
