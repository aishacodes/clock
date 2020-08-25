/*Selectors*/
const hourEl = document.getElementById('hr')
const minsEl = document.getElementById('min')
const secsEl = document.getElementById('sec')
const meriEl = document.getElementById('meri')

/*Setup*/
let hour = 0
let mins = 0
let secs = 0
let meri = ""

/*fuctions and utilities*/


function renderClock() {
    hourEl.textContent = twoDigit(hour)
    minsEl.textContent = twoDigit(mins)
    secsEl.textContent = twoDigit(secs)
    meriEl.textContent = meri
}

function twoDigit(num) {
    num = String(num)
    return (num.length < 2) ? `0${num}` : num
}
renderClock()

let clockInstance = setInterval(() => {
    var date = new Date()
    hour = date.getHours()
    mins = date.getMinutes()
    secs = date.getSeconds()
    meri = hour < 12 ? 'AM' : 'PM'
    hour = hour % 12;
    renderClock()
}, 1000)
setTimeout(() => {
    clearInterval(clockInstance)
}, 5000)