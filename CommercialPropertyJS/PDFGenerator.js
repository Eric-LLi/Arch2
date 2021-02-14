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

    //reset image number and general notes paragraphs number
    resetTotalCounting();
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
    // Page start drawing from here...

    var docDefinition = {
        pageSize: 'A4',
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
            {

                stack: [
                    {
                        columns: 
                        [
                            {
                                // Draw Cover Page image
                                image: coverPageLogo,
                                width: 130,
                                height: 130
                            },
                            {
                                text:[
                                    'Property Assessment Report\n',
                                    {
                                        text: '- Commercial, Industrial & Institutional',
                                        fontSize: 16,
                                        color:'black',
                                        bold:false,
                                        alignment: 'right'
                                    }
                                ],
                                style: 'coverPageHeader'
                            }
                        ]
                    },
                    giveMeHugeDraft(mode),
                    {
                        table: {
                            // widths: ['*', '*'],
                            body: [
                                [
                                    {
                                        border: [true, true, true, true],
                                        text: PropertyAssessmentReport,
                                        alignment: 'justify',
                                        fontSize: 9,
                                        margin: [10, 10, 10, 10]
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
                    makeAGap(),
                    getClientDetailsTable(),
                    getAssessmentDetailsTable(),
                    getArchitectDetailsTable(),
                    makeAGap(),
                    getPropertySummary()
                ],
                pageBreak: 'after'
            },
            /**
             * (2) Report Detail Page
             */
            // {
            //     stack: [
            //         giveMeHugeDraft(mode),
            //         {

            //             text: [{
            //                     text: 'Property Assessment Report',
            //                     color: 'red'
            //                 },
            //                 {
            //                     text: ' - Commercial Industrial & Institutional',
            //                     bold: false,
            //                     fontSize: 12,
            //                     color: 'black'
            //                 }
            //             ],
            //             style: 'pageTopHeader',
            //             margin: [0, 5, 0, 10]

            //         },
            //         {
            //             text: PropertyAssessmentReport,
            //             fontSize: 10,
            //             margin: [0, 5, 0, 20]
            //         },
            //         getClientDetailsTable(),
            //         getAssessmentDetailsTable(),
            //         getArchitectDetailsTable(),
            //         getPropertySummary()
            //         // getInspectionDetailsTable(),
            //         // getInspectorDetailsTable(),
            //         // getReportAuthorisation(),
            //         // getDoneWork(),
            //         // {
            //         //     text:'Inspection Summary',
            //         //     style:'pageTopHeader',
            //         //     margin:[0,20,0,5]
            //         //
            //         // },
            //         // getInspectionSummary(),
            //         // {
            //         //     text:'Descriptive Summary of Work done by Owner-Builder',
            //         //     style:'pageTopHeader',
            //         //     margin:[0,20,0,5]
            //         // },
            //         // getDescriptiveSummary()
            //     ],
            //     pageBreak: 'after'
            // },

            /**
             * (3) The Scope of Page
             * */
            {
                stack: [{
                        text: 'The Scope of Assessment',
                        style: 'pageTopHeader',
                        margin: [0, 5, 0, 0]
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [{
                                stack: [{
                                        text:   getSSTCText1(),
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: ScopeOfAssessment2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: ScopeOfAssessment3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: ScopeOfAssessment4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: ScopeOfAssessment5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: ScopeOfAssessment6,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: ScopeOfAssessment7,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: ScopeOfAssessment8,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [{
                                        text: ScopeOfAssessment9,
                                        style: 'colText'
                                    },
                                    makeAGap(),
                                    {
                                        text: 'What is included in this report',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        ul: [{
                                                text: ReportIncluded1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportIncluded2,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportIncluded3,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportIncluded4,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportIncluded5,
                                                style: 'bulletMargin'
                                            }
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'What is not included in this report',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        text: ReportNotRecorded0,
                                        style: 'bulletMargin'
                                    },
                                    {
                                        ul: [{
                                                text: ReportNotRecorded1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportNotRecorded2,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportNotRecorded3,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportNotRecorded4,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportNotRecorded5,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportNotRecorded6,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportNotRecorded7,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: ReportNotRecorded8,
                                                style: 'bulletMargin'
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
             * (4) Attachment
             */
            {
                stack: [{
                        text: 'Attachments',
                        style: 'pageTopHeader',
                        margin: [0, 5, 0, 5]
                    },
                    makeAGap(),
                    {
                        text: [{
                                text: Attachments1,
                                style: 'tableText'
                            },
                            {
                                text: 'http://www.archicentreaustralia.com.au/report_downloads/ ',
                                link: "http://www.archicentreaustralia.com.au/report_downloads/",
                                color: 'red',
                                decoration: "underline",
                                style: 'tableText',
                                margin: [0, 0, 0, 5]
                            },
                            {
                                text: Attachments2,
                                style: 'tableText',
                                margin: [0, 5, 0, 10]
                            }
                        ]
                    },
                    makeAGap(),
                    getAttachmentTable(),
                    makeAGap(),
                    {
                        text: 'General Advice',
                        style: 'pageTopHeader',
                        margin: [0, 10, 0, 5]
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [{
                                stack: [{
                                    ul: [{
                                            text: GeneralAdvice1,
                                            style: 'bulletMargin'
                                        },
                                        {
                                            text: GeneralAdvice2,
                                            style: 'bulletMargin'
                                        },
                                        {
                                            text: GeneralAdvice3,
                                            style: 'bulletMargin'
                                        },
                                        {
                                            text: GeneralAdvice4,
                                            style: 'bulletMargin'
                                        },
                                        {
                                            text: GeneralAdvice5,
                                            style: 'bulletMargin'
                                        }
                                    ]
                                }],
                                style: 'colText'
                            },
                            {
                                stack: [{
                                        ul: [{
                                                text: GeneralAdvice6,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: GeneralAdvice7,
                                                style: 'bulletMargin'
                                            }
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'For Strata, Stratum and Company Title Properties',
                                        fontSize: 10,
                                        bold: true,
                                        color: 'black',
                                        margin: [0, 20, 0, 5]
                                    },
                                    {
                                        text: GeneralAdvice8,
                                        style: 'colText'
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
             * (5) Terms & Conditions
             */
            {
                stack: [{
                        text: 'Terms & Conditions',
                        style: 'pageTopHeader',
                        margin: [0, 5, 0, 0]
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [{
                                stack: [{
                                        text: getTermsAndConditionsP1(),
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: Conditions2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: Conditions3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: Conditions4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: Conditions5,
                                        italics: true,
                                        style: 'paragraphMargin'
                                    },
                                    makeAGap(),
                                    {
                                        ol: [{
                                                text: ConditionsNumber1,
                                                style: 'bulletMargin',
                                            },
                                            {
                                                text: ConditionsNumber2,
                                                style: 'bulletMargin',
                                            },
                                            {
                                                text: ConditionsNumber3,
                                                style: 'bulletMargin',
                                            },
                                            {
                                                text: ConditionsNumber4,
                                                style: 'bulletMargin',
                                            }
                                        ],
                                    }
                                ]
                            },
                            {
                                stack: [{
                                    start: 4,
                                    ol: [{
                                            text: ConditionsNumber4,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber5,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber6,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber7,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber8,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber9,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber10,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber11,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber12,
                                            style: 'bulletMargin',
                                        },
                                        {
                                            text: ConditionsNumber13,
                                            style: 'bulletMargin',
                                        }
                                    ],
                                }]
                            }
                        ],
                        columnGap: 20,
                        style: 'colText'
                    }
                ],
                pageBreak: 'after'
            },

            /**
             * (6) Defect Definitions
             */
            {
                stack: [{
                        text: 'Defect Definitions',
                        style: 'pageTopHeader',
                    },
                    makeAGap(),
                    {
                        table: {
                            widths: [100, '*'],
                            body: [
                                [{},

                                    {
                                        text: 'DEFINITION',
                                        style: 'tableHeader'
                                    }
                                ],
                                [{
                                        text: 'Minor Defect/ Maintenance Item',
                                        fontSize: 10,
                                        bold: true
                                    },
                                    {
                                        text: MinorDefect,
                                        fontSize: 10
                                    }
                                ],
                                [{
                                        text: 'Major Defect',
                                        fontSize: 10,
                                        bold: true
                                    },
                                    {
                                        stack: [{
                                                text: MajorDefect,
                                                fontSize: 10
                                            },
                                            {
                                                ul: [{
                                                        text: [
                                                            MajorDefectBullet1,
                                                            {
                                                                text: 'or',
                                                                decoration: "underline"
                                                            },
                                                            {
                                                                text: ','
                                                            }
                                                        ],
                                                        fontSize: 10,
                                                        margin: [0, 2, 0, 2]
                                                    },
                                                    {
                                                        text: [
                                                            MajorDefectBullet2,
                                                            {
                                                                text: 'or',
                                                                decoration: "underline"
                                                            },
                                                            {
                                                                text: ','
                                                            }
                                                        ],
                                                        fontSize: 10,
                                                        margin: [0, 2, 0, 2]
                                                    },
                                                    {
                                                        text: MajorDefectBullet3,
                                                        fontSize: 10,
                                                        margin: [0, 2, 0, 2]
                                                    }
                                                ],
                                                margin: [5, 2, 0, 3]

                                            }
                                        ]

                                    }

                                ],
                                [{
                                        text: 'Serious Structural Defect',
                                        fontSize: 10,
                                        bold: true
                                    },
                                    {
                                        stack: [{
                                                text: SeriousDefect1,
                                                fontSize: 10
                                            },
                                            {
                                                ul: [{
                                                        text: [
                                                            SeriousDefectBullet1,
                                                            {
                                                                text: 'or',
                                                                decoration: "underline"
                                                            },
                                                            {
                                                                text: ','
                                                            }
                                                        ],
                                                        fontSize: 10,
                                                        margin: [0, 2, 0, 2]
                                                    },
                                                    {
                                                        text: [
                                                            SeriousDefectBullet2,
                                                            {
                                                                text: 'or',
                                                                decoration: "underline"
                                                            },
                                                            {
                                                                text: ','
                                                            }
                                                        ],
                                                        fontSize: 10,
                                                        margin: [0, 2, 0, 2]
                                                    },
                                                    {
                                                        text: SeriousDefectBullet3,
                                                        fontSize: 10,
                                                        margin: [0, 2, 0, 2]
                                                    }
                                                ],
                                                margin: [5, 2, 0, 3]

                                            },
                                            {
                                                text: SeriousDefect2,
                                                fontSize: 10
                                            }
                                        ]

                                    }
                                ]
                            ]
                        },
                        margin: [0, 10, 0, 20]
                    },
                    makeAGap(),
                    {
                        text: 'Assessment Access',
                        style: 'pageTopHeader',
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [{
                                stack: [{
                                        text: AssessmentAccess1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: AssessmentAccess2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: AssessmentAccess3,
                                        style: 'paragraphMargin'
                                    }
                                ]
                            },
                            {
                                stack: [{
                                        text: AssessmentAccess4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: AssessmentAccess5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: AssessmentAccess6,
                                        style: 'paragraphMargin'
                                    }
                                ]
                            }
                        ],
                        style: 'colText',
                        columnGap: 20
                    }
                ],
                pageBreak: 'after'
            },
            /**
             * (7) Property Assessment Summary
             */
            {
                stack: [{
                        text: 'Your Property Assessment Summary',
                        style: 'pageTopHeader',
                        margin: [0, 5, 0, 5]
                    },
                    {
                        text: PropertyAssessmentSummary,
                        fontSize: 10,
                        margin: [0, 10, 0, 10]
                    },
                    {
                        text: 'Summary of the Condition of the Property:',
                        style: 'secondHeader'
                    },
                    {
                        table: {
                            widths: [400, '*'],
                            body: [
                                [{
                                        text: 'Apparent condition of the building respect to its age',
                                        style: 'thirdHeader'
                                    },
                                    {
                                        text: getIt('conditionOfBuilding'),
                                        fontSize: 10
                                    }
                                ]
                            ]
                        },
                        margin: [0, 3, 0, 10]
                    },
                    {
                        text: 'Major Defects:',
                        style: 'secondHeader'
                    },
                    {
                        table: {
                            widths: [400, '*'],
                            body: [
                                [{
                                        text: 'Are there any Major Defects evident?',
                                        style: 'thirdHeader'
                                    },
                                    {
                                        text: getIt('majorDefects'),
                                        fontSize: 10
                                    }
                                ]
                            ]
                        },
                        margin: [0, 3, 0, 10]
                    },
                    {
                        text: 'Serious Structural Defects:',
                        style: 'secondHeader'
                    },
                    {
                        table: {
                            widths: [400, '*'],
                            body: [
                                [{
                                        text: 'Are there any Serious Structural Defects evident?',
                                        style: 'thirdHeader'
                                    },
                                    {
                                        text: getIt('seriousDefects'),
                                        fontSize: 10
                                    }
                                ]
                            ]
                        },
                        margin: [0, 3, 0, 10]
                    },
                    {
                        text: 'Evident Defect Summary',
                        style: 'secondHeader'
                    },
                    getKeyTable(),
                    getEvidentDefectTable(),
                    getAssessmentSummary()
                ],
                pageBreak: 'after'
            },
            /**
             * (8) Property Assessment Notes & Site
             */
            {
                stack: [{
                        text: 'Property Assessment Notes',
                        style: 'pageTopHeader'
                    },
                    {
                        text: 'Professional and Trade Guide',
                        style: 'secondHeader'
                    },
                    {
                        text: 'Your architect may refer you to the following professional or tradespeople:',
                        fontSize: 10,
                        margin: [0, 0, 0, 10]
                    },
                    getTradeGuideTable(),
                    {
                        text: 'Site',
                        style: 'pageTopHeader',
                        margin: [0, 20, 0, 10]
                    },
                    {
                        text: 'Key',
                        style: 'thirdHeader',
                        margin: [0, 2, 0, 0]
                    },
                    getKeyTable(),
                    getSiteAreaTable(),
                    getAccessLimitationTable('siteAccessLimitationsTable', 'siteAccessItem', 'siteAccessImageRef', 'SiteAccessSelect', 'siteAccessNotes'),
                    getMinorDefectsTable('siteMinorDefectsTable', 'siteMaintenanceItemNo', 'siteMaintenanceImgRef', 'siteMaintenanceNotes', 'siteMinorRecommendationText'),
                    // getMajorDefectsTable('siteMajorDefectsTable', 'siteMajorItemNo', 'siteMajorImgRef', 'siteMajorNotes', 'siteMajorRecommendationText'),
                    // getGeneralNotes('siteGeneralNotes')
                ],
                pageBreak: 'after'
            },
            {
                stack:[
                    getMajorDefectsTable('siteMajorDefectsTable', 'siteMajorItemNo', 'siteMajorImgRef', 'siteMajorNotes', 'siteMajorRecommendationText'),
                    getGeneralNotes('siteGeneralNotes')
                ],
                pageBreak: 'after'
            },
            /**
             * (9) Property Exterior
             */
            {
                stack: [{
                        text: 'Property Exterior',
                        style: 'pageTopHeader',
                        margin: [0, 20, 0, 10]
                    },
                    {
                        text: 'Key',
                        style: 'thirdHeader',
                        margin: [0, 2, 0, 0]
                    },
                    getKeyTable(),
                    getAreaTable('exteriorArea', 'exteriorAreaName', 'exteriorAreaRow'),
                    getAccessLimitationTable('exteriorAccessLimitationsTable', 'exteriorAccessItem', 'exteriorAccessImageRef', 'exteriorAccessSelect', 'exteriorAccessNotes'),
                    getMinorDefectsTable('exteriorMinorDefectsTable', 'exteriorMinorDefectItemNo', 'exteriorMinorDefectImgRef', 'exteriorMinorDefectNotes', 'exteriorMinorRecommendationText'),
                    // getMajorDefectsTable('exteriorMajorDefectsTable', 'exteriorMajorItemNo', 'exteriorMajorImgRef', 'exteriorMajorNotes', 'exteriorMajorRecommendationText'),
                    // getGeneralNotes('exteriorGeneralNotes')
                ],
                pageBreak: 'after',
            },
            {
                stack:[
                    getMajorDefectsTable('exteriorMajorDefectsTable', 'exteriorMajorItemNo', 'exteriorMajorImgRef', 'exteriorMajorNotes', 'exteriorMajorRecommendationText'),
                    getGeneralNotes('exteriorGeneralNotes')
                ],
                pageBreak: 'after',
            },
            /**
             * (10) Property Interior - Dry Areas
             */
            {
                stack: [{
                        text: 'Property Interior – Dry Areas',
                        style: 'pageTopHeader',
                        margin: [0, 20, 0, 10]
                    },
                    {
                        text: 'Key',
                        style: 'thirdHeader',
                        margin: [0, 2, 0, 0]
                    },
                    getKeyTable(),
                    getAreaTable('InteriorDryArea', 'InteriorDryAreaName', 'InteriorDryAreaRow'),
                    getAccessLimitationTable('interiorDryAccessLimitationsTable', 'interiorDryAccessItem', 'interiorDryAccessImageRef', 'interiorDryAccessSelect', 'interiorDryAccessNotes'),
                    getMinorDefectsTable('interiorDryMinorTable', 'interiorDryMinorItemNo', 'interiorDryMinorImgRef', 'interiorDryMinorNotes', 'interiorDryMinorRecommendationText'),
                    getMajorDefectsTable('interiorDryMajorTable', 'interiorDryMajorItemNo', 'interiorDryMajorImgRef', 'interiorDryMajorNotes', 'interiorDryMajorRecommendationText'),
                    getGeneralNotes('interiorDryGeneralNotes')
                ],
                pageBreak: 'after'
            },
            /**
             * (11) Property Interior - Wet Areas
             */
            {
                stack: [{
                        text: 'Property Interior – Service (wet) Areas',
                        style: 'pageTopHeader',
                        margin: [0, 20, 0, 10]
                    },
                    {
                        text: 'Key',
                        style: 'thirdHeader',
                        margin: [0, 2, 0, 0]
                    },
                    getKeyTable(),
                    getAreaTable('InteriorWetArea', 'InteriorWetAreaName', 'InteriorWetAreaRow'),
                    getAccessLimitationTable('interiorWetAccessLimitationsTable', 'interiorWetAccessItem', 'interiorWetAccessImageRef', 'interiorWetAccessSelect', 'interiorWetAccessNotes'),
                    getMinorDefectsTable('interiorWetMinorTable', 'interiorWetMinorItemNo', 'interiorWetMinorImgRef', 'interiorWetMinorNotes', 'interiorWetMinorRecommendationText'),
                    makeAGap(),
                    // getMajorDefectsTable('interiorWetMajorTable', 'interiorWetMajorItemNo', 'interiorWetMajorImgRef', 'interiorWetMajorNotes', 'interiorWetMajorRecommendationText'),
                    // getGeneralNotes('interiorWetMajorGeneralNotes')
                ],
                pageBreak: 'after',
            },
            {
                stack:[
                    getMajorDefectsTable('interiorWetMajorTable', 'interiorWetMajorItemNo', 'interiorWetMajorImgRef', 'interiorWetMajorNotes', 'interiorWetMajorRecommendationText'),
                    getGeneralNotes('interiorWetMajorGeneralNotes')
                ]
            },
            /**
             * Photographs
             */
            {
                stack: [
                    getImages()
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
            pageTopHeader: {
                fontSize: 20,
                color: 'red',
                bold: true
            },
            pageSubHeader: {
                fontSize: 11,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 2]
            },
            colText: {
                fontSize: 9
                //margin:[0,5,0,5]
            },
            secondHeader: {
                fontSize: 14,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 3]
            },
            thirdHeader: {
                fontSize: 12,
                color: 'red',
                bold: true
            },
            tableText: {
                fontSize: 10
            },
            firstHeader: {
                fontSize: 20,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 20]
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
            // pageTopHeader: {
            //     fontSize: 17,
            //     color: 'red',
            //     bold: true
            // },
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
            paragraphMargin: {
                margin: [0, 0, 0, 6]
            },
            bulletMargin: {
                margin: [0, 0, 0, 5]
            },

            tableLongBoldJustifiedText: {
                fontSize: 9,
                bold: true,
                alignment: 'justify'
            }
        }
    };
    // Open a new tab and show the PDF

    if (mode == 'save') {
        //console.log('click');
        //const pdfDocGenerator = pdfMake.createPdf(docDefinition);
        pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
            var base64 = encodedString;
            $('#savingPDFAlert').show('fade');
            doSavePDF(base64);
            //console.log(base64);
        });

    } else if (mode == "preview") {
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
            // pdfMake.createPdf(docDefinition).open();
            pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                doSavePDF(encodedString);
            });
        }

    }


}