/**
 * Created by DQ on 2017/7/25.
 */
// $(document).ready(function(e) {
//     // $("video").trigger("play");//for auto play
// 	$("video").addClass('pause');//for check pause or play add a class
// 	$('video').click(function() {
// 		if ($(this).hasClass('pause')) {
// 			$("video").trigger("play");
// 			$(this).removeClass('pause');
// 			$(this).addClass('play');
// 			document.getElementById("music").pause();
// 		} else {
// 			$("video").trigger("pause");
// 			$(this).removeClass('play');
// 			$(this).addClass('pause');
// 			document.getElementById("music").play();
// 		}
// 	});

// 	// var video = document.getElementById('video');
// 	// video.addEventListener('ended', function(){

// 	// 	document.getElementById("music").play();
// 	// });
// 	// video.onwaiting = function(){   
		
// 	// };
// })
		var videoPlayer = videojs('video');
        videojs("video").ready(function(){
             var myPlayer = this;
            myPlayer.on("play", function(){
               document.getElementById("music").pause();
            });
            myPlayer.on("ended", function(){
               document.getElementById("music").play();
            });
            myPlayer.on("pause", function(){
                document.getElementById("music").play();
            });
        });
        
        console.time("timer");
        for (var i = 0; i < 1000; i++) {
          for (var j = 0; j<1000; j++) {}
        }
        console.timeEnd("timer");
	