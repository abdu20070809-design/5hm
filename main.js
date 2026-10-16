

const formatNum = num => num < 10 ? `0${num} `: num;


const birthdayFunc = () => {

    let day = document.getElementById('day');
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let mainTitle = document.querySelector('h1')

    let now = new Date();
    let bekzat = new Date(2026, 9, 16);


    let difference = (bekzat.getTime() - now.getTime()) / 1000;

    
    if (difference <= 0) {
        day.textContent = '00'
        hour.textContent = '00'
        minute.textContent = '00'
        second.textContent = '00'
        mainTitle.textContent = 'С днем рождения🥳'
        document.body.classList.add('celebrate')


        alert('С днем рожденияю🥳');
        clearInterval(interval)
        return
    }
    let days = Math.floor(difference / 60 / 60 / 24);
    let hours = Math.floor((difference / 60 / 60) % 24);
    let minutes = Math.floor((difference / 60) % 60);
    let seconds = Math.floor((difference) % 60);

    day.textContent = formatNum(days);
    hour.textContent = formatNum(hours);
    minute.textContent = formatNum(minutes);
    second.textContent = formatNum(seconds);

};

birthdayFunc();

let interval = setInterval(() => {
    birthdayFunc();
}, 1000)
