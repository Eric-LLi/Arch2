/**
 * Created by Fafa Lai on 8/10/17.
 */

/**
 * Core function of the PDF generator
 * */
function generateAdvicePDF(mode) {
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
                                text: "Architect's Advice Report",
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
                                text: archAdviceReportText,
                                style: 'coverPageText',
                                fontSize: 9
                            },
                            //ConstructionCoverImage
                            {
                                stack: [
                                    displayCoverImage('AdviceCoverImage')
                                ]

                            }

                            // displayImage('ConstructionCoverImage')
                        ],
                        columnGap: 20
                    },
                    {
                        text: "Architect's Advice Report Details",
                        style: 'pageTopHeader',
                        margin: [0, 55, 0, 5]
                    },

                     makeAGap(),
                     getCustomerDetailsTable(),
                     makeAGap(),
                     getAssessmentDetailsTable(),
                     makeAGap(),
                     getAssessorDetailsTable()
                ],
                pageBreak: 'after'
            },

            /**
             * (2) The Scope of Advice Page
             * */
            {
                stack: [
                    {
                        text: 'Report Scope',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text:'Included in this Report..',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        text: whatIncText1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: whatIncText2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: whatIncText3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ul:[
                                            {
                                                text:whatIncBulletList1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:whatIncBulletList2,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:whatIncBulletList3,
                                                style: 'bulletMargin'
                                            }
                                        ]

                                    },
                                    {
                                        text:whatIncText4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ul:[
                                            {
                                                text:whatIncBulletList4,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:whatIncBulletList5,
                                                style: 'bulletMargin'
                                            }
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'Not included in this Report',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        text: whatNotIncText,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ul:[
                                            {
                                                text:whatNotIncBulletList1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:whatNotIncBulletList2,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:whatNotIncBulletList3,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:whatNotIncBulletList4,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text:whatNotIncBulletList5,
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
                                        ul: [
                                                {
                                                    stack:[
                                                        {
                                                            text:whatNotIncBulletList6,
                                                            style:'bulletMargin'
                                                        },
                                                        {
                                                            ul:[
                                                                {
                                                                    text:whatNotIncBulletList6a,
                                                                    style:'bulletMargin'
                                                                },
                                                                {
                                                                    text:whatNotIncBulletList6b,
                                                                    style:'bulletMargin'
                                                                },
                                                                {
                                                                    text:whatNotIncBulletList6c,
                                                                    style:'bulletMargin'
                                                                },
                                                                {
                                                                    text:whatNotIncBulletList6d,
                                                                    style:'bulletMargin'
                                                                },
                                                                {
                                                                    text:whatNotIncBulletList6e,
                                                                    style:'bulletMargin'
                                                                },
                                                                {
                                                                    text:whatNotIncBulletList6f,
                                                                    style:'bulletMargin'
                                                                },
                                                                {
                                                                    text:whatNotIncBulletList6g,
                                                                    style:'bulletMargin'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    text:whatNotIncBulletList7,
                                                    style: 'bulletMargin'
                                                },
                                                {
                                                    text:whatNotIncBulletList8,
                                                    style: 'bulletMargin'
                                                }
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'Report Standard',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        text:reportStandard1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:reportStandard2,
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
             * (3) Advice Summary Page
             */
            {
                stack:[
                    {
                        text:"Architect's Advice",
                        style:'pageTopHeader'
                    },
                    makeAGap(),
                    getAdviceTable()

                ],
                pageBreak:'after'
            },

            /**
             * (4)Attachments
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
                        text: attachments,
                        fontSize: 9
                    },
                    makeAGap(),
                    getAttachmentTable(),
                    makeAGap(),
                    {
                        text:'Definitions',
                        style:'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        columns:[
                            {
                                stack:[
                                    {
                                        text:definitions1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:definitions2,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack:[
                                    {
                                        text:definitions3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:definitions4,
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
             * (5)Terms and Conditions
             * */
            {
                stack:[
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
                                        text:termConditionText1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:termConditionText2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:termConditionText3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text:termConditionText4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ol:[
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
                                            },
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
                                            }
                                        ]
                                    }

                                ], style: 'colText'
                            },
                            {
                                stack:[
                                    {
                                        start: 8,
                                        ol:[
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

            /**
             * (6)Images
             * */
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
        }
    };
    
    // Open a new tab and show the PDF
    pdfMake.createPdf(docDefinition).open();


}