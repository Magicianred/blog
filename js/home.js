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
   

  //Animação no resumos
  //resumo 1
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

   //resumo 2
   $("#r2").hover(function(){
          $("#r2").addClass("rHover")
          $("#sm2").addClass("smHover")
          $("#resumo2").addClass("resumo1hover")
          $("#r2").removeClass("rRemove")
          $("#sm2").removeClass("smRemove")
          $("#resumo2").removeClass("resumo1remove")
     },function(){
          $("#r2").removeClass("rHover")
          $("#sm2").removeClass("smHover")
          $("#resumo2").removeClass("resumo1hover")
          $("#r2").addClass("rRemove")
          $("#sm2").addClass("smRemove")
          $("#resumo2").addClass("resumo1remove")
     })

     $("#sm2 a").hover(function(){
          $("#sm2 a").addClass("saberMaishover")
          $("#sm2 a").removeClass("saberMaisTirar")
     }, function(){
          $("#sm2 a").addClass("saberMaisTirar")
          $("#sm2 a").removeClass("saberMaishover")
     })

     //resumo 3
     $("#r3").hover(function(){
          $("#r3").addClass("rHover")
          $("#sm3").addClass("smHover")
          $("#resumo3").addClass("resumo1hover")
          $("#r3").removeClass("rRemove")
          $("#sm3").removeClass("smRemove")
          $("#resumo3").removeClass("resumo1remove")
     },function(){
          $("#r3").removeClass("rHover")
          $("#sm3").removeClass("smHover")
          $("#resumo3").removeClass("resumo1hover")
          $("#r3").addClass("rRemove")
          $("#sm3").addClass("smRemove")
          $("#resumo3").addClass("resumo1remove")
     })

     $("#sm3 a").hover(function(){
          $("#sm3 a").addClass("saberMaishover")
          $("#sm3 a").removeClass("saberMaisTirar")
     }, function(){
          $("#sm3 a").addClass("saberMaisTirar")
          $("#sm3 a").removeClass("saberMaishover")
     })

     //resumo 4
     $("#r4").hover(function(){
          $("#r4").addClass("rHover")
          $("#sm4").addClass("smHover")
          $("#resumo4").addClass("resumo1hover")
          $("#r4").removeClass("rRemove")
          $("#sm4").removeClass("smRemove")
          $("#resumo4").removeClass("resumo1remove")
     },function(){
          $("#r4").removeClass("rHover")
          $("#sm4").removeClass("smHover")
          $("#resumo4").removeClass("resumo1hover")
          $("#r4").addClass("rRemove")
          $("#sm4").addClass("smRemove")
          $("#resumo4").addClass("resumo1remove")
     })

     $("#sm4 a").hover(function(){
          $("#sm4 a").addClass("saberMaishover")
          $("#sm4 a").removeClass("saberMaisTirar")
     }, function(){
          $("#sm4 a").addClass("saberMaisTirar")
          $("#sm4 a").removeClass("saberMaishover")
     })     

     //resumo 5
     $("#r5").hover(function(){
          $("#r5").addClass("rHover")
          $("#sm5").addClass("smHover")
          $("#resumo5").addClass("resumo1hover")
          $("#r5").removeClass("rRemove")
          $("#sm5").removeClass("smRemove")
          $("#resumo5").removeClass("resumo1remove")
     },function(){
          $("#r5").removeClass("rHover")
          $("#sm5").removeClass("smHover")
          $("#resumo5").removeClass("resumo1hover")
          $("#r5").addClass("rRemove")
          $("#sm5").addClass("smRemove")
          $("#resumo5").addClass("resumo1remove")
     })

     $("#sm5 a").hover(function(){
          $("#sm5 a").addClass("saberMaishover")
          $("#sm5 a").removeClass("saberMaisTirar")
     }, function(){
          $("#sm5 a").addClass("saberMaisTirar")
          $("#sm5 a").removeClass("saberMaishover")
     })
     
     //resumo 6
     $("#r6").hover(function(){
          $("#r6").addClass("rHover")
          $("#sm6").addClass("smHover")
          $("#resumo6").addClass("resumo1hover")
          $("#r6").removeClass("rRemove")
          $("#sm6").removeClass("smRemove")
          $("#resumo6").removeClass("resumo1remove")
     },function(){
          $("#r6").removeClass("rHover")
          $("#sm6").removeClass("smHover")
          $("#resumo6").removeClass("resumo1hover")
          $("#r6").addClass("rRemove")
          $("#sm6").addClass("smRemove")
          $("#resumo6").addClass("resumo1remove")
     })

     $("#sm6 a").hover(function(){
          $("#sm6 a").addClass("saberMaishover")
          $("#sm6 a").removeClass("saberMaisTirar")
     }, function(){
          $("#sm6 a").addClass("saberMaisTirar")
          $("#sm6 a").removeClass("saberMaishover")
     })

     //resumo 7
     $("#r7").hover(function(){
          $("#r7").addClass("rHover")
          $("#sm7").addClass("smHover")
          $("#resumo7").addClass("resumo1hover")
          $("#r7").removeClass("rRemove")
          $("#sm7").removeClass("smRemove")
          $("#resumo7").removeClass("resumo1remove")
     },function(){
          $("#r7").removeClass("rHover")
          $("#sm7").removeClass("smHover")
          $("#resumo7").removeClass("resumo1hover")
          $("#r7").addClass("rRemove")
          $("#sm7").addClass("smRemove")
          $("#resumo7").addClass("resumo1remove")
     })

     $("#sm7 a").hover(function(){
          $("#sm7 a").addClass("saberMaishover")
          $("#sm7 a").removeClass("saberMaisTirar")
     }, function(){
          $("#sm7 a").addClass("saberMaisTirar")
          $("#sm7 a").removeClass("saberMaishover")
     })
})