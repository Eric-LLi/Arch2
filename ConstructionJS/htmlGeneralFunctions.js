/**
 * Created by Fafa on 22/1/18.
 */

 var firstRemove30th = true;

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

function startNumber(id)
{
    if (document.getElementById(id).value === '') {
        document.getElementById(id).value += '1. ';
    }
}
function assignNumber(id)
{
    var keycode = (event.keyCode ? event.keyCode : event.which);
    //if equal to 13, means user hit the "Return" key
    if (keycode == '13') {
        var number = getIt(id).split('\n').length + 1;
        //console.log(getIt(id).split('\n').length);
        document.getElementById(id).value += number + ". ";
        //number = number + 1;
    }
    var txtval = document.getElementById(id).value;
    if (txtval.substr(txtval.length - 1) == '\n') {
        document.getElementById(id).value = txtval.substring(0, txtval.length - 1);
    }
}




function moreConstructionSummary()
{
    var div = document.getElementById('CSRow');
    var divNumber = $('#CSRow').find('> div').length;
    //console.log(divNumber);
    var newDivID = 'CS' + divNumber;
    var newInputID = 'CSName' + divNumber;
    var newSelectID = 'CSSelect' + divNumber;

    var newDiv = document.createElement('div');
    newDiv.setAttribute('class','col-sm-4');
    newDiv.setAttribute('id',newDivID);
    newDiv.style.marginTop = '20px';

    var name  = document.createElement('INPUT');
    name.setAttribute('class','form-control');
    name.setAttribute('title', 'name');
    name.setAttribute('type','text');
    name.setAttribute('id',newInputID);
    newDiv.appendChild(name);

    var describe  = document.createElement('INPUT');
    describe.setAttribute('class','form-control');
    describe.setAttribute('title','describe');
    describe.setAttribute('type','text');
    describe.setAttribute('id',newSelectID);
    newDiv.appendChild(describe);

    div.appendChild(newDiv);

}


function ConstructionCover(){
    console.log('I am in');
    document.getElementById('ConstructionUploadCoverImage').click();
    console.log("clicked");
}


$("#ConstructionUploadCoverImage").change(function(){
    console.log("I am in 2");
    //uploadCoverImage(this,'ConstructionCoverImage','ConstructionCoverImageRemoveButton','500px');
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
            var image = document.getElementById('ConstructionCoverImage');
            var removeButton = document.getElementById('ConstructionCoverImageRemoveButton');
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
                    doUploadFile(file,'ConstructionCoverImage', '', 'ConstructionCoverImageRemoveButton', '','','cover image','','','','','100%','100%');

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

function RemoveConstructionCoverImage(){
    //RemoveCoverImage('AdviceCoverImage','AdviceCoverImageRemoveButton');

    var image = document.getElementById('ConstructionCoverImage');
    var removeButton = document.getElementById('ConstructionCoverImageRemoveButton');

    image.setAttribute('src','#');
    image.style.display = 'none';
    image.style.width = 0;
    removeButton.style.display = 'none';
    doRemovePhoto('ConstructionCoverImage');

}


function ConstructionUploadImages(){
    document.getElementById('ConstructionUploadImages').click();
}
$('#ConstructionUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$('#ConstructionUploadImages').change(function() {
    var imageIDs = $("#ConstructionPhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#ConstructionPhotographs").empty();
    var table = document.getElementById("ConstructionImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 30) {
        alert("You can only select 40 images. It will only display the first 40 photos");
    }

    if(count < 30)
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
                    var altName = 'image ' + nameID;
                    var imageID = 'ConstructionImage' + ii;
                    var textID = 'ConstructionImageText' + ii;
                    var removeButtonID = 'ConstructionImageRemoveButton' + ii;
                    var addButtonID = 'AddConstructionImageButton' + ii;
                    var uploadID = 'ConstructionUploadImage' + ii;
                    var imgLabelID = "imageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'ConstructionPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneConstructionImage(this.id)', 'AddOneConstructionImage(this.id)', '500px', '500px');

                    loadImage.parseMetaData(imageFile[ii], function (data) {
                        //console.log('I am in loadImage function');
                        var orientation = 0;
                        var date = new Date();
                        var selectionImage = '#ConstructionImage' + ii;
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
                                removeButton.style.width = '500px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '500px';
                                image.style.height = '500px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'ConstructionImagesTable',altName,'ConstructionPhotographs',uploadID,'RemoveOneConstructionImage(this.id)','AddOneConstructionImage(this.id)','500px','500px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:600,
                                maxHeight:350
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'ConstructionImage' + count;
            var textID = 'ConstructionImageText' + count;
            var removeButtonID = 'ConstructionImageRemoveButton' + count;
            var addButtonID = 'AddConstructionImageButton' + count;
            var uploadID = 'ConstructionUploadImage' + count;
            addImageElements(altName, 'ConstructionPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                'RemoveOneConstructionImage(this.id)', 'AddOneConstructionImage(this.id)', '500px', '0px');

        },1500)
    }
    else
    {
        for (var i = 0; i<30;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'ConstructionImage' + ii;
                    var textID = 'ConstructionImageText' + ii;
                    var removeButtonID = 'ConstructionImageRemoveButton' + ii;
                    var addButtonID = 'AddConstructionImageButton' + ii;
                    var uploadID = 'ConstructionUploadImage' + ii;
                    var imgLabelID = "imageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'ConstructionPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneConstructionImage(this.id)', 'AddOneConstructionImage(this.id)', '500px', '500px');

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
                                removeButton.style.width = '500px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '500px';
                                image.style.height = '500px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'ConstructionImagesTable',altName,'ConstructionPhotographs',uploadID,'RemoveOneConstructionImage(this.id)','AddOneConstructionImage(this.id)','500px','500px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:600,
                                maxHeight:350
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
    }

});






/*
 General Function for adding one image when the user click the "add" button
 by getting the id of the clicked button
 get the number of the id to generate other ids
 then use readOneImageURL function to add image on specific field.
 */

//noinspection JSUnusedGlobalSymbols
function AddOneConstructionImage(click_id)
{
    var selectedID = String(click_id).replace ( /[^\d.]/g, '' );
    var idGroup = [];
    console.log("the id " + selectedID);
    var totalContainers = $('#ConstructionPhotographs').find('> form');
    console.log("the current total image number is: " + totalContainers.length);
    var imageID = 'ConstructionImage' + selectedID;
    var textID = 'ConstructionImageText' + selectedID;
    var removeButtonID = 'ConstructionImageRemoveButton' + selectedID;
    var addButtonID = 'AddConstructionImageButton' + selectedID;
    var uploadID = 'ConstructionUploadImage' + selectedID;
    var imgLabelID = "imageCaption" + selectedID;

    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
        var id = Number(idStr);
        idGroup.push(id);
    }
    //console.log(idGroup);
    idGroup.sort(function(a, b){return a - b});
    //console.log(idGroup);
    //console.log("the last ID is" + idGroup[idGroup.length-1]);
    var lastID = idGroup[idGroup.length-1]
    console.log("this last id is " + lastID);

    // console.log(uploadID);
    $("#"+uploadID).unbind().click();
    $('#'+uploadID).change(function(){
        if (this.files && this.files[0]) {
            if(totalContainers.length == 30)
            {
                console.log("add the last 30th image, need to reset the firstRemove30th");
                firstRemove30th = true;
            }
            if(totalContainers.length <= 30 )
            {
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
                            removeButton.style.width = '500px';
                            addButton.style.display = 'none';
                            description.style.display = 'block';
                            image.style.display = 'block';
                            image.style.width = '500px';
                            image.style.height = '500px';
                            imageLable.style.display = 'block';
                            // image.style.height = '250px';
                            var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                            //console.log(file);
                            doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'ConstructionImagesTable',nextAltName,'ConstructionPhotographs',uploadID,'RemoveOneConstructionImage(this.id)','AddOneConstructionImage(this.id)','500px','500px');

                        },
                        {
                            canvas: true,
                            orientation: orientation,
                            maxWidth:600,
                            maxHeight:350
                        }
                    );
                });
                if (Number(selectedID) == Number(lastID))
                {
                    if(totalContainers.length < 30)
                    {
                        console.log("you are adding an image to the last id block");
                        var newID = Number(lastID) + 1;
                        var altID = Number(lastID) + 2;
                        nextAltName = 'image ' + altID;
                        console.log("I am here!!! need another image element ,the next id  " + newID);
                        var nextImageID = 'ConstructionImage' + newID;
                        var nextTextID = 'ConstructionImageText' + newID;
                        var nextRemoveButtonID = 'ConstructionImageRemoveButton' + newID;
                        var nextAddButtonID = 'AddConstructionImageButton' + newID;
                        var nextUploadID = 'ConstructionUploadImage' + newID;
                        addImageElements(nextAltName, 'ConstructionPhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            'RemoveOneConstructionImage(this.id)', 'AddOneConstructionImage(this.id)', '500px', '0px');
                    }
                }
            }
        }
    });
}

//noinspection JSUnusedGlobalSymbols
function RemoveOneConstructionImage(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'ConstructionImage' + id;
    var removeButtonID = 'ConstructionImageRemoveButton' + id;
    var addButtonID = 'AddConstructionImageButton' + id;
    var textID = 'ConstructionImageText' + id;
    var formID = 'imageForm' + id;
    var totalContainers = $('#ConstructionPhotographs').find('> form');
    var idGroup = [];
    console.log("the current total image number is: " + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
        //console.log(idStr);
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
    var inputText = document.getElementById(textID);

    button.style.display = 'none';
    inputText.style.display = 'none';
    addButton.style.display = 'block';

    image.style.width = '0px';
    image.style.display = 'none';
    inputText.value = '';

    doRemovePhoto(imageID);
    $('#' + formID).remove();

    //has 30 images but, remove one, will no additional 'add' button, need to create one
    if(totalContainers.length == 30 && firstRemove30th == true)
    {
        console.log("need to create a new add button");
        var newID = Number(lastID) + 1;
        var altID = Number(lastID) + 2;
        nextAltName = 'image ' + altID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        var nextImageID = 'ConstructionImage' + newID;
        var nextTextID = 'ConstructionImageText' + newID;
        var nextRemoveButtonID = 'ConstructionImageRemoveButton' + newID;
        var nextAddButtonID = 'AddConstructionImageButton' + newID;
        var nextUploadID = 'ConstructionUploadImage' + newID;
        addImageElements(nextAltName, 'ConstructionPhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            'RemoveOneConstructionImage(this.id)', 'AddOneConstructionImage(this.id)', '500px', '0px');
        firstRemove30th = false;
    }

     //update the totalConaintainers after removing one form, If remove all the images one by one, don't leave a signle 'add' button
     totalContainers = $('#ConstructionPhotographs').find('> form');
     //console.log(totalContainers);
     //console.log(totalContainers.eq(0).children('div').eq(0).children('img').attr('src'))
     if (totalContainers.length == 1 && typeof totalContainers.eq(0).children('div').eq(0).children('img').attr('src') == 'undefined')
     {
         console.log("it does not have any images, emtpy the div");
         $("#ConstructionPhotographs").empty();
         document.getElementById('ConstructionImagesTable').style.display = 'none';
     }

}



//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
function addImageElements(imageAltName, divID, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize,width) {
    var currentID = imageID.replace(/[^\d.]/g, '');
    var BigContainer = document.getElementById(divID);
    var form = document.createElement("form");
    var form = document.createElement("form");
    form.id = "imageForm" + currentID;
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
    //img.src = "#";
    //img.alt = imageAltName;
    img.id = imageID;
    //img.style.display = 'none';
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
    addButton.style.width = imageSize;
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
     imgLabel.innerHTML = "IMG " + (Number(currentID)+1);


    //put all elements into the correct container
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
    container4.appendChild(addButton);
    container5.appendChild(uploadFile);

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
