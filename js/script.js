$(document.body).ready(function(){
    let tempSlider = setInterval(trocaSlider, 1000)

    function trocaSlider(){
        if(document.querySelector("#img1").classList.contains("block")){
            document.querySelector("#img1").classList.remove("block")
            document.querySelector("#img2").classList.add("block")
        }else if(document.querySelector("#img2").classList.contains("block")){
            document.querySelector("#img2").classList.remove("block")
            document.querySelector("#img3").classList.add("block")
        }else if(document.querySelector("#img3").classList.contains("block")){
            document.querySelector("#img3").classList.remove("block")
            document.querySelector("#img4").classList.add("block")
        }else if(document.querySelector("#img4").classList.contains("block")){
            document.querySelector("#img4").classList.remove("block")
            document.querySelector("#img1").classList.add("block")
        }
    }
    
    document.querySelector("#pausar").addEventListener("click", function(){
        clearInterval(tempSlider)
    })
    
    document.querySelector("continuar").addEventListener("click", function(){
        trocaSlider()
        clearTimeout(conta)
    })
})
