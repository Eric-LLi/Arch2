<?php
  require_once("loadbooking.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Design Consultation - <?php echo $bookingcode; ?></title>
    
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
          integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    
    <!--  Import JQuery  -->
    <script src="js/jquery-1.12.4.min.js"></script>
    <!-- <script src="http://code.jquery.com/ui/1.9.2/jquery-ui.js"></script> -->
    
    <!-- Customized CSS -->
    <link rel="stylesheet" href="css/general.css">
    
    <!--  Import pdfMake  -->
    <script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
    <script src='node_modules/pdfmake/build/vfs_fonts.js'></script>

    <?php require_once("saveloaddata.php"); ?>
    <?php require_once("meta.php"); ?>
</head>

<body>
<!--Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">ArchiCentre Task</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
</nav>

<!--Title-->
<div class="container">
    <div id="savingPDFAlert" class="myAlert-top alert alert-info collapse">
        <strong>Saving PDF. Please don't close this page</strong>
    </div>
    <h2 class="content-head text-center firstH1">Design Consultation Report - Design Consultation</h2><br>
    <p>
        This Design Consultation Report (‘Report) provides independent advice from an Archicentre Australia architect
        – being a registered architect – on the feasibility of your new home, home renovation, improvement ideas or
        multi-unit proposal, to enable you to make an informed decision about whether and how to proceed. <br><br>

        The Report is a summary of your discussion with your architect, of likely project requirements and objectives
        with respect to the existing home and/or site, budget and possible regulatory issues. It is not intended to
        provide a detailed assessment of the condition of your property, the scope or cost of any necessary associated
        repair or remedial works, the design potential of your property, or a design solution. <br><br>

        Archicentre Australia offers a number of services that can assist in this regard, including a New Home or
        Renovation Feasibility Report (which are a natural extension of this service), Property Assessment and Timber
        Pest Inspections, Expert Advice and Construction Quality Assurance Assessments.  These services may also be
        relevant should you decide to sell your property and to buy or develop elsewhere.  Please contact Archicentre
        Australia ’s offices on 1300 13 45 13 for further details.
    </p>
</div>
    
<!-- Client's Details -->
<div id="ConstructCustomerDetails" class="container">
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
    <h3 class="sectionSubHead" style="font-size: 18px">CLIENT DETAILS</h3>
    <form>
        <div class="row">
            <div class="col-sm-6">
                <label>Name</label><br>
                <input id="customer_name" class="form-control" type="text" title="name" value="<?php echo doNiceArrayElemAsString('custfirstname') . " " . doNiceArrayElemAsString('custlastname'); ?>">
            </div>
            <div class="col-sm-6">
                <label>Booking No.</label><br>
                <input id="customer_booking" class="form-control" type="text" title="booking no" value="<?php echo $bookingcode; ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Phone</label><br>
                <input id="customer_phone" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custphone'); ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Mobile</label>
                <br>
                <input id="customer_mobile" class="form-control" type="text" title="phone" value="<?php echo doNiceArrayElemAsString('custmobile'); ?>">
            </div>
            <div class="col-sm-6" style="margin-top:6px">
                <label>Report Date</label><br>
                <input id="customer_date" class="form-control" type="text" title="Date">
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Address</label><br>
                <input id="customer_address" class="form-control" type="text" title="ClientAddress" value="<?php echo doNiceArrayElemAsString('address1'). " " .doNiceArrayElemAsString('address2'); ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4">
                <label>Suburb</label><br>
                <input id="customer_suburb" class="form-control" type="text" title="Suburb" value="<?php echo doNiceArrayElemAsString('city'); ?>">
            </div>
            <div class="col-sm-4">
                <label>State</label><br>
                <input id="customer_state" class="form-control" type="text" title="State" value="<?php echo doNiceArrayElemAsString('state'); ?>">
                <!--<select id="customer_state" class="form-control" title="state select" style="width:100%;height: 50px;margin-top: 6px" >-->
                <!--<option <?php if(doNiceArrayElemAsString('state', false)==""){echo "selected";};?> selected disabled value="">Select a State</option>-->
                <!--<option <?php if(doNiceArrayElemAsString('state', false)=="VIC"){echo "selected";} ;?> value="VIC">VIC</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="NSW"){echo "selected";};?> value="NSW">NSW</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="QLD"){echo "selected";};?> value="QLD">QLD</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="SA"){echo "selected";};?> value="SA">SA</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="WA"){echo "selected";};?> value="WA">WA</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="TAS"){echo "selected";};?> value="TAS">TAS</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="ACT"){echo "selected";};?>  value="ACT">ACT</option>-->
                <!--<option  <?php if(doNiceArrayElemAsString('state', false)=="NT"){echo "selected";};?>  value="NT">NT</option>-->
                <!--</select>-->
                <!--<select id="customer_state" title="state select" style="width:100%;height: 50px;margin-top: 6px">-->
                    <!--<option selected disabled value="">Select a State</option>-->
                    <!--<option value="ACT">ACT</option>-->
                    <!--<option value="NSW">NSW</option>-->
                    <!--<option value="NT">NT</option>-->
                    <!--<option value="QLD">QLD</option>-->
                    <!--<option value="SA">SA</option>-->
                    <!--<option value="TAS">TAS</option>-->
                    <!--<option value="VIC">VIC</option>-->
                    <!--<option value="WA">WA</option>-->
                <!--</select>-->
            </div>
            <div class="col-sm-4">
                <label>Postcode</label><br>
                <input id="customer_postcode" class="form-control" type="text" title="Postcode" value="<?php echo doNiceArrayElemAsString('postcode'); ?>">
            </div>
        </div>
    </form>
</div>
    
<!-- Your Architect's Details -->    
<div id="YourArchitectDetail" class="container">
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
    <h3 class="sectionSubHead" style="font-size: 18px">YOUR ARCHITECT</h3>
    <form>
        <div class="row">
            <div class="col-sm-6">
                <label>Name</label>
                <input id="architect_name" class="form-control" type="text" title="ArchitectName" value="<?php echo doNiceArrayElemAsString('archfirstname') . " " . doNiceArrayElemAsString('archlastname'); ?>">
            </div>
            <div class="col-sm-6">
                <label>Registration No</label>
                <input id="architect_registration" class="form-control" type="text" title="Registration" value="<?php echo doNiceArrayElemAsString('archregno'); ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label>Email Address</label>
                <input id="architect_email" class="form-control" type="text" title="Email" value="<?php echo doNiceArrayElemAsString('archemail', false); ?>">
            </div>
            <div class="col-sm-6">
                <label>Phone</label>
                <input id="architect_phone" class="form-control" type="text" title="ArchitectPhone" value="<?php echo doNiceArrayElemAsString('archmobile', false); ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <label>Address</label>
                <input id="architect_address" class="form-control" type="text" title="ArchitectAddress" value="<?php echo doNiceAddress(doNiceArrayElemAsString('archaddress1'), doNiceArrayElemAsString('archcity'), doNiceArrayElemAsString('archstate'), doNiceArrayElemAsString('archpostcode')); ?>" >
            </div>
        </div>
    </form>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>
       
<!-- Details Of Advice Sought -->
<div id="adviceSought" class="container">
    <h3 class="sectionSubHead">DETAILS OF ADVICE SOUGHT</h3>
    <textarea title="DetailsOfAdviceSought" class="form-control" id="DetailsOfAdviceSought"></textarea>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>
   
<!-- Project Brief -->
<div class="container" id="projectBrief">
    <h3 class="sectionSubHead">PROJECT BRIEF</h3>
    <table>
        <tr style="width:100%">
            <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">Current Accommodation</th>
        </tr>
        <tr>
            <td>
                <textarea id="accommodation" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="accommodation"></textarea>
            </td>
        </tr>
        <tr style="width:100%">
            <th class="sectionSubHeaderSmaller" colspan="6" style="color: black" >Future Requirements</th>
        </tr>
        <tr>
            <td>
                <textarea id="requirement" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="requirements"></textarea>
            </td>
        </tr>
        <tr style="width:100%">
            <th class="sectionSubHeaderSmaller" colspan="6" style="color: black">BUDGET ($)</th>
        </tr>
        <tr>
            <td>
                <textarea id="budget" rows="10" class="form-control" style="padding: 2px 2px; height: 100px" title="budget"></textarea>
            </td>
        </tr>
    </table>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!-- Existing Conditions Summary -->
<div id="summary" class="container">
    <h3 class="sectionSubHead">EXISTING CONDITIONS SUMMARY</h3>
    <textarea title="ConditionSummary" class="form-control" id="ConditionSummary"></textarea>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>
    
<!-- Relevant building or development controls -->
<div id="relevant" class="container">
    <h3 class="sectionSubHead">RELEVANT building or development controls</h3>
    <textarea title="RelevantControl" class="form-control" id="RelevantControl"></textarea>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>

<!-- Development Options &/or Opportunities -->
<div id="development" class="container">
    <h3 class="sectionSubHead" style="font-size: 18px">DEVELOPMENT OPTIONS &/OR OPPORTUNITIES</h3>
    <textarea title="DevelopmentOO" class="form-control" id="DevelopmentOO"></textarea>
    <hr style="height:1px;border:none;color:#333;background-color:#333;">
</div>    
    
<!-- Who else is involved? -->
<div class="container" id="people">
    <h3 class="sectionSubHead" style="font-size: 18px;margin-top: 20px">Who else is involved?</h3>
    <button onclick="addPeople()" type="button" class="btn btn-primary">Add People</button>
    <table id="DesignConsultationPeopleTable" style="margin-top: 10px">
        <tr>
            <td width="25%">Who they are</td>
            <td>What they do</td>
        </tr>
        <tr>
            <td>
                <input class="form-control" placeholder="Land surveyor" id="DesignConsultationInvolvedPeople0" type="text">
            </td>
            <td>
                <p>
                    Prepare different types of site information depending on your project.  This may include:
                </p>
                <ul>
                    <li>exact site boundaries, compared with fence lines; </li>
                    <li>ground levels and levels of existing buildings above the ground;</li>
                    <li>site contours;</li>
                    <li>exact locations of neighbouring or adjacent buildings;</li>
                    <li>building heights, and exact locations of significant features or vegetation;</li>
                    <li>location of easements.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
                <input class="form-control" placeholder="Geotechnical (soil) engineer" id="DesignConsultationInvolvedPeople1" type="text">
            </td>
            <td>
                <p>
                    Using specialist equipment, take one or more samples of soil from your site for analysis,
                    provide information about its structure and make recommendations about the design of the new
                    substructure of the building, such as the slab or footings.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <input class="form-control" placeholder="Structural engineer" id="DesignConsultationInvolvedPeople2" type="text">
            </td>
            <td>
                <p>
                    Design and document the structural components of your building such as the slab or footings,
                    wall bracing, roof beams etc, based on the architect’s design, geotechnical recommendations, and
                    construction documentation. They generally prepare their own set of drawings and computations f
                    or the project which are usually mandatory for building permit/approval application.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <input class="form-control" placeholder="Building surveyor" id="DesignConsultationInvolvedPeople3" type="text">
            </td>
            <td>
                <p>
                    Issue the building permit/approval and check the construction documentation for compliance with
                    the National Construction Code.  Carry out on-site checks at major milestones during the build,
                    such as completion of the slab and framing.  Note that building surveyors do not carry out
                    quality inspections or check for compliance with the scope of the contract throughout the build.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <input class="form-control" placeholder="Planning advisor" id="DesignConsultationInvolvedPeople4" type="text">
            </td>
            <td>
                <p>
                    Advise on planning issues and may represent you at Council meetings or hearings.  Generally r
                    equired only for complex projects.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <input class="form-control" placeholder="Energy rater" id="DesignConsultationInvolvedPeople5" type="text">
            </td>
            <td>
                <p>
                    Analyse the project for compliance with required sustainability measures and provide advice
                    regarding ways to achieve compliance, if required.
                </p>
            </td>
        </tr>
        <tr>
            <td>
                <input class="form-control" placeholder="Quantity surveyor" id="DesignConsultationInvolvedPeople6" type="text">
            </td>
            <td>
                <p>
                    Prepare independent cost estimates for the build and provide advice regarding budgetary issues.
                </p>
            </td>
        </tr>
    </table>
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

<!-- JS File -->

<script src="js/images.js"></script>
<!--<script src="../js/coverPageLogo.js"></script>-->
<!--<script src="../js/footerImage.js"></script>-->


<!--Image File-->
<!--<script src="./DesignConsultationJS/image.js"></script>-->
    
<!--Text File-->
<script src="DesignConsultationJS/text.js?<?php echo time(); ?>"></script>

<!--General Functions-->
<script src="DesignConsultationJS/generalFunctions.js?<?php echo time(); ?>"></script>

<!--PDF Generator-->
<script src="DesignConsultationJS/PDFGenerator.js?<?php echo time(); ?>"></script>

<!--Get Table's Data-->
<script src="DesignConsultationJS/getTableData.js?<?php echo time(); ?>"></script>
</body>

</html>

