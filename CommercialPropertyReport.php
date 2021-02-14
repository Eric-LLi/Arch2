<?php
require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Commercial Property Assessment - <?php echo $bookingcode; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <?php require_once("meta.php"); ?>


    <!-- Customized CSS -->
    <link rel="stylesheet" href="css/general.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="css/viewPDF.css">
    <!--  Import JQuery  -->
<!--
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
-->

    <!--  Import pdfMake  -->
    <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
    <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>
    <!--Easy UI -->

<!--
    <script src="js/easyui/jquery.easyui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="js/easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="js/easyui/themes/icon.css">
-->

     <?php require_once("saveloaddata.php"); ?>
   
</head>
<!--onload="loadSelect()"-->

<body onload="onload()">
    <!--Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">ArchiCentre Task</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">157975
                <span class="navbar-toggler-icon"></span>
            </button>
    </nav>
    <!--Title-->
    <div class="container">
        <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
            <strong>Saving PDF. Please don't close this page. It will take a while</strong>
        </div>
        <h2 class="content-head text-center firstH1" style="font-size: 2rem">PROPERTY ASSESSMENT REPORT
            <label style="color: black;font-size: 20px">– Commercial Industrial &amp;Institutional</label>
        </h2>
        <br>
        <p>
            This pre-lease / pre-purchase Property Assessment Report is a visual assessment of the conditions of the reasonably accessible areas of the property at the time of the assessment, including the subject premises and associated areas where the property is a unit.
        </p>
    </div>

    <!-- Details -->
    <div style="margin:20px 0 10px 0;"></div>
    <div class="container">
        <div class="easyui-tabs" style="width:inherit;height:auto" data-options="tabWidth:300">
            <div title="Booking Information" id="booingInformation" style="padding:10px;font-size: 18px">
                <div class="easyui-tabs" data-options="fit:true,plain:true" style="width:inherit;height:500px">
                    <div title="Client Details" style="padding:10px;font-size: 18px">
                        <form>
                            <div class="row">
                                <div class="col-sm-6">
                                    <label>Name</label><br>
                                    <input id="CP_ClientName" class="form-control" type="text" title="name" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
                                </div>
                                <div class="col-sm-6">
                                    <label>Booking No.</label><br>
                                    <input id="CP_BookingNo" class="form-control" type="text" title="bookingNo" style="margin-top: 0" value="<?php echo $bookingcode; ?>">
                                </div>
                                <div class="col-sm-6" style="margin-top:6px">
                                    <label>Phone</label><br>
                                    <input id="CP_ClientPhone" class="form-control" type="text" title="phone" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
                                </div>
                               
                                <div class="col-sm-6" style="margin-top:6px">
                                    <label>Mobile</label>
                                    <br>
                                    <input id="CP_ClientMobile" class="form-control" type="text" title="phone" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div title="ASSESSMENT  DETAILS" style="padding:10px; font-size: 18px">
                        <form>
                            <div class="row">
                                <div class="col-sm">
                                    <label>Address</label><br>
                                    <input id="CP_Address" class="form-control" type="text" title="address" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-sm">
                                    <label>Suburb</label><br>
                                    <input id="CP_Suburb" class="form-control" type="text" title="suburb" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('city'); ?>">
                                </div>
                                <div class="col-sm">
                                    <label>State</label><br>
                                    <input id="CP_State" class="form-control" type="text" title="state" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('state'); ?>">
                                </div>
                                <div class="col-sm">
                                    <label>Postcode</label><br>
                                    <input id="CP_Postcode" class="form-control" type="text" title="postcode" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
                                </div>
                            </div>
                        </form>
                        <form>
                            <div class="row form-group">
                                <div class="col-sm">
                                    <label>Date of Assessment</label><br>
                                    <input id="CP_DateOfAssessment" class="form-control" type="text" title="date" style="margin-top: 0">
                                </div>
                                <div class="col-sm">
                                    <label>Time of Assessment</label><br>
                                    <input id="CP_TimeOfAssessment" class="form-control" type="text" title="time" style="margin-top: 0">
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-sm">
                                    <label>Existing Use of Property</label><br>
                                    <textarea id="CP_ExistingUse" class="form-control" title="use" style="margin-top: 0;height: 70px"></textarea>
                                </div>
                                <div class="col-sm">
                                    <label>Weather Conditions</label><br>
                                    <input id="CP_WeatherConditions" class="form-control" type="text" title="weather" style="margin-top: 0">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <label>Verbal Summary to</label><br>
                                    <input id="CP_VerbalSummary" class="form-control" type="text" title="verbal" style="margin-top: 0">
                                </div>
                                <div class="col-sm">
                                    <label>Date</label><br>
                                    <input id="CP_Date" class="form-control" type="text" title="date" style="margin-top: 0">
                                </div>
                            </div>
                        </form>

                    </div>
                    <div title="ARCHITECT DETAILS" style="padding:10px;font-size: 18px">
                        <form>
                            <div class="row form-group">
                                <div class="col-sm">
                                    <label>Architect Name</label><br>
                                    <input id="architectName" class="form-control" type="text" title="architectName" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
                                </div>
                                <div class="col-sm">
                                    <label>Registration No.</label><br>
                                    <input id="registrationNumber" class="form-control" type="text" title="registrationNo" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm">
                                    <label>Architect Address</label><br>
                                    <input id="architectAddress" class="form-control" type="text" title="architectAdd" style="margin-top: 0" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>">
                                </div>
                            </div>
                            <div class="row form-group">
                                <div class="col-sm">
                                    <label>Email</label><br>
                                    <input id="architectEmail" class="form-control" type="text" title="email" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
                                </div>
                                <div class="col-sm">
                                    <label>Phone</label><br>
                                    <input id="architectPhone" class="form-control" type="text" title="phone" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <div title="Property Summary" id="propertySummary" style="padding:10px;font-size: 18px">
                <p>Primary construction materials and site conditions</p>
                <div class="row form-group" id="psDIV">
                    <div class="col-sm-4">
                        <label id="psName0">Sub-Structure</label><br>
                        <input id="ps0" class="form-control" type="text" title="Sub Structure" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName1">Floors</label><br>
                        <input id="ps1" class="form-control" type="text" title="Floors" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName2">Roof</label><br>
                        <input id="ps2" class="form-control" type="text" title="Roof" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName3">Walls</label><br>
                        <input id="ps3" class="form-control" type="text" title="Walls" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName4">No. of Storeys</label><br>
                        <input id="ps4" class="form-control" type="text" title="No. of Storeys" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName5">Windows</label><br>
                        <input id="ps5" class="form-control" type="text" title="Windows" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName6">Site Grade</label><br>
                        <input id="ps6" class="form-control" type="text" title="Site Garden" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName7">Furnished</label><br>
                        <input id="ps7" class="form-control" type="text" title="Furnished" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName8">Tree Coverage</label><br>
                        <input id="ps8" class="form-control" type="text" title="Tree Coverage" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName9">Extensions / Renovation</label><br>
                        <input id="ps9" class="form-control" type="text" title="Extensions/Renovation" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <label id="psName10">Estimated Age / Period</label><br>
                        <input id="ps10" class="form-control" type="text" title="Estimated Age/Period" style="margin-top: 0">
                    </div>
                    <div class="col-sm-4">
                        <input id="psName11" class="form-control.grey" type="text" style="height:10px;margin-top: 0" placeholder="Name" title="Property Summary Name 11">
                        <input id="ps11" class="form-control.grey" type="text" placeholder="Text" title="Property Summary Text 11" style="margin-top: 0">
                    </div>
                </div>
            </div>
            <div title="Property Assessment Summary" id="propertyAssessmentSummary" style="padding:10px;font-size: 18px">
                <div class="container" style="margin-top: 20px">
                    <div class="row form-group">
                        <div class="col-sm-12">
                            <h3 class="sectionSubHead">Summary of the Condition of the Property</h3>
                        </div>
                        <div class="col-sm-6">
                            <label>Apparent condition of the building with respect to its age:</label>
                        </div>
                        <div class="col-sm-6">
                            <select id="conditionOfBuilding" name="conditionOfBuilding" style="padding-left: 16px" title="select">
                                    <option value="Well maintained">Well maintained</option>
                                    <option value="Reasonably maintained">Reasonably maintained</option>
                                    <option value="Poorly maintained">Poorly maintained</option>
                                </select>
                        </div>
                        <div class="col-sm-12">
                            <h3 class="sectionSubHead">Major Defects</h3>
                        </div>
                        <div class="col-sm-6">
                            <label>Are there any Major Defects evident?</label>
                        </div>
                        <div class="col-sm-6">
                            <select id="majorDefects" name="majorDefects" title="select" style="width: 222px">
                                    <option value="YES">YES</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                        <div class="col-sm-12">
                            <h3 class="sectionSubHead">Serious Structural Defects:</h3>
                        </div>
                        <div class="col-sm-6">
                            <label>Are there any Serious Structural Defects evident?</label>
                        </div>
                        <div class="col-sm-6">
                            <select id="seriousDefects" name="majorDefects" title="select" style="width: 222px">
                                    <option value="YES">YES</option>
                                    <option value="NO">NO</option>
                                </select>
                        </div>
                    </div>
                </div>
                <div id="evidentDefectSummary" class="container">
                    <hr>
                    <h3 class="sectionSubHead">Evident Defect Summary</h3>
                    <button onclick="moreEvidentDefect()" type="button" class="btn btn-primary" style="margin-bottom: 5px">Add One Defect</button>
                    <div class="row" id="EDRow">
                        <div class="col-sm-4" id="ED0">
                            <label id="EDName0" style="margin-bottom: 0">Damp</label>
                            <select id="EDSelect0" style="width:100%;" title="EDSelect"></select>
                        </div>
                        <div class="col-sm-4" id="ED1" title="EDSelect">
                            <label id="EDName1" style="margin-bottom: 0">Framing</label>
                            <select id="EDSelect1" style="width:100%" title="EDSelect"></select>
                        </div>
                        <div class="col-sm-4" id="ED2" title="EDSelect">
                            <label id="EDName2" style="margin-bottom: 0">Stumps / Piers</label>
                            <select id="EDSelect2" style="width:100%" title="EDSelect"></select>
                        </div>
                        <div class="col-sm-4" id="ED3" style="margin-top: 10px">
                            <label id="EDName3" style="margin-bottom: 0">Cracking</label>
                            <select id="EDSelect3" style="width:100%" title="EDSelect"></select>
                        </div>
                        <div class="col-sm-4" id="ED4" style="margin-top: 10px">
                            <label id="EDName4" style="margin-bottom: 0">Water Supply</label>
                            <select id="EDSelect4" style="width:100%" title="EDSelect"></select>
                        </div>
                        <div class="col-sm-4" id="ED5" style="margin-top: 10px">
                            <label id="EDName5" style="margin-bottom: 0">Timber Rot</label>
                            <select id="EDSelect5" style="width:100%" title="EDSelect">
                                </select>
                        </div>
                        <div class="col-sm-4" id="ED6" style="margin-top: 10px">
                            <label id="EDName6" style="margin-bottom: 0">Electrics</label>
                            <select id="EDSelect6" style="width:100%" title="EDSelect">
                                </select>
                        </div>
                        <div class="col-sm-4" id="ED7" style="margin-top: 10px">
                            <label id="EDName7" style="margin-bottom: 0">Roof</label>
                            <select id="EDSelect7" style="width:100%" title="EDSelect">
                                </select>
                        </div>
                        <div class="col-sm-4" id="ED8" style="margin-top: 10px">
                            <label id="EDName8" style="margin-bottom: 0">Suspected Illegal Building</label>
                            <select id="EDSelect8" style="width:100%" title="EDSelect">
                                </select>
                        </div>
                    </div>

                </div>

                <div class="container">
                    <hr>
                    <h3 class="sectionSubHeadBigger">Summary Note</h3>
                    <div class="row form-group">
                        <div class="col-sm" style="padding-left: 3%">
                            <h2 class="sectionSubHead">Assessment Summary:</h2>
                            <textarea id="CP_SummaryNote" class="form-control" title="Assessment Summary"></textarea>
                        </div>
                    </div>
                    <!--<div class="row">-->
                    <!--<div class="col-sm" style="padding-left: 3%">-->
                    <!--<h2 class="sectionSubHead">Design Potential:</h2>-->
                    <!--<textarea id="PASDesignPotSummary" class="form-control" title="Design Potential"></textarea>-->
                    <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
            <div title="Site" style="padding: 10px;font-size: 18px">
                <div class="easyui-tabs">
                    <div title="Area" style="padding: 10px;font-size: 18px" id="siteArea">
                        <!--<button type="button" class="btn btn-primary" id="addMoreAreaRoom" onclick="moreAreaRoom()" style="margin-bottom: 20px;font-size: 18px">Add One Place</button>-->
                        <button type="button" class="btn btn-primary" id="addMoreAreaRoom" onclick="addOnePlace('siteArea')" style="margin-bottom: 20px;font-size: 18px">Add One Place</button>
                        <div id="siteArea0" class="col-sm form-group">
                            <input id="siteAreaName0" placeholder="Rear" class="form-control" type="text">
                            <button type="button" class="btn btn-info" style="font-size: 18px; margin-bottom: 10px; margin-top:10px" onclick="addOneFeature(siteAreaRow0)">Add One Feature</button>
                            <div class="row form-group" id="siteAreaRow0">
                                <div class="col-sm-4">
                                    <label id="siteAreaRow0_name0" style="margin-bottom: 0">Fences/Rating</label>
                                    <select id="siteAreaRow0_select0" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <label id="siteAreaRow0_name1" style="margin-bottom: 0">Paving</label>
                                    <select id="siteAreaRow0_select1" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <label id="siteAreaRow0_name2" style="margin-bottom: 0">Surface Drainage</label>
                                    <select id="siteAreaRow0_select2" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <br>
                                    <input id="siteAreaRow0_name3" placeholder="Put others here..." class="form-control gray" type="text">
                                    <select id="siteAreaRow0_select3" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <br>
                                    <input id="siteAreaRow0_name4" placeholder="Put others here..." class="form-control gray" type="text">
                                    <select id="siteAreaRow0_select4" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <br>
                                    <input id="siteAreaRow0_name5" placeholder="Put others here..." class="form-control gray" type="text">
                                    <select id="siteAreaRow0_select5" style="width:100%" title="AreaSelect"></select>
                                </div>
                            </div>
                            <hr style="border-width: 5px;border-color: #4F4747" />
                        </div>
                        <div id="siteArea1" class="col-sm form-group">
                            <input id="siteAreaName1" placeholder="Front" class="form-control" type="text">
                            <button type="button" class="btn btn-info" style="font-size: 18px; margin-bottom: 10px; margin-top: 10px;" onclick="addOneFeature(siteAreaRow1)">Add One Feature</button>
                            <div class="row form-group" id="siteAreaRow1">
                                <div class="col-sm-4">
                                    <label id="siteAreaRow1_name0" style="margin-bottom: 0">Fences/Rating</label>
                                    <select id="siteAreaRow1_select0" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <label id="siteAreaRow1_name1" style="margin-bottom: 0">Paving</label>
                                    <select id="siteAreaRow1_select1" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <label id="siteAreaRow1_name2" style="margin-bottom: 0">Surface Drainage</label>
                                    <select id="siteAreaRow1_select2" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <br>
                                    <input id="siteAreaRow1_name3" placeholder="Put others here..." class="form-control gray" type="text">
                                    <select id="siteAreaRow1_select3" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <br>
                                    <input id="siteAreaRow1_name4" placeholder="Put others here..." class="form-control gray" type="text">
                                    <select id="siteAreaRow1_select4" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <br>
                                    <input id="siteAreaRow1_name5" placeholder="Put others here..." class="form-control gray" type="text">
                                    <select id="siteAreaRow1_select5" style="width:100%" title="AreaSelect"></select>
                                </div>
                            </div>
                            <hr style="border-width: 5px;border-color: #4F4747" />

                        </div>
                    </div>
                    <div title="Access Limitations (U)" style="padding: 10px;font-size: 18px">
                        <button type="button" class="btn btn-primary" onclick="addOneAccessLimitation('siteAccessLimitationsTable','siteAccessItem','siteAccessImageRef','SiteAccessSelect','siteAccessNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Access Limitation</button>
                        <table id="siteAccessLimitationsTable">
                            <tr>
                                <th style="color: #f44336;text-align: center;width:14%">ITEM No.</th>
                                <th style="color: #f44336;text-align: center;width:14%">IMAGE REF.</th>
                                <th style="color: #f44336;text-align: center;width:42%">ACCESS LIMITATIONS</th>
                                <th style="color: #f44336;text-align: center;width:30%">ACCESS NOTES</th>
                            </tr>
                            <tr>
                                <td><input class="form-control" title="Item No." id="siteAccessItem0" type="text"></td>
                                <td><input class="form-control" title="Image Ref" id="siteAccessImageRef0" onblur="" type="text"></td>
                                <td>
                                    <select id="SiteAccessSelect0" style="width:100%" title="accessLimitationSelect"></select>
                                </td>
                                <td>
                                    <textarea id="siteAccessNotes0" class="form-control" title="exteriorAccessNotes" style="height: 70px"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td><input class="form-control" title="Item No." id="siteAccessItem1" type="text"></td>
                                <td><input class="form-control" title="Image Ref" id="siteAccessImageRef1" onblur="" type="text"></td>
                                <td>
                                    <select id="SiteAccessSelect1" style="width:100%" title="accessLimitationSelect"></select>
                                </td>
                                <td>
                                    <textarea id="siteAccessNotes1" class="form-control" title="exteriorAccessNotes" style="height: 70px"></textarea>
                                </td>

                            </tr>
                        </table>
                    </div>
                    <div title="Maintenance Items and Minor Defects Found (X)" style="padding: 10px;font-size: 18px">
                        <button type="button" class="btn btn-primary" onclick="addOneDefects('siteMinorDefectsTable','siteMaintenanceItemNo','siteMaintenanceImgRef','siteMaintenanceNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Minor Defects</button>
                        <table id="siteMinorDefectsTable">
                            <tr>
                                <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                                <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                                <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>
                            </tr>
                            <tr>
                                <td><input class="form-control" id="siteMaintenanceItemNo0" title="Item No." type="text"></td>
                                <td><input class="form-control" id="siteMaintenanceImgRef0" title="Image Ref" type="text"></td>
                                <td>
                                    <!--<input class="form-control" id="siteMaintenanceNotes0" title="DefectsNotes">-->
                                    <textarea id="siteMaintenanceNotes0" class="form-control" title="exteriorAccessNotes" style="height: 50px"></textarea>
                                </td>
                            </tr>
                        </table>

                        <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>

                        <select id="siteMinorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('siteMinorRecommendationsSelect','siteMinorRecommendationText')"></select >
                            <div class="row form-group" style="margin-top: 10px;">
                                <div class="col-sm-11">
                                    <!--<label id="siteMinorRecommendationLabel">Choices will be displayed here...</label>-->
                                    <textarea id="siteMinorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                                </div>
                                <div class="col-sm-1" style="text-align: right">
                                    <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('siteMinorRecommendationsSelect','siteMinorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                    <button type="button" class="btn btn-danger" onclick="clearRecommendations('siteMinorRecommendationsSelect','siteMinorRecommendationText')" style="font-size: 16px">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div title="Major Defects Found (XX)" style="padding: 10px;font-size: 18px">
                            <button type="button" class="btn btn-primary"  onclick="addOneDefects('siteMajorDefectsTable','siteMajorItemNo','siteMajorImgRef','siteMajorNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Major Defects</button>
                            <table id="siteMajorDefectsTable">
                                <tr>
                                    <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                                    <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                                    <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>

                                </tr>
                                <tr>
                                    <td><input class="form-control" id="siteMajorItemNo0" title="Item No." type="text"></td>
                                    <td><input class="form-control" id="siteMajorImgRef0" title="ImageRef"  onblur="" type="text"></td>
                                    <td>
                                        <!--<input class="form-control" id="siteMajorNotes0" title="DefectsNotes">-->
                                        <textarea id="siteMajorNotes0" class="form-control" title="exteriorAccessNotes" style="height: 50px"></textarea>
                                    </td>

                                </tr>
                            </table>
                            <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>
                            <select id="siteMajorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('siteMajorRecommendationsSelect','siteMajorRecommendationText')"></select>
                        <div class="row form-group" style="margin-top: 10px;">
                            <div class="col-sm-11">
                                <textarea id="siteMajorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                            </div>
                            <div class="col-sm-1" style="text-align: right">
                                <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('siteMajorRecommendationsSelect','siteMajorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                <button type="button" class="btn btn-danger" onclick="clearRecommendations('siteMajorRecommendationsSelect','siteMajorRecommendationText')" style="font-size: 16px">Clear</button>
                            </div>
                        </div>
                    </div>
                    <div title="General notes" style="padding: 10px">
                        <textarea id="siteGeneralNotes" class="form-control" title="siteGeneralNotes"></textarea>
                    </div>
                </div>
            </div>
            <div title="Property Exterior" style="padding: 10px;font-size: 18px">
                <div class="easyui-tabs">
                    <div title="Area" style="padding: 10px;font-size: 18px" id="exteriorArea">
                        <button type="button" class="btn btn-primary" id="addMoreExteriorRoom" onclick="addOnePlace('exteriorArea')" style="margin-bottom: 20px;font-size: 18px">Add One Place</button>
                        <div id="exteriorArea0" class="col-sm form-group">
                            <input id="exteriorAreaName0" placeholder="ROOFING" class="form-control" type="text">
                            <button type="button" class="btn btn-info" style="font-size: 18px; margin-bottom: 10px; margin-top:10px" onclick="addOneFeature(exteriorAreaRow0)">Add One Feature</button>
                            <div class="row form-group" id="exteriorAreaRow0">
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name0" style="margin-bottom: 0">Covering</label>-->
                                    <input id="exteriorAreaRow0_name0" placeholder="Covering" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select0" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name1" style="margin-bottom: 0">Valleys</label>-->
                                    <input id="exteriorAreaRow0_name1" placeholder="Valleys" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select1" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name2" style="margin-bottom: 0">Ridges</label>-->
                                    <input id="exteriorAreaRow0_name2" placeholder="Ridges" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select2" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow0_name3" placeholder="Overhanging tree" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select3" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow0_name4" placeholder="Chimney/Vents/Flues" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select4" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow0_name5" placeholder="Flashing" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select5" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow0_name6" placeholder="Box Gutters" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select6" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow0_name7" placeholder="Skylights" class="form-control" type="text">
                                    <select id="exteriorAreaRow0_select7" style="width:100%" title="AreaSelect"></select>
                                </div>
                            </div>
                            <hr style="border-width: 5px;border-color: #4F4747" />
                        </div>
                        <div id="exteriorArea1" class="col-sm form-group">
                            <input id="exteriorAreaName1" placeholder="WALL" class="form-control" type="text">
                            <button type="button" class="btn btn-info" style="font-size: 18px; margin-bottom: 10px; margin-top:10px" onclick="addOneFeature(exteriorAreaRow1)">Add One Feature</button>
                            <div class="row form-group" id="exteriorAreaRow1">
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name0" style="margin-bottom: 0">Covering</label>-->
                                    <input id="exteriorAreaRow1_name0" placeholder="Structure/Finish" class="form-control" type="text">
                                    <select id="exteriorAreaRow1_select0" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name1" style="margin-bottom: 0">Valleys</label>-->
                                    <input id="exteriorAreaRow1_name1" placeholder="Eaves" class="form-control" type="text">
                                    <select id="exteriorAreaRow1_select1" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name2" style="margin-bottom: 0">Ridges</label>-->
                                    <input id="exteriorAreaRow1_name2" placeholder="Balcony/Deck" class="form-control" type="text">
                                    <select id="exteriorAreaRow1_select2" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow1_name3" placeholder="Sub-Floor Vents" class="form-control" type="text">
                                    <select id="exteriorAreaRow1_select3" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow1_name4" placeholder="Doors/Windows" class="form-control" type="text">
                                    <select id="exteriorAreaRow1_select4" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="exteriorAreaRow1_name5" placeholder="Gutter/Downpipe" class="form-control" type="text">
                                    <select id="exteriorAreaRow1_select5" style="width:100%" title="AreaSelect"></select>
                                </div>
                            </div>
                            <hr style="border-width: 5px;border-color: #4F4747" />
                        </div>
                    </div>
                    <div title="Access Limitations (U)" style="padding: 10px;font-size: 18px;">
                        <button type="button" class="btn btn-primary" onclick="addOneAccessLimitation('exteriorAccessLimitationsTable','exteriorAccessItem','exteriorAccessImageRef','exteriorAccessSelect','exteriorAccessNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Access Limitation</button>
                        <table id="exteriorAccessLimitationsTable">
                            <tr>
                                <th style="color: #f44336;text-align: center;width:14%">ITEM No.</th>
                                <th style="color: #f44336;text-align: center;width:14%">IMAGE REF.</th>
                                <th style="color: #f44336;text-align: center;width:42%">ACCESS LIMITATIONS</th>
                                <th style="color: #f44336;text-align: center;width:30%">ACCESS NOTES</th>
                            </tr>
                            <tr>
                                <td><input class="form-control" title="Item No." id="exteriorAccessItem0" type="text"></td>
                                <td><input class="form-control" title="Image Ref" id="exteriorAccessImageRef0" onblur="" type="text"></td>
                                <td>
                                    <select id="exteriorAccessSelect0" style="width:100%" title="exteriorAccessSelect"></select>
                                </td>
                                <td>
                                    <textarea id="exteriorAccessNotes0" class="form-control" title="exteriorAccessNotes" style="margin-top: 0;height: 70px"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td><input class="form-control" title="Item No." id="exteriorAccessItem1" type="text"></td>
                                <td><input class="form-control" title="Image Ref" id="exteriorAccessImageRef1" onblur="" type="text"></td>
                                <td>
                                    <select id="exteriorAccessSelect1" style="width:100%" title="exteriorAccessSelect"></select>
                                </td>
                                <td>
                                    <textarea id="exteriorAccessNotes1" class="form-control" title="exteriorAccessNotes" style="height: 70px"></textarea>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div title="Maintenance Items and Minor Defects Found (X)" style="padding: 10px;font-size: 18px">
                        <button type="button" class="btn btn-primary" onclick="addOneDefects('exteriorMinorDefectsTable','exteriorMinorDefectItemNo','exteriorMinorDefectImgRef','exteriorMinorDefectNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Minor Defects</button>
                        <table id="exteriorMinorDefectsTable">
                            <tr>
                                <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                                <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                                <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>
                            </tr>
                            <tr>
                                <td><input class="form-control" id="exteriorMinorDefectItemNo0" title="Item No." type="text"></td>
                                <td><input class="form-control" id="exteriorMinorDefectImgRef0" title="Image Ref" type="text"></td>
                                <td>
                                    <!--<input class="form-control" id="exteriorMaintenanceNotes0" title="DefectsNotes">-->
                                    <textarea id="exteriorMinorDefectNotes0" class="form-control" title="exteriorAccessNotes" style="height: 50px"></textarea>
                                </td>
                            </tr>
                        </table>

                        <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>

                        <select id="exteriorMinorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('exteriorMinorRecommendationsSelect','exteriorMinorRecommendationText')"></select >
                            <div class="row form-group" style="margin-top: 10px;">
                                <div class="col-sm-11">
                                    <!--<label id="siteMinorRecommendationLabel">Choices will be displayed here...</label>-->
                                    <textarea id="exteriorMinorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                                </div>
                                <div class="col-sm-1" style="text-align: right">
                                    <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('exteriorMinorRecommendationsSelect','exteriorMinorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                    <button type="button" class="btn btn-danger" onclick="clearRecommendations('exteriorMinorRecommendationsSelect','exteriorMinorRecommendationText')" style="font-size: 16px">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div title="Major Defects Found (XX)" style="padding: 10px;font-size: 18px">
                            <button type="button" class="btn btn-primary"  onclick="addOneDefects('exteriorMajorDefectsTable','exteriorMajorItemNo','exteriorMajorImgRef','exteriorMajorNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Major Defects</button>
                            <table id="exteriorMajorDefectsTable">
                                <tr>
                                    <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                                    <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                                    <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>
                                </tr>
                                <tr>
                                    <td><input class="form-control" id="exteriorMajorItemNo0" title="Item No." type="text"></td>
                                    <td><input class="form-control" id="exteriorMajorImgRef0" title="ImageRef" type="text"></td>
                                    <td>
                                        <!--<input class="form-control" id="exteriorMajorNotes0" title="DefectsNotes">-->
                                        <textarea id="exteriorMajorNotes0" class="form-control" title="exteriorAccessNotes" style="height: 50px"></textarea>
                                    </td>
                                </tr>
                            </table>
                            <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>
                            <select id="exteriorMajorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('exteriorMajorRecommendationsSelect','exteriorMajorRecommendationText')"></select>
                        <div class="row form-group" style="margin-top: 10px;">
                            <div class="col-sm-11">
                                <textarea id="exteriorMajorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                            </div>
                            <div class="col-sm-1" style="text-align: right">
                                <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('exteriorMajorRecommendationsSelect','exteriorMajorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                <button type="button" class="btn btn-danger" onclick="clearRecommendations('exteriorMajorRecommendationsSelect','exteriorMajorRecommendationText')" style="font-size: 16px">Clear</button>
                            </div>
                        </div>
                    </div>
                    <div title="General notes" style="padding: 10px">
                        <textarea id="exteriorGeneralNotes" class="form-control" title="siteGeneralNotes"></textarea>
                    </div>
                </div>
            </div>
            <div title="Property Interior – Dry Areas" data-options="tools:'#p-tools'" style="padding: 10px;font-size: 18px">
                <div class="easyui-tabs">
                    <div title="Area" style="padding: 10px;font-size: 18px" id="InteriorDryArea">
                        <button type="button" class="btn btn-primary" id="addMoreInteriorDryRoom" onclick="addOnePlace('InteriorDryArea')" style="margin-bottom: 20px;font-size: 18px">Add One Place</button>
                        <div id="InteriorDryArea0" class="col-sm form-group">
                            <input id="InteriorDryAreaName0" placeholder="ENTRY FOYER" class="form-control" type="text">
                            <button type="button" class="btn btn-info" style="font-size: 18px; margin-bottom: 10px; margin-top:10px" onclick="addOneFeature(InteriorDryAreaRow0)">Add One Feature</button>
                            <div class="row form-group" id="InteriorDryAreaRow0">
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name0" style="margin-bottom: 0">Covering</label>-->
                                    <input id="InteriorDryAreaRow0_name0" placeholder="Floor Structure/Finish" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow0_select0" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name1" style="margin-bottom: 0">Valleys</label>-->
                                    <input id="InteriorDryAreaRow0_name1" placeholder="Walls" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow0_select1" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name2" style="margin-bottom: 0">Ridges</label>-->
                                    <input id="InteriorDryAreaRow0_name2" placeholder="Ceiling" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow0_select2" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="InteriorDryAreaRow0_name3" placeholder="Electrics" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow0_select3" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="InteriorDryAreaRow0_name4" placeholder="Windows/Doors" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow0_select4" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="InteriorDryAreaRow0_name5" placeholder="Cupboards" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow0_select5" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="InteriorDryAreaRow0_name6" placeholder="Dampness" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow0_select6" style="width:100%" title="AreaSelect"></select>
                                </div>
                            </div>
                            <hr style="border-width: 5px;border-color: #4F4747" />
                        </div>
                        <div id="InteriorDryArea1" class="col-sm form-group">
                            <input id="InteriorDryAreaName1" placeholder="STAIR" class="form-control" type="text">
                            <button type="button" class="btn btn-info" style="font-size: 18px; margin-bottom: 10px; margin-top:10px" onclick="addOneFeature(InteriorDryAreaRow1)">Add One Feature</button>
                            <div class="row form-group" id="InteriorDryAreaRow1">
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name0" style="margin-bottom: 0">Covering</label>-->
                                    <input id="InteriorDryAreaRow1_name0" placeholder="Structure" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow1_select0" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name1" style="margin-bottom: 0">Valleys</label>-->
                                    <input id="InteriorDryAreaRow1_name1" placeholder="Floor Finish" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow1_select1" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4">
                                    <!--<label id="exteriorAreaRow0_name2" style="margin-bottom: 0">Ridges</label>-->
                                    <input id="InteriorDryAreaRow1_name2" placeholder="Balustrade" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow1_select2" style="width:100%" title="AreaSelect"></select>
                                </div>
                                <div class="col-sm-4" style="margin-top: 20px">
                                    <input id="InteriorDryAreaRow1_name3" placeholder="Electrics" class="form-control" type="text">
                                    <select id="InteriorDryAreaRow1_select3" style="width:100%" title="AreaSelect"></select>
                                </div>
                            </div>
                            <hr style="border-width: 5px;border-color: #4F4747" />
                        </div>
                    </div>
                    <div title="Access Limitations (U)" style="padding: 10px;font-size: 18px;">
                        <button type="button" class="btn btn-primary" onclick="addOneAccessLimitation('interiorDryAccessLimitationsTable','interiorDryAccessItem','interiorDryAccessImageRef','interiorDryAccessSelect','interiorDryAccessNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Access Limitation</button>
                        <table id="interiorDryAccessLimitationsTable">
                            <tr>
                                <th style="color: #f44336;text-align: center;width:14%">ITEM No.</th>
                                <th style="color: #f44336;text-align: center;width:14%">IMAGE REF.</th>
                                <th style="color: #f44336;text-align: center;width:42%">ACCESS LIMITATIONS</th>
                                <th style="color: #f44336;text-align: center;width:30%">ACCESS NOTES</th>
                            </tr>
                            <tr>
                                <td><input class="form-control" title="Item No." id="interiorDryAccessItem0" type="text"></td>
                                <td><input class="form-control" title="Image Ref" id="interiorDryAccessImageRef0" onblur="" type="text"></td>
                                <td>
                                    <select id="interiorDryAccessSelect0" style="width:100%" title="interiorAccessSelect" type="text"></select>
                                </td>
                                <td>
                                    <textarea id="interiorDryAccessNotes0" class="form-control" title="interiorAccessNotes" style="margin-top: 0;height: 70px"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td><input class="form-control" title="Item No." id="interiorDryAccessItem1" type="text"></td>
                                <td><input class="form-control" title="Image Ref" id="interiorDryAccessImageRef1" onblur="" type="text"></td>
                                <td>
                                    <select id="interiorDryAccessSelect1" style="width:100%" title="interiorAccessSelect"></select>
                                </td>
                                <td>
                                    <textarea id="interiorDryAccessNotes1" class="form-control" title="interiorAccessNotes" style="height: 70px"></textarea>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div title="Maintenance Items and Minor Defects Found (X)" style="padding: 10px;font-size: 18px">
                        <button type="button" class="btn btn-primary" onclick="addOneDefects('interiorDryMinorTable','interiorDryMinorItemNo','interiorDryMinorImgRef','interiorDryMinorNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Minor Defects</button>
                        <table id="interiorDryMinorTable">
                            <tr>
                                <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                                <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                                <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>
                            </tr>
                            <tr>
                                <td><input class="form-control" id="interiorDryMinorItemNo0" title="Item No." type="text"></td>
                                <td><input class="form-control" id="interiorDryMinorImgRef0" title="Image Ref" type="text"></td>
                                <td>
                                    <!--<input class="form-control" id="exteriorMaintenanceNotes0" title="DefectsNotes">-->
                                    <textarea id="interiorDryMinorNotes0" class="form-control" title="interiorDryMinorNotes" style="height: 50px"></textarea>
                                </td>
                            </tr>
                        </table>

                        <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>

                        <select id="interiorDryMinorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('interiorDryMinorRecommendationsSelect','interiorDryMinorRecommendationText')"></select >
                            <div class="row form-group" style="margin-top: 10px;">
                                <div class="col-sm-11">
                                    <textarea id="interiorDryMinorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                                </div>
                                <div class="col-sm-1" style="text-align: right">
                                    <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('interiorDryMinorRecommendationsSelect','interiorDryMinorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                    <button type="button" class="btn btn-danger" onclick="clearRecommendations('interiorDryMinorRecommendationsSelect','interiorDryMinorRecommendationText')" style="font-size: 16px">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div title="Major Defects Found (XX)" style="padding: 10px;font-size: 18px">
                            <button type="button" class="btn btn-primary" onclick="addOneDefects('interiorDryMajorTable','interiorDryMajorItemNo','interiorDryMajorImgRef','interiorDryMajorNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Major Defects</button>
                            <table id="interiorDryMajorTable">
                                <tr>
                                    <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                                    <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                                    <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>
                                </tr>
                                <tr>
                                    <td><input class="form-control" id="interiorDryMajorItemNo0" title="Item No." type="text" ></td>
                                    <td><input class="form-control" id="interiorDryMajorImgRef0" title="Image Ref" type="text"></td>
                                    <td>
                                        <!--<input class="form-control" id="exteriorMaintenanceNotes0" title="DefectsNotes">-->
                                        <textarea id="interiorDryMajorNotes0" class="form-control" title="interiorDryMajorNotes" style="height: 50px"></textarea>
                                    </td>
                                </tr>
                            </table>

                            <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>

                            <select id="interiorDryMajorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('interiorDryMajorRecommendationsSelect','interiorDryMajorRecommendationText')"></select >
                            <div class="row form-group" style="margin-top: 10px;">
                                <div class="col-sm-11">
                                    <!--<label id="siteMinorRecommendationLabel">Choices will be displayed here...</label>-->
                                    <textarea id="interiorDryMajorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                                </div>
                                <div class="col-sm-1" style="text-align: right">
                                    <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('interiorDryMajorRecommendationsSelect','interiorDryMajorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                    <button type="button" class="btn btn-danger" onclick="clearRecommendations('interiorDryMajorRecommendationsSelect','interiorDryMajorRecommendationText')" style="font-size: 16px">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div title="General notes" style="padding: 10px">
                            <textarea id="interiorDryGeneralNotes" class="form-control" title="siteGeneralNotes"></textarea>
                        </div>
                    </div>
                </div>
                <div title="Property Interior – Service (wet) Areas" data-options="tools:'#p-tools'" style="padding: 10px;font-size: 18px">
                    <div class="easyui-tabs">
                        <div title="Area" style="padding: 10px;font-size: 18px" id="InteriorWetArea">
                            <button type="button" class="btn btn-primary" id="addMoreInteriorWetRoom" onclick="addOnePlace('InteriorWetArea')" style="font-size: 18px">Add One Place</button>
                            <hr style="margin-bottom: 20px;border-width: 2px;border-color: #4F4747"/>
                            <div id="InteriorWetArea0" class="col-sm form-group">
                                <input id="InteriorWetAreaName0" placeholder="TOILETS(F)" class="form-control" type="text">
                                <button type="button" class="btn btn-info" style="font-size: 18px; margin-bottom: 10px; margin-top:10px" onclick="addOneFeature(InteriorWetAreaRow0)">Add One Feature</button>
                                <div class="row form-group" id="InteriorWetAreaRow0">
                                    <div class="col-sm-4">
                                        <!--<label id="exteriorAreaRow0_name0" style="margin-bottom: 0">Covering</label>-->
                                        <input id="InteriorWetAreaRow0_name0" placeholder="Floor Structure/Finish" class="form-control" type="text">
                                        <select id="InteriorWetAreaRow0_select0" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4">
                        <!--<label id="exteriorAreaRow0_name1" style="margin-bottom: 0">Valleys</label>-->
                        <input id="InteriorWetAreaRow0_name1" placeholder="Walls" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select1" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4">
                        <!--<label id="exteriorAreaRow0_name2" style="margin-bottom: 0">Ridges</label>-->
                        <input id="InteriorWetAreaRow0_name2" placeholder="Ceiling" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select2" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name3" placeholder="Electrics" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select3" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name4" placeholder="Windows/Doors" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select4" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name5" placeholder="Cupboards/Vanity" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select5" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name6" placeholder="Water Pressure" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select6" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name7" placeholder="Dampness" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select7" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name8" placeholder="Exhaust/Ventilation" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select8" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name9" placeholder="Toilet Suite" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select9" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name10" placeholder="Basin/Splashback" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select10" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name11" placeholder="Mirror" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select11" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name12" placeholder="Shower" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select12" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name13" placeholder="Floor Waste" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select13" style="width:100%" title="AreaSelect"></select>
                    </div>
                    <div class="col-sm-4" style="margin-top: 20px">
                        <input id="InteriorWetAreaRow0_name14" placeholder="Hand Dryer" class="form-control" type="text">
                        <select id="InteriorWetAreaRow0_select14" style="width:100%" title="AreaSelect"></select>
                    </div>
                </div>
                <hr style="border-width: 5px;border-color: #4F4747" />
            </div>
        </div>
        <div title="Access Limitations (U)" style="padding: 10px;font-size: 18px;">
            <button type="button" class="btn btn-primary" onclick="addOneAccessLimitation('interiorWetAccessLimitationsTable','interiorWetAccessItem','interiorWetAccessImageRef','interiorWetAccessSelect','interiorWetAccessNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Access Limitation</button>
            <table id="interiorWetAccessLimitationsTable">
                <tr>
                    <th style="color: #f44336;text-align: center;width:14%">ITEM No.</th>
                    <th style="color: #f44336;text-align: center;width:14%">IMAGE REF.</th>
                    <th style="color: #f44336;text-align: center;width:42%">ACCESS LIMITATIONS</th>
                    <th style="color: #f44336;text-align: center;width:30%">ACCESS NOTES</th>
                </tr>
                <tr>
                    <td><input class="form-control" title="Item No." id="interiorWetAccessItem0" type="text"></td>
                    <td><input class="form-control" title="Image Ref" id="interiorWetAccessImageRef0" onblur="" type="text"></td>
                    <td>
                        <select id="interiorWetAccessSelect0" style="width:100%" title="interiorAccessSelect"></select>
                    </td>
                    <td>
                        <textarea id="interiorWetAccessNotes0" class="form-control" title="interiorAccessNotes" style="margin-top: 0;height: 70px"></textarea>
                    </td>
                </tr>
                <tr>
                    <td><input class="form-control" title="Item No." id="interiorWetAccessItem1" type="text"></td>
                    <td><input class="form-control" title="Image Ref" id="interiorWetAccessImageRef1" onblur="" type="text"></td>
                    <td>
                        <select id="interiorWetAccessSelect1" style="width:100%" title="interiorAccessSelect"></select>
                    </td>
                    <td>
                        <textarea id="interiorWetAccessNotes1" class="form-control" title="interiorAccessNotes" style="height: 70px"></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <div title="Maintenance Items and Minor Defects Found (X)" style="padding: 10px;font-size: 18px">
            <button type="button" class="btn btn-primary" onclick="addOneDefects('interiorWetMinorTable','interiorWetMinorItemNo','interiorWetMinorImgRef','interiorWetMinorNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Minor Defects</button>
            <table id="interiorWetMinorTable">
                <tr>
                    <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                    <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                    <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>
                </tr>
                <tr>
                    <td><input class="form-control" id="interiorWetMinorItemNo0" title="Item No." type="text"></td>
                    <td><input class="form-control" id="interiorWetMinorImgRef0" title="Image Ref" type="text"></td>
                    <td>
                        <!--<input class="form-control" id="exteriorMaintenanceNotes0" title="DefectsNotes">-->
                        <textarea id="interiorWetMinorNotes0" class="form-control" title="interiorDryMinorNotes" style="height: 50px"></textarea>
                    </td>
                </tr>
            </table>

            <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>

            <select id="interiorWetMinorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('interiorWetMinorRecommendationsSelect','interiorWetMinorRecommendationText')"></select >
                            <div class="row form-group" style="margin-top: 10px;">
                                <div class="col-sm-11">
                                    <textarea id="interiorWetMinorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                                </div>
                                <div class="col-sm-1" style="text-align: right">
                                    <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('interiorDryMinorRecommendationsSelect','interiorDryMinorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                    <button type="button" class="btn btn-danger" onclick="clearRecommendations('interiorWetMinorRecommendationsSelect','interiorWetMinorRecommendationText')" style="font-size: 16px">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div title="Major Defects Found (XX)" style="padding: 10px;font-size: 18px">
                            <button type="button" class="btn btn-primary" onclick="addOneDefects('interiorWetMajorTable','interiorWetMajorItemNo','interiorWetMajorImgRef','interiorWetMajorNotes')" style="margin-bottom: 10px;font-size: 18px">Add One Major Defects</button>
                            <table id="interiorWetMajorTable">
                                <tr>
                                    <th style="color: #f44336;text-align: center;width:15%">ITEM No.</th>
                                    <th style="color: #f44336;text-align: center;width:15%">IMAGE REF.</th>
                                    <th style="color: #f44336;text-align: center;width:70%">DEFECTS NOTES</th>
                                </tr>
                                <tr>
                                    <td><input class="form-control" id="interiorWetMajorItemNo0" title="Item No." type="text"></td>
                                    <td><input class="form-control" id="interiorWetMajorImgRef0" title="Image Ref" type="text"></td>
                                    <td>
                                        <!--<input class="form-control" id="exteriorMaintenanceNotes0" title="DefectsNotes">-->
                                        <textarea id="interiorWetMajorNotes0" class="form-control" title="interiorDryMinorNotes" style="height: 50px"></textarea>
                                    </td>
                                </tr>
                            </table>

                            <label style="margin-top: 20px;font-size: 18xp">Professional and Trade Recommendations:</label>

                            <select id="interiorWetMajorRecommendationsSelect" style="width:100%" title="Select Recommendations" onchange="addRecommendations('interiorWetMajorRecommendationsSelect','interiorWetMajorRecommendationText')"></select >
                            <div class="row form-group" style="margin-top: 10px;">
                                <div class="col-sm-11">
                                    <textarea id="interiorWetMajorRecommendationText" class="placeHolderColor" style="height: 70px;" title="recommendation" placeholder="Choices will be displayed here..." readonly></textarea>
                                </div>
                                <div class="col-sm-1" style="text-align: right">
                                    <!--<button type="button" class="btn btn-primary" onclick="addRecommendations('interiorDryMinorRecommendationsSelect','interiorDryMinorRecommendationText')" style="margin-right: 10px;font-size: 16px">Add</button>-->
                                    <button type="button" class="btn btn-danger" onclick="clearRecommendations('interiorWetMajorRecommendationsSelect','interiorWetMajorRecommendationText')" style="font-size: 16px">Clear</button>
                                </div>
                            </div>
                        </div>
                        <div title="General notes" style="padding: 10px;font-size: 18px">
                            <textarea id="interiorWetMajorGeneralNotes" class="form-control" title="GeneralNotes"></textarea>
                        </div>
                    </div>
                </div>
<!--
<div title="Photos" data-options="tools:'#p-tools'" style="padding: 10px;font-size: 18px">
<div class="container">
<input type="button" id="get_drawing" value="Upload Images" class="uploadImageButton"
onclick="CPUploadImages()" style="white-space: normal; width: 15%">
<input type="file" id="CPUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>

</div>
<div class="container" style = "margin-top:10px">
<table id="CPImagesTable" style="display: none">
<tr>
<th>
<div class="row form-group" id="CPImagesDIV">
</div>

</th>
</tr>
</table>
<br>
</div>
</div>
-->
                <div id="CP_DIVPhotos" title="Photos" data-title="Photos" style="padding: 10px;font-size: 18px">
                    <button id="CP_uploadImg_Btn" class="btn btn-primary">Upload Images</button>
                    <input type="file" id="CP_ImgsUpload" accept="image/x-png,image/jpeg" multiple/>
                    <div id="Img-main-container">
<!--                        <div id="Img-loader">Loading document ...</div>-->
                        <div id="CPImagesTable"></div>
                        <!--                    HA_ImgsContents HA_ImgsCA_indicateText-->
<!--                        <div id="Imgpage-loader">Loading page ...</div>-->
                    </div>
                </div>

                <div title="Attachment" style="padding: 10px;font-size: 18px">
                    <div class="container" style="margin-top: 20px" >
                        <div class="row">
                            <div class="col-sm-4">
                                <label class="attachmentlabel">Property Maintenance Guide</label>
                                <select id="propertyMaintenanceGuide" style="width:100%" title="Property Maintenance Guide">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <label class="attachmentlabel">Cracking in Masonry</label>
                                <select id="crackingInMasonry" style="width:100%" title="cracking in masonry">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <label class="attachmentlabel">Treatment of Dampness </label>
                                <select id="treatmentOfDampness" style="width:100%" title="treatment of dampness">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm-4" style="margin-top:20px">
                                <label class="attachmentlabel">Health & Safety Warning</label>
                                <select id='healthSafetyWarning' style="width:100%" title="health and safety warning">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm-4" style="margin-top:20px">
                                <label class="attachmentlabel">Roofing & Guttering </label>
                                <select id="roofingGuttering" style="width:100%" title="Roofing & Guttering">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm-4" style="margin-top:20px">
                                <label class="attachmentlabel">Re-stumping </label>
                                <select id="reStumping" style="width:100%" title="Roofing & Guttering">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div class="col-sm-4" style="margin-top:20px">
                                <label class="attachmentlabel">Termites & Borers</label>
                                <select id='termitesBorers' style="width:100%" title="health and safety warning">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div class="col-sm-4" style="margin-top:20px">
                                <label class="attachmentlabel">Cost Guide</label>
                                <select id='costGuide' style="width:100%" title="Home Safety Checklist">
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


    <!--Scripts-->
    <script src="js/images.js"></script>
    <script src="js/loadImageJS/load-image.all.min.js"></script>


    <!--PDF Generator-->
    <script src="CommercialPropertyJS/PDFGenerator.js?<?php echo time(); ?>"></script>
    <!--General Functions-->
    <script src="CommercialPropertyJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
    <script src="CommercialPropertyJS/pdfGeneralFunctions.js?<?php echo time(); ?>"></script>
    <!--Text-->
    <script src="CommercialPropertyJS/text.js?<?php echo time(); ?>"></script>
    <!--Table Data-->
    <script src="CommercialPropertyJS/getTableData.js?<?php echo time(); ?>"></script>

</body>

</html>
