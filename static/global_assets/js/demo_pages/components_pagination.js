/* ------------------------------------------------------------------------------
 *
 *  # Pagination
 *
 *  Specific JS code additions for components_pagination.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var Pagination = function () {


    //
    // Setup module components
    //

    // Dynamic pagination
    var _componentPaginationDynamic = function() {
        if (!$().twbsPagination) {
            console.warn('Warning - sweet_alert.min.js is not loaded.');
            return;
        }

        // Basic
        $('.twbs-default').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-trainer_content-default').text('Page #' + page + ' trainer_content');
            }
        });

        // Flat style
        $('.twbs-flat').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-trainer_content-flat').text('Page #' + page + ' trainer_content');
            }
        });

        // Separated style
        $('.twbs-separated').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-trainer_content-separated').text('Page #' + page + ' trainer_content');
            }
        });

        // Custom button text
        $('.twbs-prev-next').twbsPagination({
            totalPages: 35,
            visiblePages: 3,
            prev: $('html').attr('dir') == 'rtl' ? '&#8674;' : '&#8672;',
            next: $('html').attr('dir') == 'rtl' ? '&#8672;' : '&#8674;',
            first: $('html').attr('dir') == 'rtl' ? '&#8677;' : '&#8676;',
            last: $('html').attr('dir') == 'rtl' ? '&#8676;' : '&#8677;',
            onPageClick: function (event, page) {
                $('.twbs-trainer_content-prev-next').text('Page #' + page + ' trainer_content');
            }
        });

        // Custom start page
        $('.twbs-page-start').twbsPagination({
            totalPages: 35,
            visiblePages: 4,
            startPage: 3,
            prev: 'Prev',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-trainer_content-page-start').text('Page #' + page + ' trainer_content');
            }
        });

        // Set number of visible pages
        $('.twbs-visible-pages').twbsPagination({
            totalPages: 35,
            visiblePages: 2,
            prev: $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;',
            next: $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;',
            first: null,
            last: null,
            onPageClick: function (event, page) {
                $('.twbs-trainer_content-visible-pages').text('Page #' + page + ' trainer_content');
            }
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        initComponents: function() {
            _componentPaginationDynamic();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Pagination.initComponents();
});
