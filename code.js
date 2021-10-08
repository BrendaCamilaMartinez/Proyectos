let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
let ocultar = true;

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

function obtenerDatosDelUsuario() {
  const nombre = prompt("Ingresa tu nombre")
  const anioNacimiento = prompt("Ingresa el año en que naciste")
  const ciudad = prompt("Ingresa la ciudad donde vives")
  const interesPorJs = confirm("Te interesa Javascript?")
  const date = new Date

  datosPersona["nombre"] = nombre
  datosPersona["ciudad"] = ciudad
  datosPersona["interesPorJs"] = interesPorJs
  datosPersona["edad"] = date.getFullYear() - anioNacimiento
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  document.getElementById("nombre").innerText = datosPersona.nombre
  document.getElementById("edad").innerText = datosPersona.edad
  document.getElementById("ciudad").innerText = datosPersona.ciudad
  document.getElementById("javascript").innerText = datosPersona.interesPorJs ? "Si" : "No"


}

function recorrerListadoYRenderizarTarjetas() {
  const fila = document.getElementById("fila")
  fila.innerHTML = "" 
  console.log("ejecutando");
   console.log(ocultar);
   if(ocultar){
    for (let item of listado) {
      fila.innerHTML += `
        <div class="caja">
          <img src=${item.imgUrl} alt="${item.lenguajes}">
          <p class="lenguajes">Lenguajes: ${item.lenguajes}</p>
          <p class="bimestre">Bimestre: ${item.bimestre}</p>
        </div>
      `
      
  
    }
    ocultar = false;
   }else{
     fila.innerHTML = '';
     ocultar = true;
   }


}


  

  function alternarColorTema() {
    let body = document.querySelector('body');
    let cards = document.querySelectorAll('.item');
    body.classList.toggle("dark");
     cards.forEach(element => {
         element.classList.toggle("dark");
 
        
    });

 }
 
 let body = document.querySelector('body');
 body.onkeydown = function(event){
     if(event.key==='f'){
       let ocultar = document.querySelector('#sobre-mi').classList.remove('oculto');
     }
}
