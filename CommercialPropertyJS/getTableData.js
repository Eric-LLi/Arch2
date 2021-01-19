/**
 * Created by Fafa on 24/10/17.
 */

/**
 * Get CLIENT DETAILS Table
 * */
function getClientDetailsTable() {
    var result;
    result = {
        table: {
            widths: [61, '*', 51, '*'],
            body: [
                [{
                    text: 'CLIENT DETAILS',
                    style: 'tableHeader',
                    colSpan: 4,
                    border: [false, false, false, true]
                }, {}, {}, {}],
                [{
                    text: 'Name',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('CP_ClientName'),
                    fontSize: 9,
                    border: [true, true, false, true]
                },{
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('CP_BookingNo'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Telephone No',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('CP_ClientPhone'),
                    fontSize: 9
                }, {
                    text: 'Mobile No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('CP_ClientMobile'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }]
            ]
        },
        margin: [0, 5, 0, 10]
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
            widths: ['auto', '*', 'auto', '*', 'auto', '*'],
            body: [
                [
                    {
                        text: 'ASSESSMENT DETAILS',
                        style: 'tableHeader',
                        colSpan: 6,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}, {}, {}],
                [
                    {
                        text: 'Address of Property',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('CP_Address'),
                        colSpan: 5,
                        fontSize: 9,
                        border: [true, true, false, true]
                    },
                    {}, {}, {}, {}],
                [
                    {
                        text: 'Suburb',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('CP_Suburb'),
                        fontSize: 9
                    },
                    {
                        text: 'State',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('CP_State'),
                        fontSize: 9
                    },
                    {
                        text: 'Postcode',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('CP_Postcode'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'Date of Assessment',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('CP_DateOfAssessment'),
                        fontSize: 9,
                        colSpan: 2
                    },
                    {},
                    {
                        text: 'Time of Assessment',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('CP_TimeOfAssessment'),
                        fontSize: 9,
                        colSpan: 2,
                        border: [true, true, false, true]
                    },
                    {}
                ],
                [
                    {
                        text: 'Existing use of Property',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('CP_ExistingUse'),
                        colSpan: 5,
                        fontSize: 9,
                        border: [true, true, false, true]
                    },
                    {}, {}, {}, {}
                ],
                [
                    {
                        text: 'Weather conditions',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('CP_WeatherConditions'),
                        colSpan: 5,
                        fontSize: 9,
                        border: [true, true, false, true]
                    },
                    {}, {}, {}, {}],
                [
                    {
                        text: 'Verbal summary to',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('CP_VerbalSummary'),
                        fontSize: 9,
                        colSpan: 3
                    },
                    {},
                    {},
                    {
                        text: 'Date',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('CP_Date'),
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

function getPropertySummary() {
    var data = [];
    var tableBody;
    var totalSummary = $('#psDIV').find('> div').length;
    //console.log(totalSummary);
    var firstRow = [
        {
            text: 'PROPERTY SUMMARY - Primary construction materials and site conditions',
            style: 'tableHeader',
            border: [false, true, false, true],
            colSpan: 4
        }, {}, {}, {}
    ];
    data.push(firstRow);

    for (var i = 0; i < totalSummary; i = i + 2) {
        var nextID = i + 1;
        var labelID1 = 'psName' + i;
        var labelID2 = 'psName' + nextID;
        var inputID1 = 'ps' + i;
        var inputID2 = 'ps' + (nextID);

        var inputCell1 = getIt(inputID1);
        var inputCell2 = getIt(inputID2);
        var labelCell1;
        var labelCell2;

        if (i < 12) {
            labelCell1 = document.getElementById(labelID1).textContent;
        } else {
            labelCell1 = getIt(labelID1);
        }

        if (nextID < 11) {
            labelCell2 = document.getElementById(labelID2).textContent;
        } else {
            labelCell2 = getIt(labelID2);
        }


        var row = [
            {
                text: labelCell1,
                style: 'tableBoldTextAlignLeft',
                border: [false, true, true, true]
           },
            {
                text: inputCell1,
                fontSize: 10
           },
            {
                text: labelCell2,
                style: 'tableBoldTextAlignLeft'
           },
            {
                text: inputCell2,
                fontSize: 10,
                border: [true, true, false, true]
           }
       ];
        data.push(row);
    }

    tableBody = {
        table: {
            widths: [100, '*', 100, '*'],
            body: data
        },
        margin: [0, 5, 0, 10]
    };
    return tableBody;
}

/**
 * Get Architect DETAILS
 * */
function getArchitectDetailsTable() {
    var result;
    result = {
        table: {
            widths: [140, '*', 70, '*'],
            body: [
                [
                    {
                        text: 'ARCHITECT DETAILS',
                        style: 'tableHeader',
                        colSpan: 4,
                        border: [false, true, false, true]
                    },
                    {}, {}, {}
                ],
                [
                    {
                        text: 'Your Architect:',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('architectName'),
                        fontSize: 9
                    },
                    {
                        text: 'Registration No:',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('registrationNumber'),
                        fontSize: 9,
                        border: [true, true, false, true]
                    }
                ],
                [
                    {
                        text: 'ADDRESS',
                        style: 'tableBoldTextAlignLeft',
                        border: [false, true, true, true]
                    },
                    {
                        text: getIt('architectAddress'),
                        fontSize: 9,
                        colSpan: 3,
                        border: [true, true, false, true]
                    },
                    {}, {}
                ],
                [
                    {
                        text: 'Email',
                        border: [false, true, true, true],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: getIt('architectEmail'),
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
                    }
                ]
            ]
        },
        margin: [0, 5, 0, 5]
    };
    return result;
}


/**
 * Draw the evident defect summary table in property assessment summary page
 * Note: the number of defects is fluid. minimum is 9
 * so the table at least have three row. each row have six columns.
 * then based on the total number, create new row accordingly
 */
function getEvidentDefectTable() {
    var result;
    var body = [];
    var div = document.getElementById('EDRow');
    var divNumber = $('#EDRow').find('> div').length;
    //1. first three fixed rows
    for (var i = 0; i < 9; i = i + 3) {
        //console.log(i);
        var b = i + 3;
        var row = [];
        for (var a = i; a < b; a++) {
            //console.log(a);
            nameID = "EDName" + a;
            selectID = "EDSelect" + a;
            var defectName = {
                text: document.getElementById(nameID).textContent,
                style: 'tableBoldTextAlignLeft',
                alignment: 'center'
            };
            var defect = {

                text: getIt(selectID),
                style: 'tableText',
                alignment: 'center'
            };
            //console.log(defect);
            row.push(defectName);
            row.push(defect);
        }
        //console.log(row);
        body.push(row);
    }


    //if divNumber > 3, it means user creates new defects, then need to generate new rows
    if (divNumber > 9) {

        //console.log(totalNestDiv);
        for (var i = 9; i < divNumber; i = i + 3) {
            var b = i + 3;
            var row = [];
            for (var a = i; a < b; a++) {
                //console.log(a);
                nameID = "EDName" + a;
                selectID = "EDSelect" + a;

                var name = document.getElementById(nameID);
                var select = document.getElementById(selectID);
                if (name != null) {
                    var defectName = {
                        text: name.value,
                        style: 'tableBoldTextAlignLeft',
                        alignment: 'center'
                    };
                    var defect = {
                        text: select.value,
                        style: 'tableText',
                        alignment: 'center'
                    };
                    row.push(defectName);
                    row.push(defect);
                } else {
                    var defectName = {
                        text: "",
                        style: 'tableBoldTextAlignLeft'
                    };
                    var defect = {
                        text: "",
                        style: 'tableText'
                    };
                    row.push(defectName);
                    row.push(defect);
                }
            }
            body.push(row);

        }
    }
    // console.log(divNumber);



    //final the table
    result = {
        table: {
            widths: ['*', 30, '*', 30, '*', 30],
            body: body
        },
        margin: [0, 5, 0, 5]
    };

    return result;



}



function getAssessmentSummary() {
    var result;
    var data = [];

    var firstRow = [
        {
            text: 'Assessment Summary',
            style: 'tableHeader',
            border: [false, true, false, true]
        }
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text: getIt('CP_SummaryNote'),
            border: [false, true, false, true],
            fontSize: 10
        }
    ];
    data.push(secondRow);

    result = {
        table: {
            widths: ['*'],
            body: data
        },
        margin: [0, 20, 0, 20]
    };

    return result;
}


/**
 * Get the Site Area Table
 */
function getSiteAreaTable() {
    var data = [];
    var tableBody;
    var areaNumber = $('#siteArea').find('> div').length;
    // console.log(areaNumber);


    var firstRow = [
        {
            text: 'Area',
            alignment: 'center',
            fontSize: 10,
            bold: true
        },
        '',
        {
            text: "Key",
            alignment: 'center',
            fontSize: 10,
            bold: true
        },
        '',
        {
            text: "Key",
            alignment: 'center',
            fontSize: 10,
            bold: true
        },
        '',
        {
            text: "Key",
            alignment: 'center',
            fontSize: 10,
            bold: true
        }

    ];
    data.push(firstRow);

    for (var i = 0; i < areaNumber; i++) {
        var inputID = 'siteAreaName' + i;
        var input = getIt(inputID);
        var featureNumber = $('#siteAreaRow' + i).find('> div').length;
        //console.log("the feature number is "+featureNumber);
        var placeID = 'siteAreaRow' + i + '_name';
        var selectID = 'siteAreaRow' + i + '_select';
        var fixedLastID = 2;
        var partTable = createSitePartialTable(input, featureNumber, placeID, selectID, fixedLastID);
        //console.log(partTable);
        data = data.concat(partTable);
    }



    tableBody = {
        table: {
            widths: ['auto', '*', 'auto', '*', 'auto', '*', 'auto'],
            body: data
        },
        margin: [0, 5, 0, 10]
    };
    return tableBody;
}

/**
 * Get the Property Exterior & Property Interior Table
 * use the areaID, nameID, rowID, to generate the correct id for the specific area.
 */
function getAreaTable(areaID, nameID, rowID) {
    var data = [];
    var tableBody;
    var areaNumber = $('#' + areaID).find('> div').length;
    //console.log(areaNumber);

    // if (areaID == 'InteriorDryArea') {
    //     var firstRow = [
    //         {
    //             text: 'Area',
    //             alignment: 'center',
    //             fontSize: 10,
    //             fillColor: '#CCCCCC',
    //             bold: true
    //         },
    //         {
    //             text: '',
    //             fillColor: '#CCCCCC',
    //         },
    //         {
    //             text: "Key",
    //             alignment: 'center',
    //             fontSize: 10,
    //             fillColor: '#CCCCCC',
    //             bold: true
    //         },
    //         {
    //             text: '',
    //             fillColor: '#CCCCCC',
    //         },
    //         {
    //             text: "Key",
    //             alignment: 'center',
    //             fontSize: 10,
    //             fillColor: '#CCCCCC',
    //             bold: true
    //         },
    //         {
    //             text: '',
    //             fillColor: '#CCCCCC',
    //         },
    //         {

    //             text: "Key",
    //             alignment: 'center',
    //             fontSize: 10,
    //             fillColor: '#CCCCCC',
    //             bold: true
    //         },
    //         {
    //             text: '',
    //             fillColor: '#CCCCCC',
    //         },
    //         {

    //             text: "Key",
    //             alignment: 'center',
    //             fontSize: 10,
    //             fillColor: '#CCCCCC',
    //             bold: true
    //         }

    //     ];
    //     data.push(firstRow);
    // }


    var firstInput = getIt(nameID + '0');

    if (firstInput != "") {
        for (var i = 0; i < areaNumber; i++) {
            var inputID = nameID + i;
            var input = getIt(inputID);
            var featureNumber = $('#' + rowID + i).find('> div').length;
            //console.log("the feature number is "+featureNumber);
            var placeID = rowID + i + '_name';
            var selectID = rowID + i + '_select';
            var partTable = createExInteriorPartialTable(input, featureNumber, placeID, selectID);
            //console.log(partTable);
            data = data.concat(partTable);
        }

        tableBody = {
            table: {
                widths: ['*', 'auto', 15, 'auto', 15, 'auto', 15, 'auto', 15],
                body: data
            },
            margin: [0, 5, 0, 10]
        };
    } else {
        tableBody = {
            text: ''
        }
    }


    return tableBody;
}

/**
 * Get the data from the access limitation table.
 */
function getAccessLimitationTable(tableID, itemID, imageRefID, selectID, notesID) {
    var data = [];
    var tableBody;
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    var firstRow = [
        {
            text: 'Access Limitations (U)',
            color: 'red',
            fontSize: 10,
            colSpan: 4
        },
        '', '', ''
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text: 'ITEM NO.',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        },
        {
            text: 'IMAGE REF.',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        },
        {
            text: 'ACCESS LIMITATIONS',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        },
        {
            text: 'ACCESS NOTES',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        }
    ];
    data.push(secondRow);

    for (var i = 0; i < rowCount - 1; i++) {

        var cell1ID = itemID + i;
        var cell2ID = imageRefID + i;
        var cell3ID = selectID + i;
        var cell4ID = notesID + i;

        //console.log(cell1ID);
        //console.log(cell2ID);
        //console.log(cell3ID);
        //console.log(cell4ID);

        var itemNo = getIt(cell1ID);

        var imageRef = getIt(cell2ID);
        var access = getIt(cell3ID);
        var notes = getIt(cell4ID);

        if (imageRef == '') {
            imageRef = '--'
        }
        if (itemNo == '') {
            itemNo = '--'
        }

        var row = [
            {
                text: itemNo,
                fontSize: 9
            },
            {
                text: imageRef,
                fontSize: 9
            },
            {
                text: access,
                fontSize: 9
            },
            {
                text: notes,
                fontSize: 9
            }
        ];
        data.push(row)
    }

    tableBody = {
        table: {
            widths: ['auto', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 10]
    };
    return tableBody;

}


/**
 * Get the data from the maintenance / minor defects table.
 */
function getMinorDefectsTable(tableID, itemNoID, imageRefID, notesID, recommendationID) {
    var data = [];
    var tableBody;
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    var firstRow = [
        {
            text: 'Maintenance Items and Minor Defects Found (X)',
            color: 'red',
            fontSize: 10,
            colSpan: 4
        },
        '', '', ''
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text: 'ITEM NO.',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        },
        {
            text: 'IMAGE REF.',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        },
        {
            text: 'DEFECT NOTES',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center',
            colSpan: 2
        },
        ''
    ];
    data.push(secondRow);

    for (var i = 0; i < rowCount - 1; i++) {

        var cell1ID = itemNoID + i;
        var cell2ID = imageRefID + i;
        var cell3ID = notesID + i;


        //console.log(cell1ID);
        //console.log(cell2ID);
        //console.log(cell3ID);


        var itemNo = getIt(cell1ID);
        var imageRef = getIt(cell2ID);
        var notes = getIt(cell3ID);
        var recommendation = getIt(recommendationID);

        if (imageRef == '') {
            imageRef = '--'
        }
        if (itemNo == '') {
            itemNo = '--'
        }
        if (recommendation == '') {
            recommendation = '--'
        }


        var row = [
            {
                text: itemNo,
                fontSize: 9
            },
            {
                text: imageRef,
                fontSize: 9
            },
            {
                text: notes,
                fontSize: 9,
                colSpan: 2
            },
            ''
        ];
        data.push(row)
    }

    var recommendationRow = [
        {
            text: 'Professional and Trade Recommendations:',
            fontSize: 9,
            colSpan: 3
        },
        '', '',
        {
            text: recommendation,
            fontSize: 9
        }
    ];
    data.push(recommendationRow);

    tableBody = {
        table: {
            widths: ['auto', 'auto', 'auto', '*'],
            body: data
        },
        margin: [0, 5, 0, 10]
    };
    return tableBody;
}


/**
 * Get the data from the major defects table.
 */
function getMajorDefectsTable(tableID, itemNoID, imageRefID, notesID, recommendationID) {
    var data = [];
    var tableBody;
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;

    var firstRow = [
        {
            text: 'Major Defects Found (XX)',
            color: 'red',
            fontSize: 10,
            colSpan: 4
        },
        '', '', ''
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text: 'ITEM NO.',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        },
        {
            text: 'IMAGE REF.',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center'
        },
        {
            text: 'DEFECT NOTES',
            fontSize: 9,
            fillColor: '#CCCCCC',
            alignment: 'center',
            colSpan: 2
        },
        ''
    ];
    data.push(secondRow);

    for (var i = 0; i < rowCount - 1; i++) {

        var cell1ID = itemNoID + i;
        var cell2ID = imageRefID + i;
        var cell3ID = notesID + i;


        //console.log(cell1ID);
        //console.log(cell2ID);
        //console.log(cell3ID);


        var itemNo = getIt(cell1ID);
        var imageRef = getIt(cell2ID);
        var notes = getIt(cell3ID);
        var recommendation = getIt(recommendationID);

        if (imageRef == '') {
            imageRef = '--'
        }
        if (itemNo == '') {
            itemNo = '--'
        }
        if (recommendation == '') {
            recommendation = '--'
        }


        var row = [
            {
                text: itemNo,
                fontSize: 9
            },
            {
                text: imageRef,
                fontSize: 9
            },
            {
                text: notes,
                fontSize: 9,
                colSpan: 2
            },
            ''
        ];
        data.push(row)
    }

    var recommendationRow = [
        {
            text: 'Professional and Trade Recommendations:',
            fontSize: 9,
            colSpan: 3
        },
        '', '',
        {
            text: recommendation,
            fontSize: 9
        }
    ];
    data.push(recommendationRow);

    tableBody = {
        table: {
            widths: ['auto', 'auto', 'auto', '*'],
            dontBreakRows: true,
            body: data
        },
        margin: [0, 5, 0, 10]
    };
    return tableBody;
}

/**
 * Get General Notes
 */
function getGeneralNotes(generalNotesID) {
    var data = [];
    var tableBody;


    var firstRow = [
        {
            text: 'General notes:',
            color: 'red',
            fontSize: 10
        }
    ];
    data.push(firstRow);
    //console.log(splitTextArea(getTextArea('siteGeneralNotes')));

    var secondRow = [
        splitTextArea(getTextArea(generalNotesID))
    ];

    data.push(secondRow);
    //console.log(secondRow);


    tableBody = {
        table: {
            widths: ['*'],
            body: data
        },
        margin: [0, 5, 0, 10]
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
                        text: 'Re-stumping',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('reStumping').value,
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
                        text: 'Cost Guide',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text: document.getElementById('costGuide').value,
                        fontSize: 9
                    },
                    {}, {}
                ]
            ]
        },
        margin: [0, 10, 0, 20]
    };

    return result;
}

/**
 *  Use the parameters to create rows for the big table. one place at one time. return an Array [].
 *  four texts + four selection in one row.
 * then this array will be pushed into the whole table
 */
function createExInteriorPartialTable(cellText, divCount, placeID, selectID) {
    var partOfTable = [];
    var rowSpanNumber = Math.ceil(divCount / 4);
    var currentDiv = placeID.replace(/[^\d.]/g, '');
    //console.log('the current Div is ' + currentDiv);

    for (var i = 0; i < divCount; i = i + 4) {
        var newRow = [];

        //create the first cell in the row. if this is the first row, then write the name, row span. if it is not the
        // first row, then create empty cell will be enough.
        if (i == 0) {
            var cell0 = {
                text: cellText,
                rowSpan: rowSpanNumber,
                fontSize: 10,
                color: 'black',
                bold: true,
                alignment: 'center'
            };
            newRow.push(cell0);
        } else {
            var cell0 = {};
            newRow.push(cell0);
        }

        //Create the cells in the row, each loop create two cells. it is possible, in some loops, the id is null, will
        //return '' instead
        for (var a = i; a < i + 4; a++) {
            var place;
            var select;

            var cell1;
            var cell2;

            // console.log(placeID + a);
            //console.log(selectID + a);

            place = document.getElementById(placeID + a);
            select = document.getElementById(selectID + a);


            if (place != null) {
                place = place.value;

                cell1 = {
                    text: place,
                    style: 'tableText',
                    noWrap: true
                };
            } else {
                cell1 = ''
            }



            if (select != null) {

                //select = select.value;
                cell2 = {
                    text: getIt(selectID + a),
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);

        }
        partOfTable.push(newRow);
    }
    //console.log(partOfTable);
    return partOfTable;
}


/**
 * Use the parameters to create rows for the big table. one place at one time. return an Array [].
 * then this array will be pushed into the whole table
 */
function createSitePartialTable(cellText, divCount, placeID, selectID, fixedLastID) {
    var partOfTable = [];
    var rowSpanNumber = Math.ceil(divCount / 3);
    var currentDiv = placeID.replace(/[^\d.]/g, '');
    //console.log('the current Div is ' + currentDiv);

    for (var i = 0; i < divCount; i = i + 3) {
        var newRow = [];

        //create the first cell in the row. if this is the first row, then write the name, row span. if it is not the
        // first row, then create empty cell will be enough.
        if (i == 0) {
            var cell0 = {
                text: cellText,
                rowSpan: rowSpanNumber,
                fontSize: 10,
                color: 'black',
                bold: true,
                alignment: 'center'
            };
            newRow.push(cell0);
        } else {
            var cell0 = {};
            newRow.push(cell0);
        }

        //Create the cells in the row, each loop create two cells. it is possible, in some loops, the id is null, will
        //return '' instead
        for (var a = i; a < i + 3; a++) {
            var place;
            var select;

            var cell1;
            var cell2;
            // console.log(placeID + a);
            //console.log(selectID + a);

            place = document.getElementById(placeID + a);
            select = document.getElementById(selectID + a);


            if (place != null) {
                if (currentDiv < 2) {
                    if (a > fixedLastID) {
                        place = place.value;
                    } else {
                        place = place.textContent;
                    }
                } else {
                    place = place.value;
                }

                cell1 = {
                    text: place,
                    style: 'tableText',
                    noWrap: true
                };
            } else {
                cell1 = ''
            }



            if (select != null) {

                //select = select.value;

                cell2 = {
                    text: getIt(selectID + a),
                    style: 'tableText',
                    alignment: 'center'
                };
            } else {
                cell2 = ''
            }

            newRow.push(cell1);
            newRow.push(cell2);

        }
        partOfTable.push(newRow);
    }
    //console.log(partOfTable);
    return partOfTable;
}



/**
 * Get the images, need to have the image number on it as well. 
 * create a table, one row has two images, one row has two texts. 
 */
function getImages() {
    var data = [],
        row = [],
        tableBody, divCount = 1;

    var totalContainers = $("#CPImagesTable").children('div');
   

    if (isEmpty(totalContainers.length)) 
    {
        tableBody = {
            text:''
        };
    } 
    else 
    {
        row.push({
            text: 'PHOTOGRAPHS',
            color: 'red',
            fontSize: 11,
            margin: [0, 0, 0, 5],
            bold: 'true'
        }, {});
        data.push(row);
        row = [];
        row.push({
            text: 'Address: ' + getIt('CP_Address') + ', ' + getIt('CP_Suburb'),
            fontSize: 10,
            bold: 'true',
            margin:[0,0,0,20]
        }, {});
        data.push(row);
        row = [];

        for (var i = 0; i < totalContainers.length; i++) {
            var imgContainer = totalContainers.eq(i).children('img');
                img = totalContainers.eq(i).children('img').get(0),
                imgSrc = totalContainers.eq(i).children('img').attr('src'),
                imgLabel = totalContainers.eq(i).children('label').text(),
                imgText = totalContainers.eq(i).children('input').val();
                imgAngle = totalContainers.eq(i).children('input').eq(1).val(),
                width = 0,
                height = 0,
                alignment = 'left'
                margin = [0,5,0,15];
                // width = 0,
                // height = 0;
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
        }

        if (divCount == 2) {
            row.push({});
            data.push(row);
        }
        tableBody = {
            pageBreak: 'before',
            layout: {
                hLineColor: function (i, node) {
                    return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
                },
                vLineColor: function (i, node) {
                    return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
                }
            },
            //layout: 'noBorders',
            table: {
                widths: [250, 250],
                headerRows: 2,
                dontBreakRows: true,
                widths: ['*', '*'],
                body: data
            }
        };
    }

    //    if (document.getElementById('CPImagesTable').style.display != 'none') {
    //        var firstRow = [
    //            {
    //                text: 'PHOTOGRAPHS',
    //                color: 'red',
    //                fontSize: 11,
    //                bold: 'true',
    //                colSpan: 2
    //            },
    //            ''
    //        ];
    //        data.push(firstRow);
    //
    //        var secondRow = [
    //            {
    //                text: 'Address: ' + getIt('CP_Address') + ', ' + getIt('CP_Suburb'),
    //                fontSize: 10,
    //                bold: 'true',
    //                colSpan: 2
    //            },
    //            ''
    //        ];
    //        data.push(secondRow);
    //
    //        for (var i = 0; i < finalImageNumber; i = i + 2) {
    //            var n = i + 1;
    //            var firstImageID = 'CPImage' + i;
    //            var secondImageID = 'CPImage' + n;
    //            var firstTextID = 'CPImageText' + i;
    //            var secondTextID = 'CPImageText' + n;
    //
    //
    //            var imageRow = [
    //                    getPhoto(firstImageID),
    //                    getPhoto(secondImageID)
    //
    //                ];
    //            var textRow = [
    //                getImageText(firstTextID),
    //                getImageText(secondTextID)
    //
    //            ];
    //            data.push(imageRow);
    //            data.push(textRow);
    //
    //        }
    //        tableBody = {
    //            table: {
    //                widths: ['*', '*'],
    //                headerRows: 2,
    //                body: data
    //            },
    //            layout: {
    //                hLineColor: function (i, node) {
    //                    return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
    //                },
    //                vLineColor: function (i, node) {
    //                    return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
    //                }
    //            },
    //            margin: [0, 5, 0, 10]
    //        };
    //    } else {
    //        var row = [
    //            {
    //                text: ''
    //            }
    //        ];
    //        data.push(row);
    //        tableBody = {
    //            table: {
    //                body: data
    //            },
    //            layout: {
    //                hLineColor: function (i, node) {
    //                    return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
    //                },
    //                vLineColor: function (i, node) {
    //                    return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
    //                }
    //            }
    //        };
    //    }
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
