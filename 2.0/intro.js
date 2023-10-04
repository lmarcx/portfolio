"use strict"
//Définition des variables
// Variables pour suivre le dernier élément cliqué
var mainVerif = null;
var carré = document.querySelector("#carré-présentation");
var rond = document.querySelector("#rond-linkbox");
var triangle = document.querySelector("#container-triangle");
let verifTriSize = false;
let p1;
let p2;
let p3;
let text1;
let text2;
let text3;
let verifText = false;
let sectionRond;
let i1;
let i2;
let i3;
let i4;
let i5;
let verifIcon = false;
let sectionTriangle;
let l1;
let l2;
let l3;
let l4;
let l5;
let l6;
let l7;
let l8;
let l9;
let l10;
let verifLinks = false;

//Création du contenu
function createMainText(){
    let sectionPres = document.getElementById("carré-présentation");
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
    
}
function removeMainText(){
    p1.remove();
    p2.remove();
    p3.remove();
    
}

//Créations des icônes dans le rond aggrandi2 
function createIcons(){
    sectionRond = document.getElementById("rond-linkbox");
    //Création icone PDF
    i1 = document.createElement("i");
    i1.classList.add("fa-solid", "fa-file-pdf");
    i1.style.cssText += "transform:scale(6.5)";
    i1.style.cssText += "position: relative";
    i1.style.cssText += "top: 20%";
    i1.style.cssText += "left:49%";
    sectionRond.appendChild(i1);
    //Création icône Linkedin
    i2 = document.createElement("i");
    i2.classList.add("fa-brands", "fa-linkedin");
    i2.style.cssText += "transform:scale(6.5)";
    i2.style.cssText += "position: relative";
    i2.style.cssText += "top: 46%";
    i2.style.cssText += "left:80%";
    sectionRond.appendChild(i2);
    //Création icône GitHub
    i3 = document.createElement("i");
    i3.classList.add("fa-brands", "fa-github");
    i3.style.cssText += "transform:scale(6.5)";
    i3.style.cssText += "position: relative";
    i3.style.cssText += "top: 72%";
    i3.style.cssText += "left:46%";
    sectionRond.appendChild(i3);
    //Création icône Twitter
    i4 = document.createElement("i");
    i4.classList.add("fa-brands", "fa-twitter");
    i4.style.cssText += "transform:scale(6.5)";
    i4.style.cssText += "position: relative";
    i4.style.cssText += "top: 46%";
    i4.style.cssText += "left:15%";
    sectionRond.appendChild(i4);
    //Créations icône Adobe
    i5 = document.createElement("i");
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
function isIconHere(){
    if (verifIcon){
        removeIcons();
        verifIcon = false;
    }else if (!verifIcon && rond.classList.contains("mainview")){
        createIcons();
        verifIcon = true;
    }
}

function createLinks (){
    sectionTriangle = document.getElementById("triangle");
    //Création icone HTML
    l1 = document.createElement("i");
    l1.classList.add("fa-brands", "fa-html5");
    l1.style.cssText += "transform:scale(6.5)";
    l1.style.cssText += "position: relative";
    l1.style.cssText += "top: 90%";
    l1.style.cssText += "left:15%";
    sectionTriangle.appendChild(l1);
    //Création icone CSS
    l2 = document.createElement("i");
    l2.classList.add("fa-brands", "fa-css3-alt");
    l2.style.cssText += "transform:scale(6.5)";
    l2.style.cssText += "position: relative";
    l2.style.cssText += "top: 90%";
    l2.style.cssText += "left:35%";
    sectionTriangle.appendChild(l2);
    //Création icone JS
    l3 = document.createElement("i");
    l3.classList.add("fa-brands", "fa-js");
    l3.style.cssText += "transform:scale(6.5)";
    l3.style.cssText += "position: relative";
    l3.style.cssText += "top: 90%";
    l3.style.cssText += "left:55%";
    sectionTriangle.appendChild(l3);
    //Création icone PHP
    l4 = document.createElement("i");
    l4.classList.add("fa-brands", "fa-php");
    l4.style.cssText += "transform:scale(6.5)";
    l4.style.cssText += "position: relative";
    l4.style.cssText += "top: 90%";
    l4.style.cssText += "left:75%";
    sectionTriangle.appendChild(l4);
    //Création icone Bootstrap
    l5 = document.createElement("i");
    l5.classList.add("fa-brands", "fa-bootstrap");
    l5.style.cssText += "transform:scale(6.5)";
    l5.style.cssText += "position: relative";
    l5.style.cssText += "top: 70%";
    l5.style.cssText += "left:20%";
    sectionTriangle.appendChild(l5);
    //Création icone React
    l6 = document.createElement("i");
    l6.classList.add("fa-brands", "fa-react");
    l6.style.cssText += "transform:scale(6.5)";
    l6.style.cssText += "position: relative";
    l6.style.cssText += "top: 70%";
    l6.style.cssText += "left:40%";
    sectionTriangle.appendChild(l6);
    //Création icone Symfony
    l7 = document.createElement("i");
    l7.classList.add("fa-brands", "fa-symfony");
    l7.style.cssText += "transform:scale(6.5)";
    l7.style.cssText += "position: relative";
    l7.style.cssText += "top: 70%";
    l7.style.cssText += "left:60%";
    sectionTriangle.appendChild(l7);
    //Création icone NodeJS
    l8 = document.createElement("i");
    l8.classList.add("fa-brands", "fa-node-js");
    l8.style.cssText += "transform:scale(6.5)";
    l8.style.cssText += "position: relative";
    l8.style.cssText += "top: 50%";
    l8.style.cssText += "left:25%";
    sectionTriangle.appendChild(l8);
    //Création icone MySQL
    l9 = document.createElement("i");
    l9.classList.add("fa-solid", "fa-database");
    l9.style.cssText += "transform:scale(6.5)";
    l9.style.cssText += "position: relative";
    l9.style.cssText += "top: 50%";
    l9.style.cssText += "left:45%";
    sectionTriangle.appendChild(l9);
    //Création icone Wordpress
    l10 = document.createElement("i");
    l10.classList.add("fa-brands", "fa-wordpress");
    l10.style.cssText += "transform:scale(6.5)";
    l10.style.cssText += "position: relative";
    l10.style.cssText += "top: 30%";
    l10.style.cssText += "left:32%";
    sectionTriangle.appendChild(l10);
}

function removeLinks(){
    l1.remove();
    l2.remove();
    l3.remove();
    l4.remove();
    l5.remove();
    l6.remove();
    l7.remove();
    l8.remove();
    l9.remove();
    l10.remove();
}

function isLinksHere(){
    if (verifLinks){
        removeLinks();
        verifLinks = false;
    }else if (!verifLinks && triangle.classList.contains("mainview")){
        createLinks();
        verifLinks = true;
    }
}


//Fonctions pour toggle les formes
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
function upTriangle (){
    document.getElementById("triangle-border").style.width="50em";
    document.getElementById("triangle-border").style.height="50em";
    document.getElementById("triangle").style.width="796px";
    document.getElementById("triangle").style.height="796px";
    verifTriSize = true;
}
function downTriangle(){
    document.getElementById("triangle-border").style.width="10em";
    document.getElementById("triangle-border").style.height="10em";
    document.getElementById("triangle").style.width="156px";
    document.getElementById("triangle").style.height="156px";
    verifTriSize = false;
}
function isTextHere (){
    if (verifText){
        console.log("la ca doit remove putn");
        removeMainText();
        verifText = false;
    }else if (!verifText && carré.classList.contains("mainview")){
        createMainText();
        console.log("la ca creer");
        verifText = true;
    }
}
function toggleClick(box){
    //console.log(box);
    if(box==carré){
        if (rond.classList.contains("mainview") || triangle.classList.contains("mainview")){
            console.log("oui rond ou triangle en mv");
            rond.classList.remove("mainview", "leftside", "rightside");
            triangle.classList.remove("mainview", "leftside", "rightside");
            carré.classList.remove("leftside", "rightside");
        }
        
        console.log("yes papa");
        mainCarre ();
        isTextHere ();
        isIconHere();
        isLinksHere();
    }else if(box==rond){
        if (carré.classList.contains("mainview") || triangle.classList.contains("mainview")){
            triangle.classList.remove("mainview", "leftside", "rightside");
            carré.classList.remove("mainview", "leftside", "rightside");
            rond.classList.remove("leftside", "rightside");
        }
        console.log("c'est rond wesh");
        mainRond();
        isTextHere ();
        isIconHere();
        isLinksHere();
    }else if (box==triangle){
        if (rond.classList.contains("mainview")){
            removeIcons();
        }
        if (carré.classList.contains("mainview") || rond.classList.contains("mainview")){
            rond.classList.remove("mainview", "leftside", "rightside");
            carré.classList.remove("mainview", "leftside", "rightside");
            triangle.classList.remove("leftside", "rightside");
        }
        
        console.log("c'est triangle laaaaa")
        mainTriangle();
        isTextHere ();
        isIconHere();
        isLinksHere();
        }
        if (triangle.classList.contains("mainview")){
            upTriangle();
        }else{
            downTriangle();
        }
}

//Fonctions pour les animations 
function mainHover (){
    
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

