$(function(){
	function resized(){
		var ww=$(window).width();
		var wh=$(window).height();
		var rw=$('.row').width();
		var miw=$('.mainzone article:eq(0)').width();
		var smiw=$('.mainsmallzone article:eq(0)').width();
		var nnw=$('#notice').width();
		$('#menuandslidzone').height(rw*0.449);
		$('#bannerzone a').height(rw*0.15);
		$('.itemimg').height(miw*1.316);
		$('.itemimgsmall').height(smiw*1.4);
		$('#noticezone').height(rw*0.125);
		$('#fbox').height(rw*0.142);
		$('header').height(rw*0.1282);
		$('#ie_bad_bg').width(ww).height(wh);
		$('#ie_bad').css('top',(wh-300)/2+'px').css('left',(ww-400)/2+'px');
		if(768<=ww && ww<991){
			$('#menuandslidzone').height(rw*0.544);
			$('#noticezone').height(rw*0.161);
			$('#fbox').height(rw*0.219);
			$('header').height(200);
			$('#event1 a, #event2 a, #event3 a').height(rw*0.15);
			$('#mo_tab').css('display','none').css('margin-left','-100%');
			$('header, #content, footer').css('display','block');
			$('#tabletnav ul:last-of-type li:first-of-type, #tabletsubnav').hover(function(){
				$('#tabletsubnav').css('display','block');
				$('header').css('margin-bottom','10%');
			},function(){
				$('#tabletsubnav').css('display','none');
				$('header').css('margin-bottom','4%');
			});
		}else if(ww<768){
			$('#menuandslidzone').height(rw*0.544);
			$('#event1 a').height(rw*0.581);
			$('#event2 a').height(rw*0.49);
			$('#event3 a').height(rw*0.39);
			$('#sns').height(rw*0.113);
			$('#fbox').height(356);
			$('header').height(200);
			$('#tabletnav ul:last-of-type li:first-of-type, #tabletsubnav').hover(function(){
				$('#tabletsubnav').css('display','none');
				$('header').css('margin-bottom','4%');
			},function(){
				$('#tabletsubnav').css('display','none');
				$('header').css('margin-bottom','4%');
			});
			$('#tabletnav ul:last-of-type li:first-of-type').click(function(){
				$('#mo_tab').css('display','block').animate({marginLeft:0},function(){
					$('header, #content, footer').css('display','none');
				});
			});
			$('#mo_close').click(function(){
				$('header, #content, footer').css('display','block');
				$('#mo_tab').animate({marginLeft:-ww},function(){
					$(this).css('display','none');
				});
			});
		}else{
			$('#mo_tab').css('display','none').css('margin-left','-100%');
			$('header, #content, footer').css('display','block');
			$('#menuandslidzone').height(rw*0.449);
			$('#noticezone').height(rw*0.125);
			$('#event1 a, #event2 a, #event3 a').height(rw*0.15);
			$('#sns').height(rw*0.125);
			$('#fbox').height(rw*0.142);
			$('header').height(rw*0.1282);
			$('#tabletnav ul:last-of-type li:first-of-type, #tabletsubnav').hover(function(){
				$('#tabletsubnav').css('display','none');
				$('header').css('margin-bottom','4%');
			},function(){
				$('#tabletsubnav').css('display','none');
				$('header').css('margin-bottom','4%');
			});
			$('#tabletnav ul:last-of-type li:first-of-type').click(function(){
				$('#mo_tab').css('display','none');
			});
			$('#mo_close').click(function(){
				$('#mo_tab').css('display','none');
			});
		}
	}
	resized();
	$(window).resize(function(){
		resized();
	});
	function slide(){
		clearInterval(sa);
		var sw=0;
		function wow(){
			var www=$(window).width();
			var conw=$('.container').width();
			if(www<1025){
				sw=conw;
				return sw;
			}else{
				sw=conw*0.80417;
				return sw;
			}
		}
		$(window).resize(function(){
			wow();
		});
		window.addEventListener("orientationchange",function(){
			wow();
		},false);
		wow();
		var sap=0;
		var sa=setInterval(sanime,3000);
		function sanime(){
			if(sap == 0){
				$('#slide_control li').css('color','black');
				$('#slide_control li:eq(0)').css('color','#f3818f');
				$('.circle').css('background','#fff');
				$('.circle:eq(0)').css('background','#f23048');
				$('#slidewrap').animate({marginLeft:-sw*sap});
			}else if(sap == 1){
				$('#slide_control li').css('color','black');
				$('#slide_control li:eq(1)').css('color','#f3818f');
				$('.circle').css('background','#fff');
				$('.circle:eq(1)').css('background','#f23048');
				$('#slidewrap').animate({marginLeft:-sw*sap});
			}else if(sap == 2){
				$('#slide_control li').css('color','black');
				$('#slide_control li:eq(2)').css('color','#f3818f');
				$('.circle').css('background','#fff');
				$('.circle:eq(2)').css('background','#f23048');
				$('#slidewrap').animate({marginLeft:-sw*sap});
			}else if(sap == 3){
				$('#slide_control li').css('color','black');
				$('#slide_control li:eq(3)').css('color','#f3818f');
				$('.circle').css('background','#fff');
				$('.circle:eq(3)').css('background','#f23048');
				$('#slidewrap').animate({marginLeft:-sw*sap});
			}else if(sap == 4){
				$('#slide_control li').css('color','black');
				$('#slide_control li:eq(4)').css('color','#f3818f');
				$('.circle').css('background','#fff');
				$('.circle:eq(4)').css('background','#f23048');
				$('#slidewrap').animate({marginLeft:-sw*sap});
			}
			sap++;
			if(sap == 5){
				sap=0;
			}
			$('#slide_control li:eq(0),.circle:eq(0)').hover(function(){
				sap=0;
			});
			$('#slide_control li:eq(1),.circle:eq(1)').hover(function(){
				sap=1;
			});
			$('#slide_control li:eq(2),.circle:eq(2)').hover(function(){
				sap=2;
			});
			$('#slide_control li:eq(3),.circle:eq(3)').hover(function(){
				sap=3;
			});
			$('#slide_control li:eq(4),.circle:eq(4)').hover(function(){
				sap=4;
			});
		}
	}
	slide();
	$('#topsn li').hover(function(){
		$('#subnavbar, #bottomsn').css('display','block');
	});
	
	var bb=1;
	$('#circles').hover(function(){
		if(bb==1){
			$('#the_portfolio').animate({height:280},500);
			$('#the_sub').slideDown(500);
			bb=2;
		}
	});
	$('#circles').click(function(){
		$(this).animate({scale:0,opacity:0},{
			step:function(now,fx){
				$(this).css({
					'transform':'scale('+now+')',
					'-webkit-transform':'scale('+now+')','opacity':now
				});
			},duration:2000,complete:function(){
				$('#the_portfolio').css('display','none');
			}
		});
		$('#the_sub').slideUp(500);
		$('#the_portfolio').animate({height:180},500);
	});
	var wwh=$(window).height();
	$('#the_portfolio_mo h4').css('padding-top',wwh*0.45+'px');
	$('#the_portfolio_mo').click(function(){
		$(this).css('display','none');
	});

});