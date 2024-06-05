// Set variables
let image = document.querySelector(".image img")
let blure = document.querySelector(".blur")
let spacing = document.querySelector(".spacing")
const color = document.querySelector(".color")
let input = Array.from(document.querySelectorAll("input"))
// Function
console.log(input)

blure.addEventListener("change",function() {
    image.style.filter = `blur(${blure.value}px)`
    
})
spacing.addEventListener("change",function(){
    image.style.padding = `${spacing.value}px`
})
color.addEventListener("change",function(){
    image.style.background = `${color.value}`
})
