"use strict"

const convert_button = document.getElementById("convert-button");
const convert_form = document.getElementById("convert-form");

convert_form.addEventListener('submit', (e)=>{
    e.preventDefault();
})

convert_button.addEventListener('click', (e)=> {
    
    const input_field = document.getElementById("temperature-input");
    const results_element = document.getElementById("results");
    
    const input = Number(input_field.value);
    
    if (Number.isNaN(input)) {
        input_field.className = 'error';
        results_element.innerText = "That is not a Number!";
        results_element.className = 'error';
        return;
    } else {
        input_field.className = "";
        results_element.className = '';
    }
    
    const result = (input - 32) * 5/9;
    results_element.innerText = result.toFixed(2) + " Celsius";
})