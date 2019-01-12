window.addEventListener('scroll', function(e) { 
	handleHeader();
	handleParcour();
	handleLiquid();

	previousScroll = getScrollPos();
});	

console.log("Salut tout le monde");