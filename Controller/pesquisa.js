import { createHeader } from "./header.js";
import {cardsBD} from "./cardBD.js";

document.addEventListener('DOMContentLoaded', ()=>{
     createHeader()
});

const main = document.getElementById('main');

let div_geral = document.createElement('div');
div_geral.className = 'div_geral'

for(let i = 0; i < cardsBD.length; i++){

     let div_card = document.createElement('div');
     div_card.className = 'div_card'

     let img_card = document.createElement('img');
     img_card.src = cardsBD[i].img

     let txt_card = document.createElement('h1');
      txt_card.textContent = cardsBD[i].nome

     main.appendChild(div_geral);
     div_geral.appendChild(div_card);
     div_card.appendChild(img_card);
     div_card.appendChild(txt_card);
}
