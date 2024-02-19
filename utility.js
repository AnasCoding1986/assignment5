// live link
// https://anascoding1986.github.io/assignment5/

// file link
// https://github.com/AnasCoding1986/assignment5

function addClass(id, classs) {
    let elm = document.getElementById(id);
    elm.classList.add(classs);
}

let clicked = document.getElementById("couponBtn").addEventListener("click", ()=>{
    return true;
})


function applyCoupon() {
    let couponInpElm = document.getElementById("couponInp");
    let couponInpElmTxt = couponInpElm.value;
    let result;
    if (couponInpElmTxt === "NEW15") {
        document.getElementById("couponBtn").removeAttribute("disabled");
        result = 1870;
    }else if (couponInpElmTxt === "Couple 20"){
        document.getElementById("couponBtn").removeAttribute("disabled");
        result = 1760;
    }else if (couponInpElmTxt === ""){
        result = 2200;
    }else if (couponInpElmTxt !== "NEW15" || couponInpElmTxt !== "Couple 20"){
        alert("Not a valid coupon");
    }
    return result;
}

// Get the input element and the button
let inputElement = document.getElementById("couponInp");
let buttonElement = document.getElementById("couponBtn");

// Attach an event listener to the input element
inputElement.addEventListener("input", function() {
    // Check the input value
    var value = this.value.trim(); 

    // Check if the input value matches the specified conditions
    if (value === "NEW15" || value === "Couple 20") {
        // Remove the disabled attribute from the button
        buttonElement.removeAttribute("disabled");
    } else {
        // Add the disabled attribute to the button
        buttonElement.setAttribute("disabled", "disabled");
    }
});


function checkInput() {
    let inputValue = document.getElementById("phoneInp").value;
    let spanValue = parseInt(document.getElementById("seatNum").innerText);

    let submitButton = document.getElementById("nextBtn");

    if ((spanValue >= 1 && spanValue <= 4) && inputValue !== "") {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
}

function hideMain() {
    let firstSection = document.getElementById("first");
    let secondSection = document.getElementById("second");
    firstSection.classList.add("hidden");
    secondSection.classList.remove("hidden");
}
