<?php
    require_once("shared.php");

    global $reportTypes;
    global $reportfiles;
    global $reportemails;
    global $userTypes;
    global $footer; 
    global $header;

    $rc = -1;
    $msg = "";
    $logs = Array();
    $linkedreport = Array();

    try
    {
        if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
        {
            $uuid = $_POST['uuid'];
            $bookingcode = $_POST['bookingcode'];
            $combinedreport = $_POST['combinedreport'];
            $linkedbookingcode = $_POST['linkedbookingcode'];
            error_log("linkedbookingcode is " . $linkedbookingcode);
            error_log("combinedreport is " . $combinedreport);


            //1. get the selected booking audit history table
            $dbselect = "select ".
                        "a1.id logid,".
                        "a1.bookings_id bookingcode,".
                        "a1.event eventid,".
                        "a1.datecreated,".
                        "a1.userscreated_id,".
                        "u1.firstname usercreatedfirstname,".
                        "u1.lastname usercreatedlastname,".
                        "u1.itype usercreatedtype ".
                        "from ".
                        "audit_log a1 left join users u1 on (a1.userscreated_id = u1.id) ". 
                        "where ". 
                        "a1.bookings_id = $bookingcode ". 
                        "and a1.event <> 2 ".
                        "and a1.event <> 7 ".
                        "order by a1.datecreated asc";
            //2. get the linked booking details
            $linkeddbselect = "select " .
                            "b1.id bookingcode," .
                            "b1.bookings_id linkedbookingcode," .
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

                            "b1.itype reportid," .
                            "b1.budget," .
                            "b1.commission," .
                                    "b1.travel," .
                            "b1.spotter," .
                            "b1.cancellationfee," .
                            "b1.notes," .
                            "b1.clientnotes,".

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
                            "b1.meetingonsite," .
                            "b1.renoadvice," .
                            "b1.pestinspection," .

                            "b1.estateagentcompany," .
                            "b1.estateagentcontact," .
                            "b1.estateagentmobile," .
                            "b1.estateagentphone," .
                            "b1.quote_description," .

                            "b1.cardname," .
                            "b1.cardno," .
                            "b1.cardccv2," .
                            "b1.cardexpiry," .

                            "b1.emailcount," .
                            "b1.lastemailed," .
                            "b1.invoicecount," .
                            "b1.lastinvoiced," .
                            "b1.datecompleted," .
                            "b1.datecancelled,".
                            "b1.dateapproved," .
                            "b1.datepaid," .
                            "b1.dateclosed," .

                            "b1.datecreated," .
                            "b1.datemodified," .

                            "b1.userscreated_id usercreatedid," .
                            "b1.usersmodified_id usermdifiedid," .

                            "u1.firstname usercreatedfirstname," .
                            "u1.lastname usercreatedlastname," .
                            "u1.itype usercreatetype, " .

                            "u2.firstname usermodifiedfirstname," .
                            "u2.lastname usermodifiedlastname," .

                            "u3.firstname archfirstname," .
                            "u3.lastname archlastname," .
                            "u3.email archemail," .
                            "u3.mobile archmobile," .
                            "u3.uuid archuuid," .
                            "u3.regno archregno," .
                            "u3.itype " .

                            "from " .
                            "bookings b1 left join users u1 on (b1.userscreated_id=u1.id) " .
                            "            left join users u2 on (b1.usersmodified_id=u2.id) " .
                            "            left join users u3 on (b1.users_id=u3.id) " .
                            "where " .
                            "b1.id = $linkedbookingcode;" ;
                     
            // error_log($dbselect);
            // error_log($linkeddbselect);
            if($dbresult = SharedQuery($dbselect, $dblink))
            {
                if ($numrows = SharedNumRows($dbresult))
                {
                    while($dbrow = SharedFetchArray($dbresult))
                        $logs[] = $dbrow;
                        
                    //2. this booking has log event, and need to get the linked booking's assinged inspector/architect details if it is a combined report
                    $dblinkedresult = SharedQuery($linkeddbselect, $dblink);
                    
                    if($dblinkedresult)
                    {
                        error_log("can get the linked report details");
                        //the selected one is a combined report, need to find the details of other report. 
                        if ($numrows = SharedNumRows($dblinkedresult))
                        {
                            while ($report = SharedFetchArray($dblinkedresult))
                            $linkedreport[] = $report;
                            $rc = 0;
                        }
                        else
                        {
                            $rc = -1;
                            $msg = "2. Unable to fetch the linked booking details...";
                        }
                    }
                    else
                    {
                        $rc = 0;
                    }
                    
                }
                else
                {
                    //even this booking doesn't have log event, still need to check if it has linked booking to fetch details

                    if($combinedreport)
                    {
                        //2. get the linked booking's assinged inspector/architect details if it is a combined report
                        $dblinkedresult = SharedQuery($linkeddbselect, $dblink);
                        if($dblinkedresult)
                        {
                            error_log("can get the linked report details");
                            //the selected one is a combined report, need to find the details of other report. 
                            if ($numrows = SharedNumRows($dblinkedresult))
                            {
                                while ($report = SharedFetchArray($dblinkedresult))
                                    $linkedreport[] = $report;
                                $rc = 0;
                            }
                            else
                            {
                                $rc = -1;
                                $msg = "2. Unable to fetch the linked booking details...";
                            }
                        }
                        else
                        {
                            $rc = 0;
                        }
                    }
                    else
                    {
                        error_log("single report");
                        $rc = 0;
                    }
                    
                    
                }
            }
            else
            {
                $msg = "1.Unable to fetch list of logs...";
            }
        }

    }


    catch (Exception $e)
    {
        $msg = "Unable to fetch booking...";
    }

    $response = array("rc" => $rc, "msg" => $msg, "logs" => $logs,"linkedreport" => $linkedreport);
    $json = json_encode($response);
    echo $json;


?>