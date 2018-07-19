/**
 * Created by TengShinan on 6/10/17.
 */

/**
 * Core function of the PDF generator
 * detect Safari on iOS learn from http://jsfiddle.net/jlubean/dL5cLjxt/ 
 * */
function generatePDF(mode) {
    //Prevent multiple request.
    $("button").prop("disabled", true);
    
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
                        alignment: 'justify',
                        columns: [
                            {
                                image: coverPageLogo,
                                alignment: 'left',
                                width: 130
                            },
                            {
                                text: 'Timber Pest Inspection Report',
                                fontSize: 24,
                                bold: true,
                                color: 'red',
                                margin: [0, 50, 0, 0]
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
                                        text: timberPestInspectionReportText,
                                        alignment:'justify',
                                        fontSize: 9,
                                        margin:[10,10,10,10]
                                    },
                                    {
                                        border: [false, true, true, true],
                                        stack: [
                                            getCoverImage('TimberCoverImage')
                                        ],
                                        margin:[10,10,10,10]
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
             * (2) The Scope of Inspection Page
             * */
            {
                stack: [
                    {
                        text: 'The Scope of Inspection',
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
                                        text: scopeOfInspectionP4
                                    },
                                    makeAGap(),
                                    {
                                        text: 'What is included in this Report',
                                        style: 'colSubHeader'
                                    },
                                    {
                                        text: whatIncText,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: '1. Subterranean Termites',
                                        style: 'boldText'
                                    },
                                    {
                                        text: whatInc1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: '2. Dampwood Termites',
                                        style: 'boldText'
                                    },
                                    {
                                        text: whatInc2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: '3. Wood Decay Fungi',
                                        style: 'boldText'
                                    },
                                    {
                                        text: whatInc3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: '4. Beetles that attack timber in service (Borers)',
                                        style: 'boldText'
                                    },
                                    {
                                        text: whatInc4,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        text: 'What is not recorded in this Report',
                                        style: 'colSubHeader'
                                    },
                                    {
                                        ul: [
                                            whatNotRecordedP1,
                                            whatNotRecordedP2,
                                            whatNotRecordedP3,
                                            whatNotRecordedP4,
                                            whatNotRecordedP5,
                                            whatNotRecordedP6,
                                            whatNotRecordedP7,
                                            whatNotRecordedP8,
                                            whatNotRecordedP9
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'General Advice',
                                        style: 'colSubHeader'
                                    },
                                    {
                                        text: generalAdviceP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'For Strata, Stratum and Company Title Properties',
                                        style: 'boldText'
                                    },
                                    {
                                        text: generalAdviceP2
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
             * (3) Definitions & Inspection Access Page
             * */
            {
                stack: [
                    {
                        text: 'Definitions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text: 'No Visible Evidence',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'Visible Evidence',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'Visible Active Evidence',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'Visible Moderate Damage Present',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'Visible Extensive Damage Present',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP5
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        text: 'Moderate Risk',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP6,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'High Risk',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP7,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: 'Extreme Risk',
                                        style: 'paragraphBoldTitleMargin'
                                    },
                                    {
                                        text: definitionsP8
                                    }
                                ],
                                style: 'colText'
                            }
                        ],
                        columnGap: 20
                    },
                    makeAGap(),
                    {
                        text: 'Inspection Access',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text: inspectionAccessP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: inspectionAccessP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: inspectionAccessP3,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        text: inspectionAccessP4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: inspectionAccessP5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: inspectionAccessP6,
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
             * (4) Inspection Summary
             * */
            {
                stack: [
                    {
                        text: 'Inspection Summary',
                        style: 'pageTopHeader',
                        margin:[0,0,0,5]
                    },
                    //makeAGap(),
                    {
                        text: inspectionSummaryText,
                        margin: [0, 0, 0, 5],
                        style: 'normalText'
                    },
                    getPropertySummaryTable(),
                    makeAGap(),
                    getTreatmentAndConductiveTable(),
                    makeAGap(),
                    {
                        text: 'Sighted Activity:',
                        style: 'pageSubHeader'
                    },
                    getSightedActivityTable(),
                    makeAGap(),
                    {
                        text: 'Access Restrictions:',
                        style: 'pageSubHeader'
                    },
                    {
                        text: 'Access is critical because we can only report on what the inspector can see.',
                        margin: [0, 0, 0, 5],
                        style: 'normalText'
                    },
                    getAccessRestrictionsTable()
                ]
            },
            {
                stack:[
                    getImagesTable('TimberSummaryPhotographs')
                ],
            },
            {
                stack:[
                    {
                        pageBreak: 'before',
                        text: 'Important Notes:',
                        style: 'pageSubHeader'
                    },
                    {
                        alignment: 'justify',
                        columns: [
                            {
                                stack: [
                                    {
                                        text: iSImportantNotesP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP5,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [
                                    {
                                        text: iSImportantNotesP6,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP7,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP8,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP9,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: iSImportantNotesP10,
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
             * (5) Timber Pest Inspection Notes
             * */
            {
                stack: [
                    {
                        text: 'Timber Pest Inspection Notes',
                        style: 'pageTopHeader',
                        margin:[0,0,0,5]
                    },
                    //makeAGap(),
                    {
                        text: 'Site and Garden',
                        style: 'pageSubHeader'
                    },
                    getSiteAndGardenTable1a(),
                    getSiteAndGardenTable1b(),
                    getSiteAndGardenTable1c(),
                    getSiteAndGardenTable1d(),
                    getSiteAndGardenTable1e(),
                    getSiteAndGardenTable1f(),
                    getSiteAndGardenTable1g(),
                    getSiteAndGardenTable1h(),
                    getSiteAndGardenTable1i(),
                    getSiteAndGardenTable1j(),
                    getSiteAndGardenTable1k(),
                    getSiteAndGardenTable1l(),
                    makeAGap(),
                    getSiteAndGardenTable2(),
                    appendOther('ECCTTPA-otherOption', 'ECCTTPA-otherChoice', 'ECCTTPA-LAE', 'ECCTTPA-RA')
                    //makeAGap(),
                    // {
                    //     columns: [
                    //         {
                    //             stack: [
                    //                 getPhoto('TimberSiteImage0'),
                    //                 {
                    //                     alignment: 'center',
                    //                     fontSize:9,
                    //                     text: getPicDescription('TimberSiteImageText0'),
                    //                     margin: [0, 2, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('TimberSiteImage1'),
                    //                 {
                    //                     alignment: 'center',
                    //                     fontSize:9,
                    //                     text: getPicDescription('TimberSiteImageText1'),
                    //                     margin: [0, 2, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('TimberSiteImage2'),
                    //                 {
                    //                     alignment: 'center',
                    //                     fontSize:9,
                    //                     text: getPicDescription('TimberSiteImageText2'),
                    //                     margin: [0, 2, 0, 0]
                    //                 }
                    //             ]
                    //         }
                    //     ],
                    //     columnGap: 17
                    // }
                ],
            },
            {
                stack:[
                    getImagesTable('TimberSitePhotographs')
                ]
            },
            /**
             * (6) Exterior of Buildings
             * */
            {
                pageBreak: 'before',
                stack: [
                    {
                        text: 'Exterior of Buildings',
                        style: 'pageSubHeader',
                        margin:[0,0,0,5]
                    },
                    getExteriorOfBuildingTable1a(),
                    getExteriorOfBuildingTable1b(),
                    getExteriorOfBuildingTable1c(),
                    getExteriorOfBuildingTable1d(),
                    getExteriorOfBuildingTable1e(),
                    getExteriorOfBuildingTable1f(),
                    getExteriorOfBuildingTable1g(),
                    getExteriorOfBuildingTable1h(),
                    getExteriorOfBuildingTable1i(),
                    getExteriorOfBuildingTable1j(),
                    getExteriorOfBuildingTable1k(),


                    //appendOtherTypeTwo('EoB-o1', 'EoB-SLC1', 'EoB-Type1', 'EoB-LAE1', 'EoB-DATB1'),
                    //appendOtherTypeTwo('EoB-o2', 'EoB-SLC2', 'EoB-Type2', 'EoB-LAE2', 'EoB-DATB2'),
                    //makeAGap(),
                    getExteriorOfBuildingTable2(),
                    appendOther('EoB-Table2-O1', 'EoB-Table2-SLC1', 'EoB-Table2-LAE1', 'EoB-Table2-RA1'),
                    appendOther('EoB-Table2-O2', 'EoB-Table2-SLC2', 'EoB-Table2-LAE2', 'EoB-Table2-RA2'),
                    makeAGap()
                ]
                // pageBreak: 'after'
            },
            {
                stack:[
                    getImagesTable('TimberExteriorPhotographs')
                ]
            },
            /**
             * (7) Interior of Buildings
             * */
            {
                pageBreak: 'before',
                stack: [
                    {
                        text: 'Interior of Building',
                        style: 'pageSubHeader',
                        margin:[0,0,0,5]
                    },
                    //makeAGap(),
                    getInteriorOfBuildingTable1a(),
                    getInteriorOfBuildingTable1b(),
                    getInteriorOfBuildingTable1c(),
                    getInteriorOfBuildingTable1d(),
                    getInteriorOfBuildingTable1e(),
                    getInteriorOfBuildingTable1f(),
                    getInteriorOfBuildingTable1g(),
                    getInteriorOfBuildingTable1h(),
                    getInteriorOfBuildingTable1i(),
                    getInteriorOfBuildingTable1j(),
                    getInteriorOfBuildingTable1k(),
                    //appendOtherTypeTwo('IoB-Table1-O1', 'IoB-Table1-SLC1', 'IoB-Table1-TYPE1', 'IoB-Table1-LAE1', 'IoB-Table1-DATB1'),
                    makeAGap(),
                    getInteriorOfBuildingTable2(),
                    appendOther('IoB-O1-TITLE', 'IoB-O1-SLC', 'IoB-O1-LAE', 'IoB-O1-RA'),
                ]
            },
            {
                stack:[
                    getImagesTable('TimberInteriorPhotographs')
                ]
            },
            /**
             * (8) Roof Space
             * */
            {
                pageBreak: 'before',
                stack: [
                    {
                        text: 'Roof Space',
                        style: 'pageSubHeader',
                        margin:[0,0,0,5]
                    },
                    //makeAGap(),
                    getRoofSpaceTable1a(),
                    getRoofSpaceTable1b(),
                    getRoofSpaceTable1c(),
                    getRoofSpaceTable1d(),
                    getRoofSpaceTable1e(),
                    getRoofSpaceTable1f(),
                    getRoofSpaceTable1g(),
                    getRoofSpaceTable1h(),
                    getRoofSpaceTable1i(),
                    getRoofSpaceTable1j(),
                    getRoofSpaceTable1k(),
                    //appendOtherTypeTwo('RS-TABLE1-O1-TEXT', 'RS-TABLE1-O1-SLC', 'RS-TABLE1-O1-TYPE', 'RS-TABLE1-O1-LAE', 'RS-TABLE1-O1-DATB'),
                    makeAGap(),
                    getRoofSpaceTable2(),
                    appendOther('RS-TABLE2-O1-TEST', 'RS-TABLE2-O1-SLC', 'RS-TABLE2-O1-LAE', 'RS-TABLE2-O1-RA'),
                    makeAGap()
                ]
            },
            {
                stack:[
                    getImagesTable('TimberRoofPhotographs')
                ]
            },
            /**
             * (9) Sub-Floor Space
             * */
            {
                pageBreak: 'before',
                stack: [
                    {
                        text: 'Sub-Floor Space',
                        style: 'pageSubHeader',
                        margin:[0,0,0,5]
                    },
                    //makeAGap(),
                    getSubFloorSpaceTable1a(),
                    getSubFloorSpaceTable1b(),
                    getSubFloorSpaceTable1c(),
                    getSubFloorSpaceTable1d(),
                    getSubFloorSpaceTable1e(),
                    getSubFloorSpaceTable1f(),
                    getSubFloorSpaceTable1g(),
                    getSubFloorSpaceTable1h(),
                    getSubFloorSpaceTable1i(),
                    getSubFloorSpaceTable1j(),
                    getSubFloorSpaceTable1k(),
                    //appendOtherTypeTwo('SFS-TABLE1-O1-TEXT', 'SFS-TABLE1-O1-SLC1', 'SFS-TABLE1-O1-TYPE1', 'SFS-TABLE1-O1-LAE1', 'SFS-TABLE1-O1-DATB1'),
                    makeAGap(),
                    getSubFloorSpaceTable2(),
                    appendOther('SFS-TABLE2-O1-TEXT', 'SFS-TABLE2-O1-SLC', 'SFS-TABLE2-O1-LAE', 'SFS-TABLE2-O1-RA'),
                    makeAGap()
                ]
            },
            {
                stack:[
                    getImagesTable('TimberSubfloorPhotographs')
                ]
            },
            /**
             * (10) Previous Pest Treatment + Recommendations
             * */
            {
                pageBreak: 'before',
                stack: [
                    {
                        text: 'Previous Pest Treatment',
                        style: 'pageTopHeader',
                        margin:[0,0,0,5]
                    },
                    //makeAGap(),
                    getPreviousPestTreatmentTable(),
                    makeAGap(),
                    {
                        text: 'Recommendations',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    getRecommendationsTable(),
                    makeAGap(),
                   //,
                    // makeAGap(),
                    // {
                    //     text: 'Attachment',
                    //     style: 'pageTopHeader'
                    // },
                    // makeAGap(),
                    // {
                    //     text: [
                    //         attachmentText1,
                    //         {
                    //             text: 'http://www.archicentreaustralia.com.au/report_downloads/',
                    //             link: "http://www.archicentreaustralia.com.au/report_downloads/",
                    //             color: 'red',
                    //             decoration: "underline"
                    //         },
                    //         attachmentText2
                    //     ],
                    //     style: 'tableText',
                    //     alignment: 'justify',
                    //     margin: [0, 0, 0, 6]
                    // },
                    // getAttachmentsTable()
                ]
            },
            {
                stack:[
                    getImagesTable('TimberRecommendationPhotographs')
                ]
            },
            /**
             * (11) Attachment + Terms & Conditions
             * */
            {
                pageBreak: 'before',
                stack: [
                    {
                        text: 'Attachment',
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
                    getAttachmentsTable(),
                    makeAGap(),
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
                                        text: termConditionP1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionP2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionP3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionP4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: termConditionP5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        ol: [
                                            {
                                                text: termConditionBulletList1,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList2,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList3,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList4,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList5,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList6,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList7,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList8,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList9,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList10,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList11,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList12,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList13,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList14,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList15,
                                                margin: [0, 0, 0, 5]
                                            },
                                            {
                                                text: termConditionBulletList16,
                                                margin: [0, 0, 0, 5]
                                            }
                                        ]
                                    }
                                ],
                                style: 'colText'
                            }
                        ]
                    }
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
    //if the mode is final or preview, open the pdf directly depends on what device the user is using
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
            //pdfMake.createPdf(docDefinition).download("Timber Pest Report Preview.pdf");
            pdfMake.createPdf(docDefinition).getBase64(function (encodedString) {
                doSavePDF(encodedString);
            });
        }

    }
}