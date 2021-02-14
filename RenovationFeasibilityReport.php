<?php
  require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Renovation Feasibility - <?php echo $bookingcode; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <!-- Customized CSS -->
    <link rel="stylesheet" href="css/general.css">
    <!--  Import JQuery  -->
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <!-- <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
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
<!--Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">ArchiCentre Task</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <!--<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"-->
    <!--aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
    <!--<span class="navbar-toggler-icon"></span>-->
    <!--</button>-->

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
    <h2 class="content-head text-center firstH1">Renovation Feasibility Report  - Feasibility Study</h2><br>
    <p>
        An Archicentre Australia Renovation Feasibility Report (‘Report’) is a feasibility study which will explore
        your property’s potential and provide information to help you to decide whether to proceed with your
        project and whether to engage your Archicentre Australia Architect for ongoing services.<br>
        The presented Report is a response to your project requirements and objectives, and considers your existing
        home and site, your budget, sustainability and possible regulatory issues.<br>
        This Report is not intended to provide the final design solution for your renovation, but to present you with
        a visual representation of an initial feasibility study. This is intended to help you to re-assess, confirm or
        clarify your needs.<br>
        This Report has been prepared by your Archicentre Australia Architect on behalf of Archicentre Australia – a division of ArchiAdvisory Pty Ltd.

    </p>
</div>


<!--Details-->
<div id="clientDetails" class="container">
    <h3 class="sectionSubHead">CLIENT DETAILS</h3>
    <form>
        <div class="row">
            <div class="col-sm-6">
                <label>Name</label><br>
                <input id="customer_name" class="form-control" type="text" title="Name" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
            </div>
            <div class="col-sm-6">
                <label>Booking No.</label><br>
                <input id="customer_booking" class="form-control" type="text" title="BookingNo" value="<?php echo $bookingcode; ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Phone</label><br>
                <input id="customer_phone" class="form-control" type="text" title="Phone" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
            </div>
             <div class="col-sm-6" style="margin-top:6px">
                <label>Mobile</label>
                <br>
                <input id="customer_mobile" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Report Date</label><br>
                <input id="customer_report" class="form-control" type="text" title="BookingNo">
            </div>
        </div>
    </form>
    <hr>
</div>
<div id="assessmentDetails" class="container">
    <h3 class="sectionSubHead">RENOVATION DESIGN DETAILS</h3>
    <form>
        <div class="row">
            <div class="col-sm">
                <label>Address</label><br>
                <input id="address" class="form-control" type="text" title="address" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
            </div>
        </div>
        <div class="row" style="margin-top: 3px">
            <div class="col-sm">
                <label>Suburb</label><br>
                <input id="suburb" class="form-control" type="text" title="suburb" value="<?php echo doNiceArrayElemAsString('city'); ?>">
            </div>
            <div class="col-sm">
                <label>State</label><br>
                <input id="state" class="form-control" type="text" title="state" value="<?php echo doNiceArrayElemAsString('state', false); ?>">
                <!--<select id="state" style="width:100%;height: 50px;margin-top: 6px" title="state" >-->
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
                <input id="postcode" class="form-control" type="text" title="postcode" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
            </div>
        </div>
    </form>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Date of Assessment</label><br>
                <textarea id="dateOfAssessment" class="form-control" title="dateOfAssessment"></textarea>
            </div>
            <div class="col-sm">
                <label>Time of Assessment</label><br>
                <textarea id="timeOfAssessment" class="form-control" title="time of assessment"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Existing Use of Property</label><br>
                <textarea id="proposedUsed" class="form-control" title="existing use"></textarea>
            </div>
            <div class="col-sm">
                <label>Weather Conditions</label><br>
                <textarea id="weatherConditions" class="form-control" title="weather conditions"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Verbal Summary to</label><br>
                <textarea id="verbalSummary" class="form-control" title="verbal summary"></textarea>
            </div>
            <div class="col-sm">
                <label>Date</label><br>
                <textarea id="date" class="form-control" title="date"></textarea>
            </div>
        </div>
    </form>
    <br>
</div>
<div id="architectDetails" class="container">
    <hr>
    <h3 class="sectionSubHead">ARCHICENTRE AUSTRALIA ARCHITECT</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Architect Name</label><br>
                <input id="architect" class="form-control" type="text" title="name" type="text" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
            </div>
            <div class="col-sm">
                <label>Registration No.</label><br>
                <input id="registrationNo" class="form-control" type="text" title="registrationNo" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Email</label><br>
                <input id="email" class="form-control" type="text" title="email" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
            </div>
            <div class="col-sm">
                <label>Phone</label><br>
                <input id="architectPhone" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Architect Address</label><br>
                <input id="architectAddress" class="form-control" type="text" title="address" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>">
            </div>
        </div>
    </form>
    <hr>
    <br>
</div>

<!--Cover Image-->
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <input type="button" value="Upload Cover Image" class="uploadCoverImageButton"
                   onclick="RenovationFeasibilityCover()">
            <input type="file" id="RenovationFeasibilityUploadCoverImage" class="inputImage" accept="image/x-png,image/jpeg">
        </div>

        <div class="col-sm-6">
            <div class="col-sm">
                <img id="RenovationFeasibilityCoverImage" src="#" alt="Image1"
                     style="width:400px;display: none"/>
            </div>
            <div class="col-sm">
                <input class="btn btn-danger" type="button" value="Remove" id="RenovationFeasibilityCoverImageRemoveButton"
                       onclick="RemoveRenovationFeasibilityCover()"
                       style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                <br>
            </div>
            <div class="col-sm">
                <input type="text" id="RenovationFeasibilityCoverImageAngle" style="display: none; margin-top: 5px;margin-bottom: 5px;width:400px">
                <br>
            </div>
            <div class="col-sm">
                <input class="btn btn-info" type="button" value="Rotate" id="RenovationFeasibilityCoverImageRotateButton" onclick="RotateRenovationFeasibilityCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px;width:400px">
                <br>
            </div>
        </div>
    </div>
    <hr>
    <br>
</div>

<!--Scope of the Report-->
<div class="container">
    <h3 class="sectionSubHead">The Scope of this Report</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>The Report includes the following</label><br>
                <textarea title="included" class="form-control" style="height: 250px" id="renovationIncludedScope">
Description of your site;
List of your project requirements and budget;
Rough sketch floor plan of your existing home, if you do not already have one;
Sketch floor plan of your Design;
Sketch view of the Design as appropriate;
Outline of some of the design issues that were considered by the architect in creating the Design;
Outline of some of the sustainability features of the Design;
Preliminary advice of relevant Council and statutory authority approvals required;
Broad opinion of cost for the Design;
Outline of the design and building process;
Outline of the roles of other consultants;
                </textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>The following are specifically not included in this Report</label><br>
                <textarea title="notIncluded" class="form-control" style="height: 200px" id="renovationNotIncludedScope">
Detailed Planning or Development control requirements;
Detailed investigation of existing site and building conditions;
Suggested construction methods, building materials, finishes, services, equipment, or systems;
Suggested fittings, fitments and equipment;
Detailed joinery, interior or landscape design;
General or construction dimensions, including set-outs, offsets, levels and site features;
Opinion of probable costs with respect to the above (these will depend on the outcome of decisions made during the future design development and documentation process).
</textarea>
            </div>
        </div>
    </form>

    <hr>
    <br>
</div>

<!--Existing Site-->
<div class="container" id="existingSite">
    <h3 class="sectionSubHead" style="font-size: 18px">Existing Home and Site</h3>
    <label style="color: red;font-weight: bold">HOME & PROPERTY</label>
    <textarea title="property" class="form-control" id="renoFeasibilityHome"></textarea>
    <hr>
    <br>

</div>
<div class="container" id="projectRequirements">
    <h3 class="sectionSubHead" style="font-size: 18px">Project Requirements</h3>
    <label style="color: red;font-weight: bold">Overall Objective</label>
    <textarea title="objective" class="form-control" id="renoFeasibilityObjective"></textarea>
    <br>
    <label style="color: red;font-weight: bold">CLIENT REQUIREMENTS</label>
    <textarea title="requirements" class="form-control" id="client_requirements"></textarea>
    <br>
    <label style="color: red;font-weight: bold">IMPORTANT FEATURES FUNCTIONS OR ELEMENTS</label>
    <textarea title="requirements" class="form-control" id="features"></textarea>
    <br>
    <label style="color: red;font-weight: bold">BUDGET</label>
    <textarea title="requirements" class="form-control" id="budget"></textarea>
    <hr>
    <br>
</div>

<!--Design Considerations-->
<div class="container" >
    <h3 class="sectionSubHead" style="font-size: 18px">Design Considerations</h3>
    <p>The following notes outline the items that were considered in the preparation of this Report:</p>
    <textarea title="designConsiderations" class="form-control" id="designConsiderations"></textarea>
    <br>
</div>

<!--Design Sustainability Features-->
<div class="container">
    <h3 class="sectionSubHead" style="font-size: 18px">Design Sustainability Features</h3>
    <p>The following notes outline some of the proposed sustainability features of this Report:</p>
    <textarea title="designSustainabilityFeatures" class="form-control" id="designSustainabilityFeatures"></textarea>
    <br>
</div>

<!--Relevant Required Approvals  -->
<div class="container" id="relevantRequiredApprovals">
    <h3 class="sectionSubHead" style="font-size: 18px">Relevant Required Approvals</h3>
    <p>The construction of the proposal presented in this Report will require the following approvals:</p>
    <table>
        <tr>
            <th class="sectionSubHeaderSmaller" style="width: 20%;color: #f44336;" colspan="2">REQUIRED APPROVALS:</th>
        </tr>
        <tr>
            <td>Development/Planning</td>
            <td style="text-align: center">
                <select title="approvals0" id="approvals0">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>Building/Construction</td>
            <td style="text-align: center">
                <select title="approvals1" id="approvals1">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
        </tr>
        <tr>
            <td><input class="form-control" title="others" placeholder="other" id="other0" type="text"></td>
            <td style="text-align: center">
                <select title="approvals2" id="approvals2">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
        </tr>
    </table>
    <br>
</div>

<!--Broad Opinion of Cost-->
<div class="container" id="broadOpinionOfCost">
    <h3 class="sectionSubHead" style="font-size: 18px">Broad Opinion of Cost</h3>
    <p>This broad opinion of cost is based on the Design presented in this Report.  If the Design changes, the broad opinion of cost may be different.</p>
    <button onclick="moreRenovationCost()" type="button" class="btn btn-primary">More Broad Opinion of Cost</button>
    <p></p>
    <table id="renovationFeasibilityTable">
        <tr>
            <th rowspan="2" style="color: #f44336;text-align: center">ITEM</th>
            <th colspan="2" style="color: #f44336;text-align: center">BROAD OPINION OF COST</th>
        </tr>
        <tr>
            <td style="text-align: center">Low Range</td>
            <td style="text-align: center">High Range</td>

        </tr>

        <tr>
            <td><input class="form-control" value='Demolition/Preliminaries' title="Demolition" id="renovationName0" type="text"></td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLow0" type="text" onblur="calculateRenovationLow()" onkeyup="formatNumber(this.id)"></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHigh0" type="text" onblur="calculateRenovationHigh()" onkeyup="formatNumber(this.id)"></td>
        </tr>
        <tr>
            <td><input class="form-control" title="Remedial/Alterations" value="Remedial/Alterations" id="renovationName1" type="text"></td>
            <td><input class="form-control" title="lowRange" value="$" id="renovationLow1" type="text" onblur="calculateRenovationLow()" onkeyup="formatNumber(this.id)"></td>
            <td><input class="form-control" title="highRange" value="$" id="renovationHigh1" type="text" onblur="calculateRenovationHigh()" onkeyup="formatNumber(this.id)"></td>
        </tr>
        <tr>
            <td><input class="form-control" value='New Building Shell' title="New Building Shell" id="renovationName2" type="text"></td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLow2" type="text" onblur="calculateRenovationLow()" onkeyup="formatNumber(this.id)"></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHigh2" type="text" onblur="calculateRenovationHigh()" onkeyup="formatNumber(this.id)"></td>
        </tr>
        <tr>
            <td><input class="form-control" value='Fitout' title="Fitout" id="renovationName3" type="text"></td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLow3" type="text" onblur="calculateRenovationLow()" onkeyup="formatNumber(this.id)"></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHigh3" type="text" onblur="calculateRenovationHigh()" onkeyup="formatNumber(this.id)"></td>
        </tr>
        <tr>
            <td><input class="form-control" value='Services' title="Services" id="renovationName4" type="text"></td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLow4" type="text" onblur="calculateRenovationLow()" onkeyup="formatNumber(this.id)"></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHigh4" type="text" onblur="calculateRenovationHigh()" onkeyup="formatNumber(this.id)"></td>
        </tr>
        <tr>
            <td><input class="form-control" value='External Works' title="External Works" id="renovationName5" type="text"></td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLow5" type="text" onblur="calculateRenovationLow()" onkeyup="formatNumber(this.id)"></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHigh5" type="text" onblur="calculateRenovationHigh()" onkeyup="formatNumber(this.id)"></td>
        </tr>
        <tr>
            <td><input class="form-control" value='Contractor’s Margin' title="Contractor’s Margin" id="renovationName6" type="text"></td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLow6" type="text"  onblur="calculateRenovationLow()" onkeyup="formatNumber(this.id)"></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHigh6" type="text" onblur="calculateRenovationHigh()" onkeyup="formatNumber(this.id)"></td>
        </tr>
        <tr>
            <td>Subtotal:</td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLowSubTotal" type="text" readonly></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHighSubTotal" type="text" readonly></td>
        </tr>
        <tr>
            <td>GST(10%):</td>
            <td><input class="form-control" value="$" title="lowRange" id="renovationLowGST" type="text" readonly></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHighGST" type="text" readonly></td>
        </tr>
        <tr>
            <td>Total:</td>
            <td><input class="form-control" value = '$' title="lowRange" id="renovationLowTotal" type="text" readonly></td>
            <td><input class="form-control" value = '$' title="highRange" id="renovationHighTotal" type="text" readonly></td>
        </tr>
    </table>
    <br>
    <p>All or some of the following items may be necessary, but are not included in the broad opinion of cost:</p>
    <textarea class="form-control" rows="10" style="height: inherit" title="extraItemsCosts" id="renovationExtraItemCosts">
New or alterations to existing services connections;
Escalation costs if the project is delayed;
Items provided by the client, separate contracts, staging and miscellaneous items;
Changes to the existing systems, plant or equipment;
Landscaping, including paving, pool or spa, fencing, gates;
Furnishing, drapes or blinds;
Insurance and Local and Statutory Authority Fees;
Professional Fees, e.g. architect, structural engineer, building surveyor, soil testing, features survey, energy-rating, quantity surveyor and legal;
Unforeseeable costs for which it is wise to allow a 10-15% contingency sum</textarea>
</div>



<!-- Who else is involved? -->
<div class="container" id="renovationPeople">
    <br>
    <h3 class="sectionSubHead" style="font-size: 18px ; margin-top: 20px">Who else is involved?</h3>
    <button onclick="addPeople()" type="button" class="btn btn-primary">Add People</button>
    <table id="renovationPeopleTable" style="margin-top: 10px">
        <tr>
            <th width="25%" style="color: #f44336;text-align: center">Who They are</th>
            <th style="color: #f44336;text-align: center">What they do</th>
        </tr>
        <tr>
            <td><input class="form-control" placeholder="Land surveyor" id="renovationInvolvedPeople0" type="text" style="text-align: center"></td>
            <td>
                <p>Prepare different types of site information depending on your project. This may include:</p>
                <ul>
                    <li>exact site boundaries, compared with fence lines;</li>
                    <li>ground levels and levels of existing buildings above the ground;</li>
                    <li>site contours;</li>
                    <li>exact locations of neighbouring or adjacent buildings;</li>
                    <li>building heights, and exact locations of significant features or vegetation;</li>
                    <li>location of easements</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><input class="form-control" placeholder="Geotechnical(soil) engineer" id="renovationInvolvedPeople1" type="text" style="text-align: center"></td>
            <td>
                <p>Using specialist equipment, take one or more samples of soil from your site for analysis, provide
                    information about its structure and make recommendations about the design of the new
                    substructure of the building, such as the slab or footings. </p>

            </td>
        </tr>
        <tr>
            <td><input class="form-control" placeholder="Structural enginner" id="renovationInvolvedPeople2" type="text" style="text-align: center"></td>
            <td>
                <p>Design and document the structural components of your building such as the slab or footings,
                    wall bracing, roof beams etc, based on the architect’s design, geotechnical recommendations,
                    and construction documentation. They generally prepare their own set of drawings and
                    computations for the project which are usually mandatory for building permit/approval
                    application.</p>
            </td>
        </tr>
        <tr>
            <td><input class="form-control" placeholder="Building surveyor" id="renovationInvolvedPeople3" type="text" style="text-align: center"></td>
            <td>
                <p>Issue the building permit/approval and check the construction documentation for compliance
                    with the National Construction Code. Carry out on-site checks at major milestones during the
                    build, such as completion of the slab and framing. Note that the building surveyor does not
                    carry out quality inspections or check for compliance with the scope of the contract throughout
                    the build.</p>
            </td>
        </tr>
        <tr>
            <td><input class="form-control" placeholder="Planning advisor" id="renovationInvolvedPeople4" type="text" style="text-align: center"></td>
            <td>
                <p>Advise on planning issues and may represent you at Council meetings or hearings. Generally
                    required only for complex projects.</p>
            </td>
        </tr>
        <tr>
            <td><input class="form-control" placeholder="Energy rater" id="renovationInvolvedPeople5" type="text" style="text-align: center"></td>
            <td>
                <p>Analyse the project for compliance with required sustainability measures and provide advice
                    regarding ways to achieve compliance, if required.</p>
            </td>
        </tr>
        <tr>
            <td><input class="form-control" placeholder="Quantity surveyor" id="renovationInvolvedPeople6" type="text" style="text-align: center"></td>
            <td>
                <p>Prepare independent cost estimates for the build and provide advice regarding budgetary issues.</p>
            </td>
        </tr>
    </table>
</div>



<!--Drawings-->
<div class="container">
    <h2 class="content-head text-center firstH1">Drawings</h2><br>
</div>
<div class="container">
    <input type="button" id="get_drawing" value="Upload Drawings (Max 4 drawings)" class="uploadImageButton"
           onclick="RenovationFeasibilityUploadDrawings()" style="white-space: normal; width: 15%">
    <input type="file" id="RenovationFeasibilityUploadDrawings" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    <input type="file" id="RenovationFeasibilityUploadOneDrawing" class="inputImage" accept="image/x-png,image/jpeg">

</div>
<div class="container" style="margin-top: 20px">
    <table id="RenovationFeasibilityDrawingsTable" style="display:none">
        <tr>
            <th>
                <div class="row form-group" id="renovationFeasibilityDrawings">
                </div>
            </th>
        </tr>
    </table>
    <br>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!--Attachments-->
<div class="container">
    <h2 class="content-head text-center firstH1">Attachments</h2><br>
</div>
<div class="container">
    <hr>
    <p>
        The following selected Technical Information Sheets are an important part of this Report. These can be found in
        the Technical Information Booklet on the Archicentre Australia Supplementary Documents web page – click
        <a href="http://www.archicentreaustralia.com.au/report_downloads/">http://www.archicentreaustralia.com.au/report_downloads/</a>
        - along with some additional information we hope you will find of interest.
        If you have difficulty downloading the Booklet, please contact Archicentre Australia immediately on 1300 13 45 13.
    </p>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm">
            <label>Property Maintenance Guide</label>
            <select id="propertyMaintenanceGuide" style="width:100%" title="property maintenance guide">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label>Cracking in Masonry</label>
            <select id="crackingInMasonry" style="width:100%" title="cracking in masonry">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label>Treatment of Dampness </label>
            <select id="treatmentOfDampness" style="width:100%" title="treatment of dampness">
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
        <div class="col-sm">
            <label>Health & Safety Warning</label>
            <select id='healthSafetyWarning' style="width:100%" title="health and safety warning">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label>Roofing & Guttering </label>
            <select id="roofingGuttering" style="width:100%" title="Roofing & Guttering">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label>Home Safety Checklist</label>
            <select id="homeSafetyChecklist" style="width:100%" title="Home Safety Checklist">
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
        <div class="col-sm">
            <label>Termites & Borers</label>
            <select id='termitesBorers' style="width:100%" title="health and safety warning">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label>Re-stumping </label>
            <select id="reStumping" style="width:100%" title="Roofing & Guttering">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label>Cost Guide</label>
            <select  id='costGuide' style="width:100%" title="Home Safety Checklist">
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

<br>
<br>
<br>
<!--Scripts-->
<script src="js/images.js"></script>
<script src="js/loadImageJS/load-image.all.min.js"></script>
<!--Image File-->

<!--Text File-->
<script src="RenovationFeasibilityJS/text.js?<?php echo time(); ?>"></script>
<!--PDF Generator-->
<script src="RenovationFeasibilityJS/PDFGenerator.js?<?php echo time(); ?>"></script>
<!--General Functions-->
<script src="RenovationFeasibilityJS/generalFunctions.js?<?php echo time(); ?>"></script>
<script src="RenovationFeasibilityJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
<!--Get Table's Data-->
<script src="RenovationFeasibilityJS/getTableData.js?<?php echo time(); ?>"></script>



<!--Scripts-->
<!--<script src="../JS/images.js"></script>-->
<!--<script src="../JS/loadImageJS/load-image.all.min.js"></script>-->
<!--&lt;!&ndash;Image File&ndash;&gt;-->
<!--&lt;!&ndash;<script src="../RenovationFeasibilityJS/images.js"></script>&ndash;&gt;-->
<!--&lt;!&ndash;Text File&ndash;&gt;-->
<!--<script src="../RenovationFeasibilityJS/text.js"></script>-->
<!--&lt;!&ndash;PDF Generator&ndash;&gt;-->
<!--<script src="../RenovationFeasibilityJS/PDFGenerator.js"></script>-->
<!--&lt;!&ndash;General Functions&ndash;&gt;-->
<!--<script src="../RenovationFeasibilityJS/generalFunctions.js"></script>-->
<!--<script src="../RenovationFeasibilityJS/htmlGeneralFunctions.js"></script>-->
<!--&lt;!&ndash;Get Table's Data&ndash;&gt;-->
<!--<script src="../RenovationFeasibilityJS/getTableData.js"></script>-->
</body>
</html>