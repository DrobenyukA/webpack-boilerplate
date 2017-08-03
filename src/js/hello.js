import _ from 'lodash';

export function sayHello (){
  alert(_.join(["Hello!","How are you?"], '\n'));
}

export function writeHello(){
    console.log('Hello! \nHow are you?');
}