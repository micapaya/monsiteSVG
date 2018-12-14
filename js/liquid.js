liquid.play();
liquid.addEventListener('enterFrame', handleLiquid);
	
function handleLiquid(){
	const totalF = liquid.totalFrames;
	const liquidBp = [ 0, totalF * 0.25, totalF * 0.68, totalF * 0.80, totalF];
	

	// si l'ancienne position de scroll est plus petite que la position actuelle,
	// on a scrollé vers le bas = direction est forward(1), sinon -1
	let direction;
	if (previousScroll < getScrollPos()) {
		direction = 1;
	} else if (previousScroll > getScrollPos()){
		direction = -1;
	} else {
		direction = liquid.playDirection;
	}

	liquid.setDirection(direction);
	if ((direction === 1 && liquid.currentFrame >= liquidBp[getCurrentBreakpoint()+1]) ||
		(direction === -1 && liquid.currentFrame < liquidBp[getCurrentBreakpoint()])
		) {
		liquid.pause();
	} else {
		liquid.play();
	}
}