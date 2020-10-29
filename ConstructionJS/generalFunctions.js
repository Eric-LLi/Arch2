/**
 * Created by Fafa Lai on 6/10/17.
 */

/**
 * Make a gap between the elements
 * */

var ImageCounting = 1;

var totalParagraphs = 1;

var date = new Date();
var currentYear = date.getFullYear();

/**
 * Draw the key table - BetterTENG
 * */
function resetTotalParagraphs() {
    totalParagraphs = 1;
}

function getTotalParagraphs()
{
    // console.log("the current total paragrahs: " + totalParagraphs);
    return totalParagraphs;
}

function resetImageCounting()
{
    ImageCounting = 1;
    console.log("Have reset the imageCounting, now is " + ImageCounting);
}
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
 * Get the stage review value
 */
function getStaged(id)
{
    var text = document.getElementById(id).value.trim();
    if (text === '√')
    {
        return text;
    }
    else
    {
        text = "";
        return text;
    }
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
    console.log("the id " + id);
    var imageID = "ConstructionImage" + currentID;

    var image = document.getElementById(imageID);

    console.log("the corresponding image id is " + imageID);


    if (textInput) 
    {
        if(image.style.display != 'none')
        {
            description = textInput.value.trim();

            var numberDisplay = ImageCounting + "          ";
            console.log("the current number of the image: " + ImageCounting);
            result = {
                text:[numberDisplay, {text:description,alignment: 'center'}],
                //text:caption,
                fontSize:9,
                margin: [0, 5, 0, 10],
                alignment:'left'
                //alignment: 'left'
            };
            ImageCounting = ImageCounting + 1;
        }
        else
        {
            result = {
                text:'',
                // fillColor: '#FFFFFF',
                // border: [false, false, false, false],
                margin: [0, 5, 0, 10],
                alignment: 'left'
            }
        }


    }
    else
    {
        console.log('there is no corresponding text block for this id ' + id);
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
                                margin: [0, 15, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]
                    ]
                },
                layout: 'noBorders',
                margin: [40, 1, 10, 0]
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
                                margin: [0, 15, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]
                    ]
                },
                layout: 'noBorders',
                margin: [40, 1, 10, 0]
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
                                margin: [0, 15, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]

                    ]
                },
                layout: 'noBorders',
                margin: [40, 1, 10, 0]
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
function getCoverImage(id) {
    var imageSection;
    var myImage = document.getElementById(id);
    var myWidth = myImage.width;
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
                height: 150,
                width: 200
            }
        }
        else{
            console.log('just upload');
            imageSection = {
                image: myImage.src,
                height: 150,
                width: 200
            }
        }

    }
    return imageSection;
}

function getPhoto(id)
{

    var imageSection;
    var myImage = document.getElementById(id);

    if (myImage)
    {
        //has image, check whether it is from database or just upload
        if(myImage.style.width == '0px')
        {
            //console.log("this id exist but does not have image display");
            imageSection = {
                text:''
            }
        }
        else
        {
            //console.log("this id does have image display, but need to check the src");
            if (checkImage(id) >= 0)
            {
                //ImageCounting = ImageCounting + 1;
                console.log('src is reload');
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


/**
 * Get image for the Cover page
 * */
function displayCoverImage(id) {
    var imageDisplay = {};
    var myImage = document.getElementById(id);
    var myWidth = myImage.width;
    if (myWidth == 0)
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


/**
 * Remove all the empty elements in an array
 * */
function cleanArray(actual) {
    var newArray = [];
    for (var i = 0; i < actual.length; i++)
    {
        if (actual[i])
        {
            newArray.push(actual[i]);
        }
    }
    //console.log(newArray);
    return newArray;
}

/**
 * Return an BULLET ARRAY :)
 * */
function giveMeTheNumber(id) {
    var makeItAnArr;
    var data = [];

    makeItAnArr = cleanArray(getIt(id).split('\n'));
    totalParagraphs = totalParagraphs + makeItAnArr.length;
    console.log(makeItAnArr);
    console.log(totalParagraphs);

    if (makeItAnArr.length != 0)
    {
        for (var i = 0; i < makeItAnArr.length; i++)
        {
            //console.log(makeItAnArr[i].slice(2));
            var content =
            {
                text:makeItAnArr[i].slice(3),
                margin:[0,0,0,2],
                alignment:'left'
            };
            data.push(content);
        }

        //data.push({text: makeItAnArr[makeItAnArr.length - 1], alignment: 'left'});
    }
    // else
    // {
    //     data.push({text: 'NA'})
    // }

    //console.log(data);
    return data;
}

/**
 * To get the state of the property, to determin the text 1 in the scope of service and Terms & Conditions. 
 * State SA requires different text 1
 */
function getSSTCText1()
{
    // console.log('getSSTCText1');
    var text1;
    var state = document.getElementById('state').value;
    if(state == 'SA')
    {
        text1 = scopeOfInspectionSAP1;
    }
    else
    {
        text1 = scopeOfInspectionP1;
    }

    return text1;
}

function getTermsAndConditionsP1()
{
    // console.log('getSSTCText1');
    var text1;
    var state = document.getElementById('state').value;
    if(state == 'SA')
    {
        text1 = termsConditionsSAP1;
    }
    else
    {
        text1 = termsConditionsP1;
    }

    return text1;
}