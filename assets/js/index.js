const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el océano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviértete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

const propiedadesDivs = document.querySelector('.propiedades');
const cantidadCuartosInput = document.querySelector('#cantidadCuartosInput');
const metrosDesdeInput = document.querySelector('#metrosDesdeInput');
const metrosHastaInput = document.querySelector('#metrosHastaInput');
const buscarButton = document.querySelector('.btn.btn-warning');
const totalPropiedadesSpan = document.querySelector('#totalPropiedadesSpan'); 

propiedadesJSON.forEach((propiedad, index) => {
  const propiedadDiv = document.createElement('div');
  propiedadDiv.classList.add('propiedad');
  propiedadDiv.innerHTML = `
    <div class="img" style="background-image: url('${propiedad.src}')"></div>
    <section>
      <h5>${propiedad.name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${propiedad.rooms}</p>
        <p>Metros: ${propiedad.m}</p>
      </div>
      <p class="my-3">${propiedad.description}</p>
      <button class="btn btn-info">Ver más</button>
    </section>
  `;

  propiedadesDivs.appendChild(propiedadDiv);
});

// funcion para calcular y actualizar el total de propiedades
function actualizarTotalPropiedades() {
  const propiedadesVisibles = document.querySelectorAll('.propiedad:not([style*="display: none"])');
  totalPropiedadesSpan.textContent = propiedadesVisibles.length;
}


actualizarTotalPropiedades();

// filtros
function filtrarPropiedades() {
  const cantidadCuartos = parseInt(cantidadCuartosInput.value);
  const metrosDesde = parseInt(metrosDesdeInput.value);
  const metrosHasta = parseInt(metrosHastaInput.value);
  const propiedades = document.querySelectorAll('.propiedad');

  if (cantidadCuartosInput.value === '' || metrosDesdeInput.value === '' || metrosHastaInput.value === '') {
    alert('¡Faltan valores por ingresar!');
    return;
  }

  propiedades.forEach((propiedad) => {
    const cuartos = parseInt(propiedad.querySelector('.d-flex p:first-child').textContent.split(':')[1]);
    const metros = parseInt(propiedad.querySelector('.d-flex p:last-child').textContent.split(':')[1]);

    if (
      (cantidadCuartosInput.value === '' || cantidadCuartos === cuartos) &&
      (metros >= metrosDesde && metros <= metrosHasta)
    ) {
      propiedad.style.display = 'block';
    } else {
      propiedad.style.display = 'none';
    }
  });

  
  actualizarTotalPropiedades();
}


buscarButton.addEventListener('click', filtrarPropiedades);
