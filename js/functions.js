// Remap jQuery to $
(function($){

	$('fieldset:not(#foo) #budget-q').click(function() {
		if($('#budget-q').is(':checked')) {
			$('#budget-c').addClass('checkbox-checked');
			$('#more-budget').addClass('display-more');
		} else {
			$('#budget-c').removeClass('checkbox-checked');
			$('#more-budget').removeClass('display-more');
		}
	});
		
	$('fieldset:not(#foo) #deadline-q').click(function() {
		if($('#deadline-q').is(':checked')) {
			$('#deadline-c').addClass('checkbox-checked');
			$('#more-deadline').addClass('display-more');
		} else {
			$('#deadline-c').removeClass('checkbox-checked');
			$('#more-deadline').removeClass('display-more');
		}
	});

    $(document).ready(function() {
    
    

        // Add incremental anchors to pages and create next page links
        enquire.register("screen and (min-width: 64em)", {
            setup : function() {
                var pages = 1;
                $('.entry-content > div').each(function() {
                    $(this).attr('id', 'page'+(pages+""));
                    pages++;
                    $(this).after('<a title="Scroll to the next page" id="page'+(pages+'')+'link" class="nextpagelink scroll" href="#page'+(pages+'')+'">Next&nbsp;page</a>');
                });
                $('#page'+(pages+'')+'link').remove();
                $('.contents-nav').before('<a title="Scroll to the contents" class="nextpagelink" href="#contents">Contents</a>');
                $('.contents-nav').after('<a title="Scroll to the first page" class="nextpagelink" href="#page1">Start reading</a>');
            },
            match : function() {
                $('.nextpagelink').css({'display': 'block'});
            },
            unmatch : function() {
                $('.nextpagelink').css({'display': 'none'});
            }
        });

        // Smooth scrolling
        $('.entry-title a, .contents-nav a, .nextpagelink, .scroll').click(function(event){
            event.preventDefault();
            $('html, body').animate({scrollTop:$(this.hash).offset().top}, 300);
        });

    });

    $(window).load(function() {

        // Hide img object on larger screens
        enquire.register("screen and (min-width: 64em)", {
            match : function() {
                resizeDiv();
                $('.photo').css({'background-position': 'center center'});
                $('.photo img').addClass('visuallyhidden');
            },
            unmatch : function() {
                $('.photo').css({'height': 'auto'});
                $('.photo img').removeClass('visuallyhidden');
            }
        });

    });

    $(window).resize(function() {

        // Hide img object on larger screens
        enquire.register("screen and (min-width: 64em)", {
            match : function() {
                resizeDiv();
                $('.photo').css({'background-position': 'center center'});
                $('.photo img').addClass('visuallyhidden');
            },
            unmatch : function() {
                $('.photo').css({'height': 'auto'});
                $('.photo img').removeClass('visuallyhidden');
            }
        });

    });

})(window.jQuery);