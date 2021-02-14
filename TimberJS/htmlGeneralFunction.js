//Fafa create 2018-1-15

var firstRemoveTimberSummary3rd = true;
var firstRemoveTimberSite3rd = true;
var firstRemoveTimberExteriro3rd = true;
var firstRemoveTimberInterior3rd = true;
var firstRemoveTimberRoof3rd = true;
var firstRemoveTimberSubfloor3rd = true;
var firstRemoveTimberRecommendation3rd = true;
var global_Img;
function onload()
{
    checkReloadOther();

    RotateSavedCoverImage();

    reorderImages('TimberSummaryPhotographs');
    reorderImages('TimberSitePhotographs');
    reorderImages('TimberExteriorPhotographs');
    reorderImages('TimberInteriorPhotographs');
    reorderImages('TimberRoofPhotographs');
    reorderImages('TimberSubfloorPhotographs');
    reorderImages('TimberRecommendationPhotographs');

    automaticNumbering('TimberSummaryPhotographs');
    automaticNumbering('TimberSitePhotographs');
    automaticNumbering('TimberExteriorPhotographs');
    automaticNumbering('TimberInteriorPhotographs');
    automaticNumbering('TimberRoofPhotographs');
    automaticNumbering('TimberSubfloorPhotographs');
    automaticNumbering('TimberRecommendationPhotographs');
    
    AddNewImageForm('TimberSummaryPhotographs',3);
    AddNewImageForm('TimberSitePhotographs',3);
    AddNewImageForm('TimberExteriorPhotographs',3);
    AddNewImageForm('TimberInteriorPhotographs',3);
    AddNewImageForm('TimberRoofPhotographs',3);
    AddNewImageForm('TimberSubfloorPhotographs',3);
    AddNewImageForm('TimberRecommendationPhotographs',3);
}

//AA-111 Check if site grade, or  Extensions/Renovations has selected 'othier' show the text area.
function checkReloadOther() {
    if ($("#ps6").val() === "Other") {
        $("#ps6other").show();
    } else {
        $("#ps6other").hide();
    }

    if ($("#ps9").val() === "Other") {
        $("#ps9other").show();
    } else {
        $("#ps9other").hide();
    }
}

//AA-111
function changeOther(id1,id2)
{
    //console.log(id1,id2);
    var select = "#" + id1;
    var input = "#" + id2;
    //console.log(select);
    //console.log(input);
    if ($(select).val() === "Other") {
        $(input).show();
    } else {
        $(input).hide();
    }
}


function autoPopulateAccessNotes(restrictionID, notesID) {
    typingArea = document.getElementById(restrictionID);

    populateArea = document.getElementById(notesID);

    populateArea.value = typingArea.value;
}

function autoPopulateRiskFactor(restrictionID, riskID) {
    risk = document.getElementById(restrictionID).value;
    if (risk === 'Moderate') {
        document.getElementById(riskID).selectedIndex = '1';
    } else if (risk === 'High') {
        document.getElementById(riskID).selectedIndex = '2';
    } else if (risk === 'Extreme') {
        document.getElementById(riskID).selectedIndex = '3';
    } else if (risk === 'Low') {
        document.getElementById(riskID).selectedIndex = '4';
    } else {
        document.getElementById(riskID).selectedIndex = '5';
    }

}


/**
 * Upload Timber Cover Image
 *
 */
function TimberCover() {
    document.getElementById('TimberUploadCoverImage').click();
}
$('#TimberUploadCoverImage').click(function()
{
    //console.log(this.value);
    this.value = null;
});

$('#TimberUploadCoverImage').change(function () {
    //uploadCoverImage(this,'TimberCoverImage','TimberCoverImageRemoveButton','540px');

    if (this.files && this.files[0]) {
        var imageFile = this.files[0];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        var date = new Date();
        // console.log(imageType);
        // console.log(imageName);
        loadImage.parseMetaData(imageFile, function (data) {
            console.log('I am in loadImage function');
            var orientation = 0;
            var image = document.getElementById('TimberCoverImage');
            var removeButton = document.getElementById('TimberCoverImageRemoveButton');
            var rotateButton = document.getElementById('TimberCoverImageRotateButton');

            //if exif data available, update orientation
            var loadingImage = loadImage(imageFile, function (canvas) {
                var base64data = canvas.toDataURL(imageType);
                //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                image.setAttribute('src', base64data);
                removeButton.style.display = 'block';
                rotateButton.style.display = 'block';
                //removeButton.style.width = '100%';
                image.alt = 'Cover Image';
                image.style.display = 'block';
                image.style.width = '100%';
                image.style.height = '100%';
                var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
                    type: imageType,
                    lastModified: date.getTime()
                });
                //console.log(file);
                doUploadFile(file, 'TimberCoverImage', '', 'TimberCoverImageRemoveButton', '', '', 'cover image', '', '', '', '', '100%', '100%','TimberCoverImageRotateButton',"TimberCoverImageAngle");

            }, {
                canvas: true,
                maxWidth: 1300,
                maxHeight: 1000
            });
        });
    }


});

/**
 * Remove Timber Cover Image
 *
 */
function RemoveTimberCoverImage() {

    var imageSelect = '#' + 'TimberCoverImage';
    $(imageSelect).attr('src', '#');
    var image = document.getElementById('TimberCoverImage');
    var button = document.getElementById('TimberCoverImageRemoveButton');
    var rotatebutton = document.getElementById('TimberCoverImageRotateButton');


    button.style.display = 'none';
    rotatebutton.style.display = 'none';
    image.style.display = 'none';
    image.style.display = 'none';
    document.getElementById("TimberCoverImageAngle").value = "";

    doRemovePhoto('TimberCoverImage');
}


function RotateTimberCoverImage()
{
    var rotateAngle;
    var originalAngle = document.getElementById('TimberCoverImageAngle').value;
    console.log(originalAngle);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }

    var myImage = document.getElementById('TimberCoverImage');
    
    var rotateAngle = parseInt(originalAngle) + 90

    console.log(rotateAngle);

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        console.log("the degree is 90 or 270");
        myImage.style.marginTop = "130px";
        myImage.style.marginBottom = "130px";
        $("#TimberCoverImage").rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "30px";
        myImage.style.marginBottom = "30px";
        $("#TimberCoverImage").rotate(rotateAngle);
    }

       
    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById('TimberCoverImageAngle').value = rotateAngle
}

/**
 * Use this to rotate the cover image when the HTML report is loaded. 
 */
function RotateSavedCoverImage()
{
    console.log("RotateSavedCoverImage");
    var myImage = document.getElementById('TimberCoverImage');
    var originalAngle = parseInt(document.getElementById('TimberCoverImageAngle').value);
    var rotateBtn = document.getElementById('TimberCoverImageRotateButton');

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
            myImage.style.marginTop = "130px";
            myImage.style.marginBottom = "130px";
            $("#TimberCoverImage").rotate(originalAngle);
        }
        else if(originalAngle == 180)
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
            $("#TimberCoverImage").rotate(originalAngle);
        }
        else 
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
        }

    }
}





function TimberSummaryUploadImages() {
    document.getElementById('TimberSummaryUploadImages').click();
}
$('#TimberSummaryUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#TimberSummaryUploadImages").change(function () {
    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#TimberSummaryPhotographs form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#TimberSummaryPhotographs").empty();
        }
        if (count >= 3) 
        {
            if(count > 3)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 3; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'TimberSummaryImage' + elementID;
                var textID = 'TimberSummaryImageText' + elementID;
                var labelID = 'TimberSummaryImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberSummaryImageRemoveButton' + elementID;
                var addButtonID = 'AddTimberSummaryImageButton' + elementID;
                var uploadID = 'TimberSummaryUploadImage' + elementID;
                var rotateButtonID = 'TimberSummaryImageRotateButton' + elementID;
                var imgAngleInputID = 'TimberSummaryImageAngle' + elementID;
                var formID = "TimberSummaryImageForm" + elementID;

                var element = createImagesElements("TimberSummaryImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberSummaryPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberSummaryPhotographs');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'TimberSummaryImage' + elementID;
                var textID = 'TimberSummaryImageText' + elementID;
                var labelID = 'TimberSummaryImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberSummaryImageRemoveButton' + elementID;
                var addButtonID = 'AddTimberSummaryImageButton' + elementID;
                var uploadID = 'TimberSummaryUploadImage' + elementID;
                var rotateButtonID = 'TimberSummaryImageRotateButton' + elementID;
                var imgAngleInputID = 'TimberSummaryImageAngle' + elementID;
                var formID = "TimberSummaryImageForm" + elementID;

                var element = createImagesElements("TimberSummaryImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberSummaryPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberSummaryPhotographs');
                var nextID = count + 1;
                createEmptElementForAddingImg("TimberSummaryPhotographs",nextID);
            }, 800);
        }
    }
});



function TimberSiteUploadImages() {
    document.getElementById('TimberSiteUploadImages').click();
}
$('#TimberSiteUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#TimberSiteUploadImages").change(function () {
    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#TimberSitePhotographs form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#TimberSitePhotographs").empty();
        }
        if (count >= 3) 
        {
            if(count > 3)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 3; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'TimberSiteImage' + elementID;
                var textID = 'TimberSiteImageText' + elementID;
                var labelID = 'TimberSiteImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberSiteImageRemoveButton' + elementID;
                var addButtonID = 'AddTimberSiteImageButton' + elementID;
                var uploadID = 'TimberSiteUploadImage' + elementID;
                var rotateButtonID = 'TimberSiteImageRotateButton' + elementID;
                var imgAngleInputID = 'TimberSiteImageAngle' + elementID;
                var formID = "TimberSiteImageForm" + elementID;

                var element = createImagesElements("TimberSiteImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberSitePhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberSummaryPhotographs');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'TimberSiteImage' + elementID;
                var textID = 'TimberSiteImageText' + elementID;
                var labelID = 'TimberSiteImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberSiteImageRemoveButton' + elementID;
                var addButtonID = 'AddTimberSiteImageButton' + elementID;
                var uploadID = 'TimberSiteUploadImage' + elementID;
                var rotateButtonID = 'TimberSiteImageRotateButton' + elementID;
                var imgAngleInputID = 'TimberSiteImageAngle' + elementID;
                var formID = "TimberSiteImageForm" + elementID;

                var element = createImagesElements("TimberSiteImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberSitePhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberSitePhotographs');
                var nextID = count + 1;
                createEmptElementForAddingImg("TimberSitePhotographs",nextID);
            }, 800);
        }
    }

});

function TimberExteriorUploadImages() {
    document.getElementById('TimberExteriorUploadImages').click();
}
$('#TimberExteriorUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#TimberExteriorUploadImages").change(function () {
    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#TimberExteriorPhotographs form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#TimberExteriorPhotographs").empty();
        }
        if (count >= 3) 
        {
            if(count > 3)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 3; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'TimberExteriorImage' + elementID;
                var textID = 'TimberExteriorImageText' + elementID;
                var labelID = 'TimberExteriorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberExteriorRemoveButton' + elementID;
                var addButtonID = 'AddTimberExteriorImageButton' + elementID;
                var uploadID = 'TimberExteriorUploadImage' + elementID;
                var rotateButtonID = 'TimberExteriorRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberExteriorImageAngle' + elementID;
                var formID = "TimberExteriorImageForm" + elementID;

                var element = createImagesElements("TimberExteriorImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberExteriorPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberExteriorPhotographs');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'TimberExteriorImage' + elementID;
                var textID = 'TimberExteriorImageText' + elementID;
                var labelID = 'TimberExteriorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberExteriorRemoveButton' + elementID;
                var addButtonID = 'AddTimberExteriorImageButton' + elementID;
                var uploadID = 'TimberExteriorUploadImage' + elementID;
                var rotateButtonID = 'TimberExteriorRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberExteriorImageAngle' + elementID;
                var formID = "TimberExteriorImageForm" + elementID;

                var element = createImagesElements("TimberExteriorImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberExteriorPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberExteriorPhotographs');
                var nextID = count + 1;
                createEmptElementForAddingImg("TimberExteriorPhotographs",nextID);
            }, 800);
        }
    }
});


function TimberInteriorUploadImages() {

    document.getElementById('TimberInteriorUploadImages').click();
}
$('#TimberInteriorUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#TimberInteriorUploadImages").change(function () {
    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#TimberInteriorPhotographs form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#TimberInteriorPhotographs").empty();
        }
        if (count >= 3) 
        {
            if(count > 3)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 3; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'TimberInteriorImage' + elementID;
                var textID = 'TimberInteriorImageText' + elementID;
                var labelID = 'TimberInteriorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberInteriorRemoveButton' + elementID;
                var addButtonID = 'AddTimberInteriorImageButton' + elementID;
                var uploadID = 'TimberInteriorUploadImage' + elementID;
                var rotateButtonID = 'TimberInteriorRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberInteriorImageAngle' + elementID;
                var formID = "TimberInteriorImageForm" + elementID;

                var element = createImagesElements("TimberInteriorImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberInteriorPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberInteriorPhotographs');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'TimberInteriorImage' + elementID;
                var textID = 'TimberInteriorImageText' + elementID;
                var labelID = 'TimberInteriorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberInteriorRemoveButton' + elementID;
                var addButtonID = 'AddTimberInteriorImageButton' + elementID;
                var uploadID = 'TimberInteriorUploadImage' + elementID;
                var rotateButtonID = 'TimberInteriorRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberInteriorImageAngle' + elementID;
                var formID = "TimberInteriorImageForm" + elementID;

                var element = createImagesElements("TimberInteriorImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberInteriorPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberInteriorPhotographs');
                var nextID = count + 1;
                createEmptElementForAddingImg("TimberInteriorPhotographs",nextID);
            }, 800);
        }
    }
});

function TimberRoofUploadImages() {
    document.getElementById('TimberRoofUploadImages').click();
}
$('#TimberRoofUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#TimberRoofUploadImages").change(function () {
    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#TimberRoofPhotographs form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#TimberRoofPhotographs").empty();
        }
        if (count >= 3) 
        {
            if(count > 3)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 3; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'TimberRoofImage' + elementID;
                var textID = 'TimberRoofImageText' + elementID;
                var labelID = 'TimberRoofImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberRoofRemoveButton' + elementID;
                var addButtonID = 'AddTimberRoofImageButton' + elementID;
                var uploadID = 'TimberRoofUploadImage' + elementID;
                var rotateButtonID = 'TimberRoofRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberRoofImageAngle' + elementID;
                var formID = "TimberRoofImageForm" + elementID;

                var element = createImagesElements("TimberRoofImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberRoofPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberRoofPhotographs');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'TimberRoofImage' + elementID;
                var textID = 'TimberRoofImageText' + elementID;
                var labelID = 'TimberRoofImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberRoofRemoveButton' + elementID;
                var addButtonID = 'AddTimberRoofImageButton' + elementID;
                var uploadID = 'TimberRoofUploadImage' + elementID;
                var rotateButtonID = 'TimberRoofRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberRoofImageAngle' + elementID;
                var formID = "TimberRoofImageForm" + elementID;

                var element = createImagesElements("TimberRoofImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberRoofPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberRoofPhotographs');
                var nextID = count + 1;
                createEmptElementForAddingImg("TimberRoofPhotographs",nextID);
            }, 800);
        }
    }
});

function TimberSubfloorUploadImages() {  
    document.getElementById('TimberSubfloorUploadImages').click();
}
$('#TimberSubfloorUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#TimberSubfloorUploadImages").change(function () {
    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#TimberSubfloorPhotographs form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#TimberSubfloorPhotographs").empty();
        }
        if (count >= 3) 
        {
            if(count > 3)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 3; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'TimberSubfloorImage' + elementID;
                var textID = 'TimberSubfloorImageText' + elementID;
                var labelID = 'TimberSubfloorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberSubfloorRemoveButton' + elementID;
                var addButtonID = 'AddTimberSubfloorImageButton' + elementID;
                var uploadID = 'TimberSubfloorUploadImage' + elementID;
                var rotateButtonID = 'TimberSubfloorRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberSubfloorImageAngle' + elementID;
                var formID = "TimberSubfloorImageForm" + elementID;

                var element = createImagesElements("TimberSubfloorImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberSubfloorPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberSubfloorPhotographs');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'TimberSubfloorImage' + elementID;
                var textID = 'TimberSubfloorImageText' + elementID;
                var labelID = 'TimberSubfloorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberSubfloorRemoveButton' + elementID;
                var addButtonID = 'AddTimberSubfloorImageButton' + elementID;
                var uploadID = 'TimberSubfloorUploadImage' + elementID;
                var rotateButtonID = 'TimberSubfloorRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberSubfloorImageAngle' + elementID;
                var formID = "TimberSubfloorImageForm" + elementID;

                var element = createImagesElements("TimberSubfloorImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberSubfloorPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberSubfloorPhotographs');
                var nextID = count + 1;
                createEmptElementForAddingImg("TimberSubfloorPhotographs",nextID);
            }, 800);
        }
    }
});


function TimberRecommendationUploadImages() {
    document.getElementById('TimberRecommendationUploadImages').click();
}
$('#TimberRecommendationUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#TimberRecommendationUploadImages").change(function () {

    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#AccessmentSiteImagesContainer form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentSiteImagesContainer").empty();
        }
        if (count >= 3) 
        {
            if(count > 3)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 3; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'TimberRecommendationImage' + elementID;
                var textID = 'TimberRecommendationImageText' + elementID;
                var labelID = 'TimberRecommendationImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberRecommendationRemoveButton' + elementID;
                var addButtonID = 'AddTimberRecommendationImageButton' + elementID;
                var uploadID = 'TimberRecommendationUploadImage' + elementID;
                var rotateButtonID = 'TimberRecommendationRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberRecommendationImageAngle' + elementID;
                var formID = "TimberRecommendationImageForm" + elementID;

                var element = createImagesElements("TimberRecommendationImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberRecommendationPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberRecommendationPhotographs');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'TimberRecommendationImage' + elementID;
                var textID = 'TimberRecommendationImageText' + elementID;
                var labelID = 'TimberRecommendationImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'TimberRecommendationRemoveButton' + elementID;
                var addButtonID = 'AddTimberRecommendationImageButton' + elementID;
                var uploadID = 'TimberRecommendationUploadImage' + elementID;
                var rotateButtonID = 'TimberRecommendationRotateImageButton' + elementID;
                var imgAngleInputID = 'TimberRecommendationImageAngle' + elementID;
                var formID = "TimberRecommendationImageForm" + elementID;

                var element = createImagesElements("TimberRecommendationImagesTable", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'TimberRecommendationPhotographs');

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
                            var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                            if (!isEmpty(code)) {
                                $("#" + element[0]).attr("src", code);

                                var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                                    type: file.type,
                                    lastModified: file.lastModifiedDate
                                });
                                //console.log(element);
                                
                            //doUploadFile  (imgFile, imageid,    textid,    removeid    addid,      table   ,   imageAltName, divID,                  , rotateid, angleid
                                doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
                                //element            , imgID      textID      rmBtnID,    addBtnID,    tableID,    labelID,   formID,                   , rotateBtnID, angleInputID);
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
                automaticNumbering('TimberRecommendationPhotographs');
                var nextID = count + 1;
                createEmptElementForAddingImg("TimberRecommendationPhotographs",nextID);
            }, 800);
        }
    }
});



/**
 * Single Action, image related
 * Add One Image
 */
$('#TimberUploadOneImage').click(function () {
    //console.log(this.value);
    this.value = null;
});
$("#TimberUploadOneImage").on('change', function (e) {
    console.log("need to upload a single image");
    var file = e.currentTarget.files;

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

        //console.log(element[9]);
        setTimeout(function () {
            automaticNumbering(element[9]);

            //Add empty element,check divid to know the max image no. 
            console.log(element[9]);
            var totalContainers = $('#' + element[9]).find('> form');
            var imgscount = totalContainers.length;
            if(imgscount < 3)
            {
                console.log("need to add new image form");
                var selectedID = String(element[0]).replace(/[^\d.]/g, '');
                var nextID = parseInt(selectedID) + 1; 
                createEmptElementForAddingImg(element[9],nextID);
            }
        }, 100);

    }
});

/**
 * Single Action, image related
 * Rotate One Image
 */

function RotateOneImage(element)
{
   //console.log(element);
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
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + element[0]).rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "0px";
        myImage.style.marginBottom = "0px";
        $("#" + element[0]).rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById(element[8]).value = rotateAngle;
    
}

/**
 * Single Action, image related
 * Remove One Image
 */
function DeleteOneImg(element) {
    console.log('deleting');
    console.log(element[9]);
    //document.getElementById(element[8]).value = 0;
    doRemovePhoto(element[0]);
    $("#" + element[5]).remove();
    var totalContainers = $('#' + element[9]).find('> form');
    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });
    var imgscount = totalContainers.length;
    var myImage = totalContainers.eq(imgscount-1).children('img').get(0);
    var imgID = totalContainers.eq(imgscount-1).children('img').get(0).id;
    var lastid = imgID.match(/\d+/g).map(Number);
    var nextid = parseInt(lastid) + 1;

    console.log(nextid);
    console.log(imgscount);

    automaticNumbering(element[9]);
    if(myImage.style.display != 'none')
    {
        console.log("the last img form is full, check if need to create a new img form and refresh img number");
        //In Timber Report, in all section, the max number of images are 3. 
        if(imgscount < 3)
        {
            console.log("need to add new image form");
            var selectedID = String(element[0]).replace(/[^\d.]/g, '');
            var nextID = parseInt(selectedID) + 1; 
            createEmptElementForAddingImg(element[9],nextid);
        }
        // if(element[9] === 'AccessmentSiteImagesContainer' || element[9] === 'AccessmentInteriorServiceImagesContainer'  )
        // {
        //     //console.log("I am in");
        //     if(imgscount < 3)
        //     {
        //         console.log("need to add new image form");
        //         var selectedID = String(element[0]).replace(/[^\d.]/g, '');
        //         var nextID = parseInt(selectedID) + 1; 
        //         createEmptElementForAddingImg(element[9],nextid);
        //     }
        // }   
        // else
        // {
        //     //console.log("I am in");
        //     if(imgscount < 6)
        //     {
        //         console.log("need to add new image form");
        //         var selectedID = String(element[0]).replace(/[^\d.]/g, '');
        //         var nextID = parseInt(selectedID) + 1; 
        //         createEmptElementForAddingImg(element[9],nextid);
        //     }
        // }
    }    
}



/**
 * Create Image Elements dynamtically when image(s) are uploaded
 * create
 * image, label, image text, remove Button, Add Button, Rotate Button, Angle Input, A form to contain all 
 */

function createImagesElements(tableID, imgID, labelID = "", labelValue = "", textID, rmBtnID, addBtnID, formID,rotateBtnID,angleInputID,divID) 
{

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
    //img.style.width = '265px';

    text.setAttribute("id", textID);
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", "name");
    text.style.width = "265px";

    rmBtn.setAttribute("id", rmBtnID);
    rmBtn.setAttribute("class","btn btn-danger");
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.style.width = "265px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("class","btn btn-secondary");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("value", "Add");
    addBtn.style.width = "265px";
    addBtn.style.display = "none";

    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");
    rotateBtn.setAttribute("value", "Rotate");
    rotateBtn.setAttribute("style","margin-top: 5px;margin-bottom: 5px")
    rotateBtn.style.width = "265px";

    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.width = "265px";
    angleInput.style.display = "none";


    label.setAttribute("id", labelID);
    label.style.marginBottom = "0px";
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
        DeleteOneImg(element);
    });
    $("#" + addBtnID).click(function () {
        global_Img = element;
        $("#TimberUploadOneImage").click();
    });

    $("#" + rotateBtnID).click(function () {
        RotateOneImage(element);
    });


    return element;
}

/**
 * Create Empty Image Elements for the next image, when a image is uploaded. Prepare for the next. 
 */
function createEmptElementForAddingImg(divID,nextID) {
    console.log(nextID);
    console.log(divID);
    var nextImageID,nextTextID,nextLabelID,nextLableValue,nextRemoveButtonID,nextAddButtonID,nextUploadID,nextRotateBtnID,nextAngelInputID,nextFormID,emptyElement;

    if(divID == "TimberSummaryPhotographs")
    {
        nextAltName = 'image ' + nextID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        nextImageID = 'TimberSummaryImage' + nextID;
        nextTextID = 'TimberSummaryImageText' + nextID;
        nextLabelID = 'TimberSummaryImageLable' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'TimberSummaryRemoveButton' + nextID;
        nextAddButtonID = 'AddTimberSummaryImageButton' + nextID;
        nextUploadID = 'TimberSummaryUploadImage' + nextID;
        nextRotateBtnID = 'TimberSummaryRotateImageButton' + nextID;
        nextAngelInputID = 'TimberSummaryImageAngle' + nextID;
        nextFormID = "TimberSummaryImageForm" + nextID;
        // addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
        //     'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px',nextRotateBtnID,nextAngelInputID);
        emptyElement = createImagesElements('TimberSummaryImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberSummaryPhotographs');

    }
    else if(divID == 'TimberSitePhotographs')
    {
        nextImageID = 'TimberSiteImage' + nextID;
        nextTextID = 'TimberSiteImageText' + nextID;
        nextLabelID = 'TimberSiteImageLable' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'TimberSiteRemoveButton' + nextID;
        nextAddButtonID = 'AddTimberSiteImageButton' + nextID;
        nextUploadID = 'TimberSiteUploadImage' + nextID;
        nextRotateBtnID = 'TimberSiteRotateImageButton' + nextID;
        nextAngelInputID = 'TimberSiteImageAngle' + nextID;
        nextFormID = "TimberSiteImageForm" + nextID;

        emptyElement = createImagesElements('TimberSiteImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberSitePhotographs');
    }
    else if(divID == 'TimberExteriorPhotographs')
    {
        nextImageID = 'TimberExteriorLivingImage' + nextID;
        nextTextID = 'TimberExteriorLivingImageText' + nextID;
        nextLabelID = 'Livinglabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'TimberExteriorLivingRemoveButton' + nextID;
        nextAddButtonID = 'AddTimberExteriorLivingImageButton' + nextID;
        nextUploadID = 'TimberInteriorUploadImage' + nextID;
        nextRotateBtnID = 'RotateTimberExteriorLivingImageButton' + nextID;
        nextAngelInputID = 'TimberExteriorLivingImageAngle' + nextID;
        nextFormID = "TimberExteriorImageForm" + nextID;

        emptyElement = createImagesElements('TimberExteriorImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberExteriorPhotographs');

    }
    else if(divID == 'TimberInteriorPhotographs')
    {
        nextImageID = 'TimberInteriorBedroomImage' + nextID;
        nextTextID = 'TimberInteriorBedroomImageText' + nextID;
        nextLabelID = 'Bedroomlabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'TimberInteriorBedroomRemoveButton' + nextID;
        nextAddButtonID = 'AddTimberInteriorBedroomImageButton' + nextID;
        nextUploadID = 'TimberInteriorBedroomUploadImage' + nextID;
        nextRotateBtnID = 'RotateTimberInteriorBedroomImageButton' + nextID;
        nextAngelInputID = 'TimberInteriorBedroomImageAngle' + nextID;
        nextFormID = "TimberInteriorImageForm" + nextID;

        emptyElement = createImagesElements('TimberInteriorImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberInteriorPhotographs');

    }
    else if(divID == 'TimberRoofPhotographs')
    {
        nextImageID = 'TimberRoofServiceImage' + nextID;
        nextTextID = 'TimberRoofServiceImageText' + nextID;
        nextLabelID = 'TimberRooflabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'TimberRoofServiceRemoveButton' + nextID;
        nextAddButtonID = 'AddTimberRoofServiceImageButton' + nextID;
        nextUploadID = 'TimberRoofServiceUploadImage' + nextID;
        nextRotateBtnID = 'RotateTimberRoofServiceImageButton' + nextID;
        nextAngelInputID = 'TimberRoofServiceImageAngle' + nextID;
        nextFormID = "TimberRoofImageForm" + nextID;

        emptyElement = createImagesElements('TimberRoofImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberRoofPhotographs');

    }
    else if(divID == 'TimberSubfloorPhotographs')
    {
        nextImageID = 'TimberSubfloorServiceImage' + nextID;
        nextTextID = 'TimberSubfloorServiceImageText' + nextID;
        nextLabelID = 'TimberSubfloorlabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'TimberSubfloorServiceRemoveButton' + nextID;
        nextAddButtonID = 'AddTimberSubfloorServiceImageButton' + nextID;
        nextUploadID = 'TimberSubfloorServiceUploadImage' + nextID;
        nextRotateBtnID = 'RotateTimberSubfloorServiceImageButton' + nextID;
        nextAngelInputID = 'TimberSubfloorServiceImageAngle' + nextID;
        nextFormID = "TimberSubfloorImageForm" + nextID;

        emptyElement = createImagesElements('TimberSubfloorImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberSubfloorPhotographs');

    }
    else if(divID == 'TimberRecommendationPhotographs')
    {
        nextImageID = 'TimberRecommendationServiceImage' + nextID;
        nextTextID = 'TimberRecommendationServiceImageText' + nextID;
        nextLabelID = 'TimberRecommendationlabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'TimberRecommendationServiceRemoveButton' + nextID;
        nextAddButtonID = 'AddTimberRecommendationServiceImageButton' + nextID;
        nextUploadID = 'TimberRecommendationServiceUploadImage' + nextID;
        nextRotateBtnID = 'RotateTimberRecommendationServiceImageButton' + nextID;
        nextAngelInputID = 'TimberRecommendationServiceImageAngle' + nextID;
        nextFormID = "TimberRecommendationImageForm" + nextID;

        emptyElement = createImagesElements('TimberRecommendationImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberRecommendationPhotographs');

    }
    // console.log(emptyElement);
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

function AddNewImageForm(divID,maxImage)
{
    var idGroup = [];
    //console.log('#' + divID);
    var totalContainers = $('#' + divID).find('> form');
    // console.log("the current form in the report " + divID + " is " + totalContainers.length);
    // console.log("the max Image is " + maxImage);

    if (totalContainers.length < maxImage && totalContainers.length != 0) 
    {
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
        //console.log("the last ID is " + idGroup[idGroup.length - 1]);
        var lastID = idGroup[idGroup.length - 1];
        var newID = Number(lastID) + 1;
        var altID = Number(lastID) + 2;
        //console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");

        var nextImageID,nextTextID,nextLabelID,nextLableValue,nextRemoveButtonID,nextAddButtonID,nextUploadID,nextRotateBtnID,nextAngelInputID,nextFormID,emptyElement;

        if(divID === "TimberSummaryPhotographs")
        {
            //console.log("I am in AccessmentSiteImagesContainer");
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
             nextImageID = 'TimberSummaryImage' + newID;
             nextTextID = 'TimberSummaryImageText' + newID;
             nextLabelID = 'TimberSummaryImageLable' + newID;
             nextLableValue = 'IMG' + (parseInt(newID) + 1);
             nextRemoveButtonID = 'TimberSummaryRemoveButton' + newID;
             nextAddButtonID = 'AddTimberSummaryImageButton' + newID;
             nextUploadID = 'TimberSummaryUploadImage' + newID;
             nextRotateBtnID = 'TimberSummaryRotateImageButton' + newID;
             nextAngelInputID = 'TimberSummaryImageAngle' + newID;
             nextFormID = "TimberSummaryImageForm" + newID;
            // addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
            //     'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px',nextRotateBtnID,nextAngelInputID);
             emptyElement = createImagesElements('TimberSummaryImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberSummaryPhotographs');
    
        }
        else if(divID === "TimberSitePhotographs")
        {
            //console.log("I am in AccessmentExteriorImagesContainer");
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            nextImageID = 'TimberSiteImage' + newID;
            nextTextID = 'TimberSiteImageText' + newID;
            nextLabelID = 'TimberSiteImageLable' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'TimberSiteRemoveButton' + newID;
            nextAddButtonID = 'AddTimberSiteImageButton' + newID;
            nextUploadID = 'TimberSiteUploadImage' + newID;
            nextRotateBtnID = 'TimberSiteRotateImageButton' + newID;
            nextAngelInputID = 'TimberSiteImageAngle' + newID;
            nextFormID = "TimberSiteImageForm" + newID;
            
            emptyElement = createImagesElements('TimberSiteImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberSitePhotographs');
    
        }
        else if(divID == 'TimberExteriorPhotographs')
        {
            nextImageID = 'TimberExteriorLivingImage' + newID;
            nextTextID = 'TimberExteriorLivingImageText' + newID;
            nextLabelID = 'Livinglabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'TimberExteriorLivingRemoveButton' + newID;
            nextAddButtonID = 'AddTimberExteriorLivingImageButton' + newID;
            nextUploadID = 'TimberExteriorUploadImage' + newID;
            nextRotateBtnID = 'RotateTimberExteriorLivingImageButton' + newID;
            nextAngelInputID = 'TimberExteriorLivingImageAngle' + newID;
            nextFormID = "TimberExteriorImageForm" + newID;
    
            emptyElement = createImagesElements('TimberExteriorImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberExteriorPhotographs');
    
        }
        else if(divID == 'TimberInteriorPhotographs')
        {
            nextImageID = 'TimberInteriorBedroomImage' + newID;
            nextTextID = 'TimberInteriorBedroomImageText' + newID;
            nextLabelID = 'Bedroomlabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'TimberInteriorBedroomRemoveButton' + newID;
            nextAddButtonID = 'AddTimberInteriorBedroomImageButton' + newID;
            nextUploadID = 'TimberInteriorBedroomUploadImage' + newID;
            nextRotateBtnID = 'RotateTimberInteriorBedroomImageButton' + newID;
            nextAngelInputID = 'TimberInteriorBedroomImageAngle' + newID;
            nextFormID = "TimberInteriorImageForm" + newID;

            emptyElement = createImagesElements('TimberInteriorImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberInteriorPhotographs');

        }
        else if(divID == 'TimberRoofPhotographs')
        {
            nextImageID = 'TimberRoofServiceImage' + newID;
            nextTextID = 'TimberRoofServiceImageText' + newID;
            nextLabelID = 'TimberRooflabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'TimberRoofServiceRemoveButton' + newID;
            nextAddButtonID = 'AddTimberRoofServiceImageButton' + newID;
            nextUploadID = 'TimberRoofServiceUploadImage' + newID;
            nextRotateBtnID = 'RotateTimberRoofServiceImageButton' + newID;
            nextAngelInputID = 'TimberRoofServiceImageAngle' + newID;
            nextFormID = "TimberRoofImageForm" + newID;

            emptyElement = createImagesElements('TimberRoofImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberRoofPhotographs');

        }
        else if(divID == 'TimberSubfloorPhotographs')
        {
            nextImageID = 'TimberSubfloorServiceImage' + newID;
            nextTextID = 'TimberSubfloorServiceImageText' + newID;
            nextLabelID = 'TimberSubfloorlabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'TimberSubfloorServiceRemoveButton' + newID;
            nextAddButtonID = 'AddTimberSubfloorServiceImageButton' + newID;
            nextUploadID = 'TimberSubfloorServiceUploadImage' + newID;
            nextRotateBtnID = 'RotateTimberSubfloorServiceImageButton' + newID;
            nextAngelInputID = 'TimberSubfloorServiceImageAngle' + newID;
            nextFormID = "TimberSubfloorImageForm" + newID;

            emptyElement = createImagesElements('TimberSubfloorImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberSubfloorPhotographs');

        }
        else if(divID == 'TimberRecommendationPhotographs')
        {
            nextImageID = 'TimberRecommendationServiceImage' + newID;
            nextTextID = 'TimberRecommendationServiceImageText' + newID;
            nextLabelID = 'TimberRecommendationlabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'TimberRecommendationServiceRemoveButton' + newID;
            nextAddButtonID = 'AddTimberRecommendationServiceImageButton' + newID;
            nextUploadID = 'TimberRecommendationServiceUploadImage' + newID;
            nextRotateBtnID = 'RotateTimberRecommendationServiceImageButton' + newID;
            nextAngelInputID = 'TimberRecommendationServiceImageAngle' + newID;
            nextFormID = "TimberRecommendationImageForm" + newID;

            emptyElement = createImagesElements('TimberRecommendationImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'TimberRecommendationPhotographs');

        }
       
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
    // else
    // {
    //     console.log(divID + ' there is no saved images at all, no need to create for next image form');
    // }
}

/**
 * To reorder the images when the HTML report is reloaded
 */

function reorderImages(divid) {
    //console.log("reorderImages");
    //console.log(divid);
    var totalContainers = $('#' + divid).find('> form');
    //console.log(totalContainers);
    var BigContainer = document.getElementById(divid);

    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    //console.log(totalContainers);

    $('#' + divid).empty();
    for (var i = 0; i < totalContainers.length; i++) {
        //console.log(totalContainers[i]);
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
                //console.log("the degree is 90 or 270");
                myImage.style.marginTop = "30px";
                myImage.style.marginBottom = "35px";
                $("#" + imgID).rotate(originalAngle);            }
            else
            {
                myImage.style.marginTop = "0px";
                myImage.style.marginBottom = "0px";
                $("#" + imgID).rotate(originalAngle);
            }

        }

        var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,divid,rotateBtnID,angleID,divid];

        var removeBtn = document.getElementById(totalContainers.eq(i).children('input').eq(2).get(0).id);
        var rotateBtn = document.getElementById(totalContainers.eq(i).children('input').eq(4).get(0).id);

        var removeFunction = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + divid + "','" + rotateBtnID +  "','" + angleID +  "','" + divid + "'])";

        var rotateFunction = "RotateOneImage(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + divid + "','"+ rotateBtnID +  "','" + angleID + "','" + divid + "'])";
        //console.log(removeFunction);
        $("#" + addBtnID).click(function () {
            global_Img = element;
            $("#AssessmentUploadOneImage").click();
        });
        removeBtn.setAttribute("onclick", removeFunction);
        rotateBtn.setAttribute("onclick", rotateFunction);
    }
}


/**
 * Single Action, image related
 * Call it every time a image is uploaded/removed, or the HTML is reloaded. 
 * auto number the image
 * display the number under the images. 
 */
function automaticNumbering(divid) {
    //console.log("need to refresh the image number");
    var totalContainers = $('#' + divid).find('> form');

    for (var i = 0; i < totalContainers.length; i++) {
        //console.log(totalContainers.eq(i).children('label').get(0));
        //console.log(totalContainers.eq(i).children('form').eq(1).children('label').get(0));
        totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i + 1);
    }    
}

/**
 * Single Action, image related
 * Resize the Image
 */
function resizeImage_Canvas(img) {
    var MAX_WIDTH = 265,
        MAX_HEIGHT = 198,
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
            height = 198;

        }
    }
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas;
}

/**
 * Single Action, image related
 * Convert the Base64 to Blob for uploading the image to the server
 * Source from http://www.blogjava.net/jidebingfeng/articles/406171.html
 */
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
