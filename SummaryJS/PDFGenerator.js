function readText(text)
{
    var result = text;
    if(result == null)
    {
        result = '';
    }
    return result;
}
function readYesOrNo(text)
{
    var result = 'No';
    if(text == 1)
    {
        result = 'Yes';
    }
    return result;
}
function readAmount(text)
{
    var result = text;
    if(result == null)
    {
        result = '0.00';
    }
    return result;
}

function readNumber(text)
{
    var result = text;
    if(result == null)
    {
        result = '0';
    }
    return result;
}

function determinStatus(bookingdetail)
{
    var status = 'No Agreed Price';
    
    if (bookingdetail.datecancelled != null)
    {
        status = 'Cancelled';
    }
    else if(bookingdetail.dateclosed != null)
    {
        status = 'Closed';
    }
    else if(bookingdetail.dateapproved != null)
    {
        status = 'Approved';
    }
    else if (bookingdetail.datecompleted != null)
    {
        status = 'Completed';
    }
    else if (bookingdetail.archemail != null)
    {
        status = 'Work Started';
    }
    else if (bookingdetail.datepaid != null)
    {
        status = 'Paid';
    }
    else if (bookingdetail.budget != null)
    {
        status = 'No Paid';
    }

    return status;

}

function logevent(logeventid,auditevents)
{
    var event = auditevents.find(auditevents => auditevents.id == logeventid);
    return event;
}

function foundevent(logevents,auditeventid)
{
    //console.log(logevents);
    //console.log(auditeventid);
    var found = false;
    for(var i=0;i<logevents.length;i++)
    {
        if(logevents[i].eventid == auditeventid)
        {
            found = true;
            break;
        }
    }
    return found; 
}
function createAuditLogTable(auditevents,logevents,bookingdetail)
{
    
    var body = [];

    /*
        Title Row
    */
    var title =  [
        {
            text:'Audit History',
            style:'tableHeader',
            colSpan:2
        },
        {},
    ];
    body.push(title);

    /**
     * Header Row
     */
    var header = [
        {
            text:'Action',
            style:'tableHeader',
            alignment: 'left'
        },
        {
            text:'Time',
            style:'tableHeader',
            alignment: 'center'
        },
        // {
        //     text:'By',
        //     style:'tableHeader',
        //     alignment: 'center'
        // }
    ];
    body.push(header);

    if(logevents.length == 0)
    {
        //an old booking, no entry in audit_log table at all. Only use the bookingdetail to complete the table
        //1. created row
        var created =  [
            {
                text:'booking is created',
                style:'tableTitle'
            },
            {
                text:[readText(bookingdetail.datecreated)],
                style:'tableContents',
                alignment: 'center'
            },
            // {
            //     text:[readText(bookingdetail.usercreatedfirstname), ' ' ,readText(bookingdetail.usercreatedlastname)],
            //     style:'tableContents'
            // }
        ];
        //2. paid row
        var paid =  [
            {
                text:'booking is paid',
                style:'tableTitle'
            },
            {
                text:[readText(bookingdetail.datepaid)],
                style:'tableContents',
                alignment: 'center'
            },
            // {
            //     text:'',
            //     style:'tableContents'
            // }
        ];
        //3. assigned row;
        var assigned = [
            {
                text:'booking is assigned ,work start',
                style:'tableTitle'
            },
            {
                text:[''],
                style:'tableContents'
            },
            // {
            //     text:'',
            //     style:'tableContents'
            // }
        ];
        //4.completed row
        var completed = [
            {
                text:'report is completed',
                style:'tableTitle'
            },
            {
                text:[readText(bookingdetail.datecompleted)],
                style:'tableContents',
                alignment: 'center'
            },
            // {
            //     text:'',
            //     style:'tableContents'
            // }
        ];

         //5.approved row
         var approved = [
            {
                text:'report is approved',
                style:'tableTitle'
            },
            {
                text:[readText(bookingdetail.dateapproved)],
                style:'tableContents',
                alignment: 'center'
            },
            // {
            //     text:'',
            //     style:'tableContents'
            // }
        ];

        //5.send report row
        var sent = [
            {
                text:'report is sent to the customer',
                style:'tableTitle'
            },
            {
                text:[readText(bookingdetail.lastemailed)],
                style:'tableContents',
                alignment: 'center'
            },
            // {
            //     text:'',
            //     style:'tableContents'
            // }
        ];

        //6.closed
        var closed = [
            {
                text:'booking is closed',
                style:'tableTitle',
                
            },
            {
                text:[readText(bookingdetail.dateclosed)],
                style:'tableContents'
            },
            // {
            //     text:'',
            //     style:'tableContents'
            // }
        ];

        //7.closed
        var cancelled = [
            {
                text:'booking is cancelled',
                style:'tableTitle'
            },
            {
                text:[readText(bookingdetail.datecancelled)],
                style:'tableContents',
                alignment: 'center'
            },
            // {
            //     text:'',
            //     style:'tableContents'
            // }
        ];

        body.push(created);
        body.push(paid);
        body.push(assigned);
        body.push(completed);
        body.push(approved);
        body.push(sent);
        body.push(closed);
        body.push(cancelled);



    }
    else
    {
        console.log("when this booking is created, the audit table is not exited yet, so it doesn't have full entry, need to use both the booking details and logevents to show the full audit history")

        //booking with entries in audt_log table, can be have full log history or parital
        if(foundevent(logevents,1) == true)
        {
            //when this booking is created, the audit table has exited, so the table have full entry, just use the table to display the history. 
            console.log("when this booking is created, the audit table has exited, so the table have full entry, just use the table to display the history. ");
            for(var i = 0;i<logevents.length;i++)
            {
                var log = logevent(logevents[i].eventid,auditevents);
                //console.log(log.event);
                var event = [
                    {
                        text:readText(log.event),
                        style:'tableTitle',
                        nowrap:false,
                        alignment: 'justify'
                    },
                    {
                        text:[readText(logevents[i].datecreated)],
                        style:'tableContents',
                        alignment: 'center'
                    }
                    // {
                    //     text:[readText(logevents[i].usercreatedfirstname), ' ',readText(logevents[i].usercreatedlastname)],
                    //     style:'tableContents'
                    // }
                ];
                body.push(event);
            }
        }
        else
        {
            var createdlog = {};
            var paidlog = {};
            var completedlog = {};
            var approvedlog = {};
            var closedlog = {};
            var cancelledlog = {};

            createdlog = {
                bookingcode:bookingdetail.bookingcode,
                datecreated:bookingdetail.datecreated,
                eventid:"1",
                usercreatedfirstname:bookingdetail.usercreatedfirstname,
                usercreatedlastname:bookingdetail.usercreatedlastname,
                usercreatedtype:bookingdetail.usercreatetype,
                userscreated_id:bookingdetail.usercreatedid
            }
            logevents.push(createdlog);
            
           
            if(foundevent(logevents,3) == false && bookingdetail.datepaid != null)
            {
                //the log events doesn't have the paid record, and the bookingdetail has, need to use the booking detail to do it. 
                paidlog = {
                    bookingcode:bookingdetail.bookingcode,
                    datecreated:bookingdetail.datepaid,
                    eventid:"3",
                }
                logevents.push(paidlog);
            }
            if(foundevent(logevents,8) == false && bookingdetail.datecompleted != null)
            {
                //the log events doesn't have the completed record, and the bookingdetail has, need to use the booking detail to do it. 
                completedlog = {
                    bookingcode:bookingdetail.bookingcode,
                    datecreated:bookingdetail.datecompleted,
                    eventid:"8",
                }
                logevents.push(completedlog);
            }
            if(foundevent(logevents,9) == false && bookingdetail.dateapproved != null)
            {
                //the log events doesn't have the approved record, and the bookingdetail has, need to use the booking detail to do it. 
                approvedlog = {
                    bookingcode:bookingdetail.bookingcode,
                    datecreated:bookingdetail.dateapproved,
                    eventid:"9",
                }
                logevents.push(approvedlog);
            }
            if(foundevent(logevents,11) == false && bookingdetail.dateclosed != null)
            {
                //the log events doesn't have the closed record, and the bookingdetail has, need to use the booking detail to do it. 
                closedlog = {
                    bookingcode:bookingdetail.bookingcode,
                    datecreated:bookingdetail.dateclosed,
                    eventid:"9",
                }
                logevents.push(closedlog);
            }
            if(foundevent(logevents,12) == false && bookingdetail.datecancelled != null)
            {
                //the log events doesn't have the canclled record, and the bookingdetail has, need to use the booking detail to do it. 
                cancelledlog = {
                    bookingcode:bookingdetail.bookingcode,
                    datecreated:bookingdetail.datecancelled,
                    eventid:"9",
                }
                logevents.push(cancelledlog);
            }


            //console.log(logevents);
            //Sort the logevents by datecreated after pushing all new log events. 
            logevents.sort(function(a,b){
                var dateA = new Date(a.datecreated);
                var dateB = new Date(b.datecreated);
                if(dateA < dateB) return -1;
                if(dateA > dateB) return 1;
                return 0;
            });

            //when this booking is created, the audit table is not exited yet, so it doesn't have full entry, need to use both the booking details and logevents to show the full audit history. 
            //1.the created date need to from te booking detail
            for(var i = 0;i<logevents.length;i++)
            {
                var log = logevent(logevents[i].eventid,auditevents);
                //console.log(log.event);
                var event = [
                    {
                        text:readText(log.event),
                        style:'tableTitle',
                        nowrap:false,
                        alignment: 'justify'
                    },
                    {
                        text:[readText(logevents[i].datecreated)],
                        style:'tableContents',
                        alignment: 'center'
                    }
                    // {
                    //     text:[readText(logevents[i].usercreatedfirstname), ' ',readText(logevents[i].usercreatedlastname)],
                    //     style:'tableContents'
                    // }
                ];
                body.push(event);
            }
 

             for(var i = 0;i<logevents.length;i++)
             {

             }
             if(foundevent(logevents,3) == true)
             {
                 //
             }
             else
             {
 
             }
 
         
 
             
         
         
        }
    }

     //final the table
     PDFtable = {
        table: {
            widths: ['*', '*'],
            headerRows: 2,
            body: body
        },
        layout:'noBorders'
    };
    return PDFtable;

}
function generatePDF(bookingdetail,reports,auditevents,logevents) 
{
    //console.log(bookingdetail);
    // console.log(logevents);
    const selectedreport = reports.find(reports => reports.id == bookingdetail.reportid);
 
    var docDefinition = {
        pageSize: 'A4',
        content:[
                   
            /**
             * (1) Title
             */
            {
                stack:[
                    {
                        text:[
                            bookingdetail.bookingcode,
                            ' : ',
                            selectedreport.name,
                            ' - ',
                            determinStatus(bookingdetail)
                        ],
                        style:'header'
                    }
                ]
            },
            /**
             * (2) Customer Details
             */
            {
                margin:[0,5,0,0],
                stack:[
                    {
                        table:{
                            headerRows: 1,
                            body:[
                                [
                                    {
                                        text:'Customer Details',
                                        style:'tableHeader',
                                        colSpan:2
                                    },
                                    {}
                                    
                                ],
                                [
                                    {
                                        text:'Name: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.custfirstname) , ' ' , readText(bookingdetail.custlastname)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Email: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.custemail)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Mobile: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.custmobile)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Phone: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.custphone)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Address: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.custaddress1) , ' ' , readText(bookingdetail.custaddress2), ',' , readText(bookingdetail.custcity), ' ' , readText(bookingdetail.custstate), ' ' , readText(bookingdetail.custpostcode)],
                                        style:'tableContents'
                                    }
                                ]
                            ]
                        },
                        layout:'noBorders',
                    }
                ],
                margin:[0,0,0,10]
            },
            /**
             * (3)Report Details
             */
            {
                margin:[0,5,0,0],
                stack:[
                    {
                        table:{
                            headerRows: 1,
                            body:
                            [
                                [
                                    {
                                        text:'Report Details',
                                        style:'tableHeader',
                                        colSpan:2
                                    },
                                    {}
                                ],
                                [
                                    {
                                        text:'Agreed Price: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:['$',readAmount(bookingdetail.budget)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Commission: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:['$',readAmount(bookingdetail.commission)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Travel Cost: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:['$',readAmount(bookingdetail.travel)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Spotter Fee: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:['$',readAmount(bookingdetail.spotter)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Cancellation Fee: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:['$',readAmount(bookingdetail.cancellationfee)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Notes: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.notes)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Client Notes: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.clientnotes)],
                                        style:'tableContents'
                                    }
                                ]
                            ]
                        },
                        layout:'noBorders',
                    }
                ],
                margin:[0,0,0,10]
            },
            /**
             * (4)Property Details
             */
            {
                margin:[0,5,0,0],
                stack:[
                    {
                        table:{
                            headerRows: 1,
                            body:
                            [
                                [
                                    {
                                        text:'Property Details',
                                        style:'tableHeader',
                                        colSpan:2
                                    },
                                    {}
                                ],
                                [
                                    {
                                        text:'Address: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.address1) , ' ' , readText(bookingdetail.address2), ',' , readText(bookingdetail.city), ' ' , readText(bookingdetail.state), ' ' , readText(bookingdetail.postcode)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Rooms:',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[
                                                'Storeys:',readNumber(bookingdetail.numstories),', ',
                                                'Bedrooms:',readNumber(bookingdetail.numbedrooms),', ',
                                                'Bathrooms:',readNumber(bookingdetail.numbathrooms),', ',
                                                'Total Rooms:',readNumber(bookingdetail.numrooms),', ',
                                                'Outbuildings:',readNumber(bookingdetail.numoutbuildings)
                                            ],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Construction:',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.construction)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Age:',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.age)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Required:',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[
                                                {text:'Meeting on site? ',style:'tableContentsQ'},
                                                readYesOrNo(bookingdetail.meetingonsite),', ',
                                                {text:'Renovation advice? ',style:'tableContentsQ'},
                                                readYesOrNo(bookingdetail.renoadvice),', ',
                                                {text:'Pest Inspection Also? ',style:'tableContentsQ'},
                                                readYesOrNo(bookingdetail.pestinspection),
                                            ],
                                        style:'tableContents'
                                    }
                                ],
                            ]
                        },
                        layout:'noBorders'
                    }
                ],
                margin:[0,0,0,10]
            },
            /**
             * (5)Estate Agent
             */
            {
                margin:[0,5,0,0],
                stack:[
                    {
                        table:{
                            headerRows: 1,
                            body:
                            [
                                [
                                    {
                                        text:'Estate Agent',
                                        style:'tableHeader',
                                        colSpan:2
                                    },
                                    {}
                                ],
                                [
                                    {
                                        text:'Company: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.estateagentcompany)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Contact: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.estateagentcontact)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Mobile: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.estateagentmobile)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Office Phone: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.estateagentphone)],
                                        style:'tableContents'
                                    }
                                ]
                            ]
                        },
                        layout:'noBorders'
                    }
                ],
                margin:[0,0,0,10]
            },
            /**
             * (6)Architect
             */
            {
                margin:[0,5,0,0],
                stack:[
                    {
                        table:{
                            headerRows: 1,
                            body:
                            [
                                [
                                    {
                                        text:'Architect/Inspector',
                                        style:'tableHeader',
                                        colSpan:2
                                    },
                                    {}
                                ],
                                [
                                    {
                                        text:'Name: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.archfirstname) , ' ' , readText(bookingdetail.archlastname)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Reg.No: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.archregno)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Email: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.archemail)],
                                        style:'tableContents'
                                    }
                                ],
                                [
                                    {
                                        text:'Mobile: ',
                                        style:'tableTitle',
                                    },
                                    {
                                        text:[readText(bookingdetail.archmobile)],
                                        style:'tableContents'
                                    }
                                ]
                            ]
                        },
                        layout:'noBorders'
                    }
                ],
                margin:[0,0,0,10]
            },
            /**
             * (7)Audit History
             */
            {
                margin:[0,5,0,0],
                stack:
                [
                    createAuditLogTable(auditevents,logevents,bookingdetail)
                ],
                margin:[0,0,0,10]
            }
        ],
        /**
         * Styles
         */
        styles:{
            header: {
                fontSize: 16,
                bold: true,
                margin:[0,0,0,10]
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                color: 'black'
            },
            tableTitle:{
                fontSize:11
            },
            tableContents:{
                fontSize:11,
                bold:true,
                margin:[5,0,0,0]
            },
            tableContentsQ:{
                fontSize:11,
                bold:false,
                margin:[5,0,0,0]
            }
        }
    };
    pdfMake.createPdf(docDefinition).print();
}