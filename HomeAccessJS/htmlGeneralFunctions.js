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
        value: 'No_visible_significant_defect'
    },
    {
        name: 'X',
        value: 'Maintenance_Item_or_Minor_Defect'
    },
    {
        name: 'XX',
        value: 'Major_Defect'
    },
    {
        name: 'U',
        value: 'Unknown/Inaccessible/Not_tested/Not_visible'
    },
    {
        name: 'NA',
        value: 'Not_applicable,no_such_item'
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
//    console.log("Create opiton");
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

//Check HA_indicateText to match checkbox.
function checkIndiTextValue(){
    if($("#HA_indicateText").val()!==""){
        var val = $("#HA_indicateText").val().split(",");
        for(var i in val){
            if(val[i]!==""){
                switch(val[i]){
                    case "Ramp":
                        document.getElementById("checkBox_1").checked = true;
                        break;
                    case "Bathroom_Modification":
                        document.getElementById("checkBox_2").checked = true;
                        break;
                    case "Platform_Steps":
                        document.getElementById("checkBox_3").checked = true;
                        break;
                    case"Other":
                        document.getElementById("checkBox_4").checked = true;
                        break;
                }
            }
        }
    }
}
//Save checkbox data into text for saving purpose.
$(":checkbox").click(function () {
    if ($(this).is(":checked")) {
        $("#HA_indicateText").val($("#HA_indicateText").val() + $(this).val() + ",");
    } else {
        var text = $("#HA_indicateText").val();
        var del = $(this).val();
        text = text.replace(del + ",", "");
        $("#HA_indicateText").val(text);
    }
});

//'Construction Summary' add button count.
var conAdd_Count = 0;

//'Construction Summary' Add button listening event.
$("#Button_ConAdd").click(function (){
    Create_ConAdd(conAdd_Count);
    conAdd_Count++;
});

//'Construction Summary' Add button create.
function Create_ConAdd(id) {
    var newTr = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        table = document.getElementById("Table_CSummary"),
        lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
        lastRowCount = lastTr.childElementCount,
        inputNameID = id + "_CSNewName",
        inputValueID=id + "_CSNewValue";

    newTd1.innerHTML = "<input id=\""+inputNameID+"\" type=\"text\" class=\"form-control\"/>";
    newTd2.innerHTML = "<input id=\""+inputValueID+"\" type=\"text\" class=\"form-control\"/>";
    if (lastRowCount === 2) {
        lastTr.appendChild(newTd1);
        lastTr.appendChild(newTd2);
    } else {
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        table.appendChild(newTr);
    }
}

//'Fault Summary' add button count.
var faultAdd_Count = 0;
//'Fault Summary' add button listening event.
$("#Button_FaultAdd").click(function (){
    button_FaultAdd(faultAdd_Count);
    faultAdd_Count++;
});

//'Fault Summary' Add button create.
function button_FaultAdd(id) {
    var table = document.getElementById("Table_FalSummary"),
        newTr = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        lastTr = document.getElementById("Table_FalSummary").getElementsByTagName("tr")[table.rows.length - 1],
        newNameID = id + "_FSNewName",
        newValueID = id+ "_FSNewValue",
        lastRowCount = lastTr.childElementCount;

    newTd1.innerHTML = "<input id=\""+newNameID+"\" type=\"text\" class=\"form-control\"/>";
    newTd2.innerHTML = "<select id=\"" + newValueID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

    if (lastRowCount === 2) {
        lastTr.appendChild(newTd1);
        lastTr.appendChild(newTd2);
    } else {
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        table.appendChild(newTr);
    }
    createP_Option(newValueID);
}

//'Health Check & Safety Check' add button count.
var HSCheckAdd_Count = 0;

//'Health Check & Safety Check' add button listening event.
$("#Button_HSCheckAdd").click(function (){
    button_HealthCheckAdd(HSCheckAdd_Count);
    HSCheckAdd_Count++;
});

//'Health Check & Safety check' Add button create.
function button_HealthCheckAdd(id) {
    var table = document.getElementById("Table_HSCheck"),
        newTr = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
        newItemName = id + "_HSCheckNewName",
        newItemValue = id+ "_HSCheckNewValue",
        lastRowCount = lastTr.childElementCount;

    newTd1.innerHTML = "<input id=\""+newItemName+"\" type=\"text\" class=\"form-control\"/>";
    newTd2.innerHTML = "<select id=\"" + newItemValue + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

    if (lastRowCount === 2) {
        lastTr.appendChild(newTd1);
        lastTr.appendChild(newTd2);
    } else {
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        table.appendChild(newTr);
    }
    createP_Option(newItemValue);
}

//'Repairs & Mainentance Check' Structure add button count.
var RM_SCheckAdd_Count = 0;

//'Repairs & Mainentance Check' Structure add button Listening event.
$("#Button_RMCheckAdd_S").click(function () {
    RM_SCheckAddButton(RM_SCheckAdd_Count);
    RM_SCheckAdd_Count++;
});

//'Repairs & Mainentance Check' Structure add button create.
function RM_SCheckAddButton(id){
    var table = document.getElementById("Table_RMCheck_S"),
        newTr = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
        newNameID = id + "_RMSCheckNewName",
        newValueID = id + "_RMSCheckValue",
        lastRowCount = lastTr.childElementCount;

    newTd1.innerHTML = "<input id=\"" + newNameID + "\" type=\"text\" class=\"form-control\"/>";
    newTd2.innerHTML = "<select id=\"" + newValueID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

    if (lastRowCount === 2) {
        lastTr.appendChild(newTd1);
        lastTr.appendChild(newTd2);
    } else {
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        table.appendChild(newTr);
    }
    createP_Option(newValueID);
}

//'Repairs & Mainentance Check' Other add button count.
var RM_OCheckAdd_Count = 0;

//'Repairs & Mainentance Check' Other add button Listening event.
$("#Button_RMCheckAdd_O").click( function (){
    RM_OCheckAddButton(RM_OCheckAdd_Count);
    RM_OCheckAdd_Count++;
});

//'Repairs & Mainentance Check' Other add button create.
function RM_OCheckAddButton(id){
    var table = document.getElementById("Table_RMCheck_O"),
        newTr = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
        newNameID = id + "_RMOCheckNewName",
        newValueID = id + "_RMOCheckNewValue",
        lastRowCount = lastTr.childElementCount;

    newTd1.innerHTML = "<input id=\""+newNameID+"\" type=\"text\" class=\"form-control\"/>";
    newTd2.innerHTML = "<select id=\"" + newValueID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

    if (lastRowCount === 2) {
        lastTr.appendChild(newTd1);
        lastTr.appendChild(newTd2);
    } else {
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        table.appendChild(newTr);
    }
    createP_Option(newValueID);
}

//'Energy & Wastage Check' Add button count.
var EW_CheckAdd_Count = 0;

//'Energy & Wastage Check' Add button Listening event.
$("#Button_EWCheckAdd").click(function () {
    button_EnergyCheckAdd(EW_CheckAdd_Count);
    EW_CheckAdd_Count++;
});

//'Energy & Wastage Check' Add button create.
function button_EnergyCheckAdd(id){
    var table = document.getElementById("Table_EWCheck"),
        newTr = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
        newNameID = EW_CheckAdd_Count + "_EWCheckNewName",
        newValueID = EW_CheckAdd_Count + "_EWCheckNewValue",
        lastRowCount = lastTr.childElementCount;

    newTd1.innerHTML = "<input id=\"" + newNameID + "\" type=\"text\" class=\"form-control\"/>";
    newTd2.innerHTML = "<select id=\"" + newValueID + "\" class=\"form-control\"><option value=\"-1\">Choose</option></select>";

    if (lastRowCount === 2) {
        lastTr.appendChild(newTd1);
        lastTr.appendChild(newTd2);
    } else {
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        table.appendChild(newTr);
    }
    createP_Option(newValueID);
}

/*
Count new row.
C means Health & Safety Concerns page
M means Repair & Maintenance page
E means Energy Efficiency - Optional page
*/
var C_count = 1,
    M_count = 1,
    E_count = 1;
//Add_button event
var button_AddSolutionItem = function (id) {
    addSolutionItem(id);
};

function addSolutionItem(id){
    if(id.charAt(1)!=="0"){
        //Decide which button C,M or E
        var btn_id = id.charAt(0);

        //        console.log(btn_id);
        //Get corresponding table
        var table = document.getElementById(btn_id + "_SolutionTable"),
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
                C_count++;
                break;
            case "M":
                count = M_count;
                category = M_category;
                code = M_Code;
                M_count++;
                break;
            case "E":
                count = E_count;
                category = "";
                code = E_Code;
                E_count++;
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

        if (btn_id === "E")
            newTd1.innerHTML = "Enenrgy Efficiency";
        else
            newTd1.innerHTML = text;

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
            C_opt.innerHTML = category[i];
            //Add category value
            C_opt.setAttribute("value", category[i]);
            //Add to html
            selectCateID.appendChild(C_opt);

            C_opt = document.createElement("option");
        }

        //Load CODE option
        for (i = 0; i < code.length; i++) {
            C_opt = document.createElement("option");
            C_opt.innerHTML = code[i];
            C_opt.setAttribute("value", code[i]);
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
        //        switch (btn_id) {
        //            case "C":
        //                C_count++;
        //                break;
        //            case "M":
        //                M_count++;
        //                break;
        //            case "E":
        //                E_count++;
        //                break;
        //        }
    }
}
//Solution's trade mirror onchange
var tradeOnchange = function (tid) {
    //Get corresponding select element
    var selectedValue = document.getElementById(tid).value,
        //Get mirror textarea ID
        mirrorID = tid.split("_")[0] + "_mirrorText",
        mirror = document.getElementById(mirrorID);

    mirror.value = mirror.value + selectedValue + " ";
};

//Solution's Clear textarea
var tradeClear = function (tid) {
    var mirrorID = tid.split("_")[0] + "_mirrorText",
        mirror = document.getElementById(mirrorID);
    mirror.value = "";
};

//Upload photos button to trigger input file.
$("#uploadImg_Btn").click(function (){
    $("#Imgs_Upload").trigger("click");
});
var photos_count = 0;

//Photos upload file
$("#Imgs_Upload").change(function (e){
    //Store how many files user has selected.
    const totalFiles = e.currentTarget.files;
    console.log("File number: "+ totalFiles.length);

    //Only action when user has selected file.
    if(totalFiles.length>0){
        //Show load document message.
        $("#Img-loader").show();

        //Loop each file.
        Object.keys(totalFiles).forEach(i => {
            const file = totalFiles[i];
            $("#Img-loader").hide();
            //Show load image message
            $("#Imgpage-loader").show();

            //Create elements for img.
            //element[imgContainerID, newImgID, imgTextID, imgRmBtnID]
            const element = createPhoto(photos_count);
            photos_count++;

            //FileReader() only support new version of browser.
            const reader = new FileReader();
            reader.onload = (e) => {
                var code = reader.result;
                if(code!==null){
                    setTimeout(function(){
                        if(("#"+element[1]).length>0){
                            $("#"+element[1]).attr("src",code);

                            var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                type: file.type,
                                lastModified: file.lastModifiedDate
                            });

                            if($("#HA_BookingNo").val()==="0"){

                                alert("Please select order from main page. ");

                                $(location).attr("href","index.php");

                            }else{
                                doUploadFile(imgFile,element[1],element[2],element[3],"","HA_ImgsContents");
                            }
                        }
                        else{
                            console.log("NO element::" + element[1]);
                        }
                    },30);
                }
                else{
                    console.log("No code for image!!");
                }
            }
            reader.readAsDataURL(file);
        })
        $("#Imgpage-loader").hide();
        $("#HA_ImgsContents").show();
    }
});

//Photos page; create html image, text, remove button and container.
function createPhoto(id){
    var imgContainer = document.createElement("div"),
        newImg = document.createElement("img"),
        imgText = document.createElement("input"),
        imgRmBtn = document.createElement("button"),
        lastContainer = document.getElementById("HA_ImgsContents"),
        imgContainerID = id + "_imgContainer",
        newImgID = id + "_AddImg",
        imgTextID = id + "_imgText",
        imgRmBtnID = id + "_imgRmBtn";

    //Setting element's attribute.
    imgContainer.setAttribute("id",imgContainerID);

    newImg.setAttribute("id",newImgID);

    imgText.setAttribute("id", imgTextID);
    imgText.setAttribute("type", "text");
    imgText.setAttribute("class", "form-control");

    imgRmBtn.setAttribute("id",imgRmBtnID);
    imgRmBtn.setAttribute("class","btn btn-danger");

    lastContainer.appendChild(imgContainer);
    document.getElementById(imgContainerID).appendChild(newImg);
    document.getElementById(imgContainerID).appendChild(imgText);
    document.getElementById(imgContainerID).appendChild(imgRmBtn);

    var elements = [imgContainerID, newImgID, imgTextID, imgRmBtnID];

    $("#"+imgRmBtnID).html("Remove");
    //Photos images remove button listerner.
    $("#"+imgRmBtnID).click(function (){
        imagesRemoveBtn(imgContainerID,newImgID);
    });
    return elements;
}

//Photos page; images remove button action.
function imagesRemoveBtn(containerID,imgID){
    if($("#HA_BookingNo").val()==="0"){
        alert("Please select order from main page. ");
        $(location).arrt("href","index.php");
    }else{
        var container = $("#"+containerID).remove();
        doRemovePhoto(imgID);
    }
}

var __PDF_DOC,
    __CANVAS = $('#pdf-canvas').get(0),
    __CANVAS_CTX = __CANVAS.getContext('2d');
function showPDF(pdf_url) {
    $("#pdf-loader").show();

    PDFJS.getDocument({
        url: pdf_url
    }).then(function (pdf_doc) {
        __PDF_DOC = pdf_doc;

        // Hide the pdf loader and show pdf container in HTML
        $("#pdf-loader").hide();
        $("#HA_PdfContents").show();

        // Show the first page
        showPage(1);
    }).catch(function (error) {
        // If error re-show the upload button
        $("#pdf-loader").hide();
        alert(error.message);
    });
}

//Count Sketches images number.
var pdfCounts = 0;
//Create Sketches elements to save images.
function createPDFImg(id) {
    //Create element
    var imgElement = document.createElement("img"),
        btnElement = document.createElement("button"),
        container = document.createElement("div"),
        caption = document.createElement("input"),

        tr = document.getElementById("HA_PdfContents"),
        captionID = id + "_Cap",
        containerID = id + "_DIV",
        imgID = id + "_IMG",
        btnID = id + "_btnDel";


    container.setAttribute("id", containerID);

    caption.setAttribute("id", captionID);
    caption.setAttribute("type", "text");
    caption.setAttribute("class", "form-control");
    caption.setAttribute("placeholder", "Caption");

    imgElement.setAttribute("id", imgID);
    imgElement.setAttribute("src", "");

    btnElement.setAttribute("id", btnID);
    btnElement.setAttribute("type", "button");
    btnElement.setAttribute("class", "btn btn-danger");
    btnElement.setAttribute("onclick", "deleteImg(this.id)");
    btnElement.innerHTML = "Remove";

    tr.appendChild(container);
    document.getElementById(containerID).appendChild(imgElement);
    document.getElementById(containerID).appendChild(document.createElement("br"));
    document.getElementById(containerID).appendChild(caption);
    document.getElementById(containerID).appendChild(btnElement);

    var combine = [imgID, btnID, captionID, containerID];
    return combine;
}

//Sketches image delete button onclick event
// bid = button ID
var deleteImg = function (bid) {
    var imageID = bid.split("_")[0] + "_IMG",
        containerID = bid.split("_")[0] + "_DIV",
        captionID = bid.split("_")[0] + "_Cap",
        //Get container element
        container = document.getElementById(containerID);
    document.getElementById(captionID).value = "";


    //Save caption text to empty.
    //    SaveReport();

    //Delete whole div including img, caption and remove button.
    $(container).remove();

    if($("#HA_BookingNo").val()==="0"){
        alert("Please select order from main page. ");
        $(location).arrt("href","index.php");
    }else{
        doRemovePhoto(imageID);
        //    imageCount--;
    }
};

function showPage(page_no) {
    // While page is being rendered hide the canvas and show a loading message
    $("#page-loader").show();

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
            //[img ID, deltebuttonID, caption ID, container ID]
            var imgbtnID = createPDFImg(pdfCounts);
            pdfCounts++;

            $("#page-loader").hide();

            //img ID
            $("#" + imgbtnID[0]).show();

            //delete button ID
            $("#" + imgbtnID[1]).show();

            var img64Code = __CANVAS.toDataURL();
            //Attach image
            $("#" + imgbtnID[0]).attr("src", img64Code);

            var fileName = uploadPDFfile[0].name;
            fileName = fileName.replace(".pdf", ".png");
            var fileType = "image/png",
                file = new File([convertBase64UrlToBlob(img64Code, fileType)], fileName, {
                    type: fileType,
                    lastModified: uploadPDFfile[0].lastModifiedDate
                });

            if($("#HA_BookingNo").val()==="0"){
                alert("Please select order from main page. ");
                $(location).arrt("href","index.php");
            }else{
                //upload to database
                doUploadFile(file, imgbtnID[0], imgbtnID[2], imgbtnID[1], "", "HA_PdfContents");
            }
        });
    });
}

// Upon click this should should trigger click on the #file-to-upload file input element
$("#upload-button").on('click', function () {
    $("#file-to-upload").trigger('click');
});

var uploadPDFfile;
$("#file-to-upload").on('change', function (e) {
    // Validate whether PDF
    uploadPDFfile = e.currentTarget.files;
    if (['application/pdf'].indexOf(uploadPDFfile[0].type) == -1) {
        alert('Error : Not a PDF');
        return;
    }

    for (var i = 0; i < uploadPDFfile.length; i++) {
        // Send the object url of the pdf
        if (i !== 0) {
            __CANVAS = $('#canvas' + i).get(0);
            __CANVAS_CTX = __CANVAS.getContext('2d');
        }
        showPDF(URL.createObjectURL(uploadPDFfile[i]));
    }
});

//Source from http://www.blogjava.net/jidebingfeng/articles/406171.html
function convertBase64UrlToBlob(urlData,type){
    var bytes = window.atob(urlData.split(',')[1]);        //remove url, convert to byte
    //deal with anomaly, change the ASCI code less than = 0 to great than zero
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }
    return new Blob( [ab] , {type : type});
}

$(document).ready(function () {

    loadPropertySelectData();
    loadSolutionSelectData();

    checkIndiTextValue();

    console.log("Current pdfs count: " + pdfCounts);
    console.log("Current photos count: " + photos_count);
});
