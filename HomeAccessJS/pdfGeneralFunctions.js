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
                layout: 'noBorders',
                margin: [40, 0, 10, 0],
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
                }
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
    if (mode === 'preview') {
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
    if (mode === 'final' || mode === 'save') {
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

//Get all images and pdfs.
function getImagePDF() {
    var data = [],
        row = [],
        tdCount = 1,
        imgContent = $('#HA_ImgsContents div'),
        pdfContent = $('#HA_PdfContents div'),
        img, imgSrc;

    for (var i = 0; i < imgContent.length; i++) {
        img = imgContent.eq(i).children('img');

        if (img.attr('src').includes("photos/"))
            imgSrc = convertImgToBase64(img.get(0));
        else {
            imgSrc = img.attr('src');
        }
        row.push({
            stack: [
                {
                    image: imgSrc,
                    width: 150,
                    height: 150
                },
                {
                    text: $(imgContent.eq(i).children('input')).val()
                }
            ]
        });
//        console.log($(imgContent.eq(i).children('input')).val());
        tdCount++;
        if (tdCount === 3) {
            data.push(row);
            tdCount = 1;
            row = [];
        }
    }
    if (tdCount === 2) {
        row.push({});
        data.push(row);
    }

    //    console.log(data);
    row = [];
    if (tdCount !== 1)
        tdCount = 1;
    for (i = 0; i < pdfContent.length; i++) {
        img = pdfContent.eq(i).children('img');

        if (img.attr('src').includes("photos/"))
            imgSrc = convertImgToBase64(img.get(0));
        else {
            imgSrc = img.attr('src');
        }

        row.push({
            stack: [
                {
                    image: imgSrc,
                    width: 150,
                    height: 150
                },
                {
                    text: $(pdfContent.eq(i).children('input')).val()
                }
            ]
        });
        tdCount++;
        if (tdCount === 3) {
            data.push(row);
            tdCount = 1;
            row = [];
        }
    }
    if (tdCount === 2) {
        row.push({});
        data.push(row);
    }
//    console.log(data);
    return data;
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
            var cellElement = $(this).get(0).firstElementChild;
            //console.log(cellString);
            switch (cellElement.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    row.push({
                        text: $(cellElement).text(),
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
                    row.push({
                        text: $(cellElement).find("option:selected").text(),
                        alignment: 'center'
                    });
                    break;
                case 'INPUT':
                    //                console.log($(cellString).val());
                    //Each row only has 10 column. If more than 10 then create new row.
                    if (tdCount == 11) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                        alignment: 'center'
                    });
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
        colSpan: 10,
        text: $('#HA_DivFaultSummary').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

    //Get Fault Summary table.
    var tableTr = $('#Table_FalSummary tr');

    //Start from 1 because the first row is caption in table.
    //Loop all tr except first row.
    for (var i = 1; i < tableTr.length; i++) {
        //Loop all child elements in tr.
        $(tableTr[i]).children().each(function () {
            //Get element in td.
            var cellElement = $(this).get(0).firstElementChild;
            //console.log(cellString);
            switch (cellElement.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    //Each row only has 12 column. If more than 12 then create new row.
                    if (tdCount == 11) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }

                    row.push({
                        text: $(cellElement).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    //console.log($(cellString).find("option:selected").text());
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'INPUT':
                    //                console.log($(cellString).val());
                    //Each row only has 12 column. If more than 12 then create new row.
                    if (tdCount == 11) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 12 columns.
    for (var i = tdCount; i < 11; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table cells data from Health Check&Safety Check.
function getTableData_HSCheck() {
    var data = [],
        row = [],
        tdCount = 1;

    data.push([{
        colSpan: 4,
        text: $('#HA_DivHSCheck').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}]);

    var tableTr = $('#Table_HSCheck tr');
    //console.log(tableTr);
    for (var i = 1; i < tableTr.length; i++) {
        $(tableTr[i]).children().each(function () {
            var cellElement = $(this).get(0).firstElementChild;
            //console.log(cellElement);
            switch (cellElement.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }

                    row.push({
                        text: $(cellElement).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'INPUT':
                    //                console.log($(cellString).val());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 4 columns.
    for (var i = tdCount; i < 5; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table cells data from Repairs & Mainentance Check.
function getTableData_RMCheck() {
    var data = [],
        row = [],
        tdCount = 1;

    //First row.
    data.push([{
        colSpan: 4,
        text: $('#HA_DivRMCheck').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}]);

    //Second row.
    data.push([{
        colSpan: 4,
        text: $('#Strong_RMStructure').text(),
        bold: true,
        fontSize: 12
    }, {}, {}, {}]);

    var tableTr = $('#Table_RMCheck_S tr');

    for (var i = 1; i < tableTr.length; i++) {
        $(tableTr[i]).children().each(function () {
            var cellElement = $(this).get(0).firstElementChild;
            //console.log(cellElement);
            switch (cellElement.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }

                    row.push({
                        text: $(cellElement).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    //                console.log($(cellString).val());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'INPUT':
                    //                console.log($(cellString).val());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 4 columns.
    for (var i = tdCount; i < 5; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);
    //console.log(data);

    data.push([{
        colSpan: 4,
        text: $('#Strong_RMOther').text(),
        bold: true,
        fontSize: 12
    }, {}, {}, {}]);

    tableTr = $('#Table_RMCheck_O tr');
    row = [];
    tdCount = 1;

    for (i = 1; i < tableTr.length; i++) {
        $(tableTr[i]).children().each(function () {
            var cellElement = $(this).get(0).firstElementChild;
            //console.log(cellElement);
            switch (cellElement.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'INPUT':
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 4 columns.
    for (var i = tdCount; i < 5; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);

    return data;
}

//Get all table cells data from Energy & Wastage Check
function getTableData_EWCheck() {
    var data = [],
        row = [],
        tdCount = 1;

    data.push([{
        colSpan: 4,
        text: $('#HA_DivEWCheck').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}]);

    var tableTr = $('#Table_EWCheck tr');
    //console.log(tableTr);
    for (var i = 1; i < tableTr.length; i++) {
        $(tableTr[i]).children().each(function () {
            var cellElement = $(this).get(0).firstElementChild;
            //console.log(cellElement);
            switch (cellElement.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }

                    row.push({
                        text: $(cellElement).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'INPUT':
                    //                console.log($(cellString).val());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 4 columns.
    for (var i = tdCount; i < 5; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table ccells dat from Field Notes
function getTableData_FieldNotes() {
    var data = [],
        row = [],
        tdCount = 1;

    data.push([{
        colSpan: 4,
        text: $('#HA_DivFieldNotes').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}]);

    var tableTr = $('#Table_FieldNotes tr');
    //console.log(tableTr);
    for (var i = 0; i < tableTr.length; i++) {
        $(tableTr[i]).children().each(function () {
            var cellElement = $(this).get(0).firstElementChild;
            //console.log(cellElement);
            switch (cellElement.tagName) {
                case 'LABEL':
                    //                console.log($(cellString).text());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).text(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
                case 'SELECT':
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'TEXTAREA':
                    //                console.log($(cellString).val());
                    //Each row only has 4 column. If more than 4 then create new row.
                    if (tdCount == 5) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                        alignment: 'center',
                        bold: true
                    });
                    break;
            }
            tdCount++;
        });
    }
    //Fill with empty colums, if the row does not have 4 columns.
    for (var i = tdCount; i < 5; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table ccells dat from Health & Safety Concerns
function getTableData_HSConcerns() {
    var data = [],
        row = [],
        tdCount = 1;

    //First row.
    data.push([{
        colSpan: 5,
        text: $('#HA_DivHSConcerns').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}, {}]);

    var tableTr = $('#C_SolutionTable tr').get();
    //    console.log(tableTr);

    //Second row. Caption
    data.push([{
        text: tableTr[2].children[0].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[1].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[2].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[3].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[4].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }]);

    //Start from third row.
    for (var i = 3; i < tableTr.length; i++) {
        //        $(tableTr[i]).children().each(function () {
        for (var j = 0; j < $(tableTr[i]).children().length; j++) {
            var cellElement = $(tableTr[i]).children().get(j).firstElementChild;
            if (j == 3) {
                cellElement = $(tableTr[i]).children().get(j).children[1];
            }

            switch (cellElement.tagName) {
                case 'SELECT':
                    if (tdCount == 6) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'TEXTAREA':
                    //                console.log($(cellString).val());
                    //Each row only has 5 column. If more than 5 then create new row.
                    if (tdCount == 6) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                    });
                    break;
            }
            tdCount++;
        }

        //        });
    }
    //Fill with empty colums, if the row does not have 4 columns.
    for (var i = tdCount; i < 5; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table ccells dat from Repair & Maintenance
function getTableData_RepairMaintenance() {
    var data = [],
        row = [],
        tdCount = 1;

    //First row.
    data.push([{
        colSpan: 5,
        text: $('#HA_DivRMaintenance').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}, {}]);

    var tableTr = $('#M_SolutionTable tr').get();
    //    console.log(tableTr);

    //Second row. Caption
    data.push([{
        text: tableTr[2].children[0].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[1].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[2].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[3].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }, {
        text: tableTr[2].children[4].innerHTML,
        bold: true,
        fontSize: 12,
        alignment: 'center'
    }]);

    //Start from third row.
    for (var i = 3; i < tableTr.length; i++) {
        //        $(tableTr[i]).children().each(function () {
        for (var j = 0; j < $(tableTr[i]).children().length; j++) {
            var cellElement = $(tableTr[i]).children().get(j).firstElementChild;
            if (j == 3) {
                cellElement = $(tableTr[i]).children().get(j).children[1];
            }

            switch (cellElement.tagName) {
                case 'SELECT':
                    if (tdCount == 6) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    //console.log($(cellElement));
                    row.push($(cellElement).find("option:selected").text());
                    break;
                case 'TEXTAREA':
                    //Each row only has 5 column. If more than 5 then create new row.
                    if (tdCount == 6) {
                        tdCount = 1;
                        data.push(row);
                        row = [];
                    }
                    row.push({
                        text: $(cellElement).val(),
                    });
                    break;
            }
            tdCount++;
        }
        //        });
    }
    //Fill with empty colums, if the row does not have 4 columns.
    for (var i = tdCount; i < 5; i++) {
        row.push({});
    }
    //Fill in last row.
    data.push(row);
    //console.log(data);
    return data;
}

//Get all table ccells dat from Energy Efficiency
function getTableData_EnergyEfficiency() {
    var data = [],
        row = [],
        tdCount = 1;

    //First row.
    data.push([{
        colSpan: 5,
        text: $('#HA_DivEnergyEfficiency').attr('data-title'),
        style: 'pageSubHeader',
        alignment: 'left'
    }, {}, {}, {}, {}]);

    var tableTr = $('#E_SolutionTable tr'),
        th = tableTr.children('th'),
        td = tableTr.children('td');

    //Second row. Caption
    for (var i = 0; i < th.length; i++) {
        row.push({
            text: th[i].innerHTML,
            bold: true,
            fontSize: 12,
            alignment: 'center'
        });
    }
    //Add second row.
    data.push(row);
    //Initial row.
    row = [];

    //Skip first td, it is the add button.
    for (i = 1; i < td.length; i++) {
        switch (tdCount) {
            case 1:
                row.push({
                    text: td[i].innerHTML
                });
                break;
            case 2:
                row.push({
                    text: td.eq(i).children('select').find('option:selected').text()
                });
                break;
            default:
                row.push({
                    text: td.eq(i).children('textarea').val()
                });
                break;
        }
        tdCount++;
        if (tdCount == 6) {
            //When fill in 5 column change new row.
            data.push(row);
            row = [];
            tdCount = 1;
        }
    }
    //    console.log(data);
    return data;
}

//Create key Explaination data.
function getKeyExplaination() {
    var data = [];
    data.push([{
        text: 'KEY',
        style: 'pageSubHeader'
    }, '√', 'No visible Fault', 'X', 'Maintenance Item', 'XX', 'Serious Fault', '--', 'Not Applicable']);

    return data;
}

//Get all table cells data from Attachments.
function getTableData_Attachments() {
    var data = [],
        row = [],
        tdCount = 1;

    var tableTd = $('#Table_attachments td');

    for (var i = 0; i < tableTd.length; i++) {
        row.push({
            text: tableTd.eq(i).children('select').attr('title')
        }, {
            text: (tableTd.eq(i).children('select').val() === '√') ? '√' : ''
        });
        tdCount++;
        if (tdCount === 4) {
            data.push(row);
            tdCount = 1;
            row = [];
        }
    }
    return data;
}



function convertImgToBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var src = canvas.toDataURL("image/png");

    return src;
}
