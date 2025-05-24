const buscador = document.getElementById("buscador");
const contenedorResultado = document.getElementById("resultado");
let listaPaises = [];

fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    listaPaises = data;
  })
  .catch((error) => {
    console.log("Error al hacer la peticion", error);
  });

const nombre = document.createElement("h2");
const bandera = document.createElement("img");
const region = document.createElement("p");
const poblacion = document.createElement("p");

bandera.classList.add("imagen-bandera");
nombre.classList.add("nombre-pais");
region.classList.add("region-pais");
poblacion.classList.add("habitantes-pais");

contenedorResultado.appendChild(bandera);
contenedorResultado.appendChild(nombre);
contenedorResultado.appendChild(region);
contenedorResultado.appendChild(poblacion);

buscador.addEventListener("input", (e) => {
  const busqueda = e.target.value.trim().toLowerCase();

  if (!busqueda) {
    display.textContent = "";
  }

  const resultado = listaPaises.find((pais) =>
    pais.translations.spa.common.toLowerCase().startsWith(busqueda),
  );

  if (resultado) {
    nombre.textContent = `${resultado.translations.spa.common}`;
    bandera.src = `${resultado.flags.svg}`;
    region.textContent = `${resultado.region}`;
    const habitantes = new Intl.NumberFormat("es-ES").format(resultado.population);
    poblacion.textContent = habitantes + " habitantes.";
  }
});
