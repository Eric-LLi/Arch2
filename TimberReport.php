<?php
  require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Timber Pest Inspection - <?php echo $bookingcode; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--  Import JQuery  -->

    <!--<script src="js/jquery-1.12.4.min.js"></script>-->
    <!--<script src="js/jquery-1.12.4.min.js"></script>-->
     <script src="js/jquery-1.12.4.min.js"></script>
    <!-- <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <!-- Customized CSS -->
    <link rel="stylesheet" href="css/general.css">
   <!--  <link rel="stylesheet" href="../css/general.css"> -->
    <!--  Import pdfMake  -->
    <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
    <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>
    <!--<script src='../node_modules/pdfmake/build/pdfmake.min.js'></script>-->
    <!--<script src='../node_modules/pdfmake/build/vfs_fonts.js'></script>-->

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
<!--Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">ArchiCentre Task</a>
    <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"-->
            <!--aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
        <!--<span class="navbar-toggler-icon"></span>-->
    <!--</button>-->

    <!--<div class="collapse navbar-collapse" id="navbarSupportedContent">-->

        <!--<ul class="navbar-nav mr-auto">-->
            <!--<li class="nav-item">-->
                <!--<a class="nav-link" href="#">Back</a>-->
            <!--</li>-->
        <!--</ul>-->
        <!--<form class="form-inline my-2 my-lg-0">-->
            <!--<a class="nav-link" href="#">Welcome XXXXX@XXX.COM</a>-->
            <!--<button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Logout</button>-->
        <!--</form>-->
        <!---->
    <!--</div>-->
</nav>

<!--Single Upload One Image Action -->
<input type="file" id="TimberUploadOneImage" accept="image/x-png,image/jpeg" class="inputImage">


<!-- Title  -->
<div class="container">
    <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
        <strong>Saving PDF. Please don't close this page. It will take a while</strong>
    </div>
    <h2 class="content-head text-center firstH1">Timber Pest Inspection Report</h2><br>
    <p>
        This Timber Pest Inspection Report is a non-invasive, visual inpsection for the activity of timber pests of the
        reasonably
        accessible areas of the property at the time of the inpsection, including the subject residence and associatied
        areas where the
        property is a flat or apartment
    </p>
</div>

<!-- Inspection Info -->
<div id="CustomerDetails" class="container">
    <hr>
    <h3 class="sectionSubHead">CLIENT DETAILS</h3>
    <form>
        <div class="row">
            <div class="col-sm-6">
                <label>Name</label>
                <br>
                <input id="0" class="form-control" title="name" type="text" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
            </div>
            <div class="col-sm-6">
                <label>Booking No.</label>
                <br>
                <input id="8" class="form-control" type="text" title="bookingNo" value="<?php echo $bookingcode; ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Phone</label>
                <br>
                <input id="1" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Mobile</label>
                <br>
                <input id="custmobile" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
            </div>
        </div>
    </form>
    <hr>
</div>
<div id="Inspection Details" class="container">
    <h3 class="sectionSubHead">INSPECTION DETAILS</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Address of Property:</label><br>
                <input id="2" class="form-control" type="text" title="input" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Suburb</label><br>
                <input id="3" class="form-control" type="text" title="input" value="<?php echo doNiceArrayElemAsString('city'); ?>">
            </div>
            <div class="col-sm">
                <label>State</label><br>
                <input id="state" class="form-control" type="text" title="state" value="<?php echo doNiceArrayElemAsString('state', false); ?>">
                <!--<select id="state" style="width:100%;height: 50px;margin-top: 6px;" title="state" >-->
                <!--<option <?php if(doNiceArrayElemAsString('state', false)==""){echo "selected";};?> disabled value="">Select a State</option>-->
                <!--<option <?php if(doNiceArrayElemAsString('state', false)=="VIC"){echo "selected";} ;?> value="VIC">VIC</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="NSW"){echo "selected";};?> value="NSW">NSW</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="QLD"){echo "selected";};?> value="QLD">QLD</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="SA"){echo "selected";};?> value="SA">SA</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="WA"){echo "selected";};?> value="WA">WA</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="TAS"){echo "selected";};?> value="TAS">TAS</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="ACT"){echo "selected";};?>  value="ACT">ACT</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="NT"){echo "selected";};?>  value="NT">NT</option>-->
                <!--</select>-->
                <!--<select id="state" style="width:100%" title="state">-->
                    <!--<option selected disabled value="">Select a State</option>-->
                    <!--<option value="VIC">VIC</option>-->
                    <!--<option value="NSW">NSW</option>-->
                    <!--<option value="QLD">QLD</option>-->
                    <!--<option value="SA">SA</option>-->
                    <!--<option value="WA">WA</option>-->
                    <!--<option value="TAS">TAS</option>-->
                    <!--<option value="ACT">ACT</option>-->
                    <!--<option value="NT">NT</option>-->
                <!--</select>-->
            </div>
            <div class="col-sm">
                <label>Postcode</label><br>
                <input id="11" class="form-control" type="text" title="input" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
            </div>
        </div>
        <br>
        <div class="row form-group">
            <div class="col-sm">
                <label>Date of Inspection</label><br>
                <textarea id="4" class="form-control" title="date of Inspection"></textarea>
            </div>
            <div class="col-sm">
                <label>Time of Inspection</label><br>
                <textarea id="10" class="form-control" title="time of Inspection"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Existing Use of Property</label><br>
                <textarea id="5" class="form-control" title="existing use of property"></textarea>
            </div>
            <div class="col-sm">
                <label>Weather Conditions</label><br>
                <textarea id="6" class="form-control" title="weather Condition"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label>Verbal Summary to</label><br>
                <!-- <textarea id="7" class="form-control" title="verbal Summary"></textarea> -->
                <select id="7" style="width:100%;height:50px;marginBottom:30px" class="form-control">
                    <option selected disabled value="Choose an item">Choose an item</option>
                    <option value="Given in person">Given in person</option>
                    <option value="Given over the phone">Given over the phone</option>
                    <option value="Left message request for call back">Left message request for call back</option>
                    <option value="Left detailed voice message">Left detailed voice message</option>
                </select>
            </div>
            <div class="col-sm-6">
                <label>Date:</label><br>
                <textarea id="12" class="form-control" title="date"></textarea>
            </div>

        </div>
    </form>
    <br>
    <hr>
</div>
<div id="InspectorDetails" class="container">
    <h3 class="sectionSubHead">INSPECTOR DETAILS</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Name:</label>
                <input id="inspector01" class="form-control" type="text" title="inspector name" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
            </div>
            <div class="col-sm">
                <label>Licence No.</label><br>
                <input id="inspector03" class="form-control" type="text" title="licence no." value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Phone</label><br>
                <input id="inspector02" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
            </div>
            <div class="col-sm">
                <label>Email Address</label><br>
                <input id="inspectorEmail" class="form-control" type="text" title="email address" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
            </div>

        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Inspector Address</label><br>
                <input id="inspectorAddress" class="form-control" type="text" title="inspector address" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>">
            </div>
        </div>
    </form>
    <hr>
</div>
<div class="container">
    <h2 class="content-head text-center firstH1">INSPECTION SUMMARY</h2><br>
    <p>
        This Timber Pest Inspection Summary provides you with a brief overview of the items and conditions theinspector
        considers
        of greatest significance for you when considering this property. Please not that this Summary is no the complete
        Report and
        that in the event of an apparent discrepancy the complete Report overrides the Summary information.
    </p>
    <hr>
</div>
<!--Property Summary -->
<div id="propertySummary" class="container">
    <h3 class="sectionSubHead">PROPERTY SUMMARY
        <label style="font-size: 14px">- Primary construction materials and site conditions</label>
    </h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Sub-Structure</label><br>
                <input id="ps0" class="form-control" type="text" title="sub-structure">
            </div>
            <div class="col-sm">
                <label>Floors</label><br>
                <input id="ps1" class="form-control" type="text" title="floors">
            </div>
            <div class="col-sm">
                <label>Roof</label><br>
                <input id="ps2" class="form-control" type="text" title="roof">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Walls</label><br>
                <input id="ps3" class="form-control" type="text" title="walls">
            </div>
            <div class="col-sm">
                <label>No. of Storeys</label><br>
                <input id="ps4" class="form-control" type="text" title="no. of storeys">
            </div>
            <div class="col-sm">
                <label>Windows</label><br>
                <input id="ps5" class="form-control" type="text" title="windows">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Site Grade</label><br>
                <!-- <input id="ps6" class="form-control" type="text" title="site Grade"> -->
                <select id="ps6" style="width:100%;height:50px;marginBottom:30px" class="form-control" onchange="changeOther('ps6','ps6other')">
                    <option selected disabled value="Choose an item">Choose an item</option>
                    <option value="Flat">Flat</option>
                    <option value="Gentle slope">Gentle slope</option>
                    <option value="Steep slope">Steep slope</option>
                    <option value="Other">Other</option>
                </select>
                <input id="ps6other" style="display:none;marginTop:30px" placeholder="Other" type="text" class="form-control">
            </div>
            <div class="col-sm">
                <label>Furnished</label><br>
                <!-- <input id="ps7" class="form-control" type="text" title="furnished"> -->
                <select id="ps7" style="width:100%;height:50px;marginBottom:30px" class="form-control">
                    <option selected disabled value="Choose an item">Choose an item</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Partial">Partial</option>
                </select>
            </div>
            <div class="col-sm">
                <label>Tree Coverage</label><br>
                <!-- <input id="ps8" class="form-control" type="text" title="tree coverage"> -->
                <select id="ps8" style="width:100%;height:50px;marginBottom:30px" class="form-control">
                    <option selected disabled value="Choose an item">Choose an item</option>
                    <option value="Light">Light</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Dense">Dense</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Extensions / Renovation</label><br>
                <!-- <input id="ps9" class="form-control" type="text" title="extensions/renovation"> -->
                <select id="ps9" style="width:100%;height:50px;marginBottom:30px" class="form-control" onchange="changeOther('ps9','ps9other')">
                    <option selected disabled value="Choose an item">Choose an item</option>
                    <option value="No - likely original plan">No - likely original plan</option>
                    <option value="Yes - Internal renovations">Yes - Internal renovations</option>
                    <option value="Yes - extended">Yes - extended</option>
                    <option value="Yes -  upstairs extension">Yes -  upstairs extension</option>
                    <option value="Yes -  extended & renovated">Yes -  extended & renovated</option>
                    <option value="Other">Other</option>
                </select>
                <input id="ps9other" style="display:none;marginTop:30px" placeholder="Other" type="text" class="form-control">
            </div>
            <div class="col-sm">
                <label>Estimated Age / Period</label><br>
                <input id="ps10" class="form-control" type="text" title="estimated age/period">
            </div>
        </div>
    </form>
</div>
<!--Treatment Summary -->
<div id="treatmentSummary" class="container">
    <hr>
    <h3 class="sectionSubHead">Treatment & Conducive Conditions Summary
        <label class="sectionSubHeadSmaller">- refer body of Report for full details</label></h3>
    <div class="row">
        <div class="form-group col-sm-6">
            <div class="row">
                <div class="col-sm">
                    <label>Evidence of Previous Pest Treatment</label>
                    <input id="TCCS01" class="form-control" type="text" title="evidence">
                </div>

            </div>
            <div class="row">
                <div class="col-sm">
                    <label>Type</label>
                    <input id="TCCS02" class="form-control" type="text" title="type">
                </div>
            </div>
            <div class="row">
                <div class="col-sm">
                    <label>Risk posed by environmental conditions conducive to timber pest attack</label>
                    <textarea id="TCCS03" class="form-control" title="risk"></textarea>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm form-group">
                    <label>Is an intrusive inspection of inaccessible areas recommended?</label>
                </div>
                <div class="col-sm form-group">
                    <select id="TCCS04" name="recommendation" title="select">
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not Applicable">Not Applicable</option>
                    </select>
                </div>
            </div>

        </div>
        <div class="form-group col-sm-6">
            <div class="row">
                <div class="col-sm">
                    <input type="button" value="Upload Cover Image" class="uploadCoverImageButton"
                           onclick="TimberCover()" style="width: 500px">
                    <input type="file" id="TimberUploadCoverImage" class="inputImage" accept="image/x-png,image/jpeg">
                </div>
            </div>
            <div class="row">
                <form>
                    <div class="col-sm">
                        <img id="TimberCoverImage" src="#" alt="Image1"
                             style="width:500px;display: none"/>
                    </div>
                    <div class="col-sm">
                        <input class="btn btn-danger" type="button" value="Remove" id="TimberCoverImageRemoveButton"
                               onclick="RemoveTimberCoverImage()"
                               style="display: none; margin-top: 5px;margin-bottom: 5px;width: 500px">
                        <br>
                    </div>
                    <div class="col-sm">
                        <input type="text" id="TimberCoverImageAngle" style="display: none; margin-top: 5px;margin-bottom: 5px;width:500px">
                        <br>
                    </div>
                    <div class="col-sm">
                        <input class="btn btn-info" type="button" value="Rotate" id="TimberCoverImageRotateButton" onclick="RotateTimberCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px;width:500px">
                        <br>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<!--Sighted Activity -->
<div id="SightedActivity" class="container">
    <hr>
    <h3 class="sectionSubHead" style="font-size: 20px">Sighted Activity</h3>
    <table style="margin-top: 10px">
        <tr>
            <th class="sectionSubHeadSmaller" style="color: red;text-align: center;width: 40%;height:40px">Has Timber Pest activity been sighted?</th>
            <th>
                <select id="pestActivitySighted" name="pestActivitySighted" title="pest sighted" style="width: 100%;height:40px">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="No Visible Activity">No Visible Activity</option>
                    <option value="Visible Evidence">Visible Evidence</option>
                    <option value="Visible Active Evidence">Visible Active Evidence</option>
                </select>
            </th>
        </tr>
        <tr>
            <th style="width: 20%;text-align: center"> Timber Pest</th>
            <th style="text-align: center;"> Where sighted</th>
        </tr>
        <tr>
            <td><label id="sightedActivityName0">Subterranean Termites</label></td>
            <td><input type="text" id="14" class="form-control" title="sighted activity"/></td>
        </tr>
        <tr>
            <td><label id="sightedActivityName1">Dampwood Termites</label></td>
            <td><input type="text" id="15" class="form-control" title="sighted activity"/></td>
        </tr>
        <tr>
            <td><label id="sightedActivityName2">Timber Decay(rot)</label></td>
            <td><input type="text" id="16" class="form-control" title="sighted activity"/></td>
        </tr>
        <tr>
            <td>
                <select id="sightedActivityName3" name="pestActivitySighted" title="pest sighted" style="width: 100%;text-align: center">
                    <option value="" disabled selected>Choose a borer</option>
                    <option value="Borer Anobiid">Borer Anobiid</option>
                    <option value="Borer Lyctus">Borer Lyctus</option>
                    <option value="Borer Other">Other</option>
                    <option value="Borer Unidentified">Unidentified</option>
                </select>
            </td>
            <td><input type="text" id="17" class="form-control" title="sighted activity"/></td>
        </tr>
        <tr>
            <td>
                <select id="sightedActivityName4" name="pestActivitySighted" title="pest sighted" style="width:100%">
                    <option value="" disabled selected>Choose a borer</option>
                    <option value="Borer Anobiid">Borer Anobiid</option>
                    <option value="Borer Lyctus">Borer Lyctus</option>
                    <option value="Borer Other">Other</option>
                    <option value="Borer Unidentified">Unidentified</option>
                </select>
            </td>
            <td><input type="text" id="18" class="form-control" title="sighted activity"/></td>
        </tr>
    </table>
    <br>
</div>

<!--Restriction -->
<div id="AccessRestriction" class="container">
    <hr style="border:1px">
    <h3 class="sectionSubHead" style="font-size: 20px">Access Restrictions</h3>
    <p>Access is critical because we can only report on what the inspector can see.</p>
    <table>
        <tr>
            <th class="sectionSubHeadSmaller" colspan="2" style="color: red;text-align: center;width: 50%;height:40px">Are there Significant Access Restrictions?</th>
            <th style="width: 50%;height: 40px" colspan="2">
                <select id="accessRestrictions" name="accessRestrictions" title="select access restriction" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </th>
        </tr>
        <tr>
            <th style="text-align: center; width: 20%">Location</th>
            <th style="text-align: center;width:20%">Yes/No</th>
            <th style="text-align: center;width:20%">Risk Factor</th>
            <th style="text-align: center">Nature of Restriction</th>
        </tr>
        <tr>
            <td style="text-align: center">Site & Garden</td>
            <td style="text-align: center">
                <select id="AccResSG01" name="siteGardenRestriction" title="restriction select" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td>
                <select id="AccResSG02" name="siteGardenRestriction" title="restriction select" style="width: 100%" onblur="autoPopulateRiskFactor('AccResSG02','siteAndGardenALRF')">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Extreme">Extreme</option>
                    <option value="Low">Low</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td><textarea id="AccResSG03" class="form-control" title="Nature of Restriction" onblur="autoPopulateAccessNotes('AccResSG03','siteAndGardenAN')"></textarea></td>
        </tr>
        <tr>
            <td style="text-align: center">Exterior of Building</td>
            <td style="text-align: center">
                <select id="AccResEoB01" name="ExteriorRestriction" title="restriction selecti" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td>
                <select id="AccResEoB02" name="siteGardenRestriction" title="restriction select" style="width: 100%" onblur="autoPopulateRiskFactor('AccResEoB02','EoB-ALRF')">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Extreme">Extreme</option>
                    <option value="Low">Low</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td><textarea id="AccResEoB03" class="form-control" title="Nature of Restriction" onblur="autoPopulateAccessNotes('AccResEoB03','EoB-AN')"></textarea></td>
        </tr>
        <tr>
            <td style="text-align: center">Interior of Building</td>
            <td style="text-align: center">
                <select id="AccResIoB01" name="InteriorRestriction" title="restriction select" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td>
                <select id="AccResIoB02" name="siteGardenRestriction" title="restriction select" style="width: 100%" onblur="autoPopulateRiskFactor('AccResIoB02','IoB-T1-ALRF')">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Extreme">Extreme</option>
                    <option value="Low">Low</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td><textarea id="AccResIoB03" class="form-control" title="Nature of Restriction" onblur="autoPopulateAccessNotes('AccResIoB03','IoB-T1-AN')"></textarea></td>
        </tr>
        <tr>
            <td style="text-align: center">Roof Void</td>
            <td style="text-align: center">
                <select id="AccResRV01" name="roofRestriction" title="restriction select" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td>
                <select id="AccResRV02" name="siteGardenRestriction" title="restriction select" style="width: 100%" onblur="autoPopulateRiskFactor('AccResRV02','RS-ALRF')">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Extreme">Extreme</option>
                    <option value="Low">Low</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td><textarea id="AccResRV03" class="form-control" title="Nature of Restriction" onblur="autoPopulateAccessNotes('AccResRV03','RS-AN')"></textarea></td>
        </tr>
        <tr>
            <td style="text-align: center">Sub-floor Void</td>
            <td style="text-align: center">
                <select id="AccResSFV01" name="subfloorRestriction" title="restriction select" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td>
                <select id="AccResSFV02" name="siteGardenRestriction" title="restriction select" style="width: 100%" onblur="autoPopulateRiskFactor('AccResSFV02','SFS-ALRF')">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Extreme">Extreme</option>
                    <option value="Low">Low</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </td>
            <td><textarea id="AccResSFV03" class="form-control" title="Nature of Restriction" onblur="autoPopulateAccessNotes('AccResSFV03','SFS-AN')"></textarea></td>
        </tr>
    </table>
</div>
<!--Summary Photos-->
<div class="container">
    <h3 class="sectionSubHead" style="font-size: 20px;margin-top:50px">Photos</h3>
    <div class="container" style="margin-top:20px">
        <input type="button" id="TimberSummaryAddImagesButton" value="Upload Images (Max 3 images)" class="uploadImageButton" onclick="TimberSummaryUploadImages()" style="white-space: normal; width: 15%">
        <input type="file" id="TimberSummaryUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    </div> 
    <table id="TimberSummaryImagesTable" style="margin-top: 20px;width:100%;display:block">
        <tr>
            <th>
                <div class="row form-group" id="TimberSummaryPhotographs">
                </div>
            </th>
           
        </tr>
    </table>
    <br>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!--Site and Garden -->
<div class="container">
    <h2 class="content-head text-center firstH1">Site and Garden</h2><br>
</div>
<!-- Site and Garden - Access Limitation -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Notes:</label><br>
            </div>
        <div class="col-sm-8">
            <textarea id="siteAndGardenAN" class="form-control" title="access notes"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Limitation:</label><br>
            </div>
        <div class="col-sm-8">
            <select id="siteAndGardenAL" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Reasonably Accessible">Reasonably Accessible</option>
                <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety
                    Hazard
                </option>
                <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard
                </option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Access Limitation Risk Factor</label><br>
        </div>
        <div class="col-sm-8">
            <select id="siteAndGardenALRF" style="width:100%;height: 30px" title="risk factor select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
                <option value="Low">Low</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Site and Garden - Subterranean Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of subterranean termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="siteAndGardenVEoSTF" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="STF-LE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
             <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="STF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="STF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Outside scope">Outside scope</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="STF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Site and Garden - Dampwood or other Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of dampwood or other termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="siteAndGardenVEoDoOTF" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="DTF-LE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="DTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="DTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Outside scope">Outside scope</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="DTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Site and Garden - wood decay fungus -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of wood decay fungus found:</label>
        </div>
        <div class="col-sm-8">
            <select id="siteAndGardenWDFF" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="WDFF-LE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="WDFF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Site and Garden - borer beetle 1 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="siteAndGardenBBF" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="BBF-T" title="site and garden borer 1" style="width:85%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Anobiid Borer">Anobiid Borer</option>
                <option value="Lyctus Borer">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="BBF-LE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="BBF-DATB" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Site and Garden - borer beetle 2-->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="siteAndGardenBBF2" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="BBF-T2" title="site and garden borer 1" style="width:85%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Anobiid Borer">Anobiid Borer</option>
                <option value="Lyctus Borer">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="BBF-LE2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="BBF-DATB2" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Site and Garden - Environmental Conditions -->
<div class="container" style="margin-top: 10px">
    <h2 class="sectionSubHead" style="font-size: 20px">Environmental conditions conducive to timber pest attack:</h2><br>
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Excessive Dampness?</label>
        </div>
        <div class="col-sm-8">
            <select id="ED-1" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NotApplicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="ED-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="ED-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Timber in contact with ground?</label>
        </div>
        <div class="col-sm form-group">
            <select id="TICWG-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NotApplicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="TICWG-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="TICWG-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Close proximity of potential nesting sites?</label>
        </div>
        <div class="col-sm form-group">
            <select id="CPOPNS-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NotApplicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="CPOPNS-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="CPOPNS-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" >
            <input id="ECCTTPA-otherOption" type="text" placeholder="Others" class="form-control" style="width: 50%" title="site garden other">
        </div>
        <div class="col-sm">
            <input id="ECCTTPA-otherChoice" type="text" class="form-control" style="width: 100%" title="other description">
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="ECCTTPA-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="ECCTTPA-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
    <br>
</div>
<!--Site and Garden - Display and Add Images -->
<div class="container">
    <div class="container"> 
        <input type="button" id="TimberSiteAddImagesButton" value="Upload Images (Max 3 images)" class="uploadImageButton" onclick="TimberSiteUploadImages()" style="white-space: normal; width: 15%">
        <input type="file" id="TimberSiteUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    </div>
    <table id="TimberSiteImagesTable" style="margin-top: 20px;width:100%;display:block">

        <tr>
            <th>
                <div class="row form-group" id="TimberSitePhotographs">
                </div>
            </th>
        </tr>
    </table>
    <!--<hr style="height:1px;border:none;color:#333;background-color:#333;">-->
<hr>
<br>
</div>

<!--Exterior of Buildings -->
<div class="container">
    <h2 class="content-head text-center firstH1">Exterior of Buildings</h2><br>
</div>
<!-- Exterior of Buildings - Access Limitation -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Notes:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-AN" class="form-control" title="access notes"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Limitation:</label><br>
        </div>
        <div class="col-sm-8">
            <select id="EoB-AL" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Reasonably Accessible">Reasonably Accessible</option>
                <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety
                    Hazard
                </option>
                <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard
                </option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Access Limitation Risk Factor</label><br>
        </div>
        <div class="col-sm-8">
            <select id="EoB-ALRF" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
                <option value="Low">Low</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Exterior of Buildings- Subterranean Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of subterranean termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEOSTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-VEOSTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEOSTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEOSTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Outside scope">Outside scope</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-VEOSTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Exterior of Buildings - Dampwood or other Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of dampwood or other termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEoDoOTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-VEoDoOTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEoDoOTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEoDoOTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Outside scope">Outside scope</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-VEoDoOTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Exterior of Buildings - wood decay fungus -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of wood decay fungus found:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEoWDFF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-VEoWDFF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEoWDFF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>

<!-- Exterior of Buildings - borer beetle 1 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead" style="margin-top: 5px">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="EoB-VEoBBF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="EoB-VEoBBF-T" title="site and garden borer 1" style="width:100%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Anobiid Borer">Anobiid Borer</option>
                <option value="Lyctus Borer">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-VEoBBF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEoBBF-DATB" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Exterior of Buildings - borer beetle 2 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead" style="margin-top: 5px">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="EoB-VEoBBF-SLC2" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="EoB-VEoBBF-T2" title="site and garden borer 1" style="width:100%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Borer Anobiid">Anobiid Borer</option>
                <option value="Borer Lyctus">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-VEoBBF-LAE2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-VEoBBF-DATB2" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Exterior of Buildings - Others 1 -->
<!--<div class="container">-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm form-group">-->
            <!--<input id="EoB-o1" placeholder="Others" class="form-control;input1">-->
        <!--</div>-->
        <!--<div class="col-sm form-group">-->
            <!--<select id="EoB-SLC1" name="beetleFound1">-->
                <!--<option value="Yes">Yes</option>-->
                <!--<option value="No">No</option>-->
                <!--<option value="Not Applicable">Not Applicable</option>-->
            <!--</select>-->
        <!--</div>-->
        <!--<br>-->
    <!--</div>-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm">-->
            <!--<label>Type:</label><br>-->
            <!--<textarea id="EoB-Type1" class="form-control"></textarea>-->
        <!--</div>-->
    <!--</div>-->
    <!--<form>-->
        <!--<div class="row form-group">-->
            <!--<div class="col-sm">-->
                <!--<label>Location & Extent: </label>-->
                <!--<textarea id="EoB-LAE1" class="form-control"></textarea>-->
            <!--</div>-->
            <!--<div class="col-sm">-->
                <!--<label>Damage appears to be</label>-->
                <!--<textarea id="EoB-DATB1" class="form-control"></textarea>-->
            <!--</div>-->
        <!--</div>-->
    <!--</form>-->
    <!--<hr>-->
    <!--<br>-->
<!--</div>-->
<!-- Exterior of Buildings - Others 2 -->
<!--<div class="container">-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm form-group">-->
            <!--<input id="EoB-o2" placeholder="Others" class="form-control;input1">-->
        <!--</div>-->
        <!--<div class="col-sm form-group">-->
            <!--<select id="EoB-SLC2" name="beetleFound1">-->
                <!--<option value="Yes">Yes</option>-->
                <!--<option value="No">No</option>-->
                <!--<option value="Not Applicable">Not Applicable</option>-->
            <!--</select>-->
        <!--</div>-->
        <!--<br>-->
    <!--</div>-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm">-->
            <!--<label>Type:</label><br>-->
            <!--<textarea id="EoB-Type2" class="form-control"></textarea>-->
        <!--</div>-->
    <!--</div>-->
    <!--<form>-->
        <!--<div class="row form-group">-->
            <!--<div class="col-sm">-->
                <!--<label>Location & Extent: </label>-->
                <!--<textarea id="EoB-LAE2" class="form-control"></textarea>-->
            <!--</div>-->
            <!--<div class="col-sm">-->
                <!--<label>Damage appears to be:</label>-->
                <!--<textarea id="EoB-DATB2" class="form-control"></textarea>-->
            <!--</div>-->
        <!--</div>-->
    <!--</form>-->
    <!--<hr>-->
    <!--<br>-->
<!--</div>-->
<!-- Exterior of Buildings - Environmental Conditions -->
<div class="container">
    <h2 class="sectionSubHead" style="font-size: 20px">Environmental conditions conducive to timber pest attack:</h2><br>
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Excessive Dampness?</label>
        </div>
        <div class="col-sm-8">
            <select id="EoB-ED-1" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-ED-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-ED-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Timber in contact with ground?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-TICWG-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-TICWG-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-TICWG-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Unexposed slab edge?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-USE-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-USE-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-USE-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Blocked sub-floor vents?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-BSFV-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-BSFV-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-BSFV-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Blocked weepholes?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-BW-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-BW-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-BW-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">High garden beds / paving / ground level?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-HGBPGL-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-HGBPGL-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-HGBPGL-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Close proximity of potential nesting sites?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-CPOPNS-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-CPOPNS-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-CPOPNS-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Poor location of overflow HWS, Water tank, A/C?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-PLOOHWAC-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-PLOOHWAC-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-PLOOHWAC-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <label class="sectionSubHead" style="color: black">Water Leaks(e.g. gutters)?</label>
        </div>
        <div class="col-sm form-group">
            <select id="EoB-WL-1" title="dampness" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-WL-2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-WL-3" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <input id="EoB-Table2-O1" type="text" placeholder="Others" class="form-control" style="width: 50%">
        </div>
        <div class="col-sm form-group">
            <input id="EoB-Table2-SLC1" type="text" title="other description" class="form-control" style="width: 100%">
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-Table2-LAE1" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-Table2-RA1" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<div class="container" style="margin-top: 10px">
    <div class="row form-group">
        <div class="col-sm-4" >
            <input id="EoB-Table2-O2" type="text" placeholder="Others" class="form-control" style="width: 50%">
        </div>
        <div class="col-sm form-group">
            <input id="EoB-Table2-SLC2" type="text" placeholder="" class="form-control" style="width: 100%">

        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-Table2-LAE2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="EoB-Table2-RA2" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr>
</div>
<!--Exterior of Buildings - Display and Add Images -->
<div class="container">
    <div class="container" style="margin-top:20px">
    <input type="button" value="Upload Images (Max 3 images)" class="uploadImageButton"
                       onclick="TimberExteriorUploadImages()">
    <input type="file" id="TimberExteriorUploadImages" class="inputImage" accept="image/x-png,image/jpeg"
                       multiple>
    </div>
    <table id="TimberExteriorImagesTable" style="margin-top: 20px;width:100%;display:block">
        <tr>
            <th>
                <div class="row form-group" id="TimberExteriorPhotographs">
                </div>
            </th>
        </tr>
    </table>
    <br>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!--Interior of Building -->
<div class="container">
    <h2 class="content-head text-center firstH1">Interior of Buildings</h2><br>
</div>
<!-- Interior of Buildings- Access Limitation -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Notes:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-T1-AN" class="form-control" title="access notes"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Limitation:</label><br>
        </div>
        <div class="col-sm-8">
            <select id="IoB-T1-AL" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Reasonably Accessible">Reasonably Accessible</option>
                <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety
                    Hazard
                </option>
                <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard
                </option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Access Limitation Risk Factor</label><br>
        </div>
        <div class="col-sm-8">
            <select id="IoB-T1-ALRF" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
                <option value="Low">Low</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Interior of Buildings- Subterranean Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of subterranean termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-T1-VEoSTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-T1-VEoSTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-T1-VEoSTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-T1-VEoSTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Outside scope">Outside scope</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-T1-VEoSTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Interior of Buildings - Dampwood or other Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of dampwood or other termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-VEoDoOTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-VEoDoOTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-VEoDoOTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-VEoDoOTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Outside scope">Outside scope</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-VEoDoOTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Interior of Buildings - wood decay fungus -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of wood decay fungus found:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-VEoWDFF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-VEoWDFF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-VEoWDFF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Interior of Buildings - borer beetle 1 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead" style="margin-top: 5px">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="IoB-VEoBBF-SLC1" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="IoB-VEoBBF-TYPE1" title="site and garden borer 1" style="width:100%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Borer Anobiid">Anobiid Borer</option>
                <option value="Borer Lyctus">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-VEoBBF-LAE1" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-VEoBBF-DATB1" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Interior of Buildings - borer beetle 2 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead" style="margin-top: 5px">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="IoB-VEoBBF-SLC2" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="IoB-VEoBBF-TYPE2" title="site and garden borer 1" style="width:100%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Anobiid Borer">Anobiid Borer</option>
                <option value="Lyctus Borer">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-VEoBBF-LAE2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-VEoBBF-DATB2" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Interior of Buildings - Others 1 -->
<!--<div class="container">-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm form-group">-->
            <!--<input id="IoB-Table1-O1" placeholder="Others" class="form-control;input1">-->
        <!--</div>-->
        <!--<div class="col-sm form-group">-->
            <!--<select id="IoB-Table1-SLC1" name="beetleFound1">-->
                <!--<option value="Yes">Yes</option>-->
                <!--<option value="No">No</option>-->
                <!--<option value="Not Applicable">Not Applicable</option>-->
            <!--</select>-->
        <!--</div>-->
        <!--<br>-->
    <!--</div>-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm">-->
            <!--<label class="sectionSubHead" style="color: black">Type:</label><br>-->
            <!--<textarea id="IoB-Table1-TYPE1" class="form-control"></textarea>-->
        <!--</div>-->
    <!--</div>-->
    <!--<form>-->
        <!--<div class="row form-group">-->
            <!--<div class="col-sm">-->
                <!--<label>Location & Extent: </label>-->
                <!--<textarea id="IoB-Table1-LAE1" class="form-control"></textarea>-->
            <!--</div>-->
            <!--<div class="col-sm">-->
                <!--<label>Damage appears to be</label>-->
                <!--<textarea id="IoB-Table1-DATB1" class="form-control"></textarea>-->
            <!--</div>-->
        <!--</div>-->
    <!--</form>-->
    <!--<hr>-->
    <!--<br>-->
<!--</div>-->
<!-- Interior of Buildings - Environmental Conditions -->
<div class="container">
    <h2 class="sectionSubHead" style="font-size: 20px">Environmental conditions conducive to timber pest attack:</h2><br>
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Excessive Dampness?</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-Table2-ED-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-Table2-ED-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-Table2-ED-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Visible water leaks?</label>
        </div>
        <div class="col-sm-8">
            <select id="IoB-Table2-VWL-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-Table2-VWL-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-Table2-VWL-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <input id="IoB-O1-TITLE" type="text" placeholder="Others" class="form-control" style="width:50%">
        </div>
        <div class="col-sm-8">
            <input id="IoB-O1-SLC" type="text" placeholder="" class="form-control;input1" style="width:100%">
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-O1-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="IoB-O1-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<!--Interior of Buildings - Display and Add Images -->
<div class="container">
    <div class="container" style="margin-top:20px">
        <input type="button" value="Upload Images (Max 3 images)" class="uploadImageButton" onclick="TimberInteriorUploadImages()">
        <input type="file" id="TimberInteriorUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    </div>
    <table id="TimberInteriorImagesTable" style="margin-top: 20px;width:100%;display:block">
        <tr>
            <th>
                <div class="row form-group" id="TimberInteriorPhotographs">
                </div>
            </th>
        </tr>
    </table>
    <br>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!--Roof Space-->
<div class="container">
    <h2 class="content-head text-center firstH1">Roof Space</h2><br>
</div>
<!-- Roof Space- Access Limitation -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Notes:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-AN" class="form-control" title="access notes"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Limitation:</label><br>
        </div>
        <div class="col-sm-8">
            <select id="RS-AL" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Reasonably Accessible">Reasonably Accessible</option>
                <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety
                    Hazard
                </option>
                <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard
                </option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Access Limitation Risk Factor</label><br>
        </div>
        <div class="col-sm-8">
            <select id="RS-ALRF" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
                <option value="Low">Low</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Roof Space- Subterranean Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of subterranean termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoSTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VEoSTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoSTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoSTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VEoSTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Roof Space - Dampwood or other Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of dampwood or other termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoDoOTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VEoDoOTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoDoOTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoDoOTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VEoDoOTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>
<!-- Roof Space - wood decay fungus -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of wood decay fungus found:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoWDFF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VEoWDFF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoWDFF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Roof Space - borer beetle 1 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="RS-VEoBBF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="RS-VEoBBF-TYPE" title="site and garden borer 1" style="width:85%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Borer Anobiid">Anobiid Borer</option>
                <option value="Borer Lyctus">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VEoBBF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoBBF-DATB" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Roof Space - borer beetle 2 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="RS-VEoBBF-SLC2" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="RS-VEoBBF-TYPE2" title="site and garden borer 1" style="width:85%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Borer Anobiid">Anobiid Borer</option>
                <option value="Borer Lyctus">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VEoBBF-LAE2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VEoBBF-DATB2" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Roof Space - Others 1 -->
<!--<div class="container">-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm form-group">-->
            <!--<input id="RS-TABLE1-O1-TEXT" placeholder="Others" class="form-control;input1">-->
        <!--</div>-->
        <!--<div class="col-sm form-group">-->
            <!--<select id="RS-TABLE1-O1-SLC" name="beetleFound1">-->
                <!--<option value="Yes">Yes</option>-->
                <!--<option value="No">No</option>-->
                <!--<option value="Not Applicable">Not Applicable</option>-->
            <!--</select>-->
        <!--</div>-->
        <!--<br>-->
    <!--</div>-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm">-->
            <!--<label>Type:</label><br>-->
            <!--<textarea id="RS-TABLE1-O1-TYPE" class="form-control"></textarea>-->
        <!--</div>-->
    <!--</div>-->
    <!--<form>-->
        <!--<div class="row form-group">-->
            <!--<div class="col-sm">-->
                <!--<label>Location & Extent: </label>-->
                <!--<textarea id="RS-TABLE1-O1-LAE" class="form-control"></textarea>-->
            <!--</div>-->
            <!--<div class="col-sm">-->
                <!--<label>Damage appears to be</label>-->
                <!--<textarea id="RS-TABLE1-O1-DATB" class="form-control"></textarea>-->
            <!--</div>-->
        <!--</div>-->
    <!--</form>-->
    <!--<hr>-->
    <!--<br>-->
<!--</div>-->
<!-- Roof Space - Environmental Conditions -->
<div class="container">
    <h2 class="sectionSubHead" style="font-size: 20px;">Environmental conditions conducive to timber pest attack:</h2><br>
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Excessive Dampness?</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-ED-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-ED-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-ED-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Visible water leaks?</label>
        </div>
        <div class="col-sm-8">
            <select id="RS-VWL-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="NotApplicable">Not Applicable</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VWL-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-VWL-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <input id="RS-TABLE2-O1-TEST" type="text" placeholder="Others" class="form-control;input1" style="width:50%">
        </div>
        <div class="col-sm-8">
            <input id="RS-TABLE2-O1-SLC" type="text" placeholder="Others" class="form-control;input1" style="width:50%">

        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-TABLE2-O1-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="RS-TABLE2-O1-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<!--Roof Space - Display and Add Images -->
<div class="container">
    <div class="container" style="margin-top:20px">
        <input type="button" value="Upload Image(max 3 Images)" class="uploadImageButton" onclick="TimberRoofUploadImages()">
        <input type="file" id="TimberRoofUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    </div>
    <table id="TimberRoofImagesTable" style="margin-top: 20px;width:100%;display:block">
        <tr>
            <th>
                <div class="row form-group" id="TimberRoofPhotographs">
                </div>
            </th>
        </tr>
    </table>
    <br>
    <hr style="height:1px;color:#333;background-color:#333;">
</div>

<!--Sub Floor Space-->
<div class="container">
    <h2 class="content-head text-center firstH1">Sub-Floor Space</h2><br>
</div>
<!-- Sub Floor Space- Access Limitation -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Notes:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-AN" class="form-control" title="access notes"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Access Limitation:</label><br>
        </div>
        <div class="col-sm-8">
            <select id="SFS-AL" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Reasonably Accessible">Reasonably Accessible</option>
                <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety
                    Hazard
                </option>
                <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard
                </option>
                <option value="No sub-floor void">No Sub-Floor Void</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Access Limitation Risk Factor</label><br>
        </div>
        <div class="col-sm-8">
            <select id="SFS-ALRF" style="width:100%;height: 30px" title="access limitation select">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
                <option value="Low">Low</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Sub Floor Space- Subterranean Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of subterranean termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoSTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VEoSTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoSTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoSTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VEoSTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>

<!-- Sub Floor Space - Dampwood or other Termites -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of dampwood or other termites found:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoDoOTF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VEoDoOTF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoDoOTF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Nest/Sub Nest Located:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoDoOTF-NSNL" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
            </select>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Location:</label><br>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VEoDoOTF-L" class="form-control" title="location"></textarea>
        </div>
    </div>
    <hr>
</div>

<!-- Sub Floor Space - wood decay fungus -->
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4">
            <label class="sectionSubHead">Visible evidence of wood decay fungus found:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoWDFF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: -15px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VEoWDFF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoWDFF-DATB" name="subterraneanTermitesFound" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Sub Floor Space - borer beetle 1 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="SFS-VEoBBF-SLC" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="SFS-VEoBBF-TYPE" title="site and garden borer 1" style="width:85%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Borer Anobiid">Anobiid Borer</option>
                <option value="Borer Lyctus">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VEoBBF-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoBBF-DATB" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Sub Floor Space - borer beetle 2 -->
<div class="container">
    <div class="row">
        <div class="col-4">
            <label class="sectionSubHead">Visible evidence of Borer beetle found:</label>
        </div>
        <div class="col">
            <select id="SFS-VEoBBF-SLC2" name="subterraneanTermitesFound" title="visible evidence" style="width: 100%;height: 40px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Activity">No Visible Activity</option>
                <option value="Visible Evidence">Visible Evidence</option>
                <option value="Visible Active Evidence">Visible Active Evidence</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <div class="col-1">
            <label class="sectionSubHead" style="text-align: right;margin-top: 8px">Type:</label>
        </div>
        <div class="col">
            <select id="SFS-VEoBBF-TYPE2" title="site and garden borer 1" style="width:85%;height: 40px">
                <option value="" disabled selected>Choose a borer</option>
                <option value="Borer Anobiid">Anobiid Borer</option>
                <option value="Borer Lyctus">Lyctus Borer</option>
                <option value="Other">Other</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unidentified">Unidentified</option>
            </select>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VEoBBF-LAE2" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group">
        <div class="col-sm-4">
            <label>Damage appears to be:</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VEoBBF-DATB2" title="damage" style="width: 100%;height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="No Visible Damage Present">No Visible Damage Present</option>
                <option value="Visible Moderate Damage Present">Visible Moderate Damage Present</option>
                <option value="Visible Extensive Damage Present">Visible Extensive Damage Present</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <hr>
</div>
<!-- Sub Floor Space - Others 1 -->
<!--<div class="container">-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm form-group">-->
            <!--<input id="SFS-TABLE1-O1-TEXT" placeholder="Others" class="form-control;input1">-->
        <!--</div>-->
        <!--<div class="col-sm form-group">-->
            <!--<select id="SFS-TABLE1-O1-SLC1" name="beetleFound1">-->
                <!--<option value="Yes">Yes</option>-->
                <!--<option value="No">No</option>-->
                <!--<option value="Not Applicable">Not Applicable</option>-->
            <!--</select>-->
        <!--</div>-->
        <!--<br>-->
    <!--</div>-->
    <!--<div class="row form-group">-->
        <!--<div class="col-sm">-->
            <!--<label>Type:</label><br>-->
            <!--<textarea id="SFS-TABLE1-O1-TYPE1" class="form-control"></textarea>-->
        <!--</div>-->
    <!--</div>-->
    <!--<form>-->
        <!--<div class="row form-group">-->
            <!--<div class="col-sm">-->
                <!--<label>Location & Extent: </label>-->
                <!--<textarea id="SFS-TABLE1-O1-LAE1" class="form-control"></textarea>-->
            <!--</div>-->
            <!--<div class="col-sm">-->
                <!--<label>Damage appears to be</label>-->
                <!--<textarea id="SFS-TABLE1-O1-DATB1" class="form-control"></textarea>-->
            <!--</div>-->
        <!--</div>-->
    <!--</form>-->
    <!--<hr>-->
    <!--<br>-->
<!--</div>-->
<!-- Sub Floor Space - Environmental Conditions -->
<div class="container">
    <h2 class="sectionSubHead" style="font-size: 20px">Environmental conditions conducive to timber pest attack:</h2><br>
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Excessive Dampness?</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-ED-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-ED-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-ED-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Visible Water Leaks?</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-VWL-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VWL-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-VWL-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Timber in contact with ground?</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-TICWG-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-TICWG-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-TICWG-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <label class="sectionSubHead" style="color: black">Blocked sub-floor vents?</label>
        </div>
        <div class="col-sm-8">
            <select id="SFS-BSFV-SLC" name="dampness" title="environmental condition" style="height: 30px">
                <option value="" disabled selected>Choose an item.</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Applicable">Not Applicable</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-BSFV-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-BSFV-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<div class="container">
    <div class="row form-group">
        <div class="col-sm-4" style="margin-top: 3px">
            <input id="SFS-TABLE2-O1-TEXT" type="text" placeholder="Others" class="form-control" style="width: 50%">
        </div>
        <div class="col-sm-8">
            <input id="SFS-TABLE2-O1-SLC" type="text" placeholder="" class="form-control" style="width: 100%">
        </div>
        <br>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Location and Extents:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-TABLE2-O1-LAE" class="form-control" title="location and extents"></textarea>
        </div>
    </div>
    <div class="row form-group" style="margin-top: 10px">
        <div class="col-sm-4">
            <label>Recommended action:</label>
        </div>
        <div class="col-sm-8">
            <textarea id="SFS-TABLE2-O1-RA" class="form-control" title="recommendation"></textarea>
        </div>
    </div>
    <hr style="color: lightgrey">
</div>
<!--Sub Floor Space - Display and Add Images -->
<div class="container">
    <div class="container" style="margin-top:20px">
        <input type="button" value="Upload Image(max 3 Images)" class="uploadImageButton" onclick="TimberSubfloorUploadImages()">
        <input type="file" id="TimberSubfloorUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    </div>
    <table id="TimberSubfloorImagesTable" style="margin-top: 20px;width:100%;display:block">
        <tr>
            <th>
                <div class="row form-group" id="TimberSubfloorPhotographs">
                </div>
            </th>
        </tr>
    </table>
    <br>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!--Previous Pest Treatment -->
<div class="container">
    <h2 class="content-head text-center firstH1">Previous Pest Treatment</h2><br>
</div>
<div class="container">
    <table>
        <tr>
            <th style="width:70%">Visible evidence of previous treatment or other termite management system installation</th>
            <th>
                <select id="previousManagement" name="previousManagment" title="previous pest management" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <textarea id="previousManagementText" class="form-control" title="description"></textarea>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                Please Note: Evidence of previous termite treatment or other termit management system does not guarantee
                its current effectiveness. Ground and or environmental conditions may have been disturbed during
                maintenance or in preparing the property for sale. Where a reticulated system has been installed, a
                pressure check and top-up may required. We recommend contacting the provider for advice or
                re-inspection.
                If no written evidenc of a termite management system to AS 3600-2000 is provided, a treatment should
                always be considered to prevent attack.
            </th>

        </tr>
    </table>
</div>

<!--Recommendations-->
<div class="container">
    <h2 class="content-head text-center firstH1">Recommendations</h2><br>
</div>
<div class="container">
    <table id="TimberRecommendationImagesTable">
        <tr>
            <th colspan="2">
                <label class="sectionSubHead" style="color: black">Overall Risk</label>
            </th>
        </tr>
        <tr>
            <th style="width:70%;font-weight: normal">
                <label>Based on the evidence of this inspection, the overall risk of infestation by timber pest
                    is:</label>
            </th>
            <th>
                <select id="recommendationText1" name="siteGardenRestriction" title="restriction select" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="High">Extreme</option>
                    <option value="High">Low</option>
                    <option value="Not Applicable">Not Applicable</option>
                </select>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <label class="sectionSubHead" style="color: black">Future inspections</label>
            </th>
        </tr>
        <tr>
            <th style="font-weight: normal">
                <label>It is highly recommended that a further timber pest inspection be conducted within:</label>
            </th>
            <th>
                <select id="recommendationText2" name="siteGardenRestriction" title="restriction select" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="1 month">1 month</option>
                    <option value="3 month">3 months</option>
                    <option value="6 month">6 months</option>
                    <option value="12 months">12 months</option>
                </select>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <p class="sectionSubHead" style="color: black">
                    Please Note: The recommendation for future inspections should be viewed as part of a household
                    maintenance program and is independent of any inspections that may form part of a recommended
                    treatment. If a treatment is recommended the treatment should be undertaken <u>without</u> delay.
                    Regular inpsections will not prevent future attack by subterranean termites or other timber pests
                    but they will assist with the identifiaction of activity. Detection at the earliest opportunity will
                    allow treatment to be commenced and damage minimised.
                </p>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <label class="sectionSubHead" style="color: black">Timber pest management</label>
            </th>
        </tr>
        <tr>
            <th style="font-weight: normal">
                <label>Based on the evidence of this inspection, timber pest treatment is:</label>
            </th>
            <th>
                <select id="recommendationText3" name="siteGardenRestriction" title="restriction select" style="width: 100%">
                    <option value="" disabled selected>Choose an item.</option>
                    <option value="Required">Required</option>
                    <option value="Not Required">Not Required</option>
                    <option value="May be required*">May be required*</option>
                </select>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <label class="sectionSubHead" style="color: black">Integrated pest management plan</label>
            </th>
        </tr>
        <tr>
            <th style="font-weight: normal" colspan="2">
                <label>Based on the evidence of this inspection, we recommend the following ongoing timber pest
                    management plan:</label>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <textarea id="recommendationText4" title="plan"></textarea>
            </th>

        </tr>
        <tr>
            <th colspan="2">
                <label class="sectionSubHead" style="color: black">Supplementary Notes:</label>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <textarea id="recommendationText5" title="notes"></textarea>
            </th>
        </tr>
        <!-- Images -->
        <tr>
            <th colspan="2">
                <laebl>Images (max 3 images)</label>
                <input type="button" id="get_image" value="Upload Image" class="uploadImageButton"
                       onclick="TimberRecommendationUploadImages()">
                <input type="file" id="TimberRecommendationUploadImages" class="inputImage"
                       accept="image/x-png,image/jpeg" multiple>
            </th>
        </tr>
        <tr>
            <th colspan="2">
                <div class="row form-group" id="TimberRecommendationPhotographs">
                </div>
            </th>
        </tr>
        <!-- <tr>
            <th colspan="2">

                <div class="row form-group">
                    &nbsp;
                    <form>
                        <div class="col-sm">
                            <img id="TimberRecommendationImage0" src="#" alt="Image1"
                                 style="width:0;height:0;display: none"/>
                        </div>
                        <div class="col-sm">
                            <input type="text" name="image1" placeholder="name" id="TimberRecommendationImageText0"
                                   style="width:265px;height:10px; display: none">
                        </div>
                        <div class="col-sm">
                            <input type="button" value="Remove" id="TimberRecommendationRemoveButton0"
                                   onclick="RemoveTimberRecommendationImage0()" style="display: none ; width:265px">
                            <br>
                        </div>
                        <div class="col-sm">
                            <input type="button" value="Add" id="AddTimberRecommendationImageButton0"
                                   onclick="AddTimberRecommendationImage0()" style="width:265px;display: none ">
                            <input type="file" id="TimberRecommendationUploadImage0" class="inputImage"
                                   accept="image/x-png,image/jpeg" style="display: none">
                            <br>
                        </div>

                    </form>
                    <form>
                        <div class="col-sm">
                            <img id="TimberRecommendationImage1" src="#" alt="Image2"
                                 style="width:0;height:0;display: none"/>
                        </div>
                        <div class="col-sm">
                            <input type="text" name="image1" placeholder="name" id="TimberRecommendationImageText1"
                                   style="width:265px;height:10px ;display: none">
                        </div>
                        <div class="col-sm">
                            <input type="button" value="Remove" id="TimberRecommendationRemoveButton1"
                                   onclick="RemoveTimberRecommendationImage1()" style="width:265px;display:none ">
                            <br>
                        </div>
                        <div class="col-sm">
                            <input type="button" value="Add" id="AddTimberRecommendationImageButton1"
                                   onclick="AddTimberRecommendationImage1()" style="width:265px;display: none ">
                            <input type="file" id="TimberRecommendationUploadImage1" class="inputImage"
                                   accept="image/x-png,image/jpeg" style="display: none">
                            <br>
                        </div>

                    </form>
                    <form>
                        <div class="col-sm">
                            <img id="TimberRecommendationImage2" src="#" alt="Image3"
                                 style="width:0;height:0;display: none"/>
                        </div>
                        <div class="col-sm">
                            <input type="text" name="image1" placeholder="name" id="TimberRecommendationImageText2"
                                   style="width:265px;height:10px;display: none">
                        </div>
                        <div class="col-sm">
                            <input type="button" value="Remove" id="TimberRecommendationRemoveButton2"
                                   onclick="RemoveTimberRecommendationImage2()" style="display: none;width:265px">
                            <br>
                        </div>
                        <div class="col-sm">
                            <input type="button" value="Add" id="AddTimberRecommendationImageButton2"
                                   onclick="AddTimberRecommendationImage2()" style="width:265px;display: none ">
                            <input type="file" id="TimberRecommendationUploadImage2" class="inputImage"
                                   accept="image/x-png,image/jpeg" style="display: none">
                            <br>
                        </div>
                    </form>
                </div>

            </th>
        </tr> -->
    </table>
</div>

<!--Attachments-->
<div class="container">
    <h2 class="content-head text-center firstH1">Attachments</h2><br>
</div>
<div class="container">
    <hr>
    <p>
        The following selected attachments are an important part of this Report. These can be downloaded from the
        Archicentre Australia Supplementary Documents page -
        <!--<a href="http://www.archicentreaustralia.com.au/report_downloads/">click here</a>-->
        <a href="http://www.archicentreaustralia.com.au/report_downloads/">http://www.archicentreaustralia.com.au/report_downloads/</a>
         - or by referring to the Report cover email for downloading instructions. If you have difficulty downloading the
        following ticked attachments, please contact Archicentre Australia on 1300 13 45 13 immediately.
    </p>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <label>Property Maintenance Guide</label>
            <select id="6000" style="width:100%" title="attachment">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm-4">
            <label>Health & Safety Warning</label>
            <select id="6001" style="width:100%" title="attachment">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm-4">
            <label>Termites & Borers</label>
            <select id="6002" style="width:100%" title="attachment">
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
            <label>Cost Guides</label>
            <select id="6005" style="width:100%" title="attachment">
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

<!--Action Buttons-->
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


<!--Scripts -->
<!--<script src="js/images.js"></script>-->
<!--<script src="js/loadImageJS/load-image.all.min.js"></script>-->

<!--&lt;!&ndash;Text File&ndash;&gt;-->
<!--<script src="TimberJS/text.js"></script>-->
<!--&lt;!&ndash;PDF Generator&ndash;&gt;-->
<!--<script src="TimberJS/PDFGenerator.js"></script>-->
<!--&lt;!&ndash;General Functions&ndash;&gt;-->
<!--<script src="TimberJS/generalFunctions.js"></script>-->
<!--<script src="TimberJS/htmlGeneralFunction.js"></script>-->
<!--&lt;!&ndash;Get Table's Data&ndash;&gt;-->
<!--<script src="TimberJS/getTableData.js"></script>-->



<script src="js/images.js"></script>
<script src="js/loadImageJS/load-image.all.min.js"></script>

<!--Text File-->
<script src="TimberJS/text.js?<?php echo time(); ?>"></script>
<!--PDF Generator-->
<script src="TimberJS/PDFGenerator.js?<?php echo time(); ?>"></script>
<!--General Functions-->
<script src="TimberJS/generalFunctions.js?<?php echo time(); ?>"></script>
<script src="TimberJS/htmlGeneralFunction.js?<?php echo time(); ?>"></script>
<!--Get Table's Data-->
<script src="TimberJS/getTableData.js?<?php echo time(); ?>"></script>
</body>
</html>
