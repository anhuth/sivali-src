import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();


// Product Gallery
$( document ).ready(function() {
  var actualid=$('#main-product-image').attr('data-actualid');
  // Set actual thumb's border
  $('#img' + actualid).find('img').css('border','2px solid white');
  // Set actual main image and title
  var newtitle=$('#img' + actualid).data('alt');
  $('#main-product-image').attr('src', $('#img' + actualid).data('image')).attr('alt',newtitle);
  $('#main-product-title').text(newtitle);
});
$('.sim-thumb').on('click', function() {
  var mainimage = $(this).closest('.menu').siblings('#main-product-image');
  var actualid=$(mainimage).attr('data-actualid');
  // Unset old thumb's border
  $(this).closest('.menu').find('#img' + actualid).find('img').css('border','none');
  // Set this thumb's border
  $(this).find('img').css('border','2px solid white');
  // Store new data
  var newtitle=$(this).find('img').attr('alt');
  $(mainimage).attr('src', $(this).data('image')).attr('alt',newtitle);
  $(mainimage).attr('data-actualid', $(this).attr('data-id'));
  $(this).closest('.menu').siblings('#main-product-title').text(newtitle);
})
$('.sim-previous').on('click', function() {
  // Previous-Button clicked: trigger click on previous thumbnail
  var previous_id=parseInt($('#main-product-image').attr('data-actualid'))-1;
  $('#img' + previous_id).trigger( 'click' );
})
$('.sim-next').on('click', function() {
// Next-Button clicked: trigger click on next thumbnail
  var next_id=parseInt($('#main-product-image').attr('data-actualid'))+1;
  $('#img' + next_id).trigger( 'click' );
})

// Clearing in Reveal modal window
$('.call-thumb').on('click', function() {
  var modalname = $(this).find('a').attr('data-open');
  var modal = $('#' + modalname);
  var actualid=$(modal).find('#main-image').attr('data-actualid');
  // Unset thumb's border in modal window
  $(modal).find('#modalthumb' + actualid).find('img').css('border','none');
  // Redefine actual_id in main image
  $(modal).find('#main-image').attr('data-actualid', $(this).attr('data-id'));
});
$('.reveal').on('open.zf.reveal', function() {
   var actualid=$(this).find('#main-image').attr('data-actualid');
   var actual=$(this).find('#modalthumb' + actualid);
   // Set actual thumb's border
   $(actual).find('img').css('border','2px solid black');
   // Set actual main image, title and description
   $(this).find('#main-image').attr('src', $(actual).data('image')).attr('alt', $(actual).data('alt'));
   $(this).find('#main-title').text($(actual).data('alt'));
   $(this).find('#main-description').html($(actual).data('description'));
});
$('.modal-thumb').on('click', function() {
   var modal = $(this).closest('.reveal');
   var main = $(modal).find('#main-image');
   var actualid=$(main).attr('data-actualid');
   // Unset old thumb's border
   $(modal).find('#modalthumb' + actualid).find('img').css('border','none');
   // Set this thumb's border
   $(this).find('img').css('border','2px solid black');
   // Store new data
   $(main).attr('src', $(this).data('image')).attr('alt', $(this).data('alt'));
   $(main).attr('data-actualid', $(this).attr('data-id'));
   $(modal).find('#main-title').text($(this).data('alt'));
   $(modal).find('#main-description').html($(this).data('description'));

 });
 $('.reveal-previous').on('click', function() {
   var modal = $(this).closest('.reveal');
   var main = $(modal).find('#main-image');
   // Previous-Button clicked: trigger click on previous thumbnail
   var previous_id=parseInt($(main).attr('data-actualid'))-1;
   $(modal).find('#modalthumb' + previous_id).trigger( 'click' );
 });
 $('.reveal-next').on('click', function() {
   var modal = $(this).closest('.reveal');
   var main = $(modal).find('#main-image');
 // Next-Button clicked: trigger click on next thumbnail
   var next_id=parseInt($(main).attr('data-actualid'))+1;
   $(modal).find('#modalthumb' + next_id).trigger( 'click' );
 });

 // Hover underline menu from Rafi
 $("[data-menu-underline-from-center] a").addClass("underline-from-center");

// Katalog Cards
 $('[data-cardSelectButton]').click(function() {
  $(this).parent('[data-cardSelect]').toggleClass('is-selected');
});

// Tiles
 $('[data-tileSelectButton]').click(function() {
  $(this).parent('[data-tileSelect]').toggleClass('is-selected');
});
