import { createHeader } from "./../../index/header.js";
import { dio } from "./bandasBD.js";

document.addEventListener('DOMContentLoaded', ()=>{
     createHeader()
});

const main = document.getElementById('main');

let div_grande = document.createElement('div');
div_grande.className = 'div_grande'

for(let i = 0; i < dio.length; i++){

     let div_disco = document.createElement('div');
     div_disco.className = 'div_disco'
     div_disco.id = 'dio'

     let img_disco = document.createElement('img');
     img_disco.src = dio[i].img

     let txt_disco = document.createElement('h1');
      txt_disco.textContent = dio[i].nome_e_data

     main.appendChild(div_grande);
     div_grande.appendChild(div_disco);
     div_disco.appendChild(img_disco);
     div_disco.appendChild(txt_disco);
}