//Fafa create 2018-1-15


function autoPopulateAccessNotes(restrictionID,notesID)
{
    typingArea = document.getElementById(restrictionID);

    populateArea = document.getElementById(notesID);

    populateArea.value = typingArea.value;
}

function autoPopulateRiskFactor(restrictionID, riskID)
{
    risk = document.getElementById(restrictionID).value;
    if(risk === 'Moderate')
    {
        document.getElementById(riskID).selectedIndex = '1';
    }
    else if(risk === 'High')
    {
        document.getElementById(riskID).selectedIndex = '2';
    }
    else if (risk === 'Extreme')
    {
        document.getElementById(riskID).selectedIndex = '3';
    }
    else if (risk === 'Low')
    {
        document.getElementById(riskID).selectedIndex = '4';
    }
    else
    {
        document.getElementById(riskID).selectedIndex = '5';
    }

}



//Only upload one image per time
function readOneImageURL(input, imageID0, addButtonID, removeButtonID, textID, imageSize,nextAddButtonID) {
    if (input.files && input.files[0]) {
        var imageFile = input.files[0];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        var date = new Date();

        if (nextAddButtonID != "")
        {
            var nextAddButton = document.getElementById(nextAddButtonID);
            if (nextAddButton.style.display == 'none')
            {
                console.log('button is hidden, need to activate it');
                nextAddButton.style.display = 'block';
            }
            else
            {
                console.log('no need to activate');
            }
        }

        loadImage.parseMetaData(imageFile, function (data) {
            console.log("i am in loadImage function");
            var orientation = 0;
            var image = '#' + imageID0;
            var reader = new FileReader();
            var button = document.getElementById(addButtonID);
            var removeButton = document.getElementById(removeButtonID);
            var imageID = document.getElementById(imageID0);
            var description = document.getElementById(textID);
            imageID.alt = '';
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function(canvas) {
                    //here's the base64 data result
                    var base64data = canvas.toDataURL('image/jpeg');
                    //here's example to show it as on imae preview
                    var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    $(image).attr('src', base64data);
                    button.style.display = 'none';
                    removeButton.style.display = 'block';
                    imageID.style.display = 'block';
                    imageID.style.width = imageSize;
                    imageID.style.height = imageSize;
                    description.style.display = 'block';
                    var file = new File([convertBase64UrlToBlob(base64data)], imageName, {type: imageType, lastModified:date.getTime()});
                    doUploadFile(file,imageID0, textID, removeButtonID, addButtonID,'','','','','','',imageSize,imageSize);
                }, {
                    //should be set to canvas : true to activate auto fix orientation
                    canvas: true,
                    orientation: orientation,
                    maxWidth:1000,
                    maxHeight:850

                }
            );
        });
    }
}

//upload max 3 images
function read3ImagesURL(input, addButtonID0, addButtonID1, addButtonID2, imageID0, imageID1, imageID2, text0, text1, text2, removeButton0, removeButton1, removeButton2) {
    var count = input.files.length;
    var date = new Date();
    //check if the selected images are more than 3
    if (count > 3) {
        alert("You can only selected three images maximum, will display the first images");
    }

    //Display all the add button first
    var addButton0 = document.getElementById(addButtonID0);
    var addButton1 = document.getElementById(addButtonID1);
    var addButton2 = document.getElementById(addButtonID2);
    

    if (input.files && input.files[0]) {
        addButton0.style.display = 'block';
        addButton1.style.display = 'block';
        addButton2.style.display = 'block';

        //Clear all the images
        document.getElementById(imageID0).setAttribute('src','#');
        document.getElementById(imageID1).setAttribute('src','#');
        document.getElementById(imageID2).setAttribute('src','#');

        //Hide all the remove buttons first.
        document.getElementById(removeButton0).style.display = 'none';
        document.getElementById(removeButton1).style.display = 'none';
        document.getElementById(removeButton2).style.display = 'none';
        var imageFile = input.files[0];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        loadImage.parseMetaData(imageFile, function (data) {
            console.log("i am in loadImage function");
            var orientation = 0;
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function(canvas) {
                    //here's the base64 data result
                    var base64data = canvas.toDataURL('image/jpeg');
                    //here's example to show it as on imae preview
                    // var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    var image = '#' + imageID0;
                    $(image).attr('src', base64data);
                    var image = document.getElementById(imageID0);
                    var description = document.getElementById(text0);
                    var button = document.getElementById(removeButton0);
                    image.style.width = '265px';
                    image.style.height = '265px';
                    image.style.display = 'block';
                    description.style.display = 'block';
                    button.style.display = 'block';
                    addButton0.style.display = 'none';
                    var file = new File([convertBase64UrlToBlob(base64data)], imageName, {type: imageType, lastModified:date.getTime()});
                    doUploadFile(file,imageID0, text0, removeButton0, addButtonID0,'','','','','','','265px','265px');
                }, {
                    //should be set to canvas : true to activate auto fix orientation
                    canvas: true,
                    orientation: orientation,
                    maxWidth:1000,
                    maxHeight:850
                }
            );
            //doUploadFile(input.files[0],imageID0, text0, removeButton0, addButtonID0,'','','','','','','265px','265px');
        });
    }

 setTimeout(function(){ 
    if (input.files && input.files[1]) {
        var imageFile = input.files[1];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        loadImage.parseMetaData(imageFile, function (data) {
            console.log("i am in loadImage function");
            var orientation = 0;
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(
                input.files[1],
                function(canvas) {
                    //here's the base64 data result
                    var base64data = canvas.toDataURL('image/jpeg');
                    //here's example to show it as on image preview
                    var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    var image = '#' + imageID1;
                    $(image).attr('src', base64data);
                    var image = document.getElementById(imageID1);
                    var description = document.getElementById(text1);
                    var button = document.getElementById(removeButton1);
                    image.style.width = '265px';
                    image.style.height = '265px';
                    image.style.display = 'block';
                    description.style.display = 'block';
                    button.style.display = 'block';
                    addButton1.style.display = 'none';
                    var file = new File([convertBase64UrlToBlob(base64data)], imageName, {type: imageType, lastModified:date.getTime()});
                    doUploadFile(file,imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
                }, {
                    //should be set to canvas : true to activate auto fix orientation
                    canvas: true,
                    orientation: orientation,
                    maxWidth:1000,
                    maxHeight:850

                }
            );
            //doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
            //doUploadFile(loadingImage,imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
        });

    }},100);

    setTimeout(function(){ if (input.files && input.files[2]) {
        var imageFile = input.files[2];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        loadImage.parseMetaData(imageFile, function (data) {
            console.log("i am in loadImage function");
            var orientation = 0;
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(input.files[2], function(canvas) {
                    //here's the base64 data result
                    var base64data = canvas.toDataURL('image/jpeg');
                    //here's example to show it as on imae preview
                    var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                    var image = '#' + imageID2;
                    $(image).attr('src', base64data);
                    var image = document.getElementById(imageID2);
                    var description = document.getElementById(text2);
                    var button = document.getElementById(removeButton2);
                    image.style.width = '265px';
                    image.style.height = '265px';
                    image.style.display = 'block';
                    description.style.display = 'block';
                    button.style.display = 'block';
                    addButton2.style.display = 'none';
                    var file = new File([convertBase64UrlToBlob(base64data)], imageName, {type: imageType, lastModified:date.getTime()});
                    doUploadFile(file,imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');

                }, {
                    //should be set to canvas : true to activate auto fix orientation
                    canvas: true,
                    orientation: orientation,
                    maxWidth:1000,
                    maxHeight:850

                }
            );
            //doUploadFile(input.files[2],imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
            //doUploadFile(loadingImage,imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
        });
    } },120);

}

function RemoveImage(imageID, removeButtonID, addButtonID,textID) {
    var imageSelect = '#' + imageID;
    $(imageSelect).attr('src', '#');
    var image = document.getElementById(imageID);
    var removeButton = document.getElementById(removeButtonID);
    var addButton = document.getElementById(addButtonID);
    var description = document.getElementById(textID);

    removeButton.style.display = 'none';
    description.value = "";
    description.style.display = 'none';
    addButton.style.display = 'block';
    image.style.width = '0px';
    image.style.display = 'none';

    doRemovePhoto(imageID);

}



/**
 * Upload Timber Cover Image
 *
 */
function TimberCover()
{
    document.getElementById('TimberUploadCoverImage').click();
}

$('#TimberUploadCoverImage').change(function(){
    //uploadCoverImage(this,'TimberCoverImage','TimberCoverImageRemoveButton','540px');

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
            var image = document.getElementById('TimberCoverImage');
            var removeButton = document.getElementById('TimberCoverImageRemoveButton');
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
                    doUploadFile(file,'TimberCoverImage', '', 'TimberCoverImageRemoveButton', '','','cover image','','','','','100%','100%');

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

/**
 * Remove Timber Cover Image
 *
 */
function RemoveTimberCoverImage(){

    var imageSelect = '#' + 'TimberCoverImage';
    $(imageSelect).attr('src', '#');
    var image = document.getElementById('TimberCoverImage');
    var button = document.getElementById('TimberCoverImageRemoveButton');

    button.style.display = 'none';
    image.style.width = '0px';

    doRemovePhoto('TimberCoverImage');
}



function TimberSummaryUploadImages() {
     var imageIDs = $("#TimberSummaryImages form");
    console.log(imageIDs);
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    document.getElementById('TimberSummaryUploadImages').click();
}

function TimberRecommendationUploadImages() {
     var imageIDs = $("#TimberRecommendationTable form");
    console.log(imageIDs);
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    document.getElementById('TimberRecommendationUploadImages').click();
}

function TimberSiteUploadImages() {
    var imageIDs = $("#TimberSiteImages form");
    console.log(imageIDs);
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    document.getElementById('TimberSiteUploadImages').click();
}

function TimberExteriorUploadImages() {
    var imageIDs = $("#TimberExteriorImages form");
    console.log(imageIDs);
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    document.getElementById('TimberExteriorUploadImages').click();
}

function TimberInteriorUploadImages() {
    var imageIDs = $("#TimberInteriorImages form");
    console.log(imageIDs);
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    document.getElementById('TimberInteriorUploadImages').click();
}

function TimberRoofUploadImages() {
    var imageIDs = $("#TimberRoofImages form");
    console.log(imageIDs);
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    document.getElementById('TimberRoofUploadImages').click();
}

function TimberSubfloorUploadImages() {
    var imageIDs = $("#TimberSubfloorImages form");
    console.log(imageIDs);
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    document.getElementById('TimberSubfloorUploadImages').click();
}



$("#TimberSummaryUploadImages").change(function () {
    read3ImagesURL(this, 'AddTimberSummaryImageButton0', 'AddTimberSummaryImageButton1', 'AddTimberSummaryImageButton2', 'TimberSummaryImage0', 'TimberSummaryImage1', 'TimberSummaryImage2', 'TimberSummaryImageText0', 'TimberSummaryImageText1', 'TimberSummaryImageText2', 'TimberSummaryRemoveButton0', 'TimberSummaryRemoveButton1', 'TimberSummaryRemoveButton2');
});
$("#TimberRecommendationUploadImages").change(function () {
    read3ImagesURL(this, 'AddTimberRecommendationImageButton0', 'AddTimberRecommendationImageButton1', 'AddTimberRecommendationImageButton2', 'TimberRecommendationImage0', 'TimberRecommendationImage1', 'TimberRecommendationImage2', 'TimberRecommendationImageText0', 'TimberRecommendationImageText1', 'TimberRecommendationImageText2', 'TimberRecommendationRemoveButton0', 'TimberRecommendationRemoveButton1', 'TimberRecommendationRemoveButton2');
});
$("#TimberSiteUploadImages").change(function () {
    read3ImagesURL(this, 'AddTimberSiteImageButton0', 'AddTimberSiteImageButton1', 'AddTimberSiteImageButton2', 'TimberSiteImage0', 'TimberSiteImage1', 'TimberSiteImage2', 'TimberSiteImageText0', 'TimberSiteImageText1', 'TimberSiteImageText2', 'TimberSiteRemoveButton0', 'TimberSiteRemoveButton1', 'TimberSiteRemoveButton2');
});
$("#TimberExteriorUploadImages").change(function () {
    read3ImagesURL(this, 'AddTimberExteriorImageButton0', 'AddTimberExteriorImageButton1', 'AddTimberExteriorImageButton2', 'TimberExteriorImage0', 'TimberExteriorImage1', 'TimberExteriorImage2', 'TimberExteriorImageText0', 'TimberExteriorImageText1', 'TimberExteriorImageText2', 'TimberExteriorRemoveButton0', 'TimberExteriorRemoveButton1', 'TimberExteriorRemoveButton2');
});
$("#TimberInteriorUploadImages").change(function () {
    read3ImagesURL(this, 'AddTimberInteriorImageButton0', 'AddTimberInteriorImageButton1', 'AddTimberInteriorImageButton2', 'TimberInteriorImage0', 'TimberInteriorImage1', 'TimberInteriorImage2', 'TimberInteriorImageText0', 'TimberInteriorImageText1', 'TimberInteriorImageText2', 'TimberInteriorRemoveButton0', 'TimberInteriorRemoveButton1', 'TimberInteriorRemoveButton2');
});
$("#TimberRoofUploadImages").change(function () {
    read3ImagesURL(this, 'AddTimberRoofImageButton0', 'AddTimberRoofImageButton1', 'AddTimberRoofImageButton2', 'TimberRoofImage0', 'TimberRoofImage1', 'TimberRoofImage2', 'TimberRoofImageText0', 'TimberRoofImageText1', 'TimberRoofImageText2', 'TimberRoofRemoveButton0', 'TimberRoofRemoveButton1', 'TimberRoofRemoveButton2');
});
$("#TimberSubfloorUploadImages").change(function () {
    read3ImagesURL(this, 'AddTimberSubfloorImageButton0', 'AddTimberSubfloorImageButton1', 'AddTimberSubfloorImageButton2', 'TimberSubfloorImage0', 'TimberSubfloorImage1', 'TimberSubfloorImage2', 'TimberSubfloorImageText0', 'TimberSubfloorImageText1', 'TimberSubfloorImageText2', 'TimberSubfloorRemoveButton0', 'TimberSubfloorRemoveButton1', 'TimberSubfloorRemoveButton2');
});

//Timber - Summary upload one image per time
$("#TimberSummaryUploadImage0").change(function () {
    readOneImageURL(this, 'TimberSummaryImage0', 'AddTimberSummaryImageButton0', 'TimberSummaryRemoveButton0', 'TimberSummaryImageText0', '265px','AddTimberSummaryImageButton1');
});
$("#TimberSummaryUploadImage1").change(function () {
    readOneImageURL(this, 'TimberSummaryImage1', 'AddTimberSummaryImageButton1', 'TimberSummaryRemoveButton1', 'TimberSummaryImageText1', '265px','AddTimberSummaryImageButton2');
});
$("#TimberSummaryUploadImage2").change(function () {
    readOneImageURL(this, 'TimberSummaryImage2', 'AddTimberSummaryImageButton2', 'TimberSummaryRemoveButton2', 'TimberSummaryImageText2', '265px','');
});

//Timber-Recommendation upload one image per time
$("#TimberRecommendationUploadImage0").change(function () {
    readOneImageURL(this, 'TimberRecommendationImage0', 'AddTimberRecommendationImageButton0', 'TimberRecommendationRemoveButton0', 'TimberRecommendationImageText0', '265px','AddTimberRecommendationImageButton1');
});
$("#TimberRecommendationUploadImage1").change(function () {

    readOneImageURL(this, 'TimberRecommendationImage1', 'AddTimberRecommendationImageButton1', 'TimberRecommendationRemoveButton1', 'TimberRecommendationImageText1', '265px','AddTimberRecommendationImageButton2');
});
$("#TimberRecommendationUploadImage2").change(function () {

    readOneImageURL(this, 'TimberRecommendationImage2', 'AddTimberRecommendationImageButton2', 'TimberRecommendationRemoveButton2', 'TimberRecommendationImageText2', '265px','');
});

//Timber - Site upload one image per time
$("#TimberSiteUploadImage0").change(function () {
    readOneImageURL(this, 'TimberSiteImage0', 'AddTimberSiteImageButton0', 'TimberSiteRemoveButton0', 'TimberSiteImageText0', '265px','AddTimberSiteImageButton1');
});
$("#TimberSiteUploadImage1").change(function () {
    readOneImageURL(this, 'TimberSiteImage1', 'AddTimberSiteImageButton1', 'TimberSiteRemoveButton1', 'TimberSiteImageText1', '265px','AddTimberSiteImageButton2');
});
$("#TimberSiteUploadImage2").change(function () {
    readOneImageURL(this, 'TimberSiteImage2', 'AddTimberSiteImageButton2', 'TimberSiteRemoveButton2', 'TimberSiteImageText2', '265px','');
});

//Timber - Exterior upload one image per time
$("#TimberExteriorUploadImage0").change(function () {
    readOneImageURL(this, 'TimberExteriorImage0', 'AddTimberExteriorImageButton0', 'TimberExteriorRemoveButton0', 'TimberExteriorImageText0', '265px','AddTimberExteriorImageButton1');
});
$("#TimberExteriorUploadImage1").change(function () {
    readOneImageURL(this, 'TimberExteriorImage1', 'AddTimberExteriorImageButton1', 'TimberExteriorRemoveButton1', 'TimberExteriorImageText1', '265px','AddTimberExteriorImageButton2');
});
$("#TimberExteriorUploadImage2").change(function () {
    readOneImageURL(this, 'TimberExteriorImage2', 'AddTimberExteriorImageButton2', 'TimberExteriorRemoveButton2', 'TimberExteriorImageText2', '265px','');
});

//Timber - Interior upload one image per time
$("#TimberInteriorUploadImage0").change(function () {
    readOneImageURL(this, 'TimberInteriorImage0', 'AddTimberInteriorImageButton0', 'TimberInteriorRemoveButton0', 'TimberInteriorImageText0', '265px','AddTimberInteriorImageButton1');
});
$("#TimberInteriorUploadImage1").change(function () {
    readOneImageURL(this, 'TimberInteriorImage1', 'AddTimberInteriorImageButton1', 'TimberInteriorRemoveButton1', 'TimberInteriorImageText1', '265px','AddTimberInteriorImageButton2');
});
$("#TimberInteriorUploadImage2").change(function () {
    readOneImageURL(this, 'TimberInteriorImage2', 'AddTimberInteriorImageButton2', 'TimberInteriorRemoveButton2', 'TimberInteriorImageText2', '265px','');
});

//Timber - Roof space upload one image per time
$("#TimberRoofUploadImage0").change(function () {
    readOneImageURL(this, 'TimberRoofImage0', 'AddTimberRoofImageButton0', 'TimberRoofRemoveButton0', 'TimberRoofImageText0', '265px','AddTimberRoofImageButton1');
});
$("#TimberRoofUploadImage1").change(function () {
    readOneImageURL(this, 'TimberRoofImage1', 'AddTimberRoofImageButton1', 'TimberRoofRemoveButton1', 'TimberRoofImageText1', '265px','AddTimberRoofImageButton2');
});
$("#TimberRoofUploadImage2").change(function () {
    readOneImageURL(this, 'TimberRoofImage2', 'AddTimberRoofImageButton2', 'TimberRoofRemoveButton2', 'TimberRoofImageText2', '265px','');
});

//Timber - Sub Floor upload one image per time
$("#TimberSubfloorUploadImage0").change(function () {
    readOneImageURL(this, 'TimberSubfloorImage0', 'AddTimberSubfloorImageButton0', 'TimberSubfloorRemoveButton0', 'TimberSubfloorImageText0', '265px','AddTimberSubfloorImageButton1');
});
$("#TimberSubfloorUploadImage1").change(function () {
    readOneImageURL(this, 'TimberSubfloorImage1', 'AddTimberSubfloorImageButton1', 'TimberSubfloorRemoveButton1', 'TimberSubfloorImageText1', '265px','AddTimberSubfloorImageButton2');
});
$("#TimberSubfloorUploadImage2").change(function () {
    readOneImageURL(this, 'TimberSubfloorImage2', 'AddTimberSubfloorImageButton2', 'TimberSubfloorRemoveButton2', 'TimberSubfloorImageText2', '265px','');
});


//button trigger events Only upload one image，“add" button
function AddTimberSummaryImage0() {
    document.getElementById('TimberSummaryUploadImage0').click();
}

function AddTimberSummaryImage1() {
    document.getElementById('TimberSummaryUploadImage1').click();
}

function AddTimberSummaryImage2() {
    document.getElementById('TimberSummaryUploadImage2').click();
}

function AddTimberRecommendationImage0() {
    document.getElementById('TimberRecommendationUploadImage0').click();
}

function AddTimberRecommendationImage1() {
    document.getElementById('TimberRecommendationUploadImage1').click();
}

function AddTimberRecommendationImage2() {
    document.getElementById('TimberRecommendationUploadImage2').click();
}


function AddTimberSiteImage0() {
    document.getElementById('TimberSiteUploadImage0').click();
}

function AddTimberSiteImage1() {
    document.getElementById('TimberSiteUploadImage1').click();
}

function AddTimberSiteImage2() {
    document.getElementById('TimberSiteUploadImage2').click();
}

function AddTimberExteriorImage0() {
    document.getElementById('TimberExteriorUploadImage0').click();
}

function AddTimberExteriorImage1() {
    document.getElementById('TimberExteriorUploadImage1').click();
}

function AddTimberExteriorImage2() {
    document.getElementById('TimberExteriorUploadImage2').click();
}

function AddTimberInteriorImage0() {
    document.getElementById('TimberInteriorUploadImage0').click();
}

function AddTimberInteriorImage1() {
    document.getElementById('TimberInteriorUploadImage1').click();
}

function AddTimberInteriorImage2() {
    document.getElementById('TimberInteriorUploadImage2').click();
}

function AddTimberRoofImage0() {
    document.getElementById('TimberRoofUploadImage0').click();
}

function AddTimberRoofImage1() {
    document.getElementById('TimberRoofUploadImage1').click();
}

function AddTimberRoofImage2() {
    document.getElementById('TimberRoofUploadImage2').click();
}

function AddTimberSubfloorImage0() {
    document.getElementById('TimberSubfloorUploadImage0').click();
}

function AddTimberSubfloorImage1() {
    document.getElementById('TimberSubfloorUploadImage1').click();
}

function AddTimberSubfloorImage2() {
    document.getElementById('TimberSubfloorUploadImage2').click();
}



function RemoveTimberSummaryImage0() {
    RemoveImage('TimberSummaryImage0', 'TimberSummaryRemoveButton0', 'AddTimberSummaryImageButton0','TimberSummaryImageText0');

}
function RemoveTimberSummaryImage1() {
    RemoveImage('TimberSummaryImage1', 'TimberSummaryRemoveButton1', 'AddTimberSummaryImageButton1','TimberSummaryImageText1');

}

function RemoveTimberSummaryImage2() {
    RemoveImage('TimberSummaryImage2', 'TimberSummaryRemoveButton2', 'AddTimberSummaryImageButton2','TimberSummaryImageText2');
}


function RemoveTimberSiteImage0() {
    RemoveImage('TimberSiteImage0', 'TimberSiteRemoveButton0', 'AddTimberSiteImageButton0','TimberSiteImageText0');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberSiteImage1() {
    RemoveImage('TimberSiteImage1', 'TimberSiteRemoveButton1', 'AddTimberSiteImageButton1','TimberSiteImageText1');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberSiteImage2() {
    RemoveImage('TimberSiteImage2', 'TimberSiteRemoveButton2', 'AddTimberSiteImageButton2','TimberSiteImageText2');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberExteriorImage0() {
    RemoveImage('TimberExteriorImage0', 'TimberExteriorRemoveButton0', 'AddTimberExteriorImageButton0','TimberExteriorImageText0');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberExteriorImage1() {
    RemoveImage('TimberExteriorImage1', 'TimberExteriorRemoveButton1', 'AddTimberExteriorImageButton1','TimberExteriorImageText1');
}

function RemoveTimberExteriorImage2() {
    RemoveImage('TimberExteriorImage2', 'TimberExteriorRemoveButton2', 'AddTimberExteriorImageButton2','TimberExteriorImageText2');
}

function RemoveTimberInteriorImage0() {

    RemoveImage('TimberInteriorImage0', 'TimberInteriorRemoveButton0', 'AddTimberInteriorImageButton0','TimberInteriorImageText0');
}

function RemoveTimberInteriorImage1() {
    RemoveImage('TimberInteriorImage1', 'TimberInteriorRemoveButton1', 'AddTimberInteriorImageButton1','TimberInteriorImageText1');
}

function RemoveTimberInteriorImage2() {
    RemoveImage('TimberInteriorImage2', 'TimberInteriorRemoveButton2', 'AddTimberInteriorImageButton2','TimberInteriorImageText2');
}

function RemoveTimberRoofImage0() {
    RemoveImage('TimberRoofImage0', 'TimberRoofRemoveButton0', 'AddTimberRoofImageButton0','TimberRoofImageText0');
}

function RemoveTimberRoofImage1() {
    RemoveImage('TimberRoofImage1', 'TimberRoofRemoveButton1', 'AddTimberRoofImageButton1','TimberRoofImageText1');
}

function RemoveTimberRoofImage2() {
    RemoveImage('TimberRoofImage2', 'TimberRoofRemoveButton2', 'AddTimberRoofImageButton2','TimberRoofImageText2');
}

function RemoveTimberSubfloorImage0() {
    RemoveImage('TimberSubfloorImage0', 'TimberSubfloorRemoveButton0', 'AddTimberSubfloorImageButton0','TimberSubfloorImageText0');
}

function RemoveTimberSubfloorImage1() {
    RemoveImage('TimberSubfloorImage1', 'TimberSubfloorRemoveButton1', 'AddTimberSubfloorImageButton1','TimberSubfloorImageText1');
}

function RemoveTimberSubfloorImage2() {
    RemoveImage('TimberSubfloorImage2', 'TimberSubfloorRemoveButton2', 'AddTimberSubfloorImageButton2','TimberSubfloorImageText2');
}

function RemoveTimberRecommendationImage0() {
    RemoveImage('TimberRecommendationImage0', 'TimberRecommendationRemoveButton0', 'AddTimberRecommendationImageButton0','TimberRecommendationImageText0');
}

function RemoveTimberRecommendationImage1() {
    RemoveImage('TimberRecommendationImage1', 'TimberRecommendationRemoveButton1', 'AddTimberRecommendationImageButton1','TimberRecommendationImageText1');
}

function RemoveTimberRecommendationImage2() {
    RemoveImage('TimberRecommendationImage2', 'TimberRecommendationRemoveButton2', 'AddTimberRecommendationImageButton2','TimberRecommendationImageText2');
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
