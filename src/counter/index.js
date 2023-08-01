
class Counter{
    constructor(){
        this.count = 0;
        
    }

    increment(){
        this.count++;
    }

    decrement(){
        this.count--;
    }

    reset(){
        this.count = 0;
    }

    render(){
        // create elements
        const counterComponent = document.createElement("div");
        const counterValue = document.createElement("p");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");
        const resetButton = document.createElement("button");


        //initial value of the component
        counterValue.innerText = '0';
        incrementButton.innerText = '+';
        decrementButton.innerText = '-';
        resetButton.innerText = 'reset';
    
        // give every element id
        counterComponent.classList.add('counter-component');
        counterValue.classList.add('counter-value');
        incrementButton.classList.add('incrementButton');
        decrementButton.classList.add('decrementButton');
        resetButton.classList.add('resetButton');

        // add event listener (should append unique id for every instance)
        incrementButton.addEventListener('click',()=>{
            this.increment();
            counterValue.innerText = this.count;
        })

        decrementButton.addEventListener('click',()=>{
            this.decrement();
            counterValue.innerText = this.count;
        })

        resetButton.addEventListener('click',()=>{
            this.reset();
            counterValue.innerText = this.count;
        })

        // append child to parent 

        counterComponent.appendChild(counterValue);
        counterComponent.appendChild(incrementButton);
        counterComponent.appendChild(decrementButton);
        counterComponent.appendChild(resetButton);


        console.log(counterComponent);

        return counterComponent;
        
    }


    mount(el){
        el.appendChild(this.render());
    }
}

export default Counter;