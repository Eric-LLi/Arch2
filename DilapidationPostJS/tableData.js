/**
 * Created by Fafa on 21/10/18.
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
                    text: getIt('PDCustomerName'),
                    fontSize: 9,
                    border: [true, true, false, true]
                },{
                    text: 'Booking No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDBookingNo'),
                    fontSize: 9,
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Telephone No',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDCustomerPhone'),
                    fontSize: 9
                }, {
                    text: 'Mobile No',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDBookingMobile'),
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
                    text: getIt('PDAssessmentAddress'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Suburb',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDAssessmentSuburb'),
                    style: 'tableText'
                }, {
                    text: 'State',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDAssessmentState'),
                    style: 'tableText'
                }, {
                    text: 'Postcode',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDAssessmentPostcode'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Date of Inspection',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDAssessmentDate'),
                    style: 'tableText',
                    colSpan: 2
                }, {}, {
                    text: 'Time of Inspection',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDAssessmentTime'),
                    style: 'tableText',
                    colSpan: 2,
                    border: [true, true, false, true]
                }, {}],
                [{
                    text: 'Existing use of Building',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDPropertyUse'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Weather conditions',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDAssessmentWeather'),
                    style: 'tableText',
                    colSpan: 5,
                    border: [true, true, false, true]
                }, {}, {}, {}, {}],
                [{
                    text: 'Verbal summary to',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDVerbalSummary'),
                    style: 'tableText',
                    colSpan: 2
                }, {}, {
                    text: 'Date',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDAssessmentDate2'),
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
                    text: getIt('PDArchitectName'),
                    style: 'tableText'
                }, {
                    text: "Registration No",
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDRegistrationNumber'),
                    style: 'tableText',
                    border: [true, true, false, true]
                }],
                [{
                    text: 'Address',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDArchitectAddress'),
                    style: 'tableText',
                    border: [true, true, false, true],
                    colSpan: 3
                }, {}, {}],
                [{
                    text: 'Email',
                    style: 'tableBoldTextAlignLeft',
                    border: [false, true, true, true]
                }, {
                    text: getIt('PDArchitectEmail'),
                    style: 'tableText'
                }, {
                    text: 'Phone',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: getIt('PDArchitectPhone'),
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
                    text: getIt('PDSurveyReportSummary'),
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
                    text: 'Property Maintenance Guide',
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
    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#PostDilapidationPhotographs').find('> form');
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
                text:"POST DILAPIDATION SURVEY REPORT",
                style:'tableHeader',
                margin: [0, 0, 0, 5],
                colSpan:2
            },{}
        ];
        data.push(firstRow);
    
        var secondRow = [
            {
                text:'Address: ' + getIt('postDilapidationFullAddress'),
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
                //console.log(totalContainers.eq(i).children('div').eq(0).children('img').get(0));
                //console.log(totalContainers.eq(i).children('div').eq(0).children('img').attr('src'));
                //console.log(totalContainers.eq(i).children('div').eq(1).children('label').text());
                //console.log(totalContainers.eq(0).children('div').eq(2).children('input').val())

            //console.log(imgLabel);
            //console.log(imgSrc);
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