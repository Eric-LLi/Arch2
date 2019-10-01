<?php
  require_once("shared.php");

  global $gConfig;

  $rc = -1;
  $msg = "";
  $bookingcode = "";
  $bookingid = 0;

  try
  {
    if (isset($_POST['bookingcode']) && isset($_POST['uuid']))
    {
      $bookingcode = $_POST['bookingcode'];
      $bookingid = $_POST['bookingcode'];
      $uuid = $_POST['uuid'];

      $custfirstname = $_POST['custfirstname'];
      $custlastname = $_POST['custlastname'];
      $custemail = $_POST['custemail'];
      $reportid = $_POST['reportid'];
      $combinedtimberid = $_POST['combinedtimberid'];
      $combinedpropertyid = $_POST['combinedpropertyid'];
      $notes = $_POST['notes'];
      $clientnotes = $_POST['clientnotes'];
      error_log("bookingcode: ".$bookingcode);
      error_log("combinedpropertyid: ".$combinedpropertyid);
      error_log('combinedtimberid: '.$combinedtimberid);
      error_log('reportid: '.$reportid);
      // error_log($custemail);
      // split("\,",$custemail);
      // error_log(print_r(explode(',',$custemail),TRUE));
      // error_log(SharedNullOrQuoted($custemail, 50, $dblink));
      // $custemail = explode(',',$custemail,-1);
      
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
      $hascancellation = false;
	  
      $budget = null;
      $commission = null;
      $travel = null;
      $spotter = null;
      $cancellationfee = null;

      $vars1 = "";
      $vars2 = "";
      $vars3 = "";
      $vars4 = "";
      $vars5 = "";
      $vars6 = "";

      error_log(isset($_POST['budget']));
      if (isset($_POST['budget']))
      {
        $budget = SharedNullOrQuoted($_POST['budget'], 50, $dblink);
        error_log("1 budget: ".$budget);
        if($budget != "null")
        {
          $hasbudget = true;
        }
        error_log("1 has budget ".$hasbudget);
        
      }
      if (isset($_POST['commission']))
      {
        $commission = SharedNullOrQuoted($_POST['commission'], 50, $dblink);
        $hascommission = true;
      }
      if (isset($_POST['travel']))
      {
        $travel = SharedNullOrQuoted($_POST['travel'], 50, $dblink);
        $hastravel = true;
      }
      if (isset($_POST['spotter']))
      {
        $spotter = SharedNullOrQuoted($_POST['spotter'], 50, $dblink);
        $hasspotter = true;
      }
      if (isset($_POST['cancellationfee']))
      {
        $cancellationfee = SharedNullOrQuoted($_POST['cancellationfee'], 50, $dblink);
        $hascancellation = true;
      }

     
      if($reportid != 3)
      {
        error_log("report id is not 3");
        if ($hasbudget)
        {
          $vars1 = "budget=" .$budget. ",";
        }
        else
        {
          $vars1 = "budget=null,";
        }

        if ($hascommission)
        {
          $vars2 = "commission=".$commission. ",";
        }

        if ($hastravel)
        {
          $vars3 = "travel=".$travel. ",";
        }

        if ($hasspotter)
        {
          $vars4 = "spotter=".$spotter. ",";
        }

        if ($hascancellation)
        {
          $vars5 = "cancellationfee=".$cancellationfee. ",";
        }
      }
      else //If selects combined report, timber one.set the budget to 0.0001, so its status can be 'Not Paid'/ .  
      {
        error_log("report id is 3");
        if($hasbudget == true)
        {
          $vars1 = "budget=".SharedNullOrNum(0.0001, $dblink). ",";
        }
        else
        {
          $vars1 = "budget=null,";
        }
      }
      
      

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


      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbinsert1 = "update bookings set " .
                  "custfirstname=" . SharedNullOrQuoted($custfirstname, 50, $dblink) . "," .
                  "custlastname=" . SharedNullOrQuoted($custlastname, 50, $dblink) . "," .
                  "custemail=" . SharedNullOrQuoted($custemail, 50, $dblink) . "," .
                  "custmobile=" . SharedNullOrQuoted($custmobile, 50, $dblink) . "," .
                  "custphone=" . SharedNullOrQuoted($custphone, 50, $dblink) . "," .
                  "custaddress1=" . SharedNullOrQuoted($custaddress1, 50, $dblink) . "," .
                  "custaddress2=" . SharedNullOrQuoted($custaddress2, 50, $dblink) . "," .
                  "custcity=" . SharedNullOrQuoted($custcity, 50, $dblink) . "," .
                  "custpostcode=" . SharedNullOrQuoted($custpostcode, 50, $dblink) . "," .
                  "custstate=" . SharedNullOrQuoted($custstate, 50, $dblink) . "," .

                  "itype=" . SharedNullOrQuoted($reportid, 50, $dblink) . "," .
                  $vars1 .
                  $vars2 .
                  $vars3 .
                  $vars4 .
                  $vars5 .
                  "notes=" . SharedNullOrQuoted($notes, 1000, $dblink) . "," .
                  "clientnotes=" . SharedNullOrQuoted($clientnotes, 1000, $dblink) . "," .

                  "numstories=" . SharedNullOrNum($numstories, $dblink) . "," .
                  "numbedrooms=" . SharedNullOrNum($numbedrooms, $dblink) . "," .
                  "numbathrooms=" . SharedNullOrNum($numbathrooms, $dblink) . "," .
                  "numrooms=" . SharedNullOrNum($numrooms, $dblink) . "," .
                  "numoutbuildings=" . SharedNullOrNum($numbuildings, $dblink) . "," .

                  "address1=" . SharedNullOrQuoted($address1, 50, $dblink) . "," .
                  "address2=" . SharedNullOrQuoted($address2, 50, $dblink) . "," .
                  "city=" . SharedNullOrQuoted($city, 50, $dblink) . "," .
                  "state=" . SharedNullOrQuoted($state, 50, $dblink) . "," .
                  "postcode=" . SharedNullOrQuoted($postcode, 50, $dblink) . "," .
                  "construction=" . SharedNullOrQuoted($construction, 100, $dblink) . "," .
                  "age=" . SharedNullOrQuoted($age, 50, $dblink) . "," .
                  "meetingonsite=" . SharedNullOrNum($meetingonsite, $dblink) . "," .
                  "renoadvice=" . SharedNullOrNum($renoadvice, $dblink) . "," .
                  "pestinspection=" . SharedNullOrNum($pestinspection, $dblink) . "," .

                  "estateagentcompany=" . SharedNullOrQuoted($estateagentcompany, 50, $dblink) . "," .
                  "estateagentcontact=" . SharedNullOrQuoted($estateagentcontact, 50, $dblink) . "," .
                  "estateagentmobile=" . SharedNullOrQuoted($estateagentmobile, 20, $dblink) . "," .
                  "estateagentphone=" . SharedNullOrQuoted($estateagentphone, 20, $dblink) . "," .
                  "quote_description=" . SharedNullOrQuoted($quotedescription, 1000, $dblink) . "," .

                  "datemodified=CURRENT_TIMESTAMP," .
                  "usersmodified_id=$userid " .
                  "where " .
                  "id=$bookingcode";
      error_log($dbinsert1);

      //check if the report is combined report _ property assessment report(reportid == 24). 
      //If it is, needs to change its link timber pest booking as well. 
     
      $reportid = number_format($reportid,0);
      error_log(gettype($reportid));
      error_log($reportid);
      if($reportid == 24)
      {
        error_log("select combined report-property assessment report, after update property, need to udpate timber without the amount related fileds");
        if ($dbresult = SharedQuery($dbinsert1, $dblink))
        {
          if($combinedtimberid == null)
          {
            error_log("select combined report-propety assessment report, but this is created before the new method update, need to use another id to update the timber pest report, because the old system, these two reports' id are in reverse order");
            $combinedtimberid = $combinedpropertyid;
          }
          error_log("has budget ".$hasbudget);
          error_log("budget: ".$budget);
          if($hasbudget)
          {
            $vars6 = "budget=0.0001,";
          }
          else
          {
            $vars6 = "budget=null,";
          }
          error_log($vars6);
          $dbinsert2 = "update bookings set " .
                      "custfirstname=" . SharedNullOrQuoted($custfirstname, 50, $dblink) . "," .
                      "custlastname=" . SharedNullOrQuoted($custlastname, 50, $dblink) . "," .
                      "custemail=" . SharedNullOrQuoted($custemail, 50, $dblink) . "," .
                      "custmobile=" . SharedNullOrQuoted($custmobile, 50, $dblink) . "," .
                      "custphone=" . SharedNullOrQuoted($custphone, 50, $dblink) . "," .
                      "custaddress1=" . SharedNullOrQuoted($custaddress1, 50, $dblink) . "," .
                      "custaddress2=" . SharedNullOrQuoted($custaddress2, 50, $dblink) . "," .
                      "custcity=" . SharedNullOrQuoted($custcity, 50, $dblink) . "," .
                      "custpostcode=" . SharedNullOrQuoted($custpostcode, 50, $dblink) . "," .
                      "custstate=" . SharedNullOrQuoted($custstate, 50, $dblink) . "," .

                      "itype=" . SharedNullOrQuoted(3, 50, $dblink) . "," .
                      "notes=" . SharedNullOrQuoted($notes, 1000, $dblink) . "," .

                      "numstories=" . SharedNullOrNum($numstories, $dblink) . "," .
                      "numbedrooms=" . SharedNullOrNum($numbedrooms, $dblink) . "," .
                      "numbathrooms=" . SharedNullOrNum($numbathrooms, $dblink) . "," .
                      "numrooms=" . SharedNullOrNum($numrooms, $dblink) . "," .
                      "numoutbuildings=" . SharedNullOrNum($numbuildings, $dblink) . "," .

                      "address1=" . SharedNullOrQuoted($address1, 50, $dblink) . "," .
                      "address2=" . SharedNullOrQuoted($address2, 50, $dblink) . "," .
                      "city=" . SharedNullOrQuoted($city, 50, $dblink) . "," .
                      "state=" . SharedNullOrQuoted($state, 50, $dblink) . "," .
                      "postcode=" . SharedNullOrQuoted($postcode, 50, $dblink) . "," .
                      "construction=" . SharedNullOrQuoted($construction, 100, $dblink) . "," .
                      "age=" . SharedNullOrQuoted($age, 50, $dblink) . "," .
                      "meetingonsite=" . SharedNullOrNum($meetingonsite, $dblink) . "," .
                      "renoadvice=" . SharedNullOrNum($renoadvice, $dblink) . "," .
                      "pestinspection=" . SharedNullOrNum($pestinspection, $dblink) . "," .

                      "estateagentcompany=" . SharedNullOrQuoted($estateagentcompany, 50, $dblink) . "," .
                      "estateagentcontact=" . SharedNullOrQuoted($estateagentcontact, 50, $dblink) . "," .
                      "estateagentmobile=" . SharedNullOrQuoted($estateagentmobile, 20, $dblink) . "," .
                      "estateagentphone=" . SharedNullOrQuoted($estateagentphone, 20, $dblink) . "," .
                      "quote_description=" . SharedNullOrQuoted($quotedescription, 1000, $dblink) . "," .

                      $vars6.

                      "datemodified=CURRENT_TIMESTAMP," .
                      "usersmodified_id=$userid " .
                      "where " .
                      "id=$combinedtimberid";
          error_log($dbinsert2);
          if($dbresult = SharedQuery($dbinsert2, $dblink))
          {
            $msg = "Successfully updated booking [$bookingid] and [$combinedtimberid]";
            $rc = 0;
          }
          else
          {
            $msg = "Error updating booking please try again...";
          }
         
        }
        else
        {
          $msg = "Error updating booking please try again...";
        }
      }
      else
      {
        error_log("single report, combined report but select timber report. ");
        if ($dbresult = SharedQuery($dbinsert1, $dblink))
        {
          $msg = "Successfully updated booking [$bookingid]";
          $rc = 0;
        }
        else
        {
          $msg = "Error updating booking please try again...";
        }
       
      }
      
      
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to update booking...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
