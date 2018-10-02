// ==UserScript==
// @name         Aranzulla
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  simple Anti-AntiADBlocker for aranzulla.it
// @author       Jacopo Carlini
// @match        https://www.aranzulla.it/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function () {
       console.log(document.body.children[9]);
       var elem = document.body.children[9];
       document.body.removeChild(elem);
    }, 5000);
})();
