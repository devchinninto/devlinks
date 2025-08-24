function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  
  const themeColorMeta = document.querySelector('meta[name="theme-color"]')

  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute(
      "alt",
      "Foto de Marcelle Alves sorrindo, usando óculos escuro preto e camisa preta, e o fundo da imagem é um cinza escuro."
    )
    themeColorMeta.setAttribute("content", "#d1b8ec")
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute(
      "alt",
      "Desenho de Marcelle Alves sorrindo, usando óculos com armação transparente e camisa preta, e o fundo da imagem amarelo."
    )
    themeColorMeta.setAttribute("content", "#05050D")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const openPopupBtn = document.getElementById("open-popup-btn")
  const closePopupBtn = document.querySelector(".close-btn")
  const popupContainer = document.getElementById("download-popup")
  const themeColorMeta = document.getElementById("theme-color-meta")

  if (openPopupBtn && closePopupBtn && popupContainer) {
    openPopupBtn.addEventListener("click", () => {
      popupContainer.classList.add("show")
    })

    closePopupBtn.addEventListener("click", () => {
      popupContainer.classList.remove("show")
    })

    window.addEventListener("click", (event) => {
      if (event.target === popupContainer) {
        popupContainer.classList.remove("show")
      }
    })

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        popupContainer.classList.remove("show")
      }
    })
  }
})
