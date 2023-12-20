$('0').on('click', function() {
  $('.slide-container').css('transform', 'translateX(0vw)');
});

$('1').on('click', function() {
  $('.slide-container').css('transform', 'translateX(-100vw)');
});

$('2').on('click', function() {
  $('.slide-container').css('transform', 'translateX(-200vw)');
});
bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(0);