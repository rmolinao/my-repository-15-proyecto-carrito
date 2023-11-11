const carrito = document.getElementById("carrito") as HTMLDivElement;
const contenedorCarrito = document.querySelector("#lista-carrito tbody") as HTMLElement;
const vaciarCarritoBtn = document.getElementById("vaciar-carrito") as HTMLLinkElement;
const listaCursos = document.getElementById("lista-cursos") as HTMLDivElement;

const cargarEventListeners :() => void = () => {
    if(listaCursos){
        listaCursos.addEventListener('click', (e:MouseEvent) => {
            e.preventDefault();
            if ((e.target as HTMLElement).classList.contains('agregar-carrito')) {
                console.log("Agregando al Carrito ...");
            }
        });
    }

};

cargarEventListeners();