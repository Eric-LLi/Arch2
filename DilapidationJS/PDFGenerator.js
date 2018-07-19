/**
 * Created by Fafa on 24/10/17.
 * detect Safari on iOS learn from http://jsfiddle.net/jlubean/dL5cLjxt/ 
 */

function generatePDF(mode) {
    //Prevent multiple request.
    $("button").prop("disabled", true);

    resetImageCounting();
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

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
    var docDefinition = {
        footer: function (currentPage, pageCount) {
            if (currentPage === 1) {
                return {
                    columns: [
                        determineFrontPageFooter(mode),
                        {
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
                            text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                            alignment: 'left',
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
            {
                stack: [{
                        alignment: 'justify',
                        columns: [{
                                image: coverPageLogo,
                                alignment: 'left',
                                width: 130
                            },
                            {
                                text: 'Dilapidation Survey Report',
                                fontSize: 24,
                                bold: true,
                                color: 'red',
                                margin: [0, 50, 0, 0]
                            }
                        ],
                        margin: [0, 0, 0, 30]
                    },
                    giveMeHugeDraft(mode),
                    {
                        table: {
                            // widths: ['*', '*'],
                            body: [
                                [{
                                        border: [true, true, false, true],
                                        text: coverPageText,
                                        fontSize: 9,
                                        margin: [5, 5, 5, 5]

                                    },
                                    {
                                        border: [false, true, true, true],
                                        stack: [
                                            getCoverImage('DilapidationCoverImage')
                                        ],
                                        margin: [5, 5, 5, 5]
                                        //margin:[10,10,10,10]
                                    }

                                ]
                            ]
                        },
                        layout: {
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
                        text: 'Inspection Details',
                        style: 'pageTopHeader',
                        margin: [0, 30, 0, 5]
                    },
                    getCustomerDetailsTable(),
                    makeAGap(),
                    getInspectionDetailsTable(),
                    makeAGap(),
                    getInspectorDetailsTable()
                ],
                pageBreak: 'after'
            },
            /**
             * (2) Definitions
             * */
            {
                stack: [{
                        text: 'Definition',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'ASSESSMENT ACCESS',
                        style: 'pageSubHeader'
                    },
                    {
                        alignment: 'justify',
                        columns: [{
                                stack: [{
                                        text: assessmentAccessDP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessDP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessDP3,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'tableText'
                            },
                            {
                                stack: [{
                                    text: assessmentAccessDP4,
                                    style: 'paragraphMargin'
                                }, {
                                    text: assessmentAccessDP5,
                                    style: 'paragraphMargin'
                                }],
                                style: 'tableText'
                            }
                        ],
                        columnGap: 20
                    },
                    makeAGap(),
                    {
                        text: 'CRACKING IN BRICKWORK',
                        style: 'pageSubHeader'
                    },
                    {
                        text: crackingText,
                        fontSize: 9,
                        alignment: 'justify',
                        margin: [0, 0, 0, 6]
                    },
                    getCrackingTable(),
                    makeAGap(),
                    getSummaryReport()
                ]
            },
            /**
             * (3) Attachments
             * */
            {
                stack: [
                    makeAGap(),
                    {
                        text: 'Attachments',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: [
                            attachmentsDText1,
                            {
                                text: 'http://www.archicentreaustralia.com.au/report_downloads/',
                                link: "http://www.archicentreaustralia.com.au/report_downloads/",
                                color: 'red',
                                decoration: "underline"
                            },
                            attachmentsDText2
                        ],
                        style: 'tableText',
                        alignment: 'justify',
                        margin: [0, 0, 0, 6]
                    },
                    getAttachmentDTable()
                ],
                pageBreak: 'after'
            },
            /**
             * (4) Terms & Conditions
             * */
            {
                stack: [{
                        text: 'Terms & Conditions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {

                        stack: [{
                                text: termsAndConditionsDP1,
                                style: 'paragraphMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsDP2,
                                style: 'paragraphMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsDP3,
                                style: 'paragraphMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsDP4,
                                style: 'paragraphMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsDP5,
                                style: 'paragraphMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsDP6,
                                style: 'paragraphMargin',
                                alignment: 'justify'
                            },
                            {
                                ol: [{
                                        text: termsAndConditionsDOL1,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL2,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL3,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL4,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL5,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL6,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL7,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        type: 'lower-alpha',
                                        ol: [{
                                                text: termsAndConditionsDOL7a,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: termsAndConditionsDOL7b,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: termsAndConditionsDOL7c,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: termsAndConditionsDOL7d,
                                                margin: [0, 0, 0, 6]
                                            }
                                        ]
                                    },
                                    {
                                        text: termsAndConditionsDOL8,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL9,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL10,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL11,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL12,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL13,
                                        margin: [0, 0, 0, 4],
                                        alignment: 'justify'
                                    },
                                    {
                                        text: termsAndConditionsDOL14,
                                        alignment: 'justify'
                                    }
                                ]
                            }
                        ],
                        style: 'tableText'
                    }
                ]
                // pageBreak: 'after'
            },
            /**
             * (5) Photos
             * */
            {
                stack: [
                    // {
                    //     text: 'DILAPIDATION SURVEY REPORT',
                    //     style: 'tableHeader'
                    // },
                    getPhotoTable()
                ]
            }
        ],
        styles: {
            pageTopHeader: {
                fontSize: 17,
                color: 'red',
                bold: true
            },
            pageSubHeader: {
                fontSize: 11,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 6]
            },
            pageSubHeaderBlack: {
                fontSize: 11,
                bold: true,
                margin: [0, 0, 0, 5]
            },
            normalText: {
                fontSize: 9,
                alignment: 'justify'
            },
            tableHeader: {
                fontSize: 10,
                bold: true,
                color: 'red'
            },
            tableText: {
                fontSize: 9
            },
            tableBoldText: {
                fontSize: 9,
                bold: true
            },
            tableBoldTextAlignLeft: {
                fontSize: 9,
                bold: true
            },
            boldText: {
                bold: true
            },
            tableLongText: {
                alignment: 'justify',
                fontSize: 9,
                bold: true
            },
            colText: {
                fontSize: 9
                //margin:[0,5,0,5]
            },
            paragraphMargin: {
                margin: [0, 0, 0, 6]
            },
            paragraphBoldTitleMargin: {
                fontSize: 10,
                bold: true,
                margin: [0, 0, 0, 3]
            },
            colSubHeader: {
                fontSize: 11,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 6]
            }
        }
    };
    // open the PDF in a new window
    //pdfMake.createPdf(docDefinition).open();

    if (mode == 'save') {
        //console.log('click');
        //const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
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
    //if the mode is final or preview, open the pdf directly
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
            // pdfMake.createPdf(docDefinition).open();
            pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                doSavePDF(encodedString);
            });
        }

    }


}