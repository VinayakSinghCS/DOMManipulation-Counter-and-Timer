import Counter from './counter/index.js';
import Timer from './timer/index.js';

console.log("script is loading");

const root = document.getElementById('root');
console.log(root);

const counter1 = new Counter();

counter1.mount(root);


const counter2 = new Counter();
counter2.mount(root);

const counter3 = new Counter();
counter3.mount(root);


const timer1 = new Timer();

timer1.mount(root);

const timer2 = new Timer();
timer2.mount(root);