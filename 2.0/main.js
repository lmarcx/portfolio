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

function createTextEtLa (){
    let petitTriangle = document.getElementById("triangle-skillzbox");
    let triangleLilP = document.createElement("p");
    let triangleLilText = document.createTextNode("Et là !");
    triangleLilP.appendChild(triangleLilText);
    triangleLilP.classList.add("click");
    petitTriangle.appendChild(triangleLilP);
}
createTextEtLa();

function createTextIci (){
     //Création du texte dans le rond
    sectionRond = document.getElementById("rond-linkbox");
    p4 = document.createElement("p");
    text4 = document.createTextNode("Ou ici !");
    p4.appendChild(text4);
    p4.classList.add("click");
    sectionRond.appendChild(p4);
}
createTextIci ();

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

//Créations des icônes dans le rond aggrandi2 
function createIcons(){
    sectionRond = document.getElementById("rond-linkbox");
    //Création icone HTML
    let i1 = document.createElement("i");
    i1.classList.add("fa-brands", "fa-html5");
    i1.style.cssText += "transform:scale(6.5)";
    i1.style.cssText += "position: relative";
    i1.style.cssText += "top: 20%";
    i1.style.cssText += "left:48%";
    sectionRond.appendChild(i1);
    //Création icône CSS
    let i2 = document.createElement("i");
    i2.classList.add("fa-brands", "fa-css3-alt");
    i2.style.cssText += "transform:scale(6.5)";
    i2.style.cssText += "position: relative";
    i2.style.cssText += "top: 46%";
    i2.style.cssText += "left:80%";
    sectionRond.appendChild(i2);
    //Création icône JS
    let i3 = document.createElement("i");
    i3.classList.add("fa-brands", "fa-js");
    i3.style.cssText += "transform:scale(6.5)";
    i3.style.cssText += "position: relative";
    i3.style.cssText += "top: 72%";
    i3.style.cssText += "left:46%";
    sectionRond.appendChild(i3);
    //Création icône PHP
    let i4 = document.createElement("i");
    i4.classList.add("fa-brands", "fa-php");
    i4.style.cssText += "transform:scale(6.5)";
    i4.style.cssText += "position: relative";
    i4.style.cssText += "top: 46%";
    i4.style.cssText += "left:15%";
    sectionRond.appendChild(i4);
    //Créations icône Adobe
    let i5 = document.createElement("i");
    i5.classList.add("fa-regular", "fa-circle");
    i5.style.cssText += "transform:scale(6.5)";
    i5.style.cssText += "position: relative";
    i5.style.cssText += "top: 46%";
    i5.style.cssText += "left:42%";
    sectionRond.appendChild(i5);
}
function removeIcons(){
    i1.remove();
    i2.remove();
    i3.remove();
    i4.remove();
    i5.remove();
}


// Variables pour suivre le dernier élément cliqué
var mainVerif = null;
var carré = document.querySelector("#carré-présentation");
var rond = document.querySelector("#rond-linkbox");
var triangle = document.querySelector("#triangle-skillzbox");

// Fonction pour attribuer les classes et les propriétés CSS aux éléments enfants en fonction du clic
function toggleClick(box) {
    console.log("click marche")
    
    if(box.classList.contains("carré")){
        console.log("c'est carré chef");
        if(box.classList.contains("mainview")){
            removeClass();
            removeMainText();
            createTextClick();
        }
        removeClass(box);
        removeTextClick();
        createMainText();
        
        box.classList.toggle("mainview");
        rond.classList.toggle("leftside");
        triangle.classList.toggle("rightside");
        
    }else if(box.classList.contains("rond")){
        console.log("c'est rond chef");
        removeClass(box);
        removeMainText();
        removeTextClick();
        createTextClick();
        box.classList.toggle("mainview");
        rond.style.borderRadius="50em";
        carré.classList.toggle("leftside");
        triangle.classList.toggle("rightside");
        
        createIcons();
    }else if(box.classList.contains("triangle")){
        console.log("c'est triangle chef");
        removeClass(box);
        removeMainText();
        removeIcons();
        removeTextClick();
        createTextClick();
        
        box.classList.toggle("mainview");
        box.setAttribute("width", "800");
        box.setAttribute("height", "800");
        box.querySelector("polygon").setAttribute("points", "400,10 10,790 790,790");
        carré.classList.toggle("leftside");
        rond.classList.toggle("rightside");
    }else if(box.classList.contains("mainview")){
        box.classList.remove("mainview");
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


