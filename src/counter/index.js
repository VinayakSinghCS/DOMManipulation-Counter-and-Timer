
class Counter{
    constructor(){
        this.count = 0;
        this.counterValue = null;
    }

    increment(component){
        console.log("inside increment");
        this.count++;
        this.updateDOM()
    }

    decrement(){
        this.count--;
        this.updateDOM();
    }

    reset(){
        this.count = 0;
        this.updateDOM();
    }

    updateDOM(component){
        this.counterValue.innerText = this.count;
    }

    render(){
        // create elements
        const counterComponent = document.createElement("div");
        this.counterValue = document.createElement("p");
        const incrementButton = document.createElement("button");
        const decrementButton = document.createElement("button");
        const resetButton = document.createElement("button");


        //initial value of the component
        this.counterValue.innerText = '0';
        incrementButton.innerText = '+';
        decrementButton.innerText = '-';
        resetButton.innerText = 'reset';
    
        // give every element id
        counterComponent.classList.add('counter-component');
        this.counterValue.classList.add('counter-value');
        incrementButton.classList.add('incrementButton');
        decrementButton.classList.add('decrementButton');
        resetButton.classList.add('resetButton');

        // add event listener (should append unique id for every instance)
        incrementButton.addEventListener('click',this.increment.bind(this))

        decrementButton.addEventListener('click',this.decrement.bind(this))

        resetButton.addEventListener('click',this.reset.bind(this))

        // append child to parent 

        counterComponent.appendChild(this.counterValue);
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