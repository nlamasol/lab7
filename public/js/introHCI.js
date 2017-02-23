'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

  $('.likeBtn').click(clickedLike);
  $('.likeCtr').click(clickedLike);

}

function clickedLike (){

  ga("send", "event", 'like', 'click');
}