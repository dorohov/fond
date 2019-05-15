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

        $('#openMenuM').on('click', function() {
            if($(this).hasClass('is-active')) toggleMenu('close')
            else toggleMenu('open')
        })

        $('#overlay').on('click', function() {
            toggleMenu('close')
        })

        $(window).resize(function() {
            setBodyPadding()
        })

        setBodyPadding()

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJvZHlQYWRkaW5nKCkge1xyXG4gICAgICAgICAgICB2YXIgbmF2YmFySGVpZ2h0ID0gJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KClcclxuICAgICAgICAgICAgJCgnYm9keScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wOiBuYXZiYXJIZWlnaHRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmKGFjdGlvbiA9PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgICAgICQoJyNvcGVuTWVudU0nKS5hZGRDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhbJ2lzLS1tZW51LW9wZW4nLCAnaXMtLW92ZXJsYXknXSlcclxuICAgICAgICAgICAgfWVsc2UgaWYoYWN0aW9uID09ICdjbG9zZScpIHtcclxuICAgICAgICAgICAgICAgICQoJyNvcGVuTWVudU0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhbJ2lzLS1tZW51LW9wZW4nLCAnaXMtLW92ZXJsYXknXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnI29wZW5NZW51TScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdpcy1hY3RpdmUnKSkgdG9nZ2xlTWVudSgnY2xvc2UnKVxyXG4gICAgICAgICAgICBlbHNlIHRvZ2dsZU1lbnUoJ29wZW4nKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJyNvdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZU1lbnUoJ2Nsb3NlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzZXRCb2R5UGFkZGluZygpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0Qm9keVBhZGRpbmcoKVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
