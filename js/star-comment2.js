
if (l<=2){
    num = 1;
} else if (l>2&&l<=4){
    num = 2;
} else if (l>4&&l<=6){
    num = 3;
} else if (l>6&&l<=8){
    num = 4;
} else if (l>8){
    num = 5;
}
$rating = $('#rating2')
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