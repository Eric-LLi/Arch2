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
    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#AdvicePhotographs').find('> form');
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
                margin: [0, 0, 0, 20],
                colSpan:2
            },{}
        ];
        data.push(secondRow);
        for (var i = 0; i < totalContainers.length; i++) 
        {
            var img = totalContainers.eq(i).children('div').eq(0).children('img').get(0),
                imgSrc = totalContainers.eq(i).children('div').eq(0).children('img').attr('src'),
                imgLabel = totalContainers.eq(i).children('div').eq(1).children('label').text(),
                imgText = totalContainers.eq(i).children('div').eq(2).children('input').val()
                // width = 0,
                // height = 0;
                //console.log(totalContainers.eq(i).children('div').eq(0).children('img').get(0));
                //console.log(totalContainers.eq(i).children('div').eq(0).children('img').attr('src'));
                //console.log(totalContainers.eq(i).children('div').eq(1).children('label').text());
                //console.log(totalContainers.eq(0).children('div').eq(2).children('input').val())

            //console.log(imgLabel);
            //console.log(imgSrc);

            if (typeof imgSrc  != "undefined")
            {
                if (imgSrc.includes("photos/") > 0) 
                {
                    imgSrc = convertImgToBase64(img);
                }
    
                // if (img.width >= img.height) {
                //     width = 250;
                //     height = 187;
                // } else {
                //     width = img.width * 187 / img.height;
                //     height = 187;
                // }
    
                row.push({
                    stack: [
                        {
                            image: imgSrc,
                            height: 200,
                            width: 250,
                            //margin:[0,30,0,5]
                            margin:[0,0,0,5]
                            //alignment: 'center'
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