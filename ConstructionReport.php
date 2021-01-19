<?php
  require_once("loadbooking.php");
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>Construction - <?php echo $bookingcode; ?></title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <!--  Import JQuery  -->
        <script src="js/jquery-1.12.4.min.js"></script>
        <!-- <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
        <!-- Customized CSS -->
        <link rel="stylesheet" href="css/general.css">
        <!--  Import pdfMake  -->
        <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
        <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>
        <script type="text/javascript"> 
            function stopRKey(evt) { 
            var evt = (evt) ? evt : ((event) ? event : null); 
            var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null); 
            if ((evt.keyCode == 13) && (node.type=="text"))  {return false;} 
            } 
            document.onkeypress = stopRKey; 
        </script>


        <?php require_once("saveloaddata.php"); ?>
        <?php require_once("meta.php"); ?>
    </head>

    <body onload="onload()">
        <!--Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">ArchiCentre Task</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!--
      <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <a class="nav-link" href="#">Back</a>
          </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
          <a class="nav-link" href="#">Welcome XXXXX@XXX.COM</a>
          <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Logout</button>
      </form>
      -->
            </div>
        </nav>
        <!--Title-->
        <div class="container">
            <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
                <strong>Saving PDF. Please don't close this page. It will take a while</strong>
            </div>
            <h2 class="content-head text-center firstH1">Construction Quality Assurance Assessment Report</h2><br>
            <p>
                The Archicentre Australia Construction Quality Assurance Assessment Report is a visual assessment of the quality and workmanship of the property's consturction against acceptable industry standards
            </p>
        </div>
        <!-- Inspection Info -->
        <div id="ConstructCustomerDetails" class="container">
            <hr style="height:1px;border:none;color:#333;background-color:#333;">
            <h3 class="sectionSubHead" style="font-size: 18px">CLIENT DETAILS</h3>
            <form>
                <div class="row">
                    <div class="col-sm-6">
                        <label>Name</label><br>
                        <input id="customer_name" class="form-control" type="text" title="name" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
                    </div>
                    <div class="col-sm-6">
                        <label>Booking No.</label><br>
                        <input id="customer_booking" class="form-control" type="text" title="booking number" value="<?php echo $bookingcode; ?>">
                    </div>
                    <div class="col-sm-6" style="margin-top:6px">
                        <label>Phone</label><br>
                        <input id="customer_phone" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
                    </div>
                    <div class="col-sm-6" style="margin-top:6px">
                        <label>Mobile</label>
                        <br>
                        <input id="customer_mobile" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
                    </div>
                </div>
            </form>
        </div>
        <div id="ConstructAssessmentDetail" class="container">
            <hr style="height:1px;border:none;color:#333;background-color:#333;">
            <h3 class="sectionSubHead" style="font-size: 18px">ASSESSMENT DETAILS</h3>
            <form>
                <div class="row">
                    <div class="col-sm">
                        <label>Address of Property:</label><br>
                        <input id="address" class="form-control" type="text" title="address" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <label>Suburb</label><br>
                        <input id="suburb" class="form-control" type="text" title="suburb" value="<?php echo doNiceArrayElemAsString('city'); ?>">
                    </div>
                    <div class="col-sm-4">
                        <label>State</label><br>
                        <input id="state" class="form-control" type="text" title="state" value="<?php echo doNiceArrayElemAsString('state'); ?>">
                        <!--  <select id="state" style="width:100%;height: 50px;margin-top: 6px" title="state" >
                    <option <?php if(doNiceArrayElemAsString('state', false)==""){echo "selected";};?> disabled value="">Select a State</option>
                    <option <?php if(doNiceArrayElemAsString('state', false)=="VIC"){echo "selected";} ;?> value="VIC">VIC</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="NSW"){echo "selected";};?> value="NSW">NSW</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="QLD"){echo "selected";};?> value="QLD">QLD</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="SA"){echo "selected";};?> value="SA">SA</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="WA"){echo "selected";};?> value="WA">WA</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="TAS"){echo "selected";};?> value="TAS">TAS</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="ACT"){echo "selected";};?>  value="ACT">ACT</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="NT"){echo "selected";};?>  value="NT">NT</option>
                </select> -->
                        <!--<select id="state" style="width:100%;height: 50px;margin-top: 6px" title="state">-->
                        <!--<option selected disabled value="">Select a State</option>-->
                        <!--<option value="VIC">VIC</option>-->
                        <!--<option value="NSW">NSW</option>-->
                        <!--<option value="QLD">QLD</option>-->
                        <!--<option value="SA">SA</option>-->
                        <!--<option value="WA">WA</option>-->
                        <!--<option value="TAS">TAS</option>-->
                        <!--<option value="ACT">ACT</option>-->
                        <!--<option value="NT">NT</option>-->
                        <!--                </select>-->
                    </div>
                    <div class="col-sm-4">
                        <label>Postcode</label><br>
                        <input id="postcode" class="form-control" type="text" title="postcode" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <label>Date of Assessment</label><br>
                        <textarea id="dateOfInspection" title="date of inspection" class="form-control"></textarea>
                    </div>
                    <div class="col-sm-6">
                        <label>Time of Assessment</label><br>
                        <textarea id="timeOfInspection" title="time" class="form-control"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <label>Proposed Used of Building</label><br>
                        <textarea id="proposedUsed" title="used or building" class="form-control"></textarea>
                    </div>
                    <div class="col-sm-6">
                        <label>Weather Conditions:</label><br>
                        <textarea id="weatherConditions" title="weather conditions" class="form-control"></textarea>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <label>Verbal Summary to</label><br>
                        <textarea id="verbalSummary" title="verbal summary" class="form-control"></textarea>
                    </div>
                    <div class="col-sm-6">
                        <label>Date:</label><br>
                        <textarea id="date" title="date" class="form-control"></textarea>
                    </div>

                </div>
            </form>
            <hr style="height:1px;border:none;color:#333;background-color:#333;">
        </div>

        <div id="AssessorDetails" class="container">
            <h3 class="sectionSubHead" style="font-size: 18px">ASSESSOR DETAILS</h3>
            <form>
                <div class="row form-group">
                    <div class="col-sm-6">
                        <label>Your Architect:</label>
                        <input class="form-control" type="text" id="architect" title="architect name" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
                    </div>
                    <div class="col-sm-6">
                        <label>Registration No:</label>
                        <input class="form-control" type="text" id="registrationNo" title="registration number" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm-6">
                        <label>Email Address</label><br>
                        <input class="form-control" type="text" id="email" title="email" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
                    </div>
                    <div class="col-sm-6">
                        <label>Phone</label><br>
                        <input class="form-control" type="text" id="architectPhone" title="phone" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Address</label><br>
                        <input id="architectAddress" class="form-control" type="text" title="address" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>">
                    </div>
                </div>

            </form>
            <hr style="height:1px;color:#333;background-color:#333;">
        </div>

        <!--Assessment Stage Reviewed-->
        <div class="container">

            <h3 class="sectionSubHead" style="font-size: 18px;margin-top: 30px;margin-bottom: 30px">ASSESSMENT STAGE REVIEWED (as marked)</h3>
            <table>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold;margin-top: 3px">Q1: Contract Review</label>
                        <p style="font-style:normal;font-weight: normal">An explanation of common contract terms and client/builder obligations.</p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="contractReview" title="stage select">
                    <option selected>Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold">Q2: Base</label>
                        <p style="font-weight: normal">After concrete footings are poured or after stumps, piers, columns or the concrete floor is completed.
                        </p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="base" title="stage select">
                    <option selected >Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold;margin-top: 3px">Q3: Frame</label>
                        <p style="font-style:normal;font-weight: normal">When the wall and roof frame is complete</p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="frame" title="stage select">
                    <option selected >Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold;margin-top: 3px">Q4: Lock Up</label>
                        <p style="font-style:normal;font-weight: normal">When external walls are complete, windows, doors, and roof coverings are fixed, flooring is laid and the building is secure</p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="lockUp" title="stage select">
                    <option selected >Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold;margin-top: 3px">Q5: Services(pre-lining)</label>
                        <p style="font-style:normal;font-weight: normal">When preliminary plumbing and electrical works are complete and wall insulation is in places.</p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="services" title="stage select">
                    <option selected >Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold;margin-top: 3px">Q6: Fix/Fit-out</label>
                        <p style="font-style:normal;font-weight: normal">When all interior work is complete and the property is ready for painting</p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="fixFitOut" title="stage select">
                    <option selected >Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold;margin-top: 3px">Q7: Pre-handover</label>
                        <p style="font-style:normal;font-weight: normal">When the property is presented for handover</p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="preHandover" title="stage select">
                    <option selected >Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
                <tr>
                    <th width="80%">
                        <label style="font-weight: bold;margin-top: 3px">Q8: Maintenance Period Expiry</label>
                        <p style="font-style:normal;font-weight: normal">A final assessment just before the Maintenance or Defects Liability period expires (typically 3-6 months after completion)</p>
                    </th>
                    <th>
                        <select style="margin-top: 20px;width: 100%" id="maintenancePeriod" title="stage select">
                    <option selected >Select if this is the stage</option>
                    <option value="√">✔</option>
                    <!--<option value="No">x</option>-->
                </select>
                    </th>
                </tr>
            </table>
            <hr style="height:1px;color:#333;background-color:#333;">
        </div>
        <!--   Assessment Extent-->
        <div class="container">
            <h3 class="sectionSubHead" style="font-size: 18px;margin-bottom: 30px;margin-top: 30px">ASSESSMENT EXTENT</h3>
            <form>
                <div class="row">
                    <div class="col-sm form-group">
                        <label> Extent of new building work:</label>
                    </div>
                    <div class="col-sm form-group">
                        <select id="extentOfBuilding" name="recommendation" title="extent of work">
                    <option>Choose an Item</option>
                    <option>Whole of building</option>
                    <option>Part of building</option>

                </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm form-group">
                        <label> Where Part new building work, described extent:</label>
                    </div>
                    <div class="col-sm form-group">
                        <textarea class="form-control" ID="describeExtent" title="extent describe"></textarea>


                    </div>
                </div>
            </form>
            <hr style="height:1px;color:#333;background-color:#333;">
        </div>

        <!--Summaries - Construction Summary-->
        <div class="container">
            <h2 style="text-align: left; color: red;font-weight: bold">Summaries</h2><br>
            <h2 class="sectionSubHeaderSmaller" style="color: red;font-size: 18px;font-weight: bold">CONSTRUCTION SUMMARY</h2>
            <button onclick="moreConstructionSummary()" type="button" class="btn btn-primary" style="margin-bottom: 5px;margin-top: 10px">Add One Summary</button>
            <div class="row" id="CSRow">
                <div class="col-sm-4" id="CS0" style="margin-top: 20px">
                    <label id="CSName0">No of Storeys</label><br>
                    <input class="form-control" type="text" id="CSSelect0" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect0" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>One</option>-->
                    <!--<option>One - split level</option>-->
                    <!--<option>Two</option>-->
                    <!--<option>Three</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS1" style="margin-top: 20px">
                    <label id="CSName1">Footings</label><br>
                    <input class="form-control" type="text" id="CSSelect1" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect1" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Concrete Footings and Slab</option>-->
                    <!--<option>Concrete strip footings and concrete stumps</option>-->
                    <!--<option>Concrete strip footings and timber stumps</option>-->
                    <!--<option>Concrete stumps</option>-->
                    <!--<option>Timber stumps</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS2" style="margin-top: 20px">
                    <label id="CSName2">Roof</label><br>
                    <input class="form-control" type="text" id="CSSelect2" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect2" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Concrete tiles</option>-->
                    <!--<option>Terracotta tiles</option>-->
                    <!--<option>Metal sheet/decking</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS3" style="margin-top: 20px">
                    <label id="CSName3">Ground Floor Structure</label><br>
                    <input class="form-control" type="text" id="CSSelect3" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect3" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Concrete</option>-->
                    <!--<option>Timber Framed</option>-->
                    <!--<option>Steel Framed</option>-->
                    <!--<option>Steel framed-suspended concrete</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS4" style="margin-top: 20px">
                    <label id="CSName4">Ground Floor Substrate</label><br>
                    <input class="form-control" type="text" id="CSSelect4" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect4" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Concrete Footings and Slab</option>-->
                    <!--<option>Concrete strip footings and concrete stumps</option>-->
                    <!--<option>Concrete strip footings and timber stumps</option>-->
                    <!--<option>Concrete stumps</option>-->
                    <!--<option>Timber stumps</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS5" style="margin-top: 20px">
                    <label id="CSName5">Ground Floor Walls</label><br>
                    <input class="form-control" type="text" id="CSSelect5" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect5" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Solid Brickwork</option>-->
                    <!--<option>Solid Blockwork</option>-->
                    <!--<option>Brick veneer</option>-->
                    <!--<option>Block veneer</option>-->
                    <!--<option>Timber cladding</option>-->
                    <!--<option>Cement board/sheet</option>-->
                    <!--<option>Metal sheet/panel</option>-->
                    <!--<option>Rendered cladding</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS6" style="margin-top: 20px">
                    <label id="CSName6">First Floor Structure</label><br>
                    <input class="form-control" type="text" id="CSSelect6" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect6" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Concrete</option>-->
                    <!--<option>Timber Framed</option>-->
                    <!--<option>Steel Framed</option>-->
                    <!--<option>Steel framed-suspended concrete</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS7" style="margin-top: 20px">
                    <label id="CSName7">First Floor Substrate</label><br>
                    <input class="form-control" type="text" id="CSSelect7" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect7" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Concrete</option>-->
                    <!--<option>Timber</option>-->
                    <!--<option>Structural timber(sheet)</option>-->
                    <!--<option>Timber strip flooring</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS8" style="margin-top: 20px">
                    <label id="CSName8">First Floor Walls</label><br>
                    <input class="form-control" type="text" id="CSSelect8" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect8" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item</option>-->
                    <!--<option>Solid Brickwork</option>-->
                    <!--<option>Solid Blockwork</option>-->
                    <!--<option>Brick veneer</option>-->
                    <!--<option>Block veneer</option>-->
                    <!--<option>Timber cladding</option>-->
                    <!--<option>Cement board/sheet</option>-->
                    <!--<option>Metal sheet/panel</option>-->
                    <!--<option>Rendered cladding</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
                <div class="col-sm-4" id="CS9" style="margin-top: 20px">
                    <label id="CSName9">Windows</label><br>
                    <input class="form-control" type="text" id="CSSelect9" title="CSSelect" style="margin-top: -5px">
                    <!--<select id="CSSelect9" style="width:100%;border-style: groove" title="CSSelect">-->
                    <!--<option>Choose an item.</option>-->
                    <!--<option>Timber</option>-->
                    <!--<option>Aluminium</option>-->
                    <!--<option>PVC</option>-->
                    <!--<option>Composite</option>-->
                    <!--<option>Not Applicable</option>-->
                    <!--<option>Other</option>-->
                    <!--</select>-->
                </div>
            </div>
            <hr>
        </div>
        <div class="container" style="margin-top: 30px">
            <table>
                <tr style="width: 100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: red">ASSESSMENT SUMMARY</th>
                </tr>
                <tr>
                    <td>
                        <textarea rows="10" class="form-control" style="padding: 2px 2px; height: 400px" id="assessmentSummary" title="assessment summary"></textarea>
                    </td>

                </tr>
            </table>
            <hr style="height:1px;border:none;color:#333;background-color:#333;">
        </div>
        <div id="ConstructionCoverImageDiv" class="container">
            <form>
                <div class="row form-group">
                    <div class="col-sm-6">
                        <input type="button" value="Upload Cover Image" class="uploadCoverImageButton" onclick="ConstructionCover()">
                        <input type="file" id="ConstructionUploadCoverImage" class="inputImage" accept="image/x-png,image/jpeg">
                    </div>
                    <div class="col-sm-6">
                        <div class="col-sm">
                            <img id="ConstructionCoverImage" src="#" alt="Image1" style="width:400px;display: none" />
                        </div>
                        <div class="col-sm">
                            <input class="btn btn-danger" type="button" value="Remove" id="ConstructionCoverImageRemoveButton" onclick="RemoveConstructionCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                            <br>
                        </div>
                        <div class="col-sm">
                            <input type="text" id="ConstructionCoverImageAngle" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                            <br>
                        </div>
                        <div class="col-sm">
                            <input class="btn btn-info" type="button" value="Rotate" id="ConstructionCoverImageRotateButton" onclick="RotateConstructionCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                            <br>
                        </div>
                    </div>
                </div>
            </form>
            <hr style="height:1px;color:#333;background-color:#333;">
        </div>

        <!-- Report -->
        <div class="container">
            <h2 style="text-align: left; color: red;font-weight: bold">Construction Quality Assurance Assessment Report</h2><br>
            <table>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller"  style="color: red;width:80%">
                        LIST OF EVIDENT DEFECTIVE OR INCOMPLETE WORK
                    </th>
                </tr>
                <tr style="width:100%">
                    <td colspan = "2">
                        <textarea  id="listOfDefective" rows="25" class="form-control" style="padding: 2px 2px; height: 240px" title="evident defective" onkeyup="AutoNumbering('listOfDefective')"></textarea>
                    </td>
                </tr>
            </table>
            <br>
            <table>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: red">External Elements</th>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">Site</th>
                </tr>
                <tr>
                    <td>
                        <textarea id="externalSites" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="External Sites" onkeyup="assignNumber('externalSites')"></textarea>
                    </td>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">Out Building & Attached Structures</th>
                </tr>
                <tr>
                    <td>
                        <textarea id="externalOutBuilding" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="External Out Building" onkeyup="assignNumber('externalOutBuilding')"></textarea>
                    </td>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">External Building Elements</th>
                </tr>
                <tr>
                    <td>
                        <textarea id="externalBuilding" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="external Building" onkeyup="assignNumber('externalBuilding')"></textarea>
                    </td>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">External Access Limitations</th>
                </tr>
                <tr>
                    <td>
                        <textarea id="externalAccessLimitation" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="External Access Limitation" onkeyup="assignNumber('externalAccessLimitation')"></textarea>
                    </td>
                </tr>
            </table>
            <br>
            <table>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: red">Internal Elements</th>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">Internal Living & Bedroom Areas</th>
                </tr>
                <tr>
                    <td>
                        <textarea id="internalLiving" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="Internal Living" onkeyup="assignNumber('internalLiving')"></textarea>
                    </td>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">Internal Service (Wet) Areas</th>
                </tr>
                <tr>
                    <td>
                        <textarea id="internalServiceAreas" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="Internal Service Areas" onkeyup="assignNumber('internalServiceAreas')"></textarea>
                    </td>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">Services<sup>*</sup></th>
                </tr>
                <tr>
                    <td>
                        <textarea id="internalServices" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="Internal Services" onkeyup="assignNumber('internalServices')"></textarea>
                    </td>
                </tr>
                <tr style="width:100%">
                    <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">Internal Access Limitations</th>
                </tr>
                <tr>
                    <td>
                        <textarea id="internalAccessLimitations" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="Internal Access Limitation" onkeyup="assignNumber('internalAccessLimitations')"></textarea>
                    </td>
                </tr>
            </table>
            <hr style="height:1px;border:none;color:#333;background-color:#333;">
            <hr style="height:1px;color:#333;background-color:#333;">
        </div>

        <div class="container">
            <h4 style="color: red">Evident Defective or incomplete work / Not Visible</h4>
            <div class="container">
                <input type="button" id="get_ConstructionImage" value="Upload Images (Max 30 images)" class="uploadImageButton" onclick="ConstructionUploadImages()" style="white-space: normal; width: 15%">
                <input type="file" id="ConstructionUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
                <input type="file" id="ConstructionUploadOneImage" class="inputImage" accept="image/x-png,image/jpeg">
            </div>
            <div class="container">
                <table id="ConstructionImagesTable" style="display: none">
                    <tr>
                        <th>
                            <div class="row form-group" id="ConstructionPhotographs">
                            </div>

                        </th>
                    </tr>
                </table>
                <br>
            </div>
            <hr style="height:1px;color:#333;background-color:#333;">
        </div>

        <!--Attachment-->
        <div class="container">

            <h2 class="content-head text-center firstH1">Attachments</h2><br>
        </div>
        <div class="container">
            <hr>
            <p>
                The following selected attachments are an important part of this Report. These can be found in the Technical Information Booklet on the Archicentre Australia Supplementary Documents web page –
                <a href="http://www.archicentreaustralia.com.au/report_downloads/">http://www.archicentreaustralia.com.au/report_downloads/</a> - or by referring to the Report cover letter for downloading instructions. If you have difficulty downloading the Booklet, please contact Archicentre Australia on 1300 13 45 13 immediately.

            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <label>Property Maintenance Guide</label>
                    <select id="propertyMaintenanceGuide" style="width:100%" title="Attachment Select">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
                </div>
                <div class="col-sm-4">
                    <label>Cracking in Masonry</label>
                    <select id="crackingInMasonry" style="width:100%" title="Attachment Select">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
                </div>
                <div class="col-sm-4">
                    <label>Treatment of Dampness</label>
                    <select id="treatmentOfDampness" style="width:100%" title="Attachment Select">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <label>Health & Safety Warning</label>
                    <select id="healthSafetyWarning" style="width:100%" title="Attachment Select">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>

                </div>
                <div class="col-sm-4">
                    <label>Roofing & Guttering</label>
                    <select id="roofingGuttering" style="width:100%" title="Attachment Select">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
                </div>
                <div class="col-sm-4">
                    <label>Re-stumping</label>
                    <select id="reStumping" style="width:100%" title="Attachment Select">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <label>Termites & Borers</label>
                    <select id="termitesBorers" style="width:100%" title="Attachment Select">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>

                </div>

            </div>
        </div>


        <div class="container" style="text-align:center">
            <br>
            <br>
            <br>
            <?php
      if (!$isuserlink)
      {
        if (SharedIsAdmin())
        {
    ?>
                <button onclick="SaveReport()" type="button" class="btn btn-primary save">Save</button>
                <button onclick="generatePDF('final')" type="button" class="btn btn-primary">View as PDF</button>
                <!-- <button onclick="checkPDF()" type="button" class="btn btn-primary">Save as Report for Client</button> -->
                <?php
        }
        else
        {
            if (!$iscompleted)
            {
    ?>
                    <button onclick="SaveReport()" type="button" class="btn btn-primary save">Save</button>
                    <?php
            }
    ?>
                        <button onclick="generatePDF('preview')" type="button" class="btn btn-primary">Preview PDF</button>
                        <?php
        }
      }
    ?>
                            <br><br><br><br>
        </div>



        <!--<script src="../JS/uploadImages.js"></script>-->
        <!--<script src="../JS/removeImages.js"></script>-->
        <script src="js/images.js"></script>
        <script src="js/loadImageJS/load-image.all.min.js"></script>

        <!--Text File-->
        <script src="ConstructionJS/text.js?<?php echo time(); ?>"></script>
        <!--PDF Generator-->
        <script src="ConstructionJS/PDFGenerator.js?<?php echo time(); ?>"></script>
        <!--General Functions-->
        <script src="ConstructionJS/generalFunctions.js?<?php echo time(); ?>"></script>
        <script src="ConstructionJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
        <!--Get Table's Data-->
        <script src="ConstructionJS/getTableData.js?<?php echo time(); ?>"></script>
    </body>

    </html>
