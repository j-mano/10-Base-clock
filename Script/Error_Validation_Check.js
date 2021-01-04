// Errormessanger
window.errorbool = 0;
window.ErrorCode = 0;

function errorcheker(){
    // Error code for valus
    if(totaltime > 10.0001 || totaltime < 0){
        errorbool = 1;
        ErrorCode = 409;
    }

    // Error code can't read local clock.
    if(clocktranslation != 24 && clocktranslation != 12){
            errorbool = 1;
            ErrorCode = "Don't know if to use 12 or 24 hour clock";
    }
}

function validateTimne(){
    errorCheckTimeformat();

    return false;
}

function errorCheckTimeformat(){
    // Error code can't read local clock.
    if(clocktranslation != 24 && clocktranslation != 12){
        errorbool = 1;
        ErrorCode = "Don't know if to use 12 or 24 hour clock";
    }
}