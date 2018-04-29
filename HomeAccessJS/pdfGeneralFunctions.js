/**
 * Created by Fafa on 21/3/18.
 */
var totalImagesCaptions = 1;
var totalGeneralNotesParagraph = 1;

function resetTotalCounting() {
    totalImagesCaptions = 1;
    totalGeneralNotesParagraph = 1;
}
/**
 * Determine the front page footer
 * 1st. determine it is in final or preview mode
 * 2nd. if it is in final mode, determine whether it is a NSW report or others.
 */
function determineFrontPageFooter(mode) {
    var result;
    var state = document.getElementById('HA_State').value;
    if (mode === 'final' || mode == 'save') {
        if (state === 'NSW') {
            result = {
                table: {
                    body: [
                        [
                            {
                                image: footerImage,
                                alignment: 'left',
                                width: 80,
                                height: 34
                            }
                            , {
                                text: '\nNSW Nominated Architect B. Inwood Reg, No. 7108',
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 10, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]
                        , [
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
                        ]
                        , [
                            {
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
                            }
                        ]
                    ]
                },
                layout: 'noBorders',
                margin: [40, -25, 0, 0]
            };
            return result;
        } else {
            result = {
                table: {
                    body: [
                        [
                            {
                                image: footerImage,
                                alignment: 'left',
                                width: 80,
                                height: 34
                            }
                        ]
                        , [

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
                        ]
                        , [
                            {
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
                            }
                        ]
                    ]
                },
                layout: 'noBorders',
                margin: [40, -25, 0, 0]
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
/*
 1st determine whether it is final mode or preview mode
 2md determine whether it is a NSW report if it is the final mode
 */
function determineFooter(mode) {
    var result;
    var state = document.getElementById('HA_State').value;
    if (mode === 'final' || mode === 'save') {
        if (state === 'NSW') {
            result = {
                table: {
                    widths: ['auto', 350],
                    body: [
                        [
                            {
                                rowSpan: 2,
                                image: footerImage,
                                alignment: 'left',
                                width: 80,
                                height: 34
                            }
                            , {
                                text: '\nNSW Nominated Architect B. Inwood Reg, No. 7108',
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 5, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]
                        , [
                            ''
                            , {
                                text: '© COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 0, 0, 0],
                                color: '#8E8B8B'
                            }
                        ]

                    ]
                },
                layout: 'noBorders',
                margin: [40, 0, 10, 0]
            };
            return result;
        } else {
            result = {
                table: {
                    widths: ['auto', 350],
                    body: [
                        [
                            {
                                // rowSpan:2,
                                image: footerImage,
                                alignment: 'left',
                                width: 80,
                                height: 34
                            }
                            , {
                                text: '© COPYRIGHT 2016 ARCHICENTRE AUSTRALIA, a division of ARCHIADVISORY PTY LTD ABN 51 614 712 613',
                                alignment: 'left',
                                fontSize: 7,
                                margin: [0, 25, 0, 0],
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
//Get all table cells data from Construction Summary
function getTableData_CS() {
    var data = [],
        row = [],
        tdCount = 1;

    //First push caption. span 10 column.
    data.push([{
        colSpan: 10,
        text: $('#HA_DivConstructionSummary').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    //Get all Construction Summary table tr.
    var tableTr = $('#Table_CSummary tr').get();

    //Start from 1 because the first row is caption in table.
    //Loop all tr except first row.
    for (var i = 1; i < tableTr.length; i++) {
        //Loop all elements in each tr.
        $(tableTr[i]).children().each(function () {
            //Get first element in each td.
            var cellString = $(this).get(0).firstElementChild;
            //console.log(cellString);
            switch (cellString.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    row.push({
                        text: $(cellString).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    //                console.log($(cellString).val());
                    //Each row only has 10 column. If more than 10 then create new row.
                    if (tdCount == 11) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push($(cellString).val());
                    break;
                case 'INPUT':
                    //                console.log($(cellString).val());
                    //Each row only has 10 column. If more than 10 then create new row.
                    if (tdCount == 11) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push($(cellString).val());
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 10 columns.
    for (var i = tdCount; i < 11; i++) {
        row.push({});
    }

    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table cells data from Fault Summary
function getTableData_FS() {
    var data = [],
        row = [],
        tdCount = 1;

    //First push caption. span 12 column.
    data.push([{
        colSpan: 12,
        text: $('#HA_DivFaultSummary').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    //Get Fault Summary table.
    var tableTr = $('#Table_FalSummary tr');

    //Start from 1 because the first row is caption in table.
    //Loop all tr except first row.
    for (var i = 1; i < tableTr.length; i++) {
        //Loop all child elements in tr.
        $(tableTr[i]).children().each(function () {
            //Get element in td.
            var cellString = $(this).get(0).firstElementChild;
            //console.log(cellString);
            switch (cellString.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    //Each row only has 12 column. If more than 12 then create new row.
                    if (tdCount == 13) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }

                    row.push({
                        text: $(cellString).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    //                console.log($(cellString).val());
                    //Each row only has 12 column. If more than 12 then create new row.
                    if (tdCount == 13) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    //console.log($(cellString).find("option:selected").text());
                    row.push($(cellString).find("option:selected").text());
                    break;
                case 'INPUT':
                    //                console.log($(cellString).val());
                    //Each row only has 12 column. If more than 12 then create new row.
                    if (tdCount == 13) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push($(cellString).val());
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 12 columns.
    for (var i = tdCount; i < 13; i++) {
        row.push({});
    }

    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table cells data from Health Check&Safety Check.

