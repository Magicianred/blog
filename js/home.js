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
    if(!$("div").hasClass("blocoArtigo")){
        $.ajax({
            async: true,
            type: 'GET',
            url: "artigos/artigo1.html",
            success: function(result){
                
            }
        })
    }

  
   
   /*
    var dados = new FormData($("form[id='doc_form_doc']")[0])
    $.ajax({
        type: "POST",
        url: "screens/aside/open/doc_ger/links/return_doc_update.php",
        data: dados,
        processData: false,
        contentType: false,
        cache: false,
        success: function(result){
            $('#doc_loading').html(result)
            loadOFF()
        },
        error: function(){
            $('#doc_loading').html('Desculpe, ocorreu um erro, tente novamente mais tarde ou entre em contato com o suporte.')
            loadOFF()
        }
    })
   
   */
})