/**
 * Created by Fafa on 27/12/17.
 */



// $(document).ready(function(){
//     //alert("ok");
//     loadSelect();
// });

function onload()
 {
     reorderImages();
     automaticNumbering();
 }

function reorderImages()
{
    console.log("need to reorder the images");
    var totalContainers = $("#CPImagesTable").children('div');
    var BigContainer = document.getElementById('CPImagesTable');
    //console.log(totalContainers);
    // for (var i=0;i<totalContainers.length;i++)
    // {
    //     var id = totalContainers[i].id.replace(/[^\d.]/g, '');
    //     var imgContainerID = id + "_CPimgContainer";
    //     var ImgID = totalContainers.eq(i).children('img').get(0).id;

    //     console.log(imgContainerID);
    //     console.log(id);
    //     console.log(ImgID);
    //     // console.log( Number(totalContainers[i].id.replace(/[^\d.]/g, '')));
    //     //console.log((totalContainers[i].id));
    //     console.log(totalContainers.eq(i).children('button').get(0).onclick);
    //     var imgRmBtnID = totalContainers.eq(i).children('button').get(0).id;
    //     // $("#" + imgRmBtnID).click(function () {
    //     //     imagesRemoveBtn(imgContainerID, newImgID);
    //     // });
    //     totalContainers.eq(i).children('button').get(0).onclick = function(){imagesRemoveBtn(imgContainerID, ImgID)};
        
    // }
    totalContainers.sort(function(a,b)
    {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    //console.log(totalContainers);

    $("#CPImagesTable").empty();
    for (var i=0;i<totalContainers.length;i++)
    {
        BigContainer.appendChild(totalContainers[i]);
        var id = totalContainers[i].id.replace(/[^\d.]/g, '');
        var imgContainerID = id + "_CPimgContainer";
        var myImage = totalContainers.eq(i).children('img').get(0);
        var ImgID = totalContainers.eq(i).children('img').get(0).id;
        var rotateBtnID = totalContainers.eq(i).children('button').eq(1).get(0).id;
        var angleID = totalContainers.eq(i).children('input').eq(1).get(0).id;
        var removeBtn = document.getElementById(totalContainers.eq(i).children('button').get(0).id);
        var rotateBnt = document.getElementById(rotateBtnID);
        var removeFunction = "imagesRemoveBtn('"+imgContainerID+"', '"+ImgID+"')";
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
        removeBtn.setAttribute("onclick", removeFunction);
        rotateBnt.setAttribute("onclick", rotateFunction);

        // console.log(removeBtn);
        
    }
}


function automaticNumbering()
{
    console.log("need to refresh the image number");
    var totalContainers = $("#CPImagesTable").children('div');
    for(var i=0;i<totalContainers.length;i++)
    {
        //console.log(i);
        //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
        totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i+1);
    }
}

/**
 * load the select option
 */
function loadSelectOption(id) {
    var select = document.getElementById(id);

    // var selectOption = ["Choose an item","✔","X","XX","U","NA"];
    var selectOption = ["Choose an item", "√", "X", "XX", "U", "NA"];
    var selectValue = ["", "No visible significant defect", "Maintenance Item or Minor Defect", "Major Defect",
        "Unknown/Inaccessible/Not tested/Not visible", "Not applicable, no such item"];


    //Create and append the options
    for (var i = 0; i < selectOption.length; i++) {
        var option = document.createElement("option");
        var group = document.createElement('optgroup');
        group.label = selectValue[i];
        option.text = selectOption[i];
        if (i === 0) {
            option.selected = true;
            option.disabled = true;
        }
        group.appendChild(option);
        select.appendChild(group);
    }

}

/**
 * Load access limitations option
 */
function loadAccessSelectOption(id) {
    var select = document.getElementById(id);

    var limitationOption = ["Choose an item", "Reasonably Accessible", "Partially Accessible - Obstructed", "Partially Accessible - Inspection Safety Hazard",
        "Not Accessible - Obstructed", "Not Accessible - Inspection Safety Hazard", "Other"];



    //Create and append the options
    for (var i = 0; i < limitationOption.length; i++) {
        var option = document.createElement("option");
        option.value = limitationOption[i];
        option.text = limitationOption[i];
        if (i === 0) {
            option.selected = true;
            option.disabled = true;
        }
        select.appendChild(option);
    }

}

/**
 * Load Professional and Trade Recommendations Options
 */
function loadTradeRecommendationOption(id) {
    var select = document.getElementById(id);

    var selectOption = ["Select", "AR", "BC", "BR", "CC", "CJ", "CM", "DH", "DR", "EL", "EX", "FC", "GL", "HM", "HR", "IC", "LA", "LG", "UP", "PC", "PD", "PG", "PL", "PV", "RC", "SE", "TL", "TS"];
    //var selectOption = ["Choose an item","√","X","XX","U","NA"];
    var selectValue = ["", "Architects", "Building Contractors", "Brick Layers", "Concrete Contractors", "Carpenters and Joiners", "Cabinet Makers", "Damp House", "Drainers", "Electrical Contractors", "Excavating Contractors",
    "Fencing Contractors", "Glass Merch / Glazier", "Home Maint/Repair", "House Restump / Reblock", "Insulation Contractors", "Landscape Architects", "Landscape Gardeners & Contractors", "Underpinning Services", "Pest Control",
    "Painters & Decorators", "Plumbers & Gas fitters", "Plasterers", " Paving - Various", "Roof Const / Repair / Clear", "Structural Engineers", "Tile Layers - Wall/Floor", "Tilers & Slaters"];


    //Create and append the options
    for (var i = 0; i < selectOption.length; i++) {
        var option = document.createElement("option");
        var group = document.createElement('optgroup');
        group.label = selectValue[i];
        option.text = selectOption[i];
        if (i === 0) {
            option.selected = true;
            option.disabled = true;
        }
        group.appendChild(option);
        select.appendChild(group);
    }
}

/**
 * Check if Summary of the Condition of the Property selects the [Other] option - BetterTENG

 * */
function checkIfOther() {
    if (document.getElementById('conditionOfBuilding').value == 'Other') {
        document.getElementById('XiaoKe').style.display = 'block';
        flag = true;
        return 'otherSelected';
    }
    if (flag) {
        if (document.getElementById('conditionOfBuilding').value != 'Other') {
            document.getElementById('XiaoKe').style.display = 'none';
            flag = false;
            return 'otherNotSelected';
        }
    }
    return 'normalCondition';
}

/**
 * Load the select option when the page is open
 */
function loadSelect() {
    //console.log('finally load');
    loadSelectOption('EDSelect0');
    loadSelectOption('EDSelect1');
    loadSelectOption('EDSelect2');
    loadSelectOption('EDSelect3');
    loadSelectOption('EDSelect4');
    loadSelectOption('EDSelect5');
    loadSelectOption('EDSelect6');
    loadSelectOption('EDSelect7');
    loadSelectOption('EDSelect8');

    loadSelectOption('siteAreaRow0_select0');
    loadSelectOption('siteAreaRow0_select1');
    loadSelectOption('siteAreaRow0_select2');
    loadSelectOption('siteAreaRow0_select3');
    loadSelectOption('siteAreaRow0_select4');
    loadSelectOption('siteAreaRow0_select5');

    loadSelectOption('siteAreaRow1_select0');
    loadSelectOption('siteAreaRow1_select1');
    loadSelectOption('siteAreaRow1_select2');
    loadSelectOption('siteAreaRow1_select3');
    loadSelectOption('siteAreaRow1_select4');
    loadSelectOption('siteAreaRow1_select5');

    loadAccessSelectOption('SiteAccessSelect0');
    loadAccessSelectOption('SiteAccessSelect1');

    loadTradeRecommendationOption('siteMinorRecommendationsSelect');
    loadTradeRecommendationOption('siteMajorRecommendationsSelect');



    loadSelectOption('exteriorAreaRow0_select0');
    loadSelectOption('exteriorAreaRow0_select1');
    loadSelectOption('exteriorAreaRow0_select2');
    loadSelectOption('exteriorAreaRow0_select3');
    loadSelectOption('exteriorAreaRow0_select4');
    loadSelectOption('exteriorAreaRow0_select5');
    loadSelectOption('exteriorAreaRow0_select6');
    loadSelectOption('exteriorAreaRow0_select7');

    loadSelectOption('exteriorAreaRow1_select0');
    loadSelectOption('exteriorAreaRow1_select1');
    loadSelectOption('exteriorAreaRow1_select2');
    loadSelectOption('exteriorAreaRow1_select3');
    loadSelectOption('exteriorAreaRow1_select4');
    loadSelectOption('exteriorAreaRow1_select5');

    loadAccessSelectOption('exteriorAccessSelect0');
    loadAccessSelectOption('exteriorAccessSelect1');

    loadTradeRecommendationOption('exteriorMinorRecommendationsSelect');
    loadTradeRecommendationOption('exteriorMajorRecommendationsSelect');


    loadSelectOption('InteriorDryAreaRow0_select0');
    loadSelectOption('InteriorDryAreaRow0_select1');
    loadSelectOption('InteriorDryAreaRow0_select2');
    loadSelectOption('InteriorDryAreaRow0_select3');
    loadSelectOption('InteriorDryAreaRow0_select4');
    loadSelectOption('InteriorDryAreaRow0_select5');
    loadSelectOption('InteriorDryAreaRow0_select6');

    loadSelectOption('InteriorDryAreaRow1_select0');
    loadSelectOption('InteriorDryAreaRow1_select1');
    loadSelectOption('InteriorDryAreaRow1_select2');
    loadSelectOption('InteriorDryAreaRow1_select3');

    loadAccessSelectOption('interiorDryAccessSelect0');
    loadAccessSelectOption('interiorDryAccessSelect1');

    loadTradeRecommendationOption('interiorDryMinorRecommendationsSelect');
    loadTradeRecommendationOption('interiorDryMajorRecommendationsSelect');

    loadSelectOption('InteriorWetAreaRow0_select0');
    loadSelectOption('InteriorWetAreaRow0_select1');
    loadSelectOption('InteriorWetAreaRow0_select2');
    loadSelectOption('InteriorWetAreaRow0_select3');
    loadSelectOption('InteriorWetAreaRow0_select4');
    loadSelectOption('InteriorWetAreaRow0_select5');
    loadSelectOption('InteriorWetAreaRow0_select6');
    loadSelectOption('InteriorWetAreaRow0_select7');
    loadSelectOption('InteriorWetAreaRow0_select8');
    loadSelectOption('InteriorWetAreaRow0_select9');
    loadSelectOption('InteriorWetAreaRow0_select10');
    loadSelectOption('InteriorWetAreaRow0_select11');
    loadSelectOption('InteriorWetAreaRow0_select12');
    loadSelectOption('InteriorWetAreaRow0_select13');
    loadSelectOption('InteriorWetAreaRow0_select14');

    loadAccessSelectOption('interiorWetAccessSelect0');
    loadAccessSelectOption('interiorWetAccessSelect1');

    loadTradeRecommendationOption('interiorWetMinorRecommendationsSelect');
    loadTradeRecommendationOption('interiorWetMajorRecommendationsSelect');


}


/**
 * Add Recommendations
 */
function addRecommendations(selectID, textareaID) {
    //console.log('add recommendation');
    var select = document.getElementById(selectID);
    var text = document.getElementById(textareaID);

    if (select.value != 'Select') {
        text.value = text.value + " " + select.value;
    }

}

/**
 * Clear Recommendations
 */
function clearRecommendations(selectID, textareaID) {
    //console.log('clear');
    var text = document.getElementById(textareaID);
    var select = document.getElementById(selectID);
    text.value = "";
    select.selectedIndex = '0';
}

function moreEvidentDefect() {
    //console.log("click");
    var bigDIV = document.getElementById('EDRow');
    var newID = $('#EDRow').find('> div').length;
    // console.log("currently have select items: " + divNumber);
    //var newID = divNumber + 1;

    //just create a new small div and append to the big div

    var smallDIV = document.createElement('div');
    smallDIV.setAttribute('id', 'ED' + newID);
    smallDIV.setAttribute('class', 'col-sm-4');
    smallDIV.style.marginTop = '10px';
    bigDIV.appendChild(smallDIV);


    //create the input and select into the smallDIV.
    var name = document.createElement('INPUT');
    name.setAttribute('class', 'form-control');
    name.setAttribute('title', 'name');
    name.setAttribute('type', 'text');
    name.style.marginBottom = 0;
    name.id = 'EDName' + newID;
    smallDIV.appendChild(name);

    var selectList = document.createElement("select");
    selectList.id = "EDSelect" + newID;
    selectList.style.width = '100%';
    // var selectOption = ["Choose an item","✔","X","XX","U","NA"];
    var selectOption = ["Choose an item", "√", "X", "XX", "U", "NA"];
    var selectValue = ["", "No visible significant defect", "Maintenance Item or Minor Defect", "Major Defect",
        "Unknown/Inaccessible/Not tested/Not visible", "Not applicable, no such item"];

    //Create and append the options
    for (var i = 0; i < selectOption.length; i++) {
        var option = document.createElement("option");
        var group = document.createElement('optgroup');
        group.label = selectValue[i];

        option.text = selectOption[i];
        group.appendChild(option);
        selectList.appendChild(group);
    }

    smallDIV.appendChild(selectList);
}

function addOneAccessLimitation(tableID, itemID, refID, selectID, noteID) {
    //console.log('your are in');
    var table = document.getElementById(tableID);
    //console.log(tableID);
    var rowCount = table.rows.length;
    var id = rowCount - 1;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);


    //create an item no input for the cell1
    var itemInput = document.createElement('INPUT');
    itemInput.setAttribute('class', 'form-control');
    itemInput.setAttribute('title', 'name');
    itemInput.setAttribute('type', 'text');
    //nameInput.setAttribute('placeholder','enter cost name');
    itemInput.id = itemID + id;
    cell1.appendChild(itemInput);

    //create an image ref number input for the cell2
    var refInput = document.createElement('INPUT');
    refInput.setAttribute('class', 'form-control');
    refInput.setAttribute('title', 'name');
    refInput.setAttribute('type', 'text');
    // lowInput.setAttribute('value','$');
    //lowInput.setAttribute('onblur','calculateRenovationLow()');
    refInput.id = refID + id;
    cell2.appendChild(refInput);



    //create limitation select options for cell 3
    var limitationOption = ["Choose an item", "Reasonably Accessible", "Partially Accessible - Obstructed", "Partially Accessible - Inspection Safety Hazard",
        "Not Accessible - Obstructed", "Not Accessible - Inspection Safety Hazard", "Other"];
    var selectList = document.createElement("select");
    selectList.id = selectID + id;
    selectList.style.width = '100%';

    //Create and append the options
    for (var i = 0; i < limitationOption.length; i++) {
        var option = document.createElement("option");
        option.value = limitationOption[i];
        option.text = limitationOption[i];
        if (i === 0) {
            option.selected = true;
            option.disabled = true;
        }
        selectList.appendChild(option);
    }
    cell3.appendChild(selectList);

    var generalNotes = document.createElement('textarea');
    generalNotes.setAttribute('class', 'form-control');
    generalNotes.setAttribute('title', 'General Notes');
    generalNotes.style.height = '70px';
    generalNotes.id = noteID + id;
    cell4.appendChild(generalNotes);
}

/**
 * Allow user to add one complete room under one section. This includes the input for room's name, the button for add one feature,
 * six default features including input for name and select drop down box.
 * parameter1: bigDivID, this is the div to contains all places and features in this section.
 * use bigDivID as a id base to create other element's id.
 * use the bigDivID and JSON,to find out the number of div in this big div. use for the new row id.
 */

function addOnePlace(bigDivID) {
    var bigDiv = document.getElementById(bigDivID);

    var divNumber = $('#' + bigDivID).find('> div').length;
    //console.log('the divNumber ' + divNumber);

    /**
     * 1. create a small div to hold all inputs, button, select menu.
     */
    var smallDiv = document.createElement('div');
    smallDiv.id = bigDivID + divNumber;
    smallDiv.setAttribute('class', 'col-sm form-group');
    bigDiv.appendChild(smallDiv);

    /**
     * 2. create input for the title of the place
     */
    var name = document.createElement('INPUT');
    name.setAttribute('class', 'form-control');
    name.setAttribute('title', 'name');
    name.setAttribute('placeholder', 'other');
    name.setAttribute('type', 'text');
    name.id = bigDivID + 'Name' + divNumber;
    smallDiv.appendChild(name);


    /**
     *  3. create the button to allow add more feature if the user wants
     */

    //var addFunctionName = "addOneFeature(siteAreaRow" + divNumber + ")";
    var addFunctionName = "addOneFeature(" + bigDivID + "Row" + divNumber + ")";
    //console.log(name);
    //console.log(addFunctionName);
    var button = document.createElement('button');
    button.setAttribute('class', 'btn btn-info');
    button.setAttribute('type', 'button');
    button.setAttribute("onclick", addFunctionName);
    button.style.marginBottom = '10px';
    button.style.marginTop = '10px';
    button.style.fontSize = '18px';
    button.innerHTML = 'Add One Feature';
    smallDiv.appendChild(button);


    /**
     * 4. crate row div to contain all features
     */
    var rowDiv = document.createElement('div');
    rowDiv.id = bigDivID + "Row" + divNumber;
    rowDiv.setAttribute('class', 'row form-group');
    smallDiv.appendChild(rowDiv);

    /**
     * 5 create six default features in the row div
     */
    for (i = 0; i < 6; i++) {
        var nameID = bigDivID + "Row" + divNumber + "_name" + i;
        var selectID = bigDivID + "Row" + divNumber + "_select" + i;
        createDefaultFeature(nameID, selectID, rowDiv);

    }

    /**
     *  create the line breaker
     */
    var line = document.createElement('hr');
    line.style.borderWidth = '5px';
    line.style.borderColor = '#4F4747';
    smallDiv.appendChild(line);

}

function moreAreaRoom() {
    //console.log("want to add one more room");
    var div = document.getElementById('SiteAreaDiv');
    var divNumber = $('#SiteAreaDiv').find('> div').length;
    //console.log(divNumber);
    var divID = 'siteArea' + divNumber;
    //console.log(divID);

    //1. create the big div to hold all the input
    var siteAreaDiv = document.createElement('div');
    siteAreaDiv.id = 'siteArea' + divNumber;
    siteAreaDiv.setAttribute('class', 'col-sm form-group');
    div.appendChild(siteAreaDiv);

    //2. create input for the title of the input
    var name = document.createElement('INPUT');
    name.setAttribute('class', 'form-control');
    name.setAttribute('title', 'name');

    name.id = 'SiteAreaName' + divNumber;
    siteAreaDiv.appendChild(name);

    //3. create the button to allow add more feature as the user wants

    var addFunctionName = "addOneFeature(siteAreaRow" + divNumber + ")";
    var button = document.createElement('button');
    button.setAttribute('class', 'btn btn-info');
    button.setAttribute('type', 'button');
    button.setAttribute("onclick", addFunctionName);
    button.style.marginBottom = '10px';
    button.style.marginTop = '10px';
    button.style.fontSize = '18px';
    button.innerHTML = 'Add One Feature';

    siteAreaDiv.appendChild(button);



    //4. crate row div to contain all features
    var row = document.createElement('div');
    row.id = "siteAreaRow" + divNumber;
    row.setAttribute('class', 'row form-group');
    siteAreaDiv.appendChild(row);

    //5. create six default features


    var nameID0 = "siteAreaRow" + divNumber + "_name0";
    var selectID0 = "siteAreaRow" + divNumber + "_select0";
    createDefaultFeature(nameID0, selectID0, row);

    var nameID1 = "siteAreaRow" + divNumber + "_name1";
    var selectID1 = "siteAreaRow" + divNumber + "_select1";
    createDefaultFeature(nameID1, selectID1, row);

    var nameID2 = "siteAreaRow" + divNumber + "_name2";
    var selectID2 = "siteAreaRow" + divNumber + "_select2";
    createDefaultFeature(nameID2, selectID2, row);

    var nameID3 = "siteAreaRow" + divNumber + "_name3";
    var selectID3 = "siteAreaRow" + divNumber + "_select3";
    createDefaultFeature(nameID3, selectID3, row);

    var nameID4 = "siteAreaRow" + divNumber + "_name4";
    var selectID4 = "siteAreaRow" + divNumber + "_select4";
    createDefaultFeature(nameID4, selectID4, row);

    var nameID5 = "siteAreaRow" + divNumber + "_name5";
    var selectID5 = "siteAreaRow" + divNumber + "_select5";
    createDefaultFeature(nameID5, selectID5, row);

    //6. create the line breaker
    var line = document.createElement('hr');
    line.style.borderWidth = '5px';
    line.style.borderColor = '#4F4747';
    siteAreaDiv.appendChild(line);

}

function createDefaultFeature(nameID, selectID, rowDIV) {
    //console.log(rowDIV);
    var div = document.createElement('div');
    div.setAttribute('class', 'col-sm-4');
    div.style.marginTop = '20px';

    // var emptyLine = document.createElement('br');
    // div.appendChild(emptyLine);

    var input = document.createElement('INPUT');
    input.id = nameID;
    input.setAttribute('class', 'form-control');
    input.setAttribute('placeholder', 'feature');
    input.setAttribute('type', 'text');
    input.style.fontSize = '18px';
    div.appendChild(input);

    //create  select options
    var selectList = document.createElement("select");
    selectList.id = selectID;
    selectList.style.width = '100%';
    //var selectOption = ["Choose an item","✔","X","XX","U","NA"];
    var selectOption = ["Choose an item", "√", "X", "XX", "U", "NA"];
    var selectValue = ["", "No visible significant defect", "Maintenance Item or Minor Defect", "Major Defect",
        "Unknown/Inaccessible/Not tested/Not visible", "Not applicable, no such item"];


    //Create and append the options
    for (var i = 0; i < selectOption.length; i++) {
        var option = document.createElement("option");
        var group = document.createElement('optgroup');
        group.label = selectValue[i];

        option.text = selectOption[i];
        group.appendChild(option);
        selectList.appendChild(group);
    }

    div.appendChild(selectList);
    //console.log(rowDIV);
    rowDIV.appendChild(div);

}

function addOneFeature(id) {
    //console.log(id);
    var divNumber = $(id).find('> div').length;
    //console.log(divNumber);

    var basicID = id.id;
    //console.log(basicID);

    var nameID = basicID + "_name" + divNumber;
    var selectID = basicID + "_select" + divNumber;
    //console.log(nameID);
    //console.log(selectID);
    createDefaultFeature(nameID, selectID, id);

}

function addOneDefects(tableID, itemID, imageRefID, noteID) {
    //console.log('your are in');
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var id = rowCount - 1;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    //create an name input for the cell1
    var nameInput = document.createElement('INPUT');
    nameInput.setAttribute('class', 'form-control');
    nameInput.setAttribute('title', 'name');
    nameInput.setAttribute('type', 'text');
    //nameInput.setAttribute('placeholder','enter cost name');
    nameInput.id = itemID + id;
    cell1.appendChild(nameInput);

    //create an image ref input for the cell2
    var imageRef = document.createElement('INPUT');
    imageRef.setAttribute('class', 'form-control');
    imageRef.setAttribute('title', 'name');
    imageRef.setAttribute('type', 'text');
    // lowInput.setAttribute('value','$');
    //lowInput.setAttribute('onblur','calculateRenovationLow()');
    imageRef.id = imageRefID + id;
    cell2.appendChild(imageRef);


    var generalNotes = document.createElement('textarea');
    generalNotes.setAttribute('class', 'form-control');
    generalNotes.setAttribute('title', 'General Notes');
    generalNotes.style.height = '50px';
    generalNotes.id = noteID + id;
    cell3.appendChild(generalNotes);
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

//Upload photos button to trigger input file.
$("#CP_uploadImg_Btn").click(function () {
    $("#CP_ImgsUpload").trigger("click");
});

var photos_count = 1;

//Photos upload file
$("#CP_ImgsUpload").change(function (e) {
    if ($("#CP_BookingNo").val() === "0") {
        alert("Please select booking from main page. ");
        $(location).attr("href", "index.php");
    } else {
        //Store how many files user has selected.
        const totalFiles = e.currentTarget.files;
        //    console.log("File number: " + totalFiles.length);

        //Only action when user has selected file.
        if (totalFiles.length > 0) {
            //Show load document message.
            //            $("#Img-loader").show();

            //Loop each file.
            Object.keys(totalFiles).forEach(i => {
                const file = totalFiles[i];

                //Create elements for img.
                //element[imgContainerID, newImgID, imgTextID, imgRmBtnID,imgLabelID]
                const element = createPhoto(photos_count);
                photos_count++;

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
    
                                doUploadFile(imgFile, element[1], element[2], element[3], "", "CPImagesTable", element[4], element[0],'','','','','',element[5],element[6]);

                                $("#CPImagesTable").show();
                            }
                        };
                        image.src = data;
                    }, {
                        canvas: true,
                        orientation: orientation
                    });
                });

                // var reader = new FileReader();
                // reader.onload = function (e) {
                //     //                imgFile.src = e.target.result
                //     var data = e.target.result;
                //     var image = new Image();
                //     image.onload = function () {
                //         var width = image.width;
                //         var height = image.height;

                //         var code = resizeImage_Canvas(image).toDataURL("image/png");

                //         if (!isEmpty(code)) {
                //             $("#" + element[1]).attr("src", code);

                //             var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                //                 type: file.type,
                //                 lastModified: file.lastModifiedDate
                //             });

                //             //                            console.log("UploadID: " + imgFile, element[1], element[2], element[3], "", "CP_ImgsContents");
                //             doUploadFile(imgFile, element[1], element[2], element[3], "", "CPImagesTable", element[4]);

                //             //                            $("#Imgpage-loader").hide();
                //             $("#CPImagesTable").show();
                //         }
                //     };
                //     image.src = data;
                // };
                // reader.readAsDataURL(file);
            });
        }
        automaticNumbering();
    }
});

//Photos page; create html image, text, remove button and container.
function createPhoto(id) {
    var imgContainer = document.createElement("div"),
        newImg = document.createElement("img"),
        imgText = document.createElement("input"),
        imgLabel = document.createElement("label"),
        imgRmBtn = document.createElement("button"),
        lastContainer = document.getElementById("CPImagesTable"),
        rotateBtn = document.createElement("button"),
        angleInput = document.createElement("input"),
        //        newImgID = id + "_CPAddImg",
        //        imgTextID = id + "_CPimgText",
        //        imgLabelID = id + "_CPimgLabel",
        //        imgRmBtnID = id + "_CPimgRmBtn";
        imgContainerID = id + "_CPimgContainer",
        newImgID = 'CPImage' + id,
        imgTextID = "CPImageText" + id,
        imgLabelID = "imageCaption" + id,
        imgRmBtnID = "CPImageRemoveButton" + id
        rotateBtnID = "CPImgRotateBtn" + id,
        angleInputID = "CPImgAngle" + id;


    //Setting element's attribute.
    imgContainer.setAttribute("id", imgContainerID);

    imgLabel.setAttribute("id", imgLabelID);
    //    imgLabel.setAttribute("value", "IMG " + id);

    newImg.setAttribute("id", newImgID);
    //    newImg.setAttribute("width", 200);
    //    newImg.setAttribute("height", 200);

    imgText.setAttribute("id", imgTextID);
    imgText.setAttribute("type", "text");
    imgText.setAttribute("class", "form-control");
    //    imgText.setAttribute("size", 200);

    imgRmBtn.setAttribute("id", imgRmBtnID);
    imgRmBtn.setAttribute("class", "btn btn-danger");
    imgRmBtn.innerHTML = "Remove";
    

    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");
    rotateBtn.innerHTML = "Rotate";


    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.display = "none";

    lastContainer.appendChild(imgContainer);
    document.getElementById(imgContainerID).appendChild(newImg);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(imgLabel);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(imgText);
    document.getElementById(imgContainerID).appendChild(angleInput);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(imgRmBtn);
    document.getElementById(imgContainerID).appendChild(document.createElement("br"));
    document.getElementById(imgContainerID).appendChild(rotateBtn);

    var elements = [imgContainerID, newImgID, imgTextID, imgRmBtnID, imgLabelID,rotateBtnID,angleInputID];

    //$("#" + imgLabelID).html("IMG " + id);
    
    //Photos images remove button listerner.
    $("#" + imgRmBtnID).click(function () {
        imagesRemoveBtn(imgContainerID, newImgID);
    });
    $("#" + rotateBtnID).click(function () {
        rotateOneImage(id);
    });
    return elements;
}

//Photos page; images remove button action.
function imagesRemoveBtn(containerID, imgID) {
    //console.log(containerID);
    var container = $("#" + containerID).remove();
    //    console.log("Remove ID: " + imgID);
    doRemovePhoto(imgID);
    automaticNumbering();
}

function rotateOneImage(ID)
{
    console.log("click");
    var angelInputID = "CPImgAngle" + ID;
    var imgID = 'CPImage' + ID;
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
            height = MAX_HEIGHT;
            width = MAX_WIDTH;
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
