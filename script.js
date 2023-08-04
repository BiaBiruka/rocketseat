function toggleMode() {
  // Função para alterar o modo claro/escuro
  const html = document.documentElement // o comando DOCUMENT procura alto dentro daquele documento (a página). Nesse caso, como a classe do modo está na tag HTML, colocamos documentElement. Se fosse na tag body, por exemplo, seria document.body

  // // ------ Primeira forma de fazer ------
  // if (html.classList.contains("dark")) {
  //   //Verifica se no HTML a LISTA DE CLASSE CONTÉM o valor DARK
  //   html.classList.remove("dark"); //Remove o valor de DARK da classe, deixando no modo claro
  // } else {
  //   html.classList.add("dark"); // Se não tiver a classe dark (ou seja, estiver no modo claro) adiciona o valor DARK na classe, deixando no modo escuro
  // }

  //Segunda forma de fazer (mais simples, ideal)
  html.classList.toggle("dark") //Já faz automaticamente o toggle de dark/light -> se não tiver dark coloca, se tiver tira

  // Mudança de imagem
  const perfil = document.querySelector("#profile img") // querySelector pesquisa pelo seletor (ou seja, a mesma referência que tem no CSS com id e tag)
  if (html.classList.contains("dark")) {
    //Se for dark mode
    perfil.setAttribute("src", "./assets/perfil-dark.png") //setAttribute serve para alterar um atributo (nesse caso, o src da imagem) para um novo valor (a foto de pergil modo dark)
    perfil.setAttribute("alt", "Foto de perfil modo escuro")
  } else {
    //Se for light mode
    perfil.setAttribute("src", "./assets/perfil-light.png")
    perfil.setAttribute("alt", "Foto de perfil modo claro")
  }
}

function openPDF() {
  window.open("./assets/cartao-virtual-chocolarts.pdf")
}
