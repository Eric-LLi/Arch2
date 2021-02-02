function readText(text)
{
    var result = text;
    if(result == null)
    {
        result = '';
    }
    // else
    // {
    //     result = result.trim();
    // }
    return result;
}

function trimAddress(address1,space,address2)
{
    console.log(address1);
    console.log(space);
    console.log(address2);
    var address = (address1 + space + address2).trim();
    console.log(address);
    return address;
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
        status = 'Not Paid';
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
    // console.log(logevents);
    // console.log(auditeventid);
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
function createAuditLogTable(auditevents,logevents,bookingdetail,linkedreport)
{
    var body = [];
    var title = [];

    /*
        Title Row
    */
   if(linkedreport.length == 0)
   {
        title =  [
            {
                text:'Action History',
                style:'tableHeader',
                colSpan:2
            },
            {},
        ];
   }
   else
   {
        title =  [
            {
                text:['Action History (', bookingdetail.bookingcode, ')'],
                style:'tableHeader',
                colSpan:2
            },
            {},
        ];
   }
    
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
        console.log("This booking has no audit history at all, need to use booking detail");

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
        body.push(created);
        //2. paid row
        if(bookingdetail.datepaid != null)
        {
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
            body.push(paid);
        }

         //3. assigned row;
        if(bookingdetail.archfirstname != null)
        {
            var assigned = [
                {
                    text:'booking is assigned ,work start',
                    style:'tableTitle'
                },
                {
                    text:['-'],
                    style:'tableContents'
                },
                // {
                //     text:'',
                //     style:'tableContents'
                // }
            ];
            body.push(assigned);
        }

        //4.completed row
        if(bookingdetail.datecompleted != null)
        {
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
            body.push(completed);
        }
       
       
        

        //5.approved row
        if(bookingdetail.dateapproved != null)
        {
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
            body.push(approved);
        }
        

        //6.send report row
        if(bookingdetail.lastemailed != null)
        {
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
            body.push(sent);
        }
        

        //7.closed
        if(bookingdetail.dateclosed != null)
        {
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
            body.push(closed);
        }

        //8.cancelled
        if(bookingdetail.datecancelled != null)
        {
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
            body.push(cancelled);
        }
    }
    else
    {

        //booking with entries in audt_log table, can be have full log history or parital
        if(foundevent(logevents,1) == true)
        {
            //when this booking is created, the audit table has exited, so the table have full entry, just use the table to display the history. 
            console.log("when this booking is created, the audit table has exited, so the table have full entry, just use the table to display the history. ");
            // console.log(logevent);
            // console.log(auditevents);
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
            console.log("when this booking is created, the audit table is not exited yet, so it doesn't have full entry, need to use both the booking details and logevents to show the full audit history")
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
            //console.log(logevents);
            //console.log(createdlog);
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

function createArchitectTable(bookingdetail,linkedreport)
{
    var body = [];
    var title = [];
    var name = [];
    var regno = [];
    var email = [];
    var mobile = [];
    var PDFtable = {};
    if(linkedreport.length == 0) //no linked report, single report. 
    {
        console.log("single report");
        var titleName = "Architect";
        if(bookingdetail.reportid == 2)
        {
            titleName = "Inspector";
        }
        title =  [
            {
                text:titleName,
                style:'tableHeader',
                colSpan:2
            },
            {}
        ]
        name = [
            {
                text:'Name: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archfirstname) , ' ' , readText(bookingdetail.archlastname)],
                style:'tableContents'
            }
        ];
        regno = [
            {
                text:'Reg.No: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archregno)],
                style:'tableContents'
            }
        ];
        email = [
            {
                text:'Email: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archemail)],
                style:'tableContents'
            }
        ];
        mobile = [
            {
                text:'Mobile: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archmobile)],
                style:'tableContents'
            }
        ];

        body.push(title);
        body.push(name);
        body.push(regno);
        body.push(email);
        body.push(mobile);
         //finalize the table
         PDFtable = {
            table: {
                body: body
            },
            layout:'noBorders'
        };
    }
    else
    {
        console.log("combined report, need to show both architect and inspector");
        if(bookingdetail.reportid == 3)
        {
            title = [
                {
                    text:['Timber Pest Inspector (',bookingdetail.bookingcode, ')'],
                    style:'tableHeader',
                    alignment: 'left',
                    colSpan:2
                },
                {},
                {
                    text:['Architect (', linkedreport[0].bookingcode, ')'],
                    style:'archTableHeader',
                    colSpan:2
                },
                {}
            ];
        }
        else if (bookingdetail.reportid == 24)
        {
            title = [
                {
                    text:['Architect (',bookingdetail.bookingcode,')'],
                    style:'tableHeader',
                    alignment: 'left',
                    colSpan:2
                },
                {},
                {
                    text:['Timber Pest Inspector (', linkedreport[0].bookingcode , ')'],
                    style:'archTableHeader',
                    colSpan:2
                },
                {}
            ];

        }

        name = [
            {
                text:'Name: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archfirstname) , ' ' , readText(bookingdetail.archlastname)],
                style:'tableContents',
            },
            {
                text:'Name: ',
                style:'archTableTitle',
            },
            {
                text:[readText(linkedreport[0].archfirstname) , ' ' , readText(linkedreport[0].archlastname)],
                style:'tableContents',
            }
        ];
        regno = [
            {
                text:'Reg.No: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archregno)],
                style:'tableContents'
            },
            {
                text:'Reg.No: ',
                style:'archTableTitle',
            },
            {
                text:[readText(linkedreport[0].archregno)],
                style:'tableContents'
            }
        ];

        email = [
            {
                text:'Email: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archemail)],
                style:'tableContents'
            },
            {
                text:'Email: ',
                style:'archTableTitle',
            },
            {
                text:[readText(linkedreport[0].archemail)],
                style:'tableContents'
            }
        ];

        mobile = [
            {
                text:'Mobile: ',
                style:'tableTitle',
            },
            {
                text:[readText(bookingdetail.archmobile)],
                style:'tableContents'
            },
            {
                text:'Mobile: ',
                style:'archTableTitle',
            },
            {
                text:[readText(linkedreport[0].archmobile)],
                style:'tableContents'
            }
        ];

        body.push(title);
        body.push(name);
        body.push(regno);
        body.push(email);
        body.push(mobile);
         //finalize the table
         PDFtable = {
            widths: ['*', '*','*','*'],
            table: {
                body: body
            },
            layout:'noBorders'
        };
    }


   

    return PDFtable;
}