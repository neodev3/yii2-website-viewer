// JavaScript Document
$(document).ready(function(e) {
	$('.preview_container .top_nav li').click(function(e) {
		$('.preview_container .top_nav li').not(this).removeClass('active');
		$(this).addClass('active');
    });
	$('.preview_container .top_nav li.desktop').click(function(e){
		$('.preview_container .boxes').addClass("desktop");
		$('.preview_container .boxes').removeClass("tablet_portrait");
		$('.preview_container .boxes').removeClass("tablet_landscape");
		$('.preview_container .boxes').removeClass("mobile_portrait");
		$('.preview_container .boxes').removeClass("mobile_landscape");
	});
	$('.preview_container .top_nav li.tablet_portrait').click(function(e){
		$('.preview_container .boxes').addClass("tablet_portrait");
		$('.preview_container .boxes').removeClass("desktop");
		$('.preview_container .boxes').removeClass("tablet_landscape");
		$('.preview_container .boxes').removeClass("mobile_portrait");
		$('.preview_container .boxes').removeClass("mobile_landscape");
	});
	$('.preview_container .top_nav li.tablet_landscape').click(function(e){
		$('.preview_container .boxes').addClass("tablet_landscape");
		$('.preview_container .boxes').removeClass("tablet_portrait");
		$('.preview_container .boxes').removeClass("desktop");
		$('.preview_container .boxes').removeClass("mobile_portrait");
		$('.preview_container .boxes').removeClass("mobile_landscape");
	});
	$('.preview_container .top_nav li.mobile_portrait').click(function(e){
		$('.preview_container .boxes').addClass("mobile_portrait");
		$('.preview_container .boxes').removeClass("tablet_portrait");
		$('.preview_container .boxes').removeClass("tablet_landscape");
		$('.preview_container .boxes').removeClass("desktop");
		$('.preview_container .boxes').removeClass("mobile_landscape");
	});
	$('.preview_container .top_nav li.mobile_landscape').click(function(e){
		$('.preview_container .boxes').addClass("mobile_landscape");
		$('.preview_container .boxes').removeClass("tablet_portrait");
		$('.preview_container .boxes').removeClass("tablet_landscape");
		$('.preview_container .boxes').removeClass("mobile_portrait");
		$('.preview_container .boxes').removeClass("desktop");
	});
});
