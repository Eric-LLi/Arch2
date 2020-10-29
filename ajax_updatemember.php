<?php
  require_once("shared.php");

  global $gConfig;

  $rc = -1;
  $msg = "";
  $memberid = 0;

  try
  {
    if (isset($_POST['memberuuid']) && isset($_POST['uuid']))
    {
      $uuid = $_POST['uuid'];
      $memberuuid = $_POST['memberuuid'];

      $firstname = $_POST['firstname'];
      $lastname = $_POST['lastname'];
      $itype = $_POST['itype'];
      $email = $_POST['email'];
      $mobile = $_POST['mobile'];
      $phone = $_POST['phone'];
      $regno = $_POST['regno'];
      $address1 = $_POST['address1'];
      $address2 = $_POST['address2'];
      $city = $_POST['city'];
      $postcode = $_POST['postcode'];
      $state = $_POST['state'];
      $company = $_POST['company'];
      $gstinc = $_POST['gstinc'];

      $userid = SharedGetUserIdFromUuid($uuid, $dblink);

      $dbupdate = "update users set " .
                  "firstname=" . SharedNullOrQuoted($firstname, 50, $dblink) . "," .
                  "lastname=" . SharedNullOrQuoted($lastname, 50, $dblink) . "," .
                  "itype=" . SharedNullOrNum($itype, $dblink) . "," .
                  "email=" . SharedNullOrQuoted($email, 50, $dblink) . "," .
                  "mobile=" . SharedNullOrQuoted($mobile, 50, $dblink) . "," .
                  "phone=" . SharedNullOrQuoted($phone, 50, $dblink) . "," .
                  "regno=" . SharedNullOrQuoted($regno, 50, $dblink) . "," .
                  "address1=" . SharedNullOrQuoted($address1, 50, $dblink) . "," .
                  "address2=" . SharedNullOrQuoted($address2, 50, $dblink) . "," .
                  "city=" . SharedNullOrQuoted($city, 50, $dblink) . "," .
                  "postcode=" . SharedNullOrQuoted($postcode, 50, $dblink) . "," .
                  "state=" . SharedNullOrQuoted($state, 50, $dblink) . "," .
                  "company=" . SharedNullOrQuoted($company, 50, $dblink) . "," .
                  "gstinc=" . SharedNullOrNum($gstinc, $dblink) . "," .
                  "datemodified=CURRENT_TIMESTAMP," .
                  "usersmodified_id=$userid " .
                  "where " .
                  "uuid="  . SharedNullOrQuoted($memberuuid, 50, $dblink);
      error_log($dbupdate);
      if ($dbresult = SharedQuery($dbupdate, $dblink))
      {
        $msg = "Successfully updated member";
        $rc = 0;
      }
      else
        $msg = "Error updating member...";
    }
    else
      $msg = "Missing parameters...";
  }

  catch (Exception $e)
  {
    $msg = "Unable to update member...";
  }

  $response = array("rc" => $rc, "msg" => $msg);
  $json = json_encode($response);
  echo $json;
?>
