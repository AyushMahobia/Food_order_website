// ******* PREVENT SCROLL ******* //
const preventScroll = (e) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
}
// ******* HAMBURGER ******* //
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("#navbar");
const navigation = document.querySelector(".navigation");
const home = document.querySelector(".home");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
    home.classList.toggle("z-index");
    nav_header.addEventListener("wheel", preventScroll);
};
mobile_nav.addEventListener("click", toggleNavbar);

navigation.addEventListener("click", function () {
    nav_header.classList.remove("active");
    home.classList.toggle("z-index");
})


// ******* LOGIN MODEL ******* //
const login_btn = document.querySelector(".login-btn");
const close_modal1 = document.querySelector(".close-one");
const wrapper1 = document.querySelector(".modal-wraper-one");

const signup_btn = document.querySelector("#sign-up");
const wrapper2 = document.querySelector(".modal-wraper-two");
const close_modal2 = document.querySelector(".close-two");

// const
const loginModal = () => {
    wrapper1.classList.add("active-two");
    wrapper1.addEventListener('wheel', preventScroll);
}
const close_login_model = () => {
    wrapper1.classList.remove("active-two");
    close_modal1.removeEventListener('wheel', preventScroll);
}

const signupModel = () => {
    wrapper2.classList.add("active-two");
    wrapper2.addEventListener('wheel', preventScroll);
}
const close_signup_model = () => {
    wrapper2.classList.remove("active-two");
    close_modal2.removeEventListener('wheel', preventScroll);
}
login_btn.addEventListener("click", loginModal);
close_modal1.addEventListener("click", close_login_model);

signup_btn.addEventListener("click", signupModel);
close_modal2.addEventListener("click", close_signup_model);


