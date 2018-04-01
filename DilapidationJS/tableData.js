/**
 * Created by TengShinan on 24/10/17.
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
                    text: 'Telephone No',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('1'),
                    style: 'tableText'
                }, {
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('8'),
                    style: 'tableText',
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
                    text: getIt('architectName'),
                    style: 'tableText'
                }, {
                    text: "Registration No",
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('registrationNumber'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Address',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('architectAddress'),
                    style: 'tableText',
                    border: [true, true, false, true],
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Email',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('architectEmail'),
                    style: 'tableText'
                }, {
                    text: 'Phone',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('architectPhone'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Cracking Table
 * */
function getCrackingTable() {
    var result;
    result = {
        table: {
            widths: [100, '*'],
            body: [
                [{
                    text: 'CRACK CATEGORY',
                    style: 'tableHeader',
                    alignment: 'center'
                }, {
                    text: 'DEFINITION',
                    style: 'tableHeader'
                }],
                [{
                    text: '0',
                    style: 'tableBoldText',
                    alignment: 'center'
                }, {
                    text: category0,
                    style: 'tableText',
                    alignment: 'justify'
                }],
                [{
                    text: '1',
                    style: 'tableBoldText',
                    alignment: 'center'
                }, {
                    text: category1,
                    style: 'tableText',
                    alignment: 'justify'
                }],
                [{
                    text: '2',
                    style: 'tableBoldText',
                    alignment: 'center'
                }, {
                    text: category2,
                    style: 'tableText',
                    alignment: 'justify'
                }],
                [{
                    text: '3',
                    style: 'tableBoldText',
                    alignment: 'center'
                }, {
                    text: category3,
                    style: 'tableText',
                    alignment: 'justify'
                }],
                [{
                    text: '4',
                    style: 'tableBoldText',
                    alignment: 'center'
                }, {
                    text: category4,
                    style: 'tableText',
                    alignment: 'justify'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get DILAPIDATION SURVEY REPORT SUMMARY Table
 * */
function getSummaryReport() {
    var result;
    result = {
        table: {
            widths: ['*'],
            body: [
                [{
                    text: 'DILAPIDATION SURVEY REPORT SUMMARY',
                    style: 'tableHeader'
                }],
                [{
                    text: getIt('surveyReportSummary'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Get Attachments Table
 * */
function getAttachmentDTable() {
    var result;
    result = {
        table: {
            widths: [120, '*', 120, '*', 120, '*'],
            body: [
                [{
                    text: 'ITEM',
                    style: 'tableHeader'
                }, {
                    text: ''
                }, {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, {
                    text: ''
                }, {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, {
                    text: ''
                }],
                [{
                    text: 'Property Management Guide',
                    style: 'tableText'
                }, {
                    text: getIt('6000'),
                    style: 'tableText'
                }, {
                    text: 'Cracking in Masonry',
                    style: 'tableText'
                }, {
                    text: getIt('6001'),
                    style: 'tableText'
                }, {
                    text: 'Treatment of Dampness',
                    style: 'tableText'
                }, {
                    text: getIt('6002'),
                    style: 'tableText'
                }],
                [{
                    text: 'Health & Safety Warning',
                    style: 'tableText'
                }, {
                    text: getIt('6003'),
                    style: 'tableText'
                }, {
                    text: 'Roofing & Guttering',
                    style: 'tableText'
                }, {
                    text: getIt('6004'),
                    style: 'tableText'
                }, {
                    text: 'Re-stumping',
                    style: 'tableText'
                }, {
                    text: getIt('6005'),
                    style: 'tableText'
                }],
                [{
                    text: 'Termites & Borers',
                    style: 'tableText'
                }, {
                    text: getIt('6006'),
                    style: 'tableText'
                }, '', '', {
                    text: 'Cost Guide',
                    style: 'tableText'
                }, {
                    text: getIt('6008'),
                    style: 'tableText'
                }]
            ]
        }
    };
    return result;
}

/**
 * Set the photo tables
 * */
function getPhotoTable() {
    var result;
    result = {
        table: {
            widths: ['*', '*'],
            headerRows:2,
            body: [
                [
                    {
                        text: 'DILAPIDATION SURVEY REPORT ',
                        style: 'tableHeader'
                    },
                    ''
                ],
                [{
                    text: [
                        {
                            text: 'Address:  ',
                            bold: true
                        },
                        {
                            text: document.getElementById('dilapidationFullAddress').value.trim()
                        }
                    ],
                    style: 'tableText',
                    colSpan: 2
                }, {}],
                [
                    getPhoto('DilapidationImage0'),
                    getPhoto('DilapidationImage1')
                ],
                [{
                    text: getPicDes('DilapidationImageText0'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText1'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage2'),
                    getPhoto('DilapidationImage3')
                ],
                [{
                    text: getPicDes('DilapidationImageText2'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText3'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage4'),
                    getPhoto('DilapidationImage5')
                ],
                [{
                    text: getPicDes('DilapidationImageText4'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText5'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage6'),
                    getPhoto('DilapidationImage7')
                ],
                [{
                    text: getPicDes('DilapidationImageText6'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText7'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage8'),
                    getPhoto('DilapidationImage9')
                ],
                [{
                    text: getPicDes('DilapidationImageText8'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText9'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage10'),
                    getPhoto('DilapidationImage11')
                ],
                [{
                    text: getPicDes('DilapidationImageText10'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText11'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage12'),
                    getPhoto('DilapidationImage13')
                ],
                [{
                    text: getPicDes('DilapidationImageText12'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText13'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage14'),
                    getPhoto('DilapidationImage15')
                ],
                [{
                    text: getPicDes('DilapidationImageText14'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText15'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage16'),
                    getPhoto('DilapidationImage17')
                ],
                [{
                    text: getPicDes('DilapidationImageText16'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText17'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage18'),
                    getPhoto('DilapidationImage19')
                ],
                [{
                    text: getPicDes('DilapidationImageText18'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText19'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage20'),
                    getPhoto('DilapidationImage21')
                ],
                [{
                    text: getPicDes('DilapidationImageText20'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText21'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage22'),
                    getPhoto('DilapidationImage23')
                ],
                [{
                    text: getPicDes('DilapidationImageText22'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText23'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage24'),
                    getPhoto('DilapidationImage25')
                ],
                [{
                    text: getPicDes('DilapidationImageText24'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText25'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage26'),
                    getPhoto('DilapidationImage27')
                ],
                [{
                    text: getPicDes('DilapidationImageText26'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText27'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage28'),
                    getPhoto('DilapidationImage29')
                ],
                [{
                    text: getPicDes('DilapidationImageText28'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText29'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage30'),
                    getPhoto('DilapidationImage31')
                ],
                [{
                    text: getPicDes('DilapidationImageText30'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText31'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage32'),
                    getPhoto('DilapidationImage33')
                ],
                [{
                    text: getPicDes('DilapidationImageText32'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText33'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage34'),
                    getPhoto('DilapidationImage35')
                ],
                [{
                    text: getPicDes('DilapidationImageText34'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText35'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage36'),
                    getPhoto('DilapidationImage37')
                ],
                [{
                    text: getPicDes('DilapidationImageText36'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText37'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage38'),
                    getPhoto('DilapidationImage39')
                ],
                [{
                    text: getPicDes('DilapidationImageText38'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText39'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage40'),
                    getPhoto('DilapidationImage41')
                ],
                [{
                    text: getPicDes('DilapidationImageText40'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText41'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage42'),
                    getPhoto('DilapidationImage43')
                ],
                [{
                    text: getPicDes('DilapidationImageText42'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText43'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage44'),
                    getPhoto('DilapidationImage45')
                ],
                [{
                    text: getPicDes('DilapidationImageText44'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText45'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage46'),
                    getPhoto('DilapidationImage47')
                ],
                [{
                    text: getPicDes('DilapidationImageText46'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText47'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage48'),
                    getPhoto('DilapidationImage49')
                ],
                [{
                    text: getPicDes('DilapidationImageText48'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText49'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage50'),
                    getPhoto('DilapidationImage51')
                ],
                [{
                    text: getPicDes('DilapidationImageText50'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText51'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage52'),
                    getPhoto('DilapidationImage53')
                ],
                [{
                    text: getPicDes('DilapidationImageText52'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText53'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage54'),
                    getPhoto('DilapidationImage55')
                ],
                [{
                    text: getPicDes('DilapidationImageText54'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText55'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage56'),
                    getPhoto('DilapidationImage57')
                ],
                [{
                    text: getPicDes('DilapidationImageText56'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText57'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }],
                [
                    getPhoto('DilapidationImage58'),
                    getPhoto('DilapidationImage59')
                ],
                [{
                    text: getPicDes('DilapidationImageText58'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }, {
                    text: getPicDes('DilapidationImageText59'),
                    fontSize: 9,
                    bold: true,
                    alignment: 'center'
                }]
            ]
        },
        layout: 'noBorders'
    };
    return result;
}