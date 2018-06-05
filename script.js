  var responsive_window = function(){
    var max_width = 900;
    $(window).resize(function(){
        if($(window).width() <= max_width){

            if($(".contain").length > 0){
                responsive_font();
            }
        }else if($("body").css("font-size") != "16px"){
            $("body").css('font-size', "100%")
        }
    })

    function responsive_font(){
        var em_perc;
        var window_width = $(window).width();

        if($(window).width() >= max_width){
            em_perc = 100;
        }else{
            em_perc = window_width/9;
        }

        $("body").css('font-size', em_perc + "%")
    }

    if($(".site_contain").length > 0){
        responsive_font();
    }
    console.log('everything ran');
}();

$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 50
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
});
