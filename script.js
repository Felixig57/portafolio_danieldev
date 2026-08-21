const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,

    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },

    speed: 10000,
});
AOS.init({
    duration: 1200,
    easing: "ease-out-cubic",
    once: true,
    offset: 120,
});