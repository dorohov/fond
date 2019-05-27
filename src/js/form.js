(function($) {
    "use strict"
    $(function() {

        $('form').parsley()
        $('#modal_form').modal()
        $('.anchor').on('click', function(e) {
            e.preventDefault()
            var aid = $(this).attr("href");
            $('html,body').animate({scrollTop: $(aid).offset().top - $('.navbar').innerHeight()},'slow');
        })

    })
})(jQuery);