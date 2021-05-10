$(document.body).ready(function(){
    //fixa menu superior ao rolar para baixo
    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $("#blocoMenuSup").css("position", "fixed")
        }else {
            $("#blocoMenuSup").css("position", "relative")
        }
    })

    //Resumos de artigos
    $("#resumo1").load("artigos/artigo1.html #resArt")
    $("#resumo2").load("artigos/artigo2.html #resArt2")
    $("#resumo3").load("artigos/artigo3.html #resArt3")
    $("#resumo4").load("artigos/artigo4.html #resArt4")
    $("#resumo5").load("artigos/artigo5.html #resArt5")
    $("#resumo6").load("artigos/artigo6.html #resArt6")
    $("#resumo7").load("artigos/artigo7.html #resArt7")
   

  
   $("#r1").hover(function(){
        $("#r1").addClass("rHover")
        $("#sm1").addClass("smHover")
        $("#resumo1").addClass("resumo1hover")
        $("#r1").removeClass("rRemove")
        $("#sm1").removeClass("smRemove")
        $("#resumo1").removeClass("resumo1remove")
   },function(){
        $("#r1").removeClass("rHover")
        $("#sm1").removeClass("smHover")
        $("#resumo1").removeClass("resumo1hover")
        $("#r1").addClass("rRemove")
        $("#sm1").addClass("smRemove")
        $("#resumo1").addClass("resumo1remove")
   })

   $("#sm1 a").hover(function(){
        $("#sm1 a").addClass("saberMaishover")
        $("#sm1 a").removeClass("saberMaisTirar")
   }, function(){
        $("#sm1 a").addClass("saberMaisTirar")
        $("#sm1 a").removeClass("saberMaishover")
   })
})