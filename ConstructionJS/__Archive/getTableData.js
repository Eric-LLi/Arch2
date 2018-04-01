/**
 * Created by Fafa on 8/10/17.
 */

/**
 * Get CUSTOMER DETAILS Table
 * */
function getCustomerDetailsTable() {
    var result;
    result = {
        table: {
            widths: [61, '*', 51, '*'],
            body: [
                [{
                    text: 'CUSTOMER DETAILS',
                    border: [false, false, false, true],
                    style: 'tableHeader',
                    colSpan: 4
                }, {}, {}, {}],
                [{
                    text: 'Name',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('customer_name'),
                    colSpan: 3,
                    fontSize: 9,
                    border: [true, true, false, true]
                }, {}, {}],
                [{
                    text: 'Telephone No',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('customer_phone'),
                    fontSize: 9

                }, {
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'

                }, {
                    text: getIt('customer_booking'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }]
            ]
        }
    };
    return result;
}

/**
 * Get INSPECTION DETAILS
 * */
function getAssessmentDetailsTable() {
    var result;
    result = {
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
                    text: getIt('address'),
                    colSpan: 5,
                    fontSize: 9,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Suburb',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('suburb'),
                    fontSize: 9
                }, {
                    text: 'State',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('state'),
                    fontSize: 9
                }, {
                    text: 'Postcode',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('postcode'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Date of Inspection',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('dateOfInspection'),
                    fontSize: 9,
                    colSpan: 2
                }, {}, {
                    text: 'Time of Inspection',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('timeOfInspection'),
                    fontSize: 9,
                    colSpan: 2,
                    border: [true, true, false, true]
                }, {}],
                [{
                    text: 'Proposed Use of Building',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('proposedUsed'),
                    colSpan: 5,
                    fontSize: 9,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Weather conditions',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('weatherConditions'),
                    colSpan: 5,
                    fontSize: 9,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Verbal summary to',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('verbalSummary'),
                    fontSize: 9,
                    colSpan: 2
                }, {}, {
                    text: 'Date',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('date'),
                    colSpan: 2,
                    fontSize: 9,
                    border: [true, true, false, true]
                }, {}]
            ]
        }
    };
    return result;
}

/**
 * Get ASSESSOR DETAILS
 * */
function getAssessorDetailsTable() {
    var result;
    result = {
        table: {
            widths: [61, '*', 80, '*'],
            body: [
                [{
                    text: 'ASSESSOR DETAILS',
                    style: 'tableHeader',
                    colSpan: 4,
                    border: [false, false, false, true]
                }, {}, {}, {}],
                [{
                    text: 'Name',
                    style: 'boldText',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                },
                {
                    text: getIt('architect'),
                    fontSize: 9
                },
                {
                    text:'Registration No:',
                    style: 'tableBoldTextAlignLeft'
                },
                {
                    text:getIt('registrationNo'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }],
                [
                    {
                        text:'Address',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text:getIt('architectAddress'),
                        fontSize: 9,
                        colSpan:3,
                        border: [true, true, false, true]
                    },
                    {},{}
                ],
                [{
                    text: 'Email',
                    border: [false, true, true, true],
                    style: 'tableBoldTextAlignLeft'
                },
                {
                    text: getIt('email'),
                    fontSize: 9
                },
                {
                    text: 'Phone',
                    style: 'tableBoldTextAlignLeft'
                },
                {
                    text: getIt('architectPhone'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }]
            ]
        }
    };
    return result;
}

/**
 * Get PROPERTY SUMMARY – Primary construction materials and site conditions Table
 * */
function getPropertySummaryTable() {
    var result;
    result = {
        table: {
            body: [
                [{
                    text: 'PROPERTY SUMMARY - Primary construction materials and site conditions',
                    style: 'tableHeader',
                    colSpan: 4
                }, {}, {}, {}],
                [{
                    text: 'Sub-Structure',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps0').value.trim()
                }, {
                    text: 'Floors',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps1').value.trim()
                }],
                [{
                    text: 'Roof',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps2').value.trim()
                }, {
                    text: 'Walls',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps3').value.trim()
                }],
                [{
                    text: 'Windows',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps5').value.trim()
                }, {
                    text: 'No of Storeys',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps4').value.trim()
                }],
                [{
                    text: 'Site Grade',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps6').value.trim()
                }, {
                    text: 'Furnished',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps7').value.trim()
                }],
                [{
                    text: 'Extension / Renovations',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps9').value.trim()
                }, {
                    text: 'Tree Coverage',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps8').value.trim()
                }],
                [{
                    text: 'Estimated Age / Period',
                    style: 'boldText'
                }, {
                    text: document.getElementById('ps10').value.trim(),
                    colSpan: 3
                }, {}, {}]
            ]
        }
    };
    return result;
}

/**
 * Get TREATMENT & CONDUCIVE CONDITIONS SUMMARY – refer body of Report for full details Table
 * */
function getTreatmentAndConductiveTable() {
    var result;
    result = {
        table: {
            body: [
                [{
                    text: 'TREATMENT & CONDUCIVE CONDITIONS SUMMARY – refer body of Report for full details',
                    style: 'tableHeader',
                    colSpan: 4
                }, {}, {}, {}],
                [{
                    text: 'Evidence of previous Pest Treatment',
                    style: 'boldText'
                }, {
                    text: getIt('TCCS01')
                }, {
                    text: 'Type',
                    style: 'boldText'
                }, {
                    text: getIt('TCCS02')
                }],
                [{
                    text: 'Risk posed by environmental conditions conducive to timber pest attack',
                    style: 'boldText',
                    colSpan: 3
                }, {}, {}, {
                    text: getIt('TCCS03')
                }],
                [{
                    text: 'Is an intrusive inspection of inaccessible areas recommended',
                    style: 'boldText',
                    colSpan: 3
                }, {}, {}, {
                    text: getIt('TCCS04')
                }]
            ]
        }
    };
    return result;
}

/*
    Get the ASSESSMENT STAGE REVIEWED  (as marked) Table
 */
function getAssessmentStageReviewed()
{
    var result;
    //noinspection JSUnusedGlobalSymbols
    result = {
        table: {
            widths: ['*', '*', '*','*'],
            body: [
                [
                    {
                        text:['ASSESSMENT STAGE REVIEWED',
                            { text: ' (as marked)', fontSize: 9}
                        ],
                        style: 'tableHeader',
                        colSpan: 4
                    },{},{},{}
                ],
                [
                  {
                    text: 'QA 1: Contract Review \n An explanation of common contract terms and client/builder obligations.',
                    style: 'tableBoldTextAlignLeft'
                  },
                  {
                    text:getIt('contractReview'),
                    fontSize: 9

                  },
                  {
                      text:['QA 5: Services (pre-lining)\n',
                          {text:'When preliminary plumbing and electrical works are complete and wall insulation is in place.',
                           bold:false}
                      ],
                      style: 'tableBoldTextAlignLeft'
                  },
                  {
                      text:getIt('services'),
                      fontSize: 9
                  }
                ],
                [
                    {
                        text: 'QA 2: Base\n After concrete footings are poured or after stumps, piers, columns or the concrete floor is completed.',
                        style: 'tableBoldTextAlignLeft'

                    },
                    {
                        text:getIt('base'),
                        fontSize: 9

                    },
                    {
                        text:['QA 6: Fix/Fit-out (pre-paint)\n',
                            {text:'When all interior work is complete and the property is ready for painting.',
                                bold:false}
                        ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('fixFitOut'),
                        fontSize: 9
                    }
                ],
                [
                    {
                        text: 'QA 3: Frame\n When the wall and roof frame is complete.',
                        style: 'tableBoldTextAlignLeft'

                    },
                    {
                        text:getIt('frame'),
                        fontSize: 9

                    },
                    {
                        text:['QA 7: Pre-handover \n',
                            {text:'When the property is presented for handover.',
                                bold:false}
                        ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('preHandover'),
                        fontSize: 9
                    }
                ],
                [
                    {
                        text: 'QA 4: Lock Up\n When external walls are complete, windows, doors and roof coverings are fixed, flooring is laid and the building is secure.',
                        style: 'tableBoldTextAlignLeft'

                    },
                    {
                        text:getIt('lockUp'),
                        fontSize: 9

                    },
                    {
                        text:['QA 8: Maintenance Period Expiry\n',
                            {text:'A final Assessment just before the Maintenance or Defects Liability period expires (typically 3-6 months after completion).',
                                bold:false}
                        ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('maintenancePeriod'),
                        fontSize: 9
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
    };
    return result;
}

/*
    Get the Assessment Extent
 */
function getAssessmentExtent()
{
    var result;
    //noinspection JSUnusedGlobalSymbols
    result =
    {
        table:
        {
            widths: ['*', '*'],
            body:[
                [
                    {
                        text: 'ASSESSMENT EXTENT ',
                        style:'tableHeader',
                        colSpan:2
                    },{}
                ],
                [
                    {
                        text: 'Extent of new building work: ',
                        style: 'tableBoldTextAlignLeft'

                    },
                    {
                        text:getIt('extentOfBuilding'),
                        fontSize: 9

                    }
                ],
                [
                    {
                        text:'Where Part new building work, described extent:',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('describeExtent'),
                        fontSize: 9
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

    };
    return result;
}

/*
    Get Construction Summary
 */
function getConstructionSummary()
{
    //console.log(getIt('firstFloorSubstrate'));
    var result;
    //noinspection JSUnusedGlobalSymbols
    result = {
        table:
        {
            widths: ['*', '*','*','*','*','*'],
            body:[
                [
                    {
                        text:'CONSTRUCTION SUMMARY',
                        style:'tableHeader',
                        colSpan:6
                    },{},{},{},{},{}
                ],
                [
                    {
                        text:'No of Storeys',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('noOfStoreys'),
                        fontSize: 9
                    },
                    {
                        text:'Footings',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('footings'),
                        fontSize: 9
                    },
                    {
                        text:'Roof',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('roof'),
                        fontSize: 9
                    }
                ],
                [
                    {
                        text:'Ground Floor Structure',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('groundFloorStructure'),
                        fontSize: 9
                    },
                    {
                        text:'Ground Floor Substrate',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('groundFloorSubstrate'),
                        fontSize: 9
                    },
                    {
                        text:'Ground Floor Walls',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('groundFloorWalls'),
                        fontSize: 9
                    }
                ],
                [
                    {
                        text:'First Floor Structure',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('firstFloorStructure'),
                        fontSize: 9
                    },
                    {
                        text:'First Floor Substrate',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('firstFloorSubstrate'),
                        fontSize: 9
                    },
                    {
                        text:'First Floor Walls',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('firstFloorWalls'),
                        fontSize: 9
                    }
                ],
                [
                    {
                        text:'Windows',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('windows'),
                        fontSize: 9
                    },
                    {
                        text:getIt('constructionSummaryName1'),
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('constructionSummaryValue1'),
                        fontSize: 9
                    },
                    {
                        text:getIt('constructionSummaryName2'),
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('constructionSummaryValue2'),
                        fontSize: 9
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
    };

    return result;
}

/**
 * Get the info in the Attachment page and Draw the table - BetterTENG
 * */
function getAttachmentTable() {

    var result;

    result = {
        table: {
            widths: [120, '*', 120, '*', 120, '*'],
            body: [
                [{
                    text: 'ITEM',
                    style: 'tableHeader'
                }, '', {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, '', {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, ''],
                [{
                    text: 'Property Maintenance Guide',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('propertyMaintenanceGuide').value,
                    style: 'tableText'
                }, {
                    text: 'Cracking in Masonry',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('crackingInMasonry').value,
                    style: 'tableText'
                }, {
                    text: 'Treatment of Dampness',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('treatmentOfDampness').value,
                    style: 'tableText'
                }],
                [{
                    text: 'Health & Safety Warning',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('healthSafetyWarning').value,
                    style: 'tableText'
                }, {
                    text: 'Roofing & Guttering',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('roofingGuttering').value,
                    style: 'tableText'
                }, {
                    text: 'Re-stumping',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('reStumping').value,
                    style: 'tableText'
                }],
                [{
                    text: 'Termites & Borers',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('termitesBorers').value,
                    style: 'tableText'
                }, {
                    text: '',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: '',
                    style: 'tableText'
                }, {
                    text: '',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text:'',
                    style: 'tableText'
                }]
            ]
        }
    };

    return result;
}

/*
    Get External Elements
 */
function getExternalElements()
{
    var result;

    result = {
        table:
        {
            widths:['auto','*'],
            body:[
                [
                    {
                        text:'External Elements',
                        style:'tableHeader',
                        colSpan:2
                    },{}
                ],
                [
                    {
                        text:'Site',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('externalSites'),
                        fontSize: 9
                    }

                ],
                [
                    {
                        text:'Out Buildings & Attached Structures',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('externalOutBuilding'),
                        fontSize: 9
                    }

                ],
                [
                    {
                        text:'External Building Elements',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('externalBuilding'),
                        fontSize: 9
                    }

                ],
                [
                    {
                        text:'External Access Limitations',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('externalAccessLimitation'),
                        fontSize: 9
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
    };

    return result
}

/*
 Get Internal Areas
 */
function getInternalAreas()
{
    var result;

    result = {
        table:
        {
            widths:['auto','*'],
            body:[
                [
                    {
                        text:'Internal Areas',
                        style:'tableHeader',
                        colSpan:2
                    },{}
                ],
                [
                    {
                        text:'Internal Living & Bedroom Areas',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('internalLiving'),
                        fontSize:9
                    }

                ],
                [
                    {
                        text:'Internal Service(Wet) Areas',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('internalServiceAreas'),
                        fontSize:9
                    }

                ],
                [
                    {
                        text:['Services',{text:'*',fontSize:8}],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('internalServices'),
                        fontSize:9
                    }

                ],
                [
                    {
                        text:'Internal Access Limitations',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getIt('internalAccessLimitations'),
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
    };

    return result
}

/*
    get list of evident defective or incomplete work
 */

function getListOfDefective()
{
    var result;

    result = {
        table:
        {
            widths:['*'],
            body:[
                [
                    {
                        text:'List of Evident Defective Or Incomplete Work',
                        style:'tableHeader'
                    }
                ],
                [
                    {
                        text:getIt('listOfDefective'),
                        style: 'tableText'
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
    };

    return result;
}


/*
    get Images
 */
function getImagesTable()
{
    var result;
    //check whether the user upload images.
    var firstImage = document.getElementById('ConstructionImage0');
    if (firstImage)
    {
        result = {
            table:
            {
                headerRows: 1,
                body:[
                    [
                        {
                            text:'List of Evident Defective Or Incomplete Work/Not Visible',
                            style:'tableHeader',
                            margin: [0, 0, 0, 20],
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage0'),
                        displayImage('ConstructionImage1')
                    ],
                    [
                        getImageText('ConstructionImageText0'),
                        getImageText('ConstructionImageText1')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],

                    [
                        displayImage('ConstructionImage2'),
                        displayImage('ConstructionImage3')
                    ],
                    [
                        getImageText('ConstructionImageText2'),
                        getImageText('ConstructionImageText3')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage4'),
                        displayImage('ConstructionImage5')
                    ],
                    [
                        getImageText('ConstructionImageText4'),
                        getImageText('ConstructionImageText5')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage6'),
                        displayImage('ConstructionImage7')
                    ],
                    [
                        getImageText('ConstructionImageText6'),
                        getImageText('ConstructionImageText7')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage8'),
                        displayImage('ConstructionImage9')
                    ],
                    [
                        getImageText('ConstructionImageText8'),
                        getImageText('ConstructionImageText9')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage10'),
                        displayImage('ConstructionImage11')
                    ],
                    [
                        getImageText('ConstructionImageText10'),
                        getImageText('ConstructionImageText11')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage12'),
                        displayImage('ConstructionImage13')
                    ],
                    [
                        getImageText('ConstructionImageText12'),
                        getImageText('ConstructionImageText13')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage14'),
                        displayImage('ConstructionImage15')
                    ],

                    [
                        getImageText('ConstructionImageText14'),
                        getImageText('ConstructionImageText15')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage16'),
                        displayImage('ConstructionImage17')
                    ],
                    [
                        getImageText('ConstructionImageText16'),
                        getImageText('ConstructionImageText17')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage18'),
                        displayImage('ConstructionImage19')
                    ],
                    [
                        getImageText('ConstructionImageText18'),
                        getImageText('ConstructionImageText19')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage20'),
                        displayImage('ConstructionImage21')
                    ],
                    [
                        getImageText('ConstructionImageText20'),
                        getImageText('ConstructionImageText21')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage22'),
                        displayImage('ConstructionImage23')
                    ],
                    [
                        getImageText('ConstructionImageText22'),
                        getImageText('ConstructionImageText23')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage24'),
                        displayImage('ConstructionImage25')
                    ],
                    [
                        getImageText('ConstructionImageText24'),
                        getImageText('ConstructionImageText25')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage26'),
                        displayImage('ConstructionImage27')
                    ],
                    [
                        getImageText('ConstructionImageText26'),
                        getImageText('ConstructionImageText27')
                    ],
                    [
                        {
                            text:'',
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('ConstructionImage28'),
                        displayImage('ConstructionImage29')
                    ],
                    [
                        getImageText('ConstructionImageText28'),
                        getImageText('ConstructionImageText29')
                    ]

                ]
            },
            layout: {
                hLineColor: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
                },
                vLineColor: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
                }
            }

        };
    }
    else
    {
        result = {
            table:{
                body:[
                    [
                        {
                            text:'List of Evident Defective Or Incomplete Work/Not Visible',
                            style:'tableHeader',
                            colSpan:2,
                            border:[false,false,false,false]
                        },{}
                    ]
                    ]
            }
        };
    }


    return result;
}