let chairs = document.querySelectorAll(".seats");

for (const chair of chairs) {
    chair.addEventListener("click", (e)=>{
        let clickedSeatId = e.target.id;
        addClass("D2", "bgColor");
        console.log(e.target.id);
    })
}
 