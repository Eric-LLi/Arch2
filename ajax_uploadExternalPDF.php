<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $passingText = "";
  $files = [];
  $booking = Array();

  //$bookingcode = SharedGetPostVar("bookingcode");
  
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
    // error_log($fileError);
    // error_log($fileType);
    if($fileError == 0)
    {
        if ($fileSize < 5000)//50000kb == 50mb
        {
            $fileNameNew = $bookingcode."."."pdf";
            $fileDestination = './pdfreport/'.$fileNameNew;
            move_uploaded_file($fileTmpName,$fileDestination);
            $rc = 0;
            $msg = "Succeed";
            echo "<script type='text/javascript'> 
            var p = window.parent;
            p.noty({text: 'Upload booking $bookingcode report successfully', type: 'success', timeout: 3000});
            </script>";
        }
        else
        {
            $rc = -1;
            $msg = "Your file is too big";
            echo "<script type='text/javascript'> 
            var p = window.parent;
            p.noty({text: 'The file is too big', type: 'error', timeout: 3000});
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
            </script>";
    }
  }
  
$response = array("rc" => $rc, "msg" => $msg,"passingText" => $passingText);
$json = json_encode($response);
?>
