function resized(){
	var ww=$(window).width();
	if(1140 >= ww && ww > 1024){
		$('.Cons').width(1025);
		$('#header').height(120);
		$('.mainnav').width(945).height(100+'%');
	}else if(1024 >= ww && ww > 768){
		$('.Cons').width(767);
		$('#header').height(120);
		$('.mainnav').width(687).height(100+'%');
	}else if(768 >= ww){
		$('.Cons').width(100+'%');
		$('#header').height(250);
		$('.mainnav').width(100+'%').height(50+'%');
	}else{
		$('.Cons').width(1140);
		$('#header').height(120);
		$('.mainnav').width(1060).height(100+'%');
	}
	
	if(768 >= ww){
		$('.headerCon > div:eq(1)').addClass('logospaceM').removeClass('logospace');
		$('h1').addClass('logoM').removeClass('logo');
		$('.mainnav > ul').addClass('mainnavConM').removeClass('mainnavCon');
	}else{
		$('.headerCon > div:eq(1)').addClass('logospace').removeClass('logospaceM');
		$('h1').addClass('logo').removeClass('logoM');
		$('.mainnav > ul').addClass('mainnavCon').removeClass('mainnavConM');
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