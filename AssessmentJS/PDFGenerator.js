/**
 * Created by TengShinan on 28/9/17.
 */

/**
 * Core function of the PDF generator
 * detect Safari on iOS learn from http://jsfiddle.net/jlubean/dL5cLjxt/ 
 * */
function generatePDF(mode) {
    // Page start drawing from here...
    //noinspection JSUnusedGlobalSymbols
    resetTotalParagraphs();
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
    //getEvidentDefectTable();
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
                        columns: [{
                                // Draw Cover Page image
                                image: coverPageLogo,
                                width: 130,
                                height: 130
                            },
                            {
                                text: 'Property Assessment Report',
                                style: 'coverPageHeader'
                            }
                        ]
                    },
                    giveMeHugeDraft(mode),
                    {
                        table: {
                            // widths: ['*', '*'],
                            body: [
                                [{
                                        border: [true, true, false, true],
                                        text: coverPageText,
                                        alignment: 'justify',
                                        fontSize: 9,
                                        margin: [10, 30, 10, 10]
                                    },
                                    {
                                        border: [false, true, true, true],
                                        stack: [
                                            getCoverImage('AssessmentCoverImage')
                                        ],
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
                    {
                        text: 'Property Assessment Details',
                        style: 'pageTopHeader',
                        margin: [0, 30, 0, 5]
                    },
                    {
                        table: {
                            widths: [61, '*', 51, '*'],
                            body: [
                                [{
                                    text: 'CUSTOMER DETAILS',
                                    style: 'tableHeader',
                                    colSpan: 4,
                                    border: [false, false, false, true]
                                }, {}, {}, {}],
                                [{
                                    text: 'Name',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('0'),
                                    fontSize: 9,
                                    colSpan: 3,
                                    border: [true, true, false, true]
                                }, {}, {}],
                                [{
                                    text: 'Telephone No',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('1'),
                                    fontSize: 9
                                }, {
                                    text: 'Booking No',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: getIt('8'),
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }]
                            ]
                        }
                    },
                    {
                        text: ' '
                    },
                    {
                        table: {
                            widths: [100, '*', 25, '*', 40, '*'],
                            body: [
                                [{
                                    text: 'ASSESSMENT DETAILS',
                                    style: 'tableHeader',
                                    colSpan: 6,
                                    border: [false, false, false, true]
                                }, {}, {}, {}, {}, {}],
                                [{
                                    text: 'Address of Property',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('2'),
                                    colSpan: 5,
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }, {}, {}, {}, {}],
                                [{
                                    text: 'Suburb',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('3'),
                                    fontSize: 9
                                }, {
                                    text: 'State',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: getIt('9'),
                                    fontSize: 9
                                }, {
                                    text: 'Postcode',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: getIt('11'),
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }],
                                [{
                                    text: 'Date of Assessment',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('4'),
                                    colSpan: 2,
                                    fontSize: 9
                                }, {}, {
                                    text: 'Time of Assessment',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: getIt('10'),
                                    colSpan: 2,
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }, {}],
                                [{
                                    text: 'Existing use of Property',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('5'),
                                    colSpan: 5,
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }, {}, {}, {}, {}],
                                [{
                                    text: 'Weather conditions',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('6'),
                                    colSpan: 5,
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }, {}, {}, {}, {}],
                                [{
                                    text: 'Verbal summary to',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('7'),
                                    colSpan: 2,
                                    fontSize: 9
                                }, {}, {
                                    text: 'Date',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: getIt('12'),
                                    colSpan: 2,
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }, {}]
                            ]
                        }
                    },
                    {
                        text: ' '
                    },
                    {
                        table: {
                            widths: [61, '*', 80, '*'],
                            body: [
                                [{
                                    text: 'ARCHITECT DETAILS',
                                    style: 'tableHeader',
                                    colSpan: 4,
                                    border: [false, false, false, true]
                                }, {}, {}, {}],
                                [{
                                    text: 'Name',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('architectName'),
                                    fontSize: 9
                                }, {
                                    text: 'Registration No',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: getIt('registrationNumber'),
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }],
                                [{
                                    text: 'Address',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('architectAddress'),
                                    colSpan: 3,
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }, {}, {}],
                                [{
                                    text: 'Email',
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, true, true]
                                }, {
                                    text: getIt('architectEmail'),
                                    fontSize: 9
                                }, {
                                    text: 'Phone',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: getIt('architectPhone'),
                                    fontSize: 9,
                                    border: [true, true, false, true]
                                }]
                            ]
                        }
                    }
                ],
                pageBreak: 'after'
            },
            /**
             * (2) Scope of Assessment
             * */
            {
                stack: [{
                        text: 'The Scope of Assessment',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [{
                                stack: [{
                                        text: scopeOfAssessment1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfAssessment2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfAssessment3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfAssessment4,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfAssessment5,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfAssessment6,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfAssessment7,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: scopeOfAssessment8,
                                        style: 'paragraphMargin'
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [{
                                        text: scopeOfAssessment9
                                    },
                                    makeAGap(),
                                    {
                                        text: 'What is included in this Report',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        ul: [{
                                                text: whatIncU1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatIncU2,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatIncU3,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatIncU4,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatIncU5,
                                                style: 'bulletMargin'
                                            }
                                        ]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'What is not included in this Report',
                                        style: 'pageSubHeader'
                                    },
                                    {
                                        ul: [{
                                                text: whatNotIncU1,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotIncU2,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotIncU3,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotIncU4,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotIncU5,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotIncU6,
                                                style: 'bulletMargin'
                                            },
                                            {
                                                text: whatNotIncU7
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
             * (3) Defect Definitions & Assessment Access
             **/
            {
                stack: [{
                        text: 'Defect Definitions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        table: {
                            body: [
                                [{
                                    text: ''
                                }, {
                                    text: 'DEFINITION',
                                    fontSize: 9,
                                    bold: true,
                                    color: 'red'
                                }],
                                [{
                                    text: 'Minor Defect/Maintenance Item',
                                    style: 'tableText'
                                }, {
                                    text: defectDefinitionP1,
                                    style: 'tableLongBoldJustifiedText',
                                    fontSize: 9
                                }],
                                [{
                                    text: 'Major Defect',
                                    style: 'tableText'
                                }, {
                                    stack: [{
                                            text: defectDefinitionP2,
                                            style: 'tableLongBoldJustifiedText',
                                            margin: [0, 0, 0, 4]
                                        },
                                        {
                                            ul: [{
                                                    text: defectDefinitionP2a
                                                },
                                                {
                                                    text: defectDefinitionP2b
                                                },
                                                {
                                                    text: defectDefinitionP2c
                                                }
                                            ],
                                            style: 'tableText'
                                        }
                                    ]
                                }],
                                [{
                                    text: 'Serious Structural Defect',
                                    style: 'tableText'
                                }, {
                                    stack: [{
                                            text: defectDefinitionP3,
                                            style: 'tableLongBoldJustifiedText',
                                            margin: [0, 0, 0, 4]
                                        },
                                        {
                                            ul: [
                                                defectDefinitionP3a,
                                                defectDefinitionP3b,
                                                defectDefinitionP3c
                                            ],
                                            style: 'tableText'
                                        },
                                        {
                                            text: defectDefinitionP4,
                                            style: 'tableLongBoldJustifiedText',
                                            margin: [0, 4, 0, 0]
                                        }
                                    ]
                                }]
                            ]
                        },
                        layout: 'lightHorizontalLines'
                    },
                    makeAGap(),
                    {
                        text: 'Assessment Access',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [{
                                stack: [{
                                        text: assessmentAccessColLeft1,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessColLeft2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessColRight1
                                    }
                                ]
                            },
                            {
                                stack: [{
                                        text: assessmentAccessColRight2,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessColRight3,
                                        style: 'paragraphMargin'
                                    },
                                    {
                                        text: assessmentAccessColRight4
                                    }
                                ]
                            }
                        ],
                        style: 'colText'
                    }
                ],
                columnGap: 20,
                pageBreak: 'after'
            },
            /**
             * (4) Property Assessment Summary
             */
            {
                stack: [{
                        text: 'Your Property Assessment Summary',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: yourProAssSumText,
                        fontSize: 9,
                        alignment: 'justify'
                    },
                    makeAGap(),
                    {
                        table: {
                            widths: [100, '*', 100, '*'],
                            body: [
                                [{
                                    text: 'PROPERTY SUMMARY - Primary construction materials and site conditions',
                                    style: 'tableHeader',
                                    colSpan: 4
                                }, {}, {}, {}],
                                [{
                                    text: 'Sub-Structure',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps0').value.trim(),
                                    style: 'tableText'
                                }, {
                                    text: 'Floors',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps1').value.trim(),
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'Roof',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps2').value.trim(),
                                    style: 'tableText'
                                }, {
                                    text: 'Walls',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps3').value.trim(),
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'Windows',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps5').value.trim(),
                                    style: 'tableText'
                                }, {
                                    text: 'No of Storeys',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps4').value.trim(),
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'Site Grade',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps6').value.trim(),
                                    style: 'tableText'
                                }, {
                                    text: 'Furnished',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps7').value.trim(),
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'Extension / Renovations',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps9').value.trim(),
                                    style: 'tableText'
                                }, {
                                    text: 'Tree Coverage',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps8').value.trim(),
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'Estimated Age / Period',
                                    style: 'tableBoldTextAlignLeft'
                                }, {
                                    text: document.getElementById('ps10').value.trim(),
                                    colSpan: 3,
                                    style: 'tableText'
                                }, {}, {}]
                            ]
                        }
                    },
                    makeAGap(),
                    {
                        text: 'Summary of the Condition of the Property',
                        style: 'pageSubHeader',
                        fontSize: 9,
                        margin: [0, 0, 0, 0]
                    },
                    {
                        table: {
                            widths: [250, '*'],
                            body: [
                                [{
                                    text: 'Apparent condition of the building with respect to its age:',
                                    style: 'tableText',
                                    border: [false, true, false, false]
                                }, {
                                    text: getValueinSCP(),
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, false, false]
                                }]
                            ]
                        }
                    },
                    {
                        text: 'Major Defects',
                        style: 'pageSubHeader',
                        fontSize: 9,
                        margin: [0, 0, 0, 0]
                    },
                    {
                        table: {
                            widths: [250, '*'],
                            body: [
                                [{
                                    text: 'Are there any Major Defects evident?',
                                    style: 'tableText',
                                    border: [false, true, false, false]
                                }, {
                                    text: document.getElementById('majorDefects').value.trim(),
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, false, false]
                                }]
                            ]
                        }
                    },
                    {
                        text: 'Serious Structural Defects:',
                        style: 'pageSubHeader',
                        fontSize: 9,
                        margin: [0, 0, 0, 0]
                    },
                    {
                        table: {
                            widths: [250, '*'],
                            body: [
                                [{
                                    text: 'Are there any Serious Structural Defects evident?',
                                    style: 'tableText',
                                    border: [false, true, false, false]
                                }, {
                                    text: document.getElementById('seriousStructuralDefects').value.trim(),
                                    style: 'tableBoldTextAlignLeft',
                                    border: [false, true, false, false]
                                }]
                            ]
                        }
                    },
                    makeAGap(),
                    {
                        text: 'Evident Defect Summary',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'key',
                        style: 'key'
                    },
                    getKeyTable(),
                    makeAGap(),
                    getEvidentDefectTable(),
                    makeAGap(),
                    {
                        text: 'Assessment Summary:',
                        style: 'pageSubHeader',
                        fontSize: 9,
                        margin: [0, 0, 0, 0]
                    },
                    getYPASAssessmentSummary(),
                    makeAGap(),
                    {
                        text: 'Design Potential Summary',
                        style: 'pageSubHeader',
                        fontSize: 9,
                        margin: [0, 0, 0, 0]
                    },
                    getYPASDesignPS()
                ],
                pageBreak: 'after'
            },
            /**
             * (5) Property Assessment Notes
             */
            {
                stack: [{
                        text: 'Property Assessment Notes',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'Professional and Trade Guide',
                        style: 'pageSubHeader'
                    },
                    {
                        text: 'Your architect may refer you to the following professional or tradespeople:',
                        fontSize: 9,
                        margin: [0, 0, 0, 3]
                    },
                    {
                        table: {
                            body: [
                                [{
                                    text: 'AR',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Architects',
                                    style: 'tableText'
                                }, {
                                    text: 'DR',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Drainers',
                                    style: 'tableText'
                                }, {
                                    text: 'IC',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Insulation Contractors',
                                    style: 'tableText'
                                }, {
                                    text: 'PL',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Plasterers',
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'BC',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Building Contractors',
                                    style: 'tableText'
                                }, {
                                    text: 'EL',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Electrical Contractors',
                                    style: 'tableText'
                                }, {
                                    text: 'LA',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Landscape Architects',
                                    style: 'tableText'
                                }, {
                                    text: 'PV',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Paving-Various',
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'BR',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Bricklayers',
                                    style: 'tableText'
                                }, {
                                    text: 'EX',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Excavating Contractors',
                                    style: 'tableText'
                                }, {
                                    text: 'LG',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Landscape Gardener & Contractors',
                                    style: 'tableText'
                                }, {
                                    text: 'RC',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Roof Const./Repair/Clean',
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'CC',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Concrete Contractors',
                                    style: 'tableText'
                                }, {
                                    text: 'FC',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Fencing Contractors',
                                    style: 'tableText'
                                }, {
                                    text: 'UP',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Underpinning Services',
                                    style: 'tableText'
                                }, {
                                    text: 'SE',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Structural Engineers',
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'CJ',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Carpenters & Joiners',
                                    style: 'tableText'
                                }, {
                                    text: 'GL',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Glass Merch/Glazier',
                                    style: 'tableText'
                                }, {
                                    text: 'PC',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Pest Control',
                                    style: 'tableText'
                                }, {
                                    text: 'TL',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Tile Layers-Wall/Floor',
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'CM',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Cabinet Makers',
                                    style: 'tableText'
                                }, {
                                    text: 'HM',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Home Maint./Repair',
                                    style: 'tableText'
                                }, {
                                    text: 'PD',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Painters & Decorators',
                                    style: 'tableText'
                                }, {
                                    text: 'TS',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Tilers & Slaters',
                                    style: 'tableText'
                                }],
                                [{
                                    text: 'DH',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Damp Houses',
                                    style: 'tableText'
                                }, {
                                    text: 'HR',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'House Restump/Reblock',
                                    style: 'tableText'
                                }, {
                                    text: 'PG',
                                    style: "tableBoldTextAlignLeft"
                                }, {
                                    text: 'Plumbers & Gasfitters',
                                    style: 'tableText'
                                }, {}, {}]
                            ]
                        }
                    }
                ]
            },
            /**
             * (6) Site and Garden Page
             **/
            {
                stack: [
                    makeAGap(),
                    {
                        text: 'Site & Garden',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'Key',
                        style: 'key'
                    },
                    getKeyTable(),
                    makeAGap(),
                    getGarage(),
                    getBoundary(),
                    makeAGap(),
                    //Display images
                    {
                        alignment: 'center',
                        layout: 'noBorders',
                        table: {
                            body: displayThreeImg("AccessmentSiteImagesContainer")
                        }
                    },
                    // {
                    //     alignment: 'center',
                    //     columns: [
                    //         displayThreeImg("AccessmentSiteImages")
                    //         // {
                    //         //     stack: [
                    //         //         getPhoto('AssessmentSiteImage0'),
                    //         //         {
                    //         //             text: getText('AssessmentSiteImageText0'),
                    //         //             width: 160,
                    //         //             style: 'tableText',
                    //         //             bold: true,
                    //         //             margin: [0, 3, 0, 0]
                    //         //         }
                    //         //     ]
                    //         // },
                    //         // {
                    //         //     stack: [
                    //         //         getPhoto('AssessmentSiteImage1'),
                    //         //         {
                    //         //             text: getText('AssessmentSiteImageText1'),
                    //         //             width: 160,
                    //         //             style: 'tableText',
                    //         //             bold: true,
                    //         //             margin: [0, 3, 0, 0]
                    //         //         }
                    //         //     ]
                    //         // },
                    //         // {
                    //         //     stack: [
                    //         //         getPhoto('AssessmentSiteImage2'),
                    //         //         {
                    //         //             text: getText('AssessmentSiteImageText2'),
                    //         //             width: 160,
                    //         //             style: 'tableText',
                    //         //             bold: true,
                    //         //             margin: [0, 3, 0, 0]
                    //         //         }
                    //         //     ]
                    //         // }
                    //     ],
                    //     columnGap: 17
                    // },
                    makeAGap(),
                    //drawAccessNotesTable('SiteGardenAccessLimitation', 'SiteGardenAccessNotes', 'MajFound', 'siteGardenLbl1', 'MainFound', 'siteGardenLbl2', 'generalNotes')
                    drawNotesTable('AssessmentSiteNotesTable', 'AssessmentSiteLimitationSelect', 'AssessmentSiteLimitationNote', 'AssessmentSiteMajorFound', 'assessmentSiteMajorRecommendations', 'AssessmentSiteMinorFound', 'assessmentSiteMinorRecommendations', 'assessmentSiteGeneralNotes')

                ],
                pageBreak: 'after'
            },
            /**
             * (7) Property Exterior
             **/
            {
                stack: [{
                        text: 'Property Exterior',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'Key',
                        style: 'key'
                    },
                    getKeyTable(),
                    makeAGap(),
                    getRoof(),
                    getRoofSpace(),
                    getSubFloor(),
                    getWalls(),
                    getVerandas(),
                    getAssessmentOthers(),
                    makeAGap(),
                    {
                        alignment: 'center',
                        layout: 'noBorders',
                        table: {
                            body: displaySixImg("AccessmentExteriorImagesContainer")
                        }
                    },

                    // {
                    //     alignment: 'center',
                    //     columns: [{
                    //         stack: [
                    //             getPhoto('AssessmentExteriorImage0'),
                    //             {
                    //                 text: getText('AssessmentExteriorImageText0'),
                    //                 width: 160,
                    //                 bold: true,
                    //                 style: 'tableText',
                    //                 margin: [0, 3, 0, 0]
                    //             },
                    //             makeAGap(),
                    //             getPhoto('AssessmentExteriorImage3'),
                    //             {
                    //                 text: getText('AssessmentExteriorImageText3'),
                    //                 width: 160,
                    //                 bold: true,
                    //                 style: 'tableText',
                    //                 margin: [0, 3, 0, 0]
                    //             }
                    //         ]
                    //     }, {
                    //         stack: [
                    //             getPhoto('AssessmentExteriorImage1'),
                    //             {
                    //                 text: getText('AssessmentExteriorImageText1'),
                    //                 width: 160,
                    //                 bold: true,
                    //                 style: 'tableText',
                    //                 margin: [0, 3, 0, 0]
                    //             },
                    //             makeAGap(),
                    //             getPhoto('AssessmentExteriorImage4'),
                    //             {
                    //                 text: getText('AssessmentExteriorImageText4'),
                    //                 width: 160,
                    //                 bold: true,
                    //                 style: 'tableText',
                    //                 margin: [0, 3, 0, 0]
                    //             }
                    //         ]
                    //     }, {
                    //         stack: [
                    //             getPhoto('AssessmentExteriorImage2'),
                    //             {
                    //                 text: getText('AssessmentExteriorImageText2'),
                    //                 width: 160,
                    //                 bold: true,
                    //                 style: 'tableText',
                    //                 margin: [0, 3, 0, 0]
                    //             },
                    //             makeAGap(),
                    //             getPhoto('AssessmentExteriorImage5'),
                    //             {
                    //                 text: getText('AssessmentExteriorImageText5'),
                    //                 width: 160,
                    //                 bold: true,
                    //                 style: 'tableText',
                    //                 margin: [0, 3, 0, 0]
                    //             }
                    //         ]
                    //     }],
                    //     columnGap: 20
                    // },
                    makeAGap(),
                    drawNotesTable('AssessmentPropertyExteriorNotesTable', 'AssessmentPropertyExteriorLimitationSelect', 'AssessmentPropertyExteriorLimitationNote', 'AssessmentPropertyExteriorMajorFound', 'assessmentPropertyExteriorMajorRecommendations', 'AssessmentPropertyExteriorMinorFound', 'assessmentPropertyExteriorMinorRecommendations', 'assessmentPropertyExteriorGeneralNotes')

                ],
                pageBreak: 'after'
            },
            /**
             * (8) Property Interior - Living & Bedroom Areas
             **/
            {
                stack: [{
                        text: 'Property Interior - Living & Bedroom Areas',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'Key',
                        style: 'key'
                    },
                    getKeyTable(),
                    makeAGap(),
                    getAssessmentEntry(),
                    getAssessmentRooms(),
                    getAssessmentStairs(),
                    getAssessmentKitchen(),
                    getAssessmentBedroom(),
                    makeAGap(),
                    {
                        alignment: 'center',
                        layout: 'noBorders',
                        table: {
                            body: displaySixImg("AccessmentInteriorLivingImagesContainer")
                        }
                    },
                    {
                        alignment: 'center',
                        layout: 'noBorders',
                        table: {
                            body: displaySixImg("AccessmentInteriorBedroomImagesContainer")
                        }
                    },
                    // {
                    //     alignment: 'center',
                    //     columns: [{
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorLivingImage0'),
                    //                 {
                    //                     text: getText('AssessmentInteriorLivingImageText0'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 },
                    //                 makeAGap(),
                    //                 getPhoto('AssessmentInteriorLivingImage3'),
                    //                 {
                    //                     text: getText('AssessmentInteriorLivingImageText3'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorLivingImage1'),
                    //                 {
                    //                     text: getText('AssessmentInteriorLivingImageText1'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 },
                    //                 makeAGap(),
                    //                 getPhoto('AssessmentInteriorLivingImage4'),
                    //                 {
                    //                     text: getText('AssessmentInteriorLivingImageText4'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorLivingImage2'),
                    //                 {
                    //                     text: getText('AssessmentInteriorLivingImageText2'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 },
                    //                 makeAGap(),
                    //                 getPhoto('AssessmentInteriorLivingImage5'),
                    //                 {
                    //                     text: getText('AssessmentInteriorLivingImageText5'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 }
                    //             ]
                    //         }
                    //     ],
                    //     columnGap: 17
                    // },
                    // {
                    //     alignment: 'center',
                    //     columns: [{
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorBedroomImage0'),
                    //                 {
                    //                     text: getText('AssessmentInteriorBedroomImageText0'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 },
                    //                 makeAGap(),
                    //                 getPhoto('AssessmentInteriorBedroomImage3'),
                    //                 {
                    //                     text: getText('AssessmentInteriorBedroomImageText3'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorBedroomImage1'),
                    //                 {
                    //                     text: getText('AssessmentInteriorBedroomImageText1'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 },
                    //                 makeAGap(),
                    //                 getPhoto('AssessmentInteriorBedroomImage4'),
                    //                 {
                    //                     text: getText('AssessmentInteriorBedroomImageText4'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorBedroomImage2'),
                    //                 {
                    //                     text: getText('AssessmentInteriorBedroomImageText2'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 },
                    //                 makeAGap(),
                    //                 getPhoto('AssessmentInteriorBedroomImage5'),
                    //                 {
                    //                     text: getText('AssessmentInteriorBedroomImageText5'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 5, 0, 0]
                    //                 }
                    //             ]
                    //         }
                    //     ],
                    //     columnGap: 17
                    // },
                    makeAGap(),
                    drawNotesTable('AssessmentPropertyInteriorNotesTable', 'AssessmentPropertyInteriorLimitationSelect', 'AssessmentPropertyInteriorLimitationNote',
                        'AssessmentPropertyInteriorMajorFound', 'assessmentPropertyInteriorMajorRecommendations', 'AssessmentPropertyInteriorMinorFound',
                        'assessmentPropertyInteriorMinorRecommendations', 'assessmentPropertyInteriorGeneralNotes')
                ],
                pageBreak: 'after'
            },
            /**
             * (9) Property Interior - Bedroom Areas
             **/
            // {
            //     stack: [
            //         {
            //             text: 'Property Interior - Bedroom Areas',
            //             style: 'pageTopHeader'
            //         },
            //         makeAGap(),
            //         {
            //             text: 'Key',
            //             style: 'key'
            //         },
            //         getKeyTable(),
            //         makeAGap(),
            //         getAssessmentBedroom(),
            //         makeAGap(),
            //         {
            //             alignment: 'center',
            //             columns: [
            //                 {
            //                     stack: [
            //                         getPhoto('AssessmentInteriorBedroomImage0'),
            //                         {
            //                             text: getText('AssessmentInteriorBedroomImageText0'),
            //                             width: 160,
            //                             style: 'tableText',
            //                             bold: true,
            //                             margin: [0, 3, 0, 0]
            //                         },
            //                         makeAGap(),
            //                         getPhoto('AssessmentInteriorBedroomImage3'),
            //                         {
            //                             text: getText('AssessmentInteriorBedroomImageText3'),
            //                             width: 160,
            //                             style: 'tableText',
            //                             bold: true,
            //                             margin: [0, 3, 0, 0]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     stack: [
            //                         getPhoto('AssessmentInteriorBedroomImage1'),
            //                         {
            //                             text: getText('AssessmentInteriorBedroomImageText1'),
            //                             width: 160,
            //                             style: 'tableText',
            //                             bold: true,
            //                             margin: [0, 3, 0, 0]
            //                         },
            //                         makeAGap(),
            //                         getPhoto('AssessmentInteriorBedroomImage4'),
            //                         {
            //                             text: getText('AssessmentInteriorBedroomImageText4'),
            //                             width: 160,
            //                             style: 'tableText',
            //                             bold: true,
            //                             margin: [0, 3, 0, 0]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     stack: [
            //                         getPhoto('AssessmentInteriorBedroomImage2'),
            //                         {
            //                             text: getText('AssessmentInteriorBedroomImageText2'),
            //                             width: 160,
            //                             style: 'tableText',
            //                             bold: true,
            //                             margin: [0, 3, 0, 0]
            //                         },
            //                         makeAGap(),
            //                         getPhoto('AssessmentInteriorBedroomImage5'),
            //                         {
            //                             text: getText('AssessmentInteriorBedroomImageText5'),
            //                             width: 160,
            //                             style: 'tableText',
            //                             bold: true,
            //                             margin: [0, 3, 0, 0]
            //                         }
            //                     ]
            //                 }
            //             ],
            //             columnGap: 17
            //         },
            //         makeAGap(),
            //         drawNotesTable('AssessmentPropertyInteriorNotesTable','AssessmentPropertyInteriorLimitationSelect','AssessmentPropertyInteriorLimitationNote',
            //             'AssessmentPropertyInteriorMajorFound','assessmentPropertyInteriorMajorRecommendations','AssessmentPropertyInteriorMinorFound',
            //             'assessmentPropertyInteriorMinorRecommendations','assessmentPropertyInteriorGeneralNotes')
            //
            //     ],
            //     pageBreak: 'after'
            // },
            /**
             * (10) Property Interior - Service (wet) Areas
             **/
            {
                stack: [{
                        text: 'Property Interior - Service (wet) Areas',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: 'Key',
                        style: 'key'
                    },
                    getKeyTable(),
                    makeAGap(),
                    getAssessmentBathroom(),
                    getAssessmentLaundry(),
                    getAssessmentPowderRoom(),
                    getAssessmentServices(),
                    makeAGap(),
                    //display images, max 3
                    {
                        alignment: 'center',
                        layout: 'noBorders',
                        table: {
                            body: displayThreeImg("AccessmentInteriorServiceImagesContainer")
                        }
                    },

                    // {
                    //     alignment: 'center',
                    //     columns: [{
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorServiceImage0'),
                    //                 {
                    //                     text: getText('AssessmentInteriorServiceImageText0'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 3, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorServiceImage1'),
                    //                 {
                    //                     text: getText('AssessmentInteriorServiceImageText1'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 3, 0, 0]
                    //                 }
                    //             ]
                    //         },
                    //         {
                    //             stack: [
                    //                 getPhoto('AssessmentInteriorServiceImage2'),
                    //                 {
                    //                     text: getText('AssessmentInteriorServiceImageText2'),
                    //                     width: 160,
                    //                     style: 'tableText',
                    //                     bold: true,
                    //                     margin: [0, 3, 0, 0]
                    //                 }
                    //             ]
                    //         }
                    //     ],
                    //     columnGap: 20
                    // },
                    makeAGap(),
                    drawNotesTable('AssessmentServiceNotesTable', 'AssessmentServiceLimitationSelect', 'AssessmentServiceLimitationNote',
                        'AssessmentServiceMajorFound', 'assessmentServiceMajorRecommendations', 'AssessmentServiceMinorFound',
                        'assessmentServiceMinorRecommendations', 'assessmentServiceGeneralNotes')
                ],
                pageBreak: 'after'
            },
            /**
             * (11) Attachment Page
             * */
            {
                stack: [{
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

                    makeAGap(),
                    getAttachmentTable(),
                    makeAGap(),
                    {
                        text: 'General Advice',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        alignment: 'justify',
                        columns: [{
                                ul: [{
                                        text: generalAdviceList1,
                                        style: 'bulletMargin'
                                    },
                                    {
                                        text: generalAdviceList2,
                                        style: 'bulletMargin'
                                    },
                                    {
                                        text: generalAdviceList3,
                                        style: 'bulletMargin'
                                    },
                                    {
                                        text: generalAdviceList4,
                                        style: 'bulletMargin'
                                    },
                                    {
                                        text: generalAdviceList5
                                    }
                                ],
                                style: 'colText'
                            },
                            {
                                stack: [{
                                        ul: [{
                                            text: generalAdviceList6
                                        }]
                                    },
                                    makeAGap(),
                                    {
                                        text: 'For Strata, Stratum and Company Title Properties',
                                        bold: true
                                    },
                                    {
                                        text: generalAdviceText
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
             * (12) Terms and Conditions
             * */
            {
                stack: [{
                        text: 'Terms & Conditions',
                        style: 'pageTopHeader'
                    },
                    makeAGap(),
                    {
                        text: termsAndConditionsP1,
                        style: 'paragraphMargin',
                        alignment: 'justify'
                    },
                    {
                        text: termsAndConditionsP2,
                        style: 'paragraphMargin',
                        alignment: 'justify'
                    },
                    {
                        text: termsAndConditionsP3,
                        style: 'paragraphMargin',
                        alignment: 'justify'
                    },
                    {
                        text: termsAndConditionsP4,
                        style: 'paragraphMargin',
                        alignment: 'justify'
                    },
                    {
                        text: termsAndConditionsP5,
                        alignment: 'justify'
                    },
                    makeAGap(),
                    {
                        ol: [{
                                text: termsAndConditionsOL1,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL2,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL3,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL4,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL5,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL6,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL7,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL8,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL9,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL10,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL11,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL12,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            },
                            {
                                text: termsAndConditionsOL13,
                                style: 'bulletMargin',
                                alignment: 'justify'
                            }
                        ]
                    }
                ],
                style: 'colText'
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
            },
            key: {
                fontSize: 10,
                bold: true,
                color: 'red',
                margin: [0, 0, 0, 5]
            }
        }
    };
    // Open a new tab and show the PDF
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

    //if the mode is final or preview, open the pdf directly
    else {
        if (isMobile.any()) {
            if (isSafari && iOS) {
                //alert("You are using Safari on iOS!");
                pdfMake.createPdf(docDefinition).open();
            } else {
                var reader = new FileReader();

                pdfMake.createPdf(docDefinition).getBlob(function (blob) {
                    reader.onload = function (e) {
                        //window.location.href = reader.result;
                        window.open(reader.result, '_blank');
                    };
                    reader.readAsDataURL(blob);
                });
            }

        } else {
            console.log("It is on pc");
            pdfMake.createPdf(docDefinition).open();
        }

    }
}

/**
 * build a table dynamic table for the site and garden.
 * first check the first input int the entire table,use checkInput(id)
 * if the function return true, there is data, build the table
 * if the function return false, there is no data, do not build the table.
 * */
// function table(data, columns, id) {
//     var a = {};
//     if (checkInput(id) == true) {
//         a = {
//             style: 'table',
//             alignment: 'center',
//             table: {
//                 widths: [50, 80, 18, 80, 18, 80, 18, 80, 18],
//                 body: buildTableBody(data, columns)
//             }
//         }
//     } else {
//         a = {text: ''}
//     }
//     return a;
// }
//
// function buildTableBody(data, columns) {
//     var body = [];
//
//     data.forEach(function (row) {
//         var dataRow = [];
//
//         columns.forEach(function (column) {
//             dataRow.push(row[column].toString());
//         });
//
//         body.push(dataRow);
//     });
//     return body;
// }