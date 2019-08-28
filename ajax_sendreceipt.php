<?php
    require_once("shared.php");
    require_once("js/dompdf/autoload.inc.php");

    // reference the Dompdf namespace
    use Dompdf\Dompdf;
    global $reportTypes;
    global $reportemails;

    $rc = -1;
    $msg = "";
	$booking = Array();

    try
    {
        if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
        {
            error_log("send receipt");
            $uuid = SharedGetPostVar("uuid");
            $bookingcode = SharedGetPostVar("bookingcode");
            $userid = SharedGetUserIdFromUuid($uuid, $dblink);
            $timberid = SharedGetPostVar("timberid");
           
            // Fetch booking details so we can email customer...
            $dbselect = "select " .
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
                        "b1.notes," .

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
                        "b1.datecompleted," .
                        "b1.datecancelled,".
                        "b1.dateapproved," .
                        "b1.datepaid," .
                        "b1.dateclosed," .

                        "b1.datecreated," .
                        "b1.datemodified," .

                        "b1.userscreated_id usercreatedid," .
                        "b1.usersmodified_id usermdifiedid," .

                        // Linked booking fro combined reports... (if any)
                        "b2.id linked_bookingcode," .

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
                        "            left join bookings b2 on (b1.id=b2.bookings_id) " .
                        "            left join users u3 on (b1.users_id=u3.id) " .						
                        "where " .
                        "b1.id=$bookingcode";
            if ($dbresult = SharedQuery($dbselect, $dblink))
            {
                if ($numrows = SharedNumRows($dbresult))
                {
                    $booking = null;
                    while ($dbrow = SharedFetchArray($dbresult))
                        $booking = $dbrow;

                        if ($booking['custemail'] != "")
                        {
                            
                            $emailcode = "";
                            $dbupdate1 = "";
                            $dbupdate2 = "";
                            $workstate = $booking['state'];//the property's state, not the client's living state. 
                            if($workstate == 'NSW')
                            {
                                $footer = file_get_contents('Email_Footer_NSW.html');
                            }
                            else
                            {
                                $footer = file_get_contents('Email_Footer.html'); 
                            }
                            

                            error_log('the report type is '. $reportTypes[$booking['reportid']]);

                            $html = file_get_contents('email_paidconfirm.html');
                            $invoice_header = file_get_contents('invoice_header.html');
                            $invoice = file_get_contents('invoices_templates/paid.html');                           
                            $header = file_get_contents('Email_Header.html');
                            // $footer = file_get_contents('Email_Footer.html'); 
                            
                            //Email Body
                            $html = str_replace("XXX_HEADER", $header, $html);
                            $html = str_replace("XXX_FOOTER", $footer, $html);
                            $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
                            
                            $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['reportid']], $html);
                            $html = str_replace("XXX_PROPADDRESS1", $booking['address1'], $html);
                            $html = str_replace("XXX_PROPADDRESS2", $booking['address2'], $html);
                            $html = str_replace("XXX_PROPCITY", $booking['city'], $html);
                           
                            //Invoice Body
                            $budget = $booking['budget'];
                            $gst = number_format($budget - $budget/1.1,2);
                            error_log('gst is '. $gst);
                            
                            $invoice = str_replace("XXX_HEADER", $invoice_header, $invoice);
                            $invoice = str_replace("XXX_FOOTER", $footer, $invoice);
                            $invoice = str_replace("XXX_DATE", date("j F\, Y"), $invoice);
                            $invoice = str_replace("XXX_CUSTEMAIL", $booking['custemail'], $invoice);
                            $invoice = str_replace("XXX_CUSTFIRSTLASTNAME", $booking['custfirstname'] . ' ' . $booking['custlastname'], $invoice);
                            $invoice = str_replace("XXX_CUSTADDRESS1", $booking['custaddress1'], $invoice);
                            $invoice = str_replace("XXX_CUSTADDRESS2", $booking['custaddress2'], $invoice);
                            $invoice = str_replace("XXX_CUSTCITY", $booking['custcity'], $invoice);
                            $invoice = str_replace("XXX_CUSTSTATE", $booking['custstate'], $invoice);
                            $invoice = str_replace("XXX_CUSTPOSTCODE", $booking['custpostcode'], $invoice);
                            $invoice = str_replace("XXX_PROPADDRESS1", $booking['address1'], $invoice);
                            $invoice = str_replace("XXX_PROPADDRESS2", $booking['address2'], $invoice);
                            $invoice = str_replace("XXX_PROPCITY", $booking['city'], $invoice);
                            $invoice = str_replace("XXX_REPORTTYPECAP", strtoupper($reportTypes[$booking['reportid']]), $invoice);
                            $invoice = str_replace("XXX_REPORTTYPE", $reportTypes2[$booking['reportid']], $invoice);
                            if($timberid == "")
                            {
                                error_log("timberid is empty, so single report");
                                $emailcode = $bookingcode;
                                $invoice = str_replace("XXX_BOOKINGCODE", $bookingcode, $invoice);
                                $html = str_replace("XXX_BOOKINGCODE", $bookingcode, $html);
                                //$dbupdate1 = "update bookings set lastemailed=current_timestamp,emailcount=emailcount+1 where id=$bookingcode";
                            }
                            else
                            {
                                error_log('has timberid, combined report');
                                $emailcode = $bookingcode.'&'.$timberid;
                                $invoice = str_replace("XXX_BOOKINGCODE", $bookingcode.'&'.$timberid, $invoice);
                                $html = str_replace("XXX_BOOKINGCODE", $bookingcode.'&'.$timberid, $html);
                                //$dbupdate1 = "update bookings set lastemailed=current_timestamp,emailcount=emailcount+1 where id=$bookingcode";
                                //$dbupdate2 = "update bookings set lastemailed=current_timestamp,emailcount=emailcount+1 where id=$timberid";
                            }
                            
                            $invoice = str_replace("XXX_BUDGET", $budget, $invoice);
                            $invoice = str_replace("XXX_GST", $gst, $invoice);

                            //Convert the invoice to pdf
                            error_log("converting html to pdf");
                            $dompdf = new Dompdf();
                            $dompdf->loadHtml($invoice);
                            // (Optional) Setup the paper size and orientation
                            $dompdf->setPaper('A4', 'portrait');
                            // Render the HTML as PDF
                            $dompdf->render();
                            //Output the pdf
                            $invoicePDF = $dompdf -> output();
                            $savepath = "invoices_pdf/paid/".$bookingcode."_Receipt.pdf";
                            file_put_contents("invoices_pdf/paid/$bookingcode.pdf",$invoicePDF);
                            // file_put_contents("quotes/$clientid.html",$emailtemplate);
                            $attachmentPath = "invoices_pdf/paid/$bookingcode.pdf";
                            error_log($attachmentPath);

                            
                            SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['custemail'], $booking['custfirstname'] . ' ' . $booking['custlastname'], $emailcode . " - " . $reportTypes[$booking['reportid']] . " Receipt", $html,"","",$attachmentPath);
                        
                            // if($dbupdate2 == "")
                            // {
                            //     SharedQuery($dbupdate1, $dblink);
                            // }
                            // else
                            // {
                            //     SharedQuery($dbupdate1, $dblink);
                            //     SharedQuery($dbupdate2, $dblink);
                            // }
                            $rc = 0;
                            $msg = "Send the receipt to customer successfully";
                        }
                        else
                        {
                            $msg = "Please enter customer email first";
                        }
                }
            }
            else
            {
                $msg = "Unable to retrieve architect details for assignment...";
            }
                
        }
        else
        {
            $msg = "Missing parameters...";
        }
        
    }
    catch (Exception $e)
    {
        $msg = "Unable to assign architect...";
    }

    $response = array("rc" => $rc, "msg" => $msg);
    $json = json_encode($response);
    echo $json;
?>
