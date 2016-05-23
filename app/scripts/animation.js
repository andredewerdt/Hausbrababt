
$(document).ready(function(){
  // set nav en mobile nav
  resizeNavBar();
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
  });

  $(function() {
    var sections = $("section");
  	var navigation_links = $("nav li a");

  	sections.waypoint({
  		handler: function(direction) {

  			var active_section;
  			//active_section = $(this);
        active_section = this.element;
  			if (direction === "up") active_section = active_section.previousElementSibling;
        if (active_section!=null) {
  			var active_link = $('nav li a[href="#' + active_section.id + '"]');
  			navigation_links.removeClass("selected");
  			active_link.addClass("selected");}
      },
      offset: '25%'
  	  })
    });
});
