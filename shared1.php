<?php
  require_once("class.phpmailer.php");

  $gConfig['dbname'] = "arch";
  $gConfig['dbserver'] = "localhost:3306";
  $gConfig['dbport'] = 3306;
  $gConfig['dbusername'] = "arch";
  $gConfig['dbpwd'] = "lmi$$";
  $gConfig['dberrormsg'] = "";
  $gConfig['smtp-user'] = "noreply@adtalk.services";
  $gConfig['smtp-password'] = "adtalk\$\$00";
  $gConfig['smtp-host'] = "mail.adtalkserver.net";

  $gConfig['adminemail'] = "tim@adtalk.com.au";
  //$gConfig['adminemail'] = "mitchamrumpus@gmail.com";

  $reportTypes =
  [
    "",
    "Property Assessment Report",
    "Timber Pest Inspection Report",
    "Combined Property Assessment/Pest Inspection",
    "Maintenance Advice",
    "Architect\"s Advice",
    "Construction Quality Assurance",
    "Dilapidation Survey",
    "Home Feasibility",
    "Renovation Feasibility",
    "Residential Home Warranty Report",
    "Commercial Property Assessment Report",
    "Commercial Dilapidation Survey",
		"Residential Home Access & Services Report"
  ];
  $reportfiles =
  [
    "",
    "AssessmentReport.php",
    "TimberReport.php",
    "",
    "MaintenanceReport.php",
    "ArchitectAdviceReport.php",
    "ConstructionReport.php",
    "DilapidationReport.php",
    "HomeFeasibilityReport.php",
    "RenovationFeasibilityReport.php",
		
    "",
    "",
    "",
    ""
  ];
  $reportemails =
  [
    "",
    "email_prop_assess_report.html",
    "email_timberpestinspection.html",
    "",
    "email_maintenance.html",
    "email_archadvice.html",
    "email_constructionqa.html",
    "email_dilapidation.html",
    "email_homefeasibility.html",
    "email_renofeasibility.html",
    "",
    "",
    "",
    ""
  ];
  $reportconfirmemails =
  [
    "",
    "email_prop_assess_report_assign.html",
    "email_timberpestinspection_assign.html",
    "",
    "email_maintenance_assign.html",
    "email_archadvice_assign.html",
    "email_constructionqa_assign.html",
    "email_dilapidation_assign.html",
    "email_homefeasibility_assign.html",
    "email_renofeasibility_assign.html",
    "",
    "",
    "",
    ""
  ];

  date_default_timezone_set("Australia/Melbourne");
  ini_set("auto_detect_line_endings", true);

  $isphp5 = false;
  $dblink = null;

  if (version_compare(phpversion(), "5.5.0", "<"))
    $isphp5 = true;

  function SharedQuery($dbquery, $dblink)
  {
    global $isphp5;

    $dbresult = null;

    if ($isphp5)
      $dbresult = mysql_query($dbquery, $dblink);
    else
      $dbresult = mysqli_query($dblink, $dbquery);

    return ($dbresult);
  }

  function SharedNumRows($dbresult)
  {
    global $isphp5;

    $numrows = false;

    if ($isphp5)
      $numrows = mysql_num_rows($dbresult);
    else
      $numrows = mysqli_num_rows($dbresult);

    return ($numrows);
  }

  function SharedGetInsertId($dblink)
  {
    global $isphp5;

    $id = null;

    if ($isphp5)
      $id = mysql_insert_id($dblink);
    else
      $id = mysqli_insert_id($dblink);

    return ($id);
  }

  function SharedFetchArray($dbresult)
  {
    global $isphp5;

    $dbrow = false;

    if ($isphp5)
      $dbrow = mysql_fetch_array($dbresult, MYSQL_ASSOC);
    else
      $dbrow = mysqli_fetch_array($dbresult);

    return ($dbrow);
  }

  function SharedConnect()
  {
    global $isphp5;

    $dblink = false;

    try
    {
      global $gConfig;

      if ($isphp5)
      {
        $dblink = mysql_connect($gConfig['dbserver'], $gConfig['dbusername'], $gConfig['dbpwd']);
        if ($dblink)
        {
          if (!mysql_select_db($gConfig['dbname'], $dblink))
          {
            mysql_close($dblink);
            $dblink = false;
          }
        }
      }
      else
      {
        $dblink = mysqli_init();
        if (!mysqli_real_connect($dblink, $gConfig['dbserver'], $gConfig['dbusername'], $gConfig['dbpwd'], $gConfig['dbname'], $gConfig['dbport']))
          $dblink = false;
      }
    }

    catch (Exception $e)
    {
      error_log("Exception in " . $e->getFile() . " line " . $e->getLine() . ": " . $e->getMessage());
    }

    return ($dblink);
  }

  function SharedInit()
  {
    session_start();
    if (!isset($_SESSION['uuid']))
    {
      $_SESSION['uuid'] = "";
      $_SESSION['username'] = "";
      $_SESSION['useremail'] = "";
      $_SESSION['itype'] = 0;
    }
  }

  function SharedCleanString($text, $maxlen)
  {
    if ($text != "")
    {
      $text = trim($text);
      if ($text != "")
      {
        if ($maxlen < 1)
          $maxlen = 1;
        $text = substr($text, 0, $maxlen);
      }
    }
    return ($text);
  }

  function SharedNullOrQuoted($val, $len, $dblink)
  {
    global $isphp5;

    $rc = "null";
    $val = trim($val);

    if ($val != "")
    {
      if ($isphp5)
        $rc = "'" . mysql_real_escape_string($val, $dblink) . "'";
      else
        $rc = "'" . mysqli_real_escape_string($dblink, $val) . "'";
    }

    return ($rc);
  }

  function SharedNullOrNum($val, $dblink)
  {
    global $isphp5;

    $rc = "null";
    $val = trim($val);

    if ($val != "")
      $rc = $val;

    return ($rc);
  }

  function SharedLogin($email, $pwd)
  {
    try
    {
      global $gConfig;
      global $dblink;

      $gConfig['dberrormsg'] = "";
      $rc = false;

      if (!isset($_SESSION['uuid']) || ($_SESSION['uuid'] == ""))
      {
        $dbselect = "select " .
                    "u1.uuid," .
                    "u1.email," .
                    "u1.firstname," .
                    "u1.lastname," .
                    "u1.itype " .
                    "from " .
                    "users u1 " .
                    "where " .
                    "u1.email=" . SharedNullOrQuoted(SharedCleanString($email, 100), 100, $dblink) . " " .
                    "and " .
                    "u1.pwd=" . SharedNullOrQuoted(SharedCleanString($pwd, 50), 50, $dblink) . " " .
                    "and " .
                    "u1.active=1";
        error_log($dbselect);
        if ($dbresult = SharedQuery($dbselect, $dblink))
        {
          if ($numrows = SharedNumRows($dbresult))
          {
            $gConfig['dberrormsg'] = "No such user.";

            while ($dbrow = SharedFetchArray($dbresult))
            {
              $_SESSION['uuid'] = $dbrow['uuid'];
              $_SESSION['username'] = $dbrow['firstname'] . " " . $dbrow['lastname'];
              $_SESSION['useremail'] = $dbrow['email'];
              $_SESSION['itype'] = intval($dbrow['itype']);
            }

            if ($_SESSION['uuid']  != "")
            {
              $rc = true;
              error_log("Login successful by " . $email);
            }
            else
              error_log("Login failed by " . $email);
          }
          else
          {
            $gConfig['dberrormsg'] = "Invalid login...";
            error_log($gConfig['dberrormsg']);
            $rc = false;
          }
        }
        else
        {
          $gConfig['dberrormsg'] = "Unable to query database for login credentials";
          error_log($gConfig['dberrormsg']);
          $rc = false;
        }
      }
      else
        $rc = true;
    }

    catch (Exception $e)
    {
      error_log("Exception in " . $e->getFile() . " line " . $e->getLine() . ": " . $e->getMessage());
    }

    return ($rc);
  }

  function SharedLogout()
  {
    try
    {
      unset($_SESSION['uuid']);
      unset($_SESSION['username']);
      unset($_SESSION['useremail']);
      unset($_SESSION['itype']);

      session_unset();
      session_destroy();
      session_write_close();
    }

    catch (Exception $e)
    {
      error_log("Exception in " . $e->getFile() . " line " . $e->getLine() . ": " . $e->getMessage());
    }
  }

  function SharedIsLoggedIn()
  {
    if (isset($_SESSION['uuid']))
    {
      if ($_SESSION['uuid'] == "")
        return (false);
      return (true);
    }

    return (false);
  }

  function SharedIsAdmin()
  {
    return isset($_SESSION['itype']) ? ((int)$_SESSION['itype'] == 99) : false;
  }

  function SharedIsMember()
  {
    return isset($_SESSION['itype']) ? ((int)$_SESSION['itype'] == 1) : false;
  }

  function SharedIsArchitect()
  {
    return isset($_SESSION['itype']) ? ((int)$_SESSION['itype'] == 2) : false;
  }

  function SharedIsAgentt()
  {
    return isset($_SESSION['itype']) ? ((int)$_SESSION['itype'] == 3) : false;
  }

  function SharedGetUserIdFromUuid($uuid, $dblink)
  {
    $id = 0;

    // Special case...
    if ($uuid == 'admin')
      return 1;

    $dbselect = "select u1.id from users u1 where u1.uuid=" . SharedNullOrQuoted($uuid, 20, $dblink);

    if ($dbresult = SharedQuery($dbselect, $dblink))
    {
      if ($numrows = SharedNumRows($dbresult))
      {
        while ($dbrow = SharedFetchArray($dbresult))
          $id = $dbrow['id'];
      }
    }
    return ($id);
  }

  function SharedMakeUuid($len = 20, $upper = false)
  {
    $hex = md5("ianp" . uniqid("", true));

    $pack = pack('H*', $hex);

    // Max 22 chars
    $uid = base64_encode($pack);

    // Mixed case...
    $uid = preg_replace("#[^A-Za-z0-9]#", "", $uid);

    // Uppercase only...
    if ($upper)
      $uid = preg_replace("#[^A-Z0-9]#", "", strtoupper($uid));

    // Sanity checks
    if ($len < 4)
      $len = 4;
    if ($len > 128)
      $len = 128;

    // Append until desired length...
    while (strlen($uid) < $len)
      $uid = $uid . SharedMakeUuid(22);

    return substr($uid, 0, $len);
  }

  function SharedSendHtmlMail($from, $fromName, $to, $toName, $subject, $msg, $cc = "", $ccName = "", $attachment = "")
  {
    $rc = false;
    try
    {
      global $gConfig;
      $mail           = new PHPMailer(true);
      $mail->SMTPAuth = true;
      $mail->Port     = 25;
      $mail->Host     = $gConfig['smtp-host'];
      $mail->Username = $gConfig['smtp-user'];
      $mail->Password = $gConfig['smtp-password'];
      $mail->Subject  = $subject;
      $mail->IsSMTP();
      $mail->MsgHTML($msg);
      $mail->SetFrom($from, $fromName);

      if (is_array($to))
      {
        foreach ($to as $idx=>$t)
          $mail->AddAddress($t, $toName[$idx]);
      }
      else if (is_string($to))
      {
        if ($to != "")
          $mail->AddAddress($to, $toName);
      }

      if (is_array($cc))
      {
        foreach ($cc as $idx=>$c)
          $mail->AddCC($c, $ccName[$idx]);
      }
      else if (is_string($cc))
      {
        if ($cc != "")
          $mail->AddCC($cc, $ccName);
      }

      if (is_array($attachment))
      {
        foreach ($attachment as $a)
          $mail->AddAttachment($a);
      }
      else if (is_string($attachment))
      {
        if ($attachment != "")
          $mail->AddAttachment($attachment);
      }

      $rc = $mail->Send();
    }

    catch (phpmailerException $e)
    {
      error_log($e->errorMessage());
    }

    return ($rc);
  }

  function SharedGetPostVar($varname, $maxlen = 50, $default = null)
  {
    if (isset($_POST[$varname]))
    {
      $len = 50;
      if (isset($maxlen))
        $len = $maxlen;

      $v = substr($_POST[$varname], 0, $len);
      return $v;
    }

    return $default;
  }

  function doNiceAddress($address1, $city, $state, $postcode)
  {
    $a = ucwords($address1);

    if ($a != "")
    {
      if ($city != "")
        $a .= ", " . ucwords($city);
    }

    if ($a != "")
    {
      if ($state != "")
        $a .= ", " . $state;
    }

    if ($a != "")
    {
      if ($postcode != "")
        $a .= " " . $postcode;
    }

    return ($a);
  }

  function doNiceArrayElemAsString($i, $titlecase = true)
  {
    global $booking;

    if (count($booking) == 0)
      return ("");

    if ($titlecase)
      return ucwords($booking[$i]);

    return $booking[$i];
  }

  // ************************************************************************
  // Start...

  $scriptname = basename($_SERVER['SCRIPT_NAME']);

  if (substr($scriptname, 0, 5) != "ajax_")
  {
    SharedInit();
  }

  $dblink = SharedConnect();
?>
