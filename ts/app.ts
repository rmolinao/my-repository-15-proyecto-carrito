
const carrito = document.getElementById("carrito") as HTMLDivElement;
const contenedorCarrito = document.querySelector("#lista-carrito tbody") as HTMLTableElement;
const vaciarCarritoBtn = document.getElementById("vaciar-carrito") as HTMLAnchorElement;
const listaCursos = document.getElementById("lista-cursos") as HTMLDivElement;

let articulosCarrito: CursoInfo[] = [];

interface CursoInfo {
    inmagen: string;
    titulo: string;
    precio: string;
    id: string;
    cantidad: number;
}

const limpiarHTML: () => void = () => {
    while ((contenedorCarrito as Node).firstChild as ChildNode) {
        (contenedorCarrito as Node).removeChild(contenedorCarrito.firstChild as ChildNode);
    }
}
const carritoHTML: () => void = () => {
    limpiarHTML();
    articulosCarrito.forEach((curso: CursoInfo) => {
        const row = document.createElement('tr') as HTMLTableRowElement;
        row.innerHTML = `
            <td>${curso.titulo}</td>
            `;
        contenedorCarrito.appendChild(row);
    });
}
const leerDatosCurso: (curso: HTMLDivElement) => void = (curso: HTMLDivElement) => {
    const infoCurso: CursoInfo = {
        inmagen: (curso.querySelector('img') as HTMLImageElement).src as string,
        titulo: (curso.querySelector('h4') as HTMLHeadElement).textContent as string,
        precio: (curso.querySelector('.precio span') as HTMLSpanElement).textContent as string,
        id: (curso.querySelector('a') as HTMLAnchorElement).getAttribute('data-id') as string,
        cantidad: 1
    };
    articulosCarrito = [...articulosCarrito, infoCurso];
    carritoHTML();

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