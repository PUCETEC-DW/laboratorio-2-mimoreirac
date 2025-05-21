const buscador = document.getElementById("buscador");
const contenedorResultado = document.getElementById("resultado");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.results.forEach((pais) => {
      const nombre = document.createElement("p");
      nombre.classList.add("nombre-pais");
      nombre.innerHTML = `${pais.name}`;
      contenedorResultado.appendChild(nombre);
    });
  })
  .catch((error) => {
    console.log("Error al hacer la peticion", error);
  });
