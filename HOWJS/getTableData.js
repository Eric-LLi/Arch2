/**
 * Created by Fafa on 24/10/17.
 */

/**
 * Get CUSTOMER DETAILS Table
 * */
function getOwnerDetailsTable() {
    var result;
    result = {
        table: {
            widths: [85, '*', 70, '*', 40, '*'],
            body: [
                [
                    {
                        text: 'OWNER(S) AS PER TITLE DOCUMENT',
                        border: [false, true, false, true],
                        style: 'tableHeader',
                        colSpan: 6
                    },
                    {}, {}, {}, {}, {}
                ],
                [
                    {
                        text: 'Name',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('owner_name'),
                        border: [false, true, false, true],
                        fontSize: 9,
                        colSpan: 5
                    },
                    {}, {}, {}, {}
                ],
                [
                    {
                        text: 'Contact Address',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('owner_address'),
                        fontSize: 9,
                        colSpan: 3,
                        border: [true, true, false, true]
                    },
                    {}, {},
                    {
                        text: 'Booking',
                        style: 'tableBoldTextAlignLeft',
                        border: [true, true, true, true]
                    },
                    {
                        text: getIt('owner_bookingNo'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Suburb',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('owner_suburb'),
                        fontSize: 9
                    },
                    {
                        text: 'State',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('owner_state'),
                        fontSize: 9
                    },
                    {
                        text: 'Postcode',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('owner_postcode'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [{
                    text: 'Telephone No',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('owner_phone'),
                    fontSize: 9,
                    colSpan: 2
                },{}, {
                    text: 'Mobile No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('owner_mobile'),
                    fontSize: 9,
                    border: [true, true, false, true],
                    colSpan: 2
                },{}],
                [
                    {
                        text: 'Telephone (Bus):',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('owner_bus_telephone'),
                        fontSize: 9,
                        colSpan: 2
                    },
                    {},
                    {
                        text: 'Telephone (Home):',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('owner_home_telephone'),
                        fontSize: 9,
                        border: [true, true, false, true],
                        colSpan: 2
                    },
                    {}
                ]
            ]
        },
        margin: [0, 5, 0, 10]
    };
    return result;
}



/**
 * Get INSPECTION DETAILS
 * */
function getInspectionDetailsTable() {
    var result;
    result = {
        table: {
            widths: [85, '*', 60, 60, 80, '*'],
            body: [
                [
                    {
                        text: 'INSPECTION DETAILS',
                        style: 'tableHeader',
                        colSpan: 6,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}, {}, {}
                ],
                [
                    {
                        text: 'Address of Property',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_address'),
                        colSpan: 3,
                        fontSize: 9,
                        border: [true, true, false, true]
                    },
                    {}, {},
                    {
                        text: 'Lot No',
                        style: 'tableBoldTextAlignLeft',
                        border: [true, true, true, true]
                    },
                    {
                        text: getIt('inspection_lotNo'),
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Suburb',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_suburb'),
                        fontSize: 9
                    },
                    {
                        text: 'State',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspection_state'),
                        fontSize: 9
                    },
                    {
                        text: 'Postcode',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspection_postcode'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Municipality',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_municipality'),
                        colSpan: 2,
                        fontSize: 9
                    },
                    {},
                    {
                        text: 'Date of Report',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspection_dateOfReport'),
                        fontSize: 9,
                        colSpan: 2,
                        border: [true, true, false, true]
                    },
                    {}
                ],
                [
                    {
                        text: 'Date of Inspection',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_dateOfInspection'),
                        fontSize: 9
                    },
                    {
                        text: 'Time of Arrival',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspection_timeOfArrival'),
                        fontSize: 9,
                        border: [true, true, true, true]
                    },
                    {
                        text: 'Time of Departure',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_timeOfDeparture'),
                        fontSize: 9,
                        border: [false, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Weather Conditions:',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_weatherCondition'),
                        colSpan: 5,
                        fontSize: 9,
                        border: [true, true, false, true]
                    },
                    {}, {}, {}, {}
                ],
                [
                    {
                        text: 'Authorised Building Documents sighted:',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true],
                        colSpan: 2
                    },
                    {},
                    {
                        text: getIt('inspection_authorised'),
                        fontSize: 9,
                        border: [true, true, true, true]
                    },
                    {
                        text: 'Stamped Date:',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_stampedDate'),
                        fontSize: 9,
                        colSpan: 2,
                        border: [true, true, false, true]
                    },
                    {}
                ],
                [
                    {
                        text: getIt('inspection_textArea'),
                        colSpan: 6,
                        fontSize: 9,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}, {}
                ],
                [
                    {
                        text: InspectionDetails,
                        colSpan: 6,
                        fontSize: 11,
                        bold: true,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}, {}
                ]
            ]
        },
        margin: [0, 5, 0, 10]
    };
    return result;
}

/**
 * Get ASSESSOR DETAILS
 * */
function getInspectorDetailsTable() {
    var result;
    result = {
        table: {
            widths: [85, '*', 70, '*'],
            body: [
                [
                    {
                        text: 'INSPECTOR DETAILS',
                        style: 'tableHeader',
                        colSpan: 4,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}
                ],
                [
                    {
                        text: 'Archicentre Australia Architect',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspector_name'),
                        fontSize: 9
                    },
                    {
                        text: 'Registration No',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspector_registrationNumber'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Email',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspector_email'),
                        fontSize: 9
                    },
                    {
                        text: 'Phone',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspector_phone'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ]
            ]
        },
        margin: [0, 5, 0, 10]
    };
    return result;
}


/**
 * Get Report Authorisation
 * If the property state is in VIC, return data
 * If it is not in the VIC, return blank
 */
function getReportAuthorisation() {
    var result;

    var state = document.getElementById('inspection_state').value;

    if (state == 'VIC' || state == "Victoria") {
        console.log("need to show the signature");
        result = {
            table: {
                widths: ['*', '*'],
                body: [
                    [
                        {
                            text: 'REPORT AUTHORISATION (For Victoria only)',
                            style: 'tableHeader',
                            colSpan: 2,
                            border: [false, true, false, true]
                        },
                        {}
                    ],
                    [
                        {
                            //text: getIt('inspection_signature'),
                            border: [false, true, false, true],
                            stack:[
                                getSignature("how_signature_image")
                            ],
                            alignment: 'center'
                        },
                        {
                            text: getIt('inspection_blockPrintName'),
                            border: [false, true, false, true],
                            fontSize: 9,
                            bold: true,
                            alignment: 'center'
                        }
                    ],
                    [
                        {
                            text: '(Signature)',
                            border: [false, true, false, true],
                            fontSize: 9,
                            alignment: 'center'
                        },
                        {
                            text: '(BLOCK PRINT NAME)',
                            border: [false, true, false, true],
                            fontSize: 9,
                            alignment: 'center'
                        }

                    ]
                ]

            },
            margin: [0, 5, 0, 10]
        }
    } else {
        //console.log('return nothing');
        result = {
            text: ''
        }
    }


    return result;
}

/**
 * Get extent of work done by owner builder
 */
function getDoneWork() {
    var result;
    result = {
        table: {
            widths: [61, '*', '*', '*'],
            body: [
                [
                    {
                        text: 'EXTENT OF WORK DONE BY OWNER BUILDER',
                        style: 'tableHeader',
                        colSpan: 4,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}
                ],
                [
                    {
                        text: 'Total House?',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspection_totalHouse'),
                        fontSize: 9
                    },
                    {
                        text: 'Renovations and/or extensions?',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspection_renovationOrExtension'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Extent of Renovation and/or Extension Work where relevant (brief description)',
                        border: [false, true, false, true],
                        style: 'tableBoldTextAlignLeft',
                        colSpan: 4
                    },
                    {}, {}, {}
                ],
                [
                    {
                        text: getIt('inspection_renovationDescription'),
                        border: [false, true, false, true],
                        fontSize: 9,
                        colSpan: 4
                    },
                    {}, {}, {}
                ],
                [
                    {
                        text: 'Extent of Work based on:',
                        border: [false, true, false, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('inspection_extentOfWork'),
                        fontSize: 9,
                        colSpan: 3,
                        border: [true, true, false, true]
                    },
                    {}, {}
                ]

            ]
        }
    };
    return result;
}

/**
 * Get inspection summary
 */
function getInspectionSummary() {
    var result;
    result = {
        table: {
            widths: ['*', 'auto'],
            body: [
                [
                    {
                        text: 'INSPECTION SUMMARY',
                        style: 'tableHeader',
                        colSpan: 2,
                        border: [false, true, false, true]
                    },
                    {}
                ],
                [
                    {
                        text: 'Extent of inspected work is generally in accordance with sighted documents?',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('inspectionSummarySelect'),
                        fontSize: 9,
                        border: [false, true, false, true]
                    }
                ],
                [
                    {
                        text: getIt('inspection_summary'),
                        border: [false, true, false, true],
                        colSpan: 2,
                        fontSize: 9
                    },
                    {}
                ]
            ]
        }
    };
    return result;
}

/**
 * Get Descriptive Summary of Work done by Owner-Builder
 */
function getDescriptiveSummary() {
    var result;
    result = {
        table: {
            widths: [61, '*', 80, '*'],
            body: [
                [
                    {
                        text: 'CONSTRUCTION SUMMARY – Primary construction materials (Owner Builder work only) and site conditions',
                        style: 'tableHeader',
                        colSpan: 4,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}
                ],
                [
                    {
                        text: 'Sub-Structure',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('summary_subStructure'),
                        fontSize: 9
                    },
                    {
                        text: 'Floors',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_floors'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Roof',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_roof'),
                        fontSize: 9
                    },
                    {
                        text: 'Ext Walls',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_extWalls'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Windows',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_window'),
                        fontSize: 9
                    },
                    {
                        text: 'No of storeys',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_noOfStoreys'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Site grade',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_siteGrade'),
                        fontSize: 9
                    },
                    {
                        text: 'Furnished',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_furnished'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Garage',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_garage'),
                        fontSize: 9
                    },
                    {
                        text: 'Carport',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_carport'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Garage roof',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_garageRoof'),
                        fontSize: 9
                    },
                    {
                        text: 'Carport roof',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_carportRoof'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Store/shed',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_store'),
                        fontSize: 9
                    },
                    {
                        text: 'Pergola',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('summary_pergola'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ]
            ]
        },
        margin: [0, 5, 0, 10]
    };
    return result;
}

/**
 * Get Site Data
 * Originally has 10 places to display
 * If more than 10 places, need to add it dynamically
 */
function getSiteTable() {
    var data = [];
    var tableBody;
    var rowCount = document.getElementById('HOWSiteTable').rows.length;
    //console.log(rowCount);

    var firstRow = [
        {
            text: 'SITE',
            colSpan: 9,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    for (var i = 0; i < rowCount; i = i + 3) {
        var newRow = [];
        for (var a = i; a < i + 3; a++) {
            var place;
            var select;
            var note;
            var cell1;
            var cell2;
            var cell3;
            if (a <= 9) {
                place = document.getElementById('HOWSiteName' + a).textContent;
                select = getIt('HOWSiteSelect' + a);
                note = getIt('HOWSiteNote' + a);
            } else {
                place = document.getElementById('HOWSiteName' + a);
                select = document.getElementById('HOWSiteSelect' + a);
                note = document.getElementById('HOWSiteNote' + a);
            }

            if (place != null) {
                if (a > 9) {
                    place = place.value;
                }

                if (place == 'Stormwater Drains' || place == 'Gas Supply' || place == 'Electricity Supply' || place == 'Water Supply' || place == 'Sewerage System') {
                    place = place + '*';
                }

                cell1 = {
                    text: place,
                    bold: true,
                    style: 'tableText',
                    noWrap: true
                };
            } else {
                cell1 = ''
            }

            if (select != null) {
                if (a > 9) {
                    select = select.value;
                }
                cell2 = {
                    text: select,
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            if (note != null) {
                if (a > 9) {
                    note = note.value;
                }
                cell3 = {
                    text: note,
                    style: 'tableText'
                };
            } else {
                cell3 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);
            newRow.push(cell3);
        }
        data.push(newRow);
    }

    tableBody = {
        table: {
            widths: ['auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;
}

/**
 * Get Building exterior data
 */
function getBuildingExteriorTable() {
    var data = [];
    var tableBody;
    var rowCount = document.getElementById('HOWBuildingExteriorTable').rows.length;
    //console.log(rowCount);

    var firstRow = [
        {
            text: 'BUILDING EXTERIOR',
            colSpan: 9,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    for (var i = 0; i < rowCount; i = i + 3) {
        var newRow = [];
        for (var a = i; a < i + 3; a++) {
            var place;
            var select;
            var note;
            var cell1;
            var cell2;
            var cell3;
            if (a <= 17) {
                place = document.getElementById('HOWBuildingName' + a).textContent;
                select = getIt('HOWBuildingSelect' + a);
                note = getIt('HOWBuildingNote' + a);
            } else {
                place = document.getElementById('HOWBuildingName' + a);
                select = document.getElementById('HOWBuildingSelect' + a);
                note = document.getElementById('HOWBuildingNote' + a);
            }

            //to determine whether the id is existed in the html. because it is loop, it is possible loop to the id that is not created
            //in the html yet.
            if (place != null) {
                //if the id is existed, to determine, whether the id is created dynamically or is already there.
                // if it is already there, use place straight away, otherwise, use its value instead.
                if (a > 17) {
                    place = place.value;
                }
                cell1 = {
                    text: place,
                    bold: true,
                    style: 'tableText',
                    noWrap: true
                };
            } else {
                cell1 = ''
            }

            if (select != null) {
                if (a > 17) {
                    select = select.value;
                }
                cell2 = {
                    text: select,
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            if (note != null) {
                if (a > 17) {
                    note = note.value;
                }
                cell3 = {
                    text: note,
                    style: 'tableText'
                };
            } else {
                cell3 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);
            newRow.push(cell3);
        }
        data.push(newRow);
    }

    tableBody = {
        table: {
            widths: ['auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;
}


/**
 * Get Sub-floor data
 */
function getSubFloorTable() {
    var data = [];
    var tableBody;
    var rowCount = document.getElementById('HOWSubFloorTable').rows.length;
    //console.log(rowCount);

    var firstRow = [
        {
            text: 'SUB-FLOOR',
            colSpan: 9,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    for (var i = 0; i < rowCount; i = i + 3) {
        var newRow = [];
        for (var a = i; a < i + 3; a++) {
            var place;
            var select;
            var note;
            var cell1;
            var cell2;
            var cell3;
            if (a <= 6) {
                place = document.getElementById('HOWSubFloorName' + a).textContent;
                select = getIt('HOWSubFloorSelect' + a);
                note = getIt('HOWSubFloorNote' + a);
            } else {
                place = document.getElementById('HOWSubFloorName' + a);
                select = document.getElementById('HOWSubFloorSelect' + a);
                note = document.getElementById('HOWSubFloorNote' + a);
            }

            //to determine whether the id is existed in the html. because it is loop, it is possible loop to the id that is not created
            //in the html yet.
            if (place != null) {
                //if the id is existed, to determine, whether the id is created dynamically or is already there.
                // if it is already there, use place straight away, otherwise, use its value instead.
                if (a > 6) {
                    place = place.value;
                }
                cell1 = {
                    text: place,
                    bold: true,
                    style: 'tableText',
                    noWrap: true
                };
            } else {
                cell1 = ''
            }

            if (select != null) {
                if (a > 6) {
                    select = select.value;
                }
                cell2 = {
                    text: select,
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            if (note != null) {
                if (a > 6) {
                    note = note.value;
                }
                cell3 = {
                    text: note,
                    style: 'tableText'
                };
            } else {
                cell3 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);
            newRow.push(cell3);
        }
        data.push(newRow);
    }

    tableBody = {
        table: {
            widths: ['auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;
}


/**
 * Get Roof Void Data
 */
function getRoofVoidTable() {
    var data = [];
    var tableBody;
    var rowCount = document.getElementById('HOWRoofVoidTable').rows.length;
    //console.log(rowCount);

    var firstRow = [
        {
            text: 'ROOF VOID',
            colSpan: 9,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    for (var i = 0; i < rowCount; i = i + 3) {
        var newRow = [];
        for (var a = i; a < i + 3; a++) {
            var place;
            var select;
            var note;
            var cell1;
            var cell2;
            var cell3;
            if (a <= 5) {
                place = document.getElementById('HOWRoofVoidName' + a).textContent;
                select = getIt('HOWRoofVoidSelect' + a);
                note = getIt('HOWRoofVoidNote' + a);
            } else {
                place = document.getElementById('HOWRoofVoidName' + a);
                select = document.getElementById('HOWRoofVoidSelect' + a);
                note = document.getElementById('HOWRoofVoidNote' + a);
            }

            //to determine whether the id is existed in the html. because it is loop, it is possible loop to the id that is not created
            //in the html yet.
            if (place != null) {
                //if the id is existed, to determine, whether the id is created dynamically or is already there.
                // if it is already there, use place straight away, otherwise, use its value instead.
                if (a > 5) {
                    place = place.value;
                }
                cell1 = {
                    text: place,
                    bold: true,
                    style: 'tableText',
                    noWrap: true
                };
            } else {
                cell1 = ''
            }

            if (select != null) {
                if (a > 5) {
                    select = select.value;
                }
                cell2 = {
                    text: select,
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            if (note != null) {
                if (a > 5) {
                    note = note.value;
                }
                cell3 = {
                    text: note,
                    style: 'tableText'
                };
            } else {
                cell3 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);
            newRow.push(cell3);
        }
        data.push(newRow);
    }

    tableBody = {
        table: {
            widths: ['auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;
}


/**
 * Get Out Buildings & Attached Structures
 * the number of rows in the html equal the number of columns in the pdf table
 * the number of columns in the html equals to the number of the rows in the pdf table
 */
function getOutBuildingTable() {
    var data = [];
    var width = [];
    var tableBody;
    var rowCount = document.getElementById('HOWOutBuildingTable').rows.length;
    if(rowCount > 6)
    {
       rowCount = 6;
    }
   
    var colCount = document.getElementById('HOWOutBuildingTable').rows[0].cells.length;

    // console.log('The row in HOWOutBuildingTable is ' + rowCount);
    // console.log('The column in HOWOutBuildingTable is ' + colCount);
    var firstRow = [];
    var secondRow = [];

    //Set upt the first row
    for (var i = 0; i < rowCount * 2; i++) {
        //console.log(i);

        var cell;
        if (i == 0) {
            cell = {

                text: 'OUT BUILDINGS & ATTACHED STRUCTURES',
                colSpan: rowCount * 2,
                style: 'tableBoldTextAlignLeft',
                color: 'red'
            }

        } else {
            cell = {};
        }

        firstRow.push(cell);
    }
    //console.log(firstRow);
    data.push(firstRow);



    /**
     * Set up the second row. the number of the rows in the html table equals to the number of columns in the pdf table
     * use rowCount to loop, each loop, create two cell in the second row in the pdf table
     * each row represents two cells
     */
    for (var i = 0; i < rowCount; i++) {
        var cell1;
        var cell2;

        if (i == 0) {
            cell1 = {

                text: 'Element',
                style: 'tableBoldTextAlignLeft'
            };
            cell2 = {
                text: 'Space',
                style: 'tableBoldTextAlignLeft'
                //color: 'red'
            };


        } else {
            var placeID = i - 1;
            var place = '';
            if (i > 3) {
                place = document.getElementById('HOWOutBuildingPlace' + placeID).value;
            } else {
                place = document.getElementById('HOWOutBuildingPlace' + placeID).textContent;
            }
            // console.log(place);

            cell1 = {
                text: place,
                bold: true,
                colSpan: 2,
                style: 'tableText',
                noWrap: true
            };
            cell2 = {}

        }

        secondRow.push(cell1);
        secondRow.push(cell2);
    }
    //console.log(secondRow);
    data.push(secondRow);


    /**
     * Set upt the dynamically data filed.
     * use the colCount - 1 as the first round loop count. this will create enough rows in the pdf table
     * the number of columns - 1 will be the remaining number of the rows in the table.
     * use the number of columns to determine the rows in the pdf table
     * then use the number of rows to determine the number of cells in each each in the pdf table.
     */
    for (var i = 0; i < colCount - 1; i++) {
        var newRow = [];

        /**
         * Set up the cell in each row. and the data of the cell comes from the same columns
         * The number of cells equal to rowCount. so use rowCount as the second round loop.
         * each cell contains two set of data
         * The first cell contains the element's name and an empty filed. --> Fixed --> extract outside the loop
         * The rest of cells contains data --> need to extract from html.--> use the loop. loop (rowCount - 1) times
         *
         */
        var element = document.getElementById('HOWOutBuildingElement' + i).textContent;
        var cell1 = {
            text: element,
            colSpan: 2,
            style: 'tableBoldTextAlignLeft'
            // color: 'red'
        };
        var cell2 = {};
        newRow.push(cell1);
        newRow.push(cell2);

        //Start the loop to extract all the data from the html that is dynamically.
        //each row == two cells in the pdf table
        for (var b = 0; b < rowCount - 1; b++) {
            var cell1;
            var cell2;
            var baseName = 'HOWOutBuildingPlace';


            var selectID = baseName + b + 'Select' + i;
            var textID = baseName + b + 'Text' + i;
            cell1 = {
                text: getIt(selectID),
                bold: true,
                style: 'tableText',
                noWrap: true
            };
            cell2 = {
                text: getIt(textID),
                bold: true,
                style: 'tableText',
                noWrap: true
            };

            //}
            newRow.push(cell1);
            newRow.push(cell2);

        }
        //console.log(newRow);
        data.push(newRow);
    }

    //Set up the width
    for (var i = 0; i < rowCount * 2; i++) {
        var cell;

        if (i > 1) {
            if (isOdd(i) == 1) {
                cell = '*';
            } else {
                cell = 10;
            }
        } else {
            cell = 'auto';
        }


        //cell = '*';

        width.push(cell);
    }
    //console.log(width);

    tableBody = {
        table: {
            widths: width,
            body: data
        },
        margin: [0, 5, 0, 5]
    };
    //console.log(tableBody);

    // if(rowCount > 6)
    // {
    //     getOutBuildingTable2();
    // }
    // else
    // {
    //     getServicesTable();
    //     getServicesText();
    // }

    return tableBody;
}

/**
 * Get Out Buildings & Attached Structures
 * the number of rows in the html equal the number of columns in the pdf table
 * the number of columns in the html equals to the number of the rows in the pdf table
 */
function getOutBuildingTable2() {
    var data = [];
    var width = [];
    var tableBody;
    var rowCount = document.getElementById('HOWOutBuildingTable').rows.length - 6;
    var colCount = document.getElementById('HOWOutBuildingTable').rows[0].cells.length;

    //console.log('The row in HOWOutBuildingTable is ' + rowCount);
    //console.log('The column in HOWOutBuildingTable is ' + colCount);
    var firstRow = [];
    var secondRow = [];

    //Set upt the first row
    for (var i = 6; i < (rowCount * 2 + 6); i++) {
        //console.log(i);
        var cell;
        if (i == 6) {
            cell = {

                text: 'OUT BUILDINGS & ATTACHED STRUCTURES (CONTINUED)',
                colSpan: rowCount * 2,
                style: 'tableBoldTextAlignLeft',
                color: 'red'
            }

        } else {
            cell = {};
        }

        firstRow.push(cell);
    }
    //console.log(firstRow);
    data.push(firstRow);



    /**
     * Set up the second row. the number of the rows in the html table equals to the number of columns in the pdf table
     * use rowCount to loop, each loop, create two cell in the second row in the pdf table
     * each row represents two cells
     */
    for (var i = 6; i < (rowCount+6); i++) {
        var cell1;
        var cell2;

        if (i == 6) {
            cell1 = {

                text: 'Element',
                style: 'tableBoldTextAlignLeft'
            };
            cell2 = {
                text: 'Space',
                style: 'tableBoldTextAlignLeft'
                //color: 'red'
            };


        } 
        else 
        {
            var placeID = i - 1;
            var place = '';
           // if (i > 3) {
                place = document.getElementById('HOWOutBuildingPlace' + placeID).value;
            // } else {
            //     place = document.getElementById('HOWOutBuildingPlace' + placeID).textContent;
            // }
            //console.log(place);

            cell1 = {
                text: place,
                bold: true,
                colSpan: 2,
                style: 'tableText',
                // noWrap: true
            };
            cell2 = {}

        }

        secondRow.push(cell1);
        secondRow.push(cell2);
       
    }
    //console.log(secondRow);
    data.push(secondRow);


    /**
     * Set upt the dynamically data filed.
     * use the colCount - 1 as the first round loop count. this will create enough rows in the pdf table
     * the number of columns - 1 will be the remaining number of the rows in the table.
     * use the number of columns to determine the rows in the pdf table
     * then use the number of rows to determine the number of cells in each each in the pdf table.
     */
    for (var i = 0; i < colCount - 1; i++) {
        var newRow = [];

        /**
         * Set up the cell in each row. and the data of the cell comes from the same columns
         * The number of cells equal to rowCount. so use rowCount as the second round loop.
         * each cell contains two set of data
         * The first cell contains the element's name and an empty filed. --> Fixed --> extract outside the loop
         * The rest of cells contains data --> need to extract from html.--> use the loop. loop (rowCount - 1) times
         *
         */
        var element = document.getElementById('HOWOutBuildingElement' + i).textContent;
        var cell1 = {
            text: element,
            colSpan: 2,
            style: 'tableBoldTextAlignLeft'
            // color: 'red'
        };
        var cell2 = {};
        newRow.push(cell1);
        newRow.push(cell2);

        //Start the loop to extract all the data from the html that is dynamically.
        //each row == two cells in the pdf table
        for (var b = 6; b < (rowCount - 1 + 6); b++) {
            var cell1;
            var cell2;
            var baseName = 'HOWOutBuildingPlace';


            var selectID = baseName + b + 'Select' + i;
            var textID = baseName + b + 'Text' + i;
            // console.log(selectID);
            // console.log(textID);
            cell1 = {
                text: getIt(selectID),
                bold: true,
                style: 'tableText',
                noWrap: true
            };
            cell2 = {
                text: getIt(textID),
                bold: true,
                style: 'tableText',
                noWrap: true
            };

            //}
            newRow.push(cell1);
            newRow.push(cell2);

        }
        //console.log(newRow);
        data.push(newRow);
    }

    //Set up the width
    for (var i = 6; i < (rowCount * 2 + 6); i++) {
        var cell;
        console.log(i);

        if (i > 7) {
            if (isOdd(i) == 1) {
                cell = '*';
            } else {
                cell = 15;
            }
        } else {
            cell = 'auto';
        }


        //cell = '*';

        width.push(cell);
    }
    console.log(width);

    tableBody = {
        pageBreak:'before',
        table: {
            widths: width,
            body: data
        },
        margin: [0, 5, 0, 10]
    };
    //console.log(tableBody);
   
    return tableBody;
}

/*
    Get Services Data
 */
function getServicesTable() {
    var data = [];
    var tableBody;
    var rowCount = document.getElementById('HOWServicesTable').rows.length;
    //console.log(rowCount);

    var firstRow = [
        {
            text: [
                'SERVICES',
                {
                    text: '#',
                    fontSize: 8
                }

            ],
            colSpan: 9,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    for (var i = 0; i < rowCount; i = i + 3) {
        var newRow = [];
        for (var a = i; a < i + 3; a++) {
            var place;
            var select;
            var note;
            var cell1;
            var cell2;
            var cell3;
            if (a <= 3) {
                place = document.getElementById('HOWServiceName' + a).textContent;
                select = getIt('HOWServicesSelect' + a);
                note = getIt('HOWServiceNote' + a);
            } else {
                place = document.getElementById('HOWServiceName' + a);
                select = document.getElementById('HOWServicesSelect' + a);
                note = document.getElementById('HOWServiceNote' + a);
            }

            //to determine whether the id is existed in the html. because it is loop, it is possible loop to the id that is not created
            //in the html yet.
            if (place != null) {
                //if the id is existed, to determine, whether the id is created dynamically or is already there.
                // if it is already there, use place straight away, otherwise, use its value instead.
                if (a > 3) {
                    place = place.value;
                }

                if (place == 'Hot Water System' || place == 'Smoke Detectors' || place == 'Switchboard') {
                    place = place + '*';
                }
                cell1 = {
                    text: place,
                    bold: true,
                    style: 'tableText',
                    noWrap: true
                };
            } else {
                cell1 = ''
            }

            if (select != null) {
                if (a > 3) {
                    select = select.value;
                }
                cell2 = {
                    text: select,
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            if (note != null) {
                if (a > 3) {
                    note = note.value;
                }
                cell3 = {
                    text: note,
                    style: 'tableText'
                };
            } else {
                cell3 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);
            newRow.push(cell3);
        }
        data.push(newRow);
    }

    tableBody = {
        table: {
            widths: ['auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;
}

function getServicesText()
{
   var text1 = [
       {
            text:Services1,
            fontSize:9
       },
       {
            text:Services2,
            fontSize:9
       }
   ];
   return text1;
}


/**
 * Get the Internal Living & Bedroom Data
 */
function getLivingBedroomTable1() {
    var data = [];
    var tableBody;
    var entryTableRowCount = document.getElementById('HOWInternal_Entry_Table').rows.length;
    var stairTableRowCount = document.getElementById('HOWInternal_Stair_Table').rows.length;
    var livingFrontTableRowCount = document.getElementById('HOWInternal_LivingFront_Table').rows.length;
    var loungeTableRowCount = document.getElementById('HOWInternal_Lounge_Table').rows.length;
    var kitchenTableRowCount = document.getElementById('HOWInternal_Kitchen_Table').rows.length;
    var familyTableRowCount = document.getElementById('HOWInternal_Family_Table').rows.length;
    var diningTableRowCount = document.getElementById('HOWInternal_Dining_Table').rows.length;
    // var bedroom1TableRowCount = document.getElementById('HOWInternal_Bedroom1_Table').rows.length;
    // var bedroom2TableRowCount = document.getElementById('HOWInternal_Bedroom2_Table').rows.length;
    // var bedroom3TableRowCount = document.getElementById('HOWInternal_Bedroom3_Table').rows.length;
    // var bedroom4TableRowCount = document.getElementById('HOWInternal_Bedroom4_Table').rows.length;
    // var studyTableCount = document.getElementById('HOWInternal_Study_Table').rows.length;
    // var retreatTableCount = document.getElementById('HOWInternal_Retreat_Table').rows.length;


    var firstRow = [
        {
            text: 'INTERNAL LIVING & BEDROOM',
            colSpan: 10,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    var tabs = $('#livingbedroom-tabs').tabs('tabs');
    
    // console.log(tabs[3].panel('options').title);
    var roomName0 = tabs[0].panel('options').title
    var roomName1 = tabs[1].panel('options').title
    var roomName2 = tabs[2].panel('options').title
    var roomName3 = tabs[3].panel('options').title
    var roomName4 = tabs[4].panel('options').title
    var roomName5 = tabs[5].panel('options').title
    var roomName6 = tabs[6].panel('options').title
    var roomName7 = tabs[7].panel('options').title
    var roomName8 = tabs[8].panel('options').title
    var roomName9 = tabs[9].panel('options').title
    var roomName10 = tabs[10].panel('options').title
    var roomName11 = tabs[11].panel('options').title
    var roomName12 = tabs[12].panel('options').title

    var entryTable = createInternalOnePartTable(roomName0, entryTableRowCount, 'HOWInternal_EntryName', 'HOWInternal_EntrySelect', 'HOWInternal_EntryNote', 10);
    data = data.concat(entryTable);

    var stairTable = createInternalOnePartTable(roomName1, stairTableRowCount, 'HOWInternal_StairName', 'HOWInternal_StairSelect', 'HOWInternal_StairNote', 10);
    data = data.concat(stairTable);


    var livingTable = createInternalOnePartTable(roomName2, livingFrontTableRowCount, 'HOWInternal_LivingFrontName', 'HOWInternal_LivingFrontSelect', 'HOWInternal_LivingFrontNote', 10);
    data = data.concat(livingTable);

    var loungeTable = createInternalOnePartTable(roomName3, loungeTableRowCount, 'HOWInternal_LoungeName', 'HOWInternal_LoungeSelect', 'HOWInternal_LoungeNote', 10);
    data = data.concat(loungeTable);

    var kitchenTable = createInternalOnePartTable(roomName4, kitchenTableRowCount, 'HOWInternal_KitchenName', 'HOWInternal_KitchenSelect', 'HOWInternal_KitchenNote', 16);
    data = data.concat(kitchenTable);


    var familyTable = createInternalOnePartTable(roomName5, familyTableRowCount, 'HOWInternal_FamilyName', 'HOWInternal_FamilySelect', 'HOWInternal_FamilyNote', 10);
    data = data.concat(familyTable);

    var diningTable = createInternalOnePartTable(roomName6, diningTableRowCount, 'HOWInternal_DiningName', 'HOWInternal_DiningSelect', 'HOWInternal_DiningNote', 10);
    data = data.concat(diningTable);

    // var bedroom1Table = createInternalOnePartTable('BEDROOM 1', bedroom1TableRowCount, 'HOWInternal_Bedroom1Name', 'HOWInternal_Bedroom1Select', 'HOWInternal_Bedroom1Note', 10);
    // data = data.concat(bedroom1Table);

    // var bedroom2Table = createInternalOnePartTable('BEDROOM 2', bedroom2TableRowCount, 'HOWInternal_Bedroom2Name', 'HOWInternal_Bedroom2Select', 'HOWInternal_Bedroom2Note', 10);
    // data = data.concat(bedroom2Table);

    // var bedroom3Table = createInternalOnePartTable('BEDROOM 3', bedroom3TableRowCount, 'HOWInternal_Bedroom3Name', 'HOWInternal_Bedroom3Select', 'HOWInternal_Bedroom3Note', 10);
    // data = data.concat(bedroom3Table);

    // var bedroom4Table = createInternalOnePartTable('BEDROOM 4', bedroom4TableRowCount, 'HOWInternal_Bedroom4Name', 'HOWInternal_Bedroom4Select', 'HOWInternal_Bedroom4Note', 10);
    // data = data.concat(bedroom4Table);

    // var studyTable = createInternalOnePartTable('STUDY', studyTableCount, 'HOWInternal_StudyName', 'HOWInternal_StudySelect', 'HOWInternal_StudyNote', 10);
    // data = data.concat(studyTable);

    // var retreatTable = createInternalOnePartTable('RETREAT (UPPER)', retreatTableCount, 'HOWInternal_RetreatName', 'HOWInternal_RetreatSelect', 'HOWInternal_RetreatNote', 10);
    // data = data.concat(retreatTable);
    //console.log(retreatTable);
    //console.log(data);

    tableBody = {
        table: {
            //headerRows: 1, 
            //dontBreakRows: true,
            // keepWithHeaderRows: 1,
            widths: ['*', 'auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            dontBreakRows:true,
            body: data
        },
        margin: [0, 5, 0, 5]
    };
    //console.log(tableBody);

    return tableBody;
}

/**
 * Get the Internal Living & Bedroom Data
 */
function getLivingBedroomTable2() {
    var data = [];
    var tableBody;
    // var entryTableRowCount = document.getElementById('HOWInternal_Entry_Table').rows.length;
    // var stairTableRowCount = document.getElementById('HOWInternal_Stair_Table').rows.length;
    // var livingFrontTableRowCount = document.getElementById('HOWInternal_LivingFront_Table').rows.length;
    // var kitchenTableRowCount = document.getElementById('HOWInternal_Kitchen_Table').rows.length;
    // var familyTableRowCount = document.getElementById('HOWInternal_Family_Table').rows.length;
    // var diningTableRowCount = document.getElementById('HOWInternal_Dining_Table').rows.length;
    var bedroom1TableRowCount = document.getElementById('HOWInternal_Bedroom1_Table').rows.length;
    var bedroom2TableRowCount = document.getElementById('HOWInternal_Bedroom2_Table').rows.length;
    var bedroom3TableRowCount = document.getElementById('HOWInternal_Bedroom3_Table').rows.length;
    var bedroom4TableRowCount = document.getElementById('HOWInternal_Bedroom4_Table').rows.length;
    var studyTableCount = document.getElementById('HOWInternal_Study_Table').rows.length;
    var retreatTableCount = document.getElementById('HOWInternal_Retreat_Table').rows.length;


    var firstRow = [
        {
            text: 'INTERNAL LIVING & BEDROOM',
            colSpan: 10,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    var tabs = $('#livingbedroom-tabs').tabs('tabs');
    
    // console.log(tabs[3].panel('options').title);
    var roomName7 = tabs[7].panel('options').title
    var roomName8 = tabs[8].panel('options').title
    var roomName9 = tabs[9].panel('options').title
    var roomName10 = tabs[10].panel('options').title
    var roomName11 = tabs[11].panel('options').title
    var roomName12 = tabs[12].panel('options').title

    // var entryTable = createInternalOnePartTable('ENTRY & PASSAGE', entryTableRowCount, 'HOWInternal_EntryName', 'HOWInternal_EntrySelect', 'HOWInternal_EntryNote', 10);
    // data = data.concat(entryTable);

    // var stairTable = createInternalOnePartTable('STAIR', stairTableRowCount, 'HOWInternal_StairName', 'HOWInternal_StairSelect', 'HOWInternal_StairNote', 10);
    // data = data.concat(stairTable);


    // var livingTable = createInternalOnePartTable('LIVING (CENTRAL)', livingFrontTableRowCount, 'HOWInternal_LivingFrontName', 'HOWInternal_LivingFrontSelect', 'HOWInternal_LivingFrontNote', 10);
    // data = data.concat(livingTable);

    // var kitchenTable = createInternalOnePartTable('KITCHEN + PANTRY', kitchenTableRowCount, 'HOWInternal_KitchenName', 'HOWInternal_KitchenSelect', 'HOWInternal_KitchenNote', 16);
    // data = data.concat(kitchenTable);


    // var familyTable = createInternalOnePartTable('FAMILY', familyTableRowCount, 'HOWInternal_FamilyName', 'HOWInternal_FamilySelect', 'HOWInternal_FamilyNote', 10);
    // data = data.concat(familyTable);

    // var diningTable = createInternalOnePartTable('DINING', diningTableRowCount, 'HOWInternal_DiningName', 'HOWInternal_DiningSelect', 'HOWInternal_DiningNote', 10);
    // data = data.concat(diningTable);

    var bedroom1Table = createInternalOnePartTable(roomName7, bedroom1TableRowCount, 'HOWInternal_Bedroom1Name', 'HOWInternal_Bedroom1Select', 'HOWInternal_Bedroom1Note', 10);
    data = data.concat(bedroom1Table);

    var bedroom2Table = createInternalOnePartTable(roomName8, bedroom2TableRowCount, 'HOWInternal_Bedroom2Name', 'HOWInternal_Bedroom2Select', 'HOWInternal_Bedroom2Note', 10);
    data = data.concat(bedroom2Table);

    var bedroom3Table = createInternalOnePartTable(roomName9, bedroom3TableRowCount, 'HOWInternal_Bedroom3Name', 'HOWInternal_Bedroom3Select', 'HOWInternal_Bedroom3Note', 10);
    data = data.concat(bedroom3Table);

    var bedroom4Table = createInternalOnePartTable(roomName10, bedroom4TableRowCount, 'HOWInternal_Bedroom4Name', 'HOWInternal_Bedroom4Select', 'HOWInternal_Bedroom4Note', 10);
    data = data.concat(bedroom4Table);

    var studyTable = createInternalOnePartTable(roomName11, studyTableCount, 'HOWInternal_StudyName', 'HOWInternal_StudySelect', 'HOWInternal_StudyNote', 10);
    data = data.concat(studyTable);

    var retreatTable = createInternalOnePartTable(roomName12, retreatTableCount, 'HOWInternal_RetreatName', 'HOWInternal_RetreatSelect', 'HOWInternal_RetreatNote', 10);
    data = data.concat(retreatTable);
    //console.log(retreatTable);
    //console.log(data);

    tableBody = {
        table: {
            //headerRows: 1, 
            //dontBreakRows: true,
            // keepWithHeaderRows: 1,
            widths: ['*', 'auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            dontBreakRows:true,
            body: data
        },
        margin: [0, 5, 0, 5]
    };
    //console.log(tableBody);

    return tableBody;
}



function getInternalServiceTable1() {
    var data = [];
    var tableBody;
    var WCTableRowCount = document.getElementById('HOWInternalService_WC_Table').rows.length;
    var bathroom1TableRowCount = document.getElementById('HOWInternalService_Bathroom1_Table').rows.length;
    var bathroom2TableRowCount = document.getElementById('HOWInternalService_Bathroom2_Table').rows.length;
    var bathroom3TableRowCount = document.getElementById('HOWInternalService_Bathroom3_Table').rows.length;
    var bathroom4TableRowCount = document.getElementById('HOWInternalService_Bathroom4_Table').rows.length;
    // var laundryTableRowCount = document.getElementById('HOWInternalService_Laundry_Table').rows.length;
    // var servicesTableRowCount = document.getElementById('HOWInternalService_Service_Table').rows.length;

    var firstRow = [
        {
            text: 'INTERNAL SERVICE (WET) AREAS',
            colSpan: 10,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    var tabs = $('#wetareas-tabs').tabs('tabs');
    
    // console.log(tabs[3].panel('options').title);
    var roomName0 = tabs[0].panel('options').title
    var roomName1 = tabs[1].panel('options').title
    var roomName2 = tabs[2].panel('options').title
    var roomName3 = tabs[3].panel('options').title
    var roomName4 = tabs[4].panel('options').title

    var WCTable = createInternalOnePartTable(roomName0, WCTableRowCount, 'HOWInternalService_WCName', 'HOWInternalService_WCSelect', 'HOWInternalService_WCNote', 14);
    data = data.concat(WCTable);


    var bathroom1Table = createInternalOnePartTable(roomName1, bathroom1TableRowCount, 'HOWInternalService_Bathroom1Name', 'HOWInternalService_Bathroom1Select', 'HOWInternalService_Bathroom1Note', 15);
    data = data.concat(bathroom1Table);

    var bathroom2Table = createInternalOnePartTable(roomName2, bathroom2TableRowCount, 'HOWInternalService_Bathroom2Name', 'HOWInternalService_Bathroom2Select', 'HOWInternalService_Bathroom2Note', 15);
    data = data.concat(bathroom2Table);

    var bathroom3Table = createInternalOnePartTable(roomName3, bathroom3TableRowCount, 'HOWInternalService_Bathroom3Name', 'HOWInternalService_Bathroom3Select', 'HOWInternalService_Bathroom3Note', 15);
    data = data.concat(bathroom3Table);

    var bathroom4Table = createInternalOnePartTable(roomName4, bathroom4TableRowCount, 'HOWInternalService_Bathroom4Name', 'HOWInternalService_Bathroom4Select', 'HOWInternalService_Bathroom4Note', 15);
    data = data.concat(bathroom4Table);

    // var laundryTable = createInternalOnePartTable('LAUNDRY', laundryTableRowCount, 'HOWInternalService_LaundryName', 'HOWInternalService_LaundrySelect', 'HOWInternalService_LaundryNote', 13);
    // data = data.concat(laundryTable);

    // var servicesTable = createInternalOnePartTable('SERVICES', servicesTableRowCount, 'HOWInternalService_ServiceName', 'HOWInternalService_ServiceSelect', 'HOWInternalService_ServiceNote', 5);
    // data = data.concat(servicesTable);


    tableBody = {
        table: {
            widths: ['*', 'auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;

}

function getInternalServiceTable2() {
    var data = [];
    var tableBody;
    // var WCTableRowCount = document.getElementById('HOWInternalService_WC_Table').rows.length;
    // var bathroom1TableRowCount = document.getElementById('HOWInternalService_Bathroom1_Table').rows.length;
    // var bathroom2TableRowCount = document.getElementById('HOWInternalService_Bathroom2_Table').rows.length;
    // var bathroom3TableRowCount = document.getElementById('HOWInternalService_Bathroom3_Table').rows.length;
    // var bathroom4TableRowCount = document.getElementById('HOWInternalService_Bathroom4_Table').rows.length;
    var laundryTableRowCount = document.getElementById('HOWInternalService_Laundry_Table').rows.length;
    var servicesTableRowCount = document.getElementById('HOWInternalService_Service_Table').rows.length;

    var firstRow = [
        {
            text: 'INTERNAL SERVICE (WET) AREAS',
            colSpan: 10,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}, {}, {}, {}, {}, {}, {}, {}, {}
    ];
    data.push(firstRow);

    var tabs = $('#wetareas-tabs').tabs('tabs');
    var roomName5 = tabs[5].panel('options').title
    var roomName6 = tabs[6].panel('options').title


    // var WCTable = createInternalOnePartTable('WC/ POWDER ROOM', WCTableRowCount, 'HOWInternalService_WCName', 'HOWInternalService_WCSelect', 'HOWInternalService_WCNote', 14);
    // data = data.concat(WCTable);


    // var bathroom1Table = createInternalOnePartTable('BATHROOM', bathroom1TableRowCount, 'HOWInternalService_Bathroom1Name', 'HOWInternalService_Bathroom1Select', 'HOWInternalService_Bathroom1Note', 15);
    // data = data.concat(bathroom1Table);

    // var bathroom2Table = createInternalOnePartTable('BATHROOM', bathroom2TableRowCount, 'HOWInternalService_Bathroom2Name', 'HOWInternalService_Bathroom2Select', 'HOWInternalService_Bathroom2Note', 15);
    // data = data.concat(bathroom2Table);

    // var bathroom3Table = createInternalOnePartTable('BATHROOM ENSUITE', bathroom3TableRowCount, 'HOWInternalService_Bathroom3Name', 'HOWInternalService_Bathroom3Select', 'HOWInternalService_Bathroom3Note', 15);
    // data = data.concat(bathroom3Table);

    // var bathroom4Table = createInternalOnePartTable('BATHROOM ENSUITE', bathroom4TableRowCount, 'HOWInternalService_Bathroom4Name', 'HOWInternalService_Bathroom4Select', 'HOWInternalService_Bathroom4Note', 15);
    // data = data.concat(bathroom4Table);

    var laundryTable = createInternalOnePartTable(roomName5, laundryTableRowCount, 'HOWInternalService_LaundryName', 'HOWInternalService_LaundrySelect', 'HOWInternalService_LaundryNote', 13);
    data = data.concat(laundryTable);

    var servicesTable = createInternalOnePartTable(roomName6, servicesTableRowCount, 'HOWInternalService_ServiceName', 'HOWInternalService_ServiceSelect', 'HOWInternalService_ServiceNote', 5);
    data = data.concat(servicesTable);


    tableBody = {
        table: {
            widths: ['*', 'auto', 'auto', '*', 'auto', 'auto', '*', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;

}

/**
 * Use the parameters to create rows for the big table. one place at one time. return an Array [].
 * then this array will be pushed into the whole table
 */
function createInternalOnePartTable(cellText, rowCount, placeID, selectID, noteID, fixedLastID) {
    var partOfTable = [];
    var rowSpanNumber = Math.ceil(rowCount / 3);

    for (var i = 0; i < rowCount; i = i + 3) {
        var newRow = [];

        //create the first cell in the row. if this is the first row, then write the name, row span. if it is not the
        // first row, then create empty cell will be enough.
        if (i == 0) {
            var cell0 = {
                text: cellText,
                rowSpan: rowSpanNumber,
                style: 'tableBoldTextAlignLeft',
                color: 'black',
                alignment: 'center'
            };
            newRow.push(cell0);
        } else {
            var cell0 = {};
            newRow.push(cell0);
        }

        //Create the cells in the row, each loop create three cells. it is possible, in some loops, the id is null, will
        //return '' instead
        for (var a = i; a < i + 3; a++) {
            var place;
            var select;
            var note;
            var cell1;
            var cell2;
            var cell3;

            if (a <= fixedLastID) {
                //console.log(placeID + a);
                place = document.getElementById(placeID + a).textContent;
                //console.log(place);
                //console.log(selectID + a);
                select = getIt(selectID + a);
                note = getIt(noteID + a);
            } else {
                //console.log(placeID + a);
                place = document.getElementById(placeID + a);
                select = document.getElementById(selectID + a);
                note = document.getElementById(noteID + a);
            }


            if (place != null) {
                if (a > fixedLastID) {
                    place = place.value;
                }

                cell1 = {
                    text: place,
                    bold: true,
                    style: 'tableText'
                };
            } else {
                cell1 = ''
            }

            if (select != null) {
                if (a > fixedLastID) {
                    select = select.value;
                    if (select = 'Choose an item') {
                        select = '';
                    }
                }
                cell2 = {
                    text: select,
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            if (note != null) {
                if (a > fixedLastID) {
                    note = note.value;
                }
                cell3 = {
                    text: note,
                    style: 'tableText'
                };
            } else {
                cell3 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);
            newRow.push(cell3);

        }
        partOfTable.push(newRow);
    }
    //console.log(partOfTable);
    return partOfTable;
}


/**
 * Get the Defects and Incomplete Table
 */
function getDefectIncompleteTable() {
    var data = [];
    var defectTableRowCount = document.getElementById('HOWDefectsTable').rows.length;
    var tableBody;


    var firstRow = [
        {
            text: 'DEFECTS AND INCOMPLETE WORK EVIDENT AT TIME OF INSPECTION',
            colSpan: 2,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text: 'Item No',
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {
            text: 'It is recommended that purchasers obtain their own report on the condition of the building',
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        }
    ];
    data.push(secondRow);

    //Set up the dynamic table base on the input
    for (var i = 0; i < defectTableRowCount - 1; i++) {
        var itemID = 'HOWDefectItem' + i;
        var descriptionID = 'HOWDefectDescription' + i;
        var newRow = [
            {
                text: getIt(itemID),
                style: 'tableText'
            },
            {
                text: getIt(descriptionID),
                style: 'tableText'
            }
        ];
        //console.log(newRow);
        data.push(newRow);

    }



    //console.log(data);

    tableBody = {
        table: {
            widths: ['auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;
}

/**
 * Get the Access Limitation Table
 */
function getAccessLimitationTable() {
    var data = [];
    var tableBody;

    var accessTableRowCount = document.getElementById('HOWAccessTable').rows.length;


    var firstRow = [
        {
            text: 'ACCESS lIMITATIONS',
            colSpan: 2,
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {}
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text: 'Item No',
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        },
        {
            text: 'The following access limitations were encountered during the property inspection:',
            style: 'tableBoldTextAlignLeft',
            color: 'red'
        }
    ];
    data.push(secondRow);


    for (var i = 0; i < accessTableRowCount - 1; i++) {
        var itemID = 'HOWAccessItem' + i;
        var descriptionID = 'HOWAccessDescription' + i;
        var newRow = [
            {
                text: getIt(itemID),
                style: 'tableText'
            },
            {
                text: getIt(descriptionID),
                style: 'tableText'
            }
        ];
        // console.log(newRow);
        data.push(newRow);

    }

    //console.log(data);

    tableBody = {
        table: {
            widths: ['auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 5]
    };

    return tableBody;
}


/**
 * Get Images Table
 */

/*
 get Images
 */
function getImagesTable() {
    //    var result;
    var data = [],
        row = [],
        tableBody, divCount = 1;
    //    var finalImageNumber = 0;
    //    var supposedImageNumber = 0;
    var totalContainers = $("#HOWImagesTable").children('div');
    var fullAddress = document.getElementById('inspection_address').value.trim() + " " + document.getElementById('inspection_suburb').value.trim();

    if (isEmpty(totalContainers.length)) {
        tableBody = {
            text:''
        };
    } else {
        row.push({
            text: "Photographs",
            style: 'pageTopHeader',
            margin: [0, 0, 0, 5]
        }, {});
        data.push(row);
        row = [];
        row.push({
            text: 'Address: ' + fullAddress,
            style: 'tableBoldTextAlignLeft',
            margin: [0, 0, 0, 20],
        }, {});
        data.push(row);
        row = [];

        for (var i = 0; i < totalContainers.length; i++) 
        {
            var imgContainer = totalContainers.eq(i).children('img');
                img = totalContainers.eq(i).children('img').get(0),
                imgSrc = totalContainers.eq(i).children('img').attr('src'),
                imgLabel = totalContainers.eq(i).children('label').text(),
                imgText = totalContainers.eq(i).children('input').val(),
                imgAngle = totalContainers.eq(i).children('input').eq(1).val(),
                alignment = 'left'
                margin = [0,5,0,15],
                width = 0,
                height = 0;
            if(imgAngle == null || imgAngle == "undefined" || imgAngle == "")
            {
                imgAngle = 0;
            }
            else
            {
                imgAngle = parseInt(imgAngle);
            }
            if (imgSrc.includes("photos/") > 0) {
                imgSrc = convertImgToBase64(img);
            }
            if (typeof imgSrc  != "undefined")
            {
            
                var canvas = document.createElement("canvas");
                canvas.height = canvas.width = 0;
                var context = canvas.getContext('2d');
                var imgwidth = img.naturalWidth;
                var imgheight = img.naturalHeight;
                // console.log("imgwidith:" + imgwidth);
                // console.log("imgheight:" + imgheight);
                canvas.width = imgwidth ;
                canvas.height = imgheight;
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

                // if (imgSrc.includes("photos/") > 0) 
                // {
                //     imgSrc = convertImgToBase64(img);
                // }
    
                if (img.width >= img.height) {
                    width = 175;
                    height = 160;
                    margin = [10,5,0,10];
                } else {
                    width = img.width * 160 / img.height;
                    height = 160;
                    margin = [10,5,0,10];
                }
    
                row.push({
                    stack: [
                        {
                            image: imgSrc,
                            //height: 250,
                            width: 250,
                            margin:[5,0,0,5],
                            alignment: 'center'
                        },
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
                                    width: 250,
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
                if (divCount === 3) {
                    data.push(row);
                    row = [];
                    divCount = 1;
                }
            }

            // if (img.width >= img.height) {
            //     width = 250;
            //     height = 187;
            // } else {
            //     width = img.width * 187 / img.height;
            //     height = 187;
            // }

            // row.push({
            //     stack: [
            //         {
            //             image: imgSrc,
            //             width: width,
            //             height: height,
            //             margin:[0,0,0,5],
            //             //margin: [0, 80, 0, 0],
            //             alignment: 'center'
            //         },
            //         {
            //             text: imgLabel,
            //             bold:'true',
            //             fontSize:10,
            //             margin: [0, 2],
            //             alignment: 'center'
            //         },
            //         {
            //             columns:[
            //                 {
            //                     width: 250,
            //                     text: imgText,
            //                     fontSize: 9,
            //                     margin:[0,5,0,20]
            //                 }
            //             ]                       
            //         }
            //     ],
            //     margin:[0,5,0,10]
            // })
            // divCount++;
            // if (divCount === 3) {
            //     data.push(row);
            //     row = [];
            //     divCount = 1;
            // }
        }

        if (divCount == 2) {
            row.push({});
            data.push(row);
        }
        tableBody = {
            pageBreak: 'before',
            layout: 'noBorders',
            table: {
                widths: [250, 250],
                dontBreakRows: true,
                headerRows: 2,
                body: data
            }
        }
    }
    //
    //    //console.log("The total number of forms are: " + totalImageNumber);
    //    if(totalImageNumber != 0)
    //    {
    //        var lastImage = document.getElementById('HOWImagesDIV').lastElementChild.lastChild.firstChild;
    //        supposedImageNumber = lastImage.id.replace( /[^\d.]/g, '' );//this is the image number based on the id of last image on the form
    //        //console.log("The supposed number of images based on id is " + supposedImageNumber);
    //    }
    //
    //
    //    if(totalImageNumber > supposedImageNumber)
    //    {
    //        finalImageNumber = totalImageNumber;
    //    }
    //    else
    //    {
    //        finalImageNumber = supposedImageNumber;
    //    }
    //
    //    var firstRow = [
    //        {
    //            text:"Photographs",
    //            style:'pageTopHeader',
    //            margin: [0, 0, 0, 5],
    //            colSpan:2
    //        },{}
    //    ];
    //    data.push(firstRow);
    //
    //    var secondRow = [
    //        {
    //            text:'Address: ' + fullAddress,
    //            style: 'tableBoldTextAlignLeft',
    //            margin: [0, 0, 0, 10],
    //            colSpan:2
    //        },{}
    //    ];
    //    data.push(secondRow);
    //
    //    for(i=0;i<finalImageNumber;i=i+2)
    //    {
    //
    //        var n = i + 1;
    //        var firstImageID = 'HOWImage' + i;
    //        var secondImageID = 'HOWImage' + n;
    //        var firstTextID = 'HOWImageText' + i;
    //        var secondTextID = 'HOWImageText' + n;
    //
    //
    //        var imageRow =
    //            [
    //                getPhoto(firstImageID),
    //                getPhoto(secondImageID)
    //
    //            ];
    //        var textRow = [
    //            getImageText(firstTextID),
    //            getImageText(secondTextID)
    //
    //        ];
    //        data.push(imageRow);
    //        data.push(textRow);
    //    }
    //
    //    tableBody = {
    //        table: {
    //            headerRows: 2,
    //            body: data
    //        },
    //        layout: {
    //            hLineColor: function (i, node) {
    //                return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
    //            },
    //            vLineColor: function (i, node) {
    //                return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
    //            }
    //        }
    //
    //    };

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
                        text: document.getElementById('propertyMaintenanceGuide').value,
                        fontSize: 9
                    },
                    {
                        text: 'Cracking in Masonry',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('crackingInMasonry').value,
                        fontSize: 9
                    },
                    {
                        text: 'Treatment of Dampness',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('treatmentOfDampness').value,
                        fontSize: 9
                    }
                ],
                [
                    {
                        text: 'Health & Safety Warning',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('healthSafetyWarning').value,
                        fontSize: 9
                    },
                    {
                        text: 'Roofing & Guttering',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('roofingGuttering').value,
                        fontSize: 9
                    },
                    {
                        text: 'Home Safety Checklist',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('homeSafetyChecklist').value,
                        fontSize: 9
                    }
                ],
                [
                    {
                        text: 'Termites & Borers',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('termitesBorers').value,
                        fontSize: 9
                    },
                    {
                        text: 'Re-stumping',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('reStumping').value,
                        fontSize: 9
                    },
                    {
                        text: 'Cost Guide',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('costGuide').value,
                        fontSize: 9
                    }
                ]
            ]
        }
    };

    return result;
}

function convertImgToBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var src = canvas.toDataURL("image/png");

    return src;
}
