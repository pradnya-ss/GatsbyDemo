jQuery(document).ready(function(){
  jQuery('.mobile-menu-icon').on("click", function(){
    jQuery(this).toggleClass('open');
    jQuery('.nav').toggleClass('open');
  });

  // for headline page - filter section
  jQuery('a.filter-tag').click(function(e){
    // e.preventDefault();
    jQuery('.filter-li').slideToggle();
    jQuery('.filter-li').toggleClass('show');
  });
});