let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

function start(){
    setInterval(function() {
    milisegundos++;
    if(milisegundos >= 1){
        milisegundos=0;
        segundos++;
        document.getElementById('segundos').innerHTML = segundos;
        console.log(segundos)
    }else if(segundos >= 60){
        minutos++;
        segundos = 0;
        document.getElementById('minutos').innerHTML = minutos;
        console.log(minutos)
    } else if(minutos >= 60){
        horas++;
        minutos = 0;
        segundos = 0;
        document.getElementById('horas').innerHTML = horas;
        console.log(horas)

    }
},1000);
}



function reset(){
    clearInterval(start);
    
}

function pause(){
    clearInterval(start);
}