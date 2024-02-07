// Custom script to open dropdown on hover
 $(document).ready(function () {
   $('.nav-item.dropdown').hover(function () {
     $(this).find('.dropdown-toggle').dropdown('toggle');
   });
 });


//script to scroll to top on load
 $(document).ready(function(){
     $(this).scrollTop(0);
 });


//script to add background colour to navbar past its container's size
 $(document).ready(function(){
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > $('#navbar').outerHeight()) {
        $('#navbar').addClass('scrolled');
      } else {
        $('#navbar').removeClass('scrolled');
      }
    });
  });

// galery javascript
$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

		$(this).addClass('transition');
	}, function(){

		$(this).removeClass('transition');
	});
});


  
