<?php
  require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Architect's Advice Report</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--  Import JQuery  -->
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
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
<body>
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
    <h2 class="content-head text-center firstH1">Architect's Advice Report</h2><br>
    <p>
        This Report provides independent expert advice from a registered architect about any building or
        property related design, construction or maintenance matters.
    </p>
</div>

<!--Details-->
<div id="AdviceCustomerDetails" class="container">
    <hr>
    <h3 class="sectionSubHead">CUSTOMER DETAILS</h3>
    <form>
        <div class="row">
            <div class="col-sm-4">
                <label>Name</label><br>
                <input class="form-control" type="text" title="name" id="customer_name" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
            </div>
            <div class="col-sm-4">
                <label>Phone</label><br>
                <input class="form-control" type="text" title="phone" id="customer_phone" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
            </div>
            <div class="col-sm-4">
                <label>Booking No.</label><br>
                <input class="form-control" type="text" title="bookingNo" id="customer_booking" value="<?php echo $bookingcode; ?>">
            </div>
        </div>
    </form>
    <hr>
    <br>

</div>
<div id="AdvicePropertyDetails" class="container">
    <h3 class="sectionSubHead">PROPERTY DETAILS</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Address of Property:</label><br>
                <input  class="form-control" type="text" title="address" id="address" value="<?php echo doNiceArrayElemAsString('address1'); ?>">
            </div>
        </div>
        <div class="row" style="margin-bottom: 10px">
            <div class="col-sm-4">
                <label>Suburb</label><br>
                <input  class="form-control" type="text" title="suburb" id="suburb" value="<?php echo doNiceArrayElemAsString('city'); ?>">
            </div>
            <div class="col-sm-4">
                <label>State</label><br>
                <input   class="form-control" type="text" title="state" id="state" value="<?php echo doNiceArrayElemAsString('state', false); ?>">
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
                <!--</select>-->
            </div>
            <div class="col-sm-4">
                <label>Postcode</label><br>
                <input  class="form-control" type="text" title="postcode" id="postcode" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-6">
                <label>Date of Assessment</label><br>
                <textarea  class="form-control" title="dateOfAssessment" id="dateOfAssessment"></textarea>
            </div>
            <div class="col-sm-6">
                <label>Time of Assessment</label><br>
                <textarea   class="form-control" title="timeOfAssessment" id="timeOfAssessment"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-6">
                <label>Existing Use of Property</label><br>
                <textarea   class="form-control" title="usage" id="proposedUsed"></textarea>
            </div>
            <div class="col-sm">
                <label>Weather Conditions</label><br>
                <textarea  class="form-control" title="weather" id="weatherConditions"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label>Verbal Summary to</label><br>
                <textarea   class="form-control" title="verbalSummary" id="verbalSummary"></textarea>
            </div>
            <div class="col-sm-6">
                <label>Date:</label><br>
                <textarea   class="form-control" title="date" id="date"></textarea>
            </div>

        </div>
    </form>
    <br>
    <hr>
</div>
<div id="AdviceArchitectDetails" class="container">
    <h3 class="sectionSubHead">ARCHITECT DETAILS</h3>
    <form>
        
        <div class="row form-group">
            <div class="col-sm-6">
                <label>Your Architect:</label>
                <input class="form-control" type="text" id="architect" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
            </div>
            <div class="col-sm-6">
                <label>Registration No:</label>
                <input class="form-control" type="text" title="registrationNo" id="registrationNo" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-6">
                <label>Phone</label><br>
                <input class="form-control" type="text" title="phone" id="architectPhone" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
            </div>
            <div class="col-sm-6">
                <label>Email</label><br>
                <input class="form-control" type="text" id="email" title="email" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
            </div>
        </div>

            
 
        <div class="row form-group">
            <div class="col-sm">
                <label>Address:</label>
                <input class="form-control" type="text" title="architectAddress" id="architectAddress"  value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>" >
            </div>
        </div>
    </form>
    <hr>
</div>
<div id="AdviceDetails" class="container">
    <h3 class="sectionSubHead">DETAILS OF ADVICE SOUGHT</h3>
    <textarea  class="form-control" title="details of advice sought" id="adviceDetail"></textarea>
    <br>
    <br>
</div>
<div id="AdviceCoverImageDiv" class="container">
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <input type="button" value="Upload Cover Image" class="uploadCoverImageButton"
                       onclick="AdviceCover()">
                <input type="file" id="AdviceUploadCoverImage" class="inputImage" accept="image/x-png,image/jpeg">
            </div>
            <div class="col-sm">
                <div class="col-sm">
                    <img id="AdviceCoverImage" src="#" alt="Image1"
                         style="width:0;height:265px;display: none"/>
                </div>
                <div class="col-sm">
                    <input type="button" value="Remove" id="AdviceCoverImageRemoveButton"
                           onclick="RemoveAdviceCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px">
                    <br>
                </div>
            </div>
        </div>
    </form>
    <br>
    <hr style="height:1px;color:#333;background-color:#333;">
    <br>
    <br>
</div>

<!--Advice-->
<div id="Advice" class="container">
    <h3 style="color: red;font-weight: bold;">Architect's Advice</h3>
    <table>
        <tr style="width: 100%">
            <th class="sectionSubHeaderSmaller" colspan="6" style="color: red">Advice Summary:</th>
        </tr>
        <tr>
            <td colspan="2">
                <textarea rows="10" class="form-control" style="padding: 2px 2px; height: 400px" id="adviceSummary" title="advice summary"></textarea>
            </td>

        </tr>
        <tr>
            <td style="font-weight: bold" align="center">Address:</td>
            <td> <input class="form-control" type="text" title="address" id="adviceAddress"></td>
        </tr>
    </table>
    <hr>
</div>

<div class="container">
    <div class="container">
        <input type="button" id="get_ConstructionImage" value="Upload Images (Max 30 images)" class="uploadImageButton"
               onclick="AdviceUploadImage()" style="white-space: normal; width: 15%">
        <input type="file" id="AdviceUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
    </div>
    <div class="container">
        <table id="AdviceImagesTable" style="display: none">
            <tr>
                <th>
                    <div class="row form-group" id="AdvicePhotographs">
                    </div>

                </th>
            </tr>
        </table>
        <br>
    </div>
    <hr style="height:1px;color:#333;background-color:#333;">
</div>






<!--Attachments-->
<div class="container">
    <h2 class="content-head text-center firstH1">Attachments</h2><br>
</div>
<div class="container">
    <hr>
    <p>
        The following selected attachments are an important part of this Report. These can be downloaded from the
        Archicentre Australia Supplementary Documents page –
        <a href="http://www.archicentreaustralia.com.au/report_downloads/">http://www.archicentreaustralia.com.au/report_downloads/</a>
        -or by referring to the Report cover email for downloading instructions. If you have difficulty downloading the
        following ticked attachments, please contact Archicentre Australia on 1300 13 45 13 immediately.

    </p>
</div>
<div class="container">
    <div class="row">
        <div class="col-sm">
            <label>Property Maintenance Guide</label>
            <select id="propertyMaintenanceGuide" style="width:100%" title="Property Maintenance Guide">
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
            <select id="crackingInMasonry" style="width:100%" title="crackingMasonry">
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
            <select id="treatmentOfDampness" style="width:100%" title="treatment">
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
            <select  style="width:100%" title="health" id="healthSafetyWarning">
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
            <select style="width:100%" title="roofing" id="roofingGuttering">
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
            <select  style="width:100%" title="homeSafetyChecklist" id="homeSafetyChecklist">
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
            <select style="width:100%" title="termites" id="termitesBorers">
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
            <select style="width:100%" title="re-stumping" id="reStumping">
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
            <select style="width:100%" title="costGuide" id="costGuide">
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
    <button onclick="checkPDF()" type="button" class="btn btn-primary">Save as Report for Customer</button>
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



<script src="js/images.js"></script>
<script src="js/loadImageJS/load-image.all.min.js"></script>



<!--Text File-->
<script src="AdviceJS/text.js?<?php echo time(); ?>"></script>
<!--PDF Generator-->
<script src="AdviceJS/PDFGenerator.js?<?php echo time(); ?>"></script>
<!--General Functions-->
<script src="AdviceJS/generalFunctions.js?<?php echo time(); ?>"></script>
<script src="AdviceJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
<!--Get Table's Data-->
<script src="AdviceJS/getTableData.js?<?php echo time(); ?>"></script>




</body>
</html>