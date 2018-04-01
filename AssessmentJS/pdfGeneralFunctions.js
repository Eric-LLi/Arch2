/**
 * Created by Fafa on 10/1/18.
 */

var totalParagraphs = 1;

/**
 * Draw the key table - BetterTENG
 * */
function resetTotalParagraphs()
{
    totalParagraphs = 1;
}
function getKeyTable() {
    var result;
    result = {
        table: {
            widths: [13, '*', 13, '*'],
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
        layout: 'noBorders'
    };
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
 * Make a gap between the elements
 * */
function makeAGap() {
    var result;
    result = {text: ' '};
    return result;
}


/**
 * Draw the Assessment NotesTable
 */
function drawNotesTable(tableID,limitationSelectName,limitationNoteName,majorTextArea,majorRecommendationID,minorTextArea,minorRecommendationID,generalNote)
{
    var body = [];
    var table = document.getElementById(tableID);
    var majorRecommendation = document.getElementById(majorRecommendationID).value;

    var minorRecommendation = document.getElementById(minorRecommendationID).value;
    var rowCount = table.rows.length;
    var limitationNo = rowCount - 9;
    //console.log(limitationNo);
    //1. get the first row
    var a = [
        {
            text:'Access Limitation',
            style:'tableHeader'
            //alignment:'center'

        },
        {
            text:'Access Notes',
            style:'tableHeader'
            //alignment:'center'
        }
    ];
    body.push(a);


    //2. get the limitation data
    for (var i=0;i<limitationNo;i++)
    {
        //console.log(i);
        var selectID = limitationSelectName + i;
        var selectedValue = document.getElementById(selectID).value;
        //console.log(selectedValue);
        var noteID = limitationNoteName + i;
        var note = document.getElementById(noteID).value;
        var b = [
            {
                text:selectedValue,
                style:'tableText'
            },
            {
                text:note,
                style:'tableText'
            }
        ];
        body.push(b);

    }

    //3.get the third header--> row major founds
    var c = [
        {
            text:'Major and Serious Structural Defects Found:',
            style:'tableHeader',
            colSpan: 2
        }

    ];
    body.push(c);

    var d = [
        {
            text:splitTextArea(getTextArea(majorTextArea)),
            style:'tableText',
            colSpan:2
        }
    ];
    body.push(d);

    //check major Recommendation value
    if (majorRecommendation.trim() === "")
    {
        majorRecommendation = "NA"
    }

    var e = [
        {
            text:"Professional & Trade Recommendations:",
            style:'tableHeader',
            color: 'black'

        },
        {
            text:majorRecommendation,
            style:'tableText'
        }
    ];
    body.push(e);



    var f = [
        {
            text:'Maintenance Items and Minor Defects Found:',
            style:'tableHeader',
            colSpan:2
        }
    ];
    body.push(f);

    var g = [
        {
            text:splitTextArea(getTextArea(minorTextArea)),
            style:'tableText',
            colSpan:2
        }
    ];
    body.push(g);


    //check minor Recommendation value
    if (minorRecommendation.trim() === "")
    {
        minorRecommendation = "NA"
    }
    var h = [
        {
            text:"Professional & Trade Recommendations:",
            style:'tableHeader',
            color: 'black'

        },
        {
            text:minorRecommendation,
            style:'tableText'
        }
    ];

    body.push(h);

    var i =[
        {
            text:'General Notes',
            style:'tableHeader',
            colSpan:2
        }
    ];
    body.push(i);

    var j = [
        {
            colSpan:2,
            text:splitTextArea(getTextArea(generalNote)),
            style:'tableText'
        }
    ];
    body.push(j);








    //final the table
    PDFtable = {
        table: {
            widths: ['*', '*'],
            body: body
        }
    };

    return PDFtable;
}


/*
    1st determine whether it is final mode or preview mode
    2md determine whether it is a NSW report if it is the final mode
 */
function determineFooter(mode)
{
    var result;
    var state = document.getElementById('9').value;
    if (mode == 'final' || mode == 'save' )
    {
        if (state === 'NSW')
        {
            result = {
                table:{
                    widths: ['auto', 350],
                    body:[
                        [
                            {
                                rowSpan:2,
                                image:footerImage,
                                alignment:'left',
                                width:80,
                                height:34
                            },
                            {
                                text:'\nNSW Nominated Architect B. Inwood Reg, No. 7108',
                                alignment:'left',
                                fontSize:7,
                                margin:[0,5,0,0],
                                color:'#8E8B8B'
                            }
                        ],
                        [
                            '',
                            {
                                text:'© COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                                alignment:'left',
                                fontSize:7,
                                margin:[0,0,0,0],
                                color:'#8E8B8B'
                            }
                        ]

                    ]
                },
                layout:'noBorders',
                margin: [40, 0, 10, 0]
            };
            return result;
        }
        else
        {
            result = {
                table:{
                    widths: ['auto', 350],
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
                                margin:[0,25,0,0],
                                color:'#8E8B8B'
                            }
                        ]

                    ]
                },
                layout:'noBorders',
                margin: [40, 0, 10, 0]
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
    var state = document.getElementById('9').value;
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
                                height:30
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
                margin: [40, -25, 10, 0]
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
                margin: [40, -25, 10, 0]
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
            alignment: 'center'
        };
        return result;
    }
}



/*
 function to get the text content from the text area for further use
 if text area is empty, replace with 'NA'
 */
function getTextArea(id)
{
    var text = document.getElementById(id).value;
    if (text.trim() == "")
    {
        text = 'NA'
    }
    return text;
}


/**
 * function to get text from input
 */
function getText(id)
{
    var myText = document.getElementById(id).value.trim();
    if (myText == '') {
        myText = ''
    }
    return myText;
}


/*
 Split the text content by /n into smaller paragraphs
 place number before the paragraphs and display on the pdf
 the number is accumulated as the paragraphs increased in the whole file, not just one text content
 Fafa
 */

function splitTextArea(text)
{
    var newParagraphs = '';
    if (text != 'NA')
    {
        var newText = text.replace(/(\r\n|\r|\n)+/g, '$1');
        var paragraphTrim = newText.trim();
        var paragraphs = paragraphTrim.split("\n");
        var length = paragraphs.length;

        for (var i = 0; i < length; i++) {
            var number = totalParagraphs + i;
            newParagraphs += number + '.' + paragraphs[i] + "\n";

        }
        totalParagraphs = totalParagraphs + paragraphs.length;

        return newParagraphs;
    }
    else
    {
        return text;
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

    if (myImage.style.display === "block")
    {
        //has image, check whether it is from database or just upload
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
                height: 120,
                width: 160
            }
        }
        else
        {
            console.log('just upload');
            imageSection = {
                image: myImage.src,
                height: 120,
                width: 160
            }
        }
    }
    else
    {
        //no image at all
        imageSection = {
            text:""
        }
    }

    return imageSection;

}


