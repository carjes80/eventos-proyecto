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



//Las funciones crear y borrar cuadros, se encargan de crear un DIV para mostrar los modales de las ventanas emergentes. Al cerrar se borra.
function crearCuadrosModales(id_evento) {
    borrarCuadrosModales() //Se borra el cuadro si existe alguno.
    //Este findIndex busca el indice del arreglo de objetos
    let indice = eventos.findIndex((eventoProximo) => eventoProximo.name == id_evento);
    let id = id_evento.slice(1)
    console.log("El evento es: ", id, "Numero id:", indice)
    if (indice >= 0 || id == "micuenta" || id == "salir") {
        const modal_eventos = document.querySelector(".modales");
        let mod_div = document.createElement("div")
        mod_div.className = "modal";
        mod_div.id = id;
        modal_eventos.appendChild(mod_div)
        asd = document.getElementsByClassName("modal")

        //Acá aprovecho el indice para saber si es un evento
        if (indice >= 0) {//Es un evento, enviamos el mensaje de evento


            asd[0].innerHTML =
                `
    <div class="modal-header">
                        <div class="title"></div>
                        <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p> 
                           
                        </p>
                        <div class="img_text"><button data-modal-target="#comprado" onclick="openModal()"><strong>COMPRAR</strong></button>
                        </div>
                    </div>
    `
            document.querySelector(".title").innerHTML = eventos[indice].titulo
            document.querySelector("p").innerHTML = eventos[indice].cuando + "<br><br><strong>" + eventos[indice].donde + "</strong><br><br>" + eventos[0].direccion
            console.log(document.getElementById("superbotonINNER"))
        } else if (id == "micuenta") {
            asd[0].innerHTML =
                `
            <div class="modal-header">
            <div class="title">Ingresar a Mi Cuenta</div>
            <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="modal-body">
            <div class="contenedor-formulario-contacto">
                <div class="formulario-contacto">
                    <div class="control-formulario">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email_log" name="sender-email"
                            placeholder="Ingreso tu correo electrónico" class="input-field" required />
                    </div>
                    <div class="control-formulario">
                        <label for="password">password</label>
                        <input type="password" id="password" name="password" placeholder="password"
                            class="input-field" required />
                    </div>
                    <br>
                    <button class="submit-btn" type="button" data-modal-target="#ingresado"
                        onclick="getValueInput()">
                        Ingresar
                    </button>
                </div>
            </div>
        </div>`
        } else if (id == "salir") {
            asd[0].innerHTML = `
                    <div class="modal-header">
                        <div class="title">Salir</div>
                        <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="contenedor-formulario-contacto">
                            <div class="formulario-contacto">
                                <p>Confirmar la salida</p>
                                <button class="submit-btn" type="button" data-modal-target="#salido"
                                    onclick="salirLogin()">
                                    Salir
                                </button>
                            </div>
                        </div>
                    </div>
                `
        }
    } else {
        asd[0].innerHTML = `
        <div class="modal-header">
                        <div class="title"></div>
                        <button data-close-button class="close-button">&times;</button>
                    </div>`
        document.querySelector(".title").innerHTML = eventos[indice].titulo
        document.querySelector("p").innerHTML = eventos[indice].cuando + "<br><br><strong>" + eventos[indice].donde + "</strong><br><br>" + eventos[0].direccion
    }

}


function borrarCuadrosModales() {
    const modal_eventos = document.querySelector(".modal");
    if (modal_eventos != null) { modal_eventos.remove("div") }

}
//MENSAJES
class mensajesEmergentes {
    constructor(id, name, titulo, cuando, donde) {
        this.id = id;
        this.name = name;
        this.titulo = titulo

    }
}
var msje_loguearse = new mensajesEmergentes(0, "#loguearse", "Por favor, entre a 'Mi Cuenta' ->> <i class='fa-solid fa-user'></i>")
var msje_ingresado = new mensajesEmergentes(1, "#ingresado_ok", "Registro Exitoso")
var msje_salido = new mensajesEmergentes(2, "#salido", "Hasta luego")
var msje_exitoso = new mensajesEmergentes(3, "#exitoso", "COMPRADO CON ÉXITO")
var msje_ingr_datos = new mensajesEmergentes(4, "#ingresedatos", "Por favor ingrese los datos")
var todos_los_mensajes = [msje_loguearse, msje_ingresado, msje_salido, msje_exitoso, msje_ingr_datos]
var qty_msjes = todos_los_mensajes.length;

//EVENTOS LISTADOS
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
var eventos = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento6, evento7, evento3, evento2, evento1, evento5, evento2, evento2, evento3, evento4, evento1, evento2, evento8, evento1, evento6, evento7, evento3, evento4, evento4, evento6, evento7, evento8, evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8]
var qty_eventos = eventos.length;
var nro_eventos;
verEventos()
console.log(nro_eventos, "nro y ", qty_eventos, "qty")
function verMasEventos() {

    nro_eventos = qty_eventos
    clearEventos()
    mostrarEventos()
    document.querySelector("article").innerHTML =
        `<h4 class="img_text"><button onClick="verEventos()">VER MENOS</button></h4>`
    console.log(nro_eventos, "nro y ", qty_eventos, "qty")

}

function verEventos() {
    if (qty_eventos > 8) {
        nro_eventos = 8
        clearEventos()
        mostrarEventos()
        document.querySelector("article").innerHTML =
            `<h4 class="img_text"><button onClick="verMasEventos()">VER MAS</button></h4>`
        console.log(nro_eventos, "nro y ", qty_eventos, "qty")
    } else {
        nro_eventos = qty_eventos
        console.log(nro_eventos, "nro y ", qty_eventos, "qty")
    }

}

function clearEventos() {
    var clear_eventos = document.querySelector(".eventoproximo");
    while (clear_eventos.firstChild) {
        clear_eventos.removeChild(clear_eventos.firstChild);
    }
}

function mostrarEventos() {

    console.log(nro_eventos)
    const div_max_eventos = document.querySelector(".eventoproximo");
    if (div_max_eventos != null) {
        // console.log(div_max_eventos)
        for (let i = 0; i < nro_eventos; i++) {
            let div0 = document.createElement("div")
            div0.className = "img_container";
            div_max_eventos.appendChild(div0)
        }
        const div_evento = document.getElementsByClassName("img_container");
        // console.log(div_evento, "es un:", typeof div_evento)

        for (let i = 0; i < nro_eventos; i++) {
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
    }

}


// // console.log(div_max_eventos)
// for (let i = 0; i < qty_eventos; i++) {
//     let div0 = document.createElement("div")
//     div0.className = "img_container";
//     div_max_eventos.appendChild(div0)
// }
// const div_evento = document.getElementsByClassName("img_container");
// // console.log(div_evento, "es un:", typeof div_evento)

// for (let i = 0; i < qty_eventos; i++) {
//     let imagen = document.createElement("img")
//     imagen.src = eventos[i].carpeta;
//     imagen.className = eventos[i].imgclass;
//     div_evento[i].appendChild(imagen)
//     let div1 = document.createElement("div")
//     div1.className = eventos[i].divclass;
//     div_evento[i].appendChild(div1)
// }
// const div_btn = document.getElementsByClassName("img_text_container");
// // console.log(div_btn, "es un:", typeof div_evento)
// for (let i = 0; i < div_btn.length; i++) {
//     let div2 = document.createElement("div")
//     div2.className = eventos[i].btnclass;
//     div_btn[i].appendChild(div2)
//     btn = document.getElementsByClassName("img_text")
//     btn[i].innerHTML = '<button data-modal-target="' + eventos[i].name + '">+INFO</button>';

// }
// // console.log(typeof eventos[0].id,eventos[0].id)


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
        const modal2 = document.querySelector("#ingresado_ok");
        openModal(modal2);

    }
    console.log(micuenta)


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
        console.log("Click cualquiera")
        if (button.dataset.modalTarget == "#comprado") {
            console.log("Comprando")

            if (micuenta == true) {
                crearCuadrosModales(button.dataset.modalTarget); //Acá se manda a crear los cuadros modales y se envía el modaltarget para que tenga luego procesar el id
                const modal = document.querySelector("#loguearse");
                openModal(modal);
            } else {
                crearCuadrosModales(button.dataset.modalTarget); //Acá se manda a crear los cuadros modales y se envía el modaltarget para que tenga luego procesar el id
                const modal = document.querySelector("#exitoso");
                openModal(modal);
            }

        } else {
            crearCuadrosModales(button.dataset.modalTarget); //Acá se manda a crear los cuadros modales y se envía el modaltarget para que tenga luego procesar el id
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
    borrarCuadrosModales(); //Se agrega para que se elimine el div creado y se pueda crear otro

}

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach(modal => {
        closeModal(modal);
    })
});

