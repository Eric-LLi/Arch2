<?php
  require_once("loadbooking.php");
?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <title>Property Assessment -  <?php echo $bookingcode; ?></title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <?php require_once("meta.php"); ?>
        <!-- Customized CSS -->
        <link rel="stylesheet" href="css/general.css">
        <link rel="stylesheet" href="css/viewPDF.css">

        <!--  Import JQuery  -->
        <!-- <script src="js/jquery-1.12.4.min.js"></script> -->
        <!-- <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
        <!--  Import pdfMake  -->
        <!-- <script src='../node_modules/pdfmake/build/pdfmake.min.js'></script>
        <script src='../node_modules/pdfmake/build/vfs_fonts.js'></script> -->
        <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
        <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>
<!--         <script type="text/javascript" src="http://cdn.sobekrepository.org/includes/jquery-rotate/2.2/jquery-rotate.min.js"></script>
 -->
        <script type="text/javascript">
            function stopRKey(evt) {
                var evt = (evt) ? evt : ((event) ? event : null);
                var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
                if ((evt.keyCode == 13) && (node.type == "text")) {
                    return false;
                }
            }
            document.onkeypress = stopRKey;
        </script>

        <?php require_once("saveloaddata.php"); ?>
       
    
    </head>

    <body>
        <!--Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">ArchiCentre Task</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!--<ul class="navbar-nav mr-auto">-->
                <!--<li class="nav-item">-->
                <!--<a class="nav-link" href="#">Back</a>-->
                <!--</li>-->
                <!--</ul>-->
                <!--<form class="form-inline my-2 my-lg-0">-->
                <!--<a class="nav-link" href="#">Welcome XXXXX@XXX.COM</a>-->
                <!--<button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Logout</button>-->
                <!--</form>-->
            </div>
        </nav>
        <!--Title-->
        <div class="container">
            <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
                <strong>Saving PDF. Please don't close this page. It will take a while</strong>
            </div>
            <h2 class="content-head text-center firstH1">PROPERTY ASSESSMENT REPORT</h2>
            <br>
            <p>
                This Property Assessment Report is a visual assessment of the conditions of the reasonably accessible areas of the property
                at the time of the assessment, including the subject residence and associated areas where the property is
                a unit or apartment.
            </p>
        </div>
        <!--Details-->
        <div class="container">
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
            <form>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Address of Property</label>
                        <br>
                        <input id="2" class="form-control" type="text" title="address" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">

                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Suburb</label>
                        <br>
                        <input id="3" class="form-control" type="text" title="suburb" value="<?php echo doNiceArrayElemAsString('city'); ?>">
                    </div>
                    <div class="col-sm">
                        <label>State</label>
                        <br>
                        <input id="9" class="form-control" type="text" title="state" value="<?php echo doNiceArrayElemAsString('state', false); ?>">
                        <!--<select id="9" style="width:100%;height: 50px;margin-top: 6px" title="state" >-->
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
                        <!--<select id="9" style="width:100%" title="state">-->
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
                        <label>Postcode</label>
                        <br>
                        <input id="11" class="form-control" title="postcode" type="text" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
                    </div>
                </div>
            </form>
            <hr>
            <form>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Date of Assessment</label>
                        <br>
                        <textarea id="4" title="date" class="form-control"></textarea>
                    </div>
                    <div class="col-sm">
                        <label>Time of Assessment</label>
                        <br>
                        <textarea id="10" title="time" class="form-control"></textarea>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Existing Use of Property</label>
                        <br>
                        <textarea id="5" title="existing Use" class="form-control"></textarea>
                    </div>
                    <div class="col-sm">
                        <label>Weather Conditions</label>
                        <br>
                        <textarea id="6" title="weather" class="form-control"></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Verbal Summary to</label>
                        <br>
                        <!-- <textarea id="7" title="verbal" class="form-control"></textarea> -->
                        <select id="7" style="width:100%;height:50px;marginBottom:30px" class="form-control">
                            <option selected disabled value="Choose an item">Choose an item</option>
                            <option value="Given in person">Given in person</option>
                            <option value="Given over the phone">Given over the phone</option>
                            <option value="Left message request for call back">Left message request for call back</option>
                            <option value="Left detailed voice message">Left detailed voice message</option>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Date</label>
                        <br>
                        <textarea id="12" title="date" class="form-control"></textarea>
                    </div>
                </div>
            </form>
            <br>
        </div>


        <div id="architectDetails" class="container">
            <hr>
            <h3 class="sectionSubHead">ARCHITECT DETAILS</h3>
            <form>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Architect Name</label>
                        <br>
                        <input id="architectName" title="name" class="form-control" type="text" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
                    </div>
                    <div class="col-sm">
                        <label>Registration No.</label>
                        <br>
                        <input id="registrationNumber" title="registration No." class="form-control" type="text" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Email</label>
                        <br>
                        <input id="architectEmail" title="email" class="form-control" type="text" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
                    </div>
                    <div class="col-sm">
                        <label>Phone</label>
                        <br>
                        <input id="architectPhone" title="phone" class="form-control" type="text" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Architect Address</label>
                        <br>
                        <input id="architectAddress" title="address" class="form-control" type="text" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>">
                    </div>
                </div>
            </form>
        </div>

        <!--Summary-->
        <div class="container">
            <h2 class="content-head text-center firstH1">YOUR PROPERTY ASSESSMENT SUMMARY</h2>
            <br>
            <p>
                This Property Assessment summary provides you with a “snapshot” of the items the architect considers of greatest significance
                for you when considering this property. Please refer to the Definitions and the complete Report for detailed
                information regarding visible defects and recommended actions. Please note that this summary is not the complete
                Report and that in the event of an apparent discrepancy the complete Report overrides the Summary information.
            </p>
            <hr>
        </div>

        <div id="propertySummary" class="container">
            <h3 class="sectionSubHead">PROPERTY SUMMARY</h3>
            <form>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Sub-Structure</label>
                        <br>
                        <input id="ps0" class="form-control" type="text" title="input">
                    </div>
                    <div class="col-sm">
                        <label>Floors</label>
                        <br>
                        <input id="ps1" class="form-control" type="text" title="input">
                    </div>
                    <div class="col-sm">
                        <label>Roof</label>
                        <br>
                        <input id="ps2" class="form-control" type="text" title="input">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <input id="ps3" class="form-control" type="text" title="input">
                    </div>
                    <div class="col-sm">
                        <label>No. of Storeys</label>
                        <br>
                        <input id="ps4" class="form-control" type="text" title="input">
                    </div>
                    <div class="col-sm">
                        <label>Windows</label>
                        <br>
                        <input id="ps5" class="form-control" type="text" title="input">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Site Grade</label>
                        <br>
                        <!-- <input id="ps6" class="form-control" type="text" title="input"> -->
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
                        <label>Furnished</label>
                        <br>
                        <!-- <input id="ps7" class="form-control" type="text" title="input"> -->
                        <select id="ps7" style="width:100%;height:50px;marginBottom:30px" class="form-control">
                            <option selected disabled value="Choose an item">Choose an item</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Partial">Partial</option>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Tree Coverage</label>
                        <br>
                        <!-- <input id="ps8" class="form-control" type="text" title="input"> -->
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
                        <label>Extensions / Renovation</label>
                        <br>
                        <!-- <input id="ps9" class="form-control" type="text" title="input"> -->
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
                        <label>Estimated Age / Period</label>
                        <br>
                        <input id="ps10" class="form-control" type="text" title="input">
                    </div>
                </div>
            </form>
        </div>

        <div class="container">
            <hr>
            <h3 class="sectionSubHead">Summary of the Condition of the Property</h3>
            <div class="row">
                <div class="col-sm-6">
                    <div class="row">
                        <div class="form-group col-sm">
                            <label>Apparent condition of the building with respect to its age:</label>
                            <select onchange="checkIfOther()" id="conditionOfBuilding" name="conditionOfBuilding" style="padding-left: 16px" title="select">
                                <option value="Untested/New">Untested/New</option>
                                <option value="Reasonably Maintained">Reasonably Maintained</option>
                                <option value="Fair">Fair</option>
                                <option value="Poorly Maintained">Poorly Maintained</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div id="XiaoKe" class="form-group col-sm" style="display: none">
                            <label>Other Condition:</label>
                            <input id="conditionOfBuildingText" class="form-control" type="text" title="input">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm">
                            <h3 class="sectionSubHead">Major Defects</h3>
                            <label>Are there any Major Defects evident?</label>
                            <select id="majorDefects" name="majorDefects" title="select">
                                <option value="YES">YES</option>
                                <option value="NO">NO</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm">
                            <h3 class="sectionSubHead">Serious Structural Defects</h3>
                            <label>Are there any Serious Structural Defects evident?</label>
                            <select id="seriousStructuralDefects" name="seriousStructuralDefects" title="select">
                                <option value="YES">YES</option>
                                <option value="NO">NO</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-sm">
                            <input type="button" value="Upload Cover Image" class="uploadCoverImageButton" onclick="AssessmentCoverImage()" style="width: 500px">
                            <input type="file" id="AssessmentUploadCoverImage" class="inputImage" accept="image/x-png,image/jpeg">
                        </div>
                    </div>

                    <div class="row">
                        <form>
                            <div class="col-sm" id="AssessmentCoverImageDiv" style="">
                                <img id="AssessmentCoverImage" src="#" alt="Image1" style="width:500px;display: none"/>
                            </div>
                            <div class="col-sm">
                                <input class="btn btn-danger" type="button" value="Remove" id="AssessmentCoverImageRemoveButton" onclick="RemoveAssessmentCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px; width: 500px">
                                <br>
                            </div>
                            <div class="col-sm">
                                <input type="text" id="AssessmentCoverImageAngle" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 500px">
                                <br>
                            </div>
                            <div class="col-sm">
                                <input class="btn btn-info" type="button" value="Rotate" id="AssessmentCoverImageRotateButton" onclick="RotateAssessmentCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px; width: 500px">
                                <br>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

        <div id="evidentDefectSummary" class="container">
            <hr>

            <h3 class="sectionSubHead">Evident Defect Summary</h3>
            <button onclick="moreEvidentDefect()" type="button" class="btn btn-primary" style="margin-bottom: 5px">Add One Defect</button>
            <div class="row" id="EDRow0">
                <div class="col-sm-4" id="ED0">
                    <label id="EDName0">Damp</label>
                    <br>
                    <select id="EDSelect0" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm-4" id="ED1" title="EDSelect">
                    <label id="EDName1">Framing</label>
                    <br>
                    <select id="EDSelect1" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm-4" id="ED2" title="EDSelect">
                    <label id="EDName2">Stumps / Piers</label>
                    <br>
                    <select id="EDSelect2" style="width:100%" title="EDSlect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div class="row" id="EDRow1">
                <div class="col-sm" id="ED3">
                    <label id="EDName3">Cracking</label>
                    <br>
                    <select id="EDSelect3" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm" id="ED4">
                    <label id="EDName4">Water Supply</label>
                    <br>
                    <select id="EDSelect4" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm" id="ED5">
                    <label id="EDName5">Timber Rot</label>
                    <br>
                    <select id="EDSelect5" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
            </div>
            <div class="row" id="EDRow2">
                <div class="col-sm" id="ED6">
                    <label id="EDName6">Electrics</label>
                    <br>
                    <select id="EDSelect6" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm" id="ED7">
                    <label id="EDName7">Roof</label>
                    <br>
                    <select id="EDSelect7" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm" id="ED8">
                    <label id="EDName8">Suspected Illegal Building</label>
                    <br>
                    <select id="EDSelect8" style="width:100%" title="EDSelect">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="XX">XX</option>
                        </optgroup>
                        <optgroup label="Maintenance Item or Minor Defect">
                            <option value="X">X</option>
                        </optgroup>
                        <optgroup label="Unknown / Inaccessible / Not Tested">
                            <option value="U">U</option>
                        </optgroup>
                        <optgroup label="Not Applicable; No Such Item">
                            <option value="NA">NA</option>
                        </optgroup>
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
                    <textarea id="PASAssessmentSummary" class="form-control" title="Assessment Summary"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-sm" style="padding-left: 3%">
                    <h2 class="sectionSubHead">Design Potential:</h2>
                    <textarea id="PASDesignPotSummary" class="form-control" title="Design Potential"></textarea>
                </div>
            </div>
        </div>

        <!--Site and Garden-->
        <div class="container">
            <h2 class="content-head text-center firstH1">Site & Garden</h2>
            <br>
        </div>

        <div class="container">
            <hr>
            <div class="row form-group">
                <div class="col-sm form-group">
                    <input id="200" placeholder="Garage / Shed #1" class="form-control" type="text">
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Structure/Walls</label>
                            <select id="201" style="width:100%" title="Wall Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Roof/Ceiling</label>
                            <select id="202" style="width:100%" title="Roof Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Floor/Finish</label>
                            <select id="203" style="width:100%" title="Floor Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <input id="204" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="205" style="width:100%" title="Other Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="206" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="207" style="width:100%" title="Other Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="208" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="209" style="width:100%" title="Other Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>

                </div>
                <div class="col-sm form-group">
                    <input id="210" placeholder="Garage / Shed #2" class="form-control" type="text">
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Structure/Walls</label>
                            <select id="211" style="width:100%" title="Wall Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Roof/Ceiling</label>
                            <select id="212" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Floor/Finish</label>
                            <select id="213" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <input id="214" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="215" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="216" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="217" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="218" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="219" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div style="text-align: center;">-->
            <!--<button onclick="moreSiteGardenSheds()" id="moreShedButton">Add More Garage or Shed</button>-->
            <!--<br><br>-->
            <!--</div>-->
            <div id="SiteGardenShed" style="display:none;padding: 0">
                <div class="row form-group">
                    <div class="col-sm form-group">
                        <input id="220" placeholder="Garage / Shed #3" class="form-control" type="text" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Structure/Walls</label>
                                <select id="221" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Roof/Ceiling</label>
                                <select id="222" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Floor/Finish</label>
                                <select id="223" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="224" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="225" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="226" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="227" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="228" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="229" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm form-group">
                        <input id="230" placeholder="Garage / Shed #4" class="form-control" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Structure/Walls</label>
                                <select id="231" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Roof/Ceiling</label>
                                <select id="232" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Floor/Finish</label>
                                <select id="233" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="234" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="235" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="236" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="237" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="238" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="239" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm form-group">
                        <input id="240" placeholder="Garage / Shed #5" class="form-control" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Structure/Walls</label>
                                <select id="241" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Roof/Ceiling</label>
                                <select id="242" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Floor/Finish</label>
                                <select id="243" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="244" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="245" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="246" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="247" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="248" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="249" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm form-group">
                        <input id="250" placeholder="Garage / Shed #6" class="form-control" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Structure/Walls</label>
                                <select id="251" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Roof/Ceiling</label>
                                <select id="252" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Floor/Finish</label>
                                <select id="253" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="254" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="255" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="256" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="257" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="258" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="259" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="text-align: center;">
                <button onclick="moreSiteGardenSheds()" id="moreShedButton" type="button" class="btn btn-info">Add More Garage or Shed</button>
                <br>
                <br>
            </div>
            <hr>
            <div class="row form-group">
                <div class="col-sm form-group">
                    <input id="260" placeholder="Rear" class="form-control" type="text">
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Fences/Retaining</label>
                            <select id="261" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Paving</label>
                            <select id="262" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Surface Drainage</label>
                            <select id="263" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <input id="264" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="265" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="266" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="267" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="268" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="269" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm form-group">
                    <input id="270" placeholder="Front" class="form-control" type="text">
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Fences/Retaining</label>
                            <select id="271" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Paving</label>
                            <select id="272" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Surface Drainage</label>
                            <select id="273" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <input id="274" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="275" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="276" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="277" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="278" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="279" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <!--<div style="text-align: center;">-->
            <!--<button onclick="moreSiteGardenBoundaries()" id="moreBoundariesButton">Add More Boundaries</button>-->
            <!--<br><br>-->
            <!--</div>-->
            <div id="SiteGardenBoundary" style="display:none;padding: 0">
                <div class="row form-group" id="SiteGardenBoundary1">
                    <div class="col-sm form-group">
                        <input id="280" placeholder="Boundary A" class="form-control" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Fences/Retaining</label>
                                <select id="281" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Paving</label>
                                <select id="282" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Surface Drainage</label>
                                <select id="283" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="284" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="285" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="286" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="287" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="288" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="289" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm form-group">
                        <input id="290" placeholder="Boundary B" class="form-control" type="text" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Fences/Retaining</label>
                                <select id="291" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Paving</label>
                                <select id="292" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Surface Drainage</label>
                                <select id="293" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="294" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="295" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="296" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="297" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="298" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="299" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="SiteGardenBoundary2">
                    <div class="col-sm form-group">
                        <input id="300" placeholder="Boundary C" class="form-control" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Fences/Retaining</label>
                                <select id="301" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Paving</label>
                                <select id="302" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Surface Drainage</label>
                                <select id="303" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="304" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="305" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="306" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="307" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="308" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="309" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm form-group">
                        <input id="310" placeholder="Boundary D" class="form-control" type="text">
                        <div class="row form-group">
                            <div class="col-sm">
                                <label>Fences/Retaining</label>
                                <select id="311" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Paving</label>
                                <select id="312" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <label>Surface Drainage</label>
                                <select id="313" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <input id="314" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="315" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="316" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="317" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="col-sm">
                                <input id="318" placeholder="Put others here..." class="form-control gray" type="text">
                                <select id="319" style="width:100%" title="Select">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="✔">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="XX">XX</option>
                                    </optgroup>
                                    <optgroup label="Maintenance Item or Minor Defect">
                                        <option value="X">X</option>
                                    </optgroup>
                                    <optgroup label="Unknown / Inaccessible / Not Tested">
                                        <option value="U">U</option>
                                    </optgroup>
                                    <optgroup label="Not Applicable; No Such Item">
                                        <option value="NA">NA</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="text-align: center;">
                <button onclick="moreSiteGardenBoundaries()" id="moreBoundariesButton" type="button" class="btn btn-info">Add More Boundaries</button>
                <br>
                <br>
            </div>
        </div>

        <!--Site and Garden Images-->
        <div class="container">
            <table id="AccessmentSiteImages">
                <tr>
                    <th style="width: 20%;font-weight: normal">
                        <label>Images (max 3 images) </label>
                        <br>
                        <input type="button" value="Upload Image" class="uploadImageButton" onclick="AssessmentSiteUploadImages()">
                        <input type="file" id="AssessmentSiteUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
                        <input type="file" id="AssessmentUploadOneImage" accept="image/x-png,image/jpeg" class="inputImage">
                    </th>
                    <th class="container">
                        <div id="AccessmentSiteImagesContainer" class="row"></div>
                    </th>
                </tr>
            </table>
        </div>
        <!--Site and Garden Notes -->
        <div class="container">
            <hr>
            <button type="button" class="btn btn-primary" style="margin:10px 0 10px 0" onclick="addAccessLimitation('AssessmentSiteNotesTable','AssessmentSiteLimitationSelect','AssessmentSiteLimitationNote')">Add One Access Limitation</button>
            <table id="AssessmentSiteNotesTable">
                <tr>
                    <td class="sectionSubHead">Access Limitations</td>
                    <td class="sectionSubHead" width="650px">Access Notes:</td>
                </tr>
                <tr>
                    <td height="30%">
                        <select title="AssessmentSiteLimitationSelect" id="AssessmentSiteLimitationSelect0">
                            <option value="Reasonably Accessible">Reasonably Accessible</option>
                            <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                            <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety Hazard</option>
                            <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                            <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard </option>
                        </select>
                    </td>
                    <td height="30%">
                        <textarea class="form-control" style="height:90px" title="AssessmentSiteLimitationNote" id="AssessmentSiteLimitationNote0"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sectionSubHead">Major and Serious Structural Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentSiteMajorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input id="assessmentSiteMajorRecommendationsother" style="display:none;marginTop:30px" placeholder="Other" type="text" class="form-control">
                            <input type="text" id="assessmentSiteMajorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sectionSubHead">Maintenance Items and Minor Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentSiteMinorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input type="text" id="assessmentSiteMinorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label class="sectionSubHead">General Notes:</label>
                        <br>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="assessmentSiteGeneralNotes" class="form-control" title="generalNotes"></textarea>
                    </td>
                </tr>
            </table>
        </div>

        <!--Property Exterior-->
        <div class="container">
            <h2 class="content-head text-center firstH1">Property Exterior</h2>
            <br>
        </div>

        <div class="container">
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="2000" placeholder="Roof" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Covering</label>
                        <br>
                        <select id="330" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Valleys</label>
                        <br>
                        <select id="331" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ridges</label>
                        <br>
                        <select id="332" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Overhanging Trees</label>
                        <br>
                        <select id="333" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Chimney/Vents/Flues</label>
                        <br>
                        <select id="334" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Flashing</label>
                        <br>
                        <select id="335" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Box Gutters</label>
                        <br>
                        <select id="336" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Skylights</label>
                        <br>
                        <select id="337" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <br>

                <div class="row">
                    <div class="col-sm">
                        <input id="338" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="339" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="339a" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="339b" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="339c" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="339d" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="339e" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="339f" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="2001" placeholder="Roof Space" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Frame</label>
                        <br>
                        <select id="340" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Insulation</label>
                        <br>
                        <select id="341" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Services</label>
                        <br>
                        <select id="342" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Lining/Sarking</label>
                        <br>
                        <select id="343" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <br>
                <div class="row">
                    <div class="col-sm">
                        <label>Underside of Roof</label>
                        <br>
                        <select id="344" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="345" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="346" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="347" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="348" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="349" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="349a" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="2002" placeholder="Sub-Floor" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Stumps/Piers</label>
                        <br>
                        <select id="350" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="351" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Services</label>
                        <br>
                        <select id="352" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ventilation/Damp</label>
                        <br>
                        <select id="353" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>


                </div>
                <br>
                <div class="row">
                    <div class="col-sm">
                        <label>Underside of Floor</label>
                        <br>
                        <select id="355" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Framing</label>
                        <br>
                        <select id="354" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="356" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="357" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="358" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="359" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>

            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="2003" placeholder="Wall (Front)" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Structure/Finish</label>
                        <br>
                        <select id="360" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Eaves</label>
                        <br>
                        <select id="361" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Gutter Downpipe</label>
                        <br>
                        <select id="362" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3000" placeholder="Other" class="form-control" type="text">
                        <select id="3001" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Sub-Floor Vents</label>
                        <br>
                        <select id="363" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Doors/Windows</label>
                        <br>
                        <select id="364" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Balcony/Deck</label>
                        <br>
                        <select id="365" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3002" placeholder="Other" class="form-control" type="text">
                        <select id="3003" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="2004" placeholder="Wall (Rear)" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Structure/Finish</label>
                        <br>
                        <select id="370" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Eaves</label>
                        <br>
                        <select id="371" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Gutter Downpipe</label>
                        <br>
                        <select id="372" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3004" placeholder="Other" class="form-control" type="text">
                        <select id="3005" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Sub-Floor Vents</label>
                        <br>
                        <select id="373" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Doors/Windows</label>
                        <br>
                        <select id="374" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Balcony/Deck</label>
                        <br>
                        <select id="375" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3006" placeholder="Other" class="form-control" type="text">
                        <select id="3007" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="2005" placeholder="Wall (Left)" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Structure/Finish</label>
                        <br>
                        <select id="380" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Eaves</label>
                        <br>
                        <select id="381" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Gutter Downpipe</label>
                        <br>
                        <select id="382" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3008" placeholder="Other" class="form-control" type="text">
                        <select id="3009" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Sub-Floor Vents</label>
                        <br>
                        <select id="383" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Doors/Windows</label>
                        <br>
                        <select id="384" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Balcony/Deck</label>
                        <br>
                        <select id="385" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3010" placeholder="Other" class="form-control" type="text">
                        <select id="3011" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="2006" placeholder="Wall (Right)" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Structure/Finish</label>
                        <br>
                        <select id="390" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Eaves</label>
                        <br>
                        <select id="391" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Gutter Downpipe</label>
                        <br>
                        <select id="392" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3012" placeholder="Other" class="form-control" type="text">
                        <select id="3013" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Sub-Floor Vents</label>
                        <br>
                        <select id="393" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Doors/Windows</label>
                        <br>
                        <select id="394" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Balcony/Deck</label>
                        <br>
                        <select id="395" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="3014" placeholder="Other" class="form-control" type="text">
                        <select id="3015" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <!--<div class="container" style="text-align: center">-->
            <!--<button onclick="morePropertyExteriorWall()" id="morePropertyExteriorWallButton">Add More Wall</button>-->
            <!--<br>-->
            <!--<br>-->
            <!--</div>-->

            <div id="PropertyExteriorWall" style="display: none">
                <div class="form-group">
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input id="2007" placeholder="Wall #1" class="form-control" type="text">
                        </div>
                        <!--old id: ExteriorWall1-->
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Structure/Finish</label>
                            <br>
                            <select id="400" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Eaves</label>
                            <br>
                            <select id="401" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Gutter Downpipe</label>
                            <br>
                            <select id="402" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3016" placeholder="Other" class="form-control" type="text">
                            <select id="3017" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Sub-Floor Vents</label>
                            <br>
                            <select id="403" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Doors/Windows</label>
                            <br>
                            <select id="404" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Balcony/Deck</label>
                            <br>
                            <select id="405" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3018" placeholder="Other" class="form-control" type="text">
                            <select id="3019" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="form-group">
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input id="2008" placeholder="Wall #2" class="form-control" type="text">
                        </div>
                        <!--old id: ExteriorWall2-->
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Structure/Finish</label>
                            <br>
                            <select id="410" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Eaves</label>
                            <br>
                            <select id="411" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Gutter Downpipe</label>
                            <br>
                            <select id="412" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3020" placeholder="Other" class="form-control" type="text">
                            <select id="3021" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Sub-Floor Vents</label>
                            <br>
                            <select id="413" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Doors/Windows</label>
                            <br>
                            <select id="414" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Balcony/Deck</label>
                            <br>
                            <select id="415" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3022" placeholder="Other" class="form-control" type="text">
                            <select id="3023" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="form-group">
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input id="2009" placeholder="Wall #3" class="form-control" type="text">
                        </div>
                        <!--id:ExteriorWall3-->
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Structure/Finish</label>
                            <br>
                            <select id="420" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Eaves</label>
                            <br>
                            <select id="421" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Gutter Downpipe</label>
                            <br>
                            <select id="422" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3024" placeholder="Other" class="form-control" type="text">
                            <select id="3025" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Sub-Floor Vents</label>
                            <br>
                            <select id="423" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Doors/Windows</label>
                            <br>
                            <select id="424" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Balcony/Deck</label>
                            <br>
                            <select id="425" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3026" placeholder="Other" class="form-control" type="text">
                            <select id="3027" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="form-group">
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input id="2010" placeholder="Wall #4" class="form-control" type="text">
                        </div>
                        <!--old id: ExteriorWall4-->
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Structure/Finish</label>
                            <br>
                            <select id="430" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Eaves</label>
                            <br>
                            <select id="431" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Gutter Downpipe</label>
                            <br>
                            <select id="432" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3028" placeholder="Other" class="form-control" type="text">
                            <select id="3029" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Sub-Floor Vents</label>
                            <br>
                            <select id="433" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Doors/Windows</label>
                            <br>
                            <select id="434" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Balcony/Deck</label>
                            <br>
                            <select id="435" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="3030" placeholder="Other" class="form-control" type="text">
                            <select id="3031" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <div style="text-align: center">
                <button onclick="morePropertyExteriorWall()" id="morePropertyExteriorWallButton" type="button" class="btn btn-info">Add More Wall</button>
                <br>
                <br>
            </div>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="Verandas1" placeholder="Verandah #1" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Steps</label>
                        <br>
                        <select id="440" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="441" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Roof/Ceiling</label>
                        <br>
                        <select id="442" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Doors/Windows</label>
                        <br>
                        <select id="443" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <br>
                <div class="row">
                    <div class="col-sm">
                        <label>Floor Structure</label>
                        <br>
                        <select id="444" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Sub-Floor Vents</label>
                        <br>
                        <select id="445" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Posts/Balustrade</label>
                        <br>
                        <select id="446" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="447" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="448" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="Verandas2" placeholder="Verandah #2" class="form-control" type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Steps</label>
                        <br>
                        <select id="450" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="451" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Roof/Ceiling</label>
                        <br>
                        <select id="452" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Doors/Windows</label>
                        <br>
                        <select id="453" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <br>
                <div class="row">
                    <div class="col-sm">
                        <label>Floor Structure</label>
                        <br>
                        <select id="454" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Sub-Floor Vents</label>
                        <br>
                        <select id="455" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Posts/Balustrade</label>
                        <br>
                        <select id="456" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="457" placeholder="Put others here..." class="form-control gray" type="text">
                        <select id="458" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <!--<div class="container" style="text-align: center">-->
            <!--<button onclick="morePropertyExteriorVerandas()" id="morePropertyExteriorVerandasButton">Add More Verandas-->
            <!--</button>-->
            <!--<br><br>-->
            <!--</div>-->
            <div id="PropertyExteriorVerandas" style="display: none;padding: 0">
                <div class="form-group">
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input id="Verandas3" placeholder="Verandah #3" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Steps</label>
                            <br>
                            <select id="460" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Walls</label>
                            <br>
                            <select id="461" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Roof/Ceiling</label>
                            <br>
                            <select id="462" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Doors/Windows</label>
                            <br>
                            <select id="463" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm">
                            <label>Floor Structure</label>
                            <br>
                            <select id="464" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Sub-Floor Vents</label>
                            <br>
                            <select id="465" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Posts/Balustrade</label>
                            <br>
                            <select id="466" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="467" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="468" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="form-group">
                    <div class="row form-group">
                        <div class="col-sm-3">
                            <input id="Verandas4" placeholder="Verandah #4" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Steps</label>
                            <br>
                            <select id="470" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Walls</label>
                            <br>
                            <select id="471" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Roof/Ceiling</label>
                            <br>
                            <select id="472" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Doors/Windows</label>
                            <br>
                            <select id="473" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-sm">
                            <label>Floor Structure</label>
                            <br>
                            <select id="474" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Sub-Floor Vents</label>
                            <br>
                            <select id="475" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Posts/Balustrade</label>
                            <br>
                            <select id="476" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="477" placeholder="Put others here..." class="form-control gray" type="text">
                            <select id="478" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
            <div style="text-align: center">
                <button onclick="morePropertyExteriorVerandas()" id="morePropertyExteriorVerandasButton" type="button" class="btn btn-info">Add More Verandahs
                </button>
                <br>
                <br>
            </div>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="ExteriorOther1" placeholder="Other..." class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <input id="500" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="501" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="502" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="503" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="504" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="505" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <input id="506" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="507" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="508" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="509" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="510" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="511" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row form-group">
                    <div class="col-sm-3">
                        <input id="ExteriorOther2" placeholder="Other..." class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <input id="520" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="521" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="522" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="523" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="524" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="525" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <input id="526" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="527" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="528" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="529" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="530" placeholder="Type" class="form-control" type="text">
                        <br>
                        <select id="531" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!--Exterior Images-->
        <div class="container">
            <table id="AccessmentExteriorImages">
                <tr>
                    <th style="width: 20%;font-weight: normal">
                        <label>Images (max 6 images) </label>
                        <br>
                        <input type="button" value="Upload Image" class="uploadImageButton" onclick="AssessmentExteriorUploadImages()">
                        <input type="file" id="AssessmentExteriorUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
                    </th>

                    <th class="container">
                        <div id="AccessmentExteriorImagesContainer" class="row"></div>
                        <!-- <div class="row form-group">
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentExteriorImage0" src="#" alt="Image1" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentExteriorImageText0" style="width:265px;height:10px; display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentExteriorRemoveButton0" onclick="RemoveAssessmentExteriorImage0()" style="display: none ; width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentExteriorImageButton0" onclick="AddAssessmentExteriorImage0()" style="width:265px;display: none ">
                                    <input type="file" id="AssessmentExteriorUploadImage0" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                    <br>
                                </div>

                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentExteriorImage1" src="#" alt="Image2" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentExteriorImageText1" style="width:265px;height:10px ;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentExteriorRemoveButton1" onclick="RemoveAssessmentExteriorImage1()" style="width:265px;display: none ">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentExteriorImageButton1" onclick="AddAssessmentExteriorImage1()" style="width:265px;display: none ">
                                    <input type="file" id="AssessmentExteriorUploadImage1" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>

                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentExteriorImage2" src="#" alt="Image3" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentExteriorImageText2" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentExteriorRemoveButton2" onclick="RemoveAssessmentExteriorImage2()" style="display:none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentExteriorImageButton2" onclick="AddAssessmentExteriorImage2()" style="width:265px;display: none ">
                                    <input type="file" id="AssessmentExteriorUploadImage2" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentExteriorImage3" src="#" alt="Image4" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image4" placeholder="name" id="AssessmentExteriorImageText3" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentExteriorRemoveButton3" onclick="RemoveAssessmentExteriorImage3()" style="display: none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentExteriorImageButton3" onclick="AddAssessmentExteriorImage3()" style="width:265px;display: none ">
                                    <input type="file" id="AssessmentExteriorUploadImage3" class="inputImage" style="display: none">
                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentExteriorImage4" src="#" alt="Image5" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image5" placeholder="name" id="AssessmentExteriorImageText4" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentExteriorRemoveButton4" onclick="RemoveAssessmentExteriorImage4()" style="display:none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentExteriorImageButton4" onclick="AddAssessmentExteriorImage4()" style="width:265px;display: none ">
                                    <input type="file" id="AssessmentExteriorUploadImage4" class="inputImage" style="display: none">

                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentExteriorImage5" src="#" alt="Image6" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image5" placeholder="name" id="AssessmentExteriorImageText5" style="width:265px;height: 10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentExteriorRemoveButton5" onclick="RemoveAssessmentExteriorImage5()" style="display:none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentExteriorImageButton5" onclick="AddAssessmentExteriorImage5()" style="width:265px;display:none ">
                                    <input type="file" id="AssessmentExteriorUploadImage5" class="inputImage" style="display: none">
                                </div>
                            </form>
                        </div> -->
                    </th>
                </tr>
            </table>
        </div>

        <!--Property Exterior Notes -->
        <div class="container">
            <hr>
            <button type="button" class="btn btn-primary" style="margin:10px 0 10px 0" onclick="addAccessLimitation('AssessmentPropertyExteriorNotesTable','AssessmentPropertyExteriorLimitationSelect','AssessmentPropertyExteriorLimitationNote')">Add One Access Limitation</button>
            <table id="AssessmentPropertyExteriorNotesTable">
                <tr>
                    <td class="sectionSubHead">Access Limitations</td>
                    <td class="sectionSubHead" width="650px">Access Notes:</td>
                </tr>
                <tr>
                    <td height="30%" >
                        <select title="Limitation Select" id="AssessmentPropertyExteriorLimitationSelect0">
                            <option value="Reasonably Accessible">Reasonably Accessible</option>
                            <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                            <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety Hazard</option>
                            <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                            <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard </option>
                        </select>
                    </td>
                    <td height="30%">
                        <textarea class="form-control" style="height:90px" title="AssessmentSiteLimitationNote" id="AssessmentPropertyExteriorLimitationNote0"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sectionSubHead">Major and Serious Structural Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentPropertyExteriorMajorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input type="text" id="assessmentPropertyExteriorMajorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sectionSubHead">Maintenance Items and Minor Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentPropertyExteriorMinorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input type="text" id="assessmentPropertyExteriorMinorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label class="sectionSubHead">General Notes:</label>
                        <br>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="assessmentPropertyExteriorGeneralNotes" class="form-control" title="generalNotes"></textarea>
                    </td>
                </tr>
            </table>
        </div>


        <!--Property Interior Living Areas-->
        <div class="container">
            <h2 class="content-head text-center firstH1">Property Interior - Living Areas</h2>
            <br>
        </div>

        <div class="container">
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="600" placeholder="Entry/Passage" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="601" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="602" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="603" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="604" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Cupboards</label>
                        <br>
                        <select id="605" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="606" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="607" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="608" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="609" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="610" placeholder="Living/Dining" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="611" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="612" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="613" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="614" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Cupboards</label>
                        <br>
                        <select id="615" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="616" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="617" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="618" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="619" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>

            <!--<div style="text-align: center">-->
            <!--<button onclick="moreLivingAreaRooms()" id="moreLivingAreaRoomButton">Add More Room</button>-->
            <!--<br><br>-->
            <!--</div>-->

            <div id="LivingAreaRooms" style="display: none;padding: 0">
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-3 form-group">
                            <input id="620" placeholder="Study / Office" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Floor Structure/Finish</label>
                            <br>
                            <select id="621" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Ceiling</label>
                            <br>
                            <select id="622" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Walls</label>
                            <br>
                            <select id="623" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Electrics</label>
                            <br>
                            <select id="624" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Cupboards</label>
                            <br>
                            <select id="625" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Windows/Doors</label>
                            <br>
                            <select id="626" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Dampness</label>
                            <br>
                            <select id="627" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="628" placeholder="Other" class="form-control" type="text">
                            <br>
                            <select id="629" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-3 form-group">
                            <input id="630" placeholder="Other Room #1" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Floor Structure/Finish</label>
                            <br>
                            <select id="631" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Ceiling</label>
                            <br>
                            <select id="632" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Walls</label>
                            <br>
                            <select id="633" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Electrics</label>
                            <br>
                            <select id="634" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Cupboards</label>
                            <br>
                            <select id="635" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Windows/Doors</label>
                            <br>
                            <select id="636" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Dampness</label>
                            <br>
                            <select id="637" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="638" placeholder="Other" class="form-control" type="text">
                            <br>
                            <select id="639" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-3 form-group">
                            <input id="640" placeholder="Other Room #2" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Floor Structure/Finish</label>
                            <br>
                            <select id="641" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Ceiling</label>
                            <br>
                            <select id="642" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Walls</label>
                            <br>
                            <select id="643" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Electrics</label>
                            <br>
                            <select id="644" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Cupboards</label>
                            <br>
                            <select id="645" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Windows/Doors</label>
                            <br>
                            <select id="646" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Dampness</label>
                            <br>
                            <select id="647" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="648" placeholder="Other" class="form-control" type="text">
                            <br>
                            <select id="649" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-3 form-group">
                            <input id="650" placeholder="Other Room #3" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Floor Structure/Finish</label>
                            <br>
                            <select id="651" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Ceiling</label>
                            <br>
                            <select id="652" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Walls</label>
                            <br>
                            <select id="653" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Electrics</label>
                            <br>
                            <select id="654" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Cupboards</label>
                            <br>
                            <select id="655" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Windows/Doors</label>
                            <br>
                            <select id="656" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Dampness</label>
                            <br>
                            <select id="657" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="658" placeholder="Other" class="form-control" type="text">
                            <br>
                            <select id="659" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="form-group">
                    <div class="row">
                        <div class="col-sm-3 form-group">
                            <input id="660" placeholder="Other Room #4" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Floor Structure/Finish</label>
                            <br>
                            <select id="661" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Ceiling</label>
                            <br>
                            <select id="662" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Walls</label>
                            <br>
                            <select id="663" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Electrics</label>
                            <br>
                            <select id="664" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <label>Cupboards</label>
                            <br>
                            <select id="665" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Windows/Doors</label>
                            <br>
                            <select id="666" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <label>Dampness</label>
                            <br>
                            <select id="667" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="668" placeholder="Other" class="form-control" type="text">
                            <br>
                            <select id="669" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
            <div style="text-align: center">
                <button onclick="moreLivingAreaRooms()" id="moreLivingAreaRoomButton" type="button" class="btn btn-info">Add More Room</button>
                <br>
                <br>
            </div>
            <div class="form-group" id="LivingAreaStair1">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="670" placeholder="Stairs" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Structure</label>
                        <br>
                        <select id="671" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Floor Finish</label>
                        <br>
                        <select id="672" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Balustrade</label>
                        <br>
                        <select id="673" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Underside</label>
                        <br>
                        <select id="674" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>

            <!--<div style="text-align: center">-->
            <!--<button onclick="moreLivingAreaStair()" id="moreLivingAreaStairButton">Add One Stair</button>-->
            <!--<br><br>-->
            <!--</div>-->

            <div class="form-group" id="LivingAreaStair2" style="display: none">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="675" placeholder="Optional stair" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Structure</label>
                        <br>
                        <select id="676" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Floor Finish</label>
                        <br>
                        <select id="677" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Balustrade</label>
                        <br>
                        <select id="678" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Underside</label>
                        <br>
                        <select id="679" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <hr>
            </div>

            <div style="text-align: center">
                <button onclick="moreLivingAreaStair()" id="moreLivingAreaStairButton" type="button" class="btn btn-info">Add One Stair</button>
                <br>
                <br>
            </div>

            <div class="form-group" id="LivingAreaKitchen1">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="700" placeholder="Kitchen" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="701" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="702" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="703" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="704" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards</label>
                        <br>
                        <select id="705" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="706" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="707" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Sink/Water Pressure</label>
                        <br>
                        <select id="708" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Splashback</label>
                        <br>
                        <select id="709" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bench-top</label>
                        <br>
                        <select id="710" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Exhaust/Rangehood</label>
                        <br>
                        <select id="711" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Stove/Cooktop/Oven</label>
                        <br>
                        <select id="712" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Dishwasher</label>
                        <br>
                        <select id="713" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="714" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="715" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="716" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="717" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="718" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="719" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>

            <!--<div style="text-align: center">-->
            <!--<button onclick="moreLivingAreaKitchen()" id="moreLivingAreaKitchenButton">Add One Kitchen</button>-->
            <!--<br><br>-->
            <!--</div>-->

            <div class="form-group" id="LivingAreaKitchen2" style="display: none">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="800" placeholder="Kitchen #1" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="801" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="802" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="803" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="804" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards</label>
                        <br>
                        <select id="805" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="806" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="807" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Sink/Water Pressure</label>
                        <br>
                        <select id="808" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Splashback</label>
                        <br>
                        <select id="809" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bench-top</label>
                        <br>
                        <select id="810" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Exhaust/Rangehood</label>
                        <br>
                        <select id="811" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Stove/Cooktop/Oven</label>
                        <br>
                        <select id="812" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Dishwasher</label>
                        <br>
                        <select id="813" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="814" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="815" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="816" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="817" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="818" placeholder="Other" class="form-control" type="text">
                        <br>
                        <select id="819" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <div style="text-align: center">
                <button onclick="moreLivingAreaKitchen()" id="moreLivingAreaKitchenButton" type="button" class="btn btn-info">Add One Kitchen</button>
                <br>
                <br>
            </div>
            <hr>
        </div>
        <!--Interior Living  Images-->
        <div class="container">
            <table id="AccessmentInteriorLivingImages">
                <tr>
                    <th style="width: 20%;font-weight: normal">
                        <label>Images (max 6 images) </label>
                        <br>
                        <input type="button" id="get_image" value="Upload Image" class="uploadImageButton" onclick="AssessmentInteriorLivingUploadImages()">
                        <input type="file" id="AssessmentInteriorLivingUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
                    </th>
                    <th>
                        <div id="AccessmentInteriorLivingImagesContainer" class="row"></div>
                    </th>
                    <!-- <div class="row form-group">
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorLivingImage0" src="#" alt="Image1" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorLivingImageText0" style="width:265px;height:10px; display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorLivingRemoveButton0" onclick="RemoveAssessmentInteriorLivingImage0()"
                                        style="display:none ; width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorLivingImageButton0" onclick="AddAssessmentInteriorLivingImage0()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorLivingUploadImage0" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                    <br>
                                </div>

                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorLivingImage1" src="#" alt="Image2" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorLivingImageText1" style="width:265px;height:10px ;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorLivingRemoveButton1" onclick="RemoveAssessmentInteriorLivingImage1()"
                                        style="width:265px;display: none ">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorLivingImageButton1" onclick="AddAssessmentInteriorLivingImage1()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorLivingUploadImage1" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>

                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorLivingImage2" src="#" alt="Image3" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorLivingImageText2" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorLivingRemoveButton2" onclick="RemoveAssessmentInteriorLivingImage2()"
                                        style="display:none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorLivingImageButton2" onclick="AddAssessmentInteriorLivingImage2()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorLivingUploadImage2" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorLivingImage3" src="#" alt="Image4" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image4" placeholder="name" id="AssessmentInteriorLivingImageText3" style="width:265px;height: 10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorLivingRemoveButton3" onclick="RemoveAssessmentInteriorLivingImage3()"
                                        style="display: none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorLivingImageButton3" onclick="AddAssessmentInteriorLivingImage3()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorLivingUploadImage3" class="inputImage" style="display: none">
                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorLivingImage4" src="#" alt="Image5" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image5" placeholder="name" id="AssessmentInteriorLivingImageText4" style="width:265px;height: 10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorLivingRemoveButton4" onclick="RemoveAssessmentInteriorLivingImage4()"
                                        style="display: none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorLivingImageButton4" onclick="AddAssessmentInteriorLivingImage4()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorLivingUploadImage4" class="inputImage" style="display: none">

                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorLivingImage5" src="#" alt="Image6" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image5" placeholder="name" id="AssessmentInteriorLivingImageText5" style="width:265px;height: 10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorLivingRemoveButton5" onclick="RemoveAssessmentInteriorLivingImage5()"
                                        style="display: none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorLivingImageButton5" onclick="AddAssessmentInteriorLivingImage5()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorLivingUploadImage5" class="inputImage" style="display: none">
                                </div>
                            </form>
                        </div> -->

                </tr>
            </table>
        </div>

        <!--Property Interior Bedroom Areas-->
        <div class="container">
            <h2 class="content-head text-center firstH1">Property Interior - Bedroom Areas</h2>
            <br>
        </div>

        <div class="container">
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="850" placeholder="Bedroom #1" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="851" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="852" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="853" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Robes</label>
                        <br>
                        <select id="854" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="855" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="856" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="857" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="858" placeholder="Others" class="form-control gray" type="text">
                        <select id="859" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <!--<div class="container" style="text-align: center">-->
        <!--<button onclick="moreBedrooms()" id="moreBedroomsButton">Add More Bedrooms</button>-->
        <!--<br><br>-->
        <!--</div>-->

        <div class="container" id="BedroomAreasMoreRooms" style="display: none">
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="860" placeholder="Bedroom #2" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="861" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="862" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="863" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Robes</label>
                        <br>
                        <select id="864" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="865" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="866" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="867" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="868" placeholder="Others" class="form-control gray" type="text">
                        <select id="869" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="870" placeholder="Bedroom #3" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="871" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="872" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="873" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Robes</label>
                        <br>
                        <select id="874" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="875" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="876" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="877" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="878" placeholder="Others" class="form-control gray" type="text">
                        <select id="879" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="880" placeholder="Bedroom #4" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="881" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="882" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="883" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Robes</label>
                        <br>
                        <select id="884" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="885" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="886" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="887" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="888" placeholder="Others" class="form-control gray" type="text">
                        <select id="889" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="890" placeholder="Bedroom #5" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="891" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="892" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="893" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Robes</label>
                        <br>
                        <select id="894" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="895" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="896" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="897" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="898" placeholder="Others" class="form-control gray" type="text">
                        <select id="899" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="900" placeholder="Bedroom #6" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="901" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="902" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="903" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Robes</label>
                        <br>
                        <select id="904" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="905" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="906" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="907" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="908" placeholder="Others" class="form-control gray" type="text">
                        <select id="909" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="text-align: center">
            <button onclick="moreBedrooms()" id="moreBedroomsButton" type="button" class="btn btn-info">Add More Bedrooms</button>
            <br>
            <br>
        </div>
        <!--Interior Bedroom Images-->
        <div class="container">
            <table id="AccessmentInteriorBedroomImages">
                <tr>
                    <th style="width: 20%;font-weight: normal">
                        <label>Images (max 6 images) </label>
                        <br>
                        <input type="button" value="Upload Image" class="uploadImageButton" onclick="AssessmentInteriorBedroomUploadImages()">
                        <input type="file" id="AssessmentInteriorBedroomUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
                    </th>
                    <th>
                        <div id="AccessmentInteriorBedroomImagesContainer" class="row"></div>
                        <!-- <div class="row form-group">

                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorBedroomImage0" src="#" alt="Image1" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorBedroomImageText0" style="width:265px;height:10px; display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorBedroomRemoveButton0" onclick="RemoveAssessmentInteriorBedroomImage0()"
                                        style="display: none ; width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorBedroomImageButton0" onclick="AddAssessmentInteriorBedroomImage0()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorBedroomUploadImage0" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                    <br>
                                </div>

                            </form>

                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorBedroomImage1" src="#" alt="Image2" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorBedroomImageText1" style="width:265px;height:10px ;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorBedroomRemoveButton1" onclick="RemoveAssessmentInteriorBedroomImage1()"
                                        style="width:265px;display: none ">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorBedroomImageButton1" onclick="AddAssessmentInteriorBedroomImage1()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorBedroomUploadImage1" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>

                            </form>

                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorBedroomImage2" src="#" alt="Image3" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorBedroomImageText2" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorBedroomRemoveButton2" onclick="RemoveAssessmentInteriorBedroomImage2()"
                                        style="display:none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorBedroomImageButton2" onclick="AddAssessmentInteriorBedroomImage2()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorBedroomUploadImage2" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorBedroomImage3" src="#" alt="Image4" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image4" placeholder="name" id="AssessmentInteriorBedroomImageText3" style="width:265px;height: 10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorBedroomRemoveButton3" onclick="RemoveAssessmentInteriorBedroomImage3()"
                                        style="display:none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorBedroomImageButton3" onclick="AddAssessmentInteriorBedroomImage3()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorBedroomUploadImage3" class="inputImage" style="display: none">
                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorBedroomImage4" src="#" alt="Image5" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image5" placeholder="name" id="AssessmentInteriorBedroomImageText4" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorBedroomRemoveButton4" onclick="RemoveAssessmentInteriorBedroomImage4()"
                                        style="display: none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorBedroomImageButton4" onclick="AddAssessmentInteriorBedroomImage4()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorBedroomUploadImage4" class="inputImage" style="display: none">

                                </div>
                            </form>

                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorBedroomImage5" src="#" alt="Image6" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image5" placeholder="name" id="AssessmentInteriorBedroomImageText5" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorBedroomRemoveButton5" onclick="RemoveAssessmentInteriorBedroomImage5()"
                                        style="display: none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorBedroomImageButton5" onclick="AddAssessmentInteriorBedroomImage5()"
                                        style="width:265px;display:none">
                                    <input type="file" id="AssessmentInteriorBedroomUploadImage5" class="inputImage" style="display: none">
                                </div>
                            </form>
                        </div> -->

                    </th>
                </tr>
            </table>
            <hr>
        </div>

        <!--Property Interior Notes -->
        <div class="container">
            <hr>
            <button type="button" class="btn btn-primary" style="margin:10px 0 10px 0" onclick="addAccessLimitation('AssessmentPropertyInteriorNotesTable','AssessmentPropertyInteriorLimitationSelect','AssessmentPropertyInteriorLimitationNote')">Add One Access Limitation</button>
            <table id="AssessmentPropertyInteriorNotesTable">
                <tr>
                    <td class="sectionSubHead">Access Limitations</td>
                    <td class="sectionSubHead" width="650px">Access Notes:</td>
                </tr>
                <tr>
                    <td height="30%">
                        <select title="Limitation Select" id="AssessmentPropertyInteriorLimitationSelect0">
                            <option value="Reasonably Accessible">Reasonably Accessible</option>
                            <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                            <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety Hazard</option>
                            <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                            <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard </option>
                        </select>
                    </td>
                    <td height="30%">
                        <textarea class="form-control" style="height:90px" title="AssessmentSiteLimitationNote" id="AssessmentPropertyInteriorLimitationNote0"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sectionSubHead">Major and Serious Structural Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentPropertyInteriorMajorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input type="text" id="assessmentPropertyInteriorMajorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <!-- <tr>
                    <td>
                        <label class="sectionSubHead" style="color: black">Professional & Trade Recommendations:</label>
                        <select id="AssessmentPropertyInteriorMajorSelect" style="width:100%" title="recommendationSelect">
                            <optgroup label="Architects">
                                <option value="AR">AR</option>
                            </optgroup>
                            <optgroup label="Building Contractors">
                                <option value="BC">BC</option>
                            </optgroup>
                            <optgroup label="Brick Layers">
                                <option value="BR">BR</option>
                            </optgroup>
                            <optgroup label="Concrete Contractors">
                                <option value="CC">CC</option>
                            </optgroup>
                            <optgroup label="Carpenters and Joiners">
                                <option value="CJ">CJ</option>
                            </optgroup>
                            <optgroup label="Cabinet Makers">
                                <option value="CM">CM</option>
                            </optgroup>
                            <optgroup label="Damp Houses">
                                <option value="DH">DH</option>
                            </optgroup>
                            <optgroup label="Drainers">
                                <option value="DR">DR</option>
                            </optgroup>
                            <optgroup label="Electrical Contractors">
                                <option value="EL">EL</option>
                            </optgroup>
                            <optgroup label="Excavating Contractors">
                                <option value="EX">EX</option>
                            </optgroup>
                            <optgroup label="Fencing Contractors">
                                <option value="FC">FC</option>
                            </optgroup>
                            <optgroup label="Glass Merch / Glazier">
                                <option value="GL">GL</option>
                            </optgroup>
                            <optgroup label="Home Maint / Repair">
                                <option value="HM">HM</option>
                            </optgroup>
                            <optgroup label="House Restump / Reblock">
                                <option value="HR">HR</option>
                            </optgroup>
                            <optgroup label="Insulation Contractors">
                                <option value="IC">IC</option>
                            </optgroup>
                            <optgroup label="Landscape Architects">
                                <option value="LA">LA</option>
                            </optgroup>
                            <optgroup label="Landscape Gardeners & Contractors">
                                <option value="LG">LG</option>
                            </optgroup>
                            <optgroup label="Underpinning Services">
                                <option value="UP">UP</option>
                            </optgroup>
                            <optgroup label="Pest Control">
                                <option value="PC">PC</option>
                            </optgroup>
                            <optgroup label="Painters & Decorators">
                                <option value="PD">PD</option>
                            </optgroup>
                            <optgroup label="Plumbers & Gas fitters">
                                <option value="PG">PG</option>
                            </optgroup>
                            <optgroup label="Plasterers">
                                <option value="PL">PL</option>
                            </optgroup>
                            <optgroup label="Paving - Various">
                                <option value="PV">PV</option>
                            </optgroup>
                            <optgroup label="Roof Const / Repair / Clean">
                                <option value="RC">RC</option>
                            </optgroup>
                            <optgroup label="Structural Engineers">
                                <option value="SE">SE</option>
                            </optgroup>
                            <optgroup label="Tile Layers - Wall / Floor">
                                <option value="TL">TL</option>
                            </optgroup>
                            <optgroup label="Tilers & Slaters">
                                <option value="TS">TS</option>
                            </optgroup>
                        </select>
                        <button type="button" class="btn btn-primary btn-sm" onclick="addRecommendations('assessmentPropertyInteriorMajorRecommendations','AssessmentPropertyInteriorMajorSelect')"
                            style="margin-top: 10px">Add</button>
                    </td>
                    <td>
                        <input id="assessmentPropertyInteriorMajorRecommendations" readonly type="text" placeholder="Recommendations will be displayed here"
                            title="recommendations" style="width: 100%;border: 0;" />
                        <button type="button" class="btn btn-danger btn-sm" onclick="clearRecommendation('assessmentPropertyInteriorMajorRecommendations')"
                            style="margin-top:10px">Clear</button>
                    </td>
                </tr> -->
                <tr>
                    <td colspan="2" class="sectionSubHead">Maintenance Items and Minor Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentPropertyInteriorMinorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input type="text" id="assessmentPropertyInteriorMinorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <!-- <tr>
                    <td>
                        <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                        <select id="AssessmentPropertyInteriorMinorSelect" style="width:100%" title="recommendationSelect">
                            <optgroup label="Architects">
                                <option value="AR">AR</option>
                            </optgroup>
                            <optgroup label="Building Contractors">
                                <option value="BC">BC</option>
                            </optgroup>
                            <optgroup label="Brick Layers">
                                <option value="BR">BR</option>
                            </optgroup>
                            <optgroup label="Concrete Contractors">
                                <option value="CC">CC</option>
                            </optgroup>
                            <optgroup label="Carpenters and Joiners">
                                <option value="CJ">CJ</option>
                            </optgroup>
                            <optgroup label="Cabinet Makers">
                                <option value="CM">CM</option>
                            </optgroup>
                            <optgroup label="Damp Houses">
                                <option value="DH">DH</option>
                            </optgroup>
                            <optgroup label="Drainers">
                                <option value="DR">DR</option>
                            </optgroup>
                            <optgroup label="Electrical Contractors">
                                <option value="EL">EL</option>
                            </optgroup>
                            <optgroup label="Excavating Contractors">
                                <option value="EX">EX</option>
                            </optgroup>
                            <optgroup label="Fencing Contractors">
                                <option value="FC">FC</option>
                            </optgroup>
                            <optgroup label="Glass Merch / Glazier">
                                <option value="GL">GL</option>
                            </optgroup>
                            <optgroup label="Home Maint / Repair">
                                <option value="HM">HM</option>
                            </optgroup>
                            <optgroup label="House Restump / Reblock">
                                <option value="HR">HR</option>
                            </optgroup>
                            <optgroup label="Insulation Contractors">
                                <option value="IC">IC</option>
                            </optgroup>
                            <optgroup label="Landscape Architects">
                                <option value="LA">LA</option>
                            </optgroup>
                            <optgroup label="Landscape Gardeners & Contractors">
                                <option value="LG">LG</option>
                            </optgroup>
                            <optgroup label="Underpinning Services">
                                <option value="UP">UP</option>
                            </optgroup>
                            <optgroup label="Pest Control">
                                <option value="PC">PC</option>
                            </optgroup>
                            <optgroup label="Painters & Decorators">
                                <option value="PD">PD</option>
                            </optgroup>
                            <optgroup label="Plumbers & Gas fitters">
                                <option value="PG">PG</option>
                            </optgroup>
                            <optgroup label="Plasterers">
                                <option value="PL">PL</option>
                            </optgroup>
                            <optgroup label="Paving - Various">
                                <option value="PV">PV</option>
                            </optgroup>
                            <optgroup label="Roof Const / Repair / Clean">
                                <option value="RC">RC</option>
                            </optgroup>
                            <optgroup label="Structural Engineers">
                                <option value="SE">SE</option>
                            </optgroup>
                            <optgroup label="Tile Layers - Wall / Floor">
                                <option value="TL">TL</option>
                            </optgroup>
                            <optgroup label="Tilers & Slaters">
                                <option value="TS">TS</option>
                            </optgroup>
                        </select>
                        <button type="button" class="btn btn-primary btn-sm" onclick="addRecommendations('assessmentPropertyInteriorMinorRecommendations','AssessmentPropertyInteriorMinorSelect')"
                            style="margin-top: 10px">Add</button>
                    </td>
                    <td>
                        <input id="assessmentPropertyInteriorMinorRecommendations" type="text" readonly placeholder="Recommendations will be displayed here"
                            title="recommendations" style="width: 100%;border: 0;" />
                        <button type="button" class="btn btn-danger btn-sm" onclick="clearRecommendation('assessmentPropertyInteriorMinorRecommendations')"
                            style="margin-top:10px">Clear</button>
                    </td>
                </tr> -->
                <tr>
                    <td colspan="2">
                        <label class="sectionSubHead">General Notes:</label>
                        <br>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="assessmentPropertyInteriorGeneralNotes" class="form-control" title="generalNotes"></textarea>
                    </td>
                </tr>
            </table>
        </div>


        <!--Property Interior Service(Wet) Areas-->
        <div class="container">
            <h2 class="content-head text-center firstH1">Property Interior - Service (Wet) Areas</h2>
            <br>
        </div>

        <div class="container">
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1000" placeholder="Bathroom #1" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1001" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1002" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1003" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1004" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1005" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1006" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1007" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1008" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1009" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1010" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bath</label>
                        <br>
                        <select id="1011" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Shower</label>
                        <br>
                        <select id="1012" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1013" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1014" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1015" placeholder="Others" class="form-control gray" type="text">
                        <select id="1016" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1017" placeholder="Others" class="form-control gray" type="text">
                        <select id="1018" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1020" placeholder="Bathroom #2" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1021" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1022" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1023" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1024" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1025" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1026" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1027" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1028" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1029" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1030" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bath</label>
                        <br>
                        <select id="1031" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Shower</label>
                        <br>
                        <select id="1032" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1033" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1034" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1035" placeholder="Others" class="form-control gray" type="text">
                        <select id="1036" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1037" placeholder="Others" class="form-control gray" type="text">
                        <select id="1038" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="container" style="text-align: center">-->
        <!--<button onclick="moreBathrooms()" id="moreBathroomsButton">Add More Bathrooms</button>-->
        <!--<br><br>-->
        <!--</div>-->

        <div class="container" style="display: none" id="ServiceAreaBathRooms">
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1040" placeholder="Bathroom #3" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1041" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1042" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1043" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1044" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1045" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1046" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1047" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1048" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1049" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1050" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bath</label>
                        <br>
                        <select id="1051" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Shower</label>
                        <br>
                        <select id="1052" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1053" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1054" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1055" placeholder="Others" class="form-control gray" type="text">
                        <select id="1056" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1057" placeholder="Others" class="form-control gray" type="text">
                        <select id="1058" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1060" placeholder="Bathroom #4" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1061" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1062" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1063" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1064" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1065" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1066" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1067" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1068" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1069" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1070" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bath</label>
                        <br>
                        <select id="1071" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Shower</label>
                        <br>
                        <select id="1072" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1073" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1074" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1075" placeholder="Others" class="form-control gray" type="text">
                        <select id="1076" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1077" placeholder="Others" class="form-control gray" type="text">
                        <select id="1078" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1080" placeholder="Bathroom #5" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1081" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1082" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1083" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1084" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1085" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1086" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1087" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1088" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1089" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1090" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bath</label>
                        <br>
                        <select id="1091" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Shower</label>
                        <br>
                        <select id="1092" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1093" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1094" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1095" placeholder="Others" class="form-control gray" type="text">
                        <select id="1096" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1097" placeholder="Others" class="form-control gray" type="text">
                        <select id="1098" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1100" placeholder="Bathroom #6" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1101" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1102" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1103" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1104" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1105" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1106" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1107" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1108" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1109" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1110" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Bath</label>
                        <br>
                        <select id="1111" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Shower</label>
                        <br>
                        <select id="1112" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1113" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1114" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1115" placeholder="Others" class="form-control gray" type="text">
                        <select id="1116" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1117" placeholder="Others" class="form-control gray" type="text">
                        <select id="1118" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="container" style="text-align: center">
            <button onclick="moreBathrooms()" id="moreBathroomsButton" type="button" class="btn btn-info">Add More Bathrooms</button>
            <br>
            <br>
        </div>

        <div class="container">
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1200" placeholder="Laundry #1" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1201" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Cupboards</label>
                        <br>
                        <select id="1202" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1203" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1204" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1206" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1207" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1208" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1209" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Tub/Sink/Splashback</label>
                        <br>
                        <select id="1205" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1210" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1211" placeholder="Others" class="form-control gray" type="text">
                        <select id="1212" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1213" placeholder="Others" class="form-control gray" type="text">
                        <select id="1214" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <!--<div class="container" style="text-align: center">-->
        <!--<button onclick="moreLaundry()" id="moreLaundryButton">Add One Laundry</button>-->
        <!--<br>-->
        <!--<br>-->
        <!--</div>-->

        <div class="container" id="ServiceAreaMoreLaundry" style="display: none;">
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1220" placeholder="Laundry #2" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1221" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Cupboards</label>
                        <br>
                        <select id="1222" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1223" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1224" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1226" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1227" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1228" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1229" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm">
                        <label>Tub/Sink/Splashback</label>
                        <br>
                        <select id="1225" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1230" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1231" placeholder="Others" class="form-control gray" type="text">
                        <select id="1232" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1233" placeholder="Others" class="form-control gray" type="text">
                        <select id="1234" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <hr>
        </div>

        <div class="container" style="text-align: center">
            <button onclick="moreLaundry()" id="moreLaundryButton" type="button" class="btn btn-info">Add One Laundry</button>
            <br>
            <br>
        </div>

        <div class="container">
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1300" placeholder="Powder Room #1" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1301" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1302" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1303" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1304" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1305" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1306" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1307" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1308" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1309" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1310" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1311" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1312" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <input id="1313" placeholder="Others" class="form-control gray" type="text">
                        <select id="1314" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1315" placeholder="Others" class="form-control gray" type="text">
                        <select id="1316" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1317" placeholder="Others" class="form-control gray" type="text">
                        <select id="1318" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1319" placeholder="Others" class="form-control gray" type="text">
                        <select id="1319a" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="container" style="text-align: center">-->
        <!--<button onclick="morePowderRooms()" id="morePowderRoomsButton">Add More Powder Rooms</button>-->
        <!--<br>-->
        <!--<br>-->
        <!--</div>-->

        <div class="container" id="ServiceAreaMorePowderRooms" style="display: none;">
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1320" placeholder="Powder Room #2" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1321" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1322" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1323" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1324" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1325" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1326" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1327" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1328" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1329" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1330" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1331" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1332" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <input id="1333" placeholder="Others" class="form-control gray" type="text">
                        <select id="1334" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1335" placeholder="Others" class="form-control gray" type="text">
                        <select id="1336" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1337" placeholder="Others" class="form-control gray" type="text">
                        <select id="1338" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1339" placeholder="Others" class="form-control gray" type="text">
                        <select id="1339a" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1340" placeholder="Powder Room #3" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Floor Structure/Finish</label>
                        <br>
                        <select id="1341" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Windows/Doors</label>
                        <br>
                        <select id="1342" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Walls</label>
                        <br>
                        <select id="1343" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Electrics</label>
                        <br>
                        <select id="1344" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Cupboards/Vanity</label>
                        <br>
                        <select id="1345" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Ceiling</label>
                        <br>
                        <select id="1346" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Dampness</label>
                        <br>
                        <select id="1347" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Basin/Splashback</label>
                        <br>
                        <select id="1348" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Exhaust/Ventilation</label>
                        <br>
                        <select id="1349" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Water Pressure</label>
                        <br>
                        <select id="1350" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Toilet Suite</label>
                        <br>
                        <select id="1351" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Mirror</label>
                        <br>
                        <select id="1352" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <input id="1353" placeholder="Others" class="form-control gray" type="text">
                        <select id="1354" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1355" placeholder="Others" class="form-control gray" type="text">
                        <select id="1356" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1357" placeholder="Others" class="form-control gray" type="text">
                        <select id="1358" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <input id="1359" placeholder="Others" class="form-control gray" type="text">
                        <select id="1359a" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="container" style="text-align: center">
            <button onclick="morePowderRooms()" id="morePowderRoomsButton" type="button" class="btn btn-info">Add More Powder Rooms</button>
            <br>
            <br>
        </div>

        <div class="container">
            <hr>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-3 form-group">
                        <input id="1400" placeholder="Services" class="form-control" type="text">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-sm">
                        <label>Heater/Unit</label>
                        <br>
                        <select id="1401" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value='✔'>✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Smoke Detector/s</label>
                        <br>
                        <select id="1402" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Cooler/Unit</label>
                        <br>
                        <select id="1403" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="col-sm">
                        <label>Hot Water Service</label>
                        <br>
                        <select id="1404" style="width:100%" title="Select">
                            <optgroup label="No Visible Significant Defect">
                                <option value="✔">✔</option>
                            </optgroup>
                            <optgroup label="Major Defect">
                                <option value="XX">XX</option>
                            </optgroup>
                            <optgroup label="Maintenance Item or Minor Defect">
                                <option value="X">X</option>
                            </optgroup>
                            <optgroup label="Unknown / Inaccessible / Not Tested">
                                <option value="U">U</option>
                            </optgroup>
                            <optgroup label="Not Applicable; No Such Item">
                                <option value="NA">NA</option>
                            </optgroup>
                        </select>
                    </div>

                </div>
                <div class="form-group">
                    <div class="row form-group">
                        <div class="col-sm">
                            <label>Switchboard</label>
                            <br>
                            <select id="1405" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="1406" placeholder="Type" class="form-control" type="text">
                            <br>
                            <select id="1407" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="1408" placeholder="Type" class="form-control" type="text">
                            <br>
                            <select id="1409" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="1410" placeholder="Type" class="form-control" type="text">
                            <br>
                            <select id="1411" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <input id="1412" placeholder="Type" class="form-control" type="text">
                            <br>
                            <select id="1413" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="1414" placeholder="Type" class="form-control" type="text">
                            <br>
                            <select id="1415" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="1416" placeholder="Type" class="form-control" type="text">
                            <br>
                            <select id="1417" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-sm">
                            <input id="1418" placeholder="Type" class="form-control" type="text">
                            <br>
                            <select id="1419" style="width:100%" title="Select">
                                <optgroup label="No Visible Significant Defect">
                                    <option value="✔">✔</option>
                                </optgroup>
                                <optgroup label="Major Defect">
                                    <option value="XX">XX</option>
                                </optgroup>
                                <optgroup label="Maintenance Item or Minor Defect">
                                    <option value="X">X</option>
                                </optgroup>
                                <optgroup label="Unknown / Inaccessible / Not Tested">
                                    <option value="U">U</option>
                                </optgroup>
                                <optgroup label="Not Applicable; No Such Item">
                                    <option value="NA">NA</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        </div>

        <!--Interior - Service Images-->
        <div class="container">
            <table id="AccessmentInteriorServiceImages">
                <tr>
                    <th style="width: 20%;font-weight: normal">
                        <label>Images (max 3 images) </label>
                        <br>
                        <input type="button" value="Upload Image" class="uploadImageButton" onclick="AssessmentInteriorServiceUploadImages()">
                        <input type="file" id="AssessmentInteriorServiceUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
                    </th>
                    <th>
                        <div id="AccessmentInteriorServiceImagesContainer" class="row"></div>
                        <!-- <div class="row form-group">
                            &nbsp;
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorServiceImage0" src="#" alt="Image1" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorServiceImageText0" style="width:265px;height:10px; display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorServiceRemoveButton0" onclick="RemoveAssessmentInteriorServiceImage0()"
                                        style="display: none ; width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorServiceImageButton0" onclick="AddAssessmentInteriorServiceImage0()"
                                        style="width:265px;display:none ">
                                    <input type="file" id="AssessmentInteriorServiceUploadImage0" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                    <br>
                                </div>
                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorServiceImage1" src="#" alt="Image2" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorServiceImageText1" style="width:265px;height:10px ;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorServiceRemoveButton1" onclick="RemoveAssessmentInteriorServiceImage1()"
                                        style="width:265px;display: none ">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorServiceImageButton1" onclick="AddAssessmentInteriorServiceImage1()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorServiceUploadImage1" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>

                            </form>
                            <form>
                                <div class="col-sm">
                                    <img id="AssessmentInteriorServiceImage2" src="#" alt="Image3" style="width:265px;height:265px;display: none" />
                                </div>
                                <div class="col-sm">
                                    <input type="text" name="image1" placeholder="name" id="AssessmentInteriorServiceImageText2" style="width:265px;height:10px;display: none">
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Remove" id="AssessmentInteriorServiceRemoveButton2" onclick="RemoveAssessmentInteriorServiceImage2()"
                                        style="display:none;width:265px">
                                    <br>
                                </div>
                                <div class="col-sm">
                                    <input type="button" value="Add" id="AddAssessmentInteriorServiceImageButton2" onclick="AddAssessmentInteriorServiceImage2()"
                                        style="width:265px;display: none ">
                                    <input type="file" id="AssessmentInteriorServiceUploadImage2" class="inputImage" accept="image/x-png,image/jpeg" style="display: none">
                                </div>
                            </form>
                        </div> -->

                    </th>
                </tr>
            </table>
        </div>


        <!--Interior -  Service Area  Notes -->
        <div class="container">
            <hr>
            <button type="button" class="btn btn-primary" style="margin:10px 0 10px 0" onclick="addAccessLimitation('AssessmentServiceNotesTable','AssessmentServiceLimitationSelect','AssessmentServiceLimitationNote')">Add One Access Limitation</button>
            <table id="AssessmentServiceNotesTable">
                <tr>
                    <td class="sectionSubHead">Access Limitations</td>
                    <td class="sectionSubHead" width="650px">Access Notes:</td>
                </tr>
                <tr>
                    <td height="30%">
                        <select title="Limitation Select" id="AssessmentServiceLimitationSelect0">
                            <option value="Reasonably Accessible">Reasonably Accessible</option>
                            <option value="Partially Accessible - Obstructed">Partially Accessible - Obstructed</option>
                            <option value="Partially Accessible - Inspection Safety Hazard">Partially Accessible - Inspection Safety Hazard</option>
                            <option value="Not Accessible - Obstructed">Not Accessible - Obstructed</option>
                            <option value="Not Accessible - Inspection Safety Hazard">Not Accessible - Inspection Safety Hazard </option>
                        </select>
                    </td>
                    <td height="30%">
                        <textarea class="form-control" style="height:90px" title="AssessmentSiteLimitationNote" id="AssessmentServiceLimitationNote0"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sectionSubHead">Major and Serious Structural Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentServiceMajorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input type="text" id="assessmentServiceMajorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="sectionSubHead">Maintenance Items and Minor Defects Found:</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="AssessmentServiceMinorFound" class="form-control" title="MajorNotes"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div style="margin-bottom:20px">
                            <label class="sectionSubHead" style="color:black">Professional & Trade Recommendations:</label>
                            <input type="text" id="assessmentServiceMinorRecommendations" class="easyui-combotree" data-options=
                                        "
                                        multiple:true,
                                        multiline:true, 
                                        valueField:'text',
                                        textField:'text'
                                        " 
                                style="width:100%;height:60px;fontsize:16px"
                            >
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <label class="sectionSubHead">General Notes:</label>
                        <br>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <textarea id="assessmentServiceGeneralNotes" class="form-control" title="generalNotes"></textarea>
                    </td>
                </tr>
            </table>
        </div>


        <div class="container">
            <h2 class="content-head text-center firstH1">Attachments</h2>
            <br>
        </div>

        <div class="container">
            <hr>
            <p>
                The following selected attachments are an important part of this Report. These can be downloaded from the Archicentre Australia
                Supplementary Documents page -
                <!--suppress HtmlUnknownTarget -->
                <!--  <a href="http://www.archicentreaustralia.com.au/report_downloads/">click here</a> -->
                <a href="http://www.archicentreaustralia.com.au/report_downloads/">http://www.archicentreaustralia.com.au/report_downloads/</a> - or by referring to the Report cover email
                for downloading instructions. If you have difficulty downloading the following ticked attachments, please
                contact Archicentre Australia on 1300 13 45 13 immediately.
            </p>
        </div>

        <div class="container">
            <hr>
            <div class="row">
                <div class="col-sm">
                    <label>Property Maintenance Guide</label>
                    <select id="6000" style="width:100%" title="Attachment Select">
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
                    <select id="6001" style="width:100%" title="Attachment Select">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="NA">Not applicable, no such item</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm">
                    <label>Treatment of Dampness</label>
                    <select id="6002" style="width:100%" title="Attachment Select">
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
                    <select id="6003" style="width:100%" title="Attachment Select">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="NA">Not applicable, no such item</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm">
                    <label>Roofing & Guttering</label>
                    <select id="6004" style="width:100%" title="Attachment Select">
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
                    <select id="6005" style="width:100%" title="Attachment Select">
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
                    <select id="6006" style="width:100%" title="Attachment Select">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defect">
                            <option value="NA">Not applicable, no such item</option>
                        </optgroup>
                    </select>
                </div>
                <div class="col-sm">
                    <label>Re-stumping</label>
                    <select id="6007" style="width:100%" title="Attachment Select">
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
                    <select id="6008" style="width:100%" title="Attachment Select">
                        <optgroup label="No Visible Significant Defect">
                            <option value="√">✔</option>
                        </optgroup>
                        <optgroup label="Major Defeppct">
                            <option value="NA">Not alicable, no such item</option>
                        </optgroup>
                    </select>
                </div>
            </div>
        </div>      

        <!-- <div class="container" style="text-align:center">
  <br>
  <?php
    if (!$isuserlink)
    {
      if (SharedIsAdmin() || !$iscompleted)
      {
  ?>
        <button onclick="SaveReport()" type="button" class="btn btn-primary">Save</button>
  <?php
      }
  ?>
      <button onclick="startGenerating('preview')" type="button" class="btn btn-primary">Preview PDF</button>
  <?php
    }

    if (SharedIsAdmin() || $isuserlink)
    {
  ?>
    <button onclick="startGenerating('final')" type="button" class="btn btn-primary">Generate PDF</button>
    <?php
    }
  ?>
  <br><br><br><br>
</div> -->

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
            <br>
            <br>
            <br>
            <br>
        </div>

        <!--<script src="../JS/uploadImages.js"></script>-->
        <!--<script src="../JS/removeImages.js"></script>-->
        <script src="js/images.js"></script>
        <script src="js/loadImageJS/load-image.all.min.js"></script>
        <script src="AssessmentJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
        <script src="AssessmentJS/pdfGeneralFunctions.js?<?php echo time(); ?>"></script>
        <script src="AssessmentJS/text.js?<?php echo time(); ?>"></script>
        <script src="AssessmentJS/PDFGenerator.js?<?php echo time(); ?>"></script>
        <script src="AssessmentJS/getTableData.js?<?php echo time(); ?>"></script>
    </body>

    </html>