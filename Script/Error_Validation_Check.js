// Errormessanger
window.errorbool = 0;
window.ErrorCode = 0;

function validateTimne(){
    if (!errorCheckTimeformat()){
        return false;
    }
    
    if (!continous10Hourebasecheck()){
        return false;
    }

    return true;
}

function errorCheckTimeformat(){
    // Error code can't read local clock.
    if(clocktranslation != 24 && clocktranslation != 12){
        errorbool = 1;
        ErrorCode = "Don't know if to use 12 or 24 hour clock";
    }
}

function continous10Hourebasecheck(){
    var date = get10baseClockTime();

    is10HoureDate(date);
}

function is12HoureDate(Date1){
    if (Date1.toString().match(/am|pm/i))
		return true;

    return false;
}

function is24HoureDate(Date1){
    if (Date1.toString().match(/am|pm/i))
		return false;

    return true;
}

/*
    Expecting to get in date as a float and returning if the float is witing the dateparameters.
*/
function is10HoureDate(date){
    var houreBool = base10HoureRange();
    var minutBool = base10MinuteRange();

    if(houreBool && minutBool)
        return true;

    return false;
}

function base10HoureRange(dateHoure){
    if (dateHoure < 10)
        return true;

    return false;
}

function base10MinuteRange(dateMinute){
    if (dateMinute < 100)
        return true;

    return false;
}