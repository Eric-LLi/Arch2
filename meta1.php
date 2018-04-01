<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="description" content="Archicentre Booking System.">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Expires" content="-1">
<meta http-equiv="Reply-to" content="mailto:webmaster@adtalk.com.au" />
<meta name="Copyright" content="Copyright (C) 2017 Adtalk Pty Ltd, All Rights Reserved." />

<link rel="shortcut icon" id="favicon" href="favicon.png" type="image/x-icon">

<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="css/animate.min.css">
<link rel="stylesheet" href="js/easyui/themes/default/easyui.css">
<link rel="stylesheet" href="js/easyui/themes/icon.css">

<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/noty/packaged/jquery.noty.packaged.min.js"></script>
<script type="text/javascript" src="js/jquery.redirect.js"></script>
<script type="text/javascript" src="js/easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="js/underscore.js"></script>
<script type="text/javascript" src="js/underscore.string.js"></script>
<script type="text/javascript" src="js/moment.min.js"></script>
<script type="text/javascript" src="js/globalize.min.js"></script>
<script type="text/javascript" src="js/raphael.js"></script>
<script type="text/javascript" src="js/dx.chartjs.js"></script>
<script type="text/javascript" src="js/accounting.min.js"></script>
<script type="text/javascript" src="js/decimal.min.js"></script>

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
  
  h2{
	  font-family:Arial, Helvetica, sans-serif;
  }
  
  h3{
	  font-family:Arial, Helvetica, sans-serif;
  }
  
  .l-btn{
	  font-family:Arial, Helvetica, sans-serif;
  }
  
  .tabs li a.tabs-inner{
	  font-family:Arial, Helvetica, sans-serif;
  }

  .totals_footer {font-weight: bold; color: #cd853f}

  #divNewBookingsMap {width: 100%; height: 100%; display: block;}
</style>

<script>
  var reports =
  [
    {name: 'Property Assessment Report', id: 1},
    {name: 'Timber Pest Inspection Report', id: 2},
    {name: 'Combined Property Assessment/Pest Inspection', id: 3},
    {name: 'Maintenance Advice', id: 4},
    {name: 'Architect\'s Advice', id: 5},
    {name: 'Construction Quality Assurance', id: 6},
    {name: 'Dilapidation Survey', id: 7},
	{name: 'Home Feasibility', id: 8},
	{name: 'Renovation Feasibility', id: 9}
  ];
  var states =
  [
    {name: 'VIC'},
    {name: 'NSW'},
    {name: 'QLD'},
    {name: 'SA'},
    {name: 'WA'},
    {name: 'TAS'},
    {name: 'NT'},
	{name: 'ACT'}
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
    var result = $.grep(objarr, function(ev) {return ev.id == id;});

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
