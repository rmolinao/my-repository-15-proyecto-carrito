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
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
};
var carritoHTML = function () {
    limpiarHTML();
    articulosCarrito.forEach(function (curso) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(curso.titulo, "</td>\n            ");
        contenedorCarrito.appendChild(row);
    });
};
var leerDatosCurso = function (curso) {
    var infoCurso = {
        inmagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };
    articulosCarrito = __spreadArray(__spreadArray([], articulosCarrito, true), [infoCurso], false);
    carritoHTML();
};
var cargarEventListeners = function () {
    if (listaCursos) {
        listaCursos.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains('agregar-carrito')) {
                var cursoSeleccionado = e.target.parentElement.parentElement;
                leerDatosCurso(cursoSeleccionado);
            }
        });
    }
};
cargarEventListeners();
