// Variables globales
var cantidad_eventos =8;
var cantidad_streamings = 12;

//creando clase de eventos

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
var evento1 = new eventoProximo(0, "./img/eventos/elovate.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#elovate", "12/11 Michael Bibi Presents ELOVATE (+18)", "Sábado 12 de Noviembre 2022 - 23:55 hrs.", "<strong>Madero Boardwalk</strong>", "Cecilia Grierson 400 - Puerto Madero")
var evento2 = new eventoProximo(1, "./img/eventos/kalua.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#kalua", "Kalúa (+18)", "Sábado 05 de Noviembre 2022 - 00:00 hrs.", "Club La Octava", "Niceto Vega 5702")
var evento3 = new eventoProximo(2, "./img/eventos/fdd.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#fod", "FOD", "Sábado 20 de Noviembre 2022 - 00:00 hrs.", "Groove", "Santa Fe 5000")
var evento4 = new eventoProximo(3, "./img/eventos/aconcagua.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#aconcagua", "FESTIVAL ACONCAGUA", "Sábado 01 de Octubre 2022 - 00:00 hrs.", "Hipódromo de Palermo", "Av. Libertador 4500")
var evento5 = new eventoProximo(4, "./img/eventos/arch.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#arch", "ARCH ENEMY", "Sábado 21 de Noviembre 2022 - 00:00 hrs.", "Teatro Flores", " Corrientes 4500")
var evento6 = new eventoProximo(5, "./img/eventos/remeneo-evento.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#remened", "REMENED XL", "Sábado 01 de Octubre 2022 - 00:00 hrs.", "Teatro Flores", "Corrientes 4500")
var evento7 = new eventoProximo(6, "./img/eventos/harlem-evento.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#harlem", "HARLEM", "29 y 30 de Octubre de 2022 - 18:00 hrs.", "Estación Belgrano", "Ciudad de Santa Fé")
var evento8 = new eventoProximo(7, "./img/eventos/holofonico.jpg", "a", "img-eventoproximo", "img_text_container", "img_text", "#holofonicos", "Parlantes Holofónicos", "Todos los Jueves de Noviembre a la media noche", "Hipódromo de Palermo", "Av. Libertador 4500")

//arreglo de eventos
var eventos = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento2, evento3, evento1, evento4]
//mostrando eventos
function mostrarEventos() {
    const div_max_eventos = document.querySelector(".eventoproximo");
    if (eventos.length <= cantidad_eventos) {
        for (let i = 0; i < eventos.length; i++) {
            let div0 = document.createElement("div")
            div0.className = "img_container";
            div_max_eventos.appendChild(div0)
        }
        const div_evento = document.getElementsByClassName("img_container");

        for (let i = 0; i < eventos.length; i++) {
            let imagen = document.createElement("img")
            imagen.src = eventos[i].carpeta;
            imagen.className = eventos[i].imgclass;
            div_evento[i].appendChild(imagen)
            let div1 = document.createElement("div")
            div1.className = eventos[i].divclass;
            div_evento[i].appendChild(div1)
        }
        const div_btn = document.getElementsByClassName("img_text_container");
        for (let i = 0; i < div_btn.length; i++) {
            let div2 = document.createElement("div")
            div2.className = eventos[i].btnclass;
            div_btn[i].appendChild(div2)
            btn = document.getElementsByClassName("img_text")
            btn[i].innerHTML = '<button data-modal-target="' + eventos[i].name + '">+INFO</button>';

        }



    } else {
        for (let i = 0; i < cantidad_eventos; i++) {
            let div0 = document.createElement("div")
            div0.className = "img_container";
            div_max_eventos.appendChild(div0)
        }
        divSeparador = document.createElement("div")
        divSeparador.classList.add("separador")
        divSeparador.setAttribute("style", "display:none;")
        div_max_eventos.appendChild(divSeparador)

        for (let i = 0; i < eventos.length - cantidad_eventos; i++) {
            let div0 = document.createElement("div")
            div0.classList.add("img_container", "oculto", "visible")
            div_max_eventos.appendChild(div0)
        }
        const div_evento = document.getElementsByClassName("img_container");

        for (let i = 0; i < eventos.length; i++) {
            let imagen = document.createElement("img")
            imagen.src = eventos[i].carpeta;
            imagen.className = eventos[i].imgclass;
            div_evento[i].appendChild(imagen)
            let div1 = document.createElement("div")
            div1.className = eventos[i].divclass;
            div_evento[i].appendChild(div1)
        }
        const div_btn = document.getElementsByClassName("img_text_container");
        for (let i = 0; i < eventos.length; i++) {
            let div2 = document.createElement("div")
            div2.className = eventos[i].btnclass;
            div_btn[i].appendChild(div2)
            btn = document.getElementsByClassName("img_text")
            btn[i].innerHTML = '<button data-modal-target="' + eventos[i].name + '">+INFO</button>';

        }

    }

}
mostrarEventos()

//creando clase de modales de eventos
class modalesDeEventosProximos {
    constructor(id, titulo, descripcion) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
    }
}

var modalEvento1 = new modalesDeEventosProximos("elovate", "12/11 Michael Bibi Presents ELOVATE (+18)", "Sábado 12 de Noviembre 2022 - 23:55 hrs.<br><br><strong>Madero Boardwalk</strong><br>Cecilia Grierson 400 - Puerto Madero")
var modalEvento2 = new modalesDeEventosProximos("kalua", "Kalúa (+18)", "Sábado 05 de Noviembre 2022 - 00:00 hrs.<br><br><strong>Club La Octava</strong><br>Niceto Vega 5702")
var modalEvento3 = new modalesDeEventosProximos("fod", "FOD", "Sábado 20 de Noviembre 2022 - 00:00 hrs.<br><br><strong>Groove</strong><br>Santa Fe 5000")
var modalEvento4 = new modalesDeEventosProximos("aconcagua", "FESTIVAL ACONCAGUA", "Sábado 01 de Octubre 2022 - 00:00 hrs.<br><br><strong>Hipódromo de Palermo</strong><br>Av. Libertador 4500")
var modalEvento5 = new modalesDeEventosProximos("arch", "ARCH ENEMY", "Sábado 21 de Noviembre 2022 - 00:00 hrs.<br><br><strong>Teatro Flores</strong><br>Corrientes 4500")
var modalEvento6 = new modalesDeEventosProximos("remened", "REMENED XL", "Sábado 01 de Octubre 2022 - 00:00 hrs.<br><br><strong>Teatro Flores</strong><br>Corrientes 4500")
var modalEvento7 = new modalesDeEventosProximos("harlem", "HARLEM", "29 y 30 de Octubre de 2022 - 18:00 hrs.<br><br><strong>Estación Belgrano</strong><br>Ciudad de Santa Fé")
var modalEvento8 = new modalesDeEventosProximos("holofonicos", "Parlantes Holofónicos", "Todos los Jueves de Noviembre a la media noche<br><br><strong>Hipódromo de Palermo</strong><br>Av. Libertador 4500")

//arreglo de modales de eventos
var modalesDeEventos = [modalEvento1, modalEvento2, modalEvento3, modalEvento4, modalEvento5, modalEvento6, modalEvento7, modalEvento8, modalEvento2, modalEvento3, modalEvento1, modalEvento4]

function crearModalesDeEventos() {
    const articleModales = document.querySelector(".modales");
    if (articleModales != null) {
        for (let i = 0; i < modalesDeEventos.length; i++) {
            let div0 = document.createElement("div")
            div0.classList.add("modal")
            div0.id = modalesDeEventos[i].id
            articleModales.appendChild(div0)
        }
        const claseModal = document.querySelectorAll(".modales >.modal");
        for (let i = 0; i < modalesDeEventos.length; i++) {
            let modalHeader = document.createElement("div")
            let modalBody = document.createElement("div")
            modalHeader.classList.add("modal-header")
            modalBody.classList.add("modal-body")
            claseModal[i].appendChild(modalHeader)
            claseModal[i].appendChild(modalBody)
        }

        const claseHeader = document.querySelectorAll(".modales >.modal >.modal-header");
        const claseBody = document.querySelectorAll(".modales >.modal >.modal-body")
        for (let i = 0; i < modalesDeEventos.length; i++) {

            let divTitle = document.createElement("div")
            let closeBtn = document.createElement("button")
            divTitle.classList.add("title")
            divTitle.textContent = modalesDeEventos[i].titulo
            closeBtn.setAttribute("data-close-button", "")
            closeBtn.classList.add("close-button")
            closeBtn.innerHTML = "&times"
            claseHeader[i].appendChild(divTitle)
            claseHeader[i].appendChild(closeBtn)
            let bodyP = document.createElement("p")
            let bodyDivImg = document.createElement("div")
            bodyP.innerHTML = modalesDeEventos[i].descripcion
            bodyDivImg.classList.add("img_text")
            claseBody[i].appendChild(bodyP)
            claseBody[i].appendChild(bodyDivImg)


        }
        const claseImgText = document.querySelectorAll(".modales >.modal >.modal-body >.img_text")
        claseImgText.forEach(div => {
            div.innerHTML = '<button data-modal-target="#comprado"><strong>Comprar</strong></button>'
        })
    }
}
crearModalesDeEventos();

//BOTON VER MAS
function verMasEventos() {
    if (eventos.length > cantidad_eventos) {
        const article = document.querySelector("#eventos >article")
        article.appendChild(document.createElement("br"))
        const h4VerMasBtn = document.createElement("h4")
        const verMasBtn = document.createElement("button")
        h4VerMasBtn.classList.add("img_text", "selector")
        verMasBtn.textContent = "VER TODOS"
        article.appendChild(h4VerMasBtn)
        h4VerMasBtn.appendChild(verMasBtn)
        const divsOcultos = document.querySelectorAll(".oculto")
        verMasBtn.addEventListener("click", () => {
            if (verMasBtn.textContent === "VER TODOS") {
                verMasBtn.textContent = "VER MENOS"
            } else {
                verMasBtn.textContent = "VER TODOS"
            }
            divsOcultos.forEach(div => {
                div.classList.toggle("oculto")
            })
        })
    }
}
verMasEventos()

//LOADER
const body = document.querySelector("body");
const loader = document.querySelector(".loader-container");

window.addEventListener("load", () => {
    loader.style.display = "none";
    body.setAttribute("style", "animation: fadeInAnimation ease 3s; animation-iteration-count: 1; animation-fill-mode: forwards;");
});

//STREAMING

var streaming1 = new eventoProximo(0, "./img/eventos/elovate.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#elovate", "12/11 Michael Bibi Presents ELOVATE (+18)", "Sábado 12 de Noviembre 2022 - 23:55 hrs.", "<strong>Madero Boardwalk</strong>", "Cecilia Grierson 400 - Puerto Madero")
var streaming2 = new eventoProximo(1, "./img/eventos/kalua.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#kalua", "Kalúa (+18)", "Sábado 05 de Noviembre 2022 - 00:00 hrs.", "Club La Octava", "Niceto Vega 5702")
var streaming3 = new eventoProximo(2, "./img/eventos/fdd.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#fod", "FOD", "Sábado 20 de Noviembre 2022 - 00:00 hrs.", "Groove", "Santa Fe 5000")
var streaming4 = new eventoProximo(3, "./img/eventos/aconcagua.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#aconcagua", "FESTIVAL ACONCAGUA", "Sábado 01 de Octubre 2022 - 00:00 hrs.", "Hipódromo de Palermo", "Av. Libertador 4500")
var streaming5 = new eventoProximo(4, "./img/eventos/arch.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#arch", "ARCH ENEMY", "Sábado 21 de Noviembre 2022 - 00:00 hrs.", "Teatro Flores", " Corrientes 4500")
var streaming6 = new eventoProximo(5, "./img/eventos/remeneo-evento.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#remened", "REMENED XL", "Sábado 01 de Octubre 2022 - 00:00 hrs.", "Teatro Flores", "Corrientes 4500")
var streaming7 = new eventoProximo(6, "./img/eventos/harlem-evento.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#harlem", "HARLEM", "29 y 30 de Octubre de 2022 - 18:00 hrs.", "Estación Belgrano", "Ciudad de Santa Fé")
var streaming8 = new eventoProximo(7, "./img/eventos/holofonico.jpg", "a", "img-eventoproximo", "img_text_container_st", "img_text_st", "#holofonicos", "Parlantes Holofónicos", "Todos los Jueves de Noviembre a la media noche", "Hipódromo de Palermo", "Av. Libertador 4500")

//arreglo de streamings
var streamings = [streaming1, streaming2, streaming5, streaming6, streaming7, streaming5, streaming6, streaming7, streaming4, streaming1, streaming2, streaming5, streaming1, streaming2, streaming5, streaming6, streaming1, streaming2, streaming5, streaming6, streaming7, streaming5, streaming6, streaming7, streaming5, streaming6, streaming6, streaming7, streaming8, streaming2, streaming7, streaming2, streaming5, streaming6, streaming7, streaming4, streaming3]

//mostrando eventos

function mostrarStreamings() {
    const div_max_streaming = document.querySelector(".streaming");
    if (streamings.length <= cantidad_streamings) {
        for (let i = 0; i < streamings.length; i++) {
            let div00 = document.createElement("div")
            div00.className = "img_container_st";
            div_max_streaming.appendChild(div00)
        }
        const div_streaming = document.getElementsByClassName("img_container_st");

        for (let i = 0; i < streamings.length; i++) {
            let imagen00 = document.createElement("img")
            imagen00.src = streamings[i].carpeta;
            imagen00.className = streamings[i].imgclass;
            div_streaming[i].appendChild(imagen00)
            let div00 = document.createElement("div")
            div00.className = "img_text_container_live";
            div_streaming[i].appendChild(div00)
            let div10 = document.createElement("div")
            div10.className = streamings[i].divclass;
            div_streaming[i].appendChild(div10)
        }
        const div_btn01 = document.getElementsByClassName("img_text_container_live");
        for (let i = 0; i < div_btn01.length; i++) {
            let div21 = document.createElement("div")
            div21.className = "img_text_live";
            div_btn01[i].appendChild(div21)
            btn01 = document.getElementsByClassName("img_text_live")
            btn01[i].innerHTML = 'DIRECTO';

        }
        const div_btn00 = document.getElementsByClassName("img_text_container_st");
        for (let i = 0; i < div_btn00.length; i++) {
            let div20 = document.createElement("div")
            div20.className = streamings[i].btnclass;
            div_btn00[i].appendChild(div20)
            btn00 = document.getElementsByClassName("img_text_st")
            btn00[i].innerHTML = '<button data-modal-target="' + streamings[i].name + '">VER</button>';

        }


    } else {
        for (let i = 0; i < cantidad_streamings; i++) {
            let div00 = document.createElement("div")
            div00.className = "img_container_st";
            div_max_streaming.appendChild(div00)
        }
        divSeparador = document.createElement("div")
        divSeparador.classList.add("separador")
        divSeparador.setAttribute("style", "display:none;")
        div_max_streaming.appendChild(divSeparador)

        for (let i = 0; i < streamings.length - cantidad_streamings; i++) {
            let div00 = document.createElement("div")
            div00.classList.add("img_container_st", "oculto", "visible")
            div_max_streaming.appendChild(div00)
        }
        const div_streaming = document.getElementsByClassName("img_container_st");

        for (let i = 0; i < streamings.length; i++) {
            let imagen = document.createElement("img")
            imagen.src = streamings[i].carpeta;
            imagen.className = streamings[i].imgclass;
            div_streaming[i].appendChild(imagen)
            let div00 = document.createElement("div")
            div00.className = "img_text_container_live";
            div_streaming[i].appendChild(div00)
            let div1 = document.createElement("div")
            div1.className = streamings[i].divclass;
            div_streaming[i].appendChild(div1)
        }
        const div_btn01 = document.getElementsByClassName("img_text_container_live");
        for (let i = 0; i < div_btn01.length; i++) {
            let div21 = document.createElement("div")
            div21.className = "img_text_live";
            div_btn01[i].appendChild(div21)
            btn01 = document.getElementsByClassName("img_text_live")
            btn01[i].innerHTML = 'DIRECTO';

        }
        const div_btn = document.getElementsByClassName("img_text_container_st");
        for (let i = 0; i < streamings.length; i++) {
            let div2 = document.createElement("div")
            div2.className = streamings[i].btnclass;
            div_btn[i].appendChild(div2)
            btn = document.getElementsByClassName("img_text_st")
            btn[i].innerHTML = '<button data-modal-target="' + streamings[i].name + '">VER</button>';

        }

    }

}
mostrarStreamings()
//BOTON VER MAS STREAMINGS
function verMasStreamings() {
    if (streamings.length > cantidad_streamings) {
        const article = document.querySelector("#streaming >article")
        article.appendChild(document.createElement("br"))
        const h4VerMasBtn = document.createElement("h4")
        const verMasBtn = document.createElement("button")
        h4VerMasBtn.classList.add("img_text", "selector")
        verMasBtn.textContent = "VER TODOS"
        article.appendChild(h4VerMasBtn)
        h4VerMasBtn.appendChild(verMasBtn)
        const divsOcultos = document.querySelectorAll(".oculto")
        verMasBtn.addEventListener("click", () => {
            if (verMasBtn.textContent === "VER TODOS") {
                verMasBtn.textContent = "VER MENOS"
            } else {
                verMasBtn.textContent = "VER TODOS"
            }
            divsOcultos.forEach(div => {
                div.classList.toggle("oculto")
            })
        })
    }
}
verMasStreamings()





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
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

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

    let inputValue = document.getElementById("email_log").value;
    if (inputValue == "") {
        micuenta = true;

        var modal = document.querySelector("#ingresedatos");
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
    var modal2 = document.querySelector("#salido");
    openModal(modal2);
}

var clicks = 0


//MODAL

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay")


openModalButtons.forEach(button => {

    button.addEventListener("click", () => {
        if (button.dataset.modalTarget == "#comprado") {
            if (micuenta) {
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


