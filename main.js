




function calcular() {
    let calificacion = document.getElementById("calificacion").value
    if (calificacion >= 0 && calificacion <= 3) {
        document.getElementById("resultado").textContent="Muy deficiente"       
    }else if(calificacion >3 && calificacion <=5){
        document.getElementById("resultado").textContent="insuficiente"
    }else if (calificacion >5 && calificacion <=6) {
        document.getElementById("resultado").textContent="suficiente"
    }else if (calificacion >6 && calificacion <=7) {
        document.getElementById("resultado").textContent="bien"
    }else if (calificacion >7 && calificacion <=9) {
        document.getElementById("resultado").textContent="notable"
    }else if (calificacion >9 && calificacion <=10) {
        document.getElementById("resultado").textContent="sobresaliente"
    
    }else{
        document.getElementById("resultado").textContent="ingrese un numero valido perro"
    }
    
}