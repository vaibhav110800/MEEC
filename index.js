// $('.navbar-toggle').click(function () {
//     $('.navbar-toggle i').toggleClass('fa-bars fa-times');
// });

// $('.carousel').on('click', function () {
//   $('.carousel').carousel('cycle');
// });

// $("[data-trigger]").on("click", function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   var offcanvas_id = $(this).attr('data-trigger');
//   $(offcanvas_id).toggleClass("show");
//   $('body').toggleClass("offcanvas-active");
//   $(".screen-overlay").toggleClass("show");
// });

// $(".btn-close, .screen-overlay").click(function (e) {
//   $(".screen-overlay").removeClass("show");
//   $(".mobile-offcanvas").removeClass("show");
//   $("body").removeClass("offcanvas-active");
// })

// $(function () {
//   $('.btn-6')
//     .on('mouseenter', function (e) {
//       var parentOffset = $(this).offset(),
//         relX = e.pageX - parentOffset.left,
//         relY = e.pageY - parentOffset.top;
//       $(this).find('span').css({ top: relY, left: relX })
//     })
//     .on('mouseout', function (e) {
//       var parentOffset = $(this).offset(),
//         relX = e.pageX - parentOffset.left,
//         relY = e.pageY - parentOffset.top;
//       $(this).find('span').css({ top: relY, left: relX })
//     });
//   $('[href=#]').click(function () { return false });
// });

// moveSliderRight = () => {
//   document.getElementById('overlay').classList.remove('overlay-moveHalfLeft');
//   document.getElementById('overlayInner').classList.remove('overlayInner-moveHalfRight');
//   document.getElementById('signInForm').classList.remove('shiftRight');

//   document.getElementById('overlay').classList.add('overlay-moveHalfRight');
//   document.getElementById('overlayInner').classList.add('overlayInner-moveHalfLeft');
//   document.getElementById('signUpForm').classList.add('shiftLeft');
// }
// moveSliderLeft = () => {
//   document.getElementById('overlay').classList.remove('overlay-moveHalfRight');
//   document.getElementById('overlayInner').classList.remove('overlayInner-moveHalfLeft');
//   document.getElementById('signUpForm').classList.remove('shiftLeft');


//   document.getElementById('overlay').classList.add('overlay-moveHalfLeft');
//   document.getElementById('overlayInner').classList.add('overlayInner-moveHalfRight');
//   document.getElementById('signInForm').classList.add('shiftRight');
// }

// $(function () {
//   $('.multiple-items').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots: false,
//     centerMode: true,
//     centerPadding: '0',
//   });
// });