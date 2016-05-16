// background conversie
$(document).on('click','nav ul li',function(){
        $("li a").removeClass("selected");
        $(this > "a").addClass("selected");
        WisselAchtergrondSeizoen($("a",this).attr('data-bg'),'overlay');
        var $distance=$(".nav-container").height()-28
        $('html, body').animate({
              //scrollTop: $("#"+$("a",this).attr('id')+"ID").offset().top-$distance
              scrollTop: $($("a",this).attr('href')).offset().top-$distance
          }, 800);
});
// scroll
$(window).scroll(function(){
  var wScroll= $(this).scrollTop();
  $('.periscope').css({'background-position':'center '+ (wScroll +10- $('.periscope').offset().top) +'px'});
});

  $(function() {

  	// Do our DOM lookups beforehand
  	var nav_container = $(".nav-container");
  	var nav = $("nav");


  	var sections = $("section");
  	var navigation_links = $("nav a");

    var waypoints = $('section').waypoint({
      handler: function(direction) {
        var active_link = $('nav a[href="#' +this.element.id  + '"]');
  			navigation_links.removeClass("selected");
  			active_link.addClass("selected");
  	}})
  });

$(window).on('resize', function(){
      resizeNavBar();
  });
//subs
function resizeNavBar(){
  var $width
  $width=$(".header").width()+28;
  $(".nav-container nav").css({width: $width+'px'});
}
function WisselAchtergrondSeizoen(id,klasse) {
        if(id=="Zomer"){
          $(klasse+".winter").removeClass('start-overlay');
          $(klasse+".zomer").addClass('start-overlay');
        }
        if(id=="Winter"){
          $(klasse+".winter").addClass('start-overlay');
          $(klasse+".zomer").removeClass('start-overlay');
        }
}
