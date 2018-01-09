
if (n<=2){
    num = 1;
} else if (n>2&&n<=4){
    num = 2;
} else if (n>4&&n<=6){
    num = 3;
} else if (n>6&&n<=8){
    num = 4;
} else if (n>8){
    num = 5;
}
$rating = $('#rating4')
$item = $rating.find('.rating-item');
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