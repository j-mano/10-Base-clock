// Todo: Make use of it in this program for printing out specific language. Current code is moore like a mockup.
var markersram = null;
/* 
    Make use of these information on xml:
    https://stackoverflow.com/questions/1199180/read-xml-file-using-javascript.
    https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML
*/
function readXml(xmlFile){
    var markers = null;

    $(document).ready(function () {
        $.get("File.xml", {}, function (xml){
          $('marker',xml).each(function(i){
             markers = $(this);
          });
        });
    });

    return markers;
}

function ramstoragexml(){
    if(markersram == null)
        markersram = readXml();

    return markersram;
}

function getTitle(){
    markersram = ramstoragexml();
}

function getFotter(){
    markersram = ramstoragexml();
}

function getLanguageName(){
    markersram = ramstoragexml();
}

function getWelcomeText(){
    markersram = ramstoragexml();
}