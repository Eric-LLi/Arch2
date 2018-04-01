/**
 * Created by Fafa on 19/1/18.
 */

function countWord(click_id)

{
    var words = document.getElementById(click_id).value;
    var regex = /\s+/gi;
    var wordCount = words.trim().replace(regex, ' ').split(' ').length;
    //console.log("total word count: " + wordCount);
    // if (wordCount >= 3)
    // {
    //     document.getElementById(click_id).disabled = true;
    //     // alert("you can only enter 10 words");
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

$('#AdviceUploadImages').change(function() {
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
    var selectedID = String(click_id);
    id = selectedID.replace ( /[^\d.]/g, '' );
    console.log("the id " + id);
    var totalImageNumber = $('#AdvicePhotographs').find('> form').length;
    console.log("the current total image number is: " + totalImageNumber);
    var imageID = 'AdviceImage' + id;
    var textID = 'AdviceImageText' + id;
    var removeButtonID = 'AdviceImageRemoveButton' + id;
    var addButtonID = 'AddAdviceImageButton' + id;
    var uploadID = 'AdviceUploadImage' + id;
    // console.log(uploadID);
    var x = document.getElementById(uploadID);
    x.click();
    x.addEventListener('change',function(){

        if (this.files && this.files[0]) {


            if (totalImageNumber < 30)
            {
                //if the total number of image is less than 30, then need to create a new image element to allow user to upload another one.
                var imageFile = this.files[0];
                var newID = totalImageNumber;
                var altID = totalImageNumber + 1;
                nextAltName = 'image ' + altID;
                console.log("I am here!!! need another image element ,the next id  " + newID);
                var nextImageID = 'AdviceImage' + newID;
                var nextTextID = 'AdviceImageText' + newID;
                var nextRemoveButtonID = 'AdviceImageRemoveButton' + newID;
                var nextAddButtonID = 'AddAdviceImageButton' + newID;
                var nextUploadID = 'AdviceUploadImage' + newID;
                addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                    'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '510px', '0px');

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

            }


            // var image = '#' + imageID;
            // var button = document.getElementById(addButtonID);
            // var removeButton = document.getElementById(removeButtonID);
            // var drawing = document.getElementById(imageID);
            // //var text = document.getElementById(textID);
            // var reader = new FileReader();
            // reader.onload = function (e) {
            //
            //     $(image).attr('src', e.target.result);
            //     document.getElementById(textID).style.display = 'block';
            //     button.style.display = 'none';
            //     removeButton.style.display = 'block';
            //     drawing.style.display = 'block';
            //     drawing.style.width = '510px';
            //     drawing.style.height = '510px';
            //
            // };
            // reader.readAsDataURL(this.files[0]);
            //doUploadFile(this.files[0],imageID, textID, removeButtonID, addButtonID,'AdviceImagesTable','image','AdvicePhotographs',uploadID,'RemoveOneAdviceImage(this.id)','addOneAdviceImage(this.id)','510px','510px');
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
