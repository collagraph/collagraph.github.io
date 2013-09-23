// Remap jQuery to $
(function($){

	$('#ServiceReq1').addClass('visuallyhidden');
	$('#ServiceReq2').addClass('visuallyhidden');
	$('#ServiceReq3').addClass('visuallyhidden');
	$('#deadline-q').addClass('visuallyhidden');
	$('#budget-q').addClass('visuallyhidden');

	$('fieldset:not(#foo) #ServiceReq1').click(function() {
		if($('#ServiceReq1').is(':checked')) {
			$('#titleServiceReq1').addClass('checkbox-checked');
		} else {
			$('#titleServiceReq1').removeClass('checkbox-checked');
		}
	});

	$('fieldset:not(#foo) #ServiceReq2').click(function() {
		if($('#ServiceReq2').is(':checked')) {
			$('#titleServiceReq2').addClass('checkbox-checked');
		} else {
			$('#titleServiceReq2').removeClass('checkbox-checked');
		}
	});
	
	$('fieldset:not(#foo) #ServiceReq3').click(function() {
		if($('#ServiceReq3').is(':checked')) {
			$('#titleServiceReq3').addClass('checkbox-checked');
		} else {
			$('#titleServiceReq3').removeClass('checkbox-checked');
		}
	});


	$('fieldset:not(#foo) #budget-q').click(function() {
		if($('#budget-q').is(':checked')) {
			$('#budget-c').addClass('checkbox-checked');
			$('#more-budget').addClass('display-more').removeClass('display-hide');
		} else {
			$('#budget-c').removeClass('checkbox-checked');
			$('#more-budget').removeClass('display-more').addClass('display-hide');
		}
	});

	$('fieldset:not(#foo) #deadline-q').click(function() {
		if($('#deadline-q').is(':checked')) {
			$('#deadline-c').addClass('checkbox-checked');
			$('#more-deadline').addClass('display-more').removeClass('display-hide');
			$('#deadline').focus();
		} else {
			$('#deadline-c').removeClass('checkbox-checked');
			$('#more-deadline').removeClass('display-more').addClass('display-hide');
		}
	});

    // flexslider slide changer
	$('.slide-1').click(function(){
		var slidePath=$(this).closest('article').attr('id');
		var slideURL='/assets/work/'+slidePath+'/slide-1.jpg';
        $('#'+slidePath+' .photo img').attr('src',slideURL);
		$('#'+slidePath+' .slide-link').removeClass('current');
		$(this).addClass('current');
	});

	$('.slide-2').click(function(){
		var slidePath=$(this).closest('article').attr('id');
		var slideURL='/assets/work/'+slidePath+'/slide-2.jpg';
		$('#'+slidePath+' .photo img').attr('src',slideURL);
		$('#'+slidePath+' .slide-link').removeClass('current');
		$(this).addClass('current');
	});

	$('.slide-3').click(function(){
		var slidePath=$(this).closest('article').attr('id');
		var slideURL='/assets/work/'+slidePath+'/slide-3.jpg';
        $('#'+slidePath+' .photo img').attr('src',slideURL);
		$('#'+slidePath+' .slide-link').removeClass('current');
		$(this).addClass('current');
	});

    $(document).ready(function() {

		// Flexslider
		$(".flexslider")
		.flexslider({
			animation: "slide",
			slideshow: false,
			useCSS: true,
			animationLoop: false,
			smoothHeight: false,
            directionNav: false,
			controlNav: false
		}).flexsliderManualDirectionControls();

        // Smooth scrolling
        $('.scroll').click(function(event){
            $('html, body').animate({scrollTop:$(this.hash).offset().top}, 300);
        });

    });

    // $(window).load(function() {

    //     // Hide img object on larger screens
    //     enquire.register("screen and (min-width: 64em)", {
    //         match : function() {
    //             resizeDiv();
    //             $('.photo').css({'background-position': 'center center'});
    //             $('.photo img').addClass('visuallyhidden');
    //         },
    //         unmatch : function() {
    //             $('.photo').css({'height': 'auto'});
    //             $('.photo img').removeClass('visuallyhidden');
    //         }
    //     });

    // });

    // $(window).resize(function() {

    //     // Hide img object on larger screens
    //     enquire.register("screen and (min-width: 64em)", {
    //         match : function() {
    //             resizeDiv();
    //             $('.photo').css({'background-position': 'center center'});
    //             $('.photo img').addClass('visuallyhidden');
    //         },
    //         unmatch : function() {
    //             $('.photo').css({'height': 'auto'});
    //             $('.photo img').removeClass('visuallyhidden');
    //         }
    //     });

    // });
    
    // Form Validation http://jqueryvalidation.org/documentation/
	$(document).ready(function() { 
				
		$('#contact').validate();
	});
	
    // Ajax Form http://malsup.com/jquery/form/
	$(document).ready(function() {
     $('#contact').ajaxForm(function() {
     		url: 'http://getsimpleform.com/messages/ajax?form_api_token=d683d58f62e4cb8a410787d71d1e1694'
            target: '#contact-success'	        
        }); 
    }); 


})(window.jQuery);