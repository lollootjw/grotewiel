(function($){
	 
	
	$( document ).ready( function(){
		
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
			$(".header__lower .menu__holder").toggleClass('active');
			$(this).toggleClass('open');
		});
    
		$('.eheight').matchHeight();		
		
		$(".bx-slider").bxSlider({
			mode: 'horizontal',
			auto: false,
			useCSS: false,
			infiniteLoop: true,
			easing: 'easeInOutCubic',
			speed: 1800,
			pause: 8000,
			pager: true,
			controls: false
		});
		
		$(".referenties_holder").bxSlider({
			mode: 'horizontal',
			auto: false,
			useCSS: false,
			infiniteLoop: true,
			easing: 'easeInOutCubic',
			speed: 1800,
			pause: 8000,
			pager: false,
			controls: true
		});
		
		$('.slider-single').bxSlider({
			mode: 'horizontal',
			auto: false,
			useCSS: false,
			infiniteLoop: true,
			easing: 'easeInOutCubic',
			speed: 1800,
			pause: 8000,
			controls: true,
			pager: true,
			pagerCustom: '.slider-single-pager',
		});
		
		
		
		$('.slick__slider').slick({
		  infite: true,
		  arrows: true,
		  slidesToShow: 5,
		  responsive: [
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 780,
		      settings: {
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2
		      }
		    }
		  ]
		});
		
		
	});
})(jQuery);

