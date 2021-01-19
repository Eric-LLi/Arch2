<?php
require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Home Access & Service - <?php echo $bookingcode; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
        crossorigin="anonymous">
    <?php require_once("meta.php"); ?>
    <!-- Customized CSS -->
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="css/viewPDF.css">
    <!--  Import JQuery  -->
    <!--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>-->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
    <!--  Import pdfMake  -->
    <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
    <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>
    <!--Easy UI -->
    <!-- <script src="js/easyui/jquery.easyui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="js/easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="js/easyui/themes/icon.css"> </head> -->


    <body onload="onload()">
        <!--Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">ArchiCentre Task</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <!--Title-->
        <div class="container">
            <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
                <strong>Saving PDF. Please don't close this page. It will take a while</strong>
            </div>
            <h2 class="content-head text-center firstH1" style="font-size: 2rem">Home Access & Services Report</h2>
            <br>
            <p>This Report provides independent advice from a registered architect about home access & services matters as they
                relate to your dwelling.</p>
        </div>
        <!-- Details -->
        <div class="container">
            <div class="easyui-tabs" style="width:100%;height:auto" data-options="tabWidth:200">
                <!--First Tap Booking Information-->
                <div title="Booking Information" id="BInformation" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="fit:true,plain:true" style="width:inherit;height:500px;">
                        <!--Second Tap Client Details-->
                        <div id="HA_DivClientDetails" title="Client Details" data-title="Client Details" style="padding:10px;font-size: 18px">
                            <!--<form>-->
                            <div class="row">
                                <div class="col-sm-6">
                                    <label id="HA_lbClientName">Name: </label>
                                    <br>
                                    <input id="HA_ClientName" class="form-control" type="text" title="name" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
                                </div>
                                <div class="col-sm-6">
                                    <label id="HA_lbBookingNo">Booking No. : </label>
                                    <br>
                                    <input id="HA_BookingNo" class="form-control" type="text" title="bookingNo" style="margin-top: 0" value="<?php echo $bookingcode; ?>">
                                </div>
                                <div class="col-sm-6" style="margin-top:6px">
                                    <label id="HA_lbClientPhone">Phone: </label>
                                    <br>
                                    <input id="HA_ClientPhone" class="form-control" type="text" title="phone" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
                                </div>
                                <div class="col-sm-6" style="margin-top:6px">
                                    <label id="HA_lbClientMobile">Mobile</label>
                                    <br>
                                    <input id="HA_ClientMobile" class="form-control" type="text" title="phone" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
                                </div>
                               
                            </div>
                            <!--</form>-->
                        </div>
                        <!--Second Tap Property Details-->
                        <div id="HA_DivPropertyDetails" title="Property Details" data-title="Property Details" style="padding:10px; font-size: 18px">
                            <form>
                                <div class="row">
                                    <div class="col-sm">
                                        <label id="HA_lbAddress">Address of Propety: </label>
                                        <br>
                                        <input id="HA_Address" class="form-control" type="text" title="address" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label id="HA_lbSuburb">Suburb: </label>
                                        <br>
                                        <input id="HA_Suburb" class="form-control" type="text" title="suburb" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('city'); ?>">
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbState">State: </label>
                                        <br>
                                        <input id="HA_State" class="form-control" type="text" title="state" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('state'); ?>">
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbPostcode">Postcode: </label>
                                        <br>
                                        <input id="HA_Postcode" class="form-control" type="text" title="postcode" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
                                    </div>
                                </div>
                            </form>
                            <form>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label id="HA_lbDateOfAssessment">Date of Assessment: </label>
                                        <br>
                                        <input id="HA_DateOfAssessment" class="form-control" type="text" title="date" style="margin-top: 0"> </div>
                                    <div class="col-sm">
                                        <label id="HA_lbTimeOfAssessment">Time of Assessment: </label>
                                        <br>
                                        <input id="HA_TimeOfAssessment" class="form-control" type="text" title="time" style="margin-top: 0"> </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label id="HA_lbExistingUse">Existing use of Property: </label>
                                        <br>
                                        <textarea id="HA_ExistingUse" class="form-control" title="use" style="margin-top: 0;height: 70px"></textarea>
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbWeatherConditions">Weather conditions: </label>
                                        <br>
                                        <input id="HA_WeatherConditions" class="form-control" type="text" title="weather" style="margin-top: 0"> </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <label id="HA_lbVerbalSummary">Verbal summary given to: </label>
                                        <br>
                                        <input id="HA_VerbalSummary" class="form-control" type="text" title="verbal" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbDate">Date: </label>
                                        <br>
                                        <input id="HA_Date" class="form-control" type="text" title="date" style="margin-top: 0">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--Second Tap Architect Details-->
                        <div id="HA_DivArchitectDetails" title="Architect Details" data-title="Architect Details" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label id="HA_lbarchitectName">Architect: </label>
                                        <br>
                                        <input id="HA_architectName" class="form-control" type="text" title="architectName" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbregistrationNumber">Registration No. : </label>
                                        <br>
                                        <input id="HA_registrationNumber" class="form-control" type="text" title="registrationNo" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <label id="HA_lbarchitectAddress">Address: </label>
                                        <br>
                                        <input id="HA_architectAddress" class="form-control" type="text" title="architectAdd" style="margin-top: 0" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label id="HA_lbarchitectEmail">Email Address: </label>
                                        <br>
                                        <input id="HA_architectEmail" class="form-control" type="text" title="email" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbarchitectPhone">Phone: </label>
                                        <br>
                                        <input id="HA_architectPhone" class="form-control" type="text" title="phone" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label id="HA_lbarchitectRef">Referred By: </label>
                                        <br>
                                        <input id="HA_architectRef" class="form-control" type="text" title="email" style="margin-top: 0" value="">
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbarchitectEmail2">Email Address: </label>
                                        <br>
                                        <input id="HA_architectEmail2" class="form-control" type="text" title="phone" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label id="HA_lbarchitectPhone2">Phone: </label>
                                        <br>
                                        <input id="HA_architectPhone2" class="form-control" type="text" title="phone" style="margin-top: 0">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--Second Tap Details Of Advice Sought-->
                        <div id="HA_DivDetailsSought" title="Details Of Advice Sought" data-title="Details Of Advice Sought" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="20" id="HA_AdviceSought" style="height:100%;"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--First Tap Property Summary-->
                <div title="Property Summary" id="PSummary" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="plain:true" style="width:inherit;height:auto">
                        <div title="Check Home Accessment" style="padding:10px;font-size: 18px">
                            <div class="form-group">
                                <table class="table table-bordered">
                                    <tr>
                                        <td colspan="3" style="padding-bottom:0px;">
                                            <label id="HA_lbCompleteMessage" style="color:red">PLEASE COMPLETE FOR ALL HOME SERVICES ASSESSMENTS</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="align-middle">
                                            <label id="HA_lbCompleteMessage2">Has the H&ampS CHECKLIST been completed?</label>
                                        </td>
                                        <td class="align-middle">
                                            <select class="form-control" id="HA_sel1" style="width:100%">
                                                <option value="-1">Choose</option>
                                                <option value="YES">YES</option>
                                                <option value="NO">NO</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="HA_lbCompleteMessage3">If “NO” please state reason why not completed: </label>
                                            <br>
                                            <textarea class="form-control" id="HA_NocompleteComment"> </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="align-middle">
                                            <label id="HA_lbCompleteMessage4">Please state the number of DESIGNS</label>
                                        </td>
                                        <td class="align-middle">
                                            <select class="form-control" id="HA_sel2" style="width:100%">
                                                <option value="-1">Choose</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="HA_lbCompleteMessage5">Please indicate design submitted: </label>
                                            <div class="form-check">
                                                <label class="form-check-label" for="checkBox_1">
                                                    <input id="checkBox_1" type="checkbox" class="form-check-input" value="Ramp"> Ramp </label>
                                                <label class="form-check-label" for="checkBox_2">
                                                    <input id="checkBox_2" type="checkbox" class="form-check-input" value="Bathroom Modification"> Bathroom Modification </label>
                                                <label class="form-check-label" for="checkBox_3">
                                                    <input id="checkBox_3" type="checkbox" class="form-check-input" value="Platform Steps"> Platform Steps </label>
                                                <label class="form-check-label" for="checkBox_4">
                                                    <input id="checkBox_4" type="checkbox" class="form-check-input" value="Other"> Other </label>
                                            </div>
                                            <input type="text" class="form-control" id="HA_indicateText" disabled>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div id="HA_DivConstructionSummary" data-title="Construction Summary" title="Construction Summary" style="padding:10px;font-size: 18px">
                            <!--                                <form>-->
                            <div class="form-group">
                                <table id="Table_CSummary" class="table table-bordered" style="table-layout:fixed">
                                    <tr>
                                        <td colspan="4">
                                            <button type="button" class="btn btn-primary" id="Button_ConAdd">Add item</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-right:0px;">
                                            <label id="HA_lbHouseAge">House Age</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="HA_houseAge">
                                                <option value="-1">Choose</option>
                                                <option value="less than 25">Less than 25 years</option>
                                                <option value="25 to 50">25 to 50 years</option>
                                                <option value="50 to 70">50-70 years</option>
                                                <option value="75+">More than 75 years</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="HA_lbStoreys">Storeys</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="HA_Storeys">
                                                <option value="-1">Choose</option>
                                                <option value="One">One</option>
                                                <option value="Two">Two</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="HA_lbFloorStructure">Floor Structure</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="HA_FlStructure">
                                                <option value="-1">Choose</option>
                                                <option value="Concrete">Concrete</option>
                                                <option value="Timber">Timber</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="HA_lbWalls">Walls</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="HA_Walls">
                                                <option value="-1">Choose</option>
                                                <option value="W/B">W/B</option>
                                                <option value="Brick">Brick</option>
                                                <option value="B.V.">B.V.</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="HA_lbRoof">Roof</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="HA_Roof">
                                                <option value="-1">Choose</option>
                                                <option value="TCT">TCT</option>
                                                <option value="Concrete">Concrete Tile</option>
                                                <option value="Sheeting">Sheeting</option>
                                                <option value="A.C.">A.C.</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <!--                                </form>-->
                        </div>
                        <div id="HA_DivFaultSummary" title="Fault Summary" data-title="Fault Summary" style="padding:10px;font-size: 18px">
                            <!--                        <form>-->
                            <div class="form-group">
                                <table id="Table_FalSummary" class="table table-bordered" style="table-layout:fixed">
                                    <tr>
                                        <td colspan="4">
                                            <button type="button" class="btn btn-primary" id="Button_FaultAdd">Add item</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="FS_lbFault_Trip">Trip &#38; Slope</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Trip">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="FS_lbFault_Crack">Cracking</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Crack">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="FS_lbFault_Fire">Fire Hazards</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Fire">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="FS_lbFault_Stumps">Stumps/Piers</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Stumps">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="FS_lbFault_Health">Health Hazards</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Health">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="FS_lbFault_Illegal">Illegal Work</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Illegal">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="FS_lbFault_Electrics">Electrics</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Electrics">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="FS_lbFault_Timber">Timber Rot</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Timber">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="FS_lbFault_Security">Security</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Security">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="FS_lbFault_Damp">Damp/Mould</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Damp">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label id="FS_lbFault_Roof">Roof</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Roof">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                        <td>
                                            <label id="FS_lbFault_Drainage">Drainage</label>
                                        </td>
                                        <td>
                                            <select class="form-control" id="Fault_Drainage">
                                                <option value="-1">Choose</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                                <table class="table table-bordered">
                                    <tr>
                                        <td style="color:red;">
                                            <strong>Key</strong>
                                        </td>
                                        <td>√</td>
                                        <td>No visible Fault</td>
                                        <td>X</td>
                                        <td>Maintenance Item</td>
                                        <td>XX</td>
                                        <td>Serious Fault</td>
                                        <td>--</td>
                                        <td>Not Applicable</td>
                                    </tr>
                                </table>
                            </div>
                            <!--                        </form>-->
                        </div>
                    </div>
                </div>
                <!--First Tap Property Assessment-->
                <div title="Property Assessment" id="PAssessment" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="plain:true" style="width:inherit;height:auto">
                        <div id="HA_DivHSCheck" title="Health Check & Safety Check" data-title="Health Check & Safety Check" style="padding:10px;font-size: 18px">
                            <table id="Table_HSCheck" class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td colspan="4">
                                        <button type="button" class="btn btn-primary" id="Button_HSCheckAdd">Add item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="HS_lbCheck_Damp">Damp / Mould / Ventilation</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Damp">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="HS_lbCheck_GlazingHazards">Glazing hazards</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_GlazingHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="HS_lbCheck_Squalor">Unsanitary conditions/Squalor</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Squalor">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="HS_lbCheck_Hoarding">Hoarding</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Hoarding">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="HS_lbCheck_Vermin">Vermin / Signs of termites &#38; borers</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Vermin">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="HS_lbCheck_Heating">Heating</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Heating">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="HS_lbCheck_FlammableRisks">Flammable Risks</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_FlammableRisks">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="HS_lbCheck_ElectricalHazards">Electrical Hazards</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_ElectricalHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="HS_lbCheck_SlipHazards">Slip hazards</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SlipHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="HS_lbCheck_SecurityLocks">Security: effective locks front and rear / window catches</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SecurityLocks">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="HS_lbCheck_TripHazards">Trip hazards</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_TripHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="HS_lbCheck_SmokeAlarms">Smoke alarms (include if installed incorrectly)</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SmokeAlarms">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="HS_lbCheck_WCdoor">WC door - open able from outside</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WCdoor">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="HS_lbCheck_HealthOther">Other (e.g. security lights, visibility to front fence, ramp rails poor lighting)</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_HealthOther">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <table class="table table-bordered">
                                <tr>
                                    <td style="color:red;">
                                        <strong>Key</strong>
                                    </td>
                                    <td>√</td>
                                    <td>No visible Fault</td>
                                    <td>X</td>
                                    <td>Maintenance Item</td>
                                    <td>XX</td>
                                    <td>Serious Fault</td>
                                    <td>--</td>
                                    <td>Not Applicable</td>
                                </tr>
                            </table>
                        </div>
                        <div id="HA_DivRMCheck" title="Repairs & Mainentance Check" data-title="Repairs & Mainentance Check" style="padding:10px;font-size: 18px">
                            <table id="Table_RMCheck_S" class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td>
                                        <strong id="Strong_RMStructure">Structure</strong>
                                    </td>
                                    <td colspan="3">
                                        <button type="button" class="btn btn-primary" id="Button_RMCheckAdd_S">Add item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="RM_lbCheck_Roof">Roof</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Roof">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="RM_lbCheck_Ceiling">Ceiling</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Ceiling">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="RM_lbCheck_Walls">Walls</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Walls">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="RM_lbCheck_Floor">Floor / Subfloor</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Floor">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <table id="Table_RMCheck_O" class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td>
                                        <strong id="Strong_RMOther">Other</strong>
                                    </td>
                                    <td colspan="3">
                                        <button type="button" class="btn btn-primary" id="Button_RMCheckAdd_O">Add item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="RM_lbCheck_Gutters">Gutters / Drainage</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Gutters">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="RM_lbCheck_Decks">Decks, Balconies &#38; Pergolas</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Decks">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="RM_lbCheck_Windows">Windows</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Windows">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="RM_lbCheck_Fences">Fences</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Fences">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="RM_lbCheck_Surfaces">Surfaces (e.g. painting, tiling)</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Surfaces">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="RM_lbCheck_IllegalBuildingWork">Illegal building work</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_IllegalBuildingWork">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="RM_lbCheck_Plumbing">Plumbing</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Plumbing">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="RM_lbCheck_HotwaterSystem">Hot Water System - HWS*</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_HotwaterSystem">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <table class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td colspan="4">
                                        <strong>NOTES:</strong>
                                        <br> 1 * Gravity fed HWS’s are generally unsuitable for hand held showers
                                        <br> 2 Access restrictions
                                    </td>
                                </tr>
                            </table>
                            <table class="table table-bordered">
                                <tr>
                                    <td style="color:red;">
                                        <strong>Key</strong>
                                    </td>
                                    <td>√</td>
                                    <td>No visible Fault</td>
                                    <td>X</td>
                                    <td>Maintenance Item</td>
                                    <td>XX</td>
                                    <td>Serious Fault</td>
                                    <td>--</td>
                                    <td>Not Applicable</td>
                                </tr>
                            </table>
                        </div>
                        <div id="HA_DivEWCheck" title="Energy & Wastage Check" data-title="Energy & Wastage Check" style="padding:10px;font-size: 18px">
                            <table id="Table_EWCheck" class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td colspan="4">
                                        <button type="button" class="btn btn-primary" id="Button_EWCheckAdd">Add item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_DualFlushToilet">Dual-Flush toilet</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_DualFlushToilet">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_WindowSeals">Window seals</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WindowSeals">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_DraughtProofExhaustFan">Draught-proof exhaust fan</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_DraughtProofExhaustFan">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_Pelmets">Pelmets / Curtains</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Pelmets">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_LowFlowShowerHead">Low-flow shower head</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_LowFlowShowerHead">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_DoorSeals">Door seals</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_DoorSeals">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_WatertightCistern">Watertight cistern</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WatertightCistern">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_Electrical">Electrical</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Electrical">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_WatertightTaps">Watertight taps</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WatertightTaps">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_ShadedWestWindows">Shaded west windows</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_ShadedWestWindows">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_CeilingInsulation">Ceiling insulation</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_CeilingInsulation">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_LowEnergyLightGlobes">Low Energy Light Globes</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_LowEnergyLightGlobes">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_SolarPanels">Solar panels</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SolarPanels">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_SolarHWS">Solar HWS</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SolarHWS">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="EW_lbCheck_WaterTank">Water tank</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WaterTank">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        <label id="EW_lbCheck_GreyWaterRecyclingSystem">Grey water recycling system</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_GreyWaterRecyclingSystem">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <table class="table table-bordered">
                                <tr>
                                    <td style="color:red;">
                                        <strong>Key</strong>
                                    </td>
                                    <td>√</td>
                                    <td>No visible Fault</td>
                                    <td>X</td>
                                    <td>Maintenance Item</td>
                                    <td>XX</td>
                                    <td>Serious Fault</td>
                                    <td>--</td>
                                    <td>Not Applicable</td>
                                </tr>
                            </table>
                        </div>
                        <div id="HA_DivFieldNotes" title="Field Notes" data-title="Field Notes" style="padding:10px;font-size: 18px">
                            <table id="Table_FieldNotes" class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td>
                                        <label id="FN_lbField_Attendance">In Attendance During Assessment</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Field_Attendance">
                                            <option value="-1">Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="FN_lbField_Client">Client</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Field_Client">
                                            <option value="-1">Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="FN_lbField_Therapist">Occupational Therapist</label>
                                    </td>
                                    <td>
                                        <select class="form-control" id="Field_Therapist">
                                            <option value="-1">Choose</option>
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label id="FN_lbField_Others">Others</label>
                                    </td>
                                    <td>
                                        <textarea class="form-control" rows="5" id="Field_Others"></textarea>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <!--First Tap Architect’s Solution-->
                <div title="Architect Recommendations" id="ASolution" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="plain:true" style="width:inherit;height:auto">
                        <div id="HA_DivHSConcerns" title="Health & Safety Concerns" data-title="Health & Safety Concerns (Urgent - within 1 month)"
                            style="padding:10px;font-size: 18px">
                            <table id="C_SolutionTable" class="table table-bordered" style="table-layout:fixed;width:100%">
                                <colgroup>
                                    <col style="width: 19%;">
                                    <col style="width: 33%;">
                                    <col style="width: 33%;">
                                    <col style="width: 15%;">
                                </colgroup>
                                <tr>
                                    <th colspan="4">
                                        <p class="text-center bg-danger text-white">Urgent - within 1 month.</p>
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <button type="button" class="btn btn-primary" id="C_SolutionAddItem" onclick="button_AddSolutionItem(this.id);">Add item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th style="text-align:center">Category</th>
                                    <th style="text-align:center">Architect’s Comment</th>
                                    <th style="text-align:center">Trade</th>
                                    <th style="text-align:center">Cost-indicative</th>
                                </tr>
                                <tr>
                            </tr>
                            </table>
                        </div>
                        <div id="HA_DivRMaintenance" title="Repair & Maintenance" data-title="Repair & Maintenance (RECOMMENDED – longer term)" style="padding:10px;font-size: 18px">
                            <table id="M_SolutionTable" class="table table-bordered" style="table-layout:fixed">
                                <colgroup>
                                    <col   style="width: 19%;">
                                    <col   style="width: 33%;">
                                    <col   style="width: 33%;">
                                    <col   style="width: 15%;">
                                </colgroup>
                                <tr>
                                    <th colspan="4">
                                        <p class="text-center bg-primary text-white">Recommended - longer term.</p>
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <button type="button" class="btn btn-primary" id="M_SolutionAddItem" onclick="button_AddSolutionItem(this.id);">Add item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th style="text-align:center">Category</th>
                                    <th style="text-align:center">Architect’s Comment</th>
                                    <th style="text-align:center">Trade</th>
                                    <th style="text-align:center">Cost-indicative</th>
                                </tr>
                            </table>
                        </div>
                        <div id="HA_DivEnergyEfficiency" title="Energy Efficiency - Optional" data-title="Energy Efficiency - Optional" style="padding:10px;font-size: 18px">
                            <table id="E_SolutionTable" class="table table-bordered" style="table-layout:fixed">
                                <colgroup>
                                    <col style="width: 19%;">
                                    <col style="width: 33%;">
                                    <col style="width: 33%;">
                                    <col style="width: 15%;">
                                </colgroup>
                                <tr>
                                    <td colspan="4">
                                        <button type="button" class="btn btn-primary" id="E_SolutionAddItem" onclick="button_AddSolutionItem(this.id);">Add item</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th style="text-align:center">Category</th>
                                    <th style="text-align:center">Architect’s Comment</th>
                                    <th style="text-align:center">Trade</th>
                                    <th style="text-align:center">Cost-indicative</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!--First Tap Photo-->
                <div id="HA_DIVPhotos" title="Photos" data-title="Photos" style="padding: 10px;font-size: 18px">
                    <button id="uploadImg_Btn" class="btn btn-primary">Upload Images</button>
                    <input type="file" id="Imgs_Upload" accept="image/x-png,image/jpeg" multiple/>
                    <button id="deleteImg_Btn" class="btn btn-danger" style="display:none">Delete all</button>
                    <div id="Img-main-container">
                        <div id="Img-loader">Loading document ...</div>
                        <div id="HA_ImgsContents"></div>
                        <div id="Imgpage-loader">Loading page ...</div>
                    </div>
                </div>
                <!--First Tap Photo-->
                <div id="HA_DIVSketchs" title="Sketches" data-title="Sketches" style="padding: 10px;font-size: 18px">
                    <button id="upload-button" class="btn btn-primary">Upload PDF</button>
                    <label class="text-danger">(*.pdf only) Please upload only one PDF at a time</label>
                    <input type="file" id="file-to-upload" accept="application/pdf" />
                    <div id="pdf-main-container">
                        <div id="pdf-loader">Loading document ...</div>
                        <div id="HA_PdfContents">
                            <canvas id="pdf-canvas"></canvas>
                        </div>
                        <div id="page-loader">Loading page ...</div>
                    </div>
                </div>
                <!--First Tap Attachment-->
                <div id="HA_DivAttachments" title="Attachments" data-title="Attachments" style="padding: 10px;font-size: 18px">
                    <!--                <div class="container" style="margin-top: 20px">-->
                    <!--                    <div class="row">-->
                    <!--                        <div class="col-sm-4">-->
                    <table id="Table_attachments" class="table table-bordered" style="table-layout:fixed">
                        <tr>
                            <td>
                                <label>Property Maintenance Guide</label>
                                <select id="propertyMaintenanceGuide" style="width:100%" title="Property Maintenance Guide">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                            <td>
                                <label>Home Safety Checklist</label>
                                <select id="homeSafetyCheckList" style="width:100%" title="Home Safety Checklist">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                            <td>
                                <label>Cracking in Masonry</label>
                                <select id="crackingInMasonry" style="width:100%" title="Cracking in Masonry">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Treatment of Dampness</label>
                                <select id="treatmentOfDampness" style="width:100%" title="Treatment of Dampness">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                            <td>
                                <label>Health &amp; Safety Warning</label>
                                <select id='healthSafetyWarning' style="width:100%" title="Health & Safety Warning">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                            <td>
                                <label>Roofing &amp; Guttering</label>
                                <select id="roofingGuttering" style="width:100%" title="Roofing & Guttering">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Re-stumping</label>
                                <select id="reStumping" style="width:100%" title="Re-stumping">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                            <td>
                                <label>Termites &amp; Borers</label>
                                <select id='termitesBorers' style="width:100%" title="Termites & Borers">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                            <td>
                                <label>Cost Guide</label>
                                <select id='costGuide' style="width:100%" title="Cost Guide">
                                    <optgroup label="No Visible Significant Defect">
                                        <option value="√">✔</option>
                                    </optgroup>
                                    <optgroup label="Major Defect">
                                        <option value="NA">Not applicable, no such item</option>
                                    </optgroup>
                                </select>
                            </td>
                        </tr>
                    </table>

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
                            <br>
                            <br>
                            <br>
                            <br>
        </div>
        <!--view PDF srcipt-->
        <script src="HomeAccessJS/pdf.js"></script>
        <script src="HomeAccessJS/pdf.worker.js"></script>
        <!--Text-->
        <script src="HomeAccessJS/text.js?<?php echo time(); ?>"></script>
        <!--Scripts-->
        <script src="js/images.js"></script>
        <script src="js/loadImageJS/load-image.all.min.js"></script>
        <!--General Functions-->
        <script type="text/javascript" src="HomeAccessJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
        <script src="HomeAccessJS/pdfGeneralFunctions.js?<?php echo time(); ?>"></script>
        <!--PDF Generator-->
        <script src="HomeAccessJS/PDFGenerator.js?<?php echo time(); ?>"></script>
        <!--Table Data-->
        <script src="HomeAccessJS/getTableData.js?<?php echo time(); ?>"></script>
        <?php require_once("saveloaddata.php"); ?>
    </body>

</html>