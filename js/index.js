$(function () {
    $(".container").fullpage({
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        scrollingSpeed: 1000,
        afterLoad: function (link, index) {
            // index从1开始 当前屏的序号
            $(".section").eq(index - 1).addClass("now");
        },
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 || index == 3 && nextIndex == 4) {
                $(".section").eq(index - 1).addClass("leaved");
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
    })

})
