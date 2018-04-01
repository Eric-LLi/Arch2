//button trigger events，"choose all photos" button

function TimberCover()
{
    document.getElementById('TimberUploadCoverImage').click();
}

function TimberSummaryUploadImages() {
    document.getElementById('TimberSummaryUploadImages').click();
}

function TimberRecommendationUploadImages() {
    document.getElementById('TimberRecommendationUploadImages').click();
}

function TimberSiteUploadImages() {
    document.getElementById('TimberSiteUploadImages').click();
}

function TimberExteriorUploadImages() {
    document.getElementById('TimberExteriorUploadImages').click();
}

function TimberInteriorUploadImages() {
    document.getElementById('TimberInteriorUploadImages').click();
}

function TimberRoofUploadImages() {
    document.getElementById('TimberRoofUploadImages').click();
}

function TimberSubfloorUploadImages() {
    document.getElementById('TimberSubfloorUploadImages').click();
}

function AssessmentCoverImage(){
    document.getElementById('AssessmentUploadCoverImage').click();
}

function AssessmentSiteUploadImages(){
    document.getElementById('AssessmentSiteUploadImages').click();
}

function AssessmentExteriorUploadImages() {
    document.getElementById('AssessmentExteriorUploadImages').click();
}

function AssessmentInteriorLivingUploadImages() {

    document.getElementById('AssessmentInteriorLivingUploadImages').click();
}

function AssessmentInteriorBedroomUploadImages() {

    document.getElementById('AssessmentInteriorBedroomUploadImages').click();
}

function AseessmentInteriorServiceUploadImages() {
    document.getElementById('AseessmentInteriorServiceUploadImages').click();
}

function MaintenanceCover(){
    document.getElementById('MaintenanceUploadCoverImage').click();
}
function MaintenanceUploadImages() {
    document.getElementById('MaintenanceUploadImages').click();
}

function MaintenanceUploadDrawings() {
    document.getElementById('MaintenanceUploadDrawings').click();
}

function ConstructionUploadImages(){
    document.getElementById('ConstructionUploadImages').click();
}

function ConstructionCover(){
    document.getElementById('ConstructionUploadCoverImage').click();
}

function AdviceCover(){
    document.getElementById('AdviceUploadCoverImage').click();
}

function AdviceUploadImage(){
    document.getElementById('AdviceUploadImages').click();
}


function HomeFeasibilityCover()
{
    document.getElementById('HomeFeasibilityUploadCoverImage').click();
}

function DilapidationCover()
{
    document.getElementById('HomeDilapidationUploadCoverImage').click();
}

function DilapidationUploadImage()
{
    document.getElementById('DilapidationUploadImages').click();
}

function RenovationFeasibilityCover()
{
    document.getElementById('RenovationFeasibilityUploadCoverImage').click();
}

//Upload Cover images
$('#RenovationFeasibilityUploadCoverImage').change(function(){
    uploadCoverImage(this,'RenovationFeasibilityCoverImage','RenovationFeasibilityCoverImageRemoveButton','inherit')
});

$('#AdviceUploadCoverImage').change(function(){
    uploadCoverImage(this,'AdviceCoverImage','AdviceCoverImageRemoveButton','500px')
});

$('#TimberUploadCoverImage').change(function(){
    uploadCoverImage(this,'TimberCoverImage','TimberCoverImageRemoveButton','500px')

});

$('#HomeDilapidationUploadCoverImage').change(function(){
    uploadCoverImage(this,'HomeDilapidationCoverImage','DilapidationCoverImageRemoveButton','500px')

});

$('#HomeFeasibilityUploadCoverImage').change(function(){
    uploadCoverImage(this,'HomeFeasibilityCoverImage','HomeFeasibilityCoverImageRemoveButton','inherit')
});
//Upload all images
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

$("#AssessmentUploadCoverImage").change(function(){
    uploadCoverImage(this,'AssessmentCoverImage','AssessmentCoverImageRemoveButton','inherit');

});

$("#AssessmentSiteUploadImages").change(function () {
    read3ImagesURL(this, 'AddAssessmentSiteImageButton0', 'AddAssessmentSiteImageButton1', 'AddAssessmentSiteImageButton2', 'AssessmentSiteImage0', 'AssessmentSiteImage1', 'AssessmentSiteImage2', 'AssessmentSiteImageText0', 'AssessmentSiteImageText1', 'AssessmentSiteImageText2', 'AssessmentSiteRemoveButton0', 'AssessmentSiteRemoveButton1', 'AssessmentSiteRemoveButton2');
    //  read6ImagesURL(this,'AddAssessmentSiteImageButton0','AddAssessmentSiteImageButton1','AddAssessmentSiteImageButton2','AddAssessmentSiteImageButton3','AddAssessmentSiteImageButton4','AddAssessmentSiteImageButton5','AssessmentSiteImage0','AssessmentSiteImage1','AssessmentSiteImage2','AssessmentSiteImage3','AssessmentSiteImage4','AssessmentSiteImage5','AssessmentSiteImageText0','AssessmentSiteImageText1','AssessmentSiteImageText2','AssessmentSiteImageText3','AssessmentSiteImageText4','AssessmentSiteImageText5','AssessmentSiteRemoveButton0','AssessmentSiteRemoveButton1','AssessmentSiteRemoveButton2','AssessmentSiteRemoveButton3','AssessmentSiteRemoveButton4','AssessmentSiteRemoveButton5'); 
});
$("#AssessmentExteriorUploadImages").change(function () {
    read6ImagesURL(this, 'AddAssessmentExteriorImageButton0', 'AddAssessmentExteriorImageButton1', 'AddAssessmentExteriorImageButton2', 'AddAssessmentExteriorImageButton3', 'AddAssessmentExteriorImageButton4', 'AddAssessmentExteriorImageButton5', 'AssessmentExteriorImage0', 'AssessmentExteriorImage1', 'AssessmentExteriorImage2', 'AssessmentExteriorImage3', 'AssessmentExteriorImage4', 'AssessmentExteriorImage5', 'AssessmentExteriorImageText0', 'AssessmentExteriorImageText1', 'AssessmentExteriorImageText2', 'AssessmentExteriorImageText3', 'AssessmentExteriorImageText4', 'AssessmentExteriorImageText5', 'AssessmentExteriorRemoveButton0', 'AssessmentExteriorRemoveButton1', 'AssessmentExteriorRemoveButton2', 'AssessmentExteriorRemoveButton3', 'AssessmentExteriorRemoveButton4', 'AssessmentExteriorRemoveButton5');
});
$("#AssessmentInteriorLivingUploadImages").change(function () {
    read6ImagesURL(this, 'AddAssessmentInteriorLivingImageButton0', 'AddAssessmentInteriorLivingImageButton1', 'AddAssessmentInteriorLivingImageButton2', 'AddAssessmentInteriorLivingImageButton3', 'AddAssessmentInteriorLivingImageButton4', 'AddAssessmentInteriorLivingImageButton5', 'AssessmentInteriorLivingImage0', 'AssessmentInteriorLivingImage1', 'AssessmentInteriorLivingImage2', 'AssessmentInteriorLivingImage3', 'AssessmentInteriorLivingImage4', 'AssessmentInteriorLivingImage5', 'AssessmentInteriorLivingImageText0', 'AssessmentInteriorLivingImageText1', 'AssessmentInteriorLivingImageText2', 'AssessmentInteriorLivingImageText3', 'AssessmentInteriorLivingImageText4', 'AssessmentInteriorLivingImageText5', 'AssessmentInteriorLivingRemoveButton0', 'AssessmentInteriorLivingRemoveButton1', 'AssessmentInteriorLivingRemoveButton2', 'AssessmentInteriorLivingRemoveButton3', 'AssessmentInteriorLivingRemoveButton4', 'AssessmentInteriorLivingRemoveButton5');
});
$("#AssessmentInteriorBedroomUploadImages").change(function () {
    read6ImagesURL(this, 'AddAssessmentInteriorBedroomImageButton0', 'AddAssessmentInteriorBedroomImageButton1', 'AddAssessmentInteriorBedroomImageButton2', 'AddAssessmentInteriorBedroomImageButton3', 'AddAssessmentInteriorBedroomImageButton4', 'AddAssessmentInteriorBedroomImageButton5', 'AssessmentInteriorBedroomImage0', 'AssessmentInteriorBedroomImage1', 'AssessmentInteriorBedroomImage2', 'AssessmentInteriorBedroomImage3', 'AssessmentInteriorBedroomImage4', 'AssessmentInteriorBedroomImage5', 'AssessmentInteriorBedroomImageText0', 'AssessmentInteriorBedroomImageText1', 'AssessmentInteriorBedroomImageText2', 'AssessmentInteriorBedroomImageText3', 'AssessmentInteriorBedroomImageText4', 'AssessmentInteriorBedroomImageText5', 'AssessmentInteriorBedroomRemoveButton0', 'AssessmentInteriorBedroomRemoveButton1', 'AssessmentInteriorBedroomRemoveButton2', 'AssessmentInteriorBedroomRemoveButton3', 'AssessmentInteriorBedroomRemoveButton4', 'AssessmentInteriorBedroomRemoveButton5');
});
$("#AseessmentInteriorServiceUploadImages").change(function () {
    read3ImagesURL(this, 'AddAssessmentInteriorServiceImageButton0', 'AddAssessmentInteriorServiceImageButton1', 'AddAssessmentInteriorServiceImageButton2', 'AssessmentInteriorServiceImage0', 'AssessmentInteriorServiceImage1', 'AssessmentInteriorServiceImage2', 'AssessmentInteriorServiceImageText0', 'AssessmentInteriorServiceImageText1', 'AssessmentInteriorServiceImageText2', 'AssessmentInteriorServiceRemoveButton0', 'AssessmentInteriorServiceRemoveButton1', 'AssessmentInteriorServiceRemoveButton2');
});


$("#MaintenanceUploadCoverImage").change(function(){
    uploadCoverImage(this,'MaintenanceCoverImage','MaintenanceCoverImageRemoveButton','500px')
});

$("#MaintenanceUploadImages").change(function () {
    $("#MaintenancePhotographs").empty();
    var table = document.getElementById("MaintenanceSummaryImages");
    table.style.display = 'block';
    var count = this.files.length;
    console.log(count);
    //check the number of image 
    if (count > 40) {
        alert("You can only select 40 images. It will only display the first 40 photos");
    }

    if (this.files && this.files[0]) {
        //divID,imageID,imageTextID, removeButtonID, addButtonID, uploadFileID ,removeFunction,addFunction
        addImageElements('image1', 'MaintenancePhotographs', 'MaintenanceImage0', 'MaintenanceImageText0',
            'MaintenanceRemoveButton0', 'AddMaintenanceImageButton0', 'MaintenanceUploadImage0',
            'RemoveMaintenanceImage0()', 'AddMaintenanceImage0()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage0').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton0').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton0').style.display = 'block';
            document.getElementById('MaintenanceImageText0').style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);

    }

    if (this.files && this.files[1]) {
        addImageElements('image2', 'MaintenancePhotographs', 'MaintenanceImage1', 'MaintenanceImageText1',
            'MaintenanceRemoveButton1', 'AddMaintenanceImageButton1', 'MaintenanceUploadImage1',
            'RemoveMaintenanceImage1()', 'AddMaintenanceImage1()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage1').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton1').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton1').style.display = 'block';
            document.getElementById('MaintenanceImageText1').style.display = 'block';
        };
        reader.readAsDataURL(this.files[1]);
    } else {
        addImageElements('image2', 'MaintenancePhotographs', 'MaintenanceImage1', 'MaintenanceImageText1',
            'MaintenanceRemoveButton1', 'AddMaintenanceImageButton1', 'MaintenanceUploadImage1',
            'RemoveMaintenanceImage1()', 'AddMaintenanceImage1()', '510px','0px');
    }

    if (this.files && this.files[2]) {
        addImageElements('image3', 'MaintenancePhotographs', 'MaintenanceImage2', 'MaintenanceImageText2',
            'MaintenanceRemoveButton2', 'AddMaintenanceImageButton2', 'MaintenanceUploadImage2',
            'RemoveMaintenanceImage2()', 'AddMaintenanceImage2()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage2').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton2').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton2').style.display = 'block';
            document.getElementById('MaintenanceImageText2').style.display = 'block';
        };
        reader.readAsDataURL(this.files[2]);
    } else {
        addImageElements('image3', 'MaintenancePhotographs', 'MaintenanceImage2', 'MaintenanceImageText2',
            'MaintenanceRemoveButton2', 'AddMaintenanceImageButton2', 'MaintenanceUploadImage2',
            'RemoveMaintenanceImage2()', 'AddMaintenanceImage2()', '510px','0px');
    }



    if (this.files && this.files[3]) {
        addImageElements('image4', 'MaintenancePhotographs', 'MaintenanceImage3', 'MaintenanceImageText3',
            'MaintenanceRemoveButton3', 'AddMaintenanceImageButton3', 'MaintenanceUploadImage3',
            'RemoveMaintenanceImage3()', 'AddMaintenanceImage3()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage3').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton3').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton3').style.display = 'block';
            document.getElementById('MaintenanceImageText3').style.display = 'block';
        };
        reader.readAsDataURL(this.files[3]);
    } else {
        addImageElements('image4', 'MaintenancePhotographs', 'MaintenanceImage3', 'MaintenanceImageText3',
            'MaintenanceRemoveButton3', 'AddMaintenanceImageButton3', 'MaintenanceUploadImage3',
            'RemoveMaintenanceImage3()', 'AddMaintenanceImage3()', '510px','0px');
    }

    if (this.files && this.files[4]) {
        addImageElements('image5', 'MaintenancePhotographs', 'MaintenanceImage4',
            'MaintenanceImageText4', 'MaintenanceRemoveButton4', 'AddMaintenanceImageButton4', 'MaintenanceUploadImage4',
            'RemoveMaintenanceImage4()', 'AddMaintenanceImage4()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage4').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton4').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton4').style.display = 'block';
            document.getElementById('MaintenanceImageText4').style.display = 'block';
        };
        reader.readAsDataURL(this.files[4]);
    } else {
        addImageElements('image5', 'MaintenancePhotographs', 'MaintenanceImage4', 'MaintenanceImageText4',
            'MaintenanceRemoveButton4', 'AddMaintenanceImageButton4', 'MaintenanceUploadImage4',
            'RemoveMaintenanceImage4()', 'AddMaintenanceImage4()', '510px','0px');
    }

    if (this.files && this.files[5]) {
        addImageElements('image6', 'MaintenancePhotographs', 'MaintenanceImage5', 'MaintenanceImageText5',
            'MaintenanceRemoveButton5', 'AddMaintenanceImageButton5', 'MaintenanceUploadImage5',
            'RemoveMaintenanceImage5()', 'AddMaintenanceImage5()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage5').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton5').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton5').style.display = 'block';
            document.getElementById('MaintenanceImageText5').style.display = 'block';
        };
        reader.readAsDataURL(this.files[5]);
    } else {
        addImageElements('image6', 'MaintenancePhotographs', 'MaintenanceImage5', 'MaintenanceImageText5',
            'MaintenanceRemoveButton5', 'AddMaintenanceImageButton5', 'MaintenanceUploadImage5',
            'RemoveMaintenanceImage5()', 'AddMaintenanceImage5()', '510px','0px');
    }

    if (this.files && this.files[6]) {
        addImageElements('image7', 'MaintenancePhotographs', 'MaintenanceImage6', 'MaintenanceImageText6',
            'MaintenanceRemoveButton6', 'AddMaintenanceImageButton6', 'MaintenanceUploadImage6',
            'RemoveMaintenanceImage6()', 'AddMaintenanceImage6()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage6').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton6').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton6').style.display = 'block';
            document.getElementById('MaintenanceImageText6').style.display = 'block';
        };
        reader.readAsDataURL(this.files[6]);
    } else {
        addImageElements('image7', 'MaintenancePhotographs', 'MaintenanceImage6', 'MaintenanceImageText6',
            'MaintenanceRemoveButton6', 'AddMaintenanceImageButton6', 'MaintenanceUploadImage6',
            'RemoveMaintenanceImage6()', 'AddMaintenanceImage6()', '510px','0px');
    }

    if (this.files && this.files[7]) {
        addImageElements('image8', 'MaintenancePhotographs', 'MaintenanceImage7',
            'MaintenanceImageText7', 'MaintenanceRemoveButton7', 'AddMaintenanceImageButton7',
            'MaintenanceUploadImage7', 'RemoveMaintenanceImage7()', 'AddMaintenanceImage7()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage7').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton7').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton7').style.display = 'block';
            document.getElementById('MaintenanceImageText7').style.display = 'block';
        };
        reader.readAsDataURL(this.files[7]);
    } else {
        addImageElements('image8', 'MaintenancePhotographs', 'MaintenanceImage7', 'MaintenanceImageText7',
            'MaintenanceRemoveButton7', 'AddMaintenanceImageButton7', 'MaintenanceUploadImage7',
            'RemoveMaintenanceImage7()', 'AddMaintenanceImage7()', '510px','0px');
    }

    if (this.files && this.files[8]) {
        addImageElements('image9', 'MaintenancePhotographs', 'MaintenanceImage8',
            'MaintenanceImageText8', 'MaintenanceRemoveButton8', 'AddMaintenanceImageButton8',
            'MaintenanceUploadImage8', 'RemoveMaintenanceImage8()', 'AddMaintenanceImage8()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage8').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton8').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton8').style.display = 'block';
            document.getElementById('MaintenanceImageText8').style.display = 'block';
        };
        reader.readAsDataURL(this.files[8]);
    } else {
        addImageElements('image9', 'MaintenancePhotographs', 'MaintenanceImage8', 'MaintenanceImageText8',
            'MaintenanceRemoveButton8', 'AddMaintenanceImageButton8', 'MaintenanceUploadImage8',
            'RemoveMaintenanceImage8()', 'AddMaintenanceImage8()', '510px','0px');
    }

    if (this.files && this.files[9]) {
        addImageElements('image10', 'MaintenancePhotographs', 'MaintenanceImage9', 'MaintenanceImageText9',
            'MaintenanceRemoveButton9', 'AddMaintenanceImageButton9', 'MaintenanceUploadImage9',
            'RemoveMaintenanceImage9()', 'AddMaintenanceImage9()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage9').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton9').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton9').style.display = 'block';
            document.getElementById('MaintenanceImageText9').style.display = 'block';
        };
        reader.readAsDataURL(this.files[9]);
    } else {
        addImageElements('image10', 'MaintenancePhotographs', 'MaintenanceImage9', 'MaintenanceImageText9',
            'MaintenanceRemoveButton9', 'AddMaintenanceImageButton9', 'MaintenanceUploadImage9',
            'RemoveMaintenanceImage9()', 'AddMaintenanceImage9()', '510px','0px');
    }

    if (this.files && this.files[10]) {
        addImageElements('image11', 'MaintenancePhotographs', 'MaintenanceImage10',
            'MaintenanceImageText10', 'MaintenanceRemoveButton10', 'AddMaintenanceImageButton10',
            'MaintenanceUploadImage10', 'RemoveMaintenanceImage10()', 'AddMaintenanceImage10()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage10').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton10').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton10').style.display = 'block';
            document.getElementById('MaintenanceImageText10').style.display = 'block';
        };
        reader.readAsDataURL(this.files[10]);
    } else {
        addImageElements('image11', 'MaintenancePhotographs', 'MaintenanceImage10', 'MaintenanceImageText10',
            'MaintenanceRemoveButton10', 'AddMaintenanceImageButton10', 'MaintenanceUploadImage10', '' +
            'RemoveMaintenanceImage10()', 'AddMaintenanceImage10()', '510px','0px');
    }

    if (this.files && this.files[11]) {
        addImageElements('image12', 'MaintenancePhotographs', 'MaintenanceImage11', 'MaintenanceImageText11',
            'MaintenanceRemoveButton11', 'AddMaintenanceImageButton11', 'MaintenanceUploadImage11',
            'RemoveMaintenanceImage11()', 'AddMaintenanceImage11()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage11').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton11').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton11').style.display = 'block';
            document.getElementById('MaintenanceImageText11').style.display = 'block';
        };
        reader.readAsDataURL(this.files[11]);
    } else {
        addImageElements('image12', 'MaintenancePhotographs', 'MaintenanceImage11', 'MaintenanceImageText11',
            'MaintenanceRemoveButton11', 'AddMaintenanceImageButton11', 'MaintenanceUploadImage11',
            'RemoveMaintenanceImage11()', 'AddMaintenanceImage11()', '510px','0px');
    }

    if (this.files && this.files[12]) {
        addImageElements('image13', 'MaintenancePhotographs', 'MaintenanceImage12', 'MaintenanceImageText12',
            'MaintenanceRemoveButton12', 'AddMaintenanceImageButton12', 'MaintenanceUploadImage12',
            'RemoveMaintenanceImage12()', 'AddMaintenanceImage12()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage12').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton12').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton12').style.display = 'block';
            document.getElementById('MaintenanceImageText12').style.display = 'block';
        };
        reader.readAsDataURL(this.files[12]);
    } else {
        addImageElements('image13', 'MaintenancePhotographs', 'MaintenanceImage12', 'MaintenanceImageText12',
            'MaintenanceRemoveButton12', 'AddMaintenanceImageButton12', 'MaintenanceUploadImage12',
            'RemoveMaintenanceImage12()', 'AddMaintenanceImage12()', '510px','0px');
    }

    if (this.files && this.files[13]) {
        addImageElements('image14', 'MaintenancePhotographs', 'MaintenanceImage13', 'MaintenanceImageText13',
            'MaintenanceRemoveButton13', 'AddMaintenanceImageButton13', 'MaintenanceUploadImage13',
            'RemoveMaintenanceImage13()', 'AddMaintenanceImage13()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage13').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton13').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton13').style.display = 'block';
            document.getElementById('MaintenanceImageText13').style.display = 'block';
        };
        reader.readAsDataURL(this.files[13]);
    } else {
        addImageElements('image14', 'MaintenancePhotographs', 'MaintenanceImage13', 'MaintenanceImageText13',
            'MaintenanceRemoveButton13', 'AddMaintenanceImageButton13', 'MaintenanceUploadImage13',
            'RemoveMaintenanceImage13()', 'AddMaintenanceImage13()', '510px','0px');
    }

    if (this.files && this.files[14]) {
        addImageElements('image15', 'MaintenancePhotographs', 'MaintenanceImage14', 'MaintenanceImageText14',
            'MaintenanceRemoveButton14', 'AddMaintenanceImageButton14', 'MaintenanceUploadImage14',
            'RemoveMaintenanceImage14()', 'AddMaintenanceImage14()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage14').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton14').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton14').style.display = 'block';
            document.getElementById('MaintenanceImageText14').style.display = 'block';
        };
        reader.readAsDataURL(this.files[14]);
    } else {
        addImageElements('image15', 'MaintenancePhotographs', 'MaintenanceImage14', 'MaintenanceImageText14',
            'MaintenanceRemoveButton14', 'AddMaintenanceImageButton14', 'MaintenanceUploadImage14',
            'RemoveMaintenanceImage14()', 'AddMaintenanceImage14()', '510px','0px');
    }


    if (this.files && this.files[15]) {
        addImageElements('image16', 'MaintenancePhotographs', 'MaintenanceImage15', 'MaintenanceImageText15',
            'MaintenanceRemoveButton15', 'AddMaintenanceImageButton15', 'MaintenanceUploadImage15',
            'RemoveMaintenanceImage15()', 'AddMaintenanceImage15()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage15').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton15').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton15').style.display = 'block';
            document.getElementById('MaintenanceImageText15').style.display = 'block';
        };
        reader.readAsDataURL(this.files[15]);
    } else {
        addImageElements('image16', 'MaintenancePhotographs', 'MaintenanceImage15', 'MaintenanceImageText15',
            'MaintenanceRemoveButton15', 'AddMaintenanceImageButton15', 'MaintenanceUploadImage15',
            'RemoveMaintenanceImage15()', 'AddMaintenanceImage15()', '510px','0px');
    }

    if (this.files && this.files[16]) {
        addImageElements('image17', 'MaintenancePhotographs', 'MaintenanceImage16', 'MaintenanceImageText16',
            'MaintenanceRemoveButton16', 'AddMaintenanceImageButton16', 'MaintenanceUploadImage16',
            'RemoveMaintenanceImage16()', 'AddMaintenanceImage16()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage16').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton16').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton16').style.display = 'block';
            document.getElementById('MaintenanceImageText16').style.display = 'block';
        };
        reader.readAsDataURL(this.files[16]);
    } else {
        addImageElements('image17', 'MaintenancePhotographs', 'MaintenanceImage16', 'MaintenanceImageText16',
            'MaintenanceRemoveButton16', 'AddMaintenanceImageButton16', 'MaintenanceUploadImage16',
            'RemoveMaintenanceImage16()', 'AddMaintenanceImage16()', '510px','0px');
    }

    if (this.files && this.files[17]) {
        addImageElements('image18', 'MaintenancePhotographs', 'MaintenanceImage17', 'MaintenanceImageText17',
            'MaintenanceRemoveButton17', 'AddMaintenanceImageButton17', 'MaintenanceUploadImage17',
            'RemoveMaintenanceImage17()', 'AddMaintenanceImage17()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage17').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton17').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton17').style.display = 'block';
            document.getElementById('MaintenanceImageText17').style.display = 'block';
        };
        reader.readAsDataURL(this.files[17]);
    } else {
        addImageElements('image18', 'MaintenancePhotographs', 'MaintenanceImage17', 'MaintenanceImageText17',
            'MaintenanceRemoveButton17', 'AddMaintenanceImageButton17', 'MaintenanceUploadImage17',
            'RemoveMaintenanceImage17()', 'AddMaintenanceImage17()', '510px','0px');
    }

    if (this.files && this.files[18]) {
        addImageElements('image19', 'MaintenancePhotographs', 'MaintenanceImage18', 'MaintenanceImageText18',
            'MaintenanceRemoveButton18', 'AddMaintenanceImageButton18', 'MaintenanceUploadImage18',
            'RemoveMaintenanceImage18()', 'AddMaintenanceImage18()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage18').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton18').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton18').style.display = 'block';
            document.getElementById('MaintenanceImageText18').style.display = 'block';
        };
        reader.readAsDataURL(this.files[18]);
    } else {
        addImageElements('image19', 'MaintenancePhotographs', 'MaintenanceImage18', 'MaintenanceImageText18',
            'MaintenanceRemoveButton18', 'AddMaintenanceImageButton18', 'MaintenanceUploadImage18',
            'RemoveMaintenanceImage18()', 'AddMaintenanceImage18()', '510px','0px');
    }

    if (this.files && this.files[19]) {
        addImageElements('image20', 'MaintenancePhotographs', 'MaintenanceImage19', 'MaintenanceImageText19',
            'MaintenanceRemoveButton19', 'AddMaintenanceImageButton19', 'MaintenanceUploadImage19',
            'RemoveMaintenanceImage19()', 'AddMaintenanceImage19()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage19').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton19').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton19').style.display = 'block';
            document.getElementById('MaintenanceImageText19').style.display = 'block';
        };
        reader.readAsDataURL(this.files[19]);
    } else {
        addImageElements('image20', 'MaintenancePhotographs', 'MaintenanceImage19', 'MaintenanceImageText19',
            'MaintenanceRemoveButton19', 'AddMaintenanceImageButton19', 'MaintenanceUploadImage19',
            'RemoveMaintenanceImage19()', 'AddMaintenanceImage19()', '510px','0px');
    }

    if (this.files && this.files[20]) {
        addImageElements('image21', 'MaintenancePhotographs', 'MaintenanceImage20', 'MaintenanceImageText20',
            'MaintenanceRemoveButton20', 'AddMaintenanceImageButton20', 'MaintenanceUploadImage20',
            'RemoveMaintenanceImage20()', 'AddMaintenanceImage20()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage20').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton20').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton20').style.display = 'block';
            document.getElementById('MaintenanceImageText20').style.display = 'block';
        };
        reader.readAsDataURL(this.files[20]);
    } else {
        addImageElements('image21', 'MaintenancePhotographs', 'MaintenanceImage20', 'MaintenanceImageText20',
            'MaintenanceRemoveButton20', 'AddMaintenanceImageButton20', 'MaintenanceUploadImage20',
            'RemoveMaintenanceImage20()', 'AddMaintenanceImage20()', '510px','0px');
    }

    if (this.files && this.files[21]) {
        addImageElements('image22', 'MaintenancePhotographs', 'MaintenanceImage21', 'MaintenanceImageText21',
            'MaintenanceRemoveButton21', 'AddMaintenanceImageButton21', 'MaintenanceUploadImage21',
            'RemoveMaintenanceImage21()', 'AddMaintenanceImage21()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage21').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton21').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton21').style.display = 'block';
            document.getElementById('MaintenanceImageText21').style.display = 'block';
        };
        reader.readAsDataURL(this.files[21]);
    } else {
        addImageElements('image22', 'MaintenancePhotographs', 'MaintenanceImage21', 'MaintenanceImageText21',
            'MaintenanceRemoveButton21', 'AddMaintenanceImageButton21', 'MaintenanceUploadImage21',
            'RemoveMaintenanceImage21()', 'AddMaintenanceImage21()', '510px','0px');
    }

    if (this.files && this.files[22]) {
        addImageElements('image23', 'MaintenancePhotographs', 'MaintenanceImage22', 'MaintenanceImageText22',
            'MaintenanceRemoveButton22', 'AddMaintenanceImageButton22', 'MaintenanceUploadImage22',
            'RemoveMaintenanceImage22()', 'AddMaintenanceImage22()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage22').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton22').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton22').style.display = 'block';
            document.getElementById('MaintenanceImageText22').style.display = 'block';
        };
        reader.readAsDataURL(this.files[22]);
    } else {
        addImageElements('image23', 'MaintenancePhotographs', 'MaintenanceImage22', 'MaintenanceImageText22',
            'MaintenanceRemoveButton22', 'AddMaintenanceImageButton22', 'MaintenanceUploadImage22',
            'RemoveMaintenanceImage22()', 'AddMaintenanceImage22()', '510px','0px');
    }

    if (this.files && this.files[23]) {
        addImageElements('image24', 'MaintenancePhotographs', 'MaintenanceImage23', 'MaintenanceImageText23',
            'MaintenanceRemoveButton23', 'AddMaintenanceImageButton23', 'MaintenanceUploadImage23',
            'RemoveMaintenanceImage23()', 'AddMaintenanceImage23()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage23').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton23').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton23').style.display = 'block';
            document.getElementById('MaintenanceImageText23').style.display = 'block';
        };
        reader.readAsDataURL(this.files[23]);
    } else {
        addImageElements('image24', 'MaintenancePhotographs', 'MaintenanceImage23', 'MaintenanceImageText23',
            'MaintenanceRemoveButton23', 'AddMaintenanceImageButton23', 'MaintenanceUploadImage23',
            'RemoveMaintenanceImage23()', 'AddMaintenanceImage23()', '510px','0px');
    }

    if (this.files && this.files[24]) {
        addImageElements('image25', 'MaintenancePhotographs', 'MaintenanceImage24', 'MaintenanceImageText24',
            'MaintenanceRemoveButton24', 'AddMaintenanceImageButton24', 'MaintenanceUploadImage24',
            'RemoveMaintenanceImage24()', 'AddMaintenanceImage24()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage24').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton24').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton24').style.display = 'block';
            document.getElementById('MaintenanceImageText24').style.display = 'block';
        };
        reader.readAsDataURL(this.files[24]);
    } else {
        addImageElements('image25', 'MaintenancePhotographs', 'MaintenanceImage24', 'MaintenanceImageText24',
            'MaintenanceRemoveButton24', 'AddMaintenanceImageButton24', 'MaintenanceUploadImage24',
            'RemoveMaintenanceImage24()', 'AddMaintenanceImage24()', '510px','0px');
    }

    if (this.files && this.files[25]) {
        addImageElements('image26', 'MaintenancePhotographs', 'MaintenanceImage25', 'MaintenanceImageText25',
            'MaintenanceRemoveButton25', 'AddMaintenanceImageButton25', 'MaintenanceUploadImage25',
            'RemoveMaintenanceImage25()', 'AddMaintenanceImage25()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage25').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton25').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton25').style.display = 'block';
            document.getElementById('MaintenanceImageText25').style.display = 'block';
        };
        reader.readAsDataURL(this.files[25]);
    } else {
        addImageElements('image26', 'MaintenancePhotographs', 'MaintenanceImage25', 'MaintenanceImageText25',
            'MaintenanceRemoveButton25', 'AddMaintenanceImageButton25', 'MaintenanceUploadImage25',
            'RemoveMaintenanceImage25()', 'AddMaintenanceImage25()', '510px','0px');
    }

    if (this.files && this.files[26]) {
        addImageElements('image27', 'MaintenancePhotographs', 'MaintenanceImage26', 'MaintenanceImageText26',
            'MaintenanceRemoveButton26', 'AddMaintenanceImageButton26', 'MaintenanceUploadImage26',
            'RemoveMaintenanceImage26()', 'AddMaintenanceImage26()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage26').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton26').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton26').style.display = 'block';
            document.getElementById('MaintenanceImageText26').style.display = 'block';
        };
        reader.readAsDataURL(this.files[26]);
    } else {
        addImageElements('image27', 'MaintenancePhotographs', 'MaintenanceImage26', 'MaintenanceImageText26',
            'MaintenanceRemoveButton26', 'AddMaintenanceImageButton26', 'MaintenanceUploadImage26',
            'RemoveMaintenanceImage26()', 'AddMaintenanceImage26()', '510px','0px');
    }

    if (this.files && this.files[27]) {
        addImageElements('image28', 'MaintenancePhotographs', 'MaintenanceImage27', 'MaintenanceImageText27',
            'MaintenanceRemoveButton27', 'AddMaintenanceImageButton27', 'MaintenanceUploadImage27',
            'RemoveMaintenanceImage27()', 'AddMaintenanceImage27()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage27').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton27').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton27').style.display = 'block';
            document.getElementById('MaintenanceImageText27').style.display = 'block';
        };
        reader.readAsDataURL(this.files[27]);
    } else {
        addImageElements('image28', 'MaintenancePhotographs', 'MaintenanceImage27', 'MaintenanceImageText27',
            'MaintenanceRemoveButton27', 'AddMaintenanceImageButton27', 'MaintenanceUploadImage27',
            'RemoveMaintenanceImage27()', 'AddMaintenanceImage27()', '510px','0px');
    }

    if (this.files && this.files[28]) {
        addImageElements('image29', 'MaintenancePhotographs', 'MaintenanceImage28', 'MaintenanceImageText28',
            'MaintenanceRemoveButton28', 'AddMaintenanceImageButton28', 'MaintenanceUploadImage28',
            'RemoveMaintenanceImage28()', 'AddMaintenanceImage28()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage28').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton28').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton28').style.display = 'block';
            document.getElementById('MaintenanceImageText28').style.display = 'block';
        };
        reader.readAsDataURL(this.files[28]);
    } else {
        addImageElements('image29', 'MaintenancePhotographs', 'MaintenanceImage28', 'MaintenanceImageText28',
            'MaintenanceRemoveButton28', 'AddMaintenanceImageButton28', 'MaintenanceUploadImage28',
            'RemoveMaintenanceImage28()', 'AddMaintenanceImage28()', '510px','0px');
    }

    if (this.files && this.files[29]) {
        addImageElements('image30', 'MaintenancePhotographs', 'MaintenanceImage29', 'MaintenanceImageText29',
            'MaintenanceRemoveButton29', 'AddMaintenanceImageButton29', 'MaintenanceUploadImage29',
            'RemoveMaintenanceImage29()', 'AddMaintenanceImage29()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage29').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton29').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton29').style.display = 'block';
            document.getElementById('MaintenanceImageText29').style.display = 'block';
        };
        reader.readAsDataURL(this.files[29]);
    } else {
        addImageElements('image30', 'MaintenancePhotographs', 'MaintenanceImage29', 'MaintenanceImageText29',
            'MaintenanceRemoveButton29', 'AddMaintenanceImageButton29', 'MaintenanceUploadImage29',
            'RemoveMaintenanceImage29()', 'AddMaintenanceImage29()', '510px','0px');
    }

    if (this.files && this.files[30]) {
        addImageElements('image31', 'MaintenancePhotographs', 'MaintenanceImage30', 'MaintenanceImageText30',
            'MaintenanceRemoveButton30', 'AddMaintenanceImageButton30', 'MaintenanceUploadImage30',
            'RemoveMaintenanceImage30()', 'AddMaintenanceImage30()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage30').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton30').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton30').style.display = 'block';
            document.getElementById('MaintenanceImageText30').style.display = 'block';
        };
        reader.readAsDataURL(this.files[30]);
    } else {
        addImageElements('image31', 'MaintenancePhotographs', 'MaintenanceImage30', 'MaintenanceImageText30',
            'MaintenanceRemoveButton30', 'AddMaintenanceImageButton30', 'MaintenanceUploadImage30',
            'RemoveMaintenanceImage30()', 'AddMaintenanceImage30()', '510px','0px');
    }


    if (this.files && this.files[31]) {
        addImageElements('image32', 'MaintenancePhotographs', 'MaintenanceImage31', 'MaintenanceImageText31',
            'MaintenanceRemoveButton31', 'AddMaintenanceImageButton31', 'MaintenanceUploadImage31',
            'RemoveMaintenanceImage31()', 'AddMaintenanceImage31()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage31').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton31').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton31').style.display = 'block';
            document.getElementById('MaintenanceImageText31').style.display = 'block';
        };
        reader.readAsDataURL(this.files[31]);
    } else {
        addImageElements('image32', 'MaintenancePhotographs', 'MaintenanceImage31', 'MaintenanceImageText31',
            'MaintenanceRemoveButton31', 'AddMaintenanceImageButton31', 'MaintenanceUploadImage31',
            'RemoveMaintenanceImage31()', 'AddMaintenanceImage31()', '510px','0px');
    }

    if (this.files && this.files[32]) {
        addImageElements('image33', 'MaintenancePhotographs', 'MaintenanceImage32', 'MaintenanceImageText32',
            'MaintenanceRemoveButton32', 'AddMaintenanceImageButton32', 'MaintenanceUploadImage32',
            'RemoveMaintenanceImage32()', 'AddMaintenanceImage32()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage32').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton32').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton32').style.display = 'block';
            document.getElementById('MaintenanceImageText32').style.display = 'block';
        };
        reader.readAsDataURL(this.files[31]);
    } else {
        addImageElements('image33', 'MaintenancePhotographs', 'MaintenanceImage32', 'MaintenanceImageText32',
            'MaintenanceRemoveButton32', 'AddMaintenanceImageButton32', 'MaintenanceUploadImage32',
            'RemoveMaintenanceImage32()', 'AddMaintenanceImage32()', '510px','0px');
    }

    if (this.files && this.files[33]) {
        addImageElements('image34', 'MaintenancePhotographs', 'MaintenanceImage33', 'MaintenanceImageText33',
            'MaintenanceRemoveButton33', 'AddMaintenanceImageButton33', 'MaintenanceUploadImage33',
            'RemoveMaintenanceImage33()', 'AddMaintenanceImage33()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage33').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton33').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton33').style.display = 'block';
            document.getElementById('MaintenanceImageText33').style.display = 'block';
        };
        reader.readAsDataURL(this.files[33]);
    } else {
        addImageElements('image34', 'MaintenancePhotographs', 'MaintenanceImage33', 'MaintenanceImageText33',
            'MaintenanceRemoveButton33', 'AddMaintenanceImageButton33', 'MaintenanceUploadImage33',
            'RemoveMaintenanceImage33()', 'AddMaintenanceImage33()', '510px','0px');
    }

    if (this.files && this.files[34]) {
        addImageElements('image35', 'MaintenancePhotographs', 'MaintenanceImage34', 'MaintenanceImageText34',
            'MaintenanceRemoveButton34', 'AddMaintenanceImageButton34', 'MaintenanceUploadImage34',
            'RemoveMaintenanceImage34()', 'AddMaintenanceImage34()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage34').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton34').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton34').style.display = 'block';
            document.getElementById('MaintenanceImageText34').style.display = 'block';
        };
        reader.readAsDataURL(this.files[34]);
    } else {
        addImageElements('image35', 'MaintenancePhotographs', 'MaintenanceImage34', 'MaintenanceImageText34',
            'MaintenanceRemoveButton34', 'AddMaintenanceImageButton34', 'MaintenanceUploadImage34',
            'RemoveMaintenanceImage34()', 'AddMaintenanceImage34()', '510px','0px');
    }

    if (this.files && this.files[35]) {
        addImageElements('image36', 'MaintenancePhotographs', 'MaintenanceImage35', 'MaintenanceImageText35',
            'MaintenanceRemoveButton35', 'AddMaintenanceImageButton35', 'MaintenanceUploadImage35',
            'RemoveMaintenanceImage35()', 'AddMaintenanceImage35()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage35').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton35').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton35').style.display = 'block';
            document.getElementById('MaintenanceImageText35').style.display = 'block';
        };
        reader.readAsDataURL(this.files[33]);
    } else {
        addImageElements('image36', 'MaintenancePhotographs', 'MaintenanceImage35', 'MaintenanceImageText35',
            'MaintenanceRemoveButton35', 'AddMaintenanceImageButton35', 'MaintenanceUploadImage35',
            'RemoveMaintenanceImage35()', 'AddMaintenanceImage35()', '510px','0px');
    }

    if (this.files && this.files[36]) {
        addImageElements('image37', 'MaintenancePhotographs', 'MaintenanceImage36', 'MaintenanceImageText36',
            'MaintenanceRemoveButton36', 'AddMaintenanceImageButton36', 'MaintenanceUploadImage36',
            'RemoveMaintenanceImage36()', 'AddMaintenanceImage36()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage36').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton36').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton36').style.display = 'block';
            document.getElementById('MaintenanceImageText36').style.display = 'block';
        };
        reader.readAsDataURL(this.files[36]);
    } else {
        addImageElements('image37', 'MaintenancePhotographs', 'MaintenanceImage36',
            'MaintenanceImageText36', 'MaintenanceRemoveButton36', 'AddMaintenanceImageButton36',
            'MaintenanceUploadImage36', 'RemoveMaintenanceImage36()', 'AddMaintenanceImage36()', '510px','0px');
    }

    if (this.files && this.files[37]) {
        addImageElements('image38', 'MaintenancePhotographs', 'MaintenanceImage37', 'MaintenanceImageText37',
            'MaintenanceRemoveButton37', 'AddMaintenanceImageButton37', 'MaintenanceUploadImage37',
            'RemoveMaintenanceImage37()', 'AddMaintenanceImage37()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage37').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton37').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton37').style.display = 'block';
            document.getElementById('MaintenanceImageText37').style.display = 'block';
        };
        reader.readAsDataURL(this.files[37]);
    } else {
        addImageElements('image38', 'MaintenancePhotographs', 'MaintenanceImage37',
            'MaintenanceImageText37', 'MaintenanceRemoveButton37', 'AddMaintenanceImageButton37',
            'MaintenanceUploadImage37', 'RemoveMaintenanceImage37()', 'AddMaintenanceImage37()', '510px','0px');
    }

    if (this.files && this.files[38]) {
        addImageElements('image39', 'MaintenancePhotographs', 'MaintenanceImage38', 'MaintenanceImageText38',
            'MaintenanceRemoveButton38', 'AddMaintenanceImageButton38', 'MaintenanceUploadImage38',
            'RemoveMaintenanceImage38()', 'AddMaintenanceImage38()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage38').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton38').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton38').style.display = 'block';
            document.getElementById('MaintenanceImageText38').style.display = 'block';
        };
        reader.readAsDataURL(this.files[38]);
    } else {
        addImageElements('image39', 'MaintenancePhotographs', 'MaintenanceImage38', 'MaintenanceImageText38',
            'MaintenanceRemoveButton38', 'AddMaintenanceImageButton38', 'MaintenanceUploadImage38',
            'RemoveMaintenanceImage38()', 'AddMaintenanceImage38()', '510px','0px');
    }

    if (this.files && this.files[39]) {
        addImageElements('image40', 'MaintenancePhotographs', 'MaintenanceImage39', 'MaintenanceImageText39',
            'MaintenanceRemoveButton39', 'AddMaintenanceImageButton39', 'MaintenanceUploadImage39',
            'RemoveMaintenanceImage39()', 'AddMaintenanceImage39()', '510px','510px');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceImage39').attr('src', e.target.result);
            document.getElementById('AddMaintenanceImageButton39').style.display = 'none';
            document.getElementById('MaintenanceRemoveButton39').style.display = 'block';
            document.getElementById('MaintenanceImageText39').style.display = 'block';
        };
        reader.readAsDataURL(this.files[39]);
    } else {
        addImageElements('image40', 'MaintenancePhotographs', 'MaintenanceImage39', 'MaintenanceImageText39',
            'MaintenanceRemoveButton39', 'AddMaintenanceImageButton39', 'MaintenanceUploadImage39',
            'RemoveMaintenanceImage39()', 'AddMaintenanceImage39()', '510px','0px');
    }

});
$("#MaintenanceUploadDrawings").change(function () {
    $("#MaintenanceDrawings").empty();
    var table = document.getElementById("MaintenanceSummaryDrawings");
    table.style.display = 'block';
    var count = this.files.length;
    console.log(count);
    //check the number of image 
    if (count > 6) {
        alert("You can only select 6 drawings. It will only display the first 6 drawings");
    }

    if (this.files && this.files[0]) {
        //divID,imageID,imageTextID, removeButtonID, addButtonID, uploadFileID ,removeFunction,addFunction
        addImageElements('drawing1', 'MaintenanceDrawings', 'MaintenanceDrawing0', 'MaintenanceDrawingText0',
            'MaintenanceDrawingRemoveButton0', 'AddMaintenanceDrawingButton0', 'MaintenanceUploadDrawing0',
            'RemoveMaintenanceDrawing0()', 'AddMaintenanceDrawing0()', '100%','100%');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceDrawing0').attr('src', e.target.result);
            document.getElementById('AddMaintenanceDrawingButton0').style.display = 'none';
            document.getElementById('MaintenanceDrawingRemoveButton0').style.display = 'block';
            document.getElementById('MaintenanceDrawingText0').style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);

    }

    if (this.files && this.files[1]) {
        //divID,imageID,imageTextID, removeButtonID, addButtonID, uploadFileID ,removeFunction,addFunction
        addImageElements('drawing2', 'MaintenanceDrawings', 'MaintenanceDrawing1', 'MaintenanceDrawingText1',
            'MaintenanceDrawingRemoveButton1', 'AddMaintenanceDrawingButton1', 'MaintenanceUploadDrawing1',
            'RemoveMaintenanceDrawing1()', 'AddMaintenanceDrawing1()', '100%','100');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceDrawing1').attr('src', e.target.result);
            document.getElementById('AddMaintenanceDrawingButton1').style.display = 'none';
            document.getElementById('MaintenanceDrawingRemoveButton1').style.display = 'block';
            document.getElementById('MaintenanceDrawingText1').style.display = 'block';
        };
        reader.readAsDataURL(this.files[1]);
    } else {
        addImageElements('drawing2', 'MaintenanceDrawings', 'MaintenanceDrawing1', 'MaintenanceDrawingText1',
            'MaintenanceDrawingRemoveButton1', 'AddMaintenanceDrawingButton1', 'MaintenanceUploadDrawing1',
            'RemoveMaintenanceDrawing1()', 'AddMaintenanceDrawing1()', '100%','0px');
    }

    if (this.files && this.files[2]) {
        //divID,imageID,imageTextID, removeButtonID, addButtonID, uploadFileID ,removeFunction,addFunction
        addImageElements('drawing3', 'MaintenanceDrawings', 'MaintenanceDrawing2', 'MaintenanceDrawingText2',
            'MaintenanceDrawingRemoveButton2', 'AddMaintenanceDrawingButton2', 'MaintenanceUploadDrawing2',
            'RemoveMaintenanceDrawing2()', 'AddMaintenanceDrawing2()', '100%','100%');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceDrawing2').attr('src', e.target.result);
            document.getElementById('AddMaintenanceDrawingButton2').style.display = 'none';
            document.getElementById('MaintenanceDrawingRemoveButton2').style.display = 'block';
            document.getElementById('MaintenanceDrawingText2').style.display = 'block';
        };
        reader.readAsDataURL(this.files[2]);
    } else {
        addImageElements('drawing3', 'MaintenanceDrawings', 'MaintenanceDrawing2', 'MaintenanceDrawingText2',
            'MaintenanceDrawingRemoveButton2', 'AddMaintenanceDrawingButton2', 'MaintenanceUploadDrawing2',
            'RemoveMaintenanceDrawing2()', 'AddMaintenanceDrawing2()', '100%','0px');
    }

    if (this.files && this.files[3]) {
        //divID,imageID,imageTextID, removeButtonID, addButtonID, uploadFileID ,removeFunction,addFunction
        addImageElements('drawing4', 'MaintenanceDrawings', 'MaintenanceDrawing3', 'MaintenanceDrawingText3',
            'MaintenanceDrawingRemoveButton3', 'AddMaintenanceDrawingButton3', 'MaintenanceUploadDrawing3',
            'RemoveMaintenanceDrawing3()', 'AddMaintenanceDrawing3()', '100%','100%');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceDrawing3').attr('src', e.target.result);
            document.getElementById('AddMaintenanceDrawingButton3').style.display = 'none';
            document.getElementById('MaintenanceDrawingRemoveButton3').style.display = 'block';
            document.getElementById('MaintenanceDrawingText3').style.display = 'block';
        };
        reader.readAsDataURL(this.files[3]);
    } else {
        addImageElements('drawing4', 'MaintenanceDrawings', 'MaintenanceDrawing3', 'MaintenanceDrawingText3',
            'MaintenanceDrawingRemoveButton3', 'AddMaintenanceDrawingButton3', 'MaintenanceUploadDrawing3',
            'RemoveMaintenanceDrawing3()', 'AddMaintenanceDrawing3()', '100%','0px');
    }

    if (this.files && this.files[4]) {
        //divID,imageID,imageTextID, removeButtonID, addButtonID, uploadFileID ,removeFunction,addFunction
        addImageElements('drawing5', 'MaintenanceDrawings', 'MaintenanceDrawing4', 'MaintenanceDrawingText4',
            'MaintenanceDrawingRemoveButton4', 'AddMaintenanceDrawingButton4', 'MaintenanceUploadDrawing4',
            'RemoveMaintenanceDrawing4()', 'AddMaintenanceDrawing4()', '100%','100%');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceDrawing4').attr('src', e.target.result);
            document.getElementById('AddMaintenanceDrawingButton4').style.display = 'none';
            document.getElementById('MaintenanceDrawingRemoveButton4').style.display = 'block';
            document.getElementById('MaintenanceDrawingText4').style.display = 'block';
        };
        reader.readAsDataURL(this.files[4]);
    } else {
        addImageElements('drawing5', 'MaintenanceDrawings', 'MaintenanceDrawing4', 'MaintenanceDrawingText4',
            'MaintenanceDrawingRemoveButton4', 'AddMaintenanceDrawingButton4', 'MaintenanceUploadDrawing4',
            'RemoveMaintenanceDrawing4()', 'AddMaintenanceDrawing4()', '100%','0px');
    }

    if (this.files && this.files[5]) {
        //divID,imageID,imageTextID, removeButtonID, addButtonID, uploadFileID ,removeFunction,addFunction
        addImageElements('drawing6', 'MaintenanceDrawings', 'MaintenanceDrawing5', 'MaintenanceDrawingText5',
            'MaintenanceDrawingRemoveButton5', 'AddMaintenanceDrawingButton5', 'MaintenanceUploadDrawing5',
            'RemoveMaintenanceDrawing5()', 'AddMaintenanceDrawing5()', '100%','100%');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#MaintenanceDrawing5').attr('src', e.target.result);
            document.getElementById('AddMaintenanceDrawingButton5').style.display = 'none';
            document.getElementById('MaintenanceDrawingRemoveButton5').style.display = 'block';
            document.getElementById('MaintenanceDrawingText5').style.display = 'block';
        };
        reader.readAsDataURL(this.files[5]);
    } else {
        addImageElements('drawing6', 'MaintenanceDrawings', 'MaintenanceDrawing5', 'MaintenanceDrawingText5',
            'MaintenanceDrawingRemoveButton5', 'AddMaintenanceDrawingButton5', 'MaintenanceUploadDrawing5',
            'RemoveMaintenanceDrawing5()', 'AddMaintenanceDrawing5()', '100%','0px');
    }



});

$("#ConstructionUploadImages").change(function() {
    $("#ConstructionPhotographs").empty();
    var table = document.getElementById("ConstructionImages");
    table.style.display = 'block';
    var count = this.files.length;
    console.log(count);
    //check the number of image
    if (count > 30) {
        alert("You can only select 30 images. It will only display the first 30 photos");
    }

    if (this.files && this.files[0]) {
        console.log("1");
        var reader = new FileReader();
        addImageElements('image1', 'ConstructionPhotographs', 'ConstructionImage0', 'ConstructionImageText0',
            'ConstructionImageRemoveButton0', 'AddConstructionImageButton0', 'ConstructionUploadImage0',
            'RemoveConstructionImage0()', 'AddConstructionImage0()', '510px','510px');
        reader.onload = function (e) {
            $('#ConstructionImage0').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton0').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton0').style.display = 'block';
            document.getElementById('ConstructionImageText0').style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);

    }
    else {
        addImageElements('image1', 'ConstructionPhotographs', 'ConstructionImage0', 'ConstructionImageText0',
            'ConstructionImageRemoveButton0', 'AddConstructionImageButton0', 'ConstructionUploadImage0',
            'RemoveConstructionImage0()', 'AddConstructionImage0()', '510px','0px');
        //document.createElement('ConstructionImage0').style.width = '0px';

    }

    if (this.files && this.files[1]) {

        addImageElements('image2', 'ConstructionPhotographs', 'ConstructionImage1', 'ConstructionImageText1',
            'ConstructionImageRemoveButton1', 'AddConstructionImageButton1', 'ConstructionUploadImage1',
            'RemoveConstructionImage1()', 'AddConstructionImage1()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage1').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton1').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton1').style.display = 'block';
            document.getElementById('ConstructionImageText1').style.display = 'block';
        };
        reader.readAsDataURL(this.files[1]);
    } else {
        addImageElements('image2', 'ConstructionPhotographs', 'ConstructionImage1', 'ConstructionImageText1',
            'ConstructionImageRemoveButton1', 'AddConstructionImageButton1', 'ConstructionUploadImage1',
            'RemoveConstructionImage1()', 'AddConstructionImage1()', '510px','0px');
        //document.createElement('ConstructionImage1').style.width = '0px';

    }

    if (this.files && this.files[2]) {

        addImageElements('image3', 'ConstructionPhotographs', 'ConstructionImage2', 'ConstructionImageText2',
            'ConstructionImageRemoveButton2', 'AddConstructionImageButton2', 'ConstructionUploadImage2',
            'RemoveConstructionImage2()', 'AddConstructionImage2()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage2').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton2').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton2').style.display = 'block';
            document.getElementById('ConstructionImageText2').style.display = 'block';
        };
        reader.readAsDataURL(this.files[2]);
    } else {
        addImageElements('image3', 'ConstructionPhotographs', 'ConstructionImage2', 'ConstructionImageText2',
            'ConstructionImageRemoveButton2', 'AddConstructionImageButton2', 'ConstructionUploadImage2',
            'RemoveConstructionImage2()', 'AddConstructionImage2()', '510px','0px');
        //document.createElement('ConstructionImage1').style.width = '0px';
    }

    if (this.files && this.files[3]) {

        addImageElements('image4', 'ConstructionPhotographs', 'ConstructionImage3', 'ConstructionImageText3',
            'ConstructionImageRemoveButton3', 'AddConstructionImageButton3', 'ConstructionUploadImage3',
            'RemoveConstructionImage3()', 'AddConstructionImage3()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage3').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton3').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton3').style.display = 'block';
            document.getElementById('ConstructionImageText3').style.display = 'block';
        };
        reader.readAsDataURL(this.files[3]);
    } else {
        addImageElements('image4', 'ConstructionPhotographs', 'ConstructionImage3', 'ConstructionImageText3',
            'ConstructionImageRemoveButton3', 'AddConstructionImageButton3', 'ConstructionUploadImage3',
            'RemoveConstructionImage3()', 'AddConstructionImage3()', '510px','0px');
    }

    if (this.files && this.files[4]) {

        addImageElements('image5', 'ConstructionPhotographs', 'ConstructionImage4', 'ConstructionImageText4',
            'ConstructionImageRemoveButton4', 'AddConstructionImageButton4', 'ConstructionUploadImage4',
            'RemoveConstructionImage4()', 'AddConstructionImage4()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage4').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton4').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton4').style.display = 'block';
            document.getElementById('ConstructionImageText4').style.display = 'block';
        };
        reader.readAsDataURL(this.files[4]);
    } else {
        addImageElements('image5', 'ConstructionPhotographs', 'ConstructionImage4', 'ConstructionImageText4',
            'ConstructionImageRemoveButton4', 'AddConstructionImageButton4', 'ConstructionUploadImage4',
            'RemoveConstructionImage4()', 'AddConstructionImage4()', '510px','0px');
    }

    if (this.files && this.files[5]) {

        addImageElements('image6', 'ConstructionPhotographs', 'ConstructionImage5', 'ConstructionImageText5',
            'ConstructionImageRemoveButton5', 'AddConstructionImageButton5', 'ConstructionUploadImage5',
            'RemoveConstructionImage5()', 'AddConstructionImage5()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage5').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton5').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton5').style.display = 'block';
            document.getElementById('ConstructionImageText5').style.display = 'block';
        };
        reader.readAsDataURL(this.files[5]);
    } else {
        addImageElements('image6', 'ConstructionPhotographs', 'ConstructionImage5', 'ConstructionImageText5',
            'ConstructionImageRemoveButton5', 'AddConstructionImageButton5', 'ConstructionUploadImage5',
            'RemoveConstructionImage5()', 'AddConstructionImage5()', '510px','0px');
    }
    if (this.files && this.files[6]) {

        addImageElements('image7', 'ConstructionPhotographs', 'ConstructionImage6', 'ConstructionImageText6',
            'ConstructionImageRemoveButton6', 'AddConstructionImageButton6', 'ConstructionUploadImage6',
            'RemoveConstructionImage6()', 'AddConstructionImage6()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage6').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton6').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton6').style.display = 'block';
            document.getElementById('ConstructionImageText6').style.display = 'block';
        };
        reader.readAsDataURL(this.files[6]);
    } else {
        addImageElements('image7', 'ConstructionPhotographs', 'ConstructionImage6', 'ConstructionImageText6',
            'ConstructionImageRemoveButton6', 'AddConstructionImageButton6', 'ConstructionUploadImage6',
            'RemoveConstructionImage6()', 'AddConstructionImage6()', '510px','0px');
    }
    if (this.files && this.files[7]) {

        addImageElements('image8', 'ConstructionPhotographs', 'ConstructionImage7', 'ConstructionImageText7',
            'ConstructionImageRemoveButton7', 'AddConstructionImageButton7', 'ConstructionUploadImage7',
            'RemoveConstructionImage7()', 'AddConstructionImage7()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage7').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton7').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton7').style.display = 'block';
            document.getElementById('ConstructionImageText7').style.display = 'block';
        };
        reader.readAsDataURL(this.files[7]);
    } else {
        addImageElements('image8', 'ConstructionPhotographs', 'ConstructionImage7', 'ConstructionImageText7',
            'ConstructionImageRemoveButton7', 'AddConstructionImageButton7', 'ConstructionUploadImage7',
            'RemoveConstructionImage7()', 'AddConstructionImage7()', '510px','0px');
    }
    if (this.files && this.files[8]) {

        addImageElements('image9', 'ConstructionPhotographs', 'ConstructionImage8', 'ConstructionImageText8',
            'ConstructionImageRemoveButton8', 'AddConstructionImageButton8', 'ConstructionUploadImage8',
            'RemoveConstructionImage8()', 'AddConstructionImage8()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage8').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton8').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton8').style.display = 'block';
            document.getElementById('ConstructionImageText8').style.display = 'block';
        };
        reader.readAsDataURL(this.files[8]);
    } else {
        addImageElements('image9', 'ConstructionPhotographs', 'ConstructionImage8', 'ConstructionImageText8',
            'ConstructionImageRemoveButton8', 'AddConstructionImageButton8', 'ConstructionUploadImage8',
            'RemoveConstructionImage8()', 'AddConstructionImage8()', '510px','0px');
    }
    if (this.files && this.files[9]) {

        addImageElements('image10', 'ConstructionPhotographs', 'ConstructionImage9', 'ConstructionImageText9',
            'ConstructionImageRemoveButton9', 'AddConstructionImageButton9', 'ConstructionUploadImage9',
            'RemoveConstructionImage9()', 'AddConstructionImage9()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage9').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton9').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton9').style.display = 'block';
            document.getElementById('ConstructionImageText9').style.display = 'block';
        };
        reader.readAsDataURL(this.files[9]);
    } else {
        addImageElements('image10', 'ConstructionPhotographs', 'ConstructionImage9', 'ConstructionImageText9',
            'ConstructionImageRemoveButton9', 'AddConstructionImageButton9', 'ConstructionUploadImage9',
            'RemoveConstructionImage9()', 'AddConstructionImage9()', '510px','0px');
    }
    if (this.files && this.files[10]) {

        addImageElements('image11', 'ConstructionPhotographs', 'ConstructionImage10', 'ConstructionImageText10',
            'ConstructionImageRemoveButton10', 'AddConstructionImageButton10', 'ConstructionUploadImage10',
            'RemoveConstructionImage10()', 'AddConstructionImage10()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage10').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton10').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton10').style.display = 'block';
            document.getElementById('ConstructionImageText10').style.display = 'block';
        };
        reader.readAsDataURL(this.files[10]);
    } else {
        addImageElements('image11', 'ConstructionPhotographs', 'ConstructionImage10', 'ConstructionImageText10',
            'ConstructionImageRemoveButton10', 'AddConstructionImageButton10', 'ConstructionUploadImage10',
            'RemoveConstructionImage10()', 'AddConstructionImage10()', '510px','0px');
    }
    if (this.files && this.files[11]) {

        addImageElements('image12', 'ConstructionPhotographs', 'ConstructionImage11', 'ConstructionImageText11',
            'ConstructionImageRemoveButton11', 'AddConstructionImageButton11', 'ConstructionUploadImage11',
            'RemoveConstructionImage11()', 'AddConstructionImage11()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage11').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton11').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton11').style.display = 'block';
            document.getElementById('ConstructionImageText11').style.display = 'block';
        };
        reader.readAsDataURL(this.files[11]);
    } else {
        addImageElements('image12', 'ConstructionPhotographs', 'ConstructionImage11', 'ConstructionImageText11',
            'ConstructionImageRemoveButton11', 'AddConstructionImageButton11', 'ConstructionUploadImage11',
            'RemoveConstructionImage11()', 'AddConstructionImage11()', '510px','0px');
    }
    if (this.files && this.files[12]) {

        addImageElements('image12', 'ConstructionPhotographs', 'ConstructionImage12', 'ConstructionImageText12',
            'ConstructionImageRemoveButton12', 'AddConstructionImageButton12', 'ConstructionUploadImage12',
            'RemoveConstructionImage12()', 'AddConstructionImage12()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage12').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton12').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton12').style.display = 'block';
            document.getElementById('ConstructionImageText12').style.display = 'block';
        };
        reader.readAsDataURL(this.files[12]);
    } else {
        addImageElements('image12', 'ConstructionPhotographs', 'ConstructionImage12', 'ConstructionImageText12',
            'ConstructionImageRemoveButton12', 'AddConstructionImageButton12', 'ConstructionUploadImage12',
            'RemoveConstructionImage12()', 'AddConstructionImage12()', '510px','0px');
    }

    if (this.files && this.files[13]) {

        addImageElements('image14', 'ConstructionPhotographs', 'ConstructionImage13', 'ConstructionImageText13',
            'ConstructionImageRemoveButton13', 'AddConstructionImageButton13', 'ConstructionUploadImage13',
            'RemoveConstructionImage13()', 'AddConstructionImage13()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage13').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton13').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton13').style.display = 'block';
            document.getElementById('ConstructionImageText13').style.display = 'block';
        };
        reader.readAsDataURL(this.files[13]);
    } else {
        addImageElements('image14', 'ConstructionPhotographs', 'ConstructionImage13', 'ConstructionImageText13',
            'ConstructionImageRemoveButton13', 'AddConstructionImageButton13', 'ConstructionUploadImage13',
            'RemoveConstructionImage13()', 'AddConstructionImage13()', '510px','0px');
    }

    if (this.files && this.files[14]) {

        addImageElements('image15', 'ConstructionPhotographs', 'ConstructionImage14', 'ConstructionImageText14',
            'ConstructionImageRemoveButton14', 'AddConstructionImageButton14', 'ConstructionUploadImage14',
            'RemoveConstructionImage14()', 'AddConstructionImage14()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage14').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton14').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton14').style.display = 'block';
            document.getElementById('ConstructionImageText14').style.display = 'block';
        };
        reader.readAsDataURL(this.files[14]);
    } else {
        addImageElements('image15', 'ConstructionPhotographs', 'ConstructionImage14', 'ConstructionImageText14',
            'ConstructionImageRemoveButton14', 'AddConstructionImageButton14', 'ConstructionUploadImage14',
            'RemoveConstructionImage14()', 'AddConstructionImage14()', '510px','0px');
    }

    if (this.files && this.files[15]) {

        addImageElements('image16', 'ConstructionPhotographs', 'ConstructionImage15', 'ConstructionImageText15',
            'ConstructionImageRemoveButton15', 'AddConstructionImageButton15', 'ConstructionUploadImage15',
            'RemoveConstructionImage15()', 'AddConstructionImage15()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage15').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton15').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton15').style.display = 'block';
            document.getElementById('ConstructionImageText15').style.display = 'block';
        };
        reader.readAsDataURL(this.files[15]);
    } else {
        addImageElements('image16', 'ConstructionPhotographs', 'ConstructionImage15', 'ConstructionImageText15',
            'ConstructionImageRemoveButton15', 'AddConstructionImageButton15', 'ConstructionUploadImage15',
            'RemoveConstructionImage15()', 'AddConstructionImage15()', '510px','0px');
    }

    if (this.files && this.files[16]) {

        addImageElements('image17', 'ConstructionPhotographs', 'ConstructionImage16', 'ConstructionImageText16',
            'ConstructionImageRemoveButton16', 'AddConstructionImageButton16', 'ConstructionUploadImage16',
            'RemoveConstructionImage16()', 'AddConstructionImage16()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage16').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton16').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton16').style.display = 'block';
            document.getElementById('ConstructionImageText16').style.display = 'block';
        };
        reader.readAsDataURL(this.files[16]);
    } else {
        addImageElements('image17', 'ConstructionPhotographs', 'ConstructionImage16', 'ConstructionImageText16',
            'ConstructionImageRemoveButton16', 'AddConstructionImageButton16', 'ConstructionUploadImage16',
            'RemoveConstructionImage16()', 'AddConstructionImage16()', '510px','0px');
    }

    if (this.files && this.files[17]) {

        addImageElements('image18', 'ConstructionPhotographs', 'ConstructionImage17', 'ConstructionImageText17',
            'ConstructionImageRemoveButton17', 'AddConstructionImageButton17', 'ConstructionUploadImage17',
            'RemoveConstructionImage17()', 'AddConstructionImage17()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage17').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton17').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton17').style.display = 'block';
            document.getElementById('ConstructionImageText17').style.display = 'block';
        };
        reader.readAsDataURL(this.files[17]);
    } else {
        addImageElements('image18', 'ConstructionPhotographs', 'ConstructionImage17', 'ConstructionImageText17',
            'ConstructionImageRemoveButton17', 'AddConstructionImageButton17', 'ConstructionUploadImage17',
            'RemoveConstructionImage17()', 'AddConstructionImage17()', '510px','0px');
    }

    if (this.files && this.files[18]) {

        addImageElements('image19', 'ConstructionPhotographs', 'ConstructionImage18', 'ConstructionImageText18',
            'ConstructionImageRemoveButton18', 'AddConstructionImageButton18', 'ConstructionUploadImage18',
            'RemoveConstructionImage18()', 'AddConstructionImage18()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage18').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton18').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton18').style.display = 'block';
            document.getElementById('ConstructionImageText18').style.display = 'block';
        };
        reader.readAsDataURL(this.files[18]);
    } else {
        addImageElements('image19', 'ConstructionPhotographs', 'ConstructionImage18', 'ConstructionImageText18',
            'ConstructionImageRemoveButton18', 'AddConstructionImageButton18', 'ConstructionUploadImage18',
            'RemoveConstructionImage18()', 'AddConstructionImage18()', '510px','0px');
    }

    if (this.files && this.files[19]) {

        addImageElements('image20', 'ConstructionPhotographs', 'ConstructionImage19', 'ConstructionImageText19',
            'ConstructionImageRemoveButton19', 'AddConstructionImageButton19', 'ConstructionUploadImage19',
            'RemoveConstructionImage19()', 'AddConstructionImage19()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage19').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton19').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton19').style.display = 'block';
            document.getElementById('ConstructionImageText19').style.display = 'block';
        };
        reader.readAsDataURL(this.files[19]);
    } else {
        addImageElements('image20', 'ConstructionPhotographs', 'ConstructionImage19', 'ConstructionImageText19',
            'ConstructionImageRemoveButton19', 'AddConstructionImageButton19', 'ConstructionUploadImage19',
            'RemoveConstructionImage19()', 'AddConstructionImage19()', '510px','0px');
    }

    if (this.files && this.files[20]) {

        addImageElements('image21', 'ConstructionPhotographs', 'ConstructionImage20', 'ConstructionImageText20',
            'ConstructionImageRemoveButton20', 'AddConstructionImageButton20', 'ConstructionUploadImage20',
            'RemoveConstructionImage20()', 'AddConstructionImage20()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage20').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton20').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton20').style.display = 'block';
            document.getElementById('ConstructionImageText20').style.display = 'block';
        };
        reader.readAsDataURL(this.files[20]);
    } else {
        addImageElements('image21', 'ConstructionPhotographs', 'ConstructionImage20', 'ConstructionImageText20',
            'ConstructionImageRemoveButton20', 'AddConstructionImageButton20', 'ConstructionUploadImage20',
            'RemoveConstructionImage20()', 'AddConstructionImage20()', '510px','0px');
    }

    if (this.files && this.files[21]) {

        addImageElements('image22', 'ConstructionPhotographs', 'ConstructionImage21', 'ConstructionImageText21',
            'ConstructionImageRemoveButton21', 'AddConstructionImageButton21', 'ConstructionUploadImage21',
            'RemoveConstructionImage21()', 'AddConstructionImage21()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage21').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton21').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton21').style.display = 'block';
            document.getElementById('ConstructionImageText21').style.display = 'block';
        };
        reader.readAsDataURL(this.files[22]);
    } else {
        addImageElements('image22', 'ConstructionPhotographs', 'ConstructionImage21', 'ConstructionImageText21',
            'ConstructionImageRemoveButton21', 'AddConstructionImageButton21', 'ConstructionUploadImage21',
            'RemoveConstructionImage21()', 'AddConstructionImage21()', '510px','0px');
    }

    if (this.files && this.files[22]) {

        addImageElements('image23', 'ConstructionPhotographs', 'ConstructionImage22', 'ConstructionImageText22',
            'ConstructionImageRemoveButton22', 'AddConstructionImageButton22', 'ConstructionUploadImage22',
            'RemoveConstructionImage22()', 'AddConstructionImage22()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage22').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton22').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton22').style.display = 'block';
            document.getElementById('ConstructionImageText22').style.display = 'block';
        };
        reader.readAsDataURL(this.files[22]);
    } else {
        addImageElements('image23', 'ConstructionPhotographs', 'ConstructionImage22', 'ConstructionImageText22',
            'ConstructionImageRemoveButton22', 'AddConstructionImageButton22', 'ConstructionUploadImage22',
            'RemoveConstructionImage22()', 'AddConstructionImage22()', '510px','0px');
    }

    if (this.files && this.files[23]) {

        addImageElements('image24', 'ConstructionPhotographs', 'ConstructionImage23', 'ConstructionImageText23',
            'ConstructionImageRemoveButton23', 'AddConstructionImageButton23', 'ConstructionUploadImage23',
            'RemoveConstructionImage23()', 'AddConstructionImage23()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage23').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton23').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton23').style.display = 'block';
            document.getElementById('ConstructionImageText23').style.display = 'block';
        };
        reader.readAsDataURL(this.files[23]);
    } else {
        addImageElements('image24', 'ConstructionPhotographs', 'ConstructionImage23', 'ConstructionImageText23',
            'ConstructionImageRemoveButton23', 'AddConstructionImageButton23', 'ConstructionUploadImage23',
            'RemoveConstructionImage23()', 'AddConstructionImage23()', '510px','0px');
    }

    if (this.files && this.files[24]) {

        addImageElements('image25', 'ConstructionPhotographs', 'ConstructionImage24', 'ConstructionImageText24',
            'ConstructionImageRemoveButton24', 'AddConstructionImageButton24', 'ConstructionUploadImage24',
            'RemoveConstructionImage24()', 'AddConstructionImage24()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage24').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton24').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton24').style.display = 'block';
            document.getElementById('ConstructionImageText24').style.display = 'block';
        };
        reader.readAsDataURL(this.files[24]);
    } else {
        addImageElements('image25', 'ConstructionPhotographs', 'ConstructionImage24', 'ConstructionImageText24',
            'ConstructionImageRemoveButton24', 'AddConstructionImageButton24', 'ConstructionUploadImage24',
            'RemoveConstructionImage24()', 'AddConstructionImage24()', '510px','0px');
    }

    if (this.files && this.files[25]) {

        addImageElements('image26', 'ConstructionPhotographs', 'ConstructionImage25', 'ConstructionImageText25',
            'ConstructionImageRemoveButton25', 'AddConstructionImageButton25', 'ConstructionUploadImage25',
            'RemoveConstructionImage25()', 'AddConstructionImage25()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage25').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton25').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton25').style.display = 'block';
            document.getElementById('ConstructionImageText25').style.display = 'block';
        };
        reader.readAsDataURL(this.files[25]);
    } else {
        addImageElements('image26', 'ConstructionPhotographs', 'ConstructionImage25', 'ConstructionImageText25',
            'ConstructionImageRemoveButton25', 'AddConstructionImageButton25', 'ConstructionUploadImage25',
            'RemoveConstructionImage25()', 'AddConstructionImage25()', '510px','0px');
    }

    if (this.files && this.files[26]) {

        addImageElements('image27', 'ConstructionPhotographs', 'ConstructionImage26', 'ConstructionImageText26',
            'ConstructionImageRemoveButton26', 'AddConstructionImageButton26', 'ConstructionUploadImage26',
            'RemoveConstructionImage26()', 'AddConstructionImage26()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage26').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton26').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton26').style.display = 'block';
            document.getElementById('ConstructionImageText26').style.display = 'block';
        };
        reader.readAsDataURL(this.files[26]);
    } else {
        addImageElements('image27', 'ConstructionPhotographs', 'ConstructionImage26', 'ConstructionImageText26',
            'ConstructionImageRemoveButton26', 'AddConstructionImageButton26', 'ConstructionUploadImage26',
            'RemoveConstructionImage26()', 'AddConstructionImage26()', '510px','0px');
    }
    if (this.files && this.files[27]) {

        addImageElements('image28', 'ConstructionPhotographs', 'ConstructionImage27', 'ConstructionImageText27',
            'ConstructionImageRemoveButton27', 'AddConstructionImageButton27', 'ConstructionUploadImage27',
            'RemoveConstructionImage27()', 'AddConstructionImage27()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage27').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton27').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton27').style.display = 'block';
            document.getElementById('ConstructionImageText27').style.display = 'block';
        };
        reader.readAsDataURL(this.files[27]);
    } else {
        addImageElements('image28', 'ConstructionPhotographs', 'ConstructionImage27', 'ConstructionImageText27',
            'ConstructionImageRemoveButton27', 'AddConstructionImageButton27', 'ConstructionUploadImage27',
            'RemoveConstructionImage27()', 'AddConstructionImage27()', '510px','0px');
    }

    if (this.files && this.files[28]) {

        addImageElements('image29', 'ConstructionPhotographs', 'ConstructionImage28', 'ConstructionImageText28',
            'ConstructionImageRemoveButton28', 'AddConstructionImageButton28', 'ConstructionUploadImage28',
            'RemoveConstructionImage28()', 'AddConstructionImage28()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage28').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton28').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton28').style.display = 'block';
            document.getElementById('ConstructionImageText28').style.display = 'block';
        };
        reader.readAsDataURL(this.files[28]);
    } else {
        addImageElements('image29', 'ConstructionPhotographs', 'ConstructionImage28', 'ConstructionImageText28',
            'ConstructionImageRemoveButton28', 'AddConstructionImageButton28', 'ConstructionUploadImage28',
            'RemoveConstructionImage28()', 'AddConstructionImage28()', '510px','0px');
    }

    if (this.files && this.files[29]) {

        addImageElements('image30', 'ConstructionPhotographs', 'ConstructionImage29', 'ConstructionImageText29',
            'ConstructionImageRemoveButton29', 'AddConstructionImageButton29', 'ConstructionUploadImage29',
            'RemoveConstructionImage29()', 'AddConstructionImage29()', '510px','510px');
        //addElements('MaintenanceImageDiv0','MaintenanceImage0');
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ConstructionImage29').attr('src', e.target.result);
            document.getElementById('AddConstructionImageButton29').style.display = 'none';
            document.getElementById('ConstructionImageRemoveButton29').style.display = 'block';
            document.getElementById('ConstructionImageText29').style.display = 'block';
        };
        reader.readAsDataURL(this.files[28]);
    } else {
        addImageElements('image30', 'ConstructionPhotographs', 'ConstructionImage29', 'ConstructionImageText29',
            'ConstructionImageRemoveButton29', 'AddConstructionImageButton29', 'ConstructionUploadImage29',
            'RemoveConstructionImage29()', 'AddConstructionImage29()', '510px','0px');
    }

});

$("#ConstructionUploadCoverImage").change(function(){
    uploadCoverImage(this,'ConstructionCoverImage','ConstructionCoverImageRemoveButton','500px');
});

$('#AdviceUploadImages').change(function() {
    $("#AdvicePhotographs").empty();
    var table = document.getElementById("AdviceImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    console.log(count);
    //check the number of image
    if (count > 30) {
        alert("You can only select 30 images. It will only display the first 30 photos");
    }

    if (!(this.files && this.files[0])) {
        addImageElements('image1', 'AdvicePhotographs', 'AdviceImage0', 'AdviceImageText0',
            'AdviceImageRemoveButton0', 'AddAdviceImageButton0', 'AdviceUploadImage0',
            'RemoveAdviceImage0()', 'AddAdviceImage0()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image1', 'AdvicePhotographs', 'AdviceImage0', 'AdviceImageText0',
            'AdviceImageRemoveButton0', 'AddAdviceImageButton0', 'AdviceUploadImage0',
            'RemoveAdviceImage0()', 'AddAdviceImage0()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage0').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton0').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton0').style.display = 'block';
            document.getElementById('AdviceImageText0').style.display = 'block';
        };
        reader.readAsDataURL(this.files[0]);

    }

    if (!(this.files && this.files[1])) {
        addImageElements('image2', 'AdvicePhotographs', 'AdviceImage1', 'AdviceImageText1',
            'AdviceImageRemoveButton1', 'AddAdviceImageButton1', 'AdviceUploadImage1',
            'RemoveAdviceImage1()', 'AddAdviceImage1()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image2', 'AdvicePhotographs', 'AdviceImage1', 'AdviceImageText1',
            'AdviceImageRemoveButton1', 'AddAdviceImageButton1', 'AdviceUploadImage1',
            'RemoveAdviceImage1()', 'AddAdviceImage1()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage1').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton1').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton1').style.display = 'block';
            document.getElementById('AdviceImageText1').style.display = 'block';
        };
        reader.readAsDataURL(this.files[1]);

    }

    if (!(this.files && this.files[2])) {
        addImageElements('image3', 'AdvicePhotographs', 'AdviceImage2', 'AdviceImageText2',
            'AdviceImageRemoveButton2', 'AddAdviceImageButton2', 'AdviceUploadImage2',
            'RemoveAdviceImage2()', 'AddAdviceImage2()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image3', 'AdvicePhotographs', 'AdviceImage2', 'AdviceImageText2',
            'AdviceImageRemoveButton2', 'AddAdviceImageButton2', 'AdviceUploadImage2',
            'RemoveAdviceImage2()', 'AddAdviceImage2()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage2').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton2').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton2').style.display = 'block';
            document.getElementById('AdviceImageText2').style.display = 'block';
        };
        reader.readAsDataURL(this.files[2]);

    }

    if (!(this.files && this.files[3])) {
        addImageElements('image4', 'AdvicePhotographs', 'AdviceImage3', 'AdviceImageText3',
            'AdviceImageRemoveButton3', 'AddAdviceImageButton3', 'AdviceUploadImage3',
            'RemoveAdviceImage3()', 'AddAdviceImage3()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image4', 'AdvicePhotographs', 'AdviceImage3', 'AdviceImageText3',
            'AdviceImageRemoveButton3', 'AddAdviceImageButton3', 'AdviceUploadImage3',
            'RemoveAdviceImage3()', 'AddAdviceImage3()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage3').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton3').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton3').style.display = 'block';
            document.getElementById('AdviceImageText3').style.display = 'block';
        };
        reader.readAsDataURL(this.files[3]);

    }

    if (!(this.files && this.files[4])) {
        addImageElements('image5', 'AdvicePhotographs', 'AdviceImage4', 'AdviceImageText4',
            'AdviceImageRemoveButton4', 'AddAdviceImageButton4', 'AdviceUploadImage4',
            'RemoveAdviceImage4()', 'AddAdviceImage4()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image5', 'AdvicePhotographs', 'AdviceImage4', 'AdviceImageText4',
            'AdviceImageRemoveButton4', 'AddAdviceImageButton4', 'AdviceUploadImage4',
            'RemoveAdviceImage4()', 'AddAdviceImage4()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage4').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton4').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton4').style.display = 'block';
            document.getElementById('AdviceImageText4').style.display = 'block';
        };
        reader.readAsDataURL(this.files[4]);

    }

    if (!(this.files && this.files[5])) {
        addImageElements('image6', 'AdvicePhotographs', 'AdviceImage5', 'AdviceImageText5',
            'AdviceImageRemoveButton5', 'AddAdviceImageButton5', 'AdviceUploadImage5',
            'RemoveAdviceImage5()', 'AddAdviceImage5()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image6', 'AdvicePhotographs', 'AdviceImage5', 'AdviceImageText5',
            'AdviceImageRemoveButton5', 'AddAdviceImageButton5', 'AdviceUploadImage5',
            'RemoveAdviceImage5()', 'AddAdviceImage5()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage5').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton5').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton5').style.display = 'block';
            document.getElementById('AdviceImageText5').style.display = 'block';
        };
        reader.readAsDataURL(this.files[5]);

    }

    if (!(this.files && this.files[6])) {
        addImageElements('image7', 'AdvicePhotographs', 'AdviceImage6', 'AdviceImageText6',
            'AdviceImageRemoveButton6', 'AddAdviceImageButton6', 'AdviceUploadImage6',
            'RemoveAdviceImage6()', 'AddAdviceImage6()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image7', 'AdvicePhotographs', 'AdviceImage6', 'AdviceImageText6',
            'AdviceImageRemoveButton6', 'AddAdviceImageButton6', 'AdviceUploadImage6',
            'RemoveAdviceImage6()', 'AddAdviceImage6()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage6').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton6').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton6').style.display = 'block';
            document.getElementById('AdviceImageText6').style.display = 'block';
        };
        reader.readAsDataURL(this.files[6]);

    }

    if (!(this.files && this.files[7])) {
        addImageElements('image8', 'AdvicePhotographs', 'AdviceImage7', 'AdviceImageText7',
            'AdviceImageRemoveButton7', 'AddAdviceImageButton7', 'AdviceUploadImage7',
            'RemoveAdviceImage7()', 'AddAdviceImage7()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image8', 'AdvicePhotographs', 'AdviceImage7', 'AdviceImageText7',
            'AdviceImageRemoveButton7', 'AddAdviceImageButton7', 'AdviceUploadImage7',
            'RemoveAdviceImage7()', 'AddAdviceImage7()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage7').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton7').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton7').style.display = 'block';
            document.getElementById('AdviceImageText7').style.display = 'block';
        };
        reader.readAsDataURL(this.files[7]);

    }

    if (!(this.files && this.files[8])) {
        addImageElements('image9', 'AdvicePhotographs', 'AdviceImage8', 'AdviceImageText8',
            'AdviceImageRemoveButton8', 'AddAdviceImageButton8', 'AdviceUploadImage8',
            'RemoveAdviceImage8()', 'AddAdviceImage8()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image9', 'AdvicePhotographs', 'AdviceImage8', 'AdviceImageText8',
            'AdviceImageRemoveButton8', 'AddAdviceImageButton8', 'AdviceUploadImage8',
            'RemoveAdviceImage8()', 'AddAdviceImage8()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage8').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton8').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton8').style.display = 'block';
            document.getElementById('AdviceImageText8').style.display = 'block';
        };
        reader.readAsDataURL(this.files[8]);

    }

    if (!(this.files && this.files[9])) {
        addImageElements('image10', 'AdvicePhotographs', 'AdviceImage9', 'AdviceImageText9',
            'AdviceImageRemoveButton9', 'AddAdviceImageButton9', 'AdviceUploadImage9',
            'RemoveAdviceImage9()', 'AddAdviceImage9()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image10', 'AdvicePhotographs', 'AdviceImage9', 'AdviceImageText9',
            'AdviceImageRemoveButton9', 'AddAdviceImageButton9', 'AdviceUploadImage9',
            'RemoveAdviceImage9()', 'AddAdviceImage9()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage9').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton9').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton9').style.display = 'block';
            document.getElementById('AdviceImageText9').style.display = 'block';
        };
        reader.readAsDataURL(this.files[9]);

    }

    if (!(this.files && this.files[10])) {
        addImageElements('image11', 'AdvicePhotographs', 'AdviceImage10', 'AdviceImageText10',
            'AdviceImageRemoveButton10', 'AddAdviceImageButton10', 'AdviceUploadImage10',
            'RemoveAdviceImage10()', 'AddAdviceImage10()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image11', 'AdvicePhotographs', 'AdviceImage10', 'AdviceImageText10',
            'AdviceImageRemoveButton10', 'AddAdviceImageButton10', 'AdviceUploadImage10',
            'RemoveAdviceImage10()', 'AddAdviceImage10()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage10').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton10').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton10').style.display = 'block';
            document.getElementById('AdviceImageText10').style.display = 'block';
        };
        reader.readAsDataURL(this.files[10]);

    }

    if (!(this.files && this.files[11])) {
        addImageElements('image12', 'AdvicePhotographs', 'AdviceImage11', 'AdviceImageText11',
            'AdviceImageRemoveButton11', 'AddAdviceImageButton11', 'AdviceUploadImage11',
            'RemoveAdviceImage11()', 'AddAdviceImage11()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image12', 'AdvicePhotographs', 'AdviceImage11', 'AdviceImageText11',
            'AdviceImageRemoveButton11', 'AddAdviceImageButton11', 'AdviceUploadImage11',
            'RemoveAdviceImage11()', 'AddAdviceImage11()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage11').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton11').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton11').style.display = 'block';
            document.getElementById('AdviceImageText11').style.display = 'block';
        };
        reader.readAsDataURL(this.files[11]);

    }


    if (!(this.files && this.files[12])) {
        addImageElements('image13', 'AdvicePhotographs', 'AdviceImage12', 'AdviceImageText12',
            'AdviceImageRemoveButton12', 'AddAdviceImageButton12', 'AdviceUploadImage12',
            'RemoveAdviceImage12()', 'AddAdviceImage12()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image13', 'AdvicePhotographs', 'AdviceImage12', 'AdviceImageText12',
            'AdviceImageRemoveButton12', 'AddAdviceImageButton12', 'AdviceUploadImage12',
            'RemoveAdviceImage12()', 'AddAdviceImage12()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage12').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton12').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton12').style.display = 'block';
            document.getElementById('AdviceImageText12').style.display = 'block';
        };
        reader.readAsDataURL(this.files[12]);

    }

    if (!(this.files && this.files[13])) {
        addImageElements('image14', 'AdvicePhotographs', 'AdviceImage13', 'AdviceImageText13',
            'AdviceImageRemoveButton13', 'AddAdviceImageButton13', 'AdviceUploadImage13',
            'RemoveAdviceImage13()', 'AddAdviceImage13()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image14', 'AdvicePhotographs', 'AdviceImage13', 'AdviceImageText13',
            'AdviceImageRemoveButton13', 'AddAdviceImageButton13', 'AdviceUploadImage13',
            'RemoveAdviceImage13()', 'AddAdviceImage13()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage13').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton13').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton13').style.display = 'block';
            document.getElementById('AdviceImageText13').style.display = 'block';
        };
        reader.readAsDataURL(this.files[13]);

    }



    if (!(this.files && this.files[14])) {
        addImageElements('image15', 'AdvicePhotographs', 'AdviceImage14', 'AdviceImageText14',
            'AdviceImageRemoveButton14', 'AddAdviceImageButton14', 'AdviceUploadImage14',
            'RemoveAdviceImage14()', 'AddAdviceImage14()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image15', 'AdvicePhotographs', 'AdviceImage14', 'AdviceImageText14',
            'AdviceImageRemoveButton14', 'AddAdviceImageButton14', 'AdviceUploadImage14',
            'RemoveAdviceImage14()', 'AddAdviceImage14()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage14').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton14').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton14').style.display = 'block';
            document.getElementById('AdviceImageText14').style.display = 'block';
        };
        reader.readAsDataURL(this.files[14]);

    }

    if (!(this.files && this.files[15])) {
        addImageElements('image16', 'AdvicePhotographs', 'AdviceImage15', 'AdviceImageText15',
            'AdviceImageRemoveButton15', 'AddAdviceImageButton15', 'AdviceUploadImage15',
            'RemoveAdviceImage15()', 'AddAdviceImage15()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image16', 'AdvicePhotographs', 'AdviceImage15', 'AdviceImageText15',
            'AdviceImageRemoveButton15', 'AddAdviceImageButton15', 'AdviceUploadImage15',
            'RemoveAdviceImage15()', 'AddAdviceImage15()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage15').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton15').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton15').style.display = 'block';
            document.getElementById('AdviceImageText15').style.display = 'block';
        };
        reader.readAsDataURL(this.files[15]);

    }

    if (!(this.files && this.files[16])) {
        addImageElements('image17', 'AdvicePhotographs', 'AdviceImage16', 'AdviceImageText16',
            'AdviceImageRemoveButton16', 'AddAdviceImageButton16', 'AdviceUploadImage16',
            'RemoveAdviceImage16()', 'AddAdviceImage16()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image17', 'AdvicePhotographs', 'AdviceImage16', 'AdviceImageText16',
            'AdviceImageRemoveButton16', 'AddAdviceImageButton16', 'AdviceUploadImage16',
            'RemoveAdviceImage16()', 'AddAdviceImage16()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage16').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton16').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton16').style.display = 'block';
            document.getElementById('AdviceImageText16').style.display = 'block';
        };
        reader.readAsDataURL(this.files[16]);

    }

    if (!(this.files && this.files[17])) {
        addImageElements('image18', 'AdvicePhotographs', 'AdviceImage17', 'AdviceImageText17',
            'AdviceImageRemoveButton17', 'AddAdviceImageButton17', 'AdviceUploadImage17',
            'RemoveAdviceImage17()', 'AddAdviceImage17()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image18', 'AdvicePhotographs', 'AdviceImage17', 'AdviceImageText17',
            'AdviceImageRemoveButton17', 'AddAdviceImageButton17', 'AdviceUploadImage17',
            'RemoveAdviceImage17()', 'AddAdviceImage17()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage17').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton17').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton17').style.display = 'block';
            document.getElementById('AdviceImageText17').style.display = 'block';
        };
        reader.readAsDataURL(this.files[17]);

    }


    if (!(this.files && this.files[18])) {
        addImageElements('image19', 'AdvicePhotographs', 'AdviceImage18', 'AdviceImageText18',
            'AdviceImageRemoveButton18', 'AddAdviceImageButton18', 'AdviceUploadImage18',
            'RemoveAdviceImage18()', 'AddAdviceImage18()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image19', 'AdvicePhotographs', 'AdviceImage18', 'AdviceImageText18',
            'AdviceImageRemoveButton18', 'AddAdviceImageButton18', 'AdviceUploadImage18',
            'RemoveAdviceImage18()', 'AddAdviceImage18()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage18').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton18').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton18').style.display = 'block';
            document.getElementById('AdviceImageText18').style.display = 'block';
        };
        reader.readAsDataURL(this.files[18]);

    }

    if (!(this.files && this.files[19])) {
        addImageElements('image20', 'AdvicePhotographs', 'AdviceImage19', 'AdviceImageText19',
            'AdviceImageRemoveButton19', 'AddAdviceImageButton19', 'AdviceUploadImage19',
            'RemoveAdviceImage19()', 'AddAdviceImage19()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image20', 'AdvicePhotographs', 'AdviceImage19', 'AdviceImageText19',
            'AdviceImageRemoveButton19', 'AddAdviceImageButton19', 'AdviceUploadImage19',
            'RemoveAdviceImage19()', 'AddAdviceImage19()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage19').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton19').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton19').style.display = 'block';
            document.getElementById('AdviceImageText19').style.display = 'block';
        };
        reader.readAsDataURL(this.files[19]);

    }


    if (!(this.files && this.files[20])) {
        addImageElements('image21', 'AdvicePhotographs', 'AdviceImage20', 'AdviceImageText20',
            'AdviceImageRemoveButton20', 'AddAdviceImageButton20', 'AdviceUploadImage20',
            'RemoveAdviceImage20()', 'AddAdviceImage20()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image21', 'AdvicePhotographs', 'AdviceImage20', 'AdviceImageText20',
            'AdviceImageRemoveButton20', 'AddAdviceImageButton20', 'AdviceUploadImage20',
            'RemoveAdviceImage20()', 'AddAdviceImage20()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage20').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton20').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton20').style.display = 'block';
            document.getElementById('AdviceImageText20').style.display = 'block';
        };
        reader.readAsDataURL(this.files[20]);

    }

    if (!(this.files && this.files[21])) {
        addImageElements('image22', 'AdvicePhotographs', 'AdviceImage21', 'AdviceImageText21',
            'AdviceImageRemoveButton21', 'AddAdviceImageButton21', 'AdviceUploadImage21',
            'RemoveAdviceImage21()', 'AddAdviceImage21()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image22', 'AdvicePhotographs', 'AdviceImage21', 'AdviceImageText21',
            'AdviceImageRemoveButton21', 'AddAdviceImageButton21', 'AdviceUploadImage21',
            'RemoveAdviceImage21()', 'AddAdviceImage21()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage21').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton21').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton21').style.display = 'block';
            document.getElementById('AdviceImageText21').style.display = 'block';
        };
        reader.readAsDataURL(this.files[21]);

    }


    if (!(this.files && this.files[22])) {
        addImageElements('image23', 'AdvicePhotographs', 'AdviceImage22', 'AdviceImageText22',
            'AdviceImageRemoveButton22', 'AddAdviceImageButton22', 'AdviceUploadImage22',
            'RemoveAdviceImage22()', 'AddAdviceImage22()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image23', 'AdvicePhotographs', 'AdviceImage22', 'AdviceImageText22',
            'AdviceImageRemoveButton22', 'AddAdviceImageButton22', 'AdviceUploadImage22',
            'RemoveAdviceImage22()', 'AddAdviceImage22()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage22').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton22').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton22').style.display = 'block';
            document.getElementById('AdviceImageText22').style.display = 'block';
        };
        reader.readAsDataURL(this.files[22]);

    }

    if (!(this.files && this.files[23])) {
        addImageElements('image24', 'AdvicePhotographs', 'AdviceImage23', 'AdviceImageText23',
            'AdviceImageRemoveButton23', 'AddAdviceImageButton23', 'AdviceUploadImage23',
            'RemoveAdviceImage23()', 'AddAdviceImage23()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image24', 'AdvicePhotographs', 'AdviceImage23', 'AdviceImageText23',
            'AdviceImageRemoveButton23', 'AddAdviceImageButton23', 'AdviceUploadImage23',
            'RemoveAdviceImage23()', 'AddAdviceImage23()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage23').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton23').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton23').style.display = 'block';
            document.getElementById('AdviceImageText23').style.display = 'block';
        };
        reader.readAsDataURL(this.files[23]);

    }

    if (!(this.files && this.files[24])) {
        addImageElements('image25', 'AdvicePhotographs', 'AdviceImage24', 'AdviceImageText24',
            'AdviceImageRemoveButton24', 'AddAdviceImageButton24', 'AdviceUploadImage24',
            'RemoveAdviceImage24()', 'AddAdviceImage24()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image25', 'AdvicePhotographs', 'AdviceImage24', 'AdviceImageText24',
            'AdviceImageRemoveButton24', 'AddAdviceImageButton24', 'AdviceUploadImage24',
            'RemoveAdviceImage24()', 'AddAdviceImage24()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage24').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton24').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton24').style.display = 'block';
            document.getElementById('AdviceImageText24').style.display = 'block';
        };
        reader.readAsDataURL(this.files[24]);

    }

    if (!(this.files && this.files[25])) {
        addImageElements('image26', 'AdvicePhotographs', 'AdviceImage25', 'AdviceImageText25',
            'AdviceImageRemoveButton25', 'AddAdviceImageButton25', 'AdviceUploadImage25',
            'RemoveAdviceImage25()', 'AddAdviceImage25()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image26', 'AdvicePhotographs', 'AdviceImage25', 'AdviceImageText25',
            'AdviceImageRemoveButton25', 'AddAdviceImageButton25', 'AdviceUploadImage25',
            'RemoveAdviceImage25()', 'AddAdviceImage25()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage25').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton25').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton25').style.display = 'block';
            document.getElementById('AdviceImageText25').style.display = 'block';
        };
        reader.readAsDataURL(this.files[25]);

    }

    if (!(this.files && this.files[26])) {
        addImageElements('image27', 'AdvicePhotographs', 'AdviceImage26', 'AdviceImageText26',
            'AdviceImageRemoveButton26', 'AddAdviceImageButton26', 'AdviceUploadImage26',
            'RemoveAdviceImage26()', 'AddAdviceImage26()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image27', 'AdvicePhotographs', 'AdviceImage26', 'AdviceImageText26',
            'AdviceImageRemoveButton26', 'AddAdviceImageButton26', 'AdviceUploadImage26',
            'RemoveAdviceImage26()', 'AddAdviceImage26()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage26').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton26').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton26').style.display = 'block';
            document.getElementById('AdviceImageText26').style.display = 'block';
        };
        reader.readAsDataURL(this.files[26]);

    }




    if (!(this.files && this.files[27])) {
        addImageElements('image28', 'AdvicePhotographs', 'AdviceImage27', 'AdviceImageText27',
            'AdviceImageRemoveButton27', 'AddAdviceImageButton27', 'AdviceUploadImage27',
            'RemoveAdviceImage27()', 'AddAdviceImage27()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image28', 'AdvicePhotographs', 'AdviceImage27', 'AdviceImageText27',
            'AdviceImageRemoveButton27', 'AddAdviceImageButton27', 'AdviceUploadImage27',
            'RemoveAdviceImage27()', 'AddAdviceImage27()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage27').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton27').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton27').style.display = 'block';
            document.getElementById('AdviceImageText27').style.display = 'block';
        };
        reader.readAsDataURL(this.files[27]);

    }


    if (!(this.files && this.files[28])) {
        addImageElements('image29', 'AdvicePhotographs', 'AdviceImage28', 'AdviceImageText28',
            'AdviceImageRemoveButton28', 'AddAdviceImageButton28', 'AdviceUploadImage28',
            'RemoveAdviceImage28()', 'AddAdviceImage28()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image29', 'AdvicePhotographs', 'AdviceImage28', 'AdviceImageText28',
            'AdviceImageRemoveButton28', 'AddAdviceImageButton28', 'AdviceUploadImage28',
            'RemoveAdviceImage28()', 'AddAdviceImage28()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage28').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton28').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton28').style.display = 'block';
            document.getElementById('AdviceImageText28').style.display = 'block';
        };
        reader.readAsDataURL(this.files[28]);

    }


    if (!(this.files && this.files[29])) {
        addImageElements('image30', 'AdvicePhotographs', 'AdviceImage29', 'AdviceImageText29',
            'AdviceImageRemoveButton29', 'AddAdviceImageButton29', 'AdviceUploadImage29',
            'RemoveAdviceImage29()', 'AddAdviceImage29()', '510px', '0px');
    } else {

        var reader = new FileReader();
        addImageElements('image30', 'AdvicePhotographs', 'AdviceImage29', 'AdviceImageText29',
            'AdviceImageRemoveButton29', 'AddAdviceImageButton29', 'AdviceUploadImage29',
            'RemoveAdviceImage29()', 'AddAdviceImage29()', '510px', '510px');
        reader.onload = function (e) {
            $('#AdviceImage29').attr('src', e.target.result);
            document.getElementById('AddAdviceImageButton29').style.display = 'none';
            document.getElementById('AdviceImageRemoveButton29').style.display = 'block';
            document.getElementById('AdviceImageText29').style.display = 'block';
        };
        reader.readAsDataURL(this.files[29]);

    }



});

$('#DilapidationUploadImages').change(function(){
    $("#DilapidationPhotographs").empty();
    var table = document.getElementById("DilapidationImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    if (count > 60) {
        alert("You can only select 60 images. It will only display the first 60 images");
    }

    for (var i = 0;i<60;i++) {
        try {
            //noinspection ExceptionCaughtLocallyJS
            throw i
        }
        catch (ii) {
            setTimeout(function () {
                var nameID = ii + 1;
                var altName = 'image' + nameID;
                var imageID = 'DilapidationImage' + ii;
                var textID = 'DilapidationImageText' + ii;
                var removeButtonID = 'DilapidationImageRemoveButton' + ii;
                var addButtonID = 'AddDilapidationImageButton' + ii;
                var uploadID = 'DilapidationUploadImage' + ii;
                //var removeFunction = 'RemoveDilapidationImage' + ii + '()';

                if (imageFile[ii]) {
                    var reader = new FileReader();
                    var selectionImage = '#DilapidationImage' + ii;
                    addImageElements(altName, 'DilapidationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneDilapidationImage(this.id)', 'addOneDilapidationImage(this.id)', '510px', '510px');
                    reader.readAsDataURL(imageFile[ii]);
                    reader.onload = function (e) {
                        $(selectionImage).attr('src', e.target.result);
                        document.getElementById(addButtonID).style.display = 'none';
                        document.getElementById(removeButtonID).style.display = 'block';
                        document.getElementById(textID).style.display = 'block';
                    };
                }
                else {
                    addImageElements(altName, 'DilapidationPhotographs', imageID, textID, removeButtonID, addButtonID, uploadID,
                        'RemoveOneDilapidationImage(this.id)', 'addOneDilapidationImage(this.id)', '510px', '0px');
                }
            }, 500);
        }
    }


});


//Timber - Summary upload one image per time
$("#TimberSummaryUploadImage0").change(function () {
    readOneImageURL(this, 'TimberSummaryImage0', 'AddTimberSummaryImageButton0', 'TimberSummaryRemoveButton0', 'TimberSummaryImageText0', '265px');
});
$("#TimberSummaryUploadImage1").change(function () {
    readOneImageURL(this, 'TimberSummaryImage1', 'AddTimberSummaryImageButton1', 'TimberSummaryRemoveButton1', 'TimberSummaryImageText1', '265px');
});
$("#TimberSummaryUploadImage2").change(function () {
    readOneImageURL(this, 'TimberSummaryImage2', 'AddTimberSummaryImageButton2', 'TimberSummaryRemoveButton2', 'TimberSummaryImageText2', '265px');
});

//Timber-Recommendation upload one image per time
$("#TimberRecommendationUploadImage0").change(function () {
    readOneImageURL(this, 'TimberRecommendationImage0', 'AddTimberRecommendationImageButton0', 'TimberRecommendationRemoveButton0', 'TimberRecommendationImageText0', '265px');
});
$("#TimberRecommendationUploadImage1").change(function () {

    readOneImageURL(this, 'TimberRecommendationImage1', 'AddTimberRecommendationImageButton1', 'TimberRecommendationRemoveButton1', 'TimberRecommendationImageText1', '265px');
});
$("#TimberRecommendationUploadImage2").change(function () {

    readOneImageURL(this, 'TimberRecommendationImage2', 'AddTimberRecommendationImageButton2', 'TimberRecommendationRemoveButton2', 'TimberRecommendationImageText2', '265px');
});

//Timber - Site upload one image per time
$("#TimberSiteUploadImage0").change(function () {
    readOneImageURL(this, 'TimberSiteImage0', 'AddTimberSiteImageButton0', 'TimberSiteRemoveButton0', 'TimberSiteImageText0', '265px');
});
$("#TimberSiteUploadImage1").change(function () {
    readOneImageURL(this, 'TimberSiteImage1', 'AddTimberSiteImageButton1', 'TimberSiteRemoveButton1', 'TimberSiteImageText1', '265px');
});
$("#TimberSiteUploadImage2").change(function () {
    readOneImageURL(this, 'TimberSiteImage2', 'AddTimberSiteImageButton2', 'TimberSiteRemoveButton2', 'TimberSiteImageText2', '265px');
});

//Timber - Exterior upload one image per time
$("#TimberExteriorUploadImage0").change(function () {
    readOneImageURL(this, 'TimberExteriorImage0', 'AddTimberExteriorImageButton0', 'TimberExteriorRemoveButton0', 'TimberExteriorImageText0', '265px');
});
$("#TimberExteriorUploadImage1").change(function () {
    readOneImageURL(this, 'TimberExteriorImage1', 'AddTimberExteriorImageButton1', 'TimberExteriorRemoveButton1', 'TimberExteriorImageText1', '265px');
});
$("#TimberExteriorUploadImage2").change(function () {
    readOneImageURL(this, 'TimberExteriorImage2', 'AddTimberExteriorImageButton2', 'TimberExteriorRemoveButton2', 'TimberExteriorImageText2', '265px');
});

//Timber - Interior upload one image per time
$("#TimberInteriorUploadImage0").change(function () {
    readOneImageURL(this, 'TimberInteriorImage0', 'AddTimberInteriorImageButton0', 'TimberInteriorRemoveButton0', 'TimberInteriorImageText0', '265px');
});
$("#TimberInteriorUploadImage1").change(function () {
    readOneImageURL(this, 'TimberInteriorImage1', 'AddTimberInteriorImageButton1', 'TimberInteriorRemoveButton1', 'TimberInteriorImageText1', '265px');
});
$("#TimberInteriorUploadImage2").change(function () {
    readOneImageURL(this, 'TimberInteriorImage2', 'AddTimberInteriorImageButton2', 'TimberInteriorRemoveButton2', 'TimberInteriorImageText2', '265px');
});

//Timber - Roof space upload one image per time
$("#TimberRoofUploadImage0").change(function () {
    readOneImageURL(this, 'TimberRoofImage0', 'AddTimberRoofImageButton0', 'TimberRoofRemoveButton0', 'TimberRoofImageText0', '265px');
});
$("#TimberRoofUploadImage1").change(function () {
    readOneImageURL(this, 'TimberRoofImage1', 'AddTimberRoofImageButton1', 'TimberRoofRemoveButton1', 'TimberRoofImageText1', '265px');
});
$("#TimberRoofUploadImage2").change(function () {
    readOneImageURL(this, 'TimberRoofImage2', 'AddTimberRoofImageButton2', 'TimberRoofRemoveButton2', 'TimberRoofImageText2', '265px');
});

//Timber - Sub Floor upload one image per time
$("#TimberSubfloorUploadImage0").change(function () {
    readOneImageURL(this, 'TimberSubfloorImage0', 'AddTimberSubfloorImageButton0', 'TimberSubfloorRemoveButton0', 'TimberSubfloorImageText0', '265px');
});
$("#TimberSubfloorUploadImage1").change(function () {
    readOneImageURL(this, 'TimberSubfloorImage1', 'AddTimberSubfloorImageButton1', 'TimberSubfloorRemoveButton1', 'TimberSubfloorImageText1', '265px');
});
$("#TimberSubfloorUploadImage2").change(function () {
    readOneImageURL(this, 'TimberSubfloorImage2', 'AddTimberSubfloorImageButton2', 'TimberSubfloorRemoveButton2', 'TimberSubfloorImageText2', '265px');
});

//Assessment - Site and Garden, upload one image per time
$("#AssessmentSiteUploadImage0").change(function () {
    readOneImageURL(this, 'AssessmentSiteImage0', 'AddAssessmentSiteImageButton0', 'AssessmentSiteRemoveButton0', 'AssessmentSiteImageText0', '265px');
});

$("#AssessmentSiteUploadImage1").change(function () {
    readOneImageURL(this, 'AssessmentSiteImage1', 'AddAssessmentSiteImageButton1', 'AssessmentSiteRemoveButton1', 'AssessmentSiteImageText1', '265px');
});

$("#AssessmentSiteUploadImage2").change(function () {
    readOneImageURL(this, 'AssessmentSiteImage2', 'AddAssessmentSiteImageButton2', 'AssessmentSiteRemoveButton2', 'AssessmentSiteImageText2', '265px');
});

$("#AssessmentSiteUploadImage3").change(function () {
    readOneImageURL(this, 'AssessmentSiteImage3', 'AddAssessmentSiteImageButton3', 'AssessmentSiteRemoveButton3', 'AssessmentSiteImageText3', '265px');
});

$("#AssessmentSiteUploadImage4").change(function () {
    readOneImageURL(this, 'AssessmentSiteImage4', 'AddAssessmentSiteImageButton4', 'AssessmentSiteRemoveButton4', 'AssessmentSiteImageText4', '265px');
});

$("#AssessmentSiteUploadImage5").change(function () {
    readOneImageURL(this, 'AssessmentSiteImage5', 'AddAssessmentSiteImageButton5', 'AssessmentSiteRemoveButton5', 'AssessmentSiteImageText5', '265px');
});

//Assessment - Exterior, upload one image per time
$("#AssessmentExteriorUploadImage0").change(function () {
    readOneImageURL(this, 'AssessmentExteriorImage0', 'AddAssessmentExteriorImageButton0', 'AssessmentExteriorRemoveButton0', 'AssessmentExteriorImageText0', '265px');
});
$("#AssessmentExteriorUploadImage1").change(function () {
    readOneImageURL(this, 'AssessmentExteriorImage1', 'AddAssessmentExteriorImageButton1', 'AssessmentExteriorRemoveButton1', 'AssessmentExteriorImageText1', '265px');
});
$("#AssessmentExteriorUploadImage2").change(function () {
    readOneImageURL(this, 'AssessmentExteriorImage2', 'AddAssessmentExteriorImageButton2', 'AssessmentExteriorRemoveButton2', 'AssessmentExteriorImageText2', '265px');
});
$("#AssessmentExteriorUploadImage3").change(function () {
    readOneImageURL(this, 'AssessmentExteriorImage3', 'AddAssessmentExteriorImageButton3', 'AssessmentExteriorRemoveButton3', 'AssessmentExteriorImageText3', '265px');
});
$("#AssessmentExteriorUploadImage4").change(function () {
    readOneImageURL(this, 'AssessmentExteriorImage4', 'AddAssessmentExteriorImageButton4', 'AssessmentExteriorRemoveButton4', 'AssessmentExteriorImageText4', '265px');
});
$("#AssessmentExteriorUploadImage5").change(function () {
    readOneImageURL(this, 'AssessmentExteriorImage5', 'AddAssessmentExteriorImageButton5', 'AssessmentExteriorRemoveButton5', 'AssessmentExteriorImageText5', '265px');
});

//Assessment - Interior Living Room, upload one image per time

$("#AssessmentInteriorLivingUploadImage0").change(function () {
    readOneImageURL(this, 'AssessmentInteriorLivingImage0', 'AddAssessmentInteriorLivingImageButton0', 'AssessmentInteriorLivingRemoveButton0', 'AssessmentInteriorLivingImageText0', '265px');
});
$("#AssessmentInteriorLivingUploadImage1").change(function () {
    readOneImageURL(this, 'AssessmentInteriorLivingImage1', 'AddAssessmentInteriorLivingImageButton1', 'AssessmentInteriorLivingRemoveButton1', 'AssessmentInteriorLivingImageText1', '265px');
});
$("#AssessmentInteriorLivingUploadImage2").change(function () {
    readOneImageURL(this, 'AssessmentInteriorLivingImage2', 'AddAssessmentInteriorLivingImageButton2', 'AssessmentInteriorLivingRemoveButton2', 'AssessmentInteriorLivingImageText2', '265px');
});
$("#AssessmentInteriorLivingUploadImage3").change(function () {
    readOneImageURL(this, 'AssessmentInteriorLivingImage3', 'AddAssessmentInteriorLivingImageButton3', 'AssessmentInteriorLivingRemoveButton3', 'AssessmentInteriorLivingImageText3', '265px');
});
$("#AssessmentInteriorLivingUploadImage4").change(function () {
    readOneImageURL(this, 'AssessmentInteriorLivingImage4', 'AddAssessmentInteriorLivingImageButton4', 'AssessmentInteriorLivingRemoveButton4', 'AssessmentInteriorLivingImageText4', '265px');
});
$("#AssessmentInteriorLivingUploadImage5").change(function () {
    readOneImageURL(this, 'AssessmentInteriorLivingImage5', 'AddAssessmentInteriorLivingImageButton5', 'AssessmentInteriorLivingRemoveButton5', 'AssessmentInteriorLivingImageText5', '265px');
});

//Assessment - Interior Bedroom, upload one image per time
$("#AssessmentInteriorBedroomUploadImage0").change(function () {
    readOneImageURL(this, 'AssessmentInteriorBedroomImage0', 'AddAssessmentInteriorBedroomImageButton0', 'AssessmentInteriorBedroomRemoveButton0', 'AssessmentInteriorBedroomImageText0', '265px');
});
$("#AssessmentInteriorBedroomUploadImage1").change(function () {
    readOneImageURL(this, 'AssessmentInteriorBedroomImage1', 'AddAssessmentInteriorBedroomImageButton1', 'AssessmentInteriorBedroomRemoveButton1', 'AssessmentInteriorBedroomImageText1', '265px');
});
$("#AssessmentInteriorBedroomUploadImage2").change(function () {
    readOneImageURL(this, 'AssessmentInteriorBedroomImage2', 'AddAssessmentInteriorBedroomImageButton2', 'AssessmentInteriorBedroomRemoveButton2', 'AssessmentInteriorBedroomImageText2', '265px');
});
$("#AssessmentInteriorBedroomUploadImage3").change(function () {
    readOneImageURL(this, 'AssessmentInteriorBedroomImage3', 'AddAssessmentInteriorBedroomImageButton3', 'AssessmentInteriorBedroomRemoveButton3', 'AssessmentInteriorBedroomImageText3', '265px');
});
$("#AssessmentInteriorBedroomUploadImage4").change(function () {
    readOneImageURL(this, 'AssessmentInteriorBedroomImage4', 'AddAssessmentInteriorBedroomImageButton4', 'AssessmentInteriorBedroomRemoveButton4', 'AssessmentInteriorBedroomImageText4', '265px');
});
$("#AssessmentInteriorBedroomUploadImage5").change(function () {
    readOneImageURL(this, 'AssessmentInteriorBedroomImage5', 'AddAssessmentInteriorBedroomImageButton5', 'AssessmentInteriorBedroomRemoveButton5', 'AssessmentInteriorBedroomImageText5', '265px');
});

//Assessment - Interior Service, upload one image per time
$("#AssessmentInteriorServiceUploadImage0").change(function () {
    readOneImageURL(this, 'AssessmentInteriorServiceImage0', 'AddAssessmentInteriorServiceImageButton0', 'AssessmentInteriorServiceRemoveButton0', 'AssessmentInteriorServiceImageText0', '265px');
});
$("#AssessmentInteriorServiceUploadImage1").change(function () {
    readOneImageURL(this, 'AssessmentInteriorServiceImage1', 'AddAssessmentInteriorServiceImageButton1', 'AssessmentInteriorServiceRemoveButton1', 'AssessmentInteriorServiceImageText1', '265px');
});
$("#AssessmentInteriorServiceUploadImage2").change(function () {
    readOneImageURL(this, 'AssessmentInteriorServiceImage2', 'AddAssessmentInteriorServiceImageButton2', 'AssessmentInteriorServiceRemoveButton2', 'AssessmentInteriorServiceImageText2', '265px');
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

function AddAssessmentSiteImage0() {
    document.getElementById('AssessmentSiteUploadImage0').click();
}

function AddAssessmentSiteImage1() {
    document.getElementById('AssessmentSiteUploadImage1').click();
}

function AddAssessmentSiteImage2() {
    document.getElementById('AssessmentSiteUploadImage2').click();
}

//noinspection JSUnusedGlobalSymbols
function AddAssessmentSiteImage3() {
    document.getElementById('AssessmentSiteUploadImage3').click();
}

//noinspection JSUnusedGlobalSymbols
function AddAssessmentSiteImage4() {
    document.getElementById('AssessmentSiteUploadImage4').click();
}

//noinspection JSUnusedGlobalSymbols
function AddAssessmentSiteImage5() {
    document.getElementById('AssessmentSiteUploadImage5').click();
}

function AddAssessmentExteriorImage0() {
    document.getElementById('AssessmentExteriorUploadImage0').click();
}

function AddAssessmentExteriorImage1() {
    document.getElementById('AssessmentExteriorUploadImage1').click();
}

function AddAssessmentExteriorImage2() {
    document.getElementById('AssessmentExteriorUploadImage2').click();
}

function AddAssessmentExteriorImage3() {
    document.getElementById('AssessmentExteriorUploadImage3').click();
}

function AddAssessmentExteriorImage4() {
    document.getElementById('AssessmentExteriorUploadImage4').click();
}

function AddAssessmentExteriorImage5() {
    document.getElementById('AssessmentExteriorUploadImage5').click();
}

function AddAssessmentInteriorLivingImage0() {
    document.getElementById('AssessmentInteriorLivingUploadImage0').click();
}

function AddAssessmentInteriorLivingImage1() {
    document.getElementById('AssessmentInteriorLivingUploadImage1').click();
}

function AddAssessmentInteriorLivingImage2() {
    document.getElementById('AssessmentInteriorLivingUploadImage2').click();
}

function AddAssessmentInteriorLivingImage3() {
    document.getElementById('AssessmentInteriorLivingUploadImage3').click();
}

function AddAssessmentInteriorLivingImage4() {
    document.getElementById('AssessmentInteriorLivingUploadImage4').click();
}

function AddAssessmentInteriorLivingImage5() {
    document.getElementById('AssessmentInteriorLivingUploadImage5').click();
}

function AddAssessmentInteriorBedroomImage0() {
    document.getElementById('AssessmentInteriorBedroomUploadImage0').click();
}

function AddAssessmentInteriorBedroomImage1() {
    document.getElementById('AssessmentInteriorBedroomUploadImage1').click();
}

function AddAssessmentInteriorBedroomImage2() {
    document.getElementById('AssessmentInteriorBedroomUploadImage2').click();
}

function AddAssessmentInteriorBedroomImage3() {
    document.getElementById('AssessmentInteriorBedroomUploadImage3').click();
}

function AddAssessmentInteriorBedroomImage4() {
    document.getElementById('AssessmentInteriorBedroomUploadImage4').click();
}

function AddAssessmentInteriorBedroomImage5() {
    document.getElementById('AssessmentInteriorBedroomUploadImage5').click();
}

function AddAssessmentInteriorServiceImage0() {
    document.getElementById('AssessmentInteriorServiceUploadImage0').click();
}

function AddAssessmentInteriorServiceImage1() {
    document.getElementById('AssessmentInteriorServiceUploadImage1').click();
}

function AddAssessmentInteriorServiceImage2() {
    document.getElementById('AssessmentInteriorServiceUploadImage2').click();
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage0() {
    var x = document.getElementById('MaintenanceUploadImage0');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage0', 'AddMaintenanceImageButton0', 'MaintenanceRemoveButton0', 'MaintenanceImageText0', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage1() {
    var x = document.getElementById('MaintenanceUploadImage1');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage1', 'AddMaintenanceImageButton1', 'MaintenanceRemoveButton1', 'MaintenanceImageText1', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage2() {
    var x = document.getElementById('MaintenanceUploadImage2');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage2', 'AddMaintenanceImageButton2', 'MaintenanceRemoveButton2', 'MaintenanceImageText2', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage3() {
    var x = document.getElementById('MaintenanceUploadImage3');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage3', 'AddMaintenanceImageButton3', 'MaintenanceRemoveButton3', 'MaintenanceImageText3', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage4() {
    var x = document.getElementById('MaintenanceUploadImage4');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage4', 'AddMaintenanceImageButton4', 'MaintenanceRemoveButton4', 'MaintenanceImageText4', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage5() {
    var x = document.getElementById('MaintenanceUploadImage5');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage5', 'AddMaintenanceImageButton5', 'MaintenanceRemoveButton5', 'MaintenanceImageText5', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage6() {
    var x = document.getElementById('MaintenanceUploadImage6');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage6', 'AddMaintenanceImageButton6', 'MaintenanceRemoveButton6', 'MaintenanceImageText6', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage7() {
    var x = document.getElementById('MaintenanceUploadImage7');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage7', 'AddMaintenanceImageButton7', 'MaintenanceRemoveButton7', 'MaintenanceImageText7', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage8() {
    var x = document.getElementById('MaintenanceUploadImage8');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage8', 'AddMaintenanceImageButton8', 'MaintenanceRemoveButton8', 'MaintenanceImageText8', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage9() {
    var x = document.getElementById('MaintenanceUploadImage9');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage9', 'AddMaintenanceImageButton9', 'MaintenanceRemoveButton9', 'MaintenanceImageText9', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage10() {
    var x = document.getElementById('MaintenanceUploadImage10');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage10', 'AddMaintenanceImageButton10', 'MaintenanceRemoveButton10', 'MaintenanceImageText10', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage11() {
    var x = document.getElementById('MaintenanceUploadImage11');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage11', 'AddMaintenanceImageButton11', 'MaintenanceRemoveButton11', 'MaintenanceImageText11', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage12() {
    var x = document.getElementById('MaintenanceUploadImage12');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage12', 'AddMaintenanceImageButton12', 'MaintenanceRemoveButton12', 'MaintenanceImageText12', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage13() {
    var x = document.getElementById('MaintenanceUploadImage13');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage13', 'AddMaintenanceImageButton13', 'MaintenanceRemoveButton13', 'MaintenanceImageText13', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage14() {
    var x = document.getElementById('MaintenanceUploadImage14');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage14', 'AddMaintenanceImageButton14', 'MaintenanceRemoveButton14', 'MaintenanceImageText14', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage15() {
    var x = document.getElementById('MaintenanceUploadImage15');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage15', 'AddMaintenanceImageButton15', 'MaintenanceRemoveButton15', 'MaintenanceImageText15', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage16() {
    var x = document.getElementById('MaintenanceUploadImage16');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage16', 'AddMaintenanceImageButton16', 'MaintenanceRemoveButton16', 'MaintenanceImageText16', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage17() {
    var x = document.getElementById('MaintenanceUploadImage17');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage17', 'AddMaintenanceImageButton17', 'MaintenanceRemoveButton17', 'MaintenanceImageText17', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage18() {
    var x = document.getElementById('MaintenanceUploadImage18');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage18', 'AddMaintenanceImageButton18', 'MaintenanceRemoveButton18', 'MaintenanceImageText18', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage19() {
    var x = document.getElementById('MaintenanceUploadImage19');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage19', 'AddMaintenanceImageButton19', 'MaintenanceRemoveButton19', 'MaintenanceImageText19', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage20() {
    var x = document.getElementById('MaintenanceUploadImage20');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage20', 'AddMaintenanceImageButton20', 'MaintenanceRemoveButton20', 'MaintenanceImageText20', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage21() {
    var x = document.getElementById('MaintenanceUploadImage21');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage21', 'AddMaintenanceImageButton21', 'MaintenanceRemoveButton21', 'MaintenanceImageText21', '530px');
    })
}


//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage22() {
    var x = document.getElementById('MaintenanceUploadImage22');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage22', 'AddMaintenanceImageButton22', 'MaintenanceRemoveButton22', 'MaintenanceImageText22', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage23() {
    var x = document.getElementById('MaintenanceUploadImage23');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage23', 'AddMaintenanceImageButton23', 'MaintenanceRemoveButton23', 'MaintenanceImageText23', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage24() {
    var x = document.getElementById('MaintenanceUploadImage24');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage24', 'AddMaintenanceImageButton24', 'MaintenanceRemoveButton24', 'MaintenanceImageText24', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage25() {
    var x = document.getElementById('MaintenanceUploadImage25');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage25', 'AddMaintenanceImageButton25', 'MaintenanceRemoveButton25', 'MaintenanceImageText25', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage26() {
    var x = document.getElementById('MaintenanceUploadImage26');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage26', 'AddMaintenanceImageButton26', 'MaintenanceRemoveButton26', 'MaintenanceImageText26', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage27() {
    var x = document.getElementById('MaintenanceUploadImage27');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage27', 'AddMaintenanceImageButton27', 'MaintenanceRemoveButton27', 'MaintenanceImageText27', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage28() {
    var x = document.getElementById('MaintenanceUploadImage28');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage28', 'AddMaintenanceImageButton28', 'MaintenanceRemoveButton28', 'MaintenanceImageText28', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage29() {
    var x = document.getElementById('MaintenanceUploadImage29');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage29', 'AddMaintenanceImageButton29', 'MaintenanceRemoveButton29', 'MaintenanceImageText29', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage30() {
    var x = document.getElementById('MaintenanceUploadImage30');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage30', 'AddMaintenanceImageButton30', 'MaintenanceRemoveButton30', 'MaintenanceImageText30', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage31() {
    var x = document.getElementById('MaintenanceUploadImage31');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage31', 'AddMaintenanceImageButton31', 'MaintenanceRemoveButton31', 'MaintenanceImageText31', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage32() {
    var x = document.getElementById('MaintenanceUploadImage32');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage32', 'AddMaintenanceImageButton32', 'MaintenanceRemoveButton32', 'MaintenanceImageText32', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage33() {
    var x = document.getElementById('MaintenanceUploadImage33');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage33', 'AddMaintenanceImageButton33', 'MaintenanceRemoveButton33', 'MaintenanceImageText33', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage34() {
    var x = document.getElementById('MaintenanceUploadImage34');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage34', 'AddMaintenanceImageButton34', 'MaintenanceRemoveButton34', 'MaintenanceImageText34', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage35() {
    var x = document.getElementById('MaintenanceUploadImage35');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage35', 'AddMaintenanceImageButton35', 'MaintenanceRemoveButton35', 'MaintenanceImageText35', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage36() {
    var x = document.getElementById('MaintenanceUploadImage36');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage36', 'AddMaintenanceImageButton36', 'MaintenanceRemoveButton36', 'MaintenanceImageText36', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage37() {
    var x = document.getElementById('MaintenanceUploadImage37');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage37', 'AddMaintenanceImageButton37', 'MaintenanceRemoveButton37', 'MaintenanceImageText37', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage38() {
    var x = document.getElementById('MaintenanceUploadImage38');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage38', 'AddMaintenanceImageButton38', 'MaintenanceRemoveButton38', 'MaintenanceImageText38', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceImage39() {
    var x = document.getElementById('MaintenanceUploadImage39');
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceImage39', 'AddMaintenanceImageButton39', 'MaintenanceRemoveButton39', 'MaintenanceImageText39', '530px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceDrawing0() {
    var x = document.getElementById("MaintenanceUploadDrawing0");
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceDrawing0', 'AddMaintenanceDrawingButton0', 'MaintenanceDrawingRemoveButton0', 'MaintenanceDrawingText0', '100%');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceDrawing1() {
    var x = document.getElementById("MaintenanceUploadDrawing1");
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceDrawing1', 'AddMaintenanceDrawingButton1', 'MaintenanceDrawingRemoveButton1', 'MaintenanceDrawingText1', '100%');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceDrawing2() {
    var x = document.getElementById("MaintenanceUploadDrawing2");
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceDrawing2', 'AddMaintenanceDrawingButton2', 'MaintenanceDrawingRemoveButton2', 'MaintenanceDrawingText2', '100%');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceDrawing3() {
    var x = document.getElementById("MaintenanceUploadDrawing3");
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceDrawing3', 'AddMaintenanceDrawingButton3', 'MaintenanceDrawingRemoveButton3', 'MaintenanceDrawingText3', '100%');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceDrawing4() {
    var x = document.getElementById("MaintenanceUploadDrawing4");
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceDrawing4', 'AddMaintenanceDrawingButton4', 'MaintenanceDrawingRemoveButton4', 'MaintenanceDrawingText4', '100%');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddMaintenanceDrawing5() {
    var x = document.getElementById("MaintenanceUploadDrawing5");
    x.click();
    x.addEventListener('change', function () {
        readOneImageURL(x, 'MaintenanceDrawing5', 'AddMaintenanceDrawingButton5', 'MaintenanceDrawingRemoveButton5', 'MaintenanceDrawingText5', '100%');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage0(){
    var x = document.getElementById("ConstructionUploadImage0");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage0','AddConstructionImageButton0','ConstructionImageRemoveButton0','ConstructionImageText0','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage1(){
    var x = document.getElementById("ConstructionUploadImage1");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage1','AddConstructionImageButton1','ConstructionImageRemoveButton1','ConstructionImageText1','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage2(){
    var x = document.getElementById("ConstructionUploadImage2");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage2','AddConstructionImageButton2','ConstructionImageRemoveButton2','ConstructionImageText2','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage3(){
    var x = document.getElementById("ConstructionUploadImage3");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage3','AddConstructionImageButton3','ConstructionImageRemoveButton3','ConstructionImageText3','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage4(){
    var x = document.getElementById("ConstructionUploadImage4");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage4','AddConstructionImageButton4','ConstructionImageRemoveButton4','ConstructionImageText4','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage5(){
    var x = document.getElementById("ConstructionUploadImage5");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage5','AddConstructionImageButton5','ConstructionImageRemoveButton5','ConstructionImageText5','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage6(){
    var x = document.getElementById("ConstructionUploadImage6");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage6','AddConstructionImageButton6','ConstructionImageRemoveButton6','ConstructionImageText6','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage7(){
    var x = document.getElementById("ConstructionUploadImage7");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage7','AddConstructionImageButton7','ConstructionImageRemoveButton7','ConstructionImageText7','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage8(){
    var x = document.getElementById("ConstructionUploadImage8");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage8','AddConstructionImageButton8','ConstructionImageRemoveButton8','ConstructionImageText8','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage9(){
    var x = document.getElementById("ConstructionUploadImage9");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage9','AddConstructionImageButton9','ConstructionImageRemoveButton9','ConstructionImageText9','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage10(){
    var x = document.getElementById("ConstructionUploadImage10");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage10','AddConstructionImageButton10','ConstructionImageRemoveButton10','ConstructionImageText10','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage11(){
    var x = document.getElementById("ConstructionUploadImage11");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage11','AddConstructionImageButton11','ConstructionImageRemoveButton11','ConstructionImageText11','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage12(){
    var x = document.getElementById("ConstructionUploadImage12");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage12','AddConstructionImageButton12','ConstructionImageRemoveButton12','ConstructionImageText12','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage13(){
    var x = document.getElementById("ConstructionUploadImage13");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage13','AddConstructionImageButton13','ConstructionImageRemoveButton13','ConstructionImageText13','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage14(){
    var x = document.getElementById("ConstructionUploadImage14");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage14','AddConstructionImageButton14','ConstructionImageRemoveButton14','ConstructionImageText14','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage15(){
    var x = document.getElementById("ConstructionUploadImage15");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage15','AddConstructionImageButton15','ConstructionImageRemoveButton15','ConstructionImageText15','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage16(){
    var x = document.getElementById("ConstructionUploadImage16");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage16','AddConstructionImageButton16','ConstructionImageRemoveButton16','ConstructionImageText16','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage17(){
    var x = document.getElementById("ConstructionUploadImage17");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage17','AddConstructionImageButton17','ConstructionImageRemoveButton17','ConstructionImageText17','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage18(){
    var x = document.getElementById("ConstructionUploadImage18");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage18','AddConstructionImageButton18','ConstructionImageRemoveButton18','ConstructionImageText18','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage19(){
    var x = document.getElementById("ConstructionUploadImage19");
    x.click();
    console.log(x);
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage19','AddConstructionImageButton19','ConstructionImageRemoveButton19','ConstructionImageText19','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage20(){
    var x = document.getElementById("ConstructionUploadImage20");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage20','AddConstructionImageButton20','ConstructionImageRemoveButton20','ConstructionImageText20','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage21(){
    var x = document.getElementById("ConstructionUploadImage21");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage21','AddConstructionImageButton21','ConstructionImageRemoveButton21','ConstructionImageText21','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage22(){
    var x = document.getElementById("ConstructionUploadImage22");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage22','AddConstructionImageButton22','ConstructionImageRemoveButton22','ConstructionImageText22','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage23(){
    var x = document.getElementById("ConstructionUploadImage23");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage23','AddConstructionImageButton23','ConstructionImageRemoveButton23','ConstructionImageText23','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage24(){
    var x = document.getElementById("ConstructionUploadImage24");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage24','AddConstructionImageButton24','ConstructionImageRemoveButton24','ConstructionImageText24','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage25(){
    var x = document.getElementById("ConstructionUploadImage25");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage25','AddConstructionImageButton25','ConstructionImageRemoveButton25','ConstructionImageText25','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage26(){
    var x = document.getElementById("ConstructionUploadImage26");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage26','AddConstructionImageButton26','ConstructionImageRemoveButton26','ConstructionImageText26','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage27(){
    var x = document.getElementById("ConstructionUploadImage27");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage27','AddConstructionImageButton27','ConstructionImageRemoveButton27','ConstructionImageText27','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage28(){
    var x = document.getElementById("ConstructionUploadImage28");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage28','AddConstructionImageButton28','ConstructionImageRemoveButton28','ConstructionImageText28','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddConstructionImage29(){
    var x = document.getElementById("ConstructionUploadImage29");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'ConstructionImage29','AddConstructionImageButton29','ConstructionImageRemoveButton29','ConstructionImageText29','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage0(){
    var x = document.getElementById("AdviceUploadImage0");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage0','AddAdviceImageButton0','AdviceImageRemoveButton0','AdviceImageText0','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage1(){
    var x = document.getElementById("AdviceUploadImage1");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage1','AddAdviceImageButton1','AdviceImageRemoveButton1','AdviceImageText1','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage2(){
    var x = document.getElementById("AdviceUploadImage2");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage2','AddAdviceImageButton2','AdviceImageRemoveButton2','AdviceImageText2','510px');
    })
}


//noinspection JSUnusedGlobalSymbols
function AddAdviceImage3(){
    var x = document.getElementById("AdviceUploadImage3");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage3','AddAdviceImageButton3','AdviceImageRemoveButton3','AdviceImageText3','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage4(){
    var x = document.getElementById("AdviceUploadImage4");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage4','AddAdviceImageButton4','AdviceImageRemoveButton4','AdviceImageText4','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage5(){
    var x = document.getElementById("AdviceUploadImage5");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage5','AddAdviceImageButton5','AdviceImageRemoveButton5','AdviceImageText5','510px');
    })
}


//noinspection JSUnusedGlobalSymbols
function AddAdviceImage6(){
    var x = document.getElementById("AdviceUploadImage6");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage6','AddAdviceImageButton6','AdviceImageRemoveButton6','AdviceImageText6','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage7(){
    var x = document.getElementById("AdviceUploadImage7");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage7','AddAdviceImageButton7','AdviceImageRemoveButton7','AdviceImageText7','510px');
    })
}


//noinspection JSUnusedGlobalSymbols
function AddAdviceImage8(){
    var x = document.getElementById("AdviceUploadImage8");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage8','AddAdviceImageButton8','AdviceImageRemoveButton8','AdviceImageText8','510px');
    })
}


//noinspection JSUnusedGlobalSymbols
function AddAdviceImage9(){
    var x = document.getElementById("AdviceUploadImage9");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage9','AddAdviceImageButton9','AdviceImageRemoveButton9','AdviceImageText9','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage10(){
    var x = document.getElementById("AdviceUploadImage10");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage10','AddAdviceImageButton10','AdviceImageRemoveButton10','AdviceImageText10','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage11(){
    var x = document.getElementById("AdviceUploadImage11");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage11','AddAdviceImageButton11','AdviceImageRemoveButton11','AdviceImageText11','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage12(){
    var x = document.getElementById("AdviceUploadImage12");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage12','AddAdviceImageButton12','AdviceImageRemoveButton12','AdviceImageText12','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage13(){
    var x = document.getElementById("AdviceUploadImage13");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage13','AddAdviceImageButton13','AdviceImageRemoveButton13','AdviceImageText13','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage14(){
    var x = document.getElementById("AdviceUploadImage14");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage14','AddAdviceImageButton14','AdviceImageRemoveButton14','AdviceImageText14','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage15(){
    var x = document.getElementById("AdviceUploadImage15");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage15','AddAdviceImageButton15','AdviceImageRemoveButton15','AdviceImageText15','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage16(){
    var x = document.getElementById("AdviceUploadImage16");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage16','AddAdviceImageButton16','AdviceImageRemoveButton16','AdviceImageText16','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage17(){
    var x = document.getElementById("AdviceUploadImage17");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage17','AddAdviceImageButton17','AdviceImageRemoveButton17','AdviceImageText17','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage18(){
    var x = document.getElementById("AdviceUploadImage18");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage18','AddAdviceImageButton18','AdviceImageRemoveButton18','AdviceImageText18','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage19(){
    var x = document.getElementById("AdviceUploadImage19");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage19','AddAdviceImageButton19','AdviceImageRemoveButton19','AdviceImageText19','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage20(){
    var x = document.getElementById("AdviceUploadImage20");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage20','AddAdviceImageButton20','AdviceImageRemoveButton20','AdviceImageText20','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage21(){
    var x = document.getElementById("AdviceUploadImage21");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage21','AddAdviceImageButton21','AdviceImageRemoveButton21','AdviceImageText21','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage22(){
    var x = document.getElementById("AdviceUploadImage22");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage22','AddAdviceImageButton22','AdviceImageRemoveButton22','AdviceImageText22','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage23(){
    var x = document.getElementById("AdviceUploadImage23");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage23','AddAdviceImageButton23','AdviceImageRemoveButton23','AdviceImageText23','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage24(){
    var x = document.getElementById("AdviceUploadImage24");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage24','AddAdviceImageButton24','AdviceImageRemoveButton24','AdviceImageText24','510px');
    })
}
//noinspection JSUnusedGlobalSymbols
function AddAdviceImage25(){
    var x = document.getElementById("AdviceUploadImage25");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage25','AddAdviceImageButton25','AdviceImageRemoveButton25','AdviceImageText25','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage26(){
    var x = document.getElementById("AdviceUploadImage26");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage26','AddAdviceImageButton26','AdviceImageRemoveButton26','AdviceImageText26','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage27(){
    var x = document.getElementById("AdviceUploadImage27");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage27','AddAdviceImageButton27','AdviceImageRemoveButton27','AdviceImageText27','510px');
    })
}


//noinspection JSUnusedGlobalSymbols
function AddAdviceImage28(){
    var x = document.getElementById("AdviceUploadImage28");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage28','AddAdviceImageButton28','AdviceImageRemoveButton28','AdviceImageText28','510px');
    })
}

//noinspection JSUnusedGlobalSymbols
function AddAdviceImage29(){
    var x = document.getElementById("AdviceUploadImage29");
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x,'AdviceImage29','AddAdviceImageButton29','AdviceImageRemoveButton29','AdviceImageText29','510px');
    })
}
//MARK: UPLOAD FUNCTIONS
//upload max 6 images
function read6ImagesURL(input, addButtonID0, addButtonID1, addButtonID2, addButtonID3, addButtonID4, addButtonID5, imageID0, imageID1, imageID2, imageID3, imageID4, imageID5, text0, text1, text2, text3, text4, text5, removeButton0, removeButton1, removeButton2, removeButton3, removeButton4, removeButton5) {
    var count = input.files.length;
    console.log(count);
    //check if the number of images are more than six
    if (count > 6) {
        alert("You can only selected six images maximum");
    }
    var addButton0 = document.getElementById(addButtonID0);
    var addButton1 = document.getElementById(addButtonID1);
    var addButton2 = document.getElementById(addButtonID2);
    var addButton3 = document.getElementById(addButtonID3);
    var addButton4 = document.getElementById(addButtonID4);
    var addButton5 = document.getElementById(addButtonID5);

    addButton0.style.display = 'block';
    addButton1.style.display = 'block';
    addButton2.style.display = 'block';
    addButton3.style.display = 'block';
    addButton4.style.display = 'block';
    addButton5.style.display = 'block';
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image = '#' + imageID0;
            $(image).attr('src', e.target.result);
            var image = document.getElementById(imageID0);
            var text = document.getElementById(text0);
            var button = document.getElementById(removeButton0);
            image.style.display = 'block';
            image.style.width = '265px';
            image.style.height = '265px';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton0.style.display = 'none';
        };

        reader.readAsDataURL(input.files[0]);
        doUploadFile(input.files[0],imageID0, text0, removeButton0, addButtonID0,'','','','','','','265px','265px');
    }
    if (input.files && input.files[1]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image = '#' + imageID1;
            $(image).attr('src', e.target.result);
            //$('#RecommendationImage1').attr('src', e.target.result);
            var image = document.getElementById(imageID1);
            var text = document.getElementById(text1);
            var button = document.getElementById(removeButton1);
            image.style.display = 'block';
            image.style.width = '265px';
            image.style.height = '265px';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton1.style.display = 'none';
        };

        reader.readAsDataURL(input.files[1]);
        doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
    }
    if (input.files && input.files[2]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image = '#' + imageID2;
            $(image).attr('src', e.target.result);
            //$('#RecommendationImage2').attr('src', e.target.result);
            var image = document.getElementById(imageID2);
            var text = document.getElementById(text2);
            var button = document.getElementById(removeButton2);
            image.style.display = 'block';
            image.style.width = '265px';
            image.style.height = '265px';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton2.style.display = 'none';
        };

        reader.readAsDataURL(input.files[2]);
        doUploadFile( input.files[2],imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
    }
    if (input.files && input.files[3]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image = '#' + imageID3;
            $(image).attr('src', e.target.result);
            //$('#RecommendationImage2').attr('src', e.target.result);
            var image = document.getElementById(imageID3);
            var text = document.getElementById(text3);
            var button = document.getElementById(removeButton3);
            image.style.display = 'block';
            image.style.width = '265px';
            image.style.height = '265px';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton3.style.display = 'none';
        };

        reader.readAsDataURL(input.files[3]);
        doUploadFile(input.files[3],imageID3, text3, removeButton3, addButtonID3,'','','','','','','265px','265px');
    }

    if (input.files && input.files[4]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var image = '#' + imageID4;
            $(image).attr('src', e.target.result);
            //$('#RecommendationImage2').attr('src', e.target.result);
            var image = document.getElementById(imageID4);
            var text = document.getElementById(text4);
            var button = document.getElementById(removeButton4);
            image.style.display = 'block';
            image.style.width = '265px';
            image.style.height = '265px';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton4.style.display = 'none';
        };

        reader.readAsDataURL(input.files[4]);
        doUploadFile(input.files[4],imageID4, text4, removeButton4, addButtonID4,'','','','','','','265px','265px');
    }

    if (input.files && input.files[5]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var image = '#' + imageID5;
            $(image).attr('src', e.target.result);
            //$('#RecommendationImage2').attr('src', e.target.result);
            var image = document.getElementById(imageID5);
            var text = document.getElementById(text5);
            var button = document.getElementById(removeButton5);
            image.style.display = 'block';
            image.style.width = '265px';
            image.style.height = '265px';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton5.style.display = 'none';
        };

        reader.readAsDataURL(input.files[5]);
        doUploadFile( input.files[5],imageID5, text5, removeButton5, addButtonID5,'','','','','','','265px','265px');
    }
}
//upload max 3 images
function read3ImagesURL(input, addButtonID0, addButtonID1, addButtonID2, imageID0, imageID1, imageID2, text0, text1, text2, removeButton0, removeButton1, removeButton2) {
    var count = input.files.length;
    //check if the selected images are more than 3
    if (count > 3) {
        alert("You can only selected three images maximum");
    }

    var addButton0 = document.getElementById(addButtonID0);
    var addButton1 = document.getElementById(addButtonID1);
    var addButton2 = document.getElementById(addButtonID2);
    //    var addButton3 = document.getElementById('addImageButton3');
    addButton0.style.display = 'block';
    addButton1.style.display = 'block';
    addButton2.style.display = 'block';
    //addButton3.style.display = 'block';
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image = '#' + imageID0;
            $(image).attr('src', e.target.result);
            var image = document.getElementById(imageID0);
            var text = document.getElementById(text0);
            var button = document.getElementById(removeButton0);
            image.style.width = '265px';
            image.style.height = '265px';
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton0.style.display = 'none';
        };

        reader.readAsDataURL(input.files[0]);
        doUploadFile(input.files[0],imageID0, text0, removeButton0, addButtonID0,'','','','','','','265px','265px');
    }
    if (input.files && input.files[1]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image = '#' + imageID1;
            $(image).attr('src', e.target.result);
            //$('#RecommendationImage1').attr('src', e.target.result);
            var image = document.getElementById(imageID1);
            var text = document.getElementById(text1);
            var button = document.getElementById(removeButton1);
            image.style.width = '265px';
            image.style.height = '265px';
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton1.style.display = 'none';
        };

        reader.readAsDataURL(input.files[1]);
        doUploadFile(input.files[1],imageID1, text1, removeButton1, addButtonID1,'','','','','','','265px','265px');
    }
    if (input.files && input.files[2]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var image = '#' + imageID2;
            $(image).attr('src', e.target.result);
            //$('#RecommendationImage2').attr('src', e.target.result);
            var image = document.getElementById(imageID2);
            var text = document.getElementById(text2);
            var button = document.getElementById(removeButton2);
            image.style.width = '265px';
            image.style.height = '265px';
            image.style.display = 'block';
            text.style.display = 'block';
            button.style.display = 'block';
            addButton2.style.display = 'none';
        };

        reader.readAsDataURL(input.files[2]);
        doUploadFile(input.files[2],imageID2, text2, removeButton2, addButtonID2,'','','','','','','265px','265px');
    }

}

//Only upload one image per time
function readOneImageURL(input, imageID0, addButtonID, removeButtonID, textID, imageSize) {
    if (input.files && input.files[0]) {
        var image = '#' + imageID0;
        var reader = new FileReader();
        var button = document.getElementById(addButtonID);
        var removeButton = document.getElementById(removeButtonID);
        var imageID = document.getElementById(imageID0);
        var text = document.getElementById(textID);
        reader.onload = function (e) {

            $(image).attr('src', e.target.result);
            button.style.display = 'none';
            removeButton.style.display = 'block';
            imageID.style.display = 'block';
            imageID.style.width = imageSize;
            imageID.style.height = imageSize;
            text.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
        doUploadFile(input.files[0],imageID0, textID, removeButtonID, addButtonID,'','','','','','',imageSize,imageSize);
    }
}

//Upload Cover Image
function uploadCoverImage(input,imageID0,removeButtonID,imageSize)
{
    if (input.files && input.files[0]){
        var image = '#' + imageID0;
        var reader = new FileReader();
        var removeButton = document.getElementById(removeButtonID);
        var imageID = document.getElementById(imageID0);
        imageID.alt = '';
        reader.onload = function (e) {

            $(image).attr('src', e.target.result);
            removeButton.style.display = 'block';
            imageID.style.display = 'block';
            imageID.style.width = imageSize;
            imageID.style.height = imageSize/2;
            removeButton.style.width = imageSize;
        };
        reader.readAsDataURL(input.files[0]);
        doUploadFile(input.files[0],imageID0, '', removeButtonID, '','','cover image','','','','',imageSize/2,imageSize);
    }
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




/*
    General Function for adding one image when the user click the "add" button
    by getting the id of the clicked button
    get the number of the id to generate other ids
    then use readOneImageURL function to add image on specific field.
 */

//noinspection JSUnusedGlobalSymbols
function addOneDilapidationImage(click_id)
{
    var id;
    var selectedID = String(click_id);
    id = selectedID.replace ( /[^\d.]/g, '' );

    var imageID = 'DilapidationImage' + id;
    var textID = 'DilapidationImageText' + id;
    var removeButtonID = 'DilapidationImageRemoveButton' + id;
    var addButtonID = 'AddDilapidationImageButton' + id;
    var uploadID = 'DilapidationUploadImage' + id;
    // console.log(uploadID);
    var x = document.getElementById(uploadID);
    x.click();
    x.addEventListener('change',function(){
        readOneImageURL(x, imageID, addButtonID, removeButtonID, textID, '510px');
    });


}
