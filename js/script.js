var ww = $(window).width();
$(function(){
	//手机端点击菜单
	$('header .mbtn').click(function(event) {
		$('body').toggleClass('on-menu');
		return false;
	});
	
	//首页 banner 锚点
	$(".index-banner .scroll_a").click(function(){
		if(ww<768){
			var top = ($(".index-div1").offset().top) - 50;
			$("html, body").animate({scrollTop: top }, {duration: 500,easing: "swing"});
	        return false;
		}else{
			var top = ($(".index-div1").offset().top) - 100; 
			$("html, body").animate({scrollTop: top }, {duration: 500,easing: "swing"});
	        return false;
		}
	})
	
});
