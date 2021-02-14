/**
 * Created by Fafa on 20/1/18.
 */

var firstRemove40th = true;
var firstRemove6th = true;
function onload()
{
    reorderImages('MaintenancePhotographs',1);
    reorderImages('MaintenanceDrawings',2);
    automaticNumbering('MaintenancePhotographs');
    automaticNumbering('MaintenanceDrawings');
    addNewImageForm();
    addNewDrawingForm();
    RotateSavedCoverImage();
}

function loadCustomerDetails()
{
    console.log("should load if after the page is loaded");
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

//Learn from https://stackoverflow.com/questions/37479257/how-to-add-bullet-point-in-a-textarea
function startBullet(id)
{
    console.log(id + " is focused");
    if (document.getElementById(id).value === '') {
        console.log('add a bullet first');
        document.getElementById(id).value += '• ';
    }
}
function assignBullet(id)
{
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //if equal to 13, means user hit the "Return" key
    if (keycode == '13') {
        document.getElementById(id).value += '• ';
    }
    var txtval = document.getElementById(id).value;
    if (txtval.substr(txtval.length - 1) == '\n') {
        document.getElementById(id).value = txtval.substring(0, txtval.length - 1);
    }
}

/**
 * 
 * @param {*} divid 
 * @param {*} divtype
 * divtype == 1, it is for photo table
 * divtype == 2, it is for drawing table 
 */

function reorderImages(divid,divtype)
{

    console.log("need to reorder the images " + divid);
    var totalContainers = $('#'+divid).find('> form');
    var BigContainer = document.getElementById(divid);
    //console.log(totalContainers);
    // for (var i=0;i<totalContainers.length;i++)
    // {
    //     console.log( Number(totalContainers[i].id.replace(/[^\d.]/g, '')));
    //     console.log((totalContainers[i].id));
    // }
    totalContainers.sort(function(a,b)
    {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    //console.log(totalContainers);

    $('#'+divid).empty();
    for (var i = 0; i < totalContainers.length; i++) {
        console.log(i);
        // console.log(totalContainers.eq(i).children('img').get(0));
        BigContainer.appendChild(totalContainers[i]);
        var myImage = totalContainers.eq(i).children('img').get(0);
        //console.log(myImage);
        var imgID = totalContainers.eq(i).children('img').get(0).id;
        var labelID = totalContainers.eq(i).children('label').get(0).id;
        //console.log(labelID);
        var textID = totalContainers.eq(i).children('input').eq(0).get(0).id;

        var angleID = totalContainers.eq(i).children('input').eq(1).get(0).id;
        //console.log(textID);
        var rmBtnID = totalContainers.eq(i).children('input').eq(2).get(0).id;
        //console.log(rmBtnID);
        var addBtnID = totalContainers.eq(i).children('input').eq(3).get(0).id;

        var rotateBtnID = totalContainers.eq(i).children('input').eq(4).get(0).id;
        // console.log(rotateBtnID);
        var formID = totalContainers[i].id;
        //console.log(formID);
        var id = totalContainers[i].id.replace(/[^\d.]/g, '');

        //Rotate the images if it is rotated during the last saved. based on the angle. 
        var originalAngle = parseInt(document.getElementById(angleID).value);
        if(originalAngle > 0)
        {
            if(originalAngle == 90 || originalAngle == 270)
            {
                console.log("the degree is 90 or 270");
                if(divtype == 1)
                {
                    myImage.style.marginTop = "35px";
                    myImage.style.marginBottom = "35px";
                }
                else
                {
                    myImage.style.marginTop = "195px";
                    myImage.style.marginBottom = "195px";
                }
                $("#" + imgID).rotate(originalAngle);            
            }
            else
            {
                myImage.style.marginTop = "35px";
                myImage.style.marginBottom = "35px";
                $("#" + imgID).rotate(originalAngle);
            }

        }
        else
        {
            myImage.style.marginTop = "35px";
            myImage.style.marginBottom = "35px";
        }
        if(divtype == 1)
        {
            var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,'MaintenanceImagesTable',rotateBtnID,angleID,'MaintenancePhotographs'];
            var removeBtn = document.getElementById(totalContainers.eq(i).children('input').eq(2).get(0).id);
            var rotateBtn = document.getElementById(totalContainers.eq(i).children('input').eq(4).get(0).id);
    
            var removeFunction  = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'MaintenanceImagesTable' + "','"+ rotateBtnID +  "','" + angleID +  "','"+'MaintenancePhotographs' + "'])";
            var rotateFunction = "RotateOneImage(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'MaintenanceImagesTable' + "','"+ rotateBtnID +  "','" + angleID + "','"+'MaintenancePhotographs' + "'])";
    
            //console.log(removeFunction);
            $("#" + addBtnID).click(function () {
                global_Img = element;
                //console.log(global_Img);
                $("#MaintenanceUploadOneImage").click();
            });
            removeBtn.setAttribute("onclick", removeFunction);
            rotateBtn.setAttribute("onclick", rotateFunction);
        }
        else
        {
            var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,'MaintenanceDrawingsTable',rotateBtnID,angleID,'MaintenanceDrawings'];
            var removeBtn = document.getElementById(totalContainers.eq(i).children('input').eq(2).get(0).id);
            var rotateBtn = document.getElementById(totalContainers.eq(i).children('input').eq(4).get(0).id);
    
            var removeFunction  = "DeleteOneDrawing(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'MaintenanceDrawingsTable' + "','"+ rotateBtnID +  "','" + angleID +  "','"+'MaintenanceDrawings' + "'])";
            var rotateFunction = "RotateOneDrawing(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'MaintenanceDrawingsTable' + "','"+ rotateBtnID +  "','" + angleID + "','"+'MaintenanceDrawings' + "'])";
    
            //console.log(removeFunction);
            $("#" + addBtnID).click(function () {
                global_Drawing = element;
                //console.log(global_Drawing);
                $("#MaintenanceUploadOneDrawing").click();
            });
            removeBtn.setAttribute("onclick", removeFunction);
            rotateBtn.setAttribute("onclick", rotateFunction);
        }

       
    }  
}


function automaticNumbering(divid)
{
    console.log("need to refresh the image number" + divid);
    var totalContainers = $('#'+divid).find('> form');

    if (divid == 'MaintenanceDrawings')
    {
        for(var i=0;i<totalContainers.length;i++)
        {
            //console.log(i);
            //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
            totalContainers.eq(i).children('label').get(0).innerHTML = "Drawing " + (i + 1);
            //totalContainers.eq(i).children('div').eq(1).children('label').get(0).style.display = 'block';
        }
    }
    else
    {
        for(var i=0;i<totalContainers.length;i++)
        {
            // console.log(i);
            // console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
            totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i + 1);
            //totalContainers.eq(i).children('div').eq(1).children('label').get(0).style.display = 'block';
        }
    }
    
}

function addNewImageForm()
{
    maxImage = 40;
    var idGroup = [];
    var totalContainers = $('#MaintenancePhotographs').find('> form');
    console.log("the current form in the report MaintenancePhotographs is " + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++) 
    {
        var idStr = totalContainers.eq(i).children('img').attr('id').replace(/[^\d.]/g, '');
        var id = Number(idStr);
        idGroup.push(id);
    }
    //console.log(idGroup);
    idGroup.sort(function(a, b){return a - b;});
    //console.log(idGroup);
    console.log("the last ID is " + idGroup[idGroup.length-1]);
    var lastID = idGroup[idGroup.length-1];
    var newID = Number(lastID) + 1;
    var altID = Number(lastID) + 2;
    if(totalContainers.length < maxImage && totalContainers.length != 0)
    {
        console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
        nextAltName = 'image ' + altID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        var nextImageID = 'MaintenanceImage' + newID;
        var nextTextID = 'MaintenanceImageText' + newID;
        var nextLabelID = 'MaintenanceImageLable' + newID;
        var nextLableValue = 'MaintenanceImage' + (parseInt(newID) + 1);
        var nextRemoveButtonID = 'MaintenanceImageRemoveButton' + newID;
        var nextAddButtonID = 'AddMaintenanceImageButton' + newID;
        var nextUploadID = 'MaintenanceImageUploadImage' + newID;
        var nextRotateBtnID = 'MaintenanceImageRotateButton' + newID;
        var nextAngelInputID = 'MaintenanceImageAngle' + newID;
        var nextFormID = "MaintenanceImageForm" + newID;

        var emptyElement = createImagesElements('MaintenanceImagesTable', nextImageID, nextLabelID, nextLableValue, 
                                        nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'MaintenancePhotographs');

        //The new form only show add button.
        $("#" + emptyElement[0]).hide();
        $("#" + emptyElement[1]).hide();
        $("#" + emptyElement[2]).val("");
        $("#" + emptyElement[2]).hide();
        $("#" + emptyElement[3]).hide();
        $("#" + emptyElement[4]).show();
        $("#" + emptyElement[7]).hide();
        $("#" + emptyElement[8]).hide();
    }
}
function addNewDrawingForm()
{
    console.log("addNewDrawingForm");
    var maxDrawing = 6;
    var idGroup = [];
    var totalContainers = $('#MaintenanceDrawings').find('> form');
    console.log("the current form in the report MaintenanceDrawings is " + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('img').attr('id').replace(/[^\d.]/g, '');
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
    if(totalContainers.length < maxDrawing && totalContainers.length != 0)
    {
        
        console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
        nextAltName = 'image ' + altID;
        var nextImageID = 'MaintenanceDrawing' + newID;
        var nextTextID = 'MaintenanceDrawingText' + newID;
        var nextLabelID = 'MaintenanceDrawingLable' + newID;
        var nextLableValue = 'MaintenanceDrawing' + (parseInt(newID) + 1);
        var nextRemoveButtonID = 'MaintenanceDrawingRemoveButton' + newID;
        var nextAddButtonID = 'AddMaintenanceDrawingButton' + newID;
        var nextUploadID = 'MaintenanceDrawingUploadImage' + newID;
        var nextRotateBtnID = 'MaintenanceDrawingRotateButton' + newID;
        var nextAngelInputID = 'MaintenanceDrawingAngle' + newID;
        var nextFormID = "MaintenanceDrawingForm" + newID;
       
        var emptyElement = createDrawingsElements('MaintenanceDrawingsTable', nextImageID, nextLabelID, nextLableValue, 
                                                nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'MaintenanceDrawings');

        console.log("#" + emptyElement[4]);
        //console.log(document.getElementById(emptyElement[4]));
        //The new form only show add button.
        $("#" + emptyElement[0]).hide();
        $("#" + emptyElement[1]).hide();
        $("#" + emptyElement[2]).val("");
        $("#" + emptyElement[2]).hide();
        $("#" + emptyElement[3]).hide();
        $("#" + emptyElement[4]).show();
        $("#" + emptyElement[7]).hide();
        $("#" + emptyElement[8]).hide();
    }
}





function MaintenanceCover(){
    document.getElementById('MaintenanceUploadCoverImage').click();
}
$('#MaintenanceUploadCoverImage').change(function(){
    //uploadCoverImage(this,'AdviceCoverImage','AdviceCoverImageRemoveButton','500px');
    if(this.files && this.files[0]) {
        var imageFile = this.files[0];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        var date = new Date();
        // console.log(imageType);
        // console.log(imageName);
        loadImage.parseMetaData(imageFile, function (data) {
            console.log('I am in loadImage function');
            console.log(document.getElementById('MaintenanceCoverImageAngle').value);
            var orientation = 0;
            var image = document.getElementById('MaintenanceCoverImage');
            var removeButton = document.getElementById('MaintenanceCoverImageRemoveButton');
            var rotateButton = document.getElementById('MaintenanceCoverImageRotateButton');
            document.getElementById('MaintenanceCoverImageAngle').value  = 0;
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function (canvas) {
                    var base64data = canvas.toDataURL("image/jpeg");
                    //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    image.setAttribute('src',base64data);
                    removeButton.style.display = 'block';
                    //removeButton.style.width = '400px';
                    rotateButton.style.display = 'block';
                    //rotateButton.style.width = '400px';
                    image.style.display = 'block';
                    //image.style.width = '400px';
                    var file = new File([convertBase64UrlToBlob(base64data)], imageName, {type: imageType, lastModified:date.getTime()});
                    //console.log(file);
                    doUploadFile(file,'MaintenanceCoverImage', '', 'MaintenanceCoverImageRemoveButton', '', '', 'cover image', '', '', '', '', '265px', '400px',
                    'MaintenanceCoverImageRotateButton',"MaintenanceCoverImageAngle");
                },
                {
                    canvas: true,
                    maxWidth:1300,
                    maxHeight:1000
                }
            );
        });
    }

});

function RemoveMaintenanceCoverImage(){
    //RemoveCoverImage('AdviceCoverImage','AdviceCoverImageRemoveButton');

    var image = document.getElementById('MaintenanceCoverImage');
    var removeButton = document.getElementById('MaintenanceCoverImageRemoveButton');
    var rotatebutton = document.getElementById('MaintenanceCoverImageRotateButton');

    image.setAttribute('src', '#');
    image.style.display = 'none';
    rotatebutton.style.display = 'none';
    //image.style.width = 0;
    removeButton.style.display = 'none';
    document.getElementById("MaintenanceCoverImageAngle").value = "";
    
    doRemovePhoto('MaintenanceCoverImage');

}



function RotateCoverImage()
{
    var rotateAngle;
    var originalAngle = document.getElementById('MaintenanceCoverImageAngle').value;
    console.log(originalAngle);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }


    var myImage = document.getElementById('MaintenanceCoverImage');
    
    var rotateAngle = parseInt(originalAngle) + 90

    console.log(rotateAngle);

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        console.log("the degree is 90 or 270");
        myImage.style.marginTop = "100px";
        myImage.style.marginBottom = "100px";
        $("#MaintenanceCoverImage").rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "30px";
        myImage.style.marginBottom = "30px";
        $("#MaintenanceCoverImage").rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById('MaintenanceCoverImageAngle').value = rotateAngle
}


/**
 * Use this to rotate the cover image when the HTML report is loaded. 
 */
function RotateSavedCoverImage()
{
    console.log("RotateSavedCoverImage");
    var myImage = document.getElementById('MaintenanceCoverImage');
    var originalAngle = parseInt(document.getElementById('MaintenanceCoverImageAngle').value);
    var rotateBtn = document.getElementById('MaintenanceCoverImageRotateButton');

    //Check if there is save cover image from the last time. 
    if (myImage.src.includes("photos/") > 0) 
    {
        console.log("there is saved cover image,need to dispaly the rotate button");
        rotateBtn.style.display = 'block';
        //check if the cover image need to be rotated;            
        console.log("in");
        if(originalAngle == 90 || originalAngle == 270)
        {
            // console.log("the degree is 90 or 270");
            myImage.style.marginTop = "100px";
            myImage.style.marginBottom = "100px";
            $("#MaintenanceCoverImage").rotate(originalAngle);
        }
        else if(originalAngle == 180)
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
            $("#MaintenanceCoverImage").rotate(originalAngle);
        }
        else 
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
        }

    }

}


function MaintenanceUploadImages(){
    document.getElementById('MaintenanceUploadImages').click();
}
$('#MaintenanceUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$('#MaintenanceUploadImages').change(function() {
    firstRemove40th = true;
    var imageIDs = $("#MaintenancePhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var imgID = imageIDs.eq(i).children("img").attr("id");
        doRemovePhoto(imgID);
    }
    $("#MaintenancePhotographs").empty();
    var table = document.getElementById("MaintenanceImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    var allImages = [];
    if (this.files.length >=40) 
    {
        if(this.files.length > 40)
        {
            alert("You can only select 40 images. It will only display the first 40 images");
        }
        for (let i = 0; i < 4; i++) 
        {
            allImages.push(this.files[i]);
        }
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            var altName = 'Image' + elementID;
            var imageID = 'MaintenanceImage' + elementID;
            var labelID = 'MaintenanceImageLable' + elementID;
            var labelValue = 'Image ' + elementID;
            var textID = 'MaintenanceImageText' + elementID;
            var removeButtonID = 'MaintenanceImageRemoveButton' + elementID;
            var addButtonID = 'AddMaintenanceImageButton' + elementID;
            var uploadID = 'MaintenanceImageUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'MaintenanceImageRotateButton' + elementID;
            var imgAngleInputID = "MaintenanceImageAngle" + elementID;
            var formID = "MaintenanceImageForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("MaintenanceImagesTable", imageID, labelID, labelValue,
            textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'MaintenancePhotographs');
    
            //console.log(element);
            loadImage.parseMetaData(file, function (data) {
                var orientation = 0;
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }
    
                var loadingImage = loadImage(file, function (canvas) {
                    var data = canvas.toDataURL('image/jpeg');
                    var image = new Image();
                    image.onload = function () {
                        var code = resizeImage_Canvas(image,480,360).toDataURL('image/jpeg');
                        if (!isEmpty(code)) {
                            $("#" + element[0]).attr("src", code);
    
                            var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                type: file.type,
                                lastModified: file.lastModifiedDate
                            });
    
                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
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
            automaticNumbering("MaintenancePhotographs");
        }, 2000);
    } 
    else 
    {
        allImages = this.files;
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            // var newid = ii + 1;
            // var nameID = ii + 1;
            var altName = 'Image' + elementID;
            var imageID = 'MaintenanceImage' + elementID;
            var labelID = 'MaintenanceImageLable' + elementID;
            var labelValue = 'Image ' + elementID;
            var textID = 'MaintenanceImageText' + elementID;
            var removeButtonID = 'MaintenanceImageRemoveButton' + elementID;
            var addButtonID = 'AddMaintenanceImageButton' + elementID;
            var uploadID = 'MaintenanceImageUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'MaintenanceImageRotateButton' + elementID;
            var imgAngleInputID = "MaintenanceImageAngle" + elementID;
            var formID = "MaintenanceImageForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("MaintenanceImagesTable", imageID, labelID, labelValue,
            textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'MaintenancePhotographs');
    
            //console.log(element);
            loadImage.parseMetaData(file, function (data) {
                //console.log("I am in");
                var orientation = 0;
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }
    
                var loadingImage = loadImage(file, function (canvas) {

                    var data = canvas.toDataURL('image/jpeg');
                    var image = new Image();
                    image.onload = function () {
                        var code = resizeImage_Canvas(image,720,576).toDataURL('image/jpeg');
                        if (!isEmpty(code)) {
                            $("#" + element[0]).attr("src", code);
    
                            var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                type: file.type,
                                lastModified: file.lastModifiedDate
                            });
    
                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
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
            var nextID = count + 1;
            createEmptElementForAddingImg(nextID);
            automaticNumbering("MaintenancePhotographs");
        }, 2000);
    }
});

/*
 General Function for adding one image when the user click the "add" button
 by getting the id of the clicked button
 get the number of the id to generate other ids
 then use readOneImageURL function to add image on specific field.
 */


$('#MaintenanceUploadOneImage').click(function () {
   
    this.value = null;
});
$("#MaintenanceUploadOneImage").on('change', function (e) {
    console.log("MaintenanceUploadOneImage onchange");
    var file = e.currentTarget.files;
    //console.log(global_Img);
    if (!isEmpty(global_Img) && !isEmpty(file)) {
        var element = global_Img;

        //console.log(element);

        $("#" + element[0]).show();
        $("#" + element[1]).show();
        $("#" + element[2]).val("");
        $("#" + element[2]).show();
        $("#" + element[3]).show();
        $("#" + element[4]).hide();
        $("#" + element[7]).show();
        $("#" + element[8]).hide();

        loadImage.parseMetaData(file[0], function (data) {
            var orientation = 0;
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }

            var loadingImage = loadImage(file[0], function (canvas) {
                var data = canvas.toDataURL('image/jpeg');
                var image = new Image();
                image.onload = function () {
                    var code = resizeImage_Canvas(image,480,360).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#" + element[0]).attr("src", code);
                        var imgFile = new File([convertBase64UrlToBlob(code, file[0].type)], file[0].name, {
                            type: file[0].type,
                            lastModified: file[0].lastModifiedDate
                        });
                        doRemovePhoto(element[0]);
                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                    }
                };
                image.src = data;
            }, {
                canvas: true,
                orientation: orientation
            });
        });

        automaticNumbering("MaintenancePhotographs");

        //check if it need Add empty element
        //if there are less than 40 forms, then create a new empty element. 
        var totalContainers = $('#MaintenancePhotographs').find('> form');
        var imgscount = totalContainers.length;
        if(imgscount < 40)
        {
            var selectedID = String(element[0]).replace(/[^\d.]/g, '');
            var nextID = parseInt(selectedID) + 1;
            createEmptElementForAddingImg(nextID);
        }
    }

});

function DeleteOneImg(element) {
    
    //1. Remove the photos
    document.getElementById(element[8]).value = 0;
    doRemovePhoto(element[0]);
    $("#" + element[5]).remove();
   
    //2. Get the updated form status to see if need to crate a new img form. 
    //create a new img form if there are less than 30 images, and there are no empty form. 
    var totalContainers = $('#MaintenancePhotographs').find('> form');
    //console.log(totalContainers);
    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });
    var imgscount = totalContainers.length;
    // console.log("The current img number is " + imgscount);

    var myImage = totalContainers.eq(imgscount-1).children('img').get(0);
    var imgID = totalContainers.eq(imgscount-1).children('img').get(0).id;
    var lastid = imgID.match(/\d+/g).map(Number);
    var nextid = parseInt(lastid) + 1;

    // console.log(myImage.style.display);
    // console.log(imgID);
    // console.log(lastid);
    
    if(myImage.style.display == 'none')
    {
        console.log("the last img form is empty, no need to add a new img form, only refresh the img number")
        //3. Refresh img number
        automaticNumbering('MaintenancePhotographs');
    }
    else if(imgscount < 40 && myImage.style.display != 'none' )
    {
        console.log("less than 40 images and the last img form is full, create a new img form and refresh img number");
        createEmptElementForAddingImg(nextid);
        automaticNumbering('MaintenancePhotographs');
    }
    
}

function RotateOneImage(element)
{
    var originalAngle = document.getElementById(element[8]).value;
    var myImage = document.getElementById(element[0])
    var currentWidth = myImage.width;
    var currentHeight = myImage.height;
    //console.log("orginalAngle: " + originalAngle);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }
    var rotateAngle = parseInt(originalAngle) + 90

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        //console.log("the degree is 90 or 270");
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + element[0]).rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + element[0]).rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById(element[8]).value = rotateAngle;
    
}


$('#MaintenanceUploadDrawings').click(function()
{
    //console.log(this.value);
    this.value = null;
});

$('#MaintenanceUploadDrawings').change(function() {
    firstRemove6th = true;
    var imageIDs = $("#MaintenanceDrawings form");
    for (var i = 0; i < imageIDs.length; i++) {
        var imgID = imageIDs.eq(i).children("img").attr("id");
        doRemovePhoto(imgID);
    }
    $("#MaintenanceDrawings").empty();
    var table = document.getElementById("MaintenanceDrawingsTable");

    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    var allImages = [];
    if (this.files.length >=6) 
    {
        if(this.files.length > 6)
        {
            alert("You can only select 6 drawings. It will only display the first 6 drawing");
        }
        for (let i = 0; i < 6; i++) 
        {
            allImages.push(this.files[i]);
        }
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            var altName = 'drawing' + elementID;
            var imageID = 'MaintenanceDrawing' + elementID;
            var labelID = 'MaintenanceDrawingLable' + elementID;
            var labelValue = 'Drawing' + elementID;
            var textID = 'MaintenanceDrawingText' + elementID;
            var removeButtonID = 'MaintenanceDrawingRemoveButton' + elementID;
            var addButtonID = 'AddMaintenanceDrawingButton' + elementID;
            var uploadID = 'MaintenanceDrawingUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'MaintenanceDrawingRotateButton' + elementID;
            var imgAngleInputID = "MaintenanceDrawingAngle" + elementID;
            var formID = "MaintenanceDrawingForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createDrawingsElements("MaintenanceDrawingsTable", imageID, labelID, labelValue,
            textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'MaintenanceDrawings');
    
            //console.log(element);
            loadImage.parseMetaData(file, function (data) {
                var orientation = 0;
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }
    
                var loadingImage = loadImage(file, function (canvas) {
                    var data = canvas.toDataURL('image/jpeg');
                    var image = new Image();
                    image.onload = function () {
                        var code = resizeImage_Canvas(image,1536,1024).toDataURL('image/jpeg');
                        if (!isEmpty(code)) {
                            $("#" + element[0]).attr("src", code);
    
                            var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                type: file.type,
                                lastModified: file.lastModifiedDate
                            });
    
                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
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
            automaticNumbering('MaintenanceDrawings');
        }, 2000);
    } 
    else 
    {
        allImages = this.files;
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            // var newid = ii + 1;
            // var nameID = ii + 1;
            var altName = 'drawing' + elementID;
            var imageID = 'MaintenanceDrawing' + elementID;
            var labelID = 'MaintenanceDrawingLable' + elementID;
            var labelValue = 'Drawing' + elementID;
            var textID = 'MaintenanceDrawingText' + elementID;
            var removeButtonID = 'MaintenanceDrawingRemoveButton' + elementID;
            var addButtonID = 'AddMaintenanceDrawingButton' + elementID;
            var uploadID = 'MaintenanceDrawingUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'MaintenanceDrawingRotateButton' + elementID;
            var imgAngleInputID = "MaintenanceDrawingAngle" + elementID;
            var formID = "MaintenanceDrawingForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createDrawingsElements("MaintenanceDrawingsTable", imageID, labelID, labelValue,
            textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'MaintenanceDrawings');
    
            //console.log(element);
            loadImage.parseMetaData(file, function (data) {
                //console.log("I am in");
                var orientation = 0;
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }
    
                var loadingImage = loadImage(file, function (canvas) {

                    var data = canvas.toDataURL('image/jpeg');
                    var image = new Image();
                    image.onload = function () {
                        var code = resizeImage_Canvas(image,1536,1024).toDataURL('image/jpeg');
                        if (!isEmpty(code)) {
                            $("#" + element[0]).attr("src", code);
    
                            var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                type: file.type,
                                lastModified: file.lastModifiedDate
                            });
    
                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
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
            var nextID = count + 1;
            createEmptElementForAddingDrawing(nextID);
            automaticNumbering('MaintenanceDrawings');
        }, 2000);
    }

});


$('#MaintenanceUploadOneDrawing').click(function () {
   
    this.value = null;
});
$("#MaintenanceUploadOneDrawing").on('change', function (e) {
    console.log("MaintenanceUploadOneDrawing onchange");
    var file = e.currentTarget.files;
    //console.log(global_Drawing);
    if (!isEmpty(global_Drawing) && !isEmpty(file)) {
        var element = global_Drawing;

        //console.log(element);

        $("#" + element[0]).show();
        $("#" + element[1]).show();
        $("#" + element[2]).val("");
        $("#" + element[2]).show();
        $("#" + element[3]).show();
        $("#" + element[4]).hide();
        $("#" + element[7]).show();
        $("#" + element[8]).hide();

        loadImage.parseMetaData(file[0], function (data) {
            var orientation = 0;
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }

            var loadingImage = loadImage(file[0], function (canvas) {
                var data = canvas.toDataURL('image/jpeg');
                var image = new Image();
                image.onload = function () {
                    var code = resizeImage_Canvas(image,1536,1024).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#" + element[0]).attr("src", code);
                        //$("#" + element[0]).attr("style", "width:1000px");
                        var imgFile = new File([convertBase64UrlToBlob(code, file[0].type)], file[0].name, {
                            type: file[0].type,
                            lastModified: file[0].lastModifiedDate
                        });
                        doRemovePhoto(element[0]);
                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                    }
                };
                image.src = data;
            }, {
                canvas: true,
                orientation: orientation
            });
        });

        automaticNumbering('MaintenanceDrawings');

        //check if it need Add empty element
        //if there are less than 30 forms, then create a new empty element. 
        var totalContainers = $('#MaintenanceDrawings').find('> form');
        var imgscount = totalContainers.length;
        if(imgscount < 6)
        {
            var selectedID = String(element[0]).replace(/[^\d.]/g, '');
            var nextID = parseInt(selectedID) + 1;
            createEmptElementForAddingDrawing(nextID);
        }
    }

});



function DeleteOneDrawing(element) {
    
    //1. Remove the photos
    document.getElementById(element[8]).value = 0;
    doRemovePhoto(element[0]);
    $("#" + element[5]).remove();
   
    //2. Get the updated form status to see if need to crate a new img form. 
    //create a new img form if there are less than 30 images, and there are no empty form. 
    var totalContainers = $('#MaintenanceDrawings').find('> form');
    //console.log(totalContainers);
    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });
    var imgscount = totalContainers.length;
    // console.log("The current img number is " + imgscount);

    var myImage = totalContainers.eq(imgscount-1).children('img').get(0);
    var imgID = totalContainers.eq(imgscount-1).children('img').get(0).id;
    var lastid = imgID.match(/\d+/g).map(Number);
    var nextid = parseInt(lastid) + 1;

    // console.log(myImage.style.display);
    // console.log(imgID);
    // console.log(lastid);
    
    if(myImage.style.display == 'none')
    {
        console.log("the last img form is empty, no need to add a new img form, only refresh the img number")
        //3. Refresh img number
        automaticNumbering('MaintenanceDrawings');
    }
    else if(imgscount < 6 && myImage.style.display != 'none' )
    {
        console.log("less than 6 drawings and the last img form is full, create a new img form and refresh img number");
        createEmptElementForAddingDrawing(nextid);
        automaticNumbering('MaintenanceDrawings');
    }
    
}

function RotateOneDrawing(element)
{
    var originalAngle = document.getElementById(element[8]).value;
    var myImage = document.getElementById(element[0])
    var currentWidth = myImage.width;
    var currentHeight = myImage.height;
    //console.log("orginalAngle: " + originalAngle);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }
    var rotateAngle = parseInt(originalAngle) + 90

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        //console.log("the degree is 90 or 270");
        myImage.style.marginTop = "195px";
        myImage.style.marginBottom = "195px";
        $("#" + element[0]).rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + element[0]).rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById(element[8]).value = rotateAngle;
    
}


function MaintenanceUploadDrawings()
{
    document.getElementById('MaintenanceUploadDrawings').click();
}



/**
 * Create Image Elements dynamtically when image(s) are uploaded
 * create
 * image, label, image text, remove Button, Add Button, Rotate Button, Angle Input, A form to contain all 
 */

function createImagesElements(tableID, imgID, labelID = "", labelValue = "", textID, rmBtnID, addBtnID, formID,rotateBtnID,angleInputID,divID) {
    //console.log(lastElementID);
    var form = document.createElement("form"),
        img = document.createElement("img"),
        text = document.createElement("input"),
        rmBtn = document.createElement("input"),
        addBtn = document.createElement("input"),
        rotateBtn = document.createElement("input"),
        label = document.createElement("label"),
        angleInput = document.createElement("input");

    form.setAttribute("id", formID);
    form.setAttribute("class", "col text-center my-2");

    img.setAttribute("id", imgID);
    img.style.marginTop = "35px";
    img.style.marginBottom = "35px";
    // img.style.width = '500px';
    // img.style.height = '500px';

    // img.setAttribute("margin-top","35px");
    // img.setAttribute("margin-bottom","35px");

    text.setAttribute("id", textID);
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", "name");
    text.style.width = "480px";

    rmBtn.setAttribute("id", rmBtnID);
    rmBtn.setAttribute("class","btn btn-danger");
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.style.width = "480px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("class","btn btn-secondary");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("value", "Add");
    addBtn.style.width = "480px";
    addBtn.style.display = "none";

    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");
    rotateBtn.setAttribute("value", "Rotate");
    rotateBtn.setAttribute("style","margin-top: 5px;margin-bottom: 5px")
    rotateBtn.style.width = "480px";

    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.width = "480px";
    angleInput.style.display = "none";


    label.setAttribute("id", labelID);
    label.style.marginBottom = "0px";


    $("#" + divID).append(form);
    $("#" + formID).append(img);
    $("#" + formID).append("<br>");
    $("#" + formID).append(label);
    $("#" + formID).append("<br>");
    $("#" + formID).append(text);
    $("#" + formID).append("<br>");
    $("#" + formID).append(angleInput);
    $("#" + formID).append("<br>");
    $("#" + formID).append(rmBtn);
    $("#" + formID).append(addBtn);
    $("#" + formID).append(rotateBtn);

    //console.log(form);

    var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,tableID,rotateBtnID,angleInputID,divID];
    //console.log(element);
    $("#" + rmBtnID).click(function () {
        // DeleteImage(formID, imgID, textID);
        DeleteOneImg(element);
    });
    $("#" + addBtnID).click(function () {
        console.log("click");
        global_Img = element;
        //console.log(global_Img);
        $("#MaintenanceUploadOneImage").click();

    });

    $("#" + rotateBtnID).click(function () {
        RotateOneImage(element);
    });


    return element;
}

/**
 * Create Empty Image Elements for the next image, when a image is uploaded. Prepare for the next. 
 */
function createEmptElementForAddingImg(newID)
{
    var nextImageID = 'MaintenanceImage' + newID;
    var nextTextID = 'MaintenanceImageText' + newID;
    var nextLabelID = 'MaintenanceImageLable' + newID;
    var nextLableValue = 'MaintenanceImage' + (parseInt(newID) + 1);
    var nextRemoveButtonID = 'MaintenanceImageRemoveButton' + newID;
    var nextAddButtonID = 'AddMaintenanceImageButton' + newID;
    var nextUploadID = 'MaintenanceImageUploadImage' + newID;
    var nextRotateBtnID = 'MaintenanceImageRotateButton' + newID;
    var nextAngelInputID = 'MaintenanceImageAngle' + newID;
    var nextFormID = "MaintenanceImageForm" + newID;
    var emptyElement = createImagesElements('MaintenanceImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, 
                                            nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'MaintenancePhotographs');
    //The new form only show add button.
    $("#" + emptyElement[0]).hide();
    $("#" + emptyElement[1]).hide();
    $("#" + emptyElement[2]).val("");
    $("#" + emptyElement[2]).hide();
    $("#" + emptyElement[3]).hide();
    $("#" + emptyElement[4]).show();
    $("#" + emptyElement[7]).hide();
    $("#" + emptyElement[8]).show();

}

/**
 * Create Image Elements dynamtically when image(s) are uploaded
 * create
 * image, label, image text, remove Button, Add Button, Rotate Button, Angle Input, A form to contain all 
 */

function createDrawingsElements(tableID, imgID, labelID = "", labelValue = "", textID, rmBtnID, addBtnID, formID,rotateBtnID,angleInputID,divID) {
    //console.log(lastElementID);
    var form = document.createElement("form"),
        img = document.createElement("img"),
        text = document.createElement("input"),
        rmBtn = document.createElement("input"),
        addBtn = document.createElement("input"),
        rotateBtn = document.createElement("input"),
        label = document.createElement("label"),
        angleInput = document.createElement("input");

    form.setAttribute("id", formID);
    form.setAttribute("class", "col text-center my-2");

    img.setAttribute("id", imgID);
    img.style.marginTop = "35px";
    img.style.marginBottom = "35px";
    img.style.width = '1000px';
    // img.style.height = '1000px';

    // img.setAttribute("margin-top","35px");
    // img.setAttribute("margin-bottom","35px");

    text.setAttribute("id", textID);
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", "name");
    text.style.width = "1000px";

    rmBtn.setAttribute("id", rmBtnID);
    rmBtn.setAttribute("class","btn btn-danger");
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.style.width = "1000px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("class","btn btn-secondary");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("value", "Add");
    addBtn.style.width = "1000px";
    addBtn.style.display = "none";

    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");
    rotateBtn.setAttribute("value", "Rotate");
    rotateBtn.setAttribute("style","margin-top: 5px;margin-bottom: 5px")
    rotateBtn.style.width = "1000px";

    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.width = "1000px";
    angleInput.style.display = "none";


    label.setAttribute("id", labelID);
    label.style.marginBottom = "0px";


    $("#" + divID).append(form);
    $("#" + formID).append(img);
    $("#" + formID).append("<br>");
    $("#" + formID).append(label);
    $("#" + formID).append("<br>");
    $("#" + formID).append(text);
    $("#" + formID).append("<br>");
    $("#" + formID).append(angleInput);
    $("#" + formID).append("<br>");
    $("#" + formID).append(rmBtn);
    $("#" + formID).append(addBtn);
    $("#" + formID).append(rotateBtn);

    //console.log(form);

    var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,tableID,rotateBtnID,angleInputID,divID];
    //console.log(element);
    $("#" + rmBtnID).click(function () {
        // DeleteImage(formID, imgID, textID);
        DeleteOneDrawing(element);
    });
    $("#" + addBtnID).click(function () {
        console.log("click");
        global_Drawing = element;
        //console.log(global_Drawing);
        $("#MaintenanceUploadOneDrawing").click();

    });

    $("#" + rotateBtnID).click(function () {
        RotateOneDrawing(element);
    });


    return element;
}

/**
 * Create Empty Image Elements for the next image, when a image is uploaded. Prepare for the next. 
 */
function createEmptElementForAddingDrawing(newID)
{
    console.log('createEmptElementForAddingDrawing');
    //console.log(newID);
    var nextImageID = 'MaintenanceDrawing' + newID;
    var nextTextID = 'MaintenanceDrawingText' + newID;
    var nextLabelID = 'MaintenanceDrawingLable' + newID;
    var nextLableValue = 'MaintenanceDrawing' + (parseInt(newID) + 1);
    var nextRemoveButtonID = 'MaintenanceDrawingRemoveButton' + newID;
    var nextAddButtonID = 'AddMaintenanceDrawingButton' + newID;
    var nextUploadID = 'MaintenanceDrawingUploadImage' + newID;
    var nextRotateBtnID = 'MaintenanceDrawingRotateButton' + newID;
    var nextAngelInputID = 'MaintenanceDrawingAngle' + newID;
    var nextFormID = "MaintenanceDrawingForm" + newID;
    var emptyElement = createDrawingsElements('MaintenanceDrawingsTable', nextImageID, nextLabelID, nextLableValue, nextTextID, 
                                            nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'MaintenanceDrawings');
    //The new form only show add button.
    //console.log(emptyElement);
    $("#" + emptyElement[0]).hide();
    $("#" + emptyElement[1]).hide();
    $("#" + emptyElement[2]).val("");
    $("#" + emptyElement[2]).hide();
    $("#" + emptyElement[3]).hide();
    $("#" + emptyElement[4]).show();
    $("#" + emptyElement[7]).hide();
    $("#" + emptyElement[8]).show();

}

//Source from http://www.blogjava.net/jidebingfeng/articles/406171.html
function convertBase64UrlToBlob(urlData,type){

    var bytes=window.atob(urlData.split(',')[1]);        //remove url, convert to byte

    //deal with anomaly, change the ASCI code less than = 0 to great than zero
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }

    return new Blob( [ab] , {type : type});
}

/**
 * Single Action, image related
 * Resize the Image
 */
function resizeImage_Canvas(img,maxWidth,maxHeight) {
    console.log(maxHeight);
    console.log(maxWidth);
    var MAX_WIDTH = maxWidth,
        MAX_HEIGHT = maxHeight,
        width = img.width,
        height = img.height,
        canvas = document.createElement('canvas');

    if (width >= height) {
        if (width > MAX_WIDTH) {
            //height *= MAX_WIDTH / width;
            //width = MAX_WIDTH;
            height = MAX_HEIGHT;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
            //height = 198;

        }
    }
    console.log(width);
    console.log(height);
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas;
}


//learn from https://jsfiddle.net/mqwwpL6u/505/
var autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);
