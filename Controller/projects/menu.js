export function trocaMenu(){
  let div_menu = document.getElementById('btn_conteiner');
  let btn_menu = document.getElementById('btn_menu');
  

  if(div_menu.style.left == '0vw'){
    div_menu.style.left = '-30vw'
    btn_menu.style.transform = 'rotate(0deg)'
  } else {
    div_menu.style.left = '0vw'
    btn_menu.style.transform = 'rotate(-180deg)'
  }

}
