
if (p<=2){
    num = 1;
} else if (p>2&&p<=4){
    num = 2;
} else if (p>4&&p<=6){
    num = 3;
} else if (p>6&&p<=8){
    num = 4;
} else if (p>8){
    num = 5;
}
$rating = $('#rating5')
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