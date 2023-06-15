document.addEventListener("DOMContentLoaded", function() {
    const quadradoCategoria = document.querySelector(".quadrado-categoria");
    const imagens = document.querySelectorAll(".quadrado-categoria img");
    const arrowC = document.querySelector(".arrowc");
    const arrowD = document.querySelector(".arrowd");
    const inicio = document.querySelector(".inicio");
    const sobre = document.querySelector(".sobre");
    const tecnologiaa = document.querySelector('.ZZZZ');
  
    let counter = 0;
  
    arrowC.addEventListener("click", () => {
      if (counter < imagens.length - 1) {
        counter++;
        updateSlide();
      }
    });
  
    arrowD.addEventListener("click", () => {
      if (counter > 0) {
        counter--;
        updateSlide();
      }
    });
  
    function updateSlide() {
      const width = imagens[0].clientWidth;
      quadradoCategoria.style.transform = `translateX(-${width * counter}px)`;
    }
  
    inicio.addEventListener("click", function() {
      window.location.href = "site.html";
    });
  
    tecnologiaa.addEventListener('click', function() {
      window.location.href = "produtostec.html";
    });
  
    sobre.addEventListener("click", function() {
      window.location.href = "sobre.html";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const quadradoDestaque = document.querySelector(".quadrado-destaque");
    const imagensDestaque = document.querySelectorAll(".quadrado-destaque img");
    const arrowCC = document.querySelector(".arrowcc");
    const arrowDD = document.querySelector(".arrowdd");
  
    let counterDestaque = 0;
  
    arrowCC.addEventListener("click", () => {
      if (counterDestaque < imagensDestaque.length - 1) {
        counterDestaque++;
        updateDestaqueSlide();
      }
    });
  
    arrowDD.addEventListener("click", () => {
      if (counterDestaque > 0) {
        counterDestaque--;
        updateDestaqueSlide();
      }
    });
  
    function updateDestaqueSlide() {
      const widthDestaque = imagensDestaque[0].clientWidth;
      quadradoDestaque.style.transform = `translateX(-${widthDestaque * counterDestaque}px)`;
    }
  });