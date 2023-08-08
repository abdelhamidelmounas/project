// select element 

let countnum = document.querySelector(".count span")
let bullets = document.querySelector(".span")
let NumOfQuestion = 10;
let questionarea = document.querySelector(".quiz-area");
let answersarea = document.querySelector(".answers-area");
let Buttonanswer = document.querySelector(".submit-button")
let bullet = document.querySelector(".bullets")

//set option
let currentin = 0
let currentIndex = 0;
let righyanswer = 0
//  make funtions to work 

function GetQuetions() {
    let MyRequeste = new XMLHttpRequest();
    MyRequeste.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // take data from JSON files
            let ke = JSON.parse(this.responseText)
            let kelenght = ke.length;
            //  function who create span of questions
            CreatBullets(kelenght)
            // function who take the data from the data-base or the JSON files 
            addQuestion(ke[currentIndex], kelenght)
            // count down
            countdown(60, kelenght)
            // Submit click function 
            Buttonanswer.onclick = function () {
                // take teh correct ansewer 
                
                let Correctanswers = ke[currentIndex].right_answer
            
                // check answer 
                
                checkanserfun(Correctanswers, currentIndex)
                
                // clear old question

                setTimeout(clear(), 2000); 
                
                // add new question 
                addQuestion(ke[currentIndex], kelenght)
                

                // change the colors of bullets 
                bullerts()

                //
                if (currentin === 9) {
                    GetFinallyRecord()
                }
            }
        }    
    }
    MyRequeste.open("GET", "html_questions.json", true);
    MyRequeste.send()
}
GetQuetions()
function CreatBullets(num) {
    countnum.innerHTML = num;
    for (let i = 0; i < num; i++) {
        // creat bullets span
        let span = document.createElement("span")
        // add class list to the bullets
        span.classList.add(i);
        //first on check
        if (i === 0) {
            span.classList.add("on")
        }
        // add span to father
        bullets.appendChild(span);
    }    
}

function addQuestion(obj) {
    
    // create question title
    
    let questiontitle = document.createElement("h2")
    
    // create question  text
    
    let questiontext = document.createTextNode(obj["title"])
    
    // add the title and the auestion to the page
    
    questiontitle.appendChild(questiontext);
    questionarea.appendChild(questiontitle)

    // Create the answers
    
    for (let i = 1; i <=4; i++) {
        
        // Create main div
        
        let MainDiv = document.createElement("div")
        
        // add classlist to div
        
        MainDiv.classList.add('answer');

        // add maindiv to answers area
        
        answersarea.appendChild(MainDiv)

        // create input with class+id+type  

        let cheanswer = document.createElement("input")

        //add class id type name data attibute

        cheanswer.name = "question";
        cheanswer.type = "radio"
        cheanswer.id = `answer_${i }`
        cheanswer.dataset.answer =`${obj[`answer_${i}`]}`
        
        // creat lable
        
        let label = document.createElement("label")

        // add attributes to labels

        label.htmlFor = `answer_${i}`
        label.innerText = `${obj[`answer_${i}`]}`

        // add all of this at main div
        MainDiv.appendChild(cheanswer)
        MainDiv.appendChild(label)        
    }
}
function checkanserfun(correct, qcount) {
    // select answer and take the correct answer from the json file
    
    //select variables
        let input = document.querySelectorAll("input");
        let main = document.querySelectorAll(".answer")
        let choseanswer
    // looping the answer
    
    for (let i = 0; i < input.length; i++) {
            // after click submit button make the right answer green
            if (input[i].dataset.answer === correct) {
                    main[i].id = 'correct'
        }
            // focus the right anwser and false one 
        if (input[i].checked === true) {
                // take the right answer
                choseanswer = input[i].dataset.answer
            if (choseanswer === correct) {
                    // compare the answer checked and the right answer
                    main[i].id = 'correct'
                }
            else {
                // if the answer incorrect add id for it
                    main[i].id = "incorrect";
            }
            //add 1 to current index

            if (currentIndex < 8) {
                    currentIndex++;
                    
            }
            // same thinght
            currentin++
                }
        }
    // if the answer is right add a point to player record if no . dont add anythingh
    if (correct === choseanswer) {
        righyanswer++
    }     
}

// clear question
function clear() {
    
    // select the question container
    
    let main = document.querySelector(".answers-area")
    let question = document.querySelector(".quiz-area")
    
    // clear they
    
    main.innerHTML = " ";
    question.innerHTML = " ";
}
function bullerts() {
    
    // select span
    
    let span = document.querySelectorAll(".span span")
    
    // remove "on" from last question
    
    span[currentIndex - 1].classList.remove("on")
    
    // add "on " for the question
    
    span[currentIndex].classList.add("on")
    
}
function countdown(duration, count) {
    let countdownElement = document.querySelector('.countDown')
    if (currentIndex < count) {
        let minutes, seconds;
        countdownInterval = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);

            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;

            countdownElement.innerHTML = `${minutes}:${seconds}`;
            
            if (--duration < 0) {
                clearInterval(countdownInterval);
                
            }
            if (currentin !== 9) {
                if (duration === 0) {
                Buttonanswer.style.cssText = "display : none"
                questionarea.innerHTML = ""
                answersarea.innerHTML = "Time over"
                answersarea.style.cssText = "font-size: 30px ; text-align: center; padding-bottom : 50px"
            }
            }
            
            
        }, 50);
    }
}

function GetFinallyRecord() {
    
    // select variable
    
    let record = document.querySelector(".record");
    let grad = document.querySelector("#grad");
    let input = document.querySelectorAll("input")
    // if your aswers all right
    
    if (righyanswer === 9) {
        grad.innerHTML = "Perfect"
        grad.classList.add("Perfect")
    }
    
    // if plus of 5 answers is right
    
    if (righyanswer >= 5 && righyanswer < 9) {
        grad.innerHTML = "Good"
        grad.classList.add("good")
    }
    
    // the minumal right answers
    
    if (righyanswer < 5) {
        grad.innerHTML = "bad"
        grad.classList.add("bad")
    }
    
    // your record
    
    record.innerHTML = `  Your record is ${righyanswer} from 10`
    
    // change the display of quiz element for see the record
    
    answersarea.style.cssText = "display : none"
    Buttonanswer.style.cssText = "display : none"
    questionarea.style.cssText = "display : none"
    bullet.style.cssText = "display : none"

}




// finish 