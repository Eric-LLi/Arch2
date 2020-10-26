/**
 * Created by Fafa Lai on 24/10/17.
 */

var totalImagesCaptions = 1;
var date = new Date();
var currentYear = date.getFullYear();

function resetTotalImagesCaptions()
{
    totalImagesCaptions = 1;
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

    if (result == 'Choose an item')
    {

        result = '';
    }
    return result;
}

//check whether a number is odd or even
function isOdd(num)
{
    return num % 2;
}

function getKeyTable() {
    var result;
    result = {
        table: {
            widths: [13, '*', 13, '*',13, '*'],
            body: [
                [
                    {
                        text: '√',
                        style: 'tableText'
                    },
                    {
                        text: '-    No Defects Evident',
                        style: 'tableText'
                    },
                    {
                        text: 'X',
                        bold:true,
                        style: 'tableText'
                    },
                    {
                        text: '-    Defect Evident',
                        style: 'tableText'
                    },
                    '',''
                ],
                [
                    {
                        text: '--',
                        bold:true,
                        style: 'tableText'
                    },
                    {
                        text: '-    Not Relevant',
                        style: 'tableText'
                    },
                    {
                        text: 'U',
                        bold:true,
                        style: 'tableText'
                    },
                    {
                        text: '-    Untested',
                        style: 'tableText'
                    },
                    {
                        text: 'IW',
                        bold:true,
                        style: 'tableText'
                    },
                    {
                        text: '-    Incomplete Work',
                        style: 'tableText'
                    }
                ],
                [
                    {
                        text: 'R',
                        bold:true,
                        style: 'tableText'
                    },
                    {
                        text: '-    Reasonable Access',
                        style: 'tableText'
                    },
                    {
                        text: 'P',
                        bold:true,
                        style: 'tableText'
                    },
                    {
                        text: '-    Partial Access',
                        style: 'tableText'
                    },
                    {
                        text: 'N',
                        bold:true,
                        style: 'tableText'
                    },
                    {
                        text: '-    Not Accessible',
                        style: 'tableText'
                    }
                ]
            ]
        },
        layout: 'noBorders',
        margin:[20,5,0,5]
    };
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
 1st determine whether it is final mode or preview mode
 2md determine whether it is a NSW report if it is the final mode
 */
/*
    1st determine whether it is final mode or preview mode
    2md determine whether it is a NSW report if it is the final mode
 */
function determineFooter(mode) {
    var result;
    var state = document.getElementById('inspection_state').value;
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
                    ]
                },
                layout: 'noBorders',
                margin: [40, -4, 10, 0]
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
                margin: [40, -4, 10, 0]
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
    var state = document.getElementById('inspection_state').value;
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
 * Get the signature
 */
function getSignature(id)
{
    var imageSection;
    var myImage = document.getElementById(id);
    //console.log($("#"+id).attr("src"));
    var myWidth = myImage.width;
    if ($("#"+id).attr("src") == "#") {
        console.log('no signature');
        imageSection = {
            text: "",
            width: 0,
            height: 0
        }
    }
    else
    {
        //console.log('has cover');
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
                height: 50,
                width: 200
            }
        }
        else{
            console.log('just upload');
            imageSection = {
                image: myImage.src,
                height: 50,
                width: 200
            }
        }

    }
    return imageSection;
}

/**
 * Get image for the Cover page
 * */
function displayCoverImage(id) {
    var imageSection;
    var myImage = document.getElementById(id);
    var myWidth = myImage.width;
    if (myWidth == 0) {
        //console.log('not cover');
        imageSection = {
            text: "",
            width: 0,
            height: 0
        }
    }
    else
    {
        //console.log('has cover');
        if (checkImage(id) >= 0)
        {
            //console.log('reload');
            var canvas = document.createElement("canvas");
            canvas.width = myImage.naturalWidth;
            canvas.height = myImage.naturalHeight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(myImage,0,0);
            var src = canvas.toDataURL("image/png");

            imageSection = {
                image:src,
                height: 150,
                width: 200
            }
        }
        else{
            //console.log('just upload');
            imageSection = {
                image: myImage.src,
                height: 150,
                width: 200
            }
        }

    }
    return imageSection;
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
        //console.log(length);

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
 * Cover  Images
 * */
function getCoverImage(id) {
    var imageSection;
    var myImage = document.getElementById(id);
    var myWidth = myImage.width;

    if (myWidth == 0) {
       // console.log('not cover');
        imageSection = {
            text: "",
            width: 0,
            height: 0
        }
    } 
    else 
    {
        //console.log('has cover');
        if (checkImage(id) >= 0)
        {
           // console.log('reload');
            var canvas = document.createElement("canvas");
            canvas.width = myImage.naturalWidth;
            canvas.height = myImage.naturalHeight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(myImage,0,0);
            var src = canvas.toDataURL("image/png");
            
            imageSection = {
                image:src,
                height: 100,
                width: 150
            }
        }
        else{
            //console.log('just upload');
            imageSection = {
                image: myImage.src,
                height: 100,
                width: 150
            }
        }

    }
    return imageSection;
}

/*
 display image based on the id.
 if there is image src, set the width and height,
 if there is no image src, set width and height to 0 to save space
 */

function getPhoto(id)
{
    var imageSection;
    var myImage = document.getElementById(id);

    if (myImage)
    {
        //image id exists, check whether there is a image on display based on the width, 0 --> no
        if(myImage.style.display == 'none')
        {
            //console.log("this id exist but does not have image display");
            imageSection = {
                text:''
            }
        }
        else
        {
            //image id exists and there is a image on display. check whether the image is just upload or reload.
            //console.log("this id does have image display, but need to check the src");
            if (checkImage(id) >= 0)
            {
                //console.log('src is reload');
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
                //console.log('src is just upload');
                // console.log(myImage.width);
                // console.log(myImage.style.width);
                imageSection = {
                    image: myImage.src,
                    height: 250,
                    width: 250
                }
            }
        }
    }
    else
    {
        //no image at all
        //console.log('no upload images at all');
        imageSection = {
            text:""
        }
    }

    return imageSection;

}


/*
 get image text
 */
function getImageText(id){
    var result;
    var currentID;

    var textInput = document.getElementById(id);
    var selectedID = String(id);
    currentID = selectedID.replace ( /[^\d.]/g, '' );
    //console.log("the id " + id);
    var imageNo = Number(currentID)+1;
    var imageID = "HOWImage" + currentID;
    var image = document.getElementById(imageID);

    //console.log("the corresponding image id is " + imageID);


    //check if the text id exits
    if (textInput)
    {
        //check if there is a image is on display
        if(image.style.display != 'none')
        {
            description = textInput.value.trim();

            var caption = 'No. ' + imageNo + "   ";
           // console.log(caption);
            result = {
                text:[caption, {text:description,alignment: 'center'}],
                //text:caption,
                fontSize:9,
                margin: [0, 5, 0, 10]
                //alignment: 'left'
            };
            totalImagesCaptions = totalImagesCaptions + 1;
        }
        else
        {
            result = {
                text:"",
                // fillColor: '#FFFFFF',
                // border: [false, false, false, false],
                margin: [0, 5, 0, 10],
                alignment: 'left'
            }
        }


    }
    else
    {
        //console.log('there is no corresponding text block for this id ' + id);
        result = {
            text:"",
            // fillColor: '#FFFFFF',
            // border: [false, false, false, false],
            margin: [0, 5, 0, 10],
            alignment: 'center'
        }
    }
    return result;
}
/*
 get the drawing and the caption
 */
function getDrawings(id1, id2) {
    var imageSection;
    var myImage = document.getElementById(id1);
    if (myImage)
    {
        //console.log(myImage.style.display);
        //has image, check whether it is from database or just upload
        if(myImage.style.display == 'none')
        {
            //console.log("this id exist but does not have drawing display");
            imageSection = {
                text:''
            }
        }
        else
        {
            //console.log("this id does have drawing display, but need to check the src");
            if (checkImage(id1) >= 0)
            {
                //console.log('src is reload');
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
                //console.log('src is just upload');
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
        //console.log('no upload images at all');
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
    var state = document.getElementById('inspection_state').value;
    if(state == 'SA')
    {
        text1 = TermsNConditionsSA1;
    }
    else
    {
        text1 = TermsNConditions1;
    }

    return text1;
}