const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");
const card_list = document.querySelector(".card-list");

let tranformStyle = card_list.style.transform;
// console.log(tranformStyle);
const moveLeft = () => {
    const move = "-20.3rem";
    if(tranformStyle != 82)
    {
        card_list.style.transform = "translateX(-20.3rem)";
    }
}

left_arrow.addEventListener("click", moveLeft); 