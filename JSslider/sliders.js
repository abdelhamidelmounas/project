// 
var slidersimages = Array.from(document.querySelectorAll(".slider-container img"));

// get nunber of sliders 
var sliderscount = slidersimages.length;

// Set current slider
var curSlider = 1;
// Slider number element 
var SliderNumber = document.querySelector(".slider-number");
// Previouse and Next button
let next = document.getElementById("next");
let prev = document.getElementById("prev");
// Create UL Element
let ulElement = document.createElement("ul")
ulElement.id = "pagination-ul"
// Create LI element 
for (let i = 1; i <= sliderscount ; i++) {
    var liPagination = document.createElement("li");
    liPagination.setAttribute("data-index", i)
    liPagination.innerHTML = i 
    // Append the item to the main element
    ulElement.appendChild(liPagination)
}
//  Add the create element ul to the page 
var indicators = document.getElementById("indicators");
indicators.appendChild(ulElement)
// Get the new created element ul 
var paginationElement = document.getElementById("pagination-ul");
var paginationBullets =Array.from(document.querySelectorAll("#pagination-ul li"))
// Triger the checker function 
TheChecker()
// Create the cheker function 

function TheChecker() {
    // set slide Number
    SliderNumber.innerHTML = "slider#" + '   ' + (curSlider) + '   ' + "of" + '   ' + (sliderscount);
    // Set active class to the photo
    slidersimages[curSlider - 1].classList.add("active")
    // set Active class to  li  element pagination 
    paginationElement.children[0].classList.add('active');
    //Remove all active from image and bullets
    


}
curSlider = 0;
if (curSlider === 0 ) {
    prev.classList.add("disable")
}
if (curSlider !== 0){
    prev.classList.remove("disable")
}
next.onclick =  ()=> {
    if (curSlider < 3 && curSlider >= 0) {
        removeAllActive()
        curSlider++
        removeAllActive()
        slidersimages[curSlider - 1].classList.remove("active");
        slidersimages[curSlider].classList.add("active")
        paginationBullets[curSlider].classList.add("active");
        SliderNumber.innerHTML = "slider#" + '   ' + (curSlider+ 1) + '   ' + "of" + '   ' + (sliderscount);
        console.log(curSlider)
    } else {
        slidersimages[curSlider].classList.add("active")
    }
    prev.classList.remove("disable")
    if (curSlider === 3) {
        next.classList.add("disable")
    }
}
prev.onclick = () => {
    if (curSlider <= 3 && curSlider > 0) {
        removeAllActive()
        curSlider--
        slidersimages[curSlider].classList.add("active")
        paginationBullets[curSlider].classList.add("active");
        console.log(curSlider)
        SliderNumber.innerHTML = "slider#" + '   ' + (curSlider+ 1) + '   ' + "of" + '   ' + (sliderscount);
    } else {
        slidersimages[curSlider].classList.add("active")
    }
    if (curSlider === 0 ) {
    prev.classList.add("disable")
    }
    
    next.classList.remove("disable")
    

}
function removeAllActive() {
    slidersimages.forEach(function (img) {
        img.classList.remove("active")
    })
    paginationBullets.forEach(function (li) {
        li.classList.remove("active")
    })

}
console.log(paginationBullets)
for (let i = 0; i < sliderscount ; i++ ) {
    paginationBullets[i].onclick = function () {
        removeAllActive()
        curSlider = i
        slidersimages[i].classList.add("active");
        paginationBullets[i].classList.add("active");
        if (curSlider === 0 ) {
        prev.classList.add("disable")
        }
        if (curSlider !== 0) {
        prev.classList.remove("disable")
        }
        if (curSlider !== 3) {
        next.classList.remove("disable")
        }
        if (curSlider === 3 ) {
        next.classList.add("disable")
        }
        SliderNumber.innerHTML = "slider#" + '   ' + ( i + 1) + '   ' + "of" + '   ' + (sliderscount);
    }
}

// End of the project 


