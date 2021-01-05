function printPopUpText(printtext){
    ctx.fillText("printtext", 100, 100);
	ctx.stroke();
}

function printBottomText(printtext){
    ctx.fillText("printtext", 500, 100);
	ctx.stroke();
}

function writedate(){
    if(ishorisontal == true){
        ctx.font = "1.5em Arial";
    }
    else{
        ctx.font = "0.7em Arial";
    }

    if(HighRes == true){
        ctx.font = "1.4em Arial"
    }
    
    ctx.fillStyle = "#000000";
    ctx.fillText(date1, TextXPoint, TextRow2);
    ctx.fillText("10 timmars klocka", TextXPoint, TextRow3);
    ctx.fillText("Minuter:  " + getDate10baseMinute(), TextXPoint, TextRow4);
    ctx.fillText("Timmar:  " + getDate10baseHoure(), TextXPoint, TextRow5);
    ctx.fillText("Totaltiden:  " + get10baseClockTime(), TextXPoint, TextRow6);
    ctx.fillText(HighRes, TextXPoint, TextRow7);

    // Error messangers
    if(errorbool == 1){
        ctx.fillText("Error 418", TextXPoint, TextRow7);
        ctx.fillText("Error " + ErrorCode, TextXPoint, TextRow8);
    }
}