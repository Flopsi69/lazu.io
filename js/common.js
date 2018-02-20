
$('#hamburger').on('click',function(e){
	e.preventDefault();

	$('#mobile-menu').toggleClass('active');
	$(this).toggleClass('active')
})


$('.accordion p').on('click',function(e){
	e.preventDefault();
	var parent = $(this).parent();
	var content = parent.find('.content');
	$(this).toggleClass('active');
	$(content).toggleClass('active');
})
var AccordActive = $('.accordion p.active').parent();
$(AccordActive).find('p').addClass('active')
$(AccordActive).find('.content').addClass('active')

$('.lazu .box img').on('mousedown',function(e){
	e.preventDefault();
	return false;
});

$('.--counter .plus').on('click',function(e){
	e.preventDefault();
	var parent = $(this).parent();
	var value = $(parent).find('input').val();
	$(parent).find('input').val( new Number(value) + 1);
});
$('.--counter .minus').on('click',function(e){
	e.preventDefault();
	var parent = $(this).parent();
	var value = $(parent).find('input').val();

	if(new Number(value) >= 2){
		$(parent).find('input').val( new Number(value) - 1);
	}
	
});


$('section.documents .documents').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow:'<img class="slick-arrow slick-prev" src="images/slider-prev.png"/>',
	nextArrow:'<img class="slick-arrow slick-next" src="images/slider-next.png"/>',

	responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
		}
	]
});

$('section.fans .fans.mobile').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	prevArrow:'<img class="slick-arrow slick-prev" src="images/slider-prev.png"/>',
	nextArrow:'<img class="slick-arrow slick-next" src="images/slider-next.png"/>',
	adaptiveHeight:true,
	
	responsive: [
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
		}
	]
});

