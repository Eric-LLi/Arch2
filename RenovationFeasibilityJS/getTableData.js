/**
 * Created by Fafa on 25/10/17.
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
                // [{
                //     text: 'CUSTOMER DETAILS',
                //     border: [false, false, false, true],
                //     style: 'tableHeader',
                //     colSpan: 4
                // }, {}, {}, {}],
                // [{
                //     text: 'Name',
                //     style: 'tableBoldTextAlignLeft',
                //     border: [false, true, true, true]
                // }, {
                //     text: getIt('customer_name'),
                //     fontSize: 9
                // }, {
                //     text: 'Report Date',
                //     style: 'tableBoldTextAlignLeft'
                // }, {
                //     text: getIt('customer_report'),
                //     fontSize: 9,
                //     border: [true, true, false, true]
                // }],
                // [{
                //     text: 'Telephone No',
                //     style: 'tableBoldTextAlignLeft',
                //     border: [false, true, true, true]
                // }, {
                //     text: getIt('customer_phone'),
                //     fontSize: 9

                // }, {
                //     text: 'Booking No',
                //     style: 'tableBoldTextAlignLeft'

                // }, {
                //     text: getIt('customer_booking'),
                //     fontSize: 9,
                //     border: [true, true, false, true]
                // }]
            

            [{
                text: 'CLIENT DETAILS',
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
                fontSize: 9,
            },
            {
                text: 'Booking No',
                style: 'tableBoldTextAlignLeft'
                //border: [false, true, false, true]
            }, {
                text: getIt('customer_booking'),
                fontSize: 9,
                border: [true, true, false, true]
            }],
            [{
                text: 'Telephone No',
                style: 'tableBoldTextAlignLeft',
                border: [false, true, true, true]
            }, {
                text: getIt('customer_phone'),
                fontSize: 9,
               
            }, {
                text: 'Mobile No',
                style: 'tableBoldTextAlignLeft'
            }, {
                text: getIt('customer_mobile'),
                fontSize: 9,
                border: [true, true, false, true],
            }],
            [{
                text: 'Report Date',
                style: 'tableBoldTextAlignLeft',
                border: [false, true, true, true]
            },{
                text: getIt('customer_report'),
                fontSize: 9,
                border: [true, true, false, true],
                colSpan: 3
            }, {},{}]
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
                    text: 'Date of Assessment',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('dateOfAssessment'),
                    fontSize: 9,
                    colSpan: 2
                }, {}, {
                    text: 'Time of Assessment',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('timeOfAssessment'),
                    fontSize: 9,
                    colSpan: 2,
                    border: [true, true, false, true]
                }, {}],
                [{
                    text: 'Existing Use of Building',
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
                    text: 'ARCHITECT DETAILS',
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
        // {
            
        //     alignment:'center',
        //     text:'\nITEM',
        //     style:'tableBoldTextAlignLeft',
        //     border:[false,true,false,true],
        //     color: 'red'
        // },
        {
            colSpan:3,
            text:'BROAD OPINION OF COST',
            color: 'red',
            alignment:'center',
            border:[false,true,false,true],
            style:'tableBoldTextAlignLeft'
        },'',''
    ];
    data.push(firstRow);

    var secondRow = [
        {
            alignment:'center',
            text:'ITEM',
            style:'tableBoldTextAlignLeft',
            border:[false,true,false,true],
            color: 'red'
        },
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


    var rowCount = document.getElementById('renovationFeasibilityTable').rows.length;
    var usefulRow = rowCount - 5;
    for (var i = 0;i<usefulRow;i++)
    {
        var lowCost = document.getElementById('renovationLow'+i).value;
        var highCost = document.getElementById('renovationHigh' + i).value;
        var name = document.getElementById('renovationName' + i).value;
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
            text:getIt('renovationLowSubTotal'),
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('renovationHighSubTotal'),
            border:[false,true,false,true],
            style: 'tableText'
        }
    ];
    data.push(subTotalRow);

    var GSTRow = [
        {
            text:'GST:',
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('renovationLowGST'),
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('renovationHighGST'),
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
            text:getIt('renovationLowTotal'),
            border:[false,true,false,true],
            style: 'tableText'
        },
        {
            text:getIt('renovationHighTotal'),
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
                splitTextArea('renovationExtraItemCosts')
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

function getInvolvedTable()
{
    var tableBody;
     tableBody = {
         table: {
             widths:['auto','*'],
             body: [
                 [
                     {
                         text:'WHO THEY ARE',
                         color: 'red',
                         style:'tableBoldTextAlignLeft',
                         alignment:'center'
                     },
                     {
                         text:'WHAT THEY DO',
                         color: 'red',
                         style:'tableBoldTextAlignLeft',
                         alignment:'center'
                     }
                 ],
                 [
                     {
                         text:'\n\n\n\nLand surveyor',
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
                 ],
                 [
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
                 ],
                 [
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
                 ],
                 [
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
                 ],
                 [
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
                 ],
                 [
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
                 ],
                 [
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
                 ]
             ]
         }
    };

    return tableBody;

}



function getPeopleInvolvedTable()
{
    var table = document.getElementById('renovationPeopleTable');
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
    var people0 = document.getElementById('renovationInvolvedPeople0').value.trim();
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

    var people1 = document.getElementById('renovationInvolvedPeople1').value.trim();
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

    var people2 = document.getElementById('renovationInvolvedPeople2').value.trim();
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


    var people3 = document.getElementById('renovationInvolvedPeople3').value.trim();
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


    var people4 = document.getElementById('renovationInvolvedPeople4').value.trim();
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

    var people5 = document.getElementById('renovationInvolvedPeople5').value.trim();
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


    var people6 = document.getElementById('renovationInvolvedPeople6').value.trim();
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
            var peopleID ='renovationInvolvedPeople' + i;
            var people = document.getElementById(peopleID).value;
            var descriptionID = 'renovationInvolvedDescription' + i;
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

/*
    get Images
 */
function getImagesTable()
{
    var result;
    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#renovationFeasibilityDrawings').find('> form');
    var imgSection = {};
  
    console.log("the current total image form is: " + totalContainers.length + "if it is less than 4, image number need to -1, the last one is only a form, no image");


    if (totalContainers.length == 0) {
        tableBody = {
            text:''
        };
        console.log(tableBody);
    }
    else
    {
        var firstRow = [
            {
                text:"Drawings",
                fontSize: 15,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 20]
             
            }
        ];
        data.push(firstRow);

        for (var i = 0; i < totalContainers.length; i++) 
        {
            var img = totalContainers.eq(i).children('img').get(0);
                imgSrc = totalContainers.eq(i).children('img').attr('src'),
                imgLabel = totalContainers.eq(i).children('label').text(),
                imgText = totalContainers.eq(i).children('input').eq(0).val(),
                imgAngle = totalContainers.eq(i).children('input').eq(1).val(),
                width = 0,
                height = 0,
                alignment = 'left'
                margin = [0,5,0,15];

            if(imgAngle == null || imgAngle == "undefined" || imgAngle == "")
            {
                imgAngle = 0;
            }
            else
            {
                imgAngle = parseInt(imgAngle);
            }
            if (typeof imgSrc  != "undefined")
            {
            
                var canvas = document.createElement("canvas");
                canvas.height = canvas.width = 0;
                var context = canvas.getContext('2d');
                var imgwidth = img.offsetWidth;
                var imgheight = img.offsetHeight;
                canvas.width = imgwidth ;
                canvas.height = imgheight;
                console.log("the drawing height is: " + imgheight);
                console.log("the drawing width is: " + imgwidth);

                if(imgAngle == 90)
                {
                    canvas.width = imgheight ;
                    canvas.height = imgwidth;
                    var scale = imgheight/imgwidth;
                    // console.log("scale: " + scale);
                    // console.log("canvas.width: " + canvas.width);
                    // console.log("canvas.height: " + canvas.height);
                    context.save();
                    context.fillStyle = "white";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    //context.translate(imgwidth/2, imgheight/2);
                    context.rotate(imgAngle*Math.PI/180);
                    context.drawImage(img,canvas.width/scale,0, -(imgheight)/scale, -(imgwidth)*scale);
                    context.restore();
                }
                else if (imgAngle == 180)
                {
                    canvas.width = imgwidth ;
                    canvas.height = imgheight;
                    var scale = imgwidth/imgheight;
                    // console.log("scale: " + scale);
                    // console.log("canvas.width: " + canvas.width);
                    // console.log("canvas.height: " + canvas.height);
                    context.save();
                    context.fillStyle = "white";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    // context.translate(imgwidth/2, imgheight/2);
                    context.rotate(imgAngle*Math.PI/180);
                    context.drawImage(img,0,0, -(imgwidth), -(imgheight));
                    context.restore();
                }
                else if(imgAngle == 270)
                {
                    canvas.width = imgheight ;
                    canvas.height = imgwidth;
                    var scale = imgheight/imgwidth;
                    // console.log("scale: " + scale);
                    // console.log("canvas.width: " + canvas.width);
                    // console.log("canvas.height: " + canvas.height);
                    context.save();
                    context.fillStyle = "white";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    // context.translate(imgwidth/2, imgheight/2);
                    context.rotate(imgAngle*Math.PI/180);
                    context.drawImage(img,0,canvas.height*scale, -(imgheight)/scale, -(imgwidth)*scale);
                    context.restore();
                }
                else
                {
                    canvas.width = imgwidth ;
                    canvas.height = imgheight;
                    var scale = imgwidth/imgheight;
                    // console.log("scale: " + scale);
                    // console.log("canvas.width: " + canvas.width);
                    // console.log("canvas.height: " + canvas.height);
                    context.save();
                    context.fillStyle = "white";
                    context.fillRect(0, 0, canvas.width, canvas.height);
                    // context.translate(imgwidth/2, imgheight/2);
                    context.rotate(imgAngle*Math.PI/180);
                    context.drawImage(img,canvas.width,canvas.height, -(imgwidth), -(imgheight));
                    context.restore();
                }
                imgSrc = canvas.toDataURL("image/jpeg");



                if (img.width >= img.height) {
                    width = 500;
                    height = 500;
                    margin = [10,5,0,10];
                } else {
                    width = img.width * 500 / img.height;
                    height = 500;
                    margin = [10,5,0,10];
                }
    


                if(imgAngle == 0 || imgAngle == 180)
                {
                    console.log("1");
                    if(imgheight >= 950)
                    {
                        console.log("1.1 height is greater than 950, will separate the page, need to set the height")
                        imgSection = {
                            image: imgSrc,
                            height: 600,
                            width: 500,
                            //fit:[500,500],
                            margin:margin,
                            alignment: 'center'
                        }
                    }
                    else
                    {
                        console.log("1.2 height is smaller than 950,don't need to set the height, only set the width")
                        imgSection = {
                            image: imgSrc,
                            width: 500,
                            //fit:[500,500],
                            margin:margin,
                            alignment: 'center'
                        }
                    }
                }
                else
                {
                    console.log("2")
                    imgSection = {
                        image: imgSrc,
                        width: 500,
                        //fit:[500,500],
                        margin:margin,
                        alignment: 'center'
                    }
                }
                row.push({
                    stack: [
                        imgSection,
                        {
                            text: imgLabel,
                            bold:'true',
                            fontSize:10,
                            margin: [0, 2],
                            alignment: 'center'
                        },
                        {
                            columns:[
                                {
                                    width: 500,
                                    text: imgText,
                                    fontSize: 9,
                                    margin:[0,5,0,20]
                                }
                            ]
                            
                        }
                    ],
                    margin:[0,5,0,10]
                })
                divCount++;
                //the row has two cells, this row is completed, need to reset the row, and put this row into the table data
                if (divCount === 2) {
                    data.push(row);
                    row = [];
                    divCount = 1;
                }
            }
           
        }

        // //the last row only has one cell, need to put an empty cell to this row. 
        // if (divCount == 2) {
        //     //console.log("the last row only has one cell, need to put an empty cell to this row.")
        //     row.push({});
        //     data.push(row);
        // }

        tableBody = {
            pageBreak:'before',
            layout: {
                hLineColor: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
                },
                vLineColor: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
                }
            },
            table: {
                width:[500],
                headerRows: 1,
                body: data
            }
        }
    }
    return tableBody;
}



function convertImgToBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var src = canvas.toDataURL("image/jpeg");

    return src;
}


