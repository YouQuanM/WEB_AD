
if (k<=2){
    num = 1;
} else if (k>2&&k<=4){
    num = 2;
} else if (k>4&&k<=6){
    num = 3;
} else if (k>6&&k<=8){
    num = 4;
} else if (k>8){
    num = 5;
}
$rating = $('#rating1')
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