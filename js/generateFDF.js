/**
 * Created by TengShinan on 31/8/17.
 */

var doc = new jsPDF();
//var functionArr = [drawPageOne()];
var entryPageOne = {firstTable: [], secondTable: [], thirdTable: []};

/**
 * Generate the PDF file and save it.
 * */
function generatePDF() {

    //console.log('Nice!');

    drawPageOne();
    doc.addPage();
    drawPageTwo();
    doc.addPage();
    drawPageThree();
    doc.addPage();
    drawPageFour();
    doc.addPage();
    drawPagePropertyAssessmentNotes();
    doc.addPage();
    drawPagePropertyAssessmentNotesCont();
    doc.addPage();
    drawPagePropertyExterior();
    doc.addPage();
    drawPageLivingArea();
    doc.addPage();
    drawPageBedroomArea();
    doc.addPage();
    drawPageWetArea();
    doc.addPage();
    drawPageAttachments();
    doc.addPage();
    termsAndConditions();

    // Save the PDF file
    doc.save('a4.pdf');
}

/**
 * PAGE 1
 * */
function drawPageOne() {

    var firstTableBorderY = 35;
    var firstTableContentY1 = 45;
    var secondTableBorderY = 100;
    var secondTableContentY1 = 110;
    var thirdTableBorderY = 148;
    var thirdTableContentY1 = 158;
    var firstTableLeftContentArr = ['Name:', 'Telephone:', 'Address of property:', 'Suburb:', 'Date of assessment:',
        'Existing use of property:', 'Weather conditions:', 'Verbal summary of:'];
    var secondTableLeftContentArr = ['Archicentre Australia Architect:', 'Registration Number:', 'Email Address:',
        'Phone:', 'Address:'];
    var thirdTableLeftContentArr = ['Sub-Structure:', 'Floors:', 'Roof:', 'Walls:', 'No. of Storeys:',
        'Windows:', 'Site Grade:', 'Furnished:', 'Tree Coverage:', 'Extensions / Renovation:', 'Estimated Age / Period:'];

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'Property Assessment Report');

    // Explanation
    setExplanationStyle();
    doc.text(15, 25, 'This Property Assessment Report is a visual assessment of the conditions of the reasonably ' +
        'accessible areas of the property \nat the time of the assessment, including the subject residence and associated ' +
        'areas where the property is a unit or apartment.');

    /**
     * Draw table lines
     * */
    setLinesStyle();
    // Draw first table's horizontal lines
    for (var i = 0; i < 10; i++) {
        doc.line(15, firstTableBorderY, 195, firstTableBorderY);
        firstTableBorderY += 6;
    }
    // Draw second table's horizontal lines
    for (var i = 0; i < (secondTableLeftContentArr.length + 2); i++) {
        doc.line(15, secondTableBorderY, 195, secondTableBorderY);
        secondTableBorderY += 6;
    }
    // Draw third table's horizontal lines
    for (var i = 0; i < (thirdTableLeftContentArr.length + 2); i++) {
        doc.line(15, thirdTableBorderY, 195, thirdTableBorderY);
        thirdTableBorderY += 6;
    }
    // Draw vertical lines
    doc.line(110, 47, 110, 53);
    doc.line(110, 59, 110, 71);
    doc.line(150, 59, 150, 65);

    /**
     * Subtitles of the tables
     * */
    setTableTitleStyle();
    doc.text(17, 39, 'CLIENT DETAILS');
    doc.text(17, 104, 'ARCHITECT DETAILS');
    doc.text(17, 152, 'PROPERTY SUMMARY - Primary construction materials and site conditions');

    /**
     * Content in the tables
     * */
    setTableContentStyle();
    // First table - first column
    for (var i = 0; i < 8; i++) {
        doc.text(17, firstTableContentY1, firstTableLeftContentArr[i]);
        firstTableContentY1 += 6;
    }
    // First table - second column
    doc.text(112, 51, 'Booking No:');
    doc.text(112, 63, 'State:');
    doc.text(112, 69, 'Time of Assessment:');
    // First table - third column
    doc.text(152, 63, 'Postcode:');
    // Second table - first column
    for (var i = 0; i < secondTableLeftContentArr.length; i++) {
        doc.text(17, secondTableContentY1, secondTableLeftContentArr[i]);
        secondTableContentY1 += 6;
    }
    // Third table
    for (var i = 0; i < thirdTableLeftContentArr.length; i++) {
        doc.text(17, thirdTableContentY1, thirdTableLeftContentArr[i]);
        thirdTableContentY1 += 6;
    }

    /**
     *  Fill user's input - if you want to only draw the skeletons such as table borders,
     *  comment these methods below.
     * */
    fillUserInputPageOne();
}
function fillUserInputPageOne() {

    var firstTableContentY2 = 45;
    var secondTableContentY2 = 110;
    var thirdTableContentY2 = 158;

    setExplanationStyle();

    /**
     * The first table
     * */
    // Get entries
    for (var i = 0; i < 12; i++) {
        entryPageOne.firstTable[i] = document.getElementById("" + i).value;
    }
    // Put user's input on the PDF file
    for (var i = 0; i < 8; i++) {
        doc.text(65, firstTableContentY2, entryPageOne.firstTable[i]);
        firstTableContentY2 += 6;
    }
    // Booking No.
    doc.text(135, 51, entryPageOne.firstTable[8]);
    // State
    doc.text(125, 63, entryPageOne.firstTable[9]);
    // Postcode
    doc.text(172, 63, entryPageOne.firstTable[11]);
    // Time of Assessment
    doc.text(148, 69, entryPageOne.firstTable[10]);
    /**
     * The second table
     * */
    for (var i = 0; i < 5; i++) {
        entryPageOne.secondTable[i] = document.getElementById('architectDetails').getElementsByTagName('input')[i].value;
        doc.text(70, secondTableContentY2, entryPageOne.secondTable[i]);
        secondTableContentY2 += 6;
    }
    /**
     * The third table
     * */
    for (var i = 0; i < 11; i++) {
        entryPageOne.thirdTable[i] = document.getElementById('propertySummary').getElementsByTagName('input')[i].value;
        doc.text(70, thirdTableContentY2, entryPageOne.thirdTable[i]);
        thirdTableContentY2 += 6;
    }

    console.log(entryPageOne.firstTable);
    console.log(entryPageOne.secondTable);
    console.log(entryPageOne.thirdTable);
}

/**
 * PAGE 2
 * */
function drawPageTwo() {

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'The Scope of Assessment');

    // Explanation
    setExplanationStyle();
    doc.text(15, 25, 'This Report is prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – ' +
        'and in accordance with Australian \nStandard 4349.1-2007 Assessment of Buildings Part 1: Pre-purchase ' +
        'Inspections – Residential Buildings and any other \nAustralian Standards and definitions cited in the ' +
        'Terms and Conditions. \n\n' +
        'This Report is a subjective assessment prepared by the appraising architect on a visual assessment of the condition of \n' +
        'the reasonably accessible parts of the property and on the basis of the prevailing structural, soil and weather conditions \n' +
        'at the time of the assessment and does not cover enquiries of councils or other authorities. It is not a certificate of \n' +
        'compliance for the property within the requirements of any Act, regulation, ordinance or local by-law. \n\n' +
        'Prolonged periods of wet or dry weather may cause structural changes to the property as described in the Property \n' +
        'Maintenance Guide which you can download from the link found in the body of your Report and in the Report cover letter. \n\n' +
        'This Report will not disclose defects in inaccessible areas, defects that are concealed and/or not reasonably visible, \n' +
        'defects that may be apparent in other weather conditions or defects that have not yet arisen. \n\n' +
        'This Report is not a rigorous assessment of all building elements and does not cover all maintenance items, particularly \n' +
        'those such as jamming doors, windows or catches, decorative finishes and hairline or slight cracks.  This is in \n' +
        'accordance with Category 0 and 1 of Appendix C –AS 2870-2011. \n\n' +
        'This Report is not a pest inspection. Archicentre Australia recommends that a pest inspection be carried out on all \n' +
        'properties being considered for purchase. Customers wishing to have a full pest inspection should contact Archicentre \n' +
        'Australia to arrange a separate pest inspection. Archicentre Australia’s Timber Pest Inspections are undertaken by highly \n' +
        'qualified, independent and authorised inspectors.  Archicentre Australia does not sell pest control services so you can \n' +
        'trust that you will not be recommended treatments that you do not need. \n\n' +
        'The assessment assumes that the existing use of the property will continue and the Report is prepared on that basis. As \n' +
        'such, the assessment will not assess the fitness of the property for any other intended purpose.  We advise you to verify \n' +
        'any proposed change in use with the relevant authorities. \n\n' +
        'If you are intending to purchase the property, and in consideration of the limitations of a visual assessment, as well as \n' +
        'budgeting for the anticipated cost of the recommended repairs and maintenance, Archicentre Australia recommends \n' +
        'budgeting a further 5% of the value of the property, to provide a "safety net" against unexpected costs that may arise \n' +
        'over the first five years of ownership and that this be taken into account when establishing a purchase price. The amount \n' +
        'of this safety net is a rough guide for properties generally and not specific to your property. \n\n' +
        'Where the property is a unit or apartment, associated areas may include common areas pertinent and immediately \nadjacent ' +
        'to the subject residence, for which major defects only will be noted.');
    doc.text(15, 170, '• Identification of observed building defects upon a visual assessment of the reasonably accessible parts ' +
        'of the property; \n' +
        '• Assessment of defects for significance relative to the expected condition of a well maintained property of similar age and \n' +
        '  construction type; \n' +
        '• Recommended actions for identified defects; \n' +
        '• Recommended professionals and/or trades who may be appropriate to undertake further investigation or carry out the \n' +
        '  recommended action; \n' +
        '• General and specific additional advice on maintenance matters that your architect has deemed appropriate.');
    doc.text(15, 205, '• Identification of toxic mould, or asbestos related products; \n' +
        '• Condition or operation of swimming pools, spas or their surroundings, rainwater or grey water tanks or treatment and \n' +
        '  similar facilities; \n' +
        '• Condition, adequacy or compliance of electrical, gas and plumbing systems including roof plumbing, underground pipes \n' +
        '  or drainage systems; \n' +
        '• Operation adequacy or compliance of security and communications systems, smoke detectors, building services, building \n' +
        '  automation, electrically operated doors including garage doors, plant, equipment, mechanical, gas or electrical appliances \n' +
        '  and fittings; \n' +
        '• Footings below ground, soil conditions, site factors and hazards; \n' +
        '• Compliance with legal, planning, regulatory including Building Code of Australia, sustainability or environmental matters \n' +
        '  including but not limited to the adequacy or safety of insulation, waterproof membranes and/or other installations, \n' +
        '  Bushfire Attack Level assessments; \n' +
        '• Timber, metal or other framing sizes and adequacy.');

    // Subtitles
    setTableTitleStyle();
    doc.text(15, 165, 'What is included in this Report');
    doc.text(15, 200, 'What is not included in this Report');
}

/**
 * PAGE 3
 * */
function drawPageThree() {

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'Defect Definitions');
    doc.text(15, 115, 'Assessment Access');

    // Subtitles
    setTableTitleStyle();
    doc.text(15, 25, 'Minor Defect/ Maintenance Item');
    doc.text(15, 40, 'Major Defect');
    doc.text(15, 65, 'Serious Structural Defect');

    // Explanation
    setExplanationStyle();
    doc.text(15, 30, 'Any items of repair which are common to well maintained properties of similar age or type of construction and as described \n' +
        'in the Property Maintenance Guide, including decorative features and finishes.');
    doc.text(15, 45, 'A defect of sufficient magnitude where rectification has to be carried out without undue delay to avoid: \n' +
        '   • unsafe conditions, posing a threat to life or serious injury; or, \n' +
        '   • loss of utility whereby the defect is such that the whole of the relevant part of the property can no longer serve its \n' +
        '     intended function; or,\n' +
        '   • further substantial deterioration of the property.');
    doc.text(15, 70, 'A major defect in any internal or external primary load bearing component of the building which seriously affects the \n' +
        'structural integrity of the building requiring rectification to be carried out without undue delay to avoid:\n' +
        '   • unsafe conditions, posing a threat to life or serious injury; or,\n' +
        '   • loss of utility, whereby the defect is such that the whole of the relevant part of the building can no longer serve its \n' +
        '     intended function; or,\n' +
        '   • further substantial deterioration of the property.\n' +
        'In the case of cracking, a serious structural defect denotes severe cracking as defined by Category 4, Appendix C – \nAustralian ' +
        'Standard AS 2870-2011.');
    doc.text(15, 120, 'The architect can only assess the reasonably accessible parts of the property.  It is your responsibility to ensure that any \n' +
        'inaccessible parts of the property that can be made reasonably accessible for an assessment are made so, prior to the \n' +
        'assessment.  If parts of the property have been noted as being inaccessible during the assessment, it is important that you \n' +
        'contact the architect and arrange for a second assessment when access to restricted areas has been made available. \n' +
        'Inaccessible areas cannot be assessed.\n\n' +
        'Reasonably and Safely Accessible – Accessible areas which can be accessed by a 3.6 metre ladder or those which have \nat ' +
        'least 600mm unimpeded vertical and horizontal clearance without the removal of any fixed or unfixed furniture, fittings, \n' +
        'stored items, cladding or lining materials, plants or soil.\n\n' +
        'Archicentre Australia architects are unable to access areas where there is a risk of adverse disturbance or damage to the \n' +
        'property, including the garden area.  The architect will determine the extent of accessible areas at the time of the \n' +
        'assessment.\n\n' +
        'Workplace Health and Safety access conditions apply subject to relevant State and Territory regulations. Archicentre \n' +
        'Australia authorised architects are unable to inspect areas higher than 3 metres above ground level unless secure ladder \n' +
        'access is available and fall prevention devices or barriers are present.\n\n' +
        'Reasonable Access may not be possible due to physical obstructions or conditions that may be hazardous or unsafe to the \n' +
        'architect.\n\n' +
        'Access restrictions will be noted where appropriate.');
}

/**
 * PAGE 4
 * */
function drawPageFour() {

    var firstTableBorderY = 45;
    var secondTableBorderY = 100;
    var rulesArr = [' \u2713 - No visible significant defect', ' X - Maintenance item or Minor Defect', 'XX - Major defect',
        ' U - Unknown / Inaccessible / Not tested', 'NA - Not applicable, no such item'];
    var firstTableLeftContentArr = ['Damp', 'Framing', 'Stumps / Piers', 'Cracking', 'Water Supply', 'Timber Rot',
        'Electrics', 'Roof', 'Suspected Illegal Building'];

    // Title
    setHeadTitleStyle();
    doc.text(15, 20, 'Your Property Assessment Summary');
    doc.text(15, 95, 'Evident Defect Summary');

    // Explanation
    setExplanationStyle();
    doc.text(15, 25, 'This Property Assessment summary provides you with a “snapshot” of the items the architect considers of greatest \n' +
        'significance for you when considering this property. Please refer to the Definitions and the complete Report for detailed \n' +
        'information regarding visible defects and recommended actions. Please note that this summary is not the complete \n' +
        'Report and that in the event of an apparent discrepancy the complete Report overrides the Summary information.');
    doc.text(17, 55, 'Apparent condition of the building with respect to its age:');
    doc.text(17, 67, 'Are there any Major Defects evident?');
    doc.text(17, 79, 'Are there any Serious Structural Defects evident?');

    // Subtitles
    setTableTitleStyle();
    doc.text(17, 49, 'Summary of the Condition of the Property');
    doc.text(17, 61, 'Major Defects');
    doc.text(17, 73, 'Serious Structural Defects');
    doc.text(17, 164, 'Assessment Summary');

    // Draw lines
    // Horizontal
    setLinesStyle();
    for (var i = 0; i < 7; i++) {
        doc.line(15, firstTableBorderY, 195, firstTableBorderY);
        firstTableBorderY += 6;
    }
    for (var i = 0; i < (rulesArr.length + 1); i++) {
        doc.line(100, secondTableBorderY, 195, secondTableBorderY);
        secondTableBorderY += 6;
    }
    secondTableBorderY = 100;
    for (var i = 0; i < (firstTableLeftContentArr.length + 1); i++) {
        doc.line(15, secondTableBorderY, 95, secondTableBorderY);
        secondTableBorderY += 6;
    }

    // Put content in the second table on the left
    secondTableBorderY = 104;
    setTableContentStyle();
    for (var i = 0; i < firstTableLeftContentArr.length; i++) {
        doc.text(17, secondTableBorderY, firstTableLeftContentArr[i]);
        secondTableBorderY += 6;
    }
    setExplanationStyle();
    secondTableBorderY = 104;
    for (var i = 0; i < rulesArr.length; i++) {
        doc.text(102, secondTableBorderY, rulesArr[i]);
        secondTableBorderY += 6;
    }

    console.log(document.getElementById('evidentDefectSummary').getElementsByTagName('select')[8].value);
    /**
     *  Fill user's input - if you want to only draw the skeletons such as table borders,
     *  comment these methods below.
     * */
    fillUserInputPageFour();
}
function fillUserInputPageFour() {

    var eviDefSumArr = [];
    var positionY = 104;

    setTableContentStyle();
    // Summary of the condition of the property
    if (document.getElementById('conditionOfBuilding').value != 'Other') {
        doc.text(100, 55, document.getElementById('conditionOfBuilding').value);
    } else {
        doc.text(100, 55, document.getElementById('conditionOfBuildingText').value);
    }
    // Major defects
    if (document.getElementById('majorDefects').value != 'Other') {
        doc.text(74, 67, document.getElementById('majorDefects').value);
    } else {
        doc.text(74, 67, document.getElementById('majorDefectsText').value);
    }
    // Serious structural defects
    if (document.getElementById('seriousStructuralDefects').value != 'Other') {
        doc.text(91, 79, document.getElementById('seriousStructuralDefects').value);
    } else {
        doc.text(91, 79, document.getElementById('seriousStructuralDefectsText').value);
    }

    // Evident defect summary (Extract data + put it in the table)
    setExplanationStyle();
    for (var i = 0; i < 9; i++) {
        eviDefSumArr[i] = document.getElementById('evidentDefectSummary').getElementsByTagName('select')[i].value;
        doc.text(70, positionY, eviDefSumArr[i]);
        positionY += 6;
    }

    console.log(eviDefSumArr);
}

/**
 * PAGE Property Assessment Notes - 1
 * */
function drawPagePropertyAssessmentNotes() {

    const firstTableGap = 4;
    const startPointX = 15;
    const endPointX = 195;
    const startPointY = 20;
    const firstTableTitleArr1 = ['AR', 'BC', 'BR', 'CC', 'CJ', 'CM', 'DH', 'DR', 'EL', 'EX', 'FC', 'GL', 'HM', 'HR'];
    const firstTableContentArr1 = ['Architects', 'Building Contractors', 'Bricklayers', 'Concrete Contractors', 'Carpenter & Joiners',
        'Cabinet Makers', 'Damp Houses', 'Drainers', 'Electrical Contractors', 'Excavating Contractors', 'Fencing Contractors',
        'Glass Merch/Glazier', 'Home Maint./Repair', 'House Restump/Reblock'];
    const firstTableTitleArr2 = ['IC', 'LA', 'LG', 'UP', 'PC', 'PD', 'PG', 'PL', 'PV', 'RC', 'SE', 'TL', 'TS', ''];
    const firstTableContentArr2 = ['Insulation Contractors', 'Landscape Architects', 'Landscape Gardener & Contractors', 'Underpinning Services',
        'Pest Control', 'Painter & Decorators', 'Plumbers & Gasfitters', 'Plasterers', 'Paving-Various', 'Roof Const./Repair/Clean',
        'Structural Engineers', 'Tile Layers-Wall/Floor', 'Tilers & Slaters', ''];
    const keyArr1 = ['NA - ', '   X - ', '   U - ', '   G - ', ' XX - ', '', '', '', '', '', '', '', '', '', '', '', ''];
    const keyArr2 = ['Not applicable, no such item', 'Maintenance item or Minor defect', 'Unknow/Inaccessible/Not tested',
        'No visible significant defect', 'Major defect', '', '', '', '', '', '', '', '', '', '', '', ''];

    var firstTablePositionY = 35;

    // Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Property Assessment Notes');
    doc.text(startPointX, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 15, 'Site & Garden');

    // Subtitles
    setTableTitleStyle();
    doc.text(startPointX, startPointY + 5, 'Professional and Trade Guide');

    // Explanation
    setExplanationStyle();
    doc.text(startPointX, startPointY + 10, 'Your architect may refer you to the  following professional or tradespeople:');

    // Horizontal lines
    setLinesStyle();
    firstTablePositionY = 35;
    doc.line(startPointX, firstTablePositionY, endPointX, firstTablePositionY);
    doc.line(startPointX, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2, endPointX, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2);
    // Vertical lines
    doc.line(startPointX, firstTablePositionY, startPointX, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2);
    doc.line(startPointX + 52, firstTablePositionY, startPointX + 52, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2);
    doc.line(startPointX + 117, firstTablePositionY, startPointX + 117, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2);
    doc.line(endPointX, firstTablePositionY, endPointX, firstTablePositionY + firstTableTitleArr1.length * firstTableGap + 2);

    // Titles in the table
    setTableContentStyle();
    firstTablePositionY = 35;
    firstTablePositionY += firstTableGap;
    for (var i = 0; i < firstTableTitleArr1.length; i++) {
        doc.text(startPointX + 2, firstTablePositionY, firstTableTitleArr1[i]);
        doc.text(startPointX + 55, firstTablePositionY, firstTableTitleArr2[i]);
        doc.text(startPointX + 120, firstTablePositionY, keyArr1[i]);
        firstTablePositionY += firstTableGap;
    }

    // Content in the table
    setExplanationStyle();
    firstTablePositionY = 35;
    firstTablePositionY += firstTableGap;
    for (var i = 0; i < firstTableContentArr1.length; i++) {
        doc.text(startPointX + 10, firstTablePositionY, firstTableContentArr1[i]);
        doc.text(startPointX + 63, firstTablePositionY, firstTableContentArr2[i]);
        doc.text(startPointX + 128, firstTablePositionY, keyArr2[i]);
        firstTablePositionY += firstTableGap;
    }

    // Draw Site & Garden first table
    doc.autoTable(getSiteGardenColumns(), getSiteGardenEntries(), {
        theme: 'grid',
        margin: {top: 100},
        showHeader: 'never',
        columnStyles: {
            1: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
        }
    });

    console.log('How many rows in the first table (Site & Garden Page): ' + countRows1stTableSiteGarden());
}

/**
 * PAGE Property Assessment Notes - 2
 * */
function drawPagePropertyAssessmentNotesCont() {

    // Draw Site & Garden second table
    doc.autoTable(getSiteGarden2ndTableCols(), getSiteGardenEntries2ndTable(), {
        theme: 'grid',
        margin: {top: 20, bottom: 50},
        showHeader: 'never',
        columnStyles: {
            leftCol: {fillColor: [252, 91, 93], textColor: 255, fontStyle: 'bold'},
            rightCol: {columnWidth: 'auto'}
        },
        styles: {
            overflow: 'linebreak',
            columnWidth: 'wrap',
            valign: 'middle'
        }
    });
}

/**
 * PAGE Property Exterior
 * */
function drawPagePropertyExterior() {

    const startPointX = 15;
    const startPointY = 20;
    const keysGap = 4;

    // Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Property Exterior');

    // Subtitles
    setTableTitleStyle();
    doc.text(startPointX, startPointY + 5, 'Key');

    // Draw keys
    setExplanationStyle();
    doc.text(startPointX + 2, startPointY + 10, 'NA - Not applicable, no such item');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 1, '   X - Maintenance item or Minor defect');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 2, '   U - Unknow/Inaccessible/Not tested');
    doc.text(startPointX + 80, startPointY + 10, '   G - No visible significant defect');
    doc.text(startPointX + 80, startPointY + 10 + keysGap * 1, ' XX - Major defect');

    // Draw first table
    doc.autoTable(getExterior1stTableCols(), getExterior1stTableRows(), {
        theme: 'grid',
        margin: {top: 45, bottom: 50},
        showHeader: 'never',
        columnStyles: {
            1: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'},
            2: {fontStyle: 'bold', halign: 'right'},
            4: {fontStyle: 'bold', halign: 'right'},
            6: {fontStyle: 'bold', halign: 'right'},
            8: {fontStyle: 'bold', halign: 'right'}
        },
        styles: {
            overflow: 'linebreak',
            columnWidth: 'wrap',
            valign: 'middle',
            halign: 'center',
            fontSize: 7
        }
    });
}

/**
 * PAGE Living Area
 * */
function drawPageLivingArea() {

    const startPointX = 15;
    const endPointX = 195;
    const startPointY = 20;
    const keysGap = 4;

    // Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Property Interior - Living Area');

    // Subtitles
    setTableTitleStyle();
    doc.text(startPointX, startPointY + 5, 'Key');

    // Draw keys
    setExplanationStyle();
    doc.text(startPointX + 2, startPointY + 10, 'NA - Not applicable, no such item');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 1, '   X - Maintenance item or Minor defect');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 2, '   U - Unknow/Inaccessible/Not tested');
    doc.text(startPointX + 80, startPointY + 10, '   G - No visible significant defect');
    doc.text(startPointX + 80, startPointY + 10 + keysGap * 1, ' XX - Major defect');
}

/**
 * PAGE Bedroom Area
 * */
function drawPageBedroomArea() {

    const startPointX = 15;
    const endPointX = 195;
    const startPointY = 20;
    const keysGap = 4;

    // Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Property Interior - Bedroom Area');

    // Subtitles
    setTableTitleStyle();
    doc.text(startPointX, startPointY + 5, 'Key');

    // Draw keys
    setExplanationStyle();
    doc.text(startPointX + 2, startPointY + 10, 'NA - Not applicable, no such item');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 1, '   X - Maintenance item or Minor defect');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 2, '   U - Unknow/Inaccessible/Not tested');
    doc.text(startPointX + 80, startPointY + 10, '   G - No visible significant defect');
    doc.text(startPointX + 80, startPointY + 10 + keysGap * 1, ' XX - Major defect');
}

/**
 * PAGE Wet Area
 * */
function drawPageWetArea() {

    const startPointX = 15;
    const endPointX = 195;
    const startPointY = 20;
    const keysGap = 4;

    // Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Property Interior - Service (wet) Area');

    // Subtitles
    setTableTitleStyle();
    doc.text(startPointX, startPointY + 5, 'Key');

    // Draw keys
    setExplanationStyle();
    doc.text(startPointX + 2, startPointY + 10, 'NA - Not applicable, no such item');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 1, '   X - Maintenance item or Minor defect');
    doc.text(startPointX + 2, startPointY + 10 + keysGap * 2, '   U - Unknow/Inaccessible/Not tested');
    doc.text(startPointX + 80, startPointY + 10, '   G - No visible significant defect');
    doc.text(startPointX + 80, startPointY + 10 + keysGap * 1, ' XX - Major defect');
}

/**
 * PAGE Attachments
 * */
function drawPageAttachments() {

    const startPointX = 15;
    const endPointX = 195;
    const startPointY = 20;
    const lineGap = 6;
    const contentArr = ['Property Maintenance Guide', 'Health & Safety Warning', 'Termites & Borers', 'Cracking in Masonry',
        'Roofing & Guttering', 'Re-stumping', 'Treatment of Dampness', 'Home Safety Checklist', 'Cost Guide'];

    var startPointY2 = startPointY + 23;
    var firstTablePointX;

    // Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Attachments');

    // Explanation
    setExplanationStyle();
    doc.text(startPointX, startPointY + 5, 'The following selected attachments are an important part of this Report. These can be downloaded from the Archicentre \n' +
        'Australia Supplementary Documents page www.archicentreaustralia.com.au/report_downloads/ or by referring to the \n' +
        'Report cover email for downloading instructions. If you have difficulty downloading the following ticked attachments, \n please contact Archicentre Australia on 1300 13 45 13 immediately.');

    // Horizontal lines
    setLinesStyle();
    for (var i = 0; i < 5; i++) {
        doc.line(startPointX, startPointY2, endPointX, startPointY2);
        startPointY2 += lineGap;
    }
    // Vertical lines
    startPointY2 = startPointY + 23;
    doc.line(startPointX, startPointY2, startPointX, startPointY2 + lineGap * 4);
    doc.line(endPointX, startPointY2, endPointX, startPointY2 + lineGap * 4);

    // Titles in the table
    setTableTitleStyle();
    firstTablePointX = startPointX + 2;
    for (var i = 0; i < 3; i++) {
        doc.text(firstTablePointX, startPointY2 + 4, 'ITEM');
        firstTablePointX += 60;
    }
}

/**
 * PAGE Terms & Conditions
 * */
function termsAndConditions() {

    const startPointX = 15;
    const startPointY = 20;

    var columns = ["", ""];
    var rows = [
        ['Report has been prepared by Archicentre Australia – a division of ArchiAdvisory Pty Ltd – and the named architect ' +
        'and is supplied to you (the named customer) on the basis of and subject to the Scope of Assessment and the Terms and Conditions ' +
        'of the Contract and the Assessment and Archicentre Australia accepts no responsibility to other persons relying on the report.\n\n' +
        'This Report has been prepared in accordance with Australian Standard 4349.1-2007 Assessment of Buildings Part 1: Pre-purchase Inspections' +
        ' – Residential Buildings and to any other Australian Standards and definitions cited in the Terms and Conditions.\n\nPlease note that having provided ' +
        'to you an opportunity to read or hear the Scope of Assessment and the Terms and Conditions following upon you making a booking for the Property ' +
        'Assessment, the architect has proceeded to conduct the assessment of the property and Archicentre Australia has proceeded to supply this Report ' +
        'on the basis that you have accepted the Scope of Assessment and the Terms and Conditions and/or are deemed to have done so ' +
        'upon the architect arriving at the property.\n\nThe Report is to be read in conjunction with all other Archicentre Australia Reports issued ' +
        'concurrently for the property.\n\nThe Scope of Assessment and the Terms and Conditions take precedence over any oral or written representations ' +
        'by Archicentre Australia, to the extent of any inconsistency.\n\n(1)   After making the booking, the customer is deemed to have accepted these Terms and ' +
        'Conditions and Scope of Assessment upon the architect arriving on site.\n\n(2)   The Report is not a guarantee but is an opinion of the condition of the ' +
        'assessed property relative to the average condition of well-maintained similar properties of a similar age.\n\n(3)   Archicentre Australia accepts no ' +
        'liability with respect to work carried out by other trades, consultants or practitioners referred by Archicentre Australia. It is your responsibility ' +
        'to make appropriate contractual arrangements with such person.\n\n(4)   The Report is not a certificate of compliance for the property within the ' +
        'requirements of any Act, regulation, ordinance or local by-law.\n\n(5)   Archicentre Australia does not accept responsibility for services other than ' +
        'those provided in this Report.\n\n' + '(6)    Archicentre Australia’s liability shall be limited to the provision of a new assessment and report or the payment of ' +
        'the cost of a new assessment and report, at the election of Archicentre Australia.',


            '(7)   The assessment assumes that the existing use of the ' +
            'building will continue. The assessment will not assess the fitness of the building for any intended purpose. Any proposed ' +
            'change in use should be verified with the relevant authorities.\n\n(8)   The Property Maintenance Guide constitutes a vital part of the architect’s ' +
            'recommendations and failure to observe either the recommendations or the Property Maintenance Guide could lead to premature deterioration of ' +
            'the property.\n\n(9)   The Health and Safety Warnings constitutes a vital part of Archicentre Australia’s recommendation to you. Failure ' +
            'to observe the provisions of the warning sheet could jeopardise the safety of the occupants.\n\n(10)   The Report and its appendices and attachments, as ' +
            'issued by Archicentre Australia, takes precedence over any oral advice or draft reports, to the extent of any inconsistencies, ' +
            'and only the Report and its appendices and attachments, which form a vital part of the architect’s recommendations, ' +
            'shall be relied upon by you.\n\n(11)   If you are dissatisfied with the Report you agree to promptly give Archicentre Australia written notice ' +
            'specifying the matters about which you are dissatisfied and allow Archicentre Australia to attempt to resolve the matters with you within 28 days ' +
            'of receipt by Archicentre Australia of such written notice before taking any remedial action or incurring any costs.\n\n(12)   Reference to Archicentre ' +
            'Australia in this Report and any other documentation includes, where the context permits, its agents and representatives authorised to act on ' +
            'its behalf.\n\n(13)   These Terms and Conditions are in addition to, and do not replace or remove, any rights or implied guarantees conferred ' +
            'by the Competition and Consumer Act 2010 or any other consumer protection legislation']
    ];

    //Title
    setHeadTitleStyle();
    doc.text(startPointX, startPointY, 'Terms & Conditions');

    doc.autoTable(columns, rows, {
        theme: 'plain',
        margin: {
            top: 13
        },
        styles: {
            overflow: 'linebreak',
            columnWidth: 'auto',
            cellPadding: {top: 3, right: 8, bottom: 0, left: 2}
        }
    });
}

/*
 |--------------------------------------------------------------------------
 | Below is some helper functions for Site & Garden
 |--------------------------------------------------------------------------
 */

/**
 * Extract data from Site & Garden section (1st table)
 * */
function getSiteGardenEntries() {

    var firstSection = [], secondSection = [], thirdSection = [], fourthSection = [], fifthSection = [], sixthSection = [],
        sectionSeven = [], sectionEight = [], sectionNine = [], sectionTen = [], sectionEleven = [], sectionTwelve = [];
    var sectionsOneArr = [firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection];
    var sectionsTwoArr = [sectionSeven, sectionEight, sectionNine, sectionTen, sectionEleven, sectionTwelve];
    var allSections = [firstSection, secondSection, thirdSection, fourthSection, fifthSection, sixthSection,
        sectionSeven, sectionEight, sectionNine, sectionTen, sectionEleven, sectionTwelve];
    var data = [];

    // Extract data from the web page
    for (var i = 0; i < 6; i++) {
        firstSection[i] = document.getElementById(i + 200 + '').value;
        secondSection[i] = document.getElementById(i + 210 + '').value;
        thirdSection[i] = document.getElementById(i + 220 + '').value;
        fourthSection[i] = document.getElementById(i + 230 + '').value;
        fifthSection[i] = document.getElementById(i + 240 + '').value;
        sixthSection[i] = document.getElementById(i + 250 + '').value;
        sectionSeven[i] = document.getElementById(i + 260 + '').value;
        sectionEight[i] = document.getElementById(i + 270 + '').value;
        sectionNine[i] = document.getElementById(i + 280 + '').value;
        sectionTen[i] = document.getElementById(i + 290 + '').value;
        sectionEleven[i] = document.getElementById(i + 300 + '').value;
        sectionTwelve[i] = document.getElementById(i + 310 + '').value;
    }

    // Add new attributes to the array and validate if the [other] is empty
    for (var i = 0; i < sectionsOneArr.length; i++) {
        sectionsOneArr[i] = validateSiteGardenEntries1(sectionsOneArr[i]);
    }
    for (var i = 0; i < sectionsTwoArr.length; i++) {
        sectionsTwoArr[i] = validateSiteGardenEntries2(sectionsTwoArr[i]);
    }

    // Prepare the rows
    for (var i = 0; i < allSections.length; i++) {
        if (allSections[i][0] != '') {
            data.push({
                1: allSections[i][0],
                2: allSections[i][1],
                3: allSections[i][2],
                4: allSections[i][3],
                5: allSections[i][4],
                6: allSections[i][5],
                7: allSections[i][6],
                8: allSections[i][7],
                9: allSections[i][8]
            });
        }
    }

    return data;
}

/**
 * Extract data from Site & Garden section (2nd table)
 * */
function getSiteGardenEntries2ndTable() {

    const leftColTitle = ['Access\nNotes', 'Access\nLimitation', 'Major and\nSerious\nStructural\nDefects\nFound',
        'Professional\nand Trade\nRecommendations', 'Maintenance\nItems and\nMinor Defects\nFound', 'Professional\nand Trade\nRecommendations', 'General Notes'];

    var data = [];
    var rightColContent;
    var accessNotes, accessLimitation, MajFound, siteGardenLbl1, MainFound, siteGardenLbl2, generalNotes;

    // Extract data from web page (left part)
    if (document.getElementById('SiteGardenAccessNotes').value.trim() != '') {accessNotes = document.getElementById('SiteGardenAccessNotes').value.trim();} else {accessNotes = 'NA';}
    if (document.getElementById('MajFound').value.trim() != '') {MajFound = document.getElementById('MajFound').value.trim();} else {MajFound = 'NA';}
    if (document.getElementById('MainFound').value.trim() != '') {MainFound = document.getElementById('MainFound').value.trim();} else {MainFound = 'NA';}
    if (document.getElementById('generalNotes').value.trim() != '') {generalNotes = document.getElementById('generalNotes').value.trim();} else {generalNotes = 'NA';}

    // Extract data from web page (right part)
    accessLimitation = document.getElementById('SiteGardenAccessLimitation').value;
    if (document.getElementById('siteGardenLbl1').textContent.trim() != 'Choices will be displayed here...') {
        siteGardenLbl1 = document.getElementById('siteGardenLbl1').textContent.trim();
    } else {
        siteGardenLbl1 = 'NA';
    }
    if (document.getElementById('siteGardenLbl2').textContent.trim() != 'Choices will be displayed here...') {
        siteGardenLbl2 = document.getElementById('siteGardenLbl2').textContent.trim();
    } else {
        siteGardenLbl2 = 'NA';
    }

    // Prepare the right columns in the PDF
    rightColContent = [accessNotes, accessLimitation, MajFound, siteGardenLbl1, MainFound, siteGardenLbl2, generalNotes];

    // Prepare the rows
    for (var i = 0; i < leftColTitle.length; i++) {
        data.push({
            leftCol: leftColTitle[i],
            rightCol: rightColContent[i]
        });
    }

    return data;
}

/**
 * Count how many rows are there in the first table in Site & Garden Page
 * */
function countRows1stTableSiteGarden() {

    var count = 0;
    for (var i = 200; i < 311; i += 10) {
        if (document.getElementById(i + '').value != '') {
            count++;
        }
    }

    return count;
}

/**
 * Check if the first table in Site & Garden page has any rows
 * */
function if1stTableExistSiteGarden() {
    if (countRows1stTableSiteGarden() == 0) {
        return 0;
    } else {
        return 5;
    }
}

/**
 * Get Site & Garden columns in first table
 * */
function getSiteGardenColumns() {
    return [
        {title: "Site & Garden", dataKey: "1"},
        {title: "Option", dataKey: "2"},
        {title: "Result", dataKey: "3"},
        {title: "Option", dataKey: "4"},
        {title: "Result", dataKey: "5"},
        {title: "Option", dataKey: "6"},
        {title: "Result", dataKey: "7"},
        {title: "Option", dataKey: "8"},
        {title: "Result", dataKey: "9"}
    ];
}

/**
 * Get Site & Garden columns in second table
 * */
function getSiteGarden2ndTableCols() {
    return [
        {title: "Option", dataKey: "leftCol"},
        {title: "Result", dataKey: "rightCol"}
    ];
}

/**
 * Add new attributes and validate if the [Other input] is empty
 * */
function validateSiteGardenEntries1(arr) {
    arr.splice(1, 0, 'Structure/Walls');
    arr.splice(3, 0, 'Roof/Ceiling');
    arr.splice(5, 0, 'Floor/Finish');

    if (arr[arr.length - 2] == '') {
        arr[arr.length - 2] = 'Other';
        arr[arr.length - 1] = '-';
    }

    return arr;
}

/**
 * Add new attributes and validate if the [Other input] is empty
 * */
function validateSiteGardenEntries2(arr) {
    arr.splice(1, 0, 'Fences/Rating');
    arr.splice(3, 0, 'Paving');
    arr.splice(5, 0, 'Surface Drainage');

    if (arr[arr.length - 2] == '') {
        arr[arr.length - 2] = 'Other';
        arr[arr.length - 1] = '-';
    }

    return arr;
}

/*
 |--------------------------------------------------------------------------
 | Below is some helper functions for Property Exterior
 |--------------------------------------------------------------------------
 */

/**
 * Get Property Exterior columns in first table
 * */
function getExterior1stTableCols() {
    return [
        {title: "111", dataKey: "1"},
        {title: "222", dataKey: "2"},
        {title: "333", dataKey: "3"},
        {title: "444", dataKey: "4"},
        {title: "555", dataKey: "5"},
        {title: "666", dataKey: "6"},
        {title: "777", dataKey: "7"},
        {title: "888", dataKey: "8"},
        {title: "999", dataKey: "9"}
    ];
}

/**
 * Get Property Exterior rows in first table
 * */
function getExterior1stTableRows() {

    var section1 = [], section2 = [], section3 = [], section4 = [], section5 = [], section6 = [], section7 = [],
        section8 = [], section9 = [], section10 = [], section11 = [], section12 = [], section13 = [],
        section14 = [], section15 = [], section16 = [], section17 = [];
    var data = [];

    // Extract data
    for (var i = 0; i < 8; i++) {section1[i] = document.getElementById(i + 330 + '').value;}
    for (var i = 0; i < 5; i++) {section2[i] = document.getElementById(i + 340 + '').value;}
    for (var i = 0; i < 6; i++) {
        section3[i] = document.getElementById(i + 350 + '').value;
        section4[i] = document.getElementById(i + 360 + '').value;
        section5[i] = document.getElementById(i + 370 + '').value;
        section6[i] = document.getElementById(i + 380 + '').value;
        section7[i] = document.getElementById(i + 390 + '').value;
        section8[i] = document.getElementById(i + 400 + '').value;
        section9[i] = document.getElementById(i + 410 + '').value;
        section10[i] = document.getElementById(i + 420 + '').value;
        section11[i] = document.getElementById(i + 430 + '').value;
        section16[i] = document.getElementById(i + 500 + '').value;
        //section17[i] = document.getElementById(i + 520 + '').value;
    }
    for (var i = 0; i < 7; i++) {
        section12[i] = document.getElementById(i + 440 + '').value;
        section13[i] = document.getElementById(i + 450 + '').value;
        section14[i] = document.getElementById(i + 460 + '').value;
        section15[i] = document.getElementById(i + 470 + '').value;
    }

    // Prepare rows
    data.push({1: 'Roofing', 2: 'Covering', 3: section1[0], 4: 'Valleys', 5: section1[1], 6: 'Ridges', 7: section1[2], 8: 'Overhanging tree', 9: section1[3]});
    data.push({1: '', 2: 'Chimney/Vents/Flues', 3: section1[4], 4: 'Flashing', 5: section1[5], 6: 'Box Gutters', 7: section1[6], 8: 'Skylights', 9: section1[7]});

    data.push({1: 'Roof Space', 2: 'Frame', 3: section2[0], 4: 'Insulation', 5: section2[1], 6: 'Services', 7: section2[2], 8: 'Lining/Sarking', 9: section2[3]});
    data.push({1: '', 2: 'Underside of Roof', 3: section2[4], 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''});

    data.push({1: 'Sub-Floor', 2: 'Stumps/Piers', 3: section3[0], 4: 'Walls', 5: section3[1], 6: 'Services', 7: section3[2], 8: '', 9: ''});
    data.push({1: '', 2: 'Ventilation/Damp', 3: section3[3], 4: 'Framing', 5: section3[4], 6: 'Underside of Floor', 7: section3[5], 8: '', 9: ''});

    data.push({1: 'Wall (Front)', 2: 'Structure/Finish', 3: section4[0], 4: 'Eaves', 5: section4[1], 6: 'Gutter Downpipe', 7: section4[2], 8: '', 9: ''});
    data.push({1: '', 2: 'Sub-Floor Vents', 3: section4[3], 4: 'Doors/Windows', 5: section4[4], 6: 'Balcony/Deck', 7: section4[5], 8: '', 9: ''});

    data.push({1: 'Wall (Rear)', 2: 'Structure/Finish', 3: section5[0], 4: 'Eaves', 5: section5[1], 6: 'Gutter Downpipe', 7: section5[2], 8: '', 9: ''});
    data.push({1: '', 2: 'Sub-Floor Vents', 3: section5[3], 4: 'Doors/Windows', 5: section5[4], 6: 'Balcony/Deck', 7: section5[5], 8: '', 9: ''});

    data.push({1: 'Wall (Rear)', 2: 'Structure/Finish', 3: section6[0], 4: 'Eaves', 5: section6[1], 6: 'Gutter Downpipe', 7: section6[2], 8: '', 9: ''});
    data.push({1: '', 2: 'Sub-Floor Vents', 3: section6[3], 4: 'Doors/Windows', 5: section6[4], 6: 'Balcony/Deck', 7: section6[5], 8: '', 9: ''});

    data.push({1: 'Wall (Rear)', 2: 'Structure/Finish', 3: section7[0], 4: 'Eaves', 5: section7[1], 6: 'Gutter Downpipe', 7: section7[2], 8: '', 9: ''});
    data.push({1: '', 2: 'Sub-Floor Vents', 3: section7[3], 4: 'Doors/Windows', 5: section7[4], 6: 'Balcony/Deck', 7: section7[5], 8: '', 9: ''});

    if (document.getElementById('ExteriorWall1').value != '') {
        data.push({1: document.getElementById('ExteriorWall1').value, 2: 'Structure/Finish', 3: section8[0], 4: 'Eaves', 5: section8[1], 6: 'Gutter Downpipe', 7: section8[2], 8: '', 9: ''});
        data.push({1: '', 2: 'Sub-Floor Vents', 3: section8[3], 4: 'Doors/Windows', 5: section8[4], 6: 'Balcony/Deck', 7: section8[5], 8: '', 9: ''});
    }

    if (document.getElementById('ExteriorWall2').value != '') {
        data.push({1: document.getElementById('ExteriorWall2').value, 2: 'Structure/Finish', 3: section9[0], 4: 'Eaves', 5: section9[1], 6: 'Gutter Downpipe', 7: section9[2], 8: '', 9: ''});
        data.push({1: '', 2: 'Sub-Floor Vents', 3: section9[3], 4: 'Doors/Windows', 5: section9[4], 6: 'Balcony/Deck', 7: section9[5], 8: '', 9: ''});
    }

    if (document.getElementById('ExteriorWall3').value != '') {
        data.push({1: document.getElementById('ExteriorWall3').value, 2: 'Structure/Finish', 3: section10[0], 4: 'Eaves', 5: section10[1], 6: 'Gutter Downpipe', 7: section10[2], 8: '', 9: ''});
        data.push({1: '', 2: 'Sub-Floor Vents', 3: section10[3], 4: 'Doors/Windows', 5: section10[4], 6: 'Balcony/Deck', 7: section10[5], 8: '', 9: ''});
    }

    if (document.getElementById('ExteriorWall4').value != '') {
        data.push({1: document.getElementById('ExteriorWall4').value, 2: 'Structure/Finish', 3: section11[0], 4: 'Eaves', 5: section11[1], 6: 'Gutter Downpipe', 7: section11[2], 8: '', 9: ''});
        data.push({1: '', 2: 'Sub-Floor Vents', 3: section11[3], 4: 'Doors/Windows', 5: section11[4], 6: 'Balcony/Deck', 7: section11[5], 8: '', 9: ''});
    }

    if (document.getElementById('Verandahs1').value != '') {
        data.push({1: document.getElementById('Verandahs1').value, 2: 'Steps', 3: section12[0], 4: 'Walls', 5: section12[1], 6: 'Roof/Ceiling', 7: section12[2], 8: 'Doors/Windows', 9: section12[3]});
        data.push({1: '', 2: 'Floor Structure', 3: section12[4], 4: 'Sub-Floor Vents', 5: section12[5], 6: 'Posts/Balustrade', 7: section12[6], 8: '', 9: ''});
    }

    if (document.getElementById('Verandahs2').value != '') {
        data.push({1: document.getElementById('Verandahs2').value, 2: 'Steps', 3: section13[0], 4: 'Walls', 5: section13[1], 6: 'Roof/Ceiling', 7: section13[2], 8: 'Doors/Windows', 9: section13[3]});
        data.push({1: '', 2: 'Floor Structure', 3: section13[4], 4: 'Sub-Floor Vents', 5: section13[5], 6: 'Posts/Balustrade', 7: section13[6], 8: '', 9: ''});
    }

    if (document.getElementById('Verandahs3').value != '') {
        data.push({1: document.getElementById('Verandahs3').value, 2: 'Steps', 3: section14[0], 4: 'Walls', 5: section14[1], 6: 'Roof/Ceiling', 7: section14[2], 8: 'Doors/Windows', 9: section14[3]});
        data.push({1: '', 2: 'Floor Structure', 3: section14[4], 4: 'Sub-Floor Vents', 5: section14[5], 6: 'Posts/Balustrade', 7: section14[6], 8: '', 9: ''});
    }

    if (document.getElementById('Verandahs4').value != '') {
        data.push({1: document.getElementById('Verandahs4').value, 2: 'Steps', 3: section15[0], 4: 'Walls', 5: section15[1], 6: 'Roof/Ceiling', 7: section15[2], 8: 'Doors/Windows', 9: section15[3]});
        data.push({1: '', 2: 'Floor Structure', 3: section15[4], 4: 'Sub-Floor Vents', 5: section15[5], 6: 'Posts/Balustrade', 7: section15[6], 8: '', 9: ''});
    }

    if (document.getElementById('ExteriorOther1').value != '') {
        data.push({1: document.getElementById('ExteriorOther1').value, 2: section16[0], 3: section16[1], 4: section16[2], 5: section16[3], 6: section16[4], 7: section7[5], 8: '', 9: ''});
        data.push({1: '', 2: section16[6], 3: section16[7], 4: section16[8], 5: section16[9], 6: section16[10], 7: section16[11], 8: '', 9: ''});
    }


    return data;
}
