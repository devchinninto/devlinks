function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains('light')) {
    //se tiver light mode, adc a img light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute('src', './assets/avatar.png')
  }

  if (html.classList.contains('light')) {
    img.setAttribute('alt', 'Foto de Marcelle Alves sorrindo, usando óculos escuro preto e camisa preta, e o fundo da imagem é um cinza escuro.')
  } else { 
    img.setAttribute('alt', 'Desenho de Marcelle Alves sorrindo, usando óculos com armação transparente e camisa preta, e o fundo da imagem amarelo.')
  }

}

