function clearFields()
{
    //1. Customer Details
    document.getElementById('fldSummaryCustName').innerHTML = "";
    document.getElementById('fldSummaryCustEmail').innerHTML = "";
    document.getElementById('fldSummaryCustMobile').innerHTML = "";
    document.getElementById('fldSummaryCustPhone').innerHTML = "";
    document.getElementById('fldSummaryCustAddress').innerHTML = "";

    //2. Report Details
    document.getElementById('fldSummaryAgreedPrice').innerHTML = "";
    document.getElementById('fldSummaryCommission').innerHTML = "";
    document.getElementById('fldSummaryTravelCost').innerHTML = "";
    document.getElementById('fldSummarySpotterFee').innerHTML = "";
    document.getElementById('fldSummaryCancellationFee').innerHTML = "";
    document.getElementById('fldSummaryNotes').innerHTML = "";
    document.getElementById('fldSummaryClientNotes').innerHTML = "";

    //3. Property Details
    document.getElementById('fldSummaryPropertyAddress').innerHTML = "";
    document.getElementById('fldSummaryRoomsStoreys').innerHTML = "";
    document.getElementById('fldSummaryRoomsBedrooms').innerHTML = "";
    document.getElementById('fldSummaryRoomsBathrooms').innerHTML = "";
    document.getElementById('fldSummaryRoomstotal').innerHTML = "";
    document.getElementById('fldSummaryRoomsoutbuildings').innerHTML = "";
    document.getElementById('fldSummaryPropertyConstruction').innerHTML = "";
    document.getElementById('fldSummaryPropertyAge').innerHTML = "";
    document.getElementById('fldSummaryRequiredMeeting').innerHTML = "";
    document.getElementById('fldSummaryRequiredAdvice').innerHTML = "";
    document.getElementById('fldSummaryRequiredInspection').innerHTML = "";

    //4. Estate Agent
    document.getElementById('fldSummaryAgentCompany').innerHTML = "";
    document.getElementById('fldSummaryAgentEmail').innerHTML = "";
    document.getElementById('fldSummaryAgentMobile').innerHTML = "";
    document.getElementById('fldSummaryAgentPhone').innerHTML = "";

    //5.Arch Table
    document.getElementById("summaryArchTabl2").style.display = "none";
    document.getElementById('fldSummaryArchName1').innerHTML = "";
    document.getElementById('fldSummaryArchRegno1').innerHTML = "";
    document.getElementById('fldSummaryArchEmail1').innerHTML = "";
    document.getElementById('fldSummaryArchMobil1').innerHTML = "";

    document.getElementById('fldSummaryArchName2').innerHTML = "";
    document.getElementById('fldSummaryArchRegno2').innerHTML = "";
    document.getElementById('fldSummaryArchEmail2').innerHTML ="";
    document.getElementById('fldSummaryArchMobil2').innerHTML ="";

    //6.Audit Table


}

function populateAuditTable(logevents,bookingdetail,linkedreport)
{    
    console.log("populateAuditTable");
    if(linkedreport.length > 0)
    {
        console.log('combined report');
        document.getElementById('summaryHistoryTableTitle').innerHTML = "Action History (" + bookingdetail.bookingcode +")";
    }
    else
    {
        document.getElementById('summaryHistoryTableTitle').innerHTML = "Action History";
    }
    //1. need to sort out if can use the logevents right away. 
    if(logevents.length == 0)
    {
        console.log("This booking has no audit history at all, need to use booking detail");
        //1. created log
        var created = {
            bookingcode:bookingdetail.bookingcode,
            datecreated:bookingdetail.datecreated,
            eventid:"1",
            usercreatedfirstname:bookingdetail.usercreatedfirstname,
            usercreatedlastname:bookingdetail.usercreatedlastname,
            usercreatedtype:bookingdetail.usercreatetype,
            userscreated_id:bookingdetail.usercreatedid
        };
        logevents.push(created);

        //2.paid log
        if(bookingdetail.datepaid != null)
        {
            var paid = {bookingcode:bookingdetail.bookingcode,eventid:3,datecreated:bookingdetail.datepaid};
            logevents.push(paid);
        }

        //3.assigned log
        // console.log(bookingdetail.archfirstname);
        if(bookingdetail.archfirstname != null)
        {
            var assigned = {bookingcode:bookingdetail.bookingcode,eventid:6,datecreated:'-'};
            logevents.push(assigned);
        }

        //4.completed log
        if(bookingdetail.datecompleted != null)
        {
            var completed = {bookingcode:bookingdetail.bookingcode,eventid:8,datecreated:bookingdetail.datecompleted};
            logevents.push(completed);
        }

        //5.approved log
        if(bookingdetail.dateapproved != null)
        {
            var approved = {bookingcode:bookingdetail.bookingcode,eventid:9,datecreated:bookingdetail.dateapproved};
            logevents.push(approved);
        }

        //6.sent log
        if(bookingdetail.lastemailed != null)
        {
            var sent = {bookingcode:bookingdetail.bookingcode,eventid:10,datecreated:bookingdetail.lastemailed};
            logevents.push(sent);
        }

        //7.closed log
        if(bookingdetail.dateclosed != null)
        {
            var closed = {bookingcode:bookingdetail.bookingcode,eventid:11,datecreated:bookingdetail.dateclosed};
            logevents.push(closed);
        }

        //8.cancelled log
        if(bookingdetail.datecancelled != null)
        {
            var cancelled = {bookingcode:bookingdetail.bookingcode,eventid:12,datecreated:bookingdetail.datecancelled};
            logevents.push(cancelled);
        }
        
        //9.sent tax invoice log
        if(bookingdetail.lastinvoiced != null)
        {
            var invoiced = {bookingcode:bookingdetail.bookingcode,eventid:13,datecreated:bookingdetail.lastinvoiced};
            logevents.push(invoiced);
        }
    }
    else
    {
         //booking with entries in audt_log table, can be have full log history or parital
        if(foundevent(logevents,1) == false)
        {
            console.log("when this booking is created, the audit table is not exited yet, so it doesn't have full entry, need to use both the booking details and logevents to show the full audit history")
            var createdlog = {};
            var paidlog = {};
            var completedlog = {};
            var approvedlog = {};
            var closedlog = {};
            var cancelledlog = {};

            //1.created log
            createdlog = {
                bookingcode:bookingdetail.bookingcode,
                datecreated:bookingdetail.datecreated,
                eventid:"1",
                usercreatedfirstname:bookingdetail.usercreatedfirstname,
                usercreatedlastname:bookingdetail.usercreatedlastname,
                usercreatedtype:bookingdetail.usercreatetype,
                userscreated_id:bookingdetail.usercreatedid
            };
            logevents.push(createdlog);

            //2. paidlog
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

            //3.completed log
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

            //4.approved log
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
            //5.closed log
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

            //6.cancelled log
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

            //7.sent tax invoice log
            if(foundevent(logevents,13) == false && bookingdetail.lastinvoiced != null)
            {
                //the log events doesn't have the invoiced record, and the bookingdetail has, need to use the booking detail to do it. 
                invoicedlog = {
                    bookingcode:bookingdetail.bookingcode,
                    datecreated:bookingdetail.lastinvoiced,
                    eventid:"13",
                }
                logevents.push(invoicedlog);
            }

            //7.Sort the logevents by datecreated after pushing all new log events. 
            logevents.sort(function(a,b){
                var dateA = new Date(a.datecreated);
                var dateB = new Date(b.datecreated);
                if(dateA < dateB) return -1;
                if(dateA > dateB) return 1;
                return 0;
            });

        }
        else
        {
            console.log("when this booking is created, the audit table is exited, so it has have full entry, use logevents to show the full audit history")
            console.log(logevents);

        }
    }

    $('#divBookingSummaryG').datagrid('reload');
}

function createArchTable(bookingdetail,linkedreport)
{
    //console.log(linkedreport);
    if(linkedreport.length == 0) // single report
    {
        document.getElementById("summaryArchTabl2").style.display = "none";
        console.log("single report");
        var titleName = "Architect";
        if(bookingdetail.reportid == 2)
        {
            titleName = "Inspector";
        }
        document.getElementById('fldSummaryArchTitle1').innerHTML = titleName;
        document.getElementById('fldSummaryArchName1').innerHTML = readText(bookingdetail.archfirstname) + ' ' +  readText(bookingdetail.archlastname);
        document.getElementById('fldSummaryArchRegno1').innerHTML = readText(bookingdetail.archregno);
        document.getElementById('fldSummaryArchEmail1').innerHTML = readText(bookingdetail.archemail);
        document.getElementById('fldSummaryArchMobil1').innerHTML = readText(bookingdetail.archmobile);
    }
    else
    {
        // console.log(linkedreport);
        document.getElementById("summaryArchTabl2").style.display = "block";
        if(bookingdetail.reportid == 3)
        {
            document.getElementById('fldSummaryArchTitle1').innerHTML = "Inspector (" + bookingdetail.bookingcode +")";
            document.getElementById('fldSummaryArchTitle2').innerHTML = "Architect (" + linkedreport[0].bookingcode + ")";
        }
        else if (bookingdetail.reportid == 24)
        {
            document.getElementById('fldSummaryArchTitle1').innerHTML = "Architect (" + bookingdetail.bookingcode +")";
            document.getElementById('fldSummaryArchTitle2').innerHTML = "Inspector (" + linkedreport[0].bookingcode + ")";
        }

        document.getElementById('fldSummaryArchName1').innerHTML = readText(bookingdetail.archfirstname) + ' ' +  readText(bookingdetail.archlastname);
        document.getElementById('fldSummaryArchRegno1').innerHTML = readText(bookingdetail.archregno);
        document.getElementById('fldSummaryArchEmail1').innerHTML = readText(bookingdetail.archemail);
        document.getElementById('fldSummaryArchMobil1').innerHTML = readText(bookingdetail.archmobile);

        document.getElementById('fldSummaryArchName2').innerHTML = readText(linkedreport[0].archfirstname) + ' ' +  readText(linkedreport[0].archlastname);
        document.getElementById('fldSummaryArchRegno2').innerHTML = readText(linkedreport[0].archregno);
        document.getElementById('fldSummaryArchEmail2').innerHTML = readText(linkedreport[0].archemail);
        document.getElementById('fldSummaryArchMobil2').innerHTML = readText(linkedreport[0].archmobile);
    }

}

function doDlgSummary(bookingdetail,reports,auditevents,logevents,linkedreport)
{
    const selectedreport = reports.find(reports => reports.id == bookingdetail.reportid);
    let title = bookingdetail.bookingcode + ' : ' + selectedreport.name + ' - ' + determinStatus(bookingdetail);
    $('#dlgSummary').dialog
    (
        {
            title: title,
            onOpen:function()
            {
                //1. Customer Details
                document.getElementById('fldSummaryCustName').innerHTML = readText(bookingdetail.custfirstname) + ' ' +  readText(bookingdetail.custlastname);
                document.getElementById('fldSummaryCustEmail').innerHTML = readText(bookingdetail.custemail);
                document.getElementById('fldSummaryCustMobile').innerHTML = readText(bookingdetail.custmobile);
                document.getElementById('fldSummaryCustPhone').innerHTML = readText(bookingdetail.custphone);
                document.getElementById('fldSummaryCustAddress').innerHTML = (readText(bookingdetail.custaddress1) + ' ' + readText(bookingdetail.custaddress2)).trim()+  ', ' + readText(bookingdetail.custcity)+ ' ' + readText(bookingdetail.custstate)+ ' ' + readText(bookingdetail.custpostcode);

                //2. Report Details
                document.getElementById('fldSummaryAgreedPrice').innerHTML = "$" + readAmount(bookingdetail.budget);
                document.getElementById('fldSummaryCommission').innerHTML = "$" + readAmount(bookingdetail.commission);
                document.getElementById('fldSummaryTravelCost').innerHTML = "$" + readAmount(bookingdetail.travel);
                document.getElementById('fldSummarySpotterFee').innerHTML = "$" + readAmount(bookingdetail.spotter);
                document.getElementById('fldSummaryCancellationFee').innerHTML = "$" + readAmount(bookingdetail.cancellationfee);
                document.getElementById('fldSummaryNotes').innerHTML = readText(bookingdetail.notes);
                document.getElementById('fldSummaryClientNotes').innerHTML = readText(bookingdetail.clientnotes);

                //3. Property Details
                document.getElementById('fldSummaryPropertyAddress').innerHTML = (readText(bookingdetail.address1) + ' ' + readText(bookingdetail.address2)).trim()+  ', ' + readText(bookingdetail.city)+ ' ' + readText(bookingdetail.state)+ ' ' + readText(bookingdetail.postcode);
                document.getElementById('fldSummaryRoomsStoreys').innerHTML = "Storeys:" + readNumber(bookingdetail.numstories) + ", ";
                document.getElementById('fldSummaryRoomsBedrooms').innerHTML = "Bedrooms:" + readNumber(bookingdetail.numbedrooms) + ", ";
                document.getElementById('fldSummaryRoomsBathrooms').innerHTML = "Bathrooms:" + readNumber(bookingdetail.numbathrooms) + ", ";
                document.getElementById('fldSummaryRoomstotal').innerHTML = "Total Rooms:" + readNumber(bookingdetail.numrooms) + ", ";
                document.getElementById('fldSummaryRoomsoutbuildings').innerHTML = "Outbuildings:" + readNumber(bookingdetail.numoutbuildings);
                document.getElementById('fldSummaryPropertyConstruction').innerHTML = readText(bookingdetail.construction);
                document.getElementById('fldSummaryPropertyAge').innerHTML = readText(bookingdetail.age); 
                document.getElementById('fldSummaryRequiredMeeting').innerHTML = "Meeting on site?" + readYesOrNo(bookingdetail.meetingonsite) + ", ";
                document.getElementById('fldSummaryRequiredAdvice').innerHTML = "Renovation advice?" + readYesOrNo(bookingdetail.renoadvice) + ", ";
                document.getElementById('fldSummaryRequiredInspection').innerHTML = "Pest Inspection Also?" + readYesOrNo(bookingdetail.pestinspection);

                //4. Estate Agent
                document.getElementById('fldSummaryAgentCompany').innerHTML = readText(bookingdetail.estateagentcompany);
                document.getElementById('fldSummaryAgentEmail').innerHTML = readText(bookingdetail.estateagentcontact);
                document.getElementById('fldSummaryAgentMobile').innerHTML = readText(bookingdetail.estateagentmobile);
                document.getElementById('fldSummaryAgentPhone').innerHTML = readText(bookingdetail.estateagentphone);

                //5.Architect
                createArchTable(bookingdetail,linkedreport);

                //6.Populate Audit History Table
                populateAuditTable(logevents,bookingdetail,linkedreport);
                

            },
            onClose:function()
            {
                clearFields();
            },
            buttons:
            [
                {
                    text:'Print',
                    handler: function()
                    {
                        doPromptOkCancel
                        (
                            'Print the booking summary? ',
                            function(result)
                            {
                                if(result)
                                {
                                    generatePDF(bookingdetail,reports,auditevents,logevents,linkedreport);
                                }
                            }
                        );
                    }
                },
                {
                    text: 'Close',
                    handler: function()
                    {
                      $('#dlgSummary').dialog('close');
                    }
                  }
            ]
        }
    ).dialog('center').dialog('open');
}