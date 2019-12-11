
function generatePDF(bookingdetail,reports,auditevents,logevents,linkedreport) 
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
                                        text:[trimAddress(readText(bookingdetail.custaddress1) , ' ' , readText(bookingdetail.custaddress2)), ', ' , readText(bookingdetail.custcity), ' ' , readText(bookingdetail.custstate), ' ' , readText(bookingdetail.custpostcode)],
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
                                        text:[trimAddress(readText(bookingdetail.address1) , ' ' , readText(bookingdetail.address2)), ', ' , readText(bookingdetail.city), ' ' , readText(bookingdetail.state), ' ' , readText(bookingdetail.postcode)],
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
                                                readYesOrNo(bookingdetail.meetingonsite),' ',
                                                {text:'Renovation advice? ',style:'tableContentsQ'},
                                                readYesOrNo(bookingdetail.renoadvice),' ',
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
                    createArchitectTable(bookingdetail,linkedreport)
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
                    createAuditLogTable(auditevents,logevents,bookingdetail,linkedreport)
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
            },
            //used for combined report only
            archTableHeader:{
                bold: true,
                fontSize: 12,
                color: 'black',
                alignment: 'left',
                margin:[40,0,0,0]
            },
            //used for combined report only
            archTableTitle:{
                fontSize:11,
                margin:[40,0,0,0]
            }
        }
    };
    pdfMake.createPdf(docDefinition).print();
}