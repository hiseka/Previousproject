$(function(){
	$('#top_nav a').click(function(){
		$('#sub_nav').slideDown(150);
	});
	$('#top_nav a:eq(0)').click(function(){
		$('.sub_cols:eq(0)').addClass('selete_cols');
		$('.sub_cols:eq(1), .sub_cols:eq(2), .sub_cols:eq(3)').removeClass('selete_cols');
	});
	$('#top_nav a:eq(1)').click(function(){
		$('.sub_cols:eq(0), .sub_cols:eq(2), .sub_cols:eq(3)').removeClass('selete_cols');
		$('.sub_cols:eq(1)').addClass('selete_cols');
	});
	$('#top_nav a:eq(2)').click(function(){
		$('.sub_cols:eq(0), .sub_cols:eq(1), .sub_cols:eq(3)').removeClass('selete_cols');
		$('.sub_cols:eq(2)').addClass('selete_cols');
	});
	$('#top_nav a:eq(3)').click(function(){
		$('.sub_cols:eq(0), .sub_cols:eq(1), .sub_cols:eq(2)').removeClass('selete_cols');
		$('.sub_cols:eq(3)').addClass('selete_cols');
	});
	$('#sub_nav').hover(function(){
		$('#sub_nav').slideDown(150);
	},function(){
		$('#sub_nav').slideUp(150);
		$('.sub_cols').removeClass('selete_cols');
	});
	$('#m_img a:eq(0) img').attr('src','./image/sildem_d.png');
	$('#m_img a:eq(0)').click(function(){
		$('#main_silde').animate({marginLeft:"0"});
		$('#m_img a:eq(0) img').attr('src','./image/sildem_d.png');
		$('#m_img a:eq(1) img').attr('src','./image/sildem3.png');
		$('#m_img a:eq(2) img').attr('src','./image/sildem2.png');
		$('#m_img a:eq(3) img').attr('src','./image/sildem1.png');
	});
	$('#m_img a:eq(1)').click(function(){
		$('#main_silde').animate({marginLeft:"-100%"});
		$('#m_img a:eq(0) img').attr('src','./image/sildem.png');
		$('#m_img a:eq(1) img').attr('src','./image/sildem3_d.png');
		$('#m_img a:eq(2) img').attr('src','./image/sildem2.png');
		$('#m_img a:eq(3) img').attr('src','./image/sildem1.png');
	});
	$('#m_img a:eq(2)').click(function(){
		$('#main_silde').animate({marginLeft:"-200%"});
		$('#m_img a:eq(0) img').attr('src','./image/sildem.png');
		$('#m_img a:eq(1) img').attr('src','./image/sildem3.png');
		$('#m_img a:eq(2) img').attr('src','./image/sildem2_d.png');
		$('#m_img a:eq(3) img').attr('src','./image/sildem1.png');
	});
	$('#m_img a:eq(3)').click(function(){
		$('#main_silde').animate({marginLeft:"-300%"});
		$('#m_img a:eq(0) img').attr('src','./image/sildem.png');
		$('#m_img a:eq(1) img').attr('src','./image/sildem3.png');
		$('#m_img a:eq(2) img').attr('src','./image/sildem2.png');
		$('#m_img a:eq(3) img').attr('src','./image/sildem1_d.png');
	});
	var z=$(window).width();
	$('#phone_nav').click(function(){
		$('#phone_nav_page').css('margin-left',z).css('display','block').animate({marginLeft:0});
	});
	$('#phone_nav_cancle').click(function(){
		$('#phone_nav_page').animate({marginLeft:z},function(){$('#phone_nav_page').css('display','none');});
	});
	function resized(){
		var z=$(window).width();
		var x=$(window).height();
		$('#ie_bad_bg').width(z).height(x);
		$('#ie_bad').css('top',(x-300)/2+'px').css('left',(z-400)/2+'px');
		if(z >= 768){
			$('#phone_nav_page').css('display','none');
		}
		if(z < 1025){
			$('.more_btn i').css('display','none');
		}else{
			$('.more_btn i').css('display','inline');
		}
	}
	resized();
	$(window).resize(function(){
		resized();
	});
});