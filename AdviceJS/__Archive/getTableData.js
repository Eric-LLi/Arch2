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
            widths: [140, '*', 70, '*'],
            body: [
                [{
                    text: 'ASSESSOR DETAILS',
                    style: 'tableHeader',
                    colSpan: 4,
                    border: [false, false, false, true]
                }, {}, {}, {}],
                [{
                    text: 'Your Architect:',
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
                        text:'ADDRESS',
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
                        border: [false, false, false, false]
                    }
                ],
                [
                    {
                        text:"Report Charges\n This report covers up to 2 hours of the Architect’s time which includes consultation and Report writing. An additional hourly charge is payable for reports exceeding this time.",
                        fontSize:9,
                        border: [false, true, false, false]
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
    //console.log('get images');
    //check whether the user upload images.
    var firstImage = document.getElementById('AdviceImage0');
    if (firstImage)
    {
        //console.log('have images');
        result = {
            table:
            {
                widths: ['*', '*'],
                headerRows: 2,
                body:[
                    [
                        {
                            text:"ARCHITECT'S ADVICE REPORT(continued)",
                            style:'tableHeader',
                            margin: [0, 0, 0, 5],
                            colSpan:2
                        },{}
                    ],
                    [
                        {
                            text:'Address: ' + getIt('adviceAddress'),
                            style: 'tableBoldTextAlignLeft',
                            margin: [0, 0, 0, 5],
                            colSpan:2
                        },{}
                    ],
                    [
                        displayImage('AdviceImage0'),
                        displayImage('AdviceImage1')
                    ],
                    [
                        getImageText('AdviceImageText0'),
                        getImageText('AdviceImageText1')
                    ],
                    [
                        displayImage('AdviceImage2'),
                        displayImage('AdviceImage3')
                    ],
                    [
                        getImageText('AdviceImageText2'),
                        getImageText('AdviceImageText3')
                    ],
                    [
                        displayImage('AdviceImage4'),
                        displayImage('AdviceImage5')
                    ],
                    [
                        getImageText('AdviceImageText4'),
                        getImageText('AdviceImageText5')
                    ],
                    [
                        displayImage('AdviceImage6'),
                        displayImage('AdviceImage7')
                    ],
                    [
                        getImageText('AdviceImageText6'),
                        getImageText('AdviceImageText7')
                    ],
                    [
                        displayImage('AdviceImage8'),
                        displayImage('AdviceImage9')
                    ],
                    [
                        getImageText('AdviceImageText8'),
                        getImageText('AdviceImageText9')
                    ],
                    [
                        displayImage('AdviceImage10'),
                        displayImage('AdviceImage11')
                    ],
                    [
                        getImageText('AdviceImageText10'),
                        getImageText('AdviceImageText11')
                    ],
                    [
                        displayImage('AdviceImage12'),
                        displayImage('AdviceImage13')
                    ],
                    [
                        getImageText('AdviceImageText12'),
                        getImageText('AdviceImageText13')
                    ],
                    [
                        displayImage('AdviceImage14'),
                        displayImage('AdviceImage15')
                    ],

                    [
                        getImageText('AdviceImageText14'),
                        getImageText('AdviceImageText15')
                    ],
                    [
                        displayImage('AdviceImage16'),
                        displayImage('AdviceImage17')
                    ],
                    [
                        getImageText('AdviceImageText16'),
                        getImageText('AdviceImageText17')
                    ],
                    [
                        displayImage('AdviceImage18'),
                        displayImage('AdviceImage19')
                    ],
                    [
                        getImageText('AdviceImageText18'),
                        getImageText('AdviceImageText19')
                    ],
                    [
                        displayImage('AdviceImage20'),
                        displayImage('AdviceImage21')
                    ],
                    [
                        getImageText('AdviceImageText20'),
                        getImageText('AdviceImageText21')
                    ],
                    [
                        displayImage('AdviceImage22'),
                        displayImage('AdviceImage23')
                    ],
                    [
                        getImageText('AdviceImageText22'),
                        getImageText('AdviceImageText23')
                    ],
                    [
                        displayImage('AdviceImage24'),
                        displayImage('AdviceImage25')
                    ],
                    [
                        getImageText('AdviceImageText24'),
                        getImageText('AdviceImageText25')
                    ],
                    [
                        displayImage('AdviceImage26'),
                        displayImage('AdviceImage27')
                    ],
                    [
                        getImageText('AdviceImageText26'),
                        getImageText('AdviceImageText27')
                    ],
                    [
                        displayImage('AdviceImage28'),
                        displayImage('AdviceImage29')
                    ],
                    [
                        getImageText('AdviceImageText28'),
                        getImageText('AdviceImageText29')
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
        //console.log('there');
        result = {
            text:""
        };
    }


    return result;
}