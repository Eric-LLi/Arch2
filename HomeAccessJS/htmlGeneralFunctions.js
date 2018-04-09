/**
 * Created by Fafa on 21/3/18......
 */

/*eslint-env browser, jquery*/
/*jslint plusplus: true */
/*jslint browser: true*/
/*global $, jQuery*/

//Store all select_ID need 'KEY description'
var getSelectID = [
    "Fault_Trip",
    "Fault_Crack",
    "Fault_Fire",
    "Fault_Stumps",
    "Fault_Health",
    "Fault_Illegal",
    "Fault_Electrics",
    "Fault_Timber",
    "Fault_Security",
    "Fault_Damp",
    "Fault_Roof",
    "Fault_Drainage",
    "Check_Damp",
    "Check_GlazingHazards",
    "Check_Squalor",
    "Check_Hoarding",
    "Check_Vermin",
    "Check_Heating",
    "Check_FlammableRisks",
    "Check_ElectricalHazards",
    "Check_SlipHazards",
    "Check_SecurityLocks",
    "Check_TripHazards",
    "Check_SmokeAlarms",
    "Check_WCdoor",
    "Check_HealthOther",
    "Check_Roof",
    "Check_Ceiling",
    "Check_Walls",
    "Check_Floor",
    "Check_Gutters",
    "Check_Decks",
    "Check_Windows",
    "Check_Fences",
    "Check_Surfaces",
    "Check_IllegalBuildingWork",
    "Check_Plumbing",
    "Check_HotwaterSystem",
    "Check_DualFlushToilet",
    "Check_WindowSeals",
    "Check_DraughtProofExhaustFan",
    "Check_Pelmets",
    "Check_LowFlowShowerHead",
    "Check_DoorSeals",
    "Check_WatertightCistern",
    "Check_Electrical",
    "Check_WatertightTaps",
    "Check_ShadedWestWindows",
    "Check_CeilingInsulation",
    "Check_LowEnergyLightGlobes",
    "Check_SolarPanels",
    "Check_SolarHWS",
    "Check_WaterTank",
    "Check_GreyWaterRecyclingSystem"
];

//Store 'key description' for "select"
var keySelectOption = [
    {
        name: '√',
        value: 'No visible significant defect'
    },
    {
        name: 'X',
        value: 'Maintenance Item or Minor Defect'
    },
    {
        name: 'XX',
        value: 'Major Defect'
    },
    {
        name: 'U',
        value: 'Unknown/Inaccessible/Not tested/Not visible'
    },
    {
        name: 'NA',
        value: 'Not applicable, no such item'
    }
];

//Store Category in Architect's Solution
var C_category = [
    "Asbestos",
    "Architect's comment",
    "Bathroom Modifications",
    "Security",
    "Electrical",
    "Energy Efficiency",
    "Glazing",
    "Hoarding",
    "Hot Water Service",
    "Platform Steps",
    "Ramp",
    "Safety",
    "Smoke Alarms",
    "Steps",
    "Taps",
    "WC Door"
];

//Store Maintenance Category
var M_category = [
    "Energy Efficiency",
    "Fencing",
    "Government",
    "Gutters",
    "Hot Water Service",
    "Pest Inspection",
    "Vents"
];

//Store 'Trade' in Architect's Solution
var trade = [
    "AR",
    "BC",
    "BR",
    "CC",
    "CJ",
    "CM",
    "DH",
    "DR",
    "EL",
    "EX",
    "FC",
    "GL",
    "HM",
    "HR",
    "IC",
    "LG",
    "LO",
    "PC",
    "PD",
    "PG",
    "PL",
    "PV",
    "RC",
    "SE",
    "ST",
    "TL",
    "UP"
];

//Store 'Concerns CODE' in Architect's Solution
var C_Code = [
    "A1",
    "A2",
    "B2",
    "B3",
    "D1",
    "D2",
    "D3",
    "E1",
    "E2",
    "E5",
    "E3",
    "FC",
    "G1",
    "G2",
    "H1",
    "J1",
    "R1",
    "R2",
    "R3",
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "T1",
    "W1",
    "X15"
];

//Store 'Maintenance CODE' in Architect's Solution
var M_Code = [
    "F1",
    "G3",
    "GOV1",
    "GOV2",
    "H2",
    "H3",
    "P1",
    "V1",
    "X1",
    "X2",
    "X4",
    "X6",
    "X7",
    "X8",
    "X10",
    "X11",
    "X14"
];

//Store Energy Erriciency CODE
var E_Code = [
    "X3",
    "X5",
    "X9",
    "X12",
    "X13",
    "X16"
];

//Add property "option"
function createP_Option(nameid) {
    "use strict";
    var i,
        optionID = document.getElementById(nameid),
        opt = document.createElement("option");

    //Add 5 options
    for (i = 0; i < keySelectOption.length; i++) {
        //add option name
        opt.innerHTML = keySelectOption[i].name;
        //add option value
        opt.setAttribute("value", keySelectOption[i].value);
        //add to html
        optionID.appendChild(opt);
        opt = document.createElement("option");
    }
}

//Add Solution 'option'
function createS_Option() {
    "use strict";
    //Get 'select' category
    var selectCateID = document.getElementById("C0_category"),
        selectM_CateID = document.getElementById("M0_category"),

        //Get 'select' code
        selectCodeID = document.getElementById("C0_code"),
        selectM_CodeID = document.getElementById("M0_code"),
        selectE_CodeID = document.getElementById("E0_code"),

        //Get 'select' trade
        selectTradeID = document.getElementById("C0_tradeSelect"),
        selectM_TradeID = document.getElementById("M0_tradeSelect"),
        selectE_TradeID = document.getElementById("E0_tradeSelect"),

        C_opt = document.createElement("option"),
        M_opt = document.createElement("option"),
        E_opt = document.createElement("option"),
        i;

    //Add category option
    for (i = 0; i < C_category.length; i++) {
        //Add category name
        C_opt.innerHTML = C_category[i];
        //Add category value
        C_opt.setAttribute("value", C_category[i]);
        //Add to html
        selectCateID.appendChild(C_opt);
        C_opt = document.createElement("option");
    }

    //Add M_category option
    for (i = 0; i < M_category.length; i++) {
        //Add category name
        M_opt.innerHTML = M_category[i];
        //Add category value
        M_opt.setAttribute("value", M_category[i]);
        //Add to html
        selectM_CateID.appendChild(M_opt);
        M_opt = document.createElement("option");
    }

    //Add Concern CODE option
    for (i = 0; i < C_Code.length; i++) {
        C_opt = document.createElement("option");

        C_opt.innerHTML = C_Code[i];
        C_opt.setAttribute("value", C_Code[i]);
        selectCodeID.appendChild(C_opt);

        C_opt = document.createElement("option");
    }

    //Add Maintenance CODE option
    for (i = 0; i < M_Code.length; i++) {
        M_opt = document.createElement("option");

        M_opt.innerHTML = M_Code[i];
        M_opt.setAttribute("value", M_Code[i]);
        selectM_CodeID.appendChild(M_opt);

        M_opt = document.createElement("option");
    }
    //Add Energy CODE option
    for (i = 0; i < E_Code.length; i++) {
        E_opt = document.createElement("option");
        E_opt.innerHTML = E_Code[i];
        E_opt.setAttribute("value", E_Code[i]);
        selectE_CodeID.appendChild(E_opt);

        E_opt = document.createElement("option");
    }

    //Add Concern Trade option
    for (i = 0; i < trade.length; i++) {

        C_opt.innerHTML = trade[i];
        M_opt.innerHTML = trade[i];
        E_opt.innerHTML = trade[i];

        C_opt.setAttribute("value", trade[i]);
        M_opt.setAttribute("value", trade[i]);
        E_opt.setAttribute("value", trade[i]);

        selectTradeID.appendChild(C_opt);
        selectM_TradeID.appendChild(M_opt);
        selectE_TradeID.appendChild(E_opt);

        C_opt = document.createElement("option");
        M_opt = document.createElement("option");
        E_opt = document.createElement("option");
    }
}

//Load property select data
function loadPropertySelectData() {
    "use strict";
    var i;
    //depend on how many select tap.
    for (i = 0; i < getSelectID.length; i++) {
        createP_Option(getSelectID[i]);
    }
}

//Load solution select data
function loadSolutionSelectData() {
    "use strict";
    createS_Option();
}

//Construction Summary Add button
function button_ConAdd() {
    "use strict";

    document.getElementById("Button_ConAdd").onclick = function () {
        var newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            table = document.getElementById("Table_CSummary"),
            lastTr = document.getElementById("Table_CSummary").getElementsByTagName("tr")[table.rows.length - 1],
            lastRowCount = lastTr.childElementCount;

        if (lastRowCount === 2) {
            newTd1.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
            newTd2.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
            lastTr.appendChild(newTd1);
            lastTr.appendChild(newTd2);

        } else {
            newTd1.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
            newTd2.innerHTML = "<input type=\"text\" class=\"form-control\"/>";

            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            table.appendChild(newTr);
        }
    };
}

//Fault Summary Add button
function button_FaultAdd() {
    "use strict";

    //    i = 0;
    var newItemCount = 1;

    document.getElementById("Button_FaultAdd").onclick = function () {

        var table = document.getElementById("Table_FalSummary"),
            newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            lastTr = document.getElementById("Table_FalSummary").getElementsByTagName("tr")[table.rows.length - 1],
            newItemID = "newFalItem_" + newItemCount,
            lastRowCount = lastTr.childElementCount;

        newTd1.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
        newTd2.innerHTML = "<select id=\"" + newItemID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

        if (lastRowCount === 2) {

            lastTr.appendChild(newTd1);
            lastTr.appendChild(newTd2);

            //            i = 0;
        } else {

            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            table.appendChild(newTr);

            //            i = 1;
        }

        createP_Option(newItemID);

        newItemCount++;
    };
}

//Health Check & Safety check Add button
function button_HealthCheckAdd() {
    "use strict";

    var newItemCount = 1;

    document.getElementById("Button_HSCheckAdd").onclick = function () {

        var table = document.getElementById("Table_HSCheck"),
            newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
            newItemID = "newHSCheckItem_" + newItemCount,
            lastRowCount = lastTr.childElementCount;

        newTd1.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
        newTd2.innerHTML = "<select id=\"" + newItemID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

        if (lastRowCount === 2) {

            lastTr.appendChild(newTd1);
            lastTr.appendChild(newTd2);
        } else {

            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            table.appendChild(newTr);
        }

        createP_Option(newItemID);
        newItemCount++;
    };
}

//Repairs Check Add button
function button_RepairsCheckAdd() {
    "use strict";
    var newItemCount = 1,
        newItemCount2 = 1;

    //First add button
    document.getElementById("Button_RMCheckAdd_S").onclick = function () {

        var table = document.getElementById("Table_RMCheck_S"),
            newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
            newItemID = "newRMCheckSItem_" + newItemCount,
            lastRowCount = lastTr.childElementCount;

        newTd1.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
        newTd2.innerHTML = "<select id=\"" + newItemID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

        if (lastRowCount === 2) {

            lastTr.appendChild(newTd1);
            lastTr.appendChild(newTd2);
        } else {

            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            table.appendChild(newTr);
        }

        createP_Option(newItemID);
        newItemCount++;
    };

    //Second add button
    document.getElementById("Button_RMCheckAdd_O").onclick = function () {

        var table = document.getElementById("Table_RMCheck_O"),
            newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
            newItemID = "newRMCheckOItem_" + newItemCount2,
            lastRowCount = lastTr.childElementCount;

        newTd1.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
        newTd2.innerHTML = "<select id=\"" + newItemID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

        if (lastRowCount === 2) {
            lastTr.appendChild(newTd1);
            lastTr.appendChild(newTd2);
        } else {
            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            table.appendChild(newTr);
        }

        createP_Option(newItemID);
        newItemCount2++;
    };
}

//Energy Check Add button
function button_EnergyCheckAdd() {
    "use strict";

    var newItemCount = 1;

    document.getElementById("Button_EWCheckAdd").onclick = function () {

        var table = document.getElementById("Table_EWCheck"),
            newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
            newItemID = "newEWCheckItem_" + newItemCount,
            lastRowCount = lastTr.childElementCount;

        newTd1.innerHTML = "<input type=\"text\" class=\"form-control\"/>";
        newTd2.innerHTML = "<select id=\"" + newItemID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

        if (lastRowCount === 2) {

            lastTr.appendChild(newTd1);
            lastTr.appendChild(newTd2);
        } else {

            newTr.appendChild(newTd1);
            newTr.appendChild(newTd2);
            table.appendChild(newTr);
        }

        createP_Option(newItemID);
        newItemCount++;
    };
}


/*
Count new row.
C means Health & Safety Concerns page
M means Repair & Maintenance page
E means Energy Efficiency - Optional page
*/
var C_count = 1,
    M_count = 1,
    E_count = 1,
    //Add_button event
    button_AddSolutionItem = function (id) {
        "use strict";

        //Decide which button C,M or E
        var btn_id = id.substr(0, 1),

            //Get corresponding table
            table = document.getElementById(btn_id + "_SolutionTable"),
            //Create new tr and td
            newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            newTd3 = document.createElement("td"),
            newTd4 = document.createElement("td"),
            newTd5 = document.createElement("td"),
            count,
            category,
            code;

        //Decide which count, category and code to use.
        switch (btn_id) {
            case "C":
                count = C_count;
                category = C_category;
                code = C_Code;
                break;
            case "M":
                count = M_count;
                category = M_category;
                code = M_Code;
                break;
            case "E":
                count = E_count;
                category = "";
                code = E_Code;
                break;
        }

        //Set each element id
        var newCateSelectID = btn_id + count + "_category",
            newCodeSelectID = btn_id + count + "_code",
            newCommondTextID = btn_id + count + "_commentText",
            newTradeSelectID = btn_id + count + "_tradeSelect",
            newTradeTextID = btn_id + count + "_mirrorText",
            newTradeCleanID = btn_id + count + "_mirrorClean",
            newCostID = btn_id + count + "_costText";


        var text = "<select id=\"" + newCateSelectID + "\" class=\"form-control\"><option value=\"-1\" disabled selected>Choose an item</option></select>";

        if (btn_id !== "E")
            newTd1.innerHTML = text;
        else
            newTd1.innerHTML = "Enenrgy Efficiency";

        text = "<select id=\"" + newCodeSelectID + "\" class=\"form-control\"><option value=\"-1\" disabled selected>Internal use</option></select>";
        newTd2.innerHTML = text;

        text = "<textarea id=\"" + newCommondTextID + "\" placeholder=\"In addition to preset text only...\" class=\"form-control\"></textarea>";
        newTd3.innerHTML = text;

        text = "<select id=\"" + newTradeSelectID + "\" class=\"form-control\" onchange=\"tradeOnchange(this.id);\"><option value=\"-1\" disabled selected>--</option></select>" +
            "<textarea disabled class=\"form-control\" id=\"" + newTradeTextID + "\"></textarea>" +
            "<button class=\"btn btn-danger w-100\" id=\"" + newTradeCleanID + "\" onclick=\"tradeClear(this.id)\">Clear</button>";
        newTd4.innerHTML = text;

        text = "<textarea id=\"" + newCostID + "\" class=\"form-control\"</textarea>";
        newTd5.innerHTML = text;

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTr.appendChild(newTd4);
        newTr.appendChild(newTd5);
        table.appendChild(newTr);

        //Create option
        var C_opt = document.createElement("option"),
            //Get "select" category
            selectCateID = document.getElementById(newCateSelectID),
            //Get 'select' code
            selectCodeID = document.getElementById(newCodeSelectID),
            //Get 'select' trade
            selectTradeID = document.getElementById(newTradeSelectID),
            i;

        //Load category option
        for (i = 0; i < category.length; i++) {
            //Add category name
            C_opt.innerHTML = C_category[i];
            //Add category value
            C_opt.setAttribute("value", C_category[i]);
            //Add to html
            selectCateID.appendChild(C_opt);

            C_opt = document.createElement("option");
        }

        //Load CODE option
        for (i = 0; i < code.length; i++) {
            C_opt = document.createElement("option");
            C_opt.innerHTML = C_Code[i];
            C_opt.setAttribute("value", C_Code[i]);
            selectCodeID.appendChild(C_opt);

            C_opt = document.createElement("option");
        }

        //Load Trade option
        for (i = 0; i < trade.length; i++) {
            C_opt = document.createElement("option");
            C_opt.innerHTML = trade[i];
            C_opt.setAttribute("value", trade[i]);

            selectTradeID.appendChild(C_opt);
        }
        switch (btn_id) {
            case "C":
                C_count++;
                break;
            case "M":
                M_count++;
                break;
            case "E":
                E_count++;
                break;
        }
    };

//Solution's trade mirror onchange
var tradeOnchange = function (tid) {
    "use strict";

    //Get corresponding select element
    var selectedValue = document.getElementById(tid).value,
        //Get mirror textarea ID
        mirrorID = tid.split("_")[0] + "_mirrorText",
        mirror = document.getElementById(mirrorID);

    mirror.value = mirror.value + selectedValue + " ";
};

//Solution's Clear textarea
var tradeClear = function (tid) {
    "use strict";
    var mirrorID = tid.split("_")[0] + "_mirrorText",
        mirror = document.getElementById(mirrorID);
    mirror.value = "";
};


function CPUploadImages() {
    document.getElementById('CPUploadImages').click();
}

$('#CPUploadImages').change(function () {
    $("#CPImagesDIV").empty();
    var table = document.getElementById("CPImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    //console.log(count);

    for (var i = 0; i < count; i++) {
        try {
            //noinspection ExceptionCaughtLocallyJS
            throw i
        } catch (ii) {
            setTimeout(function () {
                var nameID = ii + 1;
                var altName = 'Image ' + nameID;
                var imageID = 'CPImage' + ii;
                var textID = 'CPImageText' + ii;
                var removeButtonID = 'CPImageRemoveButton' + ii;
                var addButtonID = 'CPImageAddButton' + ii;
                var uploadID = 'CPImageUpload' + ii;

                //var removeFunction = 'RemoveDilapidationImage' + ii + '()';
                //addDrawing();
                addImageElements(altName, imageID, textID, removeButtonID, addButtonID, uploadID,
                    'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '485px', '485px');

                loadImage.parseMetaData(imageFile[ii], function (data) {
                    //console.log('I am in loadImage function');
                    var orientation = 0;
                    var date = new Date();
                    var imageName = imageFile[ii].name;
                    var imageType = imageFile[ii].type;
                    var image = document.getElementById(imageID);
                    var removeButton = document.getElementById(removeButtonID);
                    var description = document.getElementById(textID);
                    var addButton = document.getElementById(addButtonID);
                    //if exif data available, update orientation
                    if (data.exif) {
                        orientation = data.exif.get('Orientation');
                    }
                    var loadingImage = loadImage(imageFile[ii], function (canvas) {
                        var base64data = canvas.toDataURL(imageType);
                        //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                        image.setAttribute('src', base64data);
                        //$(selectionImage).attr('src',base64data);
                        removeButton.style.display = 'block';
                        removeButton.style.width = '480px';
                        addButton.style.display = 'none';
                        addButton.style.width = '480px';
                        description.style.display = 'block';
                        image.style.display = 'block';
                        image.style.width = '480px';
                        description.style.width = '480px';
                        // image.style.height = '250px';
                        var file = new File([convertBase64UrlToBlob(base64data, imageType)], imageName, {
                            type: imageType,
                            lastModified: date.getTime()
                        });
                        //console.log(file);
                        doUploadFile(file, imageID, textID, removeButtonID, addButtonID, 'CPImagesTable', altName, 'CPImagesDIV', uploadID, 'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '480px', '480px');

                    }, {
                        canvas: true,
                        orientation: orientation,
                        maxWidth: 1500,
                        maxHeight: 1200
                    });
                });

            }, 200);
        }
    }
    setTimeout(function () {
        //addDrawing();
        var altID = count + 1;
        var altName = 'Image' + altID;
        var imageID = 'CPImage' + count;
        var textID = 'CPImageText' + count;
        var removeButtonID = 'CPImageRemoveButton' + count;
        var addButtonID = 'CPImageAddButton' + count;
        var uploadID = 'CPImageUpload' + count;
        addImageElements(altName, imageID, textID, removeButtonID, addButtonID, uploadID,
            'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '485px', '485px');

    }, 400)



});

function removeOneCPImage(click_id) {
    var selectedID = String(click_id);
    var id = selectedID.replace(/[^\d.]/g, '');
    var imageID = 'CPImage' + id;
    var removeButtonID = 'CPImageRemoveButton' + id;
    var addButtonID = 'CPImageAddButton' + id;
    var descriptionID = 'CPImageText' + id;


    var imageSelect = '#' + imageID;
    $(imageSelect).attr('src', '#');
    var image = document.getElementById(imageID);
    var button = document.getElementById(removeButtonID);
    var addButton = document.getElementById(addButtonID);
    var description = document.getElementById(descriptionID);

    button.style.display = 'none';
    addButton.style.display = 'block';
    description.value = "";
    description.style.display = 'none';
    //image.style.width = '0px';
    image.style.display = 'none';
    doRemovePhoto(imageID);
}

function addOneCPImage(click_id) {
    console.log(click_id);

    var id;
    var selectedID = String(click_id);
    id = selectedID.replace(/[^\d.]/g, '');
    var nameID = Number(id) + 1;
    var altName = 'Image ' + nameID;
    var imageID = 'CPImage' + id;
    var textID = 'CPImageText' + id;
    var removeButtonID = 'CPImageRemoveButton' + id;
    var addButtonID = 'CPImageAddButton' + id;
    var uploadID = 'CPImageUpload' + id;
    console.log(uploadID);
    var x = document.getElementById(uploadID);
    x.click();
    x.addEventListener('change', function () {
        if (this.files && this.files[0]) {
            var imageFile = this.files[0];
            //load the image src to the current imageID.
            loadImage.parseMetaData(imageFile, function (data) {
                //console.log('I am in loadImage function');
                var orientation = 0;
                var date = new Date();
                // var selectionImage = '#AdviceImage' + ii;
                var imageName = imageFile.name;
                var imageType = imageFile.type;
                var image = document.getElementById(imageID);
                var removeButton = document.getElementById(removeButtonID);
                var description = document.getElementById(textID);
                var addButton = document.getElementById(addButtonID);
                //if exif data available, update orientation
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }
                var loadingImage = loadImage(imageFile, function (canvas) {
                    var base64data = canvas.toDataURL(imageType);
                    //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    image.setAttribute('src', base64data);
                    //$(selectionImage).attr('src',base64data);
                    removeButton.style.display = 'block';
                    removeButton.style.width = '480px';
                    addButton.style.display = 'none';
                    description.style.display = 'block';
                    image.style.display = 'block';
                    image.style.width = '480px';
                    // image.style.height = '250px';
                    var file = new File([convertBase64UrlToBlob(base64data, imageType)], imageName, {
                        type: imageType,
                        lastModified: date.getTime()
                    });
                    //console.log(file);
                    doUploadFile(file, imageID, textID, removeButtonID, addButtonID, 'CPImagesTable', altName, 'CPImagesDIV', uploadID, 'removeCPHOWImage(this.id)', 'addOneCPImage(this.id)', '480px', '480px');

                }, {
                    canvas: true,
                    orientation: orientation,
                    maxWidth: 1500,
                    maxHeight: 1200
                });
            });
        }
    });

    var newID = $('#CPImagesDIV').find('> form').length;
    var altID = $('#CPImagesDIV').find('> form').length + 1;
    nextAltName = 'Image  ' + altID;
    console.log("I am here!!! need another image element ,the next id  " + newID);
    var nextImageID = 'CPImage' + newID;
    var nextTextID = 'CPImageText' + newID;
    var nextRemoveButtonID = 'CPImageRemoveButton' + newID;
    var nextAddButtonID = 'CPImageAddButton' + newID;
    var nextUploadID = 'CPImageUpload' + newID;
    addImageElements(nextAltName, nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
        'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '480px', '0px');


}

//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
function addImageElements(imageAltName, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize, width) {
    var BigContainer = document.getElementById('CPImagesDIV');

    //var BigContainer = document.getElementById(divID);
    var form = document.createElement("form");
    // console.log(form);
    //form.setAttribute("class","divForm");
    //need four dividends in a form
    var container1 = document.createElement("div");
    var container2 = document.createElement("div");
    var container3 = document.createElement("div");
    var container4 = document.createElement("div");
    container1.setAttribute("class", "col-sm");
    container2.setAttribute("class", "col-sm");
    container3.setAttribute("class", "col-sm");
    container4.setAttribute("class", "col-sm");

    //crate an image area
    var img = document.createElement('img');
    img.src = "#";
    img.alt = imageAltName;
    img.id = imageID;
    img.style.display = 'none';
    img.style.marginLeft = '10px';
    img.style.width = width;
    img.style.height = imageSize;
    img.style.paddingTop = '10px';

    //create an input for the text
    var textInput = document.createElement('INPUT');
    textInput.setAttribute("type", "text");
    textInput.style.width = imageSize;
    textInput.style.marginLeft = '10px';
    textInput.style.height = "10px";
    textInput.style.display = 'none';
    textInput.id = imageTextID;

    //create an input for the remove button
    var removeButton = document.createElement('INPUT');
    removeButton.setAttribute("type", "button");
    removeButton.setAttribute("value", "Remove");
    removeButton.setAttribute("onclick", removeFunction);
    removeButton.id = removeButtonID;
    //removeButton.onclick = removeFunction;
    removeButton.style.width = imageSize;
    removeButton.style.marginLeft = '10px';
    removeButton.style.height = "25px";
    removeButton.style.display = "none";

    //create an input for add button
    var addButton = document.createElement('INPUT');
    addButton.setAttribute("type", "button");
    addButton.setAttribute("value", "Add");
    addButton.setAttribute("onclick", addFunction);
    addButton.id = addButtonID;
    addButton.style.width = imageSize;
    addButton.style.marginLeft = '10px';
    addButton.style.height = "25px";
    addButton.style.display = 'block';
    addButton.style.marginTop = '20px';

    //create an input for file, to upload images, this is the one with upload action
    var uploadFile = document.createElement('INPUT');
    uploadFile.setAttribute("type", "file");
    uploadFile.id = uploadFileID;
    uploadFile.setAttribute("class", "inputImage");
    uploadFile.setAttribute("accept", "image/x-png,image/jpeg");

    uploadFile.style.display = 'none';

    //put all elements into the correct container
    //BigContainer.appendChild(form);
    BigContainer.appendChild(form);
    form.appendChild(container1);
    form.appendChild(container2);
    form.appendChild(container3);
    form.appendChild(container4);
    container1.appendChild(img);
    container2.appendChild(textInput);
    container3.appendChild(removeButton);
    container4.appendChild(addButton);
    container4.appendChild(uploadFile);
}

//Source from http://www.blogjava.net/jidebingfeng/articles/406171.html
function convertBase64UrlToBlob(urlData, type) {

    var bytes = window.atob(urlData.split(',')[1]); //remove url, convert to byte

    //deal with anomaly, change the ASCI code less than = 0 to great than zero
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }

    return new Blob([ab], {
        type: type
    });
}

var __PDF_DOC,
    __CURRENT_PAGE,
    __TOTAL_PAGES,
    __PAGE_RENDERING_IN_PROGRESS = 0,
    __CANVAS = $('#pdf-canvas').get(0),
    __CANVAS_CTX = __CANVAS.getContext('2d');

function showPDF(pdf_url) {
    $("#pdf-loader").show();

    PDFJS.getDocument({
        url: pdf_url
    }).then(function (pdf_doc) {
        __PDF_DOC = pdf_doc;
        __TOTAL_PAGES = __PDF_DOC.numPages;

        // Hide the pdf loader and show pdf container in HTML
        $("#pdf-loader").hide();
        $("#pdf-contents").show();
        $("#pdf-total-pages").text(__TOTAL_PAGES);

        // Show the first page
        showPage(1);
    }).catch(function (error) {
        // If error re-show the upload button
        $("#pdf-loader").hide();
        $("#upload-button").show();

        alert(error.message);
    });;
}

function showPage(page_no) {
    __PAGE_RENDERING_IN_PROGRESS = 1;
    __CURRENT_PAGE = page_no;

    // Disable Prev & Next buttons while page is being loaded
    $("#pdf-next, #pdf-prev").attr('disabled', 'disabled');

    // While page is being rendered hide the canvas and show a loading message
    $("#pdf-canvas").hide();
    $("#page-loader").show();

    // Update current page in HTML
    $("#pdf-current-page").text(page_no);

    // Fetch the page
    __PDF_DOC.getPage(page_no).then(function (page) {
        // As the canvas is of a fixed width we need to set the scale of the viewport accordingly
        var scale_required = __CANVAS.width / page.getViewport(1).width;

        // Get viewport of the page at required scale
        var viewport = page.getViewport(scale_required);

        // Set canvas height
        __CANVAS.height = viewport.height;

        var renderContext = {
            canvasContext: __CANVAS_CTX,
            viewport: viewport
        };

        // Render the page contents in the canvas
        page.render(renderContext).then(function () {
            __PAGE_RENDERING_IN_PROGRESS = 0;

            // Re-enable Prev & Next buttons
            $("#pdf-next, #pdf-prev").removeAttr('disabled');

            // Show the canvas and hide the page loader
            $("#pdf-canvas").show();
            $("#page-loader").hide();
        });
    });
}

// Upon click this should should trigger click on the #file-to-upload file input element
// This is better than showing the not-good-looking file input element
$("#upload-button").on('click', function () {
    $("#file-to-upload").trigger('click');
});

// When user chooses a PDF file
$("#file-to-upload").on('change', function () {
    // Validate whether PDF
    if (['application/pdf'].indexOf($("#file-to-upload").get(0).files[0].type) == -1) {
        alert('Error : Not a PDF');
        return;
    }

    $("#upload-button").hide();

    // Send the object url of the pdf
    showPDF(URL.createObjectURL($("#file-to-upload").get(0).files[0]));
});

// Previous page of the PDF
$("#pdf-prev").on('click', function () {
    if (__CURRENT_PAGE != 1)
        showPage(--__CURRENT_PAGE);
});

// Next page of the PDF
$("#pdf-next").on('click', function () {
    if (__CURRENT_PAGE != __TOTAL_PAGES)
        showPage(++__CURRENT_PAGE);
});

$(document).ready(function () {
    "use strict";

    loadPropertySelectData();
    loadSolutionSelectData();

    //Property Summary add_button
    button_ConAdd();
    button_FaultAdd();

    //Property Assessment add_button
    button_HealthCheckAdd();
    button_RepairsCheckAdd();
    button_EnergyCheckAdd();
});
