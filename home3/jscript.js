$(function(){
	function sized(){
		var resized=$(window).width();
		var resized3=$(window).height();
		var resized2=resized/100;
		var c=0;
		$('#ie_bad_bg').width(resized).height(resized3);
		$('#ie_bad').css('top',(resized3-300)/2+'px').css('left',(resized-400)/2+'px');
		if(767<resized && resized<1025){
			$('#slide').css('height',((resized-40)*260/984)+'px');
			$('.slide_con h5').css('font-size',0.8+'em');
			$('.slide_con p').css('font-size',0.9+'em');
			$('.slide_con h2').css('font-size',1.5+'em');
			$('.slide_con h5,.slide_con h2').css('margin-bottom',1+'%');
			$('.con').css('height',250+'px');
			$('#con3 .fa').css('padding-left',6+'%');
			$('#search_box input').css('width',640+'px');
			$('#wrapper').animate({marginLeft:'-100%'});
			$('.aff_nav_controls .fa-angle-up').click(function(){
				c++;
				if(c<12){
					$('.aff_nav_body ul').animate({marginTop:-20*c},250);
				}else{
					c=11;
				}
			});
			$('.aff_nav_controls .fa-angle-down').click(function(){
				c--;
				if(c>-1){
					$('.aff_nav_body ul').animate({marginTop:-20*c},250);
				}else{
					c=0;
				}
			});
		}else if(767>=resized){
			$('#slide').css('height',(resized*700/767)+'px');
			$('#cb1').css('margin-left',((resized-155)/2)+'px');
			$('.slide_con h5,.slide_con p').css('font-size',(Math.floor(resized2)/10+0.5)+'em');
			$('.slide_con h2').css('font-size',(Math.floor(resized2)/10+1)+'em');
			$('.slide_con h5,.slide_con h2').css('margin-bottom',(Math.floor(resized2))+'px');
			$('.con').css('height',(resized*650/767)+'px');
			$('#con3 .fa').css('padding-left',(Math.floor(resized2)-3)+'%');
			$('#search_box input').css('width',(resized-140)+'px');
		}else{
			$('#slide').css('height',260+'px');
			$('#cb1').css('margin-left',0+'px');
			$('.slide_con h5').css('font-size',0.8+'em');
			$('.slide_con p').css('font-size',1+'em');
			$('.slide_con h2').css('font-size',1.5+'em');
			$('.slide_con h5,.slide_con h2').css('margin-bottom',10+'px');
			$('.con').css('height',250+'px');
			$('#con3').css('height',200+'px');
			$('#con4').css('height',300+'px');
			$('#con3 .fa').css('padding-left',15+'px');
			$('#search_box input').css('width',690+'px');
			$('#wrapper').animate({marginLeft:'-100%'});
			$('.aff_nav_controls .fa-angle-up').click(function(){
				c++;
				if(c<9){
					$('.aff_nav_body ul').animate({marginTop:-20*c},250);
				}else{
					c=8;
				}
			});
			$('.aff_nav_controls .fa-angle-down').click(function(){
				c--;
				if(c>-1){
					$('.aff_nav_body ul').animate({marginTop:-20*c},250);
				}else{
					c=0;
				}
			});
		}
	}
	sized();
	$(window).resize(function(){
		sized();
	});
	$('#main_nav a:eq(0), #news_nav').hover(function(){
		$('#news_nav').stop().slideDown(500);
		$('#sc_nav, #pc_nav, #te_nav').stop().slideUp(100);
	},function(){
		$('#news_nav').stop().slideUp(100);
	});
	$('#main_nav a:eq(1), #sc_nav').hover(function(){
		$('#sc_nav').stop().slideDown(500);
		$('#news_nav, #pc_nav, #te_nav').stop().slideUp(100);
	},function(){
		$('#sc_nav').stop().slideUp(100);
	});
	$('#main_nav a:eq(2), #pc_nav').hover(function(){
		$('#pc_nav').stop().slideDown(500);
		$('#news_nav, #sc_nav, #te_nav').stop().slideUp(100);
	},function(){
		$('#pc_nav').stop().slideUp(100);
	});
	$('#main_nav a:eq(3), #te_nav').hover(function(){
		$('#te_nav').stop().slideDown(500);
		$('#news_nav, #sc_nav, #pc_nav').stop().slideUp(100);
	},function(){
		$('#te_nav').stop().slideUp(100);
	});
	$('#main_small_nav .fa-search, .tab_search').click(function(){
		$('#search_nav').slideDown(500);
	});
	$('#search_close').click(function(){
		$('#search_nav').slideUp(500);
	});
	$('.tab_ellipsis').click(function(){
		$('#main_small_nav').toggle();
	});
	$('.mo_search').click(function(){
		$('#search_nav').slideToggle(500);
	});
	$('.mo_manu').click(function(){
		$('#wrapper').animate({marginLeft:0});
	});
	$('#hide_nav_bar div, #hide_aff_nav_bar div').click(function(){
		$('#wrapper').animate({marginLeft:'-100%'});
	});
	$('#aff_nav_mo i').click(function(){
		$('#wrapper').animate({marginLeft:'-200%'});
		document.body.scrollTop=0;
	});
	$('#aff_nav_close .aff_nav_footer').click(function(){
		$('#aff_nav_close').css('display','none');
		$('#aff_nav_open').css('display','block');
		$('#affiliate').slideDown(500);
	});
	$('#aff_nav_open .aff_nav_footer').click(function(){
		$('#aff_nav_open').css('display','none');
		$('#aff_nav_close').css('display','block');
		$('#affiliate').slideUp(500);
	});
	function slide(){
		clearInterval(sa);
		var sw=0;
		function wow(){
			var www=$(window).width();
			if(767<www && www<1025){
				sw=www-40;
				return sw;
			}else if(767>=www){
				sw=www;
				return sw;
			}else{
				sw=960;
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
		var sa=setInterval(sanime,2000);
		function sanime(){
			if(sap == 0){
				$('.ctr_btn').not('#cb1').css({
					width:'15px',
					background:'#438683',
				});
				$('#cb1').css({
					width:'35px',
					background:'#63C7C2',
					left:'50px'
				});
				$('#cb2').css('left','125px');
				$('#cb3').css('left','180px');
				$('#cb4').css('left','235px');
				$('#cb5').css('left','290px');
				$('#slide_warp').animate({marginLeft:-sw*sap});
			}else if(sap == 1){
				$('.ctr_btn').not('#cb2').css({
					width:'15px',
					background:'#438683',
				});
				$('#cb1').css('left','50px');
				$('#cb2').css({
					width:'35px',
					background:'#63C7C2',
					left:'105px'
				});
				$('#cb3').css('left','180px');
				$('#cb4').css('left','235px');
				$('#cb5').css('left','290px');
				$('#slide_warp').animate({marginLeft:-sw*sap});
			}else if(sap == 2){
				$('.ctr_btn').not('#cb3').css({
					width:'15px',
					background:'#438683',
				});
				$('#cb1').css('left','50px');
				$('#cb2').css('left','105px');
				$('#cb3').css({
					width:'35px',
					background:'#63C7C2',
					left:'160px'
				});
				$('#cb4').css('left','235px');
				$('#cb5').css('left','290px');
				$('#slide_warp').animate({marginLeft:-sw*sap});
			}else if(sap == 3){
				$('.ctr_btn').not('#cb4').css({
					width:'15px',
					background:'#438683',
				});
				$('#cb1').css('left','50px');
				$('#cb2').css('left','105px');
				$('#cb3').css('left','160px');
				$('#cb4').css({
					width:'35px',
					background:'#63C7C2',
					left:'215px'
				});
				$('#cb5').css('left','290px');
				$('#slide_warp').animate({marginLeft:-sw*sap});
			}else if(sap == 4){
				$('.ctr_btn').not('#cb5').css({
					width:'15px',
					background:'#438683',
				});
				$('#cb1').css('left','50px');
				$('#cb2').css('left','105px');
				$('#cb3').css('left','160px');
				$('#cb4').css('left','215px');
				$('#cb5').css({
					width:'35px',
					background:'#63C7C2',
					left:'270px'
				});
				$('#slide_warp').animate({marginLeft:-sw*sap});
			}
			sap++;
			if(sap == 5){
				sap=0;
			}
		}
		$('#ctr_play_btn').click(function(){
			slide();
			$(this).css('color','#63C7C2');
			$('#ctr_pause_btn').css('color','#438683');
		});
		$('#ctr_pause_btn').click(function(){
			clearInterval(sa);
			$(this).css('color','#63C7C2');
			$('#ctr_play_btn').css('color','#438683');
		});
		var a=0;
		$('#cbt2').click(function(){
			a++;
			if(a==1){
				clearInterval(sa);
				$('#cbt2 i').removeClass('fa-pause').addClass('fa-play');
			}else if(a==2){
				slide();
				$('#cbt2 i').removeClass('fa-play').addClass('fa-pause');
				a=0;
			}
		});
		$('#cbt1').click(function(){
			clearInterval(sa);
			$('#cbt2 i').removeClass('fa-pause').addClass('fa-play');
			sap--;
			if(sap==-1){sap=0;}
			$('#slide_warp').animate({marginLeft:-sw*sap});
		});
		$('#cbt3').click(function(){
			clearInterval(sa);
			$('#cbt2 i').removeClass('fa-pause').addClass('fa-play');
			sap++;
			if(sap==5){sap=4;}
			$('#slide_warp').animate({marginLeft:-sw*sap});
		});
		$('#cb1').hover(function(){
			clearInterval(sa);
			$('#ctr_pause_btn').css('color','#63C7C2');
			$('#ctr_play_btn').css('color','#438683');
			sap=0;
			sanime();
		});
		$('#cb2').hover(function(){
			clearInterval(sa);
			$('#ctr_pause_btn').css('color','#63C7C2');
			$('#ctr_play_btn').css('color','#438683');
			sap=1;
			sanime();
		});
		$('#cb3').hover(function(){
			clearInterval(sa);
			$('#ctr_pause_btn').css('color','#63C7C2');
			$('#ctr_play_btn').css('color','#438683');
			sap=2;
			sanime();
		});
		$('#cb4').hover(function(){
			clearInterval(sa);
			$('#ctr_pause_btn').css('color','#63C7C2');
			$('#ctr_play_btn').css('color','#438683');
			sap=3;
			sanime();
		});
		$('#cb5').hover(function(){
			clearInterval(sa);
			$('#ctr_pause_btn').css('color','#63C7C2');
			$('#ctr_play_btn').css('color','#438683');
			sap=4;
			sanime();
		});
	}
	slide();
});