/* -------------------------------------------------------------------------------
 * functions
 * -------------------------------------------------------------------------------*/

(function($){
    $('fieldset:not(#foo) #phone-q').click(function() {
        if($('#phone-q').is(':checked')) {
            $('#phone-c').removeClass('checkbox-focused').addClass('checkbox-checked-focused');

            $('#more-phone').addClass('display-more').removeClass('display-hide');
        } else {
            $('#phone-c').removeClass('checkbox-checked, checkbox-checked-focused').addClass('checkbox-focused');
            $('#more-phone').removeClass('display-more').addClass('display-hide');
        }
    });

    $('fieldset:not(#foo) #deadline-q').click(function() {
        if($('#deadline-q').is(':checked')) {
            $('#deadline-c').removeClass('checkbox-focused').addClass('checkbox-checked-focused');

            $('#more-deadline').addClass('display-more').removeClass('display-hide');

            $('#deadline').focus();
        } else {
            $('#deadline-c').removeClass('checkbox-checked, checkbox-checked-focused').addClass('checkbox-focused');

            $('#more-deadline').removeClass('display-more').addClass('display-hide');
        }
    });

    $('fieldset:not(#foo) #budget-q').click(function() {
        if($('#budget-q').is(':checked')) {
            $('#budget-c').removeClass('checkbox-focused').addClass('checkbox-checked-focused');

            $('#more-budget').addClass('display-more').removeClass('display-hide');
        } else {
            $('#budget-c').removeClass('checkbox-checked, checkbox-checked-focused').addClass('checkbox-focused');

            $('#more-budget').removeClass('display-more').addClass('display-hide');
        }
    });

    $('fieldset:not(#foo) #phone-q').focus(function() {
        if ($('#phone-q').is(':checked')) {
            $('#phone-c').removeClass('checkbox-checked').addClass('checkbox-checked-focused');
        } else {
            $('#phone-c').addClass('checkbox-focused');
        }
    }).blur(function() {
        if ($('#phone-q').is(':checked')) {
            $('#phone-c').removeClass('checkbox-checked-focused').addClass('checkbox-checked');
        } else {
            $('#phone-c').removeClass('checkbox-focused');
        }
    });

    $('fieldset:not(#foo) #deadline-q').focus(function() {
        if ($('#deadline-q').is(':checked')) {
            $('#deadline-c').removeClass('checkbox-checked').addClass('checkbox-checked-focused');
        } else {
            $('#deadline-c').addClass('checkbox-focused');
        }
    }).blur(function() {
        if ($('#deadline-q').is(':checked')) {
            $('#deadline-c').removeClass('checkbox-checked-focused').addClass('checkbox-checked');
        } else {
            $('#deadline-c').removeClass('checkbox-focused');
        }
    });

    $('fieldset:not(#foo) #budget-q').focus(function() {
        if ($('#budget-q').is(':checked')) {
            $('#budget-c').removeClass('checkbox-checked').addClass('checkbox-checked-focused');
        } else {
            $('#budget-c').addClass('checkbox-focused');
        }
    }).blur(function() {
        if ($('#budget-q').is(':checked')) {
            $('#budget-c').removeClass('checkbox-checked-focused').addClass('checkbox-checked');
        } else {
            $('#budget-c').removeClass('checkbox-focused');
        }
    });

    $(document).ready(function() {
        // smooth scrolling
        $('.scroll').click(function(event){
            event.preventDefault();
            var thisHash = $(this).attr('href');
            $('html, body').animate({scrollTop:$(this.hash).offset().top+1}, 300);
            window.history.replaceState('Object', 'Title', '/'+thisHash);
        });

    });

    // preload images
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
        });
    }

    $(window).bind("load", function() {
        preload([
            '/assets/check.png',
            '/assets/off-focus.png',
            '/assets/check-focus.png'
        ]);
    });

    // form validation http://jqueryvalidation.org/documentation/
    $(document).ready(function(){
        $('#contact').validate();
    });

    // ajax form http://malsup.com/jquery/form/
    $(document).ready(function(){
        var options = {
            dataType: 'jsonp',
            url: 'http://getsimpleform.com/messages/ajax?form_api_token=17732cc462230cce1807da0bed5d3bd9',
            target: '#contact-success', // target element(s) to be updated with server response
            beforeSubmit: showRequest,  // pre-submit callback
            success: showResponse,
            error: showAlert, // success callback
            timeout:   3000
        };

        $('#contact').ajaxForm(options);
    });

    // pre-submit callback
    function showRequest(formData, jqForm, options) {
        $('#saveForm').css('display', 'none');
        $('#contact-processing').css('display', 'block');
        return true;
    }

    // post-submit callback
    function showResponse(responseText, statusText, xhr, $form) {
            $('#contact-processing').fadeOut(600, function() {
            $('#contact-success').fadeIn(600);
        });
    }

     // post-submit callback
    function showAlert(responseText, statusText, xhr, $form) {
            $('#contact-processing').fadeOut(600, function() {
            $('#contact-alert').fadeIn(600);
        });
    }

})(window.jQuery);

// set deadline placeholder text to 3 months ahead
var today = new Date();
var mm = today.getMonth()+4; //January is 0!
var yyyy = today.getFullYear();

if(mm > 12){
    mm = mm-12;
    yyyy = yyyy+1;
}

mm = mm.toString();

if (mm == "1"){mm = "January";}
if (mm == "2"){mm = "February";}
if (mm == "3"){mm = "March";}
if (mm == "4"){mm = "April";}
if (mm == "5"){mm = "May";}
if (mm == "6"){mm = "June";}
if (mm == "7"){mm = "July";}
if (mm == "8"){mm = "August";}
if (mm == "9"){mm = "September";}
if (mm == "10"){mm = "October";}
if (mm == "11"){mm = "November";}
if (mm == "12"){mm = "December";}

var element = document.getElementById("Deadline");
element.setAttribute("placeholder", "e.g. the end of " + mm + " " + yyyy);