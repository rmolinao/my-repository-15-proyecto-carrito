"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var carrito = document.getElementById("carrito");
var contenedorCarrito = document.querySelector("#lista-carrito tbody");
var vaciarCarritoBtn = document.getElementById("vaciar-carrito");
var listaCursos = document.getElementById("lista-cursos");
var articulosCarrito = [];
var limpiarHTML = function () {
    contenedorCarrito.innerHTML = '';
};
var renderizarCarrito = function () {
    limpiarHTML();
    articulosCarrito.forEach(function (curso) {
        var inmagen = curso.inmagen, titulo = curso.titulo, precio = curso.precio, cantidad = curso.cantidad, id = curso.id;
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td> <img src=\"".concat(inmagen, "\" width=\"100\"></td>\n            <td>").concat(titulo, "</td>\n            <td>").concat(precio, "</td>\n            <td>").concat(cantidad, "</td>\n            <td>\n                <a href=\"#\" class=\"borrar-curso\" data-id=\"").concat(id, "\"> X </a>\n            </td>\n        ");
        contenedorCarrito.appendChild(row);
    });
};
var obtenerDatosCurso = function (curso) {
    var infoCurso = {
        inmagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent || '',
        precio: curso.querySelector('.precio span').textContent || '',
        id: curso.querySelector('a').getAttribute('data-id') || '',
        cantidad: 1,
    };
    var existe = articulosCarrito.some(function (curso) { return curso.id === infoCurso.id; });
    if (existe) {
        articulosCarrito.forEach(function (curso) {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
            }
        });
    }
    else {
        articulosCarrito = __spreadArray(__spreadArray([], articulosCarrito, true), [infoCurso], false);
    }
    return infoCurso;
};
var eliminarCurso = function (elemento) {
    elemento.preventDefault();
    var elementoTarget = elemento.target;
    if (elementoTarget.classList.contains('borrar-curso')) {
        var cursoId_1 = elementoTarget.getAttribute('data-id') || '';
        articulosCarrito = articulosCarrito.filter(function (curso) { return curso.id !== cursoId_1; });
        renderizarCarrito();
    }
};
var agregarCurso = function (elemento) {
    elemento.preventDefault();
    var elementoTarget = elemento.target;
    if (elementoTarget.classList.contains('agregar-carrito')) {
        var cursoSeleccionado = elementoTarget.parentElement.parentElement;
        var cursoInfo = obtenerDatosCurso(cursoSeleccionado);
        renderizarCarrito();
    }
};
var cargarEventListeners = function () {
    if (listaCursos) {
        listaCursos.addEventListener('click', agregarCurso);
    }
    if (carrito) {
        carrito.addEventListener('click', eliminarCurso);
    }
    if (vaciarCarritoBtn) {
        vaciarCarritoBtn.addEventListener('click', function () {
            articulosCarrito = [];
            limpiarHTML();
        });
    }
};
cargarEventListeners();
