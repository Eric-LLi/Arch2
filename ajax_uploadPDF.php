<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $passingText = "";
  $files = [];
  $booking = Array();

  try
  {
    $bookingcode = SharedGetPostVar("bookingcode");

    //$data = SharedGetPostVar("pdfBase64");

    $pdfBase64 = $_POST["pdfBase64"];
   // $permission = $pdfBase64;

    $newFileName = './pdfreport/'.$bookingcode.".pdf";

    $file = fopen($newFileName,"w");
    //convert passing base64 to binary data, so can be written into pdf.
    $newFileContent = base64_decode($pdfBase64);
     if (fwrite($file, $newFileContent) !== false)
     {
       $rc = 0;
       $msg = 'Save PDF Report Successfully';
       //$msg = 'Loading PDF';
       $passingText = $bookingcode;

       $dbselect = "select b1.code bc from " .
      "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
      "            left join bookings b2 on (b1.id=b2.bookings_id) " .
      "            left join users u2 on (b2.users_id=u2.id) " .
      "where " .
      "b1.id=$bookingcode";

       if ($dbresult = SharedQuery($dbselect, $dblink))
       {
         if ($numrows = SharedNumRows($dbresult))
         {
           while ($dbrow = SharedFetchArray($dbresult))
             $booking = $dbrow;
             $html = file_get_contents('email_pdfToAdmin.html');
             error_log("in save pdf the booking code should be: " + $bookingcode);
               $link = "http://www.archicentreaustraliainspections.com/mybooking.php?bc=" . $booking['bc'];
               error_log($link);
              $html = str_replace("XXX_LINKREPORT", $link, $html);
              $html = str_replace("XXX_BOOKINGCODE", $bookingcode, $html);

         }
       }

       SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $gConfig['adminemail'], 'Officer', 'Booking code ' . $bookingcode . " PDF", $html);
       fclose($file);

       // $emailtemplate = $reportconfirmemails[$booking['itype']];
       // $html = file_get_contents(email_pdf.html);
       // $html = doMacros($html, $booking);
       // SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", 'cindy.huo0@gmail.com', $booking['custfirstname'] . ' ' . 'Officer', "PDF", $html);
  }
     else
     {
       $msg = 'Save Report unsuccessful';
     }
  }

  catch (Exception $e)
  {
    $msg = "Unable to add photo...";
  }

  $response = array("rc" => $rc, "msg" => $msg,"passingText" => $passingText);
  $json = json_encode($response);
  echo $json;
?>
