
var angleStart = -360;

// jquery rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}

// show / hide the options
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}

$('.selector button').click(function(e) {
	$(this).parent(".selector").siblings(".selector").removeClass("open");
	var $s = $(this).parent(".selector").siblings(".selector");
    var li = $s.find('li');
    var deg = $s.hasClass('half') ? 180/(li.length-1) : 360/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $s.hasClass('half') ? (i*deg)-90 : i*deg;
        $s.hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
	
	$(this).parent(".selector").siblings(".selector").find("button").find("img").attr("src","img/zuobiao.png");
	$(this).parent(".selector").find("button").find("img").attr("src","img/zuobiao_hover.png");
	
    toggleOptions($(this).parent());
    
	if($(this).parent(".selector").hasClass("open")){
		$(this).find("img").attr("src","img/zuobiao_hover.png");
	}else{
		$(this).find("img").attr("src","img/zuobiao.png");
	}
});


//setTimeout(function() { toggleOptions('.selector'); }, 100);