/**
 * Created by Fafa Lai on 24/10/17.
 */

/**
 * Core function of the PDF generator
 * detect Safari on iOS learn from http://jsfiddle.net/jlubean/dL5cLjxt/ 
 * */
function generatePDF(mode) {
    //Prevent multiple request.
    $("button").prop("disabled", true);

    // Page start drawing from here...
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

    var docDefinition = 
    {
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
                                text: "New Home Feasibility Report",
                                style: 'coverPageHeader'
                                // alignment:'right'
                            }
                        ]
                    },
                    {
                        text:'New Home Design',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    giveMeHugeDraft(mode),

                    //get cover image and text
                    {
                        table:{
                            // widths: ['*', '*'],
                            body:[
                                [
                                    {
                                        colSpan:2,
                                        text:'Feasibility Study',
                                        border: [true, true, true, false],
                                        style:'thirdHeader'
                                        //margin:[10,30,10,10]
                                    },
                                    {}
                                ],
                                [
                                    {
                                        text: archHomeFeasibilityReportText1,
                                        border: [true, false, false, false],
                                        fontSize: 9
                                    },
                                    {
                                        rowSpan:3,
                                        border: [false, false, true, true],
                                        stack: [
                                            getCoverImage('HomeFeasibilityCoverImage')
                                        ]
                                        //margin:[10,10,10,10]
                                    }

                                ],
                                [
                                    {
                                        text: archHomeFeasibilityReportText2,
                                        border: [true, false, false, false],
                                        fontSize: 9
                                    },
                                    ''

                                ],
                                [
                                    {
                                        text: archHomeFeasibilityReportText3,
                                        border: [true, false, false, true],
                                        fontSize: 9
                                    },
                                    ''
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
                        text: "Client's Details",
                        style: 'pageTopHeader',
                        margin: [0, 30, 0, 5]
                    },
                     getCustomerDetailsTable(),
                     makeAGap(),
                     getAssessmentDetailsTable(),
                     makeAGap(),
                     getAssessorDetailsTable()
                ],
                pageBreak: 'after'
            },

            /**
             * (2) The Scope of Page
             * */
            {
                stack: [
                    {
                        text: 'The Scope of this Report',
                        style: 'pageTopHeader'
                    },
                    {
                        text:'This Report is based on a meeting with you to discuss your requirements and objectives.',
                        fontSize:9,
                        margin:[0,10,0,0]
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text:'What is included in this report',
                                        style: 'pageSubHeader'
                                    },
                                    splitTextArea('includedScope')
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        text:'What is not included in this report',
                                        style: 'pageSubHeader'
                                    },
                                    splitTextArea('notIncludedScope')
                                ],
                                style: 'colText'

                             }
                        ],
                        columnGap: 20
                    },
                    makeAGap(),
                    {
                        text:'Notes:',
                        style:'fifthHeader'
                    },
                    {
                        text:archHomeFeasibilityNotes1,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archHomeFeasibilityNotes2,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archHomeFeasibilityNotes3,
                        fontSize:9
                    }
                ],
                pageBreak: 'after'
            },

            /**
             * (3) Existing Site
             */

            {
                stack:[
                    {
                        text: 'Existing Site',
                        style: 'thirdHeader'
                    },
                    makeAGap(),
                    {
                        text:'The following points describe your property:',
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:'PROPERTY',
                        style:'fifthHeader'
                    },
                    {
                        text:getTextArea('property'),
                        fontSize:9,
                        margin:[0,5,0,0]
                    },
                    makeAGap(),
                    {
                        text:'CLIENT REQUIREMENTS',
                        style:'fifthHeader'
                    },
                    {
                        text:getTextArea('client_requirements'),
                        fontSize:9,
                        margin:[0,5,0,0]
                    },
                    makeAGap(),
                    {
                        text:'IMPORTANT FEATURES FUNCTIONS OR ELEMENTS',
                        style:'fifthHeader'
                    },
                    {
                        text:getTextArea('features'),
                        fontSize:9,
                        margin:[0,5,0,0]
                    },
                    makeAGap(),
                    {
                        text:'BUDGET',
                        style:'fifthHeader'
                    },
                    {
                        text:getTextArea('budget'),
                        fontSize:9,
                        margin:[0,5,0,0]
                    },
                    makeAGap(),
                    {
                        text: 'Design Consideration',
                        style: 'thirdHeader'
                    },
                    {
                        text:'The following notes outline the items that were considered in the preparation of the Design:',
                        fontSize:9
                    },
                    {
                        text:getTextArea('designConsiderations'),
                        fontSize:9,
                        margin:[0,5,0,0]
                    },
                    makeAGap(),
                    {
                        text: 'Design Sustainability Features',
                        style: 'thirdHeader'
                    },
                    {
                        text:'The following notes outline some of the proposed sustainability features of the Design:',
                        fontSize:9
                    },
                    {
                        text:getTextArea('designSustainabilityFeatures'),
                        fontSize:9,
                        margin:[0,5,0,0]
                    },
                    makeAGap(),
                    {
                        text: 'Relevant Required Approvals',
                        style: 'thirdHeader'
                    },
                    {
                        text:archHomeApprovals1,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archHomeApprovals2,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archHomeApprovals3,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archHomeApprovals4,
                        fontSize:9
                    },
                    makeAGap(),
                    getRequiredApprovals()

                ],
                pageBreak:'after'
            },
            /**
             * (4) Broad Opinion of Cost
             */
            {
                stack:[
                    {
                        text:'Broad Opinion of Cost',
                        style:'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text:archHomeCost1,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        table:{
                            body:[
                                [{
                                    text:archHomeCost2,
                                    fontSize:9
                                }]
                            ]
                        },
                        layout:{
                            hLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? 1 : 1;
                            },
                            vLineWidth: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? 1 : 1;
                            },
                            hLineColor: function (i, node) {
                                return (i === 0 || i === node.table.body.length) ? '#6FA8DC' : '#6FA8DC';
                            },
                            vLineColor: function (i, node) {
                                return (i === 0 || i === node.table.widths.length) ? '#6FA8DC' : '#6FA8DC';
                            }
                        }

                    },
                    makeAGap(),
                    {
                        text:archHomeCost3,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archHomeCost4,
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archHomeCost5,
                        fontSize:9
                    },
                    makeAGap(),
                    getCostTable(),
                    makeAGap()

                ],
                pageBreak:'after'
            },
            /**
             * (5) Involved Page
             */
            {
                stack:[
                    {
                        text:'Who else is involved?',
                        style:'pageTopHeader',
                        margin:[0,0,0,10]
                    },
                    {
                        text:'Many people are also unclear of the role of other consultants.',
                        fontSize:9
                    },
                    makeAGap(),
                    {
                        text:archInvolved1,
                        fontSize:9
                    },
                    makeAGap(),
                    getPeopleInvolvedTable(),
                    makeAGap(),
                    {
                        text:archInvolved2,
                        fontSize:9
                    }

                ]
                //pageBreak:'after'

            },
            /*
             (6) Drawings
             */
            {
                
                stack: [
                    // getDrawings('homeDrawing0', 'homeDrawingText0'),
                    // getDrawings('homeDrawing1', 'homeDrawingText1'),
                    // getDrawings('homeDrawing2', 'homeDrawingText2'),
                    // getDrawings('homeDrawing3', 'homeDrawingText3')
                    getImagesTable()
                ]
            },
            /**
             * (6)Attachments
             * */
            {
                pageBreak: 'before',
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
                        style: 'tableText',
                        alignment: 'justify',
                        margin: [0, 0, 0, 6]
                    },
                    getAttachmentTable(),
                    makeAGap(),
                    {
                        text:'Thank you',
                        style:'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text:thankYou,
                        fontSize:9
                    }
                ],
               
            },
            // /**
            //  * (5)Terms and Conditions
            //  * */
            {
                pageBreak: 'before',
                stack: [
                    {
                        text: 'Terms & Conditions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text: termConditionText1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionText2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionText3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionText4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionText5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: "These Terms and Conditions:",
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        separator: ['(', ')'],
                                        ol: [
                                            {
                                                text: termConditionList1,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionList2,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            }

                                        ]

                                    },
                                    {
                                        text: 'The Report has been prepared by the registered architect (named within), with reasonable care, subject to the following:',
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ol: [
                                            {
                                                text: termConditionBulletList1,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList2,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList3,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList4,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            }
                                        ]
                                    }

                                ], style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        start: 5,
                                        ol: [
                                            {
                                                text: termConditionBulletList5,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList6,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList7,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList8,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList9,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList10,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList11,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList12,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList13,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList14,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList15,
                                                style: 'bulletMargin',
                                                alignment: 'justify'
                                            },
                                            {
                                                text: termConditionBulletList16,
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
            // pageTopHeader: {
            //     fontSize: 17,
            //     color: 'red',
            //     bold: true
            // },
            colText: {
                fontSize: 9
                //margin:[0,5,0,5]
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
        }
    };
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
    else if(mode == "preview"){
        console.log("This is preview mode!!");
        pdfMake.createPdf(docDefinition).open();

        //Prevent multiple request.
        $("button").prop("disabled", false);
    }
    //if the mode is final or preview, open the pdf directly, depends on what device the user is using
     else
     {
         if( isMobile.any() )
         {
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
            
         }
         else
         {
             console.log("It is on pc");
            //  pdfMake.createPdf(docDefinition).open();
            pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                doSavePDF(encodedString);
            });
         }

     }
}