const texto = document.querySelector('p');
const conteudo = texto.innerText;

const textTyping = () => {
  // Efeito de Digitação do Texto
  texto.innerText = '';
  console.log(conteudo);
};

textTyping();