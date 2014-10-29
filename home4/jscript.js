$(function(){
	function size(){
		var a=$(window).height();
		var b=$(window).width();
		$('main > section:eq(0),main > section:eq(4),#s6bcg1').height(a);
		$('main > section:eq(1),main > section:eq(3)').height(a-100);
		$('main > section:eq(2)').height(2*a);
		$('main > section:eq(5)').height((2*a)-150);
		$('#s6bcg2').height(a-150);
		$('#ie_bad_bg').width(b).height(a);
		$('#ie_bad').css('top',(a-300)/2+'px').css('left',(b-400)/2+'px');
	}
	size();
	$(window).resize(function(){
		size();
	});
	$('h1 a').hover(function(){
		$('header p').stop().slideDown(600);
	},function(){
		$('header p').stop().slideUp(600);
	});
	var s = skrollr.init({
		edgeStrategy: 'set',
		easing: {
			WTF: Math.random,
			inverted: function(p) {
				return 1-p;
			}
		}
	});
});