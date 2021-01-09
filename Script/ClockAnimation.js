
// update function of the aplicaton. connected to the main updater in Main.
function animationUpdate(){
    AnimationClock();
}

// the animationclock itself. controlling all animation in the scen
function AnimationClock(){
    ClockAnimation();
}

// Animation of the square block animation. Move to othe file if aplications animation is growing bigger.
function ClockAnimation(){
    // Default potiton of animation of the clockanimation.
    // Pos X
    var animationPosX       = 300;
    
    // Pos Y
    var animationPosY       = 500;

    // Size and propotion in animation
    var sizeWidthMinut      = 300;
    var defaultArcSize      = 50;

    // The edge of the animation
    var animationsixeLeft   = animationPosX - sizeWidthMinut / 2;
    var animationsixeRight  = animationPosX + sizeWidthMinut / 2;

    // Getting time 
    var date10basehoure     = get10BaseTimeHoure();
    var date10baseminute    = get10BaseTimeMinute();

    var animationPosXMinut  = animationPosX;
    var sizeWidthMinut      = 300;
    var animationPosYMinut  = animationPosY + 200;

    crateHourBox(date10basehoure, animationPosX, animationPosY, defaultArcSize, "Hour", sizeWidthMinut );
    crateMinutBox(date10baseminute, animationPosXMinut , animationPosYMinut , defaultArcSize, "Minute", sizeWidthMinut) ;
}

// The functions to create an hourebox animation with 10 digit box animation
function crateHourBox(date10basehoure, xpos, ypos, size, text, sizewidth){
    createBorder(xpos, ypos, size, text);

    var sizeWidthMinut      = 300;
    var boxSixeHoure        = sizeWidthMinut / 10;

    var j = 0;
    for (i = 0; i < date10basehoure; i++) {
        j++;
        drawHoureBoxes(xpos - (sizewidth / 2) + (i * 25) + (j * 5), ypos, boxSixeHoure, size * 2);
    }
}

// The functions to create an hourebox animation with 100 digit box animation
function crateMinutBox(date10baseminute, xpos, ypos, size, text, sizewidth){
    createBorder(xpos, ypos, size, text);

    var sizeWidthMinut              = 300;
    var boxSixeMinute               = sizeWidthMinut / 100;

    var j = 0;
    for (i = 0; i < date10baseminute; i++) {
        j++;
        drawHoureBoxes(xpos - (sizewidth / 2) + (i * boxSixeMinute) + (j * 1), ypos, boxSixeMinute, size * 2);
    }
}

function createCompletbox(animationPosX, animationPosY, text, width, height){
    var animationsixeLeft   = animationPosX - width / 2;
    var animationsixeRight  = animationPosX + width / 2;
    //createBorder(xpos, ypos, size, text);
}

function createBorder(xpos, ypos, size, text){
    drawBorder(xpos, ypos, size)
    ctx.fillText(text, xpos - 150, ypos + 75);
}

// Draw the boarder of the hourmessure
function drawBorder(xpos, ypos, size){
    ctx.beginPath();
    ctx.moveTo(xpos - (size * 3), ypos - size);
    ctx.lineTo(xpos + (size * 3), ypos - size);
    ctx.lineTo(xpos + (size * 3), ypos + size);
    ctx.lineTo(xpos - (size * 3), ypos + size);
    ctx.lineTo(xpos - (size * 3), ypos - size);
    ctx.stroke();
}

// Drawing a box with input of postiton x y and the size of the cube
function drawHoureBoxes(xpos, ypos, boxSizeX, boxSizeY){
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(xpos, ypos - boxSizeY / 2, boxSizeX / 3, boxSizeY);
}

// getting the time from time api.
function get10BaseTimeHoure(){
    return getDate10baseHoure();
}

// getting the time from time api.
function get10BaseTimeMinute(){
    return getDate10baseHoure();
}