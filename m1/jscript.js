$(function(){
	$('#joinbefore input').change(function(){
		var a=$('#agreement').prop('checked');
		var b=$('#agreement2').prop('checked');
		var c=$('#agreement3').prop('checked');
		if(a==b&&b===c){
			$('.ui-block-a a').attr('href','#join').removeAttr('data-rel');
			$('.ui-block-b a').attr('href','#join2').removeAttr('data-rel');
			$('.ui-block-c a').attr('href','#join3').removeAttr('data-rel');
		}else{
			$('.ui-block-a a,.ui-block-b a,.ui-block-c a').attr('href','#errorchecked').attr('data-rel','dialog');
		}
	});
	var wwh=$(window).height();
	$('#the_portfolio_mo h4').css('padding-top',wwh*0.45+'px');
	$('#the_portfolio_mo').click(function(){
		$(this).css('display','none');
	});
});