<?php
  require_once("shared.php");
  require_once("meta.php");

  global $reportfiles;

  $bc = "";
  $itype = 0;
  $bid = 0;
  $report = "";

  if (isset($_GET["bc"]))
  {
    $bc = $_GET['bc'];

    // Link request for end user...
    // Convert booking code into booking ID and get report type...
    $dbselect = "select " .
                "b1.id," .
                "b1.itype " .
                "from " .
                "bookings b1 " .
                "where " .
                "b1.code=" . SharedNullOrQuoted($bc, 10, $dblink);
    if ($dbresult = SharedQuery($dbselect, $dblink))
    {
      if ($numrows = SharedNumRows($dbresult))
      {
        while ($dbrow = SharedFetchArray($dbresult))
        {
          $bid =  $dbrow['id'];
          $itype =  $dbrow['itype'];
        }

        $report = $reportfiles[$itype];
      }
    }
  }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <style type="text/css">
    html, body {overflow: hidden; margin: auto; height: 100%; width: 100%;}
    iframe:focus {outline: none;}
    iframe[seamless] {display: block;}
  </style>
</head>
<body>
  <?php
    $lnk = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $p = strpos($lnk, "mybooking");
    $url = substr($lnk, 0, $p) . "pdfreport/" . $bid . ".pdf";
  ?>
  <iframe src="<?php echo $url; ?>" style="width: 100%; height: 100%"></iframe>
</body>
