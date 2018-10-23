<?php
  require_once("shared.php");

  $rc = -1;
  $msg = "";
  $rows = Array();

  try
  {
    if (isset($_POST['uuid']) && isset($_POST['itype']))
    {
      // $page = isset($_POST['page']) ? intval($_POST['page']) : 0;
      // $row = isset($_POST['rows']) ? intval($_POST['rows']) : 10;
      // error_log($page);
      // error_log($row);
      $uuid = $_POST['uuid'];
      $itype = (int)$_POST['itype'];
      $userid = SharedGetUserIdFromUuid($uuid, $dblink);
      $selectedstatus = $_POST['status'];
      $emailinput = $_POST['email'];
      // $pageNumber = ($_POST['pageNumber'] - 1);
      // $pageSize = $_POST['pageSize'];
      // $offset = $pageNumber * $pageSize;
      // error_log($offset);
      // error_log($pageSize);
      // error_log($selectedstatus);
      $clause = "where ";

      if ($itype != 99)
      {
        $clause = $clause . " " .   "b1.users_id=$userid and ";
        
      }

      if($selectedstatus == 1) // status == 1 --> aggree price is not set
      {
        $clause = $clause . " " . " b1.budget is null and b1.dateapproved is null and b1.datecompleted is null and b1.datepaid is null and b1.datecancelled is null and ";
      }
      else if ($selectedstatus == 2) // status == 2 --> has approved
      {
        $clause = $clause . " " .  " b1.dateapproved is not null and b1.datecancelled is null and ";
      }
      else if ($selectedstatus == 3) // status == 3 --> has completed
      {
        $clause = $clause . " " .  " b1.datecompleted is not null and b1.datepaid is not null and b1.budget is not null and b1.dateapproved is null and b1.datecancelled is null and ";
      }
      else if ($selectedstatus == 4) // status == 4 --> has paid
      {
        $clause = $clause . " " .  " b1.datepaid is not null and b1.dateapproved is null and b1.datecompleted is null and b1.users_id is null and b1.datecancelled is null and ";
      }
      else if ($selectedstatus == 0) // status == 0 --> has not paid
      {
        $clause = $clause . " " .  " b1.datepaid is null and b1.budget is not null and b1.dateapproved is null and b1.datecompleted is null and b1.datecancelled is null and ";
      }
      else if ($selectedstatus == 6) //status == 6 --> work has started, but not completed. 
      {
        $clause = $clause . " " .  " b1.datepaid is not null and b1.users_id is not null and b1.datecompleted is null and b1.dateapproved is null and b1.datecancelled is null and ";
      }

      if($emailinput != "")
      {
          $clause = $clause . " " . "upper(b1.custemail) like CONCAT('%',upper('$emailinput'),'%') and ";
      }
       
    
      error_log($clause);
    

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

                  // Linked booking fro combined reports... (if any)
                  "b2.id linked_bookingcode," .

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
                  "            left join bookings b2 on (b1.id=b2.bookings_id) " .
                  "            left join users u3 on (b1.users_id=u3.id) " .
                  //"where " .
                  // "b1.dateexpired is null " .
                  $clause . " " .
                  "b1.dateexpired is null " .
                  "order by " .
                  "b1.id desc, ".
                  "b1.bookings_id desc,".
                  "b2.id desc ".
                  "limit 300 ";
                  // "b1.datecreated desc " .
                  // "limit $pageSize offset $offset";
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
        {
            error_log($numrows);
            $msg = "Could not find any matching bookings";
        }
         
      }
      else
        $msg = "Unable to fetch list of bookings...";
    }
  }

  catch (Exception $e)
  {
    $msg = "3.Unable to fetch bookings...";
  }

  // $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows,"total" => 60); //The total is for the total row in the database, should use count(*) to get the exact number of rows
  $response = array("rc" => $rc, "msg" => $msg, "rows" => $rows);

  $json = json_encode($response);
  echo $json;
?>
