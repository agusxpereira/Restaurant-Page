import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout} from "./about.js"


console.log("runing"); 

const content = document.querySelector('#content')
const buttonHome = document.querySelector('#home'); 
const buttonMenu = document.querySelector('#menu')
const buttonAbout = document.querySelector('#about')


let currentPage = createHome();

buttonHome.addEventListener('click', ()=>{
    content.innerHTML = "";
    currentPage = createHome();

});
buttonMenu.addEventListener('click', ()=>{
    content.innerHTML = "";
    currentPage = createMenu();

}); 

buttonAbout.addEventListener('click', ()=>{
    content.innerHTML = ""; 
    currentPage = createAbout();
    let map = L.map('map', {
        center: [0,0],
        dragging: true, 
        scrollWheelZoom: false 
        /* scrollWheelZoom: "center" */
     }).setView([-36.77738,-59.86328], 13);
    
    
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'    
    }).addTo(map);  
    //name, price, [ingredients], image

});






//https://leafletjs.com/reference.html