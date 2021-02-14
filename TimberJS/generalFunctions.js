/**
 * Created by TengShinan on 6/10/17.
 */

var date = new Date();
var currentYear = date.getFullYear();

/**
 * Make a gap between the elements
 * */
function makeAGap() {
    var result;
    result = {
        text: ' '
    };
    return result;
}

/**
 * Get the value from general inputs, including text area, select options, input area
 * */
function getIt(id) {
    var result;
    result = document.getElementById(id).value.trim();
    // if(result == "")
    // {
    //     result = "NA"
    // }
    return result;
}

/*
    Get the value from the image description area
 */
function getPicDescription(id) {
    var result;
    result = document.getElementById(id).value.trim();
    return result;

}

/**
 * Determine draft cover page
 * */
function giveMeHugeDraft(mode) {
    var result;
    if (mode == 'final' || mode == 'save') {
        result = {
            text: ''
        };
        return result;
    }
    if (mode == 'preview') {
        result = {
            text: '******DRAFT******',
            fontSize: 40,
            bold: true,
            color: 'red',
            alignment: 'center'
        };
        return result;
    }
}


/*
    1st determine whether it is final mode or preview mode
    2md determine whether it is a NSW report if it is the final mode
 */
function determineFooter(mode) {
    var result;
    var state = document.getElementById('state').value;
    if (mode == 'final' || mode == 'save') {
        if (state === 'NSW') {
            result = {
                width: '*',
                table: {
                    widths: [80,350],
                    body: [
                        [
                            {
                                image:footerImage,
                                alignment:'left',
                                width:80,
                                height:34
                            },
                            // {
                            //     rowSpan: 2,
                            //     image: footerImage,
                            //     alignment: 'left',
                            //     width: 80,
                            //     height: 34
                            // },
                            {
                                text:[
                                    'NSW Nominated Architect B. Inwood Reg, No. 7108 \n © COPYRIGHT ',
                                    {text:currentYear},
                                    ' ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613'
                                ],
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 5, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]
                        // [
                        //     '',
                        //     {
                        //         text: '© COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                        //         alignment: 'left',
                        //         fontSize: 7,
                        //         margin: [0, 0, 0, 0],
                        //         color: '#8E8B8B'
                        //     }
                        // ]

                    ]
                },
                layout: 'noBorders',
                margin: [40, -3, 10, 0]
            };
            return result;
        } 
        else if (state === 'SA')
        {
            result = {
                width: '*',
                table: {
                    widths: [80,350],
                    body: [
                        [
                            {
                                image:footerImage,
                                alignment:'left',
                                width:80,
                                height:34
                            },
                            {
                                text:[
                                    '© COPYRIGHT ',
                                    {text:currentYear},
                                    ' ARCHICENTRE AUSTRALIA, \na trading name of ArchiadvisorySA Pty Ltd ABN 65 644 777 159, \na division of ARCHIADVISORY PTY LTD ABN 51 614 712 613'
                                ],
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 5, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]
                    ]
                },
                layout: 'noBorders',
                margin: [40, -3, 10, 0]
            };
            return result;
        } 
        else {
            result = {
                width: '*',
                table: {
                    widths: [80,350],
                    body: [
                        [
                            {
                                // rowSpan:2,
                                image: footerImage,
                                alignment: 'left',
                                width: 80,
                                height: 34
                            },
                            {
                                text:[
                                    '© COPYRIGHT ',
                                    {text:currentYear},
                                    ' ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613'
                                ],
                                // text: '© COPYRIGHT 2019 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 22, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]

                    ]
                },
                layout: 'noBorders',
                margin: [40, -3, 10, 0]
            };
            return result;
        }
    }
    if (mode == 'preview') {
        result = {
            width: '*',
            text: '*** THIS IS A DRAFT OF COPY OF THE REPORT ***',
            alignment: 'left',
            fontSize: 11,
            color: 'red',
            bold: true,
            margin: [40, 10, 0, 0]
        };
        return result;
    }
}


/**
 * Determine the front page footer
 * 1st. determine it is in final or preview mode
 * 2nd. if it is in final mode, determine whether it is a NSW report or others.
 */
function determineFrontPageFooter(mode) {
    var result;
    var state = document.getElementById('state').value;
    if (mode == 'final' || mode == 'save') {
        if (state === 'NSW') {
            result = {
                width: '*',
                table: {
                    body: [
                        [{
                                image: footerImage,
                                alignment: 'left',
                                width: 75,
                                height: 30
                            },
                            {
                                text: '\nNSW Nominated Architect B. Inwood Reg, No. 7108',
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 10, 0, 0],
                                color: '#8E8B8B'
                            }
                        ],
                        [

                            {
                                text: ['For further information please call Archicentre ', {
                                    text: 'Australia ',
                                    color: '#E06666'
                                }, 'on ', {
                                    text: '1300 13 45 13',
                                    color: '3A3333',
                                    bold: true,
                                    fontSize: 8
                                }],
                                alignment: 'left',
                                fontSize: 7,
                                colSpan: 2,
                                color: '#8E8B8B'
                            }
                        ],
                        [{
                            text: ['or go to ', {
                                text: 'www.archicentreaustralia.com.au',
                                bold: true,
                                color: '3A3333',
                                fontSize: 8
                            }],
                            alignment: 'left',
                            fontSize: 7,
                            margin: [0, -4, 0, 0],
                            colSpan: 2,
                            color: '#8E8B8B'
                        }]

                    ]
                },
                layout: 'noBorders',
                margin: [40, -25, 00, 0]
            };
            return result;
        } else {
            result = {
                width: '*',
                table: {
                    body: [
                        [{
                            image: footerImage,
                            alignment: 'left',
                            width: 80,
                            height: 34
                        }],
                        [

                            {
                                text: ['For further information please call Archicentre ', {
                                    text: 'Australia ',
                                    color: '#E06666'
                                }, 'on ', {
                                    text: '1300 13 45 13',
                                    color: '3A3333',
                                    bold: true,
                                    fontSize: 8
                                }],
                                alignment: 'left',
                                fontSize: 7,
                                color: '#8E8B8B'
                            }
                        ],
                        [{
                            text: ['or go to ', {
                                text: 'www.archicentreaustralia.com.au',
                                bold: true,
                                color: '3A3333',
                                fontSize: 8
                            }],
                            alignment: 'left',
                            fontSize: 7,
                            margin: [0, -4, 0, 0],
                            color: '#8E8B8B'
                        }]

                    ]
                },
                layout: 'noBorders',
                margin: [40, -25, 10, 0]
            };
            return result;
        }
    }

    if (mode == 'preview') {
        result = {
            width: '*',
            text: '*** THIS IS A DRAFT OF COPY OF THE REPORT ***',
            alignment: 'left',
            fontSize: 11,
            color: 'red',
            bold: true,
            margin: [40, 10, 0, 0]
        };
        return result;
    }
}



/**
 *   check whether the image src is base64 or url path.
 *   return -1 means base64, which means the image is just uploaded
 *   otherwise is url path,which means the image is reloaded from the database
 **/
function checkImage(id) {
    //console.log("click");
    var image = document.getElementById(id);
    var src = image.src;
    //console.log(src.indexOf("photos"));
    return (src.indexOf("photos"));
}

/**
 * 
 * @param {*} imgid 
 * @param {*} angleid 
 * New method to get the Cover Image, will rotate the image display if it is rotated on the HTML page. 
 */
function getCoverImage(imgid,angleid) {
    var imageSection,imgSrc;
    var myImage = document.getElementById(imgid);
    var myWidth = myImage.width;
    var imgangle = document.getElementById(angleid).value;
    if(imgangle == null || imgangle == "undefined" || imgangle == "")
    {
        imgangle = 0;
    }
    else
    {
        imgangle = parseInt(imgangle);
    }
    //console.log("the angle of the cover img is " + imgangle);
    
    if (myWidth == 0) {
        console.log('not cover');
        imageSection = {
            text: "",
            width: 0,
            height: 0
        }
    } 
    else 
    {
        console.log('has cover');
        var canvas = document.createElement("canvas");
        canvas.height = canvas.width = 0;
        var context = canvas.getContext('2d');
        var imgwidth = myImage.naturalWidth;
        var imgheight = myImage.naturalHeight;
     
        console.log("the cover image height is: " + imgheight);
        console.log("the cover image width is: " + imgwidth);
     
        if(imgangle == 90)
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,canvas.width/scale,0, -(imgheight)/scale, -(imgwidth)*scale);
            context.restore();
        }
        else if (imgangle == 180)
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,0,0, -(imgwidth), -(imgheight));
            context.restore();
        }
        else if(imgangle == 270)
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,0,canvas.height*scale, -(imgheight)/scale, -(imgwidth)*scale);
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,canvas.width,canvas.height, -(imgwidth), -(imgheight));
            context.restore();
        }
        
        imgSrc = canvas.toDataURL("image/jpeg");

        if(imgangle == 0 || imgangle == 180)
        {
            console.log("1. image angle is 0 or 180,landscape");
            if(imgheight >= 750)
            {
                console.log("1.1 height is greater than 750, will separate the page, need to set the height")
                imageSection = {
                    image: imgSrc,
                    height: 260,
                    width: 210,
                }
            }
            else
            {
                console.log("1.2 height is smaller than 750,don't need to set the height, only set the width")
                imageSection = {
                    image: imgSrc,
                    width: 210,
                }
            }
        }
        else
        {
            console.log("2. image angle is 90 or 270, vertical. need to check its width if it is beyond limit");
            imageSection = {
                image: imgSrc,
                width: 210
            }
            // if(imgwidth >= 750)
            // {
            //     console.log("1.1 width is greater than 750, will separate the page, need to set the height")
            //     imageSection = {
            //         image: imgSrc,
            //         height: 260,
            //         width: 210,
            //     }
            // }
            // else
            // {
            //     console.log("1.2 width is smaller than 750,don't need to set the height, only set the width")
            //     imageSection = {
            //         image: imgSrc,
            //         width: 210
            //     }
            // }
        }
        // imageSection = {
        //     image: imgSrc,
        //     // height: 180,
        //     width: 220,
        //     //fit:[220,180]
        // }

    }
    return imageSection;
}

function getPhoto(id) {
    var imageSection;
    var myImage = document.getElementById(id);

    if (myImage.style.display === "block") {
        //has image, check whether it is from database or just upload
        if (checkImage(id) >= 0) {
            //console.log(id + ' reload');
            var canvas = document.createElement("canvas");
            canvas.width = myImage.naturalWidth;
            canvas.height = myImage.naturalHeight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(myImage, 0, 0);
            var src = canvas.toDataURL("image/jpeg");

            imageSection = {
                image: src,
                height: 110,
                width: 160
            }
        } else {
            //console.log(id + ' just upload');
            imageSection = {
                image: myImage.src,
                height: 110,
                width: 160
            }
        }
    } else {
        //console.log(id + " no image at all");
        //no image at all
        imageSection = {
            text: ""
        }
    }

    return imageSection;

}

//AA-111
function getSelectOrOther(id)
{
    if(document.getElementById(id).value.trim() != "Other")
    {
        if(document.getElementById(id).value.trim() == "Choose an item")
        {
            return " ";
        }
        else 
        {
            return document.getElementById(id).value.trim();
        }
       
    }
    else
    {
        var otherid = id + "other";
        return document.getElementById(otherid).value.trim();
    }
}

/**
 * To get the state of the property, to determin the text 1 in the scope of service and Terms & Conditions. 
 * State SA requires different text 1
 */
function getSSTCText1()
{
    console.log('getSSTCText1');
    var text1;
    var state = document.getElementById('state').value;
    if(state == 'SA')
    {
        text1 = scopeOfInspectionP1SA;
    }
    else
    {
        text1 = scopeOfInspectionP1;
    }

    return text1;
}

function getTermsAndConditionsP1()
{
    console.log('getSSTCText1');
    var text1;
    var state = document.getElementById('state').value;
    if(state == 'SA')
    {
        text1 = termConditionP1SA;
    }
    else
    {
        text1 = termConditionP1;
    }

    return text1;
}