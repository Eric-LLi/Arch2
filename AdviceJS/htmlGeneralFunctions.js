/**
 * Created by Fafa on 19/1/18.
 */

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

function AdviceCover(){
    document.getElementById('AdviceUploadCoverImage').click();
}


function RemoveAdviceCoverImage(){
    //RemoveCoverImage('AdviceCoverImage','AdviceCoverImageRemoveButton');

    var image = document.getElementById('AdviceCoverImage');
    var removeButton = document.getElementById('AdviceCoverImageRemoveButton');

    image.setAttribute('src','#');
    image.style.display = 'none';
    image.style.width = 0;
    removeButton.style.display = 'none';
    doRemovePhoto('AdviceCoverImage');

}

$('#AdviceUploadCoverImage').change(function(){
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
            var orientation = 0;
            var image = document.getElementById('AdviceCoverImage');
            var removeButton = document.getElementById('AdviceCoverImageRemoveButton');
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function (canvas) {
                    var base64data = canvas.toDataURL(imageType);
                    //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    image.setAttribute('src',base64data);
                    removeButton.style.display = 'block';
                    removeButton.style.width = '400px';
                    image.style.display = 'block';
                    image.style.width = '400px';
                    // image.style.height = '250px';
                    var file = new File([convertBase64UrlToBlob(base64data)], imageName, {type: imageType, lastModified:date.getTime()});
                    console.log(file);
                    doUploadFile(file,'AdviceCoverImage', '', 'AdviceCoverImageRemoveButton', '','','cover image','','','','','265px','400px');

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



function AdviceUploadImage(){
    document.getElementById('AdviceUploadImages').click();
    
}
// var imageInput = document.getElementById('AdviceUploadImages');
// imageInput.onclick = function()
// {
//     console.log(this.value);
//     this.value = null;
// }
$('#AdviceUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$('#AdviceUploadImages').change(function() {
    var imageIDs = $("#AdvicePhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#AdvicePhotographs").empty();
    var table = document.getElementById("AdviceImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 30) {
        alert("You can only select 30 images. It will only display the first 30 photos");
    }

    if(count <= 30)
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
                    var altName = 'image' + nameID;
                    var imageID = 'AdviceImage' + ii;
                    var textID = 'AdviceImageText' + ii;
                    var removeButtonID = 'AdviceImageRemoveButton' + ii;
                    var addButtonID = 'AddAdviceImageButton' + ii;
                    var uploadID = 'AdviceUploadImage' + ii;
                    var imgLabelID = "imageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'AdvicePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '500px');

                    loadImage.parseMetaData(imageFile[ii], function (data) {
                        //console.log('I am in loadImage function');
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
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'AdviceImagesTable',altName,'AdvicePhotographs',uploadID,'RemoveOneAdviceImage(this.id)','addOneAdviceImage(this.id)','500px','500px');

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
            var imageID = 'AdviceImage' + count;
            var textID = 'AdviceImageText' + count;
            var removeButtonID = 'AdviceImageRemoveButton' + count;
            var addButtonID = 'AddAdviceImageButton' + count;
            var uploadID = 'AdviceUploadImage' + count;
            addImageElements(altName, 'AdvicePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px');

        },2000)
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
                    var imageID = 'AdviceImage' + ii;
                    var textID = 'AdviceImageText' + ii;
                    var removeButtonID = 'AdviceImageRemoveButton' + ii;
                    var addButtonID = 'AddAdviceImageButton' + ii;
                    var uploadID = 'AdviceUploadImage' + ii;
                    var imgLabelID = "imageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'AdvicePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '500px');

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
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'AdviceImagesTable',altName,'AdvicePhotographs',uploadID,'RemoveOneAdviceImage(this.id)','addOneAdviceImage(this.id)','500px','500px');

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
                }, 500);
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
function addOneAdviceImage(click_id)
{
    var id;
    var selectedID = String(click_id).replace ( /[^\d.]/g, '' );
    var idGroup = [];
    //id = selectedID.replace ( /[^\d.]/g, '' );
    console.log("the selectedID " + selectedID);
    var totalContainers = $('#AdvicePhotographs').find('> form');
    console.log("the current total image number is: " + totalContainers.length);
    //console.log(totalContainers.eq(totalContainers.length-1).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, ''));

    var imageID = 'AdviceImage' + selectedID;
    var textID = 'AdviceImageText' + selectedID;
    var removeButtonID = 'AdviceImageRemoveButton' + selectedID;
    var addButtonID = 'AddAdviceImageButton' + selectedID;
    var uploadID = 'AdviceUploadImage' + selectedID;
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
    //var x = document.getElementById(uploadID);
    
    $("#"+uploadID).unbind().click();
    $('#'+uploadID).change(function(){
        //console.log("Hi 0");
        if (this.files && this.files[0]) {

            //console.log(this.files.length);
            //console.log("Hi 1");
            if (totalContainers.length <= 30)
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
                            doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'AdviceImagesTable',nextAltName,'AdvicePhotographs',uploadID,'RemoveOneAdviceImage(this.id)','addOneAdviceImage(this.id)','500px','500px');

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
                        //console.log("I am here!!! need another image element ,the next id  " + newID);
                        var nextImageID = 'AdviceImage' + newID;
                        var nextTextID = 'AdviceImageText' + newID;
                        var nextRemoveButtonID = 'AdviceImageRemoveButton' + newID;
                        var nextAddButtonID = 'AddAdviceImageButton' + newID;
                        var nextUploadID = 'AdviceUploadImage' + newID;
                        addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px');
                    }
                   
                }
            }
        }
    });
}


function RemoveOneAdviceImage(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'AdviceImage' + id;
    var removeButtonID = 'AdviceImageRemoveButton' + id;
    var addButtonID = 'AddAdviceImageButton' + id;
    var textID = 'AdviceImageText' + id;
    var formID = 'imageForm' + id;
    var totalContainers = $('#AdvicePhotographs').find('> form');
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

    //remove the image from database, and remove the image form completely
    doRemovePhoto(imageID);
    $('#' + formID).remove();

    //has 30 images but, remove one, will no additional 'add' button, need to create one
    if(totalContainers.length == 30)
    {
        console.log("need to create a new add button");
        var newID = Number(lastID) + 1;
        var altID = Number(lastID) + 2;
        nextAltName = 'image ' + altID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        var nextImageID = 'AdviceImage' + newID;
        var nextTextID = 'AdviceImageText' + newID;
        var nextRemoveButtonID = 'AdviceImageRemoveButton' + newID;
        var nextAddButtonID = 'AddAdviceImageButton' + newID;
        var nextUploadID = 'AdviceUploadImage' + newID;
        addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
            'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px');
    }

}







//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
function addImageElements(imageAltName, divID, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize,width) {
    var currentID = imageID.replace(/[^\d.]/g, '');
    var BigContainer = document.getElementById(divID);
    var form = document.createElement("form");
    form.id = "imageForm" + currentID;
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
    textInput.setAttribute('onkeyup','countWord(this.id)');
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
