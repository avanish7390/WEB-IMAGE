const accesskey = "YUWOkilXhIfe6s0_Nn_hDRgaIO1UmcsEQf-uCRIAqzA"
// const Secretkey = "0jVqDH_IgXjbNlavGFLgTrfoDUOGINuUjudWLPf95xk"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")


let inputData = ""
let page = 1;



async function searchImages(){
    inputData = inputEl.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if(page === 1){
        searchResults.innerHTML = ""

    }

    results.map((result) =>{
        const imageWapper = document.createElement("div")
        imageWapper.classList.add("search-result")
        const image = document.createElement("img")
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description


        imageWapper.appendChild(image);
        imageWapper.appendChild(imageLink)
        searchResults.appendChild(imageWapper)

    });

    page++
    if(page > 1){
        showMore.style.display = 'block'

    }

}


formEl.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
})




showMore.addEventListener("click", () =>{
    searchImages()
})