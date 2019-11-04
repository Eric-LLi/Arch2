<?php
  require_once("shared.php");

  if (isset($_POST['fldLogout']))
  {
    SharedLogout();
    if (SharedIsDev())
      header("Location: index.php");
    else
      header("Location: https://www.archicentreaustraliainspections.com/index.php");
    exit;
  }
  else
  {
    if (!SharedIsLoggedIn())
    {
      if (SharedIsDev())
        header("Location: index.php");
      else
        header("Location: https://www.archicentreaustraliainspections.com/index.php");
      exit;
    }
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
    // Sort Report arrays by alphabetically(AA-115)
    function sortByName(array)
    {
      // console.log('sortByName ');
      // console.log(reports);
      //1st, remove the array index 3, it is the combined report - timber insepction report, no need to show to the user. 
      // var sortlist = array;
      var newArray;
      //var remain = sortlist.splice(3,1);
      var sortlist = array.filter(function(element){
        return (element.id !== 3)
      })

      // console.log(remain);
      newArray = sortlist.sort(function(a, b) 
      {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
          // names must be equal
          return 0;
      });
      // console.log(reports);
     return newArray;
    }


    // ************************************************************************************************************
    // Data fetching...
    // function doRefreshBookings()
    function doReloadBookings()
    {
      console.log('***** Reloading bookings, only status of Unpaid if the users is admin...');
      $('#divBookingsG').datagrid('loading');
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

          if (response.rc == 0)
          {
            // console.log(response.rows);
            cache_bookings = response.rows;
            document.getElementById('totalbookings').innerHTML = cache_bookings.length + ' Bookings';
            $('#divBookingsG').datagrid('reload');
          }
          else if(response.rc == -1)
          {
            // console.log('no bookings yet');
            // console.log(response.rows);
            cache_bookings = [];
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
    function doSalesReportBatch()
    {
      var batches = [];
      $('#dlgSalesReportBatch').dialog
      (
        {
          onOpen: function()
          {
            $('#fldSelectSalesBatch').combobox({valueField: 'value', textField: 'label'});

            $.post
            (
              'ajax_report_getsalesbatches.php',
              {
                uuid: '<?php echo $_SESSION['uuid']; ?>'
              },
              function(result)
              {
                var response = JSON.parse(result);

                if (response.rc == 0)
                {
                  if (response.rows.length == 1)
                  {
                    $('#btnRunReportSales').linkbutton('disable');
                  }
                  else
                  {
                    $('#btnRunReportSales').linkbutton('enable');
                    response.rows.forEach
                    (
                      function(row, ndx)
                      {
                        if (ndx > 0)
                          batches.push({label: row.batchno, value: row.batchno});
                      }
                    );

                    $('#fldSelectSalesBatch').combobox('loadData', batches);
                  }
                }
              }
            );
          },
          buttons:
          [
            {
              text: 'Run',
              id: 'btnRunReportSales',
              handler: function()
              {
                $.post
                (
                  'ajax_report_sales.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    batchno: $('#fldSelectSalesBatch').combobox('getValue')
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      window.open(response.filename, '_blank');
                  }
                );
                $('#dlgSalesReportBatch').dialog('close');
              }
            },
            {
              text: 'New Batch',
              handler: function()
              {
                $.post
                (
                  'ajax_report_sales.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    batchno: 0
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      window.open(response.filename, '_blank');
                  }
                );
                $('#dlgSalesReport').dialog('close');
              }
            },
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgSalesReportBatch').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doSalesReportDateRange()
    {
      $('#dlgSalesReportDateRange').dialog
      (
        {
          onOpen: function()
          {
            $('#dtSalesReportDateFrom').datebox
            (
              {
                formatter: function(date) {return moment(date).format('YYYY-MM-DD');},
                parser: function(d) {if (_.isUndefined(d) || _.isBlank(d)) return new Date(); return moment(d).toDate();}
              }
            );

            $('#dtSalesReportDateTo').datebox
            (
              {
                formatter: function(date) {return moment(date).format('YYYY-MM-DD');},
                parser: function(d) {if (_.isUndefined(d) || _.isBlank(d)) return new Date(); return moment(d).toDate();}
              }
            );

            // Default to this month...
            $('#dtSalesReportDateFrom').datebox('setValue', moment().date(1).format('YYYY-MM-DD'));
            $('#dtSalesReportDateTo').datebox('setValue', moment().format('YYYY-MM-DD'));
          },
          buttons:
          [
            {
              text: 'Run',
              handler: function()
              {
                var datefrom = $('#dtSalesReportDateFrom').datebox('getValue');
                var dateto = $('#dtSalesReportDateTo').datebox('getValue');
                var now = moment();

                if (_.isBlank(datefrom) && _.isBlank(dateto))
                {
                  doMandatoryTextbox('Please select a start and end date for the report', 'dtSalesReportDateFrom');
                  return;
                }

                if (!_.isBlank(datefrom) && !_.isBlank(dateto))
                {
                  if (moment(datefrom).isAfter(dateto))
                  {
                    doMandatoryTextbox('Start date can not be after end date...', 'dtSalesReportDateFrom');
                    return;
                  }
                }

                if (_.isBlank(dateto))
                {
                  if (moment(datefrom).isAfter(now))
                  {
                    doMandatoryTextbox('Start date can not be after today...', 'dtSalesReportDateFrom');
                      return;
                  }
                  dateto = now.format('YYYY-MM-DD 23:59:59');
                }

                if (_.isBlank(datefrom))
                {
                  if (moment(dateto).isBefore(now))
                  {
                    doMandatoryTextbox('End date can not be before today...', 'dtSalesReportDateTo');
                    return;
                  }
                  datefrom = now.format('YYYY-MM-DD 00:00:00');
                }

                $.post
                (
                  'ajax_report_salesdt.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    datefrom: datefrom,
                    dateto: dateto
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      window.open(response.filename, '_blank');
                  }
                );
                $('#dlgSalesReportDateRange').dialog('close');
              }
            },
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgSalesReportDateRange').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doSuppliersReportBatch()
    {
      var batches = [];
      $('#dlgSuppliersReportBatch').dialog
      (
        {
          onOpen: function()
          {
            $('#fldSelectSuppliersBatch').combobox({valueField: 'value', textField: 'label'});

            $.post
            (
              'ajax_report_getsuppliersbatches.php',
              {
                uuid: '<?php echo $_SESSION['uuid']; ?>'
              },
              function(result)
              {
                var response = JSON.parse(result);

                if (response.rc == 0)
                {
                  if (response.rows.length == 1)
                  {
                    $('#btnRunReportSsuppliers').linkbutton('disable');
                  }
                  else
                  {
                    $('#btnRunReportSsuppliers').linkbutton('enable');
                    response.rows.forEach
                    (
                      function(row, ndx)
                      {
                        if (ndx > 0)
                          batches.push({label: row.batchno, value: row.batchno});
                      }
                    );

                    $('#fldSelectSuppliersBatch').combobox('loadData', batches);
                  }
                }
              }
            );
          },
          buttons:
          [
            {
              text: 'Run',
              id: 'btnRunReportSuppliers',
              handler: function()
              {
                $.post
                (
                  'ajax_report_suppliers.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    batchno: $('#fldSelectSuppliersBatch').combobox('getValue')
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      window.open(response.filename, '_blank');
                  }
                );
                $('#dlgSuppliersReportBatch').dialog('close');
              }
            },
            {
              text: 'New Batch',
              handler: function()
              {
                $.post
                (
                  'ajax_report_sales.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    batchno: 0
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      window.open(response.filename, '_blank');
                  }
                );
                $('#dlgSuppliersReportBatch').dialog('close');
              }
            },
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgSuppliersReportBatch').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

    function doSuppliersReportDateRange()
    {
      $('#dlgSuppliersReportDateRange').dialog
      (
        {
          onOpen: function()
          {
            $('#dtSuppliersReportDateFrom').datebox
            (
              {
                formatter: function(date) {return moment(date).format('YYYY-MM-DD');},
                parser: function(d) {if (_.isUndefined(d) || _.isBlank(d)) return new Date(); return moment(d).toDate();}
              }
            );

            $('#dtSuppliersReportDateTo').datebox
            (
              {
                formatter: function(date) {return moment(date).format('YYYY-MM-DD');},
                parser: function(d) {if (_.isUndefined(d) || _.isBlank(d)) return new Date(); return moment(d).toDate();}
              }
            );

            // Default to this month...
            $('#dtSuppliersReportDateFrom').datebox('setValue', moment().date(1).format('YYYY-MM-DD'));
            $('#dtSuppliersReportDateTo').datebox('setValue', moment().format('YYYY-MM-DD'));
          },
          buttons:
          [
            {
              text: 'Run',
              handler: function()
              {
                var datefrom = $('#dtSuppliersReportDateFrom').datebox('getValue');
                var dateto = $('#dtSuppliersReportDateTo').datebox('getValue');
                var now = moment();

                if (_.isBlank(datefrom) && _.isBlank(dateto))
                {
                  doMandatoryTextbox('Please select a start and end date for the report', 'dtSuppliersReportDateFrom');
                  return;
                }

                if (!_.isBlank(datefrom) && !_.isBlank(dateto))
                {
                  if (moment(datefrom).isAfter(dateto))
                  {
                    doMandatoryTextbox('Start date can not be after end date...', 'dtSuppliersReportDateFrom');
                    return;
                  }
                }

                if (_.isBlank(dateto))
                {
                  if (moment(datefrom).isAfter(now))
                  {
                    doMandatoryTextbox('Start date can not be after today...', 'dtSuppliersReportDateFrom');
                      return;
                  }
                  dateto = now.format('YYYY-MM-DD 23:59:59');
                }

                if (_.isBlank(datefrom))
                {
                  if (moment(dateto).isBefore(now))
                  {
                    doMandatoryTextbox('End date can not be before today...', 'dtSuppliersReportDateTo');
                    return;
                  }
                  datefrom = now.format('YYYY-MM-DD 00:00:00');
                }

                $.post
                (
                  'ajax_report_suppliersdt.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    datefrom: datefrom,
                    dateto: dateto
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                      window.open(response.filename, '_blank');
                  }
                );
                $('#dlgSuppliersReportDateRange').dialog('close');
              }
            },
            {
              text: 'Close',
              handler: function()
              {
                $('#dlgSuppliersReportDateRange').dialog('close');
              }
            }
          ]
        }
      ).dialog('center').dialog('open');
    }

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
                      // dataSource:testingdata,
                      tooltip:
                      {
                        enabled: true,
                        percentPrecision: 2,
                        customizeText: function()
                        {
                          return this.argumentText + '(' + this.valueText + ')' + ' - ' + this.percentText ;
                        }
                      },
                      legend:
                      {
                        orientation: "vertical",
                        horizontalAlignment: 'right',
                        verticalAlignment: "bottom",
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
        // Client TAB
        $('#fldNewBookingCustState').combobox('clear');

        $('#fldNewBookingCustFirstName').textbox('clear');
        $('#fldNewBookingCustLastName').textbox('clear');
        // $('#fldNewBookingCustEmail').textbox('clear');
        $('#fldNewBookingCustEmail2').tagbox('clear');
        $('#fldNewBookingCustMobile').textbox('clear');
        $('#fldNewBookingCustPhone').textbox('clear');
        $('#fldNewBookingCustAddress1').textbox('clear');
        $('#fldNewBookingCustAddress2').textbox('clear');
        $('#fldNewBookingCustCity').textbox('clear');
        $('#fldNewBookingCustPostcode').textbox('clear');
        $('#fldNewBookingQuoteDes').textbox('clear');

        // Report TAB
        $('#fldNewBookingReport').combobox('clear');
        $('#fldNewBookingReport').combobox('enable');
        $('#fldNewBookingReport').combobox('setValue', 0); // set the default report type is 'Unassigned', id is 0;
        $('#fldNewBookingBudget').numberbox('clear');
        <?php
          if (SharedIsAdmin())
          {
        ?>
           
            $('#fldNewBookingCommission').numberbox('clear');
            $('#fldNewBookingTravel').numberbox('clear');
            $('#fldNewBookingSpotter').numberbox('clear');
            $('#fldNewBookingCancellationFee').numberbox('setValue',0.00);

        <?php
          }
        ?>
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
        //$('#btnNewBookingAdd').linkbutton('disable');
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
            // Client TAB
            $('#fldNewBookingCustState').combobox({valueField: 'name', textField: 'name', limitToList: true, data: states});
            
            $('#fldNewBookingQuoteDesTR').hide();

            
            $('#fldNewBookingCustEmail2').tagbox
            (
              {
                tagStyler: function(value)
                {
                  return 'background:#ffd7d7;';
                },
                inputEvents: $.extend({}, $.fn.tagbox.defaults.inputEvents, {
                    keyup: function(e)
                    {
                      // console.log(e.keyCode);
                      if(e.keyCode == 186)
                      {
                        // console.log('user hit ; need to do something');
                        var custemail = $('#fldNewBookingCustEmail2').tagbox('getValues');
                        var custemailstr = $('#fldNewBookingCustEmail2').tagbox('getText');
                        custemailstr = custemailstr.substring(0, custemailstr.length - 1)
                        custemail.push(custemailstr);
                        $('#fldNewBookingCustEmail2').tagbox('clear');
                        $('#fldNewBookingCustEmail2').tagbox('setValues',custemail);
                          }
                        }
                    })
                  }
            );

            // Properties TAB
            $('#fldNewBookingReport').combobox
            (
              {
                valueField: 'id',
                textField: 'name',
                limitToList: true,
                data: sortByName(reports),
                // onSelect: function(record)
                // {
                //   $('#btnNewBookingAdd').linkbutton('enable');
                // }
                onChange:function(newValue,oldValue)
                {
                  if(newValue == 23)//select the quote report
                  {
                    // console.log("need to show the quote description field");
                    $('#fldNewBookingQuoteDesTR').show();
                  }
                  else
                  {
                    // console.log("need to hide the quote description field");
                    $('#fldNewBookingQuoteDesTR').hide();
                  }
                }
              }
            );
            // $('#fldNewBookingReport').combobox('setValue',reports[0]);
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
              disabled: false,
              id: 'btnNewBookingAdd',
              handler: function()
              {
                $('#fldNewBookingCustEmail2').tagbox('textbox').trigger($.Event("keydown", {keyCode: 13}));
                var custemail = $('#fldNewBookingCustEmail2').tagbox('getValues');
                
                custemail = JSON.stringify(custemail); 
                custemail = custemail.slice(1, custemail.length - 1);
                custemail = custemail.replace(/"/g,"");

                var custfirstname = $('#fldNewBookingCustFirstName').textbox('getValue');
                var custlastname = $('#fldNewBookingCustLastName').textbox('getValue');
                // var custemail = $('#fldNewBookingCustEmail').textbox('getValue');
                var custmobile = $('#fldNewBookingCustMobile').textbox('getValue');
                var custphone = $('#fldNewBookingCustPhone').textbox('getValue');
                var custaddress1 = $('#fldNewBookingCustAddress1').textbox('getValue');
                var custaddress2 = $('#fldNewBookingCustAddress2').textbox('getValue');
                var custcity = $('#fldNewBookingCustCity').textbox('getValue');
                var custpostcode = $('#fldNewBookingCustPostcode').textbox('getValue');
                var custstate = $('#fldNewBookingCustState').combobox('getValue');

                var reportid = $('#fldNewBookingReport').combobox('getValue');  
                var budget = $('#fldNewBookingBudget').numberbox('getValue');             
                <?php
                  if (SharedIsAdmin())
                  {
                ?>
                   
                    var commission = $('#fldNewBookingCommission').numberbox('getValue');
                    var travel = $('#fldNewBookingTravel').numberbox('getValue');
                    var spotter = $('#fldNewBookingSpotter').numberbox('getValue');
                    var cancellationfee = $('#fldNewBookingCancellationFee').numberbox('getValue');
                <?php
                  }
                ?>
                var notes = $('#fldNewBookingNotes').textbox('getValue');
                var clientnotes = $('#fldNewBookingClientNotes').textbox('getText');
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

                var quotedescription = $('#fldNewBookingQuoteDes').textbox('getValue');
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
                            budget: budget,
                            <?php
                              if (SharedIsAdmin())
                              {
                            ?>
                                commission: commission,
                                travel: travel,
                                spotter: spotter,
                                cancellationfee:cancellationfee,
                            <?php
                              }
                            ?>
                            notes: notes,
                            clientnotes:clientnotes,

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

                            quotedescription:quotedescription
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
                                //doRefreshBookings();
                                <?php
                                  if (SharedIsAdmin())
                                  {
                                ?>
                                     doSearchBookings(false);
                                <?php
                                  } else {
                                    ?>
                                     console.log("need to do something else");
                                     doReloadBookings();
                                  <?php
                                  }
                                ?>
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
      // console.log(booking.bookingcode);
      // console.log(booking.linkedbookingcode);
      // console.log(booking.reportid);
      // console.log(booking.linked_bookingcode);
      console.log(booking.clientnotes);
      function doReset()
      {
        // Client TAB
        $('#fldNewBookingCustState').combobox('clear');

        $('#fldNewBookingCustFirstName').textbox('clear');
        $('#fldNewBookingCustLastName').textbox('clear');
        // $('#fldNewBookingCustEmail').textbox('clear');
        $('#fldNewBookingCustEmail2').tagbox('clear');
        $('#fldNewBookingCustMobile').textbox('clear');
        $('#fldNewBookingCustPhone').textbox('clear');
        $('#fldNewBookingCustAddress1').textbox('clear');
        $('#fldNewBookingCustAddress2').textbox('clear');
        $('#fldNewBookingCustCity').textbox('clear');
        $('#fldNewBookingCustPostcode').textbox('clear');
        $('#fldNewBookingQuoteDes').textbox('clear');
        $('#fldNewBookingBudget').numberbox('clear');

        // Report TAB
        //$('#fldNewBookingReport').combobox('disable');

        <?php
          if (SharedIsAdmin())
          {
        ?>
           
            $('#fldNewBookingCommission').numberbox('clear');
            $('#fldNewBookingTravel').numberbox('clear');
            $('#fldNewBookingSpotter').numberbox('clear');
            $('#fldNewBookingCancellationFee').numberbox('setValue',0.00);
        <?php
          }
        ?>
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
        //$('#btnNewBookingAdd').linkbutton('disable');
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
            
            // Client TAB
            $('#fldNewBookingCustState').combobox({valueField: 'name', textField: 'name', limitToList: true, data: states});

            // Properties TAB
            $('#fldNewBookingQuoteDesTR').hide();

            $('#fldNewBookingReport').combobox
            (
              {
                valueField: 'id',
                textField: 'name',
                limitToList: true,
                data: sortByName(editreports),
                // onSelect: function(record)
                // {
                //   $('#btnNewBookingAdd').linkbutton('enable');
                // }
                onChange:function(newValue,oldValue)
                {
                  if(newValue == 23)//select the quote report
                  {
                    // console.log("need to show the quote description field");
                    $('#fldNewBookingQuoteDesTR').show();
                  }
                  else
                  {
                    $('#fldNewBookingQuoteDesTR').hide();
                  }
                }
              }
            );

            $('#fldNewBookingCustEmail2').tagbox
            (
              {
                tagStyler: function(value)
                {
                  return 'background:#ffd7d7;';
                },
                inputEvents: $.extend({}, $.fn.tagbox.defaults.inputEvents, {
                  keyup: function(e){
                  if(e.keyCode == 186)
                  {
                      // console.log('user hit ; need to do something');
                      var custemail = $('#fldNewBookingCustEmail2').tagbox('getValues');
                      var custemailstr = $('#fldNewBookingCustEmail2').tagbox('getText');
                      custemailstr = custemailstr.substring(0, custemailstr.length - 1)
                      custemail.push(custemailstr);
                      $('#fldNewBookingCustEmail2').tagbox('clear');
                      $('#fldNewBookingCustEmail2').tagbox('setValues',custemail);
                    }
                  }
                })
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
                  // Client TAB
                  $('#fldNewBookingCustState').combobox('setValue', b.custstate);

                  $('#fldNewBookingCustFirstName').textbox('setValue', b.custfirstname);
                  $('#fldNewBookingCustLastName').textbox('setValue', b.custlastname);
                  if(b.custemail != null)
                  {
                    $('#fldNewBookingCustEmail2').tagbox('setValues', b.custemail);
                  }
                  $('#fldNewBookingCustMobile').textbox('setValue', b.custmobile);
                  $('#fldNewBookingCustPhone').textbox('setValue', b.custphone);
                  $('#fldNewBookingCustAddress1').textbox('setValue', b.custaddress1);
                  $('#fldNewBookingCustAddress2').textbox('setValue', b.custaddress2);
                  $('#fldNewBookingCustCity').textbox('setValue', b.custcity);
                  $('#fldNewBookingCustPostcode').textbox('setValue', b.custpostcode);

                  // Report TAB
                  //$('#fldNewBookingReport').combobox('setValue', b.reportid);
                  if(b.reportid == 3 || booking.linked_bookingcode !== null || b.reportid == 24)
                  {
                    console.log("this is a combined report, select the timber one or the property one,cannot change report type, regardless whether there is save report data");
                    $('#fldNewBookingReport').combobox({data: reports});
                    $('#fldNewBookingReport').combobox('disable');
                  }
                  else
                  {
                    if(b.reportdata  === null)
                    {
                      console.log("has not create report yet,reportdata is null, can reselect report type");
                      $('#fldNewBookingReport').combobox('enable');
                    }
                    else
                    {
                      console.log("reportdata is not null, cannot reselect report type");
                      $('#fldNewBookingReport').combobox('disable');
                    }
                  }
                    $('#fldNewBookingReport').combobox('setValue', b.reportid);
                    $('#fldNewBookingBudget').numberbox('setValue', b.budget);
                    //if the booking has been paid, the aggreed price cannot be changed any more ,set the text fields readonly
                    // if(booking.datepaid != null)
                    // {
                    //   $('#fldNewBookingBudget').numberbox({readonly:true,disabled:true});
                    // }

                  <?php
                    if (SharedIsAdmin())
                    {
                  ?>
                     
                      $('#fldNewBookingCommission').numberbox('setValue', b.commission);
                      $('#fldNewBookingTravel').numberbox('setValue', b.travel);
                      $('#fldNewBookingSpotter').numberbox('setValue', b.spotter);
                      console.log(b.cancellationfee);
                      if(b.cancellationfee == null)
                      {
                        $('#fldNewBookingCancellationFee').numberbox('setValue',0.00);
                      }
                      else
                      {
                        $('#fldNewBookingCancellationFee').numberbox('setValue', b.cancellationfee);
                      }
                  <?php
                    }
                  ?>
                  $('#fldNewBookingNotes').textbox('setValue', b.notes);
                  $('#fldNewBookingClientNotes').textbox('setValue', b.clientnotes);
                  $('#fldNewBookingQuoteDes').textbox('setValue', b.quote_description);
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
              disabled: false,
              id: 'btnNewBookingAdd',
              handler: function()
              {
                //Trigger the 'Enter' event, so all the emailaddreses are tages, no missing. 
                $('#fldNewBookingCustEmail2').tagbox('textbox').trigger($.Event("keydown", {keyCode: 13}));
                var custemail = $('#fldNewBookingCustEmail2').tagbox('getValues');
                
                custemail = JSON.stringify(custemail);
                custemail = custemail.slice(1, custemail.length - 1);
                custemail = custemail.replace(/"/g,"");
                // console.log(custemail);
                // custemail.toString();
                //console.log(custemail.join());
                var custfirstname = $('#fldNewBookingCustFirstName').textbox('getValue');
                var custlastname = $('#fldNewBookingCustLastName').textbox('getValue');
                // var custemail = $('#fldNewBookingCustEmail').textbox('getValue');
                var custmobile = $('#fldNewBookingCustMobile').textbox('getValue');
                var custphone = $('#fldNewBookingCustPhone').textbox('getValue');
                var custaddress1 = $('#fldNewBookingCustAddress1').textbox('getValue');
                var custaddress2 = $('#fldNewBookingCustAddress2').textbox('getValue');
                var custcity = $('#fldNewBookingCustCity').textbox('getValue');
                var custpostcode = $('#fldNewBookingCustPostcode').textbox('getValue');
                var custstate = $('#fldNewBookingCustState').combobox('getValue');

                var reportid = $('#fldNewBookingReport').combobox('getValue');
                var budget = $('#fldNewBookingBudget').numberbox('getValue');
                console.log("budget" + budget);
                <?php
                  if (SharedIsAdmin())
                  {
                ?>
                    var commission = $('#fldNewBookingCommission').numberbox('getValue');
                    var travel = $('#fldNewBookingTravel').numberbox('getValue');
                    var spotter = $('#fldNewBookingSpotter').numberbox('getValue');
                    var cancellationfee = $('#fldNewBookingCancellationFee').numberbox('getValue');
                <?php
                  }
                ?>
                var notes = $('#fldNewBookingNotes').textbox('getValue');
                var clientnotes = $('#fldNewBookingClientNotes').textbox('getText');
                console.log(clientnotes);
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

                var quotedescription = $('#fldNewBookingQuoteDes').textbox('getValue');


                if(reportid == "" || reportid == null)
                {
                  reportid = 0
                }
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
                            budget: budget,
                            <?php
                              if (SharedIsAdmin())
                              {
                            ?>
                                commission: commission,
                                travel: travel,
                                spotter: spotter,
                                cancellationfee:cancellationfee,
                            <?php
                              }
                            ?>
                            notes: notes,
                            clientnotes:clientnotes,

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
                            bookingcode: booking.bookingcode,
                            combinedtimberid:booking.linkedbookingcode,
                            combinedpropertyid:booking.linked_bookingcode,
                            quotedescription:quotedescription

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
                                // doRefreshBookings();
                                <?php
                                  if (SharedIsAdmin())
                                  {
                                ?>
                                     doSearchBookings(false);
                                <?php
                                  } else {
                                    ?>
                                     console.log("need to do something else");
                                     doReloadBookings();
                                  <?php
                                  }
                                ?>
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
            },
            // {
            //   text:'Print',
            //   handler:function()
            //   {
            //     printJS('dlgBookingNew', 'html')
            //   }
            // }
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
        noty({text: 'Please select a booking to edit', type: 'warning', timeout: 4000});
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
                        //doRefreshBookings();
                        doSearchBookings(false);
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
            console.log("row.reportid " + row.reportid);
            console.log("row.bookingcode " + row.bookingcode);
            console.log("row.linkedbookingcode " +row.linkedbookingcode);
            console.log("row.linked_bookingcode " +row.linked_bookingcode);
            var oldreports;
            if(row.reportid == 24)
            {
              var timberid;
              if(row.linkedbookingcode != null)
              {
                // console.log("new reports");
                oldreports = false;
                timberid = row.linkedbookingcode;
              }
              else
              {
                // console.log("old reports");
                oldreports = true;
                timberid = row.linked_bookingcode;
              }
              console.log("report id is 24, the link timber id is " + timberid);
              doPromptOkCancel
              (
                'Cancel booking ' + row.bookingcode + ' and ' + timberid + ' ?',
                function(result)
                {
                  if (result)
                  {
                    $.post
                    (
                      'ajax_cancelbookings.php',
                      {
                        uuid: '<?php echo $_SESSION['uuid']; ?>',
                        bookingcode: row.bookingcode,
                        timberid:timberid,
                        propertyid:row.bookingcode,
                        reportid:row.reportid,
                        oldreports:oldreports
                      },
                      function(result)
                      {
                        var response = JSON.parse(result);

                        if (response.rc == 0)
                        {
                          // doRefreshBookings();
                          doSearchBookings(false);
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
            else if (row.reportid == 3)
            {
              noty({text: "This is a linke timber pest report, please select the Combined Property Assessment & Timber Pest to cancel both of the reports ", type: 'warnning', timeout: 4000});
            }
            else
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
                        bookingcode: row.bookingcode,
                      },
                      function(result)
                      {
                        var response = JSON.parse(result);

                        if (response.rc == 0)
                        {
                          // doRefreshBookings();
                          doSearchBookings(false);
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
            
          }
        ))
        noty({text: 'Please select a booking to remove', type: 'warning', timeout: 4000});
    }

    function doCloseBooking()
    {
      if (!doGridGetSelectedRowData
        (
          'divBookingsG',
          function(row, index)
          {
            if (row.reportid == 3)
            {
              doPromptOkCancel
              (
                'Close booking ' + row.bookingcode + ' and' +row.linkedbookingcode + ' ?',
                function(result)
                {
                  if (result)
                  {
                    $.post
                    (
                      'ajax_closebooking.php',
                      {
                        uuid: '<?php echo $_SESSION['uuid']; ?>',
                        bookingcode: row.bookingcode
                      },
                      function(result)
                      {
                        var response = JSON.parse(result);

                        if (response.rc == 0)
                        {
                          // doRefreshBookings();
                          doSearchBookings(false);
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
            else if (row.linked_bookingcode != null)
            {
              doPromptOkCancel
              (
                'Close booking ' + row.bookingcode + ' and' +row.linked_bookingcode + ' ?',
                function(result)
                {
                  if (result)
                  {
                    $.post
                    (
                      'ajax_closebooking.php',
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
            else
            {
              doPromptOkCancel
              (
                'Close booking ' + row.bookingcode + '?',
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
                          // doRefreshBookings();
                          doSearchBookings(false);
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
            
          }
        ))
        noty({text: 'Please select a booking to close', type: 'warning', timeout: 4000});
    }

    function doChangeStatus()
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
            // $('#fldSelectTheStatus').combobox('clear');
            if (!_.isNull(row.dateclosed))
            {
              $('#fldSelectTheStatus').combobox('select',7);
            }
            else if (_.isBlank(row.budget))
            {
              $('#fldSelectTheStatus').combobox('select',1);
            }
            else if (!_.isNull(row.dateapproved))
            {
              $('#fldSelectTheStatus').combobox('select',2);
            }
            else if (!_.isNull(row.datecompleted))
            {
              $('#fldSelectTheStatus').combobox('select',3);
            }
            
            else if (!_.isNull(row.datepaid) && !_.isBlank(row.archfirstname) && _.isNull(row.datecompleted))
            {
              $('#fldSelectTheStatus').combobox('select',6);
            }
            else if (!_.isNull(row.datepaid))
            {
              $('#fldSelectTheStatus').combobox('select',4);
            }
            else if (_.isNull(row.datepaid) && !_.isBlank(row.budget))
            {
              $('#fldSelectTheStatus').combobox('select',0);
            }
          }
          // console.log(row);

          /*
            AA-113, the new process is it only change the selected report status, 
            unless it is select the combined property assessment report, and set the status to 'paid', and 'closed'. 
          */         
          if (row.reportid == 3)
          {
            var propertyid;
            title = 'Change booking ' + row.bookingcode + ' status';
            if(row.linked_bookingcode != null)
            {
              oldreports = false;
              propertyid = row.linked_bookingcode;
            }
            else
            {
              oldreports = true;
              propertyid = row.linkedbookingcode;
            }
            $('#dlgChangeStatus').dialog
            (
              {
                title: title,
                modal: true,
                onClose: function()
                {
                },
                onOpen: function()
                {
                  $('#fldSelectTheStatus').combobox
                  (
                    {
                      valueField: 'id',
                      textField: 'status',
                      data: changestatus,
                      onSelect: function(record)
                      {
                        $('#btnSelectStatus').linkbutton('enable');
                      },
                      formatter:function(row)
                      {
                        if(row.id != 5)
                        {
                          var imageFile = row.icon;
                          return '<img class="searchcombo_img" src="'+imageFile+'"/><span class="searchcombo_text">'+row.status+'</span>';
                        }
                        else
                        {
                          return '<span class="searchcombo_text">'+row.status+'</span>';
                        }
                      
                      },
                    }
                  );
                  doReset();
                },
                buttons:
                [
                  {
                    text: 'Change',
                    disabled: true,
                    id: 'btnSelectStatus',
                    handler: function()
                    {
                      var statusid = $('#fldSelectTheStatus').combobox('getValue');
                      if (!_.isBlank(statusid))
                      {
                        if(statusid == 4 || statusid == 7) // for closed or paid the combined property assessment report, will need to close or paid the link timber as well. Need to inform the admin first then ask permission. 
                        {
                          var title;
                          if(statusid == 4)
                          {
                            title = "You cannot set the linked timper pest report to paid, please select the combined property & timber pest report to change both reports' status";
                          }
                          else
                          {
                            title = "You cannot set the linked timper pest report to closed, please select the combined property & timber pest report to change both reports' status";
                          }
                          noty({text: title, type: 'error', timeout: 10000});
                        }
                        else
                        {
                          $('#divEvents').trigger('changestatus', {statusid: statusid});
                          $('#dlgChangeStatus').dialog('close');
                        }
                      }
                      else
                      {
                        doMandatoryTextbox('Please select an status', 'fldSelectTheStatus');
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
                      $('#dlgChangeStatus').dialog('close');
                    }
                  }
                ]
              }
            ).dialog('center').dialog('open');

          }
          else if (row.reportid == 24)
          {
            var timberid;
            var title = 'Change booking ' + row.bookingcode + ' status';
            if(row.linkedbookingcode != null)
            {
              oldreports = false;
              timberid = row.linkedbookingcode;
            }
            else
            {
              oldreports = true;
              timberid = row.linked_bookingcode;
            }

            $('#dlgChangeStatus').dialog
            (
              {
                title: title,
                modal: true,
                onClose: function()
                {
                },
                onOpen: function()
                {
                  $('#fldSelectTheStatus').combobox
                  (
                    {
                      valueField: 'id',
                      textField: 'status',
                      data: changestatus,
                      onSelect: function(record)
                      {
                        $('#btnSelectStatus').linkbutton('enable');
                      },
                      formatter:function(row)
                      {
                        if(row.id != 5)
                        {
                          var imageFile = row.icon;
                          return '<img class="searchcombo_img" src="'+imageFile+'"/><span class="searchcombo_text">'+row.status+'</span>';
                        }
                        else
                        {
                          return '<span class="searchcombo_text">'+row.status+'</span>';
                        }
                      
                      },
                    }
                  );
                  doReset();
                },
                buttons:
                [
                  {
                    text: 'Change',
                    disabled: true,
                    id: 'btnSelectStatus',
                    handler: function()
                    {
                      var statusid = $('#fldSelectTheStatus').combobox('getValue');
                      if (!_.isBlank(statusid))
                      {
                        if(statusid == 4 || statusid == 7) // for closed or paid the combined property assessment report, will need to close or paid the link timber as well. Need to inform the admin first then ask permission. 
                        {
                          if(statusid == 4)
                          {
                            title = 'You select the combined property assessment & timber pest report. Do you want to mark both booking ' + row.bookingcode + ' and ' + timberid + ' as paid?';

                          }
                          else
                          {
                            title = 'You select the combined property assessment & timber pest report. Do you want to close both booking ' + row.bookingcode + ' and ' + timberid + ' ?';
                          }
                          doPromptOkCancel
                          (
                            title,
                            function(result)
                            {
                              if (result)
                              {
                                $.post
                                (
                                  'ajax_setbookingstatusboth.php',
                                  {
                                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                                    bookingcode: row.bookingcode,
                                    timberid:timberid,
                                    propertyid:"",
                                    reportid:row.reportid,
                                    oldreports:oldreports,
                                    status: statusid
                                  },
                                  function(result)
                                  {
                                    var response = JSON.parse(result);
                                    console.log(response);
                                    if (response.rc == 0)
                                    {
                                      $('#dlgChangeStatus').dialog('close');
                                      doSearchBookings(false);
                                    }
                                      // doRefreshBookings();
                                    else
                                      noty({text: response.msg, type: 'error', timeout: 10000});
                                  }
                                );
                              }
                            }
                          );
                        }
                        else
                        {
                          $('#divEvents').trigger('changestatus', {statusid: statusid});
                          $('#dlgChangeStatus').dialog('close');
                        }
                      }
                      else
                      {
                        doMandatoryTextbox('Please select an status', 'fldSelectTheStatus');
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
                      $('#dlgChangeStatus').dialog('close');
                    }
                  }
                ]
              }
            ).dialog('center').dialog('open');
          }
          else
          {
            title = 'Change booking ' + row.bookingcode + ' status';
            $('#dlgChangeStatus').dialog
            (
              {
                title: title,
                modal: true,
                onClose: function()
                {
                },
                onOpen: function()
                {
                  $('#fldSelectTheStatus').combobox
                  (
                    {
                      valueField: 'id',
                      textField: 'status',
                      data: changestatus,
                      onSelect: function(record)
                      {
                        $('#btnSelectStatus').linkbutton('enable');
                      },
                      formatter:function(row)
                      {
                        if(row.id != 5)
                        {
                          var imageFile = row.icon;
                          return '<img class="searchcombo_img" src="'+imageFile+'"/><span class="searchcombo_text">'+row.status+'</span>';
                        }
                        else
                        {
                          return '<span class="searchcombo_text">'+row.status+'</span>';
                        }
                      
                      },
                    }
                  );
                  doReset();
                },
                buttons:
                [
                  {
                    text: 'Change',
                    disabled: true,
                    id: 'btnSelectStatus',
                    handler: function()
                    {
                      var statusid = $('#fldSelectTheStatus').combobox('getValue');

                      if (!_.isBlank(statusid))
                      {
                        $('#divEvents').trigger('changestatus', {statusid: statusid});
                        $('#dlgChangeStatus').dialog('close');
                      }
                      else
                        doMandatoryTextbox('Please select an status', 'fldSelectTheStatus');
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
                      $('#dlgChangeStatus').dialog('close');
                    }
                  }
                ]
              }
            ).dialog('center').dialog('open');
          }

          // //assign signle reports
          // else
          // {
          //   if (row.reportid == 2)
          //   {
          //     title = 'Assign Inspector';
          //     members = cache_inspectors;
          //     $('#spnSelectArchitect').text('Inspector:');
          //   }
          //   else
          //   {
          //     title = 'Assign Architect';
          //     members = cache_architects;
          //     $('#spnSelectArchitect').text('Architect:');
          //   }
          // }
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 4000});
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
          //console.log(row.reportid);
          if(row.reportid == 0)
          {
            // console.log("this is an unassinged report, cannot allocate architect yet");
            noty({text: 'This is an unassinged report, cannot allocate architect', type: 'warning', timeout: 4000});
          }
          //assign combined reports
          else if (row.reportid == 3 || row.reportid == 24)
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
          //assign signle reports
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

    function doUploadReportPDF()
    {
      if(!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row,index)
        {
          //noty({text:'Select booking ' + row.bookingcode,type: 'warning', timeout: 4000});
          if(row.reportid == 0 || row.reportid == 23)
          {
            // console.log("this is an unassinged report, cannot allocate architect yet");
            noty({text: 'This is an unassinged or a quote report, cannot assign a report type first', type: 'warning', timeout: 4000});
          }
          else
          {
            document.getElementById('pdfUploadBookingcode').value = row.bookingcode;
            $.post
            (
              'ajax_checkPDF.php',
              {
                uuid:'<?php echo $_SESSION['uuid']; ?>',
                bookingcode: row.bookingcode
              },
              function(result)
              {
                var response = JSON.parse(result);
                if(response.rc == 0)
                {
                  //this booking does not have a pdf in the ./pdf directory, could upload straght away
                  //noty({text:response.msg,type:'info',timeout:4000});
                  doPromptOkCancel
                  (
                    'Upload a report for booking ' + row.bookingcode + ' from the local computer?',
                    function(result)
                    {
                      if(result)
                      {
                        $("#uploadPDF").click();
                      }
                    }
                  );
                }
                else
                {
                  //This booking has a pdf in the ./pdf drectory, need to ask permission
                  doPromptOkCancel
                  (
                    'Booking ' + row.bookingcode +  ' already has a pdf report, do you want to overwrite it?',
                    function(result)
                    {
                      if (result)
                      {
                        //noty({text:'you click ok',type:'info',timeout:4000});
                        //$("#theUploadButton").click();
                        $("#uploadPDF").click();
                      }
                    }
                  );  
                  //noty({text:response.msg,type:'info',timeout:4000});
                }
              }
            )
          }
        }
      ))
      noty({text: 'Please select a booking', type: 'warning', timeout: 2000});
    }

    function pdfUploadInput()
    {
      document.getElementById('pdfUploadButton').click();
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
          if(row.reportid == 0)
          {
            // console.log("this is an unassinged report, cannot allocate architect yet");
            noty({text: 'This is an unassinged report, cannot mark it as paid', type: 'warning', timeout: 4000});
          }
          else if(row.reportid == 23)
          {
            noty({text: 'This is a quote report, cannot mark it as paid', type: 'warning', timeout: 4000});
          }
          else if (row.reportid == 3)
          {
            noty({text: "This is a linke timber pest report, please select the Combined Property Assessment & Timber Pest to pay both of the reports ", type: 'warnning', timeout: 4000});
          }
          else if (row.reportid == 24)
          {
            var timberid;
            if(row.linkedbookingcode != null)
            {
              oldreports = false;
              timberid = row.linkedbookingcode;
            }
            else
            {
              oldreports = true;
              timberid = row.linked_bookingcode;
            }
            console.log("report id is 24, the link timber id is " + timberid);
            doPromptOkCancel
            (
              'Mark booking ' + row.bookingcode + ' and ' + timberid + ' as paid?',
              function(result)
              {
                if (result)
                {
                  $.post
                  (
                    'ajax_setbookingstatusboth.php',
                    {
                      uuid: '<?php echo $_SESSION['uuid']; ?>',
                      bookingcode: row.bookingcode,
                      timberid:timberid,
                      propertyid:"",
                      reportid:row.reportid,
                      oldreports:oldreports,
                      status: 4
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        $.post
                        (
                          'ajax_sendreceipt.php',
                          {
                            uuid: '<?php echo $_SESSION['uuid']; ?>',
                            bookingcode: row.bookingcode,
                            timberid:timberid
                          },
                          function(result)
                          {
                            var response = JSON.parse(result);

                            if (response.rc == 0)
                            {
                              doSearchBookings(false);
                              noty({text: response.msg, type: 'success', timeout: 3000});
                            }
                              // doRefreshBookings();
                            else
                              noty({text: response.msg, type: 'error', timeout: 10000});
                          }
                        );
                      }
                        // doRefreshBookings();
                      else
                        noty({text: response.msg, type: 'error', timeout: 10000});
                    }
                  );
                }
              }
            );

          }
          else
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
                      status: 4
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        $.post
                        (
                          'ajax_sendreceipt.php',
                          {
                            uuid: '<?php echo $_SESSION['uuid']; ?>',
                            bookingcode: row.bookingcode,
                            timberid:""
                          },
                          function(result)
                          {
                            var response = JSON.parse(result);

                            if (response.rc == 0)
                            {
                              doSearchBookings(false);
                              noty({text: response.msg, type: 'success', timeout: 3000});
                            }
                              // doRefreshBookings();
                            else
                              noty({text: response.msg, type: 'error', timeout: 10000});
                          }
                        );
                      }
                        // doRefreshBookings();
                      else
                        noty({text: response.msg, type: 'error', timeout: 10000});
                    }
                  );
                }
              }
            );
          }
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
          console.log(row.datecompleted);
          console.log(row.dateapproved);
          if(row.datecompleted == null && row.dateapproved == null)
          {
            if(row.reportid == 0)
            {
              // console.log("this is an unassinged report, cannot allocate architect yet");
              noty({text: 'This is an unassinged report, cannot mark it as completed', type: 'warning', timeout: 4000});
            }
            else if(row.reportid == 23)
            {
              noty({text: 'This is a quote report, cannot mark it as completed, please select a report type first', type: 'warning', timeout: 4000});
            }
            else
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
                        status: 3
                      },
                      function(result)
                      {
                        var response = JSON.parse(result);

                        if (response.rc == 0)
                        {
                          doReloadBookings(); //Complete only visible to architect/inspector, always get all bookings, so use reload. search toolbar is not availabel for them. 
                          //doSearchBookings();
                        }
                        else
                          noty({text: response.msg, type: 'error', timeout: 10000});
                      }
                    );
                  }
                }
              );
            }
          }
          else
          {
            noty({text: 'This booking has already completed. No changes allowed', type: 'warning', timeout: 5000});
          }
          

        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 5000});
    }

    function doMarkUnCompleted()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row)
        {
          if(row.reportid == 0)
          {
            // console.log("this is an unassinged report, cannot allocate architect yet");
            noty({text: 'This is an unassinged report, cannot ask an architect to redo', type: 'warning', timeout: 4000});
          }
          else if(row.reportid == 23)
          {
            noty({text: 'This is a quote report, please select a report type first', type: 'warning', timeout: 4000});
          }
          else
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
                      status: 6
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        //doRefreshBookings();
                        doSearchBookings(false);
                      }
                      else
                        noty({text: response.msg, type: 'error', timeout: 10000});
                    }
                  );
                }
              }
            );
          }

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
          if(row.reportid == 0)
          {
            // console.log("this is an unassinged report, cannot allocate architect yet");
            noty({text: 'This is an unassinged report, cannot mark it approved', type: 'warning', timeout: 4000});
          }
          else if(row.reportid == 23)
          {
            noty({text: 'This is a quote report, please select a report type first', type: 'warning', timeout: 4000});
          }
          else
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
                      status: 2
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        //doRefreshBookings();
                        doSearchBookings(false);
                      }
                      else
                        noty({text: response.msg, type: 'error', timeout: 10000});
                    }
                  );
                }
              }
            );
          }

        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    function doTaxInvoice()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row)
        {
          if(row.reportid == 0)
          {
            // console.log("this is an unassinged report, cannot allocate architect yet");
            noty({text: 'This is an unassinged report, cannot send a tax invoice', type: 'warning', timeout: 4000});
          }
          else if(row.reportid == 23)
          {
            noty({text: 'This is a quote report, cannot send a tax invoice', type: 'warning', timeout: 4000});
          }
          else if (row.reportid == 3)
          {
            noty({text: "This is a linke timber pest report, please select the Combined Property Assessment & Timber Pest to send a tax invoice ", type: 'warnning', timeout: 4000});
          }
          else if (row.reportid == 24)
          {
            var timberid;
            if(row.linkedbookingcode != null)
            {
              oldreports = false;
              timberid = row.linkedbookingcode;
            }
            else
            {
              oldreports = true;
              timberid = row.linked_bookingcode;
            }
            console.log("report id is 24, the link timber id is " + timberid);
            doPromptOkCancel
            (
              'Send a tax invoice for the booking ' + row.bookingcode + ' and ' + timberid + ' ?',
              function(result)
              {
                if (result)
                {
                  $.post
                  (
                    'ajax_sendtaxinvoice.php',
                    {
                      uuid: '<?php echo $_SESSION['uuid']; ?>',
                      bookingcode: row.bookingcode,
                      timberid:timberid
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        doSearchBookings(false);
                        noty({text: response.msg, type: 'success', timeout: 3000});
                      }
                        // doRefreshBookings();
                      else
                        noty({text: response.msg, type: 'error', timeout: 10000});
                    }
                  );
                }
              }
            );

          }
          else
          {
            doPromptOkCancel
            (
              'Send a tax invoice for the booking ' + row.bookingcode + ' ?',
              function(result)
              {
                if (result)
                {
                  $.post
                  (
                    'ajax_sendtaxinvoice.php',
                    {
                      uuid: '<?php echo $_SESSION['uuid']; ?>',
                      bookingcode: row.bookingcode,
                      timberid:""
                    },
                    function(result)
                    {
                      var response = JSON.parse(result);

                      if (response.rc == 0)
                      {
                        doSearchBookings(false);
                        noty({text: response.msg, type: 'success', timeout: 3000});
                      }
                        // doRefreshBookings();
                      else
                        noty({text: response.msg, type: 'error', timeout: 10000});
                    }
                  );
                }
              }
            );
          }
        }
      ))
        noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }


    function doOpenReport()
    {
      if (!doGridGetSelectedRowData
      (
        'divBookingsG',
        function(row, index)
        {
          <?php
          if (SharedIsAdmin())
          {
          ?>
            r = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
            console.log("admin login");
            if(row.reportid == 0)
            {
              // console.log("this is an unassinged report, cannot allocate architect yet")
              noty({text: 'This is an unassinged report, please assign an report type first', type: 'warning', timeout: 3000});
            }
            else if(row.reportid == 23)
            {
              // console.log("this is an quote report");
              noty({text: 'This is a quote report, please assign an report type first', type: 'warning', timeout: 3000});
            }
            else
            {
              switch (parseInt(row.reportid))
              {
                case 1:
                  $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 2:
                  $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 3:
                  $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 4:
                  $.redirect('MaintenanceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 5:
                  $.redirect('ArchitectAdviceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 6:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 7:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 8:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 9:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 10:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 11:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 12:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 13:
                  $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 14:
                  $.redirect('DesignConsultationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;		
                case 15:
                  $.redirect('DilapidationSurveyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 16:
                  $.redirect('HomeFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 17:
                  $.redirect('RenovationFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 18:
                  $.redirect('HOWReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 19:
                  $.redirect('CommercialPropertyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                //case 20:
                  //$.redirect('CommercialDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  //break;
                case 21:
                  $.redirect('HomeAccessReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 22:
                  $.redirect('PostDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 24:
                  $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
                case 25:
                  $.redirect('AssessmentReportTypeA.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                  break;
              }
            }
          <?php
          }
          else
          {
          ?>
              //console.log(row.archuuid);
              let uuid = '<?php echo $_SESSION['uuid']; ?>';
              console.log(uuid);
              if(_.isNull(row.archuuid) || row.archuuid != uuid)
              {
                noty({text: 'You are not assigned to this booking', type: 'warning', timeout: 3000});
              }
              else
              {
                r = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
                if(row.reportid == 0)
                {
                  // console.log("this is an unassinged report, cannot allocate architect yet")
                  noty({text: 'This is an unassinged report, please assign an report type first', type: 'warning', timeout: 3000});
                }
                else if(row.reportid == 23)
                {
                  // console.log("this is an quote report");
                  noty({text: 'This is a quote report, please assign an report type first', type: 'warning', timeout: 3000});
                }
                else
                {
                  switch (parseInt(row.reportid))
                  {
                    case 1:
                      $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 2:
                      $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 3:
                      $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 4:
                      $.redirect('MaintenanceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 5:
                      $.redirect('ArchitectAdviceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 6:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 7:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 8:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 9:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 10:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 11:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 12:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 13:
                      $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 14:
                      $.redirect('DesignConsultationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;		
                    case 15:
                      $.redirect('DilapidationSurveyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 16:
                      $.redirect('HomeFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 17:
                      $.redirect('RenovationFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 18:
                      $.redirect('HOWReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 19:
                      $.redirect('CommercialPropertyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    //case 20:
                      //$.redirect('CommercialDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      //break;
                    case 21:
                      $.redirect('HomeAccessReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 22:
                      $.redirect('PostDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 24:
                      $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                    case 25:
                      $.redirect('AssessmentReportTypeA.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                      break;
                  }
                }
              }
          <?php
          }
          ?>
          

          
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
            console.log("row.reportid " + row.reportid);
            console.log("row.bookingcode" + row.bookingcode);
            console.log("row.linkedbookingcode" +row.linkedbookingcode);
            console.log("row.linked_bookingcode" +row.linked_bookingcode);
            console.log("row.dateapproved " + row.dateapproved);
            if(row.reportid == 0)
            {
              // console.log("this is an unassinged report, cannot allocate architect yet")
              noty({text: 'This is an unassinged report, cannot send report to client', type: 'warning', timeout: 3000});
            }
            
            else if(row.reportid == 23)
            {
              noty({text: 'This is a quote report, cannot send report to client', type: 'warning', timeout: 4000});
            }
            else if (row.reportid == 24)
            {
              console.log("combined report, select property assessment report");
              if(!_.isNull(row.dateapproved))
              {
                var timberid;
                if(row.linkedbookingcode != null)
                {
                  timberid = row.linkedbookingcode;
                }
                else
                {
                  timberid = row.linked_bookingcode;
                }
                console.log("report id is 24, the link timber id is " + timberid);
                doPromptOkCancel
                (
                  'Email client booking ' + row.bookingcode + ' and ' +timberid + ' ?',
                  function(result)
                  {
                    if (result)
                    {
                      $.post
                      (
                        'ajax_emailbookings.php',
                        {
                          uuid: '<?php echo $_SESSION['uuid']; ?>',
                          bookingcode: row.bookingcode,
                          timberid:timberid,
                          propertyid:"",
                          reportid:row.reportid
                        },
                        function(result)
                        {
                          var response = JSON.parse(result);

                          if (response.rc == 0)
                          {
                            // doRefreshBookings();
                            doSearchBookings(false);
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
              else
              {
                noty({text: 'This booking has not been approved, cannot send email to client!', type: 'warning', timeout: 4000});
              }
            }
            else if (row.reportid == 3)
            {
              if(!_.isNull(row.dateapproved))
              {
                var propertyid;
                if(row.linked_bookingcode != null)
                {
                  propertyid = row.linked_bookingcode;
                }
                else
                {
                  propertyid = row.linkedbookingcode;
                }
                doPromptOkCancel
                (
                  'Email client booking ' + row.bookingcode + ' and ' +propertyid + ' ?',
                  function(result)
                  {
                    if (result)
                    {
                      $.post
                      (
                        'ajax_emailbookings.php',
                        {
                          uuid: '<?php echo $_SESSION['uuid']; ?>',
                          bookingcode: row.bookingcode,
                          timberid:"",
                          propertyid:propertyid,
                          reportid:row.reportid
                        },
                        function(result)
                        {
                          var response = JSON.parse(result);

                          if (response.rc == 0)
                          {
                            // doRefreshBookings();
                            doSearchBookings(false);
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
              else
              {
                noty({text: 'This booking has not been approved, cannot send email to client!', type: 'warning', timeout: 4000});
              }
             
            }
            else
            {
              if(!_.isNull(row.dateapproved))
              {
                doPromptOkCancel
                (
                  'Email client booking ' + row.bookingcode + '?',
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
                          {
                            //doRefreshBookings();
                            doSearchBookings(false);
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
              else
              {
                noty({text: 'This booking has not been approved, cannot send email to client!', type: 'warning', timeout: 4000});
              }
              
            }  
          }
        )
      )
      noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    /**
     * Copy Booking, the open dialogue similiar to the new booking dialogue, but the client details have been populated in advanced. 
     */

    function doCopyBooking()
    {
      if (!doGridGetSelectedRowData
        (
          'divBookingsG',
          function(row)
          {

           
            var selectedCustFirstName = row.custfirstname;
            var selectedCustLastName = row.custlastname;
            var selectedCustEmail = row.custemail;
            var selectedCustMobile = row.custmobile;
            var selectedCustPhone = row.custphone;
            var selectedCustAddress1 = row.custaddress1;
            var selectedCustAddress2 = row.custaddress2;
            var selectedCustCity = row.custcity;
            var selectedCustState = row.custstate;
            var selectedCustPostcode = row.custpostcode;
            //console.log(selectedCustEmail);

           
            function doReset()
            {
              // Client TAB
              // $('#fldNewBookingCustState').combobox('clear');
            
              // $('#fldNewBookingCustFirstName').textbox('clear');
              // $('#fldNewBookingCustLastName').textbox('clear');
              // $('#fldNewBookingCustEmail').textbox('clear');
              // $('#fldNewBookingCustEmail2').tagbox('clear');
              // $('#fldNewBookingCustMobile').textbox('clear');
              // $('#fldNewBookingCustPhone').textbox('clear');
              // $('#fldNewBookingCustAddress1').textbox('clear');
              // $('#fldNewBookingCustAddress2').textbox('clear');
              // $('#fldNewBookingCustCity').textbox('clear');
              // $('#fldNewBookingCustPostcode').textbox('clear');

              //Populate the client details fields. 
              $('#fldNewBookingCustFirstName').textbox('setValue',selectedCustFirstName);
              $('#fldNewBookingCustLastName').textbox('setValue',selectedCustLastName);
              $('#fldNewBookingCustMobile').textbox('setValue',selectedCustMobile);
              $('#fldNewBookingCustPhone').textbox('setValue',selectedCustPhone);
              $('#fldNewBookingCustAddress1').textbox('setValue',selectedCustAddress1);
              $('#fldNewBookingCustAddress2').textbox('setValue',selectedCustAddress2);
              $('#fldNewBookingCustCity').textbox('setValue',selectedCustCity);
              $('#fldNewBookingCustPostcode').textbox('setValue',selectedCustPostcode);
              $('#fldNewBookingCustState').combobox('setValue',selectedCustState);
              if(selectedCustEmail != null)
              {
                $('#fldNewBookingCustEmail2').tagbox('setValues',selectedCustEmail);
              }
              // Report TAB
              $('#fldNewBookingReport').combobox('clear');
              $('#fldNewBookingReport').combobox('enable');
              $('#fldNewBookingReport').combobox('setValue', 0); // set the default report type is 'Unassigned', id is 0;

              <?php
                if (SharedIsAdmin())
                {
              ?>
                  $('#fldNewBookingBudget').numberbox('clear');
                  $('#fldNewBookingCommission').numberbox('clear');
                  $('#fldNewBookingTravel').numberbox('clear');
                  $('#fldNewBookingSpotter').numberbox('clear');
                  $('#fldNewBookingCancellationFee').numberbox('clear');

              <?php
                }
              ?>
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
              //$('#btnNewBookingAdd').linkbutton('disable');
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
                  // Client TAB
                  $('#fldNewBookingCustState').combobox({valueField: 'name', textField: 'name', limitToList: true, data: states});
                  
                  $('#fldNewBookingCustEmail2').tagbox
                  (
                    {
                      tagStyler: function(value)
                      {
                        return 'background:#ffd7d7;';
                      },
                      inputEvents: $.extend({}, $.fn.tagbox.defaults.inputEvents, {
                          keyup: function(e)
                          {
                            // console.log(e.keyCode);
                            if(e.keyCode == 186)
                            {
                              // console.log('user hit ; need to do something');
                              var custemail = $('#fldNewBookingCustEmail2').tagbox('getValues');
                              var custemailstr = $('#fldNewBookingCustEmail2').tagbox('getText');
                              custemailstr = custemailstr.substring(0, custemailstr.length - 1)
                              custemail.push(custemailstr);
                              $('#fldNewBookingCustEmail2').tagbox('clear');
                              $('#fldNewBookingCustEmail2').tagbox('setValues',custemail);
                                }
                              }
                          })
                        }
                  );

                  // Properties TAB
                  $('#fldNewBookingReport').combobox
                  (
                    {
                      valueField: 'id',
                      textField: 'name',
                      limitToList: true,
                      data: sortByName(reports),
                      // onSelect: function(record)
                      // {
                      //   $('#btnNewBookingAdd').linkbutton('enable');
                      // }
                    }
                  );

                  $('#fldNewBookingCustEmail2').tagbox
                  (
                    {
                      tagStyler: function(value)
                      {
                        return 'background:#ffd7d7;';
                      },
                      inputEvents: $.extend({}, $.fn.tagbox.defaults.inputEvents, {
                        keyup: function(e){
                        if(e.keyCode == 186)
                        {
                            // console.log('user hit ; need to do something');
                            var custemail = $('#fldNewBookingCustEmail2').tagbox('getValues');
                            var custemailstr = $('#fldNewBookingCustEmail2').tagbox('getText');
                            custemailstr = custemailstr.substring(0, custemailstr.length - 1)
                            custemail.push(custemailstr);
                            $('#fldNewBookingCustEmail2').tagbox('clear');
                            $('#fldNewBookingCustEmail2').tagbox('setValues',custemail);
                          }
                        }
                      })
                    }
                  );
                  // $('#fldNewBookingReport').combobox('setValue',reports[0]);
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
                    disabled: false,
                    id: 'btnNewBookingAdd',
                    handler: function()
                    {
                      $('#fldNewBookingCustEmail2').tagbox('textbox').trigger($.Event("keydown", {keyCode: 13}));
                      var custemail = $('#fldNewBookingCustEmail2').tagbox('getValues');
                      
                      custemail = JSON.stringify(custemail);
                      custemail = custemail.slice(1, custemail.length - 1);
                      custemail = custemail.replace(/"/g,"");

                      var custfirstname = $('#fldNewBookingCustFirstName').textbox('getValue');
                      var custlastname = $('#fldNewBookingCustLastName').textbox('getValue');
                      // var custemail = $('#fldNewBookingCustEmail').textbox('getValue');
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
                          var cancellationfee = $('#fldNewBookingCancellationFee').numberbox('getValue');
                      <?php
                        }
                      ?>
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

                      var quotedescription = $('#fldNewBookingQuoteDes').textbox('getValue');

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
                                  budget: budget,
                                  <?php
                                    if (SharedIsAdmin())
                                    {
                                  ?>
                                      commission: commission,
                                      travel: travel,
                                      spotter: spotter,
                                      cancellationfee:cancellationfee,
                                  <?php
                                    }
                                  ?>
                                  notes: notes,
                                  clientnotes:clientnotes,

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

                                  quotedescription:quotedescription
                                };
                                //console.log(data);

                                $.post
                                (
                                  'ajax_copybooking.php',
                                  data,
                                  function(result)
                                  {
                                    //console.log(result);
                                    var response = JSON.parse(result);

                                    if (response.rc == 0)
                                    {
                                      // doRefreshBookings();
                                      doSearchBookings(false);
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
            
            
            // doPromptOkCancel
            // (
            //   'Copy this booking?',
            //   function(result)
            //   {
            //     if (result)
            //     {
            //       //console.log(row.bookingcode);
            //       //console.log(row);
            //       $.post
            //       (
            //         'ajax_copybooking.php',
            //         {
            //          uuid: '<?php/* echo $_SESSION['uuid']; */?>',
            //           bookingcode: row.bookingcode
            //         },
            //         function(result)
            //         {
            //           var response = JSON.parse(result);

            //           if (response.rc == 0)
            //           {
            //             doRefreshBookings();
            //             noty({text: response.msg, type: 'success', timeout: 3000});
            //           }
            //           else
            //           {
            //             noty({text: response.msg, type: 'error', timeout: 10000});
            //           }
            //         }
            //       );
            //     }
            //   }
            // ); 
          }
        )
      )
      noty({text: 'Please select a booking', type: 'warning', timeout: 10000});
    }

    function doBookingEmailStatusAsImage(row)
    {
       // Account for footer row...
       if (_.isUndefined(row.reportid) || _.isNull(row.reportid))
        return '';

      var img = '';
      var tooltip = '';
      var lnk = '';
      
      if (!_.isNull(row.lastemailed))
      {
        var lastemailed = moment(row.lastemailed).format('dddd, MMMM Do YYYY, h:mm:ss a');
        img = '<img src="images/led/ball-yellow.png" width="20" height="20">';
        tooltip = 'Client has been emailed ';
        if (row.emailcount == 1)
          tooltip += ' on ' + lastemailed;
        else
          tooltip += row.emailcount + ' times, the last being on ' + lastemailed;
      }
      else
      {
        img = '';
        tooltip = '';
      }

      lnk = '<a href="#" title="' + tooltip + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';
      return lnk;
    }

    var n = 1;
    function doBookingStatusAsImage(row)
    {
      
      // Account for footer row...
      if (_.isUndefined(row.reportid) || _.isNull(row.reportid))
        return '';

      var img = '';
      var tooltip = '';
      var lnk = '';


      if (!_.isNull(row.dateclosed))
      {
        img = '<img src="images/led/ball-grey.png" width="20" height="20">';
        tooltip = 'Booking has been closed';
      }
      else if (_.isBlank(row.budget) && _.isNull(row.dateclosed))
      {
        img = '<img src="images/led/ball-black.png" width="20" height="20">';
        tooltip = 'Agreed price has not been set';
      }
      // else if (!_.isNull(row.lastemailed))
      // {
      //   var lastemailed = moment(row.lastemailed).format('dddd, MMMM Do YYYY, h:mm:ss a');
      //   img = '<img src="images/led/ball-yellow.png" width="24" height="24">';
      //   tooltip = 'Client has been emailed ';
      //   if (row.emailcount == 1)
      //     tooltip += ' on ' + lastemailed;
      //   else
      //     tooltip += row.emailcount + ' times, the last being on ' + lastemailed;
      // }
      else if (!_.isNull(row.dateapproved) && _.isNull(row.dateclosed))
      {
        img = '<img src="images/led/ball-green.png" width="20" height="20">';
        tooltip = 'Booking has been approved';
      }
      else if (!_.isNull(row.datecompleted) && _.isNull(row.dateclosed))
      {
        img =  '<img src="images/led/ball-lightblue.png" width="20" height="20">';
        tooltip = 'Booking has been completed';
      }
      // else if (!_.isNull(row.datepaid) && _.isNull(row.datecompleted))
      // {
      //   // console.log("I am here1");
      //   img = '<img src="images/led/ball-purple.png" width="20" height="20">';
      //   tooltip = 'Booking has started';
      // }
      
      else if (!_.isNull(row.datepaid) && !_.isBlank(row.archfirstname) && _.isNull(row.datecompleted))
      {
        // console.log("I am here1");
        img = '<img src="images/led/ball-purple.png" width="20" height="20">';
        tooltip = 'Booking has started';
      }
      else if (!_.isNull(row.datepaid))
      {
        img = '<img src="images/led/ball-orange.png" width="20" height="20">';
        tooltip = 'Booking has been paid';
      }
      else if (_.isNull(row.datepaid) && !_.isBlank(row.budget))
      {
        img = '<img src="images/led/ball-darkblue.png" width="20" height="20">';
        tooltip = 'Booking has not been paid';
      }
      
      

      lnk = '<a href="#" title="' + tooltip + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';

      return lnk;
    }

    function doBookingAssignedImage(row)
    {
      // Account for footer row...
      if (_.isUndefined(row.reportid) || _.isNull(row.reportid))
        return '';

      if (!_.isBlank(row.archfirstname) && (row.archfirstname != "Online"))
      {
        var img = '';
        var lnk = '';

        if (row.itype == itype_inspector)
          img = '<img src="images/find_user.png" width="20" height="20">';
        else
          img = '<img src="images/brunette.png" width="20" height="20">';

        lnk = '<a href="#" title="Assigned to ' + row.archfirstname + ' ' + row.archlastname + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';
        return lnk;
      }

      return '';
    }

    function doBookingSpotterImage(row)
    {
      // console.log(row.usercreatetype);
      if (_.isUndefined(row.reportid) || _.isNull(row.reportid))
        return '';
      if(row.usercreatetype != '99')
      {
        var img = '';
        var lnk = '';
        // console.log(row.usercreatedid);
        // console.log(row.usercreatedfirstname);
        // console.log(row.usercreatedlastname);

        img = '<img src="images/boss.png" width="20" height="20">';
        //+ row.usercreatedid + ' '
        lnk = '<a href="#" title="Spotted by '  +row.usercreatedfirstname+ ' ' +  row.usercreatedlastname + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';
        //console.log("not create by admin");
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
        img = '<img src="images/brunette.png" width="20" height="20">';
        typename = 'Architect';
      }
      else if (row.itype == itype_inspector)
      {
        img = '<img src="images/find_user.png" width="20" height="20">';
        typename = 'Inspector';
      }
      else if (row.itype == itype_admin)
      {
        img = '<img src="images/realtor.png" width="20" height="20">';
        typename = 'Administrator';
      }
      else
      {
        img = '<img src="images/somebody.png" width="20" height="20">';
        typename = 'User';
      }

      if (!_.isBlank(img))
        lnk = '<a href="#" title="' + typename + '" class="easyui-tooltip" data-options="showDelay: 50;">' + img + '</a>';

      return lnk;
    }

    //function doSearchBookings(pageNumber,pageSize)
    function doSearchBookings(searchEmail)
    {
      $('#divBookingsG').datagrid('loading');
      console.log('***** Searching bookings...');
      var emailinput;
      var selectedreportstatus = $('#cbSearchReportStatus').combobox('getValue');
      // var selectedreportstatus = $('#cbSearchReportStatus').combobox().combo('getValue');
      // console.log(selectedreportstatus);
      if(searchEmail == true)
      {
        console.log("need to search email input");
        emailinput = $('#fldSearchEmail').textbox('getValue');
      }
      // else
      // {
      //   console.log("don't need to search email")
      //   emailInput = "";
      // }
      // console.log(emailinput);
      $.post
      (
        'ajax_searchbookings.php',
        {
          uuid: '<?php echo $_SESSION['uuid']; ?>',
          itype: <?php echo $_SESSION['itype']; ?>,
          status: selectedreportstatus,
          email: emailinput,
          // pageNumber:pageNumber,
          // pageSize:pageSize
        },
        function(result)
        {
          var response = JSON.parse(result);
          // console.log(response.msg);
          //console.log(response.rc)

          if (response.rc == 0)
          {
            cache_bookings = response.rows;
            // console.log(cache_bookings);
            document.getElementById('totalbookings').innerHTML = cache_bookings.length + ' Bookings';
            $('#divBookingsG').datagrid('reload');
            // var bookingPager = $('#divBookingsG').datagrid('getPager').pagination({total:response.total}); 
          }
          else
          {
            cache_bookings = response.rows;
            // console.log(cache_bookings);
            $('#divBookingsG').datagrid('reload');
            document.getElementById('totalbookings').innerHTML = cache_bookings.length + ' Bookings';
            noty({text: response.msg, type: 'warning', timeout: 2000});
          }
        }
      );
    }

    function doSearchBookingNo()
    {
      $('#divBookingsG').datagrid('loading');
      console.log('***** Searching bookings Number...');
      var bookingno = $('#fldSearchBookingNo').textbox('getValue');
      console.log('the search booking number ' + bookingno );
      $.post
      (
        'ajax_searchbybookingid.php',
        {
          uuid: '<?php echo $_SESSION['uuid']; ?>',
          itype: <?php echo $_SESSION['itype']; ?>,
          bookingno:bookingno
        },
        function(result)
        {
          var response = JSON.parse(result);
          if(response.rc == 0)
          {
            cache_bookings = response.rows;
            // console.log(cache_bookings);
            document.getElementById('totalbookings').innerHTML = cache_bookings.length + ' Bookings';
            $('#divBookingsG').datagrid('reload');
          }
          else
          {
            cache_bookings = response.rows;
            // console.log(cache_bookings);
            $('#divBookingsG').datagrid('reload');
            document.getElementById('totalbookings').innerHTML = cache_bookings.length + ' Bookings';
            noty({text: response.msg, type: 'warning', timeout: 2000});
          }
        }
      )
    }

    function doResetSearch()
    {
      //$('#cbSearchReportStatus').combobox('setValue',0);
      $('#fldSearchEmail').textbox('clear');
      $('#fldSearchBookingNo').textbox('clear');
      doSearchBookings(false);
      //doRefreshBookings();
    }

    function doPageBooking(pageNumber,pageSize)
    {
      console.log('***** Searching bookings...');
      var selectedreportstatus = $('#cbSearchReportStatus').combobox('getValue');
      // console.log(selectedreportstatus);
      var emailinput = $('#fldSearchEmail').textbox('getValue');
      // console.log(emailinput);
      $.post
      (
        'ajax_searchbookings.php',
        {
          uuid: '<?php echo $_SESSION['uuid']; ?>',
          itype: <?php echo $_SESSION['itype']; ?>,
          status: selectedreportstatus,
          email: emailinput,
          pageNumber:pageNumber,
          pageSize:pageSize
        },
        function(result)
        {
          var response = JSON.parse(result);
          // console.log(response.msg);
          //console.log(response.rc)

          if (response.rc == 0)
          {
            cache_bookings = response.rows;
            console.log(cache_bookings);
            console.log(pageNumber);
            $('#divBookingsG').datagrid('reload');
            // $('#divBookingsG').datagrid('getPager').pagination({total:response.total}); 
            // $('#divBookingsG').datagrid('getPager').pagination('select',pageNumber); 
          }
          else
          {
            cache_bookings = response.rows;
            // console.log(cache_bookings);
            $('#divBookingsG').datagrid('reload');
            noty({text: response.msg, type: 'warning', timeout: 10000});
          }
        }
      );
    }

    function doBookingCustEmailBreakLine(row)
    {
      var emailList;
      var email = "";
      if (_.isUndefined(row.reportid) || _.isNull(row.reportid))
      {
        return '';
      }
      else
      {
        //console.log(row.custemail);
        emailList = row.custemail.split(",");
        
        for (i = 0; i<emailList.length;i++)
        {
          email += emailList[i] + '<br>';
        }
        console.log(email);
        return email;
      }
        
    
    }

    function BookingNumbers()
    {
      console.log(cache_bookings.length);
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
          showFooter: false,
          sortName: 'bookingcode',
          sortOrder: 'desc',
          remoteSort: false,
          multiSort: false,
          autoRowHeight: false,
          loadMsg:'Loading data, please wait...',
          // pagination: true,
          rowStyler: function(index,row)
          {
            if (row.datecancelled != null)
              return 'background-color:#6293BB;color:#fff;font-weight:bold;';           
          },

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

            // tformatted = '<span class="totals_footer">$' + _.niceformatnumber(total, 2, true) + '</span>';
            bformatted = '<span class="totals_footer">' + cache_bookings.length + ' Bookings</span>';

            $(this).datagrid('reloadFooter', [{status: '', bookingcode: bformatted, budget: tformatted}]);
          },
          frozenColumns:
          [
            [
              {title: 'Booking Status',         rowspan: 2, field: 'status',    width: 100,  align: 'center', resizable: false, formatter: function(value, row, index) {if (!_.isUndefined(row.reportid)) return doBookingStatusAsImage(row);}},
              {title: 'Email Status',         rowspan: 2, field: 'emailstatus', width: 85,  align: 'center', resizable: false, formatter: function(value, row, index) {if (!_.isUndefined(row.reportid)) return doBookingEmailStatusAsImage(row);}},
              {title: 'Spotter',       rowspan: 2, field: 'usercreate',          width: 70,  align: 'center', resizable: false, formatter: function(value, row, index) {return doBookingSpotterImage(row);}},
              {title: 'Assigned',       rowspan: 2, field: 'assigned',          width: 70,  align: 'center', resizable: false, formatter: function(value, row, index) {return doBookingAssignedImage(row);}},
              {title: 'Booking Code',   rowspan: 2, field: 'bookingcode',       width: 95, align: 'left',   resizable: false, sortable: false, styler: function(value, row, index) {return 'color: ' + colour_blueviolet;}},
              {title: 'Linked Booking', rowspan: 2, field: 'linkedbookingcode', width: 110, align: 'left',   resizable: false, sortable: false, styler: function(value, row, index) {return 'color: ' + colour_blueviolet;}}
            ],
            [
            ]
          ],
          columns:
          [
            [
              {title: 'Report',         colspan: 5},
              {title: 'Client',       colspan: 4},
              {title: 'Property',       colspan: 12},
              {title: 'Architect',      colspan: 4},
              {title: 'Completed',      rowspan: 2, field: 'datecompleted',     width: 150, align: 'right',  resizable: false, sortable: false},
              {title: 'Approved',       rowspan: 2, field: 'dateapproved',      width: 150, align: 'right',  resizable: false, sortable: false},
              {title: 'Paid',           rowspan: 2, field: 'datepaid',          width: 150, align: 'right',  resizable: false, sortable: false},
              {title: 'Email',          colspan: 2},

              {title: 'Created',        rowspan: 2, field: 'datecreated',       width: 150, align: 'right',  resizable: false, sortable: false},
              {title: 'By',             rowspan: 2, field: 'usercreatedid',     width: 150, align: 'left',   resizable: false, sortable: false, formatter: function(value, row) {if (!_.isUndefined(row.reportid)) return row.usercreatedfirstname + ' ' + row.usercreatedlastname;}},
              {title: 'Modified',       rowspan: 2, field: 'datemodified',      width: 150, align: 'right',  resizable: false, sortable: false},
              {title: 'By',             rowspan: 2, field: 'usermodifiedid',    width: 150, align: 'left',   resizable: false, sortable: false, formatter: function(value, row) {if (!_.isUndefined(row.reportid)) return (_.isNull(row.usermodifiedfirstname)) ? '' : row.usermodifiedfirstname + ' ' + row.usermodifiedlastname;}},
              {title: 'Cancelled Date', rowspan: 2, field: 'datecancelled',     width: 150, align: 'left',  resizable: false, sortable: false},
            ],
            [
              {title: 'Report',                     field: 'reportid',                      align: 'left',   resizable: false, formatter: function(value, row) {return doGetStringFromIdInObjArray(reports, value);}},
              <?php
                if (SharedIsAdmin())
                {
              ?>
                  {title: 'Agreed Price',           field: 'budget',            width: 90,  align: 'center',  resizable: false},
              <?php
                }
              ?>
              {title: 'Commission',                 field: 'commission',        width: 100, align: 'center',  resizable: false},
              {title: 'Travel Costs',               field: 'travel',            width: 100, align: 'center',  resizable: false},
              {title: 'Spotter Fee',                field: 'spotter',           width: 100, align: 'center',  resizable: false},

              {title: 'First Name',                 field: 'custfirstname',     width: 150, align: 'left',   resizable: false},
              {title: 'Last Name',                  field: 'custlastname',      width: 150, align: 'left',   resizable: false},
              {title: 'Email',                      field: 'custemail',                     align: 'left',   resizable: false},
              {title: 'Mobile',                     field: 'custmobile',        width: 100, align: 'left',   resizable: false},

              {title: 'Address1',                   field: 'address1',                      align: 'left',   resizable: false, styler: function(value, row, index) {return 'color: ' + colour_sienna;}},
              {title: 'Address2',                   field: 'address2',                      align: 'left',   resizable: false},
              {title: 'Suburb',                     field: 'city',              width: 100, align: 'left',   resizable: true},
              {title: 'State',                      field: 'state',             width: 60,  align: 'center', resizable: false},
              {title: 'Postcode',                   field: 'postcode',          width: 60,  align: 'center', resizable: false},
              {title: 'No. Storeys',               	field: 'numstories',        width: 100, align: 'center', resizable: false},
              {title: 'No. Bedrooms',              	field: 'numbedrooms',       width: 100, align: 'center', resizable: false},
              {title: 'No. Bathrooms',             	field: 'numbathrooms',      width: 100, align: 'center', resizable: false},
              {title: 'No. Rooms',                 	field: 'numrooms',          width: 100, align: 'center', resizable: false},
              {title: 'No. Outbuildings',         	field: 'numbuildings',  	  width: 110, align: 'center', resizable: false},
              {title: 'Construction Type',          field: 'construction',      width: 120, align: 'center', resizable: false},
              {title: 'Property Age',               field: 'age',               width: 120, align: 'center', resizable: false},

              {title: 'Name',                       field: 'archname',          width: 120, align: 'left',   resizable: false, styler: function(value, row, index) {return 'color: ' + colour_royalblue;}, formatter: function(value, row) {return _.titleize(row.archfirstname) + ' ' + _.titleize(row.archlastname);}},
              {title: 'Reg. No.',                   field: 'archregno',         width: 120, align: 'left',   resizable: false},
              {title: 'Email',                      field: 'archemail',                     align: 'left',   resizable: false},
              {title: 'Mobile',                     field: 'archmobile',        width: 100, align: 'left',   resizable: false},

              {title: 'Count',                      field: 'emailcount',        width: 80,  align: 'center',   resizable: false, sortable: false, formatter: function(value, row) {return (value == 0) ? '' : value;}},
              {title: 'Last',                       field: 'lastemailed',       width: 150, align: 'center',   resizable: false, sortable: false}
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
                <?php
                if (SharedIsAdmin())
                {
                ?>
                  r = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
                  console.log("admin login");
                  if(row.reportid == 0)
                  {
                    // console.log("this is an unassinged report, cannot allocate architect yet")
                    noty({text: 'This is an unassinged report, please assign an report type first', type: 'warning', timeout: 3000});
                  }
                  else if(row.reportid == 23)
                  {
                    // console.log("this is an quote report");
                    noty({text: 'This is a quote report, please assign an report type first', type: 'warning', timeout: 3000});
                  }
                  else
                  {
                    switch (parseInt(row.reportid))
                    {
                      case 1:
                        $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 2:
                        $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 3:
                        $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 4:
                        $.redirect('MaintenanceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 5:
                        $.redirect('ArchitectAdviceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 6:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 7:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 8:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 9:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 10:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 11:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 12:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 13:
                        $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 14:
                        $.redirect('DesignConsultationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;		
                      case 15:
                        $.redirect('DilapidationSurveyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 16:
                        $.redirect('HomeFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 17:
                        $.redirect('RenovationFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 18:
                        $.redirect('HOWReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 19:
                        $.redirect('CommercialPropertyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      //case 20:
                        //$.redirect('CommercialDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        //break;
                      case 21:
                        $.redirect('HomeAccessReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 22:
                        $.redirect('PostDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 24:
                        $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                      case 25:
                        $.redirect('AssessmentReportTypeA.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                        break;
                    }
                  }
                <?php
                }
                else
                {
                ?>
                   console.log(row.archuuid);
                   let uuid = '<?php echo $_SESSION['uuid']; ?>';
                   console.log(uuid);
                   if(_.isNull(row.archuuid) || row.archuuid != uuid)
                   {
                    noty({text: 'You are not assigned to this booking', type: 'warning', timeout: 3000});
                   }
                   else
                   {
                    r = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
                    let uuid = '<?php echo $_SESSION['uuid']; ?>';
                    if(row.reportid == 0)
                    {
                      // console.log("this is an unassinged report, cannot allocate architect yet")
                      noty({text: 'This is an unassinged report, please assign an report type first', type: 'warning', timeout: 3000});
                    }
                    else if(row.reportid == 23)
                    {
                      // console.log("this is an quote report");
                      noty({text: 'This is a quote report, please assign an report type first', type: 'warning', timeout: 3000});
                    }
                    else
                    {
                      switch (parseInt(row.reportid))
                      {
                        case 1:
                          $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 2:
                          $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 3:
                          $.redirect('TimberReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 4:
                          $.redirect('MaintenanceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 5:
                          $.redirect('ArchitectAdviceReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 6:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 7:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 8:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 9:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 10:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 11:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 12:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 13:
                          $.redirect('ConstructionReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 14:
                          $.redirect('DesignConsultationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;		
                        case 15:
                          $.redirect('DilapidationSurveyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 16:
                          $.redirect('HomeFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 17:
                          $.redirect('RenovationFeasibilityReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 18:
                          $.redirect('HOWReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 19:
                          $.redirect('CommercialPropertyReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        //case 20:
                          //$.redirect('CommercialDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          //break;
                        case 21:
                          $.redirect('HomeAccessReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 22:
                          $.redirect('PostDilapidationReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 24:
                          $.redirect('AssessmentReport.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                        case 25:
                          $.redirect('AssessmentReportTypeA.php', {bookingcode: row.bookingcode, r: r}, 'POST', '_blank');
                          break;
                      }
                    }
                   }
                <?php
                }
                ?>
                

                
              }
            )
          }
        }
      );


      // var bookingPager = $('#divBookingsG').datagrid('getPager'); 
      //   bookingPager.pagination({
      //   total:2000,
      //   pageSize:10,
      //   pageList:[10,20,30],
      //   showRefresh:false,
      //   onSelectPage:function(pageNumber,pageSize)
      //   {
      //     console.log(pageNumber);
      //     console.log(pageSize);
      //     //bookingPager.pagination('loading');
      //     //alert('pageNumber:'+pageNumber+',pageSize:'+pageSize);
      //     //bookingPager.pagination('loaded');
      //     doPageBooking(pageNumber,pageSize);
      //   },
      //   onChangePageSize:function(pageSize)
      //   {
      //     //alert('pageNumber:'+pageSize);
      //   }
      // });

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
          autoRowHeight: false,
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

      $('#cbSearchReportStatus').combobox
      (
        {
          valueField:'id',
          textField:'status',
          data:reportstatus,
          formatter:function(row)
          {
            if(row.id != 5)
            {
              var imageFile = row.icon;
              return '<img class="searchcombo_img" src="'+imageFile+'"/><span class="searchcombo_text">'+row.status+'</span>';
            }
            else
            {
              return '<span class="searchcombo_text">'+row.status+'</span>';
            }
          
          },
          // onLoadSuccess:function(){
          //   $(this).combobox('setValue',5);
          // },
          onChange:function(record)
          {
            //console.log(record);
            doSearchBookings(false);
            //document.getElementById("searchButton").click();
          }
        }
      );


      // ************************************************************************************************************
      // Populate data...
      //doRefreshBookings();
      doReloadBookings()
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
                  archuuid: args.archuuid,
                  usercreateid:row.usercreatedid,
                  usercreatetype:row.usercreatetype
                },
                function(result)
                {
                  var response = JSON.parse(result);

                  if (response.rc == 0)
                  {
                    //doRefreshBookings();
                    doSearchBookings(false);
                  }
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
              //console.log(row);
              if(row.reportid == 24)
              {
                console.log("combined report, select property assessment report");
                var timberid;
                if(row.linkedbookingcode != null)
                {
                  timberid = row.linkedbookingcode;
                }
                else
                {
                  timberid = row.linked_bookingcode;
                }
                console.log("report id is 24, the link timber id is " + timberid);
                $.post
                (
                  'ajax_assignboth.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    bookingcode: row.bookingcode,
                    timberid:timberid,
                    propertyid:"",
                    archuuid: args.archuuid,
                    inspectoruuid: args.inspectoruuid,
                    reportid:row.reportid,
                    usercreateid:row.usercreatedid,
                    usercreatetype:row.usercreatetype
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                    {
                      //doRefreshBookings();
                      doSearchBookings(false);
                    }
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
              else if (row.reportid == 3)
              {
                var propertyid;
                if(row.linked_bookingcode != null)
                {
                  propertyid = row.linked_bookingcode;
                }
                else
                {
                  propertyid = row.linkedbookingcode;
                }
                console.log("report id is 3, the link property id is " + propertyid);
                $.post
                (
                  'ajax_assignboth.php',
                  {
                    uuid: '<?php echo $_SESSION['uuid']; ?>',
                    bookingcode: row.bookingcode,
                    timberid:"",
                    propertyid:propertyid,
                    reportid:row.reportid,
                    archuuid: args.archuuid,
                    inspectoruuid: args.inspectoruuid,
                    usercreateid:row.usercreatedid,
                    usercreatetype:row.usercreatetype
                  },
                  function(result)
                  {
                    var response = JSON.parse(result);

                    if (response.rc == 0)
                    {
                      //doRefreshBookings();
                      doSearchBookings(false);
                    }
                    else
                      noty({text: response.msg, type: 'error', timeout: 10000});
                  }
                );
              }
             
            }
          );
        }
      ); 
      
      $('#divEvents').on
      (
        'changestatus',
        function(ev, args)
        {
          doGridGetSelectedRowData
          (
            'divBookingsG',
            function(row, index)
            {
              $.post
              (
                'ajax_setbookingstatus.php',
                {
                  uuid: '<?php echo $_SESSION['uuid']; ?>',
                  bookingcode: row.bookingcode,
                  status: args.statusid
                },
                function(result)
                {
                  var response = JSON.parse(result);

                  if (response.rc == 0)
                  {
                    //doRefreshBookings();
                    doSearchBookings(false);
                  }
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
        'changestatusboth',
        function(ev, args)
        {
          doGridGetSelectedRowData
          (
            'divBookingsG',
            function(row, index)
            {
              // console.log(args);
              $.post
              (
                'ajax_setbookingstatusboth.php',
                {
                  uuid: '<?php echo $_SESSION['uuid']; ?>',
                  bookingcode: row.bookingcode,
                  status: args.statusid,
                  bookingcode2: args.bookingcode2,
                },
                function(result)
                {
                  var response = JSON.parse(result);

                  if (response.rc == 0)
                  {
                    //doRefreshBookings();
                    doSearchBookings(false);
                  }
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
  <!-- ********************************* ************************************************************************************************************************************-->
  <!-- The upload external PDF button -->
  <iframe name="pdfUpload" style="display:none" src=""></iframe>  
  <form enctype="multipart/form-data" id="uploadPDF_Form" method="POST" action="ajax_uploadExternalPDF.php" target="pdfUpload" style="display:none">
    <input type="file" id="uploadPDF" name="externalPDF" accept="application/pdf,application/vnd.ms-excel" onchange="pdfUploadInput()"/>
    <input type="text" name="bookingcode" value="" id="pdfUploadBookingcode"/>
    <input id="pdfUploadButton" type="submit" name="submitPDF"/>
  </form>
  <!-- *********************************************************************************************************************************************************************** -->
  <!-- Toolbars...                                                                                                                                                              -->
  <div id="tbBookings" style="height: auto; display: none">
    <div style="margin-bottom: 5px;padding-bottom:5px">
      <a href="javascript:void(0)" onClick="doNewBooking()" class="easyui-linkbutton" iconCls="icon-add">New Booking</a>
      <a href="javascript:void(0)" onClick="doEditBooking()" class="easyui-linkbutton" iconCls="icon-edit">Edit Booking</a>
      <a href="javascript:void(0)" onClick="doOpenReport()" class="easyui-linkbutton" iconCls="icon-edit">Open Report</a>
      <?php
        if (SharedIsAdmin())
        {
      ?>
          <a href="javascript:void(0)" onClick="doCopyBooking()" class="easyui-linkbutton" iconCls="icon-duplicate">Copy Booking</a>
          <a href="javascript:void(0)" onClick="doUploadReportPDF()" class="easyui-linkbutton" iconCls="icon-upload">Upload PDF Report</a>
          <a href="javascript:void(0)" onClick="doTaxInvoice()" class="easyui-linkbutton" iconCls="icon-receipt">Tax Invoice</a>
          <a href="javascript:void(0)" onClick="doMarkPaid()" class="easyui-linkbutton" iconCls="icon-payment">Paid</a>
          <a href="javascript:void(0)" onClick="doAssignMember()" class="easyui-linkbutton" iconCls="icon-man">Allocated Arch/Inspect</a>
          <!-- <a href="javascript:void(0)" onClick="doMarkUnCompleted()" class="easyui-linkbutton" iconCls="icon-redo">Architect Reedit</a> -->
          <a href="javascript:void(0)" onClick="doMarkApproved()" class="easyui-linkbutton" iconCls="icon-checkboxes">Approved</a>
          <a href="javascript:void(0)" onClick="doEmailCustomer()" class="easyui-linkbutton" iconCls="icon-email">Email Client</a>
          <a href="javascript:void(0)" onClick="doCancelBooking()" class="easyui-linkbutton" iconCls="icon-remove">Cancel Booking</a>
          <a href="javascript:void(0)" onClick="doChangeStatus()" class="easyui-linkbutton" iconCls="icon-move">Change Status</a>
          <br/>
          <div id="tbSearch" style="margin-top:5px;margin-bottom:5px;border-top:1px solid grey; padding-top:10px">
            <span>Status: </span> 
            <input id="cbSearchReportStatus" class="easyui-combobox" name="status_search" data-options="valueField:'id',textField:'status',data:reportstatus" style="width: 230px;">	
            <span>Client Email: </span>  
            <input type="text" id="fldSearchEmail" class="easyui-textbox" style="width: 200px;">
            <a href="javascript:void(0)" onClick="doSearchBookings(true)" class="easyui-linkbutton" iconCls="icon-search" id="searchButton">Search</a>
            <a href="javascript:void(0)" onClick="doResetSearch()" class="easyui-linkbutton" iconCls="icon-cancel">Reset</a>
            <span>Booking Number: </span>  
            <input type="number" id="fldSearchBookingNo" class="easyui-textbox" style="width: 200px;">
            <a href="javascript:void(0)" onClick="doSearchBookingNo()" class="easyui-linkbutton"  id="searchNoButton" data-options="iconCls:'icon-binoculars',width:'60px'">Find</a>
          </div>

      <?php
        }
        else
        { 
        ?>
          <a href="javascript:void(0)" onClick="doMarkCompleted()" class="easyui-linkbutton" iconCls="icon-orderform">Completed</a>
    <?php
        }
      ?>
      <div style="margin-top:5px;margin-bottom:5px;padding-top:10px">
        <span style="font-weight:bold;color:brown">Total: </span>
        <label id="totalbookings" style="font-weight:bold;color:brown"> </label>
      </div>

      
      <!-- deprecated Functions -->
      <!-- <a href="javascript:void(0)" onClick="doRemoveBooking()" class="easyui-linkbutton" iconCls="icon-remove">Cancel Booking</a>
      <a href="javascript:void(0)" onClick="doClearBooking()" class="easyui-linkbutton" iconCls="icon-clear">Clear Selection</a> -->
     
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
  <div id="dlgNumReporsByType" class="easyui-dialog" title="#Reports by Type" style="width: 1000px; height: 800px;" data-options="resizable: true, modal: false, closable: false, closed: true">
    <div id="divNumReporsByTypeChart" style="width: 98%; height: 80%;"></div>
  </div>

  <div id="dlgNumReporsByMember" class="easyui-dialog" title="#Reports by Member" style="width: 1500px; height: 800px;" data-options="resizable: true, modal: false, closable: false, closed: true">
    <div id="divNumReporsByMemberChart" style="width: 100%; height: 80%;"></div>
  </div>

  <div id="dlgSalesReportBatch" class="easyui-dialog" title="Sales Report by Batch" style="width: 300px; height: 200px;" data-options="resizable: true, modal: false, closable: false, closed: true">
    <table>
      <tr>
        <td>Batch:</td>
        <td><div id="fldSelectSalesBatch" style="width: 100px;"></div></td>
      </tr>
    </table>
  </div>

  <div id="dlgSalesReportDateRange" class="easyui-dialog" title="Sales Report by Date Range" style="width: 300px; height: 200px;" data-options="resizable: true, modal: false, closable: false, closed: true">
    <table>
      <tr>
        <td style="width: 100px;">Date From:</td>
        <td><input id="dtSalesReportDateFrom" class="easyui-datebox" style="width: 120px;"></td>
      </tr>
      <tr>
        <td>Date To:</td>
        <td><input id="dtSalesReportDateTo" class="easyui-datebox" style="width: 120px;"></td>
      </tr>
    </table>
  </div>

  <div id="dlgSuppliersReportBatch" class="easyui-dialog" title="Suppliers Report by Batch" style="width: 300px; height: 200px;" data-options="resizable: true, modal: false, closable: false, closed: true">
    <table>
      <tr>
        <td>Batch:</td>
        <td><div id="fldSelectSuppliersBatch" style="width: 100px;"></div></td>
      </tr>
    </table>
  </div>

  <div id="dlgSuppliersReportDateRange" class="easyui-dialog" title="Suppliers Report by Date Range" style="width: 300px; height: 200px;" data-options="resizable: true, modal: false, closable: false, closed: true">
    <table>
      <tr>
        <td style="width: 100px;">Date From:</td>
        <td><input id="dtSuppliersReportDateFrom" class="easyui-datebox" style="width: 120px;"></td>
      </tr>
      <tr>
        <td>Date To:</td>
        <td><input id="dtSuppliersReportDateTo" class="easyui-datebox" style="width: 120px;"></td>
      </tr>
    </table>
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
        <div title="Client Details" data-options="iconCls: 'icon-man'">
          <table>
            <tr>
              <td>First Name:</td>
              <td><input id="fldNewBookingCustFirstName" class="easyui-textbox" data-options="" style="width: 300px;"></td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td><input id="fldNewBookingCustLastName" class="easyui-textbox" style="width: 300px;"></td>
            </tr>
            <!-- <tr>
              <td>Email:</td>
              <td><input id="fldNewBookingCustEmail" class="easyui-textbox" data-options="iconCls: 'icon-email'" style="width: 300px;"></td>
            </tr> -->
            <tr>
              <td>Email:</td>
                <td>        
                    <input  id="fldNewBookingCustEmail2" class="easyui-tagbox" style="width:400px">
                </td>
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
            <tr id="fldNewBookingQuoteDesTR">
              <td>Quote Type Description:</td>
              <td><div id="fldNewBookingQuoteDes" class="easyui-textbox" multiline="true" style="width: 300px;height:30px"></div></td>
            </tr>
            <tr>
                <td>Agreed Price:</td>
                <td><input id="fldNewBookingBudget" class="easyui-numberbox" data-options="precision: 2, groupSeparator: ',', prefix: '$'" style="width: 120px;"></td>
              </tr>
            <?php
              if (SharedIsAdmin())
              {
            ?>
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
                <tr>
                  <td>Cancellation Fee:</td>
                  <td><input id="fldNewBookingCancellationFee" class="easyui-numberbox" data-options="precision: 2, groupSeparator: ',', prefix: '$'" style="width: 120px;"></td>
                </tr>
                
            <?php
              }
            ?>
            <tr>
              <td style="vertical-align: top;">Notes:</td>
              <td><input id="fldNewBookingNotes" class="easyui-textbox" multiline="true" style="width: 600px; height: 150px"></td>
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

  <div id="dlgChangeStatus" class="easyui-dialog" title="Select Architect & Inspector" style="width: 400px; height: 200px;" data-options="resizable: false, modal: true, closable: false, closed: true">
    <div class="easyui-panel" title="" data-options="fit: true">
      <table>
        <tr>
          <td>Status:</td>
          <td><div id="fldSelectTheStatus" style="width: 300px;"></div></td>
        </tr>
      </table>
    </div>
  </div>

  <div class="easyui-layout" data-options="fit: true">
    <?php require_once("header.php"); ?>
    <?php require_once("footer.php"); ?>

    <div id="p" data-options="region: 'west'" title="Administration Menu" collapsed="true" style="width: 25%; padding: 10px">

      <div class="easyui-accordion" data-options="selected: 0, fit: true">
        <div title="Members" data-options="iconCls:'icon-people'" style="overflow: auto; padding: 10px;">
          <!-- <h3 style= "color:#0099FF;">Members</h3> -->
          <div id="divMembersG" style="width: 98%;height:auto" ></div>
        </div>

        <?php
          if (SharedIsAdmin())
          {
        ?>
            <div title="Reports" data-options="iconCls:'icon-barchart'" style="overflow: auto; padding: 10px;">
              <!-- <h3 style= "color:#0099FF;">Select Report</h3> -->
              <table>
                <tr><td><a id="btnNumReportsByType" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-barchart', width: 240" onclick="doReportNumReportsByType()">#Reports by Type</a></td></tr>
                <tr><td><a id="btnNumReportsByMember" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-barchart', width: 240" onclick="doReportNumReportsByMember()">#Reports by Member</a></td></tr>
                <tr><td><a id="btnSalesReportBatch" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-product', width: 240" onclick="doSalesReportBatch()">Sales Report by Batch</a></td></tr>
                <tr><td><a id="btnSalesReportDateRange" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-calendar', width: 240" onclick="doSalesReportDateRange()">Sales Report by Date</a></td></tr>
                <tr><td><a id="btnSupplierReportBatch" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-product', width: 240" onclick="doSuppliersReportBatch()">Supplier Report by Batch</a></td></tr>
                <tr><td><a id="btnSupplierReportDateRange" href="#" class="easyui-linkbutton" data-options="iconCls:'icon-calendar', width: 240" onclick="doSuppliersReportDateRange()">Supplier Report by Date</a></td></tr>
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
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&callback=initMap&key=AIzaSyCcXBPESLUxA846ZL6JoUefrlclXKFv4zg" async defer></script>
</body>
</html>
