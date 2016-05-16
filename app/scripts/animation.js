function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '20%'
        });
  });
}

// sticky navbar
var sticky = new Waypoint.Sticky({
    element: $('.nav-container')[0]
  })

 $(function() {
   var nav_container = $(".nav-container");
   var nav = $("nav");
   nav_container.waypoint({
     handler: function(event, direction) {
       	nav.toggleClass('sticky', direction=='down');
     }
   });

 });
