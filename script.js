const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "-"];
let output = "";

//Define funtion to calculate based on button clicked :D
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        //if output has '%' replace with '/100' before evaluating :D
        output = eval(output.replace("%", "/100"));

    } else if (btnValue === "AC") {
        output = " ";
    } else if (btnValue === "DEL") {
        //If DEL button is clicked, remove the last character from the output
        output = output.toString().slice(0, -1);
    } else {
        //If output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
display.value = output;
};

// add event listener to buttons, call calculate() on click :D
buttons.forEach((button) => {
    //button click listener calls calculate() with data set value as argument
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});