class Timer{
    constructor(){
        this.interval = 0;
    }

    start(hours,minutes,seconds){
        console.log("inside start");

        this.interval = window.setInterval(function (){
            if(Number(seconds.innerHTML) === 59){
                seconds.innerHTML = '0';
                if(Number(minutes.innerHTML) === 59){
                    minutes.innerHTML = '0';
                    if(Number(hours.innerHTML) === 23){
                        hours.innerHTML = '0';
                    }else
                    hours.innerHTML = Number(hours.innerHTML) + 1;
                }else   
                    minutes.innerHTML = Number(minutes.innerHTML) + 1;
            }else
                seconds.innerHTML = Number(seconds.innerHTML) + 1;
        },100)
    }

    stop(){
        console.log("inside stop");
        clearInterval(this.interval);
    }

    reset(hours,minutes,seconds){
        console.log("inside reset");
        this.stop();
        hours.innerHTML = '00';
        minutes.innerHTML = '00';
        seconds.innerHTML ='00';
    }

    render(){
        // needed components
        const timerComponent = document.createElement("div");
        const timerHours = document.createElement("span");
        const timerMinutes = document.createElement("span");
        const timerSeconds = document.createElement("span");
        const breakIt = document.createElement("br");
        const startButton = document.createElement('button');
        const stopButton = document.createElement('button');
        const resetButton = document.createElement('button');

        // make them related
        timerComponent.appendChild(timerHours);
        timerComponent.appendChild(timerMinutes);
        timerComponent.appendChild(timerSeconds);
        timerComponent.appendChild(breakIt);
        timerComponent.appendChild(startButton);
        timerComponent.appendChild(stopButton);
        timerComponent.appendChild(resetButton);


        // add there value;
        timerHours.innerText = "00";
        timerMinutes.innerText = "00";
        timerSeconds.innerText = "00";
        startButton.innerText = "start";
        stopButton.innerText = "stop";
        resetButton.innerText = "reset";


        // add event listener
        startButton.addEventListener('click',()=>{
            this.start(timerHours,timerMinutes,timerSeconds);
        })

        stopButton.addEventListener('click',()=>{
            this.stop();
        })

        resetButton.addEventListener('click',()=>{
            this.reset(timerHours,timerMinutes,timerSeconds);
        })

        return timerComponent;
    }

    mount(el){
        el.appendChild(this.render());
    }
}

export default Timer;