var base10time = 0.0;

// Update the 10houre base from the system time reported by the os.
function updateCalcUpdate(){
    var date1 = getRegularClockTime();

	set10BaseClockGeneral(date1);
}

// this function is checking the date is 12houre base or 24houre base before it start to calculate the function. This is planed to be calld from main update function.
function set10BaseClockGeneral(CurrentTime){
    if(is24HoureDate(CurrentTime))
        setCalc10baseDate24(CurrentTime);

    if(is12HoureDate(CurrentTime))
        setCalc10BaseDate12(CurrentTime);
}

// Function to call to update the 10base time. Assumed to to get the date in 12 houre date formate.
// Gets in the date and update the get function in this file.
function setCalc10BaseDate12(CurrentTime){
    var internalbase10time = Calculate10BaseDate12houre(CurrentTime);
    base10time 			= internalbase10time;
}

// Function to call to update the 10base time. Assumed to to get the date in 24 houre date formate.
// Gets in the date and update the get function in this file.
function setCalc10baseDate24(CurrentTime){
    var internalbase10time = Calculate10BaseDate24houre(CurrentTime);
    base10time			= internalbase10time;
}

// The calculatefunktion of 12Houre base
function Calculate10BaseDate12houre(CurrentTime){
    var CalculatedHours   	= CurrentTime.getHours() / 1.2;
    var CalculatedMinutes 	= CurrentTime.getMinutes() * 1.6666;
    var Hoursmodulus      	= CurrentTime.getHours();
    var CalculatedMinutes   = CalculatedMinutes + Hoursmodulus;

    return CalculatedHours + (CalculatedMinutes / 100.0);
}

// The calculatefunktion of 24Houre base
function Calculate10BaseDate24houre(CurrentTime){
    var CalculatedHours   	= CurrentTime.getHours() / 2.4;
    var CalculatedMinutes 	= CurrentTime.getMinutes() * 1.6666;
    var Hoursmodulus 	  	= CurrentTime.getHours();
    var CalculatedMinutes   = CalculatedMinutes + Hoursmodulus;

    return CalculatedHours + (CalculatedMinutes / 100.0);
}

// This function is the getfunction to get the 10 base date in form of an float value
function getCalc10HoureBase(){
    updateCalcUpdate();

    return base10time;
}