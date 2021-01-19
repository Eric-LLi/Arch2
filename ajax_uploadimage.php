<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $files = [];

  try
  {
    $bookingcode = $_POST["bookingcode"];
    $imageid = $_POST["imageid"];
    $textid = $_POST["textid"];
    $removeid = $_POST["removeid"];
    $rotateid = $_POST["rotateid"];
    $angleid = $_POST["angleid"];
    $addid = $_POST["addid"];
    $tableName = $_POST["tableName"];
    $imageAltName = $_POST["imageAltName"];
    $divID = $_POST["divID"];
    $uploadID = $_POST["uploadID"];
    $removeFunction = $_POST["removeFunction"];
    $addFunction = $_POST["addFunction"];
    $imageSize = $_POST["imageSize"];
    $width = $_POST["width"];


    foreach ($_FILES as $key => $value)
    {
      if (is_array($value))
      {
        $filename = $value["name"];
        $filetype = $value["type"];
        $tmpfilename = $value["tmp_name"];
        $filesize = $value["size"];

        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        $newname = tempnam("photos", $bookingcode);
        $newnameext = $newname . "." . $ext;

        if (move_uploaded_file($tmpfilename, $newnameext))
        {
          $basename = pathinfo($newnameext, PATHINFO_BASENAME);

          // Remove any previous photo in this "bucket" (image field)...
          $dbupdate = "update photos set dateexpired=CURRENT_TIMESTAMP where bookings_id=$bookingcode and imageid=" . SharedNullOrQuoted($imageid, 50, $dblink);
          //error_log($dbupdate);
          SharedQuery($dbupdate, $dblink);

          $dbinsert = "insert into photos " .
                      "(" .
                      "bookings_id," .
                      "name," .
                      "filename," .
                      "imageid," .
                      "textid," .
                      "removeid," .
                      "rotateid," .
                      "angleid,".
                      "addid," .
                      "filetype," .
                      "filesize," .
                      "tableName," .
                      "imageAltName,".
                      "divID,".
                      "uploadID,".
                      "removeFunction,".
                      "addFunction,".
                      "imageSize,".
                      "width ".
                      ") " .
                      "values " .
                      "(" .
                      $bookingcode . "," .
                      SharedNullOrQuoted($filename, 50, $dblink) . "," .
                      SharedNullOrQuoted($basename, 50, $dblink) . "," .
                      SharedNullOrQuoted($imageid, 50, $dblink) . "," .
                      SharedNullOrQuoted($textid, 50, $dblink) . "," .
                      SharedNullOrQuoted($removeid, 50, $dblink) . "," .
                      SharedNullOrQuoted($rotateid, 50, $dblink) . "," .
                      SharedNullOrQuoted($angleid, 50, $dblink) . "," .
                      SharedNullOrQuoted($addid, 50, $dblink) . "," .
                      SharedNullOrQuoted($filetype, 50, $dblink) . "," .
                      $filesize .",".
                      SharedNullOrQuoted($tableName, 50, $dblink) . "," .
                      SharedNullOrQuoted($imageAltName, 50, $dblink) . "," .
                      SharedNullOrQuoted($divID, 50, $dblink) . "," .
                      SharedNullOrQuoted($uploadID, 50, $dblink) . "," .
                      SharedNullOrQuoted($removeFunction, 50, $dblink) . "," .
                      SharedNullOrQuoted($addFunction, 50, $dblink) . "," .
                      SharedNullOrQuoted($imageSize, 50, $dblink) . "," .
                      SharedNullOrQuoted($width, 50, $dblink) . 
                      ")";
          //error_log($dbinsert);
          SharedQuery($dbinsert, $dblink);
        }

          error_log($imageid);
        $files[] = ["filename" => $filename, "filesize" => $filesize, "filetype" => $filetype];
      }
    }

    $rc = 0;
    $msg = $files;
  }

  catch (Exception $e)
  {
    $msg = "Unable to add photo...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $rc;
?>
