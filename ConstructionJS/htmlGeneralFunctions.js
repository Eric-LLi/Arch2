/**
 * Created by Fafa on 22/1/18.
 */

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
    console.log(divNumber);
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
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'ConstructionImagesTable',altName,'ConstructionPhotographs',uploadID,'RemoveOneConstructionImage(this.id)','AddOneConstructionImage(this.id)','500px','500px');

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
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'ConstructionPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneConstructionImage(this.id)', 'AddOneConstructionImage(this.id)', '500px', '500px');

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
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'ConstructionImagesTable',altName,'ConstructionPhotographs',uploadID,'RemoveOneConstructionImage(this.id)','AddOneConstructionImage(this.id)','500px','500px');

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
function AddOneConstructionImage(click_id)
{
    var id;
    var selectedID = String(click_id);
    id = selectedID.replace ( /[^\d.]/g, '' );
    console.log("the id " + id);
    var totalImageNumber = $('#ConstructionPhotographs').find('> form').length;
    console.log("the current total image number is: " + totalImageNumber);
    var imageID = 'ConstructionImage' + id;
    var textID = 'ConstructionImageText' + id;
    var removeButtonID = 'ConstructionImageRemoveButton' + id;
    var addButtonID = 'AddConstructionImageButton' + id;
    var uploadID = 'ConstructionUploadImage' + id;
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
                        doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'ConstructionImagesTable',nextAltName,'ConstructionPhotographs',uploadID,'RemoveOneConstructionImage(this.id)','AddOneConstructionImage(this.id)','500px','500px');

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


        if(totalImageNumber < 30)
        {
            //if the total number of image is less than 40, then need to create a new image element to allow user to upload another one.

            var newID = totalImageNumber;
            var altID = totalImageNumber + 1;
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
