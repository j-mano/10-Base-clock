$(document).ready(function(){

});

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
    ctx.fillText("Minuter:  " + CalculatedMinutes, TextXPoint, TextRow4);
    ctx.fillText("Timmar:  " + CalculatedHours, TextXPoint, TextRow5);
    ctx.fillText("Totaltiden:  " + totaltime, TextXPoint, TextRow6);
    ctx.fillText(HighRes, TextXPoint, TextRow7);

    // Error messangers
    if(errorbool == 1){
        ctx.fillText("Error 418", TextXPoint, TextRow7);
        ctx.fillText("Error " + ErrorCode, TextXPoint, TextRow8);
    }
}

function AnimationClock(){
    ctx.fillStyle = "#FF0000";
    /*ctx.fillRect(0,0,150,75);
    ctx.beginPath();
    ctx.arc(150,250,40,0,2*Math.PI);
    ctx.stroke();*/

    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.setLineDash([0]);
    ctx.arc(150,250,50,0,((2*Math.PI)/10)*totaltime);
    ctx.strokeStyle="black";
    ctx.stroke();

    //CALCULATIONS
    var temp = totaltime * 10;
    var tempmodulus = totaltime % 10;
    temp = temp - tempmodulus;

    //Hours
    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.setLineDash([0]);
    ctx.arc(150,250,40,0,((2*Math.PI)/100)*temp);
    ctx.strokeStyle="black";
    ctx.stroke();

    ctx.beginPath();
    ctx.lineWidth="4";
    ctx.setLineDash([10]);
    ctx.arc(150,250,40,0,2*Math.PI);
    ctx.strokeStyle="red";
    ctx.stroke();

    //Minuts
    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.setLineDash([0]);
    ctx.arc(150,250,30,0,((2*Math.PI)/100)*tempmodulus);
    ctx.strokeStyle="black";
    ctx.stroke();
}