document.addEventListener('DOMContentLoaded' , ()=>{

let div_perfil = document.createElement('div');
div_perfil.id = 'perfil'

let img = document.createElement('img');
img.id = 'img_cabecalho'
div_perfil.appendChild(img);

let h3 = document.createElement('h3');
h3.id = 'nome_header'
h3.textContent = 'Lucas A. Miguel'
div_perfil.appendChild(h3);

let div_btns = document.createElement('div');
div_btns.id = 'btn_hdr'

let btn_home = document.createElement('button');
btn_home.id = 'btn_home'
btn_home.className = 'btn_head'
btn_home.textContent = 'Home'
div_btns.appendChild(btn_home);

let btn_pesquisa = document.createElement('button');
btn_pesquisa.id = 'btn_pesquisa'
btn_pesquisa.className = 'btn_head'
btn_pesquisa = textContent = 'Pesquise'
div_btns.appendChild(btn_pesquisa);

let btn_shows = document.createElement('button');
btn_shows.id = 'btn_shows'
btn_shows.className = 'btn_head'
btn_shows.textContent = 'Shows'
div_btns.appendChild(btn_shows);



header.appendChild(div_btns)
header.appendChild(div_perfil)
header.appendChild(img)
header.appendChild(h3)
header.appendChild(btn_head)

})