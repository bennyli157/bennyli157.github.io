// window.addEventListener('scroll', function () {
//     requestAnimationFrame(checkFadeElements);
// });

// function checkFadeElements() {
//     const fadeElements = document.querySelectorAll('.fade-element');
//     const scrollableContent2 = document.getElementById('scrollable-content-2');
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const elementTop = scrollableContent2.getBoundingClientRect().top + window.pageYOffset;

//     fadeElements.forEach(element => {
//         if (scrollTop >= elementTop) {
//             element.style.opacity = 0;
//         } else {
//             element.style.opacity = 1;
//         }
//     });
// }
