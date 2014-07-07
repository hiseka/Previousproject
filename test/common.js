function resized(){
	var ww=$(window).width();
	if(1140 >= ww && ww > 1024){
		$('.Cons').width(1025);
		$('#mainnav').width(945);
	}else if(1024 >= ww && ww > 768){
		$('.Cons').width(767);
		$('#mainnav').width(687);
	}else if(768 >= ww){
		$('.Cons').width(ww);
		$('#header').height(250);
		$('#mainnav').width(ww-80);
		$('.logospace').width(100+'%').height(50+'%');
		$('#logo').css({padding:'22.5px 0px',margin:'0 auto'});
	}else{
		$('.Cons').width(1140);
		$('#header').height(120);
		$('#mainnav').width(1060);
		$('.logospace').width(80).height(100+'%');
		$('#logo').css({padding:'20px 0px'});
	}
}
$(window).resize(function(){
	resized();
});
resized();

$('.accessibilityBox > li:first-child > a').focusin(function(){
	$('.accessibility').animate({top:0});
});
$('.accessibilityBox > li:last-child > a').focusout(function(){
	$('.accessibility').animate({top:-34});
});