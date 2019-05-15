(function($) {
    "use strict"
    $(function() {

        function setBodyPadding() {
            var navbarHeight = $('.navbar').innerHeight()
            $('body').css({
                paddingTop: navbarHeight
            })
        }

        function toggleMenu(action) {
            if(action == 'open') {
                $('#openMenuM').addClass('is-active')
                $('body').addClass(['is--menu-open', 'is--overlay'])
            }else if(action == 'close') {
                $('#openMenuM').removeClass('is-active')
                $('body').removeClass(['is--menu-open', 'is--overlay'])
            }
        }

        toggleBlueNavbar($(document).scrollTop())

        function toggleBlueNavbar(height) {
            if(height > $('.navbar').innerHeight()) {
                $('header')
                        .addClass('is--scroll')
            }else {
                $('header')
                        .removeClass('is--scroll')
            }
        }

        $('#openMenuM').on('click', function() {
            if($(this).hasClass('is-active')) toggleMenu('close')
            else toggleMenu('open')
        })

        $('#overlay').on('click', function() {
            toggleMenu('close')
        })

        $(document).scroll(function() {
            toggleBlueNavbar($(document).scrollTop())
        })

        $(window).resize(function() {
            setBodyPadding()
        })

        setBodyPadding()

    })
})(jQuery);