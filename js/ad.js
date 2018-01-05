$(function () {
    $(".ad").slideDown(1000).children("span").click(function () {
        $(this).parent().fadeOut(1000);
    });


    $(".ad").slideDown(1000, function () {
        $(".ad").children("span").click(function () {
            $(this).parent().fadeOut(1000, function () {
                alert("您关闭了广告！");
            });
        });
    });
})