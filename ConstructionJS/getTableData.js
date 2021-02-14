/**
 * Created by Fafa on 8/10/17.
 */

/**
 * Get CLIENT DETAILS Table
 * */
function getCustomerDetailsTable() {
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
                    text: getIt('customer_name'),
                    fontSize: 9,
                    border: [true, true, false, true]
                },{
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'
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
                    fontSize: 9
                }, {
                    text: 'Mobile No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('customer_mobile'),
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
            widths: [120, '*', 40, '*', 50, '*'],
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
                    text: getIt('dateOfInspection'),
                    fontSize: 9,
                    colSpan: 2
                }, {}, {
                    text: 'Time of Assessment',
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
            widths: ['auto', 'auto'],
            body: [
                [
                    {
                        text:['ASSESSMENT STAGE REVIEWED',
                            { text: ' (as marked)', fontSize: 9}
                        ],
                        style: 'tableHeader',
                        colSpan: 2
                    },{}
                ],
                [
                    {
                        text:
                            [
                                'QA 1: Contract Review \n ',
                                {
                                    text:'An explanation of common contract terms and client/builder obligations.',
                                    bold:false
                                }

                            ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getStaged('contractReview'),
                        fontSize: 9,
                        alignment:'center',
                        bold:true,
                        margin:[0,5,0,0]

                    }
                ],
                [
                    {
                        text:
                            [
                                'QA 2: Base\n',
                                {
                                    text:'After concrete footings are poured or after stumps, piers, columns or the concrete floor is completed.',
                                    bold:false
                                }

                            ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getStaged('base'),
                        fontSize: 9,
                        alignment:'center',
                        bold:true,
                        margin:[0,5,0,0]

                    }
                ],
                [
                    {
                        text:
                            [
                                'QA 3: Frame\n',
                                {
                                    text:'When the wall and roof frame is complete.',
                                    bold:false
                                }

                            ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getStaged('frame'),
                        fontSize: 9,
                        alignment:'center',
                        bold:true,
                        margin:[0,5,0,0]

                    }
                ],
                [
                    {
                        text:
                            [
                                'QA 4: Lock Up\n',
                                {
                                    text:'When external walls are complete, windows, doors and roof coverings are fixed, flooring is laid and the building is secure.',
                                    bold:false
                                }

                            ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getStaged('lockUp'),
                        fontSize: 9,
                        alignment:'center',
                        bold:true,
                        margin:[0,5,0,0]

                    }
                ],
                [
                  {
                      text:
                          [
                              'QA 5: Services (pre-lining)\n',
                              {
                                  text:'When preliminary plumbing and electrical works are complete and wall insulation is in place.',
                                  bold:false
                              }
                          ],
                      style: 'tableBoldTextAlignLeft'
                  },
                  {
                      text:getStaged('services'),
                      fontSize: 9,
                      alignment:'center',
                      bold:true,
                      margin:[0,5,0,0]
                  }
                ],
                [
                    {
                        text:
                            [
                                'QA 6: Fix/Fit-out (pre-paint)\n',
                                {
                                    text:'When all interior work is complete and the property is ready for painting.',
                                    bold:false
                                }
                            ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getStaged('fixFitOut'),
                        fontSize: 9,
                        alignment:'center',
                        bold:true,
                        margin:[0,5,0,0]
                    }
                ],
                [
                    {
                        text:
                            [
                                'QA 7: Pre-handover \n',
                                {
                                    text:'When the property is presented for handover.',
                                    bold:false
                                }
                             ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getStaged('preHandover'),
                        fontSize: 9,
                        alignment:'center',
                        bold:true,
                        margin:[0,5,0,0]
                    }
                ],
                [
                    {
                        text:
                            [
                                'QA 8: Maintenance Period Expiry\n',
                                {
                                    text:'A final Assessment just before the Maintenance or Defects Liability period expires (typically 3-6 months after completion).',
                                    bold:false
                                }
                            ],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        text:getStaged('maintenancePeriod'),
                        fontSize: 9,
                        alignment:'center',
                        bold:true,
                        margin:[0,5,0,0]
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
    var body = [];
    var div = document.getElementById('CSRow');
    var divNumber = $('#CSRow').find('> div').length;


    if(divNumber == 10)
    {
        for(var i=0;i<9;i=i+3)
        {
            //console.log(i);
            var b = i+3;
            var row = [];
            for(var a=i;a<b;a++)
            {
                //console.log(a);
                nameID = "CSName" + a;
                selectID = "CSSelect" + a;
                var summaryName =
                {
                    text:document.getElementById(nameID).textContent,
                    style:'tableBoldTextAlignLeft',
                    alignment:'center'
                };
                var summarySelect =
                {
                    text:document.getElementById(selectID).value,
                    style: 'tableText',
                    alignment:'center'
                };
                //console.log(defect);
                row.push(summaryName);
                row.push(summarySelect);
            }
            //console.log(row);
            body.push(row);
        }

        var row = [];

        nameID = "CSName" + a;
        selectID = "CSSelect" + a;
        var summaryName =
        {
            text:document.getElementById(nameID).textContent,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect =
        {
            text:document.getElementById(selectID).value,
            style: 'tableText',
            alignment:'center'
        };
        //console.log(defect);
        row.push(summaryName);
        row.push(summarySelect);

        var emptyCell1 = {};
        var emptyCell2 = {};
        var emptyCell3 = {};
        var emptyCell4 = {};

        row.push(emptyCell1);
        row.push(emptyCell2);
        row.push(emptyCell3);
        row.push(emptyCell4);

        body.push(row);

    }

    if(divNumber == 11)
    {
        for(var i=0;i<9;i=i+3)
        {
            console.log(i);
            var b = i+3;
            var row = [];
            for(var a=i;a<b;a++)
            {
                //console.log(a);
                nameID = "CSName" + a;
                selectID = "CSSelect" + a;
                var summaryName =
                {
                    text:document.getElementById(nameID).textContent,
                    style:'tableBoldTextAlignLeft',
                    alignment:'center'
                };
                var summarySelect =
                {
                    text:document.getElementById(selectID).value,
                    style: 'tableText',
                    alignment:'center'
                };
                //console.log(defect);
                row.push(summaryName);
                row.push(summarySelect);
            }
            //console.log(row);
            body.push(row);
        }

        var row = [];

        var summaryName9 =
        {
            text:document.getElementById('CSName9').textContent,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect9 =
        {
            text:document.getElementById('CSSelect9').value,
            style: 'tableText',
            alignment:'center'
        };

        var summaryName10 =
        {
            text:document.getElementById('CSName10').value,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect10 =
        {
            text:document.getElementById('CSSelect10').value,
            style: 'tableText',
            alignment:'center'
        };

        var emptyCell1 = {};
        var emptyCell2 = {};


        row.push(summaryName9);
        row.push(summarySelect9);
        row.push(summaryName10);
        row.push(summarySelect10);
        row.push(emptyCell1);
        row.push(emptyCell2);

        body.push(row);

    }

    if(divNumber == 12)
    {
        for(var i=0;i<9;i=i+3)
        {
            console.log(i);
            var b = i+3;
            var row = [];
            for(var a=i;a<b;a++)
            {
                //console.log(a);
                nameID = "CSName" + a;
                selectID = "CSSelect" + a;
                var summaryName =
                {
                    text:document.getElementById(nameID).textContent,
                    style:'tableBoldTextAlignLeft',
                    alignment:'center'
                };
                var summarySelect =
                {
                    text:document.getElementById(selectID).value,
                    style: 'tableText',
                    alignment:'center'
                };
                //console.log(defect);
                row.push(summaryName);
                row.push(summarySelect);
            }
            //console.log(row);
            body.push(row);
        }

        var row = [];

        var summaryName9 =
        {
            text:document.getElementById('CSName9').textContent,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect9 =
        {
            text:document.getElementById('CSSelect9').value,
            style: 'tableText',
            alignment:'center'
        };

        var summaryName10 =
        {
            text:document.getElementById('CSName10').value,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect10 =
        {
            text:document.getElementById('CSSelect10').value,
            style: 'tableText',
            alignment:'center'
        };
        var summaryName11 =
        {
            text:document.getElementById('CSName11').value,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect11 =
        {
            text:document.getElementById('CSSelect11').value,
            style: 'tableText',
            alignment:'center'
        };



        row.push(summaryName9);
        row.push(summarySelect9);
        row.push(summaryName10);
        row.push(summarySelect10);
        row.push(summaryName11);
        row.push(summarySelect11);

        body.push(row);

    }

    if(divNumber > 12)
    {

        //Complete  populate the first four rows
        for(var i=0;i<9;i=i+3)
        {
            //console.log(i);
            var b = i+3;
            var row = [];
            for(var a=i;a<b;a++)
            {
                //console.log(a);
                nameID = "CSName" + a;
                selectID = "CSSelect" + a;
                var summaryName =
                {
                    text:document.getElementById(nameID).textContent,
                    style:'tableBoldTextAlignLeft',
                    alignment:'center'
                };
                var summarySelect =
                {
                    text:document.getElementById(selectID).value,
                    style: 'tableText',
                    alignment:'center'
                };
                //console.log(defect);
                row.push(summaryName);
                row.push(summarySelect);
            }
            //console.log(row);
            body.push(row);
        }

        var row = [];

        var summaryName9 =
        {
            text:document.getElementById('CSName9').textContent,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect9 =
        {
            text:document.getElementById('CSSelect9').value,
            style: 'tableText',
            alignment:'center'
        };

        var summaryName10 =
        {
            text:document.getElementById('CSName10').value,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect10 =
        {
            text:document.getElementById('CSSelect10').value,
            style: 'tableText',
            alignment:'center'
        };
        var summaryName11 =
        {
            text:document.getElementById('CSName11').value,
            style:'tableBoldTextAlignLeft',
            alignment:'center'
        };
        var summarySelect11 =
        {
            text:document.getElementById('CSSelect11').value,
            style: 'tableText',
            alignment:'center'
        };



        row.push(summaryName9);
        row.push(summarySelect9);
        row.push(summaryName10);
        row.push(summarySelect10);
        row.push(summaryName11);
        row.push(summarySelect11);

        body.push(row);

        //start populate from the fifth row
        for (var i=12; i<divNumber;i=i+3)
        {
            var b = i+3;
            var row = [];
            for (var a=i;a<b;a++)
            {
                //console.log(a);
                nameID = "CSName" + a;
                selectID = "CSSelect" + a;

                var name = document.getElementById(nameID);
                var select = document.getElementById(selectID);
                if (name != null)
                {
                    var defectName =
                    {
                        text:name.value,
                        style:'tableBoldTextAlignLeft',
                        alignment:'center'
                    };
                    var defect =
                    {
                        text: select.value,
                        style:'tableText',
                        alignment:'center'
                    };
                    row.push(defectName);
                    row.push(defect);
                }
                else
                {
                    var defectName =
                    {
                        text:"",
                        style:'tableBoldTextAlignLeft'
                    };
                    var defect =
                    {
                        text: "",
                        style:'tableText'
                    };
                    row.push(defectName);
                    row.push(defect);
                }
            }
            body.push(row);

        }
        //From the fifth row, can use the loop

    }


    //final the table
    PDFtable = {
        table: {
            widths: ['auto', 'auto','auto','auto','auto','auto'],
            body: body
        }
    };

    return PDFtable;


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
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('externalSites'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('externalSites'),
                    //     fontSize: 9
                    // }

                ],
                [
                    {
                        text:'Out Buildings & Attached Structures',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('externalOutBuilding'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('externalOutBuilding'),
                    //     fontSize: 9
                    // }

                ],
                [
                    {
                        text:'External Building Elements',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('externalBuilding'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('externalBuilding'),
                    //     fontSize: 9
                    // }

                ],
                [
                    {
                        text:'External Access Limitations',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('externalAccessLimitation'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('externalAccessLimitation'),
                    //     fontSize: 9
                    // }

                ]


            ]
        },
        layout: {
            hLineColor: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? '#D9D7D7' : '#D9D7D7';
            },
            vLineColor: function (i, node) {
                return (i === 0 || i === node.table.widths.length) ? '#D9D7D7' : '#D9D7D7';
            },
            paddingBottom: function(i, node) { return 10; },
            paddingTop:function(i,node){
                return 10;
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
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('internalLiving'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('internalLiving'),
                    //     fontSize:9
                    // }

                ],
                [
                    {
                        text:'Internal Service(Wet) Areas',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('internalServiceAreas'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('internalServiceAreas'),
                    //     fontSize:9
                    // }

                ],
                [
                    {
                        text:['Services',{text:'*',fontSize:8}],
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('internalServices'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('internalServices'),
                    //     fontSize:9
                    // }

                ],
                [
                    {
                        text:'Internal Access Limitations',
                        style: 'tableBoldTextAlignLeft'
                    },
                    {
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('internalAccessLimitations'),
                        //text:getIt('listOfDefective'),
                        style: 'tableText'
                    }
                    // {
                    //     text:getIt('internalAccessLimitations'),
                    //     fontSize:9
                    // }

                ]


            ]
        },
        layout: {
            hLineColor: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? '#D9D7D7' : '#D9D7D7';
            },
            vLineColor: function (i, node) {
                return (i === 0 || i === node.table.widths.length) ? '#D9D7D7' : '#D9D7D7';
            },
            paddingBottom: function(i, node) { return 8; },
            paddingTop:function(i,node){
                return 8;
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
                        start: getTotalParagraphs(),
                        ol:giveMeTheNumber('listOfDefective'),
                        //text:getIt('listOfDefective'),
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
// function getImagesTable()
// {
//     var result;
//     //check whether the user upload images.
//     var firstImage = document.getElementById('ConstructionImage0');
//     if (firstImage)
//     {
//         result = {
//             table:
//             {
//                 headerRows: 1,
//                 body:[
//                     [
//                         {
//                             text:'List of Evident Defective Or Incomplete Work/Not Visible',
//                             style:'tableHeader',
//                             margin: [0, 0, 0, 20],
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage0'),
//                         displayImage('ConstructionImage1')
//                     ],
//                     [
//                         getImageText('ConstructionImageText0'),
//                         getImageText('ConstructionImageText1')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//
//                     [
//                         displayImage('ConstructionImage2'),
//                         displayImage('ConstructionImage3')
//                     ],
//                     [
//                         getImageText('ConstructionImageText2'),
//                         getImageText('ConstructionImageText3')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage4'),
//                         displayImage('ConstructionImage5')
//                     ],
//                     [
//                         getImageText('ConstructionImageText4'),
//                         getImageText('ConstructionImageText5')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage6'),
//                         displayImage('ConstructionImage7')
//                     ],
//                     [
//                         getImageText('ConstructionImageText6'),
//                         getImageText('ConstructionImageText7')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage8'),
//                         displayImage('ConstructionImage9')
//                     ],
//                     [
//                         getImageText('ConstructionImageText8'),
//                         getImageText('ConstructionImageText9')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage10'),
//                         displayImage('ConstructionImage11')
//                     ],
//                     [
//                         getImageText('ConstructionImageText10'),
//                         getImageText('ConstructionImageText11')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage12'),
//                         displayImage('ConstructionImage13')
//                     ],
//                     [
//                         getImageText('ConstructionImageText12'),
//                         getImageText('ConstructionImageText13')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage14'),
//                         displayImage('ConstructionImage15')
//                     ],
//
//                     [
//                         getImageText('ConstructionImageText14'),
//                         getImageText('ConstructionImageText15')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage16'),
//                         displayImage('ConstructionImage17')
//                     ],
//                     [
//                         getImageText('ConstructionImageText16'),
//                         getImageText('ConstructionImageText17')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage18'),
//                         displayImage('ConstructionImage19')
//                     ],
//                     [
//                         getImageText('ConstructionImageText18'),
//                         getImageText('ConstructionImageText19')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage20'),
//                         displayImage('ConstructionImage21')
//                     ],
//                     [
//                         getImageText('ConstructionImageText20'),
//                         getImageText('ConstructionImageText21')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage22'),
//                         displayImage('ConstructionImage23')
//                     ],
//                     [
//                         getImageText('ConstructionImageText22'),
//                         getImageText('ConstructionImageText23')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage24'),
//                         displayImage('ConstructionImage25')
//                     ],
//                     [
//                         getImageText('ConstructionImageText24'),
//                         getImageText('ConstructionImageText25')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage26'),
//                         displayImage('ConstructionImage27')
//                     ],
//                     [
//                         getImageText('ConstructionImageText26'),
//                         getImageText('ConstructionImageText27')
//                     ],
//                     [
//                         {
//                             text:'',
//                             colSpan:2
//                         },{}
//                     ],
//                     [
//                         displayImage('ConstructionImage28'),
//                         displayImage('ConstructionImage29')
//                     ],
//                     [
//                         getImageText('ConstructionImageText28'),
//                         getImageText('ConstructionImageText29')
//                     ]
//
//                 ]
//             },
//             layout: {
//                 hLineColor: function (i, node) {
//                     return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
//                 },
//                 vLineColor: function (i, node) {
//                     return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
//                 }
//             }
//
//         };
//     }
//     else
//     {
//         result = {
//             table:{
//                 body:[
//                     [
//                         {
//                             text:'List of Evident Defective Or Incomplete Work/Not Visible',
//                             style:'tableHeader',
//                             colSpan:2,
//                             border:[false,false,false,false]
//                         },{}
//                     ]
//                     ]
//             }
//         };
//     }
//
//
//     return result;
// }



/*
 get Images
 */
function getConstructionImagesTable()
{

    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#ConstructionPhotographs').find('> form');
    var fullAddress = document.getElementById('address').value.trim() + " " + document.getElementById('suburb').value.trim();

    // console.log(totalContainers.eq(0).children('div').eq(0).children('img').get(0));
    // console.log(totalContainers.eq(0).children('div').eq(0).children('img').attr('src'));
    // console.log(totalContainers.eq(0).children('div').eq(1).children('label').text());
    // console.log(totalContainers.eq(0).children('div').eq(2).children('input').val())
    console.log("the current total image form is: " + totalContainers.length + ", image number need to -1, the last one is only a form, no image");
    if (totalContainers.length == 0) {
        tableBody = {
            text:''
        };
    }
    else
    {
        var firstRow = [
            {
                text:"List of Evident Defective or Incomplete Work",
                style:'pageTopHeader',
                fontSize:14,
                margin: [0, 0, 0, 5],
                colSpan:2
            },{}
        ];
        data.push(firstRow);
    
        var secondRow = [
            {
                text:'Address: ' + fullAddress,
                style: 'tableBoldTextAlignLeft',
                margin: [0, 0, 0, 20],
                colSpan:2
            },{}
        ];
        data.push(secondRow);
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
           
                // width = 0,
                // height = 0;
                //console.log(totalContainers.eq(i).children('div').eq(0).children('img').get(0));
                //console.log(totalContainers.eq(i).children('div').eq(0).children('img').attr('src'));
                //console.log(totalContainers.eq(i).children('div').eq(1).children('label').text());
                //console.log(totalContainers.eq(0).children('div').eq(2).children('input').val())

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
                    width = 350;
                    height = 250;
                    margin = [0,0,0,0];
                } else {
                    width = img.width * 250 / img.height;
                    height = 250;
                    margin = [0,0,0,0];
                }
    
                row.push({
                    stack: [
                        {
                            image: imgSrc,
                           // height: height,
                            width: 250,
                            margin:[0,0,0,5],
                            //fit:[350,250],
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

        //the last row only has one cell, need to put an empty cell to this row. 
        if (divCount == 2) {
            //console.log("the last row only has one cell, need to put an empty cell to this row.")
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
            table: {
                widths: [250, 250],
                dontBreakRows: true,
                headerRows: 2,
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