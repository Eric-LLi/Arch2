<?php
  namespace Swaggest\JsonDiff;

  // Order of these includes is IMPORTANT!
  include "Swaggest/JsonDiff/JsonPatch/OpPath.php";
  include "Swaggest/JsonDiff/JsonPatch/OpPathValue.php";
  include "Swaggest/JsonDiff/JsonPatch/OpPathFrom.php";
  include "Swaggest/JsonDiff/JsonPatch/Add.php";
  include "Swaggest/JsonDiff/JsonPatch/Copy.php";
  include "Swaggest/JsonDiff/JsonPatch/Move.php";
  include "Swaggest/JsonDiff/JsonPatch/Remove.php";
  include "Swaggest/JsonDiff/JsonPatch/Replace.php";
  include "Swaggest/JsonDiff/JsonPatch/Test.php";

  include "Swaggest/JsonDiff/Exception.php";
  include "Swaggest/JsonDiff/JsonDiff.php";
  include "Swaggest/JsonDiff/JsonMergePatch.php";
  include "Swaggest/JsonDiff/JsonPatch.php";
  include "Swaggest/JsonDiff/JsonPointer.php";
  include "Swaggest/JsonDiff/JsonValueReplace.php";
  include "Swaggest/JsonDiff/ModifiedPathDiff.php";

  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();
  $filename = "";

  function SharedBlankOrDblQuoted($val, $len, $dblink)
  {
    global $isphp5;

    $rc = "";
    $val = trim($val);

    if ($val != "")
    {
      if ($isphp5)
        $rc = "\"" . mysql_real_escape_string($val, $dblink) . "\"";
      else
        $rc = "\"" . mysqli_real_escape_string($dblink, $val) . "\"";
    }

    return ($rc);
  }

  function SharedBlank($val, $len, $dblink)
  {
    global $isphp5;

    $rc = "";

    if ($val != "")
    {
      if ($isphp5)
        $rc = mysql_real_escape_string($val, $dblink);
      else
        $rc = mysqli_real_escape_string($dblink, $val);
    }

    return ($rc);
  }

  function SharedWriteMultiLine($myfile, $dblink, $val)
  {
    $fields = explode("\n", $val);
    $c = sizeof($fields);

    if ($c > 1)
    {
      fwrite($myfile, "\"");
      for ($x = 0; $x < $c; $x++)
      {
        fwrite($myfile, SharedBlank($fields[$x], 4096, $dblink));
        if ($x < ($c - 1))
          fwrite($myfile, "\n");
      }
      fwrite($myfile, "\"");
    }
    else
      fwrite($myfile, SharedBlankOrDblQuoted($val, 4096, $dblink));
  }

  try
  {
    SharedBeginTx($dblink);
    if (isset($_POST['uuid']) && isset($_POST['bookingcode']))
    {
      $bookingcode = SharedCleanString($_POST['bookingcode'], 10);
    
      $dbselect = "select b1.reportdata,b1.datecompleted,ah1.reportdata originaldata from bookings b1 left join audithistory ah1 on (b1.audithistorylatest_id=ah1.id) where b1.id=$bookingcode";
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $rows[] = $dbrow;

          // If anything to do...
          if (sizeof($rows) == 1)
          {
            $row = $rows[0];
            $datecompleted = $row['datecompleted'];

            if ($datecompleted != "")
            {
              $filename = "./tmp/AuditHistory_report_$bookingcode.csv";
              $myfile = fopen($filename, "w");

              if ($myfile !== false)
              {
                $originaldata = $row['originaldata'];

                if ($originaldata != "")
                {
                  fwrite($myfile, '"Label","Operation","Original Value","New Value"');
                  fwrite($myfile, "\n");

                  $odata = json_decode($originaldata);
                  $rdata = json_decode($row['reportdata']);

                  $diff = new JsonDiff($odata, $rdata, JsonDiff::REARRANGE_ARRAYS);

                  $numdiffs = $diff->getDiffCnt();
                  if ($numdiffs > 0)
                  {
                    $diffs = $diff->getPatch()->jsonSerialize();

                    for ($d = 0; $d < sizeof($diffs); $d += 1)
                    {
                      $obj = $diffs[$d];

                      //error_log(print_r($obj, true));

                      $line = "";

                      if ($obj->op == "test")
                      {
                        $d += 1;
                        $objnext = $diffs[$d];

                        $objcontents = explode("/", $objnext->path);
                        $index = intval($objcontents[1]);
                        $field = $rdata[$index];

                        fwrite($myfile, SharedBlankOrDblQuoted($field->id, 100, $dblink) . ",Modified,");

                        SharedWriteMultiLine($myfile, $dblink, $obj->value);
                        fwrite($myfile, ",");
                        SharedWriteMultiLine($myfile, $dblink, $objnext->value);

                        fwrite($myfile, "\n");
                      }
                      else if ($obj->op == "add")
                      {
                        fwrite($myfile, SharedBlankOrDblQuoted($field->id, 100, $dblink) . ",Added,,");
                        SharedWriteMultiLine($myfile, $dblink, $obj->value);
                        fwrite($myfile, ",");
                        fwrite($myfile, SharedBlankOrDblQuoted($obj->path, 4096, $dblink));
                        fwrite($myfile, "\n");
                      }
                      else if ($obj->op == "remove")
                      {
                        fwrite($myfile, SharedBlankOrDblQuoted($field->id, 100, $dblink) . ",Removed,,");
                        SharedWriteMultiLine($myfile, $dblink, $obj->value);
                        fwrite($myfile, ",");
                        fwrite($myfile, SharedBlankOrDblQuoted($obj->path, 4096, $dblink));
                        fwrite($myfile, "\n");
                      }
                    }

                    fclose($myfile);
                    $rc = 0;
                  }
                  else
                    $msg = "No  changes since report completed...";
                }
                else
                  $msg = "No availablle audit history for this booking...";
              }
              else
                $msg = "This booking is not completed...";
            }
            else
              $msg = "Unable to create report file...";
          }
          else
            $msg = "No such booking";
        }
        else
          $msg = "Original report not found";
      }
      else
        $msg = "Unable to fetch original report";
    }
    else
      $msg = "Missing parameters...";
    SharedCommit($dblink);
  }

  catch (Exception $e)
  {
    $msg = "Unable to fetch sales report...";
    SharedRollback($dblink);
  }

  $response = array("rc" => $rc, "msg" => $msg, "filename" => $filename);
  $json = json_encode($response);
  echo $json;
?>
