(function($) {
    "use strict"
    $(function() {

        setMainHeight()

        function setMainHeight() {

            var elemsHeight = $('.navbar').innerHeight() + $('.footer').innerHeight()
            var padding = document.getElementsByClassName('navbar__inner')[0].getBoundingClientRect()

            $('main').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
            $('.contacts__inner').css({
                minHeight: 'calc(100vh - ' + elemsHeight + 'px)'
            })
            $('.contacts__aside__inner').css({
                paddingLeft: padding.left + 30
            })
        }

        $(window).resize(function() {
            setMainHeight()
        })

    })
})(jQuery);