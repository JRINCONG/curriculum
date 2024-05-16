 const boton= document.querySelector('.btn-carrar');
 const abrir = document.querySelector('.checkbtn');
 const menuMovil=document.querySelector('.menu-movil');


 

 

 boton.addEventListener('click',(e) =>{

   document.querySelector('.menu-movil').style='display:none';    
    

 } )


 abrir.addEventListener('click', (e) =>{

    document.querySelector('.menu-movil').style='display:flex';

 })



 menuMovil.addEventListener('click',(e)=>{

  const evento=e.target.className
  
  

  if(evento==="movil-items"){
    document.querySelector('.menu-movil').style='display:none';    
  }


 })











