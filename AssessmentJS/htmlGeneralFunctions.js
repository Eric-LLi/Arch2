/**
 * Created by Fafa on 10/1/18.
 */

var flag = false;
function onload()
{
    automaticNumbering('AccessmentSiteImagesContainer');
}

/**
 *
 * @param tableID
 * @param selectIDName
 * @param noteIDName
 * create access limitation dynamically
 */
function addAccessLimitation(tableID, selectIDName, noteIDName) {
    // console.log(tableID);
    var table = document.getElementById(tableID);
    var rowCount = table.rows.length;
    var id = rowCount - 9;
    // console.log(id);
    var row = table.insertRow(id + 1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);


    //create limitation select options for cell 1
    var limitationOption = ["Reasonably Accessible", "Partially Accessible - Obstructed", "Partially Accessible - Inspection Safety Hazard",
        "Not Accessible - Obstructed", "Not Accessible - Inspection Safety Hazard"
    ];
    var selectList = document.createElement("select");
    selectList.id = selectIDName + id;

    //Create and append the options
    for (var i = 0; i < limitationOption.length; i++) {
        var option = document.createElement("option");
        option.value = limitationOption[i];
        option.text = limitationOption[i];
        selectList.appendChild(option);
    }
    cell1.appendChild(selectList);


    //create the limitation notes for cell2
    var textArea = document.createElement('textarea');
    textArea.setAttribute('class', 'form-control');
    textArea.setAttribute('title', 'limitationNotes');
    textArea.id = noteIDName + id;
    cell2.appendChild(textArea);

}


function addRecommendations(labelID, selectID) {
    var label = document.getElementById(labelID);
    label.value += document.getElementById(selectID).value + ' ';
}

function clearRecommendation(labelID) {
    var label = document.getElementById(labelID);
    label.value = "";
    label.placeholder = "Recommendations will be displayed here";
}


function moreEvidentDefect() {

    var newEDIDNumber;
    var newEDID;
    var div = document.getElementById('evidentDefectSummary');
    var divNumber = $('#evidentDefectSummary').find('> div').length;
    //console.log(divNumber);
    var lastRowIDNo = divNumber - 1;

    var lastRowID = 'EDRow' + lastRowIDNo;
    //console.log(lastRowID);
    var nestDivNumber = document.getElementById(lastRowID).childElementCount;
    //console.log(nestDivNumber);
    if (nestDivNumber === 3) {
        //need to create a new big DIV and a small div contain the label and select option
        var emptyLine = document.createElement('br');
        div.appendChild(emptyLine);
        var newDivID = 'EDRow' + divNumber;
        console.log(newDivID);
        newEDIDNumber = divNumber * 3;
        newEDID = 'ED' + newEDIDNumber;
        console.log(newEDID);

        var newDivRow = document.createElement('div');
        newDivRow.setAttribute('class', 'row');
        newDivRow.id = 'EDRow' + divNumber;
        div.appendChild(newDivRow);

        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'col-sm-4');
        newDiv.id = 'ED' + newEDIDNumber;
        newDivRow.appendChild(newDiv);


        var name = document.createElement('INPUT');
        name.setAttribute('class', 'form-control');
        name.setAttribute('title', 'name');
        name.setAttribute('type', 'text');

        name.id = 'EDName' + newEDIDNumber;
        newDiv.appendChild(name);


        var selectList = document.createElement("select");
        selectList.id = "EDSelect" + newEDIDNumber;
        selectList.style.width = '100%';
        var selectOption = ["✔", "XX", 'X', 'U', 'NA'];
        var selectOptionValue = ["√", "XX", 'X', 'U', 'NA'];
        var selectValue = ["No Visible Significant Defect", "Major Defect", "Maintenance Item or Minor Defect",
            "Unknown / Inaccessible / Not Tested", "Not Applicable; No Such Item"
        ];


        //Create and append the options
        for (var i = 0; i < selectOption.length; i++) {
            var option = document.createElement("option");
            var group = document.createElement('optgroup');
            group.label = selectValue[i];
            option.value = selectOptionValue[i];
            option.text = selectOption[i];
            group.appendChild(option);
            selectList.appendChild(group);
        }

        newDiv.appendChild(selectList);


    } else {
        //just create a new small div and append to the last existing

        var lastDivRow = document.getElementById(lastRowID);
        newEDIDNumber = (divNumber - 1) * 3 + nestDivNumber;
        console.log(newEDIDNumber);
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'col-sm-4');
        newDiv.id = 'ED' + newEDIDNumber;
        lastDivRow.appendChild(newDiv);


        var name = document.createElement('INPUT');
        name.setAttribute('class', 'form-control');
        name.setAttribute('title', 'name');
        name.setAttribute('type', 'text');

        name.id = 'EDName' + newEDIDNumber;
        newDiv.appendChild(name);


        var selectList = document.createElement("select");
        selectList.id = "EDSelect" + newEDIDNumber;
        selectList.style.width = '100%';
        var selectOption = ["✔", "XX", 'X', 'U', 'NA'];
        var selectOptionValue = ["√", "XX", 'X', 'U', 'NA'];
        var selectValue = ["No Visible Significant Defect", "Major Defect", "Maintenance Item or Minor Defect",
            "Unknown / Inaccessible / Not Tested", "Not Applicable; No Such Item"
        ];


        //Create and append the options
        for (var i = 0; i < selectOption.length; i++) {
            var option = document.createElement("option");
            var group = document.createElement('optgroup');
            group.label = selectValue[i];
            option.value = selectOptionValue[i];
            option.text = selectOption[i];
            group.appendChild(option);
            selectList.appendChild(group);
        }

        newDiv.appendChild(selectList);
    }
}


function automaticNumbering(divid)
{
    //console.log("need to refresh the image number");
    var totalContainers = $('#'+divid).find('> form');
    //console.log(totalContainers);
    for(var i=0;i<totalContainers.length;i++)
    {
        //console.log(totalContainers.eq(i).children('label').get(0));
        //console.log(totalContainers.eq(i).children('form').eq(1).children('label').get(0));
        totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i+1);
    }
}




/**
 * Check if Summary of the Condition of the Property selects the [Other] option - BetterTENG

 * */

//Check if summary of the condition of the propery has selected 'othier' show the text area.
function checkReloadOther() {
    if ($("#conditionOfBuilding").val() === "Other") {
        $("#XiaoKe").show();
    } else {
        $("#XiaoKe").hide();
    }
}

function checkIfOther() {
    //    console.log($("#conditionOfBuilding").val());
    if ($("#conditionOfBuilding").val() === "Other") {
        $("#XiaoKe").show();
        return 'otherSelected';
    } else {
        $("#XiaoKe").hide();
        return 'otherNotSelected';
    }
    //    if (document.getElementById('conditionOfBuilding').value == 'Other') {
    //        document.getElementById('XiaoKe').style.display = 'block';
    //        flag = true;
    //        return 'otherSelected';
    //    }
    //    if (flag) {
    //        if (document.getElementById('conditionOfBuilding').value != 'Other') {
    //            document.getElementById('XiaoKe').style.display = 'none';
    //            flag = false;
    //            return 'otherNotSelected';
    //        }
    //    }
    return 'normalCondition';
}


/**
 * Open extra fields for the input, fields have been coded in the html, not create dynamically
 */
function moreSiteGardenBoundaries() {
    var div = document.getElementById('SiteGardenBoundary');
    var button = document.getElementById('moreBoundariesButton');
    // var div2 = document.getElementById('SiteGardenBoundary2');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Boundaries";
    }

}

function moreSiteGardenSheds() {
    var div = document.getElementById('SiteGardenShed');
    var button = document.getElementById('moreShedButton');

    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Garage or Sheds";
    }

}

function morePropertyExteriorWall() {
    var div = document.getElementById('PropertyExteriorWall');
    var button = document.getElementById('morePropertyExteriorWallButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Wall"
    }

}

function morePropertyExteriorVerandas() {
    var div = document.getElementById('PropertyExteriorVerandas');
    var button = document.getElementById('morePropertyExteriorVerandasButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Verandahs"
    }

}

function moreLivingAreaRooms() {
    //    alert("you click add more rooms button LivingAreaRooms moreLivingAreaRoomButton")
    var div = document.getElementById('LivingAreaRooms');
    var button = document.getElementById('moreLivingAreaRoomButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Rooms"
    }
}

function moreLivingAreaStair() {

    var div = document.getElementById('LivingAreaStair2');
    var button = document.getElementById('moreLivingAreaStairButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add One Stair"
    }
}

function moreLivingAreaKitchen() {

    var div = document.getElementById('LivingAreaKitchen2');
    var button = document.getElementById('moreLivingAreaKitchenButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add One Kitchen"
    }
}

function moreBedrooms() {
    var div = document.getElementById('BedroomAreasMoreRooms');
    var button = document.getElementById('moreBedroomsButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Bedrooms"
    }
}

function moreBathrooms() {
    var div = document.getElementById('ServiceAreaBathRooms');
    var button = document.getElementById('moreBathroomsButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Bathroom"
    }

}

function morePowderRooms() {

    var div = document.getElementById('ServiceAreaMorePowderRooms');
    var button = document.getElementById('morePowderRoomsButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Powder Rooms"
    }
}

function moreLaundry() {
    var div = document.getElementById('ServiceAreaMoreLaundry');
    var button = document.getElementById('moreLaundryButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide"
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add One Laundry"
    }
}

/**
 * Images
 */


function AssessmentCoverImage() {
    document.getElementById('AssessmentUploadCoverImage').click();
}
$("#AssessmentUploadCoverImage").change(function () {

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
            var image = document.getElementById('AssessmentCoverImage');
            var removeButton = document.getElementById('AssessmentCoverImageRemoveButton');
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
                doUploadFile(file, 'AssessmentCoverImage', '', 'AssessmentCoverImageRemoveButton', '', '', 'cover image', '', '', '', '', '100%', '100%');

            }, {
                canvas: true,
                orientation: orientation,
                maxWidth: 1300,
                maxHeight: 1000
            });
        });
    }

});

function RemoveAssessmentCoverImage() {
    //RemoveCoverImage('AssessmentCoverImage','AssessmentCoverImageRemoveButton');
    var imageSelect = '#' + 'AssessmentCoverImage';
    $(imageSelect).attr('src', '#');
    var image = document.getElementById('AssessmentCoverImage');
    var button = document.getElementById('AssessmentCoverImageRemoveButton');

    button.style.display = 'none';
    image.style.width = '0px';
    image.style.display = 'none';

    doRemovePhoto('AssessmentCoverImage');
}

//Only upload one image per time
function readOneImageURL(input, imageID0, addButtonID, removeButtonID, textID, imageSize, nextAddButtonID) {
    if (input.files && input.files[0]) {
        var imageFile = input.files[0];
        var imageType = imageFile.type;
        var imageName = imageFile.name;
        var date = new Date();

        if (nextAddButtonID != "") {
            var nextAddButton = document.getElementById(nextAddButtonID);
            if (nextAddButton.style.display == 'none') {
                console.log('button is hidden, need to activate it');
                nextAddButton.style.display = 'block';
            } else {
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
            var loadingImage = loadImage(imageFile, function (canvas) {
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
                var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
                    type: imageType,
                    lastModified: date.getTime()
                });
                doUploadFile(file, imageID0, textID, removeButtonID, addButtonID, '', '', '', '', '', '', imageSize, imageSize);
            }, {
                //should be set to canvas : true to activate auto fix orientation
                canvas: true,
                orientation: orientation,
                maxWidth: 1000,
                maxHeight: 850

            });
        });
    }
}

//Remove images
function DeleteImage(formID, imgID, textID) {
    if (!isEmpty(formID) && !isEmpty(imgID)) {
        $("#" + textID).val("");
        doRemovePhoto(imgID);
        $("#" + formID).remove();
    }
}

function DeleteOneImg(element) {
    doRemovePhoto(element[0]);
    $("#" + element[0]).attr("src", "#");
    $("#" + element[0]).hide();
    $("#" + element[1]).hide();
    $("#" + element[2]).val("");
    $("#" + element[2]).hide();
    $("#" + element[3]).hide();
    $("#" + element[4]).show();

}
var global_Img;

//Add one image
$("#AssessmentSiteSingleImage").on('change', function (e) {
    var file = e.currentTarget.files;
    if (!isEmpty(global_Img) && !isEmpty(file)) {
        var element = global_Img;

        $("#" + element[0]).show();
        $("#" + element[1]).show();
        $("#" + element[2]).val("");
        $("#" + element[2]).show();
        $("#" + element[3]).show();
        $("#" + element[4]).hide();

        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result
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
                    doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentSiteImagesContainer");
                }
            };
            image.src = data;
        };
        reader.readAsDataURL(file[0]);
    }

    setTimeout(function(){
        automaticNumbering('AccessmentSiteImagesContainer');
    },300)
});



function AssessmentSiteUploadImages() {
    document.getElementById('AssessmentSiteUploadImages').click();
}

function AssessmentExteriorUploadImages() {
    var imageIDs = $("#AccessmentExteriorImages img");
    console.log(imageIDs);

    for (var i = 0; i < imageIDs.length; i++) {
        if (imageIDs.eq(i).attr("src") !== "#") {
            var id = imageIDs.eq(i).attr("id");
            console.log(id);
            doRemovePhoto(id);
        }
    }
    document.getElementById('AssessmentExteriorUploadImages').click();
}

function AssessmentInteriorLivingUploadImages() {
    var imageIDs = $("#AccessmentInteriorLivingImages img");
    console.log(imageIDs);

    for (var i = 0; i < imageIDs.length; i++) {
        if (imageIDs.eq(i).attr("src") !== "#") {
            var id = imageIDs.eq(i).attr("id");
            console.log(id);
            doRemovePhoto(id);
        }
    }
    document.getElementById('AssessmentInteriorLivingUploadImages').click();
}

function AssessmentInteriorBedroomUploadImages() {
    var imageIDs = $("#AccessmentInteriorBedroomImages img");
    console.log(imageIDs);

    for (var i = 0; i < imageIDs.length; i++) {
        if (imageIDs.eq(i).attr("src") !== "#") {
            var id = imageIDs.eq(i).attr("id");
            console.log(id);
            doRemovePhoto(id);
        }
    }
    document.getElementById('AssessmentInteriorBedroomUploadImages').click();
}

function AssessmentInteriorServiceUploadImages() {
    var imageIDs = $("#AccessmentInteriorServiceImages img");
    console.log(imageIDs);

    for (var i = 0; i < imageIDs.length; i++) {
        if (imageIDs.eq(i).attr("src") !== "#") {
            var id = imageIDs.eq(i).attr("id");
            console.log(id);
            doRemovePhoto(id);
        }
    }
    document.getElementById('AssessmentInteriorServiceUploadImages').click();
}

function createImagesElements(lastElementID, imgID, labelID = "", labelValue = "", textID, rmBtnID, addBtnID, formID) {
    var id = imgID.split("_")[1],
        form = document.createElement("form"),
        img = document.createElement("img"),
        text = document.createElement("input"),
        rmBtn = document.createElement("input"),
        addBtn = document.createElement("input"),
        label = document.createElement("label");

    form.setAttribute("id", formID);
    form.setAttribute("class", "col text-center my-2");

    img.setAttribute("id", imgID);

    text.setAttribute("id", textID);
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", "name");
    text.style.width = "265px";

    rmBtn.setAttribute("id", rmBtnID);
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.style.width = "265px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("value", "Add");
    addBtn.style.width = "265px";


    label.setAttribute("id", labelID);
    label.style.marginBottom = "0px";
    //label.innerHTML = "IMG_" + id;


    $("#" + lastElementID).append(form);
    $("#" + formID).append(img);
    $("#" + formID).append("<br>");
    $("#" + formID).append(label);
    $("#" + formID).append("<br>");
    $("#" + formID).append(text);
    $("#" + formID).append("<br>");
    $("#" + formID).append(rmBtn);
    $("#" + formID).append(addBtn);

    addBtn.style.display = "none";
    var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID];
    $("#" + rmBtnID).click(function () {
        // DeleteImage(formID, imgID, textID);
        DeleteOneImg(element);
    });
    $("#" + addBtnID).click(function () {
        global_Img = element;
        $("#AssessmentSiteSingleImage").click();
    });
    return element;
}

$('#AssessmentSiteUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentSiteUploadImages").change(function () {
    if (!isEmpty(this.files)) {
        //Check exitsing images
        var imageIDs = $("#AccessmentSiteImagesContainer form");

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentSiteImagesContainer").empty();
        }

        var allImages = [];
        if (this.files.length > 3) {
            alert("You can only selected three images maximum");
            //Only save 3 files.
            for (var i = 0; i < 3; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }

        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            var elementID = parseInt(i) + 1;
            //Create elements
            //[imgID, labelID, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentSiteImagesContainer", "AssessmentSiteImage_" + elementID, "SiteGardenlabel" + elementID, "IMG" + elementID, "AssessmentSiteImageText" + elementID, "AssessmentSiteRemoveButton" + elementID, "AddAssessmentSiteImageButton" + elementID, "SiteGardonForm" + elementID);

            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result
                var image = new Image();

                image.onload = function () {
                    var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#" + element[0]).attr("src", code);

                        var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                            type: file.type,
                            lastModified: file.lastModifiedDate
                        });

                        //f, imageid, textid = '', removeid = '', addid = '', table = '', imageAltName = '', divID = '',uploadID = '', removeFunction = '', addFunction = '', imageSize = '', width = ''
                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentSiteImagesContainer", element[1], element[5]);
                    }
                };
                image.src = data;
            };
            reader.readAsDataURL(file);

        });

        setTimeout(function(){
            automaticNumbering('AccessmentSiteImagesContainer');
        },1000)
        
        // read3ImagesURL(this, 'AddAssessmentSiteImageButton0', 'AddAssessmentSiteImageButton1', 'AddAssessmentSiteImageButton2', 'AssessmentSiteImage0', 'AssessmentSiteImage1', 'AssessmentSiteImage2', 'AssessmentSiteImageText0', 'AssessmentSiteImageText1', 'AssessmentSiteImageText2', 'AssessmentSiteRemoveButton0', 'AssessmentSiteRemoveButton1', 'AssessmentSiteRemoveButton2');
    }
    //  read6ImagesURL(this,'AddAssessmentSiteImageButton0','AddAssessmentSiteImageButton1','AddAssessmentSiteImageButton2','AddAssessmentSiteImageButton3','AddAssessmentSiteImageButton4','AddAssessmentSiteImageButton5','AssessmentSiteImage0','AssessmentSiteImage1','AssessmentSiteImage2','AssessmentSiteImage3','AssessmentSiteImage4','AssessmentSiteImage5','AssessmentSiteImageText0','AssessmentSiteImageText1','AssessmentSiteImageText2','AssessmentSiteImageText3','AssessmentSiteImageText4','AssessmentSiteImageText5','AssessmentSiteRemoveButton0','AssessmentSiteRemoveButton1','AssessmentSiteRemoveButton2','AssessmentSiteRemoveButton3','AssessmentSiteRemoveButton4','AssessmentSiteRemoveButton5');
});

$('#AssessmentExteriorUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentExteriorUploadImages").change(function () {
    // read6ImagesURL(this, 'AddAssessmentExteriorImageButton0', 'AddAssessmentExteriorImageButton1', 'AddAssessmentExteriorImageButton2', 'AddAssessmentExteriorImageButton3', 'AddAssessmentExteriorImageButton4', 'AddAssessmentExteriorImageButton5', 'AssessmentExteriorImage0', 'AssessmentExteriorImage1', 'AssessmentExteriorImage2', 'AssessmentExteriorImage3', 'AssessmentExteriorImage4', 'AssessmentExteriorImage5', 'AssessmentExteriorImageText0', 'AssessmentExteriorImageText1', 'AssessmentExteriorImageText2', 'AssessmentExteriorImageText3', 'AssessmentExteriorImageText4', 'AssessmentExteriorImageText5', 'AssessmentExteriorRemoveButton0', 'AssessmentExteriorRemoveButton1', 'AssessmentExteriorRemoveButton2', 'AssessmentExteriorRemoveButton3', 'AssessmentExteriorRemoveButton4', 'AssessmentExteriorRemoveButton5');

    if (!isEmpty(this.files)) {
        //Check exitsing images
        var imageIDs = $("#AccessmentExteriorImagesContainer form");

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentExteriorImagesContainer").empty();
        }

        var allImages = [];
        if (this.files.length > 6) {
            alert("You can only selected Six images maximum");
            //Only save 6 files.
            for (var i = 0; i < 6; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }

        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            var elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentExteriorImagesContainer", "AssessmentExteriorImage_" + elementID, "Exteriorlabel" + elementID, "IMG" + elementID, "AssessmentExteriorImageText" + elementID, "AssessmentExteriorRemoveButton" + elementID, "AddAssessmentExteriorImageButton" + elementID, "ExteriorForm" + elementID);

            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result
                var image = new Image();

                image.onload = function () {
                    var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#" + element[0]).attr("src", code);

                        var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                            type: file.type,
                            lastModified: file.lastModifiedDate
                        });

                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentExteriorImagesContainer", element[1], element[5]);
                    }
                };
                image.src = data;
            };
            reader.readAsDataURL(file);

        });
    }

});

$('#AssessmentInteriorLivingUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentInteriorLivingUploadImages").change(function () {
    // read6ImagesURL(this, 'AddAssessmentInteriorLivingImageButton0', 'AddAssessmentInteriorLivingImageButton1', 'AddAssessmentInteriorLivingImageButton2', 'AddAssessmentInteriorLivingImageButton3', 'AddAssessmentInteriorLivingImageButton4', 'AddAssessmentInteriorLivingImageButton5', 'AssessmentInteriorLivingImage0', 'AssessmentInteriorLivingImage1', 'AssessmentInteriorLivingImage2', 'AssessmentInteriorLivingImage3', 'AssessmentInteriorLivingImage4', 'AssessmentInteriorLivingImage5', 'AssessmentInteriorLivingImageText0', 'AssessmentInteriorLivingImageText1', 'AssessmentInteriorLivingImageText2', 'AssessmentInteriorLivingImageText3', 'AssessmentInteriorLivingImageText4', 'AssessmentInteriorLivingImageText5', 'AssessmentInteriorLivingRemoveButton0', 'AssessmentInteriorLivingRemoveButton1', 'AssessmentInteriorLivingRemoveButton2', 'AssessmentInteriorLivingRemoveButton3', 'AssessmentInteriorLivingRemoveButton4', 'AssessmentInteriorLivingRemoveButton5');

    if (!isEmpty(this.files)) {
        //Check exitsing images
        var imageIDs = $("#AccessmentInteriorLivingImagesContainer form");

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentInteriorLivingImagesContainer").empty();
        }

        var allImages = [];
        if (this.files.length > 6) {
            alert("You can only selected Six images maximum");
            //Only save 6 files.
            for (var i = 0; i < 6; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }

        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            var elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentInteriorLivingImagesContainer", "AssessmentInteriorLivingImage_" + elementID, "Livinglabel" + elementID, "IMG" + elementID, "AssessmentInteriorLivingImageText" + elementID, "AssessmentInteriorLivingRemoveButton" + elementID, "AddAssessmentInteriorLivingImageButton" + elementID, "LivingForm" + elementID);

            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result
                var image = new Image();

                image.onload = function () {
                    var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#" + element[0]).attr("src", code);

                        var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                            type: file.type,
                            lastModified: file.lastModifiedDate
                        });

                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorLivingImagesContainer", element[1], element[5]);
                    }
                };
                image.src = data;
            };
            reader.readAsDataURL(file);

        });
    }

});

$('#AssessmentInteriorBedroomUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentInteriorBedroomUploadImages").change(function () {
    // read6ImagesURL(this, 'AddAssessmentInteriorBedroomImageButton0', 'AddAssessmentInteriorBedroomImageButton1', 'AddAssessmentInteriorBedroomImageButton2', 'AddAssessmentInteriorBedroomImageButton3', 'AddAssessmentInteriorBedroomImageButton4', 'AddAssessmentInteriorBedroomImageButton5', 'AssessmentInteriorBedroomImage0', 'AssessmentInteriorBedroomImage1', 'AssessmentInteriorBedroomImage2', 'AssessmentInteriorBedroomImage3', 'AssessmentInteriorBedroomImage4', 'AssessmentInteriorBedroomImage5', 'AssessmentInteriorBedroomImageText0', 'AssessmentInteriorBedroomImageText1', 'AssessmentInteriorBedroomImageText2', 'AssessmentInteriorBedroomImageText3', 'AssessmentInteriorBedroomImageText4', 'AssessmentInteriorBedroomImageText5', 'AssessmentInteriorBedroomRemoveButton0', 'AssessmentInteriorBedroomRemoveButton1', 'AssessmentInteriorBedroomRemoveButton2', 'AssessmentInteriorBedroomRemoveButton3', 'AssessmentInteriorBedroomRemoveButton4', 'AssessmentInteriorBedroomRemoveButton5');
    if (!isEmpty(this.files)) {
        //Check exitsing images
        var imageIDs = $("#AccessmentInteriorBedroomImagesContainer form");

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentInteriorBedroomImagesContainer").empty();
        }

        var allImages = [];
        if (this.files.length > 6) {
            alert("You can only selected Six images maximum");
            //Only save 6 files.
            for (var i = 0; i < 6; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }

        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            var elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentInteriorBedroomImagesContainer", "AssessmentInteriorBedroomImage_" + elementID, "Bedroomlabel" + elementID, "IMG" + elementID, "AssessmentInteriorBedroomImageText" + elementID, "AssessmentInteriorBedroomRemoveButton" + elementID, "AddAssessmentInteriorBedroomImageButton" + elementID, "BedroomForm" + elementID);

            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result
                var image = new Image();

                image.onload = function () {
                    var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#" + element[0]).attr("src", code);

                        var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                            type: file.type,
                            lastModified: file.lastModifiedDate
                        });

                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorBedroomImagesContainer", element[1], element[5]);
                    }
                };
                image.src = data;
            };
            reader.readAsDataURL(file);

        });
    }
});

$('#AssessmentInteriorServiceUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentInteriorServiceUploadImages").change(function () {
    // read3ImagesURL(this, 'AddAssessmentInteriorServiceImageButton0', 'AddAssessmentInteriorServiceImageButton1', 'AddAssessmentInteriorServiceImageButton2', 'AssessmentInteriorServiceImage0', 'AssessmentInteriorServiceImage1', 'AssessmentInteriorServiceImage2', 'AssessmentInteriorServiceImageText0', 'AssessmentInteriorServiceImageText1', 'AssessmentInteriorServiceImageText2', 'AssessmentInteriorServiceRemoveButton0', 'AssessmentInteriorServiceRemoveButton1', 'AssessmentInteriorServiceRemoveButton2');
    if (!isEmpty(this.files)) {
        //Check exitsing images
        var imageIDs = $("#AccessmentInteriorServiceImagesContainer form");

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentInteriorServiceImagesContainer").empty();
        }

        var allImages = [];
        if (this.files.length > 3) {
            alert("You can only selected three images maximum");
            //Only save 3 files.
            for (var i = 0; i < 3; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }

        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            var elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentInteriorServiceImagesContainer", "AssessmentInteriorServiceImage_" + elementID, "Servicelabel" + elementID, "IMG" + elementID, "AssessmentInteriorServiceImageText" + elementID, "AssessmentInteriorServiceRemoveButton" + elementID, "AddAssessmentInteriorServiceImageButton" + elementID, "ServiceForm" + elementID);

            var reader = new FileReader();
            reader.onload = function (e) {
                var data = e.target.result
                var image = new Image();

                image.onload = function () {
                    var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
                    if (!isEmpty(code)) {
                        $("#" + element[0]).attr("src", code);

                        var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
                            type: file.type,
                            lastModified: file.lastModifiedDate
                        });

                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorServiceImagesContainer", element[1], element[5]);
                    }
                };
                image.src = data;
            };
            reader.readAsDataURL(file);
        });
    }
});

//Resize an image
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

$(document).ready(function () {
    checkReloadOther();
})