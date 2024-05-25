//Funcion que se supone que hace que los corazones se pongan rojos o grises, no me funciona,
//cuando pruebe, recordar poner el enlace del script en el body del html

document.addEventListener("DOMContentLoaded", function() {  
    document.querySelectorAll(".heart-fav").forEach(function(heart) {
        heart-fav.addEventListener("click", function() {
            heart-fav.classList.toggle("favorited");
        });
    });
});