$(document.body).ready(function(){
    $("#praCimaBloco").click(function(){
        $("html, body").animate({scrollTop: 0}, 600)
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            $("#praCimaBloco").css("display", "block")
            $("#praCima").addClass("aparecePC")
        }else {
            $("#praCimaBloco").css("display", "none")
            $("#praCima").removeClass("aparecePC")
        } 
      })
})