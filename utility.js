// live link
// https://anascoding1986.github.io/assignment5/

// file link
// https://github.com/AnasCoding1986/assignment5


function addClass(id, classs) {
    let elm = document.getElementById(id);
    elm.classList.add(classs);
}

function applyCoupon() {
    let couponInpElm = document.getElementById("couponInp");
    let couponInpElmTxt = couponInpElm.value;
    let result;
    if (couponInpElmTxt === "NEW15") {
        result = 1870;
    }else if (couponInpElmTxt === "Couple 20"){
        result = 1760;
    }else if(couponInpElmTxt === ""){
        result = 2200;
    }else if(couponInpElmTxt !== "NEW15" || couponInpElmTxt !== "Couple 20"){
        alert("Not a valid coupon");
    }
    return result;
}