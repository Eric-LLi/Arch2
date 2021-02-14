<!--
  This function is to duplicate the selected row right away and insert a new row to the database, without asking the user to enter any addtionals details. 
  And the report type of the newly created report will be 'Unassigned'
  -->
<?php
  require_once("shared.php");

  global $gConfig;

  $rc = -1;
  $msg = "";
  $bookingid = 0;

  try
  {
    if (isset($_POST['bookingcode']) && isset($_POST['uuid']))
    {
        error_log("copy booking");
      $uuid = $_POST['uuid'];
    //   $reportid = $_POST['reportid'];
      $bookingid = $_POST['bookingcode'];
      $isuser = isset($_POST['isuser']) ? $_POST['isuser'] : false;
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $newbookingid;
      $bookingcode = SharedMakeUuid(8);
      $dbinsert = "insert into bookings ".
                    "(".
                      "code," .
                      "custfirstname," .
                      "custlastname," .
                      "custemail," .
                      "custmobile," .
                      "custphone," .
                      "custaddress1," .
                      "custaddress2," .
                      "custcity," .
                      "custpostcode," .
                      "custstate," .

                      "itype," .

                      "userscreated_id" .
                      ") " .
                      "select " .
                      SharedNullOrQuoted($bookingcode, 8, $dblink) . "," .
                      "b1.custfirstname, " .
                      "b1.custlastname, " .
                      "b1.custemail," .
                      "b1.custmobile," .
                      "b1.custphone," .
                      "b1.custaddress1," .
                      "b1.custaddress2," .
                      "b1.custcity," .
                      "b1.custpostcode," .
                      "b1.custstate," .
    
                      "0, ".
                      SharedNullOrNum($userid, $dblink) .
                      " from " .
                      "bookings b1 " .
                      "where " .
                      "b1.id=$bookingid";
        error_log($dbinsert);
        
        if ($dbresult = SharedQuery($dbinsert, $dblink))
        {
            $newbookingid = SharedGetInsertId($dblink);
            //error_log($newbookingid);
            $rc = 0;
            $msg = "Succesfully copy booking $bookingid to create a new booking $newbookingid ";
        }     
    }
    else
      $msg = "Missing report type...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to create new booking...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "bookingcode" => $bookingid);
  $json = json_encode($response);
  echo $json;
?>
