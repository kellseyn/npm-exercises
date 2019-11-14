"use strict";

import $ from 'jquery';

import {item, thing} from "./practice.js";

$('body').css("background", "cyan");
$('p').css("color", "white");

console.log(item.color);
console.log(thing.type);


import {sayHello} from "./say-hello.js";

console.log(sayHello());

// const sayHello = () => console.log('Hello!');

// sayHello();
