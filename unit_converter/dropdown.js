const length = ['Kilometer', 'Meter', 'Centimeter'];
const weight = ['Kilograms', 'Grams', 'Pounds', 'Ounces'];
const temperature = ['Celsius', 'Fahrenheit'];


const lengthConversionRates = {
  Kilometer: 1,
  Meter: 1000,
  Centimeter: 100000,
};


const weightConversionRates = {
  Kilograms: 1,
  Grams: 1000,
  Pounds: 2.20462,
  Ounces: 35.274,
};



function lengthconverter(input,fromunit,tounit){


    const baseval =input / lengthConversionRates[fromunit];
    const outputval = baseval * lengthConversionRates[tounit];

    return outputval;

}

function weightconverter(input,fromunit,tounit){


    const baseval =input / weightConversionRates[fromunit];
    const outputval = baseval * weightConversionRates[tounit];

    return outputval;

}

function temperatureconverter(input,fromunit,tounit){

    let outputval = input;

    if(fromunit === "Celsius" && tounit ==="Fahrenheit"){
        outputval =   (input*9)/5+32;
    }else if(fromunit === "Fahrenheit" && tounit ==="Celsius"){
         outputval = ((input-32)*5)/9;
    }

    return outputval;

}
export{length,weight,temperature,lengthconverter,weightconverter,temperatureconverter};

