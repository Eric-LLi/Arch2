<?php
  require_once("shared.php");
  require_once("js/dompdf/autoload.inc.php");

  // reference the Dompdf namespace
  use Dompdf\Dompdf;
  $rc = -1;
  $msg = "";
  global $footer; 
  global $header;
global $reportTypes;

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
    {
      $uuid = $_POST['uuid'];
      $bookingcode = $_POST['bookingcode'];
      $header = file_get_contents('Email_Header.html');
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $linkBookingID = '';
      $bookings_id = '';
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
                  "b1.cancellationfee," .
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

                  // Linked booking fro combined reports... (if any)
                  "b2.id linked_bookingcode," .
                  "u1.address1 archaddress1," .
                  "u1.address2 archaddress2," .
                  "u1.city archcity," .
                  "u1.state archstate," .
                  "u1.postcode archpostcode," .
                  "u1.regno archregno," .
                  "u1.company regcompany," .
                  "u1.phone archphone," .
                  "u1.mobile archmobile," .

                  "u2.address1 linked_archaddress1," .
                  "u2.address2 linked_archaddress2," .
                  "u2.city linked_archcity," .
                  "u2.state linked_archstate," .
                  "u2.postcode linked_archpostcode," .
                  "u2.regno linked_archregno," .
                  "u2.company linked_regcompany," .
                  "u2.phone linked_archphone," .
                  "u2.mobile linked_archmobile, " .

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

        error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          $booking = null;
          
          while ($dbrow = SharedFetchArray($dbresult))
              $booking = $dbrow;
              //error_log($booking['archemail']);
            
              $linkBookingID = $booking['linked_bookingcode'];
              $workstate = $booking['state'];//the property's state, not the client's living state. 
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
              
              //Footer , get current year. 
              $currentyear = date("Y");
              $footer = str_replace("XXX_YEAR",$currentyear,$footer);

              // Let customer know, with the attached refund pdf...
               if ($booking['custemail'] != "")
              {
                error_log('i am in sending cancel notification email to customer');

                //Email Body
                $html = file_get_contents('email_cancelreportnotification.html');
                $html = str_replace("XXX_CUSTFIRSTNAME", $booking['custfirstname'], $html);
                $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
                $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['reportid']], $html);
                $html = str_replace("XXX_HEADER", $header, $html);
                $html = str_replace("XXX_FOOTER", $footer, $html);
                $html = str_replace("XXX_BOOKINGCODE", $bookingcode, $html);

                $custemail = explode(",",$booking['custemail']);

                //Invoice
                $invoice = file_get_contents('invoices_templates/refund.html');
                $invoice_header = file_get_contents('invoice_header.html');
                $budget = $booking['budget'];
                $cancellationfee = $booking['cancellationfee'];
                $refund = $budget - $cancellationfee;
                $gst = $refund - ($refund/1.1);
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
                $invoice = str_replace("XXX_BUDGET", $budget, $invoice);
                $invoice = str_replace("XXX_GST", number_format($gst,2), $invoice);
                $invoice = str_replace("XXX_REFUND", number_format($refund,2), $invoice);
                $invoice = str_replace("XXX_CANCELLATIONFEE", $cancellationfee, $invoice);
                $invoice = str_replace("XXX_BOOKINGCODE", $bookingcode, $invoice);
                $invoice = str_replace("XXX_REPORTTYPECAP", strtoupper($reportTypes[$booking['reportid']]), $invoice);
                $invoice = str_replace("XXX_REPORTTYPE", $reportTypes2[$booking['reportid']], $invoice);
              
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
                file_put_contents("invoices_pdf/refund/$bookingcode.pdf",$invoicePDF);
                // file_put_contents("quotes/$clientid.html",$emailtemplate);
                $attachmentPath = "invoices_pdf/refund/$bookingcode.pdf";
                error_log($attachmentPath);


                SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $custemail, $booking['custfirstname'] . ' ' . $booking['custlastname'], $bookingcode . " - " . $reportTypes[$booking['reportid']] . " Booking Cancellation Notification", $html,'','',$attachmentPath);
              }

              //let architect/insespector knows
              if ($booking['archemail'] != "")
              {
                  //single report, only need to send one email to one architect;
                  error_log("only select one single report,architect has email");
                  $html = file_get_contents('email_architectcancelnotification.html');
                  $html = str_replace("XXX_ARCHITECTNAME", $booking['archfirstname'] . ' ' . $booking['archlastname'], $html);
                  $html = str_replace("XXX_BOOKINGCODE", $booking['bookingcode'], $html);
                  $html = str_replace("XXX_REPORTTYPE", $reportTypes[$booking['reportid']], $html);
                  $html = str_replace("XXX_HEADER", $header, $html);
                  $html = str_replace("XXX_FOOTER", $footer, $html);
                  SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $booking['archemail'], $booking['archfirstname'] . ' ' . $booking['archlastname'], $reportTypes[$booking['reportid']] ." Booking Cancellation Notification", $html);
              }       
        }


        $dbupdate = "update bookings set " .
                    "users_id=null," .
                    "datecancelled=CURRENT_TIMESTAMP," .
                    "userscancelled_id=$userid " .
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
                    12 ."," .
                    SharedNullOrNum($userid, $dblink) .
                    ")";
        error_log($dbupdate);
        error_log($recordsql);
        $dbupdate = "update bookings set " .
        $dbresult1 = SharedQuery($dbupdate, $dblink);
        $dbresult2 = SharedQuery($recordsql, $dblink);;
        if ($dbresult1 && $dbresult2 )
        {
          $rc = 0;
          $msg = "Booking has been cancelled";
        }
        else
        {
          $msg = "Error removing booking...";
        }          
      }
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to remove booking...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
