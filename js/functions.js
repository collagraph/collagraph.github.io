// Remap jQuery to $
(function($){

    /* Smooth scrolling -------------------------------------------------------------- */

    $(document).ready(function() {
        $('.scroll').click(function(event){
            $('html, body').animate({scrollTop:$(this.hash).offset().top}, 300);
        });
    });

    /* Flexslider -------------------------------------------------------------- */

    $(document).ready(function(){
        $(".flexslider").flexslider({
            animation: "slide",
            slideshow: false,
            useCSS: true,
            animationLoop: false,
            smoothHeight: false,
            directionNav: false,
            controlNav: false
        }).flexsliderManualDirectionControls();
    });

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

    /* Forms -------------------------------------------------------------- */

    $('#Field7').addClass('visuallyhidden');
    $('#Field8').addClass('visuallyhidden');
    $('#Field9').addClass('visuallyhidden');
    $('#deadline-q').addClass('visuallyhidden');
    $('#budget-q').addClass('visuallyhidden');

    $('fieldset:not(#foo) #Field7').click(function() {
        if($('#Field7').is(':checked')) {
            $('#title7').addClass('checkbox-checked');
        } else {
            $('#title7').removeClass('checkbox-checked');
        }
    });

    $('fieldset:not(#foo) #Field8').click(function() {
        if($('#Field8').is(':checked')) {
            $('#title8').addClass('checkbox-checked');
        } else {
            $('#title8').removeClass('checkbox-checked');
        }
    });

    $('fieldset:not(#foo) #Field9').click(function() {
        if($('#Field9').is(':checked')) {
            $('#title9').addClass('checkbox-checked');
        } else {
            $('#title9').removeClass('checkbox-checked');
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

    /* Form validation -------------------------------------------------------------- */

    $(document).ready(function(){
        // Ajax form http://malsup.com/jquery/form/
        $('#contact').validate();

        // Form validation http://jqueryvalidation.org/documentation/
        var options = {
            target: '#contact-success', // target element(s) to be updated with server response
            beforeSubmit: showRequest,  // pre-submit callback
            error: showResponse // success callback
        }
        $('#contact').ajaxForm(options);
    });

    // Pre-submit callback
    function showRequest(formData, jqForm, options) {
        return true;
    }

    // Post-submit callback
    function showResponse(responseText, statusText, xhr, $form)  {
        $('#contact-success').removeClass('display-hide');
    }

})(window.jQuery);