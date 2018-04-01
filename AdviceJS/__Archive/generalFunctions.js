/**
 * Created by Fafa Lai on 6/10/17.
 */

/**
 * Make a gap between the elements
 * */
function makeAGap() {
    var result;
    result = {text: ' '};
    return result;
}

/**
 * Get the value for the table cell
 * */
function getIt(id) {
    var result;
    result = document.getElementById(id).value.trim();
    return result;
}


/**
 *   check whether the image src is base64 or url path.
 *   return -1 means base64
 *   otherwise is url path
 **/
function checkImage(id) {
    //console.log("click");
    var image = document.getElementById(id);
    var src = image.src;
    //console.log(src.indexOf("photos"));
    return(src.indexOf("photos"));
}

/*
    get image text
 */
function getImageText(id){
    var result;
    var textArea = document.getElementById(id);
    if(textArea)
    {
        //console.log(id + ' text area existed');
        text = textArea.value.trim();
        if (text != "")
        {
            result ={
                text:text,
                fontSize:9,
                margin: [0, 10, 0, 10],
                alignment: 'center'
            }
        }
        else {
            result = {
                text:"",
                margin: [0, 10, 0, 10],
                alignment: 'center'
            }
        }
        return result;
    }
    else
    {
        result = {
            text:""
        }
        return result;
    }
    
}


/**
 * Determine the footer
 * */
function determineFooter(mode) {
    var result;
    if (mode == 'final') {
        result = {
            image: footerImage,
            alignment: 'left',
            margin: [25, 0, 0, 0],
            width: 380,
            height: 28
        };
        return result;
    }
    if (mode == 'preview') {
        result = {
            text: '*** THIS IS A DRAFT OF COPY OF THE REPORT ***',
            alignment: 'left',
            fontSize: 11,
            color: 'red',
            bold: true,
            margin: [25, 16, 0, 0]
        };
        return result;
    }
}

/**
 * Determine draft cover page
 * */
function giveMeHugeDraft(mode) {
    var result;
    if (mode == 'final') {
        result = {
            text: ''
        };
        return result;
    }
    if (mode == 'preview') {
        result = {
            text: '******DRAFT******',
            fontSize: 40,
            bold: true,
            color: 'red',
            alignment: 'center'
        };
        return result;
    }
}


/**
 * Get image for the Cover page
 * */
function displayCoverImage(id) {
    var imageSection;
    var myImage = document.getElementById(id);
    var myWidth = myImage.width;

    if (myWidth == 0) {
        imageSection = {
            text: "",
            width: 0,
            height: 0
        }
    } 
    else 
    {

        if (checkImage(id) >= 0)
        {
            //console.log('reload');
            var canvas = document.createElement("canvas");
            canvas.width = myImage.naturalWidth;
            canvas.height = myImage.naturalHeight;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(myImage,0,0);
            var src = canvas.toDataURL("image/png");
            
            imageSection = {
                image:src,
                height: 225,
                width: 225
            }
        }
        else{
            //console.log('just upload');
            imageSection = {
                image: myImage.src,
                width: 225,
                height: 225
            }
        }

    }
    return imageSection;
}


/**
 *   check whether the image src is base64 or url path.
 *   return -1 means base64
 *   otherwise is url path
 **/
function checkImage(id) {
    //console.log("click");
    var image = document.getElementById(id);
    var src = image.src;
    //console.log(src.indexOf("photos"));
    return(src.indexOf("photos"));
}

/*
 display image based on the id.
 if there is image src, set the width and height,
 if there is no image src, set width and height to 0 to save space
 */

function displayImage(id)
{
    var imageSection;
    var myImage = document.getElementById(id);

    if (myImage) {
        //console.log('image existed');
        var myWidth = myImage.style.width;
        if (myWidth == "0px") {
            
            imageSection = {
                text: ""
            };
            return imageSection;
        } 
        else {
            
            if (checkImage(id) >= 0)
            {
                var canvas = document.createElement("canvas");
                canvas.width = myImage.naturalWidth;
                canvas.height = myImage.naturalHeight;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(myImage,0,0);
                var src = canvas.toDataURL("image/png");
                imageSection = {
                    image:src,
                    height: 250,
                    width: 250
                }
            }
            else
            {
                imageSection = {
                    image: myImage.src,
                    width: 250,
                    height: 250
                };
            }

            return imageSection;
        }
    }
    else
    {  
        //console.log('not existed');
        imageSection = {
            text: ''
        };
        return imageSection;
    }
}

function getImage(id)
{
    var image = document.getElementById(id);
    var width = image.style.width;
    if (width == "0px")
    {
        src = coverPageLogo
    }
    else
    {
        src = image.src;
    }

    return src;
}
