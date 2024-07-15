// select variables 
let container = document.querySelector(".container")
let video  =  document.querySelector(".player-video")
let btn = document.querySelector("button")
let mainprogress = document.querySelector(".progress")
let progress = document.querySelector(".progress-failed")
let ione = document.querySelector(".one")
let itwo = document.querySelector(".two")
let inputvolume = document.querySelector(".player-slider1")
let inputprogress = document.querySelector(".player-slider2")
let playercontrol = document.querySelector(".player-control")



// function 

video.pause()
btn.onclick = function () {
    if (btn.classList.contains("pause") !== true) {
        btn.classList.add("pause")
        video.play()
        btn.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }
    else{
        btn.classList.remove("pause")
        video.pause()
        btn.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
    //  I use this Intervall to apply the progress failed and let him move 
    setInterval(()=>{
        progress.style.cssText = `width:${(video.currentTime*100)/video.duration}%`
        // this condition is for the end of the video , aftre the end some problme are formed by the code so I fixed that 
        if (video.currentTime === video.duration) {
            btn.classList.remove("pause")
                video.pause()
                btn.innerHTML = '<i class="fa-solid fa-play"></i>'
        }
        },1000)
}
// this for the volume's range and speed's range and the     button who take us to the next 10 second  :)
ione.onclick = function(){
    video.currentTime -= 10
}
itwo.onclick = function () {
    video.currentTime += 10
}
inputvolume.onclick = ()=>{
    video.volume = inputvolume.value
}
inputprogress.onclick = ()=>{
    video.playbackRate = inputprogress.value;
}
// this function let us progress the video by the  progress failed 
function scrub(e){
    let du = (e.offsetX*100)/500
    video.currentTime = (du*video.duration)/100
    
}
mainprogress.addEventListener("click",scrub)

// these line hide the palyer controle if the cursor isn't on the video
container.addEventListener("mouseleave",()=>{
    if (btn.classList.contains("pause")=== true) {
        playercontrol.style.cssText = "opacity : 0 "
    }
})
container.addEventListener("mouseenter",()=>{
        playercontrol.style.cssText = "opacity : 1 "
    
    })
