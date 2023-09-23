"use strict";

// Déclaration des variables
/*var boxes = document.querySelectorAll('.box');
let open = false;
let carré = document.querySelector('#carré-présentation');
let rond = document.querySelector('rond-linkbox');
let triangle = document.querySelector('#triangle-skillzbox')*/



//
// CODE PRINCIPAL
//
function toggleMain(){
    /*switch(true){
        case this.classList.contains('none'):
            this.classList.add('mainview');
            this.classList.remove('none');
            break;
        case 'leftside':
            this.classList.remove('leftside');
            thisclassList.add('mainview');
        case 'rightside':
            this.classList.remove('rightside');
            this.classList.add('mainview');
        case 'mainview':
            thisclassList.remove('mainview');
    }*/
    console.log('ca marche');
}

/*document.addEventListener("DOMContentLoaded", function () {
    let carré = document.getElementById("carré-présentation");
    carré.onclick = function(){
        if (open){
            carré.style.height = "10em";
            carré.style.width = "10em"; 
        } else {
            carré.style.height = "50em";
            carré.style.width = "50em";
        }
        open = !open;
    };
});
*/
/*document.addEventListener("DOMContentLoaded", function () {
boxes.forEach(box => {
    box.addEventListener('click', toggleMain);
})
});*/
// Variables pour suivre le dernier élément cliqué et le dernier SVG cliqué
var dernierElementClique = null;
var dernierSvgClique = null;

// Fonction pour attribuer les classes et les propriétés CSS aux éléments enfants en fonction du clic
function attribuerClassesEtStylesAuClic(elementClique) {
    var enfants = document.querySelectorAll(".menu > .box");

    if (enfants.length === 3) {
        // Retirer les classes "mainview", "leftside" et "rightside" de tous les éléments
        enfants.forEach(function (enfant) {
            enfant.classList.remove("mainview");
            enfant.classList.remove("leftside");
            enfant.classList.remove("rightside");
        });

        // Remettre le dernier SVG cliqué à ses dimensions d'origine
        if (dernierSvgClique) {
            dernierSvgClique.setAttribute("width", "160");
            dernierSvgClique.setAttribute("height", "160");
            dernierSvgClique.querySelector("polygon").setAttribute("points", "80,10 10,150 150,150");
            dernierSvgClique = null;
        }

        if (elementClique.tagName === "svg") {
            // Si le SVG est cliqué, ajuster ses attributs pour obtenir un triangle dans une boîte de 800x800
            if (dernierSvgClique === elementClique) {
                // Si le même SVG est cliqué une deuxième fois, retourner à l'état d'origine
                elementClique.setAttribute("width", "160");
                elementClique.setAttribute("height", "160");
                elementClique.querySelector("polygon").setAttribute("points", "80,10 10,150 150,150");
                dernierSvgClique = null;
            } else {
                elementClique.setAttribute("width", "800");
                elementClique.setAttribute("height", "800");
                elementClique.querySelector("polygon").setAttribute("points", "400,10 10,790 790,790");
                dernierSvgClique = elementClique;
            }
        } else if (elementClique.classList.contains("rond")) {
            // Si le rond est cliqué, attribuer la classe "mainview", appliquer la propriété CSS "border-radius"
            // et attribuer les classes "leftside" et "rightside" aux autres éléments
            if (dernierElementClique === elementClique) {
                // Si le même rond est cliqué une deuxième fois, retourner à l'état d'origine
                dernierElementClique = null;
                elementClique.style.borderRadius = "";
            } else {
                elementClique.classList.add("mainview");
                elementClique.style.borderRadius = "50em";
                dernierElementClique = elementClique;

                // Diviser les deux autres éléments en "leftside" et "rightside"
                var autresEnfants = Array.from(enfants).filter(function (enfant) {
                    return enfant !== elementClique;
                });

                if (autresEnfants.length === 2) {
                    autresEnfants[0].classList.add("leftside");
                    autresEnfants[1].classList.add("rightside");
                }
            }
        } else {
            // Si un autre élément est cliqué, attribuer la classe "mainview" à cet élément
            if (dernierElementClique === elementClique) {
                // Si le même élément est cliqué une deuxième fois, retourner à l'état d'origine
                dernierElementClique = null;
            } else {
                elementClique.classList.add("mainview");
                dernierElementClique = elementClique;
            }

            // Diviser les deux autres éléments en "leftside" et "rightside"
            var autresEnfants = Array.from(enfants).filter(function (enfant) {
                return enfant !== elementClique;
            });

            if (autresEnfants.length === 2) {
                autresEnfants[0].classList.add("leftside");
                autresEnfants[1].classList.add("rightside");
            }
        }
    }
}

// Appeler la fonction lorsqu'un élément est cliqué
document.addEventListener("DOMContentLoaded", function () {
    var enfants = document.querySelectorAll(".menu > .box");

    if (enfants.length === 3) {
        enfants.forEach(function (enfant) {
            enfant.addEventListener("click", function () {
                attribuerClassesEtStylesAuClic(enfant);
            });
        });
    }
});
