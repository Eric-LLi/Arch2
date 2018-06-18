/**
 * Created by Fafa on 20/12/17.
 */



function loadSelectOption(id) {
    var select = document.getElementById(id);

    var selectOption = ["Choose an item", "√", 'X', '--', 'U', 'IW', 'R', 'P', 'N'];
    var selectValue = [" ", "No Defects Evident", "Defect Evident", "Not Relevant", "Untested",
        "Incomplete Work", "Reasonable Access", "Partial Access", 'Not Accessible'];


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



function loadSelect() {
    loadSelectOption('HOWSiteSelect0');
    loadSelectOption('HOWSiteSelect1');
    loadSelectOption('HOWSiteSelect2');
    loadSelectOption('HOWSiteSelect3');
    loadSelectOption('HOWSiteSelect4');
    loadSelectOption('HOWSiteSelect5');
    loadSelectOption('HOWSiteSelect6');
    loadSelectOption('HOWSiteSelect7');
    loadSelectOption('HOWSiteSelect8');
    loadSelectOption('HOWSiteSelect9');

    loadSelectOption('HOWBuildingSelect0');
    loadSelectOption('HOWBuildingSelect1');
    loadSelectOption('HOWBuildingSelect2');
    loadSelectOption('HOWBuildingSelect3');
    loadSelectOption('HOWBuildingSelect4');
    loadSelectOption('HOWBuildingSelect5');
    loadSelectOption('HOWBuildingSelect6');
    loadSelectOption('HOWBuildingSelect7');
    loadSelectOption('HOWBuildingSelect8');
    loadSelectOption('HOWBuildingSelect9');
    loadSelectOption('HOWBuildingSelect10');
    loadSelectOption('HOWBuildingSelect11');
    loadSelectOption('HOWBuildingSelect12');
    loadSelectOption('HOWBuildingSelect13');
    loadSelectOption('HOWBuildingSelect14');
    loadSelectOption('HOWBuildingSelect15');
    loadSelectOption('HOWBuildingSelect16');
    loadSelectOption('HOWBuildingSelect17');

    loadSelectOption('HOWSubFloorSelect0');
    loadSelectOption('HOWSubFloorSelect1');
    loadSelectOption('HOWSubFloorSelect2');
    loadSelectOption('HOWSubFloorSelect3');
    loadSelectOption('HOWSubFloorSelect4');
    loadSelectOption('HOWSubFloorSelect5');
    loadSelectOption('HOWSubFloorSelect6');


    loadSelectOption('HOWRoofVoidSelect0');
    loadSelectOption('HOWRoofVoidSelect1');
    loadSelectOption('HOWRoofVoidSelect2');
    loadSelectOption('HOWRoofVoidSelect3');
    loadSelectOption('HOWRoofVoidSelect4');
    loadSelectOption('HOWRoofVoidSelect5');


    loadSelectOption('HOWOutBuildingPlace0Select0');
    loadSelectOption('HOWOutBuildingPlace0Select1');
    loadSelectOption('HOWOutBuildingPlace0Select2');
    loadSelectOption('HOWOutBuildingPlace0Select3');
    loadSelectOption('HOWOutBuildingPlace0Select4');
    loadSelectOption('HOWOutBuildingPlace0Select5');
    loadSelectOption('HOWOutBuildingPlace0Select6');
    loadSelectOption('HOWOutBuildingPlace0Select7');


    loadSelectOption('HOWOutBuildingPlace1Select0');
    loadSelectOption('HOWOutBuildingPlace1Select1');
    loadSelectOption('HOWOutBuildingPlace1Select2');
    loadSelectOption('HOWOutBuildingPlace1Select3');
    loadSelectOption('HOWOutBuildingPlace1Select4');
    loadSelectOption('HOWOutBuildingPlace1Select5');
    loadSelectOption('HOWOutBuildingPlace1Select6');
    loadSelectOption('HOWOutBuildingPlace1Select7');

    loadSelectOption('HOWOutBuildingPlace2Select0');
    loadSelectOption('HOWOutBuildingPlace2Select1');
    loadSelectOption('HOWOutBuildingPlace2Select2');
    loadSelectOption('HOWOutBuildingPlace2Select3');
    loadSelectOption('HOWOutBuildingPlace2Select4');
    loadSelectOption('HOWOutBuildingPlace2Select5');
    loadSelectOption('HOWOutBuildingPlace2Select6');
    loadSelectOption('HOWOutBuildingPlace2Select7');


    loadSelectOption('HOWServicesSelect0');
    loadSelectOption('HOWServicesSelect1');
    loadSelectOption('HOWServicesSelect2');
    loadSelectOption('HOWServicesSelect3');

    loadSelectOption('HOWInternal_EntrySelect0');
    loadSelectOption('HOWInternal_EntrySelect1');
    loadSelectOption('HOWInternal_EntrySelect2');
    loadSelectOption('HOWInternal_EntrySelect3');
    loadSelectOption('HOWInternal_EntrySelect4');
    loadSelectOption('HOWInternal_EntrySelect5');
    loadSelectOption('HOWInternal_EntrySelect6');
    loadSelectOption('HOWInternal_EntrySelect7');
    loadSelectOption('HOWInternal_EntrySelect8');
    loadSelectOption('HOWInternal_EntrySelect9');
    loadSelectOption('HOWInternal_EntrySelect10');

    loadSelectOption('HOWInternal_StairSelect0');
    loadSelectOption('HOWInternal_StairSelect1');
    loadSelectOption('HOWInternal_StairSelect2');
    loadSelectOption('HOWInternal_StairSelect3');
    loadSelectOption('HOWInternal_StairSelect4');
    loadSelectOption('HOWInternal_StairSelect5');
    loadSelectOption('HOWInternal_StairSelect6');
    loadSelectOption('HOWInternal_StairSelect7');
    loadSelectOption('HOWInternal_StairSelect8');
    loadSelectOption('HOWInternal_StairSelect9');
    loadSelectOption('HOWInternal_StairSelect10');

    loadSelectOption('HOWInternal_LivingFrontSelect0');
    loadSelectOption('HOWInternal_LivingFrontSelect1');
    loadSelectOption('HOWInternal_LivingFrontSelect2');
    loadSelectOption('HOWInternal_LivingFrontSelect3');
    loadSelectOption('HOWInternal_LivingFrontSelect4');
    loadSelectOption('HOWInternal_LivingFrontSelect5');
    loadSelectOption('HOWInternal_LivingFrontSelect6');
    loadSelectOption('HOWInternal_LivingFrontSelect7');
    loadSelectOption('HOWInternal_LivingFrontSelect8');
    loadSelectOption('HOWInternal_LivingFrontSelect9');
    loadSelectOption('HOWInternal_LivingFrontSelect10');


    loadSelectOption('HOWInternal_LoungeSelect0');
    loadSelectOption('HOWInternal_LoungeSelect1');
    loadSelectOption('HOWInternal_LoungeSelect2');
    loadSelectOption('HOWInternal_LoungeSelect3');
    loadSelectOption('HOWInternal_LoungeSelect4');
    loadSelectOption('HOWInternal_LoungeSelect5');
    loadSelectOption('HOWInternal_LoungeSelect6');
    loadSelectOption('HOWInternal_LoungeSelect7');
    loadSelectOption('HOWInternal_LoungeSelect8');
    loadSelectOption('HOWInternal_LoungeSelect9');
    loadSelectOption('HOWInternal_LoungeSelect10');

    loadSelectOption('HOWInternal_KitchenSelect0');
    loadSelectOption('HOWInternal_KitchenSelect1');
    loadSelectOption('HOWInternal_KitchenSelect2');
    loadSelectOption('HOWInternal_KitchenSelect3');
    loadSelectOption('HOWInternal_KitchenSelect4');
    loadSelectOption('HOWInternal_KitchenSelect5');
    loadSelectOption('HOWInternal_KitchenSelect6');
    loadSelectOption('HOWInternal_KitchenSelect7');
    loadSelectOption('HOWInternal_KitchenSelect8');
    loadSelectOption('HOWInternal_KitchenSelect9');
    loadSelectOption('HOWInternal_KitchenSelect10');
    loadSelectOption('HOWInternal_KitchenSelect11');
    loadSelectOption('HOWInternal_KitchenSelect12');
    loadSelectOption('HOWInternal_KitchenSelect13');
    loadSelectOption('HOWInternal_KitchenSelect14');
    loadSelectOption('HOWInternal_KitchenSelect15');
    loadSelectOption('HOWInternal_KitchenSelect16');




    loadSelectOption('HOWInternal_FamilySelect0');
    loadSelectOption('HOWInternal_FamilySelect1');
    loadSelectOption('HOWInternal_FamilySelect2');
    loadSelectOption('HOWInternal_FamilySelect3');
    loadSelectOption('HOWInternal_FamilySelect4');
    loadSelectOption('HOWInternal_FamilySelect5');
    loadSelectOption('HOWInternal_FamilySelect6');
    loadSelectOption('HOWInternal_FamilySelect7');
    loadSelectOption('HOWInternal_FamilySelect8');
    loadSelectOption('HOWInternal_FamilySelect9');
    loadSelectOption('HOWInternal_FamilySelect10');


    loadSelectOption('HOWInternal_DiningSelect0');
    loadSelectOption('HOWInternal_DiningSelect1');
    loadSelectOption('HOWInternal_DiningSelect2');
    loadSelectOption('HOWInternal_DiningSelect3');
    loadSelectOption('HOWInternal_DiningSelect4');
    loadSelectOption('HOWInternal_DiningSelect5');
    loadSelectOption('HOWInternal_DiningSelect6');
    loadSelectOption('HOWInternal_DiningSelect7');
    loadSelectOption('HOWInternal_DiningSelect8');
    loadSelectOption('HOWInternal_DiningSelect9');
    loadSelectOption('HOWInternal_DiningSelect10');

    loadSelectOption('HOWInternal_Bedroom1Select0');
    loadSelectOption('HOWInternal_Bedroom1Select1');
    loadSelectOption('HOWInternal_Bedroom1Select2');
    loadSelectOption('HOWInternal_Bedroom1Select3');
    loadSelectOption('HOWInternal_Bedroom1Select4');
    loadSelectOption('HOWInternal_Bedroom1Select5');
    loadSelectOption('HOWInternal_Bedroom1Select6');
    loadSelectOption('HOWInternal_Bedroom1Select7');
    loadSelectOption('HOWInternal_Bedroom1Select8');
    loadSelectOption('HOWInternal_Bedroom1Select9');
    loadSelectOption('HOWInternal_Bedroom1Select10');


    loadSelectOption('HOWInternal_Bedroom2Select0');
    loadSelectOption('HOWInternal_Bedroom2Select1');
    loadSelectOption('HOWInternal_Bedroom2Select2');
    loadSelectOption('HOWInternal_Bedroom2Select3');
    loadSelectOption('HOWInternal_Bedroom2Select4');
    loadSelectOption('HOWInternal_Bedroom2Select5');
    loadSelectOption('HOWInternal_Bedroom2Select6');
    loadSelectOption('HOWInternal_Bedroom2Select7');
    loadSelectOption('HOWInternal_Bedroom2Select8');
    loadSelectOption('HOWInternal_Bedroom2Select9');
    loadSelectOption('HOWInternal_Bedroom2Select10');

    loadSelectOption('HOWInternal_Bedroom3Select0');
    loadSelectOption('HOWInternal_Bedroom3Select1');
    loadSelectOption('HOWInternal_Bedroom3Select2');
    loadSelectOption('HOWInternal_Bedroom3Select3');
    loadSelectOption('HOWInternal_Bedroom3Select4');
    loadSelectOption('HOWInternal_Bedroom3Select5');
    loadSelectOption('HOWInternal_Bedroom3Select6');
    loadSelectOption('HOWInternal_Bedroom3Select7');
    loadSelectOption('HOWInternal_Bedroom3Select8');
    loadSelectOption('HOWInternal_Bedroom3Select9');
    loadSelectOption('HOWInternal_Bedroom3Select10');

    loadSelectOption('HOWInternal_Bedroom4Select0');
    loadSelectOption('HOWInternal_Bedroom4Select1');
    loadSelectOption('HOWInternal_Bedroom4Select2');
    loadSelectOption('HOWInternal_Bedroom4Select3');
    loadSelectOption('HOWInternal_Bedroom4Select4');
    loadSelectOption('HOWInternal_Bedroom4Select5');
    loadSelectOption('HOWInternal_Bedroom4Select6');
    loadSelectOption('HOWInternal_Bedroom4Select7');
    loadSelectOption('HOWInternal_Bedroom4Select8');
    loadSelectOption('HOWInternal_Bedroom4Select9');
    loadSelectOption('HOWInternal_Bedroom4Select10');

    loadSelectOption('HOWInternal_StudySelect0');
    loadSelectOption('HOWInternal_StudySelect1');
    loadSelectOption('HOWInternal_StudySelect2');
    loadSelectOption('HOWInternal_StudySelect3');
    loadSelectOption('HOWInternal_StudySelect4');
    loadSelectOption('HOWInternal_StudySelect5');
    loadSelectOption('HOWInternal_StudySelect6');
    loadSelectOption('HOWInternal_StudySelect7');
    loadSelectOption('HOWInternal_StudySelect8');
    loadSelectOption('HOWInternal_StudySelect9');
    loadSelectOption('HOWInternal_StudySelect10');

    loadSelectOption('HOWInternal_RetreatSelect0');
    loadSelectOption('HOWInternal_RetreatSelect1');
    loadSelectOption('HOWInternal_RetreatSelect2');
    loadSelectOption('HOWInternal_RetreatSelect3');
    loadSelectOption('HOWInternal_RetreatSelect4');
    loadSelectOption('HOWInternal_RetreatSelect5');
    loadSelectOption('HOWInternal_RetreatSelect6');
    loadSelectOption('HOWInternal_RetreatSelect7');
    loadSelectOption('HOWInternal_RetreatSelect8');
    loadSelectOption('HOWInternal_RetreatSelect9');
    loadSelectOption('HOWInternal_RetreatSelect10');

    loadSelectOption('HOWInternalService_WCSelect0');
    loadSelectOption('HOWInternalService_WCSelect1');
    loadSelectOption('HOWInternalService_WCSelect2');
    loadSelectOption('HOWInternalService_WCSelect3');
    loadSelectOption('HOWInternalService_WCSelect4');
    loadSelectOption('HOWInternalService_WCSelect5');
    loadSelectOption('HOWInternalService_WCSelect6');
    loadSelectOption('HOWInternalService_WCSelect7');
    loadSelectOption('HOWInternalService_WCSelect8');
    loadSelectOption('HOWInternalService_WCSelect9');
    loadSelectOption('HOWInternalService_WCSelect10');
    loadSelectOption('HOWInternalService_WCSelect11');
    loadSelectOption('HOWInternalService_WCSelect12');
    loadSelectOption('HOWInternalService_WCSelect13');
    loadSelectOption('HOWInternalService_WCSelect14');

    loadSelectOption('HOWInternalService_Bathroom1Select0');
    loadSelectOption('HOWInternalService_Bathroom1Select1');
    loadSelectOption('HOWInternalService_Bathroom1Select2');
    loadSelectOption('HOWInternalService_Bathroom1Select3');
    loadSelectOption('HOWInternalService_Bathroom1Select4');
    loadSelectOption('HOWInternalService_Bathroom1Select5');
    loadSelectOption('HOWInternalService_Bathroom1Select6');
    loadSelectOption('HOWInternalService_Bathroom1Select7');
    loadSelectOption('HOWInternalService_Bathroom1Select8');
    loadSelectOption('HOWInternalService_Bathroom1Select9');
    loadSelectOption('HOWInternalService_Bathroom1Select10');
    loadSelectOption('HOWInternalService_Bathroom1Select11');
    loadSelectOption('HOWInternalService_Bathroom1Select12');
    loadSelectOption('HOWInternalService_Bathroom1Select13');
    loadSelectOption('HOWInternalService_Bathroom1Select14');
    loadSelectOption('HOWInternalService_Bathroom1Select15');

    loadSelectOption('HOWInternalService_Bathroom2Select0');
    loadSelectOption('HOWInternalService_Bathroom2Select1');
    loadSelectOption('HOWInternalService_Bathroom2Select2');
    loadSelectOption('HOWInternalService_Bathroom2Select3');
    loadSelectOption('HOWInternalService_Bathroom2Select4');
    loadSelectOption('HOWInternalService_Bathroom2Select5');
    loadSelectOption('HOWInternalService_Bathroom2Select6');
    loadSelectOption('HOWInternalService_Bathroom2Select7');
    loadSelectOption('HOWInternalService_Bathroom2Select8');
    loadSelectOption('HOWInternalService_Bathroom2Select9');
    loadSelectOption('HOWInternalService_Bathroom2Select10');
    loadSelectOption('HOWInternalService_Bathroom2Select11');
    loadSelectOption('HOWInternalService_Bathroom2Select12');
    loadSelectOption('HOWInternalService_Bathroom2Select13');
    loadSelectOption('HOWInternalService_Bathroom2Select14');
    loadSelectOption('HOWInternalService_Bathroom2Select15');

    loadSelectOption('HOWInternalService_Bathroom3Select0');
    loadSelectOption('HOWInternalService_Bathroom3Select1');
    loadSelectOption('HOWInternalService_Bathroom3Select2');
    loadSelectOption('HOWInternalService_Bathroom3Select3');
    loadSelectOption('HOWInternalService_Bathroom3Select4');
    loadSelectOption('HOWInternalService_Bathroom3Select5');
    loadSelectOption('HOWInternalService_Bathroom3Select6');
    loadSelectOption('HOWInternalService_Bathroom3Select7');
    loadSelectOption('HOWInternalService_Bathroom3Select8');
    loadSelectOption('HOWInternalService_Bathroom3Select9');
    loadSelectOption('HOWInternalService_Bathroom3Select10');
    loadSelectOption('HOWInternalService_Bathroom3Select11');
    loadSelectOption('HOWInternalService_Bathroom3Select12');
    loadSelectOption('HOWInternalService_Bathroom3Select13');
    loadSelectOption('HOWInternalService_Bathroom3Select14');
    loadSelectOption('HOWInternalService_Bathroom3Select15');

    loadSelectOption('HOWInternalService_Bathroom4Select0');
    loadSelectOption('HOWInternalService_Bathroom4Select1');
    loadSelectOption('HOWInternalService_Bathroom4Select2');
    loadSelectOption('HOWInternalService_Bathroom4Select3');
    loadSelectOption('HOWInternalService_Bathroom4Select4');
    loadSelectOption('HOWInternalService_Bathroom4Select5');
    loadSelectOption('HOWInternalService_Bathroom4Select6');
    loadSelectOption('HOWInternalService_Bathroom4Select7');
    loadSelectOption('HOWInternalService_Bathroom4Select8');
    loadSelectOption('HOWInternalService_Bathroom4Select9');
    loadSelectOption('HOWInternalService_Bathroom4Select10');
    loadSelectOption('HOWInternalService_Bathroom4Select11');
    loadSelectOption('HOWInternalService_Bathroom4Select12');
    loadSelectOption('HOWInternalService_Bathroom4Select13');
    loadSelectOption('HOWInternalService_Bathroom4Select14');
    loadSelectOption('HOWInternalService_Bathroom4Select15');


    loadSelectOption('HOWInternalService_LaundrySelect0');
    loadSelectOption('HOWInternalService_LaundrySelect1');
    loadSelectOption('HOWInternalService_LaundrySelect2');
    loadSelectOption('HOWInternalService_LaundrySelect3');
    loadSelectOption('HOWInternalService_LaundrySelect4');
    loadSelectOption('HOWInternalService_LaundrySelect5');
    loadSelectOption('HOWInternalService_LaundrySelect6');
    loadSelectOption('HOWInternalService_LaundrySelect7');
    loadSelectOption('HOWInternalService_LaundrySelect8');
    loadSelectOption('HOWInternalService_LaundrySelect9');
    loadSelectOption('HOWInternalService_LaundrySelect10');
    loadSelectOption('HOWInternalService_LaundrySelect11');
    loadSelectOption('HOWInternalService_LaundrySelect12');
    loadSelectOption('HOWInternalService_LaundrySelect13');

    //HOWInternalService_ServiceSelect
    loadSelectOption('HOWInternalService_ServiceSelect0');
    loadSelectOption('HOWInternalService_ServiceSelect1');
    loadSelectOption('HOWInternalService_ServiceSelect2');
    loadSelectOption('HOWInternalService_ServiceSelect3');
    loadSelectOption('HOWInternalService_ServiceSelect4');
    loadSelectOption('HOWInternalService_ServiceSelect5');


}



function createOneCell(tableID, name, select, textAreaName) {

    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    //console.log(rowCount);

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
    //nameInput.id = 'HOWSiteName' + rowCount;
    nameInput.id = name + rowCount;
    //nameInput.style.width="inherit";
    //nameInput.style.width='205px';
    cell1.appendChild(nameInput);

    //create select option list
    var selectList = document.createElement("select");
    // selectList.id = "HOWSiteSelect" + rowCount;
    selectList.id = select + rowCount;
    selectList.style.width = "100%";

    var selectOption = ["Choose an item", "√", 'X', '--', 'U', 'IW', 'R', 'P', 'N'];
    var selectValue = [" ", "No Defects Evident", "Defect Evident", "Not Relevant", "Untested",
        "Incomplete Work", "Reasonable Access", "Partial Access", 'Not Accessible'];


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
        selectList.appendChild(group);
    }

    cell2.appendChild(selectList);

    //create text area for notes
    var textArea = document.createElement('textarea');
    textArea.setAttribute('class', 'form-control');
    textArea.setAttribute('placeholder', 'Notes');
    //textArea.id = "HOWSiteNotes" + rowCount;
    textArea.id = textAreaName + rowCount;
    textArea.style.height = '51px';
    cell3.appendChild(textArea);

}


function createOneOutBuildingSpaceCell() {
    var table = document.getElementById('HOWOutBuildingTable');
    var rowCount = table.rows.length;
    var columnCount = table.rows[0].cells.length;
    //console.log(rowCount);
    //console.log(columnCount);

    var row = table.insertRow(rowCount);

    for (i = 0; i < columnCount; i++) {
        //console.log(columnCount);
        //console.log(i);

        if (i == 0) {
            var th = document.createElement('th');
            th.className = 'zui-sticky-col';
            th.style.height = '103px';
            var nameInput = document.createElement('INPUT');
            nameInput.setAttribute('class', 'form-control');
            nameInput.setAttribute('title', 'name');
            nameInput.setAttribute('type', 'text');
            nameInput.id = 'HOWOutBuildingPlace' + (rowCount - 1);
            th.appendChild(nameInput);
            row.appendChild(th);
        } else {

            var id = i - 1;
            var cell = row.insertCell(i);

            //create and append the 'SELECT' element
            var selectList = document.createElement("select");
            // selectList.id = "HOWSiteSelect" + rowCount;
            selectList.id = 'HOWOutBuildingPlace' + (rowCount - 1) + 'Select' + id;
            selectList.style.width = "100%";
            selectList.setAttribute('title', 'checkList');

            var selectOption = ["Choose an item", "√", 'X', '--', 'U', 'IW', 'R', 'P', 'N'];
            var selectValue = [" ", "No Defects Evident", "Defect Evident", "Not Relevant", "Untested",
                "Incomplete Work", "Reasonable Access", "Partial Access", 'Not Accessible'];


            //Create and append the options
            for (var a = 0; a < selectOption.length; a++) {
                var option = document.createElement("option");
                var group = document.createElement('optgroup');
                group.label = selectValue[a];
                option.text = selectOption[a];
                if (a === 0) {
                    option.selected = true;
                    option.disabled = true;
                }
                group.appendChild(option);
                selectList.appendChild(group);
            }



            //create an name input for the cell1
            var textArea = document.createElement('textarea');
            textArea.setAttribute('class', 'form-control');
            textArea.setAttribute('placeholder', 'Notes');
            textArea.id = 'HOWOutBuildingPlace' + (rowCount - 1) + 'Text' + id;
            textArea.style.height = '50px';
            textArea.style.marginTop = '10px';


            cell.appendChild(selectList);
            cell.appendChild(textArea);
        }
    }

}


function moreDefects() {

    var table = document.getElementById('HOWDefectsTable');
    var rowCount = table.rows.length;
    // var usefulRow = rowCount;
    var id = rowCount - 1;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    //create an item number input for the cell1
    var nameInput = document.createElement('INPUT');
    nameInput.setAttribute('class', 'form-control');
    nameInput.setAttribute('title', 'itemNo');
    nameInput.setAttribute('type', 'text');
    nameInput.id = 'HOWDefectItem' + id;
    cell1.appendChild(nameInput);

    //create an description input  for the cell2
    //var descriptionInput = document.createElement('INPUT');
    var descriptionInput = document.createElement('textarea');
    descriptionInput.style.height = '60px';
    descriptionInput.setAttribute('class', 'form-control');
    descriptionInput.setAttribute('title', 'description');
    descriptionInput.id = 'HOWDefectDescription' + id;
    cell2.appendChild(descriptionInput);


}

function moreAccessLimitation() {
    //console.log('your are in');
    var table = document.getElementById('HOWAccessTable');
    var rowCount = table.rows.length;

    var id = rowCount - 1;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    //create an item number input for the cell1
    var nameInput = document.createElement('INPUT');
    nameInput.setAttribute('class', 'form-control');
    nameInput.setAttribute('title', 'itemNO');
    nameInput.setAttribute('type', 'text');
    nameInput.id = 'HOWAccessItem' + id;
    cell1.appendChild(nameInput);

    //create an description input  for the cell2
    //var descriptionInput = document.createElement('INPUT');
    var descriptionInput = document.createElement('textarea');
    descriptionInput.style.height = '60px';
    descriptionInput.setAttribute('class', 'form-control');
    descriptionInput.setAttribute('title', 'description');
    descriptionInput.id = 'HOWAccessDescription' + id;
    cell2.appendChild(descriptionInput);
}

function addRecommendations(labelID, selectID) {
    var label = document.getElementById(labelID);
    label.value += document.getElementById(selectID).value + ' ';
}

function clearRecommendation(labelID) {
    var label = document.getElementById(labelID);
    label.value = "";
    label.placeholder = "Recommendations will be displayed here";
}

//function HOWUploadImages()
//{
//    document.getElementById('HOWUploadImages').click();
//}
//
//$('#HOWUploadImages').change(function(){
//    $("#HOWImagesDIV").empty();
//    var table = document.getElementById("HOWImagesTable");
//    table.style.display = 'block';
//    var count = this.files.length;
//    var imageFile = this.files;
//    //console.log(count);
//
//    for (var i = 0; i<count;i++)
//        {
//            try {
//                //noinspection ExceptionCaughtLocallyJS
//                throw i
//            }
//            catch (ii) {
//                setTimeout(function ()
//                {
//                    var nameID = ii + 1;
//                    var altName = 'Image ' + nameID;
//                    var imageID = 'HOWImage' + ii;
//                    var textID = 'HOWImageText' + ii;
//                    var removeButtonID = 'HOWImageRemoveButton' + ii;
//                    var addButtonID = 'HOWImageAddButton' + ii;
//                    var uploadID = 'HOWImageUpload' + ii;
//                    var labelID = "HOWimageCaption" + ii;
//
//                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';
//                    //addDrawing();
//                    addImageElements(altName,imageID, textID, removeButtonID, addButtonID, uploadID,
//                        'removeOneHOWImage(this.id)', 'addOneHOWImage(this.id)', '480px', '485px');
//
//                    loadImage.parseMetaData(imageFile[ii], function (data) {
//                        //console.log('I am in loadImage function');
//                        var orientation = 0;
//                        var date = new Date();
//                        var imageName = imageFile[ii].name;
//                        var imageType = imageFile[ii].type;
//                        var image = document.getElementById(imageID);
//                        var removeButton = document.getElementById(removeButtonID);
//                        var description  = document.getElementById(textID);
//                        var addButton = document.getElementById(addButtonID);
//                        var label = document.getElementById(labelID);
//                        //if exif data available, update orientation
//                        if (data.exif) {
//                            orientation = data.exif.get('Orientation');
//                        }
//                        var loadingImage = loadImage(imageFile[ii], function (canvas) {
//                                var base64data = canvas.toDataURL(imageType);
//                                //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                                image.setAttribute('src',base64data);
//                                //$(selectionImage).attr('src',base64data);
//                                removeButton.style.display = 'block';
//                                removeButton.style.width = '480px';
//                                addButton.style.display = 'none';
//                                addButton.style.width = '480px';
//                                description.style.display = 'block';
//                                image.style.display = 'block';
//                                image.style.width = '480px';
//                                description.style.width = '480px';
//                                label.style.display = 'block';
//                                // image.style.height = '250px';
//                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
//                                //console.log(file);
//                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'HOWImagesTable',altName,'HOWImagesDIV',uploadID,'removeOneHOWImage(this.id)','addOneHOWImage(this.id)','480px','480px');
//
//                            },
//                            {
//                                canvas: true,
//                                orientation: orientation,
//                                maxWidth:1500,
//                                maxHeight:1200
//                            }
//                        );
//                    });
//
//                }, 200);
//            }
//        }
//        setTimeout(function(){
//            //addDrawing();
//            var altID= count + 1;
//            var altName = 'Image' + altID;
//            var imageID = 'HOWImage' + count;
//            var textID = 'HOWImageText' + count;
//            var removeButtonID = 'HOWImageRemoveButton' + count;
//            var addButtonID = 'HOWImageAddButton' + count;
//            var uploadID = 'HOWImageUpload' + count;
//            addImageElements(altName, imageID, textID, removeButtonID, addButtonID, uploadID,
//                'removeOneHOWImage(this.id)', 'addOneHOWImage(this.id)', '480px', '0px');
//
//        },400)
//
//
//
//});
//
//function removeOneHOWImage(click_id)
//{
//    var selectedID = String(click_id);
//    var id = selectedID.replace ( /[^\d.]/g, '' );
//    var imageID = 'HOWImage' + id;
//    var removeButtonID = 'HOWImageRemoveButton' + id;
//    var addButtonID = 'HOWImageAddButton' + id;
//    var descriptionID = 'HOWImageText' + id;
//    var labelID = "HOWimageCaption" + id;
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
//function addOneHOWImage(click_id)
//{
//    //console.log(click_id);
//
//    var id;
//    var selectedID = String(click_id);
//    id = selectedID.replace ( /[^\d.]/g, '' );
//    var nameID = Number(id) + 1;
//    var altName = 'Image ' + nameID;
//    var imageID = 'HOWImage' + id;
//    var textID = 'HOWImageText' + id;
//    var removeButtonID = 'HOWImageRemoveButton' + id;
//    var addButtonID = 'HOWImageAddButton' + id;
//    var uploadID = 'HOWImageUpload' + id;
//    var labelID = "HOWimageCaption" + id;
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
//                        doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'HOWImagesTable',altName,'HOWImagesDIV',uploadID,'removeOneHOWImage(this.id)','addOneHOWImage(this.id)','480px','480px');
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
//    var lastImage = document.getElementById('HOWImagesDIV').lastElementChild.lastChild.firstChild;
//    var newID = Number(lastImage.id.replace( /[^\d.]/g, '' ))+1;
//    var altID = Number(newID) + 1;
//    nextAltName = 'drawing  ' + altID;
//        //console.log("I am here!!! need another image element ,the next id  " + newID);
//    var nextImageID = 'HOWImage' + newID;
//    var nextTextID = 'HOWImageText' + newID;
//    var nextRemoveButtonID = 'HOWImageRemoveButton' + newID;
//    var nextAddButtonID = 'HOWImageAddButton' + newID;
//    var nextUploadID = 'HOWImageUpload' + newID;
//    addImageElements(nextAltName, nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
//            'removeOneHOWImage(this.id)', 'addOneHOWImage(this.id)', '480px', '0px');
//
//
//}
//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
//function addImageElements(imageAltName, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize,width) {
//    var BigContainer = document.getElementById('HOWImagesDIV');
//
//    //var BigContainer = document.getElementById(divID);
//    var form = document.createElement("form");
//    // console.log(form);
//    //form.setAttribute("class","divForm");
//    //need four dividends in a form
//    var container1 = document.createElement("div");
//    var container2 = document.createElement("div");
//    var container3 = document.createElement("div");
//    var container4 = document.createElement("div");
//    var container5 = document.createElement("div");
//    container1.setAttribute("class", "col-sm");
//    container2.setAttribute("class", "col-sm");
//    container3.setAttribute("class", "col-sm");
//    container4.setAttribute("class", "col-sm");
//    container5.setAttribute("class", "col-sm");
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
//
//    //create an lable
//    container2.style.textAlign = 'center';
//    var label = document.createElement('label');
//    //label.className = "Label";
//    label.style.width = imageSize;
//    label.style.height = "15px";
//    var givenID = imageID.replace ( /[^\d.]/g, '' );
//    var labelID = "HOWimageCaption" + givenID;
//    label.id = labelID;
//    //console.log("the id " + givenID);
//    var imageNo = Number(givenID)+1;
//    label.textContent = "IMG " + imageNo;
//    label.setAttribute("class","figurecaption");
//    label.style.display = 'none';
//
//    //create an input for the text
//    var textInput = document.createElement('INPUT');
//    textInput.setAttribute("type", "text");
//    textInput.style.width = imageSize;
//    textInput.style.marginLeft = '10px';
//    textInput.style.height = "10px";
//    textInput.style.display = 'none';
//    textInput.id = imageTextID;
//
//    //create an input for the remove button
//    var removeButton = document.createElement('INPUT');
//    removeButton.setAttribute("type", "button");
//
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

//Upload photos button to trigger input file.
$("#HOW_uploadImg_Btn").click(function () {
    $("#HOW_ImgsUpload").trigger("click");
});

var photos_count = 1;

//Photos upload file
$("#HOW_ImgsUpload").change(function (e) {
    if ($("#owner_bookingNo").val() === "0") {
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

                            //                            console.log("UploadID: " + imgFile, element[1], element[2], element[3], "", "HOWImagesTable");
                            doUploadFile(imgFile, element[1], element[2], element[3], "", "HOWImagesTable", element[4]);

                            //                            $("#Imgpage-loader").hide();
                            $("#HOWImagesTable").show();
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
        lastContainer = document.getElementById("HOWImagesTable"),

        imgContainerID = id + "_HOWimgContainer",
        newImgID = 'HOWImage' + id,
        imgLabelID = "HOWimageCaption" + id,
        imgTextID = "HOWImageText" + id,
        imgRmBtnID = "HOWImageRemoveButton" + id;

    //Setting element's attribute.
    imgContainer.setAttribute("id", imgContainerID);

    imgLabel.setAttribute("id", imgLabelID);

    newImg.setAttribute("id", newImgID);

    imgText.setAttribute("id", imgTextID);
    imgText.setAttribute("type", "text");
    imgText.setAttribute("class", "form-control");

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
