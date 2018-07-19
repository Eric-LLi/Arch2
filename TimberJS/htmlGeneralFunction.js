//Fafa create 2018-1-15

var firstRemoveTimberSummary3rd = true;
var firstRemoveTimberSite3rd = true;
var firstRemoveTimberExteriro3rd = true;
var firstRemoveTimberInterior3rd = true;
var firstRemoveTimberRoof3rd = true;
var firstRemoveTimberSubfloor3rd = true;
var firstRemoveTimberRecommendation3rd = true;
function onload()
{
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
    addNewImageForm("Summary");
    addNewImageForm("Site");
    addNewImageForm("Exterior");
    addNewImageForm("Interior");
    addNewImageForm("Roof");
    addNewImageForm("Subfloor");
    addNewImageForm("Recommendation");
}
function reorderImages(divid)
{
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
    for (var i=0;i<totalContainers.length;i++)
    {
       BigContainer.appendChild(totalContainers[i]);
    }
}
function automaticNumbering(divid)
{
    //console.log("need to refresh the image number");
    var totalContainers = $('#'+divid).find('> form');
    //console.log(totalContainers);
    for(var i=0;i<totalContainers.length;i++)
    {
        //console.log(i);
        //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
        totalContainers.eq(i).children('div').eq(1).children('label').get(0).innerHTML = "IMG " + (i+1);
    }
}

function addNewImageForm(section)
{
    maxImage = 3;
    var idGroup = [];
    var addFunction = "AddOneImage(this.id,'" + section + "')";
    var removeFunction = "RemoveOneImage(this.id,'" + section + "')";

    var totalContainers = $('#Timber'+section+'Photographs').find('> form');
    console.log("the current form in the report"+'Timber'+section+'Photographs is ' + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
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
        var nextImageID = 'Timber'+section+'Image' + newID;
        var nextTextID = 'Timber'+section+'ImageText' + newID;
        var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
        var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
        var nextUploadID = 'Timber'+section+'UploadImage' + newID;
        addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
        removeFunction, addFunction, '340px', '340px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
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
            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function (canvas) {
                var base64data = canvas.toDataURL(imageType);
                //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                image.setAttribute('src', base64data);
                removeButton.style.display = 'block';
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
                doUploadFile(file, 'TimberCoverImage', '', 'TimberCoverImageRemoveButton', '', '', 'cover image', '', '', '', '', '100%', '100%');

            }, {
                canvas: true,
                orientation: orientation,
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

    button.style.display = 'none';
    image.style.display = 'none';

    doRemovePhoto('TimberCoverImage');
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
    //read3ImagesURL(this, 'AddTimberSummaryImageButton0', 'AddTimberSummaryImageButton1', 'AddTimberSummaryImageButton2', 'TimberSummaryImage0', 'TimberSummaryImage1', 'TimberSummaryImage2', 'TimberSummaryImageText0', 'TimberSummaryImageText1', 'TimberSummaryImageText2', 'TimberSummaryRemoveButton0', 'TimberSummaryRemoveButton1', 'TimberSummaryRemoveButton2');
    firstRemoveTimberSummary3rd = true;
    var imageIDs = $("#TimberSummaryPhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#TimberSummaryPhotographs").empty();
    var table = document.getElementById("TimberSummaryImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 3) {
        alert("You can only select 3 images. It will only display the first 3 photos");
    }

    if(count < 3)
    {
        for (let i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'image ' + nameID;
                    var imageID = 'TimberSummaryImage' + ii;
                    var textID = 'TimberSummaryImageText' + ii;
                    var removeButtonID = 'TimberSummaryRemoveButton' + ii;
                    var addButtonID = 'AddTimberSummaryImageButton' + ii;
                    var uploadID = 'TimberSummaryUploadImage' + ii;
                    var imgLabelID = "TimberSummaryImageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberSummaryPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        "RemoveOneImage(this.id,'Summary')", "AddOneImage(this.id,'Summary')", '340px', '340px','TimberSummaryImageForm','TimberSummaryImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberSummaryImagesTable',altName,'TimberSummaryPhotographs',uploadID,"RemoveOneImage(this.id,'Summary')", "AddOneImage(this.id,'Summary')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'TimberSummaryImage' + count;
            var textID = 'TimberSummaryImageText' + count;
            var removeButtonID = 'TimberSummaryRemoveButton' + count;
            var addButtonID = 'AddTimberSummaryImageButton' + count;
            var uploadID = 'TimberSummaryUploadImage' + count;
            addImageElements(altName, 'TimberSummaryPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
            "RemoveOneImage(this.id,'Summary')", "AddOneImage(this.id,'Summary')", '340px', '0px','TimberSummaryImageForm','TimberSummaryImageCaption');
            automaticNumbering('TimberSummaryPhotographs');

        },1500);
    }
    else
    {
        for (let i = 0; i<3;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'TimberSummaryImage' + ii;
                    var textID = 'TimberSummaryImageText' + ii;
                    var removeButtonID = 'TimberSummaryRemoveButton' + ii;
                    var addButtonID = 'AddTimberSummaryImageButton' + ii;
                    var uploadID = 'TimberSummaryUploadImage' + ii;
                    var imgLabelID = "TimberSummaryImageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberSummaryPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                    "RemoveOneImage(this.id,'Summary')", "AddOneImage(this.id,'Summary')", '340px', '340px','TimberSummaryImageForm','TimberSummaryImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberSummaryImagesTable',altName,'TimberSummaryPhotographs',uploadID,"RemoveOneImage(this.id,'Summary')", "AddOneImage(this.id,'Summary')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
        setTimeout(function(){
            automaticNumbering('TimberSummaryPhotographs');
        },1000);
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
    //read3ImagesURL(this, 'AddTimberSiteImageButton0', 'AddTimberSiteImageButton1', 'AddTimberSiteImageButton2', 'TimberSiteImage0', 'TimberSiteImage1', 'TimberSiteImage2', 'TimberSiteImageText0', 'TimberSiteImageText1', 'TimberSiteImageText2', 'TimberSiteRemoveButton0', 'TimberSiteRemoveButton1', 'TimberSiteRemoveButton2');
    firstRemoveTimberSite3rd = true;
    var imageIDs = $("#TimberSitePhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#TimberSitePhotographs").empty();
    var table = document.getElementById("TimberSiteImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 3) {
        alert("You can only select 3 images. It will only display the first 3 photos");
    }

    if(count < 3)
    {
        for (let i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'image ' + nameID;
                    var imageID = 'TimberSiteImage' + ii;
                    var textID = 'TimberSiteImageText' + ii;
                    var removeButtonID = 'TimberSiteRemoveButton' + ii;
                    var addButtonID = 'AddTimberSiteImageButton' + ii;
                    var uploadID = 'TimberSiteUploadImage' + ii;
                    var imgLabelID = "TimberSiteImageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberSitePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                    "RemoveOneImage(this.id,'Site')", "AddOneImage(this.id,'Site')", '340px', '340px','TimberSiteImageForm','TimberSiteImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberSiteImagesTable',altName,'TimberSitePhotographs',uploadID,"RemoveOneImage(this.id,'Site')", "AddOneImage(this.id,'Site')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'TimberSiteImage' + count;
            var textID = 'TimberSiteImageText' + count;
            var removeButtonID = 'TimberSiteRemoveButton' + count;
            var addButtonID = 'AddTimberSiteImageButton' + count;
            var uploadID = 'TimberSiteUploadImage' + count;
            addImageElements(altName, 'TimberSitePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                "RemoveOneImage(this.id,'Site')", "AddOneImage(this.id,'Site')", '340px', '0px','TimberSiteImageForm','TimberSiteImageCaption');
            automaticNumbering('TimberSitePhotographs');

        },1500);
    }
    else
    {
        for (let i = 0; i<3;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'TimberSiteImage' + ii;
                    var textID = 'TimberSiteImageText' + ii;
                    var removeButtonID = 'TimberSiteRemoveButton' + ii;
                    var addButtonID = 'AddTimberSiteImageButton' + ii;
                    var uploadID = 'TimberSiteUploadImage' + ii;
                    var imgLabelID = "TimberSiteImageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberSitePhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        "RemoveOneImage(this.id,'Site')", "AddOneImage(this.id,'Site')", '340px', '340px','TimberSiteImageForm','TimberSiteImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberSiteImagesTable',altName,'TimberSitePhotographs',uploadID,"RemoveOneImage(this.id,'Site')", "AddOneImage(this.id,'Site')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
        setTimeout(function(){
            automaticNumbering('TimberSitePhotographs');
        },1000);
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
    //read3ImagesURL(this, 'AddTimberSiteImageButton0', 'AddTimberSiteImageButton1', 'AddTimberSiteImageButton2', 'TimberSiteImage0', 'TimberSiteImage1', 'TimberSiteImage2', 'TimberSiteImageText0', 'TimberSiteImageText1', 'TimberSiteImageText2', 'TimberSiteRemoveButton0', 'TimberSiteRemoveButton1', 'TimberSiteRemoveButton2');
    firstRemoveTimberExteriro3rd = true;
    var imageIDs = $("#TimberExteriorPhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#TimberExteriorPhotographs").empty();
    var table = document.getElementById("TimberExteriorImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 3) {
        alert("You can only select 3 images. It will only display the first 3 photos");
    }

    if(count < 3)
    {
        for (let i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'image ' + nameID;
                    var imageID = 'TimberExteriorImage' + ii;
                    var textID = 'TimberExteriorImageText' + ii;
                    var removeButtonID = 'TimberExteriorRemoveButton' + ii;
                    var addButtonID = 'AddTimberExteriorImageButton' + ii;
                    var uploadID = 'TimberExteriorUploadImage' + ii;
                    var imgLabelID = "TimberExteriorImageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberExteriorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                    "RemoveOneImage(this.id,'Exterior')", "AddOneImage(this.id,'Exterior')", '340px', '340px','TimberExteriorImageForm','TimberExteriorImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberExteriorImagesTable',altName,'TimberExteriorPhotographs',uploadID,"RemoveOneImage(this.id,'Exterior')", "AddOneImage(this.id,'Exterior')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'TimberExteriorImage' + count;
            var textID = 'TimberExteriorImageText' + count;
            var removeButtonID = 'TimberExteriorRemoveButton' + count;
            var addButtonID = 'AddTimberExteriorImageButton' + count;
            var uploadID = 'TimberExteriorUploadImage' + count;
            addImageElements(altName, 'TimberExteriorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                "RemoveOneImage(this.id,'Exterior')", "AddOneImage(this.id,'Exterior')", '340px', '0px','TimberExteriorImageForm','TimberExteriorImageCaption');
            automaticNumbering('TimberExteriorPhotographs');

        },1500);
    }
    else
    {
        for (let i = 0; i<3;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'TimberExteriorImage' + ii;
                    var textID = 'TimberExteriorImageText' + ii;
                    var removeButtonID = 'TimberExteriorRemoveButton' + ii;
                    var addButtonID = 'AddTimberExteriorImageButton' + ii;
                    var uploadID = 'TimberExteriorUploadImage' + ii;
                    var imgLabelID = "TimberExteriorImageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberExteriorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        "RemoveOneImage(this.id,'Exterior')", "AddOneImage(this.id,'Exterior')", '340px', '340px','TimberExteriorImageForm','TimberExteriorImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberExteriorImagesTable',altName,'TimberExteriorPhotographs',uploadID,"RemoveOneImage(this.id,'Exterior')", "AddOneImage(this.id,'Exterior')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
        setTimeout(function(){
            automaticNumbering('TimberExteriorPhotographs');
        },1000);
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
    //read3ImagesURL(this, 'AddTimberSiteImageButton0', 'AddTimberSiteImageButton1', 'AddTimberSiteImageButton2', 'TimberSiteImage0', 'TimberSiteImage1', 'TimberSiteImage2', 'TimberSiteImageText0', 'TimberSiteImageText1', 'TimberSiteImageText2', 'TimberSiteRemoveButton0', 'TimberSiteRemoveButton1', 'TimberSiteRemoveButton2');
    firstRemoveTimberInterior3rd = true;
    var imageIDs = $("#TimberInteriorPhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#TimberInteriorPhotographs").empty();
    var table = document.getElementById("TimberInteriorImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 3) {
        alert("You can only select 3 images. It will only display the first 3 photos");
    }

    if(count < 3)
    {
        for (let i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'image ' + nameID;
                    var imageID = 'TimberInteriorImage' + ii;
                    var textID = 'TimberInteriorImageText' + ii;
                    var removeButtonID = 'TimberInteriorRemoveButton' + ii;
                    var addButtonID = 'AddTimberInteriorImageButton' + ii;
                    var uploadID = 'TimberInteriorUploadImage' + ii;
                    var imgLabelID = "TimberInteriorImageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberInteriorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                    "RemoveOneImage(this.id,'Interior')", "AddOneImage(this.id,'Interior')", '340px', '340px','TimberInteriorImageForm','TimberInteriorImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberInteriorImagesTable',altName,'TimberInteriorPhotographs',uploadID,"RemoveOneImage(this.id,'Interior')", "AddOneImage(this.id,'Interior')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'TimberInteriorImage' + count;
            var textID = 'TimberInteriorImageText' + count;
            var removeButtonID = 'TimberInteriorRemoveButton' + count;
            var addButtonID = 'AddTimberInteriorImageButton' + count;
            var uploadID = 'TimberInteriorUploadImage' + count;
            addImageElements(altName, 'TimberInteriorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                "RemoveOneImage(this.id,'Interior')", "AddOneImage(this.id,'Interior')", '340px', '0px','TimberInteriorImageForm','TimberInteriorImageCaption');
            automaticNumbering('TimberInteriorPhotographs');

        },1500);
    }
    else
    {
        for (let i = 0; i<3;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'TimberInteriorImage' + ii;
                    var textID = 'TimberInteriorImageText' + ii;
                    var removeButtonID = 'TimberInteriorRemoveButton' + ii;
                    var addButtonID = 'AddTimberInteriorImageButton' + ii;
                    var uploadID = 'TimberInteriorUploadImage' + ii;
                    var imgLabelID = "TimberInteriorImageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberInteriorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        "RemoveOneImage(this.id,'Interior')", "AddOneImage(this.id,'Interior')", '340px', '340px','TimberInteriorImageForm','TimberInteriorImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberInteriorImagesTable',altName,'TimberInteriorPhotographs',uploadID,"RemoveOneImage(this.id,'Interior')", "AddOneImage(this.id,'Interior')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
        setTimeout(function(){
            automaticNumbering('TimberInteriorPhotographs');
        },1000);
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
    //read3ImagesURL(this, 'AddTimberSiteImageButton0', 'AddTimberSiteImageButton1', 'AddTimberSiteImageButton2', 'TimberSiteImage0', 'TimberSiteImage1', 'TimberSiteImage2', 'TimberSiteImageText0', 'TimberSiteImageText1', 'TimberSiteImageText2', 'TimberSiteRemoveButton0', 'TimberSiteRemoveButton1', 'TimberSiteRemoveButton2');
    firstRemoveTimberInterior3rd = true;
    var imageIDs = $("#TimberRoofPhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#TimberRoofPhotographs").empty();
    var table = document.getElementById("TimberRoofImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 3) {
        alert("You can only select 3 images. It will only display the first 3 photos");
    }

    if(count < 3)
    {
        for (let i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'image ' + nameID;
                    var imageID = 'TimberRoofImage' + ii;
                    var textID = 'TimberRoofImageText' + ii;
                    var removeButtonID = 'TimberRoofRemoveButton' + ii;
                    var addButtonID = 'AddTimberRoofImageButton' + ii;
                    var uploadID = 'TimberRoofUploadImage' + ii;
                    var imgLabelID = "TimberRoofImageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberRoofPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                    "RemoveOneImage(this.id,'Roof')", "AddOneImage(this.id,'Roof')", '340px', '340px','TimberRoofImageForm','TimberRoofImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberRoofImagesTable',altName,'TimberRoofPhotographs',uploadID,"RemoveOneImage(this.id,'Roof')", "AddOneImage(this.id,'Roof')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'TimberRoofImage' + count;
            var textID = 'TimberRoofImageText' + count;
            var removeButtonID = 'TimberRoofRemoveButton' + count;
            var addButtonID = 'AddTimberRoofImageButton' + count;
            var uploadID = 'TimberRoofrUploadImage' + count;
            addImageElements(altName, 'TimberRoofPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                "RemoveOneImage(this.id,'Roof')", "AddOneImage(this.id,'Roof')", '340px', '0px','TimberRoofImageForm','TimberRoofImageCaption');
            automaticNumbering('TimberRoofPhotographs');

        },1500);
    }
    else
    {
        for (let i = 0; i<3;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'TimberRoofImage' + ii;
                    var textID = 'TimberRoofImageText' + ii;
                    var removeButtonID = 'TimberRoofRemoveButton' + ii;
                    var addButtonID = 'AddTimberRoofImageButton' + ii;
                    var uploadID = 'TimberRoofUploadImage' + ii;
                    var imgLabelID = "TimberRoofImageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberRoofPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        "RemoveOneImage(this.id,'Roof')", "AddOneImage(this.id,'Roof')", '340px', '340px','TimberRoofImageForm','TimberRoofImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberRoofImagesTable',altName,'TimberRoofPhotographs',uploadID,"RemoveOneImage(this.id,'Roof')", "AddOneImage(this.id,'Roof')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
        setTimeout(function(){
            automaticNumbering('TimberRoofPhotographs');
        },1000);
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
    //read3ImagesURL(this, 'AddTimberSiteImageButton0', 'AddTimberSiteImageButton1', 'AddTimberSiteImageButton2', 'TimberSiteImage0', 'TimberSiteImage1', 'TimberSiteImage2', 'TimberSiteImageText0', 'TimberSiteImageText1', 'TimberSiteImageText2', 'TimberSiteRemoveButton0', 'TimberSiteRemoveButton1', 'TimberSiteRemoveButton2');
    firstRemoveTimberInterior3rd = true;
    var imageIDs = $("#TimberSubfloorPhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#TimberSubfloorPhotographs").empty();
    var table = document.getElementById("TimberSubfloorImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 3) {
        alert("You can only select 3 images. It will only display the first 3 photos");
    }

    if(count < 3)
    {
        for (let i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'image ' + nameID;
                    var imageID = 'TimberSubfloorImage' + ii;
                    var textID = 'TimberSubfloorImageText' + ii;
                    var removeButtonID = 'TimberSubfloorRemoveButton' + ii;
                    var addButtonID = 'AddTimberSubfloorImageButton' + ii;
                    var uploadID = 'TimberSubfloorUploadImage' + ii;
                    var imgLabelID = "TimberSubfloorImageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberSubfloorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                    "RemoveOneImage(this.id,'Subfloor')", "AddOneImage(this.id,'Subfloor')", '340px', '340px','TimberSubfloorImageForm','TimberSubfloorImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberSubfloorImagesTable',altName,'TimberSubfloorPhotographs',uploadID,"RemoveOneImage(this.id,'Subfloor')", "AddOneImage(this.id,'Subfloor')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'TimberSubfloorImage' + count;
            var textID = 'TimberSubfloorImageText' + count;
            var removeButtonID = 'TimberSubfloorRemoveButton' + count;
            var addButtonID = 'AddTimberSubfloorImageButton' + count;
            var uploadID = 'TimberSubfloorUploadImage' + count;
            addImageElements(altName, 'TimberSubfloorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                "RemoveOneImage(this.id,'Subfloor')", "AddOneImage(this.id,'Subfloor')", '340px', '0px','TimberSubfloorImageForm','TimberSubfloorImageCaption');
            automaticNumbering('TimberSubfloorPhotographs');

        },1500)
    }
    else
    {
        for (let i = 0; i<3;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'TimberSubfloorImage' + ii;
                    var textID = 'TimberSubfloorImageText' + ii;
                    var removeButtonID = 'TimberSubfloorRemoveButton' + ii;
                    var addButtonID = 'AddTimberSubfloorImageButton' + ii;
                    var uploadID = 'TimberSubfloorUploadImage' + ii;
                    var imgLabelID = "TimberSubfloorImageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberSubfloorPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        "RemoveOneImage(this.id,'Subfloor')", "AddOneImage(this.id,'Subfloor')", '340px', '340px','TimberSubfloorImageForm','TimberSubfloorImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberSubfloorImagesTable',altName,'TimberSubfloorPhotographs',uploadID,"RemoveOneImage(this.id,'Subfloor')", "AddOneImage(this.id,'Subfloor')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
        setTimeout(function(){
            automaticNumbering('TimberSubfloorPhotographs');
        },1000);
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
    //read3ImagesURL(this, 'AddTimberSiteImageButton0', 'AddTimberSiteImageButton1', 'AddTimberSiteImageButton2', 'TimberSiteImage0', 'TimberSiteImage1', 'TimberSiteImage2', 'TimberSiteImageText0', 'TimberSiteImageText1', 'TimberSiteImageText2', 'TimberSiteRemoveButton0', 'TimberSiteRemoveButton1', 'TimberSiteRemoveButton2');
    firstRemoveTimberInterior3rd = true;
    var imageIDs = $("#TimberRecommendationPhotographs form");
    for (var i = 0; i < imageIDs.length; i++) {
        var id = imageIDs.eq(i).children("div").eq(0).children("img").attr("id");
        doRemovePhoto(id);
    }
    $("#TimberRecommendationPhotographs").empty();
    var table = document.getElementById("TimberSubfloorImagesTable");
    // table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    if (count > 3) {
        alert("You can only select 3 images. It will only display the first 3 photos");
    }

    if(count < 3)
    {
        for (let i = 0; i<count;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function ()
                {
                    var nameID = ii + 1;
                    var altName = 'image ' + nameID;
                    var imageID = 'TimberRecommendationImage' + ii;
                    var textID = 'TimberRecommendationImageText' + ii;
                    var removeButtonID = 'TimberRecommendationRemoveButton' + ii;
                    var addButtonID = 'AddTimberRecommendationImageButton' + ii;
                    var uploadID = 'TimberRecommendationUploadImage' + ii;
                    var imgLabelID = "TimberRecommendationImageCaption" + ii;
                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberRecommendationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                    "RemoveOneImage(this.id,'Recommendation')", "AddOneImage(this.id,'Recommendation')", '340px', '340px','TimberRecommendationImageForm','TimberRecommendationImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                                doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberRecommendationImagesTable',altName,'TimbeRecommendationPhotographs',uploadID,"RemoveOneImage(this.id,'Recommendation')", "AddOneImage(this.id,'Recommendation')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });

                }, 500);
            }
        }

        setTimeout(function(){
            var altID= count + 1;
            var altName = 'Image' + altID;
            var imageID = 'TimberRecommendationImage' + count;
            var textID = 'TimberRecommendationImageText' + count;
            var removeButtonID = 'TimberRecommendationRemoveButton' + count;
            var addButtonID = 'AddTimberRecommendationImageButton' + count;
            var uploadID = 'TimberRecommendationUploadImage' + count;
            addImageElements(altName, 'TimberRecommendationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                "RemoveOneImage(this.id,'Recommendation')", "AddOneImage(this.id,'Recommendation')", '340px', '0px','TimberRecommendationImageForm','TimberRecommendationImageCaption');
            automaticNumbering('TimberRecommendationPhotographs');

        },1500);
    }
    else
    {
        for (let i = 0; i<3;i++)
        {
            try {
                //noinspection ExceptionCaughtLocallyJS
                throw i;
            }
            catch (ii) {
                setTimeout(function () {
                    var nameID = ii + 1;
                    var altName = 'image' + nameID;
                    var imageID = 'TimberRecommendationImage' + ii;
                    var textID = 'TimberRecommendationImageText' + ii;
                    var removeButtonID = 'TimberRecommendationRemoveButton' + ii;
                    var addButtonID = 'AddTimberRecommendationImageButton' + ii;
                    var uploadID = 'TimberRecommendationUploadImage' + ii;
                    var imgLabelID = "TimberRecommendationImageCaption" + ii;

                    //var removeFunction = 'RemoveDilapidationImage' + ii + '()';


                    addImageElements(altName, 'TimberRecommendationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        "RemoveOneImage(this.id,'Recommendation')", "AddOneImage(this.id,'Recommendation')", '340px', '340px','TimberRecommendationImageForm','TimberRecommendationImageCaption');

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
                                removeButton.style.width = '340px';
                                addButton.style.display = 'none';
                                description.style.display = 'block';
                                image.style.display = 'block';
                                image.style.width = '340px';
                                image.style.height = '340px';
                                document.getElementById(imgLabelID).style.display = 'block';
                                // image.style.height = '250px';
                                var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                                //console.log(file);
                               doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'TimberRecommendationImagesTable',altName,'TimberRecommendationPhotographs',uploadID,"RemoveOneImage(this.id,'Recommendation')", "AddOneImage(this.id,'Recommendation')",'340px','340px');

                            },
                            {
                                canvas: true,
                                orientation: orientation,
                                maxWidth:1000,
                                maxHeight:800
                            }
                        );
                    });
                    //f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = ''
                    //doUploadFile(imageFile[ii],imageID, textID, removeButtonID, addButtonID,'DilapidationImagesTable',altName,'DilapidationPhotographs',uploadID,'RemoveOneDilapidationImage(this.id)','addOneDilapidationImage(this.id)','510px','510px');
                }, 600);
            }
        }
        setTimeout(function(){
            automaticNumbering('TimberRecommendationPhotographs');
        },1000);
    }
});



/*
 General Function for adding one image when the user click the "add" button
 by getting the id of the clicked button
 get the number of the id to generate other ids
 then use readOneImageURL function to add image on specific field.
 */

function AddOneImage(click_id,section)
{
    section = String(section);
    var selectedID = String(click_id).replace ( /[^\d.]/g, '' );
    var idGroup = [];
    console.log("the id " + selectedID);
    var totalContainers = $('#Timber'+section+'Photographs').find('> form');
    console.log("the current total image number is: " + totalContainers.length);
    var imageID = 'Timber'+section+'Image' + selectedID;
    var textID = 'Timber'+section+'ImageText' + selectedID;
    var removeButtonID = 'Timber'+section+'RemoveButton' + selectedID;
    var addButtonID = 'AddTimber'+section+'ImageButton' + selectedID;
    var uploadID = 'Timber'+section+'UploadImage' + selectedID;
    var imgLabelID = 'Timber'+section+'ImageCaption' + selectedID;
    var addFunction = "AddOneImage(this.id,'" + section + "')";
    var removeFunction = "RemoveOneImage(this.id,'" + section + "')";
    nextAltName = 'image ' + selectedID;

    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
        var id = Number(idStr);
        idGroup.push(id);
    }
    //console.log(idGroup);
    idGroup.sort(function(a, b){return a - b;});
    //console.log(idGroup);
    //console.log("the last ID is" + idGroup[idGroup.length-1]);
    var lastID = idGroup[idGroup.length-1];
    console.log("this last id is " + lastID);

    // console.log(uploadID);
    $("#"+uploadID).unbind().click();
    $('#'+uploadID).change(function(){
        if (this.files && this.files[0]) {
            if(totalContainers.length == 3)
            {
                if(totalContainers.length == 3)
                {
                    if(section == "Summary")
                    {
                        console.log("add the last 3rd image, need to reset the firstRemoveTimberSummary3rd");
                        firstRemoveTimberSummary3rd = true;
                    }
                    else if(section == "Site")
                    {
                        console.log("add the last 3rd image, need to reset the firstRemoveTimberSite3rd");
                        firstRemoveTimberSite3rd = true;

                    }
                    else if (section == "Exterior")
                    {
                        console.log("add the last 3rd image, need to reset the firstRemoveTimberExteriro3rd");
                        firstRemoveTimberExteriro3rd = true;

                    }
                    else if (section == "Interior")
                    {
                        console.log("add the last 3rd image, need to reset the firstRemoveTimberInterior3rd");
                        firstRemoveTimberInterior3rd = true;

                    }
                    else if (section == "RoofSpace")
                    {
                        console.log("add the last 3rd image, need to reset the firstRemoveTimberRoof3rd");
                        firstRemoveTimberRoof3rd = true;

                    }
                    else if (section == "Subfloor")
                    {
                        console.log("add the last 3rd image, need to reset the firstRemoveTimberSubfloor3rd");
                        firstRemoveTimberSubfloor3rd = true;

                    }
                    else if (section == "Recommendation")
                    {
                        console.log("add the last 3rd image, need to reset the firstRemoveTimberRecommendation3rd");
                        firstRemoveTimberRecommendation3rd = true;

                    }
                    
                }
            }
            if(totalContainers.length <= 3 )
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
                            removeButton.style.width = '340px';
                            addButton.style.display = 'none';
                            description.style.display = 'block';
                            image.style.display = 'block';
                            image.style.width = '340px';
                            image.style.height = '340px';
                            imageLable.style.display = 'block';
                            // image.style.height = '250px';
                            var file = new File([convertBase64UrlToBlob(base64data,imageType)], imageName, {type: imageType, lastModified:date.getTime()});
                            //console.log(file);
                            doUploadFile(file,imageID, textID, removeButtonID, addButtonID,'Timber'+section+'ImagesTable',nextAltName,'Timber'+section+'Photographs',uploadID,removeFunction,addFunction,'340px','340px');

                        },
                        {
                            canvas: true,
                            orientation: orientation,
                            maxWidth:1000,
                            maxHeight:800
                        }
                    );
                });
                automaticNumbering('Timber'+section+'Photographs');
                if (Number(selectedID) == Number(lastID))
                {
                    if(totalContainers.length < 3)
                    {
                        console.log("you are adding an image to the last id block");
                        var newID = Number(lastID) + 1;
                        var altID = Number(lastID) + 2;
                        nextAltName = 'image ' + altID;
                        console.log("I am here!!! need another image element ,the next id  " + newID);
                        var nextImageID = 'Timber'+section+'Image' + newID;
                        var nextTextID = 'Timber'+section+'ImageText' + newID;
                        var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
                        var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
                        var nextUploadID = 'Timber'+section+'UploadImage' + newID;
                        
                        console.log(addFunction);
                        console.log(removeFunction);
                        addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                       removeFunction,addFunction, '340px', '0px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
                    }
                }
            }
        }
    });
}

function RemoveOneImage(click_id,section)
{
    //section = String(section);
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'Timber'+section+'Image' + id;
    var removeButtonID = 'Timber'+section+'RemoveButton' + id;
    var addButtonID = 'AddTimber'+section+'ImageButton' + id;
    var textID = 'Timber'+section+'ImageText' + id;
    var formID = 'Timber'+section+'ImageForm' + id;
    var totalContainers = $('#Timber'+section+'Photographs').find('> form');
    var idGroup = [];
    console.log("the current total image number is: " + totalContainers.length);
    for (var i = 0; i < totalContainers.length; i++)
    {
        var idStr = totalContainers.eq(i).children('div').eq(0).children('img').attr('id').replace(/[^\d.]/g, '');
        //console.log(idStr);
        let id = Number(idStr);
        idGroup.push(id);
    }
    idGroup.sort(function(a, b){return a - b;});
    var lastID = idGroup[idGroup.length-1];
    console.log("this last id is " + lastID);


    var imageSelect = '#' + imageID;
    $(imageSelect).attr('src', '#');
    var image = document.getElementById(imageID);
    var button = document.getElementById(removeButtonID);
    var addButton = document.getElementById(addButtonID);
    var inputText = document.getElementById(textID);
    var addFunction = "AddOneImage(this.id,'"+section+"')";
    var removeFunction = "RemoveOneImage(this.id,'"+section+"')";
    console.log(addFunction);
    console.log(removeFunction);

    button.style.display = 'none';
    inputText.style.display = 'none';
    addButton.style.display = 'block';

    image.style.width = '0px';
    image.style.display = 'none';
    inputText.value = '';

    doRemovePhoto(imageID);
    $('#' + formID).remove();

    //has 3 images but, remove one, will no additional 'add' button, need to create one
    if(section == "Summary")
    {
        if(totalContainers.length == 3 && firstRemoveTimberSummary3rd == true)
        {
            console.log("need to create a new add button");
            var newID = Number(lastID) + 1;
            var altID = Number(lastID) + 2;
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'Timber'+section+'Image' + newID;
            var nextTextID = 'Timber'+section+'ImageText' + newID;
            var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
            var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
            var nextUploadID = 'Timber'+section+'UploadImage' + newID;
            addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                removeFunction,addFunction, '340px', '0px','TimberSummaryImageForm','TimberSummaryImageCaption');
            firstRemoveTimberSummary3rd = false;
        }
    }
    else if (section == "Site")
    {
        if(totalContainers.length == 3 && firstRemoveTimberSite3rd == true)
        {
            console.log("need to create a new add button");
            var newID = Number(lastID) + 1;
            var altID = Number(lastID) + 2;
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'Timber'+section+'Image' + newID;
            var nextTextID = 'Timber'+section+'ImageText' + newID;
            var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
            var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
            var nextUploadID = 'Timber'+section+'UploadImage' + newID;
            addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            removeFunction,addFunction,'340px', '0px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
            firstRemoveTimberSite3rd = false;
        }
    }
    else if (section == "Exterior")
    {
        if(totalContainers.length == 3 && firstRemoveTimberExteriro3rd == true)
        {
            console.log("need to create a new add button");
            var newID = Number(lastID) + 1;
            var altID = Number(lastID) + 2;
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'Timber'+section+'Image' + newID;
            var nextTextID = 'Timber'+section+'ImageText' + newID;
            var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
            var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
            var nextUploadID = 'Timber'+section+'UploadImage' + newID;
            addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                                removeFunction,addFunction, '340px', '0px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
            firstRemoveTimberExteriro3rd = false;
        }
    }
    else if (section == "Interior")
    {
        if(totalContainers.length == 3 && firstRemoveTimberInterior3rd == true)
        {
            console.log("need to create a new add button");
            var newID = Number(lastID) + 1;
            var altID = Number(lastID) + 2;
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'Timber'+section+'Image' + newID;
            var nextTextID = 'Timber'+section+'ImageText' + newID;
            var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
            var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
            var nextUploadID = 'Timber'+section+'UploadImage' + newID;
            addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            removeFunction,addFunction, '340px', '0px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
           firstRemoveTimberInterior3rd = false;
        }
    }
    else if (section == "Roof")
    {
        if(totalContainers.length == 3 && firstRemoveTimberRoof3rd == true)
        {
            console.log("need to create a new add button");
            var newID = Number(lastID) + 1;
            var altID = Number(lastID) + 2;
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'Timber'+section+'Image' + newID;
            var nextTextID = 'Timber'+section+'ImageText' + newID;
            var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
            var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
            var nextUploadID = 'Timber'+section+'UploadImage' + newID;
            addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                                removeFunction,addFunction, '340px', '0px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
            firstRemoveTimberRoof3rd = false;
        }
    }
    else if (section == "Subfloor")
    {
        if(totalContainers.length == 3 && firstRemoveTimberSubfloor3rd == true)
        {
            console.log("need to create a new add button");
            var newID = Number(lastID) + 1;
            var altID = Number(lastID) + 2;
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'Timber'+section+'Image' + newID;
            var nextTextID = 'Timber'+section+'ImageText' + newID;
            var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
            var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
            var nextUploadID = 'Timber'+section+'UploadImage' + newID;
            addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                                removeFunction,addFunction, '340px', '0px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
            firstRemoveTimberSubfloor3rd = false;
        }
    }
    else if (section == "Recommendation")
    {
        if(totalContainers.length == 3 && firstRemoveTimberRecommendation3rd == true)
        {
            console.log("need to create a new add button");
            var newID = Number(lastID) + 1;
            var altID = Number(lastID) + 2;
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            var nextImageID = 'Timber'+section+'Image' + newID;
            var nextTextID = 'Timber'+section+'ImageText' + newID;
            var nextRemoveButtonID = 'Timber'+section+'RemoveButton' + newID;
            var nextAddButtonID = 'AddTimber'+section+'ImageButton' + newID;
            var nextUploadID = 'Timber'+section+'UploadImage' + newID;
            addImageElements(nextAltName, 'Timber'+section+'Photographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            removeFunction,addFunction, '340px', '0px','Timber'+section+'ImageForm','Timber'+section+'ImageCaption');
            firstRemoveTimberRecommendation3rd = false;
        }
    }
     //update the totalConaintainers after removing one form, If remove all the images one by one, don't leave a signle 'add' button
     totalContainers = $('#Timber'+section+'Photographs').find('> form');
     //console.log(totalContainers);
     //console.log(totalContainers.eq(0).children('div').eq(0).children('img').attr('src'))
     if (totalContainers.length == 1 && typeof totalContainers.eq(0).children('div').eq(0).children('img').attr('src') == 'undefined')
     {
         console.log("it does not have any images, emtpy the div");
         $('#Timber'+section+'Photographs').empty();
         if(section != "Recommendation")
         {
            document.getElementById('Timber'+section+'ImagesTable').style.display = 'none';
         }
     }
     automaticNumbering('Timber'+section+'Photographs');
}

//add an image element into the <form>, need a divID, imageID, imageTextID, uploadID, removeID
function addImageElements(imageAltName, divID, imageID, imageTextID, removeButtonID, addButtonID, uploadFileID, removeFunction, addFunction, imageSize,width,formID,captionID) {
    var currentID = imageID.replace(/[^\d.]/g, '');
    var BigContainer = document.getElementById(divID);
    var form = document.createElement("form");
    //var form = document.createElement("form");
    form.id = formID + currentID;
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
    removeButton.setAttribute("class", "btn btn-danger");
    removeButton.setAttribute("value", "Remove");
    removeButton.setAttribute("onclick", removeFunction);
    removeButton.id = removeButtonID;
    //removeButton.onclick = removeFunction;
    removeButton.style.width = imageSize;
    // removeButton.style.height = "25px";
    removeButton.style.display = "none";


    //create an input for add button
    var addButton = document.createElement('INPUT');
    addButton.setAttribute("type", "button");
    addButton.setAttribute("class", "btn btn-secondary");
    addButton.setAttribute("value", "Add");
    addButton.setAttribute("onclick", addFunction);
    addButton.id = addButtonID;
    addButton.style.width = imageSize;
    // addButton.style.height = "25px";
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
     var imgLabelID = captionID + currentID;
     imgLabel.setAttribute("id", imgLabelID);
     imgLabel.style.display = "none";
     //imgLabel.innerHTML = "IMG " + (Number(currentID)+1);


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
