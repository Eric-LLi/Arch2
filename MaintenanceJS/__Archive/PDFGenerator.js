/**
 * Created by TengShinan on 10/10/17.
 */

function rockAndRoll(mode) {
    //console.log(getCoverImage('MaintenanceCoverImage'));
    var docDefinition = {
        footer: function (currentPage, pageCount) {
            return {
                columns: [
                    determineFooter(mode),
                    {
                        text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                        alignment: 'right',
                        margin: [0, 0, 40, 0],
                        fontSize: 8
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
                        alignment: 'justify',
                        columns: [
                            {
                                image: logoImage,
                                alignment: 'left',
                                width: 130
                            },
                            {
                                text: 'Maintenance Advice Report',
                                fontSize: 24,
                                bold: true,
                                color: 'red',
                                margin: [0, 50, 0, 0]
                            }
                        ]
                    },
                    giveMeHugeDraft(mode),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                text: maintenanceAdviceReportText,
                                margin: [0, 50, 0, 0],
                                fontSize: 9
                            },
                            {
                                stack: [
                                    getCoverImage('MaintenanceCoverImage')
                                ]
                            }
                        ],
                        columnGap: 30
                    },
                    {
                        text: 'Inspection Details',
                        style: 'pageTopHeader',
                        margin: [0, 50, 0, 5]
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
             * (2) Introduction
             * */
            {
                stack: [
                    {
                        text: 'Introduction',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: introductionP1,
                        fontSize: 9
                    },
                    makeAGap(),
                    {
                        text: [introductionP2a, {text: getIt('0'), style: {bold: true}}, introductionP2b],
                        fontSize: 9
                    },
                    makeAGap(),
                    {
                        text: introductionP3,
                        fontSize: 9
                    },
                    makeAGap(),
                    {
                        text: introductionP4,
                        fontSize: 9
                    },
                    makeAGap(),
                    makeAGap(),
                    {
                        text: introductionP5,
                        fontSize: 9
                    },
                    {
                        text: introductionP6,
                        fontSize: 9
                    }
                ],
                pageBreak: 'after'
            },
            /**
             * (2) The Scope of Assessment
             * */
            {
                stack: [
                    {
                        text: 'The Scope of Assessment',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'Report Standard',
                        style: 'colSubHeader'
                    },
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text: reportStandardP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: reportStandardP2
                                    },
                                    makeAGap(),
                                    {
                                        text: 'What is included in this Report',
                                        style: 'colSubHeader'
                                    },
                                    {
                                        text: whatIncTextM,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ul: [
                                            {
                                                text: whatIncBulletList1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatIncBulletList2,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatIncBulletList3
                                            }
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'What is not included in this Report',
                                        style: 'colSubHeader'
                                    },
                                    {
                                        text: whatNotRecordedText1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ul: [
                                            {
                                                text: whatNotRecordedBulletList1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotRecordedBulletList2,
                                                style: 'bulletMargin'
                                            },
                                            whatNotRecordedBulletList3
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
                                                text: whatNotRecordedBulletList4,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotRecordedBulletList5,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotRecordedBulletList6,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                ol: [
                                                    {
                                                        text: whatNotRecordedBulletList6a,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6b,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6c,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6d,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6e,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6f,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6g,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6h,
                                                        style: 'nestedBulletMargin'
                                                    },
                                                    {
                                                        text: whatNotRecordedBulletList6i,
                                                        style: 'bulletMargin'
                                                    }
                                                ]
                                            },
                                            whatNotRecordedBulletList7
                                        ]
                                    },
                                    {
                                        text: whatNotRecordedText2,
                                        margin: [0, 6, 0, 0]
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
             * (3) Defect definitions + Assessment Access
             * */
            {
                stack: [
                    {
                        text: 'Defect definitions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    getDefectDefinitions(),
                    makeAGap(),
                    {
                        text: 'Assessment Access',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        stack: [
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
                            },
                            {
                                text: assessmentAccessP4,
                                style: 'paragraphMargin'
                            },
                            {
                                text: assessmentAccessP5,
                                style: 'paragraphMargin'
                            },
                            {
                                text: assessmentAccessP6,
                                style: 'paragraphMargin'
                            },
                            {
                                text: assessmentAccessP7,
                                style: 'paragraphMargin'
                            }
                        ],
                        style: 'normalText'
                    }
                ],
                pageBreak: 'after'
            },
            /**
             * (4) Attachments + General Advice
             * */
            {
                stack: [
                    {
                        text: 'Attachments',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: [
                            attachmentsA,
                            {
                                text: 'click here',
                                link: "http://www.archicentreaustralia.com.au/report_downloads/",
                                decoration: "underline"
                            },
                            attachmentsB
                        ],
                        style: 'normalText'
                    },
                    makeAGap(),
                    getAttachmentsTable(),
                    makeAGap(),
                    {
                        text: 'General Advice',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        ul: [
                                            {
                                                text: generalAdviceBulletList1
                                            },
                                            {
                                                text: generalAdviceBulletList2
                                            },
                                            {
                                                text: generalAdviceBulletList3
                                            },
                                            {
                                                text: generalAdviceBulletList4
                                            },
                                            {
                                                text: generalAdviceBulletList5
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
                                            generalAdviceBulletList6,
                                            generalAdviceBulletList7
                                        ]
                                    },
                                    {
                                        text: 'For Strata, Stratum and Company Title Properties',
                                        bold: true,
                                        margin: [0, 6, 0, 2]
                                    },
                                    forStrataCompanyTitlePropertiesP1
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
             * (5) Terms & Conditions
             * */
            {
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
                                        text: termConditionP1M,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionP2M,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionP3M,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionP4M,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ol: [
                                            {
                                                text: termConditionBulletList1M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList2M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList3M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList4M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList5M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList6M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList7M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList8M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList9M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList10M,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: termConditionBulletList11M,
                                                style: 'bulletMargin'
                                            },
                                            termConditionBulletList12M

                                        ]
                                    }
                                ],
                                style: 'colText'
                            }
                        ]
                    }
                ],
                pageBreak: 'after'
            },
            /**
             * (6) Maintenance Advice Summary
             * */
            {
                stack: [
                    {
                        text: 'Maintenance Advice Summary',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    getPropertySummaryTable(),
                    makeAGap(),
                    {
                        text: 'Summary:',
                        style: 'pageSubHeader'
                    },
                    getYMASSummary(),
                    makeAGap(),
                    {
                        text: 'Major Defect:',
                        style: 'pageSubHeader'
                    },
                    getYMASMajorDefects(),
                    makeAGap(),
                    {
                        text: 'Serious Structural Defects:',
                        style: 'pageSubHeader'
                    },
                    getYMASSeriousStructuralDefects()
                ],
                pageBreak: 'after'
            },
            /**
             * (7) Advice
             * */
            {
                stack: [
                    getAdviceTable()
                ],
                pageBreak: 'after'
            },
            /**
             * (8) Photographs
             * */
            {
                stack: [
                    {
                        text: 'Photographs',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    getPhotoTable()
                ]
            },
            /**
             * (9) Drawings
             * */
            {
                stack: [
                    getDrawings('MaintenanceDrawing0', 'MaintenanceDrawingText0'),
                    getDrawings('MaintenanceDrawing1', 'MaintenanceDrawingText1'),
                    getDrawings('MaintenanceDrawing2', 'MaintenanceDrawingText2'),
                    getDrawings('MaintenanceDrawing3', 'MaintenanceDrawingText3'),
                    getDrawings('MaintenanceDrawing4', 'MaintenanceDrawingText4'),
                    getDrawings('MaintenanceDrawing5', 'MaintenanceDrawingText5')
                ]
            }
        ],
        /**
         * Styles
         * */
        styles: {
            pageTopHeader: {
                fontSize: 17,
                color: 'red',
                bold: true
            },
            pageSubHeader: {
                fontSize: 13,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 5]
            },
            pageSubHeaderBlack: {
                fontSize: 13,
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
                alignment: 'center',
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
                fontSize: 13,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 6]
            },
            bulletMargin: {
                margin: [0, 0, 0, 5]
            },
            nestedBulletMargin: {
                margin: [0, 0, 0, 4]
            },
            tableLongTextLight: {
                alignment: 'justify',
                fontSize: 9
            }
        }
    };
    // open the PDF in a new window
    pdfMake.createPdf(docDefinition).open();
}