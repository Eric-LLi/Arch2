<?php
require_once("shared.php");

ini_set("auto_detect_line_endings", true);
mysql_set_charset("utf8");

function CleanString($text, $maxlen, $dblink)
{
  if ($text != "")
  {
    $text = trim($text);
    if ($text != "")
    {
      if ($maxlen < 1)
        $maxlen = 1;
      $text = substr($text, 0, $maxlen);
      $text = htmlentities($text);
      $text = mysql_real_escape_string($text, $dblink);
    }
  }
  return ($text);
}

if ($argc > 1)
{
  $lineno = 1;

  if (($fh = fopen($argv[1], "r")) !== false)
  {
    echo "****************************\n";
    echo "Parsing " . $argv[1] . "\n";
    echo "****************************\n";

    while (($line = fgetcsv($fh, 4000, ",")) !== false)
    {
      $numcols = count($line);

      if ($numcols > 18)
      {
        $custfirstname = CleanString($line[0], 50, $dblink);
        $custlastname = CleanString($line[1], 50, $dblink);
        $bookingid = intval($line[2]);
        $bookingdate = CleanString($line[3], 50, $dblink);

        $custemail = CleanString($line[4], 150, $dblink);
        $custmobile = CleanString($line[5], 50, $dblink);

        $custaddress1 = CleanString($line[6], 50, $dblink);
        $custaddress2 = CleanString($line[7], 50, $dblink);
        $custcity = CleanString($line[8], 50, $dblink);
        $custstate = CleanString($line[9], 50, $dblink);
        $custpostcode = CleanString($line[10], 50, $dblink);

        $reporttype = CleanString($line[11], 50, $dblink);
        $rooms = CleanString($line[12], 50, $dblink);

        $propaddress1 = CleanString($line[13], 50, $dblink);
        $propaddress2 = CleanString($line[14], 50, $dblink);
        $propcity = CleanString($line[15], 50, $dblink);
        $propstate = CleanString($line[16], 50, $dblink);
        $proppostcode = CleanString($line[17], 50, $dblink);

        $bookingcode = SharedMakeUuid(8);
        $bookeddate = "";
        $notes = "";

        // DD/MM/YYYY or DD.MM.YY
        if (($bookingdate != "") && (strtolower($bookingdate) != "cancelled"))
        {
          if (strlen($bookingdate) == 7)
            $bookeddate = "20" . substr($bookingdate, 5, 2) . "-0" . substr($bookingdate, 3, 1) . "-" . substr($bookingdate, 0, 2) . " 00:00:00";
          else if (strlen($bookingdate) == 8)
            $bookeddate = "20" . substr($bookingdate, 6, 2) . "-" . substr($bookingdate, 3, 2) . "-" . substr($bookingdate, 0, 2) . " 00:00:00";
          else
            $bookeddate = substr($bookingdate, 6, 4) . "-" . substr($bookingdate, 3, 2) . "-" . substr($bookingdate, 0, 2) . " 00:00:00";
        }

        $itype = 0;
        if (($reporttype == "Property Assessment") || ($reporttype == "Property Assessment 12-17"))
          $itype = 1;
        else if ($reporttype == "Timber Pest Assessment")
          $itype = 2;
        else if ($reporttype == "Property and Timber Pest")
          $itype = 3;
        else if ($reporttype == "Architects Advice")
          $itype = 5;
        else if ($reporttype == "Design Consultation")
          $itype = 14;
        else if ($reporttype == "Dilapidation Report")
          $itype = 15;
        else if ($reporttype == "Design Report Feasibility")
          $itype = 17;
        else if ($reporttype == "Commerical Property Assess")
          $itype = 18;
        else if ($reporttype == "QA Assessments")
          $itype = 17;
        else if ($reporttype == "Home Access &amp; Services")
          $itype = 21;
        else
          $notes = "Report type: $reporttype, Rooms: $rooms";

        $dbinsert = "insert into " .
                    "bookings (id,bookeddate,code,custfirstname,custlastname,custmobile,custemail,custaddress1,custaddress2,custcity,custpostcode,custstate,address1,address2,city,postcode,state,notes,userscreated_id,itype) " .
                    "values" .
                    "(" .
                    "$bookingid," .
                    SharedNullOrQuoted($bookeddate, 20, $dblink) . "," .
                    SharedNullOrQuoted($bookingcode, 8, $dblink) . "," .

                    SharedNullOrQuoted($custfirstname, 50, $dblink) . "," .
                    SharedNullOrQuoted($custlastname, 50, $dblink) . "," .
                    SharedNullOrQuoted($custmobile, 20, $dblink) . "," .
                    SharedNullOrQuoted($custemail, 100, $dblink) . "," .
                    SharedNullOrQuoted($custaddress1, 50, $dblink) . "," .
                    SharedNullOrQuoted($custaddress2, 50, $dblink) . "," .
                    SharedNullOrQuoted($custcity, 50, $dblink) . "," .
                    SharedNullOrQuoted($custpostcode, 10, $dblink) . "," .
                    SharedNullOrQuoted($custstate, 50, $dblink) . "," .

                    SharedNullOrQuoted($propaddress1, 50, $dblink) . "," .
                    SharedNullOrQuoted($propaddress2, 50, $dblink) . "," .
                    SharedNullOrQuoted($propcity, 50, $dblink) . "," .
                    SharedNullOrQuoted($propstate, 10, $dblink) . "," .
                    SharedNullOrQuoted($proppostcode, 50, $dblink) . "," .

                    SharedNullOrQuoted($notes, 100, $dblink) . "," .
                    "2," .
                    "$itype" .
                    ")";
        $dbresult = SharedQuery($dbinsert, $dblink);
      }
    }
  }
}
?>

