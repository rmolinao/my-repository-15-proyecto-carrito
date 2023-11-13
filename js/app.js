"use strict";
var carrito = document.getElementById("carrito");
var contenedorCarrito = document.querySelector("#lista-carrito tbody");
var vaciarCarritoBtn = document.getElementById("vaciar-carrito");
var listaCursos = document.getElementById("lista-cursos");
var leerDatosCurso = function (curso) {
    console.log(curso);
    var infoCurso = {
        inmagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    };
    console.log(infoCurso);
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
