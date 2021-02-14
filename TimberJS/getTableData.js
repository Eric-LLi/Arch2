/**
 * Created by TengShinan on 6/10/17.
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
                //     style: 'tableHeader',
                //     colSpan: 4,
                //     border: [false, false, false, true]
                // }, {}, {}, {}],
                // [{
                //     text: 'Name',
                //     style: 'tableBoldTextAlignLeft',
                //     border: [false, true, true, true]
                // }, {
                //     text: getIt('0'),
                //     style: 'tableText',
                //     colSpan: 3,
                //     border: [true, true, false, true]
                // }, {}, {}],
                // [{
                //     text: 'Telephone No',
                //     style: 'tableBoldTextAlignLeft',
                //     border: [false, true, true, true]
                // }, {
                //     text: getIt('1'),
                //     style: 'tableText'
                // }, {
                //     text: 'Booking No',
                //     style: 'tableBoldTextAlignLeft'
                // }, {
                //     text: getIt('8'),
                //     style: 'tableText',
                //     border: [true, true, false, true]
                // }],
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
                    text: getIt('0'),
                    fontSize: 9,
                    border: [true, true, false, true]
                },{
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('8'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Telephone No',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('1'),
                    fontSize: 9
                }, {
                    text: 'Mobile No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('custmobile'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }]
            ]
        }
    };
    return result;
}

/**
 * Get INSPECTION DETAILS Table
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
                    text: getIt('2'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Suburb',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('3'),
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
                    text: getIt('11'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Date of Inspection',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('4'),
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
                    text: getIt('5'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Weather conditions',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('6'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Verbal summary to',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('7'),
                    style: 'tableText',
                    colSpan: 2
                }, {}, {
                    text: 'Date',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('12'),
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
                    text: 'INSPECTOR DETAILS',
                    style: 'tableHeader',
                    colSpan: 4,
                    border: [false, false, false, true]
                }, {}, {}, {}],
                [{
                    text: 'Name',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('inspector01'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, true, false, true]
                }, {}, {}],
                [{
                    text: 'Phone',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('inspector02'),
                    style: 'tableText'
                }, {
                    text: 'Licence No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('inspector03'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Email',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('inspectorEmail'),
                    style: 'tableText'
                }, {
                    text: 'Address',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('inspectorAddress'),
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
            widths: [100, '*', 60, '*'],
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
                    text: getSelectOrOther("ps6"),
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
                    text: getSelectOrOther("ps9"),
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
 * Get TREATMENT & CONDUCIVE CONDITIONS SUMMARY – refer body of Report for full details Table
 * */
function getTreatmentAndConductiveTable() {
    var result;
    result = {
        table: {
            widths: [150, '*', 20, '*'],
            body: [
                [{
                    text: 'TREATMENT & CONDUCIVE CONDITIONS SUMMARY – refer body of Report for full details',
                    style: 'tableHeader',
                    colSpan: 4
                }, {}, {}, {}],
                [{
                    text: 'Evidence of previous Pest Treatment',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('TCCS01'),
                    style: 'tableText'
                }, {
                    text: 'Type',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('TCCS02'),
                    style: 'tableText'
                }],
                [{
                    text: 'Risk posed by environmental conditions conducive to timber pest attack',
                    style: 'tableBoldTextAlignLeft',
                    colSpan: 3
                }, {}, {}, {
                    text: getIt('TCCS03'),
                    style: 'tableText'
                }],
                [{
                    text: 'Is an intrusive inspection of inaccessible areas recommended',
                    style: 'tableBoldTextAlignLeft',
                    colSpan: 3
                }, {}, {}, {
                    text: getIt('TCCS04'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Sighted Activity Table
 * */
function getSightedActivityTable() {
    var result;
    // var data=[];
    // var tableBody;
    //
    // var firstRow = [
    //     {
    //         alignment:'center',
    //         text:'Has Timber Pest activity been sighted?',
    //         style:'tableHeader',
    //         //border:[false,true,false,true],
    //         color: 'red'
    //     },
    //     {
    //         text:getIt('pestActivitySighted'),
    //         border:[false,true,false,true],
    //         style:'tableText'
    //     }
    // ];
    // data.push(firstRow);
    //
    // var secondRow = [
    //
    // ];
    //
    // tableBody = {
    //     table: {
    //         widths:[180, '*'],
    //         body: data
    //     }
    // };
    //
    //
    //
    // return tableBody;
    //
    //
    result = {
        table: {
            widths: [180, '*'],
            body: [
                [{
                    text: 'Has Timber Pest activity been sighted?',
                    style: 'tableHeader'
                }, {
                    text: getIt('pestActivitySighted'),
                    style: 'tableText'
                }],
                [{
                    text: 'Timber Pest',
                    style: 'tableBoldText'
                }, {
                    text: 'Where Sighted',
                    style: 'tableBoldText'
                }],
                [{
                    text: 'Subterranean Termites',
                    style: 'tableText'
                }, {
                    text: getIt('14'),
                    style: 'tableText'
                }],
                [{
                    text: 'Dampwood Termites',
                    style: 'tableText'
                }, {
                    text: getIt('15'),
                    style: 'tableText'
                }],
                [{
                    text: 'Timber Decay(rot)',
                    style: 'tableText'
                }, {
                    text: getIt('16'),
                    style: 'tableText'
                }],
                [{
                    text: getIt('sightedActivityName3'),
                    style: 'tableText'
                }, {
                    text: getIt('17'),
                    style: 'tableText'
                }],
                [{
                    text: getIt('sightedActivityName4'),
                    style: 'tableText'
                }, {
                    text: getIt('18'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Access Restrictions Table
 * */
function getAccessRestrictionsTable() {
    var result;
    result = {
        table: {
            widths: [80, 60, 60, '*'],
            body: [
                [{
                    text: 'Are there Significant Access Restrictions?',
                    style: 'tableHeader',
                    colSpan: 3
                }, {}, {}, {
                    text: getIt('accessRestrictions'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location',
                    style: 'tableBoldText'
                }, {
                    text: 'Yes / No',
                    style: 'tableBoldText'
                }, {
                    text: 'Risk Factor',
                    style: 'tableBoldText'
                }, {
                    text: 'Nature of Restriction',
                    style: 'tableBoldText'
                }],
                [{
                    text: 'Site & Garden',
                    style: 'tableText'
                }, {
                    text: getIt('AccResSG01'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResSG02'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResSG03'),
                    style: 'tableText'
                }],
                [{
                    text: 'Exterior of Building',
                    style: 'tableText'
                }, {
                    text: getIt('AccResEoB01'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResEoB02'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResEoB03'),
                    style: 'tableText'
                }],
                [{
                    text: 'Interior of Building',
                    style: 'tableText'
                }, {
                    text: getIt('AccResIoB01'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResIoB02'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResIoB03'),
                    style: 'tableText'
                }],
                [{
                    text: 'Roof Void',
                    style: 'tableText'
                }, {
                    text: getIt('AccResRV01'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResRV02'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResRV03'),
                    style: 'tableText'
                }],
                [{
                    text: 'Sub-Floor Void',
                    style: 'tableText'
                }, {
                    text: getIt('AccResSFV01'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResSFV02'),
                    style: 'tableText'
                }, {
                    text: getIt('AccResSFV03'),
                    style: 'tableText'
                }]
            ]
        },
        margin:[0,0,0,6]
    };
    return result;
}

/**
 * Get Site and Garden Table1
 * */
function getSiteAndGardenTable1a() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Access Limitation:',
                    style: 'tableHeader'
                }, {
                    text: 'Access Notes:',
                    style: 'tableHeader'
                }],
                [{
                    text: getIt('siteAndGardenAL'),
                    style: 'tableText'
                }, {
                    text: getIt('siteAndGardenAN'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1b() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Access Limitation Risk Factor',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('siteAndGardenALRF'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1c() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of subterranean termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('siteAndGardenVEoSTF'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1d() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('STF-LE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('STF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('STF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('STF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1e() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of dampwood or other termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('siteAndGardenVEoDoOTF'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1f() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('DTF-LE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('DTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('DTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('DTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1g() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of wood decay fungus found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('siteAndGardenWDFF'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1h() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('WDFF-LE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('WDFF-DATB'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1i() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('siteAndGardenBBF'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('BBF-T'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1j() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('BBF-LE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('BBF-DATB'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1k() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('siteAndGardenBBF2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('BBF-T2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSiteAndGardenTable1l() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('BBF-LE2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('BBF-DATB2'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Site and Garden Table2
 * */
function getSiteAndGardenTable2() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Environmental conditions conducive to timber pest attack:',
                    style: 'tableHeader',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Excessive dampness?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('ED-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('ED-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('ED-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Timber in contact with\nground?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('TICWG-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('TICWG-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('TICWG-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Close proximity of\npotential nesting sites?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('CPOPNS-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('CPOPNS-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('CPOPNS-3'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Exterior of Building Table1
 * */
function getExteriorOfBuildingTable1a() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Access Limitation:',
                    style: 'tableHeader'
                }, {
                    text: 'Access Notes:',
                    style: 'tableHeader'
                }],
                [{
                    text: getIt('EoB-AL'),
                    style: 'tableText'
                }, {
                    text: getIt('EoB-AN'),
                    style: 'tableText'
                }],
                [{
                    text: 'Access Limitation Risk Factor',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-ALRF'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1b() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of subterranean termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEOSTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1c() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEOSTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEOSTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEOSTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEOSTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1d() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of dampwood or other termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoDoOTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1e() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoDoOTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEoDoOTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEoDoOTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEoDoOTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1f() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of wood decay fungus found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoWDFF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1g() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoWDFF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEoWDFF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1h() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoBBF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoBBF-T'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1i() {
    var result;
    result = {
        table: {
            widths: [110, '*', '*', '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoBBF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEoBBF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1j() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoBBF-SLC2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoBBF-T2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getExteriorOfBuildingTable1k() {
    var result;
    result = {
        table: {
            widths: [110, '*', '*', '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('EoB-VEoBBF-LAE2'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-VEoBBF-DATB2'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}]
            ]
        },
        margin:[0,0,0,10]
    };
    return result;
}

/**
 * Get Exterior of Building Table2
 * */
function getExteriorOfBuildingTable2() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Environmental conditions conducive to timber pest attack:',
                    style: 'tableHeader',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Excessive dampness?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-ED-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-ED-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-ED-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Timber in contact with ground?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-TICWG-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-TICWG-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-TICWG-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Unexposed slab edge?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-USE-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-USE-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-USE-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Blocked sub-floor vents?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-BSFV-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-BSFV-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-BSFV-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Blocked weepholes?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-BW-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-BW-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-BW-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'High garden beds/paving/ground level?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-HGBPGL-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-HGBPGL-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-HGBPGL-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Close proximity of potential nesting sites?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-CPOPNS-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-CPOPNS-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-CPOPNS-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Poor location of overflow HWS,Water tank, A/C?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-PLOOHWAC-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-PLOOHWAC-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-PLOOHWAC-3'),
                    style: 'tableText'
                }],
                [{
                    text: 'Water leaks (eg gutter)?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('EoB-WL-1'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-WL-2'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('EoB-WL-3'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Interior of Building Table1
 * */
function getInteriorOfBuildingTable1a() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Access Limitation:',
                    style: 'tableHeader'
                }, {
                    text: 'Access Notes:',
                    style: 'tableHeader'
                }],
                [{
                    text: getIt('IoB-T1-AL'),
                    style: 'tableText'
                }, {
                    text: getIt('IoB-T1-AN'),
                    style: 'tableText'
                }],
                [{
                    text: 'Access Limitation Risk Factor',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-T1-ALRF'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1b() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of subterranean termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-T1-VEoSTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1c() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-T1-VEoSTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-T1-VEoSTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-T1-VEoSTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-T1-VEoSTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1d() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of dampwood or other termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoDoOTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1e() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoDoOTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-VEoDoOTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-VEoDoOTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-VEoDoOTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1f() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of wood decay fungus found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoWDFF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1g() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoWDFF-LAE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-VEoWDFF-DATB'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1h() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoBBF-SLC1'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoBBF-TYPE1'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1i() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoBBF-LAE1'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-VEoBBF-DATB1'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1j() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoBBF-SLC2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoBBF-TYPE2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getInteriorOfBuildingTable1k() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('IoB-VEoBBF-LAE2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-VEoBBF-DATB2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Interior of Building Table2
 * */
function getInteriorOfBuildingTable2() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Environmental conditions conducive to timber pest attack:',
                    style: 'tableHeader',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Excessive dampness?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-Table2-ED-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('IoB-Table2-ED-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('IoB-Table2-ED-RA'),
                    style: 'tableText'
                }],
                [{
                    text: 'Visible water leaks?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('IoB-Table2-VWL-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('IoB-Table2-VWL-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('IoB-Table2-VWL-RA'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Roof Space Table1
 * */
function getRoofSpaceTable1a() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Access Limitation:',
                    style: 'tableHeader'
                }, {
                    text: 'Access Notes:',
                    style: 'tableHeader'
                }],
                [{
                    text: getIt('RS-AL'),
                    style: 'tableText'
                }, {
                    text: getIt('RS-AN'),
                    style: 'tableText'
                }],
                [{
                    text: 'Access Limitation Risk Factor',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-ALRF'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1b() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of subterranean termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoSTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1c() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoSTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoSTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoSTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoSTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1d() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of dampwood or other termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoDoOTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1e() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoDoOTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoDoOTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoDoOTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoDoOTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1f() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of wood decay fungus found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoWDFF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1g() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoWDFF-LAE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoWDFF-DATB'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1h() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoBBF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoBBF-TYPE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1i() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoBBF-LAE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoBBF-DATB'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1j() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoBBF-SLC2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoBBF-TYPE2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getRoofSpaceTable1k() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('RS-VEoBBF-LAE2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VEoBBF-DATB2'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Roof Space Table2
 * */
function getRoofSpaceTable2() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Environmental conditions conducive to timber pest attack:',
                    style: 'tableHeader',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Excessive dampness?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-ED-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('RS-ED-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('RS-ED-RA'),
                    style: 'tableText'
                }],
                [{
                    text: 'Visible water leaks?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('RS-VWL-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('RS-VWL-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('RS-VWL-RA'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Sub-Floor Space Table1
 * */
function getSubFloorSpaceTable1a() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Access Limitation:',
                    style: 'tableHeader'
                }, {
                    text: 'Access Notes:',
                    style: 'tableHeader'
                }],
                [{
                    text: getIt('SFS-AL'),
                    style: 'tableText'
                }, {
                    text: getIt('SFS-AN'),
                    style: 'tableText'
                }],
                [{
                    text: 'Access Limitation Risk Factor',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-ALRF'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1b() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of subterranean termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoSTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1c() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoSTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoSTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoSTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoSTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1d() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of dampwood or other termites found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoDoOTF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1e() {
    var result;
    result = {
        table: {
            widths: [110, 120, 50, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoDoOTF-LAE'),
                    style: 'tableText',
                    colSpan: 3,
                    border: [true, false, true, true]
                }, {}, {}],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoDoOTF-DATB'),
                    style: 'tableText',
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Nest/Sub Nest Located:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoDoOTF-NSNL'),
                    style: 'tableText'
                }, {
                    text: 'Location:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoDoOTF-L'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1f() {
    var result;
    result = {
        table: {
            widths: [298, '*'],
            body: [
                [{
                    text: 'Visible evidence of wood decay fungus found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoWDFF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1g() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoWDFF-LAE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoWDFF-DATB'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1h() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoBBF-SLC'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoBBF-TYPE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1i() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoBBF-LAE'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoBBF-DATB'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1j() {
    var result;
    result = {
        table: {
            widths: [240, '*', 35, '*'],
            body: [
                [{
                    text: 'Visible evidence of Borer beetle found:',
                    style: 'tableHeader',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoBBF-SLC2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }, {
                    text: 'Type:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoBBF-TYPE2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }]
            ]
        }
    };
    return result;
}

function getSubFloorSpaceTable1k() {
    var result;
    result = {
        table: {
            widths: [110, '*'],
            body: [
                [{
                    text: 'Location & Extent:',
                    style: 'tableBoldTextAlignLeft',
                    border: [true, false, true, true]
                }, {
                    text: getIt('SFS-VEoBBF-LAE2'),
                    style: 'tableText',
                    border: [true, false, true, true]
                }],
                [{
                    text: 'Damage appears to be:',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VEoBBF-DATB2'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Sub-Floor Space Table2
 * */
function getSubFloorSpaceTable2() {
    var result;
    result = {
        table: {
            widths: [130, '*'],
            body: [
                [{
                    text: 'Environmental conditions conducive to timber pest attack:',
                    style: 'tableHeader',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Excessive dampness?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-ED-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-ED-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-ED-RA'),
                    style: 'tableText'
                }],
                [{
                    text: 'Visible water leaks?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-VWL-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-VWL-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-VWL-RA'),
                    style: 'tableText'
                }],
                [{
                    text: 'Timber in contact with\nground?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-TICWG-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-TICWG-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-TICWG-RA'),
                    style: 'tableText'
                }],
                [{
                    text: 'Blocked sub-floor vents?',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('SFS-BSFV-SLC'),
                    style: 'tableText'
                }],
                [{
                    text: 'Location & Extent:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-BSFV-LAE'),
                    style: 'tableText'
                }],
                [{
                    text: 'Recommended action:',
                    style: 'tableText'
                }, {
                    text: getIt('SFS-BSFV-RA'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Previous Pest Treatment Table
 * */
function getPreviousPestTreatmentTable() {
    var result;
    result = {
        table: {
            widths: [365, '*'],
            body: [
                [{
                    text: 'Visible evidence of previous treatment or other termite management system installation',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('previousManagement'),
                    style: 'tableText'
                }],
                [{
                    text: getIt('previousManagementText'),
                    style: 'tableText',
                    colSpan: 2
                }, {}],
                [{
                    text: previousPestTreatmentText,
                    style: 'tableLongText',
                    colSpan: 2
                }, {}]
            ]
        }
    };
    return result;
}

/**
 * Get Recommendations Table
 * */
function getRecommendationsTable() {
    var result;
    result = {
        table: {
            widths: [350, '*'],
            body: [
                [{
                    text: 'Overall risk',
                    style: 'tableBoldTextAlignLeft',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Based on the evidence of this inspection, the overall risk of infestation by timber pest is:',
                    style: 'tableText'
                }, {
                    text: getIt('recommendationText1'),
                    style: 'tableText',
                    alignment: 'justify'
                }],
                [{
                    text: 'Future inspections',
                    style: 'tableBoldTextAlignLeft',
                    colSpan: 2
                }, {}],
                [{
                    text: 'It is highly recommended that a further timber pest inspection be conducted within:',
                    style: 'tableText'
                }, {
                    text: getIt('recommendationText2'),
                    style: 'tableText',
                    alignment: 'justify'
                }],
                [{
                    text: recommendationsText,
                    style: 'tableLongText',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Timber pest management',
                    style: 'tableBoldTextAlignLeft',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Based on the evidence of this inspection, timber pest treatment is:',
                    style: 'tableText'
                }, {
                    text: getIt('recommendationText3'),
                    style: 'tableText',
                    alignment: 'justify'
                }],
                [{
                    text: 'Integrated pest management plan',
                    style: 'tableBoldTextAlignLeft',
                    colSpan: 2
                }, {}],
                [{
                    text: 'Based on the evidence of this inspection, we recommend the following ongoing timber pest management plan:',
                    style: 'tableText',
                    colSpan: 2
                }, {}],
                [{
                    text: getIt('recommendationText4'),
                    style: 'tableText',
                    colSpan: 2,
                    alignment: 'justify'
                }, {}],
                [{
                    text: 'Supplementary Notes:',
                    style: 'tableBoldTextAlignLeft',
                    colSpan: 2
                }, {}],
                [{
                    text: getIt('recommendationText5'),
                    style: 'tableText',
                    colSpan: 2,
                    alignment: 'justify'
                }, {}]
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
            widths: [120, '*', 100, '*', 80, '*', 55, '*'],
            body: [
                [{
                    text: 'ITEM',
                    style: 'tableHeader'
                }, {}, {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, {}, {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, {}, {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, {}],
                [{
                    text: 'Property Maintenance Guide',
                    style: 'tableText'
                }, {
                    text: getIt('6000'),
                    style: 'tableText'
                }, {
                    text: 'Health & Safety Warning',
                    style: 'tableText'
                }, {
                    text: getIt('6001'),
                    style: 'tableText'
                }, {
                    text: 'Termites & Borers',
                    style: 'tableText'
                }, {
                    text: getIt('6002'),
                    style: 'tableText'
                }, {
                    text: 'Cost Guide',
                    style: 'tableText'
                }, {
                    text: getIt('6005'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

//****************************************************************
// Some general help functions
//****************************************************************
/**
 * Validate [Other] if textField is empty.
 * If it's not empty, then append the related rows to the table.
 * */
function appendOther(otherId, id1, id2, id3) {
    var result;
    var otherValue = document.getElementById(otherId).value.trim();
    if (otherValue != '') {
        result = {
            stack: [
                {
                    table: {
                        widths: [130, '*'],
                        body: [
                            [{
                                text: otherValue,
                                border: [true, false, true, true],
                                style: 'tableBoldTextAlignLeft'
                            }, {
                                text: document.getElementById(id1).value.trim(),
                                border: [true, false, true, true],
                                style: 'tableText'
                            }],
                            [{
                                text: 'Location & Extent:',
                                style: 'tableText'
                            }, {
                                text: document.getElementById(id2).value.trim(),
                                style: 'tableText'
                            }],
                            [{
                                text: 'Recommended action:',
                                style: 'tableText'
                            }, {
                                text: document.getElementById(id3).value.trim(),
                                style: 'tableText'
                            }]
                        ]
                    }
                }
            ]
        };
        return result;
    } else {
        result = {
            text: ''
        };
        return result;
    }
}

function appendOtherTypeTwo(otherId, id1, id2, id3, id4) {
    var result;
    var otherValue = document.getElementById(otherId).value.trim();
    if (otherValue != '') {
        result = {
            table: {
                widths: [110, '*', '*', '*'],
                body: [
                    [{
                        text: otherValue,
                        border: [true, false, true, true],
                        style: 'tableBoldTextAlignLeft'
                    }, {
                        text: document.getElementById(id1).value.trim(),
                        border: [true, false, true, true],
                        style: 'tableText'
                    }, {
                        text: 'Type:',
                        border: [true, false, true, true],
                        style: 'tableText',
                        bold: true
                    }, {
                        text: document.getElementById(id2).value.trim(),
                        border: [true, false, true, true],
                        style: 'tableText'
                    }],
                    [{
                        text: 'Location & Extent:',
                        style: 'tableText'
                    }, {
                        text: document.getElementById(id3).value.trim(),
                        style: 'tableText',
                        colSpan: 3
                    }, {}, {}],
                    [{
                        text: 'Damage appears to be:',
                        style: 'tableText'
                    }, {
                        text: document.getElementById(id4).value.trim(),
                        style: 'tableText',
                        colSpan: 3
                    }, {}, {}]
                ]
            }
        };
        return result;
    } else {
        result = {
            text: ''
        };
        return result;
    }
}



/*
    get Images
 */
function getImagesTable(divid)
{
    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#'+divid).find('> form');
    // console.log(totalContainers.eq(0).children('div').eq(0).children('img').get(0));
    // console.log(totalContainers.eq(0).children('div').eq(0).children('img').attr('src'));
    // console.log(totalContainers.eq(0).children('div').eq(1).children('label').text());
    // console.log(totalContainers.eq(0).children('div').eq(2).children('input').val())
    console.log("the current total image form" + divid+  " is: " + totalContainers.length + ", image number need to -1, the last one is only a form, no image");
    if (totalContainers.length == 0) {
        tableBody = {
            text:''
        };
    }
    else
    {
        var firstImgSrc = totalContainers.eq(0).children('img').attr('src');
        if (totalContainers.length == 1 && typeof firstImgSrc == "undefined")
        {
            console.log("only has one container, and this container is emtpy");
            tableBody = {
                text:''
            };
        }
        else
        {
            for (var i = 0; i < totalContainers.length; i++)
            {
                var img = totalContainers.eq(i).children('img').get(0),
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

                // console.log(id + "  " + imgAngle);
    
                if (typeof imgSrc  != "undefined")
                {
                    //console.log("I am in");
                    //Work on the image anlge. 
                    var canvas = document.createElement("canvas");
                    canvas.height = canvas.width = 0;
                    var context = canvas.getContext('2d');
                    // var imgwidth = img.offsetWidth;
                    // var imgheight = img.offsetHeight;
                    var imgwidth = img.width;
                    var imgheight = img.height;
                    canvas.width = imgwidth ;
                    canvas.height = imgheight;

                    if(imgAngle == 90)
                    {
                        canvas.width = imgheight ;
                        canvas.height = imgwidth;
                        var scale = imgheight/imgwidth;
                        console.log("scale: " + scale);
                        console.log("canvas.width: " + canvas.width);
                        console.log("canvas.height: " + canvas.height);
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
                        console.log("scale: " + scale);
                        console.log("canvas.width: " + canvas.width);
                        console.log("canvas.height: " + canvas.height);
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
                        console.log("scale: " + scale);
                        console.log("canvas.width: " + canvas.width);
                        console.log("canvas.height: " + canvas.height);
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
                        console.log("scale: " + scale);
                        console.log("canvas.width: " + canvas.width);
                        console.log("canvas.height: " + canvas.height);
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
                                //height: 160,
                                width: 160,
                                margin:[0,0,0,5],
                                // alignment: 'center'
                            },
                            {
                                columns:[
                                    {
                                        width: 160,
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
                    //the row has three cells, this row is completed, need to reset the row, and put this row into the table data
                    if (divCount === 4) {
                        data.push(row);
                        row = [];
                        divCount = 1;
                    }
                }
            }
            //console.log(divCount);
             //the last row only has one cell, need to put an empty cell to this row. 
            if (divCount == 2) {
                console.log("the last row only has one cell, need to put two empty cells to this row.")
                row.push({});
                row.push({});
                data.push(row);
            }
            if (divCount == 3)
            {
                console.log("the last row only has two cell, need to put one empty cells to this row.")
                row.push({});
                data.push(row);
            }
            
        
            //console.log(data);

            tableBody = {
                layout: {
                    hLineColor: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
                    },
                    vLineColor: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
                    }
                },
                table: {
                    width:[160,160,160],
                    dontBreakRows: true,
                    // headerRows: ,
                    // keepWithHeaderRows: 1,
                    body: data
                }
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