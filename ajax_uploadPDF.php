<?php
  require_once("shared.php");
  // require_once('ilovepdf-php/init.php');
  // use Ilovepdf\CompressTask;

  $rc = -1;
  $msg = "";
  $passingText = "";
  $files = [];
  $booking = Array();
  global $reportTypes;

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

      //  try {
      //Compress pdf report.
      // $myTask = new CompressTask('project_public_487edc28f75e9b3656e75c18469d6e64_3oAhE09dddba479e009ee6c13b7ff9e12ac68', 'secret_key_bdb8176785d6b23ab15616dd3ee0d38a_fT0dSabdb8ec6df861686ab8cc3c928482a7f');

      // $file = $myTask->addFile($newFileName);

      // $myTask->execute();

      // $myTask->download("./pdfreport/");
      
      // } catch (\Ilovepdf\Exceptions\StartException $e) {
      //     echo "An error occured on start: " . $e->getMessage() . " ";
      //     // Authentication errors
      // } catch (\Ilovepdf\Exceptions\AuthException $e) {
      //     echo "An error occured on auth: " . $e->getMessage() . " ";
      //     echo implode(', ', $e->getErrors());
      //     // Uploading files errors
      // } catch (\Ilovepdf\Exceptions\UploadException $e) {
      //     echo "An error occured on upload: " . $e->getMessage() . " ";
      //     echo implode(', ', $e->getErrors());
      //     // Processing files errors
      // } catch (\Ilovepdf\Exceptions\ProcessException $e) {
      //     echo "An error occured on process: " . $e->getMessage() . " ";
      //     echo implode(', ', $e->getErrors());
      //     // Downloading files errors
      // } catch (\Ilovepdf\Exceptions\DownloadException $e) {
      //     echo "An error occured on process: " . $e->getMessage() . " ";
      //     echo implode(', ', $e->getErrors());
      //     // Other errors (as connexion errors and other)
      // } catch (\Exception $e) {
      //     echo "An error occured: " . $e->getMessage();
      // }

      $rc = 0;
      $msg = 'Save PDF Report Successfully';
      //$msg = 'Loading PDF';
      $passingText = $bookingcode;
      error_log("no need to send the email with link to the office email");

      // $dbselect = "select b1.code bc, b1.itype from " .
      //             "bookings b1 left join users u1 on (b1.users_id=u1.id) " .
      //             "            left join bookings b2 on (b1.id=b2.bookings_id) " .
      //             "            left join users u2 on (b2.users_id=u2.id) " .
      //             "where " .
      //             "b1.id=$bookingcode";

      //   if ($dbresult = SharedQuery($dbselect, $dblink))
      //   {
      //     if ($numrows = SharedNumRows($dbresult))
      //     {
      //       while ($dbrow = SharedFetchArray($dbresult))
      //         $booking = $dbrow;
      //         $html = file_get_contents('email_pdfToAdmin.html');
      //         error_log("in save pdf the booking code should be: ");
      //         error_log($bookingcode);
            
      //       $link = "http://www.archicentreaustraliainspections.com/mybooking.php?bc=" . $booking['bc'];
      //       error_log($link);
      //       $html = str_replace("XXX_LINKREPORT", $link, $html);
      //       $html = str_replace("XXX_BOOKINGCODE", $bookingcode, $html);

      //     }
      //   }
      // error_log($gConfig['adminemail']);
      // error_log($bookingcode);
      // SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Australia", $gConfig['adminemail'], 'Officer',  $bookingcode . " - " . $reportTypes[$booking['itype']] . " PDF", $html);
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