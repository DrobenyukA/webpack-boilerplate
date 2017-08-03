import _ from 'lodash';
import { sayHello } from './hello.js';

var container = document.getElementById('app');
var btn = document.createElement('BUTTON');

container.innerHTML = _.join(["APP", "CONTAINER"], ' ');

btn.innerHTML = 'Say hello';
btn.onclick = sayHello;

container.appendChild(btn);