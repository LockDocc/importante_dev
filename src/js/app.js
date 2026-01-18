const mensagem = 
`   Quando a noite cai e o mundo silencia,
    é a lua que me lembra de você.

    Ela brilha sozinha no céu,  
    mas nunca parece vazia.. 
    Assim como meus pensamentos  
    quando encontram o seu nome.
 
    Se algum dia você olhar para a lua  
    e sentir um conforto inexplicável,  
    saiba: é meu coração te alcançando  
    mesmo à distância.🖤`;

let digitando = false;
let timeoutId = null;

function pararDigitacao() {
  digitando = false;
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = null;
}

function digitarTexto(texto, elemento, cursor, velocidade = 18) {
  digitando = true;
  elemento.textContent = "";
  cursor.classList.add("ativo");

  let i = 0;

  function step() {
    if (!digitando) return;

    elemento.textContent += texto[i];
    i++;

    if (i < texto.length) {
      timeoutId = setTimeout(step, velocidade);
    } else {
      cursor.classList.remove("ativo");
      digitando = false;
    }
  }

  step();
}

function toggleCarta() {
  const carta = document.getElementById("carta");
  const textoCarta = document.getElementById("textoCarta");
  const cursor = document.getElementById("cursor");
  const botao = document.getElementById("btnLua");
  const textoBtn = botao.querySelector(".texto-btn");
  const lua = botao.querySelector(".lua");
  const intro = document.getElementById("introTexto");

  const vaiAbrir = !carta.classList.contains("aberta");

  if (vaiAbrir) {
    carta.classList.add("aberta");
    botao.classList.add("aberto");
    textoBtn.textContent = "Fechar carta";
    lua.textContent = "🌕";

    intro.classList.add("sumindo");

    pararDigitacao();
    digitarTexto(mensagem, textoCarta, cursor, 18);
  } else {
    carta.classList.remove("aberta");
    botao.classList.remove("aberto");
    textoBtn.textContent = "Abrir carta";
    lua.textContent = "🌙";

    intro.classList.remove("sumindo");

    pararDigitacao();
    textoCarta.textContent = "";
    cursor.classList.remove("ativo");
  }
}
