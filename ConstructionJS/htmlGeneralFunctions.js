/**
 * Created by Fafa on 22/1/18.
 */

var firstRemove30th = true;
var global_Img;

function onload()
{
    RotateSavedCoverImage();
    reorderImages();
    automaticNumbering();
    addNewImageForm();
}

function countWord(click_id)
{
    var words = document.getElementById(click_id).value;
    var regex = /\s+/gi;
    var wordCount = words.trim().replace(regex, ' ').split(' ').length;
    //console.log("total word count: " + wordCount);
    // if (wordCount >= 4)
    // {
    //     document.getElementById(click_id).disabled = true;
    //     alert("you can only enter 3 words");
    // }
}

//Pre set, maximum paragraphs 999. so the auto numbering always have the first five letters occupied. 
function RefreshNo()
{
    var totalParagraphs = 0;
    console.log("click");
    var NumberingSections = ['listOfDefective','externalSites','externalOutBuilding','externalBuilding','externalAccessLimitation',
    'internalLiving','internalServiceAreas','internalServices','internalAccessLimitations'];
    for(var i = 0;i<NumberingSections.length;i++)
    {
        //console.log(NumberingSections[i]);
        var contents = document.getElementById(NumberingSections[i]).value;
        if(contents.length > 0)
        {
            //it is not an empty text area;
            var paragraphs = contents.split('\n');
            var NumberingParagraphs = "";
            //totalParagraphs = totalParagraphs + paragraphs.length;
            for(var p = 0;p<paragraphs.length;p++)
            {
                //console.log(p);
                //console.log("I am in");
                //the numbering will take five charaters length; 
                totalParagraphs = totalParagraphs + 1;
                //only add the auto numbering if there is content in this line, otherwise no. 
                if(totalParagraphs < 10)
                {
                    //numbering 1 ~ 9
                    var paragraphB = totalParagraphs.toString() + ".   " + paragraphs[p].substring(5); 
                }
                else if(totalParagraphs < 100)
                {
                    //numerbing 10 ~99
                    var paragraphB = totalParagraphs.toString() + ".  " + paragraphs[p].substring(5); 
                }
                else
                {
                    //numerbing 100 ~ 
                    var paragraphB = totalParagraphs.toString() + ". " + paragraphs[p].substring(5); 
                }
                
                if( p == (paragraphs.length-1))
                {
                    console.log("it is the last line, don't need to add the break line. ");
                    //it is the last line, don't need to add the break line. 
                    NumberingParagraphs = NumberingParagraphs + paragraphB
                }
                else
                {
                    NumberingParagraphs = NumberingParagraphs + paragraphB + '\n';
                } 
            }
            document.getElementById(NumberingSections[i]).value = NumberingParagraphs;
        
        }            
    }

}

function AutoNumbering(section)
{
    var NumberingSections = ['listOfDefective','externalSites','externalOutBuilding','externalBuilding','externalAccessLimitation',
                                'internalLiving','internalServiceAreas','internalServices','internalAccessLimitations'];
    var totalParagraphs = 0;
    //console.log(section);
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var sectionText = document.getElementById(section).value;
    var paragraphs = sectionText.split('\n').length;
    
    //console.log(textLength);
    //console.log(keycode);
    //1.if the section is listOfDefective,  when the user type the first letter need to assign "1" at the beginning. 
    if(paragraphs == 1 && section == "listOfDefective")
    {
        //console.log(sectionText.substring(0,5));
        if(sectionText.substring(0,5) != "1.   " && keycode != "8")
        {
            //console.log("listOfDefective, first section, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = "1.   " + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    //2. if the section is external Sites;
    else if(paragraphs == 1 && section == "externalSites")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("externalSites, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    else if(paragraphs == 1 && section == "externalOutBuilding")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective','externalSites'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("externalOutBuilding, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    else if(paragraphs == 1 && section == "externalBuilding")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective','externalSites','externalOutBuilding'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("externalSites, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    else if(paragraphs == 1 && section == "externalAccessLimitation")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective','externalSites','externalOutBuilding','externalBuilding'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("externalSites, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    else if(paragraphs == 1 && section == "internalLiving")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective','externalSites','externalOutBuilding','externalOutBuilding',
                                'externalAccessLimitation'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("internalLiving, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    else if(paragraphs == 1 && section == "internalServiceAreas")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective','externalSites','externalOutBuilding','externalOutBuilding',
                                'externalAccessLimitation','internalLiving'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("internalServiceAreas, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    else if(paragraphs == 1 && section == "internalServices")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective','externalSites','externalOutBuilding','externalOutBuilding',
                                'externalAccessLimitation','internalLiving','internalServiceAreas'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("internalServices, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }
    else if(paragraphs == 1 && section == "internalAccessLimitations")
    {
        //console.log(sectionText.substring(0,5));
        var coutingSection = ['listOfDefective','externalSites','externalOutBuilding','externalOutBuilding',
                                'externalAccessLimitation','internalLiving','internalServiceAreas','internalServices'];
        var accumulatedNo = 1;
        for(var i = 0; i<coutingSection.length;i++)
        {
            var contents = document.getElementById(coutingSection[i]).value;
            if(contents.length > 0)
            {
                accumulatedNo = accumulatedNo + contents.split('\n').length;
            }

        }
        // var LODSection = document.getElementById('listOfDefective').value;
        // var LODLength = LODSection.split('\n').length;
        // var laestNumbering = LODLength + 1;
        var latestNumberingText;
        if(accumulatedNo < 10)
        {
            latestNumberingText = accumulatedNo.toString() + ".   ";
        }
        else if(accumulatedNo < 100)
        {
            latestNumberingText = accumulatedNo.toString() + ".  ";
        }
        else 
        {
            latestNumberingText = accumulatedNo.toString() + ". ";
        }
        //console.log(latestNumberingText);
        if(sectionText.substring(0,5) != latestNumberingText && keycode != "8")
        {
            //console.log("internalAccessLimitations, first paragraph, first few letter, and it is not becuase deleting to so one letter left")
            //totalParagraphs = totalParagraphs + 1;
            var NumberingText = latestNumberingText + sectionText;
            document.getElementById(section).value = NumberingText;
        }
    }

    if(keycode == '13')
    {
        //console.log("user hit the Return key, to a new line");
        //console.log(paragraphs);
        for(var i = 0;i<NumberingSections.length;i++)
        {
            //console.log(NumberingSections[i]);
            var contents = document.getElementById(NumberingSections[i]).value;
            if(contents.length > 0)
            {
                //it is not an empty text area;
                var paragraphs = contents.split('\n');
                var NumberingParagraphs = "";
                //totalParagraphs = totalParagraphs + paragraphs.length;
                for(var p = 0;p<paragraphs.length;p++)
                {
                    //console.log(p);
                    
                    if(NumberingSections[i] == 'listOfDefective' && p == 0)
                    {
                        totalParagraphs = totalParagraphs + 1;
                        // var paragraphA = paragraphs[p].substring(5);
                        //console.log(paragraph);
                        if(paragraphs.length == 1)
                        {
                            //only one line, no need to add break 
                            NumberingParagraphs = NumberingParagraphs + paragraphs[p]
                        }
                        else
                        {
                            NumberingParagraphs = NumberingParagraphs + paragraphs[p] + '\n';
                        }
                        
                    }
                    else
                    {
                        //console.log("I am in");
                        //the numbering will take five charaters length; 
                        totalParagraphs = totalParagraphs + 1;
                        //only add the auto numbering if there is content in this line, otherwise no. 
                        if(totalParagraphs < 10)
                        {
                            //numbering 1 ~ 9
                            var paragraphB = totalParagraphs.toString() + ".   " + paragraphs[p].substring(5); 
                        }
                        else if(totalParagraphs < 100)
                        {
                            //numerbing 10 ~99
                            var paragraphB = totalParagraphs.toString() + ".  " + paragraphs[p].substring(5); 
                        }
                        else
                        {
                            //numerbing 100 ~ 
                            var paragraphB = totalParagraphs.toString() + ". " + paragraphs[p].substring(5); 
                        }
                        
                        if( p == (paragraphs.length-1))
                        {
                            //console.log("it is the last line, don't need to add the break line. ");
                            //it is the last line, don't need to add the break line. 
                            NumberingParagraphs = NumberingParagraphs + paragraphB
                        }
                        else
                        {
                            NumberingParagraphs = NumberingParagraphs + paragraphB + '\n';
                        } 
                    }
                    document.getElementById(NumberingSections[i]).value = NumberingParagraphs;
                }
            }            
        }
    }


    else if(keycode == '8')
    {
        //user hit the delete key, don't auto numbering the delete line. 
        for(var i = 0;i<NumberingSections.length;i++)
        {
            //console.log(NumberingSections[i]);
            var contents = document.getElementById(NumberingSections[i]).value;
            if(contents.length > 0)
            {
                //it is not an empty text area;
                var paragraphs = contents.split('\n');
                var NumberingParagraphs = "";
                //totalParagraphs = totalParagraphs + paragraphs.length;
                for(var p = 0;p<paragraphs.length;p++)
                {
                    //console.log(p);
                    //console.log("the current paragraphs numbers are " + totalParagraphs);
                    if(NumberingSections[i] == 'listOfDefective' && p == 0)
                    {
                        totalParagraphs = totalParagraphs + 1;
                        // var paragraphA = paragraphs[p].substring(5);
                        //console.log(paragraph);
                        if(paragraphs.length == 1)
                        {
                            //only one line, no need to add break 
                            NumberingParagraphs = NumberingParagraphs + paragraphs[p]
                        }
                        else
                        {
                            NumberingParagraphs = NumberingParagraphs + paragraphs[p] + '\n';
                        }
                        
                    }
                    else
                    {
                        //console.log("I am in");
                        //console.log(paragraphs[p]);
                        //console.log(paragraphs[p].length);
                        //the numbering will take five charaters length; 
                        if(paragraphs[p].length > 0)
                        {
                            totalParagraphs = totalParagraphs + 1;
                            //only add the auto numbering if there is content in this line, otherwise no. 
                            if(totalParagraphs < 10)
                            {
                                //numbering 1 ~ 9
                                var paragraphB = totalParagraphs.toString() + ".   " + paragraphs[p].substring(5); 
                            }
                            else if(totalParagraphs < 100)
                            {
                                //numerbing 10 ~99
                                var paragraphB = totalParagraphs.toString() + ".  " + paragraphs[p].substring(5); 
                            }
                            else
                            {
                                //numerbing 100 ~ 
                                var paragraphB = totalParagraphs.toString() + ". " + paragraphs[p].substring(5); 
                            }
                            
                            if( p == (paragraphs.length-1))
                            {
                                //console.log("it is the last line, don't need to add the break line. ");
                                //it is the last line, don't need to add the break line. 
                                NumberingParagraphs = NumberingParagraphs + paragraphB
                            }
                            else
                            {
                                NumberingParagraphs = NumberingParagraphs + paragraphB + '\n';
                            } 
                        }
                        
                    }
                    //console.log("the current paragraphs numbers are " + totalParagraphs);
                    document.getElementById(NumberingSections[i]).value = NumberingParagraphs;
                }
            }            
        }

    }
}

function startNumber(id)
{
    if (document.getElementById(id).value === '') {
        document.getElementById(id).value += '1. ';
    }
}
function assignNumber(id)
{
    console.log(id);
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var value = document.getElementById(id).value;
    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }

    if(getIt('externalOutBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalOutBuilding').split('\n').length;
    }
    if(getIt('externalBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalBuilding').split('\n').length;
    } 
    if(getIt('externalAccessLimitation') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalAccessLimitation').split('\n').length;
    } 
    if(getIt('internalLiving') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalLiving').split('\n').length;
    } 
    if(getIt('internalServiceAreas') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalServiceAreas').split('\n').length;
    } 
    if(getIt('internalServices') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalServices').split('\n').length;
    } 
  
    if(value == "") //empty input, need to assign '1.' first. 
    {
        console.log("empty input");
        //console.log(getIt(id).split('\n').length);
        document.getElementById(id).value += totalParagraphs + ".  ";
    }
    //if equal to 13, means user hit the "Return" key
    if (keycode == '13') {
        //number = getIt(id).split('\n').length + 1;
        totalParagraphs = totalParagraphs + 1;
        // console.log(getIt(id).split('\n').length);
        document.getElementById(id).value += totalParagraphs + ".  ";
        //number = number + 1;
        refreshListOfDectiveSiteNumber(false);
        refreshExternalSiteNumber(false);
        refreshExternalOutBuilingNumber(false);
        refreshExternalBuilingNumber(false);
        refreshExternalAccessNumber(false);
        refreshInternalLivingNumber(false);
        refreshInternalServiceAreasNumber(false);
        refreshInternalServicessNumber(false);
        refreshInternalAccessNumber(false);
    }
    //if equal to 8, measn user remove this line. 
    if(keycode == 8)
    {
        refreshListOfDectiveSiteNumber(true);
        refreshExternalSiteNumber(true);
        refreshExternalOutBuilingNumber(true);
        refreshExternalBuilingNumber(true);
        refreshExternalAccessNumber(true);
        refreshInternalLivingNumber(true);
        refreshInternalServiceAreasNumber(true);
        refreshInternalServicessNumber(true);
        refreshInternalAccessNumber(true);
    }
    var txtval = document.getElementById(id).value;
    // document.getElementById(id).value = txtval;
    if (txtval.substr(txtval.length - 1) == '\n') {
        // console.log("I am here");
        // console.log(txtval);
        // console.log(txtval.length);
        var newTxtval = txtval.substring(0, txtval.length - 1);
        // console.log(newTxtval);
        
        document.getElementById(id).value = newTxtval;
    }
}



/**
 * Remove all the empty elements in an array
 * */
function cleanArray(actual) {
    //console.log(actual);
    var newArray = [];
    for (var i = 0; i < actual.length; i++)
    {
        if (actual[i])
        {
            newArray.push(actual[i]);
        }
    }
    //console.log(newArray);
    return newArray;
}

function refreshListOfDectiveSiteNumber(minus)
{
    console.log("refreshListOfDectiveSiteNumber");
    console.log(getIt('listOfDefective'));
    var TextArray = cleanArray(getIt('listOfDefective').split('\n'))
    var  totalParagraphs = 0;
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
            
        }
    }
    document.getElementById('listOfDefective').value = newText;
}

function refreshExternalSiteNumber(minus)
{
    // console.log("refreshExternalSiteNumber");
    var totalParagraphs = 0;
    var TextArray = cleanArray(getIt('externalSites').split('\n'))
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = getIt('listOfDefective').split('\n').length;
    }

    
    // console.log(totalParagraphs);
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            // console.log(i);
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
            
        }
    }
    document.getElementById('externalSites').value = newText;
}
function refreshExternalOutBuilingNumber(minus)
{
    var TextArray = cleanArray(getIt('externalOutBuilding').split('\n'))
    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }
    
    // console.log(totalParagraphs);
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
            
        }
    }
    document.getElementById('externalOutBuilding').value = newText;
}
function refreshExternalBuilingNumber(minus)
{
    var TextArray = cleanArray(getIt('externalBuilding').split('\n'))

    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }

    if(getIt('externalOutBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalOutBuilding').split('\n').length;
    }
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
            
        }
    }
    document.getElementById('externalBuilding').value = newText;
}
function refreshExternalAccessNumber(minus)
{
    var TextArray = cleanArray(getIt('externalAccessLimitation').split('\n'))

    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }

    if(getIt('externalOutBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalOutBuilding').split('\n').length;
    }
    if(getIt('externalBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalBuilding').split('\n').length;
    }

    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
            
        }
    }
    document.getElementById('externalAccessLimitation').value = newText;
}

function refreshInternalLivingNumber(minus)
{
    var TextArray = cleanArray(getIt('internalLiving').split('\n'))
   
    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }

    if(getIt('externalOutBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalOutBuilding').split('\n').length;
    }
    if(getIt('externalBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalBuilding').split('\n').length;
    } 
    if(getIt('externalAccessLimitation') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalAccessLimitation').split('\n').length;
    }                      
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
        }
    }
    document.getElementById('internalLiving').value = newText;
}

function refreshInternalServiceAreasNumber(minus)
{
    var TextArray = cleanArray(getIt('internalServiceAreas').split('\n'))
   
    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }

    if(getIt('externalOutBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalOutBuilding').split('\n').length;
    }
    if(getIt('externalBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalBuilding').split('\n').length;
    } 
    if(getIt('externalAccessLimitation') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalAccessLimitation').split('\n').length;
    } 
    if(getIt('internalLiving') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalLiving').split('\n').length;
    } 
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
        }
    }
    document.getElementById('internalServiceAreas').value = newText;
}
function refreshInternalServicessNumber(minus)
{
    var TextArray = cleanArray(getIt('internalServices').split('\n'))
    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }

    if(getIt('externalOutBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalOutBuilding').split('\n').length;
    }
    if(getIt('externalBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalBuilding').split('\n').length;
    } 
    if(getIt('externalAccessLimitation') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalAccessLimitation').split('\n').length;
    } 
    if(getIt('internalLiving') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalLiving').split('\n').length;
    } 
    if(getIt('internalServiceAreas') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalServiceAreas').split('\n').length;
    } 
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
            
        }
    }
    document.getElementById('internalServices').value = newText;
}
function refreshInternalAccessNumber(minus)
{
    var TextArray = cleanArray(getIt('internalAccessLimitations').split('\n'))
   
    var totalParagraphs = 0;
    if(getIt('listOfDefective') != "")
    {
        totalParagraphs = totalParagraphs + getIt('listOfDefective').split('\n').length;
    }

    if(getIt('externalSites') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalSites').split('\n').length;
    }

    if(getIt('externalOutBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalOutBuilding').split('\n').length;
    }
    if(getIt('externalBuilding') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalBuilding').split('\n').length;
    } 
    if(getIt('externalAccessLimitation') != "")
    {
        totalParagraphs = totalParagraphs + getIt('externalAccessLimitation').split('\n').length;
    } 
    if(getIt('internalLiving') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalLiving').split('\n').length;
    } 
    if(getIt('internalServiceAreas') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalServiceAreas').split('\n').length;
    } 
    if(getIt('internalServices') != "")
    {
        totalParagraphs = totalParagraphs + getIt('internalServices').split('\n').length;
    } 
    var newText = ""; 
    if(TextArray.length>0)
    {
        for(var i = 0;i<TextArray.length;i++)
        {
            
            if(i == 0)
            {
                if(minus)
                {
                    // console.log("remove a line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    let nextParagraphs = totalParagraphs+ i + 1;
                    var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    newText = newText + text + '\n';
                }
                else
                {
                    // console.log("new line");
                    // console.log((totalParagraphs + 1).toString() + '.');
                    // console.log(TextArray[i].substr(0,2));
                    if(TextArray[i].substring(1,2) == '.') //already has a number, need to remove the first two charter
                    {
                        // console.log("number less than 10, one digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else if (TextArray[i].substring(2,3) == '.')
                    {
                        // console.log("number greater than 10, two digits");
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                        newText = newText + text + '\n';
                    }
                    else
                    {
                        let nextParagraphs = totalParagraphs+ i + 1;
                        var text = nextParagraphs + ". " + TextArray[i].trim();
                        newText = newText + text + '\n';
                    }
                    // if(TextArray[i].substr(0,2) == (totalParagraphs + 1).toString() + '.')
                    // {
                    //     console.log("1");
                    //     let nextParagraphs = totalParagraphs+ i + 1;
                    //     var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //     newText = newText + text + '\n';
                    // }
                    // else
                    // { 
                    //     console.log("2");
                    //     console.log(TextArray[i].substr(1,2));
                    //     // if(TextArray[i].substr(1,2))
                    //     if(TextArray[i].substr(1,2) == '. ') //already has a number, need to remove the first two charter
                    //     {
                    //         console.log("3");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                    //         newText = newText + text + '\n';
                    //     }
                    //     else
                    //     {
                    //         console.log("4");
                    //         let nextParagraphs = totalParagraphs+ i + 1;
                    //         var text = nextParagraphs + ". " + TextArray[i].trim();
                    //         newText = newText + text + '\n';
                    //     }
                    // }
                }
            }
            else
            {
                let nextParagraphs = totalParagraphs+ i + 1;
                var text = nextParagraphs + ". " + TextArray[i].slice(3).trim();
                newText = newText + text + '\n';
            }
            
        }
    }
    document.getElementById('internalAccessLimitations').value = newText;
}

function moreConstructionSummary()
{
    var div = document.getElementById('CSRow');
    var divNumber = $('#CSRow').find('> div').length;
    //console.log(divNumber);
    var newDivID = 'CS' + divNumber;
    var newInputID = 'CSName' + divNumber;
    var newSelectID = 'CSSelect' + divNumber;

    var newDiv = document.createElement('div');
    newDiv.setAttribute('class','col-sm-4');
    newDiv.setAttribute('id',newDivID);
    newDiv.style.marginTop = '20px';

    var name  = document.createElement('INPUT');
    name.setAttribute('class','form-control');
    name.setAttribute('title', 'name');
    name.setAttribute('type','text');
    name.setAttribute('id',newInputID);
    newDiv.appendChild(name);

    var describe  = document.createElement('INPUT');
    describe.setAttribute('class','form-control');
    describe.setAttribute('title','describe');
    describe.setAttribute('type','text');
    describe.setAttribute('id',newSelectID);
    newDiv.appendChild(describe);

    div.appendChild(newDiv);

}

/**
 * Images Related 
 */
function reorderImages()
{
    var totalContainers = $('#ConstructionPhotographs').find('> form');
    var BigContainer = document.getElementById('ConstructionPhotographs');
    // console.log(totalContainers);
    // for (var i=0;i<totalContainers.length;i++)
    // {
    //     console.log( Number(totalContainers[i].id.replace(/[^\d.]/g, '')));
    //     console.log((totalContainers[i].id));
    // }
    totalContainers.sort(function(a,b)
    {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });

    // console.log(totalContainers);

    $("#ConstructionPhotographs").empty();
    for (var i=0;i<totalContainers.length;i++)
    {
       BigContainer.appendChild(totalContainers[i]);
    }


    var totalContainers = $('#ConstructionPhotographs').find('> form');
    var BigContainer = document.getElementById('ConstructionPhotographs');
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

    $("#ConstructionPhotographs").empty();
    for (var i = 0; i < totalContainers.length; i++) 
    {
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
                myImage.style.marginTop = "35px";
                myImage.style.marginBottom = "35px";
                $("#" + imgID).rotate(originalAngle);            }
            else
            {
                myImage.style.marginTop = "35px";
                myImage.style.marginBottom = "35px";
                $("#" + imgID).rotate(originalAngle);
            }

        }
        else
        {
            myImage.style.marginTop = "35px";
            myImage.style.marginBottom = "35px";
        }
        var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,'ConstructionImagesTable',rotateBtnID,angleID,'ConstructionPhotographs'];

        var removeBtn = document.getElementById(totalContainers.eq(i).children('input').eq(2).get(0).id);
        var rotateBtn = document.getElementById(totalContainers.eq(i).children('input').eq(4).get(0).id);

        // var removeFunction = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + divid + "','" + rotateBtnID +  "','" + angleID + "'])";
        var removeFunction  = "DeleteOneImg(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'ConstructionImagesTable' + "','"+ rotateBtnID +  "','" + angleID +  "','"+'ConstructionPhotographs' + "'])";
        var rotateFunction = "RotateOneImage(['" + imgID + "','" + labelID+"','" + textID + "','" + rmBtnID +"','" +  addBtnID + "','" + formID + "','" + 'ConstructionImagesTable' + "','"+ rotateBtnID +  "','" + angleID + "','"+'ConstructionPhotographs' + "'])";

        //console.log(removeFunction);
        $("#" + addBtnID).click(function () {
            global_Img = element;
            //console.log(global_Img);
            $("#ConstructionUploadOneImage").click();
        });
        //addBtn.setAttribute("onclick", addFunction);
        removeBtn.setAttribute("onclick", removeFunction);
        rotateBtn.setAttribute("onclick", rotateFunction);
    }
}

function automaticNumbering()
{
    console.log("need to refresh the image number");
    var totalContainers = $('#ConstructionPhotographs').find('> form');
    for(var i=0;i<totalContainers.length;i++)
    {
        //console.log(i);
        //console.log(totalContainers.eq(i).children('div').eq(1).children('label').get(0));
        totalContainers.eq(i).children('label').get(0).innerHTML = "IMG " + (i + 1);
    }
}

/**
 * Create Image Elements dynamtically when image(s) are uploaded
 * create
 * image, label, image text, remove Button, Add Button, Rotate Button, Angle Input, A form to contain all 
 */

function createImagesElements(tableID, imgID, labelID = "", labelValue = "", textID, rmBtnID, addBtnID, formID,rotateBtnID,angleInputID,divID) {
    // console.log(formID);
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
    img.style.marginTop = "35px";
    img.style.marginBottom = "35px";
    // img.style.width = '500px';
    // img.style.height = '500px';
    // img.setAttribute("margin-top","35px");
    // img.setAttribute("margin-bottom","35px");

    text.setAttribute("id", textID);
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", "name");
    text.style.width = "500px";

    rmBtn.setAttribute("id", rmBtnID);
    rmBtn.setAttribute("class","btn btn-danger");
    rmBtn.setAttribute("type", "button");
    rmBtn.setAttribute("value", "Remove");
    rmBtn.style.width = "500px";

    addBtn.setAttribute("id", addBtnID);
    addBtn.setAttribute("class","btn btn-secondary");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("value", "Add");
    addBtn.style.width = "500px";
    addBtn.style.display = "none";

    rotateBtn.setAttribute("id", rotateBtnID);
    rotateBtn.setAttribute("class","btn btn-info");
    rotateBtn.setAttribute("type", "button");
    rotateBtn.setAttribute("value", "Rotate");
    rotateBtn.setAttribute("style","margin-top: 5px;margin-bottom: 5px")
    rotateBtn.style.width = "500px";

    angleInput.setAttribute("id", angleInputID);
    angleInput.setAttribute("type", "text");
    angleInput.style.width = "500px";
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



    var element = [imgID, labelID, textID, rmBtnID, addBtnID, formID,tableID,rotateBtnID,angleInputID,divID];
    // console.log(element);
    $("#" + rmBtnID).click(function () {
        // DeleteImage(formID, imgID, textID);
        DeleteOneImg(element);
    });
    $("#" + addBtnID).click(function () {
        console.log("click");
        global_Img = element;
        //console.log(global_Img);
        $("#ConstructionUploadOneImage").click();

    });

    $("#" + rotateBtnID).click(function () {
        RotateOneImage(element);
    });


    return element;
}

/**
 * Create Empty Image Elements for the next image, when a image is uploaded. Prepare for the next. 
 */
function createEmptElementForAddingImg(newID)
{
    console.log("new id")
    var nextImageID = 'ConstructionImage' + newID;
    var nextTextID = 'ConstructionImageText' + newID;
    var nextLabelID = 'ConstructionImageLable' + newID;
    var nextLableValue = 'IMG' + (parseInt(newID) + 1);
    var nextRemoveButtonID = 'ConstructionImageRemoveButton' + newID;
    var nextAddButtonID = 'AddConstructionImageButton' + newID;
    var nextUploadID = 'ConstructionUploadImage' + newID;
    var nextRotateBtnID = 'ConstructionImageRotateButton' + newID;
    var nextAngelInputID = 'ConstructionImageAngle' + newID;
    var nextFormID = "ConstructionImageForm" + newID;
    var emptyElement = createImagesElements('ConstructionImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, 
                                            nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'ConstructionPhotographs');
    //The new form only show add button.
    $("#" + emptyElement[0]).hide();
    $("#" + emptyElement[1]).hide();
    $("#" + emptyElement[2]).val("");
    $("#" + emptyElement[2]).hide();
    $("#" + emptyElement[3]).hide();
    $("#" + emptyElement[4]).show();
    $("#" + emptyElement[7]).hide();
    $("#" + emptyElement[8]).hide();

}

function addNewImageForm()
{
    maxImage = 30;
    var idGroup = [];
    var totalContainers = $('#ConstructionPhotographs').find('> form');
    console.log("the current form in the report ConstructionPhotographs is " + totalContainers.length);
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
    console.log("the last ID is " + idGroup[idGroup.length - 1]);
    var lastID = idGroup[idGroup.length - 1];
    var newID = Number(lastID) + 1;
    var altID = Number(lastID) + 2;
    if (totalContainers.length < maxImage && totalContainers.length != 0) {
        console.log("have loaded all the image from database, and the total number of image has not exceed the max number need to create a add button for user to upload the next image");
        nextAltName = 'image ' + altID;
        //console.log("I am here!!! need another image element ,the next id  " + newID);
        var nextImageID = 'ConstructionImage' + newID;
        var nextTextID = 'ConstructionImageText' + newID;
        var nextLabelID = 'ConstructionImageLable' + newID;
        var nextLableValue = 'IMG' + (parseInt(newID) + 1);
        var nextRemoveButtonID = 'ConstructionImageRemoveButton' + newID;
        var nextAddButtonID = 'ConstructionImageButton' + newID;
        var nextUploadID = 'ConstructionUploadImage' + newID;
        var nextRotateBtnID = 'ConstructionImageRotateButton' + newID;
        var nextAngelInputID = 'AdviceImageAngle' + newID;
        var nextFormID = "ConstructionImageForm" + newID;
        // addImageElements(nextAltName, 'AdvicePhotographs', nextImageID, nextTextID, nextRemoveButtonID, nextAddButtonID, nextUploadID,
        //     'RemoveOneAdviceImage(this.id)', 'addOneAdviceImage(this.id)', '500px', '0px',nextRotateBtnID,nextAngelInputID);
        var emptyElement = createImagesElements('ConstructionImagesTable', nextImageID, nextLabelID, nextLableValue, nextTextID, nextRemoveButtonID, nextAddButtonID, nextFormID,nextRotateBtnID,nextAngelInputID,'ConstructionPhotographs');

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
}



function ConstructionCover(){
    //console.log('I am in');
    document.getElementById('ConstructionUploadCoverImage').click();
    //console.log("clicked");
}


$("#ConstructionUploadCoverImage").change(function(){
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
            var image = document.getElementById('ConstructionCoverImage');
            var removeButton = document.getElementById('ConstructionCoverImageRemoveButton');
            var rotateButton = document.getElementById('ConstructionCoverImageRotateButton');

            //if exif data available, update orientation
            if (data.exif) {
                orientation = data.exif.get('Orientation');
            }
            var loadingImage = loadImage(imageFile, function (canvas) {
                var base64data = canvas.toDataURL(imageType);
                //var img_src = base64data.replace(/^data\:image\/\w+\;base64\,/, '');
                image.setAttribute('src', base64data);
                removeButton.style.display = 'block';
                removeButton.style.width = '400px';
                image.style.display = 'block';
                image.style.width = '400px';
                rotateButton.style.display = 'block';
                rotateButton.style.width = '400px';

                // image.style.height = '250px';
                var file = new File([convertBase64UrlToBlob(base64data)], imageName, {
                    type: imageType,
                    lastModified: date.getTime()
                });
                doUploadFile(file, 'ConstructionCoverImage', '', 'ConstructionCoverImageRemoveButton', '', '', 'cover image', '', '', '', '', '265px', '400px','ConstructionCoverImageRotateButton',"ConstructionCoverImageAngle");

            }, {
                canvas: true,
                orientation: orientation,
                maxWidth: 1300,
                maxHeight: 1000
            });
        });
    }
});

function RemoveConstructionCoverImage(){
    //RemoveCoverImage('AdviceCoverImage','AdviceCoverImageRemoveButton');
    var image = document.getElementById('ConstructionCoverImage');
    var removeButton = document.getElementById('ConstructionCoverImageRemoveButton');
    var rotatebutton = document.getElementById('ConstructionCoverImageRotateButton');


    image.setAttribute('src', '#');
    image.style.display = 'none';
    rotatebutton.style.display = 'none';
    //image.style.width = 0;
    removeButton.style.display = 'none';
    document.getElementById("ConstructionCoverImageAngle").value = "";
    doRemovePhoto('ConstructionCoverImage');

}

function RotateConstructionCoverImage()
{
    var rotateAngle;
    var originalAngle = document.getElementById('ConstructionCoverImageAngle').value;
    console.log(originalAngle);
    if(originalAngle == null || originalAngle == "undefined" || originalAngle == "")
    {
        originalAngle = 0;
    }


    var myImage = document.getElementById('ConstructionCoverImage');
    
    var rotateAngle = parseInt(originalAngle) + 90

    console.log(rotateAngle);

    //Set the image margin based on the degre to aovide overlapping with other objects/elements
    if(rotateAngle == 90 || rotateAngle == 270)
    {
        console.log("the degree is 90 or 270");
        myImage.style.marginTop = "100px";
        myImage.style.marginBottom = "100px";
        $("#ConstructionCoverImage").rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "30px";
        myImage.style.marginBottom = "30px";
        $("#ConstructionCoverImage").rotate(rotateAngle);
    }

       
    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById('ConstructionCoverImageAngle').value = rotateAngle
}

/**
 * Use this to rotate the cover image when the HTML report is loaded. 
 */
function RotateSavedCoverImage()
{
    console.log("RotateSavedCoverImage");
    var myImage = document.getElementById('ConstructionCoverImage');
    var originalAngle = parseInt(document.getElementById('ConstructionCoverImage').value);
    var rotateBtn = document.getElementById('ConstructionCoverImageRotateButton');

    //Check if there is save cover image from the last time. 
    if (myImage.src.includes("photos/") > 0) 
    {
        console.log("there is saved cover image,need to dispaly the rotate button");
        rotateBtn.style.display = 'block';
        //check if the cover image need to be rotated;            
        console.log("in");
        if(originalAngle == 90 || originalAngle == 270)
        {
            // console.log("the degree is 90 or 270");
            myImage.style.marginTop = "100px";
            myImage.style.marginBottom = "100px";
            $("#ConstructionCoverImage").rotate(originalAngle);
        }
        else if(originalAngle == 180)
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
            $("#ConstructionCoverImage").rotate(originalAngle);
        }
        else 
        {
            myImage.style.marginTop = "30px";
            myImage.style.marginBottom = "30px";
        }

    }

}

function ConstructionUploadImages(){
    document.getElementById('ConstructionUploadImages').click();
}
$('#ConstructionUploadImages').click(function()
{
    //console.log(this.value);
    this.value = null;
});
$('#ConstructionUploadImages').change(function() {
    firstRemove30th = true;
    var imageIDs = $("#ConstructionPhotographs form");
    //Clear all images
    if (!isEmpty(imageIDs)) 
    {
        for (var i = 0; i < imageIDs.length; i++) {
            var imgID = imageIDs.eq(i).children("img").attr("id");
            doRemovePhoto(imgID);
        }
        $("#ConstructionPhotographs").empty();
    }
    var allImages = [];
    
    var table = document.getElementById("ConstructionImagesTable");
    table.style.display = 'block';
    var count = this.files.length;
    var imageFile = this.files;
    console.log(count);
    //check the number of image
    var allImages = [];
    if (this.files.length >=30) 
    {
        if(this.files.length > 30)
        {
            alert("You can only select 30 images. It will only display the first 30 photos");
        }
        for (let i = 0; i < 30; i++) 
        {
            allImages.push(this.files[i]);
        }
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            var altName = 'image' + elementID;
            var imageID = 'ConstructionImage' + elementID;
            var labelID = 'ConstructionImageLable' + elementID;
            var labelValue = 'IMG' + elementID;
            var textID = 'ConstructionImageText' + elementID;
            var removeButtonID = 'ConstructionImageRemoveButton' + elementID;
            var addButtonID = 'AddConstructionImageButton' + elementID;
            var uploadID = 'ConstructionUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'ConstructionImageRotateButton' + elementID;
            var imgAngleInputID = "ConstructionImageAngle" + elementID;
            var formID = "ConstructionImageForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("ConstructionImagesTable", imageID, labelID, labelValue,
            textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'ConstructionPhotographs');
    
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
    
                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
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
            automaticNumbering();
        }, 2000);
    } 
    else 
    {
        allImages = this.files;
        Object.keys(allImages).forEach(i => 
        {
            const file = allImages[i];
            elementID = parseInt(i) + 1;
            // var newid = ii + 1;
            // var nameID = ii + 1;
            var altName = 'image' + elementID;
            var imageID = 'ConstructionImage' + elementID;
            var labelID = 'ConstructionImageLable' + elementID;
            var labelValue = 'IMG' + elementID;
            var textID = 'ConstructionImageText' + elementID;
            var removeButtonID = 'ConstructionImageRemoveButton' + elementID;
            var addButtonID = 'AddConstructionImageButton' + elementID;
            var uploadID = 'ConstructionUploadImage' + elementID;
            //var imgLabelID = "imageCaption" + newid;
            var rotateButtonID = 'ConstructionImageRotateButton' + elementID;
            var imgAngleInputID = "ConstructionImageAngle" + elementID;
            var formID = "ConstructionImageForm" + elementID;
            //Create elements
            //[containerID,imgID, labelID, labelValue, textID, rmBtnID, addBtnID, formID]
            var element = createImagesElements("ConstructionImagesTable", imageID, labelID, labelValue,
            textID, removeButtonID, addButtonID, formID,rotateButtonID,imgAngleInputID,'ConstructionPhotographs');
    
            //console.log(element);
            loadImage.parseMetaData(file, function (data) {
                //console.log("I am in");
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
    
                            doUploadFile(imgFile, element[0], element[2], element[3], element[4], element[6], element[1], element[5],'','','','','',element[7],element[8]);
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
            console.log("create next image form");
            var nextID = count + 1;
            createEmptElementForAddingImg(nextID);
            automaticNumbering();
        }, 2000);
    }

});



/** 
    General Function for adding one image when the user click the "add" button
    by getting the id of the clicked button
    get the number of the id to generate other ids
    then use readOneImageURL function to add image on specific field.
*/

$('#ConstructionUploadOneImage').click(function () {
    // console.log("AdviceUploadOneImage onclick");
    // console.log(global_Img);
    // console.log(this.value);
    this.value = null;
});
$("#ConstructionUploadOneImage").on('change', function (e) {
    console.log("ConstructionUploadOneImage onchange");
    var file = e.currentTarget.files;
    //console.log(global_Img);
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

        automaticNumbering();

        //check if it need Add empty element
        //if there are less than 30 forms, then create a new empty element. 
        var totalContainers = $('#ConstructionPhotographs').find('> form');
        var imgscount = totalContainers.length;
        console.log(totalContainers.length);
        if(imgscount < 30)
        {
            console.log("need to create a new img form");
            var selectedID = String(element[0]).replace(/[^\d.]/g, '');
            var nextID = parseInt(selectedID) + 1;
            createEmptElementForAddingImg(nextID);
        }
    }

});


function DeleteOneImg(element) {
    
    //1. Remove the photos
    document.getElementById(element[8]).value = 0;
    doRemovePhoto(element[0]);
    $("#" + element[5]).remove();
   
    //2. Get the updated form status to see if need to crate a new img form. 
    //create a new img form if there are less than 30 images, and there are no empty form. 
    var totalContainers = $('#ConstructionPhotographs').find('> form');
    //console.log(totalContainers);
    totalContainers.sort(function (a, b) {
        return Number(a.id.replace(/[^\d.]/g, '')) - Number(b.id.replace(/[^\d.]/g, ''));
    });
    var imgscount = totalContainers.length;
    // console.log("The current img number is " + imgscount);

    var myImage = totalContainers.eq(imgscount-1).children('img').get(0);
    var imgID = totalContainers.eq(imgscount-1).children('img').get(0).id;
    var lastid = imgID.match(/\d+/g).map(Number);
    var nextid = parseInt(lastid) + 1;

    // console.log(myImage.style.display);
    // console.log(imgID);
    // console.log(lastid);
    
    if(myImage.style.display == 'none')
    {
        console.log("the last img form is empty, no need to add a new img form, only refresh the img number")
        //3. Refresh img number
        automaticNumbering();
    }
    else if(imgscount < 30 && myImage.style.display != 'none' )
    {
        console.log("less than 30 images and the last img form is full, create a new img form and refresh img number");
        createEmptElementForAddingImg(nextid);
        automaticNumbering();
    }
    
}

function RotateOneImage(element)
{
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
        //console.log("the degree is 90 or 270");
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + element[0]).rotate(rotateAngle);
    }
    else
    {
        myImage.style.marginTop = "35px";
        myImage.style.marginBottom = "35px";
        $("#" + element[0]).rotate(rotateAngle);
    }

    if(rotateAngle==360)
    {
        rotateAngle = 0;
    }
    document.getElementById(element[8]).value = rotateAngle;
    
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

/**
 * Single Action, image related
 * Resize the Image
 */
function resizeImage_Canvas(img) {
    var MAX_WIDTH = 640,
        MAX_HEIGHT = 480,
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
            height = 480;

        }
    }

    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);

    return canvas;
}


