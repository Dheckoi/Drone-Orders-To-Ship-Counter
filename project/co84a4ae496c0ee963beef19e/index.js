let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr =  count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}


//netlify
//twitter @treasurporth

// change the title
// background image
//font
//button colors and apperance (widht, border, etc)
//wrap a div around the html, add a max width