//world menu controls
let WmenuStatusEnter = false 
let Wmenu = document.getElementById("worldmenu");


Wmenu.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     
     if (PanToggle || WmenuStatusEnter && WmenuStatusOut ){
     	// worldMenu.playSegments([50,60], true);
     	worldMenu.playSegments([1,10], true);

     } else {
     	// worldMenu.playSegments([5,10], false);
     	worldMenu.playSegments([45,50], true);
     }
     WmenuStatusEnter = !WmenuStatusEnter && WmenuStatusOut;
});


let WmenuStatusOut = false
Wmenu.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
     if (PanToggle || WmenuStatusEnter && WmenuStatusOut ){
     
     	// worldMenu.playSegments([5,10], true);
     	worldMenu.playSegments([20,30], true);
     } else {
     	
     	// worldMenu.playSegments([10,5], true);
     	worldMenu.playSegments([54,60], true);
     }
     WmenuStatusOut = !WmenuStatusOut && WmenuStatusEnter;
});

// resume 
let resume = document.getElementById("resume_pan")
resume.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     PanResume.playSegments([10,20],true);
});
resume.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
    PanResume.playSegments([20,10],true);
});
resume.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     PanResume.playSegments([15,25],true);
});

// contact 
let contact = document.getElementById("contact__pan")
contact.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     ContactPan.playSegments([60,67],true);
});
contact.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
    ContactPan.playSegments([67,20],true);
});
contact.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     ContactPan.playSegments([10,0],true);
});

// loisirs 
let loisirs = document.getElementById("loisirs__pan")
loisirs.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     loisirsPan.playSegments([60,67],true);
});
loisirs.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
    LoisirsPan.playSegments([67,20],true);
});
loisirs.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     LoisirsPan.playSegments([10,0],true);
});

// parcours 
let parcours = document.getElementById("parcours__pan")
parcours.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     Parcbut.playSegments([60,67],true);
});
parcours.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
    Parcbut.playSegments([67,20],true);
});
parcours.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     Parcbut.playSegments([10,0],true);
});

// savoir 
let savoir = document.getElementById("parc__pan")
savoir.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     ResPan.playSegments([60,67],true);
});
savoir.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
    ResPan.playSegments([67,20],true);
});
savoir.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     ResPan.playSegments([10,0],true);
});

// formation 
let formation = document.getElementById("formation__pan")
formation.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     FormationPan.playSegments([60,67],true);
});
formation.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
    FormationPan.playSegments([67,20],true);
});
formation.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     FormationPan.playSegments([10,0],true);
});

let PanToggle = true



Wmenu.addEventListener("click", function( event ) {   
const nodes = document.querySelectorAll(".show_hide")
    if (PanToggle){
    	PanResume.playSegments([0,20],true);
    	ResPan.playSegments([0,20],true);
    	Parcbut.playSegments([0,20],true);
    	FormationPan.playSegments([0,20],true);
    	LoisirsPan.playSegments([0,20],true);
    	ContactPan.playSegments([0,20],true);
    	worldMenu.playSegments([40,60], true);
    	nodes.forEach(function(node){
    		node.classList.add('show');
    	});



    } else {
    	PanResume.playSegments([20,0],true);
    	ResPan.playSegments([20,0],true);
    	Parcbut.playSegments([20,0],true);
    	FormationPan.playSegments([20,0],true);
    	LoisirsPan.playSegments([20,0],true);
    	ContactPan.playSegments([20,0],true);
    	worldMenu.playSegments([0,20], true);
    	nodes.forEach(function(node){
    		node.classList.remove('show');
    	});


    	
    }
     
     PanToggle = !PanToggle;

});


// end of Wordld menu !!!! 



// arobase 
let Arobase = document.getElementById("hoverArobase")
Arobase.addEventListener("mouseenter", function( event ) {   
    // met en surbrillance la cible de mouseenter
     ArobaseIcon.playSegments([1,45],false);
});
Arobase.addEventListener("mouseout", function( event ) {   
    // met en surbrillance la cible de mouseenter
    ArobaseIcon.playSegments([45,1],false);
});
Arobase.addEventListener("click", function( event ) {   
    // met en surbrillance la cible de mouseenter
     ArobaseIcon.playSegments([68,1],false);
});