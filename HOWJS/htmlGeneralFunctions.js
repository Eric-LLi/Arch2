/**
 * Created by Fafa on 20/12/17.
 */
function onload()
 {
     reorderImages();
     automaticNumbering();
 }

function reorderImages()
{
    //console.log("need to reorder the images");
    var totalContainers = $("#HOWImagesTable").children('div');
    var BigContainer = document.getElementById('HOWImagesTable');
    totalContainers.sort(function(a,b)
    {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    //console.log(totalContainers);

    $("#HOWImagesTable").empty();
    for (var i=0;i<totalContainers.length;i++)
    {
        BigContainer.appendChild(totalContainers[i]);
        var id = totalContainers[i].id.replace(/[^\d.]/g, '');
        var imgContainerID = id + "_HOWimgContainer";
        var myImage = totalContainers.eq(i).children('img').get(0);
        var ImgID = totalContainers.eq(i).children('img').get(0).id;
        var rotateBtnID = totalContainers.eq(i).children('button').eq(1).get(0).id;
        var angleID = totalContainers.eq(i).children('input').eq(1).get(0).id;
        var rotateBnt = document.getElementById(rotateBtnID);
        var removeBtn = document.getElementById(totalContainers.eq(i).children('button').get(0).id);
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
        //console.log(removeBtn);
        
    }
}


function automaticNumbering()
{
    console.log("need to refresh the image number");
    var totalContainers = $("#HOWImagesTable").children('div');
    //console.log(totalContainers.length);
    for(var i=0;i<totalContainers.length;i++)
    {
        //console.log(i);
        //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
        totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i+1);
    }
}


function loadSelectOption(id) {
    var select = document.getElementById(id);

    var selectOption = ["Choose an item", "√ - No Defects Evident", 'X - Defect Evident', '-- -  Not Relevant', 'U - Untested', 'IW - Incomplete Work'];
    var selectValue = ["Choose an item", "√", "X", "--", "U","IW"];


    //Create and append the options
    for (var i = 0; i < selectOption.length; i++) {
        var option = document.createElement("option");
        // var group = document.createElement('optgroup');
        // group.label = selectValue[i];
        option.text = selectOption[i];
        option.value = selectValue[i];
        if (i === 0) {
            option.selected = true;
            option.disabled = true;
        }
        // group.appendChild(option);
        select.appendChild(option);
    }

}

function loadAccessSelectOption(id) {
    var select = document.getElementById(id);

    var selectOption = ["Choose an item", 'R- Reasonable Access', 'P - Partial Access', 'N - Not Accessible'];
    var selectValue = ["Choose an item", "R", "P", 'N'];

    for (var i = 0; i < selectValue.length; i++) {
        var option = document.createElement("option");
        // var group = document.createElement('optgroup');
        // group.label = selectValue[i];
        option.text = selectOption[i];
        option.value = selectValue[i];
        if (i === 0) {
            option.selected = true;
            option.disabled = true;
        }
        // group.appendChild(option);
        select.appendChild(option);
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
    loadAccessSelectOption('HOWSiteSelect9');

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
    loadAccessSelectOption('HOWBuildingSelect16');
    loadAccessSelectOption('HOWBuildingSelect17');

    loadSelectOption('HOWSubFloorSelect0');
    loadSelectOption('HOWSubFloorSelect1');
    loadSelectOption('HOWSubFloorSelect2');
    loadSelectOption('HOWSubFloorSelect3');
    loadSelectOption('HOWSubFloorSelect4');
    loadSelectOption('HOWSubFloorSelect5');
    loadAccessSelectOption('HOWSubFloorSelect6');


    loadSelectOption('HOWRoofVoidSelect0');
    loadSelectOption('HOWRoofVoidSelect1');
    loadSelectOption('HOWRoofVoidSelect2');
    loadSelectOption('HOWRoofVoidSelect3');
    loadSelectOption('HOWRoofVoidSelect4');
    loadAccessSelectOption('HOWRoofVoidSelect5');


    loadSelectOption('HOWOutBuildingPlace0Select0');
    loadSelectOption('HOWOutBuildingPlace0Select1');
    loadSelectOption('HOWOutBuildingPlace0Select2');
    loadSelectOption('HOWOutBuildingPlace0Select3');
    loadSelectOption('HOWOutBuildingPlace0Select4');
    loadSelectOption('HOWOutBuildingPlace0Select5');
    loadSelectOption('HOWOutBuildingPlace0Select6');
    loadAccessSelectOption('HOWOutBuildingPlace0Select7');


    loadSelectOption('HOWOutBuildingPlace1Select0');
    loadSelectOption('HOWOutBuildingPlace1Select1');
    loadSelectOption('HOWOutBuildingPlace1Select2');
    loadSelectOption('HOWOutBuildingPlace1Select3');
    loadSelectOption('HOWOutBuildingPlace1Select4');
    loadSelectOption('HOWOutBuildingPlace1Select5');
    loadSelectOption('HOWOutBuildingPlace1Select6');
    loadAccessSelectOption('HOWOutBuildingPlace1Select7');

    loadSelectOption('HOWOutBuildingPlace2Select0');
    loadSelectOption('HOWOutBuildingPlace2Select1');
    loadSelectOption('HOWOutBuildingPlace2Select2');
    loadSelectOption('HOWOutBuildingPlace2Select3');
    loadSelectOption('HOWOutBuildingPlace2Select4');
    loadSelectOption('HOWOutBuildingPlace2Select5');
    loadSelectOption('HOWOutBuildingPlace2Select6');
    loadAccessSelectOption('HOWOutBuildingPlace2Select7');


    loadSelectOption('HOWServicesSelect0');
    loadSelectOption('HOWServicesSelect1');
    loadSelectOption('HOWServicesSelect2');
    loadAccessSelectOption('HOWServicesSelect3');

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
    loadAccessSelectOption('HOWInternal_EntrySelect10');

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
    loadAccessSelectOption('HOWInternal_StairSelect10');

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
    // loadSelectOption('HOWInternal_LivingFrontSelect10');
    loadAccessSelectOption('HOWInternal_LivingFrontSelect10');


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
    loadAccessSelectOption('HOWInternal_LoungeSelect10');

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
    loadAccessSelectOption('HOWInternal_KitchenSelect10');
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
    loadAccessSelectOption('HOWInternal_FamilySelect10');


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
    loadAccessSelectOption('HOWInternal_DiningSelect10');

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
    loadAccessSelectOption('HOWInternal_Bedroom1Select10');


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
    loadAccessSelectOption('HOWInternal_Bedroom2Select10');

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
    loadAccessSelectOption('HOWInternal_Bedroom3Select10');

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
    loadAccessSelectOption('HOWInternal_Bedroom4Select10');

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
    loadAccessSelectOption('HOWInternal_StudySelect10');

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
    loadAccessSelectOption('HOWInternal_RetreatSelect10');

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
    loadAccessSelectOption('HOWInternalService_WCSelect11');
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
    loadAccessSelectOption('HOWInternalService_Bathroom1Select11');
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
    loadAccessSelectOption('HOWInternalService_Bathroom2Select11');
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
    loadAccessSelectOption('HOWInternalService_Bathroom3Select11');
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
    loadAccessSelectOption('HOWInternalService_Bathroom4Select11');
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
    loadAccessSelectOption('HOWInternalService_LaundrySelect11');
    loadSelectOption('HOWInternalService_LaundrySelect12');
    loadSelectOption('HOWInternalService_LaundrySelect13');

    //HOWInternalService_ServiceSelect
    loadSelectOption('HOWInternalService_ServiceSelect0');
    loadSelectOption('HOWInternalService_ServiceSelect1');
    loadSelectOption('HOWInternalService_ServiceSelect2');
    loadSelectOption('HOWInternalService_ServiceSelect3');
    loadSelectOption('HOWInternalService_ServiceSelect4');
    loadAccessSelectOption('HOWInternalService_ServiceSelect5');


}


//Capitalized the first letter of the string
function capitalizeFirstLetter(id)
{
    // console.log(id);
    var string = document.getElementById(id).value;
    var newString = string.charAt(0).toUpperCase() + string.slice(1);
    document.getElementById(id).value = newString;
    // console.log(newString);


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
    nameInput.setAttribute('onkeypress','capitalizeFirstLetter(this.id)');
    //nameInput.style.width="inherit";
    //nameInput.style.width='205px';
    cell1.appendChild(nameInput);

    //create select option list
    var selectList = document.createElement("select");
    // selectList.id = "HOWSiteSelect" + rowCount;
    selectList.id = select + rowCount;
    selectList.style.width = "100%";

    // var selectOption = ["Choose an item", "√", 'X', '--', 'U', 'IW', 'R', 'P', 'N'];
    var selectOption = ["Choose an item", "√ - No Defects Evident", 'X - Defect Evident', '-- -  Not Relevant', 'U - Untested', 'IW - Incomplete Work','R- Reasonable Access', 'P - Partial Access', 'N - Not Accessible'];

    // var selectValue = [" ", "No Defects Evident", "Defect Evident", "Not Relevant", "Untested",
    //     "Incomplete Work", "Reasonable Access", "Partial Access", 'Not Accessible'];

    var selectValue = ["Choose an item", "√", "X", "--", "U","IW","R", "P", 'N'];
    //Create and append the options
    for (var i = 0; i < selectOption.length; i++) {
        var option = document.createElement("option");
        // var group = document.createElement('optgroup');
        // group.label = selectValue[i];
        option.text = selectOption[i];
        if (i === 0) {
            option.selected = true;
            option.disabled = true;
        }
        //group.appendChild(option);
        selectList.appendChild(option);
    }

    cell2.appendChild(selectList);

    //create text area for notes
    var textArea = document.createElement('textarea');
    textArea.setAttribute('class', 'form-control');
    // textArea.setAttribute('placeholder', 'Notes');
    textArea.setAttribute('placeholder', 'Number/Letter');
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
            nameInput.setAttribute('onkeypress','capitalizeFirstLetter(this.id)');
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
            if(i == columnCount - 1)
            {
                //load Access Select Option
                var selectOption = ["Choose an item", 'R- Reasonable Access', 'P - Partial Access', 'N - Not Accessible'];
                var selectValue = ["Choose an item", "R", "P", 'N'];
            
                for (var a = 0; a < selectValue.length; a++) {
                    var option = document.createElement("option");
                    // var group = document.createElement('optgroup');
                    // group.label = selectValue[i];
                    option.text = selectOption[a];
                    option.value = selectValue[a];
                    if (a === 0) {
                        option.selected = true;
                        option.disabled = true;
                    }
                    // group.appendChild(option);
                    selectList.appendChild(option);
                }
            }
            else
            {
                // load Select Option
                var selectOption = ["Choose an item", "√ - No Defects Evident", 'X - Defect Evident', '-- -  Not Relevant', 'U - Untested', 'IW - Incomplete Work'];
                var selectValue = ["Choose an item", "√", "X", "--", "U","IW"];
            
            
                //Create and append the options
                for (var b = 0; b < selectOption.length; b++) {
                    var option = document.createElement("option");
                    // var group = document.createElement('optgroup');
                    // group.label = selectValue[i];
                    option.text = selectOption[b];
                    option.value = selectValue[b];
                    if (b === 0) {
                        option.selected = true;
                        option.disabled = true;
                    }
                    // group.appendChild(option);
                    selectList.appendChild(option);
                }

            }
            // for (var a = 0; a < selectOption.length; a++) {
            //     var option = document.createElement("option");
            //     var group = document.createElement('optgroup');
            //     group.label = selectValue[a];
            //     option.text = selectOption[a];
            //     if (a === 0) {
            //         option.selected = true;
            //         option.disabled = true;
            //     }
            //     group.appendChild(option);
            //     selectList.appendChild(group);
            // }

            //create an name input for the cell1
            var textArea = document.createElement('textarea');
            textArea.setAttribute('class', 'form-control');
            if(i == columnCount - 1)
            {
                textArea.setAttribute('placeholder', 'Letter');
            }
            else
            {
                textArea.setAttribute('placeholder', 'Number');
            }
            
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

//Upload signature photo

$('#signature_addbtn').click(function(){
    //console.log("click");
    $("#signautre_input").click();
})

$('#signautre_input').click(function () {
    //console.log("clear");
    this.value = null;
});

$("#signautre_input").on('change',function(e){
    console.log("open");
    var file = e.currentTarget.files;
    if(!isEmpty(file))
    {
        $("#signature_addbtn").hide();
        $("#signature_removebtn").show();
        $("#how_signature_image").show();

        loadImage.parseMetaData(file[0], function (data) {
            var orientation = 0;
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }

            var loadingImage = loadImage(file[0], function (canvas) {
                var data = canvas.toDataURL('image/jpeg');
                var image = new Image();
                image.onload = function () {
                    var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#how_signature_image").attr("src", code);
                        var imgFile = new File([convertBase64UrlToBlob(code, file[0].type)], file[0].name, {
                            type: file[0].type,
                            lastModified: file[0].lastModifiedDate
                        });
                        doRemovePhoto("how_signature_image");
                        //doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentSiteImagesContainer");
                        //f, imageid, textid = '', removeid = '', addid = '', table = '', imageAltName = '', divID = '',uploadID = '', removeFunction = '', addFunction = '', imageSize = '', width = ''
                        doUploadFile(imgFile, "how_signature_image", "", "signature_removebtn", "signature_addbtn","","signature", '',"signautre_input", '', '', "265px", "265px");
                    }
                };
                image.src = data;
            }, {
                canvas: true,
                orientation: orientation
            });
        });
    }
});

function removeSignature()
{
    //console.log("click");
    doRemovePhoto("how_signature_image");
    $("#signature_addbtn").show();
    $("#signature_removebtn").hide();
    $("#how_signature_image").attr("src","#");
    $("#how_signature_image").hide();
    
}



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
    
                                doUploadFile(imgFile, element[1], element[2], element[3], "", "HOWImagesTable", element[4], element[0],'','','','','',element[5],element[6]);

    
                                $("#HOWImagesTable").show();
                            }
                        };
                        image.src = data;
                    }, {
                        canvas: true,
                        orientation: orientation
                    });
                });
            });
            automaticNumbering();
        }
       
    }
});

//Photos page; create html image, text, remove button and container.
function createPhoto(id) {
    var lastContainer = document.getElementById("HOWImagesTable"),
        imgContainer = document.createElement("div"),
        newImg = document.createElement("img"),
        imgText = document.createElement("input"),
        imgLabel = document.createElement("label"),
        imgRmBtn = document.createElement("button"),
        rotateBtn = document.createElement("button"),
        angleInput = document.createElement("input"),

        imgContainerID = id + "_HOWimgContainer",
        newImgID = 'HOWImage' + id,
        imgLabelID = "HOWimageCaption" + id,
        imgTextID = "HOWImageText" + id,
        imgRmBtnID = "HOWImageRemoveButton" + id;
        rotateBtnID = "HOWImgRotateBtn" + id,
        angleInputID = "HOWImgAngle" + id;

    //Setting element's attribute.
    imgContainer.setAttribute("id", imgContainerID);

    imgLabel.setAttribute("id", imgLabelID);
    $("#" + imgLabelID).html("IMG " + id);


    newImg.setAttribute("id", newImgID);

    imgText.setAttribute("id", imgTextID);
    imgText.setAttribute("type", "text");
    imgText.setAttribute("class", "form-control");

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
    var container = $("#" + containerID).remove();
    //    console.log("Remove ID: " + imgID);
    doRemovePhoto(imgID);
    automaticNumbering();
}


function rotateOneImage(ID)
{
    console.log("click");
    var angelInputID = "HOWImgAngle" + ID;
    var imgID = 'HOWImage' + ID;
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

// -- New Functions for creating/removing new tabs
function addPanel(panelid)
{
    $('#dlgRoomNew').dialog
    (
        {
            onOpen:function()
            {
                console.log("open the dialog");
            },
            buttons:
            [
                
                {
                    text:'Add',
                    handler:function()
                    {
                        var name = $('#fldNewRoomName').textbox('getValue');
                        console.log(name);
                        if(name != "" && name != null)
                        {
                            console.log("addPanel, panel id " + panelid);
                            var panel = "#" + panelid;
                            var count = $(panel).tabs('tabs').length;
                            console.log("the number of tabs in this div is " + count);
                            var index = count + 1;
                            $(panel).tabs('add',{
                                title: name,
                                content: '<div style="padding:10px">Content'+index+'</div>',
                                closable: true
                            });
                            $('#dlgRoomNew').dialog('close');
                        }
                       
                    }
                },
                {
                    text: 'Cancel',
                    handler: function()
                    {
                      $('#dlgRoomNew').dialog('close');
                    }
                }
            ]
        }
        
    ).dialog('center').dialog('open');
   
    
}

function removePanel(panelid)
{
    console.log("removePanel, panel id " + panelid);
    var panel = "#" + panelid;
    var tab = $(panel).tabs('getSelected');
    if (tab){
        var index = $(panel).tabs('getTabIndex', tab);
        $(panel).tabs('close', index);
    }
}

function editRoomName(tabid)
{
    //console.log(tabid);
    let tabfld = '#' + tabid
    $('#dlgRoomNew').dialog
    (
        {
            title:'Edit Room Name',

            onOpen:function()
            {
                // console.log("open the dialog");
                // console.log(tabfld);
                var tab = $(tabfld).tabs('getSelected');
                var title = tab.panel('options').title;
                //console.log(title);
                $('#fldNewRoomName').textbox('setValue',title);
            },
            buttons:
            [
                
                {
                    text:'Save',
                    handler:function()
                    {
                        var newtitle = $('#fldNewRoomName').textbox('getValue');
                        //console.log(newtitle);
                        if(newtitle != "" && newtitle != null)
                        {
                            var tab = $(tabfld).tabs('getSelected');
                            $(tabfld).tabs('update',{
                                tab:tab,
                                options:{
                                    title:newtitle
                                }
                            });
                            
                           
                            $('#dlgRoomNew').dialog('close');
                        }
                       
                    }
                },
                {
                    text: 'Cancel',
                    handler: function()
                    {
                      $('#dlgRoomNew').dialog('close');
                    }
                }
            ]
        }
        
    ).dialog('center').dialog('open');
}
