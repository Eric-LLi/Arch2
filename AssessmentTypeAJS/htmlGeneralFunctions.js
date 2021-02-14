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
var global_Img;


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

/**
 * Images Related
 */


/**
* Cover Image Related
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
        console.log(imageName);
        loadImage.parseMetaData(imageFile, function (data) {
            //console.log('I am in loadImage function');
            var image = document.getElementById('AssessmentCoverImage');
            var removeButton = document.getElementById('AssessmentCoverImageRemoveButton');
            var rotateButton = document.getElementById('AssessmentCoverImageRotateButton');
            //if exif data available, update orientation
            var loadingImage = loadImage(imageFile, function (canvas) {
                var base64data = canvas.toDataURL(imageType);
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
                doUploadFile(file, 'AssessmentCoverImage', '', 'AssessmentCoverImageRemoveButton', '', '', 'cover image', '', '', '', '', '100%', '100%','AssessmentCoverImageRotateButton',"AssessmentCoverImageAngle");

            }, {
                canvas: true,
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
    var rotatebutton = document.getElementById('AssessmentCoverImageRotateButton');

    button.style.display = 'none';
    rotatebutton.style.display = 'none';
    //image.style.width = '0px';
    image.style.display = 'none';
    document.getElementById("AssessmentCoverImageAngle").value = "";

    doRemovePhoto('AssessmentCoverImage');
}

function RotateAssessmentCoverImage()
{
    var rotateAngle;
    var originalAngle = document.getElementById('AssessmentCoverImageAngle').value;
    console.log(originalAngle);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }


    var myImage = document.getElementById('AssessmentCoverImage');
    
    var rotateAngle = parseInt(originalAngle) + 90

    console.log(rotateAngle);

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        console.log("the degree is 90 or 270");
        myImage.style.marginTop = "100px";
        myImage.style.marginBottom = "100px";
        $("#AssessmentCoverImage").rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "30px";
        myImage.style.marginBottom = "30px";
        $("#AssessmentCoverImage").rotate(rotateAngle);
    }

       
    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById('AssessmentCoverImageAngle').value = rotateAngle
}

/**
 * Use this to rotate the cover image when the HTML report is loaded. 
 */
function RotateSavedCoverImage()
{
    //console.log("RotateSavedCoverImage");
    var myImage = document.getElementById('AssessmentCoverImage');
    var originalAngle = parseInt(document.getElementById('AssessmentCoverImageAngle').value);
    var rotateBtn = document.getElementById('AssessmentCoverImageRotateButton');

    //Check if there is save cover image from the last time. 
    if (myImage.src.includes("photos/") > 0) 
    {
        //console.log("there is saved cover image,need to dispaly the rotate button");
        rotateBtn.style.display = 'block';
        //check if the cover image need to be rotated;            
        //console.log("in");
        if(originalAngle == 90 || originalAngle == 270)
        {
            // console.log("the degree is 90 or 270");
            myImage.style.marginTop = "130px";
            myImage.style.marginBottom = "130px";
            $("#AssessmentCoverImage").rotate(originalAngle);
        }
        else if(originalAngle == 180)
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
            $("#AssessmentCoverImage").rotate(originalAngle);
        }
        else 
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
        }

    }
}




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



$('#AssessmentSiteUploadImages').click(function () {
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentSiteUploadImages").change(function () {
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
                var imageID = 'AssessmentSiteImage' + elementID;
                var textID = 'AssessmentSiteImageText' + elementID;
                var labelID = 'AssessmentSiteImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentSiteRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentSiteImageButton' + elementID;
                var uploadID = 'AssessmentSiteUploadImage' + elementID;
                var rotateButtonID = 'AssessmentSiteRotateImageButton' + elementID;
                var imgAngleInputID = 'AssessmentSiteImageAngle' + elementID;
                var formID = "SiteGardonForm" + elementID;

                var element = createImagesElements("AccessmentSiteImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentSiteImagesContainer');

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
                automaticNumbering('AccessmentSiteImagesContainer');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'AssessmentSiteImage' + elementID;
                var textID = 'AssessmentSiteImageText' + elementID;
                var labelID = 'AssessmentSiteImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentSiteRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentSiteImageButton' + elementID;
                var uploadID = 'AssessmentSiteUploadImage' + elementID;
                var rotateButtonID = 'AssessmentSiteRotateImageButton' + elementID;
                var imgAngleInputID = 'AssessmentSiteImageAngle' + elementID;
                var formID = "SiteGardonForm" + elementID;

                var element = createImagesElements("AccessmentSiteImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentSiteImagesContainer');

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
                automaticNumbering('AccessmentSiteImagesContainer');
                var nextID = count + 1;
                createEmptElementForAddingImg("AccessmentSiteImagesContainer",nextID);
            }, 800);
        }
    }
});

$('#AssessmentExteriorUploadImages').click(function () {
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentExteriorUploadImages").change(function () {

    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#AccessmentExteriorImagesContainer form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentExteriorImagesContainer").empty();
        }
        if (count >= 6) 
        {
            if(count > 6)
            {
                alert("You can only select 3 images. It will only display the first 3 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 6; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'AssessmentExteriorImage' + elementID;
                var textID = 'AssessmentExteriorImageText' + elementID;
                var labelID = 'AssessmentExteriorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentExteriorRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentExteriorImageButton' + elementID;
                var uploadID = 'AssessmentExteriorUploadImage' + elementID;
                var rotateButtonID = 'AssessmentExteriorRotateImageButton' + elementID;
                var imgAngleInputID = 'AssessmentExteriorImageAngle' + elementID;
                var formID = "ExteriorForm" + elementID;

                var element = createImagesElements("AccessmentExteriorImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentExteriorImagesContainer');

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
                automaticNumbering('AccessmentExteriorImagesContainer');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'AssessmentExteriorImage' + elementID;
                var textID = 'AssessmentExteriorImageText' + elementID;
                var labelID = 'AssessmentExteriorImageLable' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentExteriorRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentExteriorImageButton' + elementID;
                var uploadID = 'AssessmentExteriorUploadImage' + elementID;
                var rotateButtonID = 'AssessmentExteriorRotateImageButton' + elementID;
                var imgAngleInputID = 'AssessmentExteriorImageAngle' + elementID;
                var formID = "ExteriorForm" + elementID;

                var element = createImagesElements("AccessmentExteriorImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentExteriorImagesContainer');

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
                automaticNumbering('AccessmentExteriorImagesContainer');
                var nextID = count + 1;
                createEmptElementForAddingImg("AccessmentExteriorImagesContainer",nextID);
            }, 800);
        }
    }
});

$('#AssessmentInteriorLivingUploadImages').click(function () {
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentInteriorLivingUploadImages").change(function () {

    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#AccessmentInteriorLivingImagesContainer form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentInteriorLivingImagesContainer").empty();
        }
        if (count >= 6) 
        {
            if(count > 6)
            {
                alert("You can only select 6 images. It will only display the first 6 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 6; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'AssessmentInteriorLivingImage' + elementID;
                var textID = 'AssessmentInteriorLivingImageText' + elementID;
                var labelID = 'Livinglabel' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentInteriorLivingRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentInteriorLivingImageButton' + elementID;
                var uploadID = 'AssessmentExteriorUploadImage' + elementID;
                var rotateButtonID = 'RotateAssessmentInteriorLivingImageButton' + elementID;
                var imgAngleInputID = 'AssessmentInteriorLivingImageAngle' + elementID;
                var formID = "LivingForm" + elementID;

                var element = createImagesElements("AccessmentInteriorLivingImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentInteriorLivingImagesContainer');
            
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
                automaticNumbering('AccessmentInteriorLivingImagesContainer');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'AssessmentInteriorLivingImage' + elementID;
                var textID = 'AssessmentInteriorLivingImageText' + elementID;
                var labelID = 'Livinglabel' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentInteriorLivingRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentInteriorLivingImageButton' + elementID;
                var uploadID = 'AssessmentExteriorUploadImage' + elementID;
                var rotateButtonID = 'RotateAssessmentInteriorLivingImageButton' + elementID;
                var imgAngleInputID = 'AssessmentInteriorLivingImageAngle' + elementID;
                var formID = "LivingForm" + elementID;

                var element = createImagesElements("AccessmentInteriorLivingImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentInteriorLivingImagesContainer');
            
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
                automaticNumbering('AccessmentInteriorLivingImagesContainer');
                var nextID = count + 1;
                createEmptElementForAddingImg("AccessmentInteriorLivingImagesContainer",nextID);
            }, 800);
        }
    }
});

$('#AssessmentInteriorBedroomUploadImages').click(function () {
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentInteriorBedroomUploadImages").change(function () {

    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#AccessmentInteriorBedroomImagesContainer form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentInteriorBedroomImagesContainer").empty();
        }
        if (count >= 6) 
        {
            if(count > 6)
            {
                alert("You can only select 6 images. It will only display the first 6 photos");
            }
            //Only save 3 files.
            for (let i = 0; i < 6; i++)
            {
                allImages.push(this.files[i]);
            }
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements
                var imageID = 'AssessmentInteriorBedroomImage' + elementID;
                var textID = 'AssessmentInteriorBedroomImageText' + elementID;
                var labelID = 'Bedroomlabel' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentInteriorBedroomRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentInteriorBedroomImageButton' + elementID;
                var uploadID = 'AssessmentInteriorBedroomUploadImage' + elementID;
                var rotateButtonID = 'RotateAssessmentInteriorBedroomImageButton' + elementID;
                var imgAngleInputID = 'AssessmentInteriorBedroomImageAngle' + elementID;
                var formID = "BedroomForm" + elementID;

                var element = createImagesElements("AccessmentInteriorBedroomImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentInteriorBedroomImagesContainer');
            
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
                automaticNumbering('AccessmentInteriorBedroomImagesContainer');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'AssessmentInteriorBedroomImage' + elementID;
                var textID = 'AssessmentInteriorBedroomImageText' + elementID;
                var labelID = 'Bedroomlabel' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentInteriorBedroomRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentInteriorBedroomImageButton' + elementID;
                var uploadID = 'AssessmentInteriorBedroomUploadImage' + elementID;
                var rotateButtonID = 'RotateAssessmentInteriorBedroomImageButton' + elementID;
                var imgAngleInputID = 'AssessmentInteriorBedroomImageAngle' + elementID;
                var formID = "BedroomForm" + elementID;

                var element = createImagesElements("AccessmentInteriorBedroomImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentInteriorBedroomImagesContainer');
            
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
                automaticNumbering('AccessmentInteriorBedroomImagesContainer');
                var nextID = count + 1;
                createEmptElementForAddingImg("AccessmentInteriorBedroomImagesContainer",nextID);
            }, 800);
        }
    }

});

$('#AssessmentInteriorServiceUploadImages').click(function () {
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentInteriorServiceUploadImages").change(function () {
    if (!isEmpty(this.files)) 
    {
        //Check exitsing images
        var count = this.files.length;
        var imageIDs = $("#AccessmentInteriorServiceImagesContainer form");

        var allImages = [];

        var elementID;

        //Clear all images.
        if (!isEmpty(imageIDs)) {
            for (var i = 0; i < imageIDs.length; i++) {
                var imgID = imageIDs.eq(i).children("img").attr("id");
                doRemovePhoto(imgID);
            }
            $("#AccessmentInteriorServiceImagesContainer").empty();
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
                var imageID = 'AssessmentInteriorServiceImage' + elementID;
                var textID = 'AssessmentInteriorServiceImageText' + elementID;
                var labelID = 'Servicelabel' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentInteriorServiceRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentInteriorServiceImageButton' + elementID;
                var uploadID = 'AssessmentInteriorServiceUploadImage' + elementID;
                var rotateButtonID = 'RotateAssessmentInteriorServiceImageButton' + elementID;
                var imgAngleInputID = 'AssessmentInteriorServiceImageAngle' + elementID;
                var formID = "ServiceForm" + elementID;

                var element = createImagesElements("AccessmentInteriorServiceImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentInteriorServiceImagesContainer');

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
                automaticNumbering('AccessmentInteriorServiceImagesContainer');
            }, 800);
        } 
        else
        {
            allImages = this.files;
                   
            Object.keys(allImages).forEach(i => {
                const file = allImages[i];
                elementID = parseInt(i) + 1;
                //Create elements

                var imageID = 'AssessmentInteriorServiceImage' + elementID;
                var textID = 'AssessmentInteriorServiceImageText' + elementID;
                var labelID = 'Servicelabel' + elementID;
                var labelValue = 'IMG' + (parseInt(elementID) + 1);
                var removeButtonID = 'AssessmentInteriorServiceRemoveButton' + elementID;
                var addButtonID = 'AddAssessmentInteriorServiceImageButton' + elementID;
                var uploadID = 'AssessmentInteriorServiceUploadImage' + elementID;
                var rotateButtonID = 'RotateAssessmentInteriorServiceImageButton' + elementID;
                var imgAngleInputID = 'AssessmentInteriorServiceImageAngle' + elementID;
                var formID = "ServiceForm" + elementID;

                var element = createImagesElements("AccessmentInteriorServiceImages", imageID, labelID, labelValue,
                                                    textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'AccessmentInteriorServiceImagesContainer');

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
                automaticNumbering('AccessmentInteriorServiceImagesContainer');
                var nextID = count + 1;
                createEmptElementForAddingImg("AccessmentInteriorServiceImagesContainer",nextID);
            }, 800);
        }
    }
});


/**
 * Single Action, image related
 * Add One Image
 */
/**
 * Single Action, image related
 * Add One Image
 */
$('#AssessmentUploadOneImage').click(function () {
    //console.log(this.value);
    this.value = null;
});
$("#AssessmentUploadOneImage").on('change', function (e) {
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
            if(element[9] === 'AccessmentSiteImagesContainer' || element[9] === 'AccessmentInteriorServiceImagesContainer'  )
            {
                //console.log("I am in");
                if(imgscount < 3)
                {
                    console.log("need to add new image form");
                    var selectedID = String(element[0]).replace(/[^\d.]/g, '');
                    var nextID = parseInt(selectedID) + 1; 
                    createEmptElementForAddingImg(element[9],nextID);
                }
            }   
            else
            {
                //console.log("I am in");
                if(imgscount < 6)
                {
                    console.log("need to add new image form");
                    var selectedID = String(element[0]).replace(/[^\d.]/g, '');
                    var nextID = parseInt(selectedID) + 1; 
                    createEmptElementForAddingImg(element[9],nextID);
                }
            }
        }, 100);

    }

});


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
        console.log("the degree is 90 or 270");
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
    //console.log('deleting');
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

    //console.log(nextid);

    automaticNumbering(element[9]);
    if(myImage.style.display != 'none')
    {
        console.log("the last img form is full, check if need to create a new img form and refresh img number");
        if(element[9] === 'AccessmentSiteImagesContainer' || element[9] === 'AccessmentInteriorServiceImagesContainer'  )
        {
            //console.log("I am in");
            if(imgscount < 3)
            {
                console.log("need to add new image form");
                var selectedID = String(element[0]).replace(/[^\d.]/g, '');
                var nextID = parseInt(selectedID) + 1; 
                createEmptElementForAddingImg(element[9],nextid);
            }
        }   
        else
        {
            //console.log("I am in");
            if(imgscount < 6)
            {
                console.log("need to add new image form");
                var selectedID = String(element[0]).replace(/[^\d.]/g, '');
                var nextID = parseInt(selectedID) + 1; 
                createEmptElementForAddingImg(element[9],nextid);
            }
        }
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
        $("#AssessmentUploadOneImage").click();
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
    var nextImageID,nextTextID,nextLabelID,nextLableValue,nextRemoveButtonID,nextAddButtonID,nextUploadID,nextRotateBtnID,nextAngelInputID,nextFormID,emptyElement;

    if(divID == "AccessmentSiteImagesContainer")
    {
        nextAltName = 'image ' + nextID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        nextImageID = 'AssessmentSiteImage' + nextID;
        nextTextID = 'AssessmentSiteImageText' + nextID;
        nextLabelID = 'AssessmentSiteImageLable' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'AssessmentSiteRemoveButton' + nextID;
        nextAddButtonID = 'AddAssessmentSiteImageButton' + nextID;
        nextUploadID = 'AssessmentSiteUploadImage' + nextID;
        nextRotateBtnID = 'AssessmentSiteRotateImageButton' + nextID;
        nextAngelInputID = 'AssessmentSiteImageAngle' + nextID;
        nextFormID = "SiteGardonForm" + nextID;
        // addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
        //     'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px',nextRotateBtnID,nextAngelInputID);
        emptyElement = createImagesElements('AccessmentSiteImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentSiteImagesContainer');

    }
    else if(divID == 'AccessmentExteriorImagesContainer')
    {
        nextImageID = 'AssessmentExteriorImage' + nextID;
        nextTextID = 'AssessmentExteriorImageText' + nextID;
        nextLabelID = 'AssessmentExteriorImageLable' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'AssessmentExteriorRemoveButton' + nextID;
        nextAddButtonID = 'AddAssessmentExteriorImageButton' + nextID;
        nextUploadID = 'AssessmentExteriorUploadImage' + nextID;
        nextRotateBtnID = 'AssessmentExteriorRotateImageButton' + nextID;
        nextAngelInputID = 'AssessmentExteriorImageAngle' + nextID;
        nextFormID = "ExteriorForm" + nextID;

        emptyElement = createImagesElements('AccessmentExteriorImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentExteriorImagesContainer');

    }
    else if(divID == 'AccessmentInteriorLivingImagesContainer')
    {
        nextImageID = 'AssessmentInteriorLivingImage' + nextID;
        nextTextID = 'AssessmentInteriorLivingImageText' + nextID;
        nextLabelID = 'Livinglabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'AssessmentInteriorLivingRemoveButton' + nextID;
        nextAddButtonID = 'AddAssessmentInteriorLivingImageButton' + nextID;
        nextUploadID = 'AssessmentExteriorUploadImage' + nextID;
        nextRotateBtnID = 'RotateAssessmentInteriorLivingImageButton' + nextID;
        nextAngelInputID = 'AssessmentInteriorLivingImageAngle' + nextID;
        nextFormID = "LivingForm" + nextID;

        emptyElement = createImagesElements('AccessmentInteriorLivingImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentInteriorLivingImagesContainer');

    }
    else if(divID == 'AccessmentInteriorBedroomImagesContainer')
    {
        nextImageID = 'AssessmentInteriorBedroomImage' + nextID;
        nextTextID = 'AssessmentInteriorBedroomImageText' + nextID;
        nextLabelID = 'Bedroomlabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'AssessmentInteriorBedroomRemoveButton' + nextID;
        nextAddButtonID = 'AddAssessmentInteriorBedroomImageButton' + nextID;
        nextUploadID = 'AssessmentInteriorBedroomUploadImage' + nextID;
        nextRotateBtnID = 'RotateAssessmentInteriorBedroomImageButton' + nextID;
        nextAngelInputID = 'AssessmentInteriorBedroomImageAngle' + nextID;
        nextFormID = "BedroomForm" + nextID;

        emptyElement = createImagesElements('AccessmentInteriorBedroomImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentInteriorBedroomImagesContainer');

    }
    else if(divID == 'AccessmentInteriorServiceImagesContainer')
    {
        nextImageID = 'AssessmentInteriorServiceImage' + nextID;
        nextTextID = 'AssessmentInteriorServiceImageText' + nextID;
        nextLabelID = 'Servicelabel' + nextID;
        nextLableValue = 'IMG' + (parseInt(nextID) + 1);
        nextRemoveButtonID = 'AssessmentInteriorServiceRemoveButton' + nextID;
        nextAddButtonID = 'AddAssessmentInteriorServiceImageButton' + nextID;
        nextUploadID = 'AssessmentInteriorServiceUploadImage' + nextID;
        nextRotateBtnID = 'RotateAssessmentInteriorServiceImageButton' + nextID;
        nextAngelInputID = 'AssessmentInteriorServiceImageAngle' + nextID;
        nextFormID = "ServiceForm" + nextID;

        emptyElement = createImagesElements('AccessmentInteriorServiceImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentInteriorServiceImagesContainer');

    }
    console.log(emptyElement);
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

        if(divID === "AccessmentSiteImagesContainer")
        {
            //console.log("I am in AccessmentSiteImagesContainer");
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
             nextImageID = 'AssessmentSiteImage' + newID;
             nextTextID = 'AssessmentSiteImageText' + newID;
             nextLabelID = 'AssessmentSiteImageLable' + newID;
             nextLableValue = 'IMG' + (parseInt(newID) + 1);
             nextRemoveButtonID = 'AssessmentSiteRemoveButton' + newID;
             nextAddButtonID = 'AddAssessmentSiteImageButton' + newID;
             nextUploadID = 'AssessmentSiteUploadImage' + newID;
             nextRotateBtnID = 'AssessmentSiteRotateImageButton' + newID;
             nextAngelInputID = 'AssessmentSiteImageAngle' + newID;
             nextFormID = "SiteGardonForm" + newID;
            // addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
            //     'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px',nextRotateBtnID,nextAngelInputID);
             emptyElement = createImagesElements('AccessmentSiteImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentSiteImagesContainer');
    
        }
        else if(divID === "AccessmentExteriorImagesContainer")
        {
            //console.log("I am in AccessmentExteriorImagesContainer");
            nextAltName = 'image ' + altID;
            //console.log("I am here!!! need another image element ,the next id  " + newID);
            nextImageID = 'AssessmentExteriorImage' + newID;
            nextTextID = 'AssessmentExteriorImageText' + newID;
            nextLabelID = 'AssessmentExteriorImageLable' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'AssessmentExteriorRemoveButton' + newID;
            nextAddButtonID = 'AddAssessmentExteriorImageButton' + newID;
            nextUploadID = 'AssessmentExteriorUploadImage' + newID;
            nextRotateBtnID = 'AssessmentExteriorRotateImageButton' + newID;
            nextAngelInputID = 'AssessmentExteriorImageAngle' + newID;
            nextFormID = "ExteriorForm" + newID;
            
            emptyElement = createImagesElements('AccessmentExteriorImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentExteriorImagesContainer');
    
        }
        else if(divID == 'AccessmentInteriorLivingImagesContainer')
        {
            nextImageID = 'AssessmentInteriorLivingImage' + newID;
            nextTextID = 'AssessmentInteriorLivingImageText' + newID;
            nextLabelID = 'Livinglabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'AssessmentInteriorLivingRemoveButton' + newID;
            nextAddButtonID = 'AddAssessmentInteriorLivingImageButton' + newID;
            nextUploadID = 'AssessmentExteriorUploadImage' + newID;
            nextRotateBtnID = 'RotateAssessmentInteriorLivingImageButton' + newID;
            nextAngelInputID = 'AssessmentInteriorLivingImageAngle' + newID;
            nextFormID = "LivingForm" + newID;
    
            emptyElement = createImagesElements('AccessmentInteriorLivingImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentInteriorLivingImagesContainer');
    
        }
        else if(divID == 'AccessmentInteriorBedroomImagesContainer')
        {
            nextImageID = 'AssessmentInteriorBedroomImage' + newID;
            nextTextID = 'AssessmentInteriorBedroomImageText' + newID;
            nextLabelID = 'Bedroomlabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'AssessmentInteriorBedroomRemoveButton' + newID;
            nextAddButtonID = 'AddAssessmentInteriorBedroomImageButton' + newID;
            nextUploadID = 'AssessmentInteriorBedroomUploadImage' + newID;
            nextRotateBtnID = 'RotateAssessmentInteriorBedroomImageButton' + newID;
            nextAngelInputID = 'AssessmentInteriorBedroomImageAngle' + newID;
            nextFormID = "BedroomForm" + newID;

            emptyElement = createImagesElements('AccessmentInteriorBedroomImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentInteriorBedroomImagesContainer');

        }
        else if(divID == 'AccessmentInteriorServiceImagesContainer')
        {
            nextImageID = 'AssessmentInteriorServiceImage' + newID;
            nextTextID = 'AssessmentInteriorServiceImageText' + newID;
            nextLabelID = 'Servicelabel' + newID;
            nextLableValue = 'IMG' + (parseInt(newID) + 1);
            nextRemoveButtonID = 'AssessmentInteriorServiceRemoveButton' + newID;
            nextAddButtonID = 'AddAssessmentInteriorServiceImageButton' + newID;
            nextUploadID = 'AssessmentInteriorServiceUploadImage' + newID;
            nextRotateBtnID = 'RotateAssessmentInteriorServiceImageButton' + newID;
            nextAngelInputID = 'AssessmentInteriorServiceImageAngle' + newID;
            nextFormID = "ServiceForm" + newID;

            emptyElement = createImagesElements('AccessmentInteriorServiceImages', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'AccessmentInteriorServiceImagesContainer');

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

function reorderImages(divid) {
    //console.log("reorderImages");
    var totalContainers = $('#' + divid).find('> form');
    //console.log(totalContainers);
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
                console.log("the degree is 90 or 270");
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

        var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,divid,rotateBtnID,angleID];

        var removeBtn = document.getElementById(totalContainers.eq(i).children('input').eq(2).get(0).id);
        var rotateBtn = document.getElementById(totalContainers.eq(i).children('input').eq(4).get(0).id);

        var removeFunction = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + divid + "','" + rotateBtnID +  "','" + angleID + "'])";

        var rotateFunction = "RotateOneImage(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + divid + "','"+ rotateBtnID +  "','" + angleID +"'])";
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

//AA-106, make sure these fields get the date from the database related fields. even after the user update in the booking system, 
//AA-110, make sure the other fileds will display and show after the page is fully load. 
//AA-111,make sure the comobotree load the json fild after the page load, and get the save array correctly. 
$(document).ready(function () {
    checkReloadOther();
    RotateSavedCoverImage();
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
    //createEmptElementForAddingImg();

    //createEmptElementForAddingImg2('AccessmentSiteImages','AccessmentSiteImagesContainer',3);
    AddNewImageForm('AccessmentSiteImagesContainer',3);
    AddNewImageForm('AccessmentExteriorImagesContainer',6);
    AddNewImageForm('AccessmentInteriorLivingImagesContainer',6);
    AddNewImageForm('AccessmentInteriorBedroomImagesContainer',6);
    AddNewImageForm('AccessmentInteriorServiceImagesContainer',3);

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