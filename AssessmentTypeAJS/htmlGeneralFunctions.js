/**
 * Created by Fafa on 10/1/18.
 */
var flag = false;
var saveRecommendationArray = [];
var SiteMajorRecommendationsArray = [];
var SiteMinorRecommendationsArray = [];
var ExteriorMajorRecommendationsArray = [];
var ExteriorMinorRecommendationsArray = [];
var InteriorMajorRecommendationsArray = [];
var InteriorMinorRecommendationsArray = [];
var ServiceMajorRecommendationsArray = [];
var ServiceMinorRecommendationsArray = [];


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
        //console.log(newDivID);
        newEDIDNumber = divNumber * 3;
        newEDID = 'ED' + newEDIDNumber;
        //console.log(newEDID);

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
        //console.log(newEDIDNumber);
        let newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'col-sm-4');
        newDiv.id = 'ED' + newEDIDNumber;
        lastDivRow.appendChild(newDiv);


        let name = document.createElement('INPUT');
        name.setAttribute('class', 'form-control');
        name.setAttribute('title', 'name');
        name.setAttribute('type', 'text');

        name.id = 'EDName' + newEDIDNumber;
        newDiv.appendChild(name);


        let selectList = document.createElement("select");
        selectList.id = "EDSelect" + newEDIDNumber;
        selectList.style.width = '100%';
        let selectOption = ["✔", "XX", 'X', 'U', 'NA'];
        let selectOptionValue = ["√", "XX", 'X', 'U', 'NA'];
        let selectValue = ["No Visible Significant Defect", "Major Defect", "Maintenance Item or Minor Defect",
            "Unknown / Inaccessible / Not Tested", "Not Applicable; No Such Item"
        ];


        //Create and append the options
        for (let i = 0; i < selectOption.length; i++) {
            let option = document.createElement("option");
            let group = document.createElement('optgroup');
            group.label = selectValue[i];
            option.value = selectOptionValue[i];
            option.text = selectOption[i];
            group.appendChild(option);
            selectList.appendChild(group);
        }

        newDiv.appendChild(selectList);
    }
}







/**
 * Check if Summary of the Condition of the Property selects the [Other] option - BetterTENG

 * */

//Check if summary of the condition of the propery, site grade, or  Extensions/Renovations has selected 'othier' show the text area.
function checkReloadOther() {
    if ($("#conditionOfBuilding").val() === "Other") {
        $("#XiaoKe").show();
    } else {
        $("#XiaoKe").hide();
    }

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
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Wall";
    }

}

function morePropertyExteriorVerandas() {
    var div = document.getElementById('PropertyExteriorVerandas');
    var button = document.getElementById('morePropertyExteriorVerandasButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Verandahs";
    }

}

function moreLivingAreaRooms() {
    //    alert("you click add more rooms button LivingAreaRooms moreLivingAreaRoomButton")
    var div = document.getElementById('LivingAreaRooms');
    var button = document.getElementById('moreLivingAreaRoomButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Rooms";
    }
}

function moreLivingAreaStair() {

    var div = document.getElementById('LivingAreaStair2');
    var button = document.getElementById('moreLivingAreaStairButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add One Stair";
    }
}

function moreLivingAreaKitchen() {

    var div = document.getElementById('LivingAreaKitchen2');
    var button = document.getElementById('moreLivingAreaKitchenButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add One Kitchen";
    }
}

function moreBedrooms() {
    var div = document.getElementById('BedroomAreasMoreRooms');
    var button = document.getElementById('moreBedroomsButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Bedrooms";
    }
}

function moreBathrooms() {
    var div = document.getElementById('ServiceAreaBathRooms');
    var button = document.getElementById('moreBathroomsButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Bathroom";
    }

}

function morePowderRooms() {

    var div = document.getElementById('ServiceAreaMorePowderRooms');
    var button = document.getElementById('morePowderRoomsButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add More Powder Rooms";
    }
}

function moreLaundry() {
    var div = document.getElementById('ServiceAreaMoreLaundry');
    var button = document.getElementById('moreLaundryButton');
    if (div.style.display === 'none') {
        div.style.display = 'block';
        button.innerHTML = "Hide";
    } else {
        div.style.display = 'none';
        button.innerHTML = "Add One Laundry";
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
            //console.log('I am in loadImage function');
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

//Remove images
function DeleteImage(formID, imgID, textID) {
    if (!isEmpty(formID) && !isEmpty(imgID)) {
        $("#" + textID).val("");
        doRemovePhoto(imgID);
        $("#" + formID).remove();
    }
}

function DeleteOneImg(element) {
    //console.log(element);
    doRemovePhoto(element[0]);
    $("#" + element[5]).remove();
    automaticNumbering(element[6]);
    createEmptElementForAddingImg();
}
var global_Img;

$('#AssessmentSiteSingleImage').click(function () {
    //console.log(this.value);
    this.value = null;
});
//Add one image
$("#AssessmentSiteSingleImage").on('change', function (e) {
    //console.log("need to upload a single image");
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
                        //doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentSiteImagesContainer");
                        doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5]);
                    }
                };
                image.src = data;
            }, {
                canvas: true,
                orientation: orientation
            });
        });


        // var reader = new FileReader();
        // reader.onload = function (e) {
        //     var data = e.target.result;
        //     var image = new Image();

            
        //     image.onload = function () {
        //         var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
        //         if (!isEmpty(code)) {
        //             $("#" + element[0]).attr("src", code);

        //             var imgFile = new File([convertBase64UrlToBlob(code, file[0].type)], file[0].name, {
        //                 type: file[0].type,
        //                 lastModified: file[0].lastModifiedDate
        //             });

        //             doRemovePhoto(element[0]);
        //             //doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentSiteImagesContainer");
        //             doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5]);

        //         }
        //     };
        //     image.src = data;
        // };
        // reader.readAsDataURL(file[0]);

        automaticNumbering(element[6]);

        //Add empty element
        createEmptElementForAddingImg();

    }

    // setTimeout(function () {
    //     automaticNumbering('AccessmentSiteImagesContainer');
    // }, 300)
});



function AssessmentSiteUploadImages() {
    document.getElementById('AssessmentSiteUploadImages').click();
}

function AssessmentExteriorUploadImages() {
    //var imageIDs = $("#AccessmentExteriorImages img");
    //console.log(imageIDs);

    // for (var i = 0; i < imageIDs.length; i++) {
    //     if (imageIDs.eq(i).attr("src") !== "#") {
    //         var id = imageIDs.eq(i).attr("id");
    //         console.log(id);
    //         doRemovePhoto(id);
    //     }
    // }
    document.getElementById('AssessmentExteriorUploadImages').click();
}

function AssessmentInteriorLivingUploadImages() {
    // var imageIDs = $("#AccessmentInteriorLivingImages img");
    // console.log(imageIDs);

    // for (var i = 0; i < imageIDs.length; i++) {
    //     if (imageIDs.eq(i).attr("src") !== "#") {
    //         var id = imageIDs.eq(i).attr("id");
    //         console.log(id);
    //         doRemovePhoto(id);
    //     }
    // }
    document.getElementById('AssessmentInteriorLivingUploadImages').click();
}

function AssessmentInteriorBedroomUploadImages() {
    // var imageIDs = $("#AccessmentInteriorBedroomImages img");
    // //console.log(imageIDs);

    // for (var i = 0; i < imageIDs.length; i++) {
    //     if (imageIDs.eq(i).attr("src") !== "#") {
    //         var id = imageIDs.eq(i).attr("id");
    //         console.log(id);
    //         doRemovePhoto(id);
    //     }
    // }
    document.getElementById('AssessmentInteriorBedroomUploadImages').click();
}

function AssessmentInteriorServiceUploadImages() {
    // var imageIDs = $("#AccessmentInteriorServiceImages img");
    // // console.log(imageIDs);

    // for (var i = 0; i < imageIDs.length; i++) {
    //     if (imageIDs.eq(i).attr("src") !== "#") {
    //         var id = imageIDs.eq(i).attr("id");
    //         console.log(id);
    //         doRemovePhoto(id);
    //     }
    // }
    document.getElementById('AssessmentInteriorServiceUploadImages').click();
}

function createImagesElements(lastElementID, imgID, labelID = "", labelValue = "", textID, rmBtnID, addBtnID, formID) {
    //console.log(lastElementID);
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
    rmBtn.setAttribute("class","btn btn-danger");
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.style.width = "265px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("class","btn btn-secondary");
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
    var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,lastElementID];
    //console.log(element);
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

$('#AssessmentSiteUploadImages').click(function () {
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
            for (let i = 0; i < 3; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }

        var elementID;
        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            //Create elements
            //[imgID, labelID, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentSiteImagesContainer", "AssessmentSiteImage_" + elementID, "SiteGardenlabel" + elementID, "IMG" + elementID, "AssessmentSiteImageText" + elementID, "AssessmentSiteRemoveButton" + elementID, "AddAssessmentSiteImageButton" + elementID, "SiteGardonForm" + elementID);

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

                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentSiteImagesContainer", element[1], element[5]);
                        }
                    };
                    image.src = data;
                }, {
                    canvas: true,
                    orientation: orientation
                });
            });

            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     var data = e.target.result;
            //     var image = new Image();

            //     image.onload = function () {
            //         var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
            //         if (!isEmpty(code)) {
            //             $("#" + element[0]).attr("src", code);

            //             var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
            //                 type: file.type,
            //                 lastModified: file.lastModifiedDate
            //             });

            //             //f, imageid, textid = '', removeid = '', addid = '', table = '', imageAltName = '', divID = '',uploadID = '', removeFunction = '', addFunction = '', imageSize = '', width = ''
            //             doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentSiteImagesContainer", element[1], element[5]);
            //         }
            //     };
            //     image.src = data;
            // };
            // reader.readAsDataURL(file);

        });

        setTimeout(function () {
            automaticNumbering('AccessmentSiteImagesContainer');
        }, 800);

        //Add empty element
        createEmptElementForAddingImg();
    }
});

$('#AssessmentExteriorUploadImages').click(function () {
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
            for (let i = 0; i < 6; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }
        var elementID;
        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentExteriorImagesContainer", "AssessmentExteriorImage_" + elementID, "Exteriorlabel" + elementID, "IMG" + elementID, "AssessmentExteriorImageText" + elementID, "AssessmentExteriorRemoveButton" + elementID, "AddAssessmentExteriorImageButton" + elementID, "ExteriorForm" + elementID);

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

                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentExteriorImagesContainer", element[1], element[5]);
                        }
                    };
                    image.src = data;
                }, {
                    canvas: true,
                    orientation: orientation
                });
            });

            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     var data = e.target.result;
            //     var image = new Image();

            //     image.onload = function () {
            //         var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
            //         if (!isEmpty(code)) {
            //             $("#" + element[0]).attr("src", code);

            //             var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
            //                 type: file.type,
            //                 lastModified: file.lastModifiedDate
            //             });

            //             doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentExteriorImagesContainer", element[1], element[5]);
            //         }
            //     };
            //     image.src = data;
            // };
            // reader.readAsDataURL(file);

        });

        setTimeout(function () {
            automaticNumbering('AccessmentExteriorImagesContainer');
        }, 1000);

        //Add empty element
        createEmptElementForAddingImg();
    }

});

$('#AssessmentInteriorLivingUploadImages').click(function () {
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
            for (let i = 0; i < 6; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }

        var elementID;
        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentInteriorLivingImagesContainer", "AssessmentInteriorLivingImage_" + elementID, "Livinglabel" + elementID, "IMG" + elementID, "AssessmentInteriorLivingImageText" + elementID, "AssessmentInteriorLivingRemoveButton" + elementID, "AddAssessmentInteriorLivingImageButton" + elementID, "LivingForm" + elementID);

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

                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorLivingImagesContainer", element[1], element[5]);
                        }
                    };
                    image.src = data;
                }, {
                    canvas: true,
                    orientation: orientation
                });
            });

            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     var data = e.target.result;
            //     var image = new Image();

            //     image.onload = function () {
            //         var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
            //         if (!isEmpty(code)) {
            //             $("#" + element[0]).attr("src", code);

            //             var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
            //                 type: file.type,
            //                 lastModified: file.lastModifiedDate
            //             });

            //             doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorLivingImagesContainer", element[1], element[5]);
            //         }
            //     };
            //     image.src = data;
            // };
            // reader.readAsDataURL(file);

        });

        setTimeout(function () {
            automaticNumbering('AccessmentInteriorLivingImagesContainer');
        }, 1000);

        //Add empty element
        createEmptElementForAddingImg();
    }

});

$('#AssessmentInteriorBedroomUploadImages').click(function () {
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
            for (let i = 0; i < 6; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }
        var elementID;
        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentInteriorBedroomImagesContainer", "AssessmentInteriorBedroomImage_" + elementID, "Bedroomlabel" + elementID, "IMG" + elementID, "AssessmentInteriorBedroomImageText" + elementID, "AssessmentInteriorBedroomRemoveButton" + elementID, "AddAssessmentInteriorBedroomImageButton" + elementID, "BedroomForm" + elementID);

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

                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorBedroomImagesContainer", element[1], element[5]);
                        }
                    };
                    image.src = data;
                }, {
                    canvas: true,
                    orientation: orientation
                });
            });

            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     var data = e.target.result;
            //     var image = new Image();

            //     image.onload = function () {
            //         var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
            //         if (!isEmpty(code)) {
            //             $("#" + element[0]).attr("src", code);

            //             var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
            //                 type: file.type,
            //                 lastModified: file.lastModifiedDate
            //             });

            //             doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorBedroomImagesContainer", element[1], element[5]);
            //         }
            //     };
            //     image.src = data;
            // };
            // reader.readAsDataURL(file);

        });

        setTimeout(function () {
            automaticNumbering('AccessmentInteriorBedroomImagesContainer');
        }, 1000);

        //Add empty element
        createEmptElementForAddingImg();
    }
});

$('#AssessmentInteriorServiceUploadImages').click(function () {
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
            for (let i = 0; i < 3; i++) {
                allImages.push(this.files[i]);
            }
        } else {
            allImages = this.files;
        }
        var elementID;
        Object.keys(allImages).forEach(i => {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("AccessmentInteriorServiceImagesContainer", "AssessmentInteriorServiceImage_" + elementID, "Servicelabel" + elementID, "IMG" + elementID, "AssessmentInteriorServiceImageText" + elementID, "AssessmentInteriorServiceRemoveButton" + elementID, "AddAssessmentInteriorServiceImageButton" + elementID, "ServiceForm" + elementID);

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

                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorServiceImagesContainer", element[1], element[5]);
                        }
                    };
                    image.src = data;
                }, {
                    canvas: true,
                    orientation: orientation
                });
            });

            // var reader = new FileReader();
            // reader.onload = function (e) {
            //     var data = e.target.result;
            //     var image = new Image();

            //     image.onload = function () {
            //         var code = resizeImage_Canvas(image).toDataURL('image/jpeg');
            //         if (!isEmpty(code)) {
            //             $("#" + element[0]).attr("src", code);

            //             var imgFile = new File([convertBase64UrlToBlob(code, file.type)], file.name, {
            //                 type: file.type,
            //                 lastModified: file.lastModifiedDate
            //             });

            //             doUploadFile(imgFile, element[0], element[2], element[3], element[4], "AccessmentInteriorServiceImagesContainer", element[1], element[5]);
            //         }
            //     };
            //     image.src = data;
            // };
            // reader.readAsDataURL(file);
        });

        setTimeout(function () {
            automaticNumbering('AccessmentInteriorServiceImagesContainer');
        }, 1000);

        //Add empty element
        createEmptElementForAddingImg();
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

function createEmptElementForAddingImg(MaxImagesnumber = 6) {
    //5 upload container.
    //MaxImagesnumber = 6;
    //console.log(MaxImagesnumber);
    //console.log("i am inside createEmptElementForAddingImg");
    const container = ["AccessmentSiteImagesContainer", "AccessmentExteriorImagesContainer", "AccessmentInteriorLivingImagesContainer", "AccessmentInteriorBedroomImagesContainer", "AccessmentInteriorServiceImagesContainer"];
    for (var i = 0; i < container.length; i++) {
        //console.log(i);
        var element = $("#" + container[i] + " form");
        //console.log(element);
        //Check if contained hidden form.
        var emt = element.find("img:hidden");
        //console.log(emt);
        //console.log(emt.length);

        //Only add one empty element when there is no hidden form.
        if (emt.length == 0) {
            //console.log("I am in");

            //Different uploads have different limitation.
            if (i === 0 || i === 4) {
                //Max image is 3, default is 6
                //console.log("setting the MaxImagesnumber to 3");
                MaxImagesnumber = 3;
            }
            else
            {
                MaxImagesnumber = 6;
            }
            
            //console.log(MaxImagesnumber);
            //console.log(element.length);

            //do not run when there is no form or reached limitation already.
            if (element.length < MaxImagesnumber && element.length != 0) {
                //console.log("need to create one more");
                //console.log(element);
                var maxid = [];
                for (var j = 0; j < element.length; j++) {
                    //save id in array.
                    maxid.push(element.eq(j).attr("id"));
                }
                //The last one in array is the largest one.
                maxid.sort(function (a, b) {
                    return Number(a.replace(/[^\d.]/g, '')) - Number(b.replace(/[^\d.]/g, ''));
                });
                //maxid.sort();
                //console.log(maxid);

                //The existing max id plus one
                var num = parseInt(maxid[maxid.length - 1].replace(/\D+/, "")) + 1;
                //console.log(num);
                //console.log(num);

                //Create elements id.
                var imgID = (element.eq(0).children("img").attr("id")).replace(/\d+/, "") + num;
                var textID = (element.eq(0).children("input[type=text]").attr("id")).replace(/\d+/, "") + num;
                var labelID = (element.eq(0).children("label").attr("id")).replace(/\d+/, "") + num;
                var labelValue = "IMG" + (parseInt(element.length) + 1);
                var removeBtnID = (element.eq(0).children("input[type=button]").eq(0).attr("id")).replace(/\d+/, "") + num;
                var addBtnID = (element.eq(0).children("input[type=button]").eq(1).attr("id")).replace(/\d+/, "") + num;
                var formID = element.eq(0).attr("id").replace(/\d+/, "") + num;

                // console.log(formID);
                var emptyElement = createImagesElements(container[i], imgID, labelID, labelValue, textID, removeBtnID, addBtnID, formID);
                //console.log(emptyElement);

                //The new form only show add button.
                $("#" + emptyElement[0]).hide();
                $("#" + emptyElement[1]).hide();
                $("#" + emptyElement[2]).val("");
                $("#" + emptyElement[2]).hide();
                $("#" + emptyElement[3]).hide();
                $("#" + emptyElement[4]).show();

            }
        }
    }
}

function automaticNumbering(divid) {
    //console.log("need to refresh the image number");
    var totalContainers = $('#' + divid).find('> form');

    // if (divid == "AccessmentInteriorBedroomImagesContainer")
    // {
    //     var livingContainers = $('#AccessmentInteriorLivingImagesContainer').find('> form');
    //     var totalNumber = totalContainers.length + livingContainers.length;
    //     console.log(totalNumber);
    //     for (var i = 0; i < totalContainers.length; i++) {
    //         //console.log(totalContainers.eq(i).children('label').get(0));
    //         //console.log(totalContainers.eq(i).children('form').eq(1).children('label').get(0));
    //         //console.log(totalContainers.eq(i).children('label').get(0));
    //         totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i + 1 + totalNumber);
            
    //     }
        
    // }
    //else
    //{
        for (var i = 0; i < totalContainers.length; i++) {
            //console.log(totalContainers.eq(i).children('label').get(0));
            //console.log(totalContainers.eq(i).children('form').eq(1).children('label').get(0));
            totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i + 1);
        }
    //}
    //console.log(totalContainers);
    
}

function reorderImages(divid) {
    var totalContainers = $('#' + divid).find('> form');
    var BigContainer = document.getElementById(divid);
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

    $('#' + divid).empty();
    for (var i = 0; i < totalContainers.length; i++) {
        BigContainer.appendChild(totalContainers[i]);
        var imgID = totalContainers.eq(i).children('img').get(0).id;
        //console.log(imgID);
        var labelID = totalContainers.eq(i).children('label').get(0).id;
        //console.log(labelID);
        var textID = totalContainers.eq(i).children('input').eq(0).get(0).id;
        //console.log(textID);
        var rmBtnID = totalContainers.eq(i).children('input').eq(1).get(0).id;
        //console.log(rmBtnID);
        var addBtnID = totalContainers.eq(i).children('input').eq(2).get(0).id;
        //console.log(addBtnID);
        var formID = totalContainers[i].id;
        //console.log(formID);
        var id = totalContainers[i].id.replace(/[^\d.]/g, '');
        var imgContainerID = id + "_imgContainer";
        var ImgID = totalContainers.eq(i).children('img').id;
        // console.log(imgContainerID);
        // console.log(id);
        // console.log(ImgID);
        var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,divid];
        //console.log(element);
        //console.log(element);
        // $("#" + rmBtnID).click(function () {
        //     // DeleteImage(formID, imgID, textID);
        //     DeleteOneImg(element);
        // });
        var removeBtn = document.getElementById(totalContainers.eq(i).children('input').eq(1).get(0).id);
        // $("#" + rmBtnID).click(function () {
        //     // DeleteImage(formID, imgID, textID);
        //     global_Img = element;
        //     DeleteOneImg(element);
        // });
        //["AssessmentSiteImage_3", "SiteGardenlabel3", "AssessmentSiteImageText3", "AssessmentSiteRemoveButton3", "AddAssessmentSiteImageButton3", "SiteGardonForm3", "AccessmentSiteImagesContainer"]
        var removeFunction = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + divid + "'])";
        //console.log(removeFunction);
        $("#" + addBtnID).click(function () {
            global_Img = element;
            $("#AssessmentSiteSingleImage").click();
        });
        removeBtn.setAttribute("onclick", removeFunction);
    }
}

//AA-110
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

//AA-106, make sure these fields get the date from the database related fields. even after the user update in the booking system, 
//AA-110, make sure the other fileds will display and show after the page is fully load. 
//AA-111,make sure the comobotree load the json fild after the page load, and get the save array correctly. 
$(document).ready(function () {
    checkReloadOther();
    reorderImages('AccessmentSiteImagesContainer');
    reorderImages('AccessmentExteriorImagesContainer');
    reorderImages('AccessmentInteriorLivingImagesContainer');
    reorderImages('AccessmentInteriorBedroomImagesContainer');
    reorderImages('AccessmentInteriorServiceImagesContainer');

    automaticNumbering('AccessmentSiteImagesContainer');
    automaticNumbering('AccessmentExteriorImagesContainer');
    automaticNumbering('AccessmentInteriorLivingImagesContainer');
    automaticNumbering('AccessmentInteriorBedroomImagesContainer');
    automaticNumbering('AccessmentInteriorServiceImagesContainer');
    createEmptElementForAddingImg();

    // var name = document.getElementById('0').value;
    // console.log(name);
    // console.log(String(name).replace(/\s+/g, " "));
    //document.getElementById('0').value = String(name).replace(/\s+/g, " ")

    // $('#assessmentSiteMajorRecommendations').combotree(
    //     'reload', 'recommendations.json'
    // );
    // $('#assessmentServiceMinorRecommendations').combotree({
    //     url: 'recommendations.json'
    // });
    // $('#assessmentPropertyExteriorMajorRecommendations').combotree({
    //     url: 'recommendations.json'
    // });
    // $('#assessmentPropertyExteriorMinorRecommendations').combotree({
    //     url: 'recommendations.json'
    // });
    // $('#assessmentPropertyInteriorMajorRecommendations').combotree({
    //     url: 'recommendations.json'
    // });
    // $('#assessmentPropertyInteriorMinorRecommendations').combotree({
    //     url: 'recommendations.json'
    // });
    // $('#assessmentServiceMajorRecommendations').combotree({
    //     url: 'recommendations.json'
    // });
    // $('#assessmentServiceMinorRecommendations').combotree({
    //     url: 'recommendations.json'
    // });
    $('#assessmentSiteMajorRecommendations').combotree('loadData',recommendations1);
    $('#assessmentSiteMinorRecommendations').combotree('loadData',recommendations2);
    $('#assessmentPropertyExteriorMajorRecommendations').combotree('loadData',recommendations3);
    $('#assessmentPropertyExteriorMinorRecommendations').combotree('loadData',recommendations4);
    $('#assessmentPropertyInteriorMajorRecommendations').combotree('loadData',recommendations5);
    $('#assessmentPropertyInteriorMinorRecommendations').combotree('loadData',recommendations6);
    $('#assessmentServiceMajorRecommendations').combotree('loadData',recommendations7);
    $('#assessmentServiceMinorRecommendations').combotree('loadData',recommendations8);
  

    // $('#recommendations').combotree('setValues', array);
    // $('#recommendations').combotree('setValues', saveRecommendationArray);
    $('#assessmentSiteMajorRecommendations').combotree('setValues', SiteMajorRecommendationsArray);
    $('#assessmentSiteMinorRecommendations').combotree('setValues', SiteMinorRecommendationsArray);
    $('#assessmentPropertyExteriorMajorRecommendations').combotree('setValues', ExteriorMajorRecommendationsArray);
    $('#assessmentPropertyExteriorMinorRecommendations').combotree('setValues', ExteriorMinorRecommendationsArray);
    $('#assessmentPropertyInteriorMajorRecommendations').combotree('setValues', InteriorMajorRecommendationsArray);
    $('#assessmentPropertyInteriorMinorRecommendations').combotree('setValues', InteriorMinorRecommendationsArray);
    $('#assessmentServiceMajorRecommendations').combotree('setValues', ServiceMajorRecommendationsArray);
    $('#assessmentServiceMinorRecommendations').combotree('setValues', ServiceMinorRecommendationsArray);
});


function getInfo(id,array)
{

    if(id == "recommendations")
    {
        console.log(array);
        saveRecommendationArray = array;
    }
    else if (id == "assessmentSiteMajorRecommendations")
    {
        //console.log("assessmentSiteMajorRecommendations");
        if(array[0] != undefined)
        {
            if(typeof array[0] == 'number')
            {
                SiteMajorRecommendationsArray = array;
            }
            else
            {
                //console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    //console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    //console.log(array[i]);
                }
                //console.log(array);
                SiteMajorRecommendationsArray = array;
            }
        }
    }
    else if (id == "assessmentSiteMinorRecommendations")
    {
        //console.log("assessmentSiteMinorRecommendations");
        //console.log(array[0]);
        if(array[0] != undefined)
        {
            //console.log(typeof array[0]);
            if(typeof array[0] == 'number')
            {
                SiteMinorRecommendationsArray = array;
            }
            else
            {
                //console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    //console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    //console.log(array[i]);
                }
                //console.log(array);
                SiteMinorRecommendationsArray = array;
            }
        }
    }
    else if (id == "assessmentPropertyExteriorMajorRecommendations")
    {
        // console.log("assessmentPropertyExteriorMajorRecommendations");
        // console.log(array[0]);
        if(array[0] != undefined)
        {
            if(typeof array[0] == 'number')
            {
                ExteriorMajorRecommendationsArray = array;
            }
            else
            {
                //console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    //console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    //console.log(array[i]);
                }
                //console.log(array);
                ExteriorMajorRecommendationsArray = array;
            }
        }
    }
    else if (id == "assessmentPropertyExteriorMinorRecommendations")
    {
        // console.log("assessmentPropertyExteriorMinorRecommendations");
        // console.log(array[0]);
        if(array[0] != undefined)
        {
            if(typeof array[0] == 'number')
            {
                ExteriorMinorRecommendationsArray = array;
            }
            else
            {
                //console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    //console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    //console.log(array[i]);
                }
                //console.log(array);
                ExteriorMinorRecommendationsArray = array;
            }
        }
    }
    else if (id == "assessmentPropertyInteriorMajorRecommendations")
    {
        // console.log("assessmentPropertyExteriorMajorRecommendations");
        // console.log(array[0]);
        if(array[0] != undefined)
        {
            if(typeof array[0] == 'number')
            {
                InteriorMajorRecommendationsArray = array;
            }
            else
            {
                console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    console.log(array[i]);
                }
                console.log(array);
                InteriorMajorRecommendationsArray = array;
            }
        }
    }
    else if (id == "assessmentPropertyInteriorMinorRecommendations")
    {
        // console.log("assessmentPropertyExteriorMajorRecommendations");
        // console.log(array[0]);
        if(array[0] != undefined)
        {
            if(typeof array[0] == 'number')
            {
                InteriorMinorRecommendationsArray = array;
            }
            else
            {
                console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    console.log(array[i]);
                }
                console.log(array);
                InteriorMinorRecommendationsArray = array;
            }
        }
    }
    else if (id == "assessmentServiceMajorRecommendations")
    {
        // console.log("assessmentPropertyExteriorMajorRecommendations");
        // console.log(array[0]);
        if(array[0] != undefined)
        {
            if(typeof array[0] == 'number')
            {
                ServiceMajorRecommendationsArray = array;
            }
            else
            {
                //console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    //console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    //console.log(array[i]);
                }
                //console.log(array);
                ServiceMajorRecommendationsArray = array;
            }
        }
    }
    else if (id == "assessmentServiceMinorRecommendations")
    {
        // console.log("assessmentPropertyExteriorMajorRecommendations");
        // console.log(array[0]);
        if(array[0] != undefined)
        {
            if(typeof array[0] == 'number')
            {
                ServiceMinorRecommendationsArray = array;
            }
            else
            {
                console.log("old reports data, need to conver first");
                for(var i=0;i<array.length;i++)
                {
                    //console.log(array[i]);
                    array[i] = convertCodesToIndex(array[i]);
                    //console.log(array[i]);
                }
                //console.log(array);
                ServiceMinorRecommendationsArray = array;
            }
        }
    }
}

/**
 * AA-111
 * This function is for the old reports stored th recommendations as codes, but the new checkbox need index as references to display proper texts. 
 * so need to convert the codes to index for the checkbox to work. 
 */
function convertCodesToIndex(codes)
{
    var index;
    switch(codes)
    {
        case 'AR':
            index = 0;
            break;
        case 'BC':
            index = 1;
            break;
        case 'BR':
            index = 2;
            break;
        case 'CC':
            index = 3;
            break;
        case 'CJ':
            index = 4;
            break;
        case 'CM':
            index = 5;
            break;
        case 'DH':
            index = 6;
            break;
        case 'DR':
            index = 7;
            break;
        case 'EL':
            index = 8;
            break;
        case 'EX':
            index = 9;
            break;
        case 'FC':
            index = 10;
            break;
        case 'GL':
            index = 11;
            break;
        case 'HM':
            index = 12;
            break;
        case 'HR':
            index = 13;
            break;
        case 'IC':
            index = 14;
            break;
        case 'LA':
            index = 15;
            break;
        case 'LG':
            index = 16;
            break;
        case 'UP':
            index = 17;
            break;
        case 'PC':
            index = 18;
            break;
        case 'PD':
            index = 19;
            break;
        case 'PG':
            index = 20;
            break;
        case 'PL':
            index = 21;
            break;
        case 'PV':
            index = 22;
            break;
        case 'RC':
            index = 23;
            break;
        case 'SE':
            index = 24;
            break;
        case 'TL':
            index = 25;
            break;
        case 'TS':
            index = 26;
            break;
        default:
            index = 0;
    }

    return index;
}

$('#assessmentSiteMajorRecommendations').combotree({
    onSelect: function(row){
        if(row.id == 27)
        {
            console.log(row);
            console.log("user selects other, need to display another input for typing");
            $('#assessmentSiteMajorRecommendationsother').show();
        }
		
	}
});