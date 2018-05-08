/**
 * Created by Fafa on 27/12/17.
 */



// $(document).ready(function(){
//     //alert("ok");
//     loadSelect();
// });

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


//function CPUploadImages()
//{
//    document.getElementById('CPUploadImages').click();
//}
//
//$('#CPUploadImages').change(function(){
//    $("#CPImagesDIV").empty();
//    var table = document.getElementById("CPImagesTable");
//    table.style.display = 'block';
//    var count = this.files.length;
//    var imageFile = this.files;
//   // console.log(count);
//
//    for (var i = 0; i<count;i++)
//    {
//        try {
//            //noinspection ExceptionCaughtLocallyJS
//            throw i
//        }
//        catch (ii) {
//            setTimeout(function ()
//            {
//                var nameID = ii + 1;
//                var altName = 'Image ' + nameID;
//                var imageID = 'CPImage' + ii;
//                var textID = 'CPImageText' + ii;
//                var removeButtonID = 'CPImageRemoveButton' + ii;
//                var addButtonID = 'CPImageAddButton' + ii;
//                var uploadID = 'CPImageUpload' + ii;
//                var labelID = "imageCaption" + ii;
//                //ImageNo
//
//                //var removeFunction = 'RemoveDilapidationImage' + ii + '()';
//                //addDrawing();
//                addImageElements(altName,imageID, textID, removeButtonID, addButtonID, uploadID,
//                    'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '485px', '485px');
//
//                loadImage.parseMetaData(imageFile[ii], function (data) {
//                    //console.log('I am in loadImage function');
//                    var orientation = 0;
//                    var date = new Date();
//                    var imageName = imageFile[ii].name;
//                    var imageType = imageFile[ii].type;
//                    var image = document.getElementById(imageID);
//                    var removeButton = document.getElementById(removeButtonID);
//                    var description  = document.getElementById(textID);
//                    var addButton = document.getElementById(addButtonID);
//                    var label = document.getElementById(labelID);
//                    //if exif data available, update orientation
//                    if (data.exif) {
//                        orientation = data.exif.get('Orientation');
//                    }
//                    var loadingImage = loadImage(imageFile[ii], function (canvas) {
//                            var base64data = canvas.toDataURL(imageType);
//                            //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                            image.setAttribute('src',base64data);
//                            //$(selectionImage).attr('src',base64data);
//                            removeButton.style.display = 'block';
//                            removeButton.style.width = '480px';
//                            addButton.style.display = 'none';
//                            addButton.style.width = '480px';
//                            description.style.display = 'block';
//                            image.style.display = 'block';
//                            image.style.width = '480px';
//                            description.style.width = '480px';
//                            label.style.display = 'block';
//                            // image.style.height = '250px';
//                            var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
//                            //console.log(file);
//                            doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'CPImagesTable',altName,'CPImagesDIV',uploadID,'removeOneCPImage(this.id)','addOneCPImage(this.id)','480px','480px');
//
//                        },
//                        {
//                            canvas: true,
//                            orientation: orientation,
//                            maxWidth:1500,
//                            maxHeight:1200
//                        }
//                    );
//                });
//
//            }, 200);
//        }
//    }
//    setTimeout(function(){
//        //addDrawing();
//        var altID= count + 1;
//        var altName = 'Image' + altID;
//        var imageID = 'CPImage' + count;
//        var textID = 'CPImageText' + count;
//        var removeButtonID = 'CPImageRemoveButton' + count;
//        var addButtonID = 'CPImageAddButton' + count;
//        var uploadID = 'CPImageUpload' + count;
//        addImageElements(altName,imageID, textID, removeButtonID, addButtonID, uploadID,
//            'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '485px', '485px');
//
//    },400)
//
//
//
//});
//
//function removeOneCPImage(click_id)
//{
//    var selectedID = String(click_id);
//    var id = selectedID.replace ( /[^\d.]/g, '' );
//    var imageID = 'CPImage' + id;
//    var removeButtonID = 'CPImageRemoveButton' + id;
//    var addButtonID = 'CPImageAddButton' + id;
//    var descriptionID = 'CPImageText' + id;
//    var labelID = "imageCaption" + id;
//
//
//    var imageSelect = '#' + imageID;
//    $(imageSelect).attr('src', '#');
//    var image = document.getElementById(imageID);
//    var button = document.getElementById(removeButtonID);
//    var addButton = document.getElementById(addButtonID);
//    var description = document.getElementById(descriptionID);
//    var label = document.getElementById(labelID);
//
//    button.style.display = 'none';
//    addButton.style.display = 'block';
//    description.value = "";
//    description.style.display = 'none';
//    label.style.display = 'none';
//    //image.style.width = '0px';
//    image.style.display = 'none';
//    doRemovePhoto(imageID);
//}
//
//function addOneCPImage(click_id)
//{
//    //console.log(click_id);
//
//    var id;
//    var selectedID = String(click_id);
//    id = selectedID.replace ( /[^\d.]/g, '' );
//    var nameID = Number(id) + 1;
//    var altName = 'Image ' + nameID;
//    var imageID = 'CPImage' + id;
//    var textID = 'CPImageText' + id;
//    var removeButtonID = 'CPImageRemoveButton' + id;
//    var addButtonID = 'CPImageAddButton' + id;
//    var uploadID = 'CPImageUpload' + id;
//    var labelID = "imageCaption" + id;
//    // console.log(uploadID);
//    var x = document.getElementById(uploadID);
//    x.click();
//    x.addEventListener('change',function(){
//        if (this.files && this.files[0]) {
//            var imageFile = this.files[0];
//            //load the image src to the current imageID.
//            loadImage.parseMetaData(imageFile, function (data) {
//                //console.log('I am in loadImage function');
//                var orientation = 0;
//                var date = new Date();
//                // var selectionImage = '#AdviceImage' + ii;
//                var imageName = imageFile.name;
//                var imageType = imageFile.type;
//                var image = document.getElementById(imageID);
//                var removeButton = document.getElementById(removeButtonID);
//                var description  = document.getElementById(textID);
//                var addButton = document.getElementById(addButtonID);
//                var label = document.getElementById(labelID);
//                //if exif data available, update orientation
//                if (data.exif) {
//                    orientation = data.exif.get('Orientation');
//                }
//                var loadingImage = loadImage(imageFile, function (canvas) {
//                        var base64data = canvas.toDataURL(imageType);
//                        //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                        image.setAttribute('src',base64data);
//                        //$(selectionImage).attr('src',base64data);
//                        removeButton.style.display = 'block';
//                        removeButton.style.width = '480px';
//                        addButton.style.display = 'none';
//                        description.style.display = 'block';
//                        image.style.display = 'block';
//                        image.style.width = '480px';
//                        label.style.display = 'block';
//                        // image.style.height = '250px';
//                        var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
//                        //console.log(file);
//                        doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'CPImagesTable',altName,'CPImagesDIV',uploadID,'removeCPHOWImage(this.id)','addOneCPImage(this.id)','480px','480px');
//                    },
//                    {
//                        canvas: true,
//                        orientation: orientation,
//                        maxWidth:1500,
//                        maxHeight:1200
//                    }
//                );
//            });
//        }
//    });
//
//
//    var lastImage = document.getElementById('CPImagesDIV').lastElementChild.lastChild.firstChild;
//    var newID = Number(lastImage.id.replace( /[^\d.]/g, '' ))+1;
//    var altID = Number(newID) + 1;
//    nextAltName = 'Image  ' + altID;
//    //console.log("I am here!!! need another image element ,the next id  " + newID);
//    var nextImageID = 'CPImage' + newID;
//    var nextTextID = 'CPImageText' + newID;
//    var nextRemoveButtonID = 'CPImageRemoveButton' + newID;
//    var nextAddButtonID = 'CPImageAddButton' + newID;
//    var nextUploadID = 'CPImageUpload' + newID;
//    addImageElements(nextAltName, nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
//        'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '480px', '0px');
//
//
//}

//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
//function addImageElements(imageAltName, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize, width) {
//    var BigContainer = document.getElementById('CPImagesDIV');
//
//    //var BigContainer = document.getElementById(divID);
//    var form = document.createElement("form");
//    form.className = "Image";
//    // console.log(form);
//    //form.setAttribute("class","divForm");
//    //need four dividends in a form
//    var container1 = document.createElement("div");
//    var container2 = document.createElement("div");
//    var container3 = document.createElement("div");
//    var container4 = document.createElement("div");
//    var container5 = document.createElement("div");
//
//    container1.setAttribute("class", "col-sm");
//    container2.setAttribute("class", "col-sm");
//    container3.setAttribute("class", "col-sm");
//    container4.setAttribute("class", "col-sm");
//    container5.setAttribute("class", "col-sm");
//
//
//    //crate an image area
//    var img = document.createElement('img');
//    img.src = "#";
//    img.alt = imageAltName;
//    img.id = imageID;
//    img.style.display = 'none';
//    img.style.marginLeft = '10px';
//    img.style.width = width;
//    img.style.height = imageSize;
//    img.style.paddingTop = '10px';
//    img.title = "Image";
//
//    //create an lable
//    container2.style.textAlign = 'center';
//    var label = document.createElement('label');
//    //label.className = "Label";
//    label.style.width = imageSize;
//    label.style.height = "15px";
//    var givenID = imageID.replace(/[^\d.]/g, '');
//    var labelID = "imageCaption" + givenID;
//    label.id = labelID;
//    //console.log("the id " + givenID);
//    var imageNo = Number(givenID) + 1;
//    label.textContent = "IMG " + imageNo;
//    label.setAttribute("class", "figurecaption");
//    label.style.display = 'none';
//
//
//    //create an input for the text
//    var textInput = document.createElement('INPUT');
//    textInput.type = 'text';
//    // textInput.setAttribute("type", "text");
//    textInput.style.width = imageSize;
//    textInput.style.marginLeft = '10px';
//    textInput.style.height = "10px";
//    textInput.style.display = 'none';
//    textInput.id = imageTextID;
//
//    //create an input for the remove button
//    var removeButton = document.createElement('INPUT');
//    removeButton.setAttribute("type", "button");
//    removeButton.setAttribute("value", "Remove");
//    removeButton.setAttribute("onclick", removeFunction);
//    removeButton.id = removeButtonID;
//    //removeButton.onclick = removeFunction;
//    removeButton.style.width = imageSize;
//    removeButton.style.marginLeft = '10px';
//    removeButton.style.height = "25px";
//    removeButton.style.display = "none";
//
//
//    //create an input for add button
//    var addButton = document.createElement('INPUT');
//    addButton.setAttribute("type", "button");
//    addButton.setAttribute("value", "Add");
//    addButton.setAttribute("onclick", addFunction);
//    addButton.id = addButtonID;
//    addButton.style.width = imageSize;
//    addButton.style.marginLeft = '10px';
//    addButton.style.height = "25px";
//    addButton.style.display = 'block';
//    addButton.style.marginTop = '20px';
//
//    //create an input for file, to upload images, this is the one with upload action
//    var uploadFile = document.createElement('INPUT');
//    uploadFile.setAttribute("type", "file");
//    uploadFile.id = uploadFileID;
//    uploadFile.setAttribute("class", "inputImage");
//    uploadFile.setAttribute("accept", "image/x-png,image/jpeg");
//
//    uploadFile.style.display = 'none';
//
//
//
//
//    //put all elements into the correct container
//    //BigContainer.appendChild(form);
//    BigContainer.appendChild(form);
//    form.appendChild(container1);
//    form.appendChild(container2);
//    form.appendChild(container3);
//    form.appendChild(container4);
//    form.appendChild(container5);
//    container1.appendChild(img);
//    container2.appendChild(label);
//    container3.appendChild(textInput);
//    container4.appendChild(removeButton);
//    container4.appendChild(addButton);
//    container5.appendChild(uploadFile);
//}

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

var photos_count = 0;

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

                var reader = new FileReader();
                reader.onload = function (e) {
                    //                imgFile.src = e.target.result
                    var data = e.target.result
                    var image = new Image();
                    image.onload = function () {
                        var width = image.width;
                        var height = image.height;

                        var code = resizeImage_Canvas(image).toDataURL("image/png");

                        if (!isEmpty(code)) {
                            $("#" + element[1]).attr("src", code);

                            var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                type: file.type,
                                lastModified: file.lastModifiedDate
                            });

                            //                            console.log("UploadID: " + imgFile, element[1], element[2], element[3], "", "CP_ImgsContents");
                            doUploadFile(imgFile, element[1], element[2], element[3], "", "CPImagesTable", element[4]);

                            //                            $("#Imgpage-loader").hide();
                            $("#CPImagesTable").show();
                        }
                    };
                    image.src = data;
                };
                reader.readAsDataURL(file);
            })
        }
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
        imgContainerID = id + "_CPimgContainer",
        //        newImgID = id + "_CPAddImg",
        //        imgTextID = id + "_CPimgText",
        //        imgLabelID = id + "_CPimgLabel",
        //        imgRmBtnID = id + "_CPimgRmBtn";
        newImgID = 'CPImage' + id,
        imgTextID = "CPImageText" + id,
        imgLabelID = "imageCaption" + id,
        imgRmBtnID = "CPImageRemoveButton" + id;

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

    lastContainer.appendChild(imgContainer);
    document.getElementById(imgContainerID).appendChild(newImg);
    document.getElementById(imgContainerID).appendChild(document.createElement('br'));
    document.getElementById(imgContainerID).appendChild(imgLabel);
    document.getElementById(imgContainerID).appendChild(imgText);
    document.getElementById(imgContainerID).appendChild(imgRmBtn);

    var elements = [imgContainerID, newImgID, imgTextID, imgRmBtnID, imgLabelID];

    $("#" + imgLabelID).html("IMG " + id);
    $("#" + imgRmBtnID).html("Remove");
    //Photos images remove button listerner.
    $("#" + imgRmBtnID).click(function () {
        imagesRemoveBtn(imgContainerID, newImgID);
    });
    return elements;
}

//Photos page; images remove button action.
function imagesRemoveBtn(containerID, imgID) {
    var container = $("#" + containerID).remove();
    //    console.log("Remove ID: " + imgID);
    doRemovePhoto(imgID);
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
