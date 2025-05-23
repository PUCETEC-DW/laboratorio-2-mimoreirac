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

buscador.addEventListener("input", (e) => {
  const busqueda = e.target.value.trim().toLowerCase();

  if (!busqueda) {
    display.textContent = "";
  }

  const resultado = listaPaises.find((pais) =>
    pais.name.common.toLowerCase().startsWith(busqueda),
  );

  if (resultado) {
    const nombre = document.createElement("h2");
    nombre.textContent = `${resultado.name.common}`;
    contenedorResultado.appendChild(nombre);
  }
});
