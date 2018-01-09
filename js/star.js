if (j<=2){
    num = 1;
} else if (j>2&&j<=4){
    num = 2;
} else if (j>4&&j<=6){
    num = 3;
} else if (j>6&&j<=8){
    num = 4;
} else if (j>8){
    num = 5;
}
$rating = $('#rating')
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