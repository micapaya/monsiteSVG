window.addEventListener('scroll', function(e) { 
	handleHeader();
	handleParcour();
	handleLiquid();

	previousScroll = getScrollPos();
});	