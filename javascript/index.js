const display = document.getElementById("display");

function appendToDisplay(input){
    display.value = display.value + input;
}

function clearDisplay(){
    display.value = "";
}

function calculateResult(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}