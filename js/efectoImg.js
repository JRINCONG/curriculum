const CajaTestimonial1 = document.getElementById('caja-testimonial1');
const CajaTestimonial2 = document.getElementById('caja-testimonial2');
const CajaTestimonial3 = document.getElementById('caja-testimonial3');

const Proyecto1=document.getElementById('Proyecto-one1')
const Proyecto2=document.getElementById('Proyecto-one2')
const Proyecto3=document.getElementById('Proyecto-one3')
const Proyecto4=document.getElementById('Proyecto-one4')


console.log(CajaTestimonial1)

const cargarImagen = (entradas, observador) => {
	// console.log(entradas)
	// console.log(observador)

	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('visible');
		} else {
			// entrada.target.classList.remove('visible');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.9
});

observador.observe(CajaTestimonial1)
observador.observe(CajaTestimonial2)
observador.observe(CajaTestimonial3);
observador.observe(Proyecto1);
observador.observe(Proyecto2);
observador.observe(Proyecto3);
observador.observe(Proyecto4);
//observador.observe(imagen2);