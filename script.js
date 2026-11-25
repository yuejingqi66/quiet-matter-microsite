// Wait until all the HTML elements are loaded
$(document).ready(function () {

  // Slick: featured carousel, arrows are the buttons in the header
  $('#slider').slick({
    prevArrow: "#featured_prev",
    nextArrow: "#featured_next"
  });

});

// onLoad; wait until all multimedia assets are loaded
$(window).on("load", function () {

  // Isotope: masonry layout for the journal photos (needs the images loaded to measure them)
  new Isotope('#grid', {
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: { columnWidth: '.grid-sizer', gutter: 32 }
  });

});
