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


//EVENTOS LISTADOS
var id_evento;


function cuadrosModales(id_evento) {
    const id = id_evento.slice(1)
    console.log(id)
    const modal_eventos = document.querySelector(".modales");
    console.log(modal_eventos)
    let mod_div = document.createElement("div")
    mod_div.className = "modal";
    mod_div.id = id;
    modal_eventos.appendChild(mod_div)
    asd = document.getElementsByClassName("modal")
    asd[0].innerHTML =
        `
    <div class="modal-header">
                        <div class="title"></div>
                        <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p> 
                           
                        </p>
                        <div class="img_text"><button data-modal-target="#comprado"><strong>Comprar</strong></button>
                        </div>
                    </div>
    `
    document.querySelector(".title").innerHTML=eventos[0].titulo
    document.querySelector("p").innerHTML=eventos[0].cuando+"<br><br><strong>"+eventos[0].donde+"</strong><br><br>"+eventos[0].direccion




}

class eventoProximo {
    constructor(id, carpeta, alter, imgclass, divclass, btnclass, name, titulo, cuando, donde, direccion) {
        this.id = id
        this.carpeta = carpeta
        this.alter = alter
        this.imgclass = imgclass
        this.divclass = divclass
        this.btnclass = btnclass
        this.name = name
        this.titulo = titulo
        this.cuando = cuando
        this.donde = donde
        this.direccion = direccion
    }

}
var evento1 = new eventoProximo(0, "./img/eventos/elovate.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate","12/11 Michael Bibi Presents ELOVATE (+18)","Sábado 12 de Noviembre 2022 - 23:55 hrs.","<strong>Madero Boardwalk</strong>","Cecilia Grierson 400 - Puerto Madero")
var evento2 = new eventoProximo(1, "./img/eventos/kalua.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#kalua")
var evento3 = new eventoProximo(2, "./img/eventos/fdd.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate")
var evento4 = new eventoProximo(3, "./img/eventos/aconcagua.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate")
var evento5 = new eventoProximo(4, "./img/eventos/arch.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate")
var evento6 = new eventoProximo(5, "./img/eventos/remeneo-evento.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate")
var evento7 = new eventoProximo(6, "./img/eventos/harlem-evento.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate")
var evento8 = new eventoProximo(7, "./img/eventos/holofonico.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate")
var eventos = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8]
var max_eventos = eventos.length;

if (max_eventos > 24) { max_eventos = 24 }

const div_max_eventos = document.querySelector(".eventoproximo");
// console.log(div_max_eventos)
for (let i = 0; i < max_eventos; i++) {
    let div0 = document.createElement("div")
    div0.className = "img_container";
    div_max_eventos.appendChild(div0)
}
const div_evento = document.getElementsByClassName("img_container");
// console.log(div_evento, "es un:", typeof div_evento)

for (let i = 0; i < max_eventos; i++) {
    let imagen = document.createElement("img")
    imagen.src = eventos[i].carpeta;
    imagen.className = eventos[i].imgclass;
    div_evento[i].appendChild(imagen)
    let div1 = document.createElement("div")
    div1.className = eventos[i].divclass;
    div_evento[i].appendChild(div1)
}
const div_btn = document.getElementsByClassName("img_text_container");
// console.log(div_btn, "es un:", typeof div_evento)
for (let i = 0; i < div_btn.length; i++) {
    let div2 = document.createElement("div")
    div2.className = eventos[i].btnclass;
    div_btn[i].appendChild(div2)
    btn = document.getElementsByClassName("img_text")
    btn[i].innerHTML = '<button data-modal-target="' + eventos[i].name + '">+INFO</button>';

}
// console.log(typeof eventos[0].id,eventos[0].id)


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

        cuadrosModales(button.dataset.modalTarget);
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

