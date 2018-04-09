<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['itype']))
    {
      $uuid = $_POST['uuid'];
      $itype = (int)$_POST['itype'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $clause = "";

      if ($itype != 99)
        $clause = "where b1.users_id=$userid";

      $dbselect = "select " .
                  "b1.id bookingcode," .
                  "b1.bookings_id linkedbookingcode," .
                  "b1.custfirstname," .
                  "b1.custlastname," .
                  "b1.custemail," .
                  "b1.custmobile," .
                  "b1.custphone," .
                  "b1.custaddress1," .
                  "b1.custaddress2," .
                  "b1.custcity," .
                  "b1.custpostcode," .
                  "b1.custstate," .

                  "b1.itype reportid," .
                  "b1.budget," .
                  "b1.commission," .
				          "b1.travel," .
				          "b1.spotter," .
                  "b1.notes," .

                  "b1.numstories," .
                  "b1.numbedrooms," .
                  "b1.numbathrooms," .
                  "b1.numrooms," .
                  "b1.numoutbuildings," .
                  "b1.address1," .
                  "b1.address2," .
                  "b1.city," .
                  "b1.state," .
                  "b1.postcode," .
                  "b1.construction," .
                  "b1.age," .
                  "b1.meetingonsite," .
                  "b1.renoadvice," .
                  "b1.pestinspection," .

                  "b1.estateagentcompany," .
                  "b1.estateagentcontact," .
                  "b1.estateagentmobile," .
                  "b1.estateagentphone," .

                  "b1.cardname," .
                  "b1.cardno," .
                  "b1.cardccv2," .
                  "b1.cardexpiry," .

                  "b1.emailcount," .
                  "b1.lastemailed," .
                  "b1.datecompleted," .
                  "b1.datecancelled,".
                  "b1.dateapproved," .
                  "b1.datepaid," .

                  "b1.datecreated," .
                  "b1.datemodified," .

                  "b1.userscreated_id usercreatedid," .
                  "b1.usersmodified_id usermdifiedid," .

                  "u1.firstname usercreatedfirstname," .
                  "u1.lastname usercreatedlastname," .

                  "u2.firstname usermodifiedfirstname," .
                  "u2.lastname usermodifiedlastname," .

                  "u3.firstname archfirstname," .
                  "u3.lastname archlastname," .
                  "u3.email archemail," .
                  "u3.mobile archmobile," .
                  "u3.regno archregno," .
                  "u3.itype " .

                  "from " .
                  "bookings b1 left join users u1 on (b1.userscreated_id=u1.id) " .
                  "            left join users u2 on (b1.usersmodified_id=u2.id) " .
                  "            left join users u3 on (b1.users_id=u3.id) " .
                  //"where " .
                  // "b1.dateexpired is null " .
                  $clause . " " .
                  "order by " .
                  "b1.datecreated desc " .
                  "limit 500";
      error_log($dbselect);
      if ($dbresult = SharedQuery($dbselect, $dblink))
      {
        if ($numrows = SharedNumRows($dbresult))
        {
          while ($dbrow = SharedFetchArray($dbresult))
            $rows[] = $dbrow;

          $rc = 0;
        }
        else
          $msg = "1.Unable to fetch list of bookings...";
      }
      else
        $msg = "2.Unable to fetch list of bookings...";
    }
  }

  catch (Exception $e)
  {
    $msg = "3.Unable to fetch bookings...";
  }

  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows);
  $json = json_encode($response);
  echo $json;
?>
