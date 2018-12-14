let animation = bodymovin.loadAnimation({
	container: document.getElementById('svglogo'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'datJSON/data.json',
});

let liquid = bodymovin.loadAnimation({
	container: document.getElementById('liquid'),
	renderer: 'svg',
	autoplay: false,
	loop: false,
	path: 'datJSON/liquid.json',
});

let gear = bodymovin.loadAnimation({
	container: document.getElementById('gear'),
	renderer: 'svg',
	autoplay: true,
	loop: true,
	path: 'datJSON/gear.json',
});

let formres = bodymovin.loadAnimation({
	container: document.getElementById('formpres'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: '../datJSON/formationpres.json',
});

let parcour = bodymovin.loadAnimation({
	container: document.getElementById('parcours'),
	renderer: 'svg',
	loop: true,
	autoplay: false,
	path: '../datJSON/parcour.json',
});

let rollM = bodymovin.loadAnimation({
	container: document.getElementById('rollM'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'datJSON/rollM.json',
});

let back = bodymovin.loadAnimation({
	container: document.getElementById('fish_back'),
	renderer: 'svg',
	loop: true,
	autoplay: true,
	path: 'datJSON/fishback.json',
});
let worldMenu = bodymovin.loadAnimation({
	container: document.getElementById('worldmenu'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/worldmenu.json',
});
// button animation
let PanResume = bodymovin.loadAnimation({
	container: document.getElementById('resume_pan'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/boutons/resbut.json',
});

let Parcbut = bodymovin.loadAnimation({
	container: document.getElementById('parcours__pan'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/boutons/parcoursbut1.json',
});

let ResPan = bodymovin.loadAnimation({
	container: document.getElementById('parc__pan'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/boutons/savoir.json',
});


let FormationPan = bodymovin.loadAnimation({
	container: document.getElementById('formation__pan'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/boutons/formation.json',
});

let LoisirsPan = bodymovin.loadAnimation({
	container: document.getElementById('loisirs__pan'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/boutons/loisirs.json',
});

let ContactPan = bodymovin.loadAnimation({
	container: document.getElementById('contact__pan'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/boutons/contact.json',
});

let ArobaseIcon = bodymovin.loadAnimation({
	container: document.getElementById('arobase'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'datJSON/arobase.json',
});











// end of button world menu






