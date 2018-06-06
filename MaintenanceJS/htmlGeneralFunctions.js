/**
 * Created by Fafa on 20/1/18.
 */


//Learn from https://stackoverflow.com/questions/37479257/how-to-add-bullet-point-in-a-textarea
function startBullet(id)
{
    if (document.getElementById(id).value === '') {
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



function MaintenanceCover(){
    document.getElementById('MaintenanceUploadCoverImage').click();
}


function RemoveMaintenanceCoverImage(){
    //RemoveCoverImage('AdviceCoverImage','AdviceCoverImageRemoveButton');

    var image = document.getElementById('MaintenanceCoverImage');
    var removeButton = document.getElementById('MaintenanceCoverImageRemoveButton');

    image.setAttribute('src','#');
    image.style.display = 'none';
    image.style.width = 0;
    removeButton.style.display = 'none';
    doRemovePhoto('MaintenanceCoverImage');

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
            var orientation = 0;
            var image = document.getElementById('MaintenanceCoverImage');
            var removeButton = document.getElementById('MaintenanceCoverImageRemoveButton');
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
                    console.log(file);
                    doUploadFile(file,'MaintenanceCoverImage', '', 'MaintenanceCoverImageRemoveButton', '','','cover image','','','','','100%','100%');

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



function MaintenanceUploadImages(){
    document.getElementById('MaintenanceUploadImages').click();
}

$('#MaintenanceUploadImages').change(function() {
    var imageIDs = $("#MaintenancePhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#MaintenancePhotographs").empty();
    var table = document.getElementById("MaintenanceImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 40) {
        alert("You can only select 40 images. It will only display the first 40 photos");
    }

    if(count <= 40)
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
                    var imageID = 'MaintenanceImage' + ii;
                    var textID = 'MaintenanceImageText' + ii;
                    var removeButtonID = 'MaintenanceRemoveButton' + ii;
                    var addButtonID = 'AddMaintenanceImageButton' + ii;
                    var uploadID = 'MaintenanceUploadImage' + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'MaintenancePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneMaintenanceImage(this.id)', 'AddOneMaintenanceImage(this.id)', '500px', '500px');

                    loadImage.parseMetaData(imageFile[ii], function (data) {
                        //console.log('I am in loadImage function');
                        var orientation = 0;
                        var date = new Date();
                        var selectionImage = '#MaintenanceImage' + ii;
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
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'MaintenanceImagesTable',altName,'MaintenancePhotographs',uploadID,'RemoveOneMaintenanceImage(this.id)','AddOneMaintenanceImage(this.id)','500px','500px');

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
            var imageID = 'MaintenanceImage' + count;
            var textID = 'MaintenanceImageText' + count;
            var removeButtonID = 'MaintenanceRemoveButton' + count;
            var addButtonID = 'AddMaintenanceImageButton' + count;
            var uploadID = 'MaintenanceUploadImage' + count;
            addImageElements(altName, 'MaintenancePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                'RemoveOneMaintenanceImage(this.id)', 'AddOneMaintenanceImage(this.id)', '500px', '0px');

        },2000)
    }
    else
    {
        for (var i = 0; i<40;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'MaintenanceImage' + ii;
                    var textID = 'MaintenanceImageText' + ii;
                    var removeButtonID = 'MaintenanceRemoveButton' + ii;
                    var addButtonID = 'AddMaintenanceImageButton' + ii;
                    var uploadID = 'MaintenanceUploadImage' + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'MaintenancePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneMaintenanceImage(this.id)', 'AddOneMaintenanceImage(this.id)', '500px', '500px');

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
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'MaintenanceImagesTable',altName,'MaintenancePhotographs',uploadID,'RemoveOneMaintenanceImage(this.id)','AddOneMaintenanceImage(this.id)','500px','500px');

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

/*
 General Function for adding one image when the user click the "add" button
 by getting the id of the clicked button
 get the number of the id to generate other ids
 then use readOneImageURL function to add image on specific field.
 */

//noinspection JSUnusedGlobalSymbols
function AddOneMaintenanceImage(click_id)
{
    var id;
    var selectedID = String(click_id);
    id = selectedID.replace ( /[^\d.]/g, '' );
    console.log("the id " + id);
    var totalImageNumber = $('#MaintenancePhotographs').find('> form').length;
    console.log("the current total image number is: " + totalImageNumber);
    var imageID = 'MaintenanceImage' + id;
    var textID = 'MaintenanceImageText' + id;
    var removeButtonID = 'MaintenanceRemoveButton' + id;
    var addButtonID = 'AddMaintenanceImageButton' + id;
    var uploadID = 'MaintenanceUploadImage' + id;
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
                        doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'MaintenanceImagesTable',nextAltName,'MaintenancePhotographs',uploadID,'RemoveOneMaintenanceImage(this.id)','AddOneMaintenanceImage(this.id)','500px','500px');

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


        if(totalImageNumber < 40)
        {
            //if the total number of image is less than 40, then need to create a new image element to allow user to upload another one.

            var newID = totalImageNumber;
            var altID = totalImageNumber + 1;
            nextAltName = 'image ' + altID;
            console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'MaintenanceImage' + newID;
            var nextTextID = 'MaintenanceImageText' + newID;
            var nextRemoveButtonID = 'MaintenanceRemoveButton' + newID;
            var nextAddButtonID = 'AddMaintenanceImageButton' + newID;
            var nextUploadID = 'MaintenanceUploadImage' + newID;
            addImageElements(nextAltName, 'MaintenancePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                'RemoveOneMaintenanceImage(this.id)', 'AddOneMaintenanceImage(this.id)', '500px', '0px');
        }



    });
}

//noinspection JSUnusedGlobalSymbols
function RemoveOneMaintenanceImage(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'MaintenanceImage' + id;
    var removeButtonID = 'MaintenanceRemoveButton' + id;
    var addButtonID = 'AddMaintenanceImageButton' + id;
    var textID = 'MaintenanceImageText' + id;

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


function AddOneMaintenanceDrawing(click_id)
{
    var id;
    var selectedID = String(click_id);
    id = selectedID.replace ( /[^\d.]/g, '' );
    console.log("the id " + id);
    var totalDrawingNumber = $('#MaintenanceDrawings').find('> form').length;
    console.log("the current total drawing number is: " + totalDrawingNumber);
    var imageID = 'MaintenanceDrawing' + id;
    var textID = 'MaintenanceDrawingText' + id;
    var removeButtonID = 'MaintenanceDrawingRemoveButton' + id;
    var addButtonID = 'AddMaintenanceDrawingButton' + id;
    var uploadID = 'MaintenanceUploadDrawing' + id;
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
                        //removeButton.style.width = '500px';
                        addButton.style.display = 'none';
                        description.style.display = 'block';
                        image.style.display = 'block';
                        image.style.width = '500px';
                        // image.style.height = '250px';
                        var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                        //console.log(file);
                        doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'MaintenanceDrawingsTable',nextAltName,'MaintenanceDrawings',uploadID,'RemoveOneMaintenanceDrawing(this.id)','AddOneMaintenanceDrawing(this.id)','500px','500px');

                    },
                    {
                        canvas: true,
                        orientation: orientation,
                        maxWidth:1500,
                        maxHeight:1200
                    }
                );
            });
        }


        if(totalDrawingNumber < 6)
        {
            //if the total number of image is less than 6, then need to create a new image element to allow user to upload another one.
            var newID = totalDrawingNumber;
            console.log("the newID " + newID);
            var altID = totalDrawingNumber + 1;
            nextAltName = 'image ' + altID;
            console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'MaintenanceDrawing' + newID;
            var nextTextID = 'MaintenanceDrawingText' + newID;
            var nextRemoveButtonID = 'MaintenanceDrawingRemoveButton' + newID;
            var nextAddButtonID = 'AddMaintenanceDrawingButton' + newID;
            var nextUploadID = 'MaintenanceUploadDrawing' + newID;
            addImageElements(nextAltName, 'MaintenanceDrawings', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                'RemoveOneMaintenanceDrawing(this.id)', 'AddOneMaintenanceDrawing(this.id)', '500px', '0px');
        }



    });
}

function RemoveOneMaintenanceDrawing(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'MaintenanceDrawing' + id;
    var removeButtonID = 'MaintenanceDrawingRemoveButton' + id;
    var addButtonID = 'AddMaintenanceDrawingButton' + id;
    var textID = 'MaintenanceDrawingText' + id;

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


function MaintenanceUploadDrawings()
{
    document.getElementById('MaintenanceUploadDrawings').click();
}

$('#MaintenanceUploadDrawings').change(function() {
    $("#MaintenanceDrawings").empty();
    var table = document.getElementById("MaintenanceDrawingsTable");

    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 6) {
        alert("You can only select 40 images. It will only display the first 40 photos");
    }

    if(count < 6)
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
                    var altName = 'drawing ' + nameID;
                    var imageID = 'MaintenanceDrawing' + ii;
                    var textID = 'MaintenanceDrawingText' + ii;
                    var removeButtonID = 'MaintenanceDrawingRemoveButton' + ii;
                    var addButtonID = 'AddMaintenanceDrawingButton' + ii;
                    var uploadID = 'MaintenanceUploadDrawing' + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'MaintenanceDrawings', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneMaintenanceDrawing(this.id)', 'AddOneMaintenanceDrawing(this.id)', '500px', '500px');

                    loadImage.parseMetaData(imageFile[ii], function (data) {
                        //console.log('I am in loadImage function');
                        var orientation = 0;
                        var date = new Date();
                        var selectionImage = '#MaintenanceImage' + ii;
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
                                //removeButton.style.width = '500px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '500px';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'MaintenanceDrawingsTable',altName,'MaintenanceDrawings',uploadID,'RemoveOneMaintenanceDrawing(this.id)','AddOneMaintenanceDrawing(this.id)','500px','500px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1500,
                                maxHeight:1200
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Drawing ' + altID;
            var imageID = 'MaintenanceDrawing' + count;
            var textID = 'MaintenanceDrawingText' + count;
            var removeButtonID = 'MaintenanceDrawingRemoveButton' + count;
            var addButtonID = 'AddMaintenanceDrawingButton' + count;
            var uploadID = 'MaintenanceUploadDrawing' + count;
            addImageElements(altName, 'MaintenanceDrawings', imageID, textID, removeButtonID, addButtonID, uploadID,
                'RemoveOneMaintenanceDrawing(this.id)', 'AddOneMaintenanceDrawing(this.id)', '500px', '0px');

        },500)
    }
    else
    {
        for (var i = 0; i<6;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'Drawing ' + nameID;
                    var imageID = 'MaintenanceDrawing' + ii;
                    var textID = 'MaintenanceDrawingText' + ii;
                    var removeButtonID = 'MaintenanceDrawingRemoveButton' + ii;
                    var addButtonID = 'AddMaintenanceDrawingButton' + ii;
                    var uploadID = 'MaintenanceUploadDrawing' + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'MaintenanceDrawings', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneMaintenanceDrawing(this.id)', 'AddOneMaintenanceDrawing(this.id)', '500px', '500px');

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
                                //removeButton.style.width = '500px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                //image.style.width = '500px';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'MaintenanceDrawingsTable',altName,'MaintenanceDrawings',uploadID,'RemoveOneMaintenanceDrawing(this.id)','AddOneMaintenanceDrawing(this.id)','500px','500px');

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
                }, 600);
            }
        }
    }

});


//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
function addImageElements(imageAltName, divID, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize,width) {
    var BigContainer = document.getElementById(divID);
    var form = document.createElement("form");
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
