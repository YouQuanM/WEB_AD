
if (m<=2){
    num = 1;
} else if (m>2&&m<=4){
    num = 2;
} else if (m>4&&m<=6){
    num = 3;
} else if (m>6&&m<=8){
    num = 4;
} else if (m>8){
    num = 5;
}
$rating = $('#rating3')
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