/**
 * Created by Fafa on 10/1/18.
 */

var flag = false;

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
// function readOneImageURL(input, imageID0, addButtonID, removeButtonID, textID, imageSize) {
//     if (input.files && input.files[0]) {
//         var image = '#' + imageID0;
//         var reader = new FileReader();
//         var button = document.getElementById(addButtonID);
//         var removeButton = document.getElementById(removeButtonID);
//         var imageID = document.getElementById(imageID0);
//         var text = document.getElementById(textID);
//         reader.onload = function (e) {
//
//             $(image).attr('src', e.target.result);
//             button.style.display = 'none';
//             removeButton.style.display = 'block';
//             imageID.style.display = 'block';
//             imageID.style.width = imageSize;
//             imageID.style.height = imageSize;
//             text.style.display = 'block';
//         };
//         reader.readAsDataURL(input.files[0]);
//         doUploadFile(input.files[0],imageID0, textID, removeButtonID, addButtonID,'','','','','','',imageSize,imageSize);
//     }
// }

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

//upload max 3 images
// function read3ImagesURL(input, addButtonID0, addButtonID1, addButtonID2, imageID0, imageID1, imageID2, text0, text1, text2, removeButton0, removeButton1, removeButton2) {
//     var count = input.files.length;
//     // var date = new Date();
//     //check if the selected images are more than 3
//     if (count > 3) {
//         alert("You can only selected three images maximum, will display the first images");
//     }

//     //Display all the add button first
//     var addButton0 = document.getElementById(addButtonID0);
//     var addButton1 = document.getElementById(addButtonID1);
//     var addButton2 = document.getElementById(addButtonID2);


//     document.getElementById(text0).value = document.getElementById(text1).value = document.getElementById(text2).value = "";
//     document.getElementById(text0).style.display = document.getElementById(text1).style.display = document.getElementById(text2).style.display = 'none';





//     if (input.files && input.files[0]) {
//         //Clear all the images if the user select a new one.
//         document.getElementById(imageID0).setAttribute('src', '#');
//         document.getElementById(imageID1).setAttribute('src', '#');
//         document.getElementById(imageID2).setAttribute('src', '#');
//         //Hide all the remove buttons first if the user select a new image.
//         document.getElementById(removeButton0).style.display = 'none';
//         document.getElementById(removeButton1).style.display = 'none';
//         document.getElementById(removeButton2).style.display = 'none';
//         //Display the add buttons first if the user select a new image;
//         addButton0.style.display = 'block';
//         addButton1.style.display = 'block';
//         addButton2.style.display = 'block';


//         // $("#AccessmentSiteImages form").attr(76yy"display", "");

//         var imageFile = input.files[0];
//         var imageType = imageFile.type;
//         var imageName = imageFile.name;
//         loadImage.parseMetaData(imageFile, function (data) {
//             console.log("i am in loadImage function");
//             var orientation = 0;
//             //if exif data available, update orientation
//             if (data.exif) {
//                 orientation = data.exif.get('Orientation');
//             }
//             var loadingImage = loadImage(imageFile, function (canvas) {
//                 //here's the base64 data result
//                 var base64data = canvas.toDataURL('image/jpeg');
//                 //here's example to show it as on imae preview
//                 // var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                 // var image = '#' + imageID0;
//                 var image = document.getElementById(imageID0);
//                 image.setAttribute("src", base64data);
//                 // $(image).attr('src', base64data);
//                 // image = document.getElementById(imageID0);
//                 var description = document.getElementById(text0);
//                 var button = document.getElementById(removeButton0);
//                 image.style.width = '265px';
//                 image.style.height = '265px';
//                 image.style.display = 'block';

//                 description.style.display = 'block';
//                 button.style.display = 'block';
//                 addButton0.style.display = 'none';
//                 var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                     type: imageType,
//                     lastModified: date.getTime()
//                 });
//                 doUploadFile(file, imageID0, text0, removeButton0, addButtonID0, '', '', '', '', '', '', '265px', '265px');
//             }, {
//                 //should be set to canvas : true to activate auto fix orientation
//                 canvas: true,
//                 orientation: orientation,
//                 maxWidth: 1000,
//                 maxHeight: 850
//             });
//             //doUploadFile(input.files[0],imageID0, text0, removeButton0, addButtonID0,'','','','','','','265px','265px');
//         });
//     } else {
//         document.getElementById(imageID0).style.display = "none";
//     }


//     setTimeout(function () {
//         if (input.files && input.files[1]) {


//             var imageFile = input.files[1];
//             var imageType = imageFile.type;
//             var imageName = imageFile.name;
//             loadImage.parseMetaData(imageFile, function (data) {
//                 console.log("i am in loadImage function");
//                 var orientation = 0;
//                 //if exif data available, update orientation
//                 if (data.exif) {
//                     orientation = data.exif.get('Orientation');
//                 }
//                 var loadingImage = loadImage(
//                     input.files[1],
//                     function (canvas) {
//                         //here's the base64 data result
//                         var base64data = canvas.toDataURL('image/jpeg');
//                         //here's example to show it as on image preview
//                         var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                         var image = '#' + imageID1;
//                         $(image).attr('src', base64data);
//                         var image = document.getElementById(imageID1);
//                         var description = document.getElementById(text1);
//                         var button = document.getElementById(removeButton1);
//                         image.style.width = '265px';
//                         image.style.height = '265px';
//                         image.style.display = 'block';
//                         description.style.display = 'block';
//                         button.style.display = 'block';
//                         addButton1.style.display = 'none';
//                         var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                             type: imageType,
//                             lastModified: date.getTime()
//                         });
//                         doUploadFile(file, imageID1, text1, removeButton1, addButtonID1, '', '', '', '', '', '', '265px', '265px');
//                     }, {
//                         //should be set to canvas : true to activate auto fix orientation
//                         canvas: true,
//                         orientation: orientation,
//                         maxWidth: 1000,
//                         maxHeight: 850

//                     }
//                 );
//                 //doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//                 //doUploadFile(loadingImage,imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//             });

//         } else {
//             document.getElementById(imageID1).style.display = "none";
//         }
//     }, 100);

//     setTimeout(function () {
//         if (input.files && input.files[2]) {

//             var imageFile = input.files[2];
//             var imageType = imageFile.type;
//             var imageName = imageFile.name;
//             loadImage.parseMetaData(imageFile, function (data) {
//                 console.log("i am in loadImage function");
//                 var orientation = 0;
//                 //if exif data available, update orientation
//                 if (data.exif) {
//                     orientation = data.exif.get('Orientation');
//                 }
//                 var loadingImage = loadImage(input.files[2], function (canvas) {
//                     //here's the base64 data result
//                     var base64data = canvas.toDataURL('image/jpeg');
//                     //here's example to show it as on imae preview
//                     var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                     var image = '#' + imageID2;
//                     $(image).attr('src', base64data);
//                     var image = document.getElementById(imageID2);
//                     var description = document.getElementById(text2);
//                     var button = document.getElementById(removeButton2);
//                     image.style.width = '265px';
//                     image.style.height = '265px';
//                     image.style.display = 'block';
//                     description.style.display = 'block';
//                     button.style.display = 'block';
//                     addButton2.style.display = 'none';
//                     var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                         type: imageType,
//                         lastModified: date.getTime()
//                     });
//                     doUploadFile(file, imageID2, text2, removeButton2, addButtonID2, '', '', '', '', '', '', '265px', '265px');

//                 }, {
//                     //should be set to canvas : true to activate auto fix orientation
//                     canvas: true,
//                     orientation: orientation,
//                     maxWidth: 1000,
//                     maxHeight: 850

//                 });
//                 //doUploadFile(input.files[2],imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
//                 //doUploadFile(loadingImage,imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
//             });
//         } else {
//             document.getElementById(imageID2).style.display = "none";
//         }
//     }, 120);
// }

//upload max 6 images
// function read6ImagesURL(input, addButtonID0, addButtonID1, addButtonID2, addButtonID3, addButtonID4, addButtonID5, imageID0, imageID1, imageID2, imageID3, imageID4, imageID5, text0, text1, text2, text3, text4, text5, removeButton0, removeButton1, removeButton2, removeButton3, removeButton4, removeButton5) {
//     var count = input.files.length;
//     var date = new Date();
//     console.log(count);
//     //check if the number of images are more than six
//     if (count > 6) {
//         alert("You can only selected six images maximum");
//     }
//     var addButton0 = document.getElementById(addButtonID0);
//     var addButton1 = document.getElementById(addButtonID1);
//     var addButton2 = document.getElementById(addButtonID2);
//     var addButton3 = document.getElementById(addButtonID3);
//     var addButton4 = document.getElementById(addButtonID4);
//     var addButton5 = document.getElementById(addButtonID5);

//     if (input.files && input.files[0]) {
//         //Clear all the images if the user select a new one.
//         document.getElementById(imageID0).setAttribute('src', '#');
//         document.getElementById(imageID1).setAttribute('src', '#');
//         document.getElementById(imageID2).setAttribute('src', '#');
//         document.getElementById(imageID3).setAttribute('src', '#');
//         document.getElementById(imageID4).setAttribute('src', '#');
//         document.getElementById(imageID5).setAttribute('src', '#');
//         //Display the add button if the user select a new one.
//         addButton0.style.display = 'block';
//         addButton1.style.display = 'block';
//         addButton2.style.display = 'block';
//         addButton3.style.display = 'block';
//         addButton4.style.display = 'block';
//         addButton5.style.display = 'block';
//         //Hide all the remove buttons first if the user select a new one.
//         document.getElementById(removeButton0).style.display = 'none';
//         document.getElementById(removeButton1).style.display = 'none';
//         document.getElementById(removeButton2).style.display = 'none';
//         document.getElementById(removeButton3).style.display = 'none';
//         document.getElementById(removeButton4).style.display = 'none';
//         document.getElementById(removeButton5).style.display = 'none';

//         document.getElementById(text0).style.display = 'none';
//         document.getElementById(text1).style.display = 'none';
//         document.getElementById(text2).style.display = 'none';
//         document.getElementById(text3).style.display = 'none';
//         document.getElementById(text4).style.display = 'none';
//         document.getElementById(text5).style.display = 'none';

//         document.getElementById(text0).value = "";
//         document.getElementById(text1).value = "";
//         document.getElementById(text2).value = "";
//         document.getElementById(text3).value = "";
//         document.getElementById(text4).value = "";

//         var imageFile = input.files[0];
//         var imageType = imageFile.type;
//         var imageName = imageFile.name;
//         loadImage.parseMetaData(imageFile, function (data) {
//             console.log("i am in loadImage function");
//             var orientation = 0;
//             //if exif data available, update orientation
//             if (data.exif) {
//                 orientation = data.exif.get('Orientation');
//             }
//             var loadingImage = loadImage(imageFile, function (canvas) {
//                 //here's the base64 data result
//                 var base64data = canvas.toDataURL('image/jpeg');
//                 //here's example to show it as on imae preview
//                 // var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                 var image = '#' + imageID0;
//                 $(image).attr('src', base64data);
//                 var image = document.getElementById(imageID0);
//                 var description = document.getElementById(text0);
//                 var button = document.getElementById(removeButton0);
//                 image.style.width = '265px';
//                 image.style.height = '265px';
//                 image.style.display = 'block';
//                 description.style.display = 'block';
//                 button.style.display = 'block';
//                 addButton0.style.display = 'none';
//                 var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                     type: imageType,
//                     lastModified: date.getTime()
//                 });
//                 doUploadFile(file, imageID0, text0, removeButton0, addButtonID0, '', '', '', '', '', '', '265px', '265px');
//             }, {
//                 //should be set to canvas : true to activate auto fix orientation
//                 canvas: true,
//                 orientation: orientation,
//                 maxWidth: 1000,
//                 maxHeight: 850
//             });
//             //doUploadFile(input.files[0],imageID0, text0, removeButton0, addButtonID0,'','','','','','','265px','265px');
//         });
//     } else {
//         document.getElementById(imageID0).style.display = "none";
//     }


//     setTimeout(function () {
//         if (input.files && input.files[1]) {
//             var imageFile = input.files[1];
//             var imageType = imageFile.type;
//             var imageName = imageFile.name;
//             loadImage.parseMetaData(imageFile, function (data) {
//                 console.log("i am in loadImage function");
//                 var orientation = 0;
//                 //if exif data available, update orientation
//                 if (data.exif) {
//                     orientation = data.exif.get('Orientation');
//                 }
//                 var loadingImage = loadImage(imageFile, function (canvas) {
//                     //here's the base64 data result
//                     var base64data = canvas.toDataURL('image/jpeg');
//                     //here's example to show it as on image preview
//                     var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                     var image = '#' + imageID1;
//                     $(image).attr('src', base64data);
//                     var image = document.getElementById(imageID1);
//                     var description = document.getElementById(text1);
//                     var button = document.getElementById(removeButton1);
//                     image.style.width = '265px';
//                     image.style.height = '265px';
//                     image.style.display = 'block';
//                     description.style.display = 'block';
//                     button.style.display = 'block';
//                     addButton1.style.display = 'none';
//                     var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                         type: imageType,
//                         lastModified: date.getTime()
//                     });
//                     doUploadFile(file, imageID1, text1, removeButton1, addButtonID1, '', '', '', '', '', '', '265px', '265px');
//                 }, {
//                     //should be set to canvas : true to activate auto fix orientation
//                     canvas: true,
//                     orientation: orientation,
//                     maxWidth: 1000,
//                     maxHeight: 850

//                 });
//                 //doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//                 //doUploadFile(loadingImage,imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//             });

//         } else {
//             document.getElementById(imageID1).style.display = "none";
//         }
//     }, 100);
//     setTimeout(function () {
//         if (input.files && input.files[2]) {
//             var imageFile = input.files[2];
//             var imageType = imageFile.type;
//             var imageName = imageFile.name;
//             loadImage.parseMetaData(imageFile, function (data) {
//                 console.log("i am in loadImage function");
//                 var orientation = 0;
//                 //if exif data available, update orientation
//                 if (data.exif) {
//                     orientation = data.exif.get('Orientation');
//                 }
//                 var loadingImage = loadImage(imageFile, function (canvas) {
//                     //here's the base64 data result
//                     var base64data = canvas.toDataURL('image/jpeg');
//                     //here's example to show it as on imae preview
//                     var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                     var image = '#' + imageID2;
//                     $(image).attr('src', base64data);
//                     var image = document.getElementById(imageID2);
//                     var description = document.getElementById(text2);
//                     var button = document.getElementById(removeButton2);
//                     image.style.width = '265px';
//                     image.style.height = '265px';
//                     image.style.display = 'block';
//                     description.style.display = 'block';
//                     button.style.display = 'block';
//                     addButton2.style.display = 'none';
//                     var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                         type: imageType,
//                         lastModified: date.getTime()
//                     });
//                     doUploadFile(file, imageID2, text2, removeButton2, addButtonID2, '', '', '', '', '', '', '265px', '265px');

//                 }, {
//                     //should be set to canvas : true to activate auto fix orientation
//                     canvas: true,
//                     orientation: orientation,
//                     maxWidth: 1000,
//                     maxHeight: 850

//                 });
//                 //doUploadFile(input.files[2],imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
//                 //doUploadFile(loadingImage,imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
//             });
//         } else {
//             document.getElementById(imageID2).style.display = "none";
//         }
//     }, 110);
//     setTimeout(function () {
//         if (input.files && input.files[3]) {
//             var imageFile = input.files[3];
//             var imageType = imageFile.type;
//             var imageName = imageFile.name;
//             loadImage.parseMetaData(imageFile, function (data) {
//                 console.log("i am in loadImage function");
//                 var orientation = 0;
//                 //if exif data available, update orientation
//                 if (data.exif) {
//                     orientation = data.exif.get('Orientation');
//                 }
//                 var loadingImage = loadImage(imageFile, function (canvas) {
//                     //here's the base64 data result
//                     var base64data = canvas.toDataURL('image/jpeg');
//                     //here's example to show it as on image preview
//                     var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                     var image = '#' + imageID3;
//                     $(image).attr('src', base64data);
//                     var image = document.getElementById(imageID3);
//                     var description = document.getElementById(text3);
//                     var button = document.getElementById(removeButton3);
//                     image.style.width = '265px';
//                     image.style.height = '265px';
//                     image.style.display = 'block';
//                     description.style.display = 'block';
//                     button.style.display = 'block';
//                     addButton3.style.display = 'none';
//                     var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                         type: imageType,
//                         lastModified: date.getTime()
//                     });
//                     doUploadFile(file, imageID3, text3, removeButton3, addButtonID3, '', '', '', '', '', '', '265px', '265px');
//                 }, {
//                     //should be set to canvas : true to activate auto fix orientation
//                     canvas: true,
//                     orientation: orientation,
//                     maxWidth: 1000,
//                     maxHeight: 850

//                 });
//                 //doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//                 //doUploadFile(loadingImage,imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//             });

//         } else {
//             document.getElementById(imageID3).style.display = "none";
//         }
//     }, 120);
//     setTimeout(function () {
//         if (input.files && input.files[4]) {
//             var imageFile = input.files[4];
//             var imageType = imageFile.type;
//             var imageName = imageFile.name;
//             loadImage.parseMetaData(imageFile, function (data) {
//                 console.log("i am in loadImage function");
//                 var orientation = 0;
//                 //if exif data available, update orientation
//                 if (data.exif) {
//                     orientation = data.exif.get('Orientation');
//                 }
//                 var loadingImage = loadImage(imageFile, function (canvas) {
//                     //here's the base64 data result
//                     var base64data = canvas.toDataURL('image/jpeg');
//                     //here's example to show it as on image preview
//                     var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                     var image = '#' + imageID4;
//                     $(image).attr('src', base64data);
//                     var image = document.getElementById(imageID4);
//                     var description = document.getElementById(text4);
//                     var button = document.getElementById(removeButton4);
//                     image.style.width = '265px';
//                     image.style.height = '265px';
//                     image.style.display = 'block';
//                     description.style.display = 'block';
//                     button.style.display = 'block';
//                     addButton4.style.display = 'none';
//                     var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                         type: imageType,
//                         lastModified: date.getTime()
//                     });
//                     doUploadFile(file, imageID4, text4, removeButton4, addButtonID4, '', '', '', '', '', '', '265px', '265px');
//                 }, {
//                     //should be set to canvas : true to activate auto fix orientation
//                     canvas: true,
//                     orientation: orientation,
//                     maxWidth: 1000,
//                     maxHeight: 850

//                 });
//                 //doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//                 //doUploadFile(loadingImage,imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//             });

//         } else {
//             document.getElementById(imageID4).style.display = "none";
//         }
//     }, 130);
//     setTimeout(function () {
//         if (input.files && input.files[5]) {
//             var imageFile = input.files[5];
//             var imageType = imageFile.type;
//             var imageName = imageFile.name;
//             loadImage.parseMetaData(imageFile, function (data) {
//                 console.log("i am in loadImage function");
//                 var orientation = 0;
//                 //if exif data available, update orientation
//                 if (data.exif) {
//                     orientation = data.exif.get('Orientation');
//                 }
//                 var loadingImage = loadImage(imageFile, function (canvas) {
//                     //here's the base64 data result
//                     var base64data = canvas.toDataURL('image/jpeg');
//                     //here's example to show it as on image preview
//                     var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
//                     var image = '#' + imageID5;
//                     $(image).attr('src', base64data);
//                     var image = document.getElementById(imageID5);
//                     var description = document.getElementById(text5);
//                     var button = document.getElementById(removeButton5);
//                     image.style.width = '265px';
//                     image.style.height = '265px';
//                     image.style.display = 'block';
//                     description.style.display = 'block';
//                     button.style.display = 'block';
//                     addButton5.style.display = 'none';
//                     var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
//                         type: imageType,
//                         lastModified: date.getTime()
//                     });
//                     doUploadFile(file, imageID5, text5, removeButton5, addButtonID5, '', '', '', '', '', '', '265px', '265px');
//                 }, {
//                     //should be set to canvas : true to activate auto fix orientation
//                     canvas: true,
//                     orientation: orientation,
//                     maxWidth: 1000,
//                     maxHeight: 850

//                 });
//                 //doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//                 //doUploadFile(loadingImage,imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
//             });

//         } else {
//             document.getElementById(imageID5).style.display = "none";
//         }
//     }, 140);
// }


// function RemoveImage(imageID0, removeButtonID, addButtonID, textID = "") {
//     var imageSelect = '#' + imageID0;
//     $(imageSelect).attr('src', '#');
//     var image = document.getElementById(imageID0);
//     var button = document.getElementById(removeButtonID);
//     if (text != "") {
//         var text = document.getElementById(textID);
//         text.style.display = "none";
//         text.value = "";
//     }
//     var addButton = document.getElementById(addButtonID);
//     button.style.display = 'none';

//     addButton.style.display = 'block';
//     image.style.width = '0px';
//     image.style.display = 'none';
//     doRemovePhoto(imageID0);
// }

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
    rmBtn.style.width = "165px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("value", "Add");
    addBtn.style.width = "165px";

    label.setAttribute("id", labelID + id);
    label.innerHTML = "IMG_" + id;

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
        // read3ImagesURL(this, 'AddAssessmentSiteImageButton0', 'AddAssessmentSiteImageButton1', 'AddAssessmentSiteImageButton2', 'AssessmentSiteImage0', 'AssessmentSiteImage1', 'AssessmentSiteImage2', 'AssessmentSiteImageText0', 'AssessmentSiteImageText1', 'AssessmentSiteImageText2', 'AssessmentSiteRemoveButton0', 'AssessmentSiteRemoveButton1', 'AssessmentSiteRemoveButton2');
    }
    //  read6ImagesURL(this,'AddAssessmentSiteImageButton0','AddAssessmentSiteImageButton1','AddAssessmentSiteImageButton2','AddAssessmentSiteImageButton3','AddAssessmentSiteImageButton4','AddAssessmentSiteImageButton5','AssessmentSiteImage0','AssessmentSiteImage1','AssessmentSiteImage2','AssessmentSiteImage3','AssessmentSiteImage4','AssessmentSiteImage5','AssessmentSiteImageText0','AssessmentSiteImageText1','AssessmentSiteImageText2','AssessmentSiteImageText3','AssessmentSiteImageText4','AssessmentSiteImageText5','AssessmentSiteRemoveButton0','AssessmentSiteRemoveButton1','AssessmentSiteRemoveButton2','AssessmentSiteRemoveButton3','AssessmentSiteRemoveButton4','AssessmentSiteRemoveButton5');
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


//Assessment - Site and Garden, upload one image per time
// $("#AssessmentSiteUploadImage0").change(function () {
//     readOneImageURL(this, 'AssessmentSiteImage0', 'AddAssessmentSiteImageButton0', 'AssessmentSiteRemoveButton0', 'AssessmentSiteImageText0', '265px', 'AddAssessmentSiteImageButton1');
// });

// $("#AssessmentSiteUploadImage1").change(function () {
//     readOneImageURL(this, 'AssessmentSiteImage1', 'AddAssessmentSiteImageButton1', 'AssessmentSiteRemoveButton1', 'AssessmentSiteImageText1', '265px', 'AddAssessmentSiteImageButton2');
// });

// $("#AssessmentSiteUploadImage2").change(function () {
//     readOneImageURL(this, 'AssessmentSiteImage2', 'AddAssessmentSiteImageButton2', 'AssessmentSiteRemoveButton2', 'AssessmentSiteImageText2', '265px', '');
// });


// //Assessment - Exterior, upload one image per time
// $("#AssessmentExteriorUploadImage0").change(function () {
//     readOneImageURL(this, 'AssessmentExteriorImage0', 'AddAssessmentExteriorImageButton0', 'AssessmentExteriorRemoveButton0', 'AssessmentExteriorImageText0', '265px', 'AddAssessmentExteriorImageButton1');
// });
// $("#AssessmentExteriorUploadImage1").change(function () {
//     readOneImageURL(this, 'AssessmentExteriorImage1', 'AddAssessmentExteriorImageButton1', 'AssessmentExteriorRemoveButton1', 'AssessmentExteriorImageText1', '265px', 'AddAssessmentExteriorImageButton2');
// });
// $("#AssessmentExteriorUploadImage2").change(function () {
//     readOneImageURL(this, 'AssessmentExteriorImage2', 'AddAssessmentExteriorImageButton2', 'AssessmentExteriorRemoveButton2', 'AssessmentExteriorImageText2', '265px', 'AddAssessmentExteriorImageButton3');
// });
// $("#AssessmentExteriorUploadImage3").change(function () {
//     readOneImageURL(this, 'AssessmentExteriorImage3', 'AddAssessmentExteriorImageButton3', 'AssessmentExteriorRemoveButton3', 'AssessmentExteriorImageText3', '265px', 'AddAssessmentExteriorImageButton4');
// });
// $("#AssessmentExteriorUploadImage4").change(function () {
//     readOneImageURL(this, 'AssessmentExteriorImage4', 'AddAssessmentExteriorImageButton4', 'AssessmentExteriorRemoveButton4', 'AssessmentExteriorImageText4', '265px', 'AddAssessmentExteriorImageButton5');
// });
// $("#AssessmentExteriorUploadImage5").change(function () {
//     readOneImageURL(this, 'AssessmentExteriorImage5', 'AddAssessmentExteriorImageButton5', 'AssessmentExteriorRemoveButton5', 'AssessmentExteriorImageText5', '265px', '');
// });

// //Assessment - Interior Living Room, upload one image per time

// $("#AssessmentInteriorLivingUploadImage0").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorLivingImage0', 'AddAssessmentInteriorLivingImageButton0', 'AssessmentInteriorLivingRemoveButton0', 'AssessmentInteriorLivingImageText0', '265px', 'AddAssessmentInteriorLivingImageButton1');
// });
// $("#AssessmentInteriorLivingUploadImage1").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorLivingImage1', 'AddAssessmentInteriorLivingImageButton1', 'AssessmentInteriorLivingRemoveButton1', 'AssessmentInteriorLivingImageText1', '265px', 'AddAssessmentInteriorLivingImageButton2');
// });
// $("#AssessmentInteriorLivingUploadImage2").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorLivingImage2', 'AddAssessmentInteriorLivingImageButton2', 'AssessmentInteriorLivingRemoveButton2', 'AssessmentInteriorLivingImageText2', '265px', 'AddAssessmentInteriorLivingImageButton3');
// });
// $("#AssessmentInteriorLivingUploadImage3").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorLivingImage3', 'AddAssessmentInteriorLivingImageButton3', 'AssessmentInteriorLivingRemoveButton3', 'AssessmentInteriorLivingImageText3', '265px', 'AddAssessmentInteriorLivingImageButton4');
// });
// $("#AssessmentInteriorLivingUploadImage4").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorLivingImage4', 'AddAssessmentInteriorLivingImageButton4', 'AssessmentInteriorLivingRemoveButton4', 'AssessmentInteriorLivingImageText4', '265px', 'AddAssessmentInteriorLivingImageButton5');
// });
// $("#AssessmentInteriorLivingUploadImage5").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorLivingImage5', 'AddAssessmentInteriorLivingImageButton5', 'AssessmentInteriorLivingRemoveButton5', 'AssessmentInteriorLivingImageText5', '265px', '');
// });

// //Assessment - Interior Bedroom, upload one image per time
// $("#AssessmentInteriorBedroomUploadImage0").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorBedroomImage0', 'AddAssessmentInteriorBedroomImageButton0', 'AssessmentInteriorBedroomRemoveButton0', 'AssessmentInteriorBedroomImageText0', '265px', 'AddAssessmentInteriorBedroomImageButton1');
// });
// $("#AssessmentInteriorBedroomUploadImage1").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorBedroomImage1', 'AddAssessmentInteriorBedroomImageButton1', 'AssessmentInteriorBedroomRemoveButton1', 'AssessmentInteriorBedroomImageText1', '265px', 'AddAssessmentInteriorBedroomImageButton2');
// });
// $("#AssessmentInteriorBedroomUploadImage2").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorBedroomImage2', 'AddAssessmentInteriorBedroomImageButton2', 'AssessmentInteriorBedroomRemoveButton2', 'AssessmentInteriorBedroomImageText2', '265px', 'AddAssessmentInteriorBedroomImageButton3');
// });
// $("#AssessmentInteriorBedroomUploadImage3").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorBedroomImage3', 'AddAssessmentInteriorBedroomImageButton3', 'AssessmentInteriorBedroomRemoveButton3', 'AssessmentInteriorBedroomImageText3', '265px', 'AddAssessmentInteriorBedroomImageButton4');
// });
// $("#AssessmentInteriorBedroomUploadImage4").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorBedroomImage4', 'AddAssessmentInteriorBedroomImageButton4', 'AssessmentInteriorBedroomRemoveButton4', 'AssessmentInteriorBedroomImageText4', '265px', 'AddAssessmentInteriorBedroomImageButton5');
// });
// $("#AssessmentInteriorBedroomUploadImage5").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorBedroomImage5', 'AddAssessmentInteriorBedroomImageButton5', 'AssessmentInteriorBedroomRemoveButton5', 'AssessmentInteriorBedroomImageText5', '265px', '');
// });

// //Assessment - Interior Service, upload one image per time
// $("#AssessmentInteriorServiceUploadImage0").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorServiceImage0', 'AddAssessmentInteriorServiceImageButton0', 'AssessmentInteriorServiceRemoveButton0', 'AssessmentInteriorServiceImageText0', '265px', 'AddAssessmentInteriorServiceImageButton1');
// });
// $("#AssessmentInteriorServiceUploadImage1").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorServiceImage1', 'AddAssessmentInteriorServiceImageButton1', 'AssessmentInteriorServiceRemoveButton1', 'AssessmentInteriorServiceImageText1', '265px', 'AddAssessmentInteriorServiceImageButton2');
// });
// $("#AssessmentInteriorServiceUploadImage2").change(function () {
//     readOneImageURL(this, 'AssessmentInteriorServiceImage2', 'AddAssessmentInteriorServiceImageButton2', 'AssessmentInteriorServiceRemoveButton2', 'AssessmentInteriorServiceImageText2', '265px', '');
// });

// function AddAssessmentSiteImage0() {
//     document.getElementById('AssessmentSiteUploadImage0').click();
// }

// function AddAssessmentSiteImage1() {
//     document.getElementById('AssessmentSiteUploadImage1').click();
// }

// function AddAssessmentSiteImage2() {
//     document.getElementById('AssessmentSiteUploadImage2').click();
// }

// function AddAssessmentExteriorImage0() {
//     document.getElementById('AssessmentExteriorUploadImage0').click();
// }

// function AddAssessmentExteriorImage1() {
//     document.getElementById('AssessmentExteriorUploadImage1').click();
// }

// function AddAssessmentExteriorImage2() {
//     document.getElementById('AssessmentExteriorUploadImage2').click();
// }

// function AddAssessmentExteriorImage3() {
//     document.getElementById('AssessmentExteriorUploadImage3').click();
// }

// function AddAssessmentExteriorImage4() {
//     document.getElementById('AssessmentExteriorUploadImage4').click();
// }

// function AddAssessmentExteriorImage5() {
//     document.getElementById('AssessmentExteriorUploadImage5').click();
// }

// function AddAssessmentInteriorLivingImage0() {
//     document.getElementById('AssessmentInteriorLivingUploadImage0').click();
// }

// function AddAssessmentInteriorLivingImage1() {
//     document.getElementById('AssessmentInteriorLivingUploadImage1').click();
// }

// function AddAssessmentInteriorLivingImage2() {
//     document.getElementById('AssessmentInteriorLivingUploadImage2').click();
// }

// function AddAssessmentInteriorLivingImage3() {
//     document.getElementById('AssessmentInteriorLivingUploadImage3').click();
// }

// function AddAssessmentInteriorLivingImage4() {
//     document.getElementById('AssessmentInteriorLivingUploadImage4').click();
// }

// function AddAssessmentInteriorLivingImage5() {
//     document.getElementById('AssessmentInteriorLivingUploadImage5').click();
// }

// function AddAssessmentInteriorBedroomImage0() {
//     document.getElementById('AssessmentInteriorBedroomUploadImage0').click();
// }

// function AddAssessmentInteriorBedroomImage1() {
//     document.getElementById('AssessmentInteriorBedroomUploadImage1').click();
// }

// function AddAssessmentInteriorBedroomImage2() {
//     document.getElementById('AssessmentInteriorBedroomUploadImage2').click();
// }

// function AddAssessmentInteriorBedroomImage3() {
//     document.getElementById('AssessmentInteriorBedroomUploadImage3').click();
// }

// function AddAssessmentInteriorBedroomImage4() {
//     document.getElementById('AssessmentInteriorBedroomUploadImage4').click();
// }

// function AddAssessmentInteriorBedroomImage5() {
//     document.getElementById('AssessmentInteriorBedroomUploadImage5').click();
// }

// function AddAssessmentInteriorServiceImage0() {
//     document.getElementById('AssessmentInteriorServiceUploadImage0').click();
// }

// function AddAssessmentInteriorServiceImage1() {
//     document.getElementById('AssessmentInteriorServiceUploadImage1').click();
// }

// function AddAssessmentInteriorServiceImage2() {
//     document.getElementById('AssessmentInteriorServiceUploadImage2').click();
// }




// function RemoveAssessmentSiteImage0() {
//     RemoveImage('AssessmentSiteImage0', 'AssessmentSiteRemoveButton0', 'AddAssessmentSiteImageButton0', 'AssessmentSiteImageText0');
// }

// function RemoveAssessmentSiteImage1() {
//     RemoveImage('AssessmentSiteImage1', 'AssessmentSiteRemoveButton1', 'AddAssessmentSiteImageButton1', 'AssessmentSiteImageText1');
// }

// function RemoveAssessmentSiteImage2() {
//     RemoveImage('AssessmentSiteImage2', 'AssessmentSiteRemoveButton2', 'AddAssessmentSiteImageButton2', 'AssessmentSiteImageText2');
// }


// function RemoveAssessmentExteriorImage0() {
//     RemoveImage('AssessmentExteriorImage0', 'AssessmentExteriorRemoveButton0', 'AddAssessmentExteriorImageButton0', 'AssessmentExteriorImageText0');
// }

// function RemoveAssessmentExteriorImage1() {
//     RemoveImage('AssessmentExteriorImage1', 'AssessmentExteriorRemoveButton1', 'AddAssessmentExteriorImageButton1', 'AssessmentExteriorImageText1');
// }

// function RemoveAssessmentExteriorImage2() {
//     RemoveImage('AssessmentExteriorImage2', 'AssessmentExteriorRemoveButton2', 'AddAssessmentExteriorImageButton2', 'AssessmentExteriorImageText2');
// }

// function RemoveAssessmentExteriorImage3() {
//     RemoveImage('AssessmentExteriorImage3', 'AssessmentExteriorRemoveButton3', 'AddAssessmentExteriorImageButton3', 'AssessmentExteriorImageText3');
// }

// function RemoveAssessmentExteriorImage4() {
//     RemoveImage('AssessmentExteriorImage4', 'AssessmentExteriorRemoveButton4', 'AddAssessmentExteriorImageButton4', 'AssessmentExteriorImageText4');
// }

// function RemoveAssessmentExteriorImage5() {
//     RemoveImage('AssessmentExteriorImage5', 'AssessmentExteriorRemoveButton5', 'AddAssessmentExteriorImageButton5', 'AssessmentExteriorImageText5');
// }


// function RemoveAssessmentInteriorLivingImage0() {
//     RemoveImage('AssessmentInteriorLivingImage0', 'AssessmentInteriorLivingRemoveButton0', 'AddAssessmentInteriorLivingImageButton0', 'AssessmentInteriorLivingImageText0');
// }

// function RemoveAssessmentInteriorLivingImage1() {
//     RemoveImage('AssessmentInteriorLivingImage1', 'AssessmentInteriorLivingRemoveButton1', 'AddAssessmentInteriorLivingImageButton1', 'AssessmentInteriorLivingImageText1');
// }

// function RemoveAssessmentInteriorLivingImage2() {
//     RemoveImage('AssessmentInteriorLivingImage2', 'AssessmentInteriorLivingRemoveButton2', 'AddAssessmentInteriorLivingImageButton2', 'AssessmentInteriorLivingImageText2');
// }

// function RemoveAssessmentInteriorLivingImage3() {
//     RemoveImage('AssessmentInteriorLivingImage3', 'AssessmentInteriorLivingRemoveButton3', 'AddAssessmentInteriorLivingImageButton3', 'AssessmentInteriorLivingImageText3');
// }

// function RemoveAssessmentInteriorLivingImage4() {
//     RemoveImage('AssessmentInteriorLivingImage4', 'AssessmentInteriorLivingRemoveButton4', 'AddAssessmentInteriorLivingImageButton4', 'AssessmentInteriorLivingImageText4');
// }

// function RemoveAssessmentInteriorLivingImage5() {
//     RemoveImage('AssessmentInteriorLivingImage5', 'AssessmentInteriorLivingRemoveButton5', 'AddAssessmentInteriorLivingImageButton5', 'AssessmentInteriorLivingImageText5');
// }

// function RemoveAssessmentInteriorBedroomImage0() {
//     RemoveImage('AssessmentInteriorBedroomImage0', 'AssessmentInteriorBedroomRemoveButton0', 'AddAssessmentInteriorBedroomImageButton0', 'AssessmentInteriorBedroomImageText0');
// }

// function RemoveAssessmentInteriorBedroomImage1() {
//     RemoveImage('AssessmentInteriorBedroomImage1', 'AssessmentInteriorBedroomRemoveButton1', 'AddAssessmentInteriorBedroomImageButton1', 'AssessmentInteriorBedroomImageText1');
// }

// function RemoveAssessmentInteriorBedroomImage2() {
//     RemoveImage('AssessmentInteriorBedroomImage2', 'AssessmentInteriorBedroomRemoveButton2', 'AddAssessmentInteriorBedroomImageButton2', 'AssessmentInteriorBedroomImageText2');
// }

// function RemoveAssessmentInteriorBedroomImage3() {
//     RemoveImage('AssessmentInteriorBedroomImage3', 'AssessmentInteriorBedroomRemoveButton3', 'AddAssessmentInteriorBedroomImageButton3', 'AssessmentInteriorBedroomImageText3');
// }

// function RemoveAssessmentInteriorBedroomImage4() {
//     RemoveImage('AssessmentInteriorBedroomImage4', 'AssessmentInteriorBedroomRemoveButton4', 'AddAssessmentInteriorBedroomImageButton4', 'AssessmentInteriorBedroomImageText4');
// }

// function RemoveAssessmentInteriorBedroomImage5() {
//     RemoveImage('AssessmentInteriorBedroomImage5', 'AssessmentInteriorBedroomRemoveButton5', 'AddAssessmentInteriorBedroomImageButton5', 'AssessmentInteriorBedroomImageText5');
// }

// function RemoveAssessmentInteriorServiceImage0() {
//     RemoveImage('AssessmentInteriorServiceImage0', 'AssessmentInteriorServiceRemoveButton0', 'AddAssessmentInteriorServiceImageButton0', 'AssessmentInteriorServiceImageText0');
// }

// function RemoveAssessmentInteriorServiceImage1() {
//     RemoveImage('AssessmentInteriorServiceImage1', 'AssessmentInteriorServiceRemoveButton1', 'AddAssessmentInteriorServiceImageButton1', 'AssessmentInteriorServiceImageText1');
// }

// function RemoveAssessmentInteriorServiceImage2() {
//     RemoveImage('AssessmentInteriorServiceImage2', 'AssessmentInteriorServiceRemoveButton2', 'AddAssessmentInteriorServiceImageButton2', 'AssessmentInteriorServiceImageText2');
// }

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