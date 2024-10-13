function toggleMode() {
  const html = document.documentElement
  /* maneira 1*/
  html.classList.toggle("light")
  /* maneira 2 */
  /*
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')
  }
  */

  /* pegar a tag image */
  const img = document.querySelector("#profile img")

  /* substituir a imagen */
  if (html.classList.contains("light")) {
    /* se tiver light mode, adicionar imagem light */
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    /* se nao tiver light mode, adicionar imagem normal */
    img.setAttribute("src", "./assets/avatar-2.jpg")
  }
}
