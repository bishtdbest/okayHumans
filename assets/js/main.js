$(document).ready(function () {
// Toggle menu on click
$("button.mbMenu").click(function() {
    $(".menu").toggleClass("active");

    // Manage aria attributes for accessibility
    var isOpen = $(".menu").hasClass('active');
    $(this).attr('aria-expanded', isOpen);
    $(".menu").attr('aria-hidden', !isOpen);

    // Toggle tabindex for focusable elements inside the menu
    $(".menu button, .menu a").each(function() {
        $(this).attr('tabindex', isOpen ? 0 : -1);
    });
});

// Close menu on button click
$(".btnClose").click(function() {
    $(".menu").removeClass("active");
    $("button.mbMenu").attr('aria-expanded', false);
    $(".menu").attr('aria-hidden', true);

    // Disable focus for all focusable elements inside the menu
    $(".menu button, .menu a").attr('tabindex', -1);
});

    // Add smooth scrolling to all links with class 'scrollButton'
    $('.scrollButton').on('click', function(e) {
        e.preventDefault();  // Prevent default anchor behavior

        // Get the target section's position
        var target = $(this).attr('href');
        var targetPosition = $(target).offset().top;

        // Animate scroll to the target position
        $('html, body').animate({
            scrollTop: targetPosition
        }, 400);  // Adjust duration of scroll
    });
});