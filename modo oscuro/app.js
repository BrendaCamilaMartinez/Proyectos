
function modoOscuro() {
   let body = document.querySelector('body');
   let cards = document.querySelectorAll('.item');
   body.classList.toggle("dark-mode");
    cards.forEach(element => {
        element.classList.toggle("dark-mode-cards");

       
   });
   if (body.classList.value==='dark dark-mode') {
      console.log("tiene la clase");
      
   }
}
