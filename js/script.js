let count = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let tempo = 0;


function start(){
    if(tempo == 0){
    tempo = setInterval(function() {
    count++;
    segundos = count;
    document.getElementById('segundos').innerHTML = segundos;
    if(count>=60){
        count = 0;
        minutos++;
        document.getElementById('minutos').innerHTML = minutos;
    }else if(count>=60){
        count = 0;
        horas++;
        document.getElementById('horas').innerHTML = horas;
    } 
},1000);
} 
}


function reset(){
    clearInterval(tempo);    
    count = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    tempo = 0;

    document.getElementById('segundos').innerHTML = "00";
    document.getElementById('minutos').innerHTML = "00";
    document.getElementById('horas').innerHTML = "00";

}

function pause(){
    clearInterval(tempo);
    tempo = 0;
}