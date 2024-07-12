/* sp表示なし */
var windowWidth = $(window).width();
var windowSm = 767;
if (windowWidth <= windowSm) {


/* hamburger */
$('.hamburger').on('click', function() {
	$(this).toggleClass('open');
	$('.globalMenuSp').toggleClass('open');
});

/* slider */
$(function () {
    $('.slider').slick({
        arrows: true, // 前・次ボタン
        dots:true//ドット部分（Swiperでいうページネーション）
    });
});

/* scroll */
new WOW().init();

}

/* topへ戻る */
$(document).ready(function () {
    $("#goto__top").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#goto__top').fadeIn();
            } else {
                $('#goto__top').fadeOut();
            }
        });

        $('#goto__top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});
