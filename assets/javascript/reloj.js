function clock_format(n) {
    let d = 1;
    if (n >= 100) {
        d++
    }
    return ('0' + n).substring(n.toString().length - d, n.toString().length + 1)
}
function update_Countdown() {
    const seconds = 1000
    const minutes = 60 * seconds
    const hours = 60 * minutes
    const days = 24 * hours
    now = Date.now()
    big_day = new Date("September 6, 2025 18:30:00:00")
    console.log(big_day)
    diff = big_day - now
    document.querySelector("span#seconds").textContent = clock_format(Math.floor(diff / seconds % 60))
    document.querySelector("span#minutes").textContent = clock_format(Math.floor(diff / minutes % 60))
    document.querySelector("span#hours").textContent = clock_format(Math.floor(diff / hours % 24))
    document.querySelector("span#days").textContent = clock_format(Math.floor(diff / days))
}
