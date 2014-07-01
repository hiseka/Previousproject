$(function(){
	function resized(){
		var ww=$(window).width();
		var wh=$(window).height();
		$('#content').height(wh-100);
		var cw=0;
		function cwww(){
			cw=$('#content').width();
			return cw;
		}
		$(window).resize(function(){
			cwww();
		});
		cwww();
		$('.box:eq(0)').on('swipeleft',function(e){
			$('#slide_box').animate({'marginLeft':-cw});
		});
		$('.box:eq(1)').on('swipeleft',function(e){
			$('#slide_box').animate({'marginLeft':-cw*2});
		}).on('swiperight',function(e){
			$('#slide_box').animate({'marginLeft':-cw*0});
		});
		$('.box:eq(2)').on('swipeleft',function(e){
			$('#slide_box').animate({'marginLeft':-cw*3});
		}).on('swiperight',function(e){
			$('#slide_box').animate({'marginLeft':-cw*1});
		});
		$('.box:eq(3)').on('swiperight',function(e){
			$('#slide_box').animate({'marginLeft':-cw*2});
		});
	}
	$(window).resize(function(){
		$('#slide_box').animate({'marginLeft':0});
		resized();
	});
	window.addEventListener("orientationchange", function() {
		$('#slide_box').animate({'marginLeft':0});
		resized();
	}, false);
	resized();
	$('#cover').on('swipeleft',function(e){
		$(this).css('display','none');
	}).on('swiperight',function(e){
		$(this).css('display','none');
	});
});