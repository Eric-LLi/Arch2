<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Archicentre Booking System.">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="-1">
<meta http-equiv="Reply-to" content="mailto:webmaster@adtalk.com.au" />
<meta name="Copyright" content="Copyright (C) 2017-2018 Adtalk Pty Ltd, All Rights Reserved." />

<link rel="shortcut icon" id="favicon" href="favicon.png" type="image/x-icon">

<link rel="stylesheet" href="css/font-awesome.min.css?<?php echo time(); ?>">
<link rel="stylesheet" href="css/animate.min.css?<?php echo time(); ?>">
<link rel="stylesheet" href="js/easyui/themes/default/easyui.css?<?php echo time(); ?>">
<link rel="stylesheet" href="js/easyui/themes/icon.css?<?php echo time(); ?>">
<link rel="stylesheet" href="js/easyui/texteditor.css?<?php echo time(); ?>">
<link rel="stylesheet" href="css/index.css?<?php echo time(); ?>">
<link rel="stylesheet" href="js/summernote/summernote.css?<?php echo time(); ?>">


<script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
<script type="text/javascript" src="js/noty/packaged/jquery.noty.packaged.min.js"></script>
<script type="text/javascript" src="js/jquery.redirect.js"></script>
<script type="text/javascript" src="js/easyui/jquery.easyui.min.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="js/easyui/datagrid-filter.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="js/easyui/plugins/jquery.tagbox.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="js/easyui/plugins/jquery.texteditor.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="js/underscore.js"></script>
<script type="text/javascript" src="js/underscore.string.js"></script>
<script type="text/javascript" src="js/moment.min.js"></script>
<script type="text/javascript" src="js/globalize.min.js"></script>
<script type="text/javascript" src="js/raphael.js"></script>
<script type="text/javascript" src="js/dx.chartjs.js"></script>
<script type="text/javascript" src="js/accounting.min.js"></script>
<script type="text/javascript" src="js/decimal.min.js"></script>
<script type="text/javascript" src="js/summernote/summernote.js"></script>
<script type="text/javascript" src="js/html2canvas.min.js"></script>
<script type="text/javascript" src="js/html2canvas.js"></script>

<script src="js/images.js"></script>
<script src="js/loadImageJS/load-image.all.min.js"></script>
<script src="js/PrintJS/print.min.js"></script>
<script src='node_modules/pdfmake/build/pdfmake.min.js'></script>
<script src='node_modules/pdfmake/build/vfs_fonts.js'></script>
<script type="text/javascript" src="SummaryJS/dlg-summary.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="SummaryJS/PDFGenerator.js?<?php echo time(); ?>"></script>
<script type="text/javascript" src="SummaryJS/generalFunctions.js?<?php echo time(); ?>"></script>

<script type="text/javascript" src="https://cdn.sobekrepository.org/includes/jquery-rotate/2.2/jquery-rotate.min.js"></script>

<style>
  .button-rounded
  {
    border-radius: 25px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .steelblue
  {
    color: #4682b4;
  }

  .sectionheading
  {
    color: #c1cdc1;
    font-weight: bold;
  }

  .nextlink
  {
    color: #c1cdc1;
    font-weight: normal;
  }
  
  tbody{
	  font-family:Arial, Helvetica, sans-serif;
  }
  
  .panel-title{
	  font-family:Arial, Helvetica, sans-serif;
	  font-size:16px;
	  height:20px;
  }
  
  .panel-body{
	  font-family:Arial, Helvetica, sans-serif;
  }

  .searchcombo_img{
			display:inline-block;
			vertical-align:middle;
			width:16px;
			height:16px;
		}
	.searchcombo_text{
			display:inline-block;
			vertical-align:middle;
			padding:3px 0 3px 3px;
		}
  
  h2{
	  font-family:Arial, Helvetica, sans-serif;
	  font-size:22px;
	  color: #ff3f00;
  }
  
  h3{
	  font-family:Arial, Helvetica, sans-serif;
	  color: #ff3f00;
  }
  
  .l-btn{
	  font-family:Arial, Helvetica, sans-serif;
  }
  
  .tabs li a.tabs-inner{
	  font-family:Arial, Helvetica, sans-serif;
  }

  .totals_footer {font-weight: bold; color: #cd853f}

  #divNewBookingsMap {width: 100%; height: 100%; display: block;}

  .textbox-text .textbox-readonly{
    font-size: 15px;
  }

</style>

<script>
//id:3 --> Combined Report _ Timber Report;
//id:24 --> Combined Report _ Porerty Assessetment Report;
  var reports =
  [
    {name:'Unassigned',id:0},
    {name: 'Property Assessment', id: 1},
    {name: 'Timber Pest Inspection', id: 2},
    //{name: 'Combined Timber Pest Inspection Report', id: 3},
    {name: 'Timber Pest Inspection', id: 3},
    {name: 'Maintenance Advice', id: 4},
    {name: 'Architect\'s Advice', id: 5},
    {name: 'Construction Quality Assurance - Stage 1', id: 6},
		{name: 'Construction Quality Assurance - Stage 2', id: 7},
		{name: 'Construction Quality Assurance - Stage 3', id: 8},
		{name: 'Construction Quality Assurance - Stage 4', id: 9},
		{name: 'Construction Quality Assurance - Stage 5', id: 10},
		{name: 'Construction Quality Assurance - Stage 6', id: 11},
		{name: 'Construction Quality Assurance - Stage 7', id: 12},
		{name: 'Construction Quality Assurance - Stage 8', id: 13},
    {name: 'Design Consultation', id: 14},
		{name: 'Dilapidation Survey', id: 15},
    {name: 'Home Feasibility', id: 16},
    {name: 'Renovation Feasibility', id: 17},
    {name: 'Home Warranty Inspection - Residential', id: 18},
    {name: 'Property Assessment - Commercial', id: 19},
    // {name: 'Commercial Dilapidation Survey', id: 20},
    {name: 'Home Access & Services - Residential', id: 21},
    {name: 'Post-Dilapidation Survey',id:22},
    {name: 'Quote Report',id:23},
    {name: 'Combined Property Assessment & Timber Pest',id:24},
    {name: 'Property Assessment - Type A',id:25}
  ];
  //This is the selected list for use to select when edit a report, can change a booking from one report type to another. but cannot change a report combined report, so remove the combined one.
  var editreports =
  [
    {name:'Unassigned',id:0},
    {name: 'Property Assessment', id: 1},
    {name: 'Timber Pest Inspection', id: 2},
    {name: 'Timber Pest Inspection', id: 3},
    {name: 'Maintenance Advice', id: 4},
    {name: 'Architect\'s Advice', id: 5},
    {name: 'Construction Quality Assurance - Stage 1', id: 6},
		{name: 'Construction Quality Assurance - Stage 2', id: 7},
		{name: 'Construction Quality Assurance - Stage 3', id: 8},
		{name: 'Construction Quality Assurance - Stage 4', id: 9},
		{name: 'Construction Quality Assurance - Stage 5', id: 10},
		{name: 'Construction Quality Assurance - Stage 6', id: 11},
		{name: 'Construction Quality Assurance - Stage 7', id: 12},
		{name: 'Construction Quality Assurance - Stage 8', id: 13},
    {name: 'Design Consultation', id: 14},
		{name: 'Dilapidation Survey', id: 15},
    {name: 'Home Feasibility', id: 16},
    {name: 'Renovation Feasibility', id: 17},
    {name: 'Home Warranty Inspection - Residential', id: 18},
    {name: 'Property Assessment - Commercial', id: 19},
    // {name: 'Commercial Dilapidation Survey', id: 20},
    {name: 'Home Access & Services - Residential', id: 21},
    {name: 'Post-Dilapidation Survey',id:22},
    {name: 'Quote Report',id:23},
    // {name: 'Combined Property Assessment & Timber Pest',id:24}
    {name: 'Property Assessment - Type A Report',id:25}
    
  ];

  //This is for the status select combox search
  var reportstatus = 
  [
    {status:'All',id:5},
    {status:'Approved',icon:'images/led/ball-green.png',id:2},
    {status:'Paid',icon:'images/led/ball-orange.png',id:4},
    {status:'Work Started',icon:'images/led/ball-purple.png',id:6},
    {status:'Completed',icon:'images/led/ball-lightblue.png',id:3},
    {status:'Not Paid',icon:'images/led/ball-darkblue.png',id:0},
    {status:'No Agreed Price',icon:'images/led/ball-black.png',id:1},
    {status:'Closed',icon:'images/led/ball-grey.png',id:7},
    
  ];
   //This is for the status select combox change
  var changestatus = 
  [
    // {status:'All',id:5},
    {status:'Approved',icon:'images/led/ball-green.png',id:2},
    {status:'Paid',icon:'images/led/ball-orange.png',id:4},
    {status:'Work Started',icon:'images/led/ball-purple.png',id:6},
    {status:'Completed',icon:'images/led/ball-lightblue.png',id:3},
    {status:'Not Paid',icon:'images/led/ball-darkblue.png',id:0},
    {status:'No Agreed Price',icon:'images/led/ball-black.png',id:1},
    {status:'Closed',icon:'images/led/ball-grey.png',id:7},
    
  ];
  var scope =
  [
    {name: 'Property Assessment Scope', id: 1},
    {name: 'Timber Pest Inspection Scope', id: 2},
    {name: 'Combined Property Assessment/Pest Inspection Scope', id: 3},
    {name: 'Maintenance Advice Scope', id: 4},
    {name: 'Architect\'s Advice Scope', id: 5},
    {name: 'Construction Quality Assurance - Stage 1 Scope', id: 6},
		{name: 'Construction Quality Assurance - Stage 2 Scope', id: 7},
		{name: 'Construction Quality Assurance - Stage 3 Scope', id: 8},
		{name: 'Construction Quality Assurance - Stage 4 Scope', id: 9},
		{name: 'Construction Quality Assurance - Stage 5 Scope', id: 10},
		{name: 'Construction Quality Assurance - Stage 6 Scope', id: 11},
		{name: 'Construction Quality Assurance - Stage 7 Scope', id: 12},
		{name: 'Construction Quality Assurance - Stage 8 Scope', id: 13},
    {name: 'Design Consultation Report Scope', id: 14},
		{name: 'Dilapidation Survey Scope', id: 15},
    {name: 'Home Feasibility Scope', id: 16},
    {name: 'Renovation Feasibility Scope', id: 17},
    {name: 'Residential Home Warranty Report Scope', id: 18},
    {name: 'Commercial Property Assessment Report Scope', id: 19},
    // {name: 'Commercial Dilapidation Survey Scope', id: 20},
    {name: 'Residential Home Access & Services Scope', id: 21},
    {name: 'Post-Dilapidation Survey Scope',id:22},
    {name: 'Quote Report Scope',id:23},
    {name: 'Combined Property Assessment & Timber Pest',id:24},
    {name: 'Property Assessment - Type A',id:25}
  ];
  var states =
  [
    {name: 'VIC'},
    {name: 'NSW'},
    {name: 'QLD'},
    {name: 'SA'},
    {name: 'WA'},
    {name: 'TAS'},
    {name: 'ACT'},
    {name: 'NT'}
  ];

  //This is auditing,record activities of each booking. 
  var auditevents = 
  [
    {event:'booking is created',id:1},
    {event:'booking is edited', id:2},
    {event:'booking is paid',id:3},
    {event:'booking is set to unpaid',id:4},
    {event:'booking is set no agreed priced',id:5},
    {event:'booking is assigned, the work started', id:6},
    {event:'report is edited and saved',id:7},
    {event:'report is completed', id:8},
    {event:'report is approved', id:9},
    {event:'report is sent to the customer', id:10},
    {event:'booking is closed', id:11},
    {event:'booking is cancelled', id:12},
    {event:'tax invoice is sent to the customer', id:13},

  ];

  var numitems =
  [
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4},
    {name: 5},
    {name: 6},
    {name: 7},
    {name: 8},
    {name: 9},
    {name: 10},
    {name: 11},
    {name: 12},
    {name: 13},
    {name: 14},
    {name: 15},
    {name: 16},
    {name: 17},
    {name: 18},
    {name: 19},
    {name: 20},
    {name: 21},
    {name: 22},
    {name: 23},
    {name: 24},
    {name: 25},
    {name: 26},
    {name: 27},
    {name: 28},
    {name: 29},
    {name: 30},
    {name: 31},
    {name: 32},
    {name: 33},
    {name: 34},
    {name: 35},
    {name: 36},
    {name: 37},
    {name: 38},
    {name: 39},
    {name: 40},
    {name: 41},
    {name: 42},
    {name: 43},
    {name: 44},
    {name: 45},
    {name: 46},
    {name: 47},
    {name: 48},
    {name: 49},
    {name: 50}
  ];
  var membertypes =
  [
    {name: 'Architect', id: 1},
    {name: 'Inspector', id: 2},
    {name: 'User', id: 3}
    <?php
      if (SharedIsAdmin())
      {
    ?>
        ,
        {name: 'Administrator', id: 99}
    <?php
      }
    ?>
  ];
  var itype_admin = 99;
  var itype_architect = 1;
  var itype_inspector = 2;
  var itype_user = 3;

  function doSmoothScrollTo(anchor)
  {
    $('html, body').animate({scrollTop: $('#' + anchor).offset().top}, 500);
  }

  function doScrollToTopOfPage()
  {
    $('html, body').animate({scrollTop: 0}, 'fast');
  }

  function isSwitchButtonChecked(btnname)
  {
    var options = $('#' + btnname).switchbutton('options');
    return options.checked;
  }

  function doMandatoryInputField(fldname, msg)
  {
    noty({text: msg, type: 'warning', timeout: 3000});
    $('#' + fldname).focus();
  }
//Check empty.
function isEmpty(val) {
    switch (typeof val) {
        case 'undefined':
            return true;
        case 'string':
            if (val.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
            break;
        case 'boolean':
            if (!val) return true;
            break;
        case 'number':
            if (0 === val || isNaN(val)) return true;
            break;
        case 'object':
            if (null === val || val.length === 0) return true;
            for (var i in val) {
                return false;
            }
            return true;
    }
    return false;
}
  // ************************************************************************************************************************************************************************
  // Underscore helpers...
  _.mixin(_.str.exports());

  _.mixin
  (
    {
      niceformatnumber: function(n, decimals, zeroasblank)
      {
        if (_.isUndefined(n) || _.isNull(n) || isNaN(n) || _.isBlank(n) || (n == 0))
          return _.isUndefined(zeroasblank) || (zeroasblank == true) ? '' : 0.0;

        var d = _.isUndefined(decimals) ? 2 : decimals;

        if (n instanceof Decimal)
          return accounting.formatNumber(n.toFixed(d), d, ',');

        return accounting.formatNumber(n, d, ',');
      }
    }
  );

  // ************************************************************************************************************
  // Data helpers
  function doGetStringFromIdInObjArray(objarr, id)
  {
    var result = $.grep(objarr, function(ev) 
    {
      return ev.id == id;
    });
    return _.isNull(result) || (result.length == 0) ? '' : result[0].name;
  }

  // ************************************************************************************************************
  // UI helpers
  function doSwitchButtonChecked(btn)
  {
    var options = $('#' + btn).switchbutton('options');

    return options.checked ? 1 : 0;
  }

  function doTextboxFocus(tbname)
  {
    var tb = '#' + tbname;
    $(tb).textbox('textbox').focus();
  }

  function doMandatoryTextbox(prompt, tbname)
  {
    noty({text: prompt, type: 'error', timeout: 4000});
    doTextboxFocus(tbname);
  }

  function doGetGridGetRowDataByIndex(gridname, index, callback)
  {
    var grid = '#' + gridname;
    var row = null;

    $(grid).datagrid('selectRow', index);
    row = $(grid).datagrid('getSelected');

    if (!_.isNull(row))
    {
      if (!_.isUndefined(callback) && !_.isNull(callback))
        callback(row, index);
    }
  }

  function doGridGetSelectedRowData(gridname, callback)
  {
    var grid = '#' + gridname;
    var row = $(grid).datagrid('getSelected');

    if (!_.isNull(row))
    {
      if (!_.isUndefined(callback) && !_.isNull(callback))
      {
        var rowindex = $(grid).datagrid('getRowIndex', row.id);
        callback(row, rowindex);
      }
      return true;
    }
    return false;
  }

  function doPromptOkCancel(prompttext, callback)
  {
    noty
    (
      {
        text: prompttext,
        type: 'warning',
        animation:
        {
          open: 'animated flipInX',
          close: 'animated flipOutX',
          easing: 'swing',
          speed: 500
        },
        buttons:
        [
          {
            addClass: 'btn btn-primary',
            text: 'Ok',
            onClick: function($noty)
            {
              $noty.close();
              if (!_.isUndefined(callback) && !_.isNull(callback))
                callback(true);
            }
          },
          {
            addClass: 'btn btn-danger',
            text: 'Cancel',
            onClick: function($noty)
            {
              $noty.close();
              if (!_.isUndefined(callback) && !_.isNull(callback))
                callback(null);
            }
          }
        ]
      }
    );
  }
</script>
