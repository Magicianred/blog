$(document.body).ready(function(){
    let tempSlider = setInterval(trocaSlider, 5500)

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
    
    document.querySelector("#blocoSlider").addEventListener("mouseover", function(){
        clearInterval(tempSlider)
        document.querySelector("#voltar").style.display = "flex"
        document.querySelector("#avancar").style.display = "flex"
    })
    
    document.querySelector("#blocoSlider").addEventListener("mouseout", function(){
        clearInterval(tempSlider)
        tempSlider = setInterval(trocaSlider, 5500)
        document.querySelector("#voltar").style.display = "none"
        document.querySelector("#avancar").style.display = "none"
    })

    document.querySelector("#avancar").addEventListener("click", function(){
        clearInterval(tempSlider)
        tempSlider = setInterval(trocaSlider, 5500)
        trocaSlider()
    })

    document.querySelector("#voltar").addEventListener("click", function(){
        clearInterval(tempSlider)
        if(document.querySelector("#img1").classList.contains("block")){
            document.querySelector("#img1").classList.remove("block")
            document.querySelector("#img4").classList.add("block")
            tempSlider = setInterval(trocaSlider, 5500)
        }else if(document.querySelector("#img2").classList.contains("block")){
            document.querySelector("#img2").classList.remove("block")
            document.querySelector("#img1").classList.add("block")
            tempSlider = setInterval(trocaSlider, 5500)
        }else if(document.querySelector("#img3").classList.contains("block")){
            document.querySelector("#img3").classList.remove("block")
            document.querySelector("#img2").classList.add("block")
            tempSlider = setInterval(trocaSlider, 5500)
        }else if(document.querySelector("#img4").classList.contains("block")){
            document.querySelector("#img4").classList.remove("block")
            document.querySelector("#img3").classList.add("block")
            tempSlider = setInterval(trocaSlider, 5500)
        }
    }) 
})
