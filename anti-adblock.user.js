// ==UserScript==
// @name         Aranzulla
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  simple Anti-AntiADBlocker for aranzulla.it
// @author       Jacopo1395
// @match        https://www.aranzulla.it/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function () {
       var elem = document.body.children[9];
       document.body.removeChild(elem);
       console.log("done!");
    }, 5000);
})();
