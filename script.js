function clock(){
    const hoursArrow  = document.querySelector('.hours')
    const minutsArrow = document.querySelector('.minuts')
    const secondsArrow = document.querySelector('.seconds')

    const deg = 6
    setInterval(() => {
        const day = new Date()
        const hours = day.getHours() *30
        const minuts = day.getMinutes() * deg
        const seconds = day.getSeconds() * deg

        hoursArrow.style.transform  = `rotateZ(${hours + (minuts / 12)}deg)`
        minutsArrow.style.transform = `rotateZ(${minuts}deg)`
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`
    }, 0)

}
clock();
