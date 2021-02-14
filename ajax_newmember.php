<?php
  require_once("shared.php");

  global $gConfig;

  $rc = -1;
  $msg = "";
  $memberid = 0;

  try
  {
    if (isset($_POST['email']) && isset($_POST['uuid']))
    {
      $uuid = SharedGetPostVar("uuid");

      $firstname = SharedGetPostVar("firstname");
      $lastname = SharedGetPostVar("lastname");
      $itype = SharedGetPostVar("itype");
      $email = SharedGetPostVar("email");
      $mobile = SharedGetPostVar("mobile");
      $phone = SharedGetPostVar("phone");
      $regno = SharedGetPostVar("regno");
      $address1 = SharedGetPostVar("address1");
      $address2 = SharedGetPostVar("address2");
      $city = SharedGetPostVar("city");
      $postcode = SharedGetPostVar("postcode");
      $state = SharedGetPostVar("state");
      $company = SharedGetPostVar("company");
      $comments = SharedGetPostVar("comments");
      $gstinc = SharedGetPostVar("gstinc");

      $pwd = SharedMakeUuid(8);
      $useruuid = SharedMakeUuid(20);
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbinsert = "insert into users " .
                  "(" .
                  "pwd," .
                  "uuid," .
                  "firstname," .
                  "lastname," .
                  "itype," .
                  "email," .
                  "mobile," .
                  "phone," .
                  "regno," .
                  "address1," .
                  "address2," .
                  "city," .
                  "postcode," .
                  "state," .
                  "active," .
                  "company," .
                  "gstinc," .
                  "comments," .

                  "userscreated_id" .
                  ") " .
                  "values " .
                  "(" .
                  SharedNullOrQuoted($pwd, 50, $dblink) . "," .
                  SharedNullOrQuoted($useruuid, 50, $dblink) . "," .
                  SharedNullOrQuoted($firstname, 50, $dblink) . "," .
                  SharedNullOrQuoted($lastname, 50, $dblink) . "," .
                  SharedNullOrNum($itype, $dblink) . "," .
                  SharedNullOrQuoted($email, 100, $dblink) . "," .
                  SharedNullOrQuoted($mobile, 20, $dblink) . "," .
                  SharedNullOrQuoted($phone, 20, $dblink) . "," .
                  SharedNullOrQuoted($regno, 20, $dblink) . "," .
                  SharedNullOrQuoted($address1, 50, $dblink) . "," .
                  SharedNullOrQuoted($address2, 50, $dblink) . "," .
                  SharedNullOrQuoted($city, 50, $dblink) . "," .
                  SharedNullOrQuoted($postcode, 10, $dblink) . "," .
                  SharedNullOrQuoted($state, 50, $dblink) . "," .
                  "1," .
                  SharedNullOrQuoted($company, 50, $dblink) . "," .
                  SharedNullOrNum($gstinc, $dblink) . "," .
                  SharedNullOrQuoted($comments, 1000, $dblink) . "," .

                  SharedNullOrNum($userid, $dblink) .
                  ")";
      error_log($dbinsert);
      if ($dbresult = SharedQuery($dbinsert, $dblink))
      {
        $memberid = SharedGetInsertId($dblink);
        $msg = "Successfully created new member [$firstname $lastname]";
        $rc = 0;

        $body = "$firstname,<br/>" .
                "You may login using your email address and the following password:<br/><br/>" .
                "Email: <strong>$email</strong><br/>" .
                "Password is <strong>$pwd</strong><br/>";

        //SharedSendHtmlMail(gConfig['adminemail'], "Web Enquiry", $email, $firstname . ' ' . $lastname, "Online Booking Request", $body);
        // SharedSendHtmlMail($email, $firstname . ' ' . $lastname, $gConfig['adminemail'], "Archicentre Membership", "Your new Archicentre Australia member account", $body);
        SharedSendHtmlMail($gConfig['adminemail'], "Archicentre Membership",$email, $firstname . ' ' . $lastname,  "Your new Archicentre Australia member account", $body);
      }
      else
        $msg = "Error processing new member please try again...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to create new member...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "memberid" => $memberid);
  $json = json_encode($response);
  echo $json;
?>
