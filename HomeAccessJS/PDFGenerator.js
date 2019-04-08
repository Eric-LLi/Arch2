/**
 * Created by Fafa on 21/3/18.
 */
var btn_genferateHomeAccessReportPDF = function (mode) {
    if ($("#HA_BookingNo").val() === "0") {
        alert("Please select order from main page. ");
        $(location).attr("href", "index.php");
    } else {
        generatePDF(mode);
    }
};

//generalPDF(mode)
function generatePDF(mode) {
     //Prevent multiple request.
     $("button").prop("disabled", true);

    //    console.log("generateHomeAccessReportPDF");
    //reset image number and general notes paragraphs number
    if (mode === 'save') {
        console.log('in Save');
        $('#savingPDFAlert').show('fade');
    }
    resetTotalCounting();
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    //Get all table cells data from Construction Summary table.
    var csData = getTableData_CS();
    //Get all table cells data from Fault Summary table.
    var fsData = getTableData_FS();
    //Get key explaination.
    var keyExData = getKeyExplaination();
    //Get all table cells data from Health Check & Safety Check table.
    var hsCheckData = getTableData_HSCheck();
    //Get all table cells data from Health Check & Safety Check table.
    var rmCheckData = getTableData_RMCheck();
    //Get all table cells data from Energy & Wastage Check table.
    var ewCheckData = getTableData_EWCheck();
    //Get all table cells data from Field Notes.
    var fieldNotesData = getTableData_FieldNotes();
    //Get all table cells data from Health & Safety Concerns.
    var HSConcernsData = getTableData_HSConcerns();
    //Get all table cells data from Repair & Maintenance.
    var RepairMaintenanceData = getTableData_RepairMaintenance();
    //Get all table cells data from Energy Efficiency.
    var EnergyEfficiencyData = getTableData_EnergyEfficiency();
    //Get all table cells data from Attachments.
    var AttachmentsData = getTableData_Attachments();
    //Get photos
    // var getPhotoImgsData = getPhotoImgs();
    //Get PDFs
    // var getSketchImgsData = getSketchImgs();
    //    var imagesPDFData = getImagePDF();

    // Page start drawing from here...
    var docDefinition = {
        footer: function (currentPage, pageCount) {
            if (currentPage === 1) {
                return {
                    columns: [
                        determineFrontPageFooter(mode),                                               
                        {
                            width: 120,
                            text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                            alignment: 'right',
                            margin: [0, 0, 40, 0],
                            fontSize: 10,
                            color: 'grey',
                            bold: true
                        }
                    ]
                };
            } else {
                return {
                    columns: [
                        determineFooter(mode),
                        {
                            width: 120,
                            text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                            alignment: 'right',
                            margin: [10, 0, 40, 0],
                            fontSize: 10,
                            color: 'grey',
                            bold: true
                        }
                    ]
                };
            }
        },
        content: [

            /**
             * (1) Cover Page
             * */
            // {
            //     image: coverPageLogo,
            //     width: 160,
            //     height: 160
            // },
            // giveMeHugeDraft(mode),
            // {
            //     text: [{
            //         text: page1,
            //     }, {
            //         text: page1_2,
            //         color: 'red'
            //     }, {
            //         text: page1_3 + '\n' + page1_4,
            //         bold: true
            //     }],
            //     style: 'coverPageHeader',
            //     pageBreak: 'after'
            // },

            /**
             * (2) Report Detail Page Two
             */
            
            {
                columns: [{
                        // Draw Cover Page image
                        image: coverPageLogo,
                        width: 100,
                        height: 100
                    },
                    {
                        text: page2Header,
                        style: 'coverPageHeader'
                        // alignment:'right'
                    }
                ]
            },
            // {
            //     text: page2Header,
            //     style: "pageTopHeader"
            // },
            giveMeHugeDraft(mode),
            {
                text: page2subHeader,
                margin: [0, 10, 0, 10],
                fontSize: 10
            },
            {
                style: 'tableContent',
                table: {
                    widths: [80, 'auto','*' , 100],
                    body: [
                        [{
                            colSpan: 4,
                            text: $('#HA_DivClientDetails').attr('data-title'),
                            style: 'pageSubHeader'
                        }, {}, {}, {}],
                        [
                            $('#HA_lbClientName').text(), $('#HA_ClientName').val(),
                            {
                                text:$('#HA_lbBookingNo').text()
                            }, $('#HA_BookingNo').val()
                        ],
                        [
                            $('#HA_lbClientPhone').text(), $('#HA_ClientPhone').val(), $('#HA_lbClientMobile').text(), $('#HA_ClientMobile').val()
                        ],
                        [{
                            colSpan: 4,
                            text: $('#HA_DivPropertyDetails').attr('data-title'),
                            style: 'pageSubHeader'
                        }, {}, {}, {}],
                        [
                            $('#HA_lbAddress').text(), {
                                colSpan: 3,
                                text: $('#HA_Address').val()
                            }, {}, {}
                        ],
                        [
                            $('#HA_lbSuburb').text(), $('#HA_Suburb').val(), $('#HA_lbState').text() + $('#HA_State').val(), $('#HA_lbPostcode').text() + $('#HA_Postcode').val()
                        ],
                        [
                            $('#HA_lbDateOfAssessment').text(), $('#HA_DateOfAssessment').val(), $('#HA_lbTimeOfAssessment').text(), $('#HA_TimeOfAssessment').val()
                        ],
                        [
                            $('#HA_lbExistingUse').text(), {
                                colSpan: 3,
                                text: $('#HA_ExistingUse').val()
                            }, {}, {}
                        ],
                        [
                            $('#HA_lbWeatherConditions').text(), {
                                colSpan: 3,
                                text: $('#HA_WeatherConditions').val()
                            }, {}, {}
                        ],
                        [
                            {text:$('#HA_lbVerbalSummary').text()}, $('#HA_VerbalSummary').val(), $('#HA_lbDate').text(), $('#HA_Date').val()
                        ],
                        [{
                            colSpan: 4,
                            text: $('#HA_DivArchitectDetails').attr('data-title'),
                            style: 'pageSubHeader'
                        }, {}, {}, {}],
                        [
                            $('#HA_lbarchitectName').text(), $('#HA_architectName').val(), $('#HA_lbregistrationNumber').text(), $('#HA_registrationNumber').val()
                        ],
                        [
                            $('#HA_lbarchitectAddress').text(), {
                                colSpan: 3,
                                text: $('#HA_architectAddress').val()
                            }, {}, {}
                        ],
                        [
                            $('#HA_lbarchitectEmail').text(), $('#HA_architectEmail').val(), $('#HA_lbarchitectPhone').text(), $('#HA_architectPhone').val(),
                        ],
                        [
                            {
                                colSpan:2,
                                text:$('#HA_lbarchitectRef').text() + "\n"+ $('#HA_architectRef').val()
                            },{},
                            {
                                text: $('#HA_lbarchitectEmail2').text() + "\n"+ $('#HA_architectEmail2').val()
                            },
                            $('#HA_lbarchitectPhone2').text() + "\n" + $('#HA_architectPhone2').val()
                        ]
                    ]
                }
            },
            {
                style: 'tableContent',
                margin:[0,0,0,10],
                table: {
                    widths: ['100%'],
                    body: [
                        [{
                            style: 'pageSubHeader',
                            text: $('#HA_DivDetailsSought').attr('data-title')
                        }],
                        [{
                            text: $('#HA_AdviceSought').val(),
                            fontSize:9
                        }]
                    ]
                } 
            },
            {
               style:{
                    fontSize: 8,
                    //bold: true,
                    margin: [0, 0, 0, 0]
                },
                table:{
                    widths: ['100%'],
                    body:[
                        [
                            {
                                border: [false, true, false, false],
                                text:[
                                    {
                                        text: page2_1 + "\n"
                                    }, 
                                    {
                                        text: page2_2
                                    }
                                   ],
                            }
                        ]
                    ]
                },
                layout:{
                    hLineColor:'#999999',
                    vLineColor:'#999999'
                }
            },

            /**
             * (3) Report Detail Page Three
             */
            {
                pageBreak: 'before',
                text: page3Header,
                style: 'pageTopHeader'
            },
            giveMeHugeDraft(mode),
            {
                text: page3SubHeader,
                style: 'pageSubHeader',
                margin: [0, 0, 0, 10]
            },
            {
                style: 'Contents',
                stack: [{
                    text: page3_1
                }, {
                    text: page3_1_2
                }, {
                    ul: [page3_2, page3_3],
                    margin: [20, 0]
                }, {
                    text: page3_4,
                    margin: [0, 5]
                }, {
                    ul: [page3_5, page3_6],
                    margin: [20, 0]
                }, {
                    text: page3_7,
                    style: 'pageSubHeader',
                    margin: [0, 10]
                }, {
                    text: page3_8
                }, {
                    ul: [page3_9, page3_10, page3_11, page3_12, page3_13, page3_14],
                    margin: [20, 0]
                }, {
                    text: page3_15,
                    margin: [0, 5, 0, 0, ]
                }, {
                    ul: [page3_16, page3_17, page3_18, page3_19, page3_20, page3_21, page3_22],
                    margin: [20, 0]
                }, {
                    text: page3_23,
                    margin: [0, 5, 0, 0]
                }, {
                    text: page3_23_2
                }, {
                    text: page3_24,
                    style: 'pageSubHeader',
                    margin: [0, 10]
                }, {
                    text: page3_25
                }, {
                    text: page3_25_2,
                    pageBreak: 'after'
                }]
            },

            /**
             * (4) Report Detail Page Four
             */
            //Title
            {
                text: page4Header,
                style: 'pageTopHeader'
            },
            giveMeHugeDraft(mode),
            {
                style: 'tableContent',
                //alignment: 'center',
                table: {
                    headerRows: 1,
                    widths: [190, 'auto', '*'],
                    body: [
                        [{
                            colSpan: 3,
                            text: $('#HA_lbCompleteMessage').text(),
                            color: 'red',
                            alignment: 'left'
                        }, {}, {}],
                        [{
                                text: $('#HA_lbCompleteMessage2').text(),
                            },
                            {
                                text: $('#HA_sel1').val(),
                            },
                            {
                                text: $('#HA_lbCompleteMessage3').text() + "\n\n" + $('#HA_NocompleteComment').val(),
                            }
                        ],
                        [{
                                text: $('#HA_lbCompleteMessage4').text(),
                            },
                            {
                                text: $('#HA_sel2').val(),
                            },
                            {
                                text: $('#HA_lbCompleteMessage5').text() + "\n\n" + $('#HA_indicateText').val(),
                            }
                        ]
                    ]
                }
            },
            //Constructure Summary
            {
                style: 'tableContent',
                table: {
                    headerRows: 1,
                    widths: ['*', 'auto', '*', 'auto', '*', 'auto', '*', 'auto', '*', 'auto'],
                    body: csData
                }
            },
            //Fault Summary
            {
                style: 'tableContent',
                table: {
                    headerRows: 1,
                    widths: ['*', 'auto', '*', 'auto', '*', 'auto', '*', 'auto', '*', 'auto'],
                    body: fsData
                }
            },
            //Health Check & Safety Check
            {
                style: 'tableContent',
                table: {
                    headerRows: 1,
                    widths: ['*', 13, '*', 13],
                    body: hsCheckData
                }
            },
            //Repair & Mainentance Check
            {
                style: 'tableContent',
                margin: [0, 0],
                table: {
                    widths: ['*', 'auto', '*', 'auto'],
                    body: rmCheckData
                }
            },
            //Notes
            {
                pageBreak: 'after',
                margin: [0, 0, 0, 30],
                table: {
                    widths: ['*'],
                    body: [
                        [{
                            border: [true, false, true, true],
                            stack: [{
                                    text: 'NOTES:',
                                    bold: true,
                                    fontSize: 12
                                },
                                {
                                    fontSize: 10,
                                    margin: [20, 0],
                                    ol: [
                                        '\t* Gravity fed HWS’s are generally unsuitable for hand held showers',
                                        '\tAccess restrictions'
                                    ]
                                }
                            ]
                        }]
                    ]
                }
            },

            /**
             * (5) Report Detail Page five
             */
            giveMeHugeDraft(mode),
            //Energy & Wastage Check
            {
                style: 'tableContent',
                table: {
                    widths: ['*', 'auto', '*', 'auto'],
                    body: ewCheckData
                }

            },
            //Key Explaination
            {
                alignment: 'center',
                style: 'tableContent',
                table: {
                    widths: ['*', 'auto', '*', 'auto', '*', 'auto', '*', 'auto', '*'],
                    body: keyExData
                }
            },
            //Field Notes
            {
                style: 'tableContent',
                table: {
                    widths: ['*', 'auto', '*', 150],
                    body: fieldNotesData
                }
            },
            //Reminder
            {
                pageBreak: 'after',
                fontSize: 10,
                color: '#CC0000',
                bold: true,
                fillColor: '#CCCCCC',
                layout: {
                    hLineColor: '#CC0000',
                    vLineColor: '#CC0000'
                },
                table: {
                    widths: ['*'],
                    body: [
                        [{
                            text: [
                                page6 + '\n\n', {
                                    text: page6_2,
                                    decoration: 'underline'
                                },
                                ' ' + page6_2_2 + '\n\n', page6_3
                            ]
                        }]
                    ]
                }
            },

            /**
             * (6) Report Detail Page six
             */
            giveMeHugeDraft(mode),
            //Health & Safety Concerns
            {
                style: 'tableContent',
                table: {
                    widths: [80, '*', 130, 80],
                    body: HSConcernsData
                }
            },
            //Repair Maintenance
            {
                style: 'tableContent',
                table: {
                    widths: [80, '*', 130, 80],
                    body: RepairMaintenanceData
                }
            },

            /**
             * (7) Report Detail Page seven
             */
            giveMeHugeDraft(mode),
            //Energy Efficiency - Optional
            {
                style: 'tableContent',
                table: {
                    widths: [80, '*', 130, 80],
                    body: EnergyEfficiencyData
                }
            },
            //Attachments
            {
                pageBreak: 'before',
                text: $('#HA_DivAttachments').attr('data-title'),
                style: 'pageTopHeader'
            },
            {
                style: 'Contents',
                margin: [0, 0, 0, 10],
                text: [{
                        text: page10_2
                    },
                    {
                        text: page10_2_2,
                        decoration: 'underline',
                        color: 'red'
                    },
                    {
                        text: page10_2_3,

                    }
                ]
            },
            {
                style: 'tableContent',
                table: {
                    widths: [130, '*', 130, '*', 130, '*'],
                    body: AttachmentsData
                }
            },
            //Definitions
            {
                text: page10_Header2,
                style: 'pageTopHeader'
            },
            {
                pageBreak: 'after',
                style: 'Contents',
                columns: [{
                    text: page10_3,
                    width: '*'
                }, {
                    text: page10_4,
                    width: '*'
                }]
            },

            /**
             * (8) Report Detail Page eight
             */
            giveMeHugeDraft(mode),
            //Terms & Conditions
            {
                text: page11Header,
                style: 'pageTopHeader'
            },
            {

                style: 'Contents',
                columns: [{
                    width: 250,
                    stack: [
                        page11_body,
                        {
                            margin: [20, 0, 0, 0],
                            ol: [
                                page11_1, page11_2, page11_3, page11_4, page11_5, page11_6, page11_7
                            ]
                        }
                    ]
                }, {
                    width: '*',
                    stack: [{
                        margin: [40, 0, 0, 0],
                        start: 8,
                        ol: [
                            page11_8, page11_9, page11_10, page11_11, page11_12, page11_13
                        ]
                    }]
                }]
            },

            /**
             * (9) Report Detail Page night
             */
            giveMeHugeDraft(mode),
            //            //Photos title
            //            {
            //                text: $('#HA_DIVPhotos').attr('data-title'),
            //                style: 'pageTopHeader'
            //            },

            //Photos
            getPhotoData(),
            // {
            //     layout: 'noBorders',
            //     table: {
            //         widths: [250, 250],
            //         headerRows: 1,
            //         body: getPhotoImgsData
            //     }
            // },

            /**
             * (10) Report Detail Page ten
             */
            giveMeHugeDraft(mode),
            //            //Sketch title
            //            {
            //                text: $('#HA_DIVSketchs').attr('data-title'),
            //                style: 'pageTopHeader'
            //            },
            //Sketch imgs
            getSketchImgs(),
            // {
            //     layout: 'noBorders',
            //     pageBreak: 'before',
            //     table: {
            //         widths: [500],
            //         headerRows: 1,
            //         body: getSketchImgsData
            //     }
            // }
        ],
        styles: {
            coverPageHeader: {
                fontSize: 22,
                bold: true,
                color: 'red',
                margin: [15, 30, 0, 15]
            },
            pageTopHeader: {
                fontSize: 20,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 10]
            },
            pageSubHeader: {
                fontSize: 12,
                color: 'red',
                bold: true,
                margin: [0, 3, 0, 3]
            },
            tableContent: {
                fontSize: 10,
                //bold: true,
                margin: [0, 0, 0, 15]
            },
            Contents: {
                fontSize: 10
            },
            colText: {
                fontSize: 9
                //margin:[0,5,0,5]
            },

        }
    };
    if (mode === 'save') {
        pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
            var base64 = encodedString;
            doSavePDF(base64);
        });
    }
    else if(mode == "preview"){
        console.log("This is preview mode!!");
        pdfMake.createPdf(docDefinition).open();

        //Prevent multiple request.
        $("button").prop("disabled", false);
    }
    //if the mode is final or preview, open the pdf directly, depends on what device the user is using
    else {
        if (isMobile.any()) {
            if (isSafari && iOS) {
                console.log("IOS system!");
                //alert("You are using Safari on iOS!");
                // pdfMake.createPdf(docDefinition).open();
                pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                    doSavePDF(encodedString);
                });
            } else {
                console.log("Android system!!");
                //alert("You are not using Safari on iOS!");
                // var reader = new FileReader();

                // pdfMake.createPdf(docDefinition).getBlob(function (blob) {
                //     reader.onload = function (e) {
                //         //window.location.href = reader.result;
                //         window.open(reader.result, '_blank');
                //     };
                //     reader.readAsDataURL(blob);
                // });
                pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                    doSavePDF(encodedString);
                });
            }
        } else {
            console.log("It is on pc");
            // window.open("pdfreport/1778.pdf", "_blank");
            pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                doSavePDF(encodedString);
            });
        }
    }
}