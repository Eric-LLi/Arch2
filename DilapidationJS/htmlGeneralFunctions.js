/**
 * Created by Fafa on 15/1/18.
 */


function DilapidationCover()
{
    document.getElementById('DilapidationUploadCoverImage').click();
}



$('#DilapidationUploadCoverImage').change(function(){
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
            var image = document.getElementById('DilapidationCoverImage');
            var removeButton = document.getElementById('DilapidationCoverImageRemoveButton');
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
                    doUploadFile(file,'DilapidationCoverImage', '', 'DilapidationCoverImageRemoveButton', '','','cover image','','','','','100%','100%');

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

function RemoveDilapidationCover()
{
    var imageSelect = '#' + 'DilapidationCoverImage';
    $(imageSelect).attr('src', '#');
    var image = document.getElementById('DilapidationCoverImage');
    var button = document.getElementById('DilapidationCoverImageRemoveButton');

    button.style.display = 'none';
    image.style.width = '0px';
    image.style.display = 'none';


    doRemovePhoto('DilapidationCoverImage');


}


function DilapidationUploadImage()
{
    document.getElementById('DilapidationUploadImages').click();
}


$('#DilapidationUploadImages').change(function(){
    $("#DilapidationPhotographs").empty();
    var table = document.getElementById("DilapidationImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    if (count > 60) {
        alert("You can only select 60 images. It will only display the first 60 images");
    }

    if(count < 60)
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
                    var imageID = 'DilapidationImage' + ii;
                    var textID = 'DilapidationImageText' + ii;
                    var removeButtonID = 'DilapidationImageRemoveButton' + ii;
                    var addButtonID = 'AddDilapidationImageButton' + ii;
                    var uploadID = 'DilapidationUploadImage' + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'DilapidationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneDilapidationImage(this.id)', 'addOneDilapidationImage(this.id)', '500px', '500px');

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
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','500px','500px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:850
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'DilapidationImage' + count;
            var textID = 'DilapidationImageText' + count;
            var removeButtonID = 'DilapidationImageRemoveButton' + count;
            var addButtonID = 'AddDilapidationImageButton' + count;
            var uploadID = 'DilapidationUploadImage' + count;
            addImageElements(altName, 'DilapidationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                'RemoveOneDilapidationImage(this.id)', 'addOneDilapidationImage(this.id)', '500px', '0px');

        },1500)
    }
    else
    {
        for (var i = 0; i<60;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'DilapidationImage' + ii;
                    var textID = 'DilapidationImageText' + ii;
                    var removeButtonID = 'DilapidationImageRemoveButton' + ii;
                    var addButtonID = 'AddDilapidationImageButton' + ii;
                    var uploadID = 'DilapidationUploadImage' + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'DilapidationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneDilapidationImage(this.id)', 'addOneDilapidationImage(this.id)', '500px', '500px');

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
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','500px','500px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:850
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


//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
function addImageElements(imageAltName, divID, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize,width) {
    var BigContainer = document.getElementById(divID);
    var form = document.createElement("form");
    // console.log(form);
    //form.setAttribute("class","divForm");
    //need four dividends in a form
    var container1 = document.createElement("div");
    var container2 = document.createElement("div");
    var container3 = document.createElement("div");
    var container4 = document.createElement("div");
    container1.setAttribute("class", "col-sm");
    container2.setAttribute("class", "col-sm");
    container3.setAttribute("class", "col-sm");
    container4.setAttribute("class", "col-sm");

    //crate an image area
    var img = document.createElement('img');
    img.src = "#";
    img.alt = imageAltName;
    img.id = imageID;
    img.style.display = 'none';
    img.style.width = width;
    img.style.height = imageSize;
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




    //put all elements into the correct container
    BigContainer.appendChild(form);
    form.appendChild(container1);
    form.appendChild(container2);
    form.appendChild(container3);
    form.appendChild(container4);
    container1.appendChild(img);
    container2.appendChild(textInput);
    container3.appendChild(removeButton);
    container4.appendChild(addButton);
    container4.appendChild(uploadFile);




}




/*
 General Function for adding one image when the user click the "add" button
 by getting the id of the clicked button
 get the number of the id to generate other ids
 then use readOneImageURL function to add image on specific field.
 */

//noinspection JSUnusedGlobalSymbols
function addOneDilapidationImage(click_id)
{
    var id;
    var selectedID = String(click_id);
    id = selectedID.replace ( /[^\d.]/g, '' );
    console.log("the id " + id);
    var totalImageNumber = $('#DilapidationPhotographs').find('> form').length;
    console.log(totalImageNumber);

    // var altID = id+1;
    //
    // var altName = 'image ' + id;
    var imageID = 'DilapidationImage' + id;
    var textID = 'DilapidationImageText' + id;
    var removeButtonID = 'DilapidationImageRemoveButton' + id;
    var addButtonID = 'AddDilapidationImageButton' + id;
    var uploadID = 'DilapidationUploadImage' + id;
    // console.log(uploadID);
    var x = document.getElementById(uploadID);
    x.click();
    x.addEventListener('change',function(){

        if (this.files && this.files[0]) {
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
                        // image.style.height = '250px';
                        var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                        //console.log(file);
                        doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',nextAltName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','500px','500px');

                    },
                    {
                        canvas: true,
                        orientation: orientation,
                        maxWidth:1000,
                        maxHeight:850
                    }
                );
            });
        }


        if(totalImageNumber < 60)
        {
            //if the total number of image is less than 40, then need to create a new image element to allow user to upload another one.

            var newID = totalImageNumber;
            var altID = totalImageNumber + 1;
            nextAltName = 'image ' + altID;
            console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'DilapidationImage' + newID;
            var nextTextID = 'DilapidationImageText' + newID;
            var nextRemoveButtonID = 'DilapidationImageRemoveButton' + newID;
            var nextAddButtonID = 'AddDilapidationImageButton' + newID;
            var nextUploadID = 'DilapidationUploadImage' + newID;
            addImageElements(nextAltName, 'DilapidationPhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                'RemoveOneDilapidationImage(this.id)', 'addOneDilapidationImage(this.id)', '500px', '0px');
        }

    });

}


function RemoveOneDilapidationImage(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'DilapidationImage' + id;
    var removeButtonID = 'DilapidationImageRemoveButton' + id;
    var addButtonID = 'AddDilapidationImageButton' + id;
    var textID = 'DilapidationImageText' + id;

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
