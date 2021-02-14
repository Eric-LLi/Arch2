<?php
 /*This is the sql to copy a booking with details admin enters in the open dialouge instead of inserting new row right away*/
  require_once("shared.php");

  global $gConfig;

  $rc = -1;
  $msg = "";
  $bookingid = 0;

  try
  {
    if (isset($_POST['reportid']) && isset($_POST['uuid']))
    {
      $uuid = $_POST['uuid'];

      $custfirstname = $_POST['custfirstname'];
      $custlastname = $_POST['custlastname'];
      $custemail = $_POST['custemail'];
      $custmobile = $_POST['custmobile'];
      $custphone = $_POST['custphone'];
      $custaddress1 = $_POST['custaddress1'];
      $custaddress2 = $_POST['custaddress2'];
      $custcity = $_POST['custcity'];
      $custpostcode = $_POST['custpostcode'];
      $custstate = $_POST['custstate'];

      $hasbudget = false;
      $hascommission = false;
      $hastravel = false;
      $hasspotter = false;

      $budget = null;
      $commission = null;
      $travel = null;
      $spotter = null;

      //$msg = "[$custemail]";

      if (isset($_POST['budget']))
      {
        $budget = $_POST['budget'];
        $hasbudget = true;
      }
      if (isset($_POST['commission']))
      {
        $commission = $_POST['commission'];
        $hascommission = true;
      }
      if (isset($_POST['travel']))
      {
        $travel = $_POST['travel'];
        $hastravel = true;
      }
      if (isset($_POST['spotter']))
      {
        $spotter = $_POST['spotter'];
        $hasspotter = true;
      }

      $reportid = $_POST['reportid'];
      $notes = $_POST['notes'];
      $numstories = $_POST['numstories'];
      $numbedrooms = $_POST['numbedrooms'];
      $numbathrooms = $_POST['numbathrooms'];
      $numrooms = $_POST['numrooms'];
      $numbuildings = $_POST['numbuildings'];
      $address1 = $_POST['address1'];
      $address2 = $_POST['address2'];
      $city = $_POST['city'];
      $postcode = $_POST['postcode'];
      $state = $_POST['state'];
      $construction = $_POST['construction'];
      $age = $_POST['age'];
      $meetingonsite = $_POST['meetingonsite'];
      $renoadvice = $_POST['renoadvice'];
      $pestinspection = $_POST['pestinspection'];

      $estateagentcompany = $_POST['estateagentcompany'];
      $estateagentcontact = $_POST['estateagentcontact'];
      $estateagentmobile = $_POST['estateagentmobile'];
      $estateagentphone = $_POST['estateagentphone'];

      $quotedescription = $_POST['quotedescription'];

      $isuser = isset($_POST['isuser']) ? $_POST['isuser'] : false;

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      function doInsertBooking($repid, $linkedrepid = null)
      {
        // error_log("doInsertBooking");
        // error_log("reportid :$repid");
        
        global $dblink;
        global $custfirstname, $custlastname, $custemail, $custmobile, $custphone, $custaddress1, $custaddress2, $custcity, $custpostcode, $custstate;
        global $budget, $commission, $travel, $spotter, $notes, $numstories, $numbedrooms, $numbathrooms, $numbuildings, $numrooms;
        global $address1, $address2, $city, $postcode, $state, $construction, $age, $meetingonsite, $renoadvice, $pestinspection;
        global $estateagentcompany, $estateagentcontact, $estateagentmobile, $estateagentphone, $userid, $hasbudget, $hascommission;
        global $hastravel,$hasspotter,$quotedescription;
        $bookingcode = SharedMakeUuid(8);
        $vars1 = "";
        $vars2 = "";
        $vars3 = "";
        $vars4 = "";

        $clause1 = "";
        $clause2 = "";
        $clause3 = "";
        $clause4 = "";

        //If the report is Combined Report(id=3) - Timber Pest Report, don't need to store all this amount related info
        //So if id != 3, then could insert with the amount details. 
        if($repid != 3)
        {
          // error_log("report id is not 3");
          if ($hasbudget)
          {
            $budget = $_POST['budget'];
            $vars1 = "budget,";
            $clause1 = SharedNullOrNum($budget, $dblink) . "," ;
            // error_log("clause1: $clause1");
          }
  
          if ($hascommission)
          {
            $vars2 = "commission,";
            $clause2 = SharedNullOrNum($commission, $dblink) . "," ;
          }
  
          if ($hastravel)
          {
            $vars3 = "travel,";
            $clause3 = SharedNullOrNum($travel, $dblink) . "," ;
          }
  
          if ($hasspotter)
          {
            $vars4 = "spotter,";
            $clause4 = SharedNullOrNum($spotter, $dblink) . "," ;
          }
        }
        else //If selects combined report, timber one.set the budget to 0.0001, so its status can be 'Not Paid'/ .  
        {
          // error_log("report id is 3");
          if($hasbudget = true)
          {
            $vars1 = "budget,";
            $budget = 0.0001;
            $clause1 = SharedNullOrNum($budget, $dblink) . "," ;
            // error_log("clause1: $clause1");
          }
        }
        
          
        

        $dbinsert = "insert into bookings " .
                    "(" .
                    "bookings_id," .
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
                    $vars1 .
                    $vars2 .
                    $vars3 .
                    $vars4 .
                    "notes," .

                    "numstories," .
                    "numbedrooms," .
                    "numbathrooms," .
                    "numrooms," .
                    "numoutbuildings," .
                    "address1," .
                    "address2," .
                    "city," .
                    "state," .
                    "postcode," .
                    "construction," .
                    "age," .
                    "meetingonsite," .
                    "renoadvice," .
                    "pestinspection," .

                    "estateagentcompany," .
                    "estateagentcontact," .
                    "estateagentmobile," .
                    "estateagentphone," .
                    'quote_description,' .

                    "userscreated_id" .
                    ") " .
                    "values " .
                    "(" .
                    SharedNullOrNum($linkedrepid, $dblink) . "," .
                    SharedNullOrQuoted($bookingcode, 8, $dblink) . "," .
                    SharedNullOrQuoted($custfirstname, 50, $dblink) . "," .
                    SharedNullOrQuoted($custlastname, 50, $dblink) . "," .
                    SharedNullOrQuoted($custemail, 100, $dblink) . "," .
                    SharedNullOrQuoted($custmobile, 20, $dblink) . "," .
                    SharedNullOrQuoted($custphone, 20, $dblink) . "," .
                    SharedNullOrQuoted($custaddress1, 50, $dblink) . "," .
                    SharedNullOrQuoted($custaddress2, 50, $dblink) . "," .
                    SharedNullOrQuoted($custcity, 50, $dblink) . "," .
                    SharedNullOrQuoted($custpostcode, 10, $dblink) . "," .
                    SharedNullOrQuoted($custstate, 50, $dblink) . "," .

                    SharedNullOrNum($repid, $dblink) . "," .
                    $clause1 .
                    $clause2 .
                    $clause3 .
                    $clause4 .
                    SharedNullOrQuoted($notes, 1000, $dblink) . "," .

                    SharedNullOrNum($numstories, $dblink) . "," .
                    SharedNullOrNum($numbedrooms, $dblink) . "," .
                    SharedNullOrNum($numbathrooms, $dblink) . "," .
                    SharedNullOrNum($numrooms, $dblink) . "," .
                    SharedNullOrNum($numbuildings, $dblink) . "," .

                    SharedNullOrQuoted($address1, 50, $dblink) . "," .
                    SharedNullOrQuoted($address2, 50, $dblink) . "," .
                    SharedNullOrQuoted($city, 50, $dblink) . "," .
                    SharedNullOrQuoted($state, 50, $dblink) . "," .
                    SharedNullOrQuoted($postcode, 10, $dblink) . "," .
                    SharedNullOrQuoted($construction, 100, $dblink) . "," .
                    SharedNullOrQuoted($age, 50, $dblink) . "," .
                    SharedNullOrNum($meetingonsite, $dblink) . "," .
                    SharedNullOrNum($renoadvice, $dblink) . "," .
                    SharedNullOrNum($pestinspection, $dblink) . "," .

                    SharedNullOrQuoted($estateagentcompany, 50, $dblink) . "," .
                    SharedNullOrQuoted($estateagentcontact, 50, $dblink) . "," .
                    SharedNullOrQuoted($estateagentmobile, 20, $dblink) . "," .
                    SharedNullOrQuoted($estateagentphone, 20, $dblink) . "," .
                    SharedNullOrQuoted($quotedescription, 1000, $dblink) . "," .

                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($dbinsert);
        if ($dbresult = SharedQuery($dbinsert, $dblink))
          return (SharedGetInsertId($dblink));
        return null;
      }

      $bookingid = 0;
      //Inform the client booking has been made
      if ($reportid == 24) 
      {
        // reportid = 24 --> User selects combined report. 
        // Need to create Timber (first, reportid == 3), then property asset report(reportid == 24)
        $html = file_get_contents('email_newbooking2.html');
        $bookingid = doInsertBooking(3, null);
        $bookingid2 = doInsertBooking(24, $bookingid);

        $recordsql1 = "insert into audit_log ".
                      "(bookings_id," .
                      "event, ".
                      "userscreated_id".
                      ")".
                      "values ".
                      "(".
                      $bookingid ."," .
                      1 ."," .
                      SharedNullOrNum($userid, $dblink) .
                      ")";
        
        $recordsql2 = "insert into audit_log ".
                      "(bookings_id," .
                      "event, ".
                      "userscreated_id".
                      ")".
                      "values ".
                      "(".
                      $bookingid2 ."," .
                      1 ."," .
                      SharedNullOrNum($userid, $dblink) .
                      ")";
        $dbresult1 = SharedQuery($recordsql1, $dblink);
        $dbresult2 = SharedQuery($recordsql2, $dblink);
        if ($dbresult1 && $dbresult2)
        {
          $msg = "Successfully created new bookings [$bookingid and $bookingid2]";
          $rc = 0;
  
          if (($isuser == 1) && ($custemail != ""))
          {
            $html = str_replace("XXX_CUSTFIRSTNAME", $custfirstname . " " . $custlastname, $html);
            $html = str_replace("XXX_BOOKINGCODE1", $bookingid, $html);
            $html = str_replace("XXX_BOOKINGCODE2", $bookingid2, $html);
  
            //SharedSendHtmlMail($gConfig['adminemail'], "Web Enquiry", $booking['custemail'], $custfirstname . ' ' . $custlastname, "Online Booking Request", $html);
            SharedSendHtmlMail($gConfig['adminemail'], "Web Enquiry", $custemail, $custfirstname . ' ' . $custlastname, "Online Booking Request", $html);
            //SharedSendHtmlMail($custemail, $custfirstname . ' ' . $custlastname, $gConfig['adminemail'], "Web Enquiry", "Online Booking Request", $body);
          }
        }
        else
        {
          $msg = "Could not recrod booking [$bookingid and $bookingid2] to audit log";
        }
        
      }
      else
      {
        //Single Report
        $html = file_get_contents('email_newbooking.html');
        $bookingid = doInsertBooking($reportid, null);
        $recordsql = "insert into audit_log ".
                    "(bookings_id," .
                    "event, ".
                    "userscreated_id".
                    ")".
                    "values ".
                    "(".
                    $bookingid ."," .
                    1 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($recordsql);
        if($dbresult = SharedQuery($recordsql, $dblink))
        {
          $msg = "Successfully created new booking [$bookingid]";
          $rc = 0;
  
          if (($isuser == 1) && ([$custemail] != ""))
          {
            $html = str_replace("XXX_CUSTFIRSTNAME", $custfirstname . " " . $custlastname, $html);
            $html = str_replace("XXX_BOOKINGCODE", $bookingid, $html);
  
  
            SharedSendHtmlMail($gConfig['adminemail'], "Web Enquiry", $custemail, $custfirstname . ' ' . $custlastname, "Online Booking Request", $html);
            //SharedSendHtmlMail($custemail, $custfirstname . ' ' . $custlastname, $gConfig['adminemail'], "Web Enquiry", "Online Booking Request", $body);
          }
        }
       
        else
        {
          //$msg = "Successfully created new booking [$bookingid], The isuser is [$isuser]";
          $msg = "Could not recrod booking [$bookingid] to audit log";
        }
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
