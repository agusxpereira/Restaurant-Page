
const cardStock = []; 

import sushiImg from './assets/sushi.jpg';
import chevronLeftImg from './assets/chevron-left-solid.svg';
import chevronRigthImg from './assets/chevron-right-solid.svg';





const card = {name: "Sushi", price:"$12.9", ingredients:["arroz", "salmon", "agua"], src: sushiImg };
const card2 = {name: "Kami", price:"$12.9", ingredients:["arroz", "salmon", "agua"], src: sushiImg };
const card3 = {name: "Kaze", price:"$12.9", ingredients:["arroz", "salmon", "agua"], src: sushiImg };

const divCard = createCard(card); 
const divCard2 = createCard(card2); 
const divCard3 = createCard(card3); 


cardStock.push(divCard);
cardStock.push(divCard2);
cardStock.push(divCard3);

function createCard(set){

    const div = document.createElement("div"); 
    let card = document.createElement("div"); 
    div.classList.add("card-menu");


    let cardTitle = document.createElement("h3"); 
    let cardPrice = document.createElement("span");
    let cardIngredient = document.createElement("div");
    let cardImage = new Image(100, 100);

    //title
    cardTitle.textContent = set.name;//{name}

    //price
    cardPrice.textContent = set.price;
    cardPrice.classList.add("price");
    
    //image
    cardImage.src = set.src;
    cardImage.classList.add("img");

    //ingredients
    cardIngredient.classList.add("content-ingredient")
    const listIngredients = set.ingredients;

    const titleIngredients = document.createElement("h4"); 
    titleIngredients.textContent = "Ingredients";

    
    const ul = document.createElement("ul");
    ul.appendChild(titleIngredients); 
    listIngredients.forEach(element => {
        
        const li = document.createElement("li"); 
        li.textContent = element
        
        ul.appendChild(li)
    });

  
    cardIngredient.appendChild(ul);

     div.appendChild(cardTitle);
     div.appendChild(cardImage);
     div.appendChild(cardPrice);
     div.appendChild(cardIngredient);
    return div;

}



function displayItem(){
    const divContentCard = document.querySelector(".div-content-card")
    let pos = 0;
    divContentCard.innerHTML = cardStock[pos].innerHTML;
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(element =>{
        element.addEventListener("click", ()=>{
            if(pos > 0 && element.classList.contains("left")){
                pos--;   
                divContentCard.innerHTML = "";
                divContentCard.innerHTML = cardStock[pos].innerHTML;
            }
            if(pos < cardStock.length-1 && element.classList.contains("rigth")){
                pos++; 
                console.log(cardStock)
                console.log(pos + " rigth")
                divContentCard.innerHTML = "";
                divContentCard.innerHTML = cardStock[pos].innerHTML;
            }
            
        });

    }); 
    return cardStock[0];
}

function createMenu(){
    
    const div = document.createElement("div"); 
    div.classList.add("content-menu");
    
    const divContentCard = document.createElement("div"); 
    divContentCard.classList.add("div-content-card");
    divContentCard.classList.add("card-menu");
   


    const buttonLeft = document.createElement("button");
    const buttonRigth = document.createElement("button"); 

    buttonLeft.classList.add("button");
    buttonLeft.classList.add("left");

    buttonRigth.classList.add("button"); 
    buttonRigth.classList.add("rigth"); 

    let chevronLeft = new Image(10, 10); 
    let chevronRigth = new Image(10, 10); 

    chevronLeft.src = chevronLeftImg;
    chevronRigth.src = chevronRigthImg;

    buttonLeft.appendChild(chevronLeft);
    buttonRigth.appendChild(chevronRigth);
    
    
    div.appendChild(buttonLeft)
    div.appendChild(divContentCard)
    div.appendChild(buttonRigth)

    content.appendChild(div);
    
   
    displayItem();

    



} 

export { createMenu };