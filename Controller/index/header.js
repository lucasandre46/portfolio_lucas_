export function createHeader(){

const header = document.getElementById('header');
    

let div_perfil = document.createElement('div');
div_perfil.id = 'perfil'

let img = document.createElement('img');
img.id = 'img_cabecalho'
img.src = './../../model/perfil_mega.jpg'

let h3 = document.createElement('h3');
h3.id = 'nome_header'
h3.textContent = 'Lucas A. Miguel'

let div_btns = document.createElement('div');
div_btns.id = 'btn_hdr'

let btn_home = document.createElement('button');
btn_home.id = 'btn_home'
btn_home.className = 'btn_head'
btn_home.textContent = 'Home'
btn_home.addEventListener('click', ()=>{
    window.location.href = './../../View/index.html'
});

let btn_pesquisa = document.createElement('button');
btn_pesquisa.id = 'btn_pesquisa'
btn_pesquisa.className = 'btn_head'
btn_pesquisa.textContent = 'Pesquise'
btn_pesquisa.addEventListener('click', ()=>{
    window.location.href = './../../View/pesquisa.html'
});

let btn_shows = document.createElement('button');
btn_shows.id = 'btn_shows'
btn_shows.className = 'btn_head'
btn_shows.textContent = 'Shows'
btn_shows.addEventListener('click', ()=>{
    window.location.href = './../../View/banner.html'
});

div_perfil.appendChild(img);
div_perfil.appendChild(h3);
div_btns.appendChild(btn_home);
div_btns.appendChild(btn_pesquisa);
div_btns.appendChild(btn_shows);
header.appendChild(div_perfil)
header.appendChild(div_btns)

}