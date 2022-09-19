function clicar(){

    var velM = 90
    var vel = document.getElementById("vel")
    var velF = Number(vel.value)
    var resCor = document.getElementById("resCor")
    var pP = document.getElementById("pP")
    var p = document.getElementById("p")


    pP.innerHTML = `Sua velocidade é de ${velF}Km/h`
    
    if (velF >= 75 && velF <= 90){
        pP.innerHTML = `Sua velocidade é de ${velF}Km/h, ATENÇÃO!`
        p.innerHTML = `Cuidado, velocidade próxima ao limite!`
        p.style.color = "black"
        resCor.style.backgroundColor = "yellow"

        p.style.left = "50%"
        p.style.top = "50%"
        p.style.transform = "50% , 50%"

    } else if (velF > 90){
        pP.innerHTML = `Sua velocidade é de ${velF}Km/h, REDUZA`
        p.innerHTML = `LIMITE ATINGIDO`
        p.style.color = "white"
        resCor.style.backgroundColor = "red"
        p.style.color = "white"

        p.style.left = "50%"
        p.style.top = "50%"
        p.style.transform = "50% , 50%"
    }
    
}