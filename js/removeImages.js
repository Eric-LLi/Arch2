//Function 
function RemoveImage(imageID0, removeButtonID, addButtonID) {
    var imageSelect = '#' + imageID0;
    $(imageSelect).attr('src', '#');
    var image = document.getElementById(imageID0);
    var button = document.getElementById(removeButtonID);
    var addButton = document.getElementById(addButtonID);
    button.style.display = 'none';
    addButton.style.display = 'block';
    image.style.width = '0px';
    doRemovePhoto(imageID0);
}
function RemoveCoverImage(imageID0,removeButtonID)
{
    var imageSelect = '#' + imageID0;
    $(imageSelect).attr('src', '#');
    var image = document.getElementById(imageID0);
    var button = document.getElementById(removeButtonID);

    button.style.display = 'none';
    image.style.width = '0px';
    doRemovePhoto(imageID0);
    //image.style.height = '0px';
}

function RemoveOneDilapidationImage(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'DilapidationImage' + id;
    var removeButtonID = 'DilapidationImageRemoveButton' + id;
    var addButtonID = 'AddDilapidationImageButton' + id;

    RemoveImage(imageID,removeButtonID,addButtonID);
}

function RemoveOneMaintenanceImage(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'MaintenanceImage' + id;
    var removeButtonID = 'MaintenanceRemoveButton' + id;
    var addButtonID = 'AddMaintenanceImageButton' + id;
    RemoveImage(imageID,removeButtonID,addButtonID);
}

function RemoveOneMaintenaceDrawing(click_id)
{
    console.log('click');
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'MaintenanceDrawing' + id;
    var removeButtonID = 'MaintenanceDrawingRemoveButton' + id;
    var addButtonID = 'AddMaintenanceDrawingButton' + id;

    RemoveImage(imageID,removeButtonID,addButtonID);
}

function RemoveOneConstructionImage(click_id)
{
    console.log(click_id);
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'ConstructionImage' + id;
    var removeButtonID = 'ConstructionImageRemoveButton' + id;
    var addButtonID = 'AddConstructionImageButton' + id;
    RemoveImage(imageID,removeButtonID,addButtonID);
}

function RemoveOneAdviceImage(click_id)
{
    var selectedID = String(click_id);
    var id = selectedID.replace ( /[^\d.]/g, '' );
    var imageID = 'AdviceImage' + id;
    var removeButtonID = 'AdviceImageRemoveButton' + id;
    var addButtonID = 'AddAdviceImageButton' + id;
    RemoveImage(imageID,removeButtonID,addButtonID);
}

//Action

function RemoveRenovationFeasibilityCover(){
    RemoveCoverImage('RenovationFeasibilityCoverImage','RenovationFeasibilityCoverImageRemoveButton');
}
function RemoveTimberCoverImage(){
    RemoveCoverImage('TimberCoverImage','TimberCoverImageRemoveButton');
}
function RemoveTimberSummaryImage0() {
    RemoveImage('TimberSummaryImage0', 'TimberSummaryRemoveButton0', 'AddTimberSummaryImageButton0');

}


function RemoveTimberSummaryImage1() {
    RemoveImage('TimberSummaryImage1', 'TimberSummaryRemoveButton1', 'AddTimberSummaryImageButton1');

}

function RemoveTimberSummaryImage2() {
    RemoveImage('TimberSummaryImage2', 'TimberSummaryRemoveButton2', 'AddTimberSummaryImageButton2');
}

function RemoveTimberRecommendationImage0() {
    RemoveImage('TimberRecommendationImage0', 'TimberRecommendationRemoveButton0', 'AddTimberRecommendationImageButton0');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberRecommendationImage1() {
    RemoveImage('TimberRecommendationImage1', 'TimberRecommendationRemoveButton1', 'AddTimberRecommendationImageButton1');
}

function RemoveTimberRecommendationImage2() {
    RemoveImage('TimberRecommendationImage2', 'TimberRecommendationRemoveButton2', 'AddTimberRecommendationImageButton2');
}

function RemoveTimberSiteImage0() {
    RemoveImage('TimberSiteImage0', 'TimberSiteRemoveButton0', 'AddTimberSiteImageButton0');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberSiteImage1() {
    RemoveImage('TimberSiteImage1', 'TimberSiteRemoveButton1', 'AddTimberSiteImageButton1');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberSiteImage2() {
    RemoveImage('TimberSiteImage2', 'TimberSiteRemoveButton2', 'AddTimberSiteImageButton2');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberExteriorImage0() {
    RemoveImage('TimberExteriorImage0', 'TimberExteriorRemoveButton0', 'AddTimberExteriorImageButton0');
    //    var button = document.getElementById('addImageButton0');
    //    button.style.display = 'block';
}

function RemoveTimberExteriorImage1() {
    RemoveImage('TimberExteriorImage1', 'TimberExteriorRemoveButton1', 'AddTimberExteriorImageButton1');
}

function RemoveTimberExteriorImage2() {
    RemoveImage('TimberExteriorImage2', 'TimberExteriorRemoveButton2', 'AddTimberExteriorImageButton2');
}

function RemoveTimberInteriorImage0() {

    RemoveImage('TimberInteriorImage0', 'TimberInteriorRemoveButton0', 'AddTimberInteriorImageButton0');
}

function RemoveTimberInteriorImage1() {
    RemoveImage('TimberInteriorImage1', 'TimberInteriorRemoveButton1', 'AddTimberInteriorImageButton1');
}

function RemoveTimberInteriorImage2() {
    RemoveImage('TimberInteriorImage2', 'TimberInteriorRemoveButton2', 'AddTimberInteriorImageButton2');
}

function RemoveTimberRoofImage0() {
    RemoveImage('TimberRoofImage0', 'TimberRoofRemoveButton0', 'AddTimberRoofImageButton0');
}

function RemoveTimberRoofImage1() {
    RemoveImage('TimberRoofImage1', 'TimberRoofRemoveButton1', 'AddTimberRoofImageButton1');
}

function RemoveTimberRoofImage2() {
    RemoveImage('TimberRoofImage2', 'TimberRoofRemoveButton2', 'AddTimberRoofImageButton2');
}

function RemoveTimberSubfloorImage0() {
    RemoveImage('TimberSubfloorImage0', 'TimberSubfloorRemoveButton0', 'AddTimberSubfloorImageButton0');
}

function RemoveTimberSubfloorImage1() {
    RemoveImage('TimberSubfloorImage1', 'TimberSubfloorRemoveButton1', 'AddTimberSubfloorImageButton1');
}

function RemoveTimberSubfloorImage2() {
    RemoveImage('TimberSubfloorImage2', 'TimberSubfloorRemoveButton2', 'AddTimberSubfloorImageButton2');
}

function RemoveAssessmentCoverImage(){
    RemoveCoverImage('AssessmentCoverImage','AssessmentCoverImageRemoveButton');
}

function RemoveAssessmentSiteImage0() {
    RemoveImage('AssessmentSiteImage0', 'AssessmentSiteRemoveButton0', 'AddAssessmentSiteImageButton0');
}

function RemoveAssessmentSiteImage1() {
    RemoveImage('AssessmentSiteImage1', 'AssessmentSiteRemoveButton1', 'AddAssessmentSiteImageButton1');
}

function RemoveAssessmentSiteImage2() {
    RemoveImage('AssessmentSiteImage2', 'AssessmentSiteRemoveButton2', 'AddAssessmentSiteImageButton2');
}

function RemoveAssessmentSiteImage3() {
    RemoveImage('AssessmentSiteImage3', 'AssessmentSiteRemoveButton3', 'AddAssessmentSiteImageButton3');
}

function RemoveAssessmentSiteImage4() {
    RemoveImage('AssessmentSiteImage4', 'AssessmentSiteRemoveButton4', 'AddAssessmentSiteImageButton4');
}

function RemoveAssessmentSiteImage5() {
    RemoveImage('AssessmentSiteImage5', 'AssessmentSiteRemoveButton5', 'AddAssessmentSiteImageButton5');
}

function RemoveAssessmentExteriorImage0() {
    RemoveImage('AssessmentExteriorImage0', 'AssessmentExteriorRemoveButton0', 'AddAssessmentExteriorImageButton0');
}

function RemoveAssessmentExteriorImage1() {
    RemoveImage('AssessmentExteriorImage1', 'AssessmentExteriorRemoveButton1', 'AddAssessmentExteriorImageButton1');
}

function RemoveAssessmentExteriorImage2() {
    RemoveImage('AssessmentExteriorImage2', 'AssessmentExteriorRemoveButton2', 'AddAssessmentExteriorImageButton2');
}

function RemoveAssessmentExteriorImage3() {
    RemoveImage('AssessmentExteriorImage3', 'AssessmentExteriorRemoveButton3', 'AddAssessmentExteriorImageButton3');
}

function RemoveAssessmentExteriorImage4() {
    RemoveImage('AssessmentExteriorImage4', 'AssessmentExteriorRemoveButton4', 'AddAssessmentExteriorImageButton4');
}

function RemoveAssessmentExteriorImage5() {
    RemoveImage('AssessmentExteriorImage5', 'AssessmentExteriorRemoveButton5', 'AddAssessmentExteriorImageButton5');
}


function RemoveAssessmentInteriorLivingImage0() {
    RemoveImage('AssessmentInteriorLivingImage0', 'AssessmentInteriorLivingRemoveButton0', 'AddAssessmentInteriorLivingImageButton0');
}

function RemoveAssessmentInteriorLivingImage1() {
    RemoveImage('AssessmentInteriorLivingImage1', 'AssessmentInteriorLivingRemoveButton1', 'AddAssessmentInteriorLivingImageButton1');
}

function RemoveAssessmentInteriorLivingImage2() {
    RemoveImage('AssessmentInteriorLivingImage2', 'AssessmentInteriorLivingRemoveButton2', 'AddAssessmentInteriorLivingImageButton2');
}

function RemoveAssessmentInteriorLivingImage3() {
    RemoveImage('AssessmentInteriorLivingImage3', 'AssessmentInteriorLivingRemoveButton3', 'AddAssessmentInteriorLivingImageButton3');
}

function RemoveAssessmentInteriorLivingImage4() {
    RemoveImage('AssessmentInteriorLivingImage4', 'AssessmentInteriorLivingRemoveButton4', 'AddAssessmentInteriorLivingImageButton4');
}

function RemoveAssessmentInteriorLivingImage5() {
    RemoveImage('AssessmentInteriorLivingImage5', 'AssessmentInteriorLivingRemoveButton5', 'AddAssessmentInteriorLivingImageButton5');
}

function RemoveAssessmentInteriorBedroomImage0() {
    RemoveImage('AssessmentInteriorBedroomImage0', 'AssessmentInteriorBedroomRemoveButton0', 'AddAssessmentInteriorBedroomImageButton0');
}

function RemoveAssessmentInteriorBedroomImage1() {
    RemoveImage('AssessmentInteriorBedroomImage1', 'AssessmentInteriorBedroomRemoveButton1', 'AddAssessmentInteriorBedroomImageButton1');
}

function RemoveAssessmentInteriorBedroomImage2() {
    RemoveImage('AssessmentInteriorBedroomImage2', 'AssessmentInteriorBedroomRemoveButton2', 'AddAssessmentInteriorBedroomImageButton2');
}

function RemoveAssessmentInteriorBedroomImage3() {
    RemoveImage('AssessmentInteriorBedroomImage3', 'AssessmentInteriorBedroomRemoveButton3', 'AddAssessmentInteriorBedroomImageButton3');
}

function RemoveAssessmentInteriorBedroomImage4() {
    RemoveImage('AssessmentInteriorBedroomImage4', 'AssessmentInteriorBedroomRemoveButton4', 'AddAssessmentInteriorBedroomImageButton4');
}

function RemoveAssessmentInteriorBedroomImage5() {
    RemoveImage('AssessmentInteriorBedroomImage5', 'AssessmentInteriorBedroomRemoveButton5', 'AddAssessmentInteriorBedroomImageButton5');
}

function RemoveAssessmentInteriorServiceImage0() {
    RemoveImage('AssessmentInteriorServiceImage0', 'AssessmentInteriorServiceRemoveButton0', 'AddAssessmentInteriorServiceImageButton0');
}

function RemoveAssessmentInteriorServiceImage1() {
    RemoveImage('AssessmentInteriorServiceImage1', 'AssessmentInteriorServiceRemoveButton1', 'AddAssessmentInteriorServiceImageButton1');
}

function RemoveAssessmentInteriorServiceImage2() {
    RemoveImage('AssessmentInteriorServiceImage2', 'AssessmentInteriorServiceRemoveButton2', 'AddAssessmentInteriorServiceImageButton2');
}

function RemoveConstructionCoverImage(){
    RemoveCoverImage('ConstructionCoverImage','ConstructionCoverImageRemoveButton');
}

function RemoveMaintenanceCoverImage(){
    RemoveCoverImage('MaintenanceCoverImage','MaintenanceCoverImageRemoveButton')
}


function RemoveMaintenanceImage0() {
    RemoveImage('MaintenanceImage0', 'MaintenanceRemoveButton0', 'AddMaintenanceImageButton0');
}

function RemoveMaintenanceImage1() {
    RemoveImage('MaintenanceImage1', 'MaintenanceRemoveButton1', 'AddMaintenanceImageButton1');
}

function RemoveMaintenanceImage2() {
    RemoveImage('MaintenanceImage2', 'MaintenanceRemoveButton2', 'AddMaintenanceImageButton2');
}

function RemoveMaintenanceImage3() {
    RemoveImage('MaintenanceImage3', 'MaintenanceRemoveButton3', 'AddMaintenanceImageButton3');
}

function RemoveMaintenanceImage4() {
    RemoveImage('MaintenanceImage4', 'MaintenanceRemoveButton4', 'AddMaintenanceImageButton4');
}

function RemoveMaintenanceImage5() {
    RemoveImage('MaintenanceImage5', 'MaintenanceRemoveButton5', 'AddMaintenanceImageButton5');
}

function RemoveMaintenanceImage6() {
    RemoveImage('MaintenanceImage6', 'MaintenanceRemoveButton6', 'AddMaintenanceImageButton6');
}

function RemoveMaintenanceImage7() {
    RemoveImage('MaintenanceImage7', 'MaintenanceRemoveButton7', 'AddMaintenanceImageButton7');
}

function RemoveMaintenanceImage8() {
    RemoveImage('MaintenanceImage8', 'MaintenanceRemoveButton8', 'AddMaintenanceImageButton8');
}

function RemoveMaintenanceImage9() {
    RemoveImage('MaintenanceImage9', 'MaintenanceRemoveButton9', 'AddMaintenanceImageButton9');
}

function RemoveMaintenanceImage10() {
    RemoveImage('MaintenanceImage10', 'MaintenanceRemoveButton10', 'AddMaintenanceImageButton10');
}

function RemoveMaintenanceImage11() {
    RemoveImage('MaintenanceImage11', 'MaintenanceRemoveButton11', 'AddMaintenanceImageButton11');
}

function RemoveMaintenanceImage12() {
    RemoveImage('MaintenanceImage12', 'MaintenanceRemoveButton12', 'AddMaintenanceImageButton12');
}

function RemoveMaintenanceImage13() {
    RemoveImage('MaintenanceImage13', 'MaintenanceRemoveButton13', 'AddMaintenanceImageButton13');
}

function RemoveMaintenanceImage14() {
    RemoveImage('MaintenanceImage14', 'MaintenanceRemoveButton14', 'AddMaintenanceImageButton14');
}

function RemoveMaintenanceImage15() {
    RemoveImage('MaintenanceImage15', 'MaintenanceRemoveButton15', 'AddMaintenanceImageButton15');
}

function RemoveMaintenanceImage16() {
    RemoveImage('MaintenanceImage16', 'MaintenanceRemoveButton16', 'AddMaintenanceImageButton16');
}

function RemoveMaintenanceImage17() {
    RemoveImage('MaintenanceImage17', 'MaintenanceRemoveButton17', 'AddMaintenanceImageButton17');
}

function RemoveMaintenanceImage18() {
    RemoveImage('MaintenanceImage18', 'MaintenanceRemoveButton18', 'AddMaintenanceImageButton18');
}

function RemoveMaintenanceImage19() {
    RemoveImage('MaintenanceImage19', 'MaintenanceRemoveButton19', 'AddMaintenanceImageButton19');
}

function RemoveMaintenanceImage20() {
    RemoveImage('MaintenanceImage20', 'MaintenanceRemoveButton20', 'AddMaintenanceImageButton20');
}


function RemoveMaintenanceImage21() {
    RemoveImage('MaintenanceImage21', 'MaintenanceRemoveButton21', 'AddMaintenanceImageButton21');
}

function RemoveMaintenanceImage22() {
    RemoveImage('MaintenanceImage22', 'MaintenanceRemoveButton22', 'AddMaintenanceImageButton22');
}

function RemoveMaintenanceImage23() {
    RemoveImage('MaintenanceImage23', 'MaintenanceRemoveButton23', 'AddMaintenanceImageButton23');
}

function RemoveMaintenanceImage24() {
    RemoveImage('MaintenanceImage24', 'MaintenanceRemoveButton24', 'AddMaintenanceImageButton24');
}

function RemoveMaintenanceImage25() {
    RemoveImage('MaintenanceImage25', 'MaintenanceRemoveButton25', 'AddMaintenanceImageButton25');
}

function RemoveMaintenanceImage26() {
    RemoveImage('MaintenanceImage26', 'MaintenanceRemoveButton26', 'AddMaintenanceImageButton26');
}

function RemoveMaintenanceImage27() {
    RemoveImage('MaintenanceImage27', 'MaintenanceRemoveButton27', 'AddMaintenanceImageButton27');
}

function RemoveMaintenanceImage28() {
    RemoveImage('MaintenanceImage28', 'MaintenanceRemoveButton28', 'AddMaintenanceImageButton28');
}

function RemoveMaintenanceImage29() {
    RemoveImage('MaintenanceImage29', 'MaintenanceRemoveButton29', 'AddMaintenanceImageButton29');
}

function RemoveMaintenanceImage30() {
    RemoveImage('MaintenanceImage30', 'MaintenanceRemoveButton30', 'AddMaintenanceImageButton30');
}

function RemoveMaintenanceImage31() {
    RemoveImage('MaintenanceImage31', 'MaintenanceRemoveButton31', 'AddMaintenanceImageButton31');
}

function RemoveMaintenanceImage32() {
    RemoveImage('MaintenanceImage32', 'MaintenanceRemoveButton32', 'AddMaintenanceImageButton32');
}

function RemoveMaintenanceImage33() {
    RemoveImage('MaintenanceImage33', 'MaintenanceRemoveButton33', 'AddMaintenanceImageButton33');
}

function RemoveMaintenanceImage34() {
    RemoveImage('MaintenanceImage34', 'MaintenanceRemoveButton34', 'AddMaintenanceImageButton34');
}

function RemoveMaintenanceImage35() {
    RemoveImage('MaintenanceImage35', 'MaintenanceRemoveButton35', 'AddMaintenanceImageButton35');
}

function RemoveMaintenanceImage36() {
    RemoveImage('MaintenanceImage36', 'MaintenanceRemoveButton36', 'AddMaintenanceImageButton36');
}

function RemoveMaintenanceImage37() {
    RemoveImage('MaintenanceImage37', 'MaintenanceRemoveButton37', 'AddMaintenanceImageButton37');
}

function RemoveMaintenanceImage38() {
    RemoveImage('MaintenanceImage38', 'MaintenanceRemoveButton38', 'AddMaintenanceImageButton38');
}

function RemoveMaintenanceImage39() {
    RemoveImage('MaintenanceImage39', 'MaintenanceRemoveButton39', 'AddMaintenanceImageButton39');
}


// function RemoveMaintenanceDrawing0()
// {
//     RemoveImage('MaintenanceDrawing0', 'MaintenanceDrawingRemoveButton0', 'AddMaintenanceDrawingButton0');
// }

// function RemoveMaintenanceDrawing1()
// {
//     RemoveImage('MaintenanceDrawing1', 'MaintenanceDrawingRemoveButton1', 'AddMaintenanceDrawingButton1');
// }

// function RemoveMaintenanceDrawing2()
// {
//     RemoveImage('MaintenanceDrawing2', 'MaintenanceDrawingRemoveButton2', 'AddMaintenanceDrawingButton2');
// }

// function RemoveMaintenanceDrawing3()
// {
//     RemoveImage('MaintenanceDrawing3', 'MaintenanceDrawingRemoveButton3', 'AddMaintenanceDrawingButton3');
// }

// function RemoveMaintenanceDrawing4()
// {
//     RemoveImage('MaintenanceDrawing4', 'MaintenanceDrawingRemoveButton4', 'AddMaintenanceDrawingButton4');
// }

// function RemoveMaintenanceDrawing5()
// {
//     RemoveImage('MaintenanceDrawing5', 'MaintenanceDrawingRemoveButton5', 'AddMaintenanceDrawingButton5');
// }


function RemoveConstructionImage0()
{
    RemoveImage('ConstructionImage0', 'ConstructionImageRemoveButton0', 'AddConstructionImageButton0');
}

function RemoveConstructionImage1()
{
    RemoveImage('ConstructionImage1', 'ConstructionImageRemoveButton1', 'AddConstructionImageButton1');
}
function RemoveConstructionImage2()
{
    RemoveImage('ConstructionImage2', 'ConstructionImageRemoveButton2', 'AddConstructionImageButton2');
}
function RemoveConstructionImage3()
{
    RemoveImage('ConstructionImage3', 'ConstructionImageRemoveButton3', 'AddConstructionImageButton3');
}
function RemoveConstructionImage4()
{
    RemoveImage('ConstructionImage4', 'ConstructionImageRemoveButton4', 'AddConstructionImageButton4');
}
function RemoveConstructionImage5()
{
    RemoveImage('ConstructionImage5', 'ConstructionImageRemoveButton5', 'AddConstructionImageButton5');
}
function RemoveConstructionImage6()
{
    RemoveImage('ConstructionImage6', 'ConstructionImageRemoveButton6', 'AddConstructionImageButton6');
}
function RemoveConstructionImage7()
{
    RemoveImage('ConstructionImage7', 'ConstructionImageRemoveButton7', 'AddConstructionImageButton7');
}
function RemoveConstructionImage8()
{
    RemoveImage('ConstructionImage8', 'ConstructionImageRemoveButton8', 'AddConstructionImageButton8');
}
function RemoveConstructionImage9()
{
    RemoveImage('ConstructionImage9', 'ConstructionImageRemoveButton9', 'AddConstructionImageButton9');
}
function RemoveConstructionImage10()
{
    RemoveImage('ConstructionImage10', 'ConstructionImageRemoveButton10', 'AddConstructionImageButton10');
}
function RemoveConstructionImage11()
{
    RemoveImage('ConstructionImage11', 'ConstructionImageRemoveButton11', 'AddConstructionImageButton11');
}
function RemoveConstructionImage12()
{
    RemoveImage('ConstructionImage12', 'ConstructionImageRemoveButton12', 'AddConstructionImageButton12');
}
function RemoveConstructionImage13()
{
    RemoveImage('ConstructionImage13', 'ConstructionImageRemoveButton13', 'AddConstructionImageButton13');
}
function RemoveConstructionImage14()
{
    RemoveImage('ConstructionImage14', 'ConstructionImageRemoveButton14', 'AddConstructionImageButton14');
}
function RemoveConstructionImage15()
{
    RemoveImage('ConstructionImage15', 'ConstructionImageRemoveButton15', 'AddConstructionImageButton15');
}
function RemoveConstructionImage16()
{
    RemoveImage('ConstructionImage16', 'ConstructionImageRemoveButton16', 'AddConstructionImageButton16');
}
function RemoveConstructionImage17()
{
    RemoveImage('ConstructionImage17', 'ConstructionImageRemoveButton17', 'AddConstructionImageButton17');
}
function RemoveConstructionImage18()
{
    RemoveImage('ConstructionImage18', 'ConstructionImageRemoveButton18', 'AddConstructionImageButton18');
}
function RemoveConstructionImage19()
{
    RemoveImage('ConstructionImage19', 'ConstructionImageRemoveButton19', 'AddConstructionImageButton19');
}
function RemoveConstructionImage20()
{
    RemoveImage('ConstructionImage20', 'ConstructionImageRemoveButton20', 'AddConstructionImageButton20');
}
function RemoveConstructionImage21()
{
    RemoveImage('ConstructionImage21', 'ConstructionImageRemoveButton21', 'AddConstructionImageButton21');
}
function RemoveConstructionImage22()
{
    RemoveImage('ConstructionImage22', 'ConstructionImageRemoveButton22', 'AddConstructionImageButton22');
}
function RemoveConstructionImage23()
{
    RemoveImage('ConstructionImage23', 'ConstructionImageRemoveButton23', 'AddConstructionImageButton23');
}
function RemoveConstructionImage24()
{
    RemoveImage('ConstructionImage24', 'ConstructionImageRemoveButton24', 'AddConstructionImageButton24');
}
function RemoveConstructionImage25()
{
    RemoveImage('ConstructionImage25', 'ConstructionImageRemoveButton25', 'AddConstructionImageButton25');
}
function RemoveConstructionImage26()
{
    RemoveImage('ConstructionImage26', 'ConstructionImageRemoveButton26', 'AddConstructionImageButton26');
}
function RemoveConstructionImage27()
{
    RemoveImage('ConstructionImage27', 'ConstructionImageRemoveButton27', 'AddConstructionImageButton27');
}
function RemoveConstructionImage28()
{
    RemoveImage('ConstructionImage28', 'ConstructionImageRemoveButton28', 'AddConstructionImageButton28');
}
function RemoveConstructionImage29()
{
    RemoveImage('ConstructionImage29', 'ConstructionImageRemoveButton29', 'AddConstructionImageButton29');
}

function RemoveAdviceCoverImage(){
    RemoveCoverImage('AdviceCoverImage','AdviceCoverImageRemoveButton');
}

function RemoveAdviceImage0(){
    RemoveImage('AdviceImage0', 'AdviceImageRemoveButton0', 'AddAdviceImageButton0');
}

function RemoveAdviceImage1(){
    RemoveImage('AdviceImage1', 'AdviceImageRemoveButton1', 'AddAdviceImageButton1');
}

function RemoveAdviceImage2(){
    RemoveImage('AdviceImage2', 'AdviceImageRemoveButton2', 'AddAdviceImageButton2');
}

function RemoveAdviceImage3(){
    RemoveImage('AdviceImage3', 'AdviceImageRemoveButton3', 'AddAdviceImageButton3');
}

function RemoveAdviceImage4(){
    RemoveImage('AdviceImage4', 'AdviceImageRemoveButton4', 'AddAdviceImageButton4');
}

function RemoveAdviceImage5(){
    RemoveImage('AdviceImage5', 'AdviceImageRemoveButton5', 'AddAdviceImageButton5');
}

function RemoveAdviceImage6(){
    RemoveImage('AdviceImage6', 'AdviceImageRemoveButton6', 'AddAdviceImageButton6');
}

function RemoveAdviceImage7(){
    RemoveImage('AdviceImage7', 'AdviceImageRemoveButton7', 'AddAdviceImageButton7');
}

function RemoveAdviceImage8(){
    RemoveImage('AdviceImage8', 'AdviceImageRemoveButton8', 'AddAdviceImageButton8');
}

function RemoveAdviceImage9(){
    RemoveImage('AdviceImage9', 'AdviceImageRemoveButton8', 'AddAdviceImageButton9');
}

function RemoveAdviceImage10(){
    RemoveImage('AdviceImage10', 'AdviceImageRemoveButton10', 'AddAdviceImageButton10');
}


function RemoveAdviceImage11(){
    RemoveImage('AdviceImage11', 'AdviceImageRemoveButton11', 'AddAdviceImageButton11');
}

function RemoveAdviceImage12(){
    RemoveImage('AdviceImage12', 'AdviceImageRemoveButton12', 'AddAdviceImageButton12');
}

function RemoveAdviceImage13(){
    RemoveImage('AdviceImage13', 'AdviceImageRemoveButton13', 'AddAdviceImageButton13');
}

function RemoveAdviceImage14(){
    RemoveImage('AdviceImage14', 'AdviceImageRemoveButton14', 'AddAdviceImageButton14');
}

function RemoveAdviceImage15(){
    RemoveImage('AdviceImage15', 'AdviceImageRemoveButton15', 'AddAdviceImageButton15');
}

function RemoveAdviceImage16(){
    RemoveImage('AdviceImage16', 'AdviceImageRemoveButton16', 'AddAdviceImageButton16');
}

function RemoveAdviceImage17(){
    RemoveImage('AdviceImage17', 'AdviceImageRemoveButton17', 'AddAdviceImageButton17');
}


function RemoveAdviceImage18(){
    RemoveImage('AdviceImage18', 'AdviceImageRemoveButton18', 'AddAdviceImageButton18');
}


function RemoveAdviceImage19(){
    RemoveImage('AdviceImage19', 'AdviceImageRemoveButton19', 'AddAdviceImageButton19');
}

function RemoveAdviceImage20(){
    RemoveImage('AdviceImage20', 'AdviceImageRemoveButton20', 'AddAdviceImageButton20');
}

function RemoveAdviceImage21(){
    RemoveImage('AdviceImage21', 'AdviceImageRemoveButton21', 'AddAdviceImageButton21');
}

function RemoveAdviceImage22(){
    RemoveImage('AdviceImage22', 'AdviceImageRemoveButton22', 'AddAdviceImageButton22');
}

function RemoveAdviceImage23(){
    RemoveImage('AdviceImage23', 'AdviceImageRemoveButton23', 'AddAdviceImageButton23');
}

function RemoveAdviceImage24(){
    RemoveImage('AdviceImage24', 'AdviceImageRemoveButton24', 'AddAdviceImageButton24');
}

function RemoveAdviceImage25(){
    RemoveImage('AdviceImage25', 'AdviceImageRemoveButton25', 'AddAdviceImageButton25');
}

function RemoveAdviceImage26(){
    RemoveImage('AdviceImage26', 'AdviceImageRemoveButton26', 'AddAdviceImageButton26');
}

function RemoveAdviceImage27(){
    RemoveImage('AdviceImage27', 'AdviceImageRemoveButton27', 'AddAdviceImageButton27');
}

function RemoveAdviceImage28(){
    RemoveImage('AdviceImage28', 'AdviceImageRemoveButton28', 'AddAdviceImageButton28');
}

function RemoveAdviceImage29(){
    RemoveImage('AdviceImage29', 'AdviceImageRemoveButton29', 'AddAdviceImageButton29');
}


function RemoveHomeFeasibilityCover() {
    RemoveCoverImage('HomeFeasibilityCoverImage','HomeFeasibilityCoverImageRemoveButton');
}

function RemoveDilapidationCover() {
    RemoveCoverImage('HomeDilapidationCoverImage','DilapidationCoverImageRemoveButton');

}




