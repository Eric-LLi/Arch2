<?php
  require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html>

<head>
    <title>Maintenance Advice - <?php echo $bookingcode; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--  Import JQuery  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <!-- <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
    <script src="js/jquery-1.12.4.min.js"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <!--&lt;!&ndash; Customized CSS &ndash;&gt;-->
    <!--<link rel="stylesheet" href="css/general.css">-->
    <!--<link rel="stylesheet" href="css/maintenanceCSS.css">-->
    <!--&lt;!&ndash;  Import pdfMake  &ndash;&gt;-->
    <!--<script src='node_modules/pdfmake/build/pdfmake.min.js'></script>-->
    <!--<script src='node_modules/pdfmake/build/vfs_fonts.js'></script>-->
    <!-- Customized CSS -->
    <!--<link rel="stylesheet" href="../CSS/general.css">-->
    <!--<link rel="stylesheet" href="../CSS/maintenanceCSS.css">-->
    <link rel="stylesheet" href="css/general.css?<?php echo time(); ?>">
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
<!--Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">ArchiCentre Task</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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

<!-- Title  -->
<div class="container">
    <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
        <strong>Saving PDF. Please don't close this page. It will take a while</strong>
    </div>
    <h2 class="content-head text-center firstH1">Maintenance Advice Report</h2><br>
    <p>
        This Maintenance Advice Report provides independent expert advice from a registered architect about the cause of
        an apparent building defect or defects and clear rectification recommendations.
    </p>
</div>
<!-- Inspection Info -->
<div id="MaintenanceCustomerDetails" class="container">
    <hr>
    <h3 class="sectionSubHead">CLIENT DETAILS</h3>
    <form>
        <div class="row">
            <div class="col-sm-6">
                <label>Name</label><br>
                <input id="0" class="form-control" type="text" title="name" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
            </div>
            <div class="col-sm-6">
                <label>Booking No.</label><br>
                <input id="2" class="form-control" type="text" title="booking number" value="<?php echo $bookingcode; ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Phone</label><br>
                <input id="1" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Mobile</label>
                <br>
                <input id="customer_mobile" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
            </div>
        </div>
    </form>
    <br>
    <div class="row form-group">
        <div class="col-sm">
            <label>Advice Required:</label><br>
            <textarea id="3" class="form-control" title="advice"></textarea>
        </div>
        <div class="col-sm">
            <label>Service Scope</label><br>
            <textarea id="4" class="form-control" title="service scope"></textarea>
        </div>
    </div>
    <br>
    <hr>
</div>
<div id="MaintenanceAssessmentDetails" class="container">
    <h3 class="sectionSubHead">ASSESSMENT DETAILS</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Address of Property:</label><br>
                <input id="5" class="form-control" type="text" title="address" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Suburb</label><br>
                <input id="6" class="form-control" type="text" title="suburb" value="<?php echo doNiceArrayElemAsString('city'); ?>">
            </div>
            <div class="col-sm">
                <label>State</label><br>
                <select id="state" style="width:100%;height: 50px;margin-top: 6px" title="state" >
                    <option <?php if(doNiceArrayElemAsString('state', false)==""){echo "selected";};?> disabled value="">Select a State</option>
                    <option <?php if(doNiceArrayElemAsString('state', false)=="VIC"){echo "selected";} ;?> value="VIC">VIC</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="NSW"){echo "selected";};?> value="NSW">NSW</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="QLD"){echo "selected";};?> value="QLD">QLD</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="SA"){echo "selected";};?> value="SA">SA</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="WA"){echo "selected";};?> value="WA">WA</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="TAS"){echo "selected";};?> value="TAS">TAS</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="ACT"){echo "selected";};?>  value="ACT">ACT</option>
                    <option  <?php if(doNiceArrayElemAsString('state', false)=="NT"){echo "selected";};?>  value="NT">NT</option>
                </select>
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
                <!--</select>-->
            </div>
            <div class="col-sm">
                <label>Postcode</label><br>
                <input id="8" class="form-control" type="text" title="postcode" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
            </div>
        </div>
        <br>
        <div class="row form-group">
            <div class="col-sm">
                <label>Date of Assessment</label><br>
                <textarea id="9" class="form-control" title="date of assessment"></textarea>
            </div>
            <div class="col-sm">
                <label>Time of Assessment</label><br>
                <textarea id="10" class="form-control" title="time of assessment"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Existing Use of Property</label><br>
                <textarea id="11" class="form-control" title="user of property"></textarea>
            </div>
            <div class="col-sm">
                <label>Weather Conditions</label><br>
                <textarea id="12" class="form-control" title="weather condtions"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label>Verbal Summary to</label><br>
                <textarea id="13" class="form-control" title="verbal summary"></textarea>
            </div>
            <div class="col-sm-6">
                <label>Date:</label><br>
                <textarea id="14" class="form-control" title="date"></textarea>
            </div>

        </div>
    </form>
    <br>
    <hr>
</div>
<div id="MaintenanceInspectorDetails" class="container">
    <h3 class="sectionSubHead">ARCHITECT DETAILS</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Your Architect:</label>
                <input id="15" class="form-control" type="text" title="architect" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
            </div>
            <div class="col-sm">
                <label>Registration No:</label>
                <input id="16" class="form-control" type="text" title="registration number" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Address:</label>
                <input id="17" class="form-control" type="text" title="address" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Email</label><br>
                <input id="18" class="form-control" type="text" title="email" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
            </div>
            <div class="col-sm">
                <label>Phone</label><br>
                <input id="19" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
            </div>
        </div>
    </form>
    <hr>
</div>
<div id="MaintenancePropertySummary" class="container">
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
                <input id="ps4" class="form-control" type="text" title="storeys">
            </div>
            <div class="col-sm">
                <label>Windows</label><br>
                <input id="ps5" class="form-control" type="text" title="windows">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Site Grade</label><br>
                <input id="ps6" class="form-control" type="text" title="site grade">
            </div>
            <div class="col-sm">
                <label>Furnished</label><br>
                <input id="ps7" class="form-control" type="text" title="furnished">
            </div>
            <div class="col-sm">
                <label>Tree Coverage</label><br>
                <input id="ps8" class="form-control" type="text" title="tree coverage">
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Extension / Renovations</label><br>
                <input id="ps9" class="form-control" type="text" title="extension/renovations">
            </div>
            <div class="col-sm">
                <label>Estimated Age / Period</label><br>
                <input id="ps10" class="form-control" type="text" title="period">
            </div>
        </div>
    </form>
    <hr>
</div>
<div id="MaintenanceCoverImageDiv" class="container">
    <form>
        <div class="row form-group">
            <div class="col-sm-6">
                <input type="button" value="Upload Cover Image" class="uploadCoverImageButton"
                       onclick="MaintenanceCover()">
                <input type="file" id="MaintenanceUploadCoverImage" class="inputImage" accept="image/x-png,image/jpeg">
            </div>
            <div class="col-sm-6">
                <div class="col-sm">
                    <img id="MaintenanceCoverImage" src="#" alt="Image1"
                         style="width:400px;display: none"/>
                </div>
                <div class="col-sm">
                    <input class="btn btn-danger" type="button" value="Remove" id="MaintenanceCoverImageRemoveButton"
                           onclick="RemoveMaintenanceCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px;width:400px">
                    <br>
                </div>
                <div class="col-sm">
                    <input type="text" id="MaintenanceCoverImageAngle" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                <br>
                </div>
                <div class="col-sm">
                    <input class="btn btn-info" type="button" value="Rotate" id="MaintenanceCoverImageRotateButton" onclick="RotateCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                    <br>
                </div>
            </div>
        </div>
    </form>
</div>

<!--Summary-->
<div class="container">
    <h2 class="content-head text-center firstH1">Your Maintenance Advice Summary</h2><br>
</div>
<div class="container">
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px;">Executive Summary: </label>
                <label style="width:100%">The following summarizes our advice with respect to particular concerns identified at the property</label>
                <textarea id="YMAS-TEXT1" title="summary"
                          class="autoExpand"
                          style="border: 2px solid #000000;height: 200px" placeholder="Please write down the brief summary here..."></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Consequences: </label>
                <label style="width:100%">Significant risk or cost consequences of not proceeding with this advice are as follows:</label>
                <textarea id="YMAS-TEXT2"
                          placeholder="Please write down the brief consequences here..."
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <!--&#10;(Bullet points will be assigned automatically.) -->
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Recommendations:</label>
                <label style="width:100%">Under the circumstances our recommendations are as follows</label>
                <textarea id="YMAS-TEXT3"
                          placeholder="Please write down the brief recommendations here..."
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
                <!-- <textarea id="YMAS-TEXT3"
                          placeholder="Please write down the brief recommendations here..."
                          class="form-control" style="border: 2px solid #000000;height: 200px" onfocus="startBullet('YMAS-TEXT3')" onkeyup="assignBullet('YMAS-TEXT3')"></textarea> -->
            </div>
        </div>
    </form>
    <br>
    <hr>
</div>

<div class="container">
    <h2 class="content-head text-center firstH1">Introduction</h2><br>
</div>
<div class="container">
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">The property comprises: </label>
                <textarea id="INTRO-TEXT1" title="summary"
                          class="autoExpand"
                          style="border: 2px solid #000000;height: 200px" placeholder=""></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Client Motivation for this report: </label>
                <textarea id="INTRO-TEXT2"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Externally: </label>
                <textarea id="INTRO-TEXT3"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Internally: </label>
                <textarea id="INTRO-TEXT4"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
    </form>
    <br>
    <hr>
</div>

<div class="container">
    <h2 class="content-head text-center firstH1">Advice</h2><br>
</div>
<div class="container">
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Document Retrieval: </label>
                <textarea id="ADVICE-TEXT1" title="summary"
                          class="autoExpand"
                          style="border: 2px solid #000000;height: 200px" placeholder=""></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Priorities: </label>
                <textarea id="ADVICE-TEXT2" title="summary"
                          class="autoExpand"
                          style="border: 2px solid #000000;height: 200px" placeholder=""></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Observations and Analysis:</label>
                <textarea id="ADVICE-TEXT3"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Recommendations – Initial Scope: </label>
                <textarea id="ADVICE-TEXT4"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Recommendations – Long Term Strategies: </label>
                <textarea id="ADVICE-TEXT5"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Consequences: </label>
                <textarea id="ADVICE-TEXT6"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="MaintenSectionSubHead" style="font-size: 20px">Summary: </label>
                <textarea id="ADVICE-TEXT7"
                          placeholder=""
                          class="form-control" style="border: 2px solid #000000;height: 200px"></textarea>
            </div>
        </div>
        <!-- <div class="easyui-texteditor" title="TextEditor" style="width:700px;height:300px;padding:20px" id="texteditor">
           
        </div> -->
    </form>
    <br>
    <hr>
</div>
<!--Advice-->
<!-- <div class="container">
    <h2 class="content-head text-center firstH1">Advice</h2><br>
</div>
<div class="container">
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label class="sectionSubHead" style="font-size: 20px">Observations and Analysis: </label>
                <textarea id="ADVICE-TEXT1" class="form-control" style="height: 200px" title="observation"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="sectionSubHead" style="font-size: 20px">Recommendations: </label>
                <textarea id="ADVICE-TEXT2" class="form-control" style="height: 200px" title="recommendation"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="sectionSubHead" style="font-size: 20px">Consequence: </label>
                <label style="width:100%">Significant risk or cost consequences of not proceeding with this advice are as follows:</label>
                <textarea id="ADVICE-TEXT3" class="form-control" style="height: 200px" title="consequence" onfocus="startBullet('ADVICE-TEXT3')" onkeyup="assignBullet('ADVICE-TEXT3')"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label class="sectionSubHead" style="font-size: 20px">Summary: </label>
                <textarea id="ADVICE-TEXT4" class="form-control" style="height: 200px" title="summary"></textarea>
            </div>
        </div>
    </form>
    <br>
    <hr>
</div> -->

<!--Photographs-->
<div class="container">
    <h2 class="content-head text-center firstH1">Photographs</h2><br>
</div>
<div class="container">
    <input type="button" id="get_image" value="Upload Images (Max 40 images)" class="uploadImageButton"
           onclick="MaintenanceUploadImages()" style="white-space: normal; width: 15%">
    <input type="file" id="MaintenanceUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    <input type="file" id="MaintenanceUploadOneImage" class="inputImage" accept="image/x-png,image/jpeg">

</div>
<div class="container">
    <table id="MaintenanceImagesTable" style="display: none">
        <tr>
            <th>
                <div class="row form-group" id="MaintenancePhotographs">
                </div>

            </th>
        </tr>
    </table>
    <br>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!--Drawings-->
<div class="container">
    <h2 class="content-head text-center firstH1">Drawings</h2><br>
</div>
<div class="container">
    <input type="button" id="get_drawing" value="Upload Drawings (Max 6 drawings)" class="uploadImageButton"
           onclick="MaintenanceUploadDrawings()" style="white-space: normal; width: 15%">
    <input type="file" id="MaintenanceUploadDrawings" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    <input type="file" id="MaintenanceUploadOneDrawing" class="inputImage" accept="image/x-png,image/jpeg">

</div>
<div class="container">
    <table id="MaintenanceDrawingsTable" style="display: none">
        <tr>
            <th>
                <div class="row form-group" id="MaintenanceDrawings">
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
        The following selected attachments are an important part of this Report. These can be downloaded from the
        Archicentre Australia Supplementary Documents page – click
        <a href="http://www.archicentreaustralia.com.au/report_downloads/">http://www.archicentreaustralia.com.au/report_downloads/</a>
        -or by referring to the Report cover email for downloading instructions. If you have difficulty downloading the
        following ticked attachments, please contact Archicentre Australia on 1300 13 45 13 immediately.
    </p>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <label class="attachmentlabel">Property Maintenance Guide</label>
            <select id="6000" style="width:100%" title="attachment selection">
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
            <select id="6001" style="width:100%" title="attachment selection">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm-4">
            <label class="attachmentlabel">Treatment of Dampness</label>
            <select id="6002" style="width:100%" title="attachment selection">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
    </div>
    <div class="row" style="margin-top:20px">
        <div class="col-sm-4">
            <label class="attachmentlabel">Health & Safety Warning</label>
            <select id="6003" style="width:100%" title="attachment selection">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm-4">
            <label class="attachmentlabel">Roofing & Guttering</label>
            <select id="6004" style="width:100%" title="attachment selection">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm-4">
            <label class="attachmentlabel">Re-stumping</label>
            <select id="6005" style="width:100%" title="attachment selection">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
    </div>
    <div class="row" style="margin-top:20px">
        <div class="col-sm-4">
            <label class="attachmentlabel">Termites & Borers</label>
            <select id="6006" style="width:100%" title="attachment selection">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm-4">
            <label class="attachmentlabel">Cost Guide</label>
            <select id="6007" style="width:100%" title="attachment selection">
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
            <!-- <button onclick="checkPDF()" type="button" class="btn btn-primary">Save as Report for Customer</button> -->
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

<!--<script src="js/addLabels.js"></script>-->
<!--<script src="js/clearLabels.js"></script>-->
<!--<script src="js/showMore.js"></script>-->
<!--<script src="js/uploadImages.js"></script>-->
<!--<script src="js/removeImages.js"></script>-->
<!--<script src="MaintenanceJS/coco.js"></script>-->
<!--<script src="MaintenanceJS/text.js"></script>-->
<!--&lt;!&ndash;General Functions&ndash;&gt;-->
<!--<script src="MaintenanceJS/generalFunctions.js"></script>-->
<!--&lt;!&ndash;PDF Generator&ndash;&gt;-->
<!--<script src="MaintenanceJS/PDFGenerator.js"></script>-->
<!--<script src="MaintenanceJS/getTables.js"></script>-->

<!--<script src="../JS/uploadImages.js"></script>-->

<!--<script src="../JS/removeImages.js"></script>-->
<script src="js/images.js"></script>
<script src="js/loadImageJS/load-image.all.min.js"></script>

<script src="MaintenanceJS/text.js?<?php echo time(); ?>"></script>
<!--General Functions-->
<script src="MaintenanceJS/generalFunctions.js?<?php echo time(); ?>"></script>
<script src="MaintenanceJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
<!--PDF Generator-->
<script src="MaintenanceJS/PDFGenerator.js?<?php echo time(); ?>"></script>
<script src="MaintenanceJS/getTables.js?<?php echo time(); ?>"></script>

 <!-- <script type="text/javascript"> 
       window.onload = function(){
           console.log("page has loaded, should do something");
        //    console.log(<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>);
           document.getElementById('0').value = "<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>";
           document.getElementById('1').value = "<?php echo doNiceArrayElemAsString('custmobile'); ?>";
           document.getElementById('2').value = "<?php echo $bookingcode; ?>";
           document.getElementById('5').value = "<?php echo doNiceArrayElemAsString('address1'); ?>";


       }
</script> -->

</body>
</html>