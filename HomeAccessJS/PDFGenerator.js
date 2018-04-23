/**
 * Created by Fafa on 21/3/18.
 */

var btn_genferateHomeAccessReportPDF = function (mode){
    console.log("btn_genferateHomeAccessReportPDF");
    generateHomeAccessReportPDF(mode);
};


function generateHomeAccessReportPDF(mode) {
    console.log("generateHomeAccessReportPDF");
    //reset image number and general notes paragraphs number
    if(mode === 'save'){
        console.log('in Save');
        $('#savingPDFAlert').show('fade');
    }
    resetTotalCounting();

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // Page start drawing from here...
    var docDefinition = {
        footer: function (currentPage, pageCount) {
            if (currentPage === 1)
            {
                return {
                    columns: [
                        determineFrontPageFooter(mode),
                        {
                            text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                            alignment: 'right',
                            margin: [0, 0, 40, 0],
                            fontSize: 10,
                            color:'grey',
                            bold:true
                        }
                    ]
                };
            }
            else
            {
                return {
                    columns: [
                        determineFooter(mode),
                        {
                            text: '\nPage | ' + currentPage.toString() + ' of ' + pageCount,
                            alignment: 'left',
                            margin: [10, 0, 40, 0],
                            fontSize: 10,
                            color:'grey',
                            bold:true
                        }
                    ]
                };
            }
        },
        content: [
            /**
             * (1) Cover Page
             * */
            {
                image: coverPageLogo,
                width: 160,
                height: 160
            },
            giveMeHugeDraft(mode),
            {
                getHomeAccessData().page1,
                text:[
                    {text: page1_2, color: 'red'},
                    {text: page1_3, bold:true}
                ],
                pageBreak: 'after',
                style: 'coverPageHeader'
            },
            /**
             * (2) Report Detail Page
             */
            {
                text: "Home Access & Services Report",
                style: "pageTopHeader"
            }


        ],
        styles: {
            coverPageHeader: {
                fontSize: 50,
                color: 'black',
                italics: true,
                margin: [20, 50, 0, 100]
            },
            pageTopHeader: {
                fontSize: 20,
                color: 'red',
                bold: true
            },
            pageSubHeader: {
                fontSize: 11,
                color: 'red',
                bold: true,
                margin: [0, 0, 0, 2]
            },
        }
    };

    if (mode === 'save'){
        pdfMake.createPdf(docDefinition).getBase64(function(encodedString){
            var base64 = encodedString;
            doSavePDF(base64);
        });
    }
    //if the mode is final or preview, open the pdf directly, depends on what device the user is using
    else{
        if( isMobile.any() ){
            var reader = new FileReader();

            pdfMake.createPdf(docDefinition).getBlob(function(blob){
                reader.onload = function(e){
                    //window.location.href = reader.result;
                    window.open(reader.result,'_blank');
                };
                reader.readAsDataURL(blob);
            });
        }
        else{
            console.log("It is on pc");
            pdfMake.createPdf(docDefinition).open();
        }

    }

}
