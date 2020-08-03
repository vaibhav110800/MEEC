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

// $(document).ready(function () {
//     $("#testimonial-slider").owlCarousel({
//         items: 3,
//         itemsDesktop: [1000, 3],
//         itemsDesktopSmall: [979, 2],
//         itemsTablet: [768, 2],
//         itemsMobile: [650, 1],
//         pagination: true,
//         autoPlay: true
//     });
// });

// vars

// --------------------- testimonials ---------------------------//

'use strict'
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 6000,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function () {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);
    })

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })

    testim.addEventListener("touchstart", function (e) {
        touchStartPos = e.changedTouches[0].clientX;
    })

    testim.addEventListener("touchend", function (e) {
        touchEndPos = e.changedTouches[0].clientX;

        touchPosDiff = touchStartPos - touchEndPos;

        console.log(touchPosDiff);
        console.log(touchStartPos);
        console.log(touchEndPos);


        if (touchPosDiff > 0 + ignoreTouch) {
            testimLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimRightArrow.click();
        } else {
            return;
        }

    })
}

