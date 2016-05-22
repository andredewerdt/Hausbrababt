
$(document).ready(function(){

  var sticky = new Waypoint.Sticky({
    element: $('.nav-container nav')[0]
  })

  // waypoint op sections voor aut aanpassen menubalk
  $(function() {

    // Do our DOM lookups beforehand
    var nav_container = $(".nav-container");
    var nav = $("nav");

    var sections = $("section");
    var navigation_links = $("nav a");
    var waypoints = $('section').waypoint({
      handler: function(direction) {
        var active_link = $('nav a[href="#' + this.element.id + '"]');
        navigation_links.removeClass("selected");
        active_link.addClass("selected");
      },
      offset: function() {
        return $(".nav-container").height()
      }
    })
  });

  var blok = $('.grid.animated');
  blok.css('opacity', 0);
  blok.waypoint({
    handler: function(event, direction) {
      var klas = this.element.getAttributeNode('data-os-animation').value;
      this.element.className= this.element.className+' '+klas;
      },
  offset: '75%'
  })
//  $('#section-2 .grid.animated').waypoint(function(direction) {
//      if (direction=='down'){
        //alert(this.element.getAttributeNode('data-os-animation').value);
//        var klas = this.element.getAttributeNode('data-os-animation').value;
//        $('#section-2 .grid.animated').addClass(klas);}
//  }, { offset: '80%' })
})
