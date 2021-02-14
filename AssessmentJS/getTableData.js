/*
 get the site and garden - Garage Data
 Fafa
 */
function getGarage() {
    var data = [];
    var tableBody = {};

    for (var i = 200; i < 260; i = i + 10) {

        var a;
        var b;
        var name = document.getElementById(i + '').value;
        if (name.trim() != "") {
            var structure = document.getElementById(i + 1 + '').value;
            var structureCheck = checkTick(structure);
            var roof = document.getElementById(i + 2 + '').value;
            var roofCheck = checkTick(roof);
            var floor = document.getElementById(i + 3 + '').value;
            var floorCheck = checkTick(floor);

            var other1Name = document.getElementById(i + 4 + '').value;
            var other1 = document.getElementById(i + 5 + '').value;
            var other1Check = checkTick(other1);
            var other1Check = checkOtherInput(other1Name, other1Check);

            var other2Name = document.getElementById(i + 6 + '').value;
            var other2 = document.getElementById(i + 7 + '').value;
            var other2Check = checkTick(other2);
            var other2Check = checkOtherInput(other2Name, other2Check);

            var other3Name = document.getElementById(i + 8 + '').value;
            var other3 = document.getElementById(i + 9 + '').value;
            var other3Check = checkTick(other3);
            var other3Check = checkOtherInput(other3Name, other3Check);

            if (other1Name.trim() != "")
            {
                a = [{
                    rowSpan: 2,
                    text: name,
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: 'Structure/Walls',
                    style: 'tableText'
                }, {
                    text: structureCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Roof/Ceiling',
                    style: 'tableText'
                }, {
                    text: roofCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Floor/Finish',
                    style: 'tableText'
                }, {
                    text: floorCheck,
                    noWrap: true,
                    style: 'tableText'
                }];

                b = ['', {
                    text: other1Name,
                    style: 'tableText'
                }, {
                    text: other1Check,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other2Name,
                    style: 'tableText'
                }, {
                    text: other2Check,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other3Name,
                    style: 'tableText'
                }, {
                    text: other3Check,
                    noWrap: true,
                    style: 'tableText'
                }];
                data.push(a);
                data.push(b);
            }
            else
            {
                a = [{
                    text: name,
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: 'Structure/Walls',
                    style: 'tableText'
                }, {
                    text: structureCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Roof/Ceiling',
                    style: 'tableText'
                }, {
                    text: roofCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Floor/Finish',
                    style: 'tableText'
                }, {
                    text: floorCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
                data.push(a);
            }


        }
    }
    if (checkInput('200') == false && checkInput('210') == false && checkInput('220') == false
        && checkInput('230') == false && checkInput('240') == false && checkInput('250') == false) {
        tableBody = {text: ''};
    } else {
        tableBody = {
            table: {
                widths: [73, 100, '*', 100, '*', 100, '*'],
                headerRows: 0,
                body: data
            }
        };
    }
    if (document.getElementById('200').value.trim() != "") {
    }
    return tableBody;
}

/*
 get the site and garden data - Boundary
 Fafa
 */

function getBoundary() {

    var data = [];
    var tableBody = {};

    for (var i = 260; i < 320; i = i + 10) {
        //console.log(i);
        //console.log(document.getElementById(i).value);
        var name = document.getElementById(i + '').value;
        if (name.trim() != "") {
            var fences = document.getElementById(i + 1 + '').value;
            var fencesCheck = checkTick(fences);
            var paving = document.getElementById(i + 2 + '').value;
            var pavingCheck = checkTick(paving);
            var surface = document.getElementById(i + 3 + '').value;
            var surfaceCheck = checkTick(surface);

            var other1Name = document.getElementById(i + 4 + '').value;
            var other1 = document.getElementById(i + 5 + '').value;
            var other1Check = checkTick(other1);
            var other1Check = checkOtherInput(other1Name, other1Check);

            var other2Name = document.getElementById(i + 6 + '').value;
            var other2 = document.getElementById(i + 7 + '').value;
            var other2Check = checkTick(other2);
            var other2Check = checkOtherInput(other2Name, other2Check);

            var other3Name = document.getElementById(i + 8 + '').value;
            var other3 = document.getElementById(i + 9 + '').value;
            var other3Check = checkTick(other3);
            var other3Check = checkOtherInput(other3Name, other3Check);

            if (other1Name.trim() != "")
            {
                if (checkInput('200') == true || checkInput('210') == true || checkInput('220') == true ||
                    checkInput('230') == true || checkInput('240') == true || checkInput('250') == true) {
                    a = [
                        {
                            border: [true, false, true, true],
                            rowSpan: 2,
                            text: name,
                            style: 'tableBoldTextAlignLeft'
                        },
                        {
                            border: [true, false, true, true],
                            text: 'Fences/Retaining',
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: fencesCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: 'Paving',
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: pavingCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: 'Surface Drainage',
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: surfaceCheck,
                            noWrap: true,
                            style: 'tableText'
                        }
                    ];
                }
                else {
                    a = [
                        {
                            rowSpan: 2,
                            text: name,
                            style: 'tableBoldTextAlignLeft'
                        },
                        {
                            text: 'Fences/Retaining',
                            style: 'tableText'
                        },
                        {
                            text: fencesCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            text: 'Paving',
                            style: 'tableText'
                        },
                        {
                            text: pavingCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            text: 'Surface Drainage',
                            style: 'tableText'
                        },
                        {
                            text: surfaceCheck,
                            noWrap: true,
                            style: 'tableText'
                        }
                    ];
                }


                b = [
                    '',
                    {
                        text: other1Name,
                        style: 'tableText'
                    },
                    {
                        text: other1Check,
                        noWrap: true,
                        style: 'tableText'
                    },
                    {
                        text: other2Name,
                        style: 'tableText'
                    },
                    {
                        text: other2Check,
                        noWrap: true,
                        style: 'tableText'
                    },
                    {
                        text: other3Name,
                        style: 'tableText'
                    },
                    {
                        text: other3Check,
                        noWrap: true,
                        style: 'tableText'
                    }
                ];
                data.push(a);
                data.push(b);
            }
            else
            {
                if (checkInput('200') == true || checkInput('210') == true || checkInput('220') == true ||
                    checkInput('230') == true || checkInput('240') == true || checkInput('250') == true) {
                    a = [
                        {
                            border: [true, false, true, true],
                            text: name,
                            style: 'tableBoldTextAlignLeft'
                        },
                        {
                            border: [true, false, true, true],
                            text: 'Fences/Retaining',
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: fencesCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: 'Paving',
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: pavingCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: 'Surface Drainage',
                            style: 'tableText'
                        },
                        {
                            border: [true, false, true, true],
                            text: surfaceCheck,
                            noWrap: true,
                            style: 'tableText'
                        }
                    ];
                }
                else {
                    a = [
                        {
                            text: name,
                            style: 'tableBoldTextAlignLeft'
                        },
                        {
                            text: 'Fences/Retaining',
                            style: 'tableText'
                        },
                        {
                            text: fencesCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            text: 'Paving',
                            style: 'tableText'
                        },
                        {
                            text: pavingCheck,
                            noWrap: true,
                            style: 'tableText'
                        },
                        {
                            text: 'Surface Drainage',
                            style: 'tableText'
                        },
                        {
                            text: surfaceCheck,
                            noWrap: true,
                            style: 'tableText'
                        }
                    ];
                }



                data.push(a);

            }


        }

    }

    if (checkInput('260') == false && checkInput('270') == false && checkInput('280') == false
        && checkInput('290') == false && checkInput('300') == false && checkInput('310') == false) {
        tableBody = {
            text: ''
        };
    }
    else {
        tableBody = {
            table: {
                widths: [73, 100, '*', 100, '*', 100, '*'],
                headerRows: 0,
                body: data
            }
        };
    }
    return tableBody;
}

/*
 get the Assessment Report - Property Exterior - Roof
 Fafa
 */

function getRoof() {
    var body = {};
    if (checkInput(2000) == true) {
        var roofName = document.getElementById('2000').value;
        var covering = document.getElementById('330').value;
        var valleys = document.getElementById('331').value;
        var ridges = document.getElementById('332').value;
        var overhangingTrees = document.getElementById('333').value;
        var chimney = document.getElementById('334').value;
        var flashing = document.getElementById('335').value;
        var boxGutters = document.getElementById('336').value;
        var skylights = document.getElementById('337').value;
        var other1Name = document.getElementById('338').value;
        var other1 = document.getElementById('339').value;
        var other2Name = document.getElementById('339a').value;
        var other2 = document.getElementById('339b').value;
        var other3Name = document.getElementById('339c').value;
        var other3 = document.getElementById('339d').value;
        var other4Name = document.getElementById('339e').value;
        var other4 = document.getElementById('339f').value;

        //check the result whether is a tick
        var coveringCheck = checkTick(covering);
        var valleysCheck = checkTick(valleys);
        var ridgesCheck = checkTick(ridges);
        var tressCheck = checkTick(overhangingTrees);
        var chimneyCheck = checkTick(chimney);
        var flashingCheck = checkTick(flashing);
        var boxGuttersCheck = checkTick(boxGutters);
        var skylightsCheck = checkTick(skylights);
        var other1Check = checkTick(other1);
        var other2Check = checkTick(other2);
        var other3Check = checkTick(other3);
        var other4Check = checkTick(other4);

        //check whether the other filed has been entered value
        other1Check = checkOtherInput(other1Name, other1Check);
        other2Check = checkOtherInput(other2Name, other2Check);
        other3Check = checkOtherInput(other3Name, other3Check);
        other4Check = checkOtherInput(other4Name, other4Check);

        if (other1Name.trim() != "")
        {
            body = {
                table: {
                    widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                    body: [
                        [
                        {
                            text: roofName,
                            alignment: 'center',
                            style: 'tableBoldTextAlignLeft',
                            rowSpan: 3
                        }, {
                            text: 'Covering',
                            style: 'tableText'
                        }, {
                            text: coveringCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Valleys',
                            style: 'tableText'
                        }, {
                            text: valleysCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Ridges',
                            style: 'tableText'
                        }, {
                            text: ridgesCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Overhanging Trees',
                            style: 'tableText'
                        }, {
                            text: tressCheck,
                            noWrap: true,
                            style: 'tableText'
                        }],
                        ['',
                        {
                            text: 'Chimney/Vents/Flues',
                            style: 'tableText'
                        }, {
                            text: chimneyCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Flashing',
                            style: 'tableText'
                        }, {
                            text: flashingCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Box Gutters',
                            style: 'tableText'
                        }, {
                            text: boxGuttersCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Skylights',
                            style: 'tableText'
                        }, {
                            text: skylightsCheck,
                            noWrap: true,
                            style: 'tableText'
                        }],
                        ['',
                        {
                            text: other1Name,
                            style: 'tableText'
                        }, {
                            text: other1Check,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: other2Name,
                            style: 'tableText'
                        }, {
                            text: other2Check,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: other3Name,
                            style: 'tableText'
                        }, {
                            text: other3Check,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: other4Name,
                            style: 'tableText'
                        }, {
                            text: other4Check,
                            noWrap: true,
                            style: 'tableText'
                        }]
                    ]
                }
            };
        }
        else
        {
            body = {
                table: {
                    widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                    body: [
                        [{
                            text: roofName,
                            alignment: 'center',
                            style: 'tableBoldTextAlignLeft',
                            rowSpan: 2
                        }, {
                            text: 'Covering',
                            style: 'tableText'
                        }, {
                            text: coveringCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Valleys',
                            style: 'tableText'
                        }, {
                            text: valleysCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Ridges',
                            style: 'tableText'
                        }, {
                            text: ridgesCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Overhanging Trees',
                            style: 'tableText'
                        }, {
                            text: tressCheck,
                            noWrap: true,
                            style: 'tableText'
                        }],
                        ['', {
                            text: 'Chimney/Vents/Flues',
                            style: 'tableText'
                        }, {
                            text: chimneyCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Flashing',
                            style: 'tableText'
                        }, {
                            text: flashingCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Box Gutters',
                            style: 'tableText'
                        }, {
                            text: boxGuttersCheck,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Skylights',
                            style: 'tableText'
                        }, {
                            text: skylightsCheck,
                            noWrap: true,
                            style: 'tableText'
                        }]
                    ]
                }
            };
        }

    }
    return body;
}



function getPropertyExterior(){

    var body = [];

    var a1;
    var a2;
    var b;
    var c;
    var d;
    var e;

    if (checkInput('2001') == true) {
        var roofSpaceName = document.getElementById('2001').value;
        var frame = document.getElementById('340').value;
        var insulation = document.getElementById('341').value;
        var services = document.getElementById('342').value;
        var lining = document.getElementById('343').value;
        var underside = document.getElementById('344').value;
        var other1Name = document.getElementById('345').value;
        var other1 = document.getElementById('346').value;
        var other2Name = document.getElementById('347').value;
        var other2 = document.getElementById('348').value;
        var other3Name = document.getElementById('349').value;
        var other3 = document.getElementById('349a').value;

        //check the result whether is a tick
        frame = checkTick(frame);
        insulation = checkTick(insulation);
        services = checkTick(services);
        lining = checkTick(lining);
        underside = checkTick(underside);
        other1 = checkTick(other1);
        other2 = checkTick(other2);
        other3 = checkTick(other3);
        //check whether the other name is exited
        other1 = checkOtherInput(other1Name, other1);
        other2 = checkOtherInput(other2Name, other2);
        other3 = checkOtherInput(other3Name, other3);

        //check whether the roof has any data
        if (checkInput('2000') == true) {
            a1 =  [
                {
                    border: [true, false, true, true],
                    text: roofSpaceName,
                    rowSpan: 2,
                    alignment: 'center',
                    style: 'tableBoldTextAlignLeft'
                },
                {
                    border: [true, false, true, true],
                    text: 'Frame',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: frame,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: 'Insulation',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: insulation,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: 'Services',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: services,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: 'Lining/sarking',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: lining,
                    noWrap: true,
                    style: 'tableText'
                }
            ];
            a2 =  [
                '',
                {
                    text: 'Underside of Roof',
                    style: 'tableText'
                },
                {
                    text: underside,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: other1Name,
                    style: 'tableText'
                },
                {
                    text: other1,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: other2Name,
                    style: 'tableText'
                },
                {
                    text: other2,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: other3Name,
                    style: 'tableText'
                },
                {
                    text: other3,
                    noWrap: true,
                    style: 'tableText'
                }
            ];

            body.push(a1);
            body.push(a2);
        }
        else {
            a1 = [
                {

                    text: roofSpaceName,
                    rowSpan: 2,
                    alignment: 'center',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: 'Frame',
                    style: 'tableText'
                }, {
                    text: frame,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: 'Insulation',
                    style: 'tableText'
                },
                {

                    text: insulation,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: 'Services',
                    style: 'tableText'
                },
                {

                    text: services,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: 'Lining/sarking',
                    style: 'tableText'
                },
                {
                    text: lining,
                    noWrap: true,
                    style: 'tableText'
                }
            ];
            a2 =  [
                '',
                {
                    text: 'Underside of Roof',
                    style: 'tableText'
                },
                {
                    text: underside,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: other1Name,
                    style: 'tableText'
                },
                {
                    text: other1,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: other2Name,
                    style: 'tableText'
                },
                {
                    text: other2,
                    noWrap: true,
                    style: 'tableText'
                },
                {
                    text: other3Name,
                    style: 'tableText'
                },
                {
                    text: other3,
                    noWrap: true,
                    style: 'tableText'
                }
            ];

            body.push(a1);
            body.push(a2);

        }

    }

    PDFtable = {
        table: {
            body: body
        }
    };
    console.log(body);

    return PDFtable;
}

/*
 get the Assessment Report - Property Exterior - Roof Space. check the first input
 Fafa
 */

function getRoofSpace() {
    var body = {};
    if (checkInput('2001') == true) {
        var roofSpaceName = document.getElementById('2001').value;
        var frame = document.getElementById('340').value;
        var insulation = document.getElementById('341').value;
        var services = document.getElementById('342').value;
        var lining = document.getElementById('343').value;
        var underside = document.getElementById('344').value;
        var other1Name = document.getElementById('345').value;
        var other1 = document.getElementById('346').value;
        var other2Name = document.getElementById('347').value;
        var other2 = document.getElementById('348').value;
        var other3Name = document.getElementById('349').value;
        var other3 = document.getElementById('349a').value;

        //check the result whether is a tick
        frame = checkTick(frame);
        insulation = checkTick(insulation);
        services = checkTick(services);
        lining = checkTick(lining);
        underside = checkTick(underside);
        other1 = checkTick(other1);
        other2 = checkTick(other2);
        other3 = checkTick(other3);
        //check whether the other name is exited
        other1 = checkOtherInput(other1Name, other1);
        other2 = checkOtherInput(other2Name, other2);
        other3 = checkOtherInput(other3Name, other3);

        //check whether the roof has any data
        if (checkInput('2000') == true) {
            body = {
                table: {
                    widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                    body: [
                        [
                            {
                                border: [true, false, true, true],
                                text: roofSpaceName,
                                rowSpan: 2,
                                alignment: 'center',
                                style: 'tableBoldTextAlignLeft'
                            },
                            {
                                border: [true, false, true, true],
                                text: 'Frame',
                                style: 'tableText'
                            },
                            {
                                border: [true, false, true, true],
                                text: frame,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                border: [true, false, true, true],
                                text: 'Insulation',
                                style: 'tableText'
                            },
                            {
                                border: [true, false, true, true],
                                text: insulation,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                border: [true, false, true, true],
                                text: 'Services',
                                style: 'tableText'
                            },
                            {
                                border: [true, false, true, true],
                                text: services,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                border: [true, false, true, true],
                                text: 'Lining/sarking',
                                style: 'tableText'
                            },
                            {
                                border: [true, false, true, true],
                                text: lining,
                                noWrap: true,
                                style: 'tableText'
                            }
                        ],
                        [
                            '',
                            {
                                text: 'Underside of Roof',
                                style: 'tableText'
                            },
                            {
                                text: underside,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: other1Name,
                                style: 'tableText'
                            },
                            {
                                text: other1,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: other2Name,
                                style: 'tableText'
                            },
                            {
                                text: other2,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: other3Name,
                                style: 'tableText'
                            },
                            {
                                text: other3,
                                noWrap: true,
                                style: 'tableText'
                            }
                        ]
                    ]
                }

            };
        }
        else {
            body = {
                table: {
                    widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                    body: [
                        [
                         {

                            text: roofSpaceName,
                            rowSpan: 2,
                            alignment: 'center',
                            style: 'tableBoldTextAlignLeft'
                        }, {
                            text: 'Frame',
                            style: 'tableText'
                        }, {
                            text: frame,
                            noWrap: true,
                            style: 'tableText'
                        },
                            {
                                text: 'Insulation',
                                style: 'tableText'
                            },
                            {

                                text: insulation,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: 'Services',
                                style: 'tableText'
                            },
                            {

                                text: services,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: 'Lining/sarking',
                                style: 'tableText'
                            },
                            {
                                text: lining,
                                noWrap: true,
                                style: 'tableText'
                            }
                        ],
                        [
                            '',
                            {
                                text: 'Underside of Roof',
                                style: 'tableText'
                            },
                            {
                                text: underside,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: other1Name,
                                style: 'tableText'
                            },
                            {
                                text: other1,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: other2Name,
                                style: 'tableText'
                            },
                            {
                                text: other2,
                                noWrap: true,
                                style: 'tableText'
                            },
                            {
                                text: other3Name,
                                style: 'tableText'
                            },
                            {
                                text: other3,
                                noWrap: true,
                                style: 'tableText'
                            }
                        ]
                    ]
                }

            };
        }

    }
    return body;
}

/*
 get the Assessment Report - Property Exterior - Sub Floor, check the first input
 Fafa
 */
function getSubFloor() {
    var body = {};
    if (checkInput('2002') == true) {
        var subFloorName = document.getElementById('2002').value;
        var stumps = document.getElementById('350').value;
        var walls = document.getElementById('351').value;
        var services = document.getElementById('352').value;
        var damp = document.getElementById('353').value;
        var framing = document.getElementById('354').value;
        var underside = document.getElementById('355').value;
        var other1Name = document.getElementById('356').value;
        var other1 = document.getElementById('357').value;
        var other2Name = document.getElementById('358').value;
        var other2 = document.getElementById('359').value;


        //check the result whether is a tick
        stumps = checkTick(stumps);
        walls = checkTick(walls);
        services = checkTick(services);
        damp = checkTick(damp);
        framing = checkTick(framing);
        underside = checkTick(underside);
        other1 = checkTick(other1);
        other2 = checkTick(other2);

        //check other input whether it is empty
        other1 = checkOtherInput(other1Name, other1);
        other2 = checkOtherInput(other2Name, other2);


        if (checkInput('2000') == true || checkInput('2001') == true) {
            body = {
                table: {
                    widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                    body: [
                        [{
                            border: [true, false, true, true],
                            text: subFloorName,
                            rowSpan: 2,
                            style: 'tableBoldTextAlignLeft',
                            alignment: 'center'
                        }, {
                            border: [true, false, true, true],
                            text: 'Stumps/Piers',
                            style: 'tableText'
                        }, {
                            border: [true, false, true, true],
                            text: stumps,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            border: [true, false, true, true],
                            text: 'Walls',
                            style: 'tableText'
                        }, {
                            border: [true, false, true, true],
                            text: walls,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            border: [true, false, true, true],
                            text: 'Services',
                            style: 'tableText'
                        }, {
                            border: [true, false, true, true],
                            text: services,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            border: [true, false, true, true],
                            text: 'Ventilation/Damp',
                            style: 'tableText'
                        }, {
                            border: [true, false, true, true],
                            text: damp,
                            noWrap: true,
                            style: 'tableText'
                        }],
                        ['', {
                            text: 'Framing',
                            style: 'tableText'
                        }, {
                            text: framing,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Underside of Floor',
                            style: 'tableText'
                        }, {
                            text: underside,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: other1Name,
                            style: 'tableText'
                        }, {
                            text: other1,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: other2Name,
                            style: 'tableText'
                        }, {
                            text: other2,
                            noWrap: true,
                            style: 'tableText'
                        }]
                    ]
                }
            };
        }
        else {
            body = {
                table: {
                    widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                    body: [
                        [{
                            text: subFloorName,
                            rowSpan: 2,
                            style: 'tableBoldTextAlignLeft'
                        }, {

                            text: 'Stumps/Piers',
                            style: 'tableText'
                        }, {

                            text: stumps,
                            noWrap: true,
                            style: 'tableText'
                        }, {

                            text: 'Walls',
                            style: 'tableText'
                        }, {

                            text: walls,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Services',
                            style: 'tableText'
                        }, {
                            text: services,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Ventilation/Damp',
                            style: 'tableText'
                        }, {
                            text: damp,
                            noWrap: true,
                            style: 'tableText'
                        }],
                        ['', {
                            text: 'Framing',
                            style: 'tableText'
                        }, {
                            text: framing,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: 'Underside of Floor',
                            style: 'tableText'
                        }, {
                            text: underside,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: other1Name,
                            style: 'tableText'
                        }, {
                            text: other1,
                            noWrap: true,
                            style: 'tableText'
                        }, {
                            text: other2Name,
                            style: 'tableText'
                        }, {
                            text: other2,
                            noWrap: true,
                            style: 'tableText'
                        }]
                    ]
                }
            };
        }
    }
    return body;
}

/*
 Fafa
 get the Assessment Report - Property Exterior - Walls, can have multiple walls, maximum 4.
 name id start 2003, end 2010
 select result start 360, end 435
 other result start 3000, end 3031

 */

function getWalls() {
    var body = [];
    var table = {};
    var nameID = 2003;
    var otherID = 3000;

    for (var i = 360; i < 436; i = i + 10) {

        var wallName = document.getElementById(nameID + '').value;

        if (wallName.trim() != "") {
            var structure = document.getElementById(i + '').value;
            var eaves = document.getElementById(i + 1 + '').value;
            var gutter = document.getElementById(i + 2 + '').value;
            var vents = document.getElementById(i + 3 + '').value;
            var doors = document.getElementById(i + 4 + '').value;
            var deck = document.getElementById(i + 5 + '').value;
            var other1Name = document.getElementById(otherID + '').value;
            var other1 = document.getElementById(otherID + 1 + '').value;
            var other2Name = document.getElementById(otherID + 2 + '').value;
            var other2 = document.getElementById(otherID + 3 + '').value;
            // console.log(other1);
            // console.log(other2);
            //check the data
            var structureCheck = checkTick(structure);
            var eavesCheck = checkTick(eaves);
            var gutterCheck = checkTick(gutter);
            var ventsCheck = checkTick(vents);
            var doorsCheck = checkTick(doors);
            var deckCheck = checkTick(deck);

            var other1Check = checkTick(other1);
            var other2Check = checkTick(other2);
            // console.log(other1Check);
            // console.log(other2Check);
            //check the otherName value, if no, change the other value to empty string
            other1Check = checkOtherInput(other1Name, other1Check);
            other2Check = checkOtherInput(other2Name, other2Check);

            if (checkInput('2000') == true || checkInput('2001') == true || checkInput('2002') == true) {
                a = [{
                    border: [true, false, true, true],
                    text: wallName,
                    rowSpan: 2,
                    alignment: 'center',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    border: [true, false, true, true],
                    text: 'Structure/Finish',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: structureCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Eaves',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: eavesCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Gutter/Downpipe',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: gutterCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: other1Name,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: other1Check,
                    noWrap: true,
                    style: 'tableText'
                }];
            } else {
                a = [{
                    text: wallName,
                    rowSpan: 2,
                    style: 'tableText'
                }, {

                    text: 'Structure/Finish',
                    style: 'tableText'
                }, {
                    text: structureCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {

                    text: 'Eaves',
                    style: 'tableText'
                }, {
                    text: eavesCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {

                    text: 'Gutter/Downpipe',
                    style: 'tableText'
                }, {
                    text: gutterCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other1Name,
                    style: 'tableText'
                }, {
                    text: other1Check,
                    noWrap: true,
                    style: 'tableText'
                }];
            }

            b = ["", {
                text: 'Sub-Floor Vents',
                style: 'tableText'
            }, {
                text: ventsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Doors/Windows',
                style: 'tableText'
            }, {
                text: doorsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Balcony/Deck',
                style: 'tableText'
            }, {
                text: deckCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other2Name,
                style: 'tableText'
            }, {
                text: other2Check,
                noWrap: true,
                style: 'tableText'
            }];

            body.push(a);
            body.push(b);
        }

        nameID = nameID + 1;
        otherID = otherID + 4;
    }

    if (checkInput('2003') == false && checkInput('2004') == false && checkInput('2005') == false &&
        checkInput('2006') == false && checkInput('2007') == false && checkInput('2008') == false &&
        checkInput('2009') == false && checkInput('2010') == false)
    {
        table = {text: ''}
    }
    else
    {
        table = {
            table: {
                widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                body: body
            }
        };
    }
    return table;
}

/*
 Fafa
 get the Assessment Report - Property Exterior - Verandas, can have multiple, maximum 4.
 name id ExteriorWall1 , end ExteriorWall4
 select result start 440, end 475
 */

function getVerandas() {
    var body = [];
    var table = {};
    var nameID = 1;

    for (var i = 440; i < 479; i = i + 10) {
        var name = 'Verandas' + nameID;
        var verandaName = document.getElementById(name).value;

        if (verandaName.trim() != "") {
            var step = document.getElementById(i.toString()).value;
            var walls = document.getElementById(i + 1 + '').value;
            var roof = document.getElementById(i + 2 + '').value;

            var doors = document.getElementById(i + 3 + '').value;
            var floor = document.getElementById(i + 4 + '').value;
            var vents = document.getElementById(i + 5 + '').value;
            var posts = document.getElementById(i + 6 + '').value;
            var other1Name = document.getElementById(i + 7 + '').value;
            var other1 = document.getElementById(i + 8 + '').value;

            //check the data
            var stepCheck = checkTick(step);
            var wallsCheck = checkTick(walls);
            var roofCheck = checkTick(roof);
            var doorsCheck = checkTick(doors);
            var floorCheck = checkTick(floor);
            var ventsCheck = checkTick(vents);
            var postsCheck = checkTick(posts);
            other1 = checkTick(other1);

            //check other
            other1 = checkOtherInput(other1Name, other1);

            if (checkInput('2000') == true || checkInput('2001') == true || checkInput('2002') == true ||
                checkInput('2003') == true || checkInput('2004') == true || checkInput('2005') == true ||
                checkInput('2006') == true || checkInput('2007') == true || checkInput('2008') == true ||
                checkInput('2009') == true || checkInput('2010') == true) {
                a = [{
                    border: [true, false, true, true],
                    text: verandaName,
                    rowSpan: 2,
                    alignment: 'center',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    border: [true, false, true, true],
                    text: 'Steps',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: stepCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: wallsCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Roof/Ceiling',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: roofCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Doors/Windows',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: doorsCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            } else {
                a = [{
                    text: verandaName,
                    rowSpan: 2,
                    alignment: 'center',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: 'Steps',
                    style: 'tableText'
                }, {
                    text: stepCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    text: wallsCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Roof/Ceiling',
                    style: 'tableText'
                }, {
                    text: roofCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Doors/Windows',
                    style: 'tableText'
                }, {
                    text: doorsCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }
            b = ["", {
                text: 'Floor Structure',
                style: 'tableText'
            }, {
                text: floorCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Sub-Floor vents',
                style: 'tableText'
            }, {
                text: ventsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Posts/Balustrade',
                style: 'tableText'
            }, {
                text: postsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other1Name,
                style: 'tableText'
            }, {
                text: other1,
                noWrap: true,
                style: 'tableText'
            }];
            body.push(a);
            body.push(b);
        }
        nameID = nameID + 1;
    }

    if (checkInput('Verandas1') == false && checkInput('Verandas2') == false &&
        checkInput('Verandas3') == false && checkInput('Verandas4') == false) {
        table = {text: ''}
    } else {
        table =
        {
            table: {
                widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                body: body
            }
        };
    }
    return table;
}


/*
 Fafa
 get the Assessment Report - Property Exterior - Others, can have multiple, maximum 2.
 name id ExteriorOther1 , end ExteriorOther2
 select result start 500, end 532
 */

function getAssessmentOthers() {
    var body = [];
    var table = {};
    var nameID = 1;

    for (var i = 500; i < 532; i = i + 20) {
        var name = 'ExteriorOther' + nameID;
        var otherName = document.getElementById(name).value;

        if (otherName.trim() != "") {
            //get the data
            var other1Name = document.getElementById(i + '').value;
            var other1 = document.getElementById(i + 1 + '').value;

            var other2Name = document.getElementById(i + 2 + '').value;
            var other2 = document.getElementById(i + 3 + '').value;

            var other3Name = document.getElementById(i + 4 + '').value;
            var other3 = document.getElementById(i + 5 + '').value;

            var other4Name = document.getElementById(i + 6 + '').value;
            var other4 = document.getElementById(i + 7 + '').value;

            var other5Name = document.getElementById(i + 8 + '').value;
            var other5 = document.getElementById(i + 9 + '').value;

            var other6Name = document.getElementById(i + 10 + '').value;
            var other6 = document.getElementById(i + 11 + '').value;


            //check the data
            var other1Check = checkTick(other1);
            var other2Check = checkTick(other2);
            var other3Check = checkTick(other3);
            var other4Check = checkTick(other4);
            var other5Check = checkTick(other5);
            var other6Check = checkTick(other6);

            other1Check = checkOtherInput(other1Name, other1Check);
            other2Check = checkOtherInput(other2Name, other2Check);
            other3Check = checkOtherInput(other3Name, other3Check);
            other4Check = checkOtherInput(other4Name, other4Check);
            other5Check = checkOtherInput(other5Name, other5Check);
            other6Check = checkOtherInput(other6Name, other6Check);

            if (checkInput('2000') == true || checkInput('2001') == true || checkInput('2002') == true ||
                checkInput('2003') == true || checkInput('2004') == true || checkInput('2005') == true ||
                checkInput('2006') == true || checkInput('2007') == true || checkInput('2008') == true ||
                checkInput('2009') == true || checkInput('2010') == true || checkInput('Verandas1') == true ||
                checkInput('Verandas2') == true || checkInput('Verandas3') == true || checkInput('Verandas4') == true) {
                a = [{
                    border: [true, false, true, true],
                    text: otherName,
                    rowSpan: 2,
                    alignment: 'center',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    border: [true, false, true, true],
                    text: other1Name,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: other1Check,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: other2Name,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: other2Check,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: other3Name,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: other3Check,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: '',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: '',
                    style: 'tableText'
                }];
            } else {
                a = [{
                    text: otherName,
                    rowSpan: 2,
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: other1Name,
                    style: 'tableText'
                }, {
                    text: other1Check,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other2Name,
                    style: 'tableText'
                }, {
                    text: other2Check,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other3Name,
                    style: 'tableText'
                }, {
                    text: other3Check,
                    noWrap: true,
                    style: 'tableText'
                }, '', ''];
            }
            b = ["", {
                text: other4Name,
                style: 'tableText'
            }, {
                text: other4Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other5Name,
                style: 'tableText'
            }, {
                text: other5Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other6Name,
                style: 'tableText'
            }, {
                text: other6Check,
                noWrap: true,
                style: 'tableText'
            }, '', ''];
            body.push(a);
            body.push(b);
        }
        nameID = nameID + 1;
    }

    if (checkInput('ExteriorOther1') == false && checkInput('ExteriorOther2') == false) {
        table = {text: ''};
    }
    else {
        table = {
            table: {
                widths: [50, 100, 10, 80, 10, 80, 10, 80, 10],
                body: body
            }
        };
    }
    return table;
}

/*
 Fafa
 get the Assessment Report - Property Interior - Living Areas - Entry/Passage
 only be one set of data, can be empty
 */

function getAssessmentEntry() {
    var body = {};
    if (checkInput('600') == true) {
        var entryName = document.getElementById('600').value;
        var floor = document.getElementById('601').value;
        var ceiling = document.getElementById('602').value;
        var walls = document.getElementById('603').value;
        var electrics = document.getElementById('604').value;
        var cupboards = document.getElementById('605').value;
        var doors = document.getElementById('606').value;
        var dampness = document.getElementById('607').value;
        var otherName = document.getElementById('608').value;
        var other = document.getElementById('609').value;

        //check the result whether is a tick
        var floorCheck = checkTick(floor);
        var ceilingCheck = checkTick(ceiling);
        var wallsCheck = checkTick(walls);
        var electricsCheck = checkTick(electrics);
        var cupboardsCheck = checkTick(cupboards);
        var doorsCheck = checkTick(doors);
        var dampnessCheck = checkTick(dampness);
        var otherCheck = checkTick(other);

        otherCheck = checkOtherInput(otherName, otherCheck);

        body = {
            table: {
                widths: [50, 100, '*', 100, '*', 50, '*', 50, '*'],
                body: [
                    [{
                        text: entryName,
                        rowSpan: 2,
                        style: 'tableBoldTextAlignLeft',
                        alignment: 'center'
                    }, {
                        text: 'Floor Structure/Finish',
                        style: 'tableText'
                    }, {
                        text: floorCheck,
                        style: 'tableText'
                    }, {
                        text: 'Ceiling',
                        style: 'tableText'
                    }, {
                        text: ceilingCheck,
                        style: 'tableText'
                    }, {
                        text: 'Walls',
                        style: 'tableText'
                    }, {
                        text: wallsCheck,
                        style: 'tableText'
                    }, {
                        text: 'Electrics',
                        style: 'tableText'
                    }, {
                        text: electricsCheck,
                        style: 'tableText'
                    }],
                    ['', {
                        text: 'Cupboards',
                        style: 'tableText'
                    }, {
                        text: cupboardsCheck,
                        style: 'tableText'
                    }, {
                        text: 'Windows/Doors',
                        style: 'tableText'
                    }, {
                        text: doorsCheck,
                        style: 'tableText'
                    }, {
                        text: 'Dampness',
                        style: 'tableText'
                    }, {
                        text: dampnessCheck,
                        style: 'tableText'
                    }, {
                        text: otherName,
                        style: 'tableText'
                    }, {
                        text: otherCheck,
                        style: 'tableText'
                    }]
                ]
            }
        };
    }
    return body;
}


/*
 Fafa
 get the Assessment Report - Property Interior - Living Areas - Rooms
 can have multiple rooms, maximum 6
 id starts 610 , end 669
 */

function getAssessmentRooms() {
    var body = [];
    var table = {};

    for (var i = 610; i < 670; i = i + 10) {

        var roomName = document.getElementById(i.toString()).value;

        if (roomName.trim() != "") {
            //get the data
            var floor = document.getElementById(i + 1 + '').value;
            var ceiling = document.getElementById(i + 2 + '').value;
            var walls = document.getElementById(i + 3 + '').value;
            var electrics = document.getElementById(i + 4 + '').value;
            var cupboards = document.getElementById(i + 5 + '').value;
            var doors = document.getElementById(i + 6 + '').value;
            var dampness = document.getElementById(i + 7 + '').value;
            var otherName = document.getElementById(i + 8 + '').value;
            var other = document.getElementById(i + 9 + '').value;

            //check the result whether is a tick
            var floorCheck = checkTick(floor);
            var ceilingCheck = checkTick(ceiling);
            var wallsCheck = checkTick(walls);
            var electricsCheck = checkTick(electrics);
            var cupboardsCheck = checkTick(cupboards);
            var doorsCheck = checkTick(doors);
            var dampnessCheck = checkTick(dampness);
            var otherCheck = checkTick(other);

            otherCheck = checkOtherInput(otherName, otherCheck);

            if (checkInput(600) == true) {
                a = [{
                    border: [true, false, true, true],
                    text: roomName,
                    rowSpan: 2,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    border: [true, false, true, true],
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: floorCheck,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: wallsCheck,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: ceilingCheck,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: electricsCheck,
                    style: 'tableText'
                }];
            }
            else {
                a = [{
                    text: roomName,
                    rowSpan: 2,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    text: floorCheck,
                    style: 'tableText'
                }, {
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    text: wallsCheck,
                    style: 'tableText'
                }, {
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    text: ceilingCheck,
                    style: 'tableText'
                }, {
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    text: electricsCheck,
                    style: 'tableText'
                }];
            }


            b = ['', {
                text: 'Window/Doors',
                style: 'tableText'
            }, {
                text: doorsCheck,
                style: 'tableText'
            }, {
                text: 'Cupboards',
                style: 'tableText'
            }, {
                text: cupboardsCheck,
                style: 'tableText'
            }, {
                text: 'Dampness',
                style: 'tableText'
            }, {
                text: dampnessCheck,
                style: 'tableText'
            }, {
                text: otherName,
                style: 'tableText'
            }, {
                text: otherCheck,
                style: 'tableText'
            }];
            body.push(a);
            body.push(b);
        }


    }

    if (checkInput('610') == false && checkInput('620') == false && checkInput('630') == false
        && checkInput('640') == false && checkInput('650') == false && checkInput('660') == false) {
        table = {
            text: ''
        };
    }
    else {
        table = {
            table: {
                widths: [50, 100, '*', 100, '*', 50, '*', 50, '*'],
                body: body
            }
        };
    }


    return table;
}

/*
 Fafa
 get the Assessment Report - Property Interior - Living Areas - Stairs
 can have multiple stairs, maximum 2
 id starts 670 , end 679
 */

function getAssessmentStairs() {
    var body = [];
    var table = {};
    for (var i = 670; i < 680; i = i + 5) {

        var stairName = document.getElementById(i.toString()).value;

        if (stairName.trim() != "") {
            //get the data
            var structure = document.getElementById(i + 1 + '').value;
            var floor = document.getElementById(i + 2 + '').value;
            var Balustrade = document.getElementById(i + 3 + '').value;
            var underside = document.getElementById(i + 4 + '').value;


            //check the result whether is a tick
            var structureCheck = checkTick(structure);
            var floorCheck = checkTick(floor);
            var BalustradeCheck = checkTick(Balustrade);
            var undersideCheck = checkTick(underside);

            var a;


            if (checkInput(600) == true || checkInput(610) == true || checkInput(620) == true ||
                checkInput(630) == true || checkInput(640) == true || checkInput(650) == true ||
                checkInput(660) == true) {
                a = [
                    {
                        border: [true, false, true, true],
                        text: stairName,
                        style: 'tableBoldTextAlignLeft',
                        alignment: 'center'
                    }, {
                        border: [true, false, true, true],
                        text: 'Structure',
                        style: 'tableText'
                    }, {
                        border: [true, false, true, true],
                        text: structureCheck,
                        style: 'tableText'
                    }, {
                        border: [true, false, true, true],
                        text: 'Floor Finish',
                        style: 'tableText'
                    }, {
                        border: [true, false, true, true],
                        text: floorCheck,
                        style: 'tableText'
                    }, {
                        border: [true, false, true, true],
                        text: 'Balustrade',
                        style: 'tableText'
                    }, {
                        border: [true, false, true, true],
                        text: BalustradeCheck,
                        style: 'tableText'
                    }, {
                        border: [true, false, true, true],
                        text: 'Underside',
                        style: 'tableText'
                    }, {
                        border: [true, false, true, true],
                        text: undersideCheck,
                        style: 'tableText'
                    }];
            }
            else {
                a = [{
                    text: stairName,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    text: 'Structure',
                    style: 'tableText'
                }, {
                    text: structureCheck,
                    style: 'tableText'
                }, {
                    text: 'Floor Finish',
                    style: 'tableText'
                }, {
                    text: floorCheck,
                    style: 'tableText'
                }, {
                    text: 'Balustrade',
                    style: 'tableText'
                }, {
                    text: BalustradeCheck,
                    style: 'tableText'
                }, {
                    text: 'Underside',
                    style: 'tableText'
                }, {
                    text: undersideCheck,
                    style: 'tableText'
                }];
            }


            body.push(a);
        }


    }

    if (checkInput('670') == false && checkInput('675') == false) {
        table = {
            text: ''
        };
    }
    else {
        table = {
            table: {
                widths: [50, 100, '*', 100, '*', 50, '*', 50, '*'],
                body: body
            }

        };
    }


    return table;

}

/*
 Fafa
 get the Assessment Report - Property Interior - Living Areas - kitchen
 can have multiple rooms, maximum 2
 id starts 700 , end 819
 */

function getAssessmentKitchen() {
    var body = [];
    var table = {};

    for (var i = 700; i < 820; i = i + 100) {

        var kitchenName = document.getElementById(i.toString()).value;
        var a;
        var b;
        var c;
        var d;

        if (kitchenName.trim() != "") {
            //get the data
            var floor = document.getElementById(i + 1 + '').value;
            var walls = document.getElementById(i + 2 + '').value;
            var ceiling = document.getElementById(i + 3 + '').value;
            var electrics = document.getElementById(i + 4 + '').value;
            var cupboards = document.getElementById(i + 5 + '').value;
            var windows = document.getElementById(i + 6 + '').value;
            var dampness = document.getElementById(i + 7 + '').value;
            var sink = document.getElementById(i + 8 + '').value;
            var splashback = document.getElementById(i + 9 + '').value;
            var bench = document.getElementById(i + 10 + '').value;
            var exhaust = document.getElementById(i + 11 + '').value;
            var stove = document.getElementById(i + 12 + '').value;
            var dishWasher = document.getElementById(i + 13 + '').value;
            var other1Name = document.getElementById(i + 14 + '').value;
            var other1 = document.getElementById(i + 15 + '').value;
            var other2Name = document.getElementById(i + 16 + '').value;
            var other2 = document.getElementById(i + 17 + '').value;
            var other3Name = document.getElementById(i + 18 + '').value;
            var other3 = document.getElementById(i + 19 + '').value;

            //check the result whether is a tick
            var floorCheck = checkTick(floor);
            var wallsCheck = checkTick(walls);
            var ceilingCheck = checkTick(ceiling);
            var electricsCheck = checkTick(electrics);
            var cupboardsCheck = checkTick(cupboards);
            var windowsCheck = checkTick(windows);
            var dampnessCheck = checkTick(dampness);
            var sinkCheck = checkTick(sink);
            var splashbackCheck = checkTick(splashback);
            var benchCheck = checkTick(bench);
            var exhaustCheck = checkTick(exhaust);
            var stoveCheck = checkTick(stove);
            var dishWasherCheck = checkTick(dishWasher);
            var other1Check = checkTick(other1);
            var other2Check = checkTick(other2);
            var other3Check = checkTick(other3);

            other1Check = checkOtherInput(other1Name, other1Check);
            other2Check = checkOtherInput(other2Name, other2Check);
            other3Check = checkOtherInput(other3Name, other3Check);


            if (checkInput('600') == true || checkInput('610') == true || checkInput('620') == true ||
                checkInput('630') == true || checkInput('640') == true || checkInput('650') == true ||
                checkInput('660') == true || checkInput('670') == true || checkInput('675') == true) {
                a = [{
                    border: [true, false, true, true],
                    text: kitchenName,
                    rowSpan: 4,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    border: [true, false, true, true],
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: floorCheck,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: wallsCheck,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: ceilingCheck,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: electricsCheck,
                    style: 'tableText'
                }];
            }
            else {
                a = [{
                    text: kitchenName,
                    rowSpan: 4,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    text: floorCheck,
                    style: 'tableText'
                }, {
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    text: wallsCheck,
                    style: 'tableText'
                }, {
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    text: ceilingCheck,
                    style: 'tableText'
                }, {
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    text: electricsCheck,
                    style: 'tableText'
                }];
            }


            b = ['', {
                text: 'Window/Doors',
                style: 'tableText'
            }, {
                text: windowsCheck,
                style: 'tableText'
            }, {
                text: 'Cupboards',
                style: 'tableText'
            }, {
                text: cupboardsCheck,
                style: 'tableText'
            }, {
                text: 'Dampness',
                style: 'tableText'
            }, {
                text: dampnessCheck,
                style: 'tableText'
            }, {
                text: other1Name,
                style: 'tableText'
            }, {
                text: other1Check,
                style: 'tableText'
            }];

            c = ['', {
                text: 'Sink/Water/Pressure',
                style: 'tableText'
            }, {
                text: sinkCheck,
                style: 'tableText'
            }, {
                text: 'Splashback',
                style: 'tableText'
            }, {
                text: splashbackCheck,
                style: 'tableText'
            }, {
                text: 'Bench-top',
                style: 'tableText'
            }, {
                text: benchCheck,
                style: 'tableText'
            }, {
                text: other2Name,
                style: 'tableText'
            }, {
                text: other2Check,
                style: 'tableText'
            }];

            d = ['', {
                text: 'Exhaust/Range Hood',
                style: 'tableText'
            }, {
                text: exhaustCheck,
                style: 'tableText'
            }, {
                text: 'Stove/Cooktop/Oven',
                style: 'tableText'
            }, {
                text: stoveCheck,
                style: 'tableText'
            }, {
                text: 'Dishwasher',
                style: 'tableText'
            }, {
                text: dishWasherCheck,
                style: 'tableText'
            }, {
                text: other3Name,
                style: 'tableText'
            }, {
                text: other3Check,
                style: 'tableText'
            }];

            body.push(a);
            body.push(b);
            body.push(c);
            body.push(d);
        }
    }

    if (checkInput('700') == false && checkInput('800') == false) {
        table = {
            text: ''
        };
    }
    else {
        table = {
            table: {
                widths: [50, 100, '*', 100, '*', 50, '*', 50, '*'],
                body: body
            }

        };
    }


    return table;

}

/*
 Fafa
 get the Assessment Report - Property Interior - Bedroom Areas
 can have multiple rooms, maximum 6
 id starts 850 , end 907
 */

function getAssessmentBedroom() {
    var body = [];
    var table = {};

    for (var i = 850; i < 910; i = i + 10) {

        var a;
        var b;
        var roomName = document.getElementById(i.toString()).value;

        if (roomName.trim() != "") {
            //get the data
            var floor = document.getElementById(i + 1 + '').value;
            var windows = document.getElementById(i + 2 + '').value;
            var walls = document.getElementById(i + 3 + '').value;
            var robes = document.getElementById(i + 4 + '').value;
            var ceiling = document.getElementById(i + 5 + '').value;
            var dampness = document.getElementById(i + 6 + '').value;
            var electrics = document.getElementById(i + 7 + '').value;
            var other1Name = document.getElementById(i + 8 + '').value;
            var other1 = document.getElementById(i + 9 + '').value;


            //check the result whether is a tick
            var floorCheck = checkTick(floor);
            var windowCheck = checkTick(windows);
            var wallsCheck = checkTick(walls);
            var robesCheck = checkTick(robes);
            var ceilingCheck = checkTick(ceiling);
            var dampnessCheck = checkTick(dampness);
            var electricsCheck = checkTick(electrics);
            other1 = checkTick(other1);

            //check other title
            other1 = checkOtherInput(other1Name, other1);

            a = [
                {
                    border: [true, false, true, true],
                    text: roomName,
                    rowSpan: 2,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                },
                {
                    border: [true, false, true, true],
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: floorCheck,
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: 'Windows/Doors',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: windowCheck,
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: 'Walls',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: wallsCheck,
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: 'Robes',
                    style: 'tableText'
                },
                {
                    border: [true, false, true, true],
                    text: robesCheck,
                    style: 'tableText'
                }
            ];
            b = [
                '',
                {
                    text: 'Ceiling',
                    style: 'tableText'
                },
                {
                    text: ceilingCheck,
                    style: 'tableText'
                },
                {
                    text: 'Dampness',
                    style: 'tableText'
                },
                {
                    text: dampnessCheck,
                    style: 'tableText'
                },
                {
                    text: 'Electrics',
                    style: 'tableText'
                },
                {
                    text: electricsCheck,
                    style: 'tableText'
                },
                {
                    text: other1Name,
                    style: 'tableText'
                },
                {
                    text: other1,
                    style: 'tableText'
                }
            ];
            body.push(a);
            body.push(b);
        }
    }

    if (checkInput('850') == false && checkInput('860') == false && checkInput('870') == false &&
        checkInput('880') == false && checkInput('890') == false && checkInput('900') == false) {
        table = {
            text: ''
        };
    }
    else {
        table = {
            table: {
                widths: [50, 100, '*', 100, '*', 50, '*', 50, '*'],
                body: body
            }

        };
    }


    return table;

}


/*
 get the Assessment Report - Property Interior - Service Areas - Bathrooms
 can have multiple rooms, maximum 6
 id starts 1000 , end 1114
 */

function getAssessmentBathroom() {
    var body = [];
    var table = {};
    for (var i = 1000; i < 1119; i = i + 20) {

        var a;
        var b;
        var c;
        var d;
        var bathroomName = document.getElementById(i.toString()).value;

        if (bathroomName.trim() != "") {
            //get the data
            var floor = document.getElementById(i + 1 + '').value;
            var doors = document.getElementById(i + 2 + '').value;
            var walls = document.getElementById(i + 3 + '').value;
            var electrics = document.getElementById(i + 4 + '').value;
            var cupboards = document.getElementById(i + 5 + '').value;
            var ceiling = document.getElementById(i + 6 + '').value;
            var dampness = document.getElementById(i + 7 + '').value;
            var mirror = document.getElementById(i + 8 + '').value;
            var exhaust = document.getElementById(i + 9 + '').value;
            var water = document.getElementById(i + 10 + '').value;
            var bath = document.getElementById(i + 11 + '').value;
            var shower = document.getElementById(i + 12 + '').value;
            var toilet = document.getElementById(i + 13 + '').value;
            var basin = document.getElementById(i + 14 + '').value;
            var other1Name = document.getElementById(i + 15 + '').value;
            var other1 = document.getElementById(i + 16 + '').value;
            var other2Name = document.getElementById(i + 17 + '').value;
            var other2 = document.getElementById(i + 18 + '').value;


            //check the result whether is a tick
            var floorCheck = checkTick(floor);
            var ceilingCheck = checkTick(ceiling);
            var wallsCheck = checkTick(walls);
            var electricsCheck = checkTick(electrics);
            var cupboardsCheck = checkTick(cupboards);
            var doorsCheck = checkTick(doors);
            var dampnessCheck = checkTick(dampness);
            var mirrorCheck = checkTick(mirror);
            var exhaustCheck = checkTick(exhaust);
            var waterCheck = checkTick(water);
            var bathCheck = checkTick(bath);
            var showerCheck = checkTick(shower);
            var toiletCheck = checkTick(toilet);
            var basinCheck = checkTick(basin);
            other1 = checkTick(other1);
            other2 = checkTick(other2);

            //check other input title
            other1 = checkOtherInput(other1Name, other1);
            other2 = checkOtherInput(other2Name, other2);

            a = [{
                text: bathroomName,
                rowSpan: 4,
                style: 'tableBoldTextAlignLeft',
                alignment: 'center'
            }, {
                text: 'Floor Structure/Finish',
                style: 'tableText'
            }, {
                text: floorCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Walls',
                style: 'tableText'
            }, {
                text: wallsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Ceiling',
                style: 'tableText'
            }, {
                text: ceilingCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Electrics',
                style: 'tableText'
            }, {
                text: electricsCheck,
                noWrap: true,
                style: 'tableText'
            }];

            b = ['', {
                text: 'Window/Doors',
                style: 'tableText'
            }, {
                text: doorsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Cupboards/Vanity',
                style: 'tableText'
            }, {
                text: cupboardsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Water Pressure',
                style: 'tableText'
            }, {
                text: waterCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Dampness',
                style: 'tableText'
            }, {
                text: dampnessCheck,
                noWrap: true,
                style: 'tableText'
            }];

            c = ['', {
                text: 'Exhaust/Ventilation',
                style: 'tableText'
            }, {
                text: exhaustCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Toilet Suite',
                style: 'tableText'
            }, {
                text: toiletCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Basin/Splashback',
                style: 'tableText'
            }, {
                text: basinCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Mirror',
                style: 'tableText'
            }, {
                text: mirrorCheck,
                noWrap: true,
                style: 'tableText'
            }];

            d = ['', {
                text: 'Shower',
                style: 'tableText'
            }, {
                text: showerCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Bath',
                style: 'tableText'
            }, {
                text: bathCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other1Name,
                style: 'tableText'
            }, {
                text: other1,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other2Name,
                style: 'tableText'
            }, {
                text: other2,
                noWrap: true,
                style: 'tableText'
            }];

            body.push(a);
            body.push(b);
            body.push(c);
            body.push(d);
        }

    }


    if (checkInput('1000') == false && checkInput('1020') == false && checkInput('1040') == false &&
        checkInput('1060') == false && checkInput('1080') == false && checkInput('1100') == false) {
        table = {
            text: ''
        }
    }
    else {
        table = {
            table: {
                widths: [50, 93, '*', 85, '*', 78, '*', 77, '*'],
                body: body
            }
        };
    }


    return table;
}

/*
 get the Assessment Report - Property Interior - Service Areas - Laundry
 can have multiple rooms, maximum 2
 id starts 1200 , end 1230
 */

function getAssessmentLaundry() {
    var body = [];
    var table = {};
    for (var i = 1200; i < 1235; i = i + 20) {

        var a;
        var b;
        var c;

        var laundryName = document.getElementById(i.toString()).value;

        if (laundryName.trim() != "") {
            //get the data
            var floor = document.getElementById(i + 1 + '').value;
            var cupboards = document.getElementById(i + 2 + '').value;
            var walls = document.getElementById(i + 3 + '').value;
            var electrics = document.getElementById(i + 4 + '').value;
            var sink = document.getElementById(i + 5 + '').value;
            var ceiling = document.getElementById(i + 6 + '').value;
            var exhaust = document.getElementById(i + 7 + '').value;
            var doors = document.getElementById(i + 8 + '').value;
            var dampness = document.getElementById(i + 9 + '').value;
            var water = document.getElementById(i + 10 + '').value;
            var other1Name = document.getElementById(i + 11 + '').value;
            var other1 = document.getElementById(i + 12 + '').value;
            var other2Name = document.getElementById(i + 13 + '').value;
            var other2 = document.getElementById(i + 14 + '').value;

            //check the result whether is a tick
            var floorCheck = checkTick(floor);
            var cupboardsCheck = checkTick(cupboards);
            var wallsCheck = checkTick(walls);
            var electricsCheck = checkTick(electrics);
            var sinkCheck = checkTick(sink);
            var ceilingCheck = checkTick(ceiling);
            var exhaustCheck = checkTick(exhaust);
            var doorsCheck = checkTick(doors);
            var dampnessCheck = checkTick(dampness);
            var waterCheck = checkTick(water);
            other1 = checkTick(other1);
            other2 = checkTick(other2);

            //check the other title
            other1 = checkOtherInput(other1Name, other1);
            other2 = checkOtherInput(other2Name, other2);

            if (checkInput('1000') == true || checkInput('1020') == true || checkInput('1040') == true ||
                checkInput('1060') == true || checkInput('1080') == true || checkInput('1100') == true) {
                a = [{
                    border: [true, false, true, true],
                    text: laundryName,
                    rowSpan: 3,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    border: [true, false, true, true],
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: floorCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: wallsCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: ceilingCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: electricsCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }
            else {
                a = [{
                    text: laundryName,
                    rowSpan: 3,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    text: floorCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Walls',
                    style: 'tableText'
                }, {
                    text: wallsCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    text: ceilingCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    text: electricsCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }


            b = ['', {
                text: 'Window/Doors',
                style: 'tableText'
            }, {
                text: doorsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Tub unit/Sink',
                style: 'tableText'
            }, {
                text: sinkCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Dampness',
                style: 'tableText'
            }, {
                text: dampnessCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other1Name,
                style: 'tableText'
            }, {
                text: other1,
                noWrap: true,
                style: 'tableText'
            }];

            c = ['', {
                text: 'Exhaust/Ventilation',
                style: 'tableText'
            }, {
                text: exhaustCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Cupboards/Vanity',
                style: 'tableText'
            }, {
                text: cupboardsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Water Pressure',
                style: 'tableText'
            }, {
                text: waterCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other2Name,
                style: 'tableText'
            }, {
                text: other2,
                noWrap: true,
                style: 'tableText'
            }];

            body.push(a);
            body.push(b);
            body.push(c);
        }


    }

    if (checkInput('1200') == false && checkInput('1220') == false) {
        table = {
            text: ''
        };
    }
    else {
        table = {
            table: {
                widths: [50, 93, '*', 85, '*', 78, '*', 77, '*'],
                body: body
            }
        };
    }


    return table;
}

/*
 get the Assessment Report - Property Interior - Service Areas - Powder Room
 can have multiple rooms, maximum 2
 id starts 1300 , end 1332
 */

function getAssessmentPowderRoom() {
    var body = [];
    var table = {};

    for (var i = 1300; i < 1360; i = i + 20) {

        var a;
        var b;
        var c;
        var d;
        var powderRoomName = document.getElementById(i.toString()).value;

        if (powderRoomName.trim() != "") {
            //get the data
            var floor = document.getElementById(i + 1 + '').value;
            var doors = document.getElementById(i + 2 + '').value;
            var walls = document.getElementById(i + 3 + '').value;
            var electrics = document.getElementById(i + 4 + '').value;
            var cupboards = document.getElementById(i + 5 + '').value;
            var ceiling = document.getElementById(i + 6 + '').value;
            var dampness = document.getElementById(i + 7 + '').value;
            var basin = document.getElementById(i + 8 + '').value;
            var exhaust = document.getElementById(i + 9 + '').value;
            var water = document.getElementById(i + 10 + '').value;
            var toilet = document.getElementById(i + 11 + '').value;
            var mirror = document.getElementById(i + 12 + '').value;
            var other1Name = document.getElementById(i + 13 + '').value;
            var other1 = document.getElementById(i + 14 + '').value;
            var other2Name = document.getElementById(i + 15 + '').value;
            var other2 = document.getElementById(i + 16 + '').value;
            var other3Name = document.getElementById(i + 17 + '').value;
            var other3 = document.getElementById(i + 18 + '').value;
            var other4Name = document.getElementById(i + 19 + '').value;
            var other4 = document.getElementById(i + 19 + "a").value;

            //check the result whether is a tick
            var floorCheck = checkTick(floor);
            var ceilingCheck = checkTick(ceiling);
            var wallsCheck = checkTick(walls);
            var electricsCheck = checkTick(electrics);
            var cupboardsCheck = checkTick(cupboards);
            var doorsCheck = checkTick(doors);
            var dampnessCheck = checkTick(dampness);
            var mirrorCheck = checkTick(mirror);
            var exhaustCheck = checkTick(exhaust);
            var waterCheck = checkTick(water);
            var toiletCheck = checkTick(toilet);
            var basinCheck = checkTick(basin);
            var other1 = checkTick(other1);
            var other2 = checkTick(other2);
            var other3 = checkTick(other3);
            var other4 = checkTick(other4);

            //check the other title
            other1 = checkOtherInput(other1Name, other1);
            other2 = checkOtherInput(other2Name, other2);
            other3 = checkOtherInput(other3Name, other3);
            other4 = checkOtherInput(other4Name, other4);


            if (checkInput('1000') == true || checkInput('1020') == true || checkInput('1040') == true ||
                checkInput('1060') == true || checkInput('1080') == true || checkInput('1100') == true ||
                checkInput('1200') == true || checkInput('1220') == true) {
                a = [{
                    border: [true, false, true, true],
                    text: powderRoomName,
                    rowSpan: 4,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    border: [true, false, true, true],
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: floorCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Walls',
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: wallsCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: ceilingCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: electricsCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }
            else {
                a = [{
                    text: powderRoomName,
                    rowSpan: 4,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    text: 'Floor Structure/Finish',
                    style: 'tableText'
                }, {
                    text: floorCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Walls',
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: wallsCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Ceiling',
                    style: 'tableText'
                }, {
                    text: ceilingCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Electrics',
                    style: 'tableText'
                }, {
                    text: electricsCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }

            b = ['', {
                text: 'Window/Doors',
                style: 'tableText'
            }, {
                text: doorsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Cupboards/Vanity',
                style: 'tableText'
            }, {
                text: cupboardsCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Water Pressure',
                style: 'tableText'
            }, {
                text: waterCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Dampness',
                style: 'tableText'
            }, {
                text: dampnessCheck,
                noWrap: true,
                style: 'tableText'
            }];

            c = ['', {
                text: 'Exhaust/Ventilation',
                style: 'tableText'
            }, {
                text: exhaustCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Toilet Suite',
                style: 'tableText'
            }, {
                text: toiletCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Basin/Splashback',
                style: 'tableText'
            }, {
                text: basinCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: 'Mirror',
                style: 'tableText'
            }, {
                text: mirrorCheck,
                noWrap: true,
                style: 'tableText'
            }];

            d = ['',
                {
                    text: other1Name,
                    style: 'tableText'
                }, {
                    text: other1,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other2Name,
                    style: 'tableText'
                }, {
                    text: other2,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other3Name,
                    style: 'tableText'
                }, {
                    text: other3,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: other4Name,
                    style: 'tableText'
                }, {
                    text: other4,
                    noWrap: true,
                    style: 'tableText'
                }];

            body.push(a);
            body.push(b);
            body.push(c);
            body.push(d);
        }


    }


    if (checkInput('1300') == false && checkInput('1320') == false && checkInput('1340') == false) {
        table = {
            text: ''
        };
    }
    else {
        table = {
            table: {
                widths: [50, 93, '*', 85, '*', 78, '*', 77, '*'],
                body: body
            }

        };
    }


    return table;
}


/*
 get the Assessment Report - Property Interior - Service Areas - Services
 can have multiple rooms, maximum 2
 id starts 1400 , end 1230
 */

function getAssessmentServices() {
    var body = [];
    var table = {};
    if (checkInput(1400) == true) {
        var a;
        var b;
        var c;

        //get the data
        var serviceName = document.getElementById('1400').value;
        var heater = document.getElementById('1401').value;
        var smoke = document.getElementById('1402').value;
        var cooler = document.getElementById('1403').value;
        var hotWater = document.getElementById('1404').value;
        var switchboard = document.getElementById('1405').value;
        var other1Name = document.getElementById('1406').value;
        var other1 = document.getElementById('1407').value;
        var other2Name = document.getElementById('1408').value;
        var other2 = document.getElementById('1409').value;
        var other3Name = document.getElementById('1410').value;
        var other3 = document.getElementById('1411').value;
        var other4Name = document.getElementById('1412').value;
        var other4 = document.getElementById('1413').value;
        var other5Name = document.getElementById('1414').value;
        var other5 = document.getElementById('1415').value;
        var other6Name = document.getElementById('1416').value;
        var other6 = document.getElementById('1417').value;
        var other7Name = document.getElementById('1418').value;
        var other7 = document.getElementById('1419').value;


        //check the result whether is a tick
        var heaterCheck = checkTick(heater);
        var smokeCheck = checkTick(smoke);
        var coolerCheck = checkTick(cooler);
        var hotWaterCheck = checkTick(hotWater);
        var switchboardCheck = checkTick(switchboard);
        var other1Check = checkTick(other1);
        var other2Check = checkTick(other2);
        var other3Check = checkTick(other3);
        var other4Check = checkTick(other4);
        var other5Check = checkTick(other5);
        var other6Check = checkTick(other6);
        var other7Check = checkTick(other7);

        //check the other name if it is empty
        other1Check = checkOtherInput(other1Name, other1Check);
        other2Check = checkOtherInput(other2Name, other2Check);
        other3Check = checkOtherInput(other3Name, other3Check);
        other4Check = checkOtherInput(other4Name, other4Check);
        other5Check = checkOtherInput(other5Name, other5Check);
        other6Check = checkOtherInput(other6Name, other6Check);
        other7Check = checkOtherInput(other7Name, other7Check);

        if(other4Name.trim() != "")
        {
            if (checkInput('1000') == true || checkInput('1020') == true || checkInput('1040') == true ||
                checkInput('1060') == true || checkInput('1080') == true || checkInput('1100') == true ||
                checkInput('1200') == true || checkInput('1220') == true || checkInput('1300') == true ||
                checkInput('1320') == true || checkInput('1340') == true) {

                a = [{
                    border: [true, false, true, true],
                    text: serviceName,
                    rowSpan: 3,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    border: [true, false, true, true],
                    text: 'Heater/Unit',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: heaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Cooler/Unit',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: coolerCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Smoke Detectors',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: smokeCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Hot Water Service',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: hotWaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }
            else {
                a = [{
                    text: serviceName,
                    rowSpan: 3,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    text: 'Heater/Unit',
                    style: 'tableText'
                }, {
                    text: heaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Cooler/Unit',
                    style: 'tableText'
                }, {
                    text: coolerCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Smoke Detectors',
                    style: 'tableText'
                }, {
                    text: smokeCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Hot Water Service',
                    style: 'tableText'
                }, {
                    text: hotWaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }

            b = ['', {
                text: 'Switchboard',
                style: 'tableText'
            }, {
                text: switchboardCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other1Name,
                style: 'tableText'
            }, {
                text: other1Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other2Name,
                style: 'tableText'
            }, {
                text: other2Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other3Name,
                style: 'tableText'
            }, {
                text: other3Check,
                noWrap: true,
                style: 'tableText'
            }];

            c = ['', {
                text: other4Name,
                style: 'tableText'
            }, {
                text: other4Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other5Name,
                style: 'tableText'
            }, {
                text: other5Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other6Name,
                style: 'tableText'
            }, {
                text: other6Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other7Name,
                style: 'tableText'
            }, {
                text: other7Check,
                noWrap: true,
                style: 'tableText'
            }];

            body.push(a);
            body.push(b);
            body.push(c);
        }
        else
        {
            if (checkInput('1000') == true || checkInput('1020') == true || checkInput('1040') == true ||
                checkInput('1060') == true || checkInput('1080') == true || checkInput('1100') == true ||
                checkInput('1200') == true || checkInput('1220') == true || checkInput('1300') == true ||
                checkInput('1320') == true || checkInput('1340') == true) {

                a = [{
                    border: [true, false, true, true],
                    text: serviceName,
                    rowSpan: 2,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    border: [true, false, true, true],
                    text: 'Heater/Unit',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: heaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Cooler/Unit',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: coolerCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Smoke Detectors',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: smokeCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: 'Hot Water Service',
                    style: 'tableText'
                }, {
                    border: [true, false, true, true],
                    text: hotWaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }
            else {
                a = [{
                    text: serviceName,
                    rowSpan: 2,
                    style: 'tableBoldTextAlignLeft',
                    alignment: 'center'
                }, {
                    text: 'Heater/Unit',
                    style: 'tableText'
                }, {
                    text: heaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Cooler/Unit',
                    style: 'tableText'
                }, {
                    text: coolerCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Smoke Detectors',
                    style: 'tableText'
                }, {
                    text: smokeCheck,
                    noWrap: true,
                    style: 'tableText'
                }, {
                    text: 'Hot Water Service',
                    style: 'tableText'
                }, {
                    text: hotWaterCheck,
                    noWrap: true,
                    style: 'tableText'
                }];
            }

            b = ['', {
                text: 'Switchboard',
                style: 'tableText'
            }, {
                text: switchboardCheck,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other1Name,
                style: 'tableText'
            }, {
                text: other1Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other2Name,
                style: 'tableText'
            }, {
                text: other2Check,
                noWrap: true,
                style: 'tableText'
            }, {
                text: other3Name,
                style: 'tableText'
            }, {
                text: other3Check,
                noWrap: true,
                style: 'tableText'
            }];


            body.push(a);
            body.push(b);
        }


        table = {
            table: {
                widths: [50, 93, '*', 85, '*', 78, '*', 77, '*'],
                body: body
            }
        };
    }
    return table;
}


/*
 Fafa
 use the first input in a set of data to determine weather user enters data.
 return true if there is the first data
 return false it there is not
 */
function checkInput(id) {
    var result = false;

    var toCheck = document.getElementById(id).value;
    //console.log(toCheck);
    if (toCheck.trim() != "") {
        result = true;
    }


    return result;
}


/*
 Fafa
 check what value the user select.
 if the user select ✔, need to replace it with the utf-8 encoding
 because the pdfmake can not read ✔ directly
 */

function checkTick(value) {
    if (value == "✔") {
        value = '\u221A'
    }
    return value;
}

/*
 Fafa
 check whether the first parameter is empty --> '',
 if it is empty, returns the second parameter empty ""
 use this because the selected value has default will always appear
 even the user does not enter data in this field
 */

function checkOtherInput(otherName, otherResult) {
    var result = otherResult;
    if (otherName.trim() == "") {
        result = "";
    }
    return result
}

/**
 * Draw the evident defect summary table in property assessment summary page
 * Note: the number of defects is fluid. minimum is 9
 * so the table at least have three row. each row have six columns.
 * then based on the total number, create new row accordingly
 */
function getEvidentDefectTable()
{
    var body = [];
    var div = document.getElementById('evidentDefectSummary');
    var divNumber = $('#evidentDefectSummary').find('> div').length;
    //1. first three fixed rows
    for(var i=0;i<9;i=i+3)
    {
        //console.log(i);
        var b = i+3;
        var row = [];
        for(var a=i;a<b;a++)
        {
            //console.log(a);
            nameID = "EDName" + a;
            selectID = "EDSelect" + a;
            var defectName =
            {
                text:document.getElementById(nameID).textContent,
                style:'tableBoldTextAlignLeft',
                alignment:'center'
            };
            var defect =
            {
                text:document.getElementById(selectID).value,
                style: 'tableText',
                alignment:'center'
            };
            //console.log(defect);
            row.push(defectName);
            row.push(defect);
        }
        //console.log(row);
        body.push(row);
    }


    //if divNumber > 3, it means user creates new defects, then need to generate new rows
    if (divNumber >3)
    {
        var totalNestDiv = divNumber * 3;
        //console.log(totalNestDiv);
        for (var i=9; i<totalNestDiv;i=i+3)
        {
            var b = i+3;
            var row = [];
            for (var a=i;a<b;a++)
            {
                //console.log(a);
                nameID = "EDName" + a;
                selectID = "EDSelect" + a;

                var name = document.getElementById(nameID);
                var select = document.getElementById(selectID);
                if (name != null)
                {
                    var defectName =
                    {
                        text:name.value,
                        style:'tableBoldTextAlignLeft',
                        alignment:'center'
                    };
                    var defect =
                    {
                        text: select.value,
                        style:'tableText',
                        alignment:'center'
                    };
                    row.push(defectName);
                    row.push(defect);
                }
                else
                {
                    var defectName =
                    {
                        text:"",
                        style:'tableBoldTextAlignLeft'
                    };
                    var defect =
                    {
                        text: "",
                        style:'tableText'
                    };
                    row.push(defectName);
                    row.push(defect);
                }
            }
            body.push(row);

        }
    }
    // console.log(divNumber);



    //final the table
    PDFtable = {
        table: {
            widths: ['*', 30,'*',30,'*',30],
            body: body
        }
    };

    return PDFtable;



}

/**
 * Get the text in the Assessment Summary textField and Draw the table - BetterTENG
 * */
function getYPASAssessmentSummary() {

    var result;

    result = {
        table: {
            body: [
                [{
                    text: document.getElementById('PASAssessmentSummary').value.trim(),
                    style: 'tableText',
                    border: [false, true, false, false]
                }]
            ]
        }
    };

    return result;
}

/**
 * Get the text in the Design Potential Summary textField and Draw the table - BetterTENG
 * */
function getYPASDesignPS() {

    var result;

    result = {
        table: {
            body: [
                [{
                    text: document.getElementById('PASDesignPotSummary').value.trim(),
                    style: 'tableText',
                    border: [false, true, false, false]
                }]
            ]
        }
    };

    return result;
}

/**
 * Get the info in the Attachment page and Draw the table - BetterTENG
 * */
function getAttachmentTable() {

    var result;

    result = {
        table: {
            widths: [120, '*', 120, '*', 120, '*'],
            body: [
                [{
                    text: 'ITEM',
                    style: 'tableHeader'
                }, '', {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, '', {
                    text: 'ITEM',
                    style: 'tableHeader'
                }, ''],
                [{
                    text: 'Property Maintenance Guide',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6000').value,
                    style: 'tableText'
                }, {
                    text: 'Cracking in Masonry',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6001').value,
                    style: 'tableText'
                }, {
                    text: 'Treatment of Dampness',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6002').value,
                    style: 'tableText'
                }],
                [{
                    text: 'Health & Safety Warning',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6003').value,
                    style: 'tableText'
                }, {
                    text: 'Roofing & Guttering',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6004').value,
                    style: 'tableText'
                }, {
                    text: 'Home Safety Checklist',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6005').value,
                    style: 'tableText'
                }],
                [{
                    text: 'Termites & Borers',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6006').value,
                    style: 'tableText'
                }, {
                    text: 'Re-stumping',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6007').value,
                    style: 'tableText'
                }, {
                    text: 'Cost Guide',
                    style: 'tableBoldTextAlignLeft'
                }, {
                    text: document.getElementById('6008').value,
                    style: 'tableText'
                }]
            ]
        }
    };

    return result;
}

/**
 * Get value in Summary of the Condition of the Property part
 * */
function getValueinSCP() {
    if (checkIfOther() == 'otherSelected') {
        return document.getElementById('conditionOfBuildingText').value.trim();
    }
    if (checkIfOther() == 'otherNotSelected' || checkIfOther() == 'normalCondition') {
        return document.getElementById('conditionOfBuilding').value;
    }
}


/**
 * Set the photo tables
 * */
function getPhotoTable(id) {
    //console.log(id);
    var result;
    var row = [];
    var data = [];
    var tableBody, divCount = 1;
    var totalContainers = $('#'+id).find('> form');
    // console.log(totalContainers.eq(0).children('div').eq(0).children('img').get(0));
    // console.log(totalContainers.eq(0).children('div').eq(0).children('img').attr('src'));
    // console.log(totalContainers.eq(0).children('div').eq(1).children('label').text());
    // console.log(totalContainers.eq(0).children('div').eq(2).children('input').val())
    console.log("the current total image form is: " + totalContainers.length + ", image number need to -1, the last one is only a form, no image");
    if (totalContainers.length == 0) {
        tableBody = {
            text:''
        };
    }
    else
    {
        var firstImgSrc = totalContainers.eq(0).children('img').attr('src');
        if (totalContainers.length == 1 && typeof firstImgSrc == "undefined")
        {
            console.log("only has one container, and this container is emtpy");
            tableBody = {
                text:''
            };
        }
        else
        {
            for (var i = 0; i < totalContainers.length; i++)
            {
                var img = totalContainers.eq(i).children('img').get(0),
                    imgSrc = totalContainers.eq(i).children('img').attr('src'),
                    imgLabel = totalContainers.eq(i).children('label').text(),
                    imgText = totalContainers.eq(i).children('input').eq(0).val(),
                    imgAngle = totalContainers.eq(i).children('input').eq(1).val(),
                    width = 0,
                    height = 0,
                    alignment = 'left'
                    margin = [0,5,0,15];

                if(imgAngle == null || imgAngle == "undefined" || imgAngle == "")
                {
                    imgAngle = 0;
                }
                else
                {
                    imgAngle = parseInt(imgAngle);
                }

                // console.log(id + "  " + imgAngle);
    
                if (typeof imgSrc  != "undefined")
                {
                    var canvas = document.createElement("canvas");
                    canvas.height = canvas.width = 0;
                    var context = canvas.getContext('2d');
                    // var imgwidth = img.offsetWidth;
                    // var imgheight = img.offsetHeight;
                    var imgwidth = img.width;
                    var imgheight = img.height;
                    canvas.width = imgwidth ;
                    canvas.height = imgheight;

                    if(imgAngle == 90)
                    {
                        canvas.width = imgheight ;
                        canvas.height = imgwidth;
                        var scale = imgheight/imgwidth;
                        // console.log("scale: " + scale);
                        // console.log("canvas.width: " + canvas.width);
                        // console.log("canvas.height: " + canvas.height);
                        context.save();
                        context.fillStyle = "white";
                        context.fillRect(0, 0, canvas.width, canvas.height);
                        //context.translate(imgwidth/2, imgheight/2);
                        context.rotate(imgAngle*Math.PI/180);
                        context.drawImage(img,canvas.width/scale,0, -(imgheight)/scale, -(imgwidth)*scale);
                        context.restore();
                    }
                    else if (imgAngle == 180)
                    {
                        canvas.width = imgwidth ;
                        canvas.height = imgheight;
                        var scale = imgwidth/imgheight;
                        // console.log("scale: " + scale);
                        // console.log("canvas.width: " + canvas.width);
                        // console.log("canvas.height: " + canvas.height);
                        context.save();
                        context.fillStyle = "white";
                        context.fillRect(0, 0, canvas.width, canvas.height);
                        // context.translate(imgwidth/2, imgheight/2);
                        context.rotate(imgAngle*Math.PI/180);
                        context.drawImage(img,0,0, -(imgwidth), -(imgheight));
                        context.restore();
                    }
                    else if(imgAngle == 270)
                    {
                        canvas.width = imgheight ;
                        canvas.height = imgwidth;
                        var scale = imgheight/imgwidth;
                        // console.log("scale: " + scale);
                        // console.log("canvas.width: " + canvas.width);
                        // console.log("canvas.height: " + canvas.height);
                        context.save();
                        context.fillStyle = "white";
                        context.fillRect(0, 0, canvas.width, canvas.height);
                        // context.translate(imgwidth/2, imgheight/2);
                        context.rotate(imgAngle*Math.PI/180);
                        context.drawImage(img,0,canvas.height*scale, -(imgheight)/scale, -(imgwidth)*scale);
                        context.restore();
                    }
                    else
                    {
                        canvas.width = imgwidth ;
                        canvas.height = imgheight;
                        var scale = imgwidth/imgheight;
                        // console.log("scale: " + scale);
                        // console.log("canvas.width: " + canvas.width);
                        // console.log("canvas.height: " + canvas.height);
                        context.save();
                        context.fillStyle = "white";
                        context.fillRect(0, 0, canvas.width, canvas.height);
                        // context.translate(imgwidth/2, imgheight/2);
                        context.rotate(imgAngle*Math.PI/180);
                        context.drawImage(img,canvas.width,canvas.height, -(imgwidth), -(imgheight));
                        context.restore();
                    }
                    imgSrc = canvas.toDataURL("image/jpeg");
                    // context.save();
                    // context.fillStyle = "#ffffff";
                    // context.fillRect(0, 0, canvas.width, canvas.height);
                    // context.translate(imgwidth/2, imgheight/2);
                    // context.rotate(imgAngle*Math.PI/180);
                    // context.drawImage(img,canvas.width/2,canvas.height/2, -(imgwidth), -(imgheight));
                    // context.restore();
                   
                    //console.log("I am in");
                    //Work on the image anlge. 
                    // var canvas = document.createElement("canvas");
                    // canvas.width = img.naturalWidth + img.naturalHeight*1/2;
                    // canvas.height = img.naturalHeight + img.naturalWidth*1/2;
                    // // console.log(canvas.width);
                    // // console.log(canvas.height);
                    // var ctx = canvas.getContext("2d");
                    // //ctx.drawImage(myImage, 0,0);
                    // ctx.clearRect(0,0,canvas.width,canvas.height);
                    // ctx.fillStyle = "#ffffff";
                    // ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // //ctx.save();
                    // ctx.translate(canvas.width/2,canvas.height/2);
                    // ctx.rotate(imgAngle*Math.PI/180);
                    
                    // //ctx.clearRect(0,0,canvas.width,canvas.height);
                    // ctx.drawImage(img,-img.naturalWidth/2,-img.naturalHeight/2);
                    // ctx.restore();
                    // imgSrc = canvas.toDataURL("image/jpeg");
                    

                    // canvas.width = imgwidth + imgheight * 1/2;
                    // canvas.height = imgheight + imgwidth*1/2
                   

                    // if (imgSrc.includes("photos/") > 0) 
                    // {
                    //     imgSrc = convertImgToBase64(img);
                    // }
        
                    if (img.width >= img.height) {
                        width = 175;
                        height = 160;
                        margin = [10,5,0,10];
                    } else {
                        width = img.width * 160 / img.height;
                        height = 160;
                        margin = [10,5,0,10];
                    }
        
                    row.push({
                        stack: [
                            {
                                image: imgSrc,
                                //height: 160,
                                width: 160,
                                //fit:[160,140],
                                margin:[0,0,0,5],
                                alignment: 'center'
                            },
                            {
                                columns:[
                                    {
                                        width: 160,
                                        text: imgText,
                                        fontSize: 9,
                                        margin:[0,5,0,20]
                                    }
                                ]
                                
                            }
                        ],
                        margin:[0,5,0,10]
                    })
                    divCount++;
                    //the row has three cells, this row is completed, need to reset the row, and put this row into the table data
                    if (divCount === 4) {
                        data.push(row);
                        row = [];
                        divCount = 1;
                    }
                }
            }
            //console.log(divCount);
             //the last row only has one cell, need to put an empty cell to this row. 
            if (divCount == 2) {
                console.log("the last row only has one cell, need to put two empty cells to this row.")
                row.push({});
                row.push({});
                data.push(row);
            }
            if (divCount == 3)
            {
                console.log("the last row only has two cell, need to put one empty cells to this row.")
                row.push({});
                data.push(row);
            }
            
        
            //console.log(data);

            tableBody = {
                layout: {
                    hLineColor: function (i, node) {
                        return (i === 0 || i === node.table.body.length) ? '#FFFFFF' : '#FFFFFF';
                    },
                    vLineColor: function (i, node) {
                        return (i === 0 || i === node.table.widths.length) ? '#FFFFFF' : '#FFFFFF';
                    }
                },
                table: {
                    width:[160,160,160],
                    dontBreakRows: true,
                    // headerRows: ,
                    // keepWithHeaderRows: 1,
                    body: data
                }
            } 
        }
    }
    return tableBody;
}


function convertImgToBase64(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var src = canvas.toDataURL("image/jpeg");

    return src;
}


