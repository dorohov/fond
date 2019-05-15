(function($) {
    "use strict"
    $(function() {

        setMainHeight()

        function setMainHeight() {

            var elemsHeight = $('.navbar').innerHeight() + $('.footer').innerHeight()

            $('main').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
        }

        $(window).resize(function() {
            setMainHeight()
        })

    })
})(jQuery);