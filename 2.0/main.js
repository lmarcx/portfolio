"use strict";
//Initialisation des variables
let sectionPres;
let sectionRond;
let sectionTriangle;
let pClick;
let p1;
let p2;
let p3;
let p4;
let p5;
let textClick;
let text1;
let text2;
let text3;
let text4;
let text5;
let clickVerif;
//Création des éléments de la page About
function createTextClick(){
    sectionPres = document.getElementById("carré-présentation");
    pClick = document.createElement("p");
    textClick = document.createTextNode("Hey, click !");
    pClick.appendChild(textClick);
    sectionPres.appendChild(pClick);
    pClick.classList.add("click");
    clickVerif = true;

}
createTextClick();

function removeTextClick(){
    pClick.remove();
    clickVerif = false;
}
function createMainText(){
    sectionPres = document.getElementById("carré-présentation");
    //Création premier paragraphe
    p1 = document.createElement("p");
    text1 = document.createTextNode("Jeune développeur de 27 ans, je suis en formation depuis Juin 2023 pour obtenir le titre Développeur Web Web Mobile.");
    p1.appendChild(text1);
    p1.classList.add("text-present");
    sectionPres.appendChild(p1);
    //Création deuxième paragraphe
    p2 = document.createElement("p");
    text2 = document.createTextNode("Actuellement je recherche un stage pour venir compléter cette formation, solidifier mes compétences et mettre un pied dans le milieu professionnel.");
    p2.appendChild(text2);
    p2.classList.add("text-present");
    sectionPres.appendChild(p2);
    //Création troisième paragraphe
    p3 = document.createElement("p");
    text3 = document.createTextNode("Je vous invite à aller regarder mes différents travaux dans la section adaptée. Sur cette page, vous pouvez également retrouver tous mes liens utiles et mes diverses compétences.");
    p3.appendChild(text3);
    p3.classList.add("text-present");
    sectionPres.appendChild(p3);
    clickVerif = true;
    //Création du texte dans le rond
    sectionRond = document.getElementById("rond-linkbox");
    p4 = document.createElement("p");
    text4 = document.createTextNode("Ici aussi !");
    p4.appendChild(text4);
    p4.classList.add("click");
    sectionRond.appendChild(p4);
}
function removeMainText(){
    p1.remove();
    p2.remove();
    p3.remove();
    p4.remove();
    clickVerif = false;
}

function removeClass(){
    carré.classList.remove("leftside", "rightside", "mainview");
    rond.classList.remove("leftside", "rightside", "mainview");
    triangle.classList.remove("leftside", "rightside", "mainview");
    triangle.setAttribute("width", "160");
    triangle.setAttribute("height", "160");
    triangle.querySelector("polygon").setAttribute("points", "80,10 10,150 150,150");
    rond.style.borderRadius="";
}


// Variables pour suivre le dernier élément cliqué et le dernier SVG cliqué
var dernierElementClique = null;
var dernierSvgClique = null;
var carré = document.querySelector("#carré-présentation");
var rond = document.querySelector("#rond-linkbox");
var triangle = document.querySelector("#triangle-skillzbox");

// Fonction pour attribuer les classes et les propriétés CSS aux éléments enfants en fonction du clic
function toggleClick(box) {
    console.log("click marche")
    if(box.classList.contains("carré")){
        console.log("c'est carré chef");
        removeClass(box);
        removeTextClick()
        createMainText()
        box.classList.toggle("mainview");
        rond.classList.toggle("leftside");
        triangle.classList.toggle("rightside");
    }else if(box.classList.contains("rond")){
        console.log("c'est rond chef");
        removeClass(box);
        removeMainText()
        createTextClick();
        box.classList.toggle("mainview");
        rond.style.borderRadius="50em";
        carré.classList.toggle("leftside");
        triangle.classList.toggle("rightside");
    }else if(box.classList.contains("triangle")){
        console.log("c'est triangle chef");
        removeClass(box);
        removeMainText()
        createTextClick();
        box.classList.toggle("mainview");
        box.setAttribute("width", "800");
        box.setAttribute("height", "800");
        box.querySelector("polygon").setAttribute("points", "400,10 10,790 790,790");
        carré.classList.toggle("leftside");
        rond.classList.toggle("rightside");
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


