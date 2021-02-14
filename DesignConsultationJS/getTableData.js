/**
 * Created by Cindy Huo on 15/01/18.
 */

/**
 * Get CLIENT DETAILS Table
 * */
function getCustomerDetailsTable() {
    var result;
    result = {
        table: {
            widths: [85, '*', 70, '*', 40, '*'],
            body: [
                [{
                    text: 'CLIENT DETAILS',
                    border: [false, false, false, true],
                    style: 'tableHeader',
                    colSpan: 6
                }, {}, {}, {}, {}, {}],
                [{
                    text: 'Name',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('customer_name'),
                    fontSize: 9,
                    colSpan: 2
                },{},
                {
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'
                    //border: [false, true, false, true]
                }, {
                    text: getIt('customer_booking'),
                    fontSize: 9,
                    colSpan: 2,
                    border: [true, true, false, true]
                },{}],
                [{
                    text: 'Telephone No',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('customer_phone'),
                    fontSize: 9,
                    colSpan: 2
                },{}, {
                    text: 'Mobile No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('customer_mobile'),
                    fontSize: 9,
                    border: [true, true, false, true],
                    colSpan: 2
                },{}],
                [{
                    text: 'Report Date',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                },{
                    text: getIt('customer_date'),
                    fontSize: 9,
                    border: [true, true, false, true],
                    colSpan: 5
                }, {},{},{},{}],
                [{
                    text: 'Address of Property',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('customer_address'),
                    fontSize: 9,
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Suburb',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('customer_suburb'),
                    fontSize: 9
                }, {
                    text: 'State',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('customer_state'),
                    fontSize: 9
                }, {
                    text: 'Postcode',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('customer_postcode'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }]
            ]
        }
    };
    return result;
}

/**
 * Get your Architect Details Tables
 * */
function getYourArchitectDetailsTable() {
    var result;
    result = {
        table: {
            widths: [80, '*', 70, '*', 40, '*'],
            body: [
                [{
                    text: 'YOUR ARCHITECT',
                    style: 'tableHeader',
                    colSpan: 6,
                    border: [false, false, false, true]
                }, {}, {}, {}, {}, {}],
                 [{
                    text: 'Name',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('architect_name'),
                    fontSize: 9,
                    colSpan: 2
                },{}, {
                    text: 'Registration No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('architect_registration'),
                    fontSize: 9,
                    border: [true, true, false, true],
                    colSpan: 2
                },{}],
                [{
                    text: 'Address',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('architect_address'),
                    colSpan: 5,
                    fontSize: 9,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Email',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('architect_email'),
                    fontSize: 9,
                    colSpan: 2
                },{}, {
                    text: 'Phone',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('architect_phone'),
                    fontSize: 9,
                    border: [true, true, false, true],
                    colSpan: 2
                },{}]
            ]
        }
    };
    return result;
}

/**
 * Get Detail of Advice Sought Table
 */
function getAdviceSoughtTable()
{
    var result;

    result = {
        table:
        {
            widths:['*'],
            body:[
                [
                    {
                        text:'DETAILS OF ADVICE SOUGHT',
                        style:'tableHeader',
                        border: [false, false, false, true]
                    }
                ],
                [
                    {
                        text:getIt('DetailsOfAdviceSought'),
                        style: 'tableText',
                        border: [false, true, false, true]
                    }
                ]
            ]
        }
    };

    return result;
}

/**
 * Get Project Brief Table
 */
function getProjectBriefTable()
{
    var result;

    result = {
        table:
        {
            widths:['auto','*'],
            body:[
                [
                    {
                        text:'PROJECT BRIEF',
                        style:'tableHeader',
                        colSpan:2,
                        border: [false, false, false, true]
                    },{}
                ],
                [
                    {
                        text:'Current Accommodation',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, false, true, true]
                    },
                    {
                        text:getIt('accommodation'),
                        fontSize: 9,
                        border: [false, false, false, true]
                    }

                ],
                [
                    {
                        text:'Future Requirements',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, false, true, true]
                    },
                    {
                        text:getIt('requirement'),
                        fontSize: 9,
                        border: [false, false, false, true]
                    }

                ],
                [
                    {
                        text:'BUDGET ($)',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, false, true, true]
                    },
                    {
                        text:getIt('budget'),
                        fontSize: 9,
                        border: [false, false, false, true]
                    }

                ]
            ]
        }
    };
    return result
}

/**
 * Get Existing Condition Summary Table
 */
function getConditionSummaryTable()
{
    var result;

    result = {
        table:
        {
            widths:['*'],
            body:[
                [
                    {
                        text:'EXISTING CONDITION SUMMARY',
                        style:'tableHeader',
                        border: [false, false, false, true]
                    }
                ],
                [
                    {
                        text:getIt('ConditionSummary'),
                        style: 'tableText',
                        border: [false, false, false, true]
                    }
                ]
            ]
        }
    };
    return result;
}

/**
 * Get Relevant building or development controls Table
 */
function getRelevantBDControlTable()
{
    var result;

    result = {
        table:
        {
            widths:['*'],
            body:[
                [
                    {
                        text:'RELEVANT BUILDING OR DEVELOPMENT CONTROLS',
                        style:'tableHeader',
                        border: [false, false, false, true]
                    }
                ],
                [
                    {
                        text:getIt('RelevantControl'),
                        style: 'tableText',
                        border: [false, false, false, true]
                    }
                ]
            ]
        },
    };
    return result;
}

/**
 * Get Development Option &/or Opportunities Table
 */
function getDevelopmentOOTable()
{
    var result;

    result = {
        table:
        {
            widths:['*'],
            body:[
                [
                    {
                        text:'DEVELOPMENT OPTIONS &/OR OPPORTUNITIES',
                        style:'tableHeader',
                        border: [false, false, false, true]
                    }
                ],
                [
                    {
                        text:getIt('DevelopmentOO'),
                        style: 'tableText',
                        border: [false, false, false, true]
                    }
                ]
            ]
        }
    };
    return result;
}

/**
 * Get Who else is involved Table
 */
function getPeopleInvolvedTable(){
    var table = document.getElementById('DesignConsultationPeopleTable');
    var rowCount = table.rows.length;
    var totalPeople = rowCount - 1;
    var data = [];
    var tableBody;

    var Row0 = [
        {
            alignment: 'center',
            text: 'Who they are',
            style: 'tableBoldTextAlignLeft',
            color: 'red',
            border: [false, true, true, true]
        },
        {
            text: 'What they do',
            color: 'red',
            style: 'tableBoldTextAlignLeft',
            border: [false, true, false, true]
        }
    ];
    data.push(Row0);

    //second row
    var people0 = document.getElementById('DesignConsultationInvolvedPeople0').value.trim();
    if(people0 != "") {
        var Row1 = [
            {
                text: 'Land surveyor',
                style: 'tableText',
                alignment: 'center',
                noWrap: true,
                border: [false, false, true, true]
            },
            {
                stack: [
                    {
                        text: LandSurveyor1,
                        style: 'bulletMargin'
                    },
                    {
                        ul: [
                            {
                                text: LandSurveyor2,
                                style: 'bulletMargin'
                            },
                            {
                                text: LandSurveyor3,
                                style: 'bulletMargin'
                            },
                            {
                                text: LandSurveyor4,
                                style: 'bulletMargin'
                            },
                            {
                                text: LandSurveyor5,
                                style: 'bulletMargin'
                            },
                            {
                                text: LandSurveyor6,
                                style: 'bulletMargin'
                            },
                            {
                                text: LandSurveyor7,
                                style: 'bulletMargin'
                            }
                        ]
                    }
                ],
                style: 'tableText',
                border: [false, false, false, true]
            }
        ];
        data.push(Row1);
    }

    var people1 = document.getElementById('DesignConsultationInvolvedPeople1').value.trim();
    if(people1 != "") {
        var Row2 = [
            {
                text: 'Geotechnical (soil) engineer',
                style: 'tableText',
                alignment: 'center',
                noWrap: true,
                noWrap: [0, 5, 0, 5],
                border: [false, false, true, true]
            },
            {
                text: GeotechnicalEngineer1,
                style: 'tableText',
                margin: [0, 5, 0, 5],
                border: [false, false, false, true]
            }
        ];
        data.push(Row2);
    }

    var people2 = document.getElementById('DesignConsultationInvolvedPeople2').value.trim();
    if(people2 != "") {
        var Row3 = [
            {
                text: 'Structural engineer',
                style: 'tableText',
                alignment: 'center',
                noWrap: true,
                margin: [0, 5, 0, 5],
                border: [false, false, true, true]
            },
            {
                text: StructuralEngineer1,
                style: 'tableText',
                margin: [0, 5, 0, 5],
                border: [false, false, false, true]
            }
        ];
        data.push(Row3);
    }

    var people3 = document.getElementById('DesignConsultationInvolvedPeople3').value.trim();
    if(people3 != "") {
        var Row4 = [
            {
                text: 'Building surveyor',
                style: 'tableText',
                alignment: 'center',
                noWrap: true,
                margin: [0, 5, 0, 5],
                border: [false, false, true, true]
            },
            {
                text: BuildingSurveyor1,
                style: 'tableText',
                margin: [0, 5, 0, 5],
                border: [false, false, false, true]
            }
        ];
        data.push(Row4);
    }

    var people4 = document.getElementById('DesignConsultationInvolvedPeople4').value.trim();
    if(people4 != "") {
        var Row5 = [
            {
                text: 'Planning advisor',
                style: 'tableText',
                alignment: 'center',
                noWrap: true,
                margin: [0, 5, 0, 5],
                border: [false, false, true, true]
            },
            {
                text: PlanningAdvisor1,
                style: 'tableText',
                margin: [0, 5, 0, 5],
                border: [false, false, false, true]
            }
        ];
        data.push(Row5);
    }

    var people5 = document.getElementById('DesignConsultationInvolvedPeople5').value.trim();
    if(people5 != "") {
        var Row6 = [
            {
                text: 'Energy rater',
                style: 'tableText',
                alignment: 'center',
                noWrap: true,
                margin: [0, 5, 0, 5],
                border: [false, false, true, true]
            },
            {
                text: EnergyRater1,
                style: 'tableText',
                margin: [0, 5, 0, 5],
                border: [false, false, false, true]
            }
        ];
        data.push(Row6);
    }

    var people6 = document.getElementById('DesignConsultationInvolvedPeople6').value.trim();
    if(people6 != "") {
        var Row7 = [
            {
                text: 'Quantity Surveyor',
                style: 'tableText',
                alignment: 'center',
                noWrap: true,
                margin: [0, 5, 0, 5],
                border: [false, false, true, true]
            },
            {
                text: QuantitySurveyor1,
                style: 'tableText',
                margin: [0, 5, 0, 5],
                border: [false, false, false, true]
            }
        ];
        data.push(Row7);
    }

    if (rowCount > 8) {
        for (var i = 7; i < totalPeople; i++) {
            var peopleID = 'DesignConsultationInvolvedPeople' + i;
            var people = document.getElementById(peopleID).value;
            var descriptionID = 'DesignConsultationInvolvedDescription' + i;
            var description = document.getElementById(descriptionID).value;
            var row = [
                {
                    text: people,
                    style: 'tableText',
                    alignment: 'center',
                    noWrap: true,
                    margin: [0, 5, 0, 5],
                    border: [false, false, true, true]
                },
                {
                    text: description,
                    style: 'tableText',
                    margin: [0, 5, 0, 5],
                    border: [false, false, false, true]
                }
            ];
            data.push(row);
        }
    }

    tableBody = {
        table: {
            widths: ['auto', '*'],
            body: data
        }
    };
    return tableBody;
}









