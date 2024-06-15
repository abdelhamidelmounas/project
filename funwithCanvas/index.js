// select variables 
const draw = document.querySelector("#draw")
// context is the place where the code of js work . it is 3D or 2D like draw video games etc
const ctx = draw.getContext("2d")
let heu = 0
draw.width = window.innerWidth;
draw.height = window.innerHeight;

ctx.lineJoin ='round'
ctx.lineCap = 'round'
ctx.lineWidth = 50

let isDrawing = false;
let lastX =0;
let lastY = 0;
function drawing(e){ if(!isDrawing)return
    console.log(heu)
    ctx.strokeStyle = `hsl(${heu}, 100% ,50%)`;
    ctx.beginPath();
    // we start always from this cordination
    ctx.moveTo(lastX,lastY)
    // and go to these
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke();
    // to start from the last point we can do 
    lastX = e.offsetX;
    lastY = e.offsetY;
    heu++
    
}

draw.addEventListener("mousemove",drawing)
draw.addEventListener("mousedown",(e)=>{
    isDrawing = true;
    [lastX,lastY]=[e.offsetX,e.offsetY]
    heu++
})
draw.addEventListener("mouseup",()=>{isDrawing = false})
draw.addEventListener("mouseout",()=>{isDrawing = false})

