var num = 4;
$rating = $('#rating-mine');
$item = $rating.find('.rating-item1');
var lightOn = function(num){
    $item.each(function (index) {
        if(index < num){
            $(this).css('background-position','0 -20px');
        }else{
            $(this).css('background-position','0 0');
        }
    })
};
lightOn(num);
$item.on('mouseover',function(){
    lightOn($(this).index()+1);
}).on('click',function(){
    num = $(this).index()+1;
    var grade = num*2;//注意：这里传值是按照5分制传的，评分是十分的话就把num乘以2//
    /////////////////////
    //每次点击星星后会吧num赋值给grade，就是用户的评分。
    //可以在这里直接把grade传入数据库吧。。。
    /////////////////////
    alert(grade);//测试用，可以删掉。//
});
$rating.on('mouseout',function () {
    lightOn(num);
});
//获取input的文本。
$(document).ready(function(){
    $("#comment-submit").click(function(){
        var t = $(" #comment-text ").val();
        /////////////////////
        //t被赋值为input里的内容。
        /////////////////////

        alert(t)//测试,可以删掉//
    });
});