import { createHeader } from "./../../index/header.js";
import { iron } from "./bandasBD.js";

document.addEventListener('DOMContentLoaded', ()=>{
     createHeader()
});

const main = document.getElementById('main');

let div_grande = document.createElement('div');
div_grande.className = 'div_grande'

for(let i = 0; i < iron.length; i++){

     let div_disco = document.createElement('div');
     div_disco.className = 'div_disco'

     let img_disco = document.createElement('img');
     img_disco.src = iron[i].img

     let txt_disco = document.createElement('h1');
      txt_disco.textContent = iron[i].nome_e_data

     main.appendChild(div_grande);
     div_grande.appendChild(div_disco);
     div_disco.appendChild(img_disco);
     div_disco.appendChild(txt_disco);
}
