import {length,weight,temperature,lengthconverter,weightconverter,temperatureconverter} from "./dropdown.js";

const selects = document.querySelectorAll(".form-select");
const output = document.getElementById("output");
const buttton = document.querySelector("button");
const toselect = document.getElementById('s2');
const fromselect = document.getElementById('s1');
const units = document.querySelectorAll('input[name="btnradio"]');

let currentUnits= length;
let f =lengthconverter;
populatedropdown();

units.forEach(unit =>{

    unit.addEventListener("change",()=>{

    if (unit.id === "btnradio1") {
        currentUnits = length;
        f=lengthconverter;
      } else if (unit.id === "btnradio2") {
        currentUnits = weight;
        f=weightconverter;
      } else if (unit.id === "btnradio3") {
        currentUnits = temperature;
        f=temperatureconverter;
      }

      populatedropdown();
    });
});

function populatedropdown(){
selects.forEach(select => {

    select.innerHTML = "";
    currentUnits.forEach(unit =>{

        const element = document.createElement("option");

        element.value=unit;
        element.text=unit;
        select.appendChild(element);
 
    });
});
};
 
buttton.addEventListener("click",()=>{

    const fromunit =fromselect.value;
    const tounit=toselect.value;
    const input = document.getElementById("v").value;
    output.textContent= f(input,fromunit,tounit);

});

  


