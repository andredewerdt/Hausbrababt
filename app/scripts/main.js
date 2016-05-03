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
});

function WisselAchtergrondSeizoen(id,klasse) {
        if(id=="Zomer"){
          $(klasse+".winter").removeClass('start-overlay');
          $(klasse+".zomer").addClass('start-overlay');
        }
        if(id=="Winter"){
          $(klasse+".winter").addClass('start-overlay');
          $(klasse+".zomer").removeClass('start-overlay');
        }

/*          setTimeout(function(){
            $(klasse).css('z-index','99');
          }, 1000);
          $('body').removeClass('start-overlay');
          setTimeout(function(){
            $(klasse).removeClass("winter").addClass("zomer");
          }, 1000);
          setTimeout(function(){
            $('body').addClass('start-overlay');
          }, 1000);
          setTimeout(function(){
            $('overlay').css('z-index','-1');
          }, 1000);
        }
        if(id=='Winter'){
          $('body').removeClass('start-overlay');
          setTimeout(function(){
             $(klasse).removeClass("zomer").addClass("winter");
          }, 1000);
          setTimeout(function(){
            $('body').addClass('start-overlay');
          }, 1000);

        }
*/
/*      if(id=="Zomer"){
        $('klasse').animate({ opacity: 0 },700,function(){
        $('klasse').removeClass("winter").addClass("zomer");});
        $('klasse').animate({ opacity: 1 },700);
      }
      if(id=='Winter'){
        $('klasse').animate({ opacity: 0 },700, function(){
        $('klasse').removeClass("zomer").addClass("winter");});
        $('klasse').animate({ opacity: 1 },700);
      } */
}
