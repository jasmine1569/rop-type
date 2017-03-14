(function($){
// 	var videoURL="";
// // Get the modal
// 	var modal = document.getElementById("modal");

// 	// Get the button that opens the modal
// 	var img = document.getElementById("logo");

// 	// Get the <span> element that closes the modal
// 	var span = document.getElementsByClassName("close")[0];

// 	// When the user clicks on the button, open the modal
// 	img.onclick = function() {
// 	    modal.style.display = "block";
// 	    videoURL= $('#video')[0].src;
// 	    $("#video")[0].src += "&autoplay=1";
// 	}

// 	// When the user clicks on <span> (x), close the modal
// 	span.onclick = function() {
// 	    modal.style.display = "none";
// 	    $('#video').attr("src",videoURL);
// 	}

// 	// When the user clicks anywhere outside of the modal, close it
// 	window.onclick = function(event) {
// 	    if (event.target == modal) {
// 	        modal.style.display = "none";
// 	    }
// 	}
// // $( "#logo" ).click(function);
  // var youtubeFunc ='';
  //   var outerDiv = document.getElementById("modal");
  //   var youtubeIframe = outerDiv.getElementsByTagName("iframe")[0].contentWindow;
  //   $('#logo').on('hidden.bs.modal', function (e) {
  //   youtubeFunc = 'pauseVideo';
  //   youtubeIframe.postMessage('{"event":"command","func":"' + youtubeFunc + '","args":""}', '*');
  //   });
  //   $('#logo').on('shown.bs.modal', function (e) {
  //       youtubeFunc = 'playVideo';
  //     youtubeIframe.postMessage('{"event":"command","func":"' + youtubeFunc + '","args":""}', '*');
  //   });

  //   autoPlayYouTubeModal();

  // //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  // function autoPlayYouTubeModal() {
  //     var trigger = $("logo").find('[data-toggle="modal"]');
  //     trigger.click(function () {
  //         var theModal = $(this).data("target"),
  //             videoSRC = $(this).attr("data-theVideo"),
  //             videoSRCauto = videoSRC + "?autoplay=1";
  //         $(theModal + ' iframe').attr('src', videoSRCauto);
  //         $(theModal + ' button.close').click(function () {
  //             $(theModal + ' iframe').attr('src', videoSRC);
  //         });
  //     });
  // }
//   $("#modal").on("show", function () {
//   $("body").addClass("modal-open");
// }).on("hidden", function () {
//   $("body").removeClass("modal-open")
// });

// $('.logo').on('click', function(){
// 	$('#modal').show();
// }

// $('#mymodal').modal('show');

// $(document).on("click", '#clickForVideo', function() {
//   var src = '//www.youtube.com/embed/9qPgK_u4vX8?feature=player_embedded&autoplay=1';
//   $('#modal').modal('show');
//   $('#modal iframe').attr('src', src);
//   $(".copy").fitVids();
// });

// $('#modal').onclick(function(){
// 	document.body.style.overflow = "visible";
// });

// $("#play").click(function(){
//   $("#video")[0].src += "&autoplay=1";
//   $(this).unbind("click");//or some other way to make sure that this only happens once
//  });

// $(document).ready(function() {
//     $('#play').on('click', function(ev) {

//         $("#video")[0].src += "&autoplay=1";
//         ev.preventDefault();

//     });
// });

// $('#modal').modal().on('shown', function(){
//     $('body').css('overflow', 'hidden');
// }).on('hidden', function(){
//     $('body').css('overflow', 'auto');
// });

// Get the modal
	// var modal = document.getElementById('modal');

	// // Get the button that opens the modal
	// var img = document.getElementById("play");

	// // Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// // When the user clicks on the button, open the modal 
	// img.onclick = function() {
	//     modal.style.display = "block";
	//     videoURL= $('#video')[0].src;
	//     $("#video")[0].src += "&autoplay=1";
	// }

	// // When the user clicks on <span> (x), close the modal
	// span.onclick = function() {
	//     modal.style.display = "none";
	//     $('#video').attr("src",videoURL);
	// }

	// // When the user clicks anywhere outside of the modal, close it
	// window.onclick = function(event) {
	//     if (event.target == modal) {
	//         modal.style.display = "none";
	//     }
	// }


})(jQuery);