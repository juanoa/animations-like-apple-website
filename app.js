const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
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
	.addIndicators() //Mostrar indicadores de inicio y final
	.setPin(intro)
	.addTo(controller);

//Text animation
let textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
	duration: 3000,
	triggerElement: intro,
	triggerHook: 0
})
	.setTween(textAnim)
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
