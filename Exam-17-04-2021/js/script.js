/*stickup part start*/
$(document).ready(function(){
 
// init Isotope
var $grid = $('.protfolio-items').isotope({
    // options
  });
        // filter items on button click
        $('.protfolio-menu').on( 'click', 'li', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        // filter items on button active
        $('.protfolio-menu').on( 'click', 'li', function() {
          $(this).addClass('active').siblings().removeClass('active');
        });



      });

