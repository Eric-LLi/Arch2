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
 * Get advice table
 */

function getAdviceTable()
{
    var result;

    result = {
        table:{
            body: [
                [
                    {
                        text:"DETAILS OF ADVICE SOUGHT",
                        style:'tableHeader',
                        border: [false, false, false, false]
                    }
                ],
                [
                    {
                        text:getIt('adviceDetail'),
                        fontSize:9,
                        margin:[0,0,0,5],
                        border: [false, false, false, false]
                    }
                ],
                [
                    {
                        text:"Advice Summary",
                        style:'tableHeader',
                        border: [false, true, false, false]
                    }
                ],
                [
                    {
                        text:getIt('adviceSummary'),
                        fontSize:9,
                        margin:[0,0,0,5],
                        border: [false, false, false, true]
                    }
                ]
                // [
                //     {
                //         text:"Report Charges\n This report covers up to 2 hours of the Architect’s time which includes consultation and Report writing. An additional hourly charge is payable for reports exceeding this time.",
                //         fontSize:9,
                //         border: [false, true, false, false],
                //         margin:[0, 300, 0, 0]
                //
                //     }
                // ]
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
    var data = [];
    var tableBody;
    var totalImageNumber = $('#AdvicePhotographs').find('> form').length;
    console.log("the current total image number is: " + totalImageNumber);

    var firstRow = [
        {
            text:"ARCHITECT'S ADVICE REPORT(continued)",
            style:'tableHeader',
            margin: [0, 0, 0, 5],
            colSpan:2
        },{}
    ];
    data.push(firstRow);

    var secondRow = [
        {
            text:'Address: ' + getIt('adviceAddress'),
            style: 'tableBoldTextAlignLeft',
            margin: [0, 0, 0, 10],
            colSpan:2
        },{}
    ];
    data.push(secondRow);

    for(i=0;i<totalImageNumber;i=i+2)
    {

        var n = i + 1;
        var firstImageID = 'AdviceImage' + i;
        var secondImageID = 'AdviceImage' + n;
        var firstTextID = 'AdviceImageText' + i;
        var secondTextID = 'AdviceImageText' + n;


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