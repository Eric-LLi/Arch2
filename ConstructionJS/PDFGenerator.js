/**
 * Created by Fafa Lai on 8/10/17.
 */

/**
 * Core function of the PDF generator
 * detect Safari on iOS learn from http://jsfiddle.net/jlubean/dL5cLjxt/ 
 * */
function generatePDF(mode) {
    resetImageCounting();
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // Page start drawing from here...
    var docDefinition = {
        footer: function (currentPage, pageCount) {
            if (currentPage === 1)
            {
                return {
                    columns: [
                        determineFrontPageFooter(mode),
                        {
                            text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                            alignment: 'right',
                            margin: [0, 0, 40, 0],
                            fontSize: 10,
                            color:'grey',
                            bold:true
                        }
                    ]
                };
            }
            else
            {
                return {
                    columns: [
                        determineFooter(mode),
                        {
                            text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                            alignment: 'left',
                            margin: [10, 0, 40, 0],
                            fontSize: 10,
                            color:'grey',
                            bold:true
                        }
                    ]
                };
            }
        },
        content: [
            /**
             * (1) Cover Page
             * */
            {

                stack: [

                    {
                        columns: [
                            {
                                // Draw Cover Page image
                                image: coverPageLogo,
                                width: 130,
                                height: 130
                            },
                            {
                                text: 'Construction Quality Assurance Assessment Report',
                                style: 'coverPageHeader'
                                // alignment:'right'
                            }
                        ]
                    },
                    giveMeHugeDraft(mode),

                    {
                        table:{
                            // widths: ['*', '*'],
                            body:[
                                [
                                    {
                                        border: [true, true, false, true],
                                        text: ConstructionReportText,
                                        fontSize: 9,
                                        margin:[5,5,5,5]

                                    },
                                    {
                                        border: [false, true, true, true],
                                        stack: [
                                            getCoverImage('ConstructionCoverImage')
                                        ],
                                        margin:[5,5,5,5]
                                        //margin:[10,10,10,10]
                                    }

                                ]
                            ]
                        },
                        layout:{
                            hLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? 2 : 1;
                            },
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                            },
                            hLineColor: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? '#FFE599' : '#FFE599';
                            },
                            vLineColor: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? '#FFE599' : '#FFE599';
                            }
                        }
                    },
                    {
                        text: 'Construction Quality Assurance Assessment Details',
                        style: 'pageTopHeader',
                        margin: [0, 30, 0, 5]
                    },

                     makeAGap(),
                     getCustomerDetailsTable(),
                     makeAGap(),
                     getAssessmentDetailsTable(),
                     makeAGap(),
                     getAssessorDetailsTable()
                    // makeAGap(),
                    // getPropertySummaryTable(),
                    // makeAGap()
                ],
                pageBreak: 'after'
            },
            /**
             *  (2) ASSESSMENT STAGE REVIEWED, SUMMARIES
             */
            {
                stack:[
                    getAssessmentStageReviewed(),
                    makeAGap(),
                    getAssessmentExtent(),
                    makeAGap(),

                    {
                        text:'Summaries',
                        style:'thirdHeader',
                        margin: [0, 0, 0, 10]
                    },
                    getConstructionSummary(),
                    makeAGap(),
                    {
                        table:{
                            widths:['*'],
                            body:[
                                [
                                    {
                                        text:'ASSESSMENT SUMMARY',
                                        style:'tableHeader'
                                    }
                                ],
                                [
                                    {
                                        text:getIt('assessmentSummary'),
                                        fontSize:9
                                    }
                                ]
                            ]
                        },
                        layout: {
                            hLineColor: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? '#D9D7D7' : '#D9D7D7';
                            },
                            vLineColor: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? '#D9D7D7' : '#D9D7D7';
                            }
                        }
                    }

                ],
                pageBreak: 'after'
            },
            /**
             * (4) The Scope of Inspection Page
             * */
            {
                stack: [
                    {
                        text: 'The Scope of Service',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text: scopeOfInspectionP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfInspectionP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfInspectionP3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfInspectionP4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfInspectionP5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfInspectionP6,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:'For Strata, Stratum and Company Title Properties',
                                        fontSite:16,
                                        bold:true,
                                        color:'red',
                                        alignment:'left',
                                        margin: [0, 8, 0, 6]
                                    },
                                    {
                                        text:scopeOfInspectionP7
                                    },
                                    makeAGap(),
                                    {
                                        text: 'WHAT IS INCLUDED IN YOUR REPORT',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        text: whatIncText,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ul:[
                                            {
                                                text:'Observed building defects;',
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:'Observed incomplete work;',
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:'Observed area or items of poor quality workmanship;',
                                                style: 'bulletMargin'
                                            }
                                        ]
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        text: 'WHAT IS NOT RECORDED IN YOUR REPORT',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        ul: [
                                                {
                                                    text:whatNotRecordedP1,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP2,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP3,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP4,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP5,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP6,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP7,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP8,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP9,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotRecordedP10,
                                                    style: 'bulletMargin'
                                                }
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'Assessment Access',
                                        style: 'pageTopHeader',
                                        margin:[0,0,0,8]
                                    },
                                    {
                                        text: assessmentAccessP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessP3,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'
                            }
                        ],
                        columnGap: 20
                    }
                ],
                pageBreak: 'after'
            },

            /**
             * (5)Attachment Page, Terms and Conditions
             * */
            {
                stack:[
                    {
                        text: 'Attachments',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: [
                            attachmentText1,
                            {
                                text: 'http://www.archicentreaustralia.com.au/report_downloads/',
                                link: "http://www.archicentreaustralia.com.au/report_downloads/",
                                color: 'red',
                                decoration: "underline"
                            },
                            attachmentText2
                        ],
                        fontSize: 9
                    },


                    makeAGap(),
                    getAttachmentTable(),
                    makeAGap(),
                    {
                        text: 'Terms & Conditions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns:[
                            {
                                stack:[
                                    {
                                        text:termsConditionsP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:termsConditionsP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:termsConditionsP3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:termsConditionsP4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:termsConditionsP5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ol:[
                                            {
                                                text: termsConditionsUl1,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl2,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl3,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl4,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl5,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl6,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            }
                                        ]
                                    }

                                ], style: 'colText'
                            },
                            {
                                stack:[
                                    {
                                        start: 7,
                                        ol:[
                                            {
                                                text: termsConditionsUl7,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl8,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl9,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl10,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termsConditionsUl11,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            }
                                        ]
                                    }

                                ],
                                style: 'colText'
                            }

                        ],
                        columnGap: 20
                    }

                ],
                pageBreak: 'after'

            },

            /*
                Construction Quality Assurance Assessment Report
             */
            {
                stack:[
                    {
                        text:'Construction Quality Assurance Assessment Report',
                        style:'pageTopHeader',
                        margin:[0,0,0,5]
                    },
                    {
                        text:reportText,
                        alignment:'justify',
                        fontSize:9
                    },
                    makeAGap(),
                    getListOfDefective(),
                    makeAGap(),
                    getExternalElements(),
                    makeAGap(),
                    getInternalAreas(),
                    makeAGap(),
                    {
                        text:'*Appliances e.g. Air conditioning, heating, fans etc. have been turned on, but operational performance has not been tested.' +
                        '\n **These items have been visually assessed unless otherwise noted but have not been tested for operation or compliance.',
                        fontSize:9

                    }


                ]
                // pageBreak: 'after'
            },

            /*
                Construction Images max 30,two images per page
             */
            {
                stack:[
                    getConstructionImagesTable()
                ]
            }




        ],
        /**
         * Styles
         * */
        styles: {
            coverPageHeader: {
                fontSize: 26,
                bold: true,
                color: 'red',
                margin: [20, 50, 0, 50]
            },
            firstHeader: {
                fontSize: 20,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 20]
            },
            secondHeader: {
                fontSize: 17,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 10]
            },
            thirdHeader: {
                fontSize: 15,
                color: 'red',
                bold: true
            },
            fourthHeader: {
                fontSize: 20,
                color: 'red',
                bold: true
            },
            fifthHeader: {
                fontSize: 12,
                color: 'red',
                bold: true
            },
            paragraph1: {
                fontSize: 11,

                margin: [5, 2, 10, 100]
            },
            coverPageText: {
                margin: [0, 40, 0, 0]
            },
            coverPageSubHeader: {
                fontSize: 22,
                bold: true,
                color: 'red',
                margin: [0, 55, 0, 0]
            },
            boldText: {
                bold: true
            },
            table: {
                margin: [0, 15, 0, 15]
            },
            tableHeader: {
                fontSize: 10,
                bold: true,
                color: 'red'
            },
            pageTopHeader: {
                fontSize: 17,
                color: 'red',
                bold: true
            },
            tightTable: {
                margin: [0, 0, 30, 0]
            },
            smallText: {
                fontSize: 10,
                margin: [5, 2, 10, 100]
            },
            rowHeader: {
                fontSize: 12,
                bold: true
            },
            rowText: {
                fontSize: 12
            },
            tableBoldTextAlignLeft: {
                fontSize: 9,
                bold: true
            },
            pageTopHeader: {
                fontSize: 17,
                color: 'red',
                bold: true
            },
            colText: {
                fontSize: 9
            },
            paragraphMargin: {
                margin: [0, 0, 0, 6]
            },
            pageSubHeader: {
                fontSize: 11,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 6]
            },
            bulletMargin: {
                margin: [0, 0, 0, 5]
            },
            tableText: {
                fontSize: 9
            },
            tableLongBoldJustifiedText: {
                fontSize: 9,
                bold: true,
                alignment: 'justify'
            }
            // key: {
            //     fontSize: 10,
            //     bold: true,
            //     color: 'red',
            //     margin: [0, 0, 0, 5]
            // },
            // coverHeader:{
            //     fontSize: 22,
            //     color: 'red',
            //     bold: true
            // },
            // pageTopHeader: {
            //     fontSize: 17,
            //     color: 'red',
            //     bold: true
            // },
            // pageSubHeader: {
            //     fontSize: 13,
            //     color: 'red',
            //     bold: true,
            //     margin: [0, 0, 0, 5]
            // },
            // coverText:{
            //     fontSize: 12,
            //     alignment: 'justify'
            //
            // },
            // normalText: {
            //     fontSize: 9,
            //     alignment: 'justify'
            // },
            // tableHeader: {
            //     bold: true,
            //     color: 'red'
            // },
            // boldText: {
            //     bold: true
            // },
            // colText: {
            //     fontSize: 9,
            //     margin: [5, 2, 10, 100]
            // },
            // paragraphMargin: {
            //     margin: [0, 0, 0, 6]
            // },
            // paragraphBoldTitleMargin: {
            //     fontSize: 10,
            //     bold: true,
            //     margin: [0, 0, 0, 3]
            // },
            // colSubHeader: {
            //     fontSize: 13,
            //     color: 'red',
            //     bold: true,
            //     margin: [0, 0, 0, 6]
            // }
        }
    };
    // var imageNumber = $("#ConstructionImages").find("img").length;
    // console.log(imageNumber);
    // Open a new tab and show the PDF
    //pdfMake.createPdf(docDefinition).open();


    if (mode == 'save')
    {
        //console.log('click');
        //const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfMake.createPdf(docDefinition).getBase64(function(encodedString){
            var base64 = encodedString;
            $('#savingPDFAlert').show('fade');
            doSavePDF(base64);
            //console.log(base64);
        });

    }
    //if the mode is final or preview, open the pdf directly
    else
    {
        if( isMobile.any() )
        {
            if (isSafari && iOS) 
            {
                //alert("You are using Safari on iOS!");
                pdfMake.createPdf(docDefinition).open();
            }
            else
            {
                var reader = new FileReader();

                pdfMake.createPdf(docDefinition).getBlob(function(blob){
                    reader.onload = function(e){
                        //window.location.href = reader.result;
                        window.open(reader.result,'_blank');
                    };
                    reader.readAsDataURL(blob);
                });
            }

        }
        else
        {
            console.log("It is on pc");
            pdfMake.createPdf(docDefinition).open();
        }

    }


}