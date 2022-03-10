$('.frist').click( function () {
    $('.block-1').toggleClass('filter');

})

$('.second').click( function () {
    $('.block-2').toggleClass('filter');

})

$('.three').click( function () {
    $('.block-3').toggleClass('filter');

})

// $('.botton').click( function () {
//     $('.block-1').toggleClass('filter');
//     $('.block-2').toggleClass('filter');
//     $('.block-3').toggleClass('filter');

// })

const botton = document.querySelector('.botton');
botton.addEventListener("touchstart", function (){
    $('.block-1').toggleClass('test1');

})