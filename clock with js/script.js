/*let  num = [2 ,4 , 45 , 67 , 34 , 29 ,24 , 1000023 , 1999234]
let pair = num.filter((e)=>{return e%2===1})
console.log(pair)
let  nothing = ["abdelhaziz is coming for you mis","amin ","hassan","abdelhamid" , "abdelhamid elmounasfi" , "abdelrahman"]
let re = /abde/ig
let match = nothing.forEach((e)=>{return re.test(nothing) === true?e:""; })

console.log(re.test(nothing))*/
let hour = document.querySelector(".hand-hour")
let minute = document.querySelector(".hand-minute")
let second = document.querySelector(".hand-second")
console.log(hour ,minute ,second)

setInterval(
    function(){
        let date = new Date()
        let num = date.getSeconds()
        const sconddegree = ((num/60)*360)+90;
        second.style.cssText = `transform : rotate(${sconddegree}deg)`
        
        const minuts =date.getMinutes()
        const mindegree = ((minuts*60/3600)*360)+90
        minute.style.cssText=  `transform : rotate(${mindegree}deg)`
        
        const hours = date.getHours();
        const hourdegree = (((hours*3600/43200)*360)+90)
        hour.style.cssText = `transform : rotate(${hourdegree}deg)`
        
    },1000)
