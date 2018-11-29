/**
 * Created by Cindy Huo on 15/01/18.
 */


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
    if (result == "")
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
            fillColor: '#FFFFFF',
            border: [false, false, false, false],
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
    var state = document.getElementById('customer_state').value;
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
                                text:'\nNSW Nominated Architect B. Inwood Reg, No. 7108 \n\n © COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
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
                margin: [40, -9, 10, 0]
            };
            return result;
        } else {
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
                                text: '© COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 22, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]

                    ]
                },
                layout: 'noBorders',
                margin: [40, -9, 10, 0]
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
 * Determine the front page footer
 * 1st. determine it is in final or preview mode
 * 2nd. if it is in final mode, determine whether it is a NSW report or others.
 */
function determineFrontPageFooter(mode) {
    var result;
    var state = document.getElementById('customer_state').value;
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

/*
    Light border for the table
 */
function lightBorderTable() {
    var layout;
    layout = {
        layout: {
            hLineWidth: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? 1 : 1;
            },
            vLineWidth: function (i, node) {
                return (i === 0 || i === node.table.widths.length) ? 1 : 1;
            },
            hLineColor: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? '#D9D7D7' : '#D9D7D7';
            },
            vLineColor: function (i, node) {
                return (i === 0 || i === node.table.widths.length) ? '#D9D7D7' : '#D9D7D7';
            }
        }
    }

}


/**
 * Add people to the involved table
 */
function addPeople() {
    var table = document.getElementById('DesignConsultationPeopleTable');
    var rowCount = table.rows.length;
    var totalPeople = rowCount - 1;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    //create input for cell1
    var nameInput = document.createElement('INPUT');
    nameInput.setAttribute('class', 'form-control');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('title', 'people');
    nameInput.id = 'DesignConsultationInvolvedPeople' + totalPeople;
    cell1.appendChild(nameInput);

    //create input for cell2
    var textArea = document.createElement('textarea');
    textArea.setAttribute('class', 'form-control');
    textArea.setAttribute('title', 'description');
    textArea.id = 'DesignConsultationInvolvedDescription' + totalPeople;
    cell2.appendChild(textArea);
}