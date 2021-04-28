$(document.body).ready(function(){
    //Menu superior
    function abreSubMenu(){
        $(".subMenu ul").css("display", "block")
        $(".subMenu").off("click", abreSubMenu)
        $(".subMenu").on("click", fecharSubMenu)
    }

    $(".subMenu").on("click", abreSubMenu)

    function fecharSubMenu(){
        $(".subMenu ul").css("display", "none")
        $(".subMenu").on("click", abreSubMenu)
        $(".subMenu").off("click", fecharSubMenu)
    }


    //$(".subMenu ul").css("display", "none")

    //$("#blocoMenuSup ul")
    function abreMenu(){
        $("#blocoMenuSup ul").css("display", "block")
        $("#blocoMenuSup ul ul").css("display", "none")
        $("#menu").off("click", abreMenu)
        $("#menu").on("click", fecharMenu)
    }

    $("#menu").on("click", abreMenu)

    function fecharMenu(){
        $("#blocoMenuSup ul").css("display", "none")
        $("#blocoMenuSup ul ul").css("display", "none")
        $("#menu").off("click", fecharMenu)
        $("#menu").on("click", abreMenu)
    }

    
    /*
      $("#menu").click(function(){
            $("#blocoMenuSup ul").css("display", "none")
            $("#blocoMenuSup ul ul").css("display", "none")
            $("#menu").off("click", "**")
        })
    */

    //Slider
    let tempSlider = setInterval(trocaSlider, 5500)

    function trocaSlider(){
        if($("#img1").hasClass("block")){
            $("#img1").removeClass("block")
            $("#img2").addClass("block")
        }else if($("#img2").hasClass("block")){
            $("#img2").removeClass("block")
            $("#img3").addClass("block")
        }else if($("#img3").hasClass("block")){
            $("#img3").removeClass("block")
            $("#img4").addClass("block")
        }else if($("#img4").hasClass("block")){
            $("#img4").removeClass("block")
            $("#img1").addClass("block")
        }
    }

    $("#voltar").click(function(){
        clearInterval(tempSlider)
        tempSlider = setInterval(trocaSlider, 5500)
        if($("#img1").hasClass("block")){
            $("#img1").removeClass("block")
            $("#img4").addClass("block")
        }else if($("#img2").hasClass("block")){
            $("#img2").removeClass("block")
            $("#img1").addClass("block")
        }else if($("#img3").hasClass("block")){
            $("#img3").removeClass("block")
            $("#img2").addClass("block")
        }else if($("#img4").hasClass("block")){
            $("#img4").removeClass("block")
            $("#img3").addClass("block")
        }
    })
    
    $("#avancar").click(function(){
        clearInterval(tempSlider)
        tempSlider = setInterval(trocaSlider, 5500)
        trocaSlider()
    })
    
    $("#blocoSlider").hover(function(){
        clearInterval(tempSlider)
        $("#voltar").css("display", "flex")
        $("#avancar").css("display", "flex")
    }, function(){
        clearInterval(tempSlider)
        tempSlider = setInterval(trocaSlider, 5500)
        $("#voltar").css("display", "none")
        $("#avancar").css("display", "none")
    })  
  
})
