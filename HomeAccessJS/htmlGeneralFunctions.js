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
var keySelectOption = [{
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
    // {
    //     name: 'U',
    //     value: 'Unknown/Inaccessible/Not_tested/Not_visible'
    // },
    {
        name: '--',
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
    "WC Door",
    "Other"
];

//Store Maintenance Category
var M_category = [
    "Energy Efficiency",
    "Fencing",
    "Government",
    "Gutters",
    "Hot Water Service",
    "Pest Inspection",
    "Vents",
    "Other"
];

//Store Energy Efficiency Category
var E_category = [
    "Energy Efficiency",
    "Other"
]
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

var recommendationArray = [];
var HSRecommendationArray = [];
var RMRecommendationArray = [];
var EERecommendationArray = [];
function onload() {
    reorderImages();
    reorderSketch();
    automaticNumbering('HA_ImgsContents', 'IMG');
    automaticNumbering('HA_PdfContents', 'Sketch');
    loadARTradData();
}

function reorderImages() {
    console.log("need to reorder the images");
    var totalContainers = $("#HA_ImgsContents").children('div');
    var BigContainer = document.getElementById('HA_ImgsContents');
    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    //console.log(totalContainers);

    $("#HA_ImgsContents").empty();
    for (var i = 0; i < totalContainers.length; i++) {
        BigContainer.appendChild(totalContainers[i]);
        //console.log(totalContainers.eq(i).children('button'));
        //console.log(totalContainers.eq(i).children('input'));
        var id = totalContainers[i].id.replace(/[^\d.]/g, '');
        var imgContainerID = id + "_imgContainer";
        var myImage = totalContainers.eq(i).children('img').get(0);
        var ImgID = totalContainers.eq(i).children('img').get(0).id;
        var rotateBtnID = totalContainers.eq(i).children('button').eq(1).get(0).id;
        var angleID = totalContainers.eq(i).children('input').eq(1).get(0).id;
        var removeBtn = document.getElementById(totalContainers.eq(i).children('button').get(0).id);
        var rotateBnt = document.getElementById(rotateBtnID);
        var removeFunction = "imagesRemoveBtn('" + imgContainerID + "', '" + ImgID + "')";
        var rotateFunction = "rotateOneImage('" + id + "')";
        var originalAngle = parseInt(document.getElementById(angleID).value);

        if(originalAngle > 0)
        {
            if(originalAngle == 90 || originalAngle == 270)
            {
                console.log("the degree is 90 or 270");
                myImage.style.marginTop = "75px";
                myImage.style.marginBottom = "75px";
                $("#" + ImgID).rotate(originalAngle);            }
            else
            {
                myImage.style.marginTop = "35px";
                myImage.style.marginBottom = "35px";
                $("#" + ImgID).rotate(originalAngle);
            }

        }
        else
        {
            myImage.style.marginTop = "35px";
            myImage.style.marginBottom = "35px";
        }


        //console.log(removeFunction);
        removeBtn.setAttribute("onclick", removeFunction);
        rotateBnt.setAttribute("onclick", rotateFunction);
        //console.log(rotateBnt);

    }
}

function reorderSketch() {
    console.log("need to reorder the images");
    var totalContainers = $("#HA_PdfContents").children('div');
    var BigContainer = document.getElementById('HA_PdfContents');
   
    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    //console.log(totalContainers);

    $("#HA_PdfContents").empty();
    for (var i = 0; i < totalContainers.length; i++) {
        BigContainer.appendChild(totalContainers[i]);
        // var id = totalContainers[i].id.replace(/[^\d.]/g, '');
        // var imgContainerID = id + "_HOWimgContainer";
        // var ImgID = totalContainers.eq(i).children('img').get(0).id;
        // console.log(imgContainerID);
        // console.log(id);
        // console.log(ImgID);
        // var removeBtn = document.getElementById(totalContainers.eq(i).children('button').get(0).id);
        // console.log(removeBtn);
        // var removeFunction = "deleteImg(this.id)";
        // console.log(removeFunction);
        // removeBtn.setAttribute("onclick", removeFunction);
        // console.log(removeBtn);
        var id = totalContainers[i].id.replace(/[^\d.]/g, '');
        var imgContainerID = id + "_imgContainer";
        var myImage = totalContainers.eq(i).children('img').get(0);
        var ImgID = totalContainers.eq(i).children('img').get(0).id;
        var rotateBtnID = totalContainers.eq(i).children('button').eq(1).get(0).id;
        var angleID = totalContainers.eq(i).children('input').eq(1).get(0).id;
        var removeBtn = document.getElementById(totalContainers.eq(i).children('button').get(0).id);
        var rotateBnt = document.getElementById(rotateBtnID);
        var removeFunction = "deleteImg(this.id)";
        var rotateFunction = "rotateOnePDF('" + id + "')";
        var originalAngle = parseInt(document.getElementById(angleID).value);

        if(originalAngle > 0)
        {
            if(originalAngle == 90 || originalAngle == 270)
            {
                console.log("the degree is 90 or 270");
                myImage.style.marginTop = "75px";
                myImage.style.marginBottom = "75px";
                $("#" + ImgID).rotate(originalAngle);            }
            else
            {
                myImage.style.marginTop = "35px";
                myImage.style.marginBottom = "35px";
                $("#" + ImgID).rotate(originalAngle);
            }

        }
        else
        {
            myImage.style.marginTop = "35px";
            myImage.style.marginBottom = "35px";
        }


        //console.log(removeFunction);
        removeBtn.setAttribute("onclick", removeFunction);
        rotateBnt.setAttribute("onclick", rotateFunction);
        //console.log(rotateBnt);

    }
}

function automaticNumbering(divid, title) {
    console.log("need to refresh the " + title + " number");
    var totalContainers = $("#" + divid).children('div');
    //console.log(totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++) {
        //console.log(i);
        //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
        totalContainers.eq(i).children('label').get(0).innerHTML = title + " " + (i + 1);
    }
}


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

//Add Recommendations' 'option'
function createS_Option() {
    "use strict";
    var C_opt = document.createElement("option"),
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
        // selectCateID.appendChild(C_opt);
        C_opt = document.createElement("option");
    }

    //Add M_category option
    for (i = 0; i < M_category.length; i++) {
        //Add category name
        M_opt.innerHTML = M_category[i];
        //Add category value
        M_opt.setAttribute("value", M_category[i]);
        //Add to html
        // selectM_CateID.appendChild(M_opt);
        M_opt = document.createElement("option");
    }

    //Add E_category option
    for (i = 0; i < E_category.length; i++) {
        //Add category name
        E_opt.innerHTML = E_category[i];
        //Add category value
        E_opt.setAttribute("value", E_category[i]);
        //Add to html
        // selectM_CateID.appendChild(M_opt);
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

//Check Home Accessment. Check HA_indicateText to match checkbox.
function checkIndiTextValue() {
    console.log($("#HA_indicateText").val());
    if ($("#HA_indicateText").val() !== "") {
        var val = $("#HA_indicateText").val().split(",");
        for (var i in val) {
            if (val[i] !== "") {
                switch (val[i]) {
                    case "Ramp":
                        document.getElementById("checkBox_1").checked = true;
                        break;
                    case "Bathroom_Modification":
                        document.getElementById("checkBox_2").checked = true;
                        break;
                    case "Platform_Steps":
                        document.getElementById("checkBox_3").checked = true;
                        break;
                    case "Other":
                        document.getElementById("checkBox_4").checked = true;
                        break;
                }
            }
        }
    }
}
//Save checkbox data into text for saving purpose.
//:checkbox
$("#PSummary input[type=checkbox]").click(function () {
    if ($(this).is(":checked")) {
        $("#HA_indicateText").val($("#HA_indicateText").val().trim() + "  " + $(this).val());
    } else {
        var text = $("#HA_indicateText").val();
        var del = $(this).val();
        text = text.replace(new RegExp(del, 'g'), "").trim();
        console.log(text);
        $("#HA_indicateText").val(text);
    }
});

//'Construction Summary' add button count.
var conAdd_Count = 0;

//'Construction Summary' Add button listening event.
$("#Button_ConAdd").click(function () {
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
        inputValueID = id + "_CSNewValue";

    newTd1.innerHTML = "<input id=\"" + inputNameID + "\" type=\"text\" class=\"form-control\"/>";
    newTd2.innerHTML = "<input id=\"" + inputValueID + "\" type=\"text\" class=\"form-control\"/>";
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
$("#Button_FaultAdd").click(function () {
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
        newValueID = id + "_FSNewValue",
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

//'Health Check & Safety Check' add button count.
var HSCheckAdd_Count = 0;

//'Health Check & Safety Check' add button listening event.
$("#Button_HSCheckAdd").click(function () {
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
        newItemValue = id + "_HSCheckNewValue",
        lastRowCount = lastTr.childElementCount;

    newTd1.innerHTML = "<input id=\"" + newItemName + "\" type=\"text\" class=\"form-control\"/>";
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
function RM_SCheckAddButton(id) {
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
$("#Button_RMCheckAdd_O").click(function () {
    RM_OCheckAddButton(RM_OCheckAdd_Count);
    RM_OCheckAdd_Count++;
});

//'Repairs & Mainentance Check' Other add button create.
function RM_OCheckAddButton(id) {
    var table = document.getElementById("Table_RMCheck_O"),
        newTr = document.createElement("tr"),
        newTd1 = document.createElement("td"),
        newTd2 = document.createElement("td"),
        lastTr = table.getElementsByTagName("tr")[table.rows.length - 1],
        newNameID = id + "_RMOCheckNewName",
        newValueID = id + "_RMOCheckNewValue",
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

//'Energy & Wastage Check' Add button count.
var EW_CheckAdd_Count = 0;

//'Energy & Wastage Check' Add button Listening event.
$("#Button_EWCheckAdd").click(function () {
    button_EnergyCheckAdd(EW_CheckAdd_Count);
    EW_CheckAdd_Count++;
});

//'Energy & Wastage Check' Add button create.
function button_EnergyCheckAdd(id) {
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
var C_count = 0,
    M_count = 0,
    E_count = 0;
//Add_button event
var button_AddSolutionItem = function (id) {
    addSolutionItem(id);
};

function addSolutionItem(id) {
    //console.log(id);
    if (id.charAt(1) !== "0") {
        //Decide which button C,M or E
        var btn_id = id.charAt(0);
        //console.log(btn_id);
        //Get corresponding table
        var table = document.getElementById(btn_id + "_SolutionTable"),
            //Create new tr and td
            newTr = document.createElement("tr"),
            newTd1 = document.createElement("td"),
            newTd2 = document.createElement("td"),
            newTd3 = document.createElement("td"),
            newTd4 = document.createElement("td"),
            // newTd5 = document.createElement("td"),
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
                category = E_category;
                code = E_Code;
                E_count++;
                break;
        }

        //console.log(count);
        //Set each element id
        var newCateSelectID = btn_id + count + "_category",
            newCommondTextID = btn_id + count + "_commentText",
            newTradeSelectID = btn_id + count + "_tradeSelect",
            newCostID = btn_id + count + "_costText",
            newCateOtherTextID = btn_id + count + "_categoryotherText";

        var text = "<select id=\"" + newCateSelectID + "\" class=\"form-control\" onchange= \"load_CategoryOther(this.id)\"><option value=\"-1\" disabled selected>Choose an item</option></select>" + 
                "<textarea class=\"form-control\" id=\"" + newCateOtherTextID + "\" style=\" display:none\"></textarea>" ;
        newTd1.innerHTML = text;

        var text = "<textarea id=\"" + newCommondTextID + "\" class=\"form-control\"></textarea>";
        newTd2.innerHTML = text;
        
        var combotext = "<input type='text' id=\"" + newTradeSelectID + "\"  style='width:300px;height:60px;fontsize:16px'>"
        var combo = $(combotext).appendTo(newTd3);
        combo.combotree({
            multiple:true,
            multiline:true, 
            valueField:'text',
            textField:'text',
            panelMinWidth:200
        })
        combo.combotree('loadData',[
            {
                "id":0,
                "text":" Architects",
                "code":"AR"
            },
            {
                "id":1,
                "text":" Building Contractors",
                "code":"BC"
            },
            {
                "id":2,
                "text":" Brick Layers",
                "code":"BR"
            },
            {
                "id":3,
                "text":" Concrete Contractors",
                "code":"CC"
            },
            {
                "id":4,
                "text":" Carpenters and Joiners",
                "code":"CJ"
            },
            {
                "id":5,
                "text":" Cabinet Makers",
                "code":"CM"
            },
            {
                "id":6,
                "text":" Damp Houses",
                "code":"DH"
            },
            {
                "id":7,
                "text":" Drainers",
                "code":"DR"
            },
            {
                "id":8,
                "text":" Electrical Contractors",
                "code":"EL"
            },
            {
                "id":9,
                "text":" Excavating Contractors",
                "code":"EX"
            },
            {
                "id":10,
                "text":" Fencing Contractors",
                "code":"FC"
            },
            {
                "id":11,
                "text":" Glass Merch/Glazier",
                "code":" GLGlassMerch/Glazier"
            },
            {
                "id":12,
                "text":" Home Maint/Repair",
                "code":" HM"
            },
            {
                "id":13,
                "text":" House Restump/Reblock",
                "code":" HR"
            },
            {
                "id":14,
                "text":" Insulation Contractors",
                "code":" IC"
            },
            {
                "id":15,
                "text":" Landscape Architects",
                "code":"LA"
            },
            {
                "id":16,
                "text":" Landscape Gardeners & Contractors",
                "code":"LG"
            },
            {
                "id":17,
                "text":" Underpinning Services",
                "code":"UP"
            },
            {
                "id":18,
                "text":" Pest Control",
                "code":"PC"
            },
            {
                "id":19,
                "text":" Painters & Decorators",
                "code":"PD"
            },
            {
                "id":20,
                "text":" Plumbers & Gas fitters",
                "code":"PG"
            },
            {
                "id":21,
                "text":" Plasterers",
                "code":"PL"
            },
            {
                "id":22,
                "text":" Paving - Various",
                "code":"PV"
            },
            {
                "id":23,
                "text":" Roof Const/Repair/Clean",
                "code":"RC"
            },
            {
                "id":24,
                "text":" Structural Engineers",
                "code":"SE"
            },
            {
                "id":25,
                "text":" Tile Layers - Wall/Floor",
                "code":"TL"
            },
            {
                "id":26,
                "text":" Tilers & Slaters",
                "code":"TS"
            }
            // {
            //     "id":27,
            //     "text":"Others",
            //     "code":"others"
            // }   
        ]);
        var text = "<textarea id=\"" + newCostID + "\" class=\"form-control\"</textarea>";
        newTd4.innerHTML = text;

        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTr.appendChild(newTd4);
        table.appendChild(newTr);

        //Create option
        var C_opt = document.createElement("option"),
            //Get "select" category
            selectCateID = document.getElementById(newCateSelectID),
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

//Recommendation's Category 'Other' option, need to display an input area for typing
function load_CategoryOther(id)
{
    var selectedvalue = document.getElementById(id).value;
    //console.log(selectedvalue);
    if(selectedvalue == "Other")
    {
        //console.log("need to load a input area");
        if(id.charAt(2) == "_")
        {
            // console.log(id.charAt(2));
            // console.log(id.slice(0,2));
            var otherTextid = id.slice(0,2) + '_categoryotherText';
            document.getElementById(otherTextid).style.display = 'block';
        }
        else if(id.charAt(3) == "_")
        {
            // console.log(id.charAt(3));
            // console.log(id.slice(0,3));
            var otherTextid = id.slice(0,3) + '_categoryotherText';
            document.getElementById(otherTextid).style.display = 'block';
        }
        
    }
    else
    {   
        console.log('select no other value');

        if(id.charAt(2) == "_")
        {
            var otherTextid = id.slice(0,2) + '_categoryotherText';
            document.getElementById(otherTextid).style.display = 'none';
        }
        else if(id.charAt(3) == "_")
        {

            var otherTextid = id.slice(0,3) + '_categoryotherText';
            document.getElementById(otherTextid).style.display = 'none';
        }
    }
}

//Upload photos button to trigger input file.
$("#uploadImg_Btn").click(function () {
    $("#Imgs_Upload").trigger("click");
});
var photos_count = 1;

//Photos upload file
$("#Imgs_Upload").change(function (e) {
    if ($("#HA_BookingNo").val() === "0") {
        alert("Please select booking from main page. ");
        $(location).attr("href", "index.php");
        return;
    }

    //Store how many files user has selected.
    const totalFiles = e.currentTarget.files;
    //    console.log("File number: " + totalFiles.length);

    //Only action when user has selected file.
    if (totalFiles.length > 0) {
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
            //console.log(element);
            photos_count++;

            //FileReader() only support new version of browser.
            //Read the file and convert to an image element.
            //            var imgFile = document.createElement('img');

            loadImage.parseMetaData(file, function (data) {
                var orientation = 0;
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }

                var loadingImage = loadImage(file, function (canvas) {
                    var data = canvas.toDataURL('image/jpeg');
                    var image = new Image();
                    image.onload = function () {
                        var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                        if (!isEmpty(code)) {
                            $("#" + element[1]).attr("src", code);

                            var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                type: file.type,
                                lastModified: file.lastModifiedDate
                            });

                            doUploadFile(imgFile, element[1], element[2], element[3], "", "HA_ImgsContents", element[4], element[0],'','','','','',element[5],element[6]);

                            $("#Imgpage-loader").hide();
                            $("#HA_ImgsContents").show();
                        }
                    };
                    image.src = data;
                }, {
                    canvas: true,
                    orientation: orientation
                });
            });
        });

        setTimeout(function () {
            automaticNumbering('HA_ImgsContents', 'IMG');
        }, 1000);
    }
});
//Photos page; create html image, text, remove button and container.
function createPhoto(id) {
    var imgContainer = document.createElement("div"),
        newImg = document.createElement("img"),
        imgLabel = document.createElement("label"),
        imgText = document.createElement("input"),
        imgRmBtn = document.createElement("button"),
        lastContainer = document.getElementById("HA_ImgsContents"),
        rotateBtn = document.createElement("button"),
        angleInput = document.createElement("input"),
        imgContainerID = id + "_imgContainer",
        newImgID = id + "_AddImg",
        imgLabelID = "imageCaption" + id,
        imgTextID = id + "_imgText",
        imgRmBtnID = id + "_imgRmBtn",
        rotateBtnID = id + "_imgRotateBtn",
        angleInputID = id + "_imgAngle";

    //Setting element's attribute.
    imgContainer.setAttribute("id", imgContainerID);

    newImg.setAttribute("id", newImgID);
    newImg.style.width = '500px';
    newImg.style.height = '500px';
    //    newImg.setAttribute("width", 200);
    //    newImg.setAttribute("height", 200);

    imgLabel.setAttribute("id", imgLabelID);

    imgText.setAttribute("id", imgTextID);
    imgText.setAttribute("type", "text");
    imgText.setAttribute("class", "form-control");
    //    imgText.setAttribute("size", 200);

    imgRmBtn.setAttribute("id", imgRmBtnID);
    imgRmBtn.setAttribute("class", "btn btn-danger");


    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");


    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.display = "none";

    lastContainer.appendChild(imgContainer);
    document.getElementById(imgContainerID).appendChild(newImg);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(imgLabel);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(imgText);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(angleInput);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(imgRmBtn);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(rotateBtn);

    var elements = [imgContainerID, newImgID, imgTextID, imgRmBtnID, imgLabelID,rotateBtnID,angleInputID];

    $("#" + imgLabelID).html("IMG " + id);
    $("#" + imgRmBtnID).html("Remove");
    $("#" + rotateBtnID).html("Rotate");
    //Photos images remove button listerner.
    $("#" + imgRmBtnID).click(function () {
        imagesRemoveBtn(imgContainerID, newImgID);
    });
    $("#" + rotateBtnID).click(function () {
        rotateOneImage(id);
    });
    return elements;
}

$("#deleteImg_Btn").click(function () {
    var img = $("#HA_ImgsContents img");
    if (img.length > 0) {
        for (let i = 0; i < img.length; i++) {
            try {
                doRemovePhoto(img[i].id);
            } catch (err) {
                console.log(err);
            }
        }

        $("#HA_ImgsContents").empty();
    }
});
//Photos page; images remove button action.
function imagesRemoveBtn(containerID, imgID) {
    if ($("#HA_BookingNo").val() === "0") {
        alert("Please select booking from main page. ");
        $(location).arrt("href", "index.php");
    } else {
        var container = $("#" + containerID).remove();
        doRemovePhoto(imgID);
        automaticNumbering('HA_ImgsContents', 'IMG');
    }
}

//Photos page: imgae rotate button action.
function rotateOneImage(ID)
{
    console.log("click");
    var angelInputID = ID + "_imgAngle";
    var imgID = ID + "_AddImg";
    var originalAngle = document.getElementById(angelInputID).value;
    var rotateAngle = parseInt(originalAngle) + 90;
    var myImage = document.getElementById(imgID);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }
    var rotateAngle = parseInt(originalAngle) + 90

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        //console.log("the degree is 90 or 270");
        myImage.style.marginTop = "75px";
        myImage.style.marginBottom = "75px";
        $("#" + imgID).rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + imgID).rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }

    document.getElementById(angelInputID).value = rotateAngle;
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
var pdfCounts = 1;
//Create Sketches elements to save images.
function createPDFImg(id) {
    //Create element
    var imgElement = document.createElement("img"),
        btnElement = document.createElement("button"),
        container = document.createElement("div"),
        caption = document.createElement("input"),
        label = document.createElement("label"),
        rotateBtn = document.createElement("button"),
        angleInput = document.createElement("input");

    var tr = document.getElementById("HA_PdfContents"),
        captionID = id + "_Cap",
        containerID = id + "_DIV",
        imgID = id + "_IMG",
        labelID = id + "Sketch",
        btnID = id + "_btnDel",
        rotateBtnID = id + "_pdfRotateBtn",
        angleInputID = id + "_pdfAngle";


    container.setAttribute("id", containerID);
    container.setAttribute("class", "text-center ml-2");

    label.setAttribute("id", label);
    label.innerHTML = "Sketch " + id;

    caption.setAttribute("id", captionID);
    caption.setAttribute("type", "text");
    caption.setAttribute("class", "form-control");
    //caption.setAttribute("placeholder", "Caption");

    imgElement.setAttribute("id", imgID);
    imgElement.setAttribute("src", "");
    imgElement.style.width = '1000px';
    imgElement.style.height = '1000px';

    btnElement.setAttribute("id", btnID);
    btnElement.setAttribute("type", "button");
    btnElement.setAttribute("class", "btn btn-danger");
    btnElement.setAttribute("onclick", "deleteImg(this.id)");
    btnElement.innerHTML = "Remove";

    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");
    rotateBtn.innerHTML = "Rotate";


    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.display = "none";


    tr.appendChild(container);
    document.getElementById(containerID).appendChild(imgElement);
    document.getElementById(containerID).appendChild(document.createElement("br"));
    document.getElementById(containerID).appendChild(label);
    document.getElementById(containerID).appendChild(document.createElement("br"));
    document.getElementById(containerID).appendChild(caption);
    document.getElementById(containerID).appendChild(document.createElement("br"));
    document.getElementById(containerID).appendChild(angleInput);
    document.getElementById(containerID).appendChild(document.createElement("br"));
    document.getElementById(containerID).appendChild(btnElement);
    document.getElementById(containerID).appendChild(document.createElement("br"));
    document.getElementById(containerID).appendChild(rotateBtn);

    $("#" + rotateBtnID).click(function () {
        rotateOnePDF(id);
    });

    var combine = [imgID, btnID, captionID, containerID,labelID,rotateBtnID,angleInputID];
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
    automaticNumbering('HA_PdfContents', 'Sketch');

    if ($("#HA_BookingNo").val() === "0") {
        alert("Please select booking from main page. ");
        $(location).arrt("href", "index.php");
    } else {
        doRemovePhoto(imageID);
        //    imageCount--;
    }
};

function rotateOnePDF(id)
{
    console.log("click");
    var angelInputID = id + "_pdfAngle";
    var imgID = id + "_IMG";
    var originalAngle = document.getElementById(angelInputID).value;
    var rotateAngle = parseInt(originalAngle) + 90;
    var myImage = document.getElementById(imgID);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }
    var rotateAngle = parseInt(originalAngle) + 90

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        //console.log("the degree is 90 or 270");
        myImage.style.marginTop = "75px";
        myImage.style.marginBottom = "75px";
        $("#" + imgID).rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + imgID).rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }

    document.getElementById(angelInputID).value = rotateAngle;

}
function showPage(page_no) {
    // While page is being rendered hide the canvas and show a loading message
    $("#page-loader").show();

    // Fetch the page
    __PDF_DOC.getPage(page_no).then(function (page) {
        // As the canvas is of a fixed width we need to set the scale of the viewport accordingly
        //        var scale_required = __CANVAS.width / page.getViewport(1).width;

        // Get viewport of the page at required scale
        //        var viewport = page.getViewport(scale_required);
        var viewport = page.getViewport(0.8);

        // Set canvas height
        __CANVAS.height = viewport.height;
        __CANVAS.width = viewport.width;

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

            var img64Code = __CANVAS.toDataURL('image/jpeg');
            //Attach image
            $("#" + imgbtnID[0]).attr("src", img64Code);

            var fileName = uploadPDFfile[0].name;
            fileName = fileName.replace(".pdf", ".png");
            var fileType = "image/png",
                file = new File([convertBase64UrlToBlob(img64Code, fileType)], fileName, {
                    type: fileType,
                    lastModified: uploadPDFfile[0].lastModifiedDate
                });
            doUploadFile(file, imgbtnID[0], imgbtnID[2], imgbtnID[1], "", "HA_PdfContents", imgbtnID[4], imgbtnID[3],'','','','','',imgbtnID[5],imgbtnID[6]);


        });
    });
}

// Upon click this should should trigger click on the #file-to-upload file input element
$("#upload-button").on('click', function () {
    if (isEmpty($("#HA_BookingNo").val())) {
        alert("Please select booking from main page. ");
        $(location).arrt("href", "index.php");
    } else {
        $("#file-to-upload").trigger('click');
    }
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
    setTimeout(function () {
        automaticNumbering('HA_PdfContents', 'Sketch');

    }, 2000);


});

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

//Resize an image
function resizeImage_Canvas(img) {
    var MAX_WIDTH = 480,
        MAX_HEIGHT = 360,
        width = img.width,
        height = img.height,
        canvas = document.createElement('canvas');

    if (width > height) {
        if (width > MAX_WIDTH) {
            //height *= MAX_WIDTH / width;
            //width = MAX_WIDTH;
            height = 360;
            width = 480;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            //height = MAX_HEIGHT;
            height = 360;

        }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas;
}

//Check empty.
function isEmpty(val) {
    switch (typeof val) {
        case 'undefined':
            return true;
        case 'string':
            if (val.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
            break;
        case 'boolean':
            if (!val) return true;
            break;
        case 'number':
            if (0 === val || isNaN(val)) return true;
            break;
        case 'object':
            if (null === val || val.length === 0) return true;
            for (var i in val) {
                return false;
            }
            return true;
    }
    return false;
}

function getInfo(id,array)
{
    if(array[0] != undefined)
    {
        if(typeof array[0] == 'number')
        {
            recommendationArray = array;
        }
        else
        {
            //console.log("old reports data, need to conver first");
            for(var i=0;i<array.length;i++)
            {
                //console.log(array[i]);
                array[i] = convertCodesToIndex(array[i]);
                //console.log(array[i]);
            }
            //console.log(array);
            recommendationArray = array;
        }
        var recommendation = {id:id,array:recommendationArray};
        if(id.charAt(0) == 'C')
        {
            HSRecommendationArray.push(recommendation);
        }
        if(id.charAt(0) == 'M')
        {
            RMRecommendationArray.push(recommendation);
        }
        if(id.charAt(0) == 'E')
        {
            EERecommendationArray.push(recommendation);
        }
       
    }
}

/**
 * AA-119
 * This function is for the old reports stored th recommendations as codes, but the new checkbox need index as references to display proper texts. 
 * so need to convert the codes to index for the checkbox to work. 
 */
function convertCodesToIndex(codes)
{
    var index;
    switch(codes)
    {
        case 'AR':
            index = 0;
            break;
        case 'BC':
            index = 1;
            break;
        case 'BR':
            index = 2;
            break;
        case 'CC':
            index = 3;
            break;
        case 'CJ':
            index = 4;
            break;
        case 'CM':
            index = 5;
            break;
        case 'DH':
            index = 6;
            break;
        case 'DR':
            index = 7;
            break;
        case 'EL':
            index = 8;
            break;
        case 'EX':
            index = 9;
            break;
        case 'FC':
            index = 10;
            break;
        case 'GL':
            index = 11;
            break;
        case 'HM':
            index = 12;
            break;
        case 'HR':
            index = 13;
            break;
        case 'IC':
            index = 14;
            break;
        case 'LA':
            index = 15;
            break;
        case 'LG':
            index = 16;
            break;
        case 'UP':
            index = 17;
            break;
        case 'PC':
            index = 18;
            break;
        case 'PD':
            index = 19;
            break;
        case 'PG':
            index = 20;
            break;
        case 'PL':
            index = 21;
            break;
        case 'PV':
            index = 22;
            break;
        case 'RC':
            index = 23;
            break;
        case 'SE':
            index = 24;
            break;
        case 'TL':
            index = 25;
            break;
        case 'TS':
            index = 26;
            break;
        default:
            index = 0;
    }

    return index;
}
function loadARTradData()
{
    for(var i = 0;i<HSRecommendationArray.length;i++)
    {
        // console.log(HSRecommendationArray[i].id);
        // console.log(HSRecommendationArray[i].array);

        $('#' + HSRecommendationArray[i].id).combotree('setValues',HSRecommendationArray[i].array);
    }
    for(var i = 0;i<RMRecommendationArray.length;i++)
    {
        // console.log(RMRecommendationArray[i].id);
        // console.log(RMRecommendationArray[i].array);

        $('#' + RMRecommendationArray[i].id).combotree('setValues',RMRecommendationArray[i].array);
    }
    for(var i = 0;i<EERecommendationArray.length;i++)
    {
        // console.log(EERecommendationArray[i].id);
        // console.log(EERecommendationArray[i].array);

        $('#' + EERecommendationArray[i].id).combotree('setValues',EERecommendationArray[i].array);
    }
}
$(document).ready(function () {

    loadPropertySelectData();
    loadSolutionSelectData();

    //    console.log("Current pdfs count: " + pdfCounts);
    //    console.log("Current photos count: " + photos_count);
});