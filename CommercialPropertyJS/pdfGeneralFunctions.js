/**
 * Created by Fafa Lai on 24/10/17.
 */

var totalImagesCaptions = 1;
var totalGeneralNotesParagraph = 1;
var date = new Date();
var currentYear = date.getFullYear();

function resetTotalCounting()
{
    totalImagesCaptions = 1;
    totalGeneralNotesParagraph = 1;
}

/**
 * Make a gap between the elements
 * */
function makeAGap() {
    var result;
    result = {text: ' '};
    return result;
}


function getKeyTable() {
    var result;
    result = {
        table: {
            widths: [15, '*', 15, '*'],
            body: [
                [{
                    text: 'NA',
                    style: 'tableText'
                }, {
                    text: '-    Not applicable, No such item',
                    style: 'tableText'
                }, {
                    text: '√',
                    style: 'tableText'
                }, {
                    text: '-    No visible significant defect',
                    style: 'tableText'
                }],
                [{
                    text: 'X',
                    style: 'tableText'
                }, {
                    text: '-    Maintenance Item or Minor Defect',
                    style: 'tableText'
                }, {
                    text: 'XX',
                    style: 'tableText'
                }, {
                    text: '-    Major Defect',
                    style: 'tableText'
                }],
                [{
                    text: 'U',
                    style: 'tableText'
                }, {
                    text: '-    Unknown / Inaccessible / Not tested',
                    style: 'tableText'
                }, '', '']
            ]
        },
        layout: 'noBorders',
        margin:[20,5,0,10]
    };
    return result;
}


function getTradeGuideTable(){
    var result;
    result = {
        table: {
            body: [
                [{
                    text: 'AR',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Architects',
                    style: 'tableText'
                }, {
                    text: 'DR',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Drainers',
                    style: 'tableText'
                }, {
                    text: 'IC',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Insulation Contractors',
                    style: 'tableText'
                }, {
                    text: 'PL',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Plasterers',
                    style: 'tableText'
                }],
                [{
                    text: 'BC',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Building Contractors',
                    style: 'tableText'
                }, {
                    text: 'EL',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Electrical Contractors',
                    style: 'tableText'
                }, {
                    text: 'LA',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Landscape Architects',
                    style: 'tableText'
                }, {
                    text: 'PV',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Paving-Various',
                    style: 'tableText'
                }],
                [{
                    text: 'BR',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Bricklayers',
                    style: 'tableText'
                }, {
                    text: 'EX',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Excavating Contractors',
                    style: 'tableText'
                }, {
                    text: 'LG',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Landscape Gardener & Contractors',
                    style: 'tableText'
                }, {
                    text: 'RC',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Roof Const./Repair/Clean',
                    style: 'tableText'
                }],
                [{
                    text: 'CC',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Concrete Contractors',
                    style: 'tableText'
                }, {
                    text: 'FC',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Fencing Contractors',
                    style: 'tableText'
                }, {
                    text: 'UP',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Underpinning Services',
                    style: 'tableText'
                }, {
                    text: 'SE',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Structural Engineers',
                    style: 'tableText'
                }],
                [{
                    text: 'CJ',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Carpenters & Joiners',
                    style: 'tableText'
                }, {
                    text: 'GL',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Glass Merch/Glazier',
                    style: 'tableText'
                }, {
                    text: 'PC',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Pest Control',
                    style: 'tableText'
                }, {
                    text: 'TL',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Tile Layers-Wall/Floor',
                    style: 'tableText'
                }],
                [{
                    text: 'CM',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Cabinet Makers',
                    style: 'tableText'
                }, {
                    text: 'HM',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Home Maint./Repair',
                    style: 'tableText'
                }, {
                    text: 'PD',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Painters & Decorators',
                    style: 'tableText'
                }, {
                    text: 'TS',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Tilers & Slaters',
                    style: 'tableText'
                }],
                [{
                    text: 'DH',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Damp Houses',
                    style: 'tableText'
                }, {
                    text: 'HR',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'House Restump/Reblock',
                    style: 'tableText'
                }, {
                    text: 'PG',
                    style: "tableBoldTextAlignLeft"
                }, {
                    text: 'Plumbers & Gasfitters',
                    style: 'tableText'
                }, {}, {}]
            ]
        }
    };
    return result
}

/**
 * Get the value for the table cell
 * */
function getIt(id) {
    var result;
    result = document.getElementById(id).value.trim();
    if (result === "Choose an item")
    {
        result = ''
    }
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


/**
 *
 *  Split the text content by /n into smaller paragraphs
 *  place number before the paragraphs and display on the pdf
 *  do nothing if the text content is 'NA'
 *  the number is accumulated as the paragraphs increased in the whole file, not just one text content
 *  Fafa
 *
 */

function splitTextArea(text)
{

    var list = [];
    var emptyNotes;
    var thisNotesLength;
    if (text != 'NA')
    {
        var newText = text.replace(/(\r\n|\r|\n)+/g, '$1');

        var paragraphTrim = newText.trim();

        var paragraphs = paragraphTrim.split("\n");
        thisNotesLength = paragraphs.length;
        //console.log(length);

        for (var i = 0; i < thisNotesLength; i++) {
            var text = {
                text:paragraphs[i],
                fontSize:9
            };
            list.push(text);
        }

       var bulletList = {
            start:totalGeneralNotesParagraph,
            ol:list,
            fontSize:9
        };
        totalGeneralNotesParagraph = totalGeneralNotesParagraph + thisNotesLength;

        return bulletList;

    }
    else
    {
        emptyNotes = {
            text:'NA',
            fontSize:9
        };
        return emptyNotes;
    }


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
    var state = document.getElementById('CP_State').value;
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
                                height:31
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
                margin: [40, 0, 10, 0]
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
                                height: 31
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
                margin: [40, 0, 10, 0]
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
    var state = document.getElementById('CP_State').value;
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
 * Cover  Images
 * */
function getCoverImage(id) {
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
           // console.log('just upload');
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
        //image id exists, check whether there is a image on display based on display
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
                    width: 250,
                    margin: [0, 10, 0, 10]
                }

            }
            else
            {
                //console.log('src is just upload');
                //console.log(myImage.width);
                //console.log(myImage.style.width);
                imageSection = {
                    image: myImage.src,
                    height: 250,
                    width: 250,
                    margin: [0, 10, 0, 10]
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
   // console.log("the id " + id);
    var imageNo = Number(currentID)+1;
    var imageID = "CPImage" + currentID;

    var image = document.getElementById(imageID);

    //console.log("the corresponding image id is " + imageID);


    //check if the text id exits
    if (textInput)
    {
        //check if there is a image is on display
        if(image.style.display != 'none')
        {
            description = textInput.value.trim();

            var caption = 'IMG ' + imageNo + " ";
            //console.log(caption);
            result = {
                text:
                [
                    {
                        text:caption,
                        color:'red',
                        bold:'true',
                        fontSize:10
                    },
                    {
                        text:'– ',
                        bold:'true'
                    },
                    {
                        text:description
                    }
                ],
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


/**
 * Get image Stack
 */
function getImageStack()
{
    //check wheter there is images, the able is visisble.
    //if have, return the full stack, otherwise, a empty string is fine.
    result;
    result = {
        stack:[
            getImages()
        ],
        pageBreak:'after'
    };


    return result;
}


/**
 * To get the state of the property, to determin the text 1 in the scope of service and Terms & Conditions. 
 * State SA requires different text 1
 */
function getSSTCText1()
{
    console.log('getSSTCText1');
    var text1;
    var state = document.getElementById('CP_State').value;
    if(state == 'SA')
    {
        text1 = ScopeOfAssessmentSA1;
    }
    else
    {
        text1 = ScopeOfAssessment1;
    }

    return text1;
}

function getTermsAndConditionsP1()
{
    console.log('getSSTCText1');
    var text1;
    var state = document.getElementById('CP_State').value;
    if(state == 'SA')
    {
        text1 = ConditionsSA1;
    }
    else
    {
        text1 = Conditions1;
    }

    return text1;
}