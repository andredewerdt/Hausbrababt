'use strict';
/* global $ */
/* eslint camelcase: ["warning", {properties: "never"}]*/
/* eslint no-unused-vars:"warning" */
/* eslint-disable */
function resizeNavBar(){
  var $width;
  $width = $('.header').width() + 28;
  $('.nav-container nav').css({width: $width + 'px'});
  $width = $width - 28;
  $('navm.mobile-nav').css({width: $width + 'px'});
}
function wisselAchtergrondSeizoen(id, klasse) {
        if(id === 'Zomer'){
          $(klasse + '.winter').removeClass('start-overlay');
          $(klasse + '.bar').removeClass('start-overlay');
          $(klasse + '.zomer').addClass('start-overlay');
        }
        if(id === 'Winter'){
          $(klasse + '.winter').addClass('start-overlay');
          $(klasse + '.zomer').removeClass('start-overlay');
          $(klasse + '.bar').removeClass('start-overlay');
        }
        if(id === 'Bar'){
          $(klasse + '.bar').addClass('start-overlay');
          $(klasse + '.winter').removeClass('start-overlay');
          $(klasse + '.zomer').removeClass('start-overlay');
        }

}
// background conversie
$(document).on('click', 'nav ul li', function(){
//        $('li a').removeClass('selected');
//        $(this > 'a').addClass('selected');
        wisselAchtergrondSeizoen($('a', this).attr('data-bg'), 'overlay');
        var $distance = $('.nav-container').height() - 20;
        $('html, body').animate({
              //scrollTop: $('#'+$('a',this).attr('id')+'ID').offset().top-$distance
              scrollTop: $($('a', this).attr('href')).offset().top - $distance
          }, 800);
});
// scroll
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  $('.periscope').css({'background-position': 'center ' + (wScroll + 10 - $('.periscope').offset().top) + 'px'});
});


$(window).on('resize', function(){
      resizeNavBar();
  });

  $(document).ready(function(){
    // set nav en mobile nav
    resizeNavBar();
    var sticky = new Waypoint.Sticky({
      element: $('.nav-container nav')[0]
    });

    // waypoint op sections voor aut aanpassen menubalk
    $(function() {

      // Do our DOM lookups beforehand
      var nav_container = $('.nav-container');
      var nav = $('nav');

      var sections = $('section');
      var navigation_links = $('nav a');
      var waypoints = $('section').waypoint({
        handler: function(direction){
          var active_link = $('nav a[href = \'#' + this.element.id + '\']');
          navigation_links.removeClass('selected');
          active_link.addClass('selected');
        },
        offset: function() {
          return $('.nav-container').height();
        }
      });
    });


    var blok = $('.grid.animated');
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
          if (direction === 'up') {active_section = active_section.previousElementSibling; }
          if (active_section != null) {
            var active_link = $('nav li a[href=\'#' + active_section.id + '\']');
            navigation_links.removeClass('selected');
            active_link.addClass('selected');
          }},
            offset: '25%'
          });
      });
  });
