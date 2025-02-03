/** Criando funcionalidade do botão de menu para dispositivos móveis **/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
});

/** Criando efeito de digitação automática **/
var typed = new Typed(".input", {
    strings: ["Frontend Developer", "Python Developer", "Web Developer", "Backend Developer", "Fullstack Developer", "Data Analyst"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});

// Função para rolar suavemente até o topo
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    console.log('Botão de rolar para o topo clicado');
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Rolagem suave
    });
});
