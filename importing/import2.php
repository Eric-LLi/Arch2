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

      if ($numcols > 8)
      {
        $custfirstname = CleanString($line[0], 50, $dblink);
        $custlastname = CleanString($line[1], 50, $dblink);

        $bookingid = intval($line[2]);

        $archlastname = CleanString($line[3], 50, $dblink);
        $archfirstname = CleanString($line[4], 50, $dblink);

        $commission = CleanString($line[5], 50, $dblink);
        $travel = CleanString($line[6], 50, $dblink);
        $spotterfee = CleanString($line[7], 50, $dblink);

        if ($travel == "")
          $travel = 0.00;

        if ($spotterfee == "")
          $spotterfee = 0.00;

        // Lookup architect...
        $dbselect = "select id from users where lower(lastname)=lower(" . SharedNullOrQuoted($archlastname, 50, $dblink) . ") and lower(firstname)=lower(" . SharedNullOrQuoted($archfirstname, 50, $dblink) . ")";
        if ($dbresult = SharedQuery($dbselect, $dblink))
        {
          if ($numrows = SharedNumRows($dbresult))
          {
            $userid = 0;
            while ($dbrow = SharedFetchArray($dbresult))
              $userid = $dbrow['id'];
            if ($userid != 0)
            {
              $dbupdate = "update bookings set users_id=$userid,commission=$commission,travel=$travel,spotter=$spotterfee where id=$bookingid";
              SharedQuery($dbupdate, $dblink);
            }
          }
          mysql_free_result($dbresult);
        }
      }
    }
  }
}
?>

