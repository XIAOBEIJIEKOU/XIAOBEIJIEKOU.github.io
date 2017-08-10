/**
 * Created by DQ on 2017/7/25.
 */
$(document).ready(function(e) {
    // $("video").trigger("play");//for auto play
	$("video").addClass('pause');//for check pause or play add a class
	$('video').click(function() {
		if ($(this).hasClass('pause')) {
			$("video").trigger("play");
			$(this).removeClass('pause');
			$(this).addClass('play');
			document.getElementById("music").pause();
		} else {
			$("video").trigger("pause");
			$(this).removeClass('play');
			$(this).addClass('pause');
			document.getElementById("music").play();
		}
	})

	

})

