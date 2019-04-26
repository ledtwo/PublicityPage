$(function () {
    $(".container").fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function (link, index) {
            // index从1开始 当前屏的序号
            $(".section").eq(index - 1).addClass("now");
			$(".screen8").on("mousemove",function(e){
				$(this).find(".hand").css({
					left:e.clientX-380,
					top:e.clientY-100,
				})
			}).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.1 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.content [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
			
			
        },
        onLeave: function (index, nextIndex, direction) {
			var currentSection = $(".section").eq(index-1);
            if (index == 2 && nextIndex == 3 || index == 3 && nextIndex == 4) {
                $(".section").eq(index - 1).addClass("leaved");
            }
			else if(index==5 && nextIndex==6){
				currentSection.addClass("leaved");
				$(".screen6 .box").addClass("show");
			}
			else if(index==6 && nextIndex==7){
				$(".screen7 .star img").each(function(i,item){
					$(this).delay(i*500).fadeIn();
				})
			}
        },
        // 点击更多切换到下一页
        // 在组件初始化完毕或者插件内容清理完毕时
        afterRender: function () {
            // jquery插件初始值的时候封装这个方法
            // 1.jQuery的插件封装： $.fn.fullpage = function(){}
            // 2.jquery本身没有的方法通过$.fn的方式追加方法
            // 3.例如 $.fn.src = function(){return this.attr('src')};
            $(".more").on("click", function () {
                $.fn.fullpage.moveSectionDown();
            })
        },
    });
    $(".screen4 .cart").on("transitionend", function () {
        $(".screen4 .address").fadeIn().find("img:last").fadeIn(1000);
        $(".screen4 .text").addClass("show");
    });


})
