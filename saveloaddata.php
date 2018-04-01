<script type="text/javascript" src="js/noty/packaged/jquery.noty.packaged.min.js"></script>
<script type="text/javascript">
  

// Increments the nuermic portion of the string...
// e.g XYZ123 becomes XYZ124
function incString(input)
{
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var length = alphabet.length;
    var result = input;
    var i = input.length;

    while (i >= 0)
    {
      var last = input.charAt(--i);
      var next = '';
      var carry = false;

      if (isNaN(last))
      {
        index = alphabet.indexOf(last.toLowerCase());

        if (index === -1)
        {
          next = last;
          carry = true;
        }
        else
        {
          var isUpperCase = last === last.toUpperCase();

          next = alphabet.charAt((index + 1) % length);
          if (isUpperCase)
            next = next.toUpperCase();

          carry = index + 1 >= length;

          if (carry && (i === 0))
          {
            var added = isUpperCase ? 'A' : 'a';

            result = added + next + result.slice(1);
            break;
          }
        }
      }
      else
      {
        next = +last + 1;
        if (next > 9)
        {
          next = 0;
          carry = true
        }

        if (carry && (i === 0))
        {
          result = '1' + next + result.slice(1);
          break;
        }
      }

      result = result.slice(0, i) + next + result.slice(i + 1);
      if (!carry)
        break;
    }
    return result;
}


function SaveReport()
{
    var data = [];
    var jsondata = '';

    //$('input[type=text]').each
    $('input').each
    (
      function()
      {
        //console.log(this.id);
        if ((this.id != "") && (this.id != undefined))
          data.push({id: this.id, value: this.value});
          //console.log(this.id);
          //console.log(this.value);
      }
    );

    $('textarea').each
    (
      function()
      {
        if ((this.id != "") && (this.id != undefined))
          data.push({id: this.id, value: this.value});
      }
    );

    $('select').each
    (
      function()
      {
        if (this.id.substr(0, 30) == 'AssessmentSiteLimitationSelect')
          //console.log(this.id);


        if ((this.id != "") && (this.id != undefined))
          data.push({id: this.id, value: this.value});
      }
    );

    jsondata = JSON.stringify(data);

    $.post
    (
      'ajax_savereportdata.php',
      {
        uuid: '<?php echo $_SESSION['uuid']; ?>',
        bookingcode: <?php echo $bookingcode; ?>,
        data: jsondata
      },
      function(result)
      {
        var response = JSON.parse(result);

        if (response.rc == 0)
          noty({text: response.msg, type: 'success', timeout: 10000});
        else
          noty({text: response.msg, type: 'error', timeout: 10000});
      }
    );
}

function doSavePDF(data)
{
  var formData = 
  {
    pdfBase64:data,
    bookingcode:<?php echo $bookingcode; ?>

  };
  $.post
  (
    'ajax_uploadPDF.php',
    formData,
    function(result)
    {
      var response = JSON.parse(result);
      //console.log(response.passingText);
      //console.log(response.rc)
       
      if(response.rc == 0)
      {
      	//$('savingPDFAlert').hide('fade');
        var alert = document.getElementById('savingPDFAlert');
        alert.style.display = 'none';
        noty({text: response.msg, type: 'success', timeout: 10000});
        // var bookingCode = response.passingText;
        // var baseURL = 'http://www.archicentreaustraliainspections.com/pdfreport/';
        // //var bookingCode = document.getElementById('customer_booking').value;
        // var url = baseURL + bookingCode + '.pdf';
        // window.open(url);
        
      }
      else
      {
        $('savingPDFAlert').hide('fade');
        noty({text: response.msg, type: 'error', timeout: 10000}); 
      }
      	
    } 
  );
  //console.log('saving pdf');
}

//imageSize == height
function doUploadFile(f, imageid, textid, removeid, addid, table = '',imageAltName = '', divID = '', uploadID = '',removeFunction = '',addFunction = '',imageSize = '',width = '')
{
    var formData = new FormData();
    // add assoc key values, this will be posts values
    formData.append('file', f, f.name);
    formData.append('bookingcode', <?php echo $bookingcode; ?>);
    formData.append('imageid', imageid);
    formData.append('textid', textid);
    formData.append('removeid', removeid);
    formData.append('addid', addid);
    formData.append('tableName',table);
    formData.append('imageAltName',imageAltName);
    formData.append('divID',divID);
    formData.append('uploadID',uploadID);
    formData.append('removeFunction',removeFunction);
    formData.append('addFunction',addFunction);
    formData.append('imageSize',imageSize);
    formData.append('width',width);
    formData.append('upload_file', true);
    //console.log(imageid);
    //console.log(imageAltName);
    //console.log('the width of the save image ' + width);
    console.log('saving');

    $.ajax
    (
      {
        type: 'POST',
        url: 'ajax_uploadimage.php',
        xhr: function()
        {
          var myXhr = $.ajaxSettings.xhr();
          if (myXhr.upload)
          {
            //myXhr.upload.addEventListener('progress', that.progressHandling, false);
          }
          return myXhr;
        },
        success: function(result)
        {
          var response = JSON.parse(result);
        },
        error: function(error)
        {
          //console.log('Error...');
          console.log(error);
        },
        async: true,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        timeout: 120000
      }
    );
}

function doRemovePhoto(imageid)
{
    $.post
    (
      'ajax_removeimage.php',
      {
        bookingcode: <?php echo $bookingcode; ?>,
        imageid: imageid
      },
      function(result)
      {
        var response = JSON.parse(result);

        if (response.rc != 0)
          noty({text: response.msg, type: 'error', timeout: 10000});
      }
    );
    console.log("removing");
}

  // ************************************************************************************************************
  // Document ready...
$(function()
{
    var data = <?php if (!isset($booking["reportdata"]) || $booking["reportdata"] == "") echo "[]"; else echo $booking["reportdata"]; ?>;
    var photos = <?php if (sizeof($photos) == 0) echo "[]"; else echo json_encode($photos); ?>;
    var maxIamge = 0;
    var countingImage = 0
    var countingDrawing = 0

    //console.log(photos);
    //calculate the image 
    for(var i = 0; i < photos.length; ++i)
    {
      if(photos[i].tableName === 'MaintenanceImagesTable' || photos[i].tableName === 'ConstructionImagesTable' || 
        photos[i].tableName === 'AdviceImagesTable' || photos[i].tableName === 'DilapidationImagesTable'|| photos[i].tableName == 'CPImagesTable')
        {
            countingImage++;
        }
    }
      console.log('the current number of images ' + countingImage);
    for(var i = 0; i < photos.length; ++i)
    {
      if(photos[i].tableName == 'MaintenanceDrawingsTable' || photos[i].tableName ==='homeFeasibilityDrawingsTable'||photos[i].tableName ==='RenovationFeasibilityDrawingsTable')
        {
            countingDrawing++;
        }
    } 
    //console.log('the current number of drawing ' + countingDrawing);
    // Any photos?
    //console.log(photos.length);
    photos.forEach
    (
      function(p)
      {
        //console.log(p.filename);
        var url = 'photos/' + p.filename;
        //console.log(url);
        var image = document.getElementById(p.imageid);
          console.log(p.imageid);
          //if the image is exited, then just need to populate the image with the src. 
        if (image)
        {
          //console.log('have imageID');
          //console.log(imageID);
          image.style.display = 'block';
          image.alt = p.imageAltName
          //imageID.style.width = '265px';
          console.log(p.imageid + " width is " + p.width);
          console.log(p.imageid + " alt name is " + p.imageAltName);
          image.style.width = p.width;
          //imageID.style.height = '265px';
          image.style.height = p.imageSize;
          $('#' + p.imageid).attr('src', url);

          if ((p.textid != '') && (p.textid != null))
          {
            var textID = document.getElementById(p.textid);
            textID.style.display = 'block';
            textID.style.width = p.width

          }

          if ((p.removeid != '') && (p.removeid != null))
          {
            var removeID = document.getElementById(p.removeid);
            if (removeID)
            {
              removeID.style.display = 'block';
              //console.log('the widht is ' + p.width);
              removeID.style.width = p.width;
            }
          }
          //console.log('the addID is ' + p.addid);
          if ((p.addid != '') && (p.addid != null))
          {
          	var addButton = document.getElementById(p.addid);
            //console.log('the current add button is ' + addButton);
            //console.log(p.imageid);
            //console.log(p.addid);
            //console.log(imageID.style.width);
          	//console.log(addButton);
            if(addButton)
            {
              addButton.style.display = 'none';
              addButton.style.width = p.width;
              var nextaddid = incString(p.addid);
              var currentID = p.imageid.replace ( /[^\d.]/g, '' );
              var nextID = Number(currentID) + 1 ;
              var nextImageID = p.imageid.replace(/[0-9]/g, '') + nextID;
              var nextImage = document.getElementById(nextImageID);
              var nextAddButton = document.getElementById(nextaddid); 
              if(nextImage)
              {
                  //console.log(nextImage.src)
                    if(nextImage.src.indexOf("photos") < 0)
                    {
                      //console.log('no photos');
                      nextAddButton.style.display = 'block';
                    } 
              }
            }            
            //console.log('the current add id is ' + p.addid);
            //console.log('the next add id is ' + nextaddid);            
           // console.log('the next imageID is ' + nextImageID);            
          }
        }
        else
        {
          console.log(p.imageid + " corresponding image field is not extied");
          //console.log(p.tableName);
          if (p.tableName)
          {
            console.log(p.tableName);
          	if(p.tableName === 'homeFeasibilityDrawingsTable')
          	{
              document.getElementById(p.tableName).style.display = 'block';

                var maxIamge = 4;
                console.log("I am in Home Feasibility Drawing Table");
                addImageElements(p.imageAltName,p.imageid, p.textid,p.removeid, p.addid, p.uploadID,
              p.removeFunction, p.addFunction, p.imageSize,p.width);
          	    
                $('#' + p.imageid).attr('src',url);
                 document.getElementById(p.imageid).style.display = 'block';
                document.getElementById(p.imageid).style.width = '100%';
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.addid).style.width = '100%';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.removeid).style.width = '100%';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.textid).style.width = '100%';
                //create the next image area base on the max image number, the current ID smaller than it, create.
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                console.log("the current total number of drawings " + countingDrawing);
                console.log("the currentID " + currentID);
                console.log("the nextID " + nextID);
                if(countingDrawing < maxIamge)
                  {
                     if (nextID === countingDrawing)
                    {
                        console.log("have loaded all the drawings from database, and the total number of drawings has not exceed the max number need to create a add button for user to upload the next image");
                        nextAltName = 'drawing ' + altID;
                        console.log("I am here!!! " + nextAltName);
                        var nextImageID = 'homeDrawing' + nextID;
                        var nextTextID = 'homeDrawingText' + nextID;
                        var nextRemoveButtonID = 'homeDrawingRemoveButton' + nextID;
                        var nextAddButtonID = 'homeDrawingAddButton' + nextID;
                        var nextUploadID = 'homeDrawingUpload' + nextID;
                        addImageElements(nextAltName,nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                            'removeOneHomeDrawing(this.id)', 'addOneHomeDrawing(this.id)', '100%', '0px');
                    }
                    else
                    {
                      console.log('still running, never mind');
                    }

                  }
                  else
                  {
                    console.log('have max drawings, no more creating');
                  }

            }
            else if(p.tableName === 'RenovationFeasibilityDrawingsTable')
            {
                var maxIamge = 4;
                console.log("I am in renovation Feasibility Drawing Table");
                //console.log(p.addid);
                //document.getElementById(p.tableName).style.display = 'block';
                addImageElements(p.imageAltName, p.imageid, p.textid,p.removeid, p.addid, p.uploadID,p.removeFunction, 
                	p.addFunction, p.imageSize,p.width);
                $('#' + p.imageid).attr('src',url);
                document.getElementById(p.imageid).style.display = 'block';
                document.getElementById(p.imageid).style.width = '100%';
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.addid).style.width = '100%';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.removeid).style.width = '100%';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.textid).style.width = '100%';
                //create the next image area base on the max image number, the current ID smaller than it, create.
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                console.log("the current total number of drawings " + countingDrawing);
                console.log("the currentID " + currentID);
                console.log("the nextID " + nextID);
                if(countingDrawing < maxIamge)
                  {
                     if (nextID === countingDrawing)
                    {
                         console.log("have loaded all the drawings from database, and the total number of drawings has not exceed the max number need to create a add button for user to upload the next image");
                        //addDrawing();
                        var altID = Number(nextID) + 1;
                        nextAltName = 'draing ' + altID;
                         console.log("I am here!!! " + nextAltName);
                      	var nextImageID = 'renovationDrawing' + nextID;
                      	var nextTextID = 'renovationDrawingText' + nextID;
                      	var nextRemoveButtonID = 'renovationDrawingRemoveButton' + nextID;
                      	var nextAddButtonID = 'renovationDrawingAddButton' + nextID;
                      	var nextUploadID = 'renovationDrawingUpload' + nextID;
                      	addImageElements(nextAltName, nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                          'removeOneRenovationDrawing(this.id)', 'addOneRenovationDrawing(this.id)', '100%', '0px');
                    }
                    else
                    {
                      console.log('still running, never mind');
                    }

                  }
                  else
                  {
                    console.log('have max images, no more creating');
                  }
            }
            else if(p.tableName === 'DilapidationImagesTable')
            {

              var maxIamge = 60;
              var table = document.getElementById(p.tableName);
              table.style.display = 'block';
              addImageElements(p.imageAltName, p.divID, p.imageid, p.textid,p.removeid, p.addid, p.uploadID,
              p.removeFunction, p.addFunction, p.imageSize,p.width);
              $('#' + p.imageid).attr('src', url);
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.imageid).style.display = 'block';
                //get the current id from the imageID. 
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                //based on the total image in the database, and compare with he maxImage in this report, to determine whether need to creae a "Add" buttton for user to upload a new image
                if (countingImage < maxIamge)
                {
                   if(nextID === countingImage)
                   {
                      console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
                      //var newID = Number(id) + 1;
                      var altID = Number(nextID) + 1;
                      nextAltName = 'image ' + altID;
                      console.log("I am here!!! " + nextAltName);
                      var nextImageID = 'DilapidationImage' + nextID;
                      var nextTextID = 'DilapidationImageText' + nextID;
                      var nextRemoveButtonID = 'DilapidationImageRemoveButton' + nextID;
                      var nextAddButtonID = 'AddDilapidationImageButton' + nextID;
                      var nextUploadID = 'DilapidationUploadImage' + nextID;
                      addImageElements(nextAltName, 'DilapidationPhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                          'RemoveOneDilapidationImage(this.id)', 'addOneDilapidationImage(this.id)', '510px', '0px');
                   }
                   else
                   {
                     console.log("still loading image, no worry");
                   }
                }
                else
                {
                  //counting image is equal maxImage, no need to do anything
                  console.log("counting image is equal maxImage, no need to do anything");
                }

            }
            else if(p.tableName === 'AdviceImagesTable')
            {
              maxIamge = 30;
              var table = document.getElementById(p.tableName);
              table.style.display = 'block';
              addImageElements(p.imageAltName, p.divID, p.imageid, p.textid,p.removeid, p.addid, p.uploadID,
              p.removeFunction, p.addFunction, p.imageSize,p.width);
              $('#' + p.imageid).attr('src', url);
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.imageid).style.display = 'block';
                //get the current id from the imageID. 
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                //based on the total image in the database, and compare with he maxImage in this report, to determine whether need to creae a "Add" buttton for user to upload a new image
                if (countingImage < maxIamge)
                {
                   if(nextID === countingImage)
                   {
                      console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
                      //var newID = Number(id) + 1;
                      var altID = Number(nextID) + 1;
                      nextAltName = 'image ' + altID;
                      console.log("I am here!!! " + nextAltName);
                      var nextImageID = 'AdviceImage' + nextID;
                      var nextTextID = 'AdviceImageText' + nextID;
                      var nextRemoveButtonID = 'AdviceImageRemoveButton' + nextID;
                      var nextAddButtonID = 'AddAdviceImageButton' + nextID;
                      var nextUploadID = 'AdviceUploadImage' + nextID;
                      addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                          p.removeFunction, p.addFunction,'500px', '0px');
                   }
                   else
                   {
                     console.log("still loading image, no worry");
                   }
                 }
            }
            else if(p.tableName === 'MaintenanceImagesTable')
            {
              
                var maxIamge = 40;
                var table = document.getElementById(p.tableName);
                table.style.display = 'block';
                addImageElements(p.imageAltName, p.divID, p.imageid, p.textid,p.removeid, p.addid, p.uploadID,
                p.removeFunction, p.addFunction, p.imageSize,p.width);
                $('#' + p.imageid).attr('src', url);
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.imageid).style.display = 'block';
                //get the current id from the imageID. 
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                console.log("the next ID is " + nextID);
                //based on the total image in the database, and compare with he maxImage in this report, to determine whether need to creae a "Add" buttton for user to upload a new image
                if (countingImage < maxIamge)
                {
                   if(nextID === countingImage)
                   {
                      console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
                      //var newID = Number(id) + 1;
                      var altID = Number(nextID) + 1;
                      nextAltName = 'image ' + altID;
                      console.log("I am here!!! " + nextAltName);
                      var nextImageID = 'MaintenanceImage' + nextID;
                      var nextTextID = 'MaintenanceImageText' + nextID;
                      var nextRemoveButtonID = 'MaintenanceRemoveButton' + nextID;
                      var nextAddButtonID = 'AddMaintenanceImageButton' + nextID;
                      var nextUploadID = 'MaintenanceUploadImage' + nextID;
                      addImageElements(nextAltName, 'MaintenancePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                          p.removeFunction, p.addFunction,'500px', '0px');
                   }
                   else
                   {
                     console.log("still loading image, no worry");
                   }
                 }

            }
            else if(p.tableName === 'MaintenanceDrawingsTable')
            {
                var maxDrawing = 6;
                var table = document.getElementById(p.tableName);
                table.style.display = 'block';
                addImageElements(p.imageAltName, p.divID, p.imageid, p.textid,p.removeid, p.addid, p.uploadID,
                p.removeFunction, p.addFunction, p.imageSize,p.width);
                $('#' + p.imageid).attr('src', url);
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.imageid).style.display = 'block';
                //get the current id from the imageID. 
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                 console.log("the next ID is " + nextID);
                 console.log("the total Drawing from the databse is: " + countingDrawing);
                //based on the total image in the database, and compare with he maxImage in this report, to determine whether need to creae a "Add" buttton for user to upload a new image
                if (countingDrawing < maxDrawing)
                {
                   if(nextID === countingDrawing)
                   {
                      console.log("have loaded all the drawings from database, and the total number of drawings has not exceed the max number need to create a add button for user to upload the next drawings");
                      //var newID = Number(id) + 1;
                      var altID = Number(nextID) + 1;
                      nextAltName = 'drawing ' + altID;
                      console.log("I am here!!! " + nextAltName);
                      var nextImageID = 'MaintenanceDrawing' + nextID;
                      var nextTextID = 'MaintenanceDrawingText' + nextID;
                      var nextRemoveButtonID = 'MaintenanceDrawingRemoveButton' + nextID;
                      var nextAddButtonID = 'AddMaintenanceDrawingButton' + nextID;
                      var nextUploadID = 'MaintenanceUploadDrawing' + nextID;
                      addImageElements(nextAltName, 'MaintenanceDrawings', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                          p.removeFunction, p.addFunction,'500px', '0px');
                   }
                   else
                   {
                     console.log("still loading image, no worry");
                   }
                 }
            }
          	else if(p.tableName === 'ConstructionImagesTable')
          	{
              console.log("nothing happen here yet!");
              var maxIamge = 30;
                var table = document.getElementById(p.tableName);
                table.style.display = 'block';
                addImageElements(p.imageAltName, p.divID, p.imageid, p.textid,p.removeid, p.addid, p.uploadID,
                p.removeFunction, p.addFunction, p.imageSize,p.width);
                $('#' + p.imageid).attr('src', url);
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.imageid).style.display = 'block';
                //get the current id from the imageID. 
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                console.log("the next ID is " + nextID);
                //based on the total image in the database, and compare with he maxImage in this report, to determine whether need to creae a "Add" buttton for user to upload a new image
                if (countingImage < maxIamge)
                {
                   if(nextID === countingImage)
                   {
                      console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
                      //var newID = Number(id) + 1;
                      var altID = Number(nextID) + 1;
                      nextAltName = 'image ' + altID;
                      console.log("I am here!!! " + nextAltName);
                      var nextImageID = 'ConstructionImage' + nextID;
                      var nextTextID = 'ConstructionImageText' + nextID;
                      var nextRemoveButtonID = 'ConstructionImageRemoveButton' + nextID;
                      var nextAddButtonID = 'AddConstructionImageButton' + nextID;
                      var nextUploadID = 'ConstructionUploadImage' + nextID;
                      addImageElements(nextAltName, 'ConstructionPhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
                          p.removeFunction, p.addFunction,'500px', '0px');
                   }
                   else
                   {
                     console.log("still loading image, no worry");
                   }
                 }
              }
              else if (p.tableName == 'CPImagesTable')
              {
                var table = document.getElementById(p.tableName);
                table.style.display = 'block';
                addImageElements(p.imageAltName, p.imageid, p.textid, p.removeid, p.addid, p.uploadID,
                        'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '480px', '0px');
                $('#' + p.imageid).attr('src', url);
                document.getElementById(p.addid).style.display = 'none';
                document.getElementById(p.removeid).style.display = 'block';
                document.getElementById(p.textid).style.display = 'block';
                document.getElementById(p.imageid).style.display = 'block';
                document.getElementById(p.imageid).style.width = '480px';
                //get the current id from the imageID. 
                var currentID = p.imageid.replace ( /[^\d.]/g, '' );
                var nextID = Number(currentID) + 1 ;
                console.log("the next ID is " + nextID);

                if (nextID === countingImage)
                {
                  console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
                      //var newID = Number(id) + 1;
                      var altID = Number(nextID) + 1;
                      nextAltName = 'image ' + altID;
                      console.log("I am here!!! " + nextAltName);
                      var altName = 'Image' + altID;
                      var imageID = 'CPImage' + count;
                      var textID = 'CPImageText' + count;
                      var removeButtonID = 'CPImageRemoveButton' + count;
                      var addButtonID = 'CPImageAddButton' + count;
                      var uploadID = 'CPImageUpload' + count;
                      addImageElements(altName,imageID, textID, removeButtonID, addButtonID, uploadID,
                          'removeOneCPImage(this.id)', 'addOneCPImage(this.id)', '485px', '485px');
                }
              }
          }
        }
      }

    );

    // Report specific checks...
    <?php
      if (basename($_SERVER['SCRIPT_NAME']) == 'HomeFeasibilityReport.php')
      {
    ?>
        var count_homeLow = 0;
        var count_homeinvolvepeople = 0;
        data.forEach
        (
          function(d)
          {
            if (d.id.substr(0, 7) == 'homeLow')
            {
              count_homeLow++;
            }

            if (d.id.substr(0, 18) == 'homeInvolvedPeople')
            {
              count_homeinvolvepeople++;
            }
          }
        )

        // ***** Add extra fields in reports that have dynamic fields...
        if (count_homeLow > 10)
        {
          count_homeLow -= 10;
          for (var i = 0; i < count_homeLow; i++)
            moreHomeCost();
        }

        if (count_homeinvolvepeople > 7)
        {
          count_homeinvolvepeople -= 7;
          for (var i = 0; i < count_homeinvolvepeople; i++)
            addPeople();
        }
    <?php
      }
    ?>

    <?php
      if (basename($_SERVER['SCRIPT_NAME']) == 'RenovationFeasibilityReport.php')
      {
    ?>
        var count_renovationLow = 0;
        var count_renovationInvolvePeople = 0;
        data.forEach
        (
          function(d)
          {
            if (d.id.substr(0, 13) == 'renovationLow')
            {
              count_renovationLow++;
            }

            if (d.id.substr(0, 24) == 'renovationInvolvedPeople')
            {
              count_renovationInvolvePeople++;
            }
          }
        )

        // ***** Add extra fields in reports that have dynamic fields...
        if (count_renovationLow > 10)
        {
          count_renovationLow -= 10;
          for (var i = 0; i < count_renovationLow; i++)
            moreRenovationCost();
        }

        if (count_renovationInvolvePeople > 7)
        {
          count_renovationInvolvePeople -= 7;
          for (var i = 0; i < count_renovationInvolvePeople; i++)
            addPeople();
        }
    <?php
      }
    ?>

    <?php
      if (basename($_SERVER['SCRIPT_NAME']) == 'AssessmentReport.php')
      {
    ?>
        var count_defect = 0;
        var count_siteLimitation = 0;
        var count_servicelimitation = 0;
        var count_exteriorLimitation = 0;
        var count_interiorLimitation = 0;
        data.forEach
        (
          function(d)
          {
            if (d.id.substr(0, 8) == 'EDSelect')
            {
              count_defect++;
            }
            if (d.id.substr(0, 30) == 'AssessmentSiteLimitationSelect')
            {
              count_siteLimitation++;
            }
          
            if (d.id.substr(0, 33) == 'AssessmentServiceLimitationSelect')
            {
              count_servicelimitation++;
            }
            if(d.id.substr(0,42) == 'AssessmentPropertyExteriorLimitationSelect')
            {
              count_exteriorLimitation++;
            }
            
            if(d.id.substr(0,42) == 'AssessmentPropertyInteriorLimitationSelect')
            {
              count_interiorLimitation++;
            }
          }
        )

        // ***** Add extra fields in reports that have dynamic fields...
        if (count_defect > 9)
        {
          count_defect -= 9;
          for (var i = 0; i < count_defect; i++)
            moreEvidentDefect();
        }
        if (count_siteLimitation > 1)
        {
          count_siteLimitation -= 1;
          for (var i = 0; i < count_siteLimitation; i++)
            addAccessLimitation('AssessmentSiteNotesTable','AssessmentSiteLimitationSelect','AssessmentSiteLimitationNote');
        }
        if (count_servicelimitation > 1)
        {
          count_servicelimitation -= 1;
          for (var i = 0; i < count_servicelimitation; i++)
            addAccessLimitation('AssessmentServiceNotesTable','AssessmentServiceLimitationSelect','AssessmentServiceLimitationNote');
        }
        if(count_exteriorLimitation > 1)
        {
          count_exteriorLimitation -= 1;
          for (var i = 0; i < count_exteriorLimitation; i++)
            addAccessLimitation('AssessmentPropertyExteriorNotesTable','AssessmentPropertyExteriorLimitationSelect','AssessmentPropertyExteriorLimitationNote');
        }
        if(count_interiorLimitation > 1)
        {
          count_interiorLimitation -= 1;
          for (var i = 0; i < count_interiorLimitation; i++)
            addAccessLimitation('AssessmentPropertyInteriorNotesTable','AssessmentPropertyInteriorLimitationSelect','AssessmentPropertyInteriorLimitationNote');
        }
    <?php
      }
    ?>


        <?php
      if (basename($_SERVER['SCRIPT_NAME']) == 'DesignConsultationReport.php')
      {
    ?>
      
        var count_designconsultationinvolvepeople = 0;
        data.forEach
        (
          function(d)
          {
            
            if (d.id.substr(0, 32) == 'DesignConsultationInvolvedPeople')
            {
              count_designconsultationinvolvepeople++;
            }
          }
        )

        // ***** Add extra fields in reports that have dynamic fields...
        if (count_designconsultationinvolvepeople > 7)
        {
          count_designconsultationinvolvepeople -= 7;
          for (var i = 0; i < count_designconsultationinvolvepeople; i++)
            addPeople();
        }
    <?php
      }
    ?>


     <?php
      if (basename($_SERVER['SCRIPT_NAME']) == 'ConstructionReport.php')
      {
    ?>
        var count_summary = 0;
        data.forEach
        (
          function(d)
          {
            if (d.id.substr(0, 8) == 'CSSelect')
            {
              count_summary++;
            }

          }
        )

        // ***** Add extra fields in reports that have dynamic fields...
        if (count_summary > 10)
        {
          count_summary -= 10;
          for (var i = 0; i < count_summary; i++)
            moreConstructionSummary();
        }

      
    <?php
      }
    ?>


    // ***** Finally, populate with data...
    // Blast through ALL elements previously saved..,
    data.forEach
    (
      function(d)
      {
        var fld = '#' + d.id;
        //console.log(d.id);

        // Field exists?
        if (!$(fld).length || (d.value == 'undefined'))
          return;

        // If field already has value (probably populated from php), then leave alone if saved value is blank...
        if (($(fld).val() == '') || (d.value != ''))
          $(fld).val(d.value);
          //console.log(d.value);
      }
    );
  });
</script>
