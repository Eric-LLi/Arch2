/**
 * Created by Fafa Lai on 8/10/17.
 */

/**
 * Core function of the PDF generator
 * */
function generateConstructionPDF(mode) {
    // Page start drawing from here...

    var docDefinition = {
        footer: function (currentPage, pageCount) {
            return {
                columns: [
                    // {
                    //     image: footerImage,
                    //     alignment: 'left',
                    //     margin: [25, 0, 0, 0],
                    //     width: 380,
                    //     height: 28
                    // },
                    determineFooter(mode),
                    {
                        text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                        alignment: 'right',
                        margin: [0, 0, 25, 0]
                    }
                ]
            };
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
                        alignment: 'justify',
                        columns: [
                            {
                                text: ConstructionReportText,
                                style: 'coverPageText',
                                fontSize: 9
                            },
                            //ConstructionCoverImage
                            {
                                stack: [
                                    displayCoverImage('ConstructionCoverImage')
                                ]

                            }

                            // displayImage('ConstructionCoverImage')
                        ],
                        columnGap: 20
                    },
                    {
                        text: 'Construction Quality Assurance Assessment Details',
                        style: 'pageTopHeader',
                        margin: [0, 55, 0, 5]
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
                        text: 'Attachment',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        text: attachmentsText,
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


                ],
                pageBreak: 'after'
            },

            /*
                Construction Images max 30,two images per page
             */
            {
                stack:[
                    getImagesTable()
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
                margin: [20, 50, 0, 100]
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
    var imageNumber = $("#ConstructionImages").find("img").length;
    console.log(imageNumber);
    // Open a new tab and show the PDF
    pdfMake.createPdf(docDefinition).open();


}