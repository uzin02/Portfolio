// 메뉴 이동
jQuery(document).ready(function($) {
    $("#main").click(function(event){            
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});
jQuery(document).ready(function($) {
    $("#work").click(function(event){            
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});
jQuery(document).ready(function($) {
    $("#skills").click(function(event){            
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});
jQuery(document).ready(function($) {
    $("#contact").click(function(event){            
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
});

// skills부터 메뉴 색 변경
$(document).ready(function(){
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 4200) {
        $("#menu").css("color" , "#FFF");
    }
    else{
        $("#menu").css("color" , "#000");   
    }
    })
})