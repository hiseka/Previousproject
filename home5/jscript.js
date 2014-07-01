$(function(){
	$('#mainmenu li').hover(function(){
		$('#submenu').slideDown(800);
	});
	
	$('#close').click(function(){
		$('#submenu').slideUp(800);
	});
	
	$('#normalclose').click(function(){
		$('#popup').css('display','none');
	});
	
	function ie_bad(){
		var ww=$(window).width();
		var wh=$(window).height();
		$('#ie_bad_bg').width(ww).height(wh);
		$('#ie_bad').css('top',(wh-300)/2+'px').css('left',(ww-400)/2+'px');
	}
	ie_bad();
	$(window).resize(function(){
		ie_bad();
	});
	
	//Cookie.js start
	function setCookie(name, value, expiredays) { 
		var todayDate = new Date(); 
		todayDate.setDate(todayDate.getDate() + expiredays); 
		document.cookie = name + "=" + encodeURI(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
	}
	
	function getCookie(name) { 
		var nameOfCookie = name + "="; 
		var x = 0; 
		while ( x <= document.cookie.length ) { 
			var y = (x+nameOfCookie.length); 
			if (document.cookie.substring(x, y) == nameOfCookie) { 
				if ((endOfCookie = document.cookie.indexOf(";", y)) == -1) endOfCookie = document.cookie.length; 
				return decodeURI(document.cookie.substring(y, endOfCookie)); 
			} 
			x = document.cookie.indexOf(" ", x) + 1; 
			if (x == 0) break; 
		}
		return "";
	}
	//Cookie.js Done
	
	function PopUpClose(){
		if(document.frm.closechb.checked)setCookie("popsmoothie","done",1);
		else setCookie("popsmoothie","",1);
		document.getElementById("popup").style.visibility = "hidden";
	}
	
	$('#closechb').click(function(){
		PopUpClose();
	});
	
	var bb=1;
	$('#circles').hover(function(){
		if(bb==1){
			$('#the_portfolio').animate({height:250},500);
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
		$('#the_portfolio').animate({height:175},500);
	});
});




