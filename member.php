<?php
  require_once("shared.php");

  if (isset($_POST['fldLogout']))
  {
    SharedLogout();
    header("Location: index.php");
    exit;
  }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <?php require_once("meta.php"); ?>

  <!-- .pac-container style is to fix issue with Google autocomplete not displaying results list on easyui textboxes... -->
  <style>
    .pac-container {z-index: 10000 !important; }
  </style>

  <script type="text/javascript">
    var colour_white = '#ffffff';
    var colour_black = '#000000';
    var colour_steelblue = '#4682b4';
    var colour_maroon = '#b03060';
    var colour_forestgreen = '#228b22';
    var colour_dodgerblue = '#1e90ff';
    var colour_orangered =  '#ff4500';
    var colour_bisque3 = '#cdb79e';
    var colour_honeydew2 = '#e0eee0';
    var colour_mistyrose = '#ffe4e1';
    var colour_lavender = '#e6e6fa';
    var colour_lemonchiffon = '#fffacd';
    var colour_slategrey = '#708090';
    var colour_snow4 = '#8b8989';
    var colour_peachpuff3 = '#cdaf95';
    var colour_cornflowerblue = '#6495ed';
    var colour_royalblue = '#4169e1';
    var colour_skyblue = '#87ceeb';
    var colour_darkturquoise = '#00ced1';
    var colour_mediumaqumarine = '#66cdaa';
    var colour_lawngreen = '#7cfc00';
    var colour_darkkhaki = '#bdb76b';
    var colour_seagreen = '#2e8b57';
    var colour_gold = '#ffd700';
    var colour_yellow = '#ffff00';
    var colour_goldenrod = '#eee8aa';
    var colour_rosybrown = '#bc8f8f';
    var colour_indianred = '#cd5c5c';
    var colour_sienna = '#a0522d';
    var colour_chocolate = '#d2691e';
    var colour_deeppink = '#ff1493';
    var colour_blueviolet = '#8a2be2';
    var colour_purple = '#a020f0';
    var colour_mediumorchid = '#ba55d3';
    var colour_darkorange = '#ff8c00';
    var colour_darkturquoise = '#00ced1';
    var colour_cadetblue = '#5f9ea0';
    var colour_olivedrab = '#6b8e23';
    var colour_ghostwhite = '#f8f8ff';
    var cache_bookings = [];
    var cache_architects = [];
    var cache_inspectors = [];
    var cache_members = [];
    var map_booking = null;
    var marker = null;
    var markerinfo = null;

    // ************************************************************************************************************
    // Mapping helpers
    function initMap()
    {
      var autocomplete1 = new google.maps.places.Autocomplete($('#fldNewBookingCustAddress1').textbox('textbox')[0], {types: ['geocode'], componentRestrictions: {country: 'au'}});
      var autocomplete2 = new google.maps.places.Autocomplete($('#fldNewBookingAddress1').textbox('textbox')[0], {types: ['geocode'], componentRestrictions: {country: 'au'}});

      google.maps.event.addListener
      (
        autocomplete1,
        'place_changed',
        function()
        {
          var place = autocomplete1.getPlace();

          if (!_.isUndefined(place.address_components))
          {
            if (place.address_components.length == 8)
            {
              $('#fldNewBookingCustAddress1').textbox('setValue', place.name);
              $('#fldNewBookingCustCity').textbox('setValue', place.address_components[3].short_name);
              $('#fldNewBookingCustPostcode').textbox('setValue', place.address_components[7].short_name);
              $('#fldNewBookingCustState').combobox('setValue', place.address_components[5].short_name);
            }
            else
            {
              $('#fldNewBookingCustAddress1').textbox('setValue', place.name);
              $('#fldNewBookingCustCity').textbox('setValue', place.address_components[2].short_name);
              $('#fldNewBookingCustPostcode').textbox('setValue', place.address_components[6].short_name);
              $('#fldNewBookingCustState').combobox('setValue', place.address_components[4].short_name);
            }
          }
        }
      );

      google.maps.event.addListener
      (
        autocomplete2,
        'place_changed',
        function()
        {
          var place = autocomplete2.getPlace();
          var lat = place.geometry.location.lat();
          var lng = place.geometry.location.lng();

          if (!_.isUndefined(place.address_components))
          {
            if (place.address_components.length == 8)
            {
              $('#fldNewBookingAddress1').textbox('setValue', place.name);
              $('#fldNewBookingCity').textbox('setValue', place.address_components[3].short_name);
              $('#fldNewBookingPostcode').textbox('setValue', place.address_components[7].short_name);
              $('#fldNewBookingState').combobox('setValue', place.address_components[5].short_name);
            }
            else
            {
              $('#fldNewBookingAddress1').textbox('setValue', place.name);
              $('#fldNewBookingCity').textbox('setValue', place.address_components[2].short_name);
              $('#fldNewBookingPostcode').textbox('setValue', place.address_components[6].short_name);
              $('#fldNewBookingState').combobox('setValue', place.address_components[4].short_name);
            }

            // First time, init marker and popup info window
            if (_.isNull(marker))
            {
              marker = new google.maps.Marker
              (
                {
                  position: {lat: lat, lng: lng},
                  map: map_booking,
                  title: place.name
                }
              );

              markerinfo = new google.maps.InfoWindow();
              markerinfo.setContent(place.name);

              // Listen for click event of info window
              google.maps.event.addListener
              (
                marker,
                'click',
                function()
                {
                  markerinfo.open(map_booking, marker);
                }
              );
            }
            else
            {
              // Update property marker...
              markerinfo.setContent(place.name);
              marker.setPosition( {lat: lat, lng: lng});
            }


            map_booking.panTo({lat: lat, lng: lng});
            map_booking.setZoom(18);
          }
        }
      );

      map_booking = new google.maps.Map
      (
        document.getElementById('divNewBookingsMap'),
        {
          // 9 Strathalbyn St, Kew East VIC 3102
          center: {lat: -37.798904, lng: 145.0507013},
          navigationControl: true,
          scrollwheel: true,
          mapTypeId : google.maps.MapTypeId.ROADMAP,
          streetViewControl: false,
          zoom: 12
        }
      );
    }

    // ************************************************************************************************************
    // Data fetching...
    function doRefreshBookings()
    {
      console.log('***** Refreshing bookings...');
      $.post
      (
        'ajax_getbookings.php',
        {
          uuid: '<?php echo $_SESSION['uuid']; ?>',
          itype: <?php echo $_SESSION['itype']; ?>
        },
        function(result)
        {
          var response = JSON.parse(result);
          //console.log(response.msg);
          //console.log(response.rc)

          if (response.rc == 0)
          {
            cache_bookings = response.rows;
            $('#divBookingsG').datagrid('reload');
          }
        }
      );
    }

    function doRefreshMembers()
    {
      console.log('***** Refreshing members...');
      $.post
      (
        'ajax_getmembers.php',
        {
          uuid: '<?php echo $_SESSION['uuid']; ?>',
          itype: <?php echo $_SESSION['itype']; ?>
        },
        function(result)
        {
          var response = JSON.parse(result);

          if (response.rc == 0)
          {
            cache_members = response.rows;

            cache_architects = [];
            cache_inspectors = [];

            cache_members.forEach
            (
              function(row)
              {
                if (row.itype == itype_architect)
                  cache_architects.push(row);
                else if (row.itype == itype_inspector)
                  cache_inspectors.push(row);
              }
            );

            $('#divMembersG').datagrid('reload');
          }
        }
      );
    }

    <!-- *********************************************************************************************************************************************************************** -->
    <!-- Report handlers...                                                                                                                                                              -->
    function doReportNumReportsByType()
    {
      $('#dlgNumReporsByType').dialog
      (
        {
          onOpen: function()
          {
            $.post
            (
              'ajax_report_numreportsbytype.php',
              {
                uuid: '<?php echo $_SESSION['uuid']; ?>'
              },
              function(result)
              {
                var response = JSON.parse(result);

                if (response.rc == 0)
                {
                  response.data.forEach
                  (
                    function(row)
                    {
                      row.numrep = parseInt(row.numrep);
                    }
                  );

                  $('#divNumReporsByTypeChart').dxPieChart
                  (
                    {
                      dataSource: response.data,
                      tooltip:
                      {
                        enabled: true,
                        percentPrecision: 2,
                        customizeText: function()
                        {
                          return this.argumentText + ' - ' + this.percentText;
                        }
                      },
                      legend:
                      {
                        horizontalAlignment: 'right',
                        verticalAlignment: 'top',
                        margin: 0
                      },
                      series:
                      [
                        {
                          type: 'doughnut',
                          argumentField: 'report',
                          valueField: 'numrep',
                          label:
                          {
                            visible: true,
                            connector:
                            {
                              visible: true
                            }
                          }
                        }
                      ]
                    }
                  );
                }
              }
            );
          },
          buttons:
          [
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgNumReporsByType').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doReportNumReportsByMember()
    {
      $('#dlgNumReporsByMember').dialog
      (
        {
          onOpen: function()
          {
            $.post
            (
              'ajax_report_numreportsbymember.php',
              {
                uuid: '<?php echo $_SESSION['uuid']; ?>'
              },
              function(result)
              {
                var response = JSON.parse(result);

                if (response.rc == 0)
                {
                  response.data.forEach
                  (
                    function(row)
                    {
                      row.numrep = parseInt(row.numrep);
                    }
                  );

                  $('#divNumReporsByMemberChart').dxPieChart
                  (
                    {
                      dataSource: response.data,
                      tooltip:
                      {
                        enabled: true,
                        percentPrecision: 2,
                        customizeText: function()
                        {
                          return this.argumentText + ' - ' + this.percentText;
                        }
                      },
                      legend:
                      {
                        horizontalAlignment: 'right',
                        verticalAlignment: 'top',
                        margin: 0
                      },
                      series:
                      [
                        {
                          type: 'doughnut',
                          argumentField: 'member',
                          valueField: 'numrep',
                          label:
                          {
                            visible: true,
                            connector:
                            {
                              visible: true
                            }
                          }
                        }
                      ]
                    }
                  );
                }
              }
            );
          },
          buttons:
          [
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgNumReporsByMember').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    // ************************************************************************************************************
    // Dialog handlers
    function doDlgChangePassword(uuid)
    {
      $('#dlgChangePassword').dialog
      (
        {
          onClose: function()
          {
          },
          onOpen: function()
          {
            $('#fldVerifyPwd').textbox
            (
              {
                onChange: function(newValue, oldValue)
                {
                  if (!_.isBlank(newValue))
                  {
                    if ($('#fldNewPwd').textbox('getValue') == newValue)
                      $('#btnChangePasswordChange').linkbutton('enable');
                    else
                      $('#btnChangePasswordChange').linkbutton('disable');
                  }
                  else
                    $('#btnChangePasswordChange').linkbutton('disable');
                }
              }
            );

            $('#fldNewPwd').textbox('clear');
            $('#fldVerifyPwd').textbox('clear');

            doTextboxFocus('fldNewPwd');
          },
          buttons:
          [
            {
              text: 'Change',
              disabled: true,
              id: 'btnChangePasswordChange',
              handler: function()
              {
                var p1 = $('#fldNewPwd').textbox('getValue');
                var p2 = $('#fldVerifyPwd').textbox('getValue');

                if (p1 == p2)
                {
                  $.post
                  (
                    'ajax_changepassword.php',
                    {
                      uuid: '<?php echo $_SESSION['uuid']; ?>',
                      useruuid: uuid,
                      password: p1
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        $('#dlgChangePassword').dialog('close');
                        noty({text: response.msg, type: 'success', timeout: 10000});
                      }
                      else
                        noty({text: response.msg, type: 'error', timeout: 10000});
                    }
                  );
                }
                else
                  doMandatoryTextbox('Passwords do not match...', 'fldNewPwd');
              }
            },
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgChangePassword').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doMemberNew()
    {
      function doReset()
      {
        // Details TAB
        $('#fldNewMemberState').combobox('clear');
        $('#fldNewMemberType').combobox('clear');

        $('#fldNewMemberFirstName').textbox('clear');
        $('#fldNewMemberLastName').textbox('clear');
        $('#fldNewMemberEmail').textbox('clear');
        $('#fldNewMemberMobile').textbox('clear');
        $('#fldNewMemberPhone').textbox('clear');
        $('#fldNewMemberRegno').textbox('clear');
        $('#fldNewMemberCompany').textbox('clear');

        // Address TAB
        $('#fldNewMemberAddress1').textbox('clear');
        $('#fldNewMemberAddress2').textbox('clear');
        $('#fldNewMemberCity').textbox('clear');
        $('#fldNewMemberPostcode').textbox('clear');

        // Misc
        //$('#btnNewMemberAdd').linkbutton('disable');
      }

      $('#dlgMemberNew').dialog
      (
        {
          title: 'New Member',
          modal: true,
          onClose: function()
          {
          },
          onOpen: function()
          {
            // Address TAB
            $('#fldNewMemberState').combobox({valueField: 'name', textField: 'name', limitToList: true, data: states});
            $('#fldNewMemberType').combobox({valueField: 'id', textField: 'name', limitToList: true, data: membertypes});

            // Misc...
            $('#fldNewMemberAddress1').textbox('textbox').attr('autocomplete', 'on');

            doReset();
          },
          buttons:
          [
            {
              text: 'Add',
              disabled: false,
              id: 'btnNewMemberAdd',
              handler: function()
              {
                var firstname = $('#fldNewMemberFirstName').textbox('getValue');
                var lastname = $('#fldNewMemberLastName').textbox('getValue');
                var itype = $('#fldNewMemberType').combobox('getValue');
                var email = $('#fldNewMemberEmail').textbox('getValue');
                var mobile = $('#fldNewMemberMobile').textbox('getValue');
                var phone = $('#fldNewMemberPhone').textbox('getValue');
                var regno = $('#fldNewMemberRegno').textbox('getValue');
                var company = $('#fldNewMemberCompany').textbox('getValue');

                var address1 = $('#fldNewMemberAddress1').textbox('getValue');
                var address2 = $('#fldNewMemberAddress2').textbox('getValue');
                var city = $('#fldNewMemberCity').textbox('getValue');
                var postcode = $('#fldNewMemberPostcode').textbox('getValue');
                var state = $('#fldNewMemberState').combobox('getValue');

                if (!_.isBlank(firstname))
                {
                  if (!_.isBlank(lastname))
                  {
                    if (!_.isBlank(email))
                    {
                      var data =
                      {
                        firstname: _.titleize(firstname),
                        lastname: _.titleize(lastname),
                        itype: itype,
                        email: email,
                        mobile: mobile,
                        phone: phone,
                        regno: regno,
                        company: company,
                        address1: address1,
                        address2: address2,
                        city: city,
                        postcode: postcode,
                        state: state,

                        uuid: '<?php echo $_SESSION['uuid']; ?>'
                      };

                      $.post
                      (
                        'ajax_newmember.php',
                        data,
                        function(result)
                        {
                          var response = JSON.parse(result);

                          if (response.rc == 0)
                          {
                            doRefreshMembers();

                            noty({text: response.msg, type: 'success', timeout: 10000});
                            $('#dlgMemberNew').dialog('close');
                          }
                          else
                            noty({text: response.msg, type: 'error', timeout: 10000});
                        }
                      );
                    }
                    else
                    {
                      $('#newmemberabs').tabs('select', 0);
                      doMandatoryTextbox('Please enter member\'s email', 'fldNewMemberEmail');
                    }
                  }
                  else
                  {
                    $('#newmemberabs').tabs('select', 0);
                    doMandatoryTextbox('Please enter member\'s last name', 'fldNewMemberLastName');
                  }
                }
                else
                {
                  $('#newmemberabs').tabs('select', 0);
                  doMandatoryTextbox('Please enter member\'s first name', 'fldNewMemberFirstName');
                }
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
                $('#dlgMemberNew').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doMemberUpdate(member)
    {
      function doReset()
      {
        // Details TAB
        $('#fldNewMemberState').combobox('clear');
        <?php
          if (SharedIsAdmin())
          {
        ?>
            $('#fldNewMemberType').combobox('clear');
        <?php
          }
          else
          {
        ?>
            $('#fldNewMemberType').combobox('disable');
        <?php
          }
        ?>

        $('#fldNewMemberFirstName').textbox('clear');
        $('#fldNewMemberLastName').textbox('clear');
        $('#fldNewMemberEmail').textbox('clear');
        $('#fldNewMemberMobile').textbox('clear');
        $('#fldNewMemberPhone').textbox('clear');
        $('#fldNewMemberRegno').textbox('clear');
        $('#fldNewMemberCompany').textbox('clear');

        // Address TAB
        $('#fldNewMemberAddress1').textbox('clear');
        $('#fldNewMemberAddress2').textbox('clear');
        $('#fldNewMemberCity').textbox('clear');
        $('#fldNewMemberPostcode').textbox('clear');
      }

      $('#dlgMemberNew').dialog
      (
        {
          title: 'Update ' + member.name,
          modal: true,
          onClose: function()
          {
          },
          onOpen: function()
          {
            // Address TAB
            $('#fldNewMemberState').combobox({valueField: 'name', textField: 'name', limitToList: true, data: states});
            $('#fldNewMemberType').combobox({valueField: 'id', textField: 'name', limitToList: true, data: membertypes});

            // Misc...
            $('#fldNewMemberAddress1').textbox('textbox').attr('autocomplete', 'on');

            $.post
            (
              'ajax_getmember.php',
              {
                uuid: '<?php echo $_SESSION['uuid']; ?>',
                memberuuid: member.uuid
              },
              function(result)
              {
                var response = JSON.parse(result);

                if (response.rc == 0)
                {
                  var m = response.member;

                  // Details TAB
                  $('#fldNewMemberState').combobox('setValue', m.state);
                  $('#fldNewMemberType').combobox('setValue', m.itype);

                  $('#fldNewMemberFirstName').textbox('setValue', m.firstname);
                  $('#fldNewMemberLastName').textbox('setValue', m.lastname);
                  $('#fldNewMemberEmail').textbox('setValue', m.email);
                  $('#fldNewMemberMobile').textbox('setValue', m.mobile);
                  $('#fldNewMemberPhone').textbox('setValue', m.phone);
                  $('#fldNewMemberRegno').textbox('setValue', m.regno);
                  $('#fldNewMemberCompany').textbox('setValue', m.company);

                  // Address TAB
                  $('#fldNewMemberAddress1').textbox('setValue', m.address1);
                  $('#fldNewMemberAddress2').textbox('setValue', m.address2);
                  $('#fldNewMemberCity').textbox('setValue', m.city);
                  $('#fldNewMemberPostcode').textbox('setValue', m.postcode);
                }
              }
            );

            doReset();
          },
          buttons:
          [
            {
              text: 'Save',
              disabled: false,
              id: 'btnNewMemberAdd',
              handler: function()
              {
                var firstname = $('#fldNewMemberFirstName').textbox('getValue');
                var lastname = $('#fldNewMemberLastName').textbox('getValue');
                var itype = $('#fldNewMemberType').combobox('getValue');
                var email = $('#fldNewMemberEmail').textbox('getValue');
                var mobile = $('#fldNewMemberMobile').textbox('getValue');
                var phone = $('#fldNewMemberPhone').textbox('getValue');
                var regno = $('#fldNewMemberRegno').textbox('getValue');
                var company = $('#fldNewMemberCompany').textbox('getValue');

                var address1 = $('#fldNewMemberAddress1').textbox('getValue');
                var address2 = $('#fldNewMemberAddress2').textbox('getValue');
                var city = $('#fldNewMemberCity').textbox('getValue');
                var postcode = $('#fldNewMemberPostcode').textbox('getValue');
                var state = $('#fldNewMemberState').combobox('getValue');

                if (!_.isBlank(firstname))
                {
                  if (!_.isBlank(lastname))
                  {
                    if (!_.isBlank(email))
                    {
                      var data =
                      {
                        memberuuid: member.uuid,
                        firstname: _.titleize(firstname),
                        lastname: _.titleize(lastname),
                        itype: itype,
                        email: email,
                        mobile: mobile,
                        phone: phone,
                        regno: regno,
                        company: company,
                        address1: address1,
                        address2: address2,
                        city: city,
                        postcode: postcode,
                        state: state,

                        uuid: '<?php echo $_SESSION['uuid']; ?>'
                      };

                      $.post
                      (
                        'ajax_updatemember.php',
                        data,
                        function(result)
                        {
                          var response = JSON.parse(result);

                          if (response.rc == 0)
                          {
                            doRefreshMembers();

                            noty({text: response.msg, type: 'success', timeout: 10000});
                            $('#dlgMemberNew').dialog('close');
                          }
                          else
                            noty({text: response.msg, type: 'error', timeout: 10000});
                        }
                      );
                    }
                    else
                    {
                      $('#newmemberabs').tabs('select', 0);
                      doMandatoryTextbox('Please enter member\'s email', 'fldNewMemberEmail');
                    }
                  }
                  else
                  {
                    $('#newmemberabs').tabs('select', 0);
                    doMandatoryTextbox('Please enter member\'s last name', 'fldNewMemberLastName');
                  }
                }
                else
                {
                  $('#newmemberabs').tabs('select', 0);
                  doMandatoryTextbox('Please enter member\'s first name', 'fldNewMemberFirstName');
                }
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
                $('#dlgMemberNew').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doMemberEdit()
    {
      if (!doGridGetSelectedRowData
      (
        'divMembersG',
        function(row, index)
        {
          doMemberUpdate(row);
        }
      ))
        noty({text: 'Please select a member to edit', type: 'warning', timeout: 4000});
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
        $('#fldNewBookingReport').combobox('enable');

        <?php
          if (SharedIsAdmin())
          {
        ?>
            $('#fldNewBookingBudget').numberbox('clear');
            $('#fldNewBookingCommission').numberbox('clear');
            $('#fldNewBookingTravel').numberbox('clear');
            $('#fldNewBookingSpotter').numberbox('clear');

        <?php
          }
        ?>
        $('#fldNewBookingNotes').textbox('clear');

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
          title: 'New Booking',
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
                <?php
                  if (SharedIsAdmin())
                  {
                ?>
                    var budget = $('#fldNewBookingBudget').numberbox('getValue');
                    var commission = $('#fldNewBookingCommission').numberbox('getValue');
                    var travel = $('#fldNewBookingTravel').numberbox('getValue');
                    var spotter = $('#fldNewBookingSpotter').numberbox('getValue');
                <?php
                  }
                ?>
                var notes = $('#fldNewBookingNotes').textbox('getValue');

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
                //console.log(custemail);

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
                            <?php
                              if (SharedIsAdmin())
                              {
                            ?>
                                budget: budget,
                                commission: commission,
                                travel: travel,
                                spotter: spotter,
                            <?php
                              }
                            ?>
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
                            uuid: '<?php echo $_SESSION['uuid']; ?>'
                          };
                          //console.log(data);

                          $.post
                          (
                            'ajax_newbooking.php',
                            data,
                            function(result)
                            {
                              var response = JSON.parse(result);

                              if (response.rc == 0)
                              {
                                doRefreshBookings();
                                

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
                        doMandatoryTextbox('Please enter customer\'s email or mobile', 'fldNewBookingCustEmail');
                      }
                    }
                    else
                    {
                      $('#newbookingtabs').tabs('select', 0);
                      doMandatoryTextbox('Please enter customer\'s last name', 'fldNewBookingCustLastName');
                    }
                  }
                  else
                  {
                    $('#newbookingtabs').tabs('select', 0);
                    doMandatoryTextbox('Please enter customer\'s first name', 'fldNewBookingCustFirstName');
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

      $('#newbookingtabs').tabs
      (
        {
          onSelect: function(title, index)
          {
            if (title == 'Map')
            {
              // Force refresh since map was created when this dialog was closed...
              google.maps.event.trigger(map_booking, 'resize');
              if (!_.isNull(marker))
                map_booking.panTo(marker.getPosition());
            }
          }
        }
      );
    }

    function doUpdateBooking(booking)
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
        $('#fldNewBookingReport').combobox('disable');

        <?php
          if (SharedIsAdmin())
          {
        ?>
            $('#fldNewBookingBudget').numberbox('clear');
            $('#fldNewBookingCommission').numberbox('clear');
            $('#fldNewBookingTravel').numberbox('clear');
            $('#fldNewBookingSpotter').numberbox('clear');
        <?php
          }
        ?>
        $('#fldNewBookingNotes').textbox('clear');

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
          title: 'Update Booking ' + booking.bookingcode,
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

            $.post
            (
              'ajax_getbooking.php',
              {
                uuid: '<?php echo $_SESSION['uuid']; ?>',
                bookingcode: booking.bookingcode
              },
              function(result)
              {
                var response = JSON.parse(result);

                if (response.rc == 0)
                {
                  var b = response.booking;

                  // Customer TAB
                  $('#fldNewBookingCustState').combobox('setValue', b.custstate);

                  $('#fldNewBookingCustFirstName').textbox('setValue', b.custfirstname);
                  $('#fldNewBookingCustLastName').textbox('setValue', b.custlastname);
                  $('#fldNewBookingCustEmail').textbox('setValue', b.custemail);
                  $('#fldNewBookingCustMobile').textbox('setValue', b.custmobile);
                  $('#fldNewBookingCustPhone').textbox('setValue', b.custphone);
                  $('#fldNewBookingCustAddress1').textbox('setValue', b.custaddress1);
                  $('#fldNewBookingCustAddress2').textbox('setValue', b.custaddress2);
                  $('#fldNewBookingCustCity').textbox('setValue', b.custcity);
                  $('#fldNewBookingCustPostcode').textbox('setValue', b.custpostcode);

                  // Report TAB
                  $('#fldNewBookingReport').combobox('setValue', b.reportid);

                  <?php
                    if (SharedIsAdmin())
                    {
                  ?>
                      $('#fldNewBookingBudget').numberbox('setValue', b.budget);
                      $('#fldNewBookingCommission').numberbox('setValue', b.commission);
                      $('#fldNewBookingTravel').numberbox('setValue', b.travel);
                      $('#fldNewBookingSpotter').numberbox('setValue', b.spotter);
                  <?php
                    }
                  ?>
                  $('#fldNewBookingNotes').textbox('setValue', b.notes);

                  // Properties TAB
                  $('#fldNewBookingState').combobox('setValue', b.state);
                  $('#fldNewBookingNumStories').combobox('setValue', b.numstories);
                  $('#fldNewBookingNumBedRooms').combobox('setValue', b.numbedrooms);
                  $('#fldNewBookingNumBathRooms').combobox('setValue', b.numbathrooms);
                  $('#fldNewBookingNumRooms').combobox('setValue', b.numrooms);
                  $('#fldNewBookingNumOutBuildings').combobox('setValue', b.numoutbuildings);

                  $('#fldNewBookingAddress1').textbox('setValue', b.address1);
                  $('#fldNewBookingAddress2').textbox('setValue', b.address2);
                  $('#fldNewBookingCity').textbox('setValue', b.city);
                  $('#fldNewBookingPostcode').textbox('setValue', b.postcode);
                  $('#fldNewBookingConstruction').textbox('setValue', b.construction);
                  $('#fldNewBookingAge').textbox('setValue', b.age);

                  $('#fldNewBookingMeetingOnSite').switchbutton((b.meetingonsite == 1) ? 'check' : 'uncheck');
                  $('#fldNewBookingRenoAdvice').switchbutton((b.renoadvice == 1) ? 'check' : 'uncheck');
                  $('#fldNewBookingPestInspection').switchbutton((b.pestinspection == 1) ? 'check' : 'uncheck');

                  // Estate agent TAB
                  $('#fldNewBookingEstateAgentCompany').textbox('setValue', b.estateagentcompany);
                  $('#fldNewBookingEstateAgentContact').textbox('setValue', b.estateagentcontact);
                  $('#fldNewBookingEstateAgentMobile').textbox('setValue', b.estateagentmobile);
                  $('#fldNewBookingEstateAgentPhone').textbox('setValue', b.estateagentphone);
                }
              }
            );

            doReset();
          },
          buttons:
          [
            {
              text: 'Save',
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
                <?php
                  if (SharedIsAdmin())
                  {
                ?>
                    var budget = $('#fldNewBookingBudget').numberbox('getValue');
                    var commission = $('#fldNewBookingCommission').numberbox('getValue');
                    var travel = $('#fldNewBookingTravel').numberbox('getValue');
                    var spotter = $('#fldNewBookingSpotter').numberbox('getValue');
                <?php
                  }
                ?>
                var notes = $('#fldNewBookingNotes').textbox('getValue');

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
                            <?php
                              if (SharedIsAdmin())
                              {
                            ?>
                                budget: budget,
                                commission: commission,
                                travel: travel,
                                spotter: spotter,
                            <?php
                              }
                            ?>
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

                            uuid: '<?php echo $_SESSION['uuid']; ?>',
                            bookingcode: booking.bookingcode
                          };

                          $.post
                          (
                            'ajax_updatebooking.php',
                            data,
                            function(result)
                            {
                              var response = JSON.parse(result);

                              if (response.rc == 0)
                              {
                                doRefreshBookings();

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
                        doMandatoryTextbox('Please enter customer\'s email or mobile', 'fldNewBookingCustEmail');
                      }
                    }
                    else
                    {
                      $('#newbookingtabs').tabs('select', 0);
                      doMandatoryTextbox('Please enter customer\'s last name', 'fldNewBookingCustLastName');
                    }
                  }
                  else
                  {
                    $('#newbookingtabs').tabs('select', 0);
                    doMandatoryTextbox('Please enter customer\'s first name', 'fldNewBookingCustFirstName');
                  }
                }
                else
                  doMandatoryTextbox('Please select a report', 'fldNewBookingReport');
              }
            },
            {
              text: 'Reset',
              disabled: true,
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

      $('#newbookingtabs').tabs
      (
        {
          onSelect: function(title, index)
          {
            if (title == 'Map')
            {
              // Force refresh since map was created when this dialog was closed...
              google.maps.event.trigger(map_booking, 'resize');
              if (!_.isNull(marker))
                map_booking.panTo(marker.getPosition());
            }
          }
        }
      );
    }

    function doEditBooking()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row, index)
        {
          doUpdateBooking(row);
        }
      ))
        noty({text: 'Please select a member to edit', type: 'warning', timeout: 4000});
    }

    function doRemoveBooking()
    {
      if (!doGridGetSelectedRowData
        (
          'divBookingsG',
          function(row, index)
          {
            doPromptOkCancel
            (
              'Remove booking ' + row.bookingcode + '?',
              function(result)
              {
                if (result)
                {
                  $.post
                  (
                    'ajax_removebooking.php',
                    {
                      uuid: '<?php echo $_SESSION['uuid']; ?>',
                      bookingcode: row.bookingcode
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        doRefreshBookings();
                        noty({text: response.msg, type: 'success', timeout: 3000});
                      }
                      else
                      {
                        noty({text: response.msg, type: 'error', timeout: 10000});
                      }

                    }
                  );
                }
              }
            );
          }
        ))
        noty({text: 'Please select a booking to remove', type: 'warning', timeout: 4000});
    }
    function doCancelBooking()
    {
      if (!doGridGetSelectedRowData
        (
          'divBookingsG',
          function(row, index)
          {
            doPromptOkCancel
            (
              'Cancel booking ' + row.bookingcode + '?',
              function(result)
              {
                if (result)
                {
                  $.post
                  (
                    'ajax_cancelbooking.php',
                    {
                      uuid: '<?php echo $_SESSION['uuid']; ?>',
                      bookingcode: row.bookingcode
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        doRefreshBookings();
                        noty({text: response.msg, type: 'success', timeout: 3000});
                      }
                      else
                      {
                        noty({text: response.msg, type: 'error', timeout: 10000});
                      }

                    }
                  );
                }
              }
            );
          }
        ))
        noty({text: 'Please select a booking to remove', type: 'warning', timeout: 4000});
    }

    function doClearBooking()
    {
      $('#divBookingsG').datagrid('clearSelections');
    }

    function doAssignMember()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row, index)
        {
          var title = '';
          var members = [];

          function doReset()
          {
            $('#fldSelectArchitect').combobox('clear');
          }

          if (row.reportid == 3)
          {
            function doReset()
            {
              $('#fldSelectTheArchitect').combobox('clear');
              $('#fldSelectTheInspector').combobox('clear');
            }

            $('#dlgSelectArchitectAndInspector').dialog
            (
              {
                modal: true,
                onClose: function()
                {
                },
                onOpen: function()
                {
                  $('#fldSelectTheArchitect').combobox
                  (
                    {
                      valueField: 'uuid',
                      textField: 'name',
                      limitToList: true,
                      data: cache_architects,
                      onSelect: function(record)
                      {
                        if (!_.isBlank($('#fldSelectTheInspector').combobox('getValue')))
                          $('#btnSelectedBoth').linkbutton('enable');
                      }
                    }
                  );

                  $('#fldSelectTheInspector').combobox
                  (
                    {
                      valueField: 'uuid',
                      textField: 'name',
                      limitToList: true,
                      data: cache_inspectors,
                      onSelect: function(record)
                      {
                        if (!_.isBlank($('#fldSelectTheArchitect').combobox('getValue')))
                          $('#btnSelectedBoth').linkbutton('enable');
                      }
                    }
                  );

                  doReset();
                },
                buttons:
                [
                  {
                    text: 'Select',
                    disabled: true,
                    id: 'btnSelectedBoth',
                    handler: function()
                    {
                      var archuuid = $('#fldSelectTheArchitect').combobox('getValue');
                      var inspectoruuid = $('#fldSelectTheInspector').combobox('getValue');

                      if (!_.isBlank(archuuid) && !_.isBlank(inspectoruuid))
                      {
                        $('#divEvents').trigger('assignboth', {archuuid: archuuid, inspectoruuid: inspectoruuid});
                        $('#dlgSelectArchitectAndInspector').dialog('close');
                      }
                      else
                        doMandatoryTextbox('Please select an architect and inspector', 'fldSelectTheArchitect');
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
                      $('#dlgSelectArchitectAndInspector').dialog('close');
                    }
                  }
                ]
              }
            ).dialog('center').dialog('open');
          }
          else
          {
            if (row.reportid == 2)
            {
              title = 'Assign Inspector';
              members = cache_inspectors;
              $('#spnSelectArchitect').text('Inspector:');
            }
            else
            {
              title = 'Assign Architect';
              members = cache_architects;
              $('#spnSelectArchitect').text('Architect:');
            }

            $('#dlgSelectArchitect').dialog
            (
              {
                title: title,
                modal: true,
                onClose: function()
                {
                },
                onOpen: function()
                {
                  $('#fldSelectArchitect').combobox
                  (
                    {
                      valueField: 'uuid',
                      textField: 'name',
                      limitToList: true,
                      data: members,
                      onSelect: function(record)
                      {
                        $('#btnSelectArchitect').linkbutton('enable');
                      }
                    }
                  );

                  doReset();
                },
                buttons:
                [
                  {
                    text: 'Select',
                    disabled: true,
                    id: 'btnSelectArchitect',
                    handler: function()
                    {
                      var archuuid = $('#fldSelectArchitect').combobox('getValue');

                      if (!_.isBlank(archuuid))
                      {
                        $('#divEvents').trigger('assignarchitect', {archuuid: archuuid});
                        $('#dlgSelectArchitect').dialog('close');
                      }
                      else
                        doMandatoryTextbox('Please select an architect', 'fldSelectArchitect');
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
                      $('#dlgSelectArchitect').dialog('close');
                    }
                  }
                ]
              }
            ).dialog('center').dialog('open');
          }
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 4000});
    }

    function doMemberChangePassword()
    {
      if (!doGridGetSelectedRowData
        (
          'divMembersG',
          function(row)
          {
            doDlgChangePassword(row.uuid);
          }
        ))
        noty({text: 'Please select a memmber', type: 'warning', timeout: 10000});
    }

    function doMemberRemove()
    {
      if (!doGridGetSelectedRowData
      (
        'divMembersG',
        function(row)
        {
          doPromptOkCancel
          (
            'Remove member ' + row.name + '?',
            function(result)
            {
              if (result)
              {
                $.post
                (
                  'ajax_removemember.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    useruuid: row.uuid
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      doRefreshMembers();
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
            }
          );
        }
      ))
        noty({text: 'Please select a memmber', type: 'warning', timeout: 10000});
    }

    function doMemberActivate()
    {
    }

    function doMarkPaid()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row)
        {
          doPromptOkCancel
          (
            'Mark booking ' + row.bookingcode + ' as paid?',
            function(result)
            {
              if (result)
              {
                $.post
                (
                  'ajax_setbookingstatus.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    bookingcode: row.bookingcode,
                    status: 'paid'
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      doRefreshBookings();
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
            }
          );
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    function doMarkCompleted()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row)
        {
          doPromptOkCancel
          (
            'Mark booking ' + row.bookingcode + ' as completed?',
            function(result)
            {
              if (result)
              {
                $.post
                (
                  'ajax_setbookingstatus.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    bookingcode: row.bookingcode,
                    status: 'completed'
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      doRefreshBookings();
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
            }
          );
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    function doMarkUnCompleted()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row)
        {
          doPromptOkCancel
          (
            'Mark booking ' + row.bookingcode + ' as uncompleted?',
            function(result)
            {
              if (result)
              {
                $.post
                (
                  'ajax_setbookingstatus.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    bookingcode: row.bookingcode,
                    status: 'uncompleted'
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      doRefreshBookings();
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
            }
          );
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    function doMarkApproved()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row)
        {
          doPromptOkCancel
          (
            'Mark booking ' + row.bookingcode + ' as approved?',
            function(result)
            {
              if (result)
              {
                $.post
                (
                  'ajax_setbookingstatus.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    bookingcode: row.bookingcode,
                    status: 'approved'
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      doRefreshBookings();
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
            }
          );
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    function doEmailCustomer()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row)
        {
          doPromptOkCancel
          (
            'Email customer booking ' + row.bookingcode + '?',
            function(result)
            {
              if (result)
              {
                $.post
                (
                  'ajax_emailbooking.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    bookingcode: row.bookingcode
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      doRefreshBookings();
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
            }
          );
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    function doBookingStatusAsImage(row)
    {
      // Account for footer row...
      if (_.isUndefined(row.reportid) || _.isNull(row.reportid))
        return '';

      var img = '';
      var tooltip = '';
      var lnk = '';

      if (_.isBlank(row.budget))
      {
        img = '<img src="images/led/ball-black.png" width="24" height="24">';
        tooltip = 'Agreed price has not been set';
      }
      else if (!_.isNull(row.lastemailed))
      {
        var lastemailed = moment(row.lastemailed).format('dddd, MMMM Do YYYY, h:mm:ss a');
        img = '<img src="images/led/ball-yellow.png" width="24" height="24">';
        tooltip = 'Customer has been emailed ';
        if (row.emailcount == 1)
          tooltip += ' on ' + lastemailed;
        else
          tooltip += row.emailcount + ' times, the last being on ' + lastemailed;
      }
      else if (!_.isNull(row.dateapproved))
      {
        img = '<img src="images/led/ball-green.png" width="24" height="24">';
        tooltip = 'Booking has been approved';
      }
      else if (!_.isNull(row.datecompleted))
      {
        img =  '<img src="images/led/ball-lightblue.png" width="24" height="24">';
        tooltip = 'Booking has been completed';
      }
      else if (!_.isNull(row.datepaid))
      {
        img = '<img src="images/led/ball-orange.png" width="24" height="24">';
        tooltip = 'Booking has been paid';
      }

      lnk = '<a href="#" title="' + tooltip + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';

      return lnk;
    }

    function doBookingAssignedImage(row)
    {
      // Account for footer row...
      if (_.isUndefined(row.reportid) || _.isNull(row.reportid))
        return '';

      if (!_.isBlank(row.archfirstname))
      {
        var img = '';
        var lnk = '';

        if (row.itype == itype_inspector)
          img = '<img src="images/find_user.png" width="24" height="24">';
        else
          img = '<img src="images/brunette.png" width="24" height="24">';

        lnk = '<a href="#" title="Assigned to ' + row.archfirstname + ' ' + row.archlastname + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';
        return lnk;
      }

      return '';
    }

    function doUserTypeAsImage(row)
    {
      // Account for footer row...
      if (_.isUndefined(row.email) || _.isNull(row.email))
        return '';

      var img = '';
      var typename = '';
      var lnk = '';

      if (row.itype == itype_architect)
      {
        img = '<img src="images/brunette.png" width="24" height="24">';
        typename = 'Architect';
      }
      else if (row.itype == itype_inspector)
      {
        img = '<img src="images/find_user.png" width="24" height="24">';
        typename = 'Inspector';
      }
      else if (row.itype == itype_admin)
      {
        img = '<img src="images/realtor.png" width="24" height="24">';
        typename = 'Administrator';
      }
      else
      {
        img = '<img src="images/somebody.png" width="24" height="24">';
        typename = 'User';
      }

      if (!_.isBlank(img))
        lnk = '<a href="#" title="' + typename + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';

      return lnk;
    }

    // ************************************************************************************************************
    // Document ready...
    $(function()
    {
    });

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

      $('#btnLogout').bind
      (
        'click',
        function()
        {
          document.getElementById('frmLogout').submit();
        }
      );

      $('#divBookingsG').datagrid
      (
        {
          idField: 'bookingcode',
          fitColumns: false,
          singleSelect: true,
          rownumbers: true,
          striped: true,
          toolbar: '#tbBookings',
          showFooter: true,
          sortName: 'datecreated',
          sortOrder: 'desc',
          remoteSort: false,
          multiSort: true,
          rowStyler: function(index,row){
                    if (row.datecancelled != null){
                        return 'background-color:#6293BB;color:#fff;font-weight:bold;';
                    }
                },
          // rownumbers: true,
          // pagination: true,
          loader: function(param, success, error)
          {
            success({total: cache_bookings.length, rows: cache_bookings});

            var total = 0.0;
            var tformatted = '';
            var bformatted = '';

            cache_bookings.forEach
            (
              function(row)
              {
                if (!_.isNull(row.budget))
                  total += parseFloat(row.budget);
              }
            );

            tformatted = '<span class="totals_footer">$' + _.niceformatnumber(total, 2, true) + '</span>';
            bformatted = '<span class="totals_footer">' + cache_bookings.length + ' Bookings</span>';

            $(this).datagrid('reloadFooter', [{status: '', bookingcode: bformatted, budget: tformatted}]);
          },
          frozenColumns:
          [
            [
              {title: 'Status',         rowspan: 2, field: 'status',            width: 50,  align: 'center', resizable: false, formatter: function(value, row, index) {if (!_.isUndefined(row.reportid)) return doBookingStatusAsImage(row);}},
              {title: 'Assigned',       rowspan: 2, field: 'assigned',          width: 50,  align: 'center', resizable: false, formatter: function(value, row, index) {return doBookingAssignedImage(row);}},
              {title: 'Booking Code',   rowspan: 2, field: 'bookingcode',       width: 100, align: 'left',   resizable: true, sortable: true, styler: function(value, row, index) {return 'color: ' + colour_blueviolet;}},
              {title: 'Linked Booking', rowspan: 2, field: 'linkedbookingcode', width: 100, align: 'left',   resizable: true, sortable: true, styler: function(value, row, index) {return 'color: ' + colour_blueviolet;}}
            ],
            [
            ]
          ],
          columns:
          [
            [
              {title: 'Report',         colspan: 5},
              {title: 'Customer',       colspan: 4},
              {title: 'Property',       colspan: 12},
              {title: 'Architect',      colspan: 4},
              {title: 'Completed',      rowspan: 2, field: 'datecompleted',     width: 150, align: 'right',  resizable: true, sortable: true},
              {title: 'Approved',       rowspan: 2, field: 'dateapproved',      width: 150, align: 'right',  resizable: true, sortable: true},
              {title: 'Paid',           rowspan: 2, field: 'datepaid',          width: 150, align: 'right',  resizable: true, sortable: true},
              {title: 'Email',          colspan: 2},

              {title: 'Created',        rowspan: 2, field: 'datecreated',       width: 150, align: 'right',  resizable: true, sortable: true},
              {title: 'By',             rowspan: 2, field: 'usercreatedid',     width: 200, align: 'left',   resizable: true, sortable: true, formatter: function(value, row) {if (!_.isUndefined(row.reportid)) return row.usercreatedfirstname + ' ' + row.usercreatedlastname;}},
              {title: 'Modified',       rowspan: 2, field: 'datemodified',      width: 150, align: 'right',  resizable: true, sortable: true},
              {title: 'By',             rowspan: 2, field: 'usermodifiedid',    width: 200, align: 'left',   resizable: true, sortable: true, formatter: function(value, row) {if (!_.isUndefined(row.reportid)) return (_.isNull(row.usermodifiedfirstname)) ? '' : row.usermodifiedfirstname + ' ' + row.usermodifiedlastname;}},
              {title: 'Cancelld Date',       rowspan: 2, field: 'datecancelled',      width: 150, align: 'right',  resizable: true, sortable: true},
            ],
            [
              {title: 'Report',                     field: 'reportid',          width: 150, align: 'left',   resizable: true, formatter: function(value, row) {return doGetStringFromIdInObjArray(reports, value);}},
              <?php
                if (SharedIsAdmin())
                {
              ?>
                  {title: 'Agreed Price',           field: 'budget',            width: 100, align: 'right',  resizable: true},
              <?php
                }
              ?>
              {title: 'Commission',                 field: 'commission',        width: 100, align: 'right',  resizable: true},
              {title: 'Travel Costs',               field: 'travel',            width: 100, align: 'right',  resizable: true},
              {title: 'Spotter Fee',                field: 'spotter',           width: 100, align: 'right',  resizable: true},

              {title: 'First Name',                 field: 'custfirstname',     width: 150, align: 'left',   resizable: true},
              {title: 'Last Name',                  field: 'custlastname',      width: 150, align: 'left',   resizable: true},
              {title: 'Email',                      field: 'custemail',         width: 150, align: 'left',   resizable: true},
              {title: 'Mobile',                     field: 'custmobile',        width: 100, align: 'left',   resizable: true},

              {title: 'Address1',                   field: 'address1',          width: 150, align: 'left',   resizable: true, styler: function(value, row, index) {return 'color: ' + colour_sienna;}},
              {title: 'Address2',                   field: 'address2',          width: 150, align: 'left',   resizable: true},
              {title: 'Suburb',                     field: 'city',              width: 150, align: 'left',   resizable: true},
              {title: 'State',                      field: 'state',             width: 150, align: 'left',   resizable: true},
              {title: 'Postcode',                   field: 'postcode',          width: 150, align: 'left',   resizable: true},
              {title: 'No. Storeys',               	field: 'numstories',        width: 100, align: 'center', resizable: true},
              {title: 'No. Bedrooms',              	field: 'numbedrooms',       width: 100, align: 'center', resizable: true},
              {title: 'No. Bathrooms',             	field: 'numbathrooms',      width: 100, align: 'center', resizable: true},
              {title: 'No. Rooms',                 	field: 'numrooms',          width: 100, align: 'center', resizable: true},
              {title: 'No. Outbuildings',         	field: 'numbuildings',  	  width: 100, align: 'center', resizable: true},
              {title: 'Construction Type',          field: 'construction',      width: 120, align: 'center', resizable: true},
              {title: 'Property Age',               field: 'age',               width: 120, align: 'center', resizable: true},

              {title: 'Name',                       field: 'archname',          width: 200, align: 'left',   resizable: true, styler: function(value, row, index) {return 'color: ' + colour_royalblue;}, formatter: function(value, row) {return _.titleize(row.archfirstname) + ' ' + _.titleize(row.archlastname);}},
              {title: 'Reg. No.',                   field: 'archregno',         width: 120, align: 'left',   resizable: true},
              {title: 'Email',                      field: 'archemail',         width: 150, align: 'left',   resizable: true},
              {title: 'Mobile',                     field: 'archmobile',        width: 100, align: 'left',   resizable: true},

              {title: 'Count',                      field: 'emailcount',        width: 80,  align: 'right',   resizable: true, sortable: true, formatter: function(value, row) {return (value == 0) ? '' : value;}},
              {title: 'Last',                       field: 'lastemailed',       width: 150, align: 'right',   resizable: true, sortable: true}
            ]
          ],
          onRowContextMenu: function(e, index, row)
          {
          },
          onDblClickCell: function(index, field, value)
          {
            doGetGridGetRowDataByIndex
            (
              'divBookingsG',
              index,
              function(row, index)
              {
                switch (parseInt(row.reportid))
                {
                  case 1:
                    $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 2:
                    $.redirect('TimberReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 3:
                    $.redirect('TimberReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 4:
                    $.redirect('MaintenanceReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 5:
                    $.redirect('ArchitectAdviceReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 6:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 7:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 8:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 9:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 10:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 11:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 12:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 13:
                    $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
									case 14:
                    $.redirect('DesignConsultationReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;		
                  case 15:
                    $.redirect('DilapidationSurveyReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 16:
                    $.redirect('HomeFeasibilityReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 17:
                    $.redirect('RenovationFeasibilityReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 18:
                    $.redirect('HOWReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  case 19:
                    $.redirect('CommercialPropertyReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                  //case 20:
                    //$.redirect('CommercialDilapidationReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    //break;
                  case 21:
                    $.redirect('HomeAccessReport.php', {bookingcode: row.bookingcode}, 'POST', '_blank');
                    break;
                }
              }
            )
          }
        }
      );

      $('#divMembersG').datagrid
      (
        {
          idField: 'uuid',
          fitColumns: false,
          singleSelect: true,
          rownumbers: true,
          striped: true,
          toolbar: '#tbMembers',
          showFooter: true,
          sortName: 'name',
          sortOrder: 'asc',
          remoteSort: false,
          multiSort: true,
          loader: function(param, success, error)
          {
            success({total: cache_members.length, rows: cache_members});
            $(this).datagrid('reloadFooter', [{name: '<span class="totals_footer">' + cache_members.length + ' Members</span>'}]);
          },
          frozenColumns:
          [
            [
              {title: 'Type',         field: 'type',             width: 50,  align: 'center', resizable: true, formatter: function(value, row, index) {return doUserTypeAsImage(row);}},
              {title: 'Name',         field: 'name',             width: 100, align: 'left',   resizable: true, sortable: true, styler: function(value, row, index) {return 'color: ' + colour_blueviolet;}}
            ]
          ],
          columns:
          [
            [
              {title: 'Email',        field: 'email',            width: 150, align: 'left',   resizable: true},
              {title: 'Mobile',       field: 'mobile',           width: 150, align: 'left',   resizable: true},
              {title: 'Reg. No.',     field: 'regno',            width: 100, align: 'left',   resizable: true},
              {title: 'Company',      field: 'company',          width: 200, align: 'left',   resizable: true, sortable: true},
              {title: 'Created',      field: 'datecreated',      width: 150, align: 'right',  resizable: true, sortable: true},
              {title: 'Modified',     field: 'datemodified',     width: 150, align: 'right',  resizable: true, sortable: true},
            ]
          ],
          onRowContextMenu: function(e, index, row)
          {
          },
          onDblClickCell: function(index, field, value)
          {
            doGetGridGetRowDataByIndex
            (
              'divMembersG',
              index,
              function(row, index)
              {
                doMemberUpdate(row);
              }
            )
          }
        }
      );

      // ************************************************************************************************************
      // Populate data...
      doRefreshBookings();
      doRefreshMembers();

      // ************************************************************************************************************
      // Event listeners...
      $('#divEvents').on
      (
        'newbooking',
        function(ev, args)
        {
          // Save us from reloading entire grid, just insert new booking on top of grid...
          $('#divBookingsG').datagrid
          (
            'insertRow',
            {
              index: 0,
              row:
              {
                bookingcode: args.bookingcode,
                custfirstname: args.custfirstname,
                custlastname: args.custlastname,
                custemail: args.custemail,
                custmobile: args.custmobile,

                address1: args.address1,
                address2: args.address2,
                city: args.city,
                postcode: args.postcode,
                state: args.state,

                reportid: args.reportid,

                date: moment().format('YYYY-MM-DD HH:mm'),
                by: '<?php echo $_SESSION['username']; ?>'
              }
            }
          );
        }
      );

      $('#divEvents').on
      (
        'assignarchitect',
        function(ev, args)
        {
          doGridGetSelectedRowData
          (
            'divBookingsG',
            function(row, index)
            {
              $.post
              (
                'ajax_assignarchitect.php',
                {
                  uuid: '<?php echo $_SESSION['uuid']; ?>',
                  bookingcode: row.bookingcode,
                  archuuid: args.archuuid
                },
                function(result)
                {
                  var response = JSON.parse(result);

                  if (response.rc == 0)
                    doRefreshBookings();
                  else
                    noty({text: response.msg, type: 'error', timeout: 10000});
                }
              );
            }
          );
        }
      );

      $('#divEvents').on
      (
        'assignboth',
        function(ev, args)
        {
          doGridGetSelectedRowData
          (
            'divBookingsG',
            function(row, index)
            {
              $.post
              (
                'ajax_assignboth.php',
                {
                  uuid: '<?php echo $_SESSION['uuid']; ?>',
                  bookingcode: row.bookingcode,
                  linkedbookingcode: row.linkedbookingcode,
                  archuuid: args.archuuid,
                  inspectoruuid: args.inspectoruuid
                },
                function(result)
                {
                  var response = JSON.parse(result);

                  if (response.rc == 0)
                    doRefreshBookings();
                  else
                    noty({text: response.msg, type: 'error', timeout: 10000});
                }
              );
            }
          );
        }
      );
    });
  </script>
</head>
<body>
  <!-- *********************************************************************************************************************************************************************** -->
  <!-- Toolbars...                                                                                                                                                              -->
  <div id="tbBookings" style="height: auto; display: none">
    <div style="margin-bottom: 5px">
      <a href="javascript:void(0)" onClick="doNewBooking()" class="easyui-linkbutton" iconCls="icon-add">New Booking</a>
      <a href="javascript:void(0)" onClick="doEditBooking()" class="easyui-linkbutton" iconCls="icon-edit">Edit Booking</a>
      <?php
        if (SharedIsAdmin())
        {
      ?>
          <a href="javascript:void(0)" onClick="doMarkPaid()" class="easyui-linkbutton" iconCls="icon-payment">Paid</a>
          <a href="javascript:void(0)" onClick="doAssignMember()" class="easyui-linkbutton" iconCls="icon-man">Allocated Arch/Inspect</a>
          <a href="javascript:void(0)" onClick="doMarkUnCompleted()" class="easyui-linkbutton" iconCls="icon-redo">Redo</a>
          <a href="javascript:void(0)" onClick="doMarkApproved()" class="easyui-linkbutton" iconCls="icon-checkboxes">Approved</a>
          <a href="javascript:void(0)" onClick="doEmailCustomer()" class="easyui-linkbutton" iconCls="icon-email">Email Customer</a>
      <?php
        }
        else
        {
        ?>
          <a href="javascript:void(0)" onClick="doMarkCompleted()" class="easyui-linkbutton" iconCls="icon-orderform">Completed</a>
    <?php
        }
      ?>
      <!-- <a href="javascript:void(0)" onClick="doRemoveBooking()" class="easyui-linkbutton" iconCls="icon-remove">Cancel Booking</a> -->
      <a href="javascript:void(0)" onClick="doCancelBooking()" class="easyui-linkbutton" iconCls="icon-remove">Cancel Booking</a>
      <a href="javascript:void(0)" onClick="doClearBooking()" class="easyui-linkbutton" iconCls="icon-clear">Clear Selection</a>
    </div>
  </div>

  <div id="tbMembers" style="height: auto; display: none">
    <div style="margin-bottom: 5px">
      <?php
        if (SharedIsAdmin())
        {
      ?>
          <a href="javascript:void(0)" onClick="doMemberNew()" class="easyui-linkbutton" iconCls="icon-add">New Member</a>
      <?php
        }
      ?>
      <a href="javascript:void(0)" onClick="doMemberEdit()" class="easyui-linkbutton" iconCls="icon-edit">Edit Member</a>
      <?php
        if (SharedIsAdmin())
        {
      ?>
          <a href="javascript:void(0)" onClick="doMemberRemove()" class="easyui-linkbutton" iconCls="icon-remove">Remove Member</a>
      <?php
        }
      ?>
      <!-- <a href="javascript:void(0)" onClick="doMemberActivate()" class="easyui-linkbutton" iconCls="icon-checkboxes">Activate</a> -->
      <a href="javascript:void(0)" onClick="doMemberChangePassword()" class="easyui-linkbutton" iconCls="icon-key">Change Password</a>
    </div>
  </div>

  <!-- *********************************************************************************************************************************************************************** -->
  <!-- Reports...                                                                                                                                                              -->
  <div id="dlgNumReporsByType" class="easyui-dialog" title="#Reports by Type" style="width: 800px; height: 600px;" data-options="resizable: false, modal: false, closable: false, closed: true">
    <div id="divNumReporsByTypeChart" style="width: 98%; height: 80%;"></div>
  </div>

  <div id="dlgNumReporsByMember" class="easyui-dialog" title="#Reports by Member" style="width: 800px; height: 600px;" data-options="resizable: false, modal: false, closable: false, closed: true">
    <div id="divNumReporsByMemberChart" style="width: 98%; height: 80%;"></div>
  </div>

  <!-- *********************************************************************************************************************************************************************** -->
  <!-- Dialogs...                                                                                                                                                              -->
  <div id="dlgChangePassword" class="easyui-dialog" title="Change Password" style="width: 300px; height: 200px;" data-options="resizable: false, modal: true, closable: false, closed: true">
    <table>
      <tr>
        <td>New Password:</td>
        <td><input id="fldNewPwd" type="password" class="easyui-textbox" data-options="iconCls: 'icon-lock'"></td>
      </tr>
      <tr>
        <td>Verify Password:</td>
        <td><input id="fldVerifyPwd" type="password" class="easyui-textbox" data-options="iconCls: 'icon-lock'"></td>
      </tr>
    </table>
  </div>

  <div id="dlgSelectArchitect" class="easyui-dialog" title="Select Architect" style="width: 400px; height: 200px;" data-options="resizable: false, modal: true, closable: false, closed: true">
    <div class="easyui-panel" title="" data-options="fit: true">
      <table>
        <tr>
          <td><span id="spnSelectArchitect">Architect:</span></td>
          <td><div id="fldSelectArchitect" style="width: 300px;"></div></td>
        </tr>
      </table>
    </div>
  </div>

  <div id="dlgSelectArchitectAndInspector" class="easyui-dialog" title="Select Architect & Inspector" style="width: 400px; height: 200px;" data-options="resizable: false, modal: true, closable: false, closed: true">
    <div class="easyui-panel" title="" data-options="fit: true">
      <table>
        <tr>
          <td>Architect:</td>
          <td><div id="fldSelectTheArchitect" style="width: 300px;"></div></td>
        </tr>
        <tr>
          <td>Inspector:</td>
          <td><div id="fldSelectTheInspector" style="width: 300px;"></div></td>
        </tr>
      </table>
    </div>
  </div>

  <div id="dlgMemberNew" class="easyui-dialog" title="New Member" style="width: 800px; height: 640px;" data-options="resizable: false, modal: true, closable: false, closed: true">
    <div class="easyui-panel" title="Member Details" data-options="fit: true">
      <div id="newmemberabs" class="easyui-tabs" data-options="fit: true, pill: true">
        <div title="Details" data-options="iconCls: 'icon-man'">
          <table>
            <tr>
              <td>First Name:</td>
              <td><input id="fldNewMemberFirstName" class="easyui-textbox" data-options="" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td><input id="fldNewMemberLastName" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Email:</td>
              <td><input id="fldNewMemberEmail" class="easyui-textbox" data-options="iconCls: 'icon-email'" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Mobile:</td>
              <td><input id="fldNewMemberMobile" class="easyui-textbox" data-options="iconCls: 'icon-mobile'" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td><input id="fldNewMemberPhone" class="easyui-textbox" data-options="" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Registration No.:</td>
              <td><input id="fldNewMemberRegno" class="easyui-textbox" style="width: 120px;"></td>
            </tr>
            <tr>
              <td>Company:</td>
              <td><input id="fldNewMemberCompany" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Type:</td>
              <td><div id="fldNewMemberType" style="width: 300px;"></div></td>
            </tr>
          </table>
        </div>

        <div title="Address" data-options="iconCls: 'icon-warehouse'">
          <table>
            <tr>
              <td>Address 1:</td>
              <td><input id="fldNewMemberAddress1" class="easyui-textbox" style="width: 300px;" data-options="prompt: 'Enter address, cursor up/down for selection'"></td>
            </tr>
            <tr>
              <td>Address 2:</td>
              <td><input id="fldNewMemberAddress2" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Suburb:</td>
              <td><input id="fldNewMemberCity" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>State:</td>
              <td><div id="fldNewMemberState" style="width: 120px;"></div></td>
            </tr>
            <tr>
              <td>Postcode:</td>
              <td><input id="fldNewMemberPostcode" class="easyui-textbox" style="width: 120px;"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>

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
            <?php
              if (SharedIsAdmin())
              {
            ?>
                <tr>
                  <td>Agreed Price:</td>
                  <td><input id="fldNewBookingBudget" class="easyui-numberbox" data-options="precision: 2, groupSeparator: ',', prefix: '$'" style="width: 120px;"></td>
                </tr>
                <tr>
                  <td>Commission:</td>
                  <td><input id="fldNewBookingCommission" class="easyui-numberbox" data-options="precision: 2, groupSeparator: ',', prefix: '$'" style="width: 120px;"></td>
                </tr>
                <tr>
                  <td>Travel Costs:</td>
                  <td><input id="fldNewBookingTravel" class="easyui-numberbox" data-options="precision: 2, groupSeparator: ',', prefix: '$'" style="width: 120px;"></td>
                </tr>
                <tr>
                  <td>Spotter Fee:</td>
                  <td><input id="fldNewBookingSpotter" class="easyui-numberbox" data-options="precision: 2, groupSeparator: ',', prefix: '$'" style="width: 120px;"></td>
                </tr>
                
            <?php
              }
            ?>
            <tr>
              <td style="vertical-align: top;">Notes:</td>
              <td><input id="fldNewBookingNotes" class="easyui-textbox" multiline="true" style="width: 600px; height: 300px"></td>
            </tr>
          </table>
        </div>

        <div title="Property Details" data-options="iconCls: 'icon-warehouse'">
          <table>
            <tr>
              <td>Address 1:</td>
              <td><input id="fldNewBookingAddress1" class="easyui-textbox" style="width: 300px;" data-options="prompt: 'Enter address, cursor up/down for selection'"></td>
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

        <div title="Map" data-options="iconCls: 'icon-mappin'"><div id="divNewBookingsMap"></div></div>
      </div>
    </div>
  </div>

  <div class="easyui-layout" data-options="fit: true">
    <?php require_once("header.php"); ?>
    <?php require_once("footer.php"); ?>

    <div id="p" data-options="region: 'west'" title="Reports" style="width: 30%; padding: 10px">

      <div class="easyui-accordion" data-options="selected: 0, fit: true" >
        <div title="Members" data-options="iconCls:'icon-people'" style="overflow: auto; padding: 10px;">
          <h3 style= "color:#0099FF;">Members</h3>
          <div id="divMembersG" style="width: 98%;" ></div>
        </div>

        <?php
          if (SharedIsAdmin())
          {
        ?>
            <div title="Reports" data-options="iconCls:'icon-barchart'" style="overflow: auto; padding: 10px;">
              <h3 style= "color:#0099FF;">Select Report</h3>
              <table>
                <tr><td><a id="btnNumReportsByType" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-barchart', width: 160" onclick="doReportNumReportsByType()">#Reports by Type</a></td></tr>
                <tr><td><a id="btnNumReportsByMember" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-barchart', width: 160" onclick="doReportNumReportsByMember()">#Reports by Member</a></td></tr>
              </table>
            </div>
        <?php
          }
        ?>
      </div>
    </div>

    <div data-options="region: 'center'" title="&nbsp;">
      <div id="divBookingsG" data-options="fit: true" ></div>
    </div>
  </div>
  <div id="divEvents" style="display: none;"></div>
  <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&callback=initMap&key=AIzaSyCcXBPESLUxA846ZL6JoUefrlclXKFv4zg" async defer></script>
</body>
</html>
