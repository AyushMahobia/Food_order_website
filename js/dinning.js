const left_arrow = document.querySelector(".left-arrow");
const right_arrow = document.querySelector(".right-arrow");
const card_list = document.querySelector(".card-list");

let tranformStyle = card_list.style.transform;
let move;
let time = 0;

const moveRight = () => {
    if (time != 4) {
        move = tranformStyle + "translateX(-18.7rem)";
        card_list.style.transform = move;
        tranformStyle = move;
        time++;
    }
}
const moveLeft = () => {
    if (time != 0) {
        move = tranformStyle + "translateX(18.7rem)";
        card_list.style.transform = move;
        tranformStyle = move;
        time--;
    }
}
right_arrow.addEventListener("click", moveRight);
left_arrow.addEventListener("click", moveLeft); 
