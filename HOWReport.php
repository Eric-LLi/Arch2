<?php
  require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home Warranty Inspection - <?php echo $bookingcode; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <?php require_once("meta.php"); ?>
    <!-- Customized CSS -->
    <link rel="stylesheet" href="css/general.css">
    <link rel="stylesheet" href="css/viewPDF.css">
    <!--  Import JQuery  -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
    <!--  Import pdfMake  -->
    <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
    <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>
    <!--Easy UI -->
    <!-- <script src="js/easyui/jquery.easyui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="js/easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="js/easyui/themes/icon.css"> -->
    <?php require_once("saveloaddata.php"); ?>
    
</head>
<body onload = "onload()">
<!--Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">ArchiCentre Task</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
</nav>
<!--Title-->
<div class="container" style="background-color: white">
    <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
        <strong>Saving PDF. Please don't close this page. It will take a while</strong>
    </div>
    <h2 class="content-head text-center firstH1" style="font-size: 2rem">Home Warranty Inspection Report</h2>
    <!-- <b>NOTICE TO PURCHASERS</b> -->
    <br>
    <!-- <p>
        THIS IS NOT A PRE-PURCHASE INSPECTION REPORT. Subject to its terms and conditions, this report is prepared
        on behalf of the vendor for the purposes of obtaining compulsory home warranty insurance and only addresses
        those parts of the building Archicentre Australia has been advised have been constructed by the vendor which
        were reasonably accessible to the inspector at the time of inspection.
        </p>
    <p>
        The contents of this report must not be relied upon by the purchaser and no warranty is given to the
        purchaser in relation to the contents of this report. Archicentre Australia, it employees and
        agents accept no responsibility to the purchaser or any other person arising in any way from or
        in any connection with the information provided in this report, including responsibility to any
        person by reason of negligence.
        </p>
    <p>
        This Report will only address defective and incomplete construction work.  It will not identify
        or comment on design, construction details or damage unrelated to defective or incomplete building works.
        This Report will not confirm compliance with regulations, codes, Australian Standards, council or statutory
        requirements, or approved construction document specifications.  Purchasers wishing to satisfy themselves of
        the condition of the property should rely on their own enquiries including obtaining their own comprehensive
        pre-purchase inspection report.
    </p> -->
</div>
<!--<div style="margin:20px 0 10px 0;"></div>-->
<!-- <div class="easyui-panel" title="XXX_APPITITLE..." data-options="fit:true">
	<div id="howtabs2" class="easyui-tabs" data-options="fit: true, pill: true,tabPosition:left">
		<div title="Command TAB" data-options="iconCls: 'icon-registry'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div title="Dashboard" data-options="iconCls: 'icon-gauge'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div title="Sales" data-options="iconCls: 'icon-sale'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div title="Purchasing" data-options="iconCls: 'icon-purchases'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div title="Suppliers" data-options="iconCls:'icon-factory'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div  title="Inventory" data-options="iconCls: 'icon-inventory'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div  title="Payroll" data-options="iconCls: 'icon-cash'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div  title="Accounts" data-options="iconCls: 'icon-accounts'">
			<div class="chart" id="divCMDCentre"></div>
		</div>

		<div title="Maintenance" data-options="iconCls: 'icon-maintenance'">
			<div class="chart" id="divCMDCentre"></div>
		</div>
	</div>
</div> -->

<div class="container" style="background-color: white">
	<div class="easyui-tabs" style="width:100%;height:auto;margin:72px;border:15px;padding:15px;" data-options="tabPosition: 'left',pill: true,headerWidth:250" id="howtabs">
	        <!-- <div title="Booking Information" style="padding:10px;font-size: 18px" data-options="iconCls: 'icon-registry'"> -->
			<div title="Booking Information" style="padding:10px;font-size: 18px">
	            <div class="easyui-tabs" data-options="pill: true,tabPosition:'top',headerWidth:200,tabHeight:35" style="width:inherit;height:auto">
	                <div title="OWNERS" style="padding:10px;font-size: 18px">
	                    <form>
	                        <div class="row">
	                            <div class="col-sm">
	                                <label>Name</label><br>
	                                <input id="owner_name" class="form-control" type="text" title="name" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
	                            </div>
	                            <div class="col-sm">
	                                <label>Booking No.</label><br>
	                                <input id="owner_bookingNo" class="form-control" type="text" title="bookingNo" style="margin-top: 0" value="<?php echo $bookingcode; ?>">
	                            </div>
	                        </div>
	                    </form>
	                    <form>
	                        <div class="row">
	                            <div class="col-sm">
	                                <label>Address</label><br>
	                                <input id="owner_address" class="form-control" type="text" title="address"  style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custaddress1'). " " . doNiceArrayElemAsString('custaddress2'); ?>"/>
	                            </div>
	                        </div>
	                        <div class="row form-group">
	                            <div class="col-sm">
	                                <label>Suburb</label><br>
	                                <input  id="owner_suburb" class="form-control" type="text" title="suburb" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custcity'); ?>">
	                            </div>
	                            <div class="col-sm">
	                                <label>State</label><br>
	                                <input id="owner_state" class="form-control" type="text" title="state"  style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custstate', false); ?>">
	                            </div>
	                            <div class="col-sm">
	                                <label>Postcode</label><br>
	                                <input id="owner_postcode" class="form-control" type="text" title="postcode" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('custpostcode'); ?>">
	                            </div>
	                        </div>
	                    </form>
						<form>
	                        <div class="row">
								<div class="col-sm-6">
									<label>Phone</label><br>
									<input id="owner_phone" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
								</div>
								<div class="col-sm-6">
									<label>Mobile</label>
									<br>
									<input id="owner_mobile" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
								</div>
	                        </div>
	                    </form>
						
	                    <form>
	                        <div class="row">
	                            <div class="col-sm-6" style="margin-top:6px">
	                                <label>Telephone(Bus)</label><br>
	                                <input id="owner_bus_telephone" class="form-control" type="text" title="name" style="margin-top: 0">
	                            </div>
	                            <div class="col-sm-6" style="margin-top:6px">
	                                <label>Telephone(Home)</label><br>
	                                <input id="owner_home_telephone" class="form-control" type="text" title="phone" style="margin-top: 0">
	                            </div>
	                        </div>
	                    </form>

	                </div>
	                <div title="INSPECTION   DETAILS" style="padding:10px; font-size: 18px">
	                    <form>
	                        <div class="row">
	                            <div class="col-sm-8">
	                                <label>Address</label><br>
	                                <input id="inspection_address" class="form-control" type="text" title="address" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
	                            </div>
	                            <div class="col-sm-4">
	                                <label>Lot No.</label><br>
	                                <input id="inspection_lotNo" class="form-control" type="text" title="address" style="margin-top: 0">
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-sm-4">
	                                <label>Suburb</label><br>
	                                <input id="inspection_suburb" class="form-control" type="text" title="suburb" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('city'); ?>">
	                            </div>
	                            <div class="col-sm-4">
	                                <label>State</label><br>
	                                <input id="inspection_state" class="form-control" type="text" title="state" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('state', false); ?>">
	                            </div>
	                            <div class="col-sm-4">
	                                <label>Postcode</label><br>
	                                <input id="inspection_postcode" class="form-control" type="text" title="postcode" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-sm-6">
	                                <label>Municipality</label><br>
	                                <input id="inspection_municipality" class="form-control" type="text" title="Municipality" style="margin-top: 0">
	                            </div>
	                            <div class="col-sm-6" style="margin-top: 0">
	                                <label>Date of Report:</label><br>
	                                <input id="inspection_dateOfReport" class="form-control" type="text" title="date" style="margin-top: 0">
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-sm-4">
	                                <label>Date of Inspection</label><br>
	                                <input id="inspection_dateOfInspection" type="text" class="form-control" title="date" style="margin-top: 0">
	                            </div>
	                            <div class="col-sm-4">
	                                <label>Time of Arrival</label><br>
	                                <input id="inspection_timeOfArrival" type="text" class="form-control" title="time of arrival" style="margin-top: 0">
	                            </div>
	                            <div class="col-sm-4">
	                                <label>Time of Departure:</label><br>
	                                <input id="inspection_timeOfDeparture" type="text" class="form-control" title="time of departure" style="margin-top: 0">
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-sm" style="margin-top: 2px">
	                                <label >Weather Conditions</label><br>
	                                <input id="inspection_weatherCondition" type="text" class="form-control" title="weather" style="margin-top: 0">

	                            </div>
	                        </div>
	                    </form>
	                    <form>

	                        <div class="row">
	                            <div class="col-sm-3" style="margin-top: 0">
	                                <label style="margin-top: 0">Authorised Building Documents sighted:</label><br>
	                            </div>
	                            <div class="col-sm-3">
	                                <select id="inspection_authorised" style="width:100%" title="state">
	                                    <option selected disabled value="">Choose an item</option>
	                                    <option value="Yes">Yes</option>
	                                    <option value="No">No</option>
	                                    <option value="N/A">N/A</option>
	                                </select>
	                            </div>
	                            <div class="col-sm-2">
	                                <label>Stamped Date: </label><br>
	                            </div>
	                            <div class="col-sm-4">
	                                <input id="inspection_stampedDate" type="text" class="form-control" title="stamped date">
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-sm" style="margin-top: 10px">
	                                <textarea id="inspection_textArea" class="form-control" title="date" placeholder="identification on documents eg drawing numbers"></textarea>
	                            </div>
	                        </div>
	                    </form>

	                </div>
	                <div title="INSPECTOR DETAILS" style="padding:10px; font-size: 18px">
	                    <form>
	                        <div class="row form-group">
	                            <div class="col-sm-6">
	                                <label>Architect Name</label><br>
	                                <input id="inspector_name" class="form-control" type="text" title="architectName" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
	                            </div>
	                            <div class="col-sm-6">
	                                <label>Registration No.</label><br>
	                                <input id="inspector_registrationNumber" class="form-control" type="text" title="registrationNo" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
	                            </div>
	                            <div class="col-sm-6">
	                                <label>Email</label><br>
	                                <input id="inspector_email" class="form-control" type="text" title="email" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
	                            </div>
	                            <div class="col-sm-6">
	                                <label>Phone</label><br>
	                                <input id="inspector_phone" class="form-control" type="text" title="phone" style="margin-top: 0" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
	                            </div>
	                        </div>
	                    </form>
	                </div>

	                <div title= "<span class='tab_title'>REPORT AUTHORISATION<br>(For Victoria only)</span>" style="padding:10px;font-size: 18px">
	                    <form>
	                        <div class="row form-group">
	                            <div class="col-sm">
	                                <!-- <label>Signature</label><br>
	                                <input id="inspection_signature" class="form-control" type="text" title="signature" style="margin-top: 0"> -->
	                                
	                                <button type="button" id="signature_addbtn" class="btn btn-primary" style="width:265px;margin:auto" >Upload Signature</button>
	                                <input type="file" id="signautre_input" accept="image/x-png,image/jpeg" class="inputImage">
	                                <br/>
	                                <img id="how_signature_image" src="#" alt="signature" style="width:265px;height:265px;display: none;margin:auto" />
	                                <br/>
	                                <button type="button" id="signature_removebtn" class="btn btn-danger" style="width:265px;display:none;margin:auto" onclick="removeSignature()">Remove</button>
	                            </div>
	                            <div class="col-sm">
	                                <label>Block Print Name</label><br>
	                                <input id="inspection_blockPrintName" class="form-control" type="text" title="blockPrintName" style="margin-top: 0">
	                            </div>
	                        </div>
	                    </form>
	                </div>
	                <div title= "<span class='tab_title'>EXTENT OF WORK DONE <br>BY OWNER BUILDER</span>" style="padding:10px;font-size: 18px">
	                    <form>
	                        <div class="row form-group">
	                            <div class="col-sm-3">
	                                <label>Total House</label>
	                            </div>
	                            <div class="col-sm-3">
	                                <select id="inspection_totalHouse" name="totalHouse" title="checkTotalHouse">
	                                    <option selected disabled value="">--</option>
	                                    <option value="Yes">YES</option>
	                                    <option value="No">NO</option>
	                                </select>
	                            </div>
	                            <div class="col-sm-3">
	                                <label>Renovations and/or extensions</label>
	                            </div>
	                            <div class="col-sm-3">
	                                <select id="inspection_renovationOrExtension" name="Renovations" title="Renovations">
	                                    <option selected disabled value="">--</option>
	                                    <option value="Yes">YES</option>
	                                    <option value="No">NO</option>
	                                </select>
	                            </div>
	                        </div>
	                        <div class="row">
	                            <div class="col-sm">
	                                <label>Extent of Renovation and/or Extension Work where relevant (brief description):</label><br>
	                                <textarea id="inspection_renovationDescription" class="form-control" title="verbal"></textarea>
	                            </div>
	                        </div>
	                        <div class="row" style="margin-top: 2px">
	                            <div class="col-sm">
	                                <label>Extent of Work based on:</label><br>
	                                <textarea id="inspection_extentOfWork" class="form-control" title="date"></textarea>
	                            </div>
	                        </div>
	                    </form>
	                </div>
	            </div>
	        </div>
	        <div title="Inspection Summary" style="padding:10px;font-size: 18px">
	            <div class="container">
	                <div class="row">
	                    <div class="form-group col-sm">
	                        <div class="row">
	                            <label>Extent of inspected work is generally in accordance with sighted documents?</label>
	                            <select id="inspectionSummarySelect" name="conditionOfBuilding" title="checkConditions" style="margin-left: 30px">
	                                <option selected disabled value="">--</option>
	                                <option value="YES">YES</option>
	                                <option value="NO">NO</option>
	                            </select>
	                        </div>
	                    </div>
	                </div>
	                <div class="row" style="margin-top: 30px">
	                    <textarea id="inspection_summary" class="form-control" title="overwrite"></textarea>
	                </div>
	                <!--<div class="row" style="margin-bottom: 10px">-->
	                    <!--<textarea style="height: 180px" class="form-control" title="overwrite" placeholder="Overwrite - architect to summarise inspection and to list any other issues eg tricky design details that may potentially develop into defects at a later stage - and note the general condition of other parts of the property if works inspected are renovations or extensions eg older section of building appears to have been repainted/ for the most part older section of building appears to be original condition – refer building permit documents."></textarea>-->
	                <!--</div>-->
	            </div>
	        </div>
	        <div title="Descriptive Summary of Work " style="padding:10px;font-size: 18px">
	            <p style="color: red; font-style: oblique;font-size: 16px">CONSTRUCTION SUMMARY – Primary construction materials (Owner Builder work only) and site conditions</p>
	            <form>
	                <div class="row form-group">
	                    <div class="col-sm-6">
	                        <label>Sub-Structure</label><br>
	                        <input id="summary_subStructure" class="form-control" type="text" title="sub-structure" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Floors</label><br>
	                        <input id="summary_floors" class="form-control" type="text" title="floors" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Roof</label><br>
	                        <!--<input id="summary_roof" class="form-control" type="text" title="roof">-->
	                        <input id="summary_roof" class="form-control" type="text" title="roof" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                        <!-- <select id="summary_roof"  name="summary_roof" title="summary_window" style="width: 100%;margin-top:0;height: 49px">
	                            <option value="Choose an item" disabled selected>Choose an item.</option>
	                            <option value="Concrete tiles">Concrete tiles</option>
	                            <option value="terracotta tiles">terracotta tiles</option>
	                            <option value="metal sheet/decking">metal sheet/decking</option>
	                            <option value="part tile, part sheet">part tile, part sheet</option>
	                            <option value="part slate,part sheet">part slate,part sheet</option>
	                            <option value="bituminous">bituminous</option>
	                            <option value="">unknown - inaccessible</option>
	                        </select> -->
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Ext Walls</label><br>
	                        <input id="summary_extWalls" class="form-control" type="text" title="walls" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Windows</label><br>
	                        <input id="summary_window" class="form-control" type="text" title="window" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                        <!-- <select id="summary_window"  name="summary_window" title="summary_window" style="width: 100%;margin-top:0;height: 49px">
	                            <option value="Choose an item" disabled selected>Choose an item.</option>
	                            <option value="Timber Framed">Timber Framed</option>
	                            <option value="Aluminium Framed">Aluminium Framed</option>
	                            <option value="Steel Framed">Steel Framed</option>
	                            <option value="PVC Framed">PVC Framed</option>
	                            <option value="Composite Framed">Composite Framed</option>
	                        </select> -->
	                    </div>
	                    <div class="col-sm-6">
	                        <label>No. of Storeys</label><br>
	                        <input id="summary_noOfStoreys" class="form-control" type="text" title="storeys" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>

	                    <div class="col-sm-6">
	                        <label>Site Grade</label><br>
	                        <input id="summary_siteGrade" class="form-control" type="text" title="Site Garden" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Furnished</label><br>
	                        <input id="summary_furnished" class="form-control" type="text" title="Furnished" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Garage</label><br>
	                        <input id="summary_garage" class="form-control" type="text" title="Tree Coverage" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Carport</label><br>
	                        <input id="summary_carport" class="form-control" type="text" title="Carport" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Garage roof</label><br>
	                        <input id="summary_garageRoof" class="form-control" type="text" title="Garage" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Carport roof</label><br>
	                        <input id="summary_carportRoof" class="form-control" type="text" title="carport roof" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Store/shed</label><br>
	                        <input id="summary_store" class="form-control" type="text" title="store" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                    <div class="col-sm-6">
	                        <label>Pergola</label><br>
	                        <input id="summary_pergola" class="form-control" type="text" title="pergola" style="margin-top: 0" onkeypress="capitalizeFirstLetter(this.id)">
	                    </div>
	                </div>
	            </form>
	        </div>
	        <div title="Site" style="padding: 10px;font-size: 18px" >
	            <div style="padding: 10px">
	                <button type="button" class="btn btn-primary" onclick="createOneCell('HOWSiteTable','HOWSiteName','HOWSiteSelect','HOWSiteNote')" style="margin-bottom: 10px">Add One Place</button>
	                <table id="HOWSiteTable">
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName0">Retaining Walls</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect0" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote0"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName1">Gas Supply</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect1" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote1"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName2">Stormwater Drains</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect2" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote2"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName3">Electricity Supply</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect3" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote3"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName4">Water Supply</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect4" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote4"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName5">Sewerage System</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect5" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote5"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName6">Trees</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect6" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote6"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName7">Paving</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect7" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote7"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left " id="HOWSiteName8">Site Drainage</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect8" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSiteNote8"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWSiteName9">Site Access</th>
	                        <th style="text-align: left">
	                            <select id="HOWSiteSelect9" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 50px;" id="HOWSiteNote9"></textarea></th>
	                    </tr>
	                </table>
	                </div>
	        </div>
	        <div title="BUILDING EXTERIOR" style="padding: 10px;font-size: 18px">
	            <div style="padding: 10px">
	                <button type="button" class="btn btn-primary" onclick="createOneCell('HOWBuildingExteriorTable','HOWBuildingName','HOWBuildingSelect','HOWBuildingNote')" style="margin-bottom: 10px">Add One Place</button>
	                <table id="HOWBuildingExteriorTable">
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName0">Slab edge</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect0" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote0"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName1">Eaves</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect1" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote1"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName2">Attached Elements</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect2" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote2" ></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName3">If Masonry - DPC</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect3" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote3" ></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName4">Doors</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect4" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote4"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName5">Roof Cladding</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect5" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote5"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName6">Walls-Structure</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect6" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote6"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName7">Windows</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect7" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote7"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName8">Roof Drainage</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect8" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote8"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName9">Walls-Finish</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect9" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote9"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName10">Windows Sill Gap</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect10" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote10"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName11">Flashings</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect11" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote11"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName12" >Sub-Floor Vents</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect12" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote12"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName13" >Mortar</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect13" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote13"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName14" >Roof Pitch</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect14" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote14"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName15" >Weep Holes</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect15" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWBuildingNote15"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName16" >Perimeter Access</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect16" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 50px;" id="HOWBuildingNote16"></textarea></th>
	                    </tr>
	                    <tr>
	                        <th style="text-align: left" id="HOWBuildingName17" >Roof Access</th>
	                        <th style="text-align: left">
	                            <select id="HOWBuildingSelect17" style="width:100%"  title="checkList"></select>
	                        <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 50px;" id="HOWBuildingNote17"></textarea></th>
	                    </tr>
	                </table>
	            </div>

	        </div>
	        <div title="SUB-FLOOR" style="padding: 10px;font-size: 18px">
	            <button type="button" class="btn btn-primary" onclick="createOneCell('HOWSubFloorTable','HOWSubFloorName','HOWSubFloorSelect','HOWSubFloorNote')" style="margin-bottom: 10px">Add One Place</button>
	            <table id="HOWSubFloorTable">
	                <tr>
	                    <th style="text-align: left" id="HOWSubFloorName0">Stumps&Piers</th>
	                    <th style="text-align: left">
	                        <select id="HOWSubFloorSelect0" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSubFloorNote0"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWSubFloorName1">Walls</th>
	                    <th style="text-align: left">
	                        <select id="HOWSubFloorSelect1" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSubFloorNote1"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWSubFloorName2">Framing</th>
	                    <th style="text-align: left">
	                        <select id="HOWSubFloorSelect2" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSubFloorNote2"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWSubFloorName3">Ventilation</th>
	                    <th style="text-align: left">
	                        <select id="HOWSubFloorSelect3" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSubFloorNote3"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWSubFloorName4">Ground Moisture</th>
	                    <th style="text-align: left">
	                        <select id="HOWSubFloorSelect4" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSubFloorNote4"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWSubFloorName5">Services</th>
	                    <th style="text-align: left">
	                        <select id="HOWSubFloorSelect5" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWSubFloorNote5"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWSubFloorName6">Sub-floor Access</th>
	                    <th style="text-align: left">
	                        <select id="HOWSubFloorSelect6" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 50px;" id="HOWSubFloorNote6"></textarea></th>
	                </tr>
	            </table>
	        </div>
	        <div title="ROOF VOID" style="padding:10px;font-size: 18px">
	            <button type="button" class="btn btn-primary" onclick="createOneCell('HOWRoofVoidTable','HOWRoofVoidName','HOWRoofVoidSelect','HOWRoofVoidNote')" style="margin-bottom: 10px">Add One Place</button>
	            <table id="HOWRoofVoidTable">
	                <tr>
	                    <th style="text-align: left" id="HOWRoofVoidName0">Structure</th>
	                    <th style="text-align: left">
	                        <select id="HOWRoofVoidSelect0" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWRoofVoidNote0"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWRoofVoidName1">Sarking</th>
	                    <th style="text-align: left">
	                        <select id="HOWRoofVoidSelect1" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWRoofVoidNote1"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWRoofVoidName2">Insulation</th>
	                    <th style="text-align: left">
	                        <select id="HOWRoofVoidSelect2" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWRoofVoidNote2"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWRoofVoidName3">Roof Cladding</th>
	                    <th style="text-align: left">
	                        <select id="HOWRoofVoidSelect3" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWRoofVoidNote3"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWRoofVoidName4">Roof Services</th>
	                    <th style="text-align: left">
	                        <select id="HOWRoofVoidSelect4" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 50px;" id="HOWRoofVoidNote4"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWRoofVoidName5">Roof Void Access</th>
	                    <th style="text-align: left">
	                        <select id="HOWRoofVoidSelect5" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 50px;" id="HOWRoofVoidNote5"></textarea></th>
	                </tr>
	            </table>

	        </div>
	        <div title="OUT BUILDING" style="padding:10px;font-size: 18px">

	            <button type="button" class="btn btn-primary" onclick="createOneOutBuildingSpaceCell()" style="margin-bottom: 10px">Add One Space</button>
	            <!--<button type="button" class="btn btn-primary" style="margin-bottom: 10px">Add One Element</button>-->

	            <!--<button type="button" class="btn btn-primary" style="margin-bottom:10px;">Add One Space</button>-->
	            <div class="zui-wrapper" style="margin-top: 10px">
	                <div class="zui-scroller">
	                    <table class="zui-table" style="font-size: 18px" id="HOWOutBuildingTable">
	                        <thead>
	                        <tr>
	                            <th class="zui-sticky-col" style="white-space: nowrap;height: 60px">Space\Element</th>
	                            <th style="text-align: center" id="HOWOutBuildingElement0">Floor</th>
	                            <th style="text-align: center"  id="HOWOutBuildingElement1">Walls</th>
	                            <th style="text-align: center" id="HOWOutBuildingElement2">Roof/Ceilings</th>
	                            <th style="text-align: center" id="HOWOutBuildingElement3">Windows/Doors</th>
	                            <th style="text-align: center;word-wrap: break-word;width: 153px" id="HOWOutBuildingElement4">Posts/Balustrade/External Framing</th>
	                            <th style="text-align: center" id="HOWOutBuildingElement5" >Elec Fitting</th>
	                            <th style="text-align: center" id="HOWOutBuildingElement6">Dampness</th>
	                            <th style="text-align: center" id="HOWOutBuildingElement7">Access</th>
	                        </tr>
	                        </thead>
	                        <tbody>
	                        <tr>
	                            <th class="zui-sticky-col" style="height: 103px" id="HOWOutBuildingPlace0">Garage</th>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select0" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text0" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select1" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text1" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select2" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text2" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select3" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text3" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select4" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text4" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select5" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text5" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select6" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text6" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td width="12%">
	                                <select id="HOWOutBuildingPlace0Select7" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace0Text7" class="form-control" placeholder="Letter" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <!--<td>15</td>-->
	                            <!--<td>C</td>-->
	                            <!--<td>6'11"</td>-->
	                            <!--<td>08-13-1990</td>-->
	                            <!--<td>$4,917,000</td>-->
	                            <!--<td>Kentucky/USA</td>-->
	                        </tr>
	                        <tr>
	                            <th class="zui-sticky-col" style="height: 103px" id="HOWOutBuildingPlace1">Porch</th>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select0" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text0" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select1" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text1" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select2" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text2" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select3" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text3" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select4" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text4" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select5" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text5" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select6" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text6" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace1Select7" title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace1Text7" class="form-control" placeholder="Letter" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <!--<td class="zui-sticky-col">Isaiah Thomas</td>-->
	                            <!--<td>22</td>-->
	                            <!--<td>PG</td>-->
	                            <!--<td>5'9"</td>-->
	                            <!--<td>02-07-1989</td>-->
	                            <!--<td>$473,604</td>-->
	                            <!--<td>Washington/USA</td>-->
	                        </tr>

	                        <tr>
	                            <th  class="zui-sticky-col" style="height: 103px" id="HOWOutBuildingPlace2">Verandah</th>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select0"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text0" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>
	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select1"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text1" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select2"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text2" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select3"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text3" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select4"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text4" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select5"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text5" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select6"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text6" class="form-control" placeholder="Number" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <td>
	                                <select id="HOWOutBuildingPlace2Select7"  title="checkList"></select>
	                                <textarea id="HOWOutBuildingPlace2Text7" class="form-control" placeholder="Letter" style="height: 50px;margin-top: 10px"></textarea>

	                            </td>
	                            <!--<td class="zui-sticky-col">Ben McLemore</td>-->
	                            <!--<td>16</td>-->
	                            <!--<td>SG</td>-->
	                            <!--<td>6'5"</td>-->
	                            <!--<td>02-11-1993</td>-->
	                            <!--<td>$2,895,960</td>-->
	                            <!--<td>Kansas/USA</td>-->
	                        </tr>
	                        </tbody>
	                    </table>
	                </div>
	            </div>
	        </div>
	        <div title="Services" style="padding:10px;font-size: 18px">
	            <button type="button" class="btn btn-primary" onclick="createOneCell('HOWServicesTable','HOWServiceName','HOWServicesSelect','HOWServiceNote')" style="margin-bottom: 10px;">Add One Services</button>
	            <table id="HOWServicesTable">
	                <tr>
	                    <th style="text-align: left" id="HOWServiceName0">Hot Water System</th>
	                    <th style="text-align: left">
	                        <select id="HOWServicesSelect0" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea id="HOWServiceNote0" class="form-control" placeholder="Number" style="height: 50px;"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWServiceName1">Smoke Detectors</th>
	                    <th style="text-align: left">
	                        <select id="HOWServicesSelect1" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea id="HOWServiceNote1" class="form-control" placeholder="Number" style="height: 50px;"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWServiceName2">Switchboard</th>
	                    <th style="text-align: left">
	                        <select id="HOWServicesSelect2" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea id="HOWServiceNote2" class="form-control" placeholder="Number" style="height: 50px;"></textarea></th>
	                </tr>
	                <tr>
	                    <th style="text-align: left" id="HOWServiceName3">Access</th>
	                    <th style="text-align: left">
	                        <select id="HOWServicesSelect3" style="width:100%"  title="checkList"></select>
	                    <th style="text-align: left"><textarea id="HOWServiceNote3" class="form-control" placeholder="Letter" style="height: 50px;"></textarea></th>
	                </tr>
	            </table>
	        </div>
	        <div title="INTERNAL LIVING & BEDROOM" style="padding: 10px;">
	            <div class="easyui-tabs" style="padding:10px;width:inherit;height:auto" data-options="pill: true,tabPosition:'left',headerWidth:150,tools:'#livingbedroom-tab-tools'" id="livingbedroom-tabs">
	                <div type="tabs_title" title="Entry&Passage" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom0">  <!--data-options="tools:'#internal_tap_strip_tools'" -->
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Entry_Table','HOWInternal_EntryName','HOWInternal_EntrySelect','HOWInternal_EntryNote')" style="margin-bottom: 10px">Add One Feature</button>
						<button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Entry_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote5" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote6" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote7" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote8" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote9" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_EntryName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_EntrySelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternal_EntryNote10" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Stair" style="padding:10px;font-size: 18px"  id="HOW_LivingBedroom1">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Stair_Table','HOWInternal_StairName','HOWInternal_StairSelect','HOWInternal_StairNote')" style="margin-bottom: 10px">Add One Feature</button>
						<button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Stair_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StairNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StairName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StairSelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_StairNote10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Living(Front)" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom2">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_LivingFront_Table','HOWInternal_LivingFrontName','HOWInternal_LivingFrontSelect','HOWInternal_LivingFrontNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_LivingFront_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LivingFrontNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LivingFrontName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LivingFrontSelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_LivingFrontNote10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Lounge" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom3">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Lounge_Table','HOWInternal_LoungeName','HOWInternal_LoungeSelect','HOWInternal_LoungeNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Lounge_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_LoungeNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_LoungeName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_LoungeSelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_LoungeNote10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Kitchen & Pantry" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom4">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Kitchen_Table','HOWInternal_KitchenName','HOWInternal_KitchenSelect','HOWInternal_KitchenNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Kitchen_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_KitchenNote10"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName11">Sink/Water Pressure</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect11" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote11"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName12">Splashback</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect12" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote12"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName13">Bench-top</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect13" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote13"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName14">Exhaust/Range hood</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect14" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote14"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName15">Stove/Cooktop/Oven</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect15" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote15"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_KitchenName16">Dishwasher</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_KitchenSelect16" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_KitchenNote16"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Family" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom5">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Family_Table','HOWInternal_FamilyName','HOWInternal_FamilySelect','HOWInternal_FamilyNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Family_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_FamilyNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_FamilyName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_FamilySelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_FamilyNote10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Dining" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom6">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Dining_Table','HOWInternal_DiningName','HOWInternal_DiningSelect','HOWInternal_DiningNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Dining_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_DiningNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_DiningName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_DiningSelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_DiningNote10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bedroom 1" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom7">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Bedroom1_Table','HOWInternal_Bedroom1Name','HOWInternal_Bedroom1Select','HOWInternal_Bedroom1Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Bedroom1_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select5" style="width:100%"  title="checkList" ></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select6" style="width:100%"  title="checkList" ></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select7" style="width:100%"  title="checkList" ></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select8" style="width:100%"  title="checkList" ></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select9" style="width:100%"  title="checkList" ></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom1Note9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom1Name10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom1Select10" style="width:100%"  title="checkList"> </select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_Bedroom1Note10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bedroom 2" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom8">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Bedroom2_Table','HOWInternal_Bedroom2Name','HOWInternal_Bedroom2Select','HOWInternal_Bedroom2Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Bedroom2_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom2Note9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom2Name10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom2Select10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_Bedroom2Note10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bedroom 3" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom9">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Bedroom3_Table','HOWInternal_Bedroom3Name','HOWInternal_Bedroom3Select','HOWInternal_Bedroom3Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Bedroom3_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name2">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name3">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom3Note9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom3Name10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom3Select10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_Bedroom3Note10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bedroom 4" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom10">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Bedroom4_Table','HOWInternal_Bedroom4Name','HOWInternal_Bedroom4Select','HOWInternal_Bedroom4Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Bedroom4_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name2">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name3">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_Bedroom4Note9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_Bedroom4Name10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_Bedroom4Select10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_Bedroom4Note10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Study" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom11">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Study_Table','HOWInternal_StudyName','HOWInternal_StudySelect','HOWInternal_StudyNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Study_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_StudyNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_StudyName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_StudySelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_StudyNote10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Retreat" style="padding:10px;font-size: 18px" id="HOW_LivingBedroom12">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternal_Retreat_Table','HOWInternal_RetreatName','HOWInternal_RetreatSelect','HOWInternal_RetreatNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('livingbedroom-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternal_Retreat_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote0"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote1"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName2">Walls</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote2"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote3"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote4"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote5"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote6"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote7"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote8"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Number" style="height: 51px;" id="HOWInternal_RetreatNote9"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternal_RetreatName10">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternal_RetreatSelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea class="form-control" placeholder="Letter" style="height: 51px;" id="HOWInternal_RetreatNote10"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	            </div>

	        </div>
	        <div title="INTERNAL SERVICE(WET) AREAS" style="padding: 10px">
	            <div class="easyui-tabs" style="padding:10px;width:inherit;height:auto" data-options="pill: true,tabPosition:'left',headerWidth:150,tools:'#livingbedroom-tab-tools'" id="wetareas-tabs">
	                <div type="tabs_title" title="WC/Powder Room" style="padding:10px;font-size: 18px" id="HOW_WetAreas0">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternalService_WC_Table','HOWInternalService_WCName','HOWInternalService_WCSelect','HOWInternalService_WCNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('wetareas-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternalService_WC_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName2">Walls(incl tiles)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote5" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote6" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote7" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote8" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote9" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName10">Exhaust</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote10" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName11">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect11" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote11" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName12">Mirror</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect12" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote12" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName13">Basin/Trough</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect13" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote13" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_WCName14">Toilet Suite</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_WCSelect14" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_WCNote14" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bathroom 1" style="padding:10px;font-size: 18px" id="HOW_WetAreas1">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternalService_Bathroom1_Table','HOWInternalService_Bathroom1Name','HOWInternalService_Bathroom1Select','HOWInternalService_Bathroom1Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('wetareas-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternalService_Bathroom1_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name2">Walls(incl tiles)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note5" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note6" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note7" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note8" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note9" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name10">Exhaust</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note10" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name11">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select11" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note11" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name12">Mirror</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select12" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note12" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name13">Bath</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select13" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note13" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name14">Basin/Trough</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select14" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note14" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom1Name15">Shower</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom1Select15" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom1Note15" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bathroom 2" style="padding:10px;font-size: 18px" id="HOW_WetAreas2">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternalService_Bathroom2_Table','HOWInternalService_Bathroom2Name','HOWInternalService_Bathroom2Select','HOWInternalService_Bathroom2Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('wetareas-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternalService_Bathroom2_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name2">Walls(incl tiles)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note5" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note6" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note7" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note8" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note9" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name10">Exhaust</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note10" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name11">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select11" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note11" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name12">Mirror</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select12" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note12" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name13">Bath</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select13" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note13" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name14">Basin/Trough</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select14" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note14" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom2Name15">Shower</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom2Select15" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom2Note15" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bathroom 3" style="padding:10px;font-size: 18px" id="HOW_WetAreas3">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternalService_Bathroom3_Table','HOWInternalService_Bathroom3Name','HOWInternalService_Bathroom3Select','HOWInternalService_Bathroom3Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('wetareas-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternalService_Bathroom3_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name2">Walls(incl tiles)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note5" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note6" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note7" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note8" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note9" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name10">Exhaust</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note10" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name11">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select11" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note11" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name12">Mirror</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select12" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note12" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name13">Bath</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select13" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note13" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name14">Basin/Trough</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select14" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note14" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom3Name15">Shower</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom3Select15" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom3Note15" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Bathroom 4" style="padding:10px;font-size: 18px" id="HOW_WetAreas4">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternalService_Bathroom4_Table','HOWInternalService_Bathroom4Name','HOWInternalService_Bathroom4Select','HOWInternalService_Bathroom4Note')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('wetareas-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternalService_Bathroom4_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name2">Walls(incl tiles)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note5" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note6" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note7" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note8" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note9" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name10">Exhaust</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note10" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name11">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select11" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note11" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name12">Mirror</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select12" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note12" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name13">Bath</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select13" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note13" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name14">Basin/Trough</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select14" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note14" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_Bathroom4Name15">Shower</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_Bathroom4Select15" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_Bathroom4Note15" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Laundry" style="padding:10px;font-size: 18px" id="HOW_WetAreas5">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternalService_Laundry_Table','HOWInternalService_LaundryName','HOWInternalService_LaundrySelect','HOWInternalService_LaundryNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('wetareas-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternalService_Laundry_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName0">Floor(Structure)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName1">Floor(Cover)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName2">Walls(incl tiles)</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName3">Windows</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName4">Doors</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName5">Ceiling</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote5" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName6">Joinery</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect6" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote6" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName7">Elec.Fittings</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect7" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote7" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName8">Ventilation</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect8" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote8" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName9">Dampness</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect9" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote9" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName10">Exhaust</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect10" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote10" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName11">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect11" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote11" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName12">Mirror</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect12" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote12" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_LaundryName13">Basin/Trough</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_LaundrySelect13" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_LaundryNote13" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	                <div type="tabs_title" title="Services" style="padding:10px;font-size: 18px" id="HOW_WetAreas6">
	                    <button type="button" class="btn btn-primary" onclick="createOneCell('HOWInternalService_Service_Table','HOWInternalService_ServiceName','HOWInternalService_ServiceSelect','HOWInternalService_ServiceNote')" style="margin-bottom: 10px">Add One Feature</button>
	                    <button type="button" class="btn btn-primary" onclick="editRoomName('wetareas-tabs')" style="margin-bottom: 10px">Edit Room Name</button>
						<table id="HOWInternalService_Service_Table">
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_ServiceName0">Heater/Unit</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_ServiceSelect0" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_ServiceNote0" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_ServiceName1">Cooler/Unit</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_ServiceSelect1" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_ServiceNote1" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_ServiceName2">Hot Water Service</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_ServiceSelect2" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_ServiceNote2" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_ServiceName3">Smoke Detector/s</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_ServiceSelect3" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_ServiceNote3" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_ServiceName4">Switchboard</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_ServiceSelect4" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_ServiceNote4" class="form-control" placeholder="Number" style="height: 51px;"></textarea></th>
	                        </tr>
	                        <tr>
	                            <th style="text-align: left" id="HOWInternalService_ServiceName5">Access</th>
	                            <th style="text-align: left">
	                                <select id="HOWInternalService_ServiceSelect5" style="width:100%"  title="checkList"></select>
	                            <th style="text-align: left"><textarea id="HOWInternalService_ServiceNote5" class="form-control" placeholder="Letter" style="height: 51px;"></textarea></th>
	                        </tr>
	                    </table>
	                </div>
	            </div>
	        </div>
	        <div title="IMAGES" style="padding:10px;font-size: 18px">
	<!--
	            <div class="container">
	                <input type="button" id="get_drawing" value="Upload Images" class="uploadImageButton"
	                       onclick="HOWUploadImages()" style="white-space: normal; width: 15%">
	                <input type="file" id="HOWUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>

	            </div>
	-->
	<!--
	            <div class="container">
	                <table id="HOWImagesTable" style="display: none">
	                    <tr>
	                        <th>
	                            <div class="row form-group" id="HOWImagesDIV">
	                            </div>

	                        </th>
	                    </tr>
	                </table>
	                <br>
	            </div>
	-->
	            <button id="HOW_uploadImg_Btn" class="btn btn-primary">Upload Images</button>
	                    <input type="file" id="HOW_ImgsUpload" accept="image/x-png,image/jpeg" multiple/>
	                    <div id="Img-main-container">
	                        <div id="HOWImagesTable"></div>
	                    </div>
	        </div>
	        <div title="Defects and Incomplete Work" style="padding:10px;font-size: 18px">
	                <button type="button" class="btn btn-primary" onclick="moreDefects()">Add One Item</button>
	                <p></p>
	                <table id="HOWDefectsTable">
	                    <tr>
	                        <th  style="color: #f44336;text-align: center">ITEM No.</th>
	                        <th style="color: #f44336;text-align: center">It is recommended that purchasers obtain their own report on the condition of the building</th>
	                    </tr>
	                    <tr>
	                        <td><input class="form-control"  title="itemNo" id="HOWDefectItem0" type="text"></td>
	                        <td><textarea style="height: 60px;" class="form-control" title="description" id="HOWDefectDescription0" ></textarea></td>
	                        <!--<td><input class="form-control"  title="description" id="HOWDefectDescription0" ></td>-->
	                    </tr>
	                    <tr>
	                        <td><input class="form-control"   title="itemNo" id="HOWDefectItem1" type="text"></td>
	                        <td><textarea style="height: 60px;" class="form-control" title="description" id="HOWDefectDescription1" ></textarea></td>
	                        <!--<td><input class="form-control" title="description"  id="HOWDefectDescription1"></td>-->
	                    </tr>
	                </table>
	        </div>
	        <div title="Access" style="padding:10px;font-size: 18px">
	            <button type="button" class="btn btn-primary" onclick="moreAccessLimitation()">More Access Limitation</button>
	            <p></p>
	            <table id="HOWAccessTable">
	                <tr>
	                    <th  style="color: #f44336;text-align: center">ITEM No.</th>
	                    <th style="color: #f44336;text-align: center">The following access limitations were encountered during the property inspection:</th>
	                </tr>
	                <tr>
	                    <td><input class="form-control"  title="itemNO" id="HOWAccessItem0" type="text"></td>
	                    <td><textarea class="form-control" style="height: 60px"  title="description" id="HOWAccessDescription0" ></textarea></td>
	                    <!--<td><input class="form-control"  title="description" id="HOWAccessDescription0" ></td>-->
	                </tr>
	                <tr>
	                    <td><input class="form-control"  title="itemNO" id="HOWAccessItem1" type="text"></td>
	                    <td><textarea class="form-control" style="height: 60px"  title="description" id="HOWAccessDescription1" ></textarea></td>
	                    <!--<td><input class="form-control" title="description"  id="HOWAccessDescription1"></td>-->
	                </tr>
	            </table>

	        </div>
	        <div title="Referenced Documents" style="padding: 10px;font-size: 18px">
	            <p style="margin-top: 10px;margin-bottom: 10px">
	                The Property Maintenance Guide and Health & Safety Warnings Technical Information Sheets are an important part of this Report.
	                These, and other Technical Information Sheets which may be of interest,
	                can be downloaded from the Archicentre Australia Supplementary Documents page:
	                <a href="http://www.archicentreaustralia.com.au/report_downloads/">http://www.archicentreaustralia.com.au/report_downloads/</a>
	            </p>
	            <p style="margin-top: 10px;margin-bottom: 20px">
	                If you have difficulty downloading the Technical Information Sheets, please contact Archicentre Australia on 1300 13 45 13 immediately.
	            </p>
	            <div class="row" style="margin-top: 2px">
	                <div class="col-sm-4">
	                    <label>Property Maintenance Guide</label>
	                    <select id="propertyMaintenanceGuide" style="width:100%" title="referenced document">
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
	                    <select id="crackingInMasonry" style="width:100%" title="referenced document">
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
	                    <select id="treatmentOfDampness" style="width:100%" title="referenced document">
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
	                    <select id="healthSafetyWarning" style="width:100%" title="referenced document">
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
	                    <select id="roofingGuttering" style="width:100%" title="referenced document">
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
	                    <select id="reStumping" style="width:100%" title="referenced document">
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
	                    <select id="termitesBorers" style="width:100%" title="referenced document">
	                        <optgroup label="No Visible Significant Defect">
	                            <option value="√">✔</option>
	                        </optgroup>
	                        <optgroup label="Major Defect">
	                            <option value="NA">Not applicable, no such item</option>
	                        </optgroup>
	                    </select>

	                </div>
	                <div class="col-sm-4">
	                    <label>CostGuide</label>
	                    <select id="costGuide" style="width:100%" title="referenced document">
	                        <optgroup label="No Visible Significant Defect">
	                            <option value="√">✔</option>
	                        </optgroup>
	                        <optgroup label="Major Defect">
	                            <option value="NA">Not applicable, no such item</option>
	                        </optgroup>
	                    </select>
	                </div>
	                <div class="col-sm-4">
	                    <label>Home Safety Checklist</label>
	                    <select id="homeSafetyChecklist" style="width:100%" title="referenced document">
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

<!-- <div id="internal-tab-tools">
    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-newnote'" onclick="addPanel('internal-tabs')"></a>
    <a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-trash'" onclick="removePanel('internal-tabs')"></a>
</div> -->

<div id="dlgRoomNew" class="easyui-dialog" title="New Room Name" style="width:400px;height:200px;padding:10px" data-options="resizable: false, modal: true, closable: false, closed: true">
    <div style="margin-bottom:20px">
        <input class="easyui-textbox" id="fldNewRoomName" label="Room Name:" labelPosition="top" data-options="prompt:'Enter the room name'" style="width:80%;height:60px;">
    </div>

</div>

<div id="internal_tap_strip_tools">
        <a href="javascript:void(0)" class="icon-edit" onclick="editRoomName()"></a>
</div>

<!--Actions -->
<!--<div id="newInternalRoom">-->
    <!--<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="alert('add One Internal Room')"></a>-->
<!--</div>-->
<!--<div id="tab-tools">-->
    <!--<a href="javascript:void(0)" class="easyui-linkbutton" data-options="plain:true,iconCls:'icon-add'" onclick="alert('add One Room')"></a>-->

<!--</div>-->
<!--<div id="p-tools">-->
    <!--<a href="javascript:void(0)" class="icon-mini-add" onclick="alert('add')"></a>-->

<!--</div>-->


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
<script src="HOWJS/PDFGenerator.js?<?php echo time(); ?>"></script>
<!--General Functions-->
<script src="HOWJS/generalFunctions.js?<?php echo time(); ?>"></script>
<script src="HOWJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>

<!--Text-->
<script src="HOWJS/text.js?<?php echo time(); ?>"></script>
<!--Table Data-->
<script src="HOWJS/getTableData.js?<?php echo time(); ?>"></script>



</body>
</html>
