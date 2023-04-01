var nombrePersona = document.getElementById('nombrePrincipal');
var profesionPersona = document.getElementById('profesionPrincipal');
var fotoPersona = document.getElementById('fotoCarnet');
var edadPersona = document.getElementById('edad');
var callePersona = document.getElementById('calle');
var numeroPersona = document.getElementById('numero');
var codigoPersona = document.getElementById('codigo');
var estadoPersona = document.getElementById('estado');
var emailPersona = document.getElementById('email');
var telefonoPersona = document.getElementById('telefono');
var wappPersona = document.getElementById('wapp');

/*.......contactos .................*/
function envioWap() {
  const url = `https://wa.me/5491234567?text=Queremos%20contactarte%20para%20una%20entrevista%20de%20trabajo`;
      window.open(url, '_blank'); 
     }
var datosemail = '';
function mailTo()
     {
     window.location.href = `mailto:${datosemail}`;
     }     

/*... secciones  .....*/
var secciones = [
    'conoc',
    'cont',
    'leng',
    'expe',
    'forma',
    'sobre'
];

function seleccionSeccion(actual){
    for(var i = 0; i < 6 ; i++){
        var borrarSeccionActual = document.getElementById(secciones[i]);
        borrarSeccionActual.style.display= "none";
    }

    var mostrarSeccion = document.getElementById(actual);
    mostrarSeccion.style.display = "block"
}


fetch('https://randomuser.me/api/?format=json')
    .then(x => x.text())
    .then(y => {
        var datosPersona = JSON.parse(y).results[0];
        nombrePersona.innerHTML = datosPersona.name.title + " "+
                                    datosPersona.name.first + " "+ datosPersona.name.last;
        fotoPersona.src= datosPersona.picture.large;
        edadPersona.innerHTML = datosPersona.dob.age;
        callePersona.innerHTML = datosPersona.location.street.name;
        numeroPersona.innerHTML = datosPersona.location.street.number;
        codigoPersona.innerHTML = datosPersona.location.postcode;
        estadoPersona.innerHTML = datosPersona.location.city + datosPersona.location.country;
        emailPersona.innerHTML = datosPersona.email;
        telefonoPersona.innerHTML = datosPersona.cell;
        wappPersona.innerHTML = datosPersona.cell;

        numerowap= '549'+wappPersona.innerText;
        datosemail= emailPersona.innerText;

         });