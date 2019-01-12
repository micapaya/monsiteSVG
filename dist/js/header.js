function handleHeader(){
	const header = document.querySelector("nav")
 	const headerClasses = ['fade-in', 'fade-in2', 'fade-in3', 'fade-in4', 'fade-in5'];
  	const currentBreakPoint = getCurrentBreakpoint();
  	if (currentBreakPoint === 0){
  		headerClasses.forEach(function(className){
  			header.classList.remove(className);
  		});
  	} else {
  		headerClasses.forEach(function(className, index){
  			if (currentBreakPoint === index+1) {
  				header.classList.add(className);
  			} else {
  				header.classList.remove(className);
  			}
  		});
  	}
}