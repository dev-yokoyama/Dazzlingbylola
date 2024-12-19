var swiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 3000, // Tempo entre os slides (em milissegundos)
      disableOnInteraction: false, // Continua o autoplay após interação
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto', /* Define largura personalizada */
    spaceBetween: 10,
  });
  const meuCarrossel = new Swiper(".meu-carrossel", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false, // Não repete os slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // 2 slides para tablets
    },
    1024: {
      slidesPerView: 4, // 3 slides para desktops
    },
  },
});
function alterarTextoBotao(){
  const botao = document.getElementById('btn-submit');
  botao.value ='Obrigado';
  botao.disable = true;
  return false;
}