/**
 * Created by Fafa on 12/1/18.
 */
var firstRemove4th = true;
function onload()
 {
     reorderImages();
     automaticNumbering();
     addNewImageForm()
 }

function reorderImages()
{
    console.log("need to reorder the images");
    var totalContainers = $('#homeFeasibilityDrawings').find('> form');
    var BigContainer = document.getElementById('homeFeasibilityDrawings');
    console.log(totalContainers);
    // for (var i=0;i<totalContainers.length;i++)
    // {
    //     console.log( Number(totalContainers[i].id.replace(/[^\d.]/g, '')));
    //     console.log((totalContainers[i].id));
    // }
    totalContainers.sort(function(a,b)
    {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    console.log(totalContainers);

    $("#homeFeasibilityDrawings").empty();
    for (var i=0;i<totalContainers.length;i++)
    {
       BigContainer.appendChild(totalContainers[i]);
    }
}


function automaticNumbering()
{
    console.log("need to refresh the image number");
    var totalContainers = $('#homeFeasibilityDrawings').find('> form');
    for(var i=0;i<totalContainers.length;i++)
    {
        //console.log(i);
        //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
        totalContainers.eq(i).children('div').eq(1).children('label').get(0).innerHTML = "Drawing " + (i+1);
    }
}
function addNewImageForm()
{
    maxImage = 4;
    var idGroup = [];
    var totalContainers = $('#homeFeasibilityDrawings').find('> form');
    console.log("the current form in the report homeFeasibilityDrawings is " + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
        var id = Number(idStr);
        idGroup.push(id);
    }
    //console.log(idGroup);
    idGroup.sort(function(a, b){return a - b});
    //console.log(idGroup);
    console.log("the last ID is " + idGroup[idGroup.length-1]);
    var lastID = idGroup[idGroup.length-1]
    var newID = Number(lastID) + 1;
    var altID = Number(lastID) + 2;
    if(totalContainers.length < maxImage && totalContainers.length != 0)
    {
        console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
        nextAltName = 'image ' + altID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        var nextImageID = 'homeDrawing' + newID;
        var nextTextID = 'homeDrawingText' + newID;
        var nextRemoveButtonID = 'homeDrawingRemoveButton' + newID;
        var nextAddButtonID = 'homeDrawingAddButton' + newID;
        var nextUploadID = 'homeDrawingUpload' + newID;
        addImageElements(nextAltName, nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
            'removeOneHomeDrawing(this.id)', 'addOneHomeDrawing(this.id)', '100%', '0px');
    }
}

function countWord(click_id)
{
    var words = document.getElementById(click_id).value;
    var regex = /\s+/gi;
    var wordCount = words.trim().replace(regex, ' ').split(' ').length;
    //console.log("total word count: " + wordCount);
    // if (wordCount >= 4)
    // {
    //     document.getElementById(click_id).disabled = true;
    //     alert("you can only enter 3 words");
    // }
}

function formatNumber(click_id)
{
    var val = document.getElementById(click_id).value;

    val = val.replace(/[^0-9\.]/g,'');

    if(val != "") {
        valArr = val.split('.');
        valArr[0] = (parseInt(valArr[0],10)).toLocaleString();
        val = valArr.join('.');
    }

    document.getElementById(click_id).value = "$" + val;
}


/**
 * Add people to the involved table
 */
function addPeople()
{
    var table = document.getElementById('homePeopleTable');
    var rowCount = table.rows.length;
    var totalPeople = rowCount - 1;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    //create input for cell1

    var nameInput = document.createElement('INPUT');
    nameInput.setAttribute('class','form-control');
    nameInput.setAttribute('title','people');
    nameInput.setAttribute('type','text');
    //nameInput.setAttribute('placeholder','enter cost name');
    nameInput.id = 'homeInvolvedPeople' + totalPeople;
    nameInput.style.textAlign = 'center';
    cell1.appendChild(nameInput);

    var textArea = document.createElement('textarea');
    textArea.setAttribute('class','form-control');
    textArea.setAttribute('class','description');
    textArea.id = 'homeInvolvedDescription' + totalPeople;
    cell2.appendChild(textArea);
}


/**
 * Calculate the option of cost automatically
 */

function calculateHomeLow()
{

    var subTotal = 0;
    var rowCount = document.getElementById('homeFeasibilityTable').rows.length;
    var usefulRow = rowCount - 5;
    for (var i = 0;i<usefulRow;i++)
    {
        var lowCost = String(document.getElementById('homeLow'+i).value);
        var lowCostNumber = 0;
        if (lowCost.trim() != '')
        {
            if(lowCost.trim() != '$')
            {
                lowCostNumber = lowCost.replace(/[^\d.]/g, '');
            }
        }
        subTotal = (subTotal + parseFloat(lowCostNumber));
    }
    subTotal = subTotal.toFixed(2);
    var lowTotal = (subTotal * 1.1).toFixed(2);
    var lowGST = (subTotal * 0.1).toFixed(2);

    if(subTotal != "") {
        valArr = subTotal.toString().split('.');
        valArr[0] = (parseInt(valArr[0],10)).toLocaleString();
        subTotal = valArr.join('.');
    }

    if(lowTotal != "") {
        valArr = lowTotal.toString().split('.');
        valArr[0] = (parseInt(valArr[0],10)).toLocaleString();
        lowTotal = valArr.join('.');

    }

    if(lowGST != "")
    {
        valArr = lowGST.toString().split('.');
        valArr[0] = (parseInt(valArr[0],10)).toLocaleString();
        lowGST = valArr.join('.');
    }


    document.getElementById('homeLowSubTotal').value = '$' + subTotal;
    document.getElementById('homeLowTotal').value = '$' + lowTotal;
    document.getElementById('homeLowGST').value = '$' + lowGST;

}


function calculateHomeHigh()
{
    var subTotal = 0;
    var rowCount = document.getElementById('homeFeasibilityTable').rows.length;
    var usefulRow = rowCount - 5;
    for (var i = 0;i<usefulRow;i++)
    {
        var highCost = String(document.getElementById('homeHigh'+i).value);
        //console.log(lowCost);
        var highCostNumber = 0;
        if (highCost.trim() != '')
        {
            if(highCost.trim() != '$')
            {
                highCostNumber = highCost.replace(/[^\d.]/g, '');
            }
        }
        subTotal = (subTotal + parseFloat(highCostNumber));
    }
    subTotal = subTotal.toFixed(2);
    var highTotal = (subTotal * 1.1).toFixed(2);
    var highGST = (subTotal * 0.1).toFixed(2);

    if(subTotal != "") {
        valArr = subTotal.toString().split('.');
        valArr[0] = (parseInt(valArr[0],10)).toLocaleString();
        subTotal = valArr.join('.');
    }

    if(highTotal != "") {
        valArr = highTotal.toString().split('.');
        valArr[0] = (parseInt(valArr[0],10)).toLocaleString();
        highTotal = valArr.join('.');

    }

    if (highGST != "") {
        valArr = highGST.toString().split('.');
        valArr[0] = (parseInt(valArr[0], 10)).toLocaleString();
        highGST = valArr.join('.');
    }

    document.getElementById('homeHighSubTotal').value = '$' + subTotal;
    document.getElementById('homeHighTotal').value = '$' + highTotal;
    document.getElementById('homeHighGST').value = '$' + highGST;


}




function moreHomeCost() {
    // console.log('your are in');
    var table = document.getElementById('homeFeasibilityTable');
    var rowCount = table.rows.length;
    var usefulRow = rowCount - 6;
    var id = usefulRow + 1;
    var row = table.insertRow(rowCount - 3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    //create an name input for the cell1
    var nameInput = document.createElement('INPUT');
    nameInput.setAttribute('class','form-control');
    nameInput.setAttribute('title','name');
    nameInput.setAttribute('type','text');
    //nameInput.setAttribute('placeholder','enter cost name');
    nameInput.id = 'homeName' + id;
    cell1.appendChild(nameInput);

    //create an low cost input for the cell2
    var lowInput = document.createElement('INPUT');
    lowInput.setAttribute('class','form-control');
    lowInput.setAttribute('title','name');
    lowInput.setAttribute('type','text');
    lowInput.setAttribute('value','$');
    lowInput.setAttribute('onblur','calculateHomeLow()');
    lowInput.setAttribute('onkeyup','formatNumber(this.id)');
    lowInput.id = 'homeLow' + id;
    cell2.appendChild(lowInput);

    //create an high cost input for the cell3
    var highInput = document.createElement('INPUT');
    highInput.setAttribute('class','form-control');
    highInput.setAttribute('title','name');
    highInput.setAttribute('type','text');
    highInput.setAttribute('value','$');
    highInput.setAttribute('onblur','calculateHomeHigh()');
    highInput.setAttribute('onkeyup','formatNumber(this.id)');
    highInput.id = 'homeHigh' + id;
    cell3.appendChild(highInput);

}




function HomeFeasibilityUploadDrawings() {
    document.getElementById('HomeFeasibilityUploadDrawings').click();
}

$('#HomeFeasibilityUploadDrawings').click(function()
{
    //console.log(this.value);
    this.value = null;
});

$('#HomeFeasibilityUploadDrawings').change(function(){
    firstRemove4th == true
    var imageIDs = $("#homeFeasibilityDrawingsTable form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#homeFeasibilityDrawings").empty();
    var table = document.getElementById("homeFeasibilityDrawingsTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    if (count > 4) {
        alert("You can only select 4 drawings. It will only display the first 4 drawings");
    }

    if(count < 4)
    {
        for (var i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'drawing  ' + nameID;
                    var imageID = 'homeDrawing' + ii;
                    var textID = 'homeDrawingText' + ii;
                    var removeButtonID = 'homeDrawingRemoveButton' + ii;
                    var addButtonID = 'homeDrawingAddButton' + ii;
                    var uploadID = 'homeDrawingUpload' + ii;
                    var imgLabelID = "imageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';
                    addImageElements(altName, imageID, textID, removeButtonID, addButtonID, uploadID,
                        'removeOneHomeDrawing(this.id)', 'addOneHomeDrawing(this.id)', '100%', '0px');


                   //addDrawing();

                    loadImage.parseMetaData(imageFile[ii], function (data) {
                        //console.log('I am in loadImage function');
                        var orientation = 0;
                        var date = new Date();
                        var imageName = imageFile[ii].name;
                        var imageType = imageFile[ii].type;
                        var image = document.getElementById(imageID);
                        var removeButton = document.getElementById(removeButtonID);
                        var description  = document.getElementById(textID);
                        var addButton = document.getElementById(addButtonID);
                        //if exif data available, update orientation
                        if (data.exif) {
                            orientation = data.exif.get('Orientation');
                        }
                        var loadingImage = loadImage(imageFile[ii], function (canvas) {
                                var base64data = canvas.toDataURL(imageType);
                                //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                                image.setAttribute('src',base64data);
                                //$(selectionImage).attr('src',base64data);
                                removeButton.style.display = 'block';
                                removeButton.style.width = '100%';
                                addButton.style.display = 'none';
                                addButton.style.width = '100%';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '100%';
                                image.style.height = '100%';
                                description.style.width = '100%';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                //doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'homeFeasibilityDrawingsTable',altName,'','',uploadID,'','100%','100%');
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'homeFeasibilityDrawingsTable',altName,'',uploadID,'removeOneHomeDrawing(this.id)','addOneHomeDrawing(this.id)','100%','100%');


                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1500,
                                maxHeight:1200
                            }
                        );
                    });

                }, 200);
            }
        }
        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'homeDrawing' + count;
            var textID = 'homeDrawingText' + count;
            var removeButtonID = 'homeDrawingRemoveButton' + count;
            var addButtonID = 'homeDrawingAddButton' + count;
            var uploadID = 'homeDrawingUpload' + count;
            addImageElements(altName, imageID, textID, removeButtonID, addButtonID, uploadID,
                'removeOneHomeDrawing(this.id)', 'addOneHomeDrawing(this.id)', '100%', '0px');
            automaticNumbering();

        },400)
    }
    else
    {
        for (var i = 0; i<4;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'drawing  ' + nameID;
                    var imageID = 'homeDrawing' + ii;
                    var textID = 'homeDrawingText' + ii;
                    var removeButtonID = 'homeDrawingRemoveButton' + ii;
                    var addButtonID = 'homeDrawingAddButton' + ii;
                    var uploadID = 'homeDrawingUpload' + ii;
                    var imgLabelID = "imageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';

                    addImageElements(altName, imageID, textID, removeButtonID, addButtonID, uploadID,
                        'removeOneHomeDrawing(this.id)', 'addOneHomeDrawing(this.id)', '100%', '0px');
                    //addDrawing();

                    loadImage.parseMetaData(imageFile[ii], function (data) {
                        console.log('I am in loadImage function');
                        var orientation = 0;
                        var date = new Date();
                        var selectionImage = '#AdviceImage' + ii;
                        var imageName = imageFile[ii].name;
                        var imageType = imageFile[ii].type;
                        var image = document.getElementById(imageID);
                        var removeButton = document.getElementById(removeButtonID);
                        var description  = document.getElementById(textID);
                        var addButton = document.getElementById(addButtonID);
                        //if exif data available, update orientation
                        if (data.exif) {
                            orientation = data.exif.get('Orientation');
                        }
                        var loadingImage = loadImage(imageFile[ii], function (canvas) {
                                var base64data = canvas.toDataURL(imageType);
                                //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                                image.setAttribute('src',base64data);
                                //$(selectionImage).attr('src',base64data);
                                removeButton.style.display = 'block';
                                removeButton.style.width = '100%';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '100%';
                                image.style.height = '100%';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                //doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'homeFeasibilityDrawingsTable',altName,'','','','','100%','100%');
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'homeFeasibilityDrawingsTable',altName,'',uploadID,'removeOneHomeDrawing(this.id)','addOneHomeDrawing(this.id)','100%','100%');
                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1500,
                                maxHeight:1200
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 500);
            }
        }
        setTimeout(function(){
            automaticNumbering();

        },1000)
    }

});

//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
function addImageElements(imageAltName, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize,width) {
    var table = document.getElementById('homeFeasibilityDrawingsTable');
    table.style.display = 'block';
    var currentID = imageID.replace(/[^\d.]/g, '');
    var BigContainer = document.getElementById('homeFeasibilityDrawings');
    //console.log(BigContainer);
    // var rowCount = table.rows.length;
    // console.log(rowCount);
    // var row = table.insertRow(rowCount);
    // var cell1 = row.insertCell(0);


    //var BigContainer = document.getElementById(divID);
    var form = document.createElement("form");
    form.id = "imageForm" + currentID;
    form.style.width = '100%';
    //console.log(form);
    // console.log(form);
    //form.setAttribute("class","divForm");
    //need four dividends in a form
    var container1 = document.createElement("div");
    var container2 = document.createElement("div");
    var container3 = document.createElement("div");
    var container4 = document.createElement("div");
    var container5 = document.createElement("div");
    container1.setAttribute("class", "col-sm");
    container2.setAttribute("class", "col-sm");
    container2.style.textAlign = "center";
    container3.setAttribute("class", "col-sm");
    container4.setAttribute("class", "col-sm");
    container5.setAttribute("class", "col-sm");

    //crate an image area
    var img = document.createElement('img');
    // img.src = "#";
    // img.alt = imageAltName;
    img.id = imageID;
    // img.style.display = 'none';
    img.style.width = '0px';
    img.style.height = '0px';
    img.style.paddingTop = '10px';

    //create an input for the text
    var textInput = document.createElement('INPUT');
    textInput.setAttribute("type", "text");
    textInput.style.width = imageSize;
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
    removeButton.style.height = "25px";
    removeButton.style.display = "none";


    //create an input for add button
    var addButton = document.createElement('INPUT');
    addButton.setAttribute("type", "button");
    addButton.setAttribute("value", "Add");
    addButton.setAttribute("onclick", addFunction);
    addButton.id = addButtonID;
    addButton.style.width = '100%';
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

    //create the image label for image caption number. 
    var imgLabel = document.createElement("label");
    var imgLabelID = "imageCaption" + currentID;
    imgLabel.setAttribute("id", imgLabelID);
    imgLabel.style.display = "none";
    imgLabel.innerHTML = "Drawing " + (Number(currentID)+1);


    //put all elements into the correct container
    //BigContainer.appendChild(form);
    BigContainer.appendChild(form);
    form.appendChild(container1);
    form.appendChild(container2);
    form.appendChild(container3);
    form.appendChild(container4);
    form.appendChild(container5);
    container1.appendChild(img);
    container2.appendChild(imgLabel);
    container3.appendChild(textInput);
    container4.appendChild(removeButton);
    container5.appendChild(addButton);
    container5.appendChild(uploadFile);
}

function removeOneHomeDrawing(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'homeDrawing' + id;
    var removeButtonID = 'homeDrawingRemoveButton' + id;
    var addButtonID = 'homeDrawingAddButton' + id;
    var descriptionID = 'homeDrawingText' + id;
    var formID = 'imageForm' + id;
    var totalContainers = $('#homeFeasibilityDrawings').find('> form');
    var idGroup = [];
    console.log("the current total image number is: " + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
       // console.log(idStr);
        var id = Number(idStr);
        idGroup.push(id);
    }
    idGroup.sort(function(a, b){return a - b});
    var lastID = idGroup[idGroup.length-1]
    console.log("this last id is " + lastID);


    var imageSelect = '#' + imageID;
    $(imageSelect).attr('src', '#');
    var image = document.getElementById(imageID);
    var button = document.getElementById(removeButtonID);
    var addButton = document.getElementById(addButtonID);
    var description = document.getElementById(descriptionID);

    button.style.display = 'none';
    addButton.style.display = 'block';
    //addButton.style.width = '100%';
    description.value = "";
    description.style.display = 'none';
    //image.style.width = '0px';
    image.style.display = 'none';
    doRemovePhoto(imageID);
    $('#' + formID).remove();

    //has four drawing but, remove one, no additional 'add' button
    if(totalContainers.length == 4 && firstRemove4th == true)
    {
        console.log("need to create a new add button");
        var newID = Number(lastID) + 1;
        var altID = Number(lastID) + 2;
        nextAltName = 'image ' + altID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        var nextImageID = 'homeDrawing' + newID;
        var nextTextID = 'homeDrawingText' + newID;
        var nextRemoveButtonID = 'homeDrawingRemoveButton' + newID;
        var nextAddButtonID = 'homeDrawingAddButton' + newID;
        var nextUploadID = 'homeDrawingUpload' + newID;
        addImageElements(nextAltName, nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
            'removeOneHomeDrawing(this.id)', 'addOneHomeDrawing(this.id)', '100%', '0px');
        firstRemove4th = false;
    }

     //update the totalConaintainers after removing one form, If remove all the images one by one, don't leave a signle 'add' button
     totalContainers = $('#homeFeasibilityDrawings').find('> form');
     //console.log(totalContainers);
     //console.log(totalContainers.eq(0).children('div').eq(0).children('img').attr('src'))
     if (totalContainers.length == 1 && typeof totalContainers.eq(0).children('div').eq(0).children('img').attr('src') == 'undefined')
     {
         console.log("it does not have any images, emtpy the div");
         $("#homeFeasibilityDrawings").empty();
         document.getElementById('homeFeasibilityDrawingsTable').style.display = 'none';
     }

    automaticNumbering();
}

function addOneHomeDrawing(click_id)
{
    //console.log(click_id);

    var id;
    var selectedID = String(click_id).replace ( /[^\d.]/g, '' );
    var idGroup = [];
    console.log("the selectedID " + selectedID);
    var totalContainers = $('#homeFeasibilityDrawings').find('> form');
    console.log("the current total image number is: " + totalContainers.length);
    // id = selectedID.replace ( /[^\d.]/g, '' );
    var nameID = Number(selectedID) + 1;
    var altName = 'drawing  ' + nameID;
    var imageID = 'homeDrawing' + selectedID;
    var textID = 'homeDrawingText' + selectedID;
    var removeButtonID = 'homeDrawingRemoveButton' + selectedID;
    var addButtonID = 'homeDrawingAddButton' + selectedID;
    var uploadID = 'homeDrawingUpload' + selectedID;
    var imgLabelID = "imageCaption" + selectedID;
    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
        console.log(idStr);
        var id = Number(idStr);
        idGroup.push(id);
    }
    idGroup.sort(function(a, b){return a - b});
    var lastID = idGroup[idGroup.length-1]
    console.log("this last id is " + lastID);
    // console.log(uploadID);
    var x = document.getElementById(uploadID);
    // x.click();
    $("#"+uploadID).unbind().click();
    $('#'+uploadID).change(function(){
        //console.log("Hi 0");
        if (this.files && this.files[0]) {

            //console.log(this.files.length);
            //console.log("Hi 1");
            if(totalContainers.length == 4)
            {
                console.log("add the last 4th image, need to reset the firstRemovetth");
                firstRemove4th = true;
            }
            if (totalContainers.length <= 4)
            {
                //console.log("Hi 2");
                //if the total number of image is less than 30, then need to create a new image element to allow user to upload another one.
                var imageFile = this.files[0];
                //document.getElementById(imgLabelID).style.display = 'block';
               
                loadImage.parseMetaData(imageFile, function (data) {
                    //console.log('I am in loadImage function');
                    var orientation = 0;
                    var date = new Date();
                    // var selectionImage = '#AdviceImage' + ii;
                    var imageName = imageFile.name;
                    var imageType = imageFile.type;
                    var image = document.getElementById(imageID);
                    var removeButton = document.getElementById(removeButtonID);
                    var description  = document.getElementById(textID);
                    var addButton = document.getElementById(addButtonID);
                    var imageLable = document.getElementById(imgLabelID);
                    //if exif data available, update orientation
                    if (data.exif) {
                        orientation = data.exif.get('Orientation');
                    }
                    var loadingImage = loadImage(imageFile, function (canvas) {
                            var base64data = canvas.toDataURL(imageType);
                            //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                            image.setAttribute('src',base64data);
                            //$(selectionImage).attr('src',base64data);
                            removeButton.style.display = 'block';
                            removeButton.style.width = '100%';
                            addButton.style.display = 'none';
                            description.style.display = 'block';
                            image.style.display = 'block';
                            image.style.width = '100%';
                            image.style.height = '100%';
                            imageLable.style.display = 'block';
                            // image.style.height = '250px';
                            var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                            //console.log(file);
                            doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'homeFeasibilityDrawingsTable',nextAltName,'homeFeasibilityDrawings',uploadID,'removeOneHomeDrawing(this.id)','addOneHomeDrawing(this.id)','100%','100%');

                        },
                        {
                            canvas: true,
                            orientation: orientation,
                            maxWidth:1500,
                            maxHeight:1200
                        }
                    );
                });
                automaticNumbering();
                if (Number(selectedID) == Number(lastID))
                {
                    if (totalContainers.length < 4)
                    {
                        console.log("you are adding an image to the last id block");
                        var newID = Number(lastID) + 1;
                        var altID = Number(lastID) + 2;
                        nextAltName = 'image ' + altID;
                        //console.log("I am here!!! need another image element ,the next id  " + newID);
                        var nextImageID = 'homeDrawing' + newID;
                        var nextTextID = 'homeDrawingText' + newID;
                        var nextRemoveButtonID = 'homeDrawingRemoveButton' + newID;
                        var nextAddButtonID = 'homeDrawingAddButton' + newID;
                        var nextUploadID = 'homeDrawingUpload' + newID;
                        addImageElements(nextAltName, nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            'removeOneHomeDrawing(this.id)', 'addOneHomeDrawing(this.id)', '100%', '0px');
                    }
                   
                }
            }
        }
    });
}



function HomeFeasibilityCover()
{
    document.getElementById('HomeFeasibilityUploadCoverImage').click();
}

$('#HomeFeasibilityUploadCoverImage').change(function(){
    if(this.files && this.files[0]) {
        var imageFile = this.files[0];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        var date = new Date();
        // console.log(imageType);
        // console.log(imageName);
        loadImage.parseMetaData(imageFile, function (data) {
            console.log('I am in loadImage function');
            var orientation = 0;
            var image = document.getElementById('HomeFeasibilityCoverImage');
            var removeButton = document.getElementById('HomeFeasibilityCoverImageRemoveButton');
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function (canvas) {
                    var base64data = canvas.toDataURL(imageType);
                    //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    image.setAttribute('src',base64data);
                    removeButton.style.display = 'block';
                    //removeButton.style.width = '100%';
                    image.alt = 'Cover Image';
                    image.style.display = 'block';
                    image.style.width = '100%';
                    image.style.height = '100%';
                    var file = new File([convertBase64UrlToBlob(base64data)], imageName, {type: imageType, lastModified:date.getTime()});
                    //console.log(file);
                    doUploadFile(file,'HomeFeasibilityCoverImage', '', 'HomeFeasibilityCoverImageRemoveButton', '','','cover image','','','','','100%','100%');

                },
                {
                    canvas: true,
                    orientation: orientation,
                    maxWidth:1300,
                    maxHeight:1000
                }
            );
        });
    }
});


function RemoveHomeFeasibilityCover(){

    var imageSelect = '#' + 'HomeFeasibilityCoverImage';
    $(imageSelect).attr('src', '#');
    var image = document.getElementById('HomeFeasibilityCoverImage');
    var button = document.getElementById('HomeFeasibilityCoverImageRemoveButton');
    

    button.style.display = 'none';
    image.style.width = '0px';
    image.style.display = 'none';

    doRemovePhoto('HomeFeasibilityCoverImage');

}

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

