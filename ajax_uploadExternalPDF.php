<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $passingText = "";
  $files = [];
  $booking = Array();

  $bookingcode = SharedGetPostVar("bookingcode");
  //error_log($bookingcode);
 
  // $fileName = $_POST['fileName'];
  // $fileTmpName = $_POST['fileTmpName'];
  // $fileSize = $_POST['fileSize'];
  // $fileError = $_POST['fileError'];
  // $fileType = $_POST['fileType'];
  // error_log($fileName);
  // error_log($fileTmpName);
  // error_log($fileSize);
  // error_log($fileError);
  // error_log($fileType);
  // if($fileError == 0)
  //   {
  //       if ($fileSize < 50000000)//50000kb == 50mb
  //       {
  //           $fileNameNew = "test.pdf";
  //           $fileDestination = './pdfreport/'.$fileNameNew;
  //           if(move_uploaded_file($fileTmpName,$fileDestination))
  //           {
  //             $rc = 0;
  //             $msg = "Succeed";
  //           }
  //           else
  //           {
  //             $msg = 'faile';
  //           }
            
  //       }
  //       else
  //       {
  //           $rc = -1;
  //           $msg = "Your file is too big";
  //       }
  //   }
  //   else
  //   {
  //       $rc = -1;
  //       $msg = "There was an error uploading this file";
  //   }

  if (isset($_POST['submitPDF']))
  {
    $file = $_FILES['externalPDF'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    $fileError = $file['error'];
    $fileType = $file['type'];
    error_log($fileName);
    error_log($fileTmpName);
    error_log($fileSize);
    error_log($fileError);
    error_log($fileType);
    if($fileError == 0)
    {
        if ($fileSize < 500000)//50000kb == 50mb
        {
            $fileNameNew = uniqid('',true)."."."pdf";
            $fileDestination = './pdfreport/'.$fileNameNew;
            move_uploaded_file($fileTmpName,$fileDestination);
            $rc = 0;
            $msg = "Succeed";
        }
        else
        {
            $rc = -1;
            $msg = "Your file is too big";
        }
    }
    else
    {
        $rc = -1;
        $msg = "There was an error uploading this file";
    }
  }
  
$response = array("rc" => $rc, "msg" => $msg,"passingText" => $passingText);
$json = json_encode($response);
echo $json;
// header("Location:index.php");
// exit;

?>