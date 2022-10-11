//LOADER

const body = document.querySelector("body");
const loader = document.querySelector(".loader-container");

window.addEventListener("load", () => {
    loader.style.display = "none";
    body.setAttribute("style", "animation: fadeInAnimation ease 3s; animation-iteration-count: 1; animation-fill-mode: forwards;");
});

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
user_login = () => {
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
        /* console.log(button.dataset.modalTarget) */
        if (button.dataset.modalTarget == "#comprado") {
            if (micuenta) {
                const modal = document.querySelector("#loguearse");
                /* console.log(modal) */
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

const modalesActivos = document.querySelectorAll(".modal.active");


closeModalButtons.forEach(button => {

    button.addEventListener("click", () => {
        const modalesActivos = document.querySelectorAll(".modal.active");
        //Si hay mas de un modal activo, los cierra a todos
        if (modalesActivos.length > 1) {
            const modales = document.querySelectorAll(".modal.active");
            closeModales(modales);
        } else {
            const modal = button.closest(".modal");
            closeModal(modal);
        }
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

function closeModales(modales) {
    if (modales == null) return
    modales.forEach(modal => {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    })
}

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
        closeModal(modal);
    })
});

//MENU HAMBURGUESA

const bars = document.querySelector(".toggle");

bars.addEventListener("click", () => {
    nav.classList.toggle("navegacion-mobile");
    overlay.classList.toggle("active");
});

const lis = document.querySelectorAll("li");
lis.forEach((li) => {
    li.addEventListener("click", () => {
        nav.classList.remove("navegacion-mobile");
        overlay.classList.remove("active");
    });
});

overlay.addEventListener("click", () => {
    nav.classList.remove("navegacion-mobile");
    overlay.classList.remove("active");
});

//AGREGANDO TOP: 0 PARA QUE EL NAV SE POSICIONE ARRIBA
/* nav.setAttribute("style", "top: 0;")
toggle.setAttribute("style", "top: 0") */


const accordionBtn = document.querySelectorAll(".faq")
const plus = document.querySelectorAll(".plus")
const respuestas = document.querySelectorAll(".respuesta")

for (let i = 0; i < accordionBtn.length; i++) {

    accordionBtn[i].addEventListener("click", () => {
        const withoutCurrent = [...accordionBtn].filter(index => index !== accordionBtn[i]) //Para eliminar las clases activado y rotate cuando se presiona otro boton
        const withoutCurrentPlus = [...plus].filter(index => index !== plus[i])
        const withoutCurrentRespuestas = [...respuestas].filter(index => index !== respuestas[i])
        console.log(withoutCurrentRespuestas)
        withoutCurrent.forEach(element => {
            element.classList.remove("activado")
        })
        withoutCurrentPlus.forEach(element => {
            element.classList.remove("rotate")
        })
        withoutCurrentRespuestas.forEach(element => {
            element.style.maxHeight = null;
        })
        accordionBtn[i].classList.toggle("activado")
        plus[i].classList.toggle("rotate")

/*         if (respuesta.style.display === "block") {
            respuesta.style.display = "none"
        } else {
            respuesta.style.display = "block"
        } */
        const respuesta = accordionBtn[i].nextElementSibling
        console.log(respuesta.style.maxHeight) 
        console.log(respuesta.scrollHeight) 
        if (respuesta.style.maxHeight) {
            respuesta.style.maxHeight = null;
        } else {
            respuesta.style.maxHeight = respuesta.scrollHeight + "px" 
        }
    })
    
    
}

