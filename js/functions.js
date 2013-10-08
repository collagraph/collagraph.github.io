// Remap jQuery to $
(function($){

    $('fieldset:not(#foo) #phone-q').click(function() {
        if($('#phone-q').is(':checked')) {
            $('#phone-c').addClass('checkbox-checked');
            $('#more-phone').addClass('display-more').removeClass('display-hide');
        } else {
            $('#phone-c').removeClass('checkbox-checked');
            $('#more-phone').removeClass('display-more').addClass('display-hide');
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

	$('fieldset:not(#foo) #budget-q').click(function() {
		if($('#budget-q').is(':checked')) {
			$('#budget-c').addClass('checkbox-checked');
			$('#more-budget').addClass('display-more').removeClass('display-hide');
		} else {
			$('#budget-c').removeClass('checkbox-checked');
			$('#more-budget').removeClass('display-more').addClass('display-hide');
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
            $('html, body').animate({scrollTop:$(this.hash).offset().top+1}, 300);
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

    /* Form validation -------------------------------------------------------------- */
    // Form validation http://jqueryvalidation.org/documentation/
    $(document).ready(function(){
        $('#contact').validate();
        // add html5 required into form and remove here if validate loads. Progressive enhancement for those with js.
	});

    // Ajax form http://malsup.com/jquery/form/
    $(document).ready(function(){
        var options = {
            dataType: 'jsonp',
			url: 'http://getsimpleform.com/messages/ajax?form_api_token=17732cc462230cce1807da0bed5d3bd9',
            target: '#contact-success', // target element(s) to be updated with server response
            beforeSubmit: showRequest,  // pre-submit callback
            success: showResponse,
            error: showAlert, // success callback
            timeout:   3000
        }
        $('#contact').ajaxForm(options);
    });

    // Pre-submit callback
    function showRequest(formData, jqForm, options) {
        $('#saveForm').css('display', 'none');
        $('#contact-processing').css('display', 'block');
        return true;
    }

    // Post-submit callback
    function showResponse(responseText, statusText, xhr, $form) {
	        $('#contact-processing').fadeOut(600, function() {
            $('#contact-success').fadeIn(600);
        });
    }

     // Post-submit callback
    function showAlert(responseText, statusText, xhr, $form) {
	        $('#contact-processing').fadeOut(600, function() {
            $('#contact-alert').fadeIn(600);
        });
    }

})(window.jQuery);

// set #deadline placeholder to 3 months in advance

var today = new Date();
var mm = today.getMonth()+4; //January is 0!
var yyyy = today.getFullYear();

if(mm > 12){
    mm = mm-12;
    yyyy = yyyy+1;
}

mm = mm.toString();

if (mm == "1"){mm = "January"}
if (mm == "2"){mm = "February"}
if (mm == "3"){mm = "March"}
if (mm == "4"){mm = "April"}
if (mm == "5"){mm = "May"}
if (mm == "6"){mm = "June"}
if (mm == "7"){mm = "July"}
if (mm == "8"){mm = "August"}
if (mm == "9"){mm = "September"}
if (mm == "10"){mm = "October"}
if (mm == "11"){mm = "November"}
if (mm == "12"){mm = "December"}

var element = document.getElementById("Deadline");
element.setAttribute("placeholder", "e.g. the end of " + mm + " " + yyyy);
