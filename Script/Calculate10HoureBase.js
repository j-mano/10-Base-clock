var base10time = 0.0;

function setCalc10BaseDate12(CurrentTime){
    
    CalculatedHours   	= CurrentTime.getHours() / 1.2;
    CalculatedMinutes 	= CurrentTime.getMinutes() * 1.6666;
    Hoursmodulus      	= Hours % 1.2;
    base10time 			= CalculatedHours + (CalculatedMinutes / 100.0);
}

function setCalc10baseDate24(CurrentTime){
    CalculatedHours   	= CurrentTime.getHours() / 2.4;
    CalculatedMinutes 	= CurrentTime.getMinutes() * 1.6666;
    Hoursmodulus 	  	= Hours % 2.4;
    base10time			= CalculatedHours + (CalculatedMinutes / 100.0);
}

function get10hourebase(){
    return base10time;
}