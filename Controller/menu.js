export function trocaMenu(){
  let div_menu = document.getElementById('btn_conteiner');
  let arrow = document.getElementById('flecha');

  if(div_menu.style.left == '0vw'){
    div_menu.style.left = '-30vw'
    
  } else {
    div_menu.style.left = '0vw'
    
  }

}