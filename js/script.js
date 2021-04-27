$(document.body).ready(function(){
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
