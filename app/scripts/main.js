$(document).on('click', '.navbar-collapse.in', function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
// background conversie
// background conversie
$(document).on('click','ul.nav li',function(){
        $("li").removeClass("active");
        $(this).addClass("active");
        WisselAchtergrondSeizoen($("a",this).attr('id'),'overlay');
        $('html, body').animate({
              scrollTop: $("#"+$("a",this).attr('id')+"ID").offset().top
          }, 800);
});
// scroll
$(window).scroll(function(){
  var wScroll= $(this).scrollTop();
  $('.periscope').css({'background-position':'center '+ (wScroll +10- $('.periscope').offset().top) +'px'});
  });

//subs
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
