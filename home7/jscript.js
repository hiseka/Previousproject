$(window).resize(resized);
function resized(){
	var ww=$(window).width();
	var wh=$(window).height();
	var n=0;
	var wrh=$('#wrapper').height();
	var ash=$('#aside').height();
	$('#wrapper').css('width',ww-260+'px');
	$('#aside').hover(function(){
		$('#wrapper').stop().animate({width:ww-500},300);
		$(this).stop().animate({marginLeft:0},300);
	},function(){
		$('#wrapper').stop().animate({width:ww-260},300);
		$('#aside').stop().animate({marginLeft:-240},300);
	});
	if(wrh<ash){
		n=ash;
		$('#aside, #header, #wrapper').height(n);
	}else{
		n=wrh;
		$('#aside, #header, #wrapper').height(n);
	}
}
resized();
$('.box').hover(function(){
	$(this).children('h3').animate({top:0});
	$(this).children('.fb').animate({bottom:0});
},function(){
	$(this).children('h3').animate({top:-28});
	$(this).children('.fb').animate({bottom:-28});
});
var $content = $('#content');
$content.masonry({
  columnWidth:190,
  itemSelector:'.box'
});