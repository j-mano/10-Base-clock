//$(document).ready(function(){
    //Mobilecheckparameters. Computer with widescreen is defult.
    window.ishorisontal 	= false;
    window.isMobile 		= false;
    window.isWideScreen 	= true;
    window.screePropotion 	= 169;
    checkMobile();
    
    //Autoresolution dependent on screenresolution on device
    window.HighRes = false;

    // Errormessanger
	window.errorbool = 0;
	window.ErrorCode = 0;
    
    function WindowsSizeChecker(){
		WindowWidth  = window.innerWidth;
		WindowsHeigt = window.innerHeight;

		screenWidth  = screen.width;
		screenHeigt  = screen.height;

		if(WindowWidth < WindowsHeigt){
			ishorisontal = true;
            isWideScreen = false;

            // HighRes checker
            if(screenHeigt >= 1670){
                HighRes = true;
            }
            else{
                HighRes = false;
            }
		}
		else{
			ishorisontal = false;
            isWideScreen = true;

            // HighRes checker
            if(screenWidth >= 1670){
                HighRes = true;
            }
            else{
                HighRes = false;
            }
        }

		var proptionW = screenWidth;
		// Checks if 4:3 propotion.
		if(screenHeigt = (proptionW / 4) * 3){
			screePropotion = 43;
		}
		// Checks if 16:9 propotion.
		else if(screenHeigt = (proptionW / 16) * 9){
			screePropotion  = 169
		}
		// Checks if 16:10 propotion.
		else if(screenHeigt = (proptionW / 16) * 10){
			screePropotion  = 1610
		}
		else{
        //0 = unknown propotion.
			screePropotion = 0;
		}
	}

	function checkMobile(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 			isMobile = true;
		}
    }
//});