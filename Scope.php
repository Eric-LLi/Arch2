<?php
  require_once("shared.php");

  $loginerr = false;
  $emailexistserr = false;
  $signuperr = false;
  $signupsuccess = false;

  if (SharedIsLoggedIn())
  {
    header("location: member.php");
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
    function doShowReport(rep)
    {
      if (rep == 1)
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
        $('#divReportPropAssessment').panel('open');
      }
      else if (rep == 2)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportConstructionQA').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
        $('#divReportTimberPest').panel('open');
      }
      else if (rep == 3)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportConstructionQA').panel('close');
        $('#divReportMaintAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
        $('#divReportArchAdvice').panel('open');
      }
      else if (rep == 4)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportConstructionQA').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
		$('#divReportMaintAdvice').panel('open');
      }
      else if (rep == 5)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
		$('#divReportConstructionQA').panel('open');
      }
	  else if (rep == 6)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportConstructionQA').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
		$('#divReportDilapSurv').panel('open');
      }
	  else if (rep == 7)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportConstructionQA').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
		$('#divReportHomeFeas').panel('open');
      }
	  else if (rep == 8)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportConstructionQA').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
		$('#divReportRenoFeas').panel('open');
      }
	  else if (rep == 9)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportConstructionQA').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('close');
		$('#divReportHomeWarranty').panel('open');
      }
	  else if (rep == 10)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportConstructionQA').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerDilap').panel('close');
		$('#divReportCommerPropAssess').panel('open');
		
      }
	  else if (rep == 11)
      {
        $('#divRequestReport').panel('close');
        $('#divReportPropAssessment').panel('close');
        $('#divReportArchAdvice').panel('close');
        $('#divReportTimberPest').panel('close');
        $('#divReportMaintAdvice').panel('close');
		$('#divReportConstructionQA').panel('close');
		$('#divReportDilapSurv').panel('close');
		$('#divReportHomeFeas').panel('close');
		$('#divReportRenoFeas').panel('close');
		$('#divReportHomeWarranty').panel('close');
		$('#divReportCommerPropAssess').panel('close');
		$('#divReportCommerDilap').panel('open');
      }
    }

    function doRequestReport(rep)
    {
      $('#divReportPropAssessment').panel('close');
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
      $('#divRequestReport').panel('open');
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

    // ************************************************************************************************************
    // Document ready...
    $(document).ready(function()
    {
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

      $('#btnLogin').bind
      (
        'click',
        function()
        {
          document.getElementById('frmLogin').submit();
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
  <div id="dlgBookingNew" class="easyui-dialog" title="New Booking" style="width: 800px; height: 640px;" data-options="resizable: false, modal: true, closable: false, closed: true">
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

  <!-- *********************************************************************************************************************************************************************** -->
  <!-- Main content...                                                                                                                                                              -->
  <div class="easyui-layout" data-options="fit: true">
    <?php require_once("header.php"); ?>
    <?php require_once("footer.php"); ?>

    <div id="p" data-options="region: 'west'" title="Reports" style="width: 30%; padding: 10px">
      <div class="easyui-accordion" data-options="selected: 0, fit: true" >
        <?php
          if (!SharedIsLoggedIn())
          {
        ?>
            <div title="Reports" data-options="iconCls:'icon-receipt'" style="overflow: auto; padding: 10px;">
              <h3 style= "color:#0099FF;">Select reports you wish to learn more about</h3>
              <table width="90%">
                <tr>
                  <td align="left"><a href="#"><a href="#" onClick="doShowReport(1)">Residential Property Assessment</a></td>
                  <td align="right" width="25%"><input id="cbResidentialPropertyAssessment" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(2)">Residential Timber/Pest Inspection</a></td>
                  <td align="right" width="25%"><input id="cbTimberPestInspection" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(3)">Residential Architect's Advice</a></td>
                  <td align="right" width="25%"><input id="cbArchitectAdviceReport" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(4)">Residential Maintenance Advice</a></td>
                  <td align="right" width="25%"><input id="cbMaintenanceAdviceReport" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(5)">Residential Construction Quality Assurance Assessment</a></td>
                  <td align="right" width="25%"><input id="cbConstructionQAReport" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(6)">Residential Dilapidation Survey</a></td>
                  <td align="right" width="25%"><input id="cbDilapidationSurvey" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(7)">Residential Home Feasibility Report</a></td>
                  <td align="right" width="25%"><input id="cbHomeFeasibility" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(8)">Residential Renovation Feasibility Report</a></td>
                  <td align="right" width="25%"><input id="cbRenoFeasibility" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(9)">Residential Home Warranty Report</a></td>
                  <td align="right" width="25%"><input id="cbHomeWarranty" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(10)">Commercial Property Assessment</a></td>
                  <td align="right" width="25%"><input id="cbCommercialPropertyAssessment" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left"><a href="#"><a href="#"><a href="#" onClick="doShowReport(11)">Commercial Dilapidation Survey</a></td>
                  <td align="right" width="25%"><input id="cbCommercialDilapidation" class="easyui-switchbutton" data-options="onText: 'Yes', offText: 'No'"></td>
                </tr>
                <tr>
                  <td align="left">&nbsp;</td>
                  <td align="right" width="25%">&nbsp;</td>
                </tr>
                <tr>
                  <td align="left">&nbsp;</td>
                  <td align="right" width="25%"><a id="btnRequestReport" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-info', width: 150" onclick="doRequestReport()">Report Enquiry</a></td>
                </tr>
                <tr>
                  <td align="left">&nbsp;</td>
                  <td align="right" width="25%"><a id="btnRequestReport" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-orderform', width: 150" onclick="doNewBooking()">Book/Request Report</a></td>
                </tr>
              </table>
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
              
              <p>To view the Scope and Terms and Conditions for this service click <a href="PA_Scope.php">here</a>.</p>
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

              <p><strong>OUR PROPERTY ASSESSMENTS INCLUDE:</strong></p>

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

              <p><strong>OUR ARCHITECTS ARE:</strong></p>

              <p>
                <ul>
                  <li>Amongst the most highly qualified building experts.</li>
                  <li>Fully qualified, registered and experienced and specifically trained in building defect identification.</li>
                </ul>
              </p>

              <p><strong>YOU CAN ALSO RECEIVE:</strong></p>

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

      <div id="divReportTimberPest" class="easyui-panel" title="Timber Pest Inspection Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
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

              <p><strong>OUR TIMBER PEST INSPECTION INCLUDES:</strong></p>

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
      
      <div id="divReportDilapSurv" class="easyui-panel" title="Residential Dilapidation Survey Report" style="width: 100%; height: 100%; padding: 10px; background:#fafafa;" data-options="iconCls: 'icon-warehouse', closable: false, collapsible: false, minimizable: false, maximizable: false, closed: true">
        <table>
          <tr>
            <td><img src="images/dilapidation.jpg"></td>
            <td style="vertical-align: top; font-size: 150%">
              	<p>To enquire about a Residential Dilapidation Survey Report or to get an obligation-free quote click on the Report Enquiry button or contact Archicentre Australia on 1300 13 45 13.</p>

              	<p>Alternatively if you want to order a report online click on the report request button and complete the booking form.  Archicentre Australia will contact you to confirm a price.</p>
                
                <p>To view the Scope and Terms and Conditions for this service click here.</p>
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

				<p><h3>DILAPIDATION SURVEY BENEFITS</h3></p>
                
                <p>
                  <ul>
                	<li>An assessment of the building and property by an independent architect undertaken before the start of nearby construction work.</li>
                    <li>A comprehensive report recording pre-existing defects so that any new ones can easily be identified.</li>
                    <li>To view the Scope and Terms and Conditions for this service click here.</li>
                  </ul>
              	</p>

				<p><h3>OUR ASSESSING ARCHITECTS ARE:</h3></p>
                
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
				<li>Are members of the Australian Institute of Architects, and
are covered by Professional Indemnity insurance.</li>
				<li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>

              <p><h3>Qualified and independent design advice.</h3></p>

              	<p>Because Archicentre Australia does not build homes or undertake renovations, you can rest assured that our advice and recommendations will be completely independent and objective to provide you with the information required to help you decide on your best course of action.</p>
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
				<li>Are members of the Australian Institute of Architects, and
are covered by Professional Indemnity insurance.</li>
				<li>To view the Scope and Terms and Conditions for this service click here.</li>
                </ul>
              </p>
              
              <p><h3>Qualified and independent design advice.</h3></p>
              
              <p>Because Archicentre Australia does not build homes or undertake renovations, you can rest assured that our advice and recommendations will be completely independent and objective to provide you with the information required to help you decide on your best course of action.</p>
              
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

				<p><h3>Who are our ASSESSING Architects?</h3></p>
                
                <p>
                <ul>
                <li>Amongst the very best and most highly-qualified building experts</li>
				<li>Fully accredited and registered architects</li>
				<li>Members of the Australian Institute of Architects</li>
				<li>Covered by professional indemnity insurance</li>
				<li>Archicentre Australia is covered by $20 million public liability insurance</li>
				<li>To view the Scope and Terms and Conditions for this service click here.</li>
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

			<p><h3>Archicentre Australia Dilapidation Reports:</h3></p>
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
    </div>
  </div>
</body>
</html>
