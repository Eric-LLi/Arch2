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

    resetTotalImagesCaptions();
    var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (mode == 'save')
    {
        $('#savingPDFAlert').show('fade');
    }
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
        header: function(currentPage){
            if(currentPage != 1)
            {
               return{
                   image: coverPageLogo,
                   width: 40,
                   height: 40
                   // margin:[10,20,20,20]
               };
            }
        },

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
            // {

            //     stack:
            //         [
            //             {
            //                 // Draw Cover Page image
            //                 image: coverPageLogo,
            //                 width: 160,
            //                 height: 160
            //             },
            //             {
            //                 text:[
            //                     'Archicentre ',
            //                     {
            //                         text:'Australia \n',
            //                         color: 'red'
            //                     },
            //                     {
            //                         text:'Home Warranty \nInspection \n',
            //                         bold:true
            //                     },
            //                     'Report'
            //                 ],
            //                 style: 'coverPageHeader'
            //             }
            //         ],
                //     {
                //         text:'New Home Design',
                //         style: 'pageTopHeader'
                //     },
                //     makeAGap(),
                //     {
                //         text:'Feasibility Study',
                //         style:'thirdHeader'
                //
                //     },
                //     giveMeHugeDraft(mode),
                //     {
                //         alignment: 'justify',
                //         columns: [
                //             {
                //                 stack:[
                //
                //                     makeAGap(),
                //                     {
                //                         text: archHomeFeasibilityReportText1,
                //                         fontSize: 9
                //                     },
                //                     makeAGap(),
                //                     {
                //                         text: archHomeFeasibilityReportText2,
                //                         fontSize: 9
                //                     },
                //                     makeAGap(),
                //                     {
                //                         text: archHomeFeasibilityReportText3,
                //                         fontSize: 9
                //                     }
                //                 ]
                //
                //             },
                //             //ConstructionCoverImage
                //             {
                //                 stack: [
                //                     makeAGap(),
                //                     displayCoverImage('HomeFeasibilityCoverImage')
                //                 ]
                //
                //             }
                //
                //             // displayImage('ConstructionCoverImage')
                //         ],
                //         columnGap: 20
                //     },
                //     {
                //         text: "Client's Details",
                //         style: 'pageTopHeader',
                //         margin: [0, 40, 0, 5]
                //     },
                //      getCustomerDetailsTable(),
                //      makeAGap(),
                //      getAssessmentDetailsTable(),
                //      makeAGap(),
                //      getAssessorDetailsTable()
                // ],
                //pageBreak: 'after'
            //},


            /**
             * (1) Cover Page
             */
            {
                stack:[
                    {
                        columns: [{
                                // Draw Cover Page image
                                image: coverPageLogo,
                                width: 130,
                                height: 130
                            },
                            {
                                text: "Home Warranty Inspection Report",
                                style: 'coverPageHeader'
                                // alignment:'right'
                            }
                        ]
                    },
                    giveMeHugeDraft(mode),
                    // {
                    //     text:'\nHome Warranty Inspection Report',
                    //     style:'pageTopHeader',
                    //     margin:[0,5,0,5]

                    // },
                    {
                        text:'NOTICE TO PURCHASERS',
                        bold:true,
                        fontSize:9,
                        margin:[0,0,0,5]
                    },
                    {
                        text:[
                            NoticeOfPurchases1,
                            NoticeOfPurchases2
                        ],
                        fontSize:9,
                        margin:[0,0,0,8]
                    },
                    {
                        text:NoticeOfPurchases3,
                        fontSize:9,
                        margin:[0,0,0,8]
                    },
                    {
                        text:NoticeOfPurchases4,
                        fontSize:9,
                        margin:[0,0,0,8]
                    },
                    {
                        text:'THIS REPORT IS VALID FOR (6) MONTHS FROM THE DATE OF MOST RECENT INSPECTION.',
                        bold:true,
                        fontSize:10,
                        margin:[0,10,0,10]
                    },
                    getOwnerDetailsTable(),
                    getInspectionDetailsTable(),
                    // getInspectorDetailsTable(),
                    // getReportAuthorisation(),
                    // getDoneWork(),
                    // {
                    //     text:'Inspection Summary',
                    //     style:'pageTopHeader',
                    //     margin:[0,20,0,5]

                    // },
                    // getInspectionSummary(),
                    // {
                    //     text:'Descriptive Summary of Work done by Owner-Builder',
                    //     style:'pageTopHeader',
                    //     margin:[0,20,0,5]
                    // },
                    // getDescriptiveSummary()
                ],
                pageBreak: 'after'
            },
            {
                stack:[
                    getInspectorDetailsTable(),
                    getReportAuthorisation(),
                    getDoneWork(),
                    {
                        text:'Inspection Summary',
                        style:'pageTopHeader',
                        margin:[0,20,0,5]

                    },
                    getInspectionSummary(),
                    {
                        text:'Descriptive Summary of Work done by Owner-Builder',
                        style:'pageTopHeader',
                        margin:[0,20,0,5]
                    },
                    getDescriptiveSummary()

                ],
                pageBreak: 'after'
            },
            /**
             * Inspection Checklist
             */
            {
                stack:[
                    {
                        text:'Inspection Checklist',
                        style:'pageTopHeader',
                        margin:[0,0,0,5]

                    },
                    {
                        text:'Key - as at time of the inspection',
                        style:'fifthHeader'
                    },
                    getKeyTable(),
                    {
                        text:InspectionChecklist,
                        fontSize:9,
                        margin:[0,0,0,5]
                    },
                    getSiteTable(),
                    getBuildingExteriorTable(),
                    getSubFloorTable(),
                    getRoofVoidTable(),
                    getOutBuildingTable(),
                    getServicesTable(),
                    {
                        text:Services1,
                        fontSize:9
                    },
                    {
                        text:Services2,
                        fontSize:9
                    }
                ],
                pageBreak: 'after'
            },
            /**
             * Inspection Checklist Continue
             */
            {
                stack:[
                    giveMeHugeDraft(mode),
                    getLivingBedroomTable1(),
                ],
                pageBreak: 'after'
            },
            {
                stack:[
                    giveMeHugeDraft(mode),
                    getLivingBedroomTable2(),
                ],
                pageBreak: 'after'
            },
            {
                stack:[
                    giveMeHugeDraft(mode),
                    getInternalServiceTable1()
                ],
                pageBreak: 'after'
            },
            {
                stack:[
                    giveMeHugeDraft(mode),
                    getInternalServiceTable2()
                ]
                //pageBreak: 'after'
            },
            /**
             * Images
             */
            {
                stack: [
                    giveMeHugeDraft(mode),
                    makeAGap(),
                    getImagesTable()
                ]
                //pageBreak:'after'
            },
            /**
             * Defects and Incomplete Table
             */
            {
                pageBreak: 'before',
                stack:[
                    giveMeHugeDraft(mode),
                    {
                        text:'Defects and Incomplete Work',
                        style:'pageTopHeader',
                        margin:[0,5,0,5]
                    },
                    getDefectIncompleteTable()
                ]
                // pageBreak: 'after'
            },
            /**
             * Access Limitation Table, Referenced Document
             */
            {
                pageBreak: 'before',
                stack:[
                    giveMeHugeDraft(mode),
                    {
                        text:'Access',
                        style:'pageTopHeader',
                        margin:[0,5,0,5]
                    },
                    getAccessLimitationTable(),
                    {
                        text: 'Attachments',
                        style: 'pageTopHeader',
                        margin:[0,5,0,5]
                    },
                    {
                        text:ReferencedDocuments1,
                        style: 'tableText'
                    },
                    {
                        text: 'http://www.archicentreaustralia.com.au/report_downloads/',
                        link: "http://www.archicentreaustralia.com.au/report_downloads/",
                        color: 'red',
                        decoration: "underline",
                        style: 'tableText',
                        margin:[0,0,0,5]
                    },
                    {
                        text:ReferencedDocuments2,
                        style: 'tableText',
                        margin:[0,5,0,10]
                    },
                    getAttachmentTable()
                ]
                //pageBreak: 'after'
            },


            /**
             *  The Scope of Page & Definition
             * */
            {
                pageBreak: 'before',
                stack: [
                    giveMeHugeDraft(mode),
                    {
                        text: 'Home Warranty Inspection Report',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text:'Scope',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        text: Scope1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: Scope2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: Scope3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'Unless otherwise stated:',
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ol: [
                                            {
                                                text: ScopeBullet1,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet2,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet3,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet4,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet5,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet6,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet7,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet8,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet9,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet10,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: ScopeBullet11,
                                                margin: [0, 0, 0, 3]
                                            }
                                        ]
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        text: Scope4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: Scope5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:'Definitions',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        text:'Inspection Access',
                                        fontSize:12,
                                        bold:true
                                    },
                                    {
                                        text: InspectionAccess1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: InspectionAccess2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: InspectionAccess3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: InspectionAccess4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: InspectionAccess5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: InspectionAccess6,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:'Normal Viewing Position',
                                        fontSize:12,
                                        bold:true
                                    },
                                    {
                                        text: NormalViewingPosition1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: NormalViewingPosition2,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'

                             }
                        ],
                        columnGap: 20
                    }
                ]
                //pageBreak: 'after'
            },

            /**
             * Terms and Conditions
             */

            {
                pageBreak: 'before',
                stack: [
                    giveMeHugeDraft(mode),
                    {
                        text: 'Archicentre Australia Terms & Conditions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text: TermsNConditions1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: TermsNConditions2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: TermsNConditions3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: TermsNConditions4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: TermsNConditions5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ol: [
                                            {
                                                text: TermsNConditionsNumber1,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber2,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber3,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber4,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber5,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber6,
                                                margin: [0, 0, 0, 3]
                                            }
                                        ]
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        start: 7,
                                        ol: [
                                            {
                                                text: TermsNConditionsNumber7,
                                                margin: [0, 0, 0, 3]
                                            },
                                            [
                                                {
                                                    text: TermsNConditionsNumber8,
                                                    margin: [0, 0, 0, 3]
                                                },
                                                {
                                                    type: 'lower-alpha',
                                                    ol: [
                                                        {
                                                            text: TermsNConditionsNumberA,
                                                            margin: [0, 0, 0, 3]
                                                        },
                                                        {
                                                            text: TermsNConditionsNumberB,
                                                            margin: [0, 0, 0, 3]
                                                        },
                                                        {
                                                            text: TermsNConditionsNumberC,
                                                            margin: [0, 0, 0, 3]
                                                        },
                                                        {
                                                            text: TermsNConditionsNumberD,
                                                            margin: [0, 0, 0, 6]
                                                        },
                                                        {
                                                            text: TermsNConditionsNumberE,
                                                            margin: [0, 0, 0, 6]
                                                        },
                                                        {
                                                            text: TermsNConditionsNumberF,
                                                            margin: [0, 0, 0, 6]
                                                        },
                                                        {
                                                            text: TermsNConditionsNumberG,
                                                            margin: [0, 0, 0, 6]
                                                        }
                                                    ]
                                                }

                                            ],
                                            {
                                                text: TermsNConditionsNumber9,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber10,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber11,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber12,
                                                margin: [0, 0, 0, 3]
                                            },
                                            {
                                                text: TermsNConditionsNumber13,
                                                margin: [0, 0, 0, 3]
                                            }
                                        ]
                                    }
                                ],
                                style: 'colText'

                            }
                        ],
                        columnGap: 20
                    },
                    {
                        text:TermsNConditionsFINAL,
                        bold:true,
                        fontSize:9,
                        margin:[3,30,3,0],
                        alignment:'center'
                    }
                ]
            }

        ],
        /**
         * Styles
         * */
        styles: {
            // coverPageHeader: {
            //     fontSize: 50,
            //     italics: true,
            //     color: 'black',
            //     margin: [20, 150, 0, 100]
            // },
            coverPageHeader:{
                fontSize: 24,
                bold: true,
                color: 'red',
                margin: [15, 50, 0, 20]
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
    if (mode == 'save')
    {
        //console.log('click');
        //const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfMake.createPdf(docDefinition).getBase64(function(encodedString){
            var base64 = encodedString;
            //$('#savingPDFAlert').show('fade');
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
            // pdfMake.createPdf(docDefinition).open();
            pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                doSavePDF(encodedString);
            });
        }

    }


}
