(function ($, w) {
    $(function () {

        $('.button-collapse').sideNav();

        $('.clickable').on('click', function () {
            var link = $(this).find('a').first();
            if (link) {
                w.open($(link)[0].href, '_self');
            }
        });

    }); // end of document ready
})(jQuery, window); // end of jQuery name space
