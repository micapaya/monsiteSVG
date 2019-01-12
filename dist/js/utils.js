// recupère un breakpoint en frames à partir d'un breakpoint en secondes
function getBpInFrames(anim, bp){
	const totalDuration = anim.getDuration(false);
	const totalFrames = anim.getDuration(true);
	return Math.round((bp * totalFrames) / totalDuration);
}

function getScrollPos(){
	return window.scrollY;
}




function getCurrentBreakpoint(breakpoint){
	const scrollpos = getScrollPos();
	if (!breakpoint){
 		breakpoint = window.innerHeight;
	}
  	return Math.round(scrollpos / breakpoint +0.4);
}

