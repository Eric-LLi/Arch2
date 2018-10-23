/**
 * Created by Fafa on 21/10/18.
 */


var ImageCounting = 1;

function resetImageCounting()
{
    ImageCounting = 1;
    console.log("Have reset the imageCounting, now is " + ImageCounting);
}

/*
 get image text
 */
function getPicDes(id){
    var result;
    var currentID;

    var textInput = document.getElementById(id);
    var selectedID = String(id);
    currentID = selectedID.replace ( /[^\d.]/g, '' );
    console.log("the id " + id);
    var imageID = "PostDilapidationImage" + currentID;

    var image = document.getElementById(imageID);

    console.log("the corresponding image id is " + imageID);


    if (textInput)
    {
        if(image.style.display != 'none')
        {
            description = textInput.value.trim();

            var numberDisplay = ImageCounting + ".  ";
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
function determineFooter(mode)
{
    var result;
    var state = document.getElementById('PDAssessmentState').value;
    if (mode == 'final' || mode == 'save')
    {
        if (state === 'NSW')
        {
            result = {
                table:{
                    widths: [80, 350],
                    body:[
                        [
                            {
                                image:footerImage,
                                alignment:'left',
                                width:80,
                                height:34
                            },
                            {
                                text:'\nNSW Nominated Architect B. Inwood Reg, No. 7108 \n\n © COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                                alignment:'left',
                                fontSize:7,
                                margin:[0,0,0,0],
                                color:'#8E8B8B'
                            }
                        ]
                    ]
                },
                layout:'noBorders',
                margin: [40, -9, 10, 0]
            };
            return result;
        }
        else
        {
            result = {
                table:{
                    widths: [80, 350],
                    body:[
                        [
                            {
                                // rowSpan:2,
                                image:footerImage,
                                alignment:'left',
                                width:80,
                                height:34
                            },
                            {
                                text:'© COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                                alignment:'left',
                                fontSize:7,
                                margin:[0,22,0,0],
                                color:'#8E8B8B'
                            }
                        ]

                    ]
                },
                layout:'noBorders',
                margin: [40, -9, 10, 0]
            };
            return result;
        }
    }
    if (mode == 'preview')
    {
        result = {
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
    var state = document.getElementById('PDAssessmentState').value;
    if (mode == 'final' || mode == 'save') {
        if (state === 'NSW')
        {
            result = {
                table:{
                    body:[
                        [
                            {
                                image:footerImage,
                                alignment:'left',
                                width:80,
                                height:34
                            },
                            {
                                text:'\nNSW Nominated Architect B. Inwood Reg, No. 7108',
                                alignment:'left',
                                fontSize:7,
                                margin:[0,10,0,0],
                                color:'#8E8B8B'
                            }
                        ],
                        [

                            {
                                text:['For further information please call Archicentre ', {text:'Australia ',color:'#E06666'}, 'on ',{text:'1300 13 45 13',color:'3A3333',bold:true,fontSize:8}],
                                alignment:'left',
                                fontSize:7,
                                colSpan:2,
                                color:'#8E8B8B'
                            }
                        ],
                        [
                            {
                                text: ['or go to ',{text:'www.archicentreaustralia.com.au',bold:true,color:'3A3333',fontSize:8}],
                                alignment: 'left',
                                fontSize:7,
                                margin:[0,-4,0,0],
                                colSpan:2,
                                color:'#8E8B8B'
                            }
                        ]

                    ]
                },
                layout:'noBorders',
                margin: [40, -28, 0, 0]
            };
            return result;
        }
        else
        {
            result = {
                table:{
                    body:[
                        [
                            {
                                image:footerImage,
                                alignment:'left',
                                width:80,
                                height:34
                            }
                        ],
                        [

                            {
                                text:['For further information please call Archicentre ', {text:'Australia ',color:'#E06666'}, 'on ',{text:'1300 13 45 13',color:'3A3333',bold:true,fontSize:8}],
                                alignment:'left',
                                fontSize:7,
                                color:'#8E8B8B'
                            }
                        ],
                        [
                            {
                                text: ['or go to ',{text:'www.archicentreaustralia.com.au',bold:true,color:'3A3333',fontSize:8}],
                                alignment: 'left',
                                fontSize:7,
                                margin:[0,-4,0,0],
                                color:'#8E8B8B'
                            }
                        ]

                    ]
                },
                layout:'noBorders',
                margin: [40, -28, 0, 0]
            };
            return result;
        }
    }

    if (mode == 'preview') {
        result = {
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
            alignment: 'center',
            margin: [0, 0, 0, 10]
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
                height: 100,
                width: 150
            }
        }
        else{
            console.log('just upload');
            imageSection = {
                image: myImage.src,
                height: 100,
                width: 150
            }
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

/**
 * Get the value for the table cell
 * */
function getIt(id) {
    var result;
    result = document.getElementById(id).value.trim();
    return result;
}

// function getPicDes(id) {
//     var myText = document.getElementById(id);
//     if (myText) {
//         return myText.value;
//     } else {
//         return '';
//     }
// }

/**
 * Make a gap between the elements
 * */
function makeAGap() {
    var result;
    result = {text: ' '};
    return result;
}