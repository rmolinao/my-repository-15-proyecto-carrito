
const carrito: HTMLDivElement = document.getElementById("carrito") as HTMLDivElement;
const contenedorCarrito: HTMLElement = document.querySelector("#lista-carrito tbody") as HTMLElement;
const vaciarCarritoBtn: HTMLLinkElement = document.getElementById("vaciar-carrito") as HTMLLinkElement;
const listaCursos: HTMLDivElement = document.getElementById("lista-cursos") as HTMLDivElement;

interface CursoInfo {
    inmagen: string;
    titulo: string;
    precio: string;
    id: string;
    cantidad: number;
}

const leerDatosCurso: (curso: HTMLDivElement) => void = (curso: HTMLDivElement) => {
    console.log(curso);
    const infoCurso: CursoInfo = {
        inmagen: (curso.querySelector('img') as HTMLImageElement).src as string,
        titulo: (curso.querySelector('h4') as HTMLHeadElement).textContent as string,
        precio: (curso.querySelector('.precio span') as HTMLSpanElement).textContent as string,
        id: (curso.querySelector('a') as HTMLAnchorElement).getAttribute('data-id')as string,
        cantidad: 1
    };
    console.log(infoCurso);
}

const cargarEventListeners: () => void = () => {
    if (listaCursos) {
        listaCursos.addEventListener('click', (e: MouseEvent) => {
            e.preventDefault();
            if ((e.target as HTMLElement).classList.contains('agregar-carrito')) {
                const cursoSeleccionado: HTMLDivElement = (e.target as HTMLAnchorElement).parentElement!.parentElement as HTMLDivElement;
                leerDatosCurso(cursoSeleccionado);
            }
        });
    }

};

cargarEventListeners();