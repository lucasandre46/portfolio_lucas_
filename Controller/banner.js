import { createHeader } from "./header.js";
import { trocaMenu } from "./menu.js";

window.trocaMenu = trocaMenu
window.troca_bunner = troca_bunner



document.addEventListener('DOMContentLoaded', ()=>{
    createHeader()
});


let banner_atual = 1;
const qnt_banner = 3;

export function troca_bunner(num_bunner){
    let all_bunners = document.getElementById('all_bunners')
    all_bunners.style.left = `-${num_bunner - 1}00vw`;
     banner_atual = num_bunner;
}

setInterval(()=>{
    if(banner_atual >= qnt_banner){
        banner_atual = 0;
    }
    troca_bunner(banner_atual + 1);
}, 5000);

