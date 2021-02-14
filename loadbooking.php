<?php
  require_once("shared.php");

  if (!SharedIsLoggedIn())
  {
    header("Location: index.php");
    exit;
  }

  $booking = Array();
  $photos = Array();
  $bookingcode = 0;
  $iscompleted = false;
  $isapproved = false;
  $bc = "";
  $isuserlink = false;

  if (isset($_POST['bookingcode']))
    $bookingcode = $_POST['bookingcode'];

  if (isset($_GET['bc']))
  {
    $bc = $_GET['bc'];
    $isuserlink = true;
  }

  if (($bookingcode != 0) || ($bc != ""))
  {
    $dbselect = "select " .
                "b1.id," .
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

                "b1.reportdata," .

                "b1.datecompleted," .
                "b1.datecreated," .
                "b1.datemodified," .
                "b1.dateapproved,".

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
                "u3.address1 archaddress1," .
                "u3.address2 archaddress2," .
                "u3.city archcity," .
                "u3.postcode archpostcode," .
                "u3.state archstate," .
                "u3.regno archregno " .

                "from " .
                "bookings b1 left join users u1 on (b1.userscreated_id=u1.id) " .
                "            left join users u2 on (b1.usersmodified_id=u2.id) " .
                "            left join users u3 on (b1.users_id=u3.id) " .
                "where " .
                "b1.id=$bookingcode " .
                "or " .
                "b1.code=" . SharedNullOrQuoted($bc, 10, $dblink);
    error_log($dbselect);
    if ($dbresult = SharedQuery($dbselect, $dblink))
    {
      if ($numrows = SharedNumRows($dbresult))
      {
        while ($dbrow = SharedFetchArray($dbresult))
          $booking = $dbrow;

        // Got here via user download link, assign booking ID for rest of code...
        if ($isuserlink)
          $bookingcode = $booking['id'];

        $iscompleted = $booking['datecompleted'] != "";
        $isapproved = $booking['dateapproved'] != "";
        // error_log("isapproved ". $isapproved);
        // error_log("isapproved ". !$isapproved);
        // error_log("iscompleted ". !$iscompleted);
        // error_log("iscompleted ". $iscompleted);
        $dbselect = "select " .
                    "p1.id," .
                    "p1.name," .
                    "p1.filename," .
                    "p1.filetype," .
                    "p1.filesize," .
                    "p1.imageid," .
                    "p1.textid," .
                    "p1.removeid," .
                    "p1.rotateid," .
                    'p1.angleid,'.
                    "p1.addid," .
                    "p1.tableName," .
                    "p1.imageAltName,".
                    "p1.divID,".
                    "p1.uploadID,".
                    "p1.removeFunction,".
                    "p1.addFunction,".
                    "p1.imageSize,".
                    "p1.width ".
                    "from " .
                    "photos p1 " .
                    "where " .
                    "p1.bookings_id=$bookingcode " .
                    "and " .
                    "p1.dateexpired is null";
        if ($dbresult = SharedQuery($dbselect, $dblink))
        {
          if ($numrows = SharedNumRows($dbresult))
          {
            while ($dbrow = SharedFetchArray($dbresult))
              $photos[] = $dbrow;
          }
        }
      }
    }
  }
?>
