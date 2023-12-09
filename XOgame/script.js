// select variables 
let boxs = Array.from(document.querySelectorAll(".container span"))
let num = 0 
let win = 0
let title = document.querySelector(".title")
let suc = document.querySelector(".success")
let wron = document.querySelector(".wrong")
//function of the project

    for (let i = 0; i < boxs.length; i++) {
        boxs[i].onclick = function game() {
            if (num < 9 && win<1) {
                if (num % 2 === 0) {
                    if (boxs[i].className === "") {
                        boxs[i].innerHTML = "X"
                        boxs[i].dataset.game = "X"
                        boxs[i].classList.add("X")
                        num++
                    }
                    
                } else {
                    if (boxs[i].className === "") {
                        boxs[i].innerHTML = "O"
                        boxs[i].dataset.game = "O"
                        boxs[i].classList.add("O")
                        num++
                    }
                    
                }
            }
            winner()
            
        }
}

function winner() {
    //1
    if (boxs[0].dataset.game===boxs[1].dataset.game &&boxs[1].dataset.game===boxs[2].dataset.game &&  boxs[0].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        document.querySelector(".success").play()
        setInterval(function () {
            location.reload()
        },2000)
    }
    //2
    if (boxs[3].dataset.game===boxs[4].dataset.game &&boxs[4].dataset.game===boxs[5].dataset.game &&  boxs[3].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        suc.play()
        setInterval(function () {
            location.reload()
        },2000)
    }
    //3
    if (boxs[6].dataset.game===boxs[7].dataset.game &&boxs[7].dataset.game===boxs[8].dataset.game &&  boxs[6].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        suc.play()
        setInterval(function () {
            location.reload()
        },2000)
    }
    //4
    if (boxs[0].dataset.game===boxs[3].dataset.game &&boxs[3].dataset.game===boxs[6].dataset.game &&  boxs[0].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        suc.play()
        setInterval(function () {
            location.reload()
        },2000)
    }
    //5
    if (boxs[1].dataset.game===boxs[4].dataset.game &&boxs[4].dataset.game===boxs[7].dataset.game &&  boxs[1].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        suc.play()
        setInterval(function () {
            location.reload()
        },2000)
    }
    //6
    if (boxs[2].dataset.game===boxs[5].dataset.game &&boxs[5].dataset.game===boxs[8].dataset.game &&  boxs[2].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        suc.play()
        vsetInterval(function () {
            location.reload()
        },2000)
    }
    //7
    if (boxs[0].dataset.game===boxs[4].dataset.game &&boxs[4].dataset.game===boxs[8].dataset.game &&  boxs[0].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        suc.play()
        setInterval(function () {
            location.reload()
        },2000)
    }
    //8
    if (boxs[2].dataset.game===boxs[4].dataset.game &&boxs[4].dataset.game===boxs[6].dataset.game &&  boxs[2].dataset.game !=""  ) {
        title.innerHTML = ` My francuim ${boxs[0].dataset.game} is the Winner`
        win++
        suc.play()
        setInterval(function () {
            location.reload()
        },2000)
    }
    if (num === 9) {
        title.innerHTML = ` is not a problem you will win `
        wron.play()
        setInterval(function () {
            location.reload()
        },2000)
    }
}
