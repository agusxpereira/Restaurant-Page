const content = document.querySelector("#content");

const colectionPrices = [];    
function handlePos(){
    let pos = 0;

    function getPos() {
        return pos;
    }

    function incressPos(){
        pos = pos + 1;
    }
    function decressePos(){
        pos--;
    } 
    function resetPos(){
        pos = 0;
    }

    return { getPos, incressPos, decressePos, resetPos }

}


function renderSlider(){
        
    /* 
    Si algún día lo paso a imagenes lo que tengo que hacer es crear una imagen y 
    hacer un appenChil a contenHolder, también definir el src de la imagen segun la pos en el arreglo
    const img = new Image(); 
    img.classList.add("handle-image") */

    let pos = handlePos();

    let contentHolder = document.querySelector(".content-holder")
    contentHolder.innerHTML = colectionPrices[pos.getPos()].innerHTML;

    let actionPressButton = document.querySelectorAll(".control"); 
    actionPressButton.forEach(element => {
        element.addEventListener("click", ()=> {
            
            if(element.classList.contains("left")){
                if(pos.getPos() > 0){
                    pos.decressePos(); 
                    contentHolder.innerHTML = colectionPrices[pos.getPos()].innerHTML;
                    
                } 
            else{
                renderSlider();
            }
            }
            else if (element.classList.contains("rigth") && pos.getPos() < colectionPrices.length-1) {
                
                pos.incressPos();
                contentHolder.innerHTML = colectionPrices[pos.getPos()].innerHTML;
                
                
                
            }
            else{
                pos.resetPos()
                contentHolder.innerHTML = colectionPrices[pos.getPos()].innerHTML;
            }
        })
    });


}

function createSlider(){
   
    
    //Slider, buttons, content
    const slider = document.createElement("div"); 
    slider.classList.add('slider'); 

    /* let chevronLeft = new Image(10, 10); 
    let chevronRigth = new Image(10, 10); 

    chevronLeft.src = "./assets/chevron-left-solid.svg"
    chevronRigth.src = "./assets/chevron-right-solid.svg" */
    
    let buttonLeft = document.createElement("button");
    buttonLeft.classList.add("control");
    buttonLeft.classList.add("left");
    buttonLeft.textContent = "<";

    const contentHolder = document.createElement("div");
    contentHolder.classList.add("content-holder");
   
   
    let buttonRigth = document.createElement("button");
    buttonRigth.textContent = ">";
    buttonRigth.classList.add("control")
    buttonRigth.classList.add("rigth")

    
    //content
    const divPriceOne = document.createElement("div"); 
    divPriceOne.classList.add("content"); 
    divPriceOne.innerHTML = "TABLA x12: $999";

    
    
    const divPriceTwo = document.createElement("div"); 
    divPriceTwo.classList.add("content");
    divPriceTwo.innerHTML = "TABLA x8: $499";

    const divPriceThree = document.createElement("div"); 
    divPriceThree.classList.add("content");
    divPriceThree.innerHTML = "TABLA x4: $199";

    colectionPrices.push(divPriceOne)
    colectionPrices.push(divPriceTwo)
    colectionPrices.push(divPriceThree)


    
    
    slider.appendChild(buttonLeft); 
    slider.appendChild(contentHolder); 
    slider.appendChild(buttonRigth);

    return slider;
}







function createHome(){

    const div = document.createElement("div"); 
    div.classList.add("banner-sushi"); 

    
    

    let sliderHolder = document.createElement("div");
    
    sliderHolder.innerHTML = createSlider().innerHTML;
    sliderHolder.classList.add("slider")
    
    

    
    

    const title = document.createElement("h2"); 
    title.textContent = "Sushi Title"; 

   


    const divHours = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "De martes a domingos de 7pm a 00pm";
    divHours.appendChild(p);
    
    
    /* div.appendChild(title);  */
    div.appendChild(sliderHolder);
    div.appendChild(divHours);  
     
    
    content.appendChild(div);
    
 

    renderSlider();

}


export { createHome };

