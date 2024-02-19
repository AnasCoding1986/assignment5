let chairs = document.querySelectorAll(".seats");
let count = 0;
let Seat1P = document.getElementById("seat1Num");
let Seat2P = document.getElementById("seat2Num");
let Seat3P = document.getElementById("seat3Num");
let Seat4P = document.getElementById("seat4Num");

let Seat1 = document.getElementById("seat1");
let Seat2 = document.getElementById("seat2");
let Seat3 = document.getElementById("seat3");
let Seat4 = document.getElementById("seat4");

let totalPriceSpan = document.getElementById("toatlPrice");
let grandPriceSpan = document.getElementById("grandPrice");


 
for (const chair of chairs) {
    // Attach click event listener to each element
    chair.addEventListener('click', function(e) {
        // Add a class to the clicked element (using e.target)   
        if (count < 4) {
            count = count += 1;
            let selectedSeatNum = document.getElementById("seatNum");
            selectedSeatNum.innerText = count;
            e.target.classList.add('bg-[#1DD100]');
            let remaingSeat = document.getElementById("remainSeat");
            let remaingSeatTxt = remaingSeat.innerText;
            let remaingSeatTxtNum = parseInt(remaingSeat.innerText);
            remaingSeatTxtNum = remaingSeatTxtNum - 1;
            remaingSeat.innerText = remaingSeatTxtNum;
            e.target.setAttribute("disabled", "disabled");
            if (count === 1) {
                Seat1P.innerHTML = e.target.innerText;
                Seat1.classList.remove("hidden");
                totalPriceSpan.innerText = 550;
                grandPriceSpan.innerText = 550;
            }
            else if (count === 2) {
                Seat2P.innerHTML = e.target.innerText;
                Seat2.classList.remove("hidden");
                totalPriceSpan.innerText = 1100;
                grandPriceSpan.innerText = 1100;
            }
            else if (count === 3) {
                Seat3P.innerHTML = e.target.innerText;
                Seat3.classList.remove("hidden");
                totalPriceSpan.innerText = 1650;
                grandPriceSpan.innerText = 1650;
            }
            else if (count === 4) {
                Seat4P.innerHTML = e.target.innerText;
                Seat4.classList.remove("hidden");
                totalPriceSpan.innerText = 2200;
                grandPriceSpan.innerText = 2200;
                document.getElementById("couponBtn").addEventListener("click", ()=>{
                    document.getElementById("couponBtn").classList.add("hidden");
                    document.getElementById("couponInp").classList.add("hidden");
                    
                    let couponInpElm = document.getElementById("couponInp");
                    let couponInpElmTxt = couponInpElm.value;
                    if (couponInpElmTxt === "NEW15") {
                        document.getElementById("applyP").innerText = "You got 330 taka discount";
                        document.getElementById("applyP").classList.remove("hidden");
                        grandPriceSpan.innerText = 1870;
                    }else if(couponInpElmTxt === "Couple 20"){
                        document.getElementById("applyP").innerText = "You got 4400 taka discount";
                        document.getElementById("applyP").classList.remove("hidden");
                        grandPriceSpan.innerText = 1760;
                    }
                })
                             
            }
        }else{
            alert("You can't select more than4 seats!");
        }

    });
}

document.getElementById("phoneInp").addEventListener("input", ()=>{
    checkInput();
})

document.getElementById("continueBtn").addEventListener("click", ()=>{
    let firstSection = document.getElementById("first");
    let secondSection = document.getElementById("second");
    firstSection.classList.remove("hidden");
    secondSection.classList.add("hidden");
})