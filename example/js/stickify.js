/**
 * Sticky Header Plugin
 *
 *
 * Options:
 *	- position (string)
 *  - animation (string)
 *  - animationDuration (numeric)
 *  - reverse (boolean) (only for top and bottom)
 *  - width (string)
 *  - z-index (numeric)
 *
 */


(function($) {

    $.fn.stickify = function (options) {

        var $selector = this;

        var defaultOptions = {
            position: 'top',
            animation: 'fade',
            animationDuration: '0.4',
            reverse: false,
            width: '100%',
            zIndex: '9999'
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
            if (didScroll && opts.reverse === true) {
                hasScrolled();
                didScroll = false;
            } else {
                fixedHeader();
            }
        }, 250);

        function fixedHeader() {

            var scroll = $(window).scrollTop();

            if (scroll >= 100) $selector
                .css('position', 'fixed')
                .css(opts.position, '0')
                .css('width', opts.width)
                .css('z-index', opts.zIndex)

        }

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
                    .css(opts.position, '0')
                    .css('transition', opts.position + ' ' + opts.animationDuration + 's ease-in-out')
                    .css(opts.position, '-1000px')
                    .css('width', opts.width)
                    .css('z-index', opts.zIndex)

            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    // $selector.removeClass('nav-up').addClass('nav-down');
                    $selector
                        .css(opts.position, '-1000px')
                        .css('transition', opts.position + ' ' + opts.animationDuration + 's ease-in-out')
                        .css(opts.position, '0')
                        .css('width', opts.width)
                        .css('z-index', opts.zIndex)
                }
            }

            lastScrollTop = st;
        }

        return this;
    };

})(jQuery);

