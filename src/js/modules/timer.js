const timer = ()=>{


    const deadline = '2022-01-02';

    function getTimeRemaining(endtime) {
        const result = Date.parse(endtime) - new Date();

        const days = Math.floor(result / (1000 * 60 * 60 * 24)),
              hours = Math.floor((result / (1000 * 60 * 60) %  24)), // % 24 отстанот от деления на 24 бо може бути 100 часов
              minutes = Math.floor((result / 1000 / 60) % 60),
              seconds = Math.floor((result / 1000) % 60);
        
        return {
            'result': result,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }
    
    function setTimer(endtime, selector) {

        const timerWrapper = document.querySelector(selector),
              days = timerWrapper.querySelector('#days'),
              hours = timerWrapper.querySelector('#hours'),
              minutes = timerWrapper.querySelector('#minutes'),
              seconds = timerWrapper.querySelector('#seconds');
       
        const timeIntrval = setInterval(updateTimer, 1000);

        function updateTimer() {
            const getTime = getTimeRemaining(endtime);

            days.innerHTML = getTime.days;
            hours.innerHTML = getTime.hours;
            minutes.innerHTML = getTime.minutes;
            seconds.innerHTML = getTime.seconds;

            if(getTime.result <= 0){
                clearInterval(timeIntrval);
            }
        }
        
    }
    setTimer(deadline, '.timer');
};
export default timer;