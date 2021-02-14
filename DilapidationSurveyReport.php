<?php
  require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dilapidation Survey - <?php echo $bookingcode; ?></title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <!-- Customized CSS -->
    <link rel="stylesheet" href="css/general.css?<?php echo time(); ?>">
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
    <h2 class="content-head text-center firstH1">Dilapidation Survey Report</h2><br>
    <p>
        The Dilapidation Survey Report is a special purpose property inspection report undertaken to provide a visual
        assessment of constructional and cosmetic fabric defects, which are or may be related to movement of the structure
        or fabric of the subject property evident on the day of the inspection prior to the commencement of neighbouring construction works.
        <br>The report will provide a photographic record of evident constructional or related defects.
    </p>
</div>
<!--Details-->
<div id="clientDetails" class="container">
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
                <input id="8" class="form-control" type="text" title="bookingNo" value="<?php echo $bookingcode; ?>">
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
</div>
<div id="assessmentDetails" class="container">
    <h3 class="sectionSubHead">ASSESSMENT DETAILS</h3>
    <form>
        <div class="row">
            <div class="col-sm">
                <label>Address</label><br>
                <input id="2" class="form-control" type="text" title="address" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
            </div>
        </div>
        <div class="row" style="margin-top: 3px">
            <div class="col-sm">
                <label>Suburb</label><br>
                <input id="3" class="form-control" type="text" title="suburb" value="<?php echo doNiceArrayElemAsString('city'); ?>">
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
                <input id="11" class="form-control" type="text" title="postcode" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
            </div>
        </div>
    </form>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Date of Assessment</label><br>
                <textarea id="4" class="form-control" title="dateOfAssessment"></textarea>
            </div>
            <div class="col-sm">
                <label>Time of Assessment</label><br>
                <textarea id="10" class="form-control" title="time of assessment"></textarea>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Existing Use of Property</label><br>
                <textarea id="5" class="form-control" title="existing use"></textarea>
            </div>
            <div class="col-sm">
                <label>Weather Conditions</label><br>
                <textarea id="6" class="form-control" title="weather conditions"></textarea>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Verbal Summary to</label><br>
                <textarea id="7" class="form-control" title="verbal summary"></textarea>
            </div>
            <div class="col-sm">
                <label>Date</label><br>
                <textarea id="12" class="form-control" title="date"></textarea>
            </div>
        </div>
    </form>
    <br>
</div>
<div id="architectDetails" class="container">
    <h3 class="sectionSubHead">ASSESSOR DETAILS</h3>
    <form>
        <div class="row form-group">
            <div class="col-sm">
                <label>Architect Name</label><br>
                <input id="architectName" class="form-control" type="text" title="architectName" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
            </div>
            <div class="col-sm">
                <label>Registration No.</label><br>
                <input id="registrationNumber" class="form-control" type="text" title="registrationNo" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Architect Address</label><br>
                <input id="architectAddress" title="address" class="form-control" type="text" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>" >
                <!--<input id="architectAddress" autocomplete="off" class="form-control" type="text" title="architectAddress" value="<?php echo doNiceArrayElemAsString('archaddress1'); ?> ">-->
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm">
                <label>Email</label><br>
                <input id="architectEmail"  class="form-control" type="text" title="architectEmail" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
            </div>
            <div class="col-sm">
                <label>Phone</label><br>
                <input id="architectPhone" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
            </div>
        </div>
    </form>
    <br>
</div>

<!--Summary-->
<div id="dilapidationReport" class="container">
    <h3 class="sectionSubHead">DILAPIDATION SURVEY REPORT SUMMARY</h3>
    <textarea id="surveyReportSummary" class="form-control" rows="10" style="height: inherit" title="extraItemsCosts">Condition of Building:
    </textarea>
    <br>
</div>

<!--Cover Image-->
<div class="container">
    <div class="row">
        <div class="col-sm-6">
            <input type="button" value="Upload Cover Image" class="uploadCoverImageButton"
                   onclick="DilapidationCover()">
            <input type="file" id="DilapidationUploadCoverImage" class="inputImage" accept="image/x-png,image/jpeg">
        </div>

        <div class="col-sm-6">
            <div class="col-sm">
                <img id="DilapidationCoverImage" src="#" alt="Image1"
                     style="width:400px;display: none"/>
            </div>
            <div class="col-sm">
                <input class="btn btn-danger" type="button" value="Remove" id="DilapidationCoverImageRemoveButton"
                       onclick="RemoveDilapidationCover()"
                       style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                <br>
            </div>
            <div class="col-sm">
                <input type="text" id="DilapidationCoverImageAngle" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                <br>
            </div>
            <div class="col-sm">
                <input class="btn btn-info" type="button" value="Rotate" id="DilapidationCoverImageRotateButton" onclick="RotateDilapidationCoverImage()" style="display: none; margin-top: 5px;margin-bottom: 5px;width: 400px">
                <br>
            </div>
        </div>
    </div>
    <hr style="background-color:#9C9696;height: 1px;">
</div>

<!--Images-->
<div class="container">
    <h2 class="content-head text-center firstH1">Images</h2>
    Address:<input type="text" name="address" class="form-control" title="address" value="<?php echo doNiceArrayElemAsString('address1'); ?> <?php echo doNiceArrayElemAsString('city'); ?>" id="dilapidationFullAddress">
    <br>
</div>
<div class="container">
    <div class="container">
        <input type="button" id="get_ConstructionImage" value="Upload Images (Max 60 images)" class="uploadImageButton"
               onclick="DilapidationUploadImage()" style="white-space: normal; width: 15%">
        <input type="file" id="DilapidationUploadImages" class="inputImage" accept="image/x-png,image/jpeg" multiple>
        <input type="file" id="DilapidationUploadOneImage" class="inputImage" accept="image/x-png,image/jpeg">

    </div>
    <br>
    <div class="container">
        <table id="DilapidationImagesTable" style="display: none">
            <tr>
                <th>
                    <div class="row form-group" id="DilapidationPhotographs">
                    </div>

                </th>
            </tr>
        </table>
        <br>
    </div>
    <hr style="height:1px;color:#9C9696;background-color:#9C9696;">
</div>

<!--Attachments-->
<div class="container">
    <h2 class="content-head text-center firstH1">Attachments</h2><br>
</div>
<div class="container">
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
            <label class="attachmentlabel">Property Maintenance Guide</label>
            <select id="6000" style="width:100%" title="property maintenance guide">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label class="attachmentlabel">Cracking in Masonry</label>
            <select id="6001" style="width:100%" title="cracking in masonry">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label class="attachmentlabel">Treatment of Dampness </label>
            <select id="6002" style="width:100%" title="treatment of dampness">
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
        <div class="col-sm">
            <label class="attachmentlabel">Health & Safety Warning</label>
            <select id='6003' style="width:100%" title="health and safety warning">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label class="attachmentlabel">Roofing & Guttering</label>
            <select id="6004" style="width:100%" title="Roofing & Guttering">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
            <label class="attachmentlabel">Re-stumping</label>
            <select id="6005" style="width:100%" title="Home Safety Checklist">
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
        <div class="col-sm">
            <label class="attachmentlabel">Termites & Borers</label>
            <select id='6006' style="width:100%" title="health and safety warning">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>

        <div class="col-sm">
            <label class="attachmentlabel">Cost Guide</label>
            <select  id='6008' style="width:100%" title="Home Safety Checklist">
                <optgroup label="No Visible Significant Defect">
                    <option value="√">✔</option>
                </optgroup>
                <optgroup label="Major Defect">
                    <option value="NA">Not applicable, no such item</option>
                </optgroup>
            </select>
        </div>
        <div class="col-sm">
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
<script src="DilapidationJS/PDFGenerator.js?<?php echo time(); ?>"></script>
<!--General Functions-->
<script src="DilapidationJS/generalFunctions.js?<?php echo time(); ?>"></script>
<script src="DilapidationJS/htmlGeneralFunctions.js?<?php echo time(); ?>"></script>
<!--Text-->
<script src="DilapidationJS/text.js?<?php echo time(); ?>"></script>
<!--Table Data-->
<script src="DilapidationJS/tableData.js?<?php echo time(); ?>"></script>


<!--<script src="../JS/images.js"></script>-->
<!--<script src="../JS/loadImageJS/load-image.all.min.js"></script>-->

<!--&lt;!&ndash;PDF Generator&ndash;&gt;-->
<!--<script src="../DilapidationJS/PDFGenerator.js"></script>-->
<!--&lt;!&ndash;General Functions&ndash;&gt;-->
<!--<script src="../DilapidationJS/generalFunctions.js"></script>-->
<!--<script src="../DilapidationJS/htmlGeneralFunctions.js"></script>-->
<!--&lt;!&ndash;Text&ndash;&gt;-->
<!--<script src="../DilapidationJS/text.js"></script>-->
<!--&lt;!&ndash;Table Data&ndash;&gt;-->
<!--<script src="../DilapidationJS/tableData.js"></script>-->
</body>
</html>