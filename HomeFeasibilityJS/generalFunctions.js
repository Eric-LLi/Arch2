/**
 * Created by Fafa Lai on 24/10/17.
 */
var date = new Date();
var currentYear = date.getFullYear();

function reorderDrawings()
{
    var totalContainers = $('#homeFeasibilityDrawings').find('> form');
    var BigContainer = document.getElementById('homeFeasibilityDrawings');
    console.log(totalContainers);
    for (var i=0;i<totalContainers.length;i++)
    {
        console.log(Number(totalContainers[i].id.replace(/[^\d.]/g, '')));
    }

    totalContainers.sort(function(a,b)
    {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    console.log(totalContainers);
}

/**
 * Make a gap between the elements
 * */
function makeAGap() {
    var result;
    result = {text: ' '};
    return result;
}

/**
 * Get the value for the table cell
 * */
function getIt(id) {
    var result;
    result = document.getElementById(id).value.trim();
    return result;
}

/**
 * Get value from textArea, if there is no input, display 'NA'
 */
function getTextArea(id)
{
    var result;
    result = document.getElementById(id).value.trim();

    if (result === '')
    {
        result = 'NA';
    }

    return result;
}


/*
    get image text
 */
function getImageText(id){
    var result;

    text = document.getElementById(id).value.trim();

    if (text != "")
    {
        result ={
            text:text,
            fontSize:9,
            margin: [0, 10, 0, 10],
            alignment: 'center'
        }
    }
    else {
        result = {
            text:"",
            // fillColor: '#FFFFFF',
            // border: [false, false, false, false],
            margin: [0, 10, 0, 10],
            alignment: 'center'
        }
    }
    return result;
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


/**
 * Get image for the Cover page
 * */
function displayCoverImage(id) {
    var imageDisplay = {};
    var myImage = document.getElementById(id);
    var myWidth = myImage.style.width;
    if (myWidth == "0px")
    {
        imageDisplay =
        {
            text: "",
            width: 0,
            height: 0
        }
    }
    else
    {
        imageDisplay =
        {
            image: myImage.src,
            width: 230,
            height: 160
        }
    }
    return imageDisplay;
}


/*
 display image based on the id.
 if there is image src, set the width and height,
 if there is no image src, set width and height to 0 to save space
 */

function displayImage(id)
{
    var imageDisplay;
    var image = document.getElementById(id);
    var width = image.style.width;
    if (width == "0px")
    {
        imageDisplay =
        {
            text: "",
            width: 0,
            height: 0,
            fillColor: '#FFFFFF'

        }
    }
    else
    {
        imageDisplay =
        {
            image: image.src,
            width: 250,
            height: 250
        }
    }
    return imageDisplay;

}

function getImage(id)
{
    var image = document.getElementById(id);
    var width = image.style.width;
    if (width == "0px")
    {
        src = coverPageLogo
    }
    else
    {
        src = image.src;
    }

    return src;
}

/*
 Split the text content by /n into smaller paragraphs
 place number before the paragraphs and display on the pdf
 the number is accumulated as the paragraphs increased in the whole file, not just one text content
 Fafa
 */

function splitTextArea(id)
{
    var text = document.getElementById(id).value.trim();
    var list = [];
    if (text != 'NA')
    {
        var newText = text.replace(/(\r\n|\r|\n)+/g, '$1');
        var paragraphTrim = newText.trim();
        var paragraphs = paragraphTrim.split("\n");
        var length = paragraphs.length;
        console.log(length);

        for (var i = 0; i < length; i++) {
            var text = {
                text:paragraphs[i],
                style: 'bulletMargin'
            };
            list.push(text);
        }

    }
    else
    {
        return list;
    }

    bulletList = {
        ul:list
    };
    return bulletList;
}

/**
 *   check whether the image src is base64 or url path.
 *   return -1 means base64
 *   otherwise is url path
 **/
function checkImage(id) {
    //console.log("click");
    var image = document.getElementById(id);
    var src = image.src;
    //console.log(src.indexOf("photos"));
    return(src.indexOf("photos"));
}

/**
 * Images
 * */
function getCoverImage(imgid,angleid)
{
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
        //Doesn't matter if the image is upload or reload, if it is rotated, use the canvas for all scenario, use the canvas.toDataURL to get the base64. 
        var canvas = document.createElement("canvas");
        canvas.height = canvas.width = 0;
        var context = canvas.getContext('2d');
        var imgwidth = myImage.width;
        var imgheight = myImage.height;
     
        if(imgangle == 90)
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,canvas.width/scale,0, -(imgheight)/scale, -(imgwidth)*scale);
            context.restore();
        }
        else if (imgangle == 180)
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,0,0, -(imgwidth), -(imgheight));
            context.restore();
        }
        else if(imgangle == 270)
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,0,canvas.height*scale, -(imgheight)/scale, -(imgwidth)*scale);
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
            context.rotate(imgangle*Math.PI/180);
            context.drawImage(myImage,canvas.width,canvas.height, -(imgwidth), -(imgheight));
            context.restore();
        }
        imgSrc = canvas.toDataURL("image/jpeg");

        imageSection = {
            image: imgSrc,
            //height: 180,
            width: 220
        }

    }
    return imageSection;

}

function getPhoto(id) {
    var imageSection;
    var myImage = document.getElementById(id);

    if (myImage) {
        var myWidth = myImage.style.width;
        if (myWidth == "0px") {
            console.log('0px');
            imageSection = {
                text: ""
            };
            return imageSection;
        } 
        else {
            
            if (checkImage(id) >= 0)
            {
                console.log('reload');
                var canvas = document.createElement("canvas");
                canvas.width = myImage.naturalWidth;
                canvas.height = myImage.naturalHeight;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(myImage,0,0);
                var src = canvas.toDataURL("image/png");
            
                imageSection = {
                    image:src,
                    height: 250,
                    width: 250
                }
            }
            else
            {
                console.log('upload');
                imageSection = {
                    image: myImage.src,
                    width: 250,
                    height: 250
                };
            }

            return imageSection;
        }
    }
    else
    {  
        imageSection = {
            text: ''
        };
        return imageSection;
    }
}

/*
 get the drawing and the caption
 */
function getDrawings(id1, id2) {
    var imageSection;
    var myImage = document.getElementById(id1);
    if (myImage)
    {
        console.log(myImage.style.display);
        //has image, check whether it is from database or just upload
        if(myImage.style.display == 'none')
        {
            console.log("this id exist but does not have drawing display");
            imageSection = {
                text:''
            }
        }
        else
        {
            console.log("this id does have drawing display, but need to check the src");
            if (checkImage(id1) >= 0)
            {
                console.log('src is reload');
                var canvas = document.createElement("canvas");
                canvas.width = myImage.naturalWidth;
                canvas.height = myImage.naturalHeight;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(myImage,0,0);
                var src = canvas.toDataURL("image/png");

                imageSection = {
                    stack: [
                        {
                            text: 'Drawing',
                            style: 'pageTopHeader'
                        },
                        makeAGap(),
                        {
                            text: document.getElementById(id2).value,
                            fontSize: 9,
                            bold: true,
                            alignment: 'center',
                            margin: [0, 0, 0, 4]
                        },
                        {
                            alignment: 'center',
                            columns: [
                                {
                                    image: src,
                                    fit: [500, 700]
                                }
                            ]
                        }
                    ],
                    pageBreak: 'before'
                }

            }
            else
            {
                console.log('src is just upload');
                // console.log(myImage.width);
                // console.log(myImage.style.width);
                imageSection = {
                    stack: [
                        {
                            text: 'Drawing',
                            style: 'pageTopHeader'
                        },
                        makeAGap(),
                        {
                            alignment: 'center',
                            columns: [
                                {
                                    image: myImage.src,
                                    fit: [500, 700]
                                }
                            ]
                        },
                        makeAGap(),
                        {
                            text: document.getElementById(id2).value,
                            fontSize: 9,
                            bold: true,
                            alignment: 'center'
                            // margin: [0, 0, 0, 4]
                        }
                    ],
                    pageBreak: 'before'
                }
            }
        }
    }
    else
    {
        //no image at all
        console.log('no upload images at all');
        imageSection = {
            text:""
        }
    }
    return imageSection;
}

/**
 * To get the state of the property, to determin the text 1 in the scope of service and Terms & Conditions. 
 * State SA requires different text 1
 */

function getTermsAndConditionsP1()
{
    // console.log('getSSTCText1');
    var text1;
    var state = document.getElementById('state').value;
    if(state == 'SA')
    {
        text1 = termConditionTextSA1;
    }
    else
    {
        text1 = termConditionText1;
    }

    return text1;
}