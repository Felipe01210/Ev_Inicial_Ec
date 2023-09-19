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

let opinion_texto = document.querySelector("textarea");
let nombre = document.querySelectorAll("input")[0];
let sat = document.querySelectorAll("input")[1];

let small = document.querySelector("small");

let enviar = document.getElementById("enviar");

nombre.addEventListener("input",() => {
    if(opinion_texto.value.length > 0 && sat.value.length > 0){
        small.textContent = "";
        small.removeAttribute("class");
        enviar.removeAttribute("hidden")
    }
})

sat.addEventListener("input",() => {
    if(opinion_texto.value.length > 0 && nombre.value.length > 0){
        small.textContent = "";
        small.removeAttribute("class");
        enviar.removeAttribute("hidden")
    }
})

opinion_texto.addEventListener("input",() => {
    console.log(nombre.value);
    console.log(sat.value);
    if(nombre.value.length <= 0){
        small.setAttribute("class","error");
        small.textContent = "Nombre obligatorio";
    }
    if(sat.value < 0 || sat.value > 10){
        small.textContent = "La valoración debe estar entre 0 y 10";
        small.setAttribute("class","error");
    }else if(nombre.value.length > 2 && sat.value.length > 0){
        small.textContent = "";
        small.removeAttribute("class");
        enviar.removeAttribute("hidden")
    }
});

sat.addEventListener("input",() => {
    if(sat.value > 10){
        sat.value = sat.value % 10;
    }else if(sat.value < 0){
        sat.value = 0;
    }
})

let opiniones = document.querySelector(".opiniones")

enviar.addEventListener("click", () => {
    let opinion = document.createElement("div");
    opinion.setAttribute("class", "opinion");
    let op_nombre = document.createElement("h4");
    op_nombre.textContent = nombre.value + " " + sat.value;

    let op_texto = document.createElement("p");
    op_texto.textContent = opinion_texto.value;

    opinion.appendChild(op_nombre);
    opinion.appendChild(op_texto);
    opiniones.appendChild(opinion);

    nombre.value = "";
    sat.value = 0;
    opinion_texto.value = "";

    enviar.setAttribute("hidden","true")
})




