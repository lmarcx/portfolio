//Caroussel
//Initialisation des variables
const slides = [
	{
		src: "img/ironman.jpg",
		alt: "IronMan",
		link: "#"
	},
    {
		src: "img/wip.png",
		alt: "WIP",
		link: "#"
	},
	{
		src: "img/harrypotter.jpg",
		alt: "Harry Potter",
		link: "#"
	},
	{
		src: "img/johnwick.jpg",
		alt: "John Wick",
		link: "#"
	},
	{
		src: "img/walter.png",
		alt: "Walter White",
		link: "#"
	},
	{
		src: "img/rickgrimes.png",
		alt: "Rick Grimes",
		link: "#"
	}
];
var imgLeft = document.getElementById("img-left");
var imgCenter = document.getElementById("img-center");
var imgRight = document.getElementById("img-right");
var linkLeft = document.getElementById("link-left");
var linkCenter = document.getElementById("link-center");
var linkRight = document.getElementById("link-right");
var images = document.getElementsByTagName("img");
var container = document.getElementById("caroussel-container");
let i = 1;
let j = 2;
let k = 3;

function nextSlide (){
    console.log("right click marche");
    if (k==slides.length){
        k = 0;
    }
    if (j==slides.length){
        j = 0;
    }
    if (i==slides.length){
        i = 0;
    }
    imgLeft.src = slides[i].src;
    imgCenter.src = slides[j].src;
    imgRight.src = slides[k].src;
    i++;
    j++;
    k++;
}
function prevSlide(){
    console.log("left click marche");
    i--;
    j--;
    k--;
    if (i==0){
        i = slides.length;
    }
    if (j==0){
        j = slides.length;
    }
    if (k==0){
        k = slides.length;
    }
    imgLeft.src = slides[i-1].src;
    imgCenter.src = slides[j-1].src;
    imgRight.src = slides[k-1].src;

}
//1535x2126

//Création du caroussel


// Appeler la fonction lorsqu'un élément est cliqué
document.addEventListener("DOMContentLoaded", function () {
    var buttonLeft = document.getElementById("buttonLeft");
    var buttonRight = document.getElementById("buttonRight");
    buttonRight.addEventListener("click", nextSlide);
    buttonLeft.addEventListener("click", prevSlide);

});