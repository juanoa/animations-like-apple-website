const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const titulo = intro.querySelector('.titulo');
const rendimiento = intro.querySelector('.rendimiento');
//END SECTION

const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Escena
let scene = new ScrollMagic.Scene({
	duration: 26000, //Duracion del video en ms
	triggerElement: intro,
	triggerHook: 0
})
	.setPin(intro)
	.addTo(controller);

//titulo animation
let tituloAnim = TweenMax.fromTo(titulo, 3, { opacity: 1 }, { opacity: 0 });

let sceneTitulo = new ScrollMagic.Scene({
	duration: 3000,
	triggerElement: intro,
	triggerHook: 0
})
	.setTween(tituloAnim)
	.addTo(controller);

//Animacion ON rendimiento
let rendimientoAnim = TweenMax.fromTo(
	rendimiento,
	3,
	{ opacity: 0 },
	{ opacity: 1 }
);
let sceneRendimiento = new ScrollMagic.Scene({
	duration: 1000,
	triggerElement: intro,
	triggerHook: 0
})
	.offset(3000)
	.setTween(rendimientoAnim)
	.addTo(controller);

//Animacion del video
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
	scrollpos = e.scrollPos / 1000; //Para sacar los segundos por los que deberia ir el video
});

setInterval(() => {
	delay += (scrollpos - delay) * accelamount;
	video.currentTime = delay;
}, 100); // 1000/30 => 1 segundo entre los 30 fps
