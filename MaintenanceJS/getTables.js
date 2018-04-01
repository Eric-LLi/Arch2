/**
 * Created by TengShinan on 10/10/17.
 */

/**
 * Get Defect Definitions Table
 * */
function getDefectDefinitions() {
    var result;
    result = {
        table: {
            body: [
                [{}, {
                    text: 'DEFINITION',
                    style: 'tableHeader'
                }],
                [{
                    text: 'Minor Defect/Maintenance Item',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: defectDefinition1,
                    style: 'tableLongTextLight'
                }],
                [{
                    text: 'Major Defect',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    stack: [
                        {
                            text: defectDefinition2,
                            margin: [0, 0, 0, 4]
                        },
                        {
                            ul: [
                                defectDefinition2a,
                                defectDefinition2b,
                                defectDefinition2c
                            ],
                            alignment: 'left'
                        }
                    ],
                    style: 'tableLongTextLight'
                }],
                [{
                    text: 'Serious Structural Defect',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    stack: [
                        {
                            text: defectDefinition3,
                            margin: [0, 0, 0, 4]
                        },
                        {
                            ul: [
                                defectDefinition3a,
                                defectDefinition3b,
                                {
                                    text: defectDefinition3c,
                                    margin: [0, 0, 0, 4]
                                }
                            ],
                            alignment: 'left'
                        },
                        {
                            text: defectDefinition4
                        }
                    ],
                    style: 'tableLongTextLight'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Attachment Table
 * */
function getAttachmentsTable() {
    var result;
    result = {
        table: {
            widths: [130, '*', 130, '*', 130, '*'],
            body: [
                [{
                    text: 'ITEM',
                    style: 'tableHeader',
                    alignment: 'center'
                }, {}, {
                    text: 'ITEM',
                    style: 'tableHeader',
                    alignment: 'center'
                }, {}, {
                    text: 'ITEM',
                    style: 'tableHeader',
                    alignment: 'center'
                }, {}],
                [{
                    text: 'Property Management Guide',
                    style: 'tableText'
                }, {
                    text: getIt('6000'),
                    style: 'tableText',
                    alignment: 'center'
                }, {
                    text: 'Cracking in Masonry',
                    style: 'tableText'
                }, {
                    text: getIt('6001'),
                    style: 'tableText',
                    alignment: 'center'
                }, {
                    text: 'Treatment of Dampness',
                    style: 'tableText'
                }, {
                    text: getIt('6002'),
                    style: 'tableText',
                    alignment: 'center'
                }],
                [{
                    text: 'Health & Safety Warning',
                    style: 'tableText'
                }, {
                    text: getIt('6003'),
                    style: 'tableText',
                    alignment: 'center'
                }, {
                    text: 'Roofing & Guttering',
                    style: 'tableText'
                }, {
                    text: getIt('6004'),
                    style: 'tableText',
                    alignment: 'center'
                }, {
                    text: 'Re-stumping',
                    style: 'tableText'
                }, {
                    text: getIt('6005'),
                    style: 'tableText',
                    alignment: 'center'
                }],
                [{
                    text: 'Termites & Borers',
                    style: 'tableText'
                }, {
                    text: getIt('6006'),
                    style: 'tableText',
                    alignment: 'center'
                }, {}, {}, {
                    text: 'Cost Guide',
                    style: 'tableText'
                }, {
                    text: getIt('6007'),
                    style: 'tableText',
                    alignment: 'center'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get CUSTOMER DETAILS Table
 * */
function getCustomerDetailsTable() {
    var result;
    result = {
        table: {
            widths: [70, '*', 70, '*'],
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
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, true, false, true]
                }, {}, {}],
                [{
                    text: 'Telephone',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('1'),
                    style: 'tableText'
                }, {
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('2'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Advice Required',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('3'),
                    style: 'tableText'
                }, {
                    text: 'Service Scope',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('4'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }]
            ]
        }
    };
    return result;
}

/**
 * Get ASSESSMENT DETAILS Table
 * */
function getInspectionDetailsTable() {
    var result;
    result = {
        table: {
            widths: [100, '*', 25, '*', 40, '*'],
            body: [
                [{
                    text: 'INSPECTION DETAILS',
                    style: 'tableHeader',
                    colSpan: 6,
                    border: [false, false, false, true]
                }, {}, {}, {}, {}, {}],
                [{
                    text: 'Address of Property',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('5'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Suburb',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('6'),
                    style: 'tableText'
                }, {
                    text: 'State',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('state'),
                    style: 'tableText'
                }, {
                    text: 'Postcode',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('8'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Date of Inspection',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('9'),
                    style: 'tableText',
                    colSpan: 2
                }, {}, {
                    text: 'Time of Inspection',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('10'),
                    style: 'tableText',
                    colSpan: 2,
                    border: [true, true, false, true]
                }, {}],
                [{
                    text: 'Existing use of Building',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('11'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Weather conditions',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('12'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Verbal summary to',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('13'),
                    style: 'tableText',
                    colSpan: 2
                }, {}, {
                    text: 'Date',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('14'),
                    style: 'tableText',
                    colSpan: 2,
                    border: [true, true, false, true]
                }, {}]
            ]
        }
    };
    return result;
}

/**
 * Get INSPECTOR DETAILS Table
 * */
function getInspectorDetailsTable() {
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
                }, {
                    text: getIt('15'),
                    style: 'tableText'
                }, {
                    text: 'Registration No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('16'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Address',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('17'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, true, false, true]
                }, {}, {}],
                [{
                    text: 'Email',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('18'),
                    style: 'tableText'
                }, {
                    text: 'Phone',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('19'),
                    style: 'tableText',
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
            widths: [120, '*', 75, '*'],
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
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}]
            ]
        }
    };
    return result;
}

/**
 * Get Your Maintenance Advice Summary - Summary Table
 * */
function getYMASSummary() {
    var result;
    result = {
        table: {
            widths: ['*'],
            body: [
                [{
                    stack: [
                        {
                            text: 'The following summarizes our advice with respect to particular concerns identified at the property:',
                            bold: true,
                            margin: [0, 0, 0, 4]
                        },
                        {
                            text: getIt('YMAS-TEXT1'),
                            margin: [0, 0, 0, 0]
                        },
                        {
                            text: getIt('ADVICE-TEXT4'),
                            margin: [0, 0, 0, 4]
                        },
                        {
                            text: 'Further detail can be found within the body of this report and queries may be directed to the named architect or Archicentre Australia.',
                            bold: true
                        }
                    ],
                    style: 'tableText',
                    alignment: 'justify'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Your Maintenance Advice Summary - Major Defect Table
 * */
function getYMASMajorDefects() {
    var result;
    result = {
        table: {
            widths: ['*'],
            body: [
                [{
                    stack: [
                        {
                            text: 'Significant risk or cost consequences of not proceeding with this advice are as follows:',
                            bold: true,
                            margin: [0, 0, 0, 4]
                        },
                        {
                            text: getIt('YMAS-TEXT2')
                        }
                    ],
                    style: 'tableText',
                    alignment: 'justify'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Your Maintenance Advice Summary - Serious Structural Defects Table
 * */
function getYMASSeriousStructuralDefects() {
    var result;

    result = {
        table: {
            widths: ['*'],
            body: [
                [{
                    stack: [
                        {
                            text: 'Under the circumstances our recommendations are as follows:',
                            bold: true,
                            margin: [0, 0, 0, 4]
                        },
                        {
                            ul: giveMeTheBullet('YMAS-TEXT3')
                        }
                    ],
                    style: 'tableText',
                    alignment: 'justify'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Advice Table
 * */
function getAdviceTable() {
    var result;

    result = {
        table: {
            widths: ['*'],
            body: [
                [{
                    text: 'Advice',
                    style: 'tableHeader'
                }],
                [{
                    stack: [
                        {
                            text: 'Observations and Analysis:',
                            bold: true,
                            margin: [0, 0, 0, 4],
                            fontSize: 10
                        },
                        {
                            text: getIt('ADVICE-TEXT1')
                        },
                        makeAGap(),
                        {
                            text: 'Recommendations:',
                            bold: true,
                            margin: [0, 0, 0, 4],
                            fontSize: 10
                        },
                        {
                            text: getIt('ADVICE-TEXT2')
                        },
                        makeAGap(),
                        {
                            text: 'Consequences:',
                            bold: true,
                            margin: [0, 0, 0, 4],
                            fontSize: 10
                        },
                        {
                            text: 'Significant risk or cost consequences of not proceeding with this advice are as follows:',
                            margin: [0, 0, 0, 4]
                        },
                        {
                            ul: giveMeTheBullet('ADVICE-TEXT3')
                        },
                        makeAGap(),
                        {
                            text: 'Summary:',
                            bold: true,
                            margin: [0, 0, 0, 4],
                            fontSize: 10
                        },
                        {
                            text: getIt('ADVICE-TEXT4')
                        }
                    ],
                    style: 'tableText',
                    alignment: 'justify'
                }]
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
    var data = [];
    var tableBody;
    var totalImageNumber = $('#MaintenancePhotographs').find('> form').length;
    console.log("the current total image number is: " + totalImageNumber);
    var fullAddress = document.getElementById('5').value.trim() + " " + document.getElementById('6').value.trim();



    var firstRow = [
        {
            text:"Photographs",
            style:'pageTopHeader',
            margin: [0, 0, 0, 5],
            colSpan:2
        },{}
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text:'Address: ' + fullAddress,
            style: 'tableBoldTextAlignLeft',
            margin: [0, 0, 0, 10],
            colSpan:2
        },{}
    ];
    data.push(secondRow);

    for(i=0;i<totalImageNumber;i=i+2)
    {

        var n = i + 1;
        var firstImageID = 'MaintenanceImage' + i;
        var secondImageID = 'MaintenanceImage' + n;
        var firstTextID = 'MaintenanceImageText' + i;
        var secondTextID = 'MaintenanceImageText' + n;


        var imageRow =
            [
                getPhoto(firstImageID),
                getPhoto(secondImageID)

            ];
        var textRow = [
            getImageText(firstTextID),
            getImageText(secondTextID)

        ];
        data.push(imageRow);
        data.push(textRow);
    }

    tableBody = {
        table: {
            headerRows: 2,
            body: data
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

    return tableBody;
}


/*
    get drawings
 */
function getDrawingTable()
{
    var result;
    var data = [];
    var tableBody;
    var totalDrawingNumber = $('#MaintenanceDrawings').find('> form').length;
    var forTheLoop = totalDrawingNumber - 1;
    console.log("the current total drawing number is: " + totalDrawingNumber);
    var fullAddress = document.getElementById('5').value.trim() + " " + document.getElementById('6').value.trim();



    var firstRow = [
        {
            text:"Drawings",
            style:'pageTopHeader',
            margin: [0, 0, 0, 5]
        }
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text:'Address: ' + fullAddress,
            style: 'tableBoldTextAlignLeft',
            margin: [0, 0, 0, 10]
        }
    ];
    data.push(secondRow);


    for(i=0;i<totalDrawingNumber;i=i+1)
    {

        var firstImageID = 'MaintenanceDrawing' + i;

        var firstTextID = 'MaintenanceDrawingText' + i;

        var imageRow =
            [
                getDrawing(firstImageID)
            ];
        var textRow =
            [
                getDrawingText(firstTextID)
            ];
        data.push(imageRow);
        data.push(textRow);
    }



    tableBody = {
        table: {
            headerRows: 2,
            body: data
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

    return tableBody;
}