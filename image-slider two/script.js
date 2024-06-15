let images = Array.from(document.querySelectorAll(".main div"))
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", ()=>{
        if (images[i].dataset.status === 'not-selected') {
            images.forEach((e)=>{e.style.cssText ="flex:1 25%"})
            images.forEach((e)=>{e.dataset.status="not-selected"})
            images[i].style.cssText= "flex:1 70%;font-size:600%"
            images[i].dataset.status="selected"  
        }else{
            images.forEach((e)=>{e.style.cssText ="flex:1 25%"})
            images.forEach((e)=>{e.dataset.status="not-selected"})
        }
        
        
        
    })
    
}