import sayHello from './hello.js';
import '../css/styles.css';


var container = document.getElementById('app');
var btn = document.createElement('BUTTON');
var br = document.createElement('BR');

container.innerHTML = "APP CONTAINER";
container.className = "text-center";

btn.innerHTML = 'Say hello';
btn.className = 'btn btn-success';
btn.onclick = sayHello;

if (module.hot) {
    module.hot.accept('./hello.js', function () {
        btn.onclick = sayHello;
    })
}

container.appendChild(br);
container.appendChild(btn);