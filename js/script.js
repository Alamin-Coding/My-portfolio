$(function(){
    $('.testimonial_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        dots:true,
        arrows:false,
        autoplaySpeed: 2000,
      });
})


var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', function(m){
    cursor.style.cssText = cursor2.style.cssText = 'left:' + m.clientX + 'px; top:' + m.clientY + 'px;';
});
    //   Wavify js
    $('#wave').wavify({
        height: 60,
        bones: 3,
        amplitude: 40,
        color: '#111',
        speed: .25
      });




      