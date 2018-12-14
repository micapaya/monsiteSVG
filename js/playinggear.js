window.onmousemove = logMouseMoveX;

function logMouseMoveX(e) {
	let nodes = document.querySelectorAll(".parallax")
	e = event || window.event;	
	mousePos = { x: e.clientX };


	if (e.clientX < 650) {
		gear.setDirection(-1);
		nodes.forEach(function(node){
    		node.classList.add('gearRight');
    		node.classList.remove('gearLeft');
    	});
		
	} else {
		gear.setDirection(1);
		nodes.forEach(function(node){
    		node.classList.remove('gearRight');
    		node.classList.add('gearLeft');
    	});
	}


}


