$(function(){
	$('.tab_head ul li').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $('.tab_head ul li').index($(this));
		$('.tab_content ul li.tab_content_li').eq(index).show().siblings().hide();
	});
	$('.tab_head ul li:nth-child(1)').click(function(){
		$("#bar").animate({
	        left: '0%'
	    }, 250);
	})
	$('.tab_head ul li:nth-child(2)').click(function(){
		$("#bar").animate({
	        left: '25%'
	    }, 250);
	})
	$('.tab_head ul li:nth-child(3)').click(function(){
		$("#bar").animate({
	        left: '50%'
	    }, 250);
	})
	$('.tab_head ul li:nth-child(4)').click(function(){
		$("#bar").animate({
	        left: '75%'
	    }, 250);
	})
})
