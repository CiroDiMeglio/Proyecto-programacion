const btnNocturno = document.querySelector("#Nocturno");
 
btnNocturno.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnNocturno.classList.toggle("active");
 
})
 
let alumno = "true"
let desconocido = "true"

alert (prompt("¿Ya eres alumno?"))
(alumno) ? "Un gusto volver a verte" : "Bienvenido a Theatre Studio" 

