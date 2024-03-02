import srcWhatsApp from './assets/social/whatsapp.svg'
import srcTikTok from './assets/social/whatsapp.svg'
import srcInstagram from './assets/social/whatsapp.svg'
import srcFacebook from './assets/social/whatsapp.svg'

const content = document.querySelector('#content');

function createDivMedia(data){

    
    const div = document.createElement("div");
    div.appendChild(data.img);
    div.classList.add("social-item"); 
    
    const p = document.createElement("p"); 
    p.innerText = data.text;

    div.appendChild(p); 

    return div;

}


function createData(){
   




    
    const div = document.createElement("div");
    div.classList.add("content-data")
    
    //container for item, like an ul: 
    const social = []
    let ul = document.createElement("div"); 
    ul.classList.add("social-content")


    let imgW = new Image(20, 20); 
    imgW.src = srcWhatsApp;
    social.push(imgW);

    let imgI = new Image(20, 20); 
    imgI.src = srcInstagram;
    social.push(imgI);

    let imgT = new Image(20, 20); 
    imgT.src = srcTikTok;
    social.push(imgT);

    let imgF = new Image(20, 20); 
    imgF.src = srcFacebook;
    social.push(imgF);

    let divWsp = createDivMedia({img: imgW, text: "whatsapp: +542281123546"})
    let divI = createDivMedia({img: imgI, text: "Instagram"})
    let divT = createDivMedia({img: imgT, text: "TikTok"})
    let divF = createDivMedia({img: imgF, text: "Facebook"});
    
    

    ul.appendChild(divWsp);
    ul.appendChild(divI);
    ul.appendChild(divT);
    ul.appendChild(divF);
        

    div.appendChild(ul);

    return div;

}


function createAbout(){
    
    const div = document.createElement("div"); 
    div.classList.add("about-us");
    
    const divInfo = createData(); 

    
    const divMapAdress = document.createElement("div"); 
    divMapAdress.classList.add('content-map')
    divMapAdress.setAttribute('id', 'map')    


    div.appendChild(divMapAdress);
    div.appendChild(divInfo)

      
    
    
    content.appendChild(div);

} 

export { createAbout };