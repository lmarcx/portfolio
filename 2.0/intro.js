"use strict"
//Définition des variables
// Variables pour suivre le dernier élément cliqué
var mainVerif = null;
var carré = document.querySelector("#carré-présentation");
var rond = document.querySelector("#rond-linkbox");
var triangle = document.querySelector("#container-triangle");

/*// Fonction onclick pour le carré
function maFonctionCarré() {
    console.log("Carré a été cliqué !");
}

// Fonction onclick pour le rond
function maFonctionRond() {
    console.log("Rond a été cliqué !");
}

// Fonction onclick pour le triangle
function maFonctionTriangle() {
    console.log("Triangle a été cliqué !");
}

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les éléments avec la classe "carré" et ajouter la fonction onclick
    document.querySelectorAll(".carré").forEach(function(element) {
        element.onclick = maFonctionCarré;
    });

    // Sélectionner tous les éléments avec la classe "rond" et ajouter la fonction onclick
    document.querySelectorAll(".rond").forEach(function(element) {
        element.onclick = maFonctionRond;
    });

    // Sélectionner tous les éléments avec la classe "triangle" et ajouter la fonction onclick
    document.querySelectorAll(".container-clip").forEach(function(element) {
        element.onclick = maFonctionTriangle;
    });
});*/
function mainCarre (){
    carré.classList.toggle("mainview");
    rond.classList.toggle("leftside");
    triangle.classList.toggle("rightside");
}
function mainRond(){
    rond.classList.toggle("mainview");
    rond.style.borderRadius="50em";
    carré.classList.toggle("leftside");
    triangle.classList.toggle("rightside");
}
function mainTriangle(){
    triangle.classList.toggle("mainview");
    rond.classList.toggle("leftside");
    carré.classList.toggle("rightside");
}
function refresh (){
    carré.classList.remove("mainview", "leftside", "rightside");
    rond.classList.remove("mainview", "leftside", "rightside");
    triangle.classList.remove("mainview", "leftside", "rightside");
    rond.style.borderRadius="";
}


function toggleClick(box){
    //console.log(box);
    if(box==carré){
        console.log("yes papa");
        refresh();
        mainCarre();
    }else if(box==rond){
        console.log("c'est rond wesh");
        refresh();
        mainRond();
    }else if (box==triangle){
        console.log("c'est triangle laaaaa")
        refresh();
        mainTriangle();
    }
}

// Appeler la fonction lorsqu'un élément est cliqué
document.addEventListener("DOMContentLoaded", function () {
    var boxes = document.querySelectorAll(".menu > .box");
    

    if (boxes.length === 3) {
        boxes.forEach(function (box) {
            box.addEventListener("click", function () {
                toggleClick(box);
            });
        });
    }
});

