'use strict';
/* global $ */

/* eslint-disable */
function resizeNavBar() {
  var $width;
  $width = $('.header').width() + 28;
  $('.nav-container nav').css({
    width: $width + 'px'
  });
  $width = $width - 28;
  $('navm.mobile-nav').css({
    width: $width + 'px'
  });
}

function wisselAchtergrondSeizoen(id, klasse) {
  $(klasse).removeClass('start-overlay');
  $(klasse+'.'+id).addClass('start-overlay');
}

// Clicken op de link zorgt voor scroll en background wisseling
$(document).on('click', 'nav ul li', function() {
  wisselAchtergrondSeizoen($('a', this).attr('data-bg'), 'overlay');
  var $distance = $('.nav-container').height() - 20;
  var scrollTopvar = $($('a', this).attr('href')).offset().top - $distance;
  //console.log($(this).children().attr('href'));
  if ($(this).children().attr('href') === '#section-1')  {
    scrollTopvar = 0;
  }
  $('html, body').animate({
    scrollTop: scrollTopvar
  }, 800);
});
// scroll
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  if ($('.periscope').length != 0) {
    $('.periscope').css({
      'background-position': 'center ' + (wScroll + 10 - $('.periscope').offset().top) + 'px'
  });
  }
});


$(window).on('resize', function() {
  resizeNavBar();
  if(window.innerHeight < window.innerWidth){
    $('navm').addClass('landscape');
  } else {
    $('navm').removeClass('landscape');
  }
});

$(document).ready(function() {
  // set nav en mobile nav
  resizeNavBar();
  var sticky = new Waypoint.Sticky({
    element: $('.nav-container nav')[0]
  });
  $("a.groupfb").fancybox({
      'titlePosition'  : 'inside',
  		'transitionIn'	:	'elastic',
  		'transitionOut'	:	'elastic',
  		'speedIn'		:	600,
  		'speedOut'		:	200,
  		'overlayShow'	:	false
  	});

  $('.fancybox-media').fancybox({
        maxWidth	: 800,
    		maxHeight	: 600,
    		fitToView	: false,
    		width		: '70%',
    		height		: '70%',
    		autoSize	: false,
    		closeClick	: false,
    		openEffect	: 'none',
    		closeEffect	: 'none',
		helpers : {
			media : {}
		}
	});

  // waypoint op sections voor aut aanpassen menubalk
  $(function() {

    // Do our DOM lookups beforehand
    var nav_container = $('.nav-container');
    var nav = $('nav');

    var sections = $('section');
    var navigation_links = $('nav a');
    var waypoints = $('section').waypoint({
      handler: function(direction) {
        var active_link = $('nav a[href = \'#' + this.element.id + '\']');
        wisselAchtergrondSeizoen(active_link.attr('data-bg'), 'overlay');
        navigation_links.removeClass('selected');
        active_link.addClass('selected');
      },
      offset: function() {
        return $('.nav-container').height();
      }
    });
  });


  var blok = $('.animated');
  blok.css('opacity', 0);
  blok.waypoint({
    handler: function(event, direction) {
      var klas = this.element.getAttributeNode('data-os-animation').value;
      this.element.className = this.element.className + ' ' + klas;
    },
    offset: '75%'
  });

  $(function() {
    var sections = $('section');
    var navigation_links = $('nav li a');

    sections.waypoint({
      handler: function(direction) {
        var active_section;
        active_section = this.element;
        if (direction === 'up') {
          active_section = active_section.previousElementSibling;
        }
        if (active_section != null) {
          var active_link = $('nav li a[href=\'#' + active_section.id + '\']');
          navigation_links.removeClass('selected');
          active_link.addClass('selected');
        }
      },
      offset: '25%'
    });
  });
});
