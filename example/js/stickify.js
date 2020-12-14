/**
 * Sticky Header Plugin
 *
 *
 *
 * Options:
 *	- position (string)
 *  - animation (string)
 *  - direction (string)
 *  - reverse (boolean) (only for top and bottom)
 *
 */


(function($) {

    $.fn.stickify = function (options) {

        var $selector = this;

        var defaultOptions = {
            position: 'top',
            animation: 'fade',
            direction: '',
            reverse: true
        };

        var opts = $.extend({}, defaultOptions, options);

        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $selector.outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();

            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                // $selector.removeClass('nav-down').addClass('nav-up');
                $selector
                    .css('position', 'fixed')
                    .css('top', '0')
                    .css('transition', 'top 0.4s ease-in-out')
                    .css('top', '-1000px')
                    .css('width', '100%')

            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    // $selector.removeClass('nav-up').addClass('nav-down');
                    $selector
                        .css('top', '-1000px')
                        .css('transition', 'top 0.4s ease-in-out')
                        .css('top', '0')
                        .css('width', '100%')
                }
            }

            lastScrollTop = st;
        }

        return this;
    };

})(jQuery);

