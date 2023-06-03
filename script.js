function clock(){
    const hoursArrow  = document.querySelector('.hours')
    const minutsArrow = document.querySelector('.minuts')
    const secondsArrow = document.querySelector('.seconds')
    const hourTime  = document.querySelector('.hourTime')
    const minutTime = document.querySelector('.minutTime')
    const secondTime = document.querySelector('.secondTime')

    const deg = 6
    setInterval(() => {
        const day = new Date()
        const hours = day.getHours() *30
        const minuts = day.getMinutes() * deg
        const seconds = day.getSeconds() * deg
        const hoursTime = day.getHours() 
        const minutsTime = day.getMinutes() 
        const secondsTime = day.getSeconds()


        hoursArrow.style.transform  = `rotateZ(${hours + (minuts / 12)}deg)`
        minutsArrow.style.transform = `rotateZ(${minuts}deg)`
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`
        hourTime.innerHTML = hoursTime;
        minutTime.innerHTML = minutsTime;
        secondTime.innerHTML = secondsTime;
    }, 0)

}
clock();
