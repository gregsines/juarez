
var SITE = {
			
		init: function() {
		
			SITE.nav.init();
			SITE.work.init();
			
		},
		
		nav: {
			
			init: function() {
				
				$('.menu a').on('click', function() {
					var l = $(this).attr('href');
					l = l.replace('#', '');
					
					$('.section').hide();
					$('.' + l + '-page').fadeIn(500);
					
					$('.menu a.active').removeClass('active');
					$(this).addClass('active');
					
				});
				
			}
			
			
		},
		
		work: {
		
			init: function() {
				
				$('.panel').not('.buildlink').on('click', function(e) {
					if ($(window).width() < 1025) {
						//e.preventDefault();
						$(this).toggleClass('panelturn');
					}
				});
				
			}
		}



}

SITE.init();