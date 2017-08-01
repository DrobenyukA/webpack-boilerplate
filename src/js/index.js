import sayHello from './hello.js'

let container = document.getElementById('app');
let btn = document.createElement('BUTTON');

container.innerHTML = "APP CONTAINER";

btn.innerHTML = 'Say hello';
btn.onclick = sayHello;

container.appendChild(btn);