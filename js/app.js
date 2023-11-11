"use strict";
var carrito = document.getElementById("carrito");
var contenedorCarrito = document.querySelector("#lista-carrito tbody");
var vaciarCarritoBtn = document.getElementById("vaciar-carrito");
var listaCursos = document.getElementById("lista-cursos");
var cargarEventListeners = function () {
    if (listaCursos) {
        listaCursos.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains('agregar-carrito')) {
                console.log("Agregando al Carrito ...");
            }
        });
    }
};
cargarEventListeners();
