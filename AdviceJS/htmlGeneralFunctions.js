/**
 * Created by Fafa on 19/1/18.
 */

var firstRemove30th = true;
var global_Img;

function onload() {
    reorderImages();
    automaticNumbering();
    addNewImageForm();
    RotateSavedCoverImage();
    // $('#adviceSummary').summernote();
    // $('#adviceSummary').summernote({
    //     toolbar: [
    //       // [groupName, [list of button]]
    //       ['style', ['bold', 'italic', 'underline', 'clear']],
    //       ['font', ['strikethrough', 'superscript', 'subscript']],
    //       ['fontsize', ['fontsize']],
    //       ['color', ['color']],
    //       ['para', ['ul', 'ol', 'paragraph']],
    //       ['height', ['height']]
    //     ]
    //   });
}


function countWord(click_id) {
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

/*
    Images Related Functions
*/
/**
 * To reorder the images when the HTML report is reloaded
 */
function reorderImages() {
    var totalContainers = $('#AdvicePhotographs').find('> form');
    var BigContainer = document.getElementById('AdvicePhotographs');
    //console.log(totalContainers);
    // for (var i=0;i<totalContainers.length;i++)
    // {
    //     console.log( Number(totalContainers[i].id.replace(/[^\d.]/g, '')));
    //     console.log((totalContainers[i].id));
    // }
    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    //console.log(totalContainers);

    $("#AdvicePhotographs").empty();
    for (var i = 0; i < totalContainers.length; i++) {
        BigContainer.appendChild(totalContainers[i]);
        var myImage = totalContainers.eq(i).children('img').get(0);
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
                myImage.style.marginTop = "80px"; //original 35px all
                myImage.style.marginBottom = "80px";
                $("#" + imgID).rotate(originalAngle);            }
            else
            {
                myImage.style.marginTop = "80px";
                myImage.style.marginBottom = "80px";
                $("#" + imgID).rotate(originalAngle);
            }

        }
        else
        {
            myImage.style.marginTop = "35px";
            myImage.style.marginBottom = "35px";
        }
        var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,'AdviceImagesTable',rotateBtnID,angleID,'AdvicePhotographs'];

        var removeBtn = document.getElementById(totalContainers.eq(i).children('input').eq(2).get(0).id);
        var rotateBtn = document.getElementById(totalContainers.eq(i).children('input').eq(4).get(0).id);

        // var removeFunction = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + divid + "','" + rotateBtnID +  "','" + angleID + "'])";
        var removeFunction  = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'AdviceImagesTable' + "','"+ rotateBtnID +  "','" + angleID +  "','"+'AdvicePhotographs' + "'])";
        var rotateFunction = "RotateOneImage(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'AdviceImagesTable' + "','"+ rotateBtnID +  "','" + angleID + "','"+'AdvicePhotographs' + "'])";

        //console.log(removeFunction);
        $("#" + addBtnID).click(function () {
            global_Img = element;
            //console.log(global_Img);
            $("#AdviceUploadOneImage").click();
        });
        //addBtn.setAttribute("onclick", addFunction);
        removeBtn.setAttribute("onclick", removeFunction);
        rotateBtn.setAttribute("onclick", rotateFunction);
    }
}


function automaticNumbering() {
    console.log("need to refresh the image number");
    var totalContainers = $('#AdvicePhotographs').find('> form');
    for (var i = 0; i < totalContainers.length; i++) {
        //console.log(i);
        //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
        // totalContainers.eq(i).children('div').eq(1).children('label').get(0).innerHTML = "IMG " + (i + 1);
        totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i + 1);
    }
}
/**
 * Create Empty Image Elements for the next image when the HTML report is reloaded. 
 */
function addNewImageForm() {
    maxImage = 30;
    var idGroup = [];
    var totalContainers = $('#AdvicePhotographs').find('> form');
    console.log("the current form in the report AdvicePhotographs is " + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++) {
        var idStr = totalContainers.eq(i).children('img').attr('id').replace(/[^\d.]/g, '');
        var id = Number(idStr);
        idGroup.push(id);
    }
    //console.log(idGroup);
    idGroup.sort(function (a, b) {
        return a - b;
    });
    //console.log(idGroup);
    console.log("the last ID is " + idGroup[idGroup.length - 1]);
    var lastID = idGroup[idGroup.length - 1];
    var newID = Number(lastID) + 1;
    var altID = Number(lastID) + 2;
    if (totalContainers.length < maxImage && totalContainers.length != 0) {
        console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
        nextAltName = 'image ' + altID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        var nextImageID = 'AdviceImage' + newID;
        var nextTextID = 'AdviceImageText' + newID;
        var nextLabelID = 'AdviceImageLable' + newID;
        var nextLableValue = 'IMG' + (parseInt(newID) + 1);
        var nextRemoveButtonID = 'AdviceImageRemoveButton' + newID;
        var nextAddButtonID = 'AddAdviceImageButton' + newID;
        var nextUploadID = 'AdviceUploadImage' + newID;
        var nextRotateBtnID = 'AdviceImageRotateButton' + newID;
        var nextAngelInputID = 'AdviceImageAngle' + newID;
        var nextFormID = "AdviceImageForm" + newID;
        // addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
        //     'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px',nextRotateBtnID,nextAngelInputID);
        var emptyElement = createImagesElements('AdviceImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AdvicePhotographs');

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



/**
 * Cover Images Related
 */
function AdviceCover() {
    document.getElementById('AdviceUploadCoverImage').click();
}

$('#AdviceUploadCoverImage').change(function () {
    //uploadCoverImage(this,'AdviceCoverImage','AdviceCoverImageRemoveButton','500px');
    if (this.files && this.files[0]) {
        var imageFile = this.files[0];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        var date = new Date();
        // console.log(imageType);
        // console.log(imageName);
        loadImage.parseMetaData(imageFile, function (data) {
            //console.log('I am in loadImage function');
            var orientation = 0;
            var image = document.getElementById('AdviceCoverImage');
            var removeButton = document.getElementById('AdviceCoverImageRemoveButton');
            var rotateButton = document.getElementById('AdviceCoverImageRotateButton');

            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function (canvas) {
                var base64data = canvas.toDataURL(imageType);
                //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                image.setAttribute('src', base64data);
                removeButton.style.display = 'block';
                removeButton.style.width = '400px';
                image.style.display = 'block';
                image.style.width = '400px';
                rotateButton.style.display = 'block';
                // image.style.width = '265px';
                // image.style.height = '198px';
                // image.style.height = '250px';
                var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
                    type: imageType,
                    lastModified: date.getTime()
                });
                doUploadFile(file, 'AdviceCoverImage', '', 'AdviceCoverImageRemoveButton', '', '', 'cover image', '', '', '', '', '265px', '400px','AdviceCoverImageRotateButton',"AdviceCoverImageAngle");

            }, {
                canvas: true,
                orientation: orientation,
                maxWidth: 1300,
                maxHeight: 1000
            });
        });
    }

});

function RemoveAdviceCoverImage() {
    //RemoveCoverImage('AdviceCoverImage','AdviceCoverImageRemoveButton');

    var image = document.getElementById('AdviceCoverImage');
    var removeButton = document.getElementById('AdviceCoverImageRemoveButton');
    var rotatebutton = document.getElementById('AdviceCoverImageRotateButton');


    image.setAttribute('src', '#');
    image.style.display = 'none';
    rotatebutton.style.display = 'none';
    //image.style.width = 0;
    removeButton.style.display = 'none';
    document.getElementById("AdviceCoverImageAngle").value = "";
    doRemovePhoto('AdviceCoverImage');

}


function RotateAdviceCoverImage()
{
    var rotateAngle;
    var originalAngle = document.getElementById('AdviceCoverImageAngle').value;
    console.log(originalAngle);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }


    var myImage = document.getElementById('AdviceCoverImage');
    
    var rotateAngle = parseInt(originalAngle) + 90

    console.log(rotateAngle);

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        console.log("the degree is 90 or 270");
        myImage.style.marginTop = "100px";
        myImage.style.marginBottom = "100px";
        $("#AdviceCoverImage").rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "30px";
        myImage.style.marginBottom = "30px";
        $("#AdviceCoverImage").rotate(rotateAngle);
    }

       
    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById('AdviceCoverImageAngle').value = rotateAngle

}


/**
 * Use this to rotate the cover image when the HTML report is loaded. 
 */
function RotateSavedCoverImage()
{
    console.log("RotateSavedCoverImage");
    var myImage = document.getElementById('AdviceCoverImage');
    var originalAngle = parseInt(document.getElementById('AdviceCoverImageAngle').value);
    var rotateBtn = document.getElementById('AdviceCoverImageRotateButton');

    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }

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
            $("#AdviceCoverImage").rotate(originalAngle);
        }
        else if(originalAngle == 180)
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
            $("#AdviceCoverImage").rotate(originalAngle);
        }
        else 
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
        }

    }

}




function AdviceUploadImages() {
    document.getElementById('AdviceUploadImages').click();
}

$('#AdviceUploadImages').click(function () {
    //console.log(this.value);
    this.value = null;
});
$('#AdviceUploadImages').change(function () {
    firstRemove30th = true;
    var imageIDs = $("#AdvicePhotographs form");
    //Clear all images
    if (!isEmpty(imageIDs)) 
    {
        for (var i = 0; i < imageIDs.length; i++) {
            var imgID = imageIDs.eq(i).children("img").attr("id");
            console.log(imgID);
            doRemovePhoto(imgID);
        }
        $("#AdvicePhotographs").empty();
    }
    var allImages = [];
    
    var table = document.getElementById("AdviceImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    var allImages = [];
    if (this.files.length >=30) 
    {
        if(this.files.length > 30)
        {
            alert("You can only select 30 images. It will only display the first 30 photos");
        }
        for (let i = 0; i < 30; i++) 
        {
            allImages.push(this.files[i]);
        }
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            var imageType = file.type;
            elementID = parseInt(i) + 1;
            var altName = 'image' + elementID;
            var imageID = 'AdviceImage' + elementID;
            var labelID = 'AdviceImageLable' + elementID;
            var labelValue = 'IMG' + elementID;
            var textID = 'AdviceImageText' + elementID;
            var removeButtonID = 'AdviceImageRemoveButton' + elementID;
            var addButtonID = 'AddAdviceImageButton' + elementID;
            var uploadID = 'AdviceUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'AdviceImageRotateButton' + elementID;
            var imgAngleInputID = "AdviceImageAngle" + elementID;
            var formID = "AdviceImageForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AdviceImagesTable", imageID, labelID, labelValue,
            textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AdvicePhotographs');
    
            //console.log(element);
            loadImage.parseMetaData(file, function (data) {
                var orientation = 0;
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }
    
                var loadingImage = loadImage(file, function (canvas) {
                    var data = canvas.toDataURL(imageType);
                    //var data = canvas.toDataURL('image/jpeg');
                    var image = new Image();
                    image.onload = function () {
                        var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
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
            automaticNumbering();
        }, 2000);
    } 
    else 
    {
        allImages = this.files;
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            var imageType = file.type;
            elementID = parseInt(i) + 1;
            // var newid = ii + 1;
            // var nameID = ii + 1;
            var altName = 'image' + elementID;
            var imageID = 'AdviceImage' + elementID;
            var labelID = 'AdviceImageLable' + elementID;
            var labelValue = 'IMG' + elementID;
            var textID = 'AdviceImageText' + elementID;
            var removeButtonID = 'AdviceImageRemoveButton' + elementID;
            var addButtonID = 'AddAdviceImageButton' + elementID;
            var uploadID = 'AdviceUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'AdviceImageRotateButton' + elementID;
            var imgAngleInputID = "AdviceImageAngle" + elementID;
            var formID = "AdviceImageForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AdviceImagesTable", imageID, labelID, labelValue,
                                                textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AdvicePhotographs');
    
            //console.log(element);
            loadImage.parseMetaData(file, function (data) {
                //console.log("I am in");
                var orientation = 0;
                if (data.exif) {
                    orientation = data.exif.get('Orientation');
                }
    
                var loadingImage = loadImage(file, function (canvas) {
                    var data = canvas.toDataURL(imageType);
                    var data = canvas.toDataURL('image/jpeg');
                    var image = new Image();
                    image.onload = function () {
                        var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                        if (!isEmpty(data)) {
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
            automaticNumbering();
        }, 2000);
    }
});

/** 
    General Function for adding one image when the user click the "add" button
    by getting the id of the clicked button
    get the number of the id to generate other ids
    then use readOneImageURL function to add image on specific field.
*/

$('#AdviceUploadOneImage').click(function () {
    // console.log("AdviceUploadOneImage onclick");
    // console.log(global_Img);
    // console.log(this.value);
    this.value = null;
});
$("#AdviceUploadOneImage").on('change', function (e) {
    console.log("AdviceUploadOneImage onchange");
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
                    var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
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

        automaticNumbering();

        //check if it need Add empty element
        //if there are less than 30 forms, then create a new empty element. 
        var totalContainers = $('#AdvicePhotographs').find('> form');
        var imgscount = totalContainers.length;
        if(imgscount < 30)
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
    var totalContainers = $('#AdvicePhotographs').find('> form');
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
        automaticNumbering();
    }
    else if(imgscount < 30 && myImage.style.display != 'none' )
    {
        console.log("less than 30 images and the last img form is full, create a new img form and refresh img number");
        createEmptElementForAddingImg(nextid);
        automaticNumbering();
    }
    
}

function RotateOneImage(element)
{
    var originalAngle = document.getElementById(element[8]).value;
    var myImage = document.getElementById(element[0])
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
        myImage.style.marginTop = "80px"; //orignial 35px
        myImage.style.marginBottom = "80px";
        $("#" + element[0]).rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "80px";
        myImage.style.marginBottom = "80px";
        $("#" + element[0]).rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById(element[8]).value = rotateAngle;
    
}

/**
 * Create Image Elements dynamtically when image(s) are uploaded
 * create
 * image, label, image text, remove Button, Add Button, Rotate Button, Angle Input, A form to contain all 
 */

function createImagesElements(tableID, imgID, labelID = "", labelValue = "", textID, rmBtnID, addBtnID, formID,rotateBtnID,angleInputID,divID) {
    //console.log(lastElementID);
    var id = imgID.split("_")[1],
        form = document.createElement("form"),
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
    text.style.width = "500px";

    rmBtn.setAttribute("id", rmBtnID);
    rmBtn.setAttribute("class","btn btn-danger");
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.style.width = "500px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("class","btn btn-secondary");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("value", "Add");
    addBtn.style.width = "500px";
    addBtn.style.display = "none";

    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");
    rotateBtn.setAttribute("value", "Rotate");
    rotateBtn.setAttribute("style","margin-top: 5px;margin-bottom: 5px")
    rotateBtn.style.width = "500px";

    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.width = "500px";
    angleInput.style.display = "none";


    label.setAttribute("id", labelID);
    //label.style.marginBottom = "0px";
    label.setAttribute("style","margin-top: 10px;margin-bottom: 5px")

    //label.innerHTML = "IMG_" + id;


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
    // console.log(element);
    $("#" + rmBtnID).click(function () {
        // DeleteImage(formID, imgID, textID);
        DeleteOneImg(element);
    });
    $("#" + addBtnID).click(function () {
        console.log("click");
        global_Img = element;
        //console.log(global_Img);
        $("#AdviceUploadOneImage").click();

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
    var nextImageID = 'AdviceImage' + newID;
    var nextTextID = 'AdviceImageText' + newID;
    var nextLabelID = 'AdviceImageLable' + newID;
    var nextLableValue = 'IMG' + (parseInt(newID) + 1);
    var nextRemoveButtonID = 'AdviceImageRemoveButton' + newID;
    var nextAddButtonID = 'AddAdviceImageButton' + newID;
    var nextUploadID = 'AdviceUploadImage' + newID;
    var nextRotateBtnID = 'AdviceImageRotateButton' + newID;
    var nextAngelInputID = 'AdviceImageAngle' + newID;
    var nextFormID = "AdviceImageForm" + newID;
    var emptyElement = createImagesElements('AdviceImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AdvicePhotographs');
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

/**
 * Single Action, image related
 * Resize the Image
 */
function resizeImage_Canvas(img) {
    var MAX_WIDTH = 640,
        MAX_HEIGHT = 480,
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
            //height = MAX_HEIGHT;
            height = 480;

        }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas;
}

$(document).ready(() => {
    // $('#adviceSummary').summernote();
});