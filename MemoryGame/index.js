// select elment
document.querySelector(".controle-button span").onclick = function () {
    // show the place for write the name
    
    let youname = prompt("Whats Your Name?")
    
    // write player s name
    
    if (youname == null || youname == "") {
        // check if the name is null 
        document.querySelector(".name span").innerHTML = "Unknwon";

    }
    else {
        
        // check if the name is exist write it
        
        document.querySelector(".name span").innerHTML = youname
        
    }
    
    document.querySelector(".controle-button").style.cssText = "display : none";
    
    // show the answers for one minutes
    
    seethe()
    
    let chac = setTimeout(cach, 1200);
    let timer = setTimeout(TimerFun, 1200);
    
    
    

} 
// select variables
let duration = 1000;
let ImaContainer = document.querySelector(".image-container")
let block = Array.from(ImaContainer.children)
let ordeRangae = [...Array(block.length).keys()]
let test =[2,13,10,19,4,6,3,9,12,11,5,15,7,18,0,1,8,14,16,17]
console.log(ordeRangae)
let wrongtries = document.querySelector(".tries span")
let tries = 0


// functions

// the function make the answers visibile for one second

function seethe() {
        for (let i = 0; i < 20; i++){
        document.querySelectorAll(".game-block")[i].classList.add("return")
        
    }
}

// hide the images for start the game

function cach() {
    for (let i = 0; i < 20; i++) {
        document.querySelectorAll(".game-block")[i].classList.remove("return")
        
    }
}

function sweetching(array) {
    let current = array.length,
    random,temp
    while (current > 0 ) {
        random = Math.floor(Math.random() * current)
        current--;
        // make a variable for take array index the last index like [0,1,2,3,4,5,6] and replace the last index with the random num 
        temp = array[current];
        // replae the element with index current with the random num 
        array[current] = array[random]
        // replace the random num with the elment [current]
        array[random] = temp
        
    }
    // return our array 
    return array
}
// turn on the function
sweetching(ordeRangae)
// add order proprties to block game
block.forEach((element, index) => {
    element.style.order = ordeRangae[index]
    // function who turn the block 
    element.addEventListener('click',function () {
        FlipBlock(element)
    })
}
);
// Flip block function 
function FlipBlock(selectblock) {
    // add class to the funtion 
    selectblock.classList.add("return")
    // Collect all fliped block 
    let allFlipedBlock = block.filter(allblock => allblock.classList.contains("return"))
    // select two images
    if (allFlipedBlock.length === 2) {
        // stop clicking function 
        stopclicking()
        // checker function for image
        if (allFlipedBlock[0].dataset.technology !== allFlipedBlock[1].dataset.technology) {
            setTimeout(function () {
                // take two image and add they to "allflipeback" array and compare them this condation for wrong qustion 
                allFlipedBlock[0].classList.remove("return")
                allFlipedBlock[1].classList.remove("return")
                ImaContainer.classList.remove("stop-clicking")
                // add 1 for wrong tries
                tries++
                wrongtries.innerHTML = tries
                // start the music
                document.querySelector("#failed").play()
            },700)
        } else {
            // else for true answers two block similar
            // add class return to the two block
            allFlipedBlock[0].classList.remove("return")
            allFlipedBlock[1].classList.remove("return")
            ImaContainer.classList.remove("stop-clicking")
            allFlipedBlock[0].classList.add("re")
            allFlipedBlock[1].classList.add("re")
            allFlipedBlock[0].id = "true"
            allFlipedBlock[1].id = "true"
            // start the music
            document.querySelector("#success").play()
        }
    }
}
function stopclicking() {
    ImaContainer.classList.add("stop-clicking")
}
function TimerFun() {
    let timer = document.querySelector(".info-container .timer")
    let duration = 90
    let minute, second;
    let time = setInterval(function () {
        minute = Math.floor( duration / 60);
        second = duration % 60
        if (second > 9) {
            timer.innerHTML = `0${minute} : ${second}`
        } else {
            timer.innerHTML = `0${minute} : 0${second}`
        }
        let bien = block.filter((element) => { if (element.id === 'true') { return element } })
        if (bien.length === 20) {
            document.querySelector(".controle-button").style.cssText = "display : block";
            document.querySelector(".controle-button span").innerHTML = `Victory. Your brain is good the time is   ${minute}:${second}<br> your wrong tries are ${tries}`
            document.querySelector(".controle-button span").style.cssText = "pointer-events: none;"
            clearInterval(time)
        }
        
        if (duration === 0) {
            document.querySelector(".controle-button").style.cssText = "display : block";
            if (bien.length === 20) {
                document.querySelector(".controle-button span").innerHTML = "Victory. Your brain is good "
                document.querySelector(".controle-button span").style.cssText = "pointer-events: none;"
            } else {
                document.querySelector(".controle-button span").innerHTML = "Game Over . reload the page for play again"
                document.querySelector(".controle-button span").style.cssText = "pointer-events: none;"
            }
            
            clearInterval(time)
            
        }
        duration--
    }, 1000)
    
    
}
// fin of projet 