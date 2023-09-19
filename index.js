let botones = document.querySelectorAll("button")

for (let boton of botones) {
    boton.addEventListener("mouseenter",() => {
        boton.style.background = "red";
    });
    boton.addEventListener("mouseleave",() => {
        boton.style.background = "aquamarine";
    });
    boton.addEventListener("mousedown",() => {
        boton.style.background = "green";
    })
}

let imagenes = document.querySelectorAll(".imagen_gl img")

for (let imagen of imagenes) {
    imagen.addEventListener("mouseover",() => {
        imagen.style.transform = "scale(1.3)";
    });
    imagen.addEventListener("mouseleave",() => {
        imagen.style.transform = "scale(1)";
    });
}

let opinion = document.querySelector("textarea");
let nombre = document.querySelectorAll("input")[0];
let sat = document.querySelectorAll("input")[1];

let enviar = document.getElementById("enviar");

opinion.addEventListener("input",() => {
    if()
    enviar.removeAttribute("hidden")
});




