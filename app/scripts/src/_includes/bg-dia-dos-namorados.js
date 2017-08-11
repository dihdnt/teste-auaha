$(window).on('scroll', function () {
    var bg = $(document).scrollTop()
    bg = bg / 60;
    $bg = bg / 60;
    // console.log(bg);
    $(".parallax").css({"background-position-y": +bg+"px"})
    if ($bg > 10) {
    	$(".bg").css({"background-position-y": +200+"px"})
    } 
});

