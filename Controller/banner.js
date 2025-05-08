import { createHeader } from "./header.js";
import { trocaMenu } from "./menu.js";

window.trocaMenu = trocaMenu

document.addEventListener('DOMContentLoaded', ()=>{
    createHeader()
});