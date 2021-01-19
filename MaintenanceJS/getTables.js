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
                    text: 'Property Maintenance Guide',
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
                    text: getIt('2'),
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
                    text: getIt('customer_mobile'),
                    fontSize: 9,
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
                    text: 'Date of Assessment',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('9'),
                    style: 'tableText',
                    colSpan: 2
                }, {}, {
                    text: 'Time of Assessment',
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
                            margin: [0, 0, 0, 4]
                        },
                        // {
                        //     text: getIt('ADVICE-TEXT4'),
                        //     margin: [0, 0, 0, 4]
                        // },
                        // {
                        //     text: 'Further detail can be found within the body of this report and queries may be directed to the named architect or Archicentre Australia.',
                        //     bold: true
                        // }
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

function getTextBlock(id)
{
    var result;
    result = {
        table: {
            widths: ['*'],
            body: [
                [{
                    stack: [
                        {
                            text: getIt(id)
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
    makeItAnArr = cleanArray(getIt('YMAS-TEXT3').split('\n'));
    if (makeItAnArr.length > 0)
    {
        var bullet = (makeItAnArr[0].slice(0,2));
        if(bullet == '• ')
        {
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
                                    text: getIt('YMAS-TEXT3'),
                                    margin: [0, 0, 0, 4]
                                },
                                // {
                                //     ul: giveMeTheBullet('YMAS-TEXT3')
                                // }
                            ],
                            style: 'tableText',
                            alignment: 'justify'
                        }]
                    ]
                }
            };
        }
        else
        {
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
                                giveMeTheBullet('YMAS-TEXT3')
                                // {
                                //     ul: giveMeTheBullet('YMAS-TEXT3')
                                // }
                            ],
                            style: 'tableText',
                            alignment: 'justify'
                        }]
                    ]
                }
            };
        }
    }

   
    return result;
}

/**
 * Get Advice Table
 * */
function getAdviceTable() {
    var result;

    makeItAnArr = cleanArray(getIt('ADVICE-TEXT3').split('\n'));
    if (makeItAnArr.length > 0)
    {
        var bullet = (makeItAnArr[0].slice(0,2));
        if(bullet == '• ')
        {
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
                                makeAGap(),
                                {
                                    text: 'Summary:',
                                    bold: true,
                                    margin: [0, 0, 0, 4],
                                    fontSize: 10
                                },
                                {
                                    text: getIt('ADVICE-TEXT4'),
                                    margin: [0, 0, 0, 4]
                                }
                            ],
                            style: 'tableText',
                            alignment: 'justify'
                        }]
                    ]
                }
            };
        }
        else
        {
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
                                giveMeTheBullet('ADVICE-TEXT3'),
                                makeAGap(),
                                {
                                    text: 'Summary:',
                                    bold: true,
                                    margin: [0, 0, 0, 4],
                                    fontSize: 10
                                },
                                {
                                    text: getIt('ADVICE-TEXT4'),
                                    margin: [0, 0, 0, 4]
                                }
                            ],
                            style: 'tableText',
                            alignment: 'justify'
                        }]
                    ]
                }
            };
        }
    }
   
    
    return result;
}



/*
 get Images
 */
function getImagesTable()
{
    var result;
    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#MaintenancePhotographs').find('> form');
    var fullAddress = document.getElementById('5').value.trim() + " " + document.getElementById('6').value.trim();
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
                margin = [0,5,0,15];
           
                // width = 0,
                // height = 0;
                //console.log(totalContainers.eq(i).children('label').text());
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
                var imgwidth = img.naturalWidth;
                var imgheight = img.naturalHeight;
                // var imgwidth = img.offsetWidth;
                // var imgheight = img.offsetHeight;
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


/*
    get drawings
 */
function getDrawingTable()
{
    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#MaintenanceDrawings').find('> form');
    var fullAddress = document.getElementById('5').value.trim() + " " + document.getElementById('6').value.trim();
    var imgSection = {};

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
                margin: [0, 0, 0, 20]
            }
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
                console.log("imgAngle: " + imgAngle);
                var canvas = document.createElement("canvas");
                canvas.height = canvas.width = 0;
                var context = canvas.getContext('2d');
                //var imgwidth = img.naturalWidth;
                //var imgheight = img.naturalHeight;
                var imgwidth = img.offsetWidth;
                var imgheight = img.offsetHeight;
                canvas.width = imgwidth ;
                canvas.height = imgheight;
                console.log("the drawing height is: " + imgheight);
                console.log("the drawing width is: " + imgwidth);
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
                    width = 350;
                    height = 250;
                    margin = [0,0,0,0];
                } else {
                    width = img.width * 250 / img.height;
                    height = 250;
                    margin = [0,0,0,0];
                }
    
                if(imgAngle == 0 || imgAngle == 180)
                {
                    console.log("1");
                    if(imgheight >= 950)
                    {
                        console.log("1.1 height is greater than 950, will separate the page, need to set the height")
                        imgSection = {
                            image: imgSrc,
                            height: 600,
                            width: 500,
                            //fit:[500,500],
                            margin:margin,
                            alignment: 'center'
                        }
                    }
                    else
                    {
                        console.log("1.2 height is smaller than 950,don't need to set the height, only set the width")
                        imgSection = {
                            image: imgSrc,
                            width: 500,
                            //fit:[500,500],
                            margin:margin,
                            alignment: 'center'
                        }
                    }
                }
                else
                {
                    console.log("2")
                    imgSection = {
                        image: imgSrc,
                        width: 500,
                        //fit:[500,500],
                        margin:margin,
                        alignment: 'center'
                    }
                }

                row.push({
                    stack: [
                        imgSection,
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
                                    width: 500,
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
                if (divCount === 2) {
                    data.push(row);
                    row = [];
                    divCount = 1;
                }
            }
           
        }
        //console.log(data);
        //the last row only has one cell, need to put an empty cell to this row. 
        // if (divCount == 2) {
        //     //console.log("the last row only has one cell, need to put an empty cell to this row.")
        //     row.push({});
        //     data.push(row);
        // }

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
                width:[500],
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