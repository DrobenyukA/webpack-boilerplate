import sayHello from './hello.js';
import styles from '../scss/main.scss';

var container = document.getElementById('app');
var btn = document.createElement('BUTTON');

container.innerHTML = "APP CONTAINER";

btn.innerHTML = 'Say hello';
btn.onclick = sayHello;

container.appendChild(btn);