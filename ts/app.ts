const carrito = document.getElementById("carrito") as HTMLDivElement;
const contenedorCarrito = document.querySelector("#lista-carrito tbody") as HTMLTableElement;
const vaciarCarritoBtn = document.getElementById("vaciar-carrito") as HTMLAnchorElement;
const listaCursos = document.getElementById("lista-cursos") as HTMLDivElement;

interface CursoInfo {
    inmagen: string;
    titulo: string;
    precio: string;
    id: string;
    cantidad: number;
}

let articulosCarrito: CursoInfo[] = [];

const limpiarHTML = (): void => {
    contenedorCarrito.innerHTML = '';
};

const renderizarCarrito = (): void => {
    limpiarHTML();
    articulosCarrito.forEach((curso: CursoInfo) => {
        const { inmagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${inmagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });
};

const obtenerDatosCurso = (curso: HTMLDivElement): CursoInfo => {
    const infoCurso: CursoInfo = {
        inmagen: curso.querySelector('img')!.src,
        titulo: curso.querySelector('h4')!.textContent || '',
        precio: (curso.querySelector('.precio span') as HTMLSpanElement).textContent || '',
        id: curso.querySelector('a')!.getAttribute('data-id') || '',
        cantidad: 1,
    };

    const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

    if (existe) {
        articulosCarrito.forEach((curso) => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
            }
        });
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    return infoCurso;
};

const eliminarCurso = (elemento: MouseEvent): void => {
    elemento.preventDefault();
    const elementoTarget = elemento.target as HTMLElement;
    if (elementoTarget.classList.contains('borrar-curso')) {
        const cursoId = elementoTarget.getAttribute('data-id') || '';
        articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
        renderizarCarrito();
    }
};

const agregarCurso = (elemento: MouseEvent): void => {
    elemento.preventDefault();
    const elementoTarget = elemento.target as HTMLElement;
    if (elementoTarget.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = elementoTarget.parentElement!.parentElement as HTMLDivElement;
        const cursoInfo = obtenerDatosCurso(cursoSeleccionado);
        renderizarCarrito();
    }
};

const cargarEventListeners = (): void => {
    if (listaCursos) {
        listaCursos.addEventListener('click', agregarCurso);
    }

    if (carrito) {
        carrito.addEventListener('click', eliminarCurso);
    }
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', () => {
            articulosCarrito = [];
            limpiarHTML();
        });
    }
};

cargarEventListeners();