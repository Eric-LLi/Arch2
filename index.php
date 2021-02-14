<?php
  require_once("shared.php");

  $loginerr = false;
  $emailexistserr = false;
  $signuperr = false;
  $signupsuccess = false;

  if (SharedIsLoggedIn())
  {
    if (SharedIsDev())
      header("Location: member.php");
    else    
      header("Location: http://test.archicentreaustraliainspections.com/member.php");
    exit;
  }

  if (isset($_POST['fldUid']) && isset($_POST['fldPwd']))
  {
    $email = SharedCleanString($_POST['fldUid'], 50);
    $pwd = SharedCleanString($_POST['fldPwd'], 50);

    if (SharedLogin($email, $pwd))
    {
       header("location: member.php");
        exit;
    }
    else
      $loginerr = true;
  }

  if (isset($_POST['fldLogout']))
  {
    SharedLogout();
  }

  if (isset($_POST['fldEmail']) && isset($_POST['fldPassword']))
  {
    error_log("Got it...");
    $firstname = SharedCleanString($_POST['fldFirstname'], 50);
    $lastname = SharedCleanString($_POST['fldLastname'], 50);
    $email = SharedCleanString($_POST['fldEmail'], 100);
    $password = SharedCleanString($_POST['fldPassword'], 50);
    $mobile = SharedCleanString($_POST['fldMobile'], 20);
    $postcode = SharedCleanString($_POST['fldPostcode'], 4);

    $dbselect = "select u1.uuid from users u1 where u1.dateexpired is null and u1.email=" . SharedNullOrQuoted($email, 100, $dblink);
    error_log($dbselect);
    if ($dbresult = SharedQuery($dbselect, $dblink))
    {
      if ($numrows = SharedNumRows($dbresult))
      {
        while ($dbrow = SharedFetchArray($dbresult))
          ;
        $emailexistserr = true;
      }
    }

    if (!$emailexistserr)
    {
      $dbinsert = "insert into users (firstname,lastname,email,pwd,mobile,postcode,active,userscreated_id) values (" .
                  SharedNullOrQuoted($firstname, 50, $dblink) . "," .
                  SharedNullOrQuoted($lastname, 50, $dblink) . "," .
                  SharedNullOrQuoted($email, 100, $dblink) . "," .
                  SharedNullOrQuoted($password, 50, $dblink) . "," .
                  SharedNullOrQuoted($mobile, 20, $dblink) . "," .
                  SharedNullOrQuoted($postcode, 4, $dblink) . "," .
                  "0," .
                  "1" .
                  ")";
      error_log($dbinsert);
      if (SharedQuery($dbselect, $dblink))
      {
        $signupsuccess = true;
      }
      else
        $signuperr = true;
    }
  }
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <?php require_once("meta.php"); ?>

  <script type="text/javascript">
    function doCloseReportPanels()
    {
      $('#divRequestReport').panel('close');
      $('#divReportTimberPest').panel('close');
      $('#divReportArchAdvice').panel('close');
      $('#divReportConstructionQA').panel('close');
      $('#divReportMaintAdvice').panel('close');
      $('#divReportDilapSurv').panel('close');
      $('#divReportHomeFeas').panel('close');
      $('#divReportRenoFeas').panel('close');
      $('#divReportHomeWarranty').panel('close');
      $('#divReportCommerPropAssess').panel('close');
      $('#divReportCommerDilap').panel('close');
      $('#divReportPropAssessment').panel('close');

      $('#divRequestScope').panel('close');
      $('#divScopeTimberPest').panel('close');
      $('#divScopeArchAdvice').panel('close');
      $('#divScopeConstructionQA').panel('close');
      $('#divScopeMaintAdvice').panel('close');
      $('#divScopeDilapSurv').panel('close');
      $('#divScopeHomeFeas').panel('close');
      $('#divScopeRenoFeas').panel('close');
      $('#divScopeHomeWarranty').panel('close');
      $('#divScopeCommerPropAssess').panel('close');
      $('#divScopeCommerDilap').panel('close');
      $('#divScopePropAssessment').panel('close');
    }

    function doShowReport(rep)
    {
      if (rep == 1)
      {
        doCloseReportPanels();
        $('#divReportPropAssessment').panel('open');
      }
      else if (rep == 2)
      {
        doCloseReportPanels();
        $('#divReportTimberPest').panel('open');
      }
      else if (rep == 3)
      {
        doCloseReportPanels();
        $('#divReportArchAdvice').panel('open');
      }
      else if (rep == 4)
      {
        doCloseReportPanels();
        $('#divReportMaintAdvice').panel('open');
      }
      else if (rep == 5)
      {
        doCloseReportPanels();
        $('#divReportConstructionQA').panel('open');
      }
      else if (rep == 6)
      {
        doCloseReportPanels();
        $('#divReportDilapSurv').panel('open');
      }
      else if (rep == 7)
      {
        doCloseReportPanels();
        $('#divReportHomeFeas').panel('open');
      }
      else if (rep == 8)
      {
        doCloseReportPanels();
        $('#divReportRenoFeas').panel('open');
      }
      else if (rep == 9)
      {
        doCloseReportPanels();
        $('#divReportHomeWarranty').panel('open');
      }
      else if (rep == 10)
      {
        doCloseReportPanels();
        $('#divReportCommerPropAssess').panel('open');
      }
      else if (rep == 11)
      {
        doCloseReportPanels();
        $('#divReportCommerDilap').panel('open');
      }
    }

    function doRequestReport(rep)
    {
      doCloseReportPanels();
      $('#divRequestReport').panel('open');
    }

    function doShowScope(rep)
    {
      if (rep == 1)
      {
        doCloseReportPanels();
        $('#divScopePropAssessment').panel('open');
      }
      else if (rep == 2)
      {
        doCloseReportPanels();
        $('#divScopeTimberPest').panel('open');
      }
      else if (rep == 3)
      {
        doCloseReportPanels();
        $('#divScopeArchAdvice').panel('open');
      }
      else if (rep == 4)
      {
        doCloseReportPanels();
        $('#divScopeMaintAdvice').panel('open');
      }
      else if (rep == 5)
      {
        doCloseReportPanels();
        $('#divScopeConstructionQA').panel('open');
      }
      else if (rep == 6)
      {
        doCloseReportPanels();
        $('#divScopeDilapSurv').panel('open');
      }
      else if (rep == 7)
      {
        doCloseReportPanels();
        $('#divScopeHomeFeas').panel('open');
      }
      else if (rep == 8)
      {
        doCloseReportPanels();
        $('#divScopeRenoFeas').panel('open');
      }
      else if (rep == 9)
      {
        doCloseReportPanels();
        $('#divScopeHomeWarranty').panel('open');
      }
      else if (rep == 10)
      {
        doCloseReportPanels();
        $('#divScopeCommerPropAssess').panel('open');
      }
      else if (rep == 11)
      {
        doCloseReportPanels();
        $('#divScopeCommerDilap').panel('open');
      }
    }

    function doRequestScope(rep)
    {
      doCloseReportPanels();
      $('#divRequestScope').panel('open');
    }

    function doSubmitRequestReport()
    {
      var firstname = $('#fldYourFirstname').val();
      var lastname = $('#fldYourLastname').val();
      var email = $('#fldYourEmail').val();
      var mobile = $('#fldYourMobile').val();
      var notes = $('#fldYourNotes').textbox('getValue');
      var repPropertyAssessment = isSwitchButtonChecked('cbResidentialPropertyAssessment');
      var repTimberPest = isSwitchButtonChecked('cbTimberPestInspection');
      var repArchitectAdvice = isSwitchButtonChecked('cbArchitectAdviceReport');
      var repMaintenanceAdvice = isSwitchButtonChecked('cbMaintenanceAdviceReport');
      var repConstructionQA = isSwitchButtonChecked('cbConstructionQAReport');
      var repDilapidationSurvey = isSwitchButtonChecked('cbDilapidationSurvey');
      var repHomeFeasibility = isSwitchButtonChecked('cbHomeFeasibility');
      var repRenoFeasibility = isSwitchButtonChecked('cbRenoFeasibility');
      var repHomeWarranty = isSwitchButtonChecked('cbHomeWarranty');
      var repCommercialPropertyAssessment = isSwitchButtonChecked('cbCommercialPropertyAssessment');
      var repCommercialDilapidation = isSwitchButtonChecked('cbCommercialDilapidation');

      if (!_.isBlank(firstname))
      {
        if (!_.isBlank(lastname))
        {
          if (!_.isBlank(email))
          {
            if (!_.isBlank(mobile))
            {
              if (repPropertyAssessment || repTimberPest || repArchitectAdvice || repMaintenanceAdvice || repConstructionQA || repDilapidationSurvey || repHomeFeasibility || repRenoFeasibility || repHomeWarranty || repCommercialPropertyAssessment || repCommercialDilapidation)
              {
                $.post
                (
                  'ajax_requestreport.php',
                  {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    mobile: mobile,
                    notes: notes,
                    repPropertyAssessment: repPropertyAssessment ? 1 : 0,
                    repTimberPest: repTimberPest ? 1 : 0,
                    repArchitectAdvice: repArchitectAdvice ? 1 : 0,
                    repMaintenanceAdvice: repMaintenanceAdvice ? 1 : 0,
                    repConstructionQA: repConstructionQA ? 1 : 0,
                    repDilapidationSurvey: repDilapidationSurvey ? 1 : 0,
                    repHomeFeasibility: repHomeFeasibility ? 1 : 0,
                    repRenoFeasibility: repRenoFeasibility ? 1 : 0,
                    repHomeWarranty: repHomeWarranty ? 1 : 0,
                    repCommercialPropertyAssessment: repCommercialPropertyAssessment ? 1 : 0,
                    repCommercialDilapidation: repCommercialDilapidation ? 1 : 0

                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                    {
                      $('#fldYourFirstname').val('');
                      $('#fldYourLastname').val('');
                      $('#fldYourEmail').val('');
                      $('#fldYourMobile').val('');
                      $('#fldYourNotes').textbox('clear');

                      noty({text: response.msg, type: 'success', timeout: 10000});
                    }
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
              else
                noty({text: 'Please select at leat one report that you wish to enquire', type: 'warning', timeout: 3000});
            }
            else
              doMandatoryInputField('fldYourMobile', 'Please specify your mobile in case we need to contact you');
          }
          else
            doMandatoryInputField('fldYourEmail', 'Please specify your email so that we may respond to your enquiry');
        }
        else
          doMandatoryInputField('fldYourLastname', 'Please specify your last name');
      }
      else
        doMandatoryInputField('fldYourFirstname', 'Please specify your first name');
    }
    function doNewBooking()
    {
      function doReset()
      {
        // Customer TAB
        $('#fldNewBookingCustState').combobox('clear');

        $('#fldNewBookingCustFirstName').textbox('clear');
        $('#fldNewBookingCustLastName').textbox('clear');
        $('#fldNewBookingCustEmail').textbox('clear');
        $('#fldNewBookingCustMobile').textbox('clear');
        $('#fldNewBookingCustPhone').textbox('clear');
        $('#fldNewBookingCustAddress1').textbox('clear');
        $('#fldNewBookingCustAddress2').textbox('clear');
        $('#fldNewBookingCustCity').textbox('clear');
        $('#fldNewBookingCustPostcode').textbox('clear');

        // Report TAB
        $('#fldNewBookingReport').combobox('clear');

        //$('#fldNewBookingBudget').numberbox('clear');
        $('#fldNewBookingNotes').textbox('clear');
        $('#fldNewBookingClientNotes').textbox('clear');

        // Properties TAB
        $('#fldNewBookingState').combobox('clear');
        $('#fldNewBookingNumStories').combobox('clear');
        $('#fldNewBookingNumBedRooms').combobox('clear');
        $('#fldNewBookingNumBathRooms').combobox('clear');
        $('#fldNewBookingNumRooms').combobox('clear');
        $('#fldNewBookingNumOutBuildings').combobox('clear');

        $('#fldNewBookingAddress1').textbox('clear');
        $('#fldNewBookingAddress2').textbox('clear');
        $('#fldNewBookingCity').textbox('clear');
        $('#fldNewBookingPostcode').textbox('clear');
        $('#fldNewBookingConstruction').textbox('clear');
        $('#fldNewBookingAge').textbox('clear');

        $('#fldNewBookingMeetingOnSite').switchbutton('uncheck');
        $('#fldNewBookingRenoAdvice').switchbutton('uncheck');
        $('#fldNewBookingPestInspection').switchbutton('uncheck');

        // Estate agent TAB
        $('#fldNewBookingEstateAgentCompany').textbox('clear');
        $('#fldNewBookingEstateAgentContact').textbox('clear');
        $('#fldNewBookingEstateAgentMobile').textbox('clear');
        $('#fldNewBookingEstateAgentPhone').textbox('clear');

        // Misc
        $('#btnNewBookingAdd').linkbutton('disable');
      }

      $('#dlgBookingNew').dialog
      (
        {
          modal: true,
          onClose: function()
          {
          },
          onOpen: function()
          {
            // Customer TAB
            $('#fldNewBookingCustState').combobox({valueField: 'name', textField: 'name', limitToList: true, data: states});

            // Properties TAB
            $('#fldNewBookingReport').combobox
            (
              {
                valueField: 'id',
                textField: 'name',
                limitToList: true,
                data: reports,
                onSelect: function(record)
                {
                  $('#btnNewBookingAdd').linkbutton('enable');
                }
              }
            );
            $('#fldNewBookingState').combobox({valueField: 'name', textField: 'name', limitToList: true, data: states});
            $('#fldNewBookingNumStories').combobox({valueField: 'name', textField: 'name', limitToList: true, data: numitems});
            $('#fldNewBookingNumBedRooms').combobox({valueField: 'name', textField: 'name', limitToList: true, data: numitems});
            $('#fldNewBookingNumBathRooms').combobox({valueField: 'name', textField: 'name', limitToList: true, data: numitems});
            $('#fldNewBookingNumRooms').combobox({valueField: 'name', textField: 'name', limitToList: true, data: numitems});
            $('#fldNewBookingNumOutBuildings').combobox({valueField: 'name', textField: 'name', limitToList: true, data: numitems});

            $('#fldNewBookingMeetingOnSite').switchbutton({onText: 'Yes', offText: 'No', checked: false});
            $('#fldNewBookingRenoAdvice').switchbutton({onText: 'Yes', offText: 'No', checked: false});
            $('#fldNewBookingPestInspection').switchbutton({onText: 'Yes', offText: 'No', checked: false});

            // Misc...
            $('#fldNewBookingCustAddress1').textbox('textbox').attr('autocomplete', 'on');
            $('#fldNewBookingAddress1').textbox('textbox').attr('autocomplete', 'on');

            doReset();
          },
          buttons:
          [
            {
              text: 'Add',
              disabled: true,
              id: 'btnNewBookingAdd',
              handler: function()
              {
                var custfirstname = $('#fldNewBookingCustFirstName').textbox('getValue');
                var custlastname = $('#fldNewBookingCustLastName').textbox('getValue');
                var custemail = $('#fldNewBookingCustEmail').textbox('getValue');
                var custmobile = $('#fldNewBookingCustMobile').textbox('getValue');
                var custphone = $('#fldNewBookingCustPhone').textbox('getValue');
                var custaddress1 = $('#fldNewBookingCustAddress1').textbox('getValue');
                var custaddress2 = $('#fldNewBookingCustAddress2').textbox('getValue');
                var custcity = $('#fldNewBookingCustCity').textbox('getValue');
                var custpostcode = $('#fldNewBookingCustPostcode').textbox('getValue');
                var custstate = $('#fldNewBookingCustState').combobox('getValue');

                var reportid = $('#fldNewBookingReport').combobox('getValue');
                //var budget = $('#fldNewBookingBudget').numberbox('getValue');
                var notes = $('#fldNewBookingNotes').textbox('getValue');
                var clientnotes = $('#fldNewBookingClientNotes').textbox('getValue');

                var numstories = $('#fldNewBookingNumStories').combobox('getValue');
                var numbedrooms = $('#fldNewBookingNumBedRooms').combobox('getValue');
                var numbathrooms = $('#fldNewBookingNumBathRooms').combobox('getValue');
                var numrooms = $('#fldNewBookingNumRooms').combobox('getValue');
                var numbuildings = $('#fldNewBookingNumOutBuildings').combobox('getValue');

                var address1 = $('#fldNewBookingAddress1').textbox('getValue');
                var address2 = $('#fldNewBookingAddress2').textbox('getValue');
                var city = $('#fldNewBookingCity').textbox('getValue');
                var postcode = $('#fldNewBookingPostcode').textbox('getValue');
                var state = $('#fldNewBookingState').combobox('getValue');
                var construction = $('#fldNewBookingConstruction').textbox('getValue');
                var age = $('#fldNewBookingAge').textbox('getValue');

                var meetingonsite = doSwitchButtonChecked('fldNewBookingMeetingOnSite');
                var renoadvice = doSwitchButtonChecked('fldNewBookingRenoAdvice');
                var pestinspection = doSwitchButtonChecked('fldNewBookingPestInspection');

                var estateagentcompany = $('#fldNewBookingEstateAgentCompany').textbox('getValue');
                var estateagentcontact = $('#fldNewBookingEstateAgentContact').textbox('getValue');
                var estateagentmobile = $('#fldNewBookingEstateAgentMobile').textbox('getValue');
                var estateagentphone = $('#fldNewBookingEstateAgentPhone').textbox('getValue');

                if (!_.isBlank(reportid))
                {
                  if (!_.isBlank(custfirstname))
                  {
                    if (!_.isBlank(custlastname))
                    {
                      if (!_.isBlank(custemail) || !_.isBlank(custmobile))
                      {
                        if (!_.isBlank(address1))
                        {
                          var data =
                          {
                            custfirstname: _.titleize(custfirstname),
                            custlastname: _.titleize(custlastname),
                            custemail: custemail,
                            custmobile: custmobile,
                            custphone: custphone,
                            custaddress1: custaddress1,
                            custaddress2: custaddress2,
                            custcity: custcity,
                            custpostcode: custpostcode,
                            custstate: custstate,

                            reportid: reportid,
                            //budget: budget,
                            notes: notes,
                            clientnotes:notes,

                            numstories: numstories,
                            numbedrooms: numbedrooms,
                            numbathrooms: numbathrooms,
                            numrooms: numrooms,
                            numbuildings: numbuildings,
                            address1: address1,
                            address2: address2,
                            city: city,
                            postcode: postcode,
                            state: state,
                            construction: construction,
                            age: age,
                            meetingonsite: meetingonsite,
                            renoadvice: renoadvice,
                            pestinspection: pestinspection,

                            estateagentcompany: estateagentcompany,
                            estateagentcontact: estateagentcontact,
                            estateagentmobile: estateagentmobile,
                            estateagentphone: estateagentphone,

                            uuid: 'admin',
                            isuser: 1
                          };

                          $.post
                          (
                            'ajax_newbooking.php',
                            data,
                            function(result)
                            {
                              var response = JSON.parse(result);

                              if (response.rc == 0)
                              {
                                data.bookingcode = response.bookingcode;
                                $('#divEvents').trigger('newbooking', data);

                                noty({text: response.msg, type: 'success', timeout: 10000});
                                $('#dlgBookingNew').dialog('close');
                              }
                              else
                                noty({text: response.msg, type: 'error', timeout: 10000});
                            }
                          );
                        }
                        else
                        {
                          $('#newbookingtabs').tabs('select', 2);
                          doMandatoryTextbox('Please enter property address', 'address1');
                        }
                      }
                      else
                      {
                        $('#newbookingtabs').tabs('select', 0);
                        doMandatoryTextbox('Please enter client\'s email or mobile', 'fldNewBookingCustEmail');
                      }
                    }
                    else
                    {
                      $('#newbookingtabs').tabs('select', 0);
                      doMandatoryTextbox('Please enter client\'s last name', 'fldNewBookingCustLastName');
                    }
                  }
                  else
                  {
                    $('#newbookingtabs').tabs('select', 0);
                    doMandatoryTextbox('Please enter client\'s first name', 'fldNewBookingCustFirstName');
                  }
                }
                else
                  doMandatoryTextbox('Please select a report', 'fldNewBookingReport');
              }
            },
            {
              text: 'Reset',
              handler: function()
              {
                doReset();
              }
            },
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgBookingNew').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doLogin()
    {
      // console.log("log in");
      var uid = $('#fldEmail').textbox('getValue');
      // console.log(uid);
      var pwd = $('#fldLoginPassword').passwordbox('getValue');
      // console.log(pwd);
      if(!_.isBlank(uid))
      {
        if(!_.isBlank(pwd))
        {
          $('#fldUid').textbox('setValue',uid);
          $('#fldPwd').textbox('setValue',pwd);
          document.getElementById('frmLogin').submit();
        }
        else
        {
          doMandatoryInputField('fldPassword', 'Please enter password');
        }
      }
      else
      {
        doMandatoryInputField('fldEmail', 'Please enter email');
      }
    }

    function doOpenLoginDlg()
    {
      $('#dlgLogin').dialog
      (
        {
          onOpen: function()
          {
            $('#fldLoginPassword').passwordbox('textbox').bind
            (
              'keydown',
              function(ev)
              {
                if (ev.keyCode == 13)
                  doLogin();
              }
            );
            
            $('#fldEmail').textbox('textbox').bind
            (
              'keydown',
              function(ev)
              {
                if (ev.keyCode == 13)
                  doLogin();
              }
            );
            doTextboxFocus('fldEmail');
          },
          buttons:
          [
            {
              text: 'Login',
              handler: function()
              {
                doLogin();
              }
            },
            {
              text:'Cancel',
              handler:function()
              {
                $('#dlgLogin').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }
    // ************************************************************************************************************
    // Document ready...
    $(document).ready(function()
    {
      document.getElementById("dlgBookingNew").style.display = "block";
      document.getElementById("dlgLogin").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("header").style.display = "block";
      $.noty.defaults =
      {
        layout: 'top',
        theme: 'defaultTheme',
        type: 'alert',
        text: '',
        dismissQueue: true,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation:
        {
          open: {height: 'toggle'},
          close: {height: 'toggle'},
          easing: 'swing',
          speed: 500
        },
        timeout: false,
        force: false,
        modal: false,
        maxVisible: 5,
        killer: false,
        closeWith: ['click'],
        callback:
        {
          onShow: function() {},
          afterShow: function() {},
          onClose: function() {},
          afterClose: function() {}
        },
        buttons: false
      };

      // $('#fldUid').textbox('textbox').hide();

      $('#btnLogin').bind
      (
        'click',
        function()
        {
          console.log("click");
          // document.getElementById('frmLogin').submit();
          doOpenLoginDlg();
        }
      );

      $('#btnSignup').bind
      (
        'click',
        function()
        {
          console.log('got sign up...');
          document.getElementById('frmSignUp').submit();
        }
      );

      $.extend
      (
        $.fn.validatebox.defaults.rules,
        {
          confirmPass:
          {
            validator: function(value, param)
            {
              var pass = $(param[0]).passwordbox('getValue');
              return value == pass;
            },
            message: 'Password does not match confirmation.'
          }
        }
      );

      // Errors found...
      <?php
        if ($loginerr)
        {
      ?>
          noty({text: 'Invalid login...', type: 'error', timeout: 4000});
      <?php
        }
      ?>

      <?php
        if ($emailexistserr)
        {
      ?>
          noty({text: '<?php echo $email; ?> has already signed up...', type: 'error', timeout: 4000});
      <?php
        }
      ?>

      <?php
        if ($signuperr)
        {
      ?>
          noty({text: 'Unable to sign you up, please try again...', type: 'error', timeout: 4000});
      <?php
        }
      ?>

      <?php
        if ($signupsuccess)
        {
      ?>
          noty({text: 'Account successfully created, please check your email to activate the account', type: 'success', timeout: 4000});
      <?php
        }
      ?>
    });
  </script>
</head>
<body>
  <!-- *********************************************************************************************************************************************************************** -->
  <!-- Dialogs...                                                                                                                                                              -->
  <div id="dlgBookingNew" class="easyui-dialog" title="New Booking" style="width: 800px; height: 640px;display:none" data-options="resizable: false, modal: true, closable: false, closed: true">
    <div class="easyui-panel" title="Booking Details" data-options="fit: true">
      <div id="newbookingtabs" class="easyui-tabs" data-options="fit: true, pill: true">
        <div title="Customer Details" data-options="iconCls: 'icon-man'">
          <table>
            <tr>
              <td>First Name:</td>
              <td><input id="fldNewBookingCustFirstName" class="easyui-textbox" data-options="" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td><input id="fldNewBookingCustLastName" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input id="fldNewBookingCustEmail" class="easyui-textbox" data-options="iconCls: 'icon-email'" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td><input id="fldNewBookingCustMobile" class="easyui-textbox" data-options="iconCls: 'icon-mobile'" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td><input id="fldNewBookingCustPhone" class="easyui-textbox" data-options="" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Address 1:</td>
              <td><input id="fldNewBookingCustAddress1" class="easyui-textbox" style="width: 300px;" data-options="prompt: 'Enter address, cursor up/down for selection'"></td>
            </tr>
            <tr>
              <td>Address 2:</td>
              <td><input id="fldNewBookingCustAddress2" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Suburb:</td>
              <td><input id="fldNewBookingCustCity" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>State:</td>
              <td><div id="fldNewBookingCustState" style="width: 120px;"></div></td>
            </tr>
            <tr>
              <td>Postcode:</td>
              <td><input id="fldNewBookingCustPostcode" class="easyui-textbox" style="width: 120px;"></td>
            </tr>
          </table>
        </div>

        <div title="Report" data-options="iconCls: 'icon-notes'">
          <table>
            <tr>
              <td>Report:</td>
              <td><div id="fldNewBookingReport" style="width: 300px;"></div></td>
            </tr>
            <tr>
              <td style="vertical-align: top;">Notes:</td>
              <td><input id="fldNewBookingNotes" class="easyui-textbox" multiline="true" style="width: 600px; height: 300px"></td>
            </tr>
            <tr style="margin-top:5px">
              <td style="vertical-align: top">Client Notes:</td>
              <td><input id="fldNewBookingClientNotes" class="easyui-textbox" multiline="true" style="width: 600px; height: 150px"></td>
            </tr>
          </table>
        </div>

        <div title="Property Details" data-options="iconCls: 'icon-warehouse'">
          <table>
            <tr>
              <td>Address 1:</td>
              <td><input id="fldNewBookingAddress1" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Address 2:</td>
              <td><input id="fldNewBookingAddress2" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Suburb:</td>
              <td><input id="fldNewBookingCity" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>State:</td>
              <td><div id="fldNewBookingState" style="width: 120px;"></div></td>
            </tr>
            <tr>
              <td>Postcode:</td>
              <td><input id="fldNewBookingPostcode" class="easyui-textbox" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>#Storeys:</td>
              <td><div id="fldNewBookingNumStories" style="width: 120px;"></div></td>
            </tr>
            <tr>
              <td>#Bedroom:</td>
              <td><div id="fldNewBookingNumBedRooms" style="width: 120px;"></div></td>
            </tr>
            <tr>
              <td>#Bath Rooms:</td>
              <td><div id="fldNewBookingNumBathRooms" style="width: 120px;"></div></td>
            </tr>
            <tr>
              <td>Total #Rooms:</td>
              <td><div id="fldNewBookingNumRooms" style="width: 120px;"></div></td>
            </tr>
            <tr>
              <td>#Out Buildings:</td>
              <td><div id="fldNewBookingNumOutBuildings"></div></td>
            </tr>
            <tr>
              <td>Construction:</td>
              <td><input id="fldNewBookingConstruction" class="easyui-textbox" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Age:</td>
              <td><input id="fldNewBookingAge" class="easyui-textbox" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Meeting on site?</td>
              <td><div id="fldNewBookingMeetingOnSite"></div></td>
            </tr>
            <tr>
              <td>Renovation advice?</td>
              <td><div id="fldNewBookingRenoAdvice"></div></td>
            </tr>
            <tr>
              <td>Pest inspection also?</td>
              <td><div id="fldNewBookingPestInspection"></div></td>
            </tr>
          </table>
        </div>

        <div title="Estate Agent" data-options="iconCls: 'icon-users'">
          <table>
            <tr>
              <td>Company:</td>
              <td><input id="fldNewBookingEstateAgentCompany" class="easyui-textbox" data-options="" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Contact:</td>
              <td><input id="fldNewBookingEstateAgentContact" class="easyui-textbox" data-options="" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td><input id="fldNewBookingEstateAgentMobile" class="easyui-textbox" data-options="" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Office Phone:</td>
              <td><input id="fldNewBookingEstateAgentPhone" class="easyui-textbox" data-options="" style="width: 120px;"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div id="dlgLogin" class="easyui-dialog" title="Login to ArchiCentre" style="width: 375px; height: 175px;display:none" data-options="resizable: false, modal: true, closable: false,closed: true">
    <table>
      <tr>
        <td>Email:</td>
        <td><input type="text" id="fldEmail" class="easyui-textbox" data-options="iconCls: 'icon-man'" style="width:250px"></td>
      </tr>
      <tr>
        <td>Password:</td>
        <td><input id="fldLoginPassword" class="easyui-passwordbox" style="width:250px"></td>
      </tr>
    </table>
  </div>

  <!-- *********************************************************************************************************************************************************************** -->
  <!-- Main content...                                                                                                                                                              -->
  <div class="easyui-layout" data-options="fit: true">
    <?php require_once("header.php"); ?>
    <?php require_once("footer.php"); ?>
    <div id="p" data-options="region: 'west'" title="Reports" collapsed="true" style="width: 30%; padding: 10px">
      <div class="easyui-accordion" data-options="selected: 0, fit: true" >
        <?php
          if (!SharedIsLoggedIn())
          {
        ?>
            <div title="Reports" data-options="iconCls:'icon-receipt'" style="overflow: auto; padding: 5px;">
              <h3 style= "color:#0099FF;">Select reports you wish to learn more about</h3>
              <table width="95%">
                <tr>
                  <td align="left"><a href="#"><a href="#" onClick="doShowReport(1)">Residential Property Assessment</a></td>
                  <td align="right" width="25%"><input id="cbResidentialPropertyAssessment" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(1)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(2)">Residential Timber/Pest Inspection</a></td>
                  <td align="right" width="25%"><input id="cbTimberPestInspection" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(2)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(3)">Residential Architect's Advice</a></td>
                  <td align="right" width="25%"><input id="cbArchitectAdviceReport" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(3)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(4)">Residential Maintenance Advice</a></td>
                  <td align="right" width="25%"><input id="cbMaintenanceAdviceReport" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(4)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(5)">Residential Construction Quality Assurance Assessment</a></td>
                  <td align="right" width="25%"><input id="cbConstructionQAReport" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(5)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(6)">Residential Dilapidation Survey</a></td>
                  <td align="right" width="25%"><input id="cbDilapidationSurvey" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(6)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(7)">Residential Home Feasibility Report</a></td>
                  <td align="right" width="25%"><input id="cbHomeFeasibility" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(7)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(8)">Residential Renovation Feasibility Report</a></td>
                  <td align="right" width="25%"><input id="cbRenoFeasibility" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(8)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(9)">Residential Home Warranty Report</a></td>
                  <td align="right" width="25%"><input id="cbHomeWarranty" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(9)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(10)">Commercial Property Assessment</a></td>
                  <td align="right" width="25%"><input id="cbCommercialPropertyAssessment" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(10)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(11)">Commercial Dilapidation Survey</a></td>
                  <td align="right" width="25%"><input id="cbCommercialDilapidation" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                  <td align="right" width="15%"><a href="#" class="easyui-linkbutton" onClick="doShowScope(11)" style="font-family:Arial, Helvetica, sans-serif; font-size:">Scope</a>
                  </td>
                </tr>
                <tr>
                  <td align="left">&nbsp;</td>
                  <td align="right" width="25%">&nbsp;</td>
                </tr>
                <tr>
                  <td align="left">&nbsp;</td>
                  <td align="right" width="25%" colspan="2"><a id="btnRequestReport" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-info', width: 150" onclick="doRequestReport()">Report Enquiry</a></td>
                </tr>
                <tr>
                  <td align="left">&nbsp;</td>
                  <td align="right" width="25%" colspan="2"><a id="btnRequestReport" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-orderform', width: 150" onclick="doNewBooking()">Book/Request Report</a></td>
                </tr>
              </table>
            </div>

            <div title="Architect Sign Up" data-options="iconCls:'icon-people'" style="overflow: auto; padding: 10px;">
              <h3 style= "color:#0099FF;">Create an account</h3>
              <form id="frmSignUp" action="index.php" method="post">
                <table style="text-align: left; width: 90%; height: 80%;" cellpadding="5">
                  <tr>
                    <td style="text-align: left;">First Name*:</td>
                    <td><input class="easyui-validatebox" type="text" name="fldFirstname" data-options="required: true" style="width: 90%" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Last Name*:</td>
                    <td><input class="easyui-validatebox" type="text" name="fldLastname" data-options="required: true" style="width: 90%" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Email*:</td>
                    <td><input class="easyui-validatebox" type="text" name="fldEmail" data-options="validType: 'email', required: true" iconCls="icon-email" style="width: 90%" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Password*:</td>
                    <td>
                      <input id="fldPassword" class="easyui-passwordbox" prompt="Enter password" iconWidth="28" style="width: 90%; padding: 10px" data-options="required: true">
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Re-enter Password*:</td>
                    <td>
                      <input class="easyui-passwordbox" prompt="Confirm your password" iconWidth="28" validType="confirmPass['#fldPassword']" style="width: 90%; padding: 10px" data-options="required: true">
                    </td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Mobile*:</td>
                    <td><input class="easyui-validatebox" type="text" name="fldMobile" data-options="required: true" style="width: 60%" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Postcode*:</td>
                    <td><input class="easyui-validatebox" type="text" name="fldPostcode" data-options="required: true" style="width: 60%" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Registration No.*:<br/>(For architects)</td>
                    <td><input class="easyui-validatebox" type="text" name="fldRegNo" data-options="required: true" style="width: 60%" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">Company:<br/>(For architects)</td>
                    <td><input class="easyui-validatebox" type="text" name="fldCompany" data-options="prompt: 'For architects'" style="width: 60%" /></td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">&nbsp;</td>
                    <td><a href="#" id="btnSignup" class="easyui-linkbutton" data-options="iconCls:'icon-users'">Create Account</a></td>
                  </tr>
                </table>
              </form>
            </div>
        <?php
          }
        ?>
      </div>
    </div>

    <div data-options="region: 'center'" title="&nbsp;">
      <div id="divRequestReport" class="easyui-panel" title="Request for Report(s)" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <h3 style= "color:#0099FF;">Your Details</h3>
          <table style="text-align: left; width: 90%;" cellpadding="5">
            <tr>
              <td style="text-align: left;">First Name*:</td>
              <td><input class="easyui-validatebox" type="text" id="fldYourFirstname" data-options="required: true" style="width: 90%" /></td>
            </tr>
            <tr>
              <td style="text-align: left;">Last Name*:</td>
              <td><input class="easyui-validatebox" type="text" id="fldYourLastname" data-options="required: true" style="width: 90%" /></td>
            </tr>
            <tr>
              <td style="text-align: left;">Email*:</td>
              <td><input class="easyui-validatebox" type="text" id="fldYourEmail" data-options="validType: 'email', required: true" iconCls="icon-email" style="width: 90%" /></td>
            </tr>
            <tr>
              <td style="text-align: left;">Mobile*:</td>
              <td><input class="easyui-validatebox" type="text" id="fldYourMobile" data-options="required: true" style="width: 60%" /></td>
            </tr>
            <tr>
              <td style="text-align: left;">Notes:</td>
              <td><input class="easyui-textbox" type="text" id="fldYourNotes" data-options="multiline: true" style="width: 90%; height: 100px" /></td>
            </tr>
            <tr>
              <td style="text-align: left;">&nbsp;</td>
              <td><a href="#" id="btnRequestReportSubmit" class="easyui-linkbutton" data-options="iconCls:'icon-marketreport'" onclick="doSubmitRequestReport()">Submit</a></td>
            </tr>
          </table>
      </div>

      <div id="divReportPropAssessment" class="easyui-panel" title="Residential Property Assessment Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/property-assessment.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Property Assessment Report or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>

              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>

              <p>To view the Scope and Terms and Conditions for this service click <a href="PAScope.php">here</a>.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>With an <strong>Archicentre Australia</strong> Property Assessment Report you’ll know immediately about the condition of the buildings and property and if we found any significant building defects that may impact on your proposed purchase or renovation.</p>
              <p>Our expert Architect will complete a 200 plus-point Assessment of the entire property and will provide you with a detailed written report.</p>
              <p>Bundle & Save! Bundle your Property Assessment with a Timber Pest Inspection and save money.</p>
              <p><h3>THE PROPERTY ASSESSMENT REPORT IDENTIFIES:</h3></p>
              <p>
                <ul>
                  <li>Major defects, minor defects and maintenance items,</li>
                  <li>Condition report of the house,</li>
                  <li>Provide you with analysis and advice on how best to fix or manage these issues,</li>
                  <li>Recommended professionals and/or trades which may be appropriate to undertake further investigation or carry out the recommended action</li>
                </ul>
              </p>

              <h3>OUR PROPERTY ASSESSMENTS INCLUDE:</h3>
              <p>
                <ul>
                  <li>Fixed Pricing – no hidden extras.</li>
                  <li>Visual Assessment by an experienced registered architect.</li>
                  <li>Comprehensive easy-to-understand electronic Assessment report with a 200 plus-point Assessment that complies with Australian Standards.</li>
                  <li>Fast turnaround including the architect’s verbal on-the-day summary and discussion about the findings of your property Assessment. Same day turnaround is generally available on request.</li>
                  <li>Detailed Cost Guide to help you understand the costs of necessary repair and maintenance.</li>
                  <li>Covered by professional indemnity insurance, and</li>
                  <li>Archicentre Australia is covered by $20 million public liability insurance.</li>
                  <li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>

              <h3>OUR ARCHITECTS ARE:</h3>
              <p>
                <ul>
                  <li>Amongst the most highly qualified building experts.</li>
                  <li>Fully qualified, registered and experienced and specifically trained in building defect identification.</li>
                </ul>
              </p>

              <h3>YOU CAN ALSO RECEIVE:</h3>
              <p>
                <ul>
                  <li>Free renovation assessment of the property</li>
                  <li>Further advice on areas of your concern and preventative measures. Timely repairs may avoid potentially more extensive and costly future repair or replacement work.</li>
                  <li>Bundle & Save: Bundle a Pest Inspection with your Property Assessment and save money.</li>
                  <li>Updates on the full range of Archicentre Australia products to help you in the future. Read more about our Timber Pest Inspections</li>
              </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divScopePropAssessment" class="easyui-panel" title="Residential Property Assessment Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top;">
              <h2>Scope of Services</h2>
              <p>This Report is prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and in accordance with Australian Standard 4349.1-2007 Assessment of Buildings Part 1: Pre-purchase Inspections – Residential Buildings and any other Australian Standards and definitions cited in the Terms and Conditions.</p>
              <p>This Report is a subjective assessment prepared by the assessing architect on a visual assessment of the condition of the reasonably accessible parts of the property and on the basis of the prevailing structural, soil and weather conditions at the time of the assessment and does not cover enquiries of councils or other authorities.</p>
              <p>It is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law.
              <p>Prolonged periods of wet or dry weather may cause structural changes to the property as described in Archicentre Australia’s  Property Maintenance Guide which you can download from the link found in the body of your Report and in the Report cover letter.</p>
              <p>This Report will not disclose defects in inaccessible areas, defects that are concealed and/or not reasonably visible, defects that may be apparent in other weather conditions or defects that have not yet arisen.
              <p>This Report is not a rigorous assessment of all building elements and does not cover all maintenance items, particularly those such as jamming doors, windows or catches, decorative finishes and hairline or slight cracks. This is in accordance with Category 0 and 1 of Appendix C -AS 2870-2011.</p>
              <p>The Report is not a pest assessment. Archicentre Australia recommends that a timber pest assessment be carried out on all properties being considered for purchase. Clients wishing to have a full timber pest assessment should contact Archicentre Australia to arrange a separate pest assessment. Archicentre Australia Timber Pest Inspections are undertaken by highly qualified, independent and authorised inspectors. Archicentre Australia does not sell pest control services so you can trust that you will not be recommended treatments that you do not need.</p>
              <p>The assessment assumes that the existing use of the property will continue and the Report is prepared on that basis. As such, the assessment will not assess the fitness of the property for any other intended purpose. We advise you to verify any proposed change in use with the relevant authorities.</p>
              <p>If you are intending to purchase the property, and in consideration of the limitations of a visual assessment, as well as budgeting for the anticipated cost of the recommended repairs and maintenance, Archicentre Australia recommends budgeting a further 5%  of the value of the property, to provide a “safety net” against unexpected costs that may arise over the first five years of ownership and that this be taken into account when establishing a purchase price. The amount of this safety net is a rough guide for properties generally and not specific to your property.</p>
              <p>Where the property is a unit or apartment, associated areas may include common areas pertinent and immediately adjacent to the subject residence, or as specifically instructed by the customer.</p>

              <h3>WHAT IS INCLUDED IN YOUR REPORT</h3>
              <p>
                <ul>
                  <li>Identification of observed building defects upon a visual assessment of the reasonably accessible parts of the property;</li>
                  <li>Assessment of defects for significance relative to the expected condition of a well maintained property of similar age and construction type;</li>
                  <li>Recommended actions for identified defects;</li>
                  <li>Recommended professionals and/or trades who may be appropriate to undertake further investigation or carry out the recommended action;</li>
                  <li>General and specific additional advice on maintenance matters that your architect has deemed appropriate.</li>
                </ul>
              </p>

              <h3>WHAT IS NOT RECORDED IN YOUR REPORT</h3>
              <p>
                <ul>
                  <li>Identification of toxic mould, or asbestos related products;</li>
                  <li>Condition or operation of swimming pools, spas or their surroundings, rainwater or grey water tanks or treatment and similar facilities;</li>
                  <li>Condition, adequacy or compliance of electrical, gas and plumbing systems including roof plumbing, underground pipes or drainage systems;</li>
                  <li>Operation adequacy or compliance of security and communications systems, smoke detectors, building services, building automation, electrically operated doors including garage doors, plant, equipment, mechanical. gas or electrical appliances and fittings;</li>
                  <li>Footings below ground, soil conditions, site factors and hazards;</li>
                  <li>Compliance with legal, planning, regulatory including Building Code of Australia, sustainability or environmental matters including but not limited to the adequacy or safety of insulation, waterproof membranes and/or other installations, Bushfire Attack Level assessments;</li>
                  <li>Timber, metal or other framing sizes and adequacy.</li>
                </ul>
              </p>

              <h2>Definitions</h2>
              <h3>GENERAL ADVICE</h3>
              <p>Minor Defect/Maintenance item</p>
              <p>Any items of repair which are common to properties of similar age or type of construction and as described in the Property Maintenance Guide, including decorative features and finishes.</p>
              <p>Major Defect</p>
              <p>A defect of sufficient magnitude where rectification has to be carried out without undue delay to avoid:</p>
              <p>
                <ul>
                  <li>unsafe conditions, posing a threat to life or serious injury; or,</li>
                  <li>loss of utility whereby the defect is such that the whole of the relevant part of the property can no longer serve its intended function; or,</li>
                  <li>further substantial deterioration of the property.</li>
                </ul>
              </p>
              <p>Serious Structural Defect</p>
              <p>A major defect in any internal or external primary load bearing component of the building which seriously affects the structural integrity of the building requiring rectification to be carried out without undue delay to avoid:</p>
              <p>
                <ul>
                  <li>unsafe conditions, posing a threat to life or serious injury; or,</li>
                  <li>loss of utility, whereby the defect is such that the whole of the relevant part of the building can no longer serve its intended function; or,</li>
                  <li>further substantial deterioration of the building.</li>
                </ul>
              </p>
              <p>In the case of cracking, a serious structural defect denotes severe cracking as defined by Category 4, Appendix C – Australian Standard AS 2870-2011.</p>
              <p>
                <ul>
                  <li>Your Report is not a pest assessment report. Archicentre Australia recommends pre-purchase and ongoing timber pest assessment in all mainland states and territories.</li>
                  <li>Smoke detectors must be installed in accordance with current regulations. Archicentre Australia suggests that you regularly check these to ensure proper operation.</li>
                  <li>Drought conditions can cause buildings to crack literally overnight. Please note the precautions advised in the referred Property Maintenance Guide and any specific recommendations made in your Report.</li>
                  <li>The condition of timber-framed or concrete decks and balconies deteriorates over time – annual assessments should be undertaken to verify their safety.</li>
                  <li>In the interests of safety, Archicentre Australia recommends all property owners should have an electrical safety assessment undertaken by a suitably qualified specialist.</li>
                  <li>If you are purchasing the property, Archicentre Australia recommends a review of all door and window locks and security systems, appliance and equipment at settlement.</li>
                </ul>
              </p>
              <p>For Strata, Stratum anti Company Title Properties</p>
              <p>The Assessment is limited to the nominated individual property including associated private open space. It is not the scope of this Assessment to include common or other adjacent property. Legal advice should be obtained as to the liability to contribute to the cost of repairs in respect of any common property.</p>
              <p>Assessment Access</p>
              <p>The architect can only assess reasonably accessible parts of the property. It is your responsibility to ensure that any inaccessible parts of the property that can be made reasonably accessible for an assessment are made so, prior to the assessment. If parts of the property have been noted as being inaccessible during the assessment, it is important that you contact Archicentre Australia and arrange for a second assessment when access is available.</p>
              <p>Reasonably and Safely Accessible – Accessible areas which can be accessed by a 3.6 metre ladder or those which have at least 600mm unimpeded vertical and horizontal clearance without the removal of any fixed or unfixed furniture, fittings, stored items, cladding or lining materials, plants or soil. Architect assessors are unable to access areas where there is a risk of adverse disturbance or damage to the property. This includes the garden area. The architect will determine the extent of accessible areas at the time of the assessment.</p>
              <p>Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations. Architects are unable to assess areas higher than 3 metres above ground level unless secure ladder access is available and fall prevention devices or barriers are present.</p>
              <p>Reasonable Access may not be possible due to physical obstructions or conditions that may be hazardous or unsafe to the architect.</p>
              <p>Access restrictions will be noted where appropriate.</p>

              <h2>Terms & Conditions</h2>
              <p>The Report has been prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect and is supplied to you (the named Client) on the basis of and subject to the Scope of Service and the Terms and Conditions of the Contract and the Assessment and Archicentre Australia accepts no responsibility to other persons relying on the report.</p>
              <p>The Report has been prepared in accordance with Australian Standard 4349.1-2007 Assessment of Buildings Part 1: Pre-purchase Inspections – Residential Buildings and to any other Australian Standards and definitions cited in the Terms and Conditions.</p>
              <p>Please note that having provided to you an opportunity to read the Scope and the Terms and Conditions following upon you making a booking for the Property Assessment, the architect has proceeded to conduct the assessment of the property and Archicentre Australia has proceeded to supply this Report on the basis that you have accepted the Scope and the Terms and Conditions and/or are deemed to have done so upon the architect arriving at the property.</p>
              <p>The Report is to be read in conjunction with all other Archicentre Australia Reports issued concurrently for the property.</p>
              <p>
                <ol>
                  <li>The Scope of Service and the Terms and Conditions take precedence over any oral or written representations by Archicentre Australia, to the extent of any inconsistency.</li>
                  <li>After making the booking, the client is deemed to have accepted these Terms and Conditions and Scope of Service upon the architect arriving on site.</li>
                  <li>The Report is not a guarantee but is an opinion of the condition of the assessed property relative to the average condition of well maintained similar properties of a similar age.</li>
                  <li>Archicentre Australia accepts no liability with respect to work carried out by other trades, consultants or practitioners referred by Archicentre Australia. It is your responsibility to make appropriate contractual arrangements with such person.</li>
                  <li>The Report is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law. Archicentre Australia does not accept responsibility for services other than those provided in this Report.</li>
                  <li>Archicentre Australia’s liability shall be limited to the provision of a new assessment and report or the payment of the cost of a new assessment and report, at the election of Archicentre Australia.</li>
                  <li>The assessment assumes that the existing use of the building will continue. The assessment will not assess the fitness of the building for any intended purpose. Any proposed change in use should be verified with the relevant authorities.</li>
                  <li>The Property Maintenance Guide constitutes a vital part of the architect’s recommendations and failure to observe either the recommendations or the Property Maintenance Guide could lead to premature deterioration of the property.</li>
                  <li>The Health and Safety Warnings constitutes a vital part of Archicentre Australia’s recommendation to you. Failure to observe the provisions of the warning sheet could jeopardise the safety of the occupants.</li>
                  <li>The Report and its appendices and attachments, as issued by Archicentre, Australia takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the architect’s recommendations, shall be relied upon by you.</li>
                  <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days of receipt by Archicentre Australia of such written notice before taking any remedial action or incurring any costs.</li>
                  <li>Reference to Archicentre Australia in this Report and any other documentation includes, where the context permits, its agents and representatives authorised to act on its behalf.</li>
                  <li>These Terms and Conditions are in addition to, and do not replace or remove, any rights or implied guarantees conferred by the Competition and Consumer Act 2010 or any other consumer protection legislation.</li>
                </ol>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportTimberPest" class="easyui-panel" title="Residential Timber Pest Inspection Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/Pest-Inspection.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Timber Inspection Report or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>With an <strong>Archicentre Australia</strong> Timber Pest Inspection Report you’ll know immediately about the condition of the buildings and property and if there are any serious building faults that may impact on your proposed purchase or renovation.</p>
              <p>Our Accredited Timber Pest Inspectors are completely independent and highly qualified.</p>
              <p><strong>Archicentre Australia</strong> is primarily interested in advising you responsibly and objectively about the presence of termites, borers and other timber pests or problem areas on a property. We will not be trying to sell you products or services that you do not need – simply advise on appropriate treatments that safeguard your investment while remaining safe for  humans.</p>
              <p>Bundle & Save! Bundle your Timber Pest Inspection with a Property Assessment and save money – some States excepted.</p>
              <p><h3>THE TIMBER PEST INSPECTION IDENTIFIES:</h3></p>
              <p>This inspection is a visual assessment of evidence indicating activity, damage and/or workings of the following timber destroying organisms:</p>
              <p>
                <ul>
                  <li>Subterranean Termites</li>
                  <li>That group of wood destroying insects of the Order Isoptera which are commonly described as ‘Subterranean’.</li>
                  <li>Dampwood Termites</li>
                  <li>That group of wood destroying insects of the Order Isoptera which are commonly described as ‘Dampwood’.</li>
                  <li>Wood Decay Fungi</li>
                  <li>Fungal organisms that commonly cause the deterioration or decay of timber in service.</li>
                  <li>Beetles that attack timber in service (Borers)</li>
                  <li>That group of wood destroying insects of the Order Coleoptera that are known to cause timber damage.</li>
                </ul>
              </p>

              <h3>OUR TIMBER PEST INSPECTION INCLUDES:</h3>
              <p>
                <ul>
                  <li>Fixed Pricing – no hidden extras.</li>
                  <li>Visual Inspection by an experienced qualified timber pest inspector.</li>
                  <li>Comprehensive electronic report that complies with Australian Standards.</li>
                  <li>Quick turnaround including the inspector’s verbal on-the-day summary and discussion about the findings of the pest inspections.</li>
                  <li>Independent advice to help you fix problems now and reduce future risk.</li>
                  <li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>

              <p><strong>ARCHICENTRE AUSTRALIA PEST INSPECTORS ARE:</strong></p>
              <p>
                <ul>
                  <li>Covered by $10 million public liability insurance,</li>
                  <li>Members of the Australian Environmental Pest Managers Association,  or other State based accreditation bodies and</li>
                  <li>Comply with State based codes of practice such as the 2011 AEPMA Code of Practice for pest inspector qualifications, training and insurance.</li>
                </ul>
              </p>
              <p><strong>YOU CAN ALSO RECEIVE:</strong></p>

              <p>
                <ul>
                  <li>Further advice on areas of your concern and preventative measures. Timely repairs may avoid potentially more extensive and costly future repair or replacement work.</li>
                  <li>Bundle & Save: Bundle a Property Assessment in with your Timber Pest Inspection and save money. Read more about our Residential Property Assessments.</li>
                </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeTimberPest" class="easyui-panel" title="Residential Timber Pest Inspection - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Services</h2>
              <p>This Report is prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – in accordance with Australian Standard AS 4349.3 – 2010 Inspection of buildings, Part 3: Timber pest inspections and any other Australian Standards and definitions cited in the Terms and Conditions. The Report is subject to the scope, limitations, exclusions, definitions and terms and conditions as indicated and defined within this Report.</p>
              <p>You should carefully read and make sure you understand all information in this document, including the Terms and Conditions. It will help you understand what is involved in a timber pest inspection, the difficulties faced by a timber pest inspector and why it is not possible to guarantee that a property is completely free of timber pests. It also details important information about what you can do to help protect your property from timber pests.</p>
              <p>This Report is based on a visual inspection of the condition of the reasonably accessible parts of the property of the property and on the basis of the prevailing structural, soil and weather conditions at the time of the inspection. Prolonged periods of exposure to conditions conducive to pest attack or infestation will increase the risk of such an attack and the damage which may eventuate.</p>

              <h3>WHAT IS INCLUDED IN YOUR REPORT</h3>
              <p>Unless otherwise specified this inspection is a visual assessment of evidence indicating activity, damage and/or workings of the following timber destroying organisms (Please refer to the Termites and Borers Technical information sheet):</p>
              <ol>
                <li><strong>Subterranean Termites</strong></li>
              </ol>
              <p>That group of wood destroying insects of the Order Isoptera which are commonly described as ‘Subterranean’.</p>
                <ol start="2">
                  <li><strong>Dampwood Termites</strong></li>
                </ol>
              <p>That group of wood destroying insects of the Order Isoptera which are commonly described as ‘Darnpwood’.</p>
              <ol start="3">
                <li><strong>Wood Decay Fungi</strong></li>
              </ol>
              <p>Fungal organisms that commonly cause the deterioration or decay of timber in service.</p>
              <ol start="4">
                <li><strong>Beetles that attack timber in service (Borers)</strong></li>
              </ol>
              <p>That group of wood destroying insects of the Order Coleoptera that are known to cause timber damage.</p>
              <h3>WHAT IS NOT RECORDED IN YOUR REPORT</h3>
              <p>Detection or non-detection of timber pests or household pests other than subterranean and dampwood termites, wood decay fungus and borer beetles that attack timber in service.</p>
              <p>Detection or non-detection of timber pest attack or activity in inaccessible areas, including but not exclusively, within wall and structural cavities and underground, within building plant and equipment and storage vessels, where it is not reasonably visible, where it may be apparent in other weather conditions or where it has not yet arisen, or to furniture, furnishings, stored items, or concealed timbers.</p>
              <p>Detection or non detection of Drywood termites. Drywood Termites are extremely difficult to detect visually and rarely found in Australia and no warranty of their absence is given, however any visual evidence located during this inspection will be reported.</p>
              <p>Environmental or biological risk assessment not associated with timber pests, or with occupational health or safety issues.</p>
              <p>Pest preventative or treatment measures, or costs for control, rectification or prevention of attack by noted timber pests.</p>
              <p>Structural assessment of damage to timber members or other structure members.</p>
              <p>Identification or assessment of building or property defects.</p>
              <p>Inspection, identification or assessment of conditions outside the subject property.</p>
              <p>Enquiries of councils or other authorities, consultants or sub-contractors.</p>

              <h2>Definitions</h2>
              <h3>No Visible Evidence</h3>
              <p>There was no visible indication of the presence or activity of timber pests at the time of the inspection.</p>
              <p><strong>Visible Evidence</strong></p>
              <p>Timber pest damage or signs of timber pest activity was detected.</p>
              <p><strong>Visible Active Evidence</strong></p>
              <p>Active timber pests were identified at the time of inspection.</p>
              <p><strong>Visible Moderate Damage Present</strong></p>
              <p>Moderate physical damage due to the action of timber pests was identified at the time of inspection.</p>
              <p><strong>Visible Extensive Damage Present</strong></p>
              <p>It appears that extensive timber damage and/or possibly serious structural damage may be present requiring repair or replacement as a matter of urgency. Where any damage is present it is strongly recommended that you have it fully assessed by a qualified structural engineer.</p>
              <p><strong>Moderate Risk</strong></p>
              <p>In any area where timber pest activity has been detected, environmentally conducive conditions or access limitations identified, there is an ongoing risk of infestation or damage unless an integrated pest management program has been implemented.</p>
              <p><strong>High Risk</strong></p>
              <p>Local environmental, building structure or site conditions indicate that there is a high probability of infestation or destructive timber pest activity.</p>
              <p><strong>Extreme Risk</strong></p>
              <p>Conditions provide an ideal environment for heavy infestation and serious structural damage as a result of timber pest activity.</p>
              <p>Only accessible areas will be inspected. The Australian Standard AS 4349.3-2010 defines an accessible area as “area of the site where sufficient safe and reasonable access is available to allow inspection within the scope of the inspection”. Where safe, unobstructed access is provided and the minimum clearances specified (in AS 4349.3 Table 3.1) are available or, where these clearances are not available, areas within the consultant’s unobstructed line of sight and within arm’s length, will be inspected.</p>
              <p>Reasonably and Safely Accessible areas are those areas which can be accessed by a 3.6 metre ladder or those which have an access hole at least 400mm x 500mm and at least 600mm safe and unimpeded vertical and horizontal crawl space clearance. Reasonable access does not include cutting or making access traps, removing screws and bolts or any other fastenings, removal of sealants to access covers. Reasonable access does not include the use of destructive or intrusive inspection methods. Nor does reasonable access include, moving heavy furniture or stored goods, or the removal of cladding or lining materials, plants or soil.</p>
              <p>Archicentre Australia authorised inspectors are unable to inspect areas higher than 3 metres above ground level unless secure ladder access is available and fall prevention devices or barriers are present. Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations.</p>
              <p>The inspector will determine the extent of accessible areas at the time of the inspection.</p>
              <p>The inspector can only inspect the reasonably accessible parts of the property. It is your responsibility to ensure that the inaccessible parts of the property that can be made reasonably accessible for an inspection are made so, prior to the inspection.</p>
              <p>If parts of the property have been noted as being inaccessible during the inspection, it is important that you contact Archicentre Australia and arrange for a second inspection when access to restricted areas has been made available.</p>
              <p>Where access is significantly restricted or existing environmental conditions are noted as being of high or extreme risk of timber pest infestation, the inspector may recommend an intrusive timber pest inspection. An intrusive inspection may involve the removal or lifting of furniture, furnishings, linings, claddings, stored goods etc. and/or the cutting of access holes or traps. As physical disruption or damage may occur, it is your responsibility to provide the property owner’s written permission confirming that Archicentre Australia will not be held liable for any damage caused to the property during the intrusive inspection, or the rectification of such damage, prior to the booking of the intrusive inspection service. A price for an intrusive inspection is available on request.</p>
              <h3>IMPORTANT NOTES</h3>
              <p>The Summary section is not the complete Report.</p>
              <p>The complete Archicentre Australia Timber Pest Inspection Report also includes information contained in the referred Technical information sheets.</p>
              <p>Restrictions to access may reduce the effectiveness of the inspection and mean that pest activity and damage is not visually detectable.</p>
              <p>In cases where historic damage from subterranean termites is found it is possible that termites are still active in the locality and may return to the property. This may lead to significant further damage, and is impossible to predict. An integrated pest management program, including regular inspections, is highly recommended. Subterranean termite attack can occur within 24 hours of an inspection.</p>
              <p>Where visible damage from Wood Decay Fungi is detected a brief description of observable damage and general location has been provided. It should be noted that an amount of damage may be present but cannot be seen without intrusive inspection techniques.</p>
              <p>This is not a structural report. In the event that damage is detected we recommend a detailed intrusive inspection by a structural engineer.</p>
              <p>Refer to the Technical information sheets on Termites and Borers, Property Maintenance and Health and Safety for detailed information on how to reduce favourable environmental conditions for timber pest activity.</p>
              <p>Archicentre Australia recommends an ongoing pest management plan to protect your property, including annual inspections.</p>
              <p>For more detailed information on termites refer to the Technical Information sheets that form an integral part of this Report.</p>
              <h3>GENERAL ADVICE</h3>
              <p>Any report finding no visual evidence of timber pests or pest activity is not an indication of future risk and does not protect the building from future attack by timber destroying agents. The status and condition of a building may change at any time due to the habits of termites and other timber pests.</p>
              <p>For Strata, Stratum and Company Title Properties The inspection is limited to the individual unit and immediate surroundings. It is not the scope of this Inspection to include common or other adjacent property. Legal advice should be obtained as to the liability to contribute to the cost of treatment or repairs of timber pest activity or damage in the common property, or to your property from the inaction of attention to the management of timber pest activity on common property.</p>
              <h2>Terms & Conditions</h2>
              <p>This Report has been prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named inspector and is supplied to you (the named client) on the basis of and subject to the Scope of Service and Terms and Conditions of the Contract and the Inspection and Archicentre Australia accepts no responsibility to other persons relying on the report.</p>
              <p>The Report has been prepared in accordance with Australian Standard AS 4349.3 – 2010 Inspection of buildings Part 3: Timber pest inspections and to any other Australian Standards cited in the Terms and Conditions. The inspection is visual and non invasive.</p>
              <p>Please note that having provided you with an opportunity to read the Scope of Service and the Terms and Conditions upon you making a booking for the Timber Pest Inspection, the inspector has proceeded to conduct the inspection of the property and Archicentre Australia  has proceeded to supply this Report on the basis that you have accepted the Scope of Service and the Terms and Conditions and/or are deemed to have done so upon the inspector arriving at the property.</p>
              <p>The Report is to be read in conjunction with all other Archicentre Australia Reports issued concurrently for the property.</p>
              <p>The Scope and the Terms and Conditions take precedence over any oral or written representations by Archicentre Australia to the extent of any inconsistencies.</p>
              <ol>
                <li>After making the booking, you are deemed to have accepted these Terms and Conditions and The Scope of Inspection upon the inspector arriving on site.</li>
                <li>The Report is not a guarantee but is an opinion of the condition of the inspected property.</li>
                <li>Archicentre Australia accepts no liability with respect to work carried out by other trades, consultants or practitioners referred by Archicentre Australia. It is your responsibility to make appropriate contractual arrangements with such person.</li>
                <li>The Report is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law. Archicentre Australia does not accept responsibility for services other than those provided in the Report.</li>
                <li>Archicentre Australia’s liability shall be limited to the provision of a new inspection and report or the payment of the cost of a new inspection and report, at the election of Archicentre Australia.</li>
                <li>The lack of direct visible evidence does not mean that any and/or significant damage has not occurred or that there are no timber pests present.</li>
                <li>This is not a structural report and, in the event of any evidence of previous or current termite infestation, it is recommended that a full structural inspection be carried out by a qualified professional as soon as possible.</li>
                <li>It is your responsibility to arrange for an intrusive timber pest inspection where one is recommended in the Report.</li>
                <li>The Termites and Borers Technical information sheet constitutes a vital part of the inspector’s final Report and failure to observe either the Report or the Archicentre Australia Termites and Borers Technical information sheet could lead to premature deterioration of the property.</li>
                <li>The Property Maintenance Guide constitutes a vital part of the inspector’s recommendations and failure to observe either the recommendations or the Property Maintenance Guide could lead to premature deterioration of the property.</li>
                <li>The Health and Safety Warnings constitute a vital part of the Report. Failure to observe the provisions of the warning sheet could jeopardise the safety of occupants.</li>
                <li>The Report and its appendices and attachments, as issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the inspector’s recommendations, shall be relied upon by you.</li>
                <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to resolve matters with you within 28 days of receipt by Archicentre Australia of such written notice and before taking any remedial action or incurring any cost.</li>
                <li>Reference to Archicentre Australia in the Report and any other documentation includes, where the context permits, its agents and representatives authorised to act on its behalf.</li>
                <li>These Terms and Conditions are in addition to, and do not replace or remove, any rights or implied guarantees conferred by the Competition and Consumer Act or any other consumer protection legislation.</li>
              </ol>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportArchAdvice" class="easyui-panel" title="Residential Architect's Advice Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/Architects-Advice.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Residential Architect's Advice or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>Your home is one of the largest and most important assets you have. If you have concerns about your home, it makes sense to get advice from an independent professional – an <strong>Archicentre Australia</strong> Architect – who can help you to work out your best course of action and give you the confidence to move forward.</p>
              <p>Architects are amongst the most highly qualified professionals in the building industry and can provide expert advice about all aspects of building construction and maintenance.</p>
              <p>Our Architect’s Advice Report will include a site meeting with your architect to discuss concerns, an investigation of the issue and the preparation of a written report outlining their recommendations, all for a fixed fee.</p>
              <p><strong>Here are just some of the areas in which our architects can help:</strong></p>

              <h3><font color="#FF0000">CONSTRUCTION</font></h3>
              <p><strong>DEFECTIVE AND INCOMPLETE WORKS ADVICE</strong></p>
              <p>
                <ul>
                  <li>For new or near-new home-owners or home renovators who are concerned about the building work or the development of defects</li>
                </ul>
              </p>

              <p><strong>CONSTRUCTION QUALITY ASSURANCE ADVICE</strong></p>
              <p>
                <ul>
                  <li>For people who have bought a new or renovated property and have concerns about the quality of workmanship.</li>
                  <li>For owners wanting an independent assessment of the workmanship quality of a trade or small building improvement work.</li>
                </ul>
              </p>

              <h3><font color="#FF0000">MAINTENANCE</font></h3>
              <p><strong>BUILDING DEFECT ADVICE</strong></p>
              <p>
                <ul>
                  <li>For established home-owners who are concerned about problems at their property (e.g. cracking, dampness, drainage, subsidence).</li>
                </ul>
              </p>

              <p><strong>MAINTENANCE ADVICE</strong></p>
              <p>
                <ul>
                  <li>For owner-occupiers or investors wanting short, medium and long-term maintenance recommendations to budget for and/or minimize future repair costs.</li>
                </ul>
              </p>

              <h3><font color="#FF0000">POST-INCIDENT ADVICE</font></h3>
              <p>
                <ul>
                  <li>For the owners of properties that have been damaged by an accident (e.g. an electrical fire, a burst water pipe or a blocked drain) or an extreme weather event (e.g. a flood, bushfire, storm or earthquake) who need advice about property repairs.</li>
                </ul>
              </p>

              <h3><font color="#FF0000">DESIGN ADVICE</font></h3>
              <p>
                <ul>
                  <li>For owner-occupiers or investors wanting to frame an idea of how building circumstances could be altered to better utilise space, construction then leading to future aspirations.</li>
                </ul>
              </p>

              <p><strong>OUR ARCHITECT'S ADVICE report includes:</strong></p>
              <p>
                <ul>
                  <li>A description of the problem and a suggested solution(s) or action items.</li>
                  <li>Our architects are completely unbiased and independent in the advice they give.</li>
                  <li>t’s a simple, low-cost way of getting the best advice at an early stage and may save you considerable money and hassle in the long run.</li>
                  <li>To view the Scope and Terms and Conditions for this service click here</li>
                </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeArchAdvice" class="easyui-panel" title="Residential Architect's Advice Report - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Services</h2>
              <h3>WHAT IS INCLUDED IN THIS REPORT</h3>
              <p>This Report has been prepared, in good faith, on a visual review of the documentation and instructions, whether in writing or verbal, provided by you, the property owner or client.</p>
              <p>The Report is limited a visual investigation of the item, area or matter of your concern.</p>
              <p>Where this relates to a defect or problem with a building or property element the architect will, where appropriate:</p>
              <p>
                <ul>
                  <li>Investigate and advise on the cause of the defect;</li>
                  <li>Provide advice on the repair or maintenance of the defect;</li>
                  <li>Recommend the appropriate trades, profession or technical expert to undertake further investigation and/or the repair or rectification.</li>
                </ul>
              </p>
              <p>Where the matter relates to design, the architect will, where appropriate:</p>
              <p>
                <ul>
                  <li>Provide an assessment of the design issues;</li>
                  <li>Provide a conceptual design solution.</li>
                </ul>
              </p>

              <h3>WHAT IS NOT RECORDED IN THIS REPORT</h3>
              <p>The Report will not contain advice on any matters beyond the scope of the advice sought.</p>
              <p>
                <ul>
                  <li>The Report is based on the condition of the property and the prevailing structural, soil and weather conditions at the time of the assessment. Prolonged periods of wet or dry weather will cause structural changes to the property as described in Archicentre Australia’s Property Maintenance Guide.</li>
                  <li>The Report is based on a visual assessment of reasonably accessible parts of the property and does not cover enquiries of councils or other authorities.</li>
                  <li>The Report will not disclose defects in inaccessible areas, defects that are not reasonably visible, defects which may be apparent in other weather conditions or defects which have not yet arisen.</li>
                  <li>This Report does not include a pest inspection. Clients wishing to have a full pest infestation check should advise Archicentre Australia who will arrange for a separate timber pest inspection.</li>
                  <li>The Report does not cover all maintenance items, particularly those such as jamming doors, windows or catches, decorative finishes and hairline or slight cracks (Category 0 and 1 of Appendix C – Australian Standard AS 2870-2011).</li>
                  <li>Unless specifically and explicitly agreed in writing with the owner prior to the inspection, the Report does not cover the identification in the Property of:</li>
                  <ul>
                    <li>Asbestos related products;</li>
                    <li>Condition or operation of swimming pools, spas and similar facilities;</li>
                    <li>Condition or adequacy of underground pipes or drainage systems;</li>
                    <li>Condition, adequacy or compliance of electrical, gas and plumbing systems including adequacy of roof plumbing;</li>
                    <li>Operation, adequacy or compliance of security and communications systems, smoke detectors, building services, building automation, automatic garage door mechanisms, plant, equipment and mechanical or electrical appliances or fittings;</li>
                    <li>Footings below ground or soil conditions;</li>
                    <li>Compliance with BCA, planning, sustainability or environmental matters including but not limited to the adequacy or safety of insulation, waterproof membranes and/or other installations, or BAL assessments.</li>
                  </ul>
                  <li>The Report assumes that the existing use of the Property will continue, and unless the advice is sought in respect of a change of use, the Report will not assess the fitness of the Property for any intended purpose. Any proposed change in use of the Property should be verified with the relevant authorities.</li>
                  <li>It is not a certificate of compliance for the Property within the requirements of any Act, regulation, ordinance or local by-law.</li>
                </ul>
              </p>

              <h3>REPORT STANDARD</h3>
              <p>The Report has been prepared by your Architect in accordance with Australian Standard AS4349.0-2007 inspection of Buildings Part 0: General Requirements and to any other Australian Standards cited in these Terms and Conditions.</p>
              <p>The architect can only assess reasonably and safely accessible parts of the property. It is your responsibility to ensure that any inaccessible parts of the property that can be made reasonably accessible for an assessment, where appropriate for the scope of advice sought, are made so, prior to the inspection. Areas which are not reasonably and safely accessible cannot be assessed.</p>
              <h2>Terms & Conditions</h2>
              <p>The Report has been prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect and is supplied to you (the named client) on the basis of and subject to the Scope and these Terms and Conditions. Archicentre Australia accepts no responsibility to other persons relying on the Report.</p>
              <p>The Report has been prepared in accordance with Australian Standard 4349.0-2007 Inspection of Buildings Part 0: General Requirements and to any other Australian Standards and definitions cited in the Terms and Conditions.</p>
              <p>The Report should be read in conjunction with any other Archicentre Australia Reports issued concurrently for the Property.</p>
              <p>The Scope and Terms and Conditions take precedence over any verbal or written representations by or on behalf of Archicentre Australia.</p>
              <p>
                <ol>
                  <li>After making the booking, the client is deemed to have accepted the Terms and Conditions and the Scope of Service upon the architect arriving on site.</li>
                  <li>The Report is not a guarantee but is an opinion of the condition of the inspected property.</li>
                  <li>Archicentre Australia accepts no liability with respect to work carried out by other trades, consultants or practitioners referred by Archicentre Australia. It is your responsibility to make appropriate contractual arrangements with such persons.</li>
                  <li>The Report is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law.</li>
                  <li>Archicentre Australia does not accept responsibility for services other than those provided in this Report.</li>
                  <li>Archicentre Australia’s liability shall be limited to the provision of a new assessment and report or the payment of the cost of a new assessment and report, at the election of Archicentre Australia.</li>
                  <li>The assessment assumes that the existing use of the building will continue. The assessment will not assess the fitness of the building for any intended purpose. Any proposed change in use should be verified with the relevant authorities.</li>
                  <li>The Archicentre Australia Property Maintenance Guide and any other selected attachments referred to in this Report are a vital part of the recommendations and failure to observe the recommendations in the Report, the Property Maintenance Guide or such other referred attachments could lead to premature deterioration of the property.</li>
                  <li>The Health and Safety Warnings constitutes a vital part of Archicentre Australia’s recommendation to you. Failure to observe the provisions of the warning sheet could jeopardise the safety of the occupants.</li>
                  <li>The Report and its appendices and attachments, as issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the architect’s recommendations, shall be relied upon by you.</li>
                  <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days of receipt by Archicentre Australia of such written notice before taking any remedial action or incurring any costs.</li>
                  <li>Reference to Archicentre Australia in this Report and any other documentation includes, where the context permits, its agents and representatives authorised to act on its behalf.</li>
                  <li>These Terms and Conditions are in addition to and do not replace or remove any implied guarantees or warranties conferred by the Competition and Consumer Act or any other consumer protection legislation.</li>
                </ol>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportMaintAdvice" class="easyui-panel" title="Residential Maintenance Advice Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/property-assessment.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Residential Maintenance Advice Report or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the Book Online button below and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p><strong>Building maintenance issues can seem insurmountable with calls flooding in week after week.</strong></p>
              <p><strong>Where do you start? What will it cost? Who do you talk to? And how do you know they aren’t recommending solutions that either won’t work or are designed to give them more work without fixing your problem?</strong></p>
              <p>Now there’s an answer to all those questions and a simple, cost effective way to avoid potential disasters – an Archicentre Australia Maintenance Advice Report.</p>
              <p>Archicentre Australia’s architects will provide you with a comprehensive maintenance assessment report for a fixed fee. We’ll assess your building for defects and faults and provide you with a schedule of necessary repairs and maintenance.</p>
              <p>In addition, Archicentre Australia architects practices can follow up to provide a range of architectural services focussed on maintenance issues and potentially new building works – and can assist in carrying out the necessary repairs which are as follows:</p>
              <p>
                <ul>
                  <li>Establishing scope of works.</li>
                  <li>Specifications & Working Drawings.</li>
                  <li>Calling tenders or Negotiating a price.</li>
                  <li>Contract Administration including quality assurance.</li>
                </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeMaintAdvice" class="easyui-panel" title="Residential Maintenance Advice - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Service</h2>
              <p>The Report has been prepared by your Architect in accordance with Australian Standard AS4349.0-2007 Inspection of Buildings Part 0: General Requirements and to any other Australian Standards cited in these Terms and Conditions.</p>
              <p>The architect can only assess reasonably and safely accessible parts of the property. It is your responsibility to ensure that any inaccessible parts of the property that can be made reasonably accessible for an assessment, where appropriate for the scope of advice sought, are made so, prior to the assessment. Areas which are not reasonably and safely accessible cannot be assessed.</p>
              <h3>WHAT IS INCLUDED IN THIS REPORT</h3>
              <p>Your Report has been prepared, in good faith, on a visual review of the documentation and instructions, whether in writing or verbal, provided by you, the property owner.</p>
              <p>The Report is limited to a visual investigation of the item, area or matter of your concern. Where this relates to a defect or problem with a building or property element the architect will, appropriate:</p>
              <p>
                <ul>
                  <li>Investigate and advise on the cause of the defect;</li>
                  <li>Provide advice on the repair or maintenance of the defect;</li>
                  <li>Recommend the appropriate trades, profession or technical expert to undertake further investigation and/or the repair or rectification.</li>
                </ul>
              </p>
              <p>Where the matter relates to design, the architect will, where appropriate:</p>
              <p>
                <ul>
                  <li>Provide an assessment of the design issues;</li>
                  <li>Provide a conceptual design solution.</li>
                </ul>
              </p>

              <h3>WHAT IS NOT RECORDED IN THIS REPORT</h3>
              <p>The Report will not contain advice on any matters beyond scope of the advice sought.</p>
              <p>The Report is based on the condition of the property and the prevailing structural, soil and weather conditions at the time of the inspection. Prolonged periods of wet or dry weather will cause structural changes to the property as described in the  Archicentre Australia Property Maintenance Guide.</p>
              <p>Unless specifically and explicitly agreed in writing with the owner prior to the assessment the Report is based on a visual assessment of reasonably accessible parts of the property and does not cover enquiries of councils or other authorities.</p>
              <p>The Report will not disclose defects in inaccessible areas, defects that are not reasonably visible, defects which may be apparent in other weather conditions or defects which have not yet arisen.</p>
              <p>This Report does not include a pest inspection. Clients wishing to have a full pest infestation check should advise Archicentre Australia who will arrange for a separate Timber Pest Inspection.</p>
              <p>The Report does not cover all maintenance items, particularly those such as jamming doors, windows or catches, decorative finishes and hairline or slight cracks (Category 0 and 1 of Appendix C – Australian Standard AS 2870-2011).</p>
              <p>Unless specifically and explicitly agreed in writing with the owner prior to the assessment, the Report does not cover the identification in the Property of:</p>
              <p>
                <ul>
                  <li>Asbestos related products;</li>
                  <li>Condition or operation of swimming pools, spas and similar facilities;</li>
                  <li>Condition or adequacy of underground pipes or drainage systems;</li>
                  <li>Condition, adequacy or compliance of electrical, gas and plumbing systems including adequacy of roof plumbing;</li>
                  <li>Operation, adequacy or compliance of security and communications systems, smoke detectors, building services, building automation, automatic garage door mechanisms, plant, equipment and mechanical or electrical appliances or fittings;</li>
                  <li>Footings below ground or soil conditions;</li>
                  <li>Compliance with BCA, planning, sustainability or environmental matters including but not limited to the adequacy or safety of insulation, waterproof membranes and/or other installations, or BAL assessments.</li>
                </ul>
              </p>
              <p>The Report assumes that the existing use of the Property will continue, and unless the advice is sought in respect of a change of use, the Report will not assess the fitness of the Property for any intended purpose. Any proposed change in use of the Property should be verified with the relevant authorities.</p>
              <p>The Report is not a certificate of compliance for the Property within the requirements of any Act, regulation, ordinance or local by-law.</p>
              <h2>Terms & Conditions</h2>
              <p>The Report has been prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect and is supplied to you (the named client) on the basis of and subject to the Scope of Service and these Terms and Conditions. Archicentre Australia accepts no responsibility to other persons relying on the Report.</p>
              <p>The Report has been prepared in accordance with Australian Standard 4349.0-2007 Inspection of Buildings Part 0: General Requirements and to any other Australian Standards and definitions cited in the Terms and Conditions.</p>
              <p>The Report should be read in conjunction with any other Archicentre Australia Reports issued concurrently for the Property.</p>
              <p>The Scope and Terms and Conditions take precedence over any verbal or written representations by or on behalf of Archicentre Australia.</p>
              <p>
                <ol>
                  <li>After making the booking, the client is deemed to have accepted these Terms and Conditions and the Scope of Service upon the architect arriving on site.</li>
                  <li>The Report is not a guarantee but is an opinion of the condition of the assessed property.</li>
                  <li>Archicentre Australia accepts no liability with respect to work carried out by other trades, consultants or practitioners referred by Archicentre Australia. It is your responsibility to make appropriate contractual arrangements with such persons.</li>
                  <li>The Report is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law.</li>
                  <li>Archicentre Australia does not accept responsibility for services other than those provided in this Report.</li>
                  <li>Archicentre Australia’s liability shall be limited to the provision of a new assessment and report or the payment of the cost of a new assessment and report, at the election of Archicentre Australia.</li>
                  <li>The Property Maintenance Guide and any other selected attachments referred to in this Report are a vital part of the recommendations and failure to observe the recommendations in the Report, the Property Maintenance Guide or such other referred attachments could lead to premature deterioration of the property.</li>
                  <li>The Report and its appendices and attachments, as issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the assessor’s recommendations, shall be relied upon by you.</li>
                  <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days of receipt by Archicentre Australia of such written notice before taking any remedial action or incurring any costs.</li>
                  <li>Reference to Archicentre Australia in this Report and any other documentation includes, where the context permits, its agents and representatives authorised to act on its behalf.</li>
                  <li>These Terms and Conditions are in addition to and do not replace or remove any implied guarantees or warranties conferred by the Competition and Consumer Act or any other consumer protection legislation.</li>
                </ol>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportConstructionQA" class="easyui-panel" title="Construction Quality Assurance Assessment Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/QA.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Construction Quality Assurance Assessment or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>Our <strong>Construction Quality Assurance Assessment Report</strong> is a visual assessment of the quality and workmanship of the property’s construction against acceptable industry standards.</p>
              <p>Using the builder’s construction contract?…. How can you be sure of the standard of quality and workmanship? Don’t just rely on your builder’s say so. Building a home is a complex thing regardless of the promises of “design & construct” making it simple. So when you engage a builder you need to be absolutely sure that your interests are protected. How many stories have you heard where this has not occurred?</p>
              <p>Check each stage of your building project with an independently assessed Construction Quality Assurance Assessment – as a guide for you and the builder – before you payment is sought by your builder……. for peace of mind!</p>
              <p>Our Construction Quality Assurance Assessment Report will check if your building works comply with applicable quality standards. It provides you with a written summary and is available for each stage of the building process.</p>

              <p><h3>A CONSTRUCTION QUALITY ASSURANCE ASSESSMENT IDENTIFIES:</h3></p>
              <p>
                <ul>
                  <li>Observed building defects.</li>
                  <li>Observed area or items of poor quality workmanship.</li>
                </ul>
              </p>
              <p>Avoid costly building disputes, potential mediation and financial distress by having a recognised independent expert assess the progress and quality of your building project – to assist you both – before payment is sought by your builder.</p>
              <p>It does not matter whether your project is big or small; if you enter into a builder based contract you need to protect your interests with independent expert advice. If this expert is missing from your project Archicentre Australia Architects can assist.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.

              <p><strong>We can assess the works at any, or all, of the following typical eight stages of a complete building project:</strong></p>
              <p><h3><font color="#FF0000">STAGE 1 – Contract Review</font></h3></p>
              <p>Where common contract terms and client/builder obligations are explained.</p>
              <p><h3><font color="#FF0000">STAGE 2 – Base</font></h3></p>
              <p>After concrete footings are poured, or after stumps, piers, columns, or the concrete floor has been completed.</p>
              <p><h3><font color="#FF0000">STAGE 3 – Frame</font></h3></p>
              <p>When wall and roof frames have been completed.</p>
              <p><h3><font color="#FF0000">STAGE 4 – Lock up</font></h3></p>
              <p>When external walls are complete, windows, doors and roof coverings are fixed and the flooring has been laid and the building is secure.</p>
              <p><h3><font color="#FF0000">STAGE 5 – Services (pre-lining)</font></h3></p>
              <p>When preliminary plumbing and electrical works have been completed, and wall insulation is in place.</p>
              <p><h3><font color="#FF0000">STAGE 6 – Fix/Fit-out (pre-paint)</font></h3></p>
              <p>When all interior work is complete and the property is ready for painting.</p>
              <p><h3><font color="#FF0000">STAGE 7 – Pre-Handover</font></h3></p>
              <p>When the property is presented for handover.</p>
              <p><h3><font color="#ff3f00">STAGE 8 – Maintenance Period Expiry</font></h3></p>
              <p>Just before the Maintenance or Defects Liability period expires (typically 3-6 months after completion).</p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeConstructionQA" class="easyui-panel" title="Construction Quality Assurance Assessment - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Services</h2>
              <p>Your Report is prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – in accordance with Australian Standard 4349.0-2007-Assessment of Buildings Part 0: General Requirements and any other Australian Standards, definitions and reference documents cited.</p>
              <p>Your Report is prepared based upon a visual assessment of the condition of reasonably accessible parts of the property and on the basis of the prevailing structural, soil and weather conditions at the time of the assessment. It does not cover enquiries of councils or other authorities, nor is it a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law.</p>
              <p>Your Report will not disclose defects in inaccessible areas, defects that are concealed and/or not reasonably visible, defects that may be apparent in other weather conditions or defects that have not yet arisen. Changes in usage can cause defects and any abuse of the premises is likely to do so.</p>
              <p>Your Report does not cover all maintenance items, particularly those such as jamming doors, windows or catches, decorative finishes and hairline or slight cracks. This is in accordance with Category 0 and 1 of Appendix C – Australian Standard AS 2870-2011.</p>
              <p>Your Report is not a pest inspection. If clients wish to have a pest inspection, please contact Archicentre Australia to arrange.</p>
              <p>Your Report is not intended to instruct a contractor or to be used in the administration of a construction contract.</p>
              <p>Unless stated otherwise, this Report does not cover enquiries of councils or other competent authorities or reference to contract documentation and will note incomplete and /or defective work in reference to the Guide to Standards and Tolerances produced by the Victorian Building Authority, or similar in each State or Territory.</p>

              <h3>For Strata, Stratum and Company Title Properties</h3>
              <p>The assessment is limited to the nominated individual property including associated private open space. It is not the scope of this assessment to include common or other adjacent property. Legal advice should be obtained as to the liability to contribute to the cost of repairs in respect of any common property.</p>

              <h3>WHAT IS INCLUDED IN YOUR REPORT</h3>
              <p>Upon a visual assessment of the reasonably accessible parts of the property identification of:</p>
              <p>
                <ul>
                  <li>Observed building defects;</li>
                  <li>Observed incomplete work;</li>
                  <li>Observed area or items of poor quality workmanship.</li>
                </ul>
              </p>

              <h3>WHAT IS NOT RECORDED IN YOUR REPORT</h3>
              <p>
                <ul>
                  <li>Recommended action for identified defects;</li>
                  <li>Instructions to the Builder;</li>
                  <li>Identification of toxic mould, or asbestos related products;</li>
                  <li>Condition or operation of swimming pools, spas or their surroundings, rainwater or grey water tanks or treatment and similar facilities;</li>
                  <li>Condition, adequacy or compliance of electrical, gas and plumbing systems including roof plumbing, underground pipes or drainage systems;</li>
                  <li>Operation, adequacy or compliance of security and communications systems, smoke alarms, building services, building automation, electrically operated doors including garage doors, plant, equipment, mechanical, gas or electrical appliances and fittings;</li>
                  <li>Footings below ground, soil conditions, site factors and hazards;</li>
                  <li>Compliance with legal, planning, regulatory including National Construction Code, sustainability or environmental matters including but not limited to the adequacy or safety of insulation, waterproof membranes and/or other installations, Bushfire Attack Level assessments;</li>
                  <li>Timber, metal or other framing sizes and adequacy;</li>
                  <li>Common areas or facilities in the case of multi-unit developments or apartment buildings.</li>
                </ul>
              </p>

              <h3>VISUAL ASSESSMENT LIMITATIONS</h3>
              <p>Your architect can only conduct a visual assessment of reasonably accessible parts of the property, of areas that are within the architect’s line of sight and close enough to enable reasonable appraisal. Reasonable accessible parts of the property are those which can be safely accessed by a 3.6 metre ladder or those which have at least 600mm unimpeded vertical and horizontal clearance without the removal of any furniture, fittings – be they fixed or otherwise – cladding, or lining materials, plants or soil.</p>
              <p>Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations. Areas in excess of 3.0 m above ground level can only be visually assessed from ground level or a safely erected 3.6m extension ladder. Upper floor areas in excess of 2.7m above ground floor level cannot be accessed for Assessment by our Architect unless safe access is provided. Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations. The architect will determine the extent of visible and accessible areas at the time of the Assessment.</p>
              <p>Reasonable Access may not be possible due to physical obstructions or conditions that may be hazardous or unsafe to the architect. Access restrictions will be noted where appropriate.</p>
              <h3>ATTACHMENTS</h3>
              <p>The following selected attachments are an important part of this Construction Quality Assurance Assessment Report. These can be downloaded from the Archicentre Australia Supplementary Documents page or by referring to the Report cover letter for downloading instructions.</p>

              <h>Property Maintenance Guide</h2>
              <h3>Health & Safety Warning</h3>
              <p>If you have difficulty downloading the following ticked attachments, please contact Archicentre Australia on 1300 13 45 13 immediately.</p>

              <h2>Terms & Conditions</h2>
              <p>This Report is prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect and is supplied to you (the named client) on the basis of and subject to the Scope of assessment and the Terms and Conditions of assessment and Archicentre Australia accepts no responsibility to other persons.</p>
              <p>The Report has been prepared in accordance with Australian Standard 4349.0-2007 Inspections of Buildings Part 0: General Requirements and to any other Australian Standards, definitions and reference documents cited in the Scope and Terms and Conditions.</p>
              <p>Report is to be read in conjunction with all other Archicentre Australia Reports prepared for you and issued concurrently for the property.</p>
              <p>The Scope of Assessment and the Terms and Conditions take precedence over any oral or written representations by Archicentre Australia, to the extent of any inconsistency.</p>
              <p>The Report has been prepared by the architect (named within), with reasonable care, subject to the following:</p>
              <p>
                <ol>
                  <li>The Report is not a guarantee but is a professional opinion on the condition of the assessed property.</li>
                  <li>The Report is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law.</li>
                  <li>Archicentre Australia does not accept responsibility for services other than those provided in this Report.</li>
                  <li>Archicentre Australia’s liability shall be limited to the provision of a new assessment and report or the payment of the cost of a new Assessment and report, at the election of Archicentre Australia.</li>
                  <li>The Assessment assumes that the existing use of the building will continue. The assessment will not assess the fitness of the building for any intended purpose. Any proposed change in use should be verified with the relevant authorities.</li>
                  <li>The Property Maintenance Guide constitutes a vital part of the Report’s recommendations. Failure to observe either the recommendations or the Property Maintenance Guide could lead to premature deterioration of the property.</li>
                  <li>The Health and Safety Warnings constitutes a vital part of Archicentre Australia’s recommendation to you. Failure to observe the provisions of the warning sheet could jeopardise the safety of the occupants.</li>
                  <li>The Report and its appendices and attachments, as issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the architect’s recommendations, shall be relied upon by you.</li>
                  <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days of receipt by Archicentre Australia of such written notice before taking any remedial action or incurring any costs.</li>
                  <li>Reference to Archicentre Australia in this Report and any other documentation includes, where the context permits, its agents and representatives authorised to act on its behalf.</li>
                  <li>These Terms and Conditions are in addition to, and do not replace or remove, any rights or implied guarantees conferred by the Competition and Consumer Act 2010 or any other consumer protection legislation.</li>
                </ol>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportDilapSurv" class="easyui-panel" title="Residential Dilapidation Survey Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/dilapidation.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Residential Dilapidation Survey Report or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>If nearby construction works cause damage to your home or property, would you be able to prove it in court?…….or if you develop a site and neighbours could be affected, who do you turn to?</p>
              <p>Building work such as new home construction and renovations (particularly along boundaries), road works, infrastructure projects or demolitions can easily cause building defects in nearby properties if the proper precautions aren’t taken. Cracked brickwork or paving, broken fences, water ingress or damage to landscaping can all result in costly repairs, but how can you prove that the neighbouring building work has done the damage?</p>
              <p>Protect yourself from damage repair costs with a Dilapidation Survey.</p>
              <p>Our Dilapidation Survey Report is a special purpose property inspection report undertaken to provide a visual assessment of the structural and cosmetic fabric defects, which are or may be related to movement of the structure or fabric, of the subject property evident on the day of the inspection prior to the commencement of neighbouring construction works.</p>
              <p>Our expert architect will assess the condition of your property before works commence and compile a photographic record of any pre-existing defects. If you notice damage to your property after the work starts, your Dilapidation Survey can help you get the damage rectified or support a claim for costs to repair if need be.</p>
              <p>A detailed report by an independent architect can help your avoid lengthy arguments and expensive repairs coming out of your pocket.</p>

              <h3>DILAPIDATION SURVEY BENEFITS</h3>
              <p>
                <ul>
                  <li>An assessment of the building and property by an independent architect undertaken before the start of nearby construction work.</li>
                  <li>A comprehensive report recording pre-existing defects so that any new ones can easily be identified.</li>
                  <li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>

              <h3>OUR ASSESSING ARCHITECTS ARE:</h3>
              <p>
                <ul>
                  <li>Highly-qualified building experts.</li>
                  <li>Members of the Australian Institute of Architects.</li>
                  <li>Covered by Archicentre Australia’s professional indemnity and $20 million public liability insurance policies.</li>
                </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeDilapSurv" class="easyui-panel" title="Residential Dilapidation Survey - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Services</h2>
              <p>The Dilapidation Survey Report is a special purpose property assessment report undertaken to provide a visual assessment of constructional and cosmetic fabric defects, which are or may be related to movement of the structure or fabric of the subject property evident on the day of the inspection prior to the commencement of neighbouring construction works.</p>
              <p>Each report will provide a photographic record of evident constructional or related defects.</p>

              <h2>Definitions</h2>
              <h3>ASSESSMENT ACCESS</h3>
              <p>The architect can only assess reasonably accessible parts of the property without the use of a ladder or the removal of any furniture, fittings – be they fixed or otherwise – cladding, or lining materials, plants or soil. The extent of accessible areas will be determined by the architect at the time of the assessment.</p>
              <p>Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations.</p>
              <p>Areas in excess of 3.0 m above ground level can only be visually assessed from ground level, through windows from within the building, or from a balcony or an accessible roof where safe balustrading or fall prevention barriers are permanently installed. High level access equipment may provide access where this has been explicitly requested and agreed in writing prior to the inspection. The assessment does not include an inspection of sub-floor or ceiling voids.</p>
              <p>Reasonable Access may not be possible due to physical obstructions or conditions that may be hazardous or unsafe to the architect. Access restrictions will be noted where appropriate.</p>

              <h3>CRACKING IN BRICKWORK</h3>
              <p>In accordance with AS2870 – Residential slabs and footings – Construction, Appendix C1: Classification of damage with reference to walls, evident cracking will be classified within the following categories.</p>
              <table width="100%" border="1">
                <tr>
                  <td width="25%"><h3>CRACK CATEGORY</h3></td>
                  <td width="75%"><h3>DEFINITION</h3></td>
                </tr>
                <tr>
                  <td align="center">0</td>
                  <td><p>Width less than 0.1mm;</p>
                      <p>Hairline cracks which do not need repair.</p>
                  </td>
                </tr>
                <tr>
                  <td align="center">1</td>
                  <td><p>Width less than 1mm;</p>
                      <p>Fine cracks which do not need repair.</p></td>
                </tr>
                <tr>
                  <td align="center">2</td>
                  <td><p>Width less than 5mm;</p>
                      <p>Noticeable cracks which can be readily repaired.</p></td>
                </tr>
                <tr>
                  <td align="center">3</td>
                  <td><p>Width between 5mm and 15mm;</p>
                      <p>Cracks are repairable. Weather tightness may be impaired and repairs may require the replacement of small sections of wall.</td>
                </tr>
                <tr>
                  <td align="center">4</td>
                  <td><p>Width greater than 15mm;</p>
                      <p>Extensive repairs required to walls and possibly to adjacent window and door frames, lintels, beams and service pipes</p></td>
                </tr>
              </table>

              <h3>Attachments</h3>
              <p>Selected attachments are an important part of each Report. These include:</p>
                <ul>
                  <li>Property Maintenance Guide</li>
                  <li>Health & Safety Warning</li>
                  <li>Cost Guide</li>
                </ul>
              <H2>Terms & Conditions</H2>
              <p>The Report will be prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect and will be supplied to you (the named client) on the basis of and subject to the Scope and these Terms and Conditions. Archicentre accepts no responsibility to other persons relying on the Report.</p>
              <p>The Report will be prepared in accordance with Australian Standard 4349.0-2007 Inspection of Buildings Part 0: General Requirements and to any other Australian Standards cited in these Terms and Conditions.</p>
              <p>This Report is prepared on a visual assessment of the condition of reasonably accessible parts of the property and on the basis of the prevailing structural, soil and weather conditions at the time of the inspection and does not cover enquiries of councils or other authorities.</p>
              <p>Prolonged periods of wet or dry weather may cause structural changes to the property as described in the Property Maintenance Guide which you can download from the link found in the body of the Report and in the Report cover letter.</p>
              <p>This Report will not disclose defects in inaccessible areas, defects that are concealed and/or not reasonably visible, defects that may be apparent in other weather conditions or defects that have not yet arisen.</p>
              <p>The Scope and Terms and Conditions take precedence over any oral or written representations.</p>
              <p>
                <ol>
                  <li>After making the booking, the client is deemed to have accepted the Scope and Terms and Conditions upon the architect arriving on site.</li>
                  <li>The Report is not a guarantee but is an opinion of the condition of the inspected property.</li>
                  <li>Archicentre Australia accepts no liability with respect to work carried out by other trades, consultants or practitioners referred by Archicentre. It is the property owner’s responsibility to make appropriate contractual arrangements with such persons.</li>
                  <li>The Report is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law.</li>
                  <li>Archicentre Australia does not accept responsibility for services other than those provided in this Report.</li>
                  <li>This Report does not include a pest inspection. Clients wishing to have a full pest infestation check should advise Archicentre who will arrange for a separate pest inspection.</li>
              </ol>
              </p>

              <h3>The Report does not cover:</h3g>
              <p>
                <ol>
                  <li>The identification of asbestos related products or the condition or operation of swimming pools, spas and similar facilities.</li>
                  <li>Condition, adequacy or compliance of electrical, gas and plumbing systems including roof plumbing, underground pipes or drainage systems;</li>
                  <li>Footings below ground, soil conditions, site factors and hazards;</li>
                  <li>All maintenance items, particularly those such as jamming doors, windows or catches, decorative finishes and hairline or slight cracks (Category 0 and 1 of Appendix C – Australian Standard AS 2870-2011).</li>
                  <li>Archicentre Australia’s liability shall be limited to the provision of a new assessment and report or the payment of the cost of a new assessment and report, at the election of Archicentre Australia.</li>
                  <li>The Archicentre Australia Property Maintenance Guide constitutes a vital part of the architect’s recommendations and failure to observe either the recommendations in the report or the Property Maintenance Guide could lead to premature deterioration of the property.</li>
                  <li>The Health and Safety Warnings constitutes a vital part of Archicentre Australia’s recommendation to you. Failure to observe the provisions of the warning sheet could jeopardise the safety of the occupants.</li>
                  <li>The Report and its appendices and attachments, as issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the architect’s recommendations, shall be relied upon by you.</li>
                  <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days of receipt by Archicentre Australia of such written notice before</li> taking any remedial action or incurring any costs.</li>
                  <li>Reference to Archicentre Australia in this Report and any other documentation includes, where the context permits, its agents and representatives authorised to act on its behalf.</li>
                  <li>These Terms and Conditions are in addition to, and do not replace or remove, any rights or implied guarantees conferred by the Competition and Consumer Act 2010 or any other consumer protection legislation.</li>
                </ol>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportHomeFeas" class="easyui-panel" title="Residential New Home Feasibility Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/New-Home-Feasability.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>Would you like to discuss your new home project with one of our Design Architects? It’s easy! Simply click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>If you’re planning on building a new home an <strong>Archicentre Australia</strong> New Home Feasibility Report is the perfect way to explore the options – teasing out opportunities and bringing to life your functional brief. We will select one of our Design Architects who will meet with you to discuss your needs, lifestyle requirements, options for your home or site and very importantly, your budget. They will then prepare concept sketches presented to you at a second meeting, which bring architectural thinking to your brief.</p>
              <p>Collaborating with one of our experienced architects can help you explore ideas and find the best option for your new home and give you the confidence to proceed with the project.</p>
              <p>With your architect you can explore:</p>

              <h3>LIFESTYLE DISCUSSION:</h3>
              <p>
                <ul>
                  <li>Current lifestyle</li>
                  <li>Future growth and lifestyle changes</li>
                  <li>Optimise home running costs</li>
                </ul>
              </p>

              <p><h3>DESIGN OPTIONS:</h3></p>
              <p>
                <ul>
                  <li>How can I make my home sustainable?</li>
                  <li>How many floors should I build?</li>
                  <li>What construction systems can I use to save money?</li>
                </ul>
              </p>

              <p><h3>DEVELOPMENT ALTERNATIVES:</h3></p>
              <p>
                <ul>
                  <li>How will local development controls affect my ideas?</li>
                  <li>How long is the project likely to take?</li>
                  <li>Should I demolish and re-build or sell and buy elsewhere?</li>
                </ul>
              </p>

              <p><h3>BUDGETARY CONCERNS:</h3></p>
              <p>
                <ul>
                  <li>Is my budget enough to achieve what I want to do?</li>
                  <li>How can I revise my brief to match my budget?</li>
                </ul>
              </p>
              <p>At the end of the process you’ll receive a written report, including sketches, summarising the options and a broad indication of project budget and providing recommendations for next steps.</p>
              <p>If you’re ready to continue with your new home, you can then discuss further work, stages and fees with your architect directly.</p>

              <p><h3>OUR DESIGN ARCHITECTS:</h3></p>
              <p>
                <ul>
                  <li>Are highly qualified, highly regarded, independent building and design experts</li>
                  <li>Have at least five years tertiary education covering all aspects of design and construction</li>
                  <li>Have a minimum of two years industry experience</li>
                  <li>Have undergone further rigorous testing prior to formal registration under the respective Architects Act</li>
                  <li>Are members of the Australian Institute of Architects, and are covered by Professional Indemnity insurance.</li>
                  <li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>
              <p><h3>Qualified and independent design advice.</h3></p>
              <p>Because Archicentre Australia does not build homes or undertake renovations, you can rest assured that our advice and recommendations will be completely independent and objective to provide you with the information required to help you decide on your best course of action.</p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeHomeFeas" class="easyui-panel" title="Residential New Home Feasibility - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Services</h2>
              <h3>FEASIBILITY STUDY</h3>
              <p>An Archicentre Australia New Home Design Report (‘Report’) is a feasibility study which will explore your property’s potential and provide information to help you to decide whether to proceed with your project and whether to engage your Archicentre Australia Design Architect (your Architect) for ongoing services.</p>
              <p>The presented New Home Design Sketch(es) (‘Design’) is a response to your project requirements and objectives, and considers your existing site, your budget, sustainability and possible regulatory issues.</p>
              <p>This Report is not intended to provide the final design solution for your new home but rather present you with a visual representation of an initial feasibility study. This is intended to help you to re- assess, confirm or clarify your needs.</p>
              <h3>WHAT IS INCLUDED IN YOUR REPORT</h3>
              <p>This Report is based on a meeting with you to discuss your requirements and objectives.</p>
              <p>This Report includes the following:</p>
              <p>
                <ul>
                  <li>Description of your site;</li>
                  <li>List of your project requirements and budget;</li>
                  <li>Sketch floor plan(s) and image/section of the Design as elaborated by your Architect;</li>
                  <li>Outline of some of the design issues that were considered by the Architect in creating the Design;</li>
                  <li>Outline of some of the sustainability features of the Design;</li>
                  <li>Preliminary advice of relevant Council and statutory authority approvals required;</li>
                  <li>Broad opinion of cost for the proposal;</li>
                  <li>Outline of the design and building process;</li>
                  <li>Outline of the roles of other consultants.</li>
                </ul>
              </p>
              <h3>WHAT IS NOT RECORDED IN YOUR REPORT</h3>
              <p>The following are specifically not included in this Report:</p>
              <p>
                <ul>
                  <li>Detailed Planning or Development control requirements;</li>
                  <li>Detailed investigation of existing site conditions;</li>
                  <li>Suggested construction methods, building materials, finishes, services, equipment, or systems;</li>
                  <li>Suggested fittings, fitments and equipment;</li>
                  <li>Detailed joinery, interior or landscape design;</li>
                  <li>General or construction dimensions, including set-outs, offsets, levels and site features;</li>
                  <li>Opinion of probable costs with respect to the above (these will depend on the outcome of decisions made during the future design development and documentation process).</li>
                </ul>
              <h3>NOTES:</h3>
              <p>Further detailed work outside the scope of this Report will be necessary to develop the Design. The Design will evolve as your needs are explored, assessed and fine-tuned to the point where it will be ready to begin construction documentation.</p>
              <p>This further detailed work may also include structural engineering, development/planning consent and/or building construction approval, assessment of ground conditions, energy, asbestos (and other latent factors), as well as other investigations and/or considerations.</p>
              <p>Once this further work is completed, the sets of documents/ drawings required for permits/approvals application and for the builder to commence construction works can be completed. This further work and construction documentation is not covered in the Report, but can be provided independently by your Architect. This further work is explained in more detail later in this Report.</p>
              <h2>Terms & Conditions</h2>
              <p>This Report, which includes any appendices and referenced documents, has been prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect and is supplied to you (the named client) on the basis of and subject to these Terms and Conditions and the Scope of this Service as described above. Archicentre Australia accepts no responsibility to other persons.</p>
              <p>The visual assessment undertaken for this Report will only include areas of the property that are safe and reasonably accessible. These will be determined by the architect at the time of the visual assessment. Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations.</p>
              <p>The Report is a preliminary feasibility study and must not be relied upon to proceed with the proposed construction. Significant further work will be required before proceeding including, for example, structural. engineering, development/ planning consent and/or building construction approval, ground conditions assessment, energy, asbestos (and other latent factor) investigations and/or considerations.</p>
              <p>Please note that having provided you with an opportunity to read the Scope and Terms and Conditions following upon you making a booking for the Report the Architect has proceeded to prepare the Report for you and Archicentre Australia has proceeded to supply this Report on the basis that you have accepted the Scope of the Report and these Terms and Conditions and/or are deemed to have done so upon the architect arriving at the property and/or meeting with you.</p>
              <p>The Report should be read in conjunction with any other Archicentre Australia Reports issued concurrently for the Property.</p>
              <p>These Terms and Conditions:</p>
              <p>
                <ol>
                  <li>Contain the entire agreement and understanding between the parties on everything connected with the subject matter of this Report and the Design; and,</li>
                  <li>Supersede any prior agreement, understanding, correspondence, documentation or discussion on anything connected with that subject matter.</li>
                </ol>
              </p>
              <p>The Report has been prepared by the registered architect (named within), with reasonable care, subject to the following:</p>
              <p>
                <ol>
                  <li>After making the booking, the client is deemed to have accepted these Terms and Conditions and Scope upon the architect arriving on site and/or meeting with you.</li>
                  <li>This is not a guarantee, warranty or certificate of legal compliance, but is a professional opinion.</li>
                  <li>The Report is based on the condition of the property at the time of the visual assessment made according to the terms noted above.</li>
                  <li>The Report is based, in good faith, on advice, whether in writing or verbal, provided by the Property Owner, including existing dimensioned floor plans. Where provided plans are not suitable, a measure-up fee may be applied.</li>
                  <li>The Report is not an assessment of building, services or property defects.</li>
                  <li>The Report assumes that the stated proposed use of the Property will continue. Any proposed change in use of the Property should be verified with the relevant authorities.</li>
                  <li>The Broad Opinion of Cost is not a quotation but an indicative range of the likely construction costs based on assumptions included in the Report.</li>
                  <li>The Report and the Design is not a set of contract documents from which it is fit to build. Whether your Architect is engaged subsequently or not, Archicentre Australia does not accept responsibility for the development of the design, and/or documentation.</li>
                  <li>Archicentre Australia does not accept responsibility for advice other than that provided in this Report.</li>
                  <li>To the extent permitted by law, Archicentre Australia’s liability is limited to the provision of a new Report or the payment of the cost of a new Report, at the election of Archicentre Australia.</li>
                  <li>The Report includes any appendices and referenced documents and must be read with them. The Report and its appendices and attachments, as issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the architect’s recommendations, shall be relied upon by you.</li>
                  <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days of receipt by Archicentre Australia of such written notice before taking any remedial action or incurring any costs.</li>
                  <li>Reference to Archicentre Australia in this Report and any other documentation includes its agents and representatives authorized to act on its behalf.</li>
                  <li>These Terms and Conditions are in addition to, and do not replace or remove, any rights conferred by the Competition and Consumer or any other consumer protection legislation.</li>
                  <li>Copyright in all documents or material created by the architect remain the architect’s. Upon receipt of full payment for the services, Archicentre Australia provides to the named client a royalty free license to use the documents for their intended purpose only.</li>
                  <li>If any provision of these Terms and Conditions is deemed to be or becomes void, voidable or unenforceable, the remaining provisions of these Terms and Conditions continue to have full force and effect.</li>
                </ol>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportRenoFeas" class="easyui-panel" title="Renovation Feasibility Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/renovation-feasability.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>Would you like to discuss your renovation project with one of our Design Architects? It’s easy! Simply click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>If you’re planning a renovation – perhaps extending your home, altering the existing building footprint or considering a second storey addition, an <strong>Archicentre Australia</strong> Renovation Feasibility is the perfect way to explore the options for your renovation. One of our Design Architects will meet with you at your home to discuss your needs, lifestyle requirements or changes, options for your home or site and very importantly, your budget. They will then prepare concept sketches and present them to you at a second meeting, which will bring architectural thinking and processes to the table. Collaborating with one of our experienced architects can help you explore ideas, find the best option for your renovation and give you the confidence to proceed with the project.</p>
              <p>With your architect you can explore:</p>

              <p><h3>LIFESTYLE DISCUSSION:</h3></p>
              <p>
                <ul>
                  <li>Current lifestyle</li>
                  <li>Future growth and lifestyle changes</li>
                  <li>Optimise home running costs</li>
                </ul>
              </p>

              <p><h3>DESIGN OPTIONS:</h3></p>
              <p>
                <ul>
                  <li>How can I make my home sustainable?</li>
                  <li>How many floors should I build?</li>
                  <li>What construction systems can I use to save money?</li>
                </ul>
              </p>

              <p><h3>DEVELOPMENT ALTERNATIVES:</h3></p>
              <p>
                <ul>
                  <li>How will local development controls affect my ideas?</li>
                  <li>How long is the project likely to take?</li>
                  <li>Should I demolish and re-build or sell and buy elsewhere?</li>
                </ul>
              </p>

              <p><h3>BUDGETARY CONCERNS:</h3></p>
              <p>
                <ul>
                  <li>Is my budget enough to achieve what I want to do?</li>
                  <li>How can I revise my brief to match my budget?</li>
                </ul>
              </p>
              <p>At the end of the process you’ll receive a written report, including sketches, summarising the options and a broad indication of project budget and providing recommendations for next steps.</p>
              <p>If you’re ready to continue with your new home, you can then discuss further work, stages and fees with your architect directly.</p>

              <p><h3>OUR DESIGN ARCHITECTS:</h3></p>
              <p>
                <ul>
                  <li>Are highly qualified, highly regarded, independent building and design experts</li>
                  <li>Have at least five years tertiary education covering all aspects of design and construction</li>
                  <li>Have a minimum of two years industry experience</li>
                  <li>Have undergone further rigorous testing prior to formal registration under the respective Architects Act</li>
                  <li>Are members of the Australian Institute of Architects, and are covered by Professional Indemnity insurance.</li>
                  <li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>

              <p><h3>Qualified and independent design advice.</h3></p>
              <p>Because Archicentre Australia does not build homes or undertake renovations, you can rest assured that our advice and recommendations will be completely independent and objective to provide you with the information required to help you decide on your best course of action.</p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeRenoFeas" class="easyui-panel" title="Renovation Feasibility - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Services</h2>
              <h3>FEASIBILITY STUDY</h3>
              <p>An Archicentre Australia Renovation Design Report (‘Report’) is a feasibility study which will explore your property’s potential and provide information to help you to decide whether to proceed with your project and whether to engage your Archicentre Australia Authorised Design Architect (your Architect) for ongoing services.</p>
              <p>The presented Renovation Design sketches (‘Design’) is a response to your project requirements and objectives, and considers your existing home and site, your budget, sustainability and possible regulatory issues.</p>
              <p>This Report is not intended to provide the final design solution for your renovation, but to present you with a visual representation of an initial feasibility study. This is intended to help you to re-assess, confirm or clarify your needs.</p>
              <h3>WHAT IS INCLUDED IN YOUR REPORT</h3>
              <p>This Report is based on a visit to your home and a meeting with you to discuss your project requirements and objectives.</p>
              <p>This Report includes the following:</p>
              <p>
                <ul>
                  <li>Description of your existing home and site;</li>
                  <li>List of your project requirements and budget;</li>
                  <li>Rough sketch floor plan(s) of your existing home, if you do not already have one;</li>
                  <li>Sketch floor plan(s) and image/section of the Design as elaborated by your Architect;</li>
                  <li>Outline of some of the design issues that were considered by the Architect in creating the Design;</li>
                  <li>Outline of the sustainability features of the Design;</li>
                  <li>Preliminary advice of relevant Council and statutory authority approvals required;</li>
                  <li>Broad Opinion of cost for the Design;</li>
                  <li>Outline of the design and building process;</li>
                  <li>Outline of the roles of other consultants.</li>
                </ul>
              </p>
              <h3>WHAT IS NOT RECORDED IN YOUR REPORT</h3>
              <p>The following are specifically not included in this Report:</p>
              <p>
                <ul>
                  <li>Detailed Planning or Development control requirements;</li>
                  <li>Detailed investigation of existing site and building conditions;</li>
                  <li>Suggested construction methods, building materials, finishes, services, equipment, or systems;</li>
                  <li>Suggested fittings, fitments and equipment;</li>
                  <li>Detailed joinery, interior or landscape design;</li>
                  <li>General or construction dimensions, including set-outs, offsets, levels and site features;</li>
                  <li>Opinion of probable costs with respect to the above (these will depend on the outcome of decisions made during the future design development and documentation process).</li>
                </ul>
              </p>
              <h3>NOTES:</h3>
              <p>Further detailed work outside the scope of this Report will be necessary to develop the Design. The Design will evolve as your needs are explored, assessed and fine-tuned to the point where it will be ready to begin construction documentation.</p>
              <p>This further detailed work may also include structural engineering, development/planning consent and/or building construction approval, assessment of ground conditions, energy, asbestos (and other latent factors), as well as other investigations and/or considerations.</p>
              <p>Once this further work is completed, the sets of documents/ drawings required for permits/approvals application and for the builder to commence construction works can be completed. This further work and construction documentation is not covered in the Report, but can be provided independently by your Architect. This further work is explained in more detail later in this Report.</p>
              <h2>Terms & Conditions</h2>
              <p>This Report, which includes any appendices and referenced documents, has been prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect and is supplied to you (the named client) on the basis of and subject to these Terms and Conditions and the Scope of this Service as described above. Archicentre Australia accepts no responsibility to other persons.</p>
              <p>The visual assessment undertaken for this Report will only include areas of the property that are safe and reasonably accessible. These will be determined by the architect at the time of the visual assessment. Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations.</p>
              <p>The Report is a preliminary feasibility study and must not be relied upon to proceed with the proposed construction. Significant further work will be required before proceeding including, for example, structural. engineering, development/ planning consent and/or building construction approval, ground conditions assessment, energy, asbestos (and other latent factor) investigations and/or considerations.</p>
              <p>Please note that having provided you with an opportunity to read the Scope and Terms and Conditions following upon you making a booking for the Report the Architect has proceeded to prepare the Report for you and Archicentre Australia has proceeded to supply this Report on the basis that you have accepted the Scope of the Report and these Terms and Conditions and/or are deemed to have done so upon the architect arriving at the property and/or meeting with you.</p>
              <p>The Report should be read in conjunction with any other Archicentre Australia Reports issued concurrently for the Property.</p>
              <p>These Terms and Conditions:</p>
              <p>
                <ol>
                  <li>Contain the entire agreement and understanding between the parties on everything connected with the subject matter of this Report and the Design; and,</li>
                  <li>Supersede any prior agreement, understanding, correspondence, documentation or discussion on anything connected with that subject matter.</li>
                </ol>
              </p>
              <p>The Report has been prepared by the registered architect (named within), with reasonable care, subject to the following:</p>
              <p>
                <ol>
                  <li>After making the booking, the client is deemed to have accepted these Terms and Conditions and Scope upon the architect arriving on site and/or meeting with you.</li>
                  <li>This is not a guarantee, warranty or certificate of legal compliance, but is a professional opinion.</li>
                  <li>The Report is based on the condition of the property at the time of the visual assessment made according to the terms noted above.</li>
                  <li>The Report is based, in good faith, on advice, whether in writing or verbal, provided by the Property Owner, including existing dimensioned floor plans. Where provided plans are not suitable, a measure-up fee may be applied.</li>
                  <li>The Report is not an assessment of building, services or property defects.</li>
                  <li>The Report assumes that the stated proposed use of the Property will continue. Any proposed change in use of the Property should be verified with the relevant authorities.</li>
                  <li>The Broad Opinion of Cost is not a quotation but an indicative range of the likely construction costs based on assumptions included in the Report.</li>
                  <li>The Report and the Design is not a set of contract documents from which it is fit to build. Whether your Architect is engaged subsequently or not, Archicentre Australia does not accept responsibility for the development of the design, and/or documentation.</li>
                  <li>Archicentre Australia does not accept responsibility for advice other than that provided in this Report.</li>
                  <li>To the extent permitted by law, Archicentre Australia’s liability is limited to the provision of a new Report or the payment of the cost of a new Report, at the election of Archicentre Australia.</li>
                  <li>The Report includes any appendices and referenced documents and must be read with them. The Report and its appendices and attachments, as issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, and only the Report and its appendices and attachments, which form a vital part of the architect’s recommendations, shall be relied upon by you.</li>
                  <li>If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days of receipt by Archicentre Australia of such written notice before taking any remedial action or incurring any costs.</li>
                  <li>Reference to Archicentre Australia in this Report and any other documentation includes its agents and representatives authorized to act on its behalf.</li>
                  <li>These Terms and Conditions are in addition to, and do not replace or remove, any rights conferred by the Competition and Consumer or any other consumer protection legislation.</li>
                  <li>Copyright in all documents or material created by the architect remain the architect’s. Upon receipt of full payment for the services, Archicentre Australia provides to the named client a royalty free license to use the documents for their intended purpose only.</li>
                  <li>If any provision of these Terms and Conditions is deemed to be or becomes void, voidable or unenforceable, the remaining provisions of these Terms and Conditions continue to have full force and effect.</li>
                </ol>
              </p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportHomeWarranty" class="easyui-panel" title="Home Warranty Insurance Inspection" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/homewarrantyinsurance.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Home Warranty Inspection for Home Warranty Insurance or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>Are you an owner builder planning to sell your recently built or renovated home?</p>
              <p>You may need Home Warranty Insurance before you sell.</p>
              <p>In some states, a builder is required to provide Home Warranty Insurance to the property owner prior to entering into a building contract, to protect the owner against incomplete or defective work. The same obligations may apply to an owner builder – regulations vary by state, so check with your state building authority.</p>
              <p>To obtain Home Warranty Insurance you may first need to have an Inspection and report on the new works.</p>
              <p>Speed up the sales process with our Home Warranty Inspection.</p>
              <p>Our architect will assess the new works, providing a detailed report on workmanship, defects and any incomplete works to assist you in meeting your statutory obligations.</p>

              <h3>Who are our ASSESSING Architects?</h3>
              <p>
                <ul>
                  <li>Amongst the very best and most highly-qualified building experts</li>
                  <li>Fully accredited and registered architects</li>
                  <li>Members of the Australian Institute of Architects</li>
                  <li>Covered by professional indemnity insurance</li>
                  <li>Archicentre Australia is covered by $20 million public liability insurance</li>
                  <li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeHomeWarranty" class="easyui-panel" title="Home Warranty Inspection - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
              <h2>Scope of Services</h2>
              <p>Your Home Warranty Insurer requires you to obtain this report and in Victoria, it is mandatory under the Building Act 1993 (Vic) that owner-builders obtain this report. For any information in relation to the policy you should contact your insurer.</p>
              <p>Unless otherwise stated, this report only addresses the workmanship of the owner-builder as described in the Extent of Work done by Owner-Builder section of the Archicentre Australia Report. Archicentre Australia relies on the owner-builder’s description of the building works they have undertaken and undertakes no inquiries of its own. Any building works not undertaken by the owner-builder are excluded from this report. Please note that where the owner-builder has renovated or extended the home, the insurance may only relate to those works and the balance of the home may not be covered by the insurance at all.</p>
              <p>This report may not necessarily refer to routine maintenance items which do not concern defective work (e.g. hair-line plaster cracks, jamming doors and windows or damage resulting from wear and tear or accident or deliberate misuse).</p>
              <p>Unless otherwise stated:</p>
              <p>
                <ul>
                  <li>no soil or other material has been excavated or removed;</li>
                  <li>no plants or trees have been removed;</li>
                  <li>no samples have been taken or tested;</li>
                  <li>no fixtures, fittings, cladding or lining materials have been removed;</li>
                  <li>building services or systems have not been tested;</li>
                  <li>no items of furniture or chattels have been moved;</li>
                  <li>the roof has not been water tested;</li>
                  <li>no wet areas, e.g bathrooms, showers, external balconies etc, have been water tested;</li>
                  <li>no enquiries of Drainage, Sewerage or Water Authorities have been made;</li>
                  <li>no building approvals, plans, specifications or other contract documents have been sighted, or relied upon, for the purpose of inspecting the dwelling house and providing this Home Warranty Insurance Inspection Report, with the exception that approved construction plans may have been sighted for the purpose of confirming the extent of owner-builder work;</li>
                  <li>no special investigation of insect attack (e.g. borer, termite, etc.) has been made and any reference to this has been based on casual inspection.</li>
                </ul>
              </p>
              <p>This Report may be incomplete unless the required local government building approval and inspection summary details are attached by the owner-builder.</p>
              <p>Unless stated otherwise, this Report will note incomplete and /or defective work in reference to the Guide to Standards and Tolerances produced by the Victorian Building Authority (formerly the Building Commission).</p>

              <h2>Definitions</h2>
              <h3>Access</h3>
              <p>The architect can only assess reasonably accessible parts of the property. It is your responsibility to ensure that any inaccessible parts of the property that can be made reasonably accessible for an inspection are made so, prior to the inspection. Inaccessible areas cannot be assessed.</p>
              <p>Reasonably and Safely Accessible – Accessible areas which can be accessed by a 3.6 metre ladder or those which have at least 600mm unimpeded vertical and horizontal clearance without the removal of any fixed or unfixed furniture, fittings, stored items, cladding or lining materials, plants or soil.</p>
              <p>Archicentre Australia assessors are unable to access areas where there is a risk of adverse disturbance or damage to the property, including the garden area.</p>
              <p>Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations. Archicentre Australia assessors are unable to assess areas higher than 3 metres above ground level unless secure ladder access is available and fall prevention devices or barriers are present.</p>
              <p>Reasonable Access may not be possible due to physical obstructions or conditions that may be hazardous or unsafe to the inspector. The assessor will determine the extent of accessible areas at the time of the inspection.</p>
              <p>Access restrictions will be noted where appropriate.</p>
              <p><strong>Normal Viewing Position</strong></p>
              <p>Generally variations in surface colour, texture and finish of walls, ceilings, floors, roofs, glazing and other finished surfaces shall be viewed from a normal viewing position. For the purposes of this inspection Archicentre Australia inspectors regard this position to be standing eye height at a distance of approximately 1.5m or greater from the wall, floor, ceiling or other surface, and at approximately 600mm for fittings and fixtures, with the surface or material illuminated by non-critical (or diffuse) light.</p>

              <h2>Terms & Conditions</h2>
              <p>This Report is prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – for the person to whom it is addressed (the Customer) and Archicentre Australia accepts no responsibility to other persons.</p>
              <p>The Report has been prepared in accordance with Australian Standard 4349.0-2007 Inspection of Buildings Part 0: General Requirements and to any other Australian Standards and definitions cited in the Terms and Conditions.</p>
              <p>The Report is not a certificate of compliance for the property within the requirements of any Act, regulation, ordinance or local by-law.</p>
              <p>The Customer agrees to indemnify Archicentre Australia and its officers, employees and agents against any liability to the purchaser (and their successors in title) and the Home Warranty Insurer, arising directly or indirectly from, and any costs and expenses (including legal expenses on a full indemnity basis) incurred in connection with, the preparation of this Report.</p>
              <p>The Report has been prepared with reasonable care, subject however as follows;</p>
              <p>
                <ol>
                  <li>This Report is not a Guarantee of the works or a guarantee that the premises are free of defects.</li>
                  <li>The Report is based on the condition of the property and the prevailing structural, soil and weather conditions at the time of the assessment.</li>
                  <li>Except where specifically stated otherwise, the Report is based on a visual assessment of such parts of the premises to which the Report is applicable and to which the Report states the architect has been able to have reasonable access to without the removal of any furniture, fittings – be they fixed or otherwise – cladding, or lining materials, plants or soil. Archicentre Australia accepts no responsibility for defects that may exist in parts of the property that were not reasonably accessible.</li>
                  <li>The Report will not disclose latent defects, defects which may be apparent in weather conditions that differ from those at the time of the assessment or defects that were deliberately concealed by the Customer at the time of the inspection.</li>
                  <li>The Report will not disclose defects that have not yet arisen. Changes in usage can cause defects and any abuse of the premises is likely to do so.</li>
                  <li>The Report may not cover building defects of a minor nature, such as hair-line plaster cracks, jamming doors, windows or catches and similar minor faults, where not considered attributable to poor workmanship.</li>
                  <li>Archicentre Australia does not accept responsibility for services other than those provided in this Report.</li>
                  <li>The Report does not cover:</li>
                </ol>
                <ul>
                  <li>Identification of toxic mould, or asbestos related products;</li>
                  <li>Condition or operation of swimming pools, spas or their surroundings, rainwater or grey water tanks or treatment and similar facilities;</li>
                  <li>Condition, adequacy or compliance of electrical, gas and plumbing systems including roof plumbing, underground pipes or drainage systems;</li>
                  <li>Operation adequacy or compliance of security and communications systems, smoke detectors, building services, building automation, electrically operated doors including garage doors, plant, equipment, mechanical, gas or electrical appliances and fittings;</li>
                  <li>Footings below ground, soil conditions, site factors and hazards;</li>
                  <li>Compliance with legal, planning, regulatory including Building Code of Australia, sustainability or environmental matters including but not limited to the adequacy or safety of insulation, swimming pool/spa enclosures, waterproof membranes and/or other installations, Bushfire Attack Level assessments;</li>
                  <li>Timber, metal or other framing sizes and adequacy.</li>
                </ul>
                <ol start="9">
                  <li>This Report is not evidence of compliance with the applicable statutory approval/s, plans or specifications.</li>
                  <li>Archicentre Australia undertakes no inquiries whatsoever into whether materials are new or second-hand.</li>
                  <li>The Archicentre Australia Property Maintenance Guide forms an integral part of this Report. Failure to abide by the Property Maintenance Guide may cause the dwelling to deteriorate and may result in defects occurring.</li>
                  <li>The Report will not disclose defects that may arise from the rectification or completion of noted Defects or Incomplete works, or additional works to the property, where such works occur at a later time or date to the Report.</li>
                  <li>Unless otherwise stated, the Report will not provide any opinion in relation to rectification of defects or the cost of rectifying defects.</li>
                </ol>
              </p>
              <p>OWNER BUILDER TO AFFIX ANY REQUIRED PLANNING/BUILDING APPROVALS, OCCUPANCY CERTIFICATES OR CERTIFICATES OF FINAL INSPECTION AND SECOND HAND MATERIAL DECLARATIONS (WHERE REQUIRED) TO THE REAR OF THIS REPORT</p>
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportCommerPropAssess" class="easyui-panel" title="Commercial & Government Property Assessments" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/property-assessment.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Commercial & Government Property Assessment Report or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13..</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>With <strong>Archicentre Australia</strong>, you can buy a commercial or institutional property with confidence knowing that we offer over 30 years’ experience and a comprehensive checklist that is tailored to the building being assessed – at least a 200-point checklist.</p>
              <p>Our pre-purchase or post-purchase property assessments and pest inspections help take the uncertainty out of property procurement and/or maintenance.</p>
              <p>These reports can be valuable precursors to property design feasibility services – establishing where funding is required to address existing building shortcomings as a part of an overall property design strategy.</p>
              <p>Purchasing a commercial property is a large financial commitment. An Archicentre Australia property assessment will highlight any significant faults so you can avoid vacancy costs or unplanned repairs and negotiate better terms for the property purchase.</p>
              <p>Archicentre Australia’s experience shows the number one property fault is roofing, followed by timber rot, leakage and dampness, cracking and termites. The chances of one or all of these affecting a building in your portfolio are high. If neglected, these problems could cost thousands to rectify or worse, cause injury to people, damage to property and your reputation.</p>
              <p>With an Archicentre Australia Commercial & Government Property Assessment Report, an experienced architect will assess the property.</p>
              <p>You will know immediately about the condition of the property and particularly if there are any serious building faults.</p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeCommerPropAssess" class="easyui-panel" title="Commercial & Government Property Assessments - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
            </td>
          </tr>
        </table>
      </div>

      <div id="divReportCommerDilap" class="easyui-panel" title="Commercial Dilapidation Survey" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/property-assessment.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              <p>To enquire about a Commercial Dilapidation Survey or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>
              <p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
              <p>To view the Scope and Terms and Conditions for this service click here.</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align: top" colspan="2">
              <p>Where projects are likely to impact on neighbouring properties – say work on boundaries, roadworks, infrastructure projects or demolitions – it pays to follow protocols that give clarity to “before and after” circumstances.</p>
              <p>Cracked brickwork or paving, broken fences, water ingress or damage to landscaping can all result in costly repairs, but how can you prove that the neighbouring building work has done the damage?</p>
              <p>Protect your business from damage repair costs with a Dilapidation Survey.</p>
              <p>Construction works can result in damage claims from neighbouring property owners, particularly because of the litigious nature of today’s society. Protect yourself and your reputation from false or unjustified claims.</p>
              <p>Experienced <strong>Archicentre Australia</strong> architects will assess buildings, surrounding areas and provide comprehensive reports that include photographic records.</p>
              <p>These reports record the condition of the property at the time of the assessment and are used by many high profile civil and commercial construction companies in order to protect their interests.</p>

              <h3>Archicentre Australia Dilapidation Reports:</h3>
              <p>
                <ul>
                  <li> Protect your company in the event of a future claim</li>
                  <li>Are used by a range of high-profile civil and commercial construction companies</li>
                  <li>Accurately assess residential and commercial buildings, civil infrastructure and street assets</li>
                  <li>Can be done quickly to meet project timeframes.</li>
                </ul>
              </p>
            </td>
          </tr>
        </table>
      </div>
      
      <div id="divScopeCommerDilap" class="easyui-panel" title="Commercial Dilapidation Survey - Scope and Terms & Conditions" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td style="vertical-align: top; font-size: 100%">
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</body>
</html>
