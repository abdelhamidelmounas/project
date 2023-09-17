const accessekey = "4ldkstWLqFNa58qM6tHxclbYpri_IUjOvBGjJt5dIAs";
let formel = document.querySelector("form")
let searchbar = document.querySelector(".search")
let btnsearch = document.querySelector(".btn")
let showmore = document.querySelector("#show")
let searchresul = document.querySelector(".search-result")
let inputdata = ""
let page = 1
async function searchfun() {
    inputdata = searchbar.value 
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accessekey}`
    let response = await fetch(url)
    let data = await response.json()
    let results = data.results
    if (page === 1 ) {
        searchresul.innerHTML = ""
    }
    results.map((result) => {
        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("results")
        const imagecontainer = document.createElement("div")
        imagecontainer.classList.add("container")
        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt = result.alt_description
        const imagelink = document.createElement("a")
        imagelink.href = result.links.html
        imagelink.target = "_blank"
        imagelink.textContent = result.alt_description
        imagecontainer.appendChild(image)
        imagecontainer.appendChild(imagelink)
        imageWrapper.appendChild(imagecontainer)
        searchresul.appendChild(imageWrapper)
        
    });
    page++
    if (page > 1) {
        showmore.style.cssText = "display:block"
    }
}
formel.addEventListener("submit", (ecen) => {
    ecen.preventDefault();
    page = 1
    searchfun()
})
showmore.addEventListener("click", () => {

    searchfun()
})