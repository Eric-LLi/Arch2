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

    try
    {
        if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
        {
            $uuid = $_POST['uuid'];
            $bookingcode = $_POST['bookingcode'];





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
                        "order by a1.datecreated asc";
            error_log($dbselect);
            if($dbresult = SharedQuery($dbselect, $dblink))
            {
                if ($numrows = SharedNumRows($dbresult))
                {
                    while($dbrow = SharedFetchArray($dbresult))
                        $logs[] = $dbrow;
                    $rc = 0;
                }
                else
                {
                    $rc = 0;
                    
                }
            }
            else
            {
                $msg = "2.Unable to fetch list of logs...";
            }
        }

    }


    catch (Exception $e)
    {
        $msg = "Unable to fetch booking...";
    }

    $response = array("rc" => $rc, "msg" => $msg, "logs" => $logs);
    $json = json_encode($response);
    echo $json;


?>