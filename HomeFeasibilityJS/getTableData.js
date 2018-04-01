/**
 * Created by Fafa on 24/10/17.
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
                    fontSize: 9
                }, {
                    text: 'Report Date',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('customer_report'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }],
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
            widths: [110, '*', 25, '*', 40, '*'],
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
                    text: getIt('dateOfAssessment'),
                    fontSize: 9,
                    colSpan: 2
                }, {}, {
                    text: 'Time of Inspection',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('timeOfAssessment'),
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
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                },
                {
                    text: getIt('architect'),
                    fontSize: 9
                },
                {
                    text:'Registration No',
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
 * Get Required Approvals
 */
function getRequiredApprovals()
{
    var result;

    var otherName = getIt('other0');
    var otherValue = document.getElementById('approvals2').value;

    if (otherName.trim() === '')
    {
        result = {
            table:{
                widths: ['*', '*'],
                body:[
                    [
                        {
                            text:"REQUIRED  APPROVALS:",
                            style:'tableHeader',
                            border:[false,true,false,true],
                            colSpan:2
                        },{}
                    ],
                    [
                        {
                            text:"Development/Planning",
                            style:'tableBoldTextAlignLeft',
                            border:[false,true,false,true]
                        },
                        {
                            text:document.getElementById('approvals0').value,
                            fontSize:9,
                            alignment: 'right',
                            border:[false,true,false,true]
                        }
                    ],
                    [
                        {
                            text:"Building/Construction",
                            style:'tableBoldTextAlignLeft',
                            border:[false,true,false,true]
                        },
                        {
                            text:document.getElementById('approvals1').value,
                            fontSize:9,
                            alignment: 'right',
                            border:[false,true,false,true]
                        }
                    ]

                ]
            }
        };
    }
    else
    {
        result = {
            table:{
                widths: ['*', '*'],
                body:[
                    [
                        {
                            text:"REQUIRED  APPROVALS:",
                            style:'tableHeader',
                            border:[false,true,false,true],
                            colSpan:2
                        },{}
                    ],
                    [
                        {
                            text:"Development/Planning",
                            style:'tableBoldTextAlignLeft',
                            border:[false,true,false,true]
                        },
                        {
                            text:document.getElementById('approvals0').value,
                            fontSize:9,
                            alignment: 'right',
                            border:[false,true,false,true]
                        }
                    ],
                    [
                        {
                            text:"Building/Construction",
                            style:'tableBoldTextAlignLeft',
                            border:[false,true,false,true]
                        },
                        {
                            text:document.getElementById('approvals1').value,
                            fontSize:9,
                            alignment: 'right',
                            border:[false,true,false,true]
                        }
                    ],
                    [
                        {
                            text:otherName,
                            style:'tableBoldTextAlignLeft',
                            border:[false,true,false,true]
                        },
                        {
                            text:otherValue,
                            fontSize:9,
                            alignment: 'right',
                            border:[false,true,false,true]
                        }
                    ]

                ]
            }
        };
    }

    return result;
}

/**
 * Get Cost Table
 */
function getCostTable()
{
    var data = [];
    var tableBody;

    var firstRow = [
        {
            rowSpan:2,
            alignment:'center',
            text:'\nITEM',
            style:'tableBoldTextAlignLeft',
            border:[false,true,false,true],
            color: 'red'
        },
        {
            colSpan:2,
            text:'BROAD OPINION OF COST',
            color: 'red',
            border:[false,true,false,true],
            style:'tableBoldTextAlignLeft'
        },''
    ];
    data.push(firstRow);

    var secondRow = [
        '',
        {
            text:'Low Range',
            color: 'red',
            border:[false,true,false,true],
            style:'tableBoldTextAlignLeft'
        },
        {
            text:'High Range',
            color: 'red',
            border:[false,true,false,true],
            style:'tableBoldTextAlignLeft'
        }
    ];
    data.push(secondRow);


    var rowCount = document.getElementById('homeFeasibilityTable').rows.length;
    var usefulRow = rowCount - 5;
    for (var i = 0;i<usefulRow;i++)
    {
        var lowCost = document.getElementById('homeLow'+i).value;
        var highCost = document.getElementById('homeHigh' + i).value;
        var name = document.getElementById('homeName' + i).value;
        var a = [
            {
                text:name,
                border:[false,true,false,true],
                style: 'tableText'
            },
            {
                text:lowCost,
                border:[false,true,false,true],
                style: 'tableText'
            },
            {
                text:highCost,
                border:[false,true,false,true],
                style: 'tableText'
            }
        ];
        data.push(a);
    }


    var subTotalRow = [
        {
            text:'Subtotal:',
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('homeLowSubTotal'),
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('homeHighSubTotal'),
            border:[false,true,false,true],
            style: 'tableText'
        }
    ];
    data.push(subTotalRow);

    var GSTRow = [
        {
            text:'GST(10%):',
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('homeLowGST'),
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('homeHighGST'),
            border:[false,true,false,true],
            style: 'tableText'
        }
    ];
    data.push(GSTRow);

    var totalRow = [
        {
            text:'Total',
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('homeLowTotal'),
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('homeHighTotal'),
            border:[false,true,false,true],
            style: 'tableText'
        }
    ];
    data.push(totalRow);

    var extraCostRow = [
        {
            colSpan:3,
            style: 'tableText',
            border:[false,true,false,true],
            stack:[
                '\nAll or some of the following items may be necessary, but are not included in the broad opinion of cost:\n\n',
                splitTextArea('extraItemCosts')
            ]
        }
    ];
    data.push(extraCostRow);




    tableBody = {
        table: {
            widths:['*','*','*'],
            body: data
        }
    };



    return tableBody;
}

/**
 * The Involved Table
 */


function getPeopleInvolvedTable()
{
    var table = document.getElementById('homePeopleTable');
    var rowCount = table.rows.length;
    var totalPeople = rowCount - 1;
    var data = [];
    var tableBody;

    var firstRow = [
        {
            alignment:'center',
            text:'Who They Area',
            style:'tableBoldTextAlignLeft',

            color: 'red'
        },
        {
            text:'What they do',
            color: 'red',

            style:'tableBoldTextAlignLeft'
        }
    ];
    data.push(firstRow);

    //second row
    var people0 = document.getElementById('homeInvolvedPeople0').value.trim();
    if( people0 != "")
    {
        var secondRow = [
            {
                text:'Land surveyor',
                style: 'tableText',
                alignment:'center',
                noWrap: true

            },
            {
                stack:[
                    {
                        text:'\nPrepare different types of site information depending on your project.  This may include:',
                        style:'bulletMargin'
                    },

                    {
                        ul:[
                            {
                                text:'exact site boundaries, compared with fence lines;',
                                style: 'bulletMargin'
                            },
                            {
                                text:'ground levels and levels of existing buildings above the ground;',
                                style: 'bulletMargin'
                            },
                            {
                                text:'site contours;',
                                style: 'bulletMargin'
                            },
                            {
                                text:'exact locations of neighbouring or adjacent buildings;',
                                style: 'bulletMargin'
                            },
                            {
                                text:'building heights, and exact locations of significant features or vegetation;',
                                style: 'bulletMargin'
                            },
                            {
                                text:'location of easements.',
                                style: 'bulletMargin'
                            }
                        ]
                    }
                ],
                style: 'tableText'
            }
        ];
        data.push(secondRow);
    }

    var people1 = document.getElementById('homeInvolvedPeople1').value.trim();
    if( people1 != "")
    {
        var thirdRow = [
            {
                text:'Geotechnical (soil) engineer',
                style: 'tableText',
                alignment:'center',
                noWrap: true,
                margin:[0,5,0,5]
            },
            {
                text:'Using specialist equipment, take one or more samples of soil from your site for analysis, provide information about its structure and make recommendations about the design of the new substructure of the building, such as the slab or footings. ',
                style: 'tableText',
                margin:[0,5,0,5]
            }
        ];

        data.push(thirdRow);

    }

    var people2 = document.getElementById('homeInvolvedPeople2').value.trim();
    if( people2 != "")
    {
        var row = [
            {
                text:'Structural engineer',
                style: 'tableText',
                alignment:'center',
                noWrap: true,
                margin:[0,5,0,5]
            },
            {
                text:'Design and document the structural components of your building such as the slab or footings, wall bracing, roof beams etc, based on the architect’s design, geotechnical recommendations, and construction documentation. They generally prepare their own set of drawings and computations for the project which are usually mandatory for building permit/approval application.',
                style: 'tableText',
                margin:[0,5,0,5]
            }
        ];

        data.push(row);

    }


    var people3 = document.getElementById('homeInvolvedPeople3').value.trim();
    if( people3 != "")
    {
        var thirdRow = [
            {
                text:'Building surveyor',
                style: 'tableText',
                alignment:'center',
                noWrap: true,
                margin:[0,5,0,5]
            },
            {
                text:'Issue the building permit/approval and check the construction documentation for compliance with the National Construction Code.  Carry out on-site checks at major milestones during the build, such as completion of the slab and framing.  Note that the building surveyor does not carry out quality inspections or check for compliance with the scope of the contract throughout the build.',
                style: 'tableText',
                margin:[0,5,0,5]
            }
        ];

        data.push(thirdRow);

    }


    var people4 = document.getElementById('homeInvolvedPeople4').value.trim();
    if( people4 != "")
    {
        var thirdRow = [
            {
                text:'Planning advisor',
                style: 'tableText',
                alignment:'center',
                noWrap: true,
                margin:[0,5,0,5]
            },
            {
                text:'Advise on planning issues and may represent you at Council meetings or hearings.  Generally required only for complex projects.',
                style: 'tableText',
                margin:[0,5,0,5]
            }
        ];

        data.push(thirdRow);

    }

    var people5 = document.getElementById('homeInvolvedPeople5').value.trim();
    if( people5 != "")
    {
        var thirdRow = [
            {
                text:'Energy rater',
                style: 'tableText',
                alignment:'center',
                noWrap: true,
                margin:[0,5,0,5]
            },
            {
                text:'Analyse the project for compliance with required sustainability measures and provide advice regarding ways to achieve compliance, if required.',
                style: 'tableText',
                margin:[0,5,0,5]
            }
        ];

        data.push(thirdRow);

    }


    var people6 = document.getElementById('homeInvolvedPeople6').value.trim();
    if( people6 != "")
    {
        var thirdRow = [
            {
                text:'Quantity surveyor',
                style: 'tableText',
                alignment:'center',
                noWrap: true,
                margin:[0,5,0,5]
            },
            {
                text:'Prepare independent cost estimates for the build and provide advice regarding budgetary issues.',
                style: 'tableText',
                margin:[0,5,0,5]
            }
        ];

        data.push(thirdRow);

    }

    if (rowCount > 8)
    {
        for (var i = 7; i < totalPeople; i++) {
            var peopleID ='homeInvolvedPeople' + i;
            var people = document.getElementById(peopleID).value;
            var descriptionID = 'homeInvolvedDescription' + i;
            var description = document.getElementById(descriptionID).value;
            var row = [
                {
                    text:people,
                    style: 'tableText',
                    alignment:'center',
                    noWrap: true,
                    margin:[0,5,0,5]
                },
                {
                    text:description,
                    style: 'tableText',
                    margin:[0,5,0,5]
                }
            ];

            data.push(row);

        }
    }


    tableBody = {
        table: {
            widths:['auto','*'],
            body: data
        }
    };



    return tableBody;
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
                [
                    {
                        text: 'ITEM',
                        style: 'tableHeader'
                    },
                    '',
                    {
                        text: 'ITEM',
                        style: 'tableHeader'
                    },
                    '',
                    {
                        text: 'ITEM',
                        style: 'tableHeader'
                    },
                    ''
                ],
                [
                    {
                        text: 'Property Maintenance Guide',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('propertyMaintenanceGuide').value,
                        fontSize:9
                    },
                    {
                        text: 'Cracking in Masonry',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('crackingInMasonry').value,
                        fontSize:9
                    },
                    {
                        text: 'Treatment of Dampness',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('treatmentOfDampness').value,
                        fontSize:9
                    }
                ],
                [
                    {
                        text: 'Health & Safety Warning',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('healthSafetyWarning').value,
                        fontSize:9
                    },
                    {
                        text: 'Roofing & Guttering',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('roofingGuttering').value,
                        fontSize:9
                    },
                    {
                        text: 'Home Safety Checklist',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('homeSafetyChecklist').value,
                        fontSize:9
                    }
                ],
                [
                    {
                        text: 'Termites & Borers',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('termitesBorers').value,
                        fontSize:9
                    },
                    {
                        text: 'Re-stumping',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('reStumping').value,
                        fontSize:9
                    },
                    {
                        text: 'Cost Guide',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:document.getElementById('costGuide').value,
                        fontSize:9
                    }
                ]
            ]
        }
    };

    return result;
}


