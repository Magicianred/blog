$(document.body).ready(function(){
        //Menu superior
        function abreSubMenu(){
            $("#subMenu ul").css("display", "block")
            $("#subMenu").off("click", abreSubMenu)
            $("#subMenu").on("click", fecharSubMenu)
        }
    
        $("#subMenu").on("click", abreSubMenu)
    
        function fecharSubMenu(){
            $("#subMenu ul").css("display", "none")
            $("#subMenu").on("click", abreSubMenu)
            $("#subMenu").off("click", fecharSubMenu)
        }
    
        function abreMenu(){
            $("#menuSup").css("display", "block")
            $("#menu").off("click", abreMenu)
            $("#menu").on("click", fecharMenu)
        }
    
        $("#menu").on("click", abreMenu)
    
        function fecharMenu(){
            $("#menuSup").css("display", "none")
            $("#menu").off("click", fecharMenu)
            $("#menu").on("click", abreMenu)
        }
})