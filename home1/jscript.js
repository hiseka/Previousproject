$(function(){
	var a=0;
	$('h1 a').click(function(){
		$('#about, #birthstone, #fashion, #wedding, #couples, #gallery, #event').fadeOut('fast');
		$('#home').slideDown('slow');
	});
	$('#main_nav a:eq(0)').click(function(){
		$('#about').slideDown('slow');
		$('#home, #birthstone, #fashion, #wedding, #couples, #gallery, #event').fadeOut('fast');
	});
	$('#main_nav a:eq(2)').click(function(){
		$('#about, #home, #birthstone, #fashion, #wedding, #couples, #event').fadeOut('fast');
		$('#gallery').slideDown('slow');
	});
	$('#main_nav a:eq(3), #e1').click(function(){
		$('#about, #home, #birthstone, #fashion, #wedding, #couples, #gallery').fadeOut('fast');
		$('#event').slideDown('slow');
	});
	$('#sub_nav a:eq(0)').click(function(){
		$('#about, #home, #fashion, #wedding, #couples, #gallery, #event').fadeOut('fast');
		$('#birthstone').slideDown('slow');
	});
	$('#sub_nav a:eq(1)').click(function(){
		$('#about, #home, #birthstone, #wedding, #couples, #gallery, #event').fadeOut('fast');
		$('#fashion').slideDown('slow');
	});
	$('#sub_nav a:eq(2)').click(function(){
		$('#about, #home, #birthstone, #fashion, #couples, #gallery, #event').fadeOut('fast');
		$('#wedding').slideDown('slow');
	});
	$('#sub_nav a:eq(3)').click(function(){
		$('#about, #home, #birthstone, #fashion, #wedding, #gallery, #event').fadeOut('fast');
		$('#couples').slideDown('slow');
	});
	$('#s2_1 a').click(function(){
		$('#about, #home, #fashion, #wedding, #couples, #gallery, #event').fadeOut('fast');
		$('#birthstone').slideDown('slow');
	});
	$('#s2_2 a').click(function(){
		$('#about, #home, #birthstone, #wedding, #couples, #gallery, #event').fadeOut('fast');
		$('#fashion').slideDown('slow');
	});
	$('#s2_3 a').click(function(){
		$('#about, #home, #birthstone, #fashion, #couples, #gallery, #event').fadeOut('fast');
		$('#wedding').slideDown('slow');
	});
	$('#s2_4 a').click(function(){
		$('#about, #home, #birthstone, #fashion, #wedding, #gallery, #event').fadeOut('fast');
		$('#couples').slideDown('slow');
	});
	$('#main_nav a:eq(1), #sub_nav').hover(function(){
		$('#sub_nav').stop().slideDown(500);
	},function(){
		$('#sub_nav').stop().slideUp(100);
	});
	$('#s1_control .fa-angle-right').click(function(){
		a++;
		if(a == 1){
			$('#slide1').animate({marginLeft:"-560px"});
			$('.p1').css('display','none');
			$('.p2').css('display','block');
		}if(a == 2){
			$('#slide1').animate({marginLeft:"-1120px"});
			$('.p2').css('display','none');
			$('.p3').css('display','block');
		}if(a == 3){
			$('#slide1').animate({marginLeft:"-1680px"});
			$('.p3').css('display','none');
			$('.p4').css('display','block');
		}if(a > 3){
			a=3;
		}
	});
	$('#s1_control .fa-angle-left').click(function(){
		a--;
		if(a == 2){
			$('#slide1').animate({marginLeft:"-1120px"});
			$('.p4').css('display','none');
			$('.p3').css('display','block');
		}if(a == 1){
			$('#slide1').animate({marginLeft:"-560px"});
			$('.p3').css('display','none');
			$('.p2').css('display','block');
		}if(a == 0){
			$('#slide1').animate({marginLeft:0});
			$('.p2').css('display','none');
			$('.p1').css('display','block');
		}if(a < 0){
			a=0;
		}
	});
	$('#s2_control div:eq(0)').hover(function(){
		$('#slide2').animate({marginLeft:0},'fast');
		$('.control_circle:eq(0)').css('background','#ffbbff').css('width','25px');
		$('.control_circle:eq(1),.control_circle:eq(2),.control_circle:eq(3)').css('background','#bbbbbb').css('width','15px');
	});
	$('#s2_control div:eq(1)').hover(function(){
		$('#slide2').animate({marginLeft:"-560px"},'fast');
		$('.control_circle:eq(0),.control_circle:eq(2),.control_circle:eq(3)').css('background','#bbbbbb').css('width','15px');
		$('.control_circle:eq(1)').css('background','#ffbbff').css('width','25px');
	});
	$('#s2_control div:eq(2)').hover(function(){
		$('#slide2').animate({marginLeft:"-1120px"},'fast');
		$('.control_circle:eq(0),.control_circle:eq(1),.control_circle:eq(3)').css('background','#bbbbbb').css('width','15px');
		$('.control_circle:eq(2)').css('background','#ffbbff').css('width','25px');
	});
	$('#s2_control div:eq(3)').hover(function(){
		$('#slide2').animate({marginLeft:"-1680px"},'fast');
		$('.control_circle:eq(0),.control_circle:eq(1),.control_circle:eq(2)').css('background','#bbbbbb').css('width','15px');
		$('.control_circle:eq(3)').css('background','#ffbbff').css('width','25px');
	});
	$('#j1').hover(function(){
		$('#j1 .jn_2').css('display','block');
	},function(){
		$('#j1 .jn_2').css('display','none');
	});
	$('#j2').hover(function(){
		$('#j2 .jn_2').css('display','block');
	},function(){
		$('#j2 .jn_2').css('display','none');
	});
	$('#j3').hover(function(){
		$('#j3 .jn_2').css('display','block');
	},function(){
		$('#j3 .jn_2').css('display','none');
	});
	$('#j4').hover(function(){
		$('#j4 .jn_2').css('display','block');
	},function(){
		$('#j4 .jn_2').css('display','none');
	});
	$('#j5').hover(function(){
		$('#j5 .jn_2').css('display','block');
	},function(){
		$('#j5 .jn_2').css('display','none');
	});
	$('#j6').hover(function(){
		$('#j6 .jn_2').css('display','block');
	},function(){
		$('#j6 .jn_2').css('display','none');
	});
	$('#j7').hover(function(){
		$('#j7 .jn_2').css('display','block');
	},function(){
		$('#j7 .jn_2').css('display','none');
	});
	$('#e1').hover(function(){
		$('#e1 .jn_2').css('display','block');
	},function(){
		$('#e1 .jn_2').css('display','none');
	});
	$('#m1').hover(function(){
		$('#m1 .jn_2').css('display','block');
	},function(){
		$('#m1 .jn_2').css('display','none');
	});
	$('#m2').hover(function(){
		$('#m2 .jn_2').css('display','block');
	},function(){
		$('#m2 .jn_2').css('display','none');
	});
	$('#gi1').hover(function(){
		$('#gi1 .gin_2').css('display','block');
	},function(){
		$('#gi1 .gin_2').css('display','none');
	});
	$('#gi2').hover(function(){
		$('#gi2 .gin_2').css('display','block');
	},function(){
		$('#gi2 .gin_2').css('display','none');
	});
	$('#gi3').hover(function(){
		$('#gi3 .gin_2').css('display','block');
	},function(){
		$('#gi3 .gin_2').css('display','none');
	});
	$('#gi4').hover(function(){
		$('#gi4 .gin_2').css('display','block');
	},function(){
		$('#gi4 .gin_2').css('display','none');
	});
	$('#gi5').hover(function(){
		$('#gi5 .gin_2').css('display','block');
	},function(){
		$('#gi5 .gin_2').css('display','none');
	});
	$('#gi6').hover(function(){
		$('#gi6 .gin_2').css('display','block');
	},function(){
		$('#gi6 .gin_2').css('display','none');
	});
	$('#gi7').hover(function(){
		$('#gi7 .gin_2').css('display','block');
	},function(){
		$('#gi7 .gin_2').css('display','none');
	});
	$('#gi8').hover(function(){
		$('#gi8 .gin_2').css('display','block');
	},function(){
		$('#gi8 .gin_2').css('display','none');
	});
	$('#gi9').hover(function(){
		$('#gi9 .gin_2').css('display','block');
	},function(){
		$('#gi9 .gin_2').css('display','none');
	});
	$('#pli1').hover(function(){
		$('#pli1 .pin_1').css('display','none');
		$('#pli1 .gin_2').css('display','block').css('color','white');
		$('#pli1').css('background-color','rgba(0,0,0,0.5)');
	},function(){
		$('#pli1 .pin_1').css('display','block');
		$('#pli1 .gin_2').css('display','none');
		$('#pli1').css('background-color','none');
	});
	$('#pli2').hover(function(){
		$('#pli2 .pin_1').css('display','none');
		$('#pli2 .gin_2').css('display','block').css('color','white');
		$('#pli2').css('background-color','rgba(0,0,0,0.5)');
	},function(){
		$('#pli2 .pin_1').css('display','block');
		$('#pli2 .gin_2').css('display','none');
		$('#pli2').css('background-color','none');
	});
	$('#pli3').hover(function(){
		$('#pli3 .pin_1').css('display','none');
		$('#pli3 .gin_2').css('display','block').css('color','white');
		$('#pli3').css('background-color','rgba(0,0,0,0.5)');
	},function(){
		$('#pli3 .pin_1').css('display','block');
		$('#pli3 .gin_2').css('display','none');
		$('#pli3').css('background-color','none');
	});
	function resized(){
		var ww=$(window).width();
		var wh=$(window).height();
		$('#ie_bad_bg').width(ww).height(wh);
		$('#ie_bad').css('top',(wh-300)/2+'px').css('left',(ww-400)/2+'px');
	}
	resized();
	$(window).resize(function(){
		resized();
	});
});