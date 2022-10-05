//LOADER
const body = document.querySelector("body");
const loader = document.querySelector(".loader-container");

window.addEventListener("load", () => {
    loader.style.display = "none";
    body.setAttribute("style", "animation: fadeInAnimation ease 3s; animation-iteration-count: 1; animation-fill-mode: forwards;");
});

//CARRUSEL
let slideIndex = 0;
showSlides();
function currentSlide(n) {
    //empieza el timer de nuevo
    clearTimeout(timer);
    //coloca el indice en el slider actual
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    timer = setTimeout(showSlides, 5000); // Change image every 5 seconds -- Variable automaticamente global
}


//STICKY NAV

window.onscroll = function () { myFunction() };

let nav = document.querySelector("nav");

let sticky = nav.offsetTop;
/* console.log(sticky); */
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

    /* console.log(window.pageYOffset); */
}
user_login = () =>{
    let miuser = document.getElementsByClassName("menu2")

    if (micuenta) {
        miuser[1].style.display = "none";
        miuser[0].style.display = "block";
    } else {
        miuser[0].style.display = "none";
        miuser[1].style.display = "block";
    }
}
var micuenta = true;
user_login()




//MICUENTA
const getValueInput = () => {

    // console.log(typeof micuenta)
    let inputValue = document.getElementById("email_log").value;
    if (inputValue == "") {
        micuenta = true;
        const modal = document.querySelector("#ingresedatos");
        openModal(modal);
    } else {
        micuenta = false;
        const modal = document.querySelector("#ingresado_ok");
        openModal(modal);

    }


    user_login()

}

const salirLogin = () => {
    micuenta = true;
    inputValue = "";
    user_login();
}


//MODAL

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay")


openModalButtons.forEach(button => {

    button.addEventListener("click", () => {
        if (button.dataset.modalTarget == "#comprado") {
            if (micuenta == true) {
                const modal = document.querySelector("#loguearse");
                openModal(modal);
            } else {
                const modal = document.querySelector("#exitoso");
                openModal(modal);
            }

        } else {
            const modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        }
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove("active");
    overlay.classList.remove("active");
}

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
        closeModal(modal);
    })
});
