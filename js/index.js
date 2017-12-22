/*
* @Author: 王斌晶
* @Date:   2017-11-09 14:03:56
* @Last Modified by:   王斌晶
* @Last Modified time: 2017-11-14 16:30:29
*/
$(document).ready(function(){
	$("#fullpage").fullpage({
		//使文字显示的不是居中位置
		verticalCentered:false,
		//是否显示导航栏
		navigation: true,
		//设置没屏的背景颜色
		sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
		//设置滚屏的速度
		scrollingSpped:1500,




		//这个页面需要的函数
		//滚动到某一屏后的回调函数
		afterLoad:function(anchorLink , index){
			$(".down").fadeIn();
			$(this).addClass('animate');
			if(index==7){
				$(".section07 .text").addClass("animated");
				$(".section07 .start img").addClass("animated");
			}
			if(index==8){

					 //在最后一屏设置鼠标移动事件
					 $(this).on("mousemove", function (e) {


					 	//设置手移动的效果
					 	$(".hand1").css({
					 		"left":e.clientX+20,
					 		 "top":e.clientY+20
					 	})

					 	//设置按钮移入鼠标事件
					 	$(".section08 .btns").on("mouseenter", function () {
					 		 $(".section08 .btns .btn3").show();

					 	}).on("mouseleave", function () {
					 		 $(".section08 .btns .btn3").hide();
					 	})


					 	//设置再来一次
					 	
					 	$(".section08 .btn4").on("click", function () {
					 		 $.fn.fullpage.moveTo(1);
					 	})
					 })
				}
		},
		//滚动前的回调函数
		onLeave:function(index, nextindex, direction){
			$(".down").fadeOut();
			//从第二屏进入第三屏
			if(index==2&&nextindex==3){
				//添加动画效果,并监听结束事件
				$(".section02 .sofa").addClass("animated").on("animationend",function(){
					$(".section03 .threen .size .two").show();
					$(".section03  .threen .changge .two").show();
				});


				// 从第三屏进入第四屏
			}else if(index==3&&nextindex==4){
				// 添加动画效果,并整监听事件
				// 1.添加动画效果
				// 2.添加动画结果事件并且让动画动起来
				$(".section03  .luobo").addClass("animated").on("animationend",function(){

					$(".section04 .four .sofa").show();

					$(".section04 .four .car .cars").addClass("animated").on("animationend",function(){

						$(".section04 .text .two").fadeIn();
						$(".section04 .address .one").fadeIn();
						$(".section04 .address .two").fadeIn();

					});
				});

				// 第四屏到第五屏的动画
			}else if(index==4&&nextindex==5){
				
				$(".section05 .box  .hand").addClass("animated").on("animationend",function(){
					$(".section05 .box .mouse02").show();
					$(".section04 .four .sofa1").addClass("animated");
					$(".section05 .card_order .order").addClass("animated");
				});

				//第五屏到第六屏的动画
			}else if(index==5&&nextindex==6){
				// 为隐形的沙发添加动画
				$(".section05 .card_order .sofa").addClass("animated");
				// 为盒子添加动画
				$(".section06 .box").addClass("animated");
				// 是背景图片进行移动,然后使小车进行移动
				$(".section06").addClass("animated");
				//让地址进行改变显示
				$(".section06 .cars .threen").show();
				//上面的句子发生变化
				$(".section06 .text .two").show();
				//为快递小哥添加一个动画
				$(".section06 .people .one").addClass("animated");
				//让门进行展示 显示
				$(".section06 .garden .two").addClass("animated");
				//位姑娘添加一个动画
				$(".section06 .garden .one").addClass("animated");

			}
		},
		//页面结果生成后的回调函数
		afterRender:function(){
			 $(".down").on("click",function(){
				 $.fn.fullpage.moveSectionDown();
				});
			}
	
	});
});