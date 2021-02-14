<?php
  require_once("shared.php");

  global $reportTypes;
  global $userTypes;
  global $footer; 
  global $header;
  
  function doMacros($h, $b)
  {
    global $reportTypes;
    global $userTypes;
    
    //Get the contents of the footer and header to the variables. 
    $header = file_get_contents('Email_Header.html');
    $workstate = $b['state'];
    if($workstate == 'NSW')
    {
        $footer = file_get_contents('Email_Footer_NSW.html');
    }
    elseif($workstate == 'SA')
    {
      $footer = file_get_contents('Email_Footer_SA.html');
    }
    else
    {
        $footer = file_get_contents('Email_Footer.html'); 
    }
    $currentyear = date("Y");
    $footer = str_replace("XXX_YEAR",$currentyear,$footer);
    $h = str_replace("XXX_HEADER", $header, $h);
    $h = str_replace("XXX_FOOTER", $footer, $h);
    
    $h = str_replace("XXX_ARCHITECTNAME", $b['archfirstname'] . ' ' . $b['archlastname'], $h);
    $h = str_replace("XXX_ARCHITECTPHONE", $b['archmobile'], $h);


    $h = str_replace("XXX_BOOKINGCODE", $b['bookingcode'], $h);
    $h = str_replace("XXX_CUSTFIRSTLASTNAME", $b['custfirstname'] . ' ' . $b['custlastname'], $h);
    $h = str_replace("XXX_CUSTFIRSTNAME", $b['custfirstname'], $h);
    $h = str_replace("XXX_CUSTADDRESS1", $b['custaddress1'], $h);
    $h = str_replace("XXX_CUSTADDRESS2", $b['custaddress2'], $h);
    $h = str_replace("XXX_CUSTCITY", $b['custcity'], $h);
    $h = str_replace("XXX_CUSTSTATE", $b['custstate'], $h);
    $h = str_replace("XXX_CUSTPOSTCODE", $b['custpostcode'], $h);
    $h = str_replace("XXX_CUSTPHONE", $b['custphone'], $h);
    $h = str_replace("XXX_CUSTMOBILE", $b['custmobile'], $h);
    $h = str_replace("XXX_CUSTEMAIL", $b['custemail'], $h);
    $h = str_replace("XXX_PROPADDRESS1", $b['address1'], $h);
    $h = str_replace("XXX_PROPADDRESS2", $b['address2'], $h);
    $h = str_replace("XXX_PROPCITY", $b['city'], $h);
    $h = str_replace("XXX_PROPSTATE", $b['state'], $h);
    $h = str_replace("XXX_PROPPOSTCODE", $b['postcode'], $h);
    $h = str_replace("XXX_QUOTEDESCRIPTION", $b['quote_description'], $h);

    $h = str_replace("XXX_REPORTTYPE", $reportTypes[$b['itype']], $h);

    $h = str_replace("XXX_ESTATEAGENTCOMPANY", $b['estateagentcompany'], $h);
    $h = str_replace("XXX_ESTATEAGENTCONTACT", $b['estateagentcontact'], $h);
    $h = str_replace("XXX_ESTATEAGENTMOBILE", $b['estateagentmobile'], $h);
    $h = str_replace("XXX_ESTATEAGENTPHONE", $b['estateagentphone'], $h);
    $h = str_replace("XXX_SITEMEETING", $b['meetingonsite']?"yes":"no", $h);
    $h = str_replace("XXX_COMMISSION", $b['commission'], $h);
    $h = str_replace("XXX_TRAVELCOST", $b['travel'], $h);
    $h = str_replace("XXX_SPOTTER", $b['spotter'], $h);
    $h = str_replace("XXX_STOREYS", $b['numstories'], $h);
    $h = str_replace("XXX_BEDROOMS", $b['numbedrooms'], $h);
    $h = str_replace("XXX_BATHROOMS", $b['numbathrooms'], $h);
    $h = str_replace("XXX_ROOMS", $b['numrooms'], $h);
    $h = str_replace("XXX_OUTBUILDINGS", $b['numoutbuildings'], $h);
    $h = str_replace("XXX_PROPERTYAGE", $b['age'], $h);
    $h = str_replace("XXX_NOTES", $b['notes'], $h);
    $h = str_replace("XXX_CONSTRUCTION", $b['construction'], $h);
    $h = str_replace("XXX_ADVICE", $b['renoadvice']?"yes":"no", $h);
    $h = str_replace("XXX_INSPECTION", $b['pestinspection']?"yes":"no", $h);

    $h = str_replace("XXX_COMBOARCHITECTNAME", $b['archfirstname'] . ' ' . $b['archlastname'], $h);
    $h = str_replace("XXX_COMBOARCHITECTMOBILE", $b['archmobile'], $h);

    $h = str_replace("XXX_COMBOINSPECTORNAME", $b['linked_archfirstname'] . ' ' . $b['linked_archlastname'], $h);
    $h = str_replace("XXX_COMBOINSPECTORMOBILE", $b['linked_archmobile'], $h);

    $h = str_replace("XXX_ITYPENAME", $userTypes[$b['usertype']], $h);

    return $h;
  }

  $rc = -1;
  $msg = "";
 
 


  try
  {
    if (isset($_POST['uuid']) && isset($_POST['archuuid']) && isset($_POST['bookingcode']) && isset($_POST['usercreateid']) && isset($_POST['usercreatetype']) )
    {
      $uuid = SharedGetPostVar("uuid");
      $archuuid = SharedGetPostVar("archuuid");
      $bookingcode = SharedGetPostVar("bookingcode");
      $usercreateid = SharedGetPostVar("usercreateid");
      $usercreatetype = SharedGetPostVar("usercreatetype");

      error_log("the created user is $usercreateid");
      error_log("the assigned architect uuid $archuuid");

      error_log("the created user type is $usercreatetype");

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $archid = SharedGetUserIdFromUuid($archuuid, $dblink);
      error_log('archid: $archid');
      $spotteremail = "";
      $spotterfirstname = "";
      $spotterlastname = "";

      if ($archid != 0)
      {
        $dbupdate = "update bookings set " .
                    "users_id=$archid," .
                    "datemodified=CURRENT_TIMESTAMP," .
                    "usersmodified_id=$userid " .
                    "where " .
                    "id=$bookingcode";
        //error_log($dbupdate);
        //fetch the spotter email
        if ($dbresult = SharedQuery($dbupdate, $dblink))
        {
          // $rc = 0;

          $dbselectspotter = "select " .
                              "email, ".
                              "firstname, ".
                              "lastname ".
                              "from users ".
                              "where ".
                              "id=$usercreateid";
          error_log($dbselectspotter);
          if ($dbspotterresult = SharedQuery($dbselectspotter, $dblink))
          {
            if ($numrows = SharedNumRows($dbspotterresult))
            {
              while ($dbspotterrow = SharedFetchArray($dbspotterresult))
                $spotter = $dbspotterrow;
                $spotteremail = $spotter['email'];
                $spotterfirstname = $spotter['firstname'];
                $spotterlastname = $spotter['lastname'];
                error_log("spotteremail: $spotteremail");
                error_log("spotterfirstname: $spotterfirstname");
                error_log("spotterlastname: $spotterlastname");
    
                // $rc = 0;

                // Fetch booking details so we can email customer...
                $dbselect = "select " .
                            "b1.id bookingcode," .
                            "b1.custfirstname," .
                            "b1.custlastname," .
                            "b1.custemail," .
                            "b1.custmobile," .
                            "b1.custphone," .
                            "b1.custaddress1," .
                            "b1.custaddress2," .
                            "b1.custcity," .
                            "b1.custpostcode," .
                            "b1.custstate," .
                            "b1.numstories," .
                            "b1.numbedrooms," .
                            "b1.numbathrooms," .
                            "b1.numrooms," .
                            "b1.numoutbuildings," .
                            "b1.address1," .
                            "b1.address2," .
                            "b1.city," .
                            "b1.state," .
                            "b1.postcode," .
                            "b1.construction," .
                            "b1.age," .
                            "b1.notes," .
                            "b1.meetingonsite," .
                            "b1.renoadvice," .
                            "b1.pestinspection," .
                            "b1.commission," .
                            "b1.travel travel," .
                            "b1.spotter spotter," .

                            "b1.estateagentcompany," .
                            "b1.estateagentcontact," .
                            "b1.estateagentmobile," .
                            "b1.estateagentphone," .
                            "b1.quote_description," .


                            "b1.itype," .
                            "u1.itype usertype," .
                            "u1.email archemail," .
                            "u1.firstname archfirstname," .
                            "u1.lastname archlastname," .

                            "u1.address1 archaddress1," .
                            "u1.address2 archaddress2," .
                            "u1.city archcity," .
                            "u1.state archstate," .
                            "u1.postcode archpostcode," .
                            "u1.regno archregno," .
                            "u1.company regcompany," .
                            "u1.phone archphone," .
                            "u1.mobile archmobile," .

                            // Linked booking fro combined reports... (if any)
                            "b2.id linked_bookingcode," .
                            "b2.itype linked_itype," .
                            "u2.itype linked_usertype," .
                            "u2.email linked_archemail," .
                            "u2.firstname linked_archfirstname," .
                            "u2.lastname linked_archlastname," .

                            "u2.address1 linked_archaddress1," .
                            "u2.address2 linked_archaddress2," .
                            "u2.city linked_archcity," .
                            "u2.state linked_archstate," .
                            "u2.postcode linked_archpostcode," .
                            "u2.regno linked_archregno," .
                            "u2.company linked_regcompany," .
                            "u2.phone linked_archphone," .
                            "u2.mobile linked_archmobile " .

                            "from " .
                            "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
                            "            left join bookings b2 on (b1.id=b2.bookings_id) " .
                            "            left join users u2 on (b2.users_id=u2.id) " .
                            "where " .
                            "b1.id=$bookingcode";

                //error_log($dbselect);
                if ($dbresult = SharedQuery($dbselect, $dblink))
                {
                  if ($numrows = SharedNumRows($dbresult))
                  {
                    $booking = null;
                    while ($dbrow = SharedFetchArray($dbresult))
                        $booking = $dbrow;

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
                      if($dbresult = SharedQuery($recordsql, $dblink))
                      {
                        $rc = 0;
                        // Let customer know...
                        if ($booking['custemail'] != "")
                        {
                        
                          error_log( $reportconfirmemails[$booking['itype']]);
                          $emailtemplate = $reportconfirmemails[$booking['itype']];
                          // error_log('checking itype');
                          // error_log($booking['itype']);
                          // error_log($emailtemplate);
                          // $html = file_get_contents('email_architectallocation.html');
                          $html = file_get_contents($emailtemplate);
                          $html = doMacros($html, $booking);
                          $custemail = explode(",",$booking['custemail']);
                          SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $custemail, $booking['custfirstname'] . ' ' . $booking['custlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Assessment/Inspection Confirmation", $html);
                        }

                        // Let architect/inspector know...
                        if ($booking['archemail'] != "")
                        {
                          //single report, only need to send one email
                          error_log($booking['itype']);
                          if ($booking['itype'] == 2) //email to inspector only
                          {
                            $html = file_get_contents('email_inspectornotification.html');
                          }
                          else
                          {
                            $html = file_get_contents('email_architectnotification.html');
                          }
                          
                          $html = doMacros($html, $booking);

                          if($usercreatetype == '99')
                          {
                            error_log("the spotter is the admin, don't need to cc at all. only send to the assigned inspector and architect");
                            $archemail = $booking['archemail'];
                            error_log("archemail: $archemail");
                            SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Assessment/Inspection Confirmation", $html);

                          }
                          else
                          {
                            if($usercreateid == $archid)
                            {
                              error_log("the assigned architect/inspector is the same spotter don't need to cc");
                              $archemail = $booking['archemail'];
                              error_log("archemail: $archemail");
                              SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Assessment/Inspection Confirmation", $html);

                            }
                            else
                            {
                              error_log("the assigned architect/inspector is not the same as spooter and the spotter is not the admin, need to cc");
                              error_log($spotteremail);
                              error_log($booking['archemail']);
                              SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $booking['bookingcode'] . " - " . $reportTypes[$booking['itype']] . " Assessment/Inspection Confirmation", $html,$spotteremail,$spotterfirstname." ".$spotterlastname);

                            }
                          }
                        }

                      }
                      else
                      {
                        $msg = "Error setting booking status...";
                      } 
                  }
                }
            }
            else
              $msg = "Unable to fetch booking details...";
          }         
        }
        else
          $msg = "Error assigning architect...";
      }
      else
        $msg = "Unable to retrieve architect details for assignment...";
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
