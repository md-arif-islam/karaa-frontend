
$(document).ready(function () {
  $(".menu_icon").click(function () {
    $(".menulist").toggleClass("active");
    $("#open_icon").toggleClass("bxs-left-arrow-alt");
    // $("#open_icon").toggleClass("bxs-chevron-left");
    // $("#open_icon").toggleClass("bx-arrow-back");
  })
});


$("#dropdown").click(function () {
  $("#dropdownMenu").toggle();
});



// ===================================
// -TEAM MEMBERS SLIDER
// ===================================



// ===================================
// -NEWS SLIDER
// ===================================

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    loop:true,
    freemode:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
// ===================================
// -FEATURES MEMBERS SLIDER
// ===================================

  var swiper = new Swiper(".mySwiper1", {
    effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
  spaceBetween: 50,
	slidesPerView: "auto",
	preventClicks: false,
	loop: true,
	preventClicksPropagation: false,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows: false,
	},
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });



  $("#close_icon").click(function () {
    $("#newsletter").hide();
  });

setTimeout(function () {
  $("#newsletter").fadeIn();
}, 1000);


// ==============================
//COUNTER UP JS
// ==============================

$('.counter').counterUp({
  delay: 10,
  time: 2000
});


// ======================================
// FAQ  JS
// ======================================
const faqItemHead = document.querySelectorAll(".faq-item-head");

faqItemHead.forEach((head, index) => {
  head.addEventListener("click", () => {
    let icon = head.querySelector(".faq-item-icon").firstElementChild;
    if (icon.className == "fa-solid fa-plus") {
      head.nextElementSibling.classList.add("show-para");
      icon.className = "fa-solid fa-minus";
    } else if (icon.className == "fa-solid fa-minus") {
      head.nextElementSibling.classList.remove("show-para");
      icon.className = "fa-solid fa-plus";
    }
  });
});


// ======================================
// MENUBAR  JS
// ======================================
