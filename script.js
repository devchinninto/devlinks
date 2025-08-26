function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Marcelle Alves sorrindo, usando óculos escuro preto e camisa preta, e o fundo da imagem é um cinza escuro."
    )
  } else {
    img.setAttribute(
      "alt",
      "Desenho de Marcelle Alves sorrindo, usando óculos com armação transparente e camisa preta, e o fundo da imagem amarelo."
    )
  }
}
