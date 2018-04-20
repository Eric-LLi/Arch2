// check content length from https://laravel.io/forum/05-19-2015-how-to-catch-post-content-length-of-n-bytes-exceeds 
<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $passingText = "";
  $files = [];
  $booking = Array();

  //$bookingcode = SharedGetPostVar("bookingcode");
  if (isset($_SERVER['CONTENT_LENGTH']) && $_SERVER['CONTENT_LENGTH'] > ((int) ini_get('post_max_size') * 1024 * 1024))
  {
    error_log('opps');
    $rc = -1;
    $msg = "Your file is larger than the system accepted size";
    echo "<script type='text/javascript'> 
    var p = window.parent;
    p.noty({text: 'Only accept file smaller than 8mb. Please upload a another one', type: 'error', timeout: 3000});
    p.document.getElementById('pdfUploadBookingcode').value = '';
    p.document.getElementById('uploadPDF').value = '';
    </script>";
  }
  else
  {
    try
    {
      if (isset($_POST['submitPDF']))
      {
          $bookingcode = $_POST['bookingcode'];
          //error_log($bookingcode);
          $file = $_FILES['externalPDF'];
          $fileName = $file['name'];
          $fileTmpName = $file['tmp_name'];
          $fileSize = $file['size'];
          $fileError = $file['error'];
          $fileType = $file['type'];
          // error_log($fileName);
          // error_log($fileTmpName);
          // error_log($fileSize);
          error_log('file error:');
          error_log($fileError);
          // error_log($fileType);
          if($fileError == 0)
          {
              if ($fileSize < 7388608)//8388608kb == 8.388608mb
              {
                  $fileNameNew = $bookingcode."."."pdf";
                  $fileDestination = './pdfreport/'.$fileNameNew;
                  move_uploaded_file($fileTmpName,$fileDestination);
                  $rc = 0;
                  $msg = "Succeed";
                  echo "<script type='text/javascript'> 
                  var p = window.parent;
                  p.noty({text: 'Upload booking $bookingcode report successfully', type: 'success', timeout: 3000});
                  p.document.getElementById('pdfUploadBookingcode').value = '';
                  p.document.getElementById('uploadPDF').value = '';
                  </script>";
              }
              else
              {
                  $rc = -1;
                  $msg = "Your file is too big";
                  echo "<script type='text/javascript'> 
                  var p = window.parent;
                  p.noty({text: 'Only accept file smaller than 8mb. The pdf is larger than 8.4mb', type: 'error', timeout: 3000});
                  p.document.getElementById('pdfUploadBookingcode').value = '';
                  p.document.getElementById('uploadPDF').value = '';
                  </script>";
              }
          }
          else
          {
              $rc = -1;
              $msg = "There was an error uploading this file";
              echo "<script type='text/javascript'> 
                  var p = window.parent;
                  p.noty({text: 'There was an error uploading this file', type: 'error', timeout: 3000});
                  p.document.getElementById('pdfUploadBookingcode').value = '';
                  p.document.getElementById('uploadPDF').value = '';
                  </script>";
          }
      }
    }
  
    catch (Exception $e)
    {
      error_log($e);
      echo "<script type='text/javascript'> 
                  var p = window.parent;
                  p.noty({text: 'Could not upload the report', type: 'error', timeout: 3000});
                  p.document.getElementById('pdfUploadBookingcode').value = '';
                  p.document.getElementById('uploadPDF').value = '';
                  </script>";
    }
  }



  
  
$response = array("rc" => $rc, "msg" => $msg,"passingText" => $passingText);
$json = json_encode($response);
?>
