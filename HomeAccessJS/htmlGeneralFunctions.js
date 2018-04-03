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
var category = [
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
    var selectCateID = document.getElementById("C_category"),
        selectM_CateID = document.getElementById("M_category"),

        //Get 'select' code
        selectCodeID = document.getElementById("C_code"),
        selectM_CodeID = document.getElementById("M_code"),
        selectE_CodeID = document.getElementById("E_code"),

        //Get 'select' trade
        selectTradeID = document.getElementById("C_trade"),
        selectM_TradeID = document.getElementById("M_trade"),
        selectE_TradeID = document.getElementById("E_trade"),

        C_opt = document.createElement("option"),
        M_opt = document.createElement("option"),
        E_opt = document.createElement("option"),
        i;

    //Add category option
    for (i = 0; i < category.length; i++) {
        //Add category name
        C_opt.innerHTML = category[i];
        M_opt.innerHTML = category[i];
        //Add category value
        C_opt.setAttribute("value", category[i]);
        M_opt.setAttribute("value", category[i]);
        //Add to html
        selectCateID.appendChild(C_opt);
        selectM_CateID.appendChild(M_opt);

        C_opt = document.createElement("option");
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

//Load property select option data
function loadPropertySelectData() {
    "use strict";
    var i;
    //depend on how many select tap.
    for (i = 0; i < getSelectID.length; i++) {
        createP_Option(getSelectID[i]);
    }
}

//Load property select data
function loadSolutionSelectData() {
    "use strict";
    createS_Option();
}

$(document).ready(function () {
    "use strict";
    loadPropertySelectData();
    loadSolutionSelectData();
});
