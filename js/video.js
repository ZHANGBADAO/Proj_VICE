//鼠标滑过导航栏 出现二级导航
var timer_down;
var timer_up;
$("nav .nav>li").hover(
	function(){
		var that=this;
		clearTimeout(timer_up);
		timer_down=setTimeout(
			function(){
				$(that).children(".shiShang_group").slideDown();
			},200);
		
	},
	function(){
		var that=this;
		clearTimeout(timer_down);
		timer_up=setTimeout(
			function(){
				$(that).children(".shiShang_group").slideUp();
			},200);
		
	}
);

//二级菜单 鼠标滑过 图片显示隐藏
$("nav .nav>li:nth-child(1) .shiShang_group ul li:nth-child(1)").mouseover(function(){
	$("nav .nav>li:nth-child(1) .pics_1").css({display:"block"});
	$("nav .nav>li:nth-child(1) .pics_2").css({display:"none"});
	$("nav .nav>li:nth-child(1) .pics_3").css({display:"none"});
});

$("nav .nav>li:nth-child(1) .shiShang_group ul li:nth-child(2)").mouseover(function(){
	$("nav .nav>li:nth-child(1) .pics_2").css({display:"block"});
	$("nav .nav>li:nth-child(1) .pics_1").css({display:"none"});
	$("nav .nav>li:nth-child(1) .pics_3").css({display:"none"});
});

$("nav .nav>li:nth-child(1) .shiShang_group ul li:nth-child(3)").mouseover(function(){
	$("nav .nav>li:nth-child(1) .pics_3").css({display:"block"});
	$("nav .nav>li:nth-child(1) .pics_1").css({display:"none"});
	$("nav .nav>li:nth-child(1) .pics_2").css({display:"none"});
});

//点击搜索按钮 搜索框边长
$("#search_btn").toggle(function(){
	$(this).prev().animate({width:"200px"});
	$(this).css({background: "url(img/index/search_btn1.png) no-repeat center"});
},function(){
	$(this).prev().animate({width:"0"});
	$(this).css({background: "url(img/index/06.png) no-repeat center"});
});
