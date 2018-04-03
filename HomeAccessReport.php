<?php
require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Home Access & Service Report</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
              integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

        <!-- Customized CSS -->
        <link rel="stylesheet" href="css/general.css">

        <!--  Import JQuery  -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
        <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>

        <!--  Import pdfMake  -->
        <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
        <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>

        <!--Easy UI -->
        <script src="js/easyui/jquery.easyui.min.js"></script>
        <link rel="stylesheet" type="text/css" href="js/easyui/themes/default/easyui.css">
        <link rel="stylesheet" type="text/css" href="js/easyui/themes/icon.css">

        <?php require_once("saveloaddata.php"); ?>
    </head>
    <body>
        <!--Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">ArchiCentre Task</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>

        <!--Title-->
        <div class="container">
            <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
                <strong>Saving PDF. Please don't close this page. It will take a while</strong>
            </div>
            <h1 class="content-head text-center firstH1">Home Access & Services Report</h1>
            <br>
            <p>
                This Report provides independent advice from a registered architect about home access & services matters as they relate to your dwelling.
            </p>
        </div>

        <!-- Details -->
        <div class="container">
            <div class="easyui-tabs" style="width:100%;height:auto" data-options="tabWidth:300">

                <!--First Tap Booking Information-->
                <div title="Booking Information" id="BInformation" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="fit:true,plain:true" style="width:inherit;height:500px">

                        <!--Second Tap Client Details-->
                        <div title="Client Details" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="row">
                                    <div class="col-sm">
                                        <label>Name</label><br>
                                        <input id="CP_ClientName" class="form-control" type="text" title="name" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Phone</label><br>
                                        <input id="CP_ClientPhone" class="form-control" type="text" title="phone" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Booking No.</label><br>
                                        <input id="CP_BookingNo" class="form-control" type="text" title="bookingNo" style="margin-top: 0">
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--Second Tap Property Details-->
                        <div title="Property Details" style="padding:10px; font-size: 18px">
                            <form>
                                <div class="row">
                                    <div class="col-sm">
                                        <label>Address of Propety</label><br>
                                        <input id="CP_Address" class="form-control" type="text" title="address" style="margin-top: 0">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label>Suburb</label><br>
                                        <input id="CP_Suburb" class="form-control" type="text" title="suburb" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>State</label><br>
                                        <input id="CP_State" class="form-control" type="text" title="state" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Postcode</label><br>
                                        <input id="CP_Postcode" class="form-control" type="text" title="postcode" style="margin-top: 0">
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
                                        <label>Existing use of Property</label><br>
                                        <textarea id="CP_ExistingUse" class="form-control" title="use" style="margin-top: 0;height: 70px"></textarea>
                                    </div>
                                    <div class="col-sm">
                                        <label>Weather conditions</label><br>
                                        <input id="CP_WeatherConditions" class="form-control" type="text" title="weather" style="margin-top: 0">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <label>Verbal summary given to</label><br>
                                        <input id="CP_VerbalSummary" class="form-control" type="text" title="verbal" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Date</label><br>
                                        <input id="CP_Date" class="form-control" type="text" title="date" style="margin-top: 0">
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--Second Tap Architect Details-->
                        <div title="Architect Details" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label>Architect</label><br>
                                        <input id="architectName" class="form-control" type="text" title="architectName" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Registration No.</label><br>
                                        <input id="registrationNumber" class="form-control" type="text" title="registrationNo" style="margin-top: 0">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <label>Address</label><br>
                                        <input id="architectAddress" class="form-control" type="text" title="architectAdd" style="margin-top: 0">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label>Email Address</label><br>
                                        <input id="architectEmail" class="form-control" type="text" title="email" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Phone</label><br>
                                        <input id="architectPhone" class="form-control" type="text" title="phone" style="margin-top: 0">
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-sm">
                                        <label>Referred By</label><br>
                                        <input id="architectEmail" class="form-control" type="text" title="email" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Email Address</label><br>
                                        <input id="architectPhone" class="form-control" type="text" title="phone" style="margin-top: 0">
                                    </div>
                                    <div class="col-sm">
                                        <label>Phone</label><br>
                                        <input id="architectPhone" class="form-control" type="text" title="phone" style="margin-top: 0">
                                    </div>
                                </div>
                            </form>
                        </div>

                        <!--Second Tap Details Of Advice Sought-->
                        <div title="Details Of Advice Sought" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="form-group">
                                    <textarea class="form-control" rows="20" id="AdviceSought_Details" style="height:100%;"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!--First Tap Property Summary-->
                <div title="Property Summary" id="PSummary" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="plain:true" style="width:inherit;height:auto">
                        <div title="Check Home Accessment" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="form-group">
                                    <table class="table table-bordered">
                                        <tr>
                                            <td colspan="3" style="padding-bottom:0px;">
                                                <label style="color:red">PLEASE COMPLETE FOR ALL HOME SERVICES ASSESSMENTS</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="align-middle">
                                                Has the H&ampS CHECKLIST been completed?
                                            </td>
                                            <td class="align-middle">
                                                <select class="form-control" id="sel1" style="width:100%">
                                                    <option value="0">Choose</option>
                                                    <option value="YES">YES</option>
                                                    <option value="NO">NO</option>
                                                </select>
                                            </td>
                                            <td>
                                                <label>If “NO” please state reason why not completed: </label><br>
                                                <textarea class="form-control" id="comment"> </textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td  class="align-middle">
                                                Please state the number of DESIGNS
                                            </td>
                                            <td class="align-middle">
                                                <select class="form-control" id="sel1" style="width:100%">
                                                    <option value="-1">Choose</option>
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </td>
                                            <td>
                                                Please indicate design submitted:
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" value="Ramp"> Ramp
                                                    </label>
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" value="Bathroom Modification"> Bathroom Modification
                                                    </label>
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" value="Platform Steps"> Platform Steps
                                                    </label>
                                                    <label class="form-check-label">
                                                        <input type="checkbox" class="form-check-input" value="Other"> Other
                                                    </label>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <div title="Construction Summary" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="form-group">
                                    <table class="table table-bordered">
                                        <tr>
                                            <td style="padding-right:0px;">
                                                House Age
                                            </td>
                                            <td>
                                                <select class="form-control" id="sel1">
                                                    <option value="-1">Choose</option>
                                                    <option value="less25">Less than 25 years</option>
                                                    <option value="25 to 50">25 to 50 years</option>
                                                    <option value="50 to 70">50-70 years</option>
                                                    <option value="75+">More than 75 years</option>
                                                </select>
                                            </td>
                                            <td>
                                                Storeys
                                            </td>
                                            <td>
                                                <select class="form-control" id="sel1">
                                                    <option value="-1">Choose</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Floor Structure
                                            </td>
                                            <td>
                                                <select class="form-control" id="sel1">
                                                    <option value="-1">Choose</option>
                                                    <option value="concrete">Contrete</option>
                                                    <option value="Timber">Timber</option>
                                                </select>
                                            </td>
                                            <td>
                                                Walls
                                            </td>
                                            <td>
                                                <select class="form-control" id="sel1">
                                                    <option value="-1">Choose</option>
                                                    <option value="wb">W/B</option>
                                                    <option value="brick">Brick</option>
                                                    <option value="bv">B.V.</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Roof
                                            </td>
                                            <td>
                                                <select class="form-control" id="sel1">
                                                    <option value="-1">Choose</option>
                                                    <option value="tct">TCT</option>
                                                    <option value="concrete">Concrete</option>
                                                    <option value="sheeting">Sheeting</option>
                                                    <option value="ac">A.C.</option>
                                                </select>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </form>
                        </div>
                        <div title="Fault Summary" style="padding:10px;font-size: 18px">
                            <form>
                                <div class="form-group">
                                    <table class="table table-bordered" style="table-layout:fixed">
                                        <tr>
                                            <td>
                                                Trip & Slop
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Trip">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                            <td>
                                                Cracking
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Crack">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Fire Hazards
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Fire">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                            <td>
                                                Stumps/Piers
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Stumps">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Health Hazards
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Health">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                            <td>
                                                Illegal Work
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Illegal">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Electrics
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Electrics">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                            <td>
                                                Timber Rot
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Timber">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Security
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Security">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                            <td>
                                                Damp/Mould
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Damp">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Roof
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Roof">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                            <td>
                                                Drainage
                                            </td>
                                            <td>
                                                <select class="form-control" id="Fault_Drainage">
                                                    <option value="-1">Choose</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

                <!--First Tap Property Assessment-->
                <div title="Property Assessment" id="PAssessment" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="plain:true" style="width:inherit;height:auto">
                        <div title="Health Check & Safety Check" style="padding:10px;font-size: 18px">
                            <table  class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td>
                                        Damp / Mould / Ventilation
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Damp">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Glazing hazards
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_GlazingHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Unsanitary conditions/Squalor
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Squalor">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Hoarding
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Hoarding">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Vermin / signs of termites & borers
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Vermin">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Heating
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Heating">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Flammable Risks
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_FlammableRisks">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Electrical Hazards
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_ElectricalHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Slip hazards
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SlipHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Security: effective locks front and rear / window catches
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SecurityLocks">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trip hazards
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_TripHazards">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Smoke alarms (include if installed incorrectly)
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SmokeAlarms">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        WC door - open able from outside
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WCdoor">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Other (e.g. security lights, visibility to front fence, ramp rails poor lighting)
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_HealthOther">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div title="Repairs & Mainentance Check" style="padding:10px;font-size: 18px">
                            <table  class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td colspan="4">
                                        <strong>Structure</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Roof</td>
                                    <td>
                                        <select class="form-control" id="Check_Roof">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>Ceiling</td>
                                    <td>
                                        <select class="form-control" id="Check_Ceiling">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Walls
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Walls">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Floor / Subfloor
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Floor">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <strong>Other</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Gutters / drainage
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Gutters">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Decks, Balconies & Pergolas
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Decks">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Windows
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Windows">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Fences
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Fences">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Surfaces (e.g. painting, tiling)
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Surfaces">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Illegal building work
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_IllegalBuildingWork">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Plumbing
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Plumbing">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Hot Water System  - HWS*
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_HotwaterSystem">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <strong>NOTES:</strong><br>
                                        1	* Gravity fed HWS’s are generally unsuitable for hand held showers<br>
                                        2	Access restrictions
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div title="Energy & Wastage Check" style="padding:10px;font-size: 18px">
                            <table  class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td>
                                        Dual-Flush toilet
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_DualFlushToilet">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Window seals
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WindowSeals">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Draught-proof exhaust fan
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_DraughtProofExhaustFan">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Pelmets / Curtains
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Pelmets">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Low-flow shower head
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_LowFlowShowerHead">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Door seals
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_DoorSeals">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Watertight cistern
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WatertightCistern">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Electrical
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_Electrical">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Watertight taps
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WatertightTaps">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Shaded west windows
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_ShadedWestWindows">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Ceiling insulation
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_CeilingInsulation">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Low Energy Light Globes
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_LowEnergyLightGlobes">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Solar panels
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SolarPanels">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Solar HWS
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_SolarHWS">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Water tank
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_WaterTank">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                    <td>
                                        Grey water recycling system
                                    </td>
                                    <td>
                                        <select class="form-control" id="Check_GreyWaterRecyclingSystem">
                                            <option value="-1">Choose</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div title="Field Notes" style="padding:10px;font-size: 18px">
                            <table  class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <td>
                                        In Attendance During Assessment
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
                                        Client
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
                                        Occupational Therapist
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
                                        Others
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
                <div title="Architect’s Solution" id="ASolution" style="padding:10px;font-size: 18px">
                    <div class="easyui-tabs" data-options="plain:true" style="width:inherit;height:auto">
                        <div title="Health & Safety Concerns" style="padding:10px;font-size: 18px">
                            <table class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <th colspan="5">
                                        <p class="text-center bg-danger">
                                            Urgent - within 1 month.
                                        </p>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        Category
                                    </th>
                                    <th>
                                        CODE
                                    </th>
                                    <th>
                                        Architect’s Comment
                                    </th>
                                    <th>
                                        Trade
                                    </th>
                                    <th>
                                        Cost-indicative
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <select class="form-control" id="C_category">
                                            <option value="-1">Choose an item</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" id="C_code">
                                            <option value="-1">Internal use</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea placeholder="In addition to preset text only..." class="form-control" rows="5" id="C_comment"></textarea>
                                    </td>
                                    <td>
                                        <select class="form-control" id="C_trade">
                                            <option value="-1">--</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea class="form-control" id="C_cost"></textarea>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div title="Repair & Maintenance" style="padding:10px;font-size: 18px">
                            <table  class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <th colspan="5">
                                        <p class="text-center bg-danger">
                                            Recommended - longer term.
                                        </p>

                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        Category
                                    </th>
                                    <th>
                                        CODE
                                    </th>
                                    <th>
                                        Architect’s Comment
                                    </th>
                                    <th>
                                        Trade
                                    </th>
                                    <th>
                                        Cost-indicative
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <select class="form-control" id="M_category">
                                            <option value="-1">Choose an item</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select class="form-control" id="M_code">
                                            <option value="-1">Internal use</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea placeholder="In addition to preset text only..." class="form-control" rows="5" id="M_comment"></textarea>
                                    </td>
                                    <td>
                                        <select class="form-control" id="M_trade">
                                            <option value="-1">--</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea class="form-control" id="M_cost"></textarea>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div title="Energy Efficiency - Optional" style="padding:10px;font-size: 18px">
                            <table  class="table table-bordered" style="table-layout:fixed">
                                <tr>
                                    <th>
                                        Category
                                    </th>
                                    <th>
                                        CODE
                                    </th>
                                    <th>
                                        Architect’s Comment
                                    </th>
                                    <th>
                                        Trade
                                    </th>
                                    <th>
                                        Cost-indicative
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        Enenrgy Efficiency
                                    </td>
                                    <td>
                                        <select class="form-control" id="E_code">
                                            <option value="-1">Internal use</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea placeholder="In addition to preset text only..." class="form-control" id="E_comment"></textarea>
                                    </td>
                                    <td>
                                        <select class="form-control" id="E_trade">
                                            <option value="-1">--</option>
                                        </select>
                                    </td>
                                    <td>
                                        <textarea class="form-control" id="E_cost"></textarea>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <!--First Tap Attachment-->
                <div title="Attachments" id="Attachments" style="padding: 10px;font-size: 18px">
                    <form>
                        <table class="table-bordered">
                            <tr>
                                <th colspan="6" style="color:red">
                                    ITEM
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <label><input type="checkbox" value="P_Guide">
                                        Property Maintenance Guide
                                    </label>
                                </td>
                                <td>
                                    <label><input type="checkbox" value="C_Masonry">
                                        Cracking in Masonry
                                    </label>
                                </td>
                                <td>
                                    <label><input type="checkbox" value="T_Dampness">
                                        Treatment of Dampness
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label><input type="checkbox" value="Warning">
                                        Health & Safety Warning
                                    </label>
                                </td>
                                <td>
                                    <label><input type="checkbox" value="R_Guttering">
                                        Roofing & Guttering
                                    </label>
                                </td>
                                <td>
                                    <label><input type="checkbox" value="H_Checklist">
                                        Home Safety Checklist
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label><input type="checkbox" value="T_Borers">
                                        Termites & Borers
                                    </label>
                                </td>
                                <td>
                                    <label><input type="checkbox" value="R_Stumping">
                                        Re-stumping
                                    </label>
                                </td>
                                <td>
                                    <label><input type="checkbox" value="C_Guide">
                                        Cost Guide
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>




        <!--Scripts-->
        <!--<script src="js/images.js"></script>-->
        <!--<script src="js/loadImageJS/load-image.all.min.js"></script>-->

        <!--PDF Generator-->
        <!--            <script src="HomeAccessJS/PDFGenerator.js"></script>-->

        <!--General Functions-->
        <script type="text/javascript" src="HomeAccessJS/htmlGeneralFunctions.js"></script>
        <!--            <script src="HomeAccessJS/pdfGeneralFunctions.js"></script>-->

        <!--Text-->
        <!--            <script src="HomeAccessJS/text.js"></script>-->

        <!--Table Data-->
        <!--            <script src="HomeAccessJS/getTableData.js"></script>-->
    </body>
</html>
