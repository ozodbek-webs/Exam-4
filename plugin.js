"use strict";

// SELECTOR PLUGIN  //

const $ = function(selector){
     return document.querySelector(selector)
}
const $all = function(selector){
    return document.querySelectorAll(selector)
}

// CREATE PLUGIN //
const create = function (tagName, className, textName){
    const name = document.createElement(tagName);
    if(className){
        name.classList.toggle("class",className);
    }
    if(textName){
        name.innerHTML=textName;
    }
    return name
}