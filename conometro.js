let ss = 0
let mm = 0
let hh = 0
let id = 0

let ss2 = 0
let mm2 = 0
let hh2 = 0

let tempo = 10
let conometro;
let inter;
let table = document.getElementById('table')
let tbody = document.createElement('tbody')
let pausa = true
let inicia = false



table.appendChild(tbody)

function iniciar(){

    pausa = true
    inicia = true
    conometro = setInterval(() => { 
        comecar()
   }, tempo);

}
function pausar(){
 clearInterval(conometro)
 clearInterval(inter)
 pausa = false
}
function zerar(){
    ss = 0
    mm = 0
    hh = 0

    ss2 = 0
    mm2 = 0
    hh2 = 0

    let tela  = document.getElementById('tela')
    tela.innerText = "00:00:00"
    pausar()
    pausa = false

}
function comecar(){
    ss++
    if(ss > 59){
        ss = 0
        mm++
    }else if(mm > 59){
        mm = 0 
        hh++
    }
    let tela  = document.getElementById('tela')
    tela.innerText = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`

}
function marcar(){
    if(inicia){
    id++
    let tr = tbody.insertRow()
    tr.insertCell(0).innerText = id
    tr.insertCell(1).innerText = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`
    let td3 = tr.insertCell(2)
    if(id > 1){
       td3.innerText = `${hh2 < 10 ? `0${hh2}` : hh2}:${mm2 < 10 ? `0${mm2}` : mm2}:${ss2 < 10 ? `0${ss2}` : ss2}`
       clearInterval(inter)
        ss2 = 0
        mm2 = 0
        hh2 = 0
        if(pausa){
            inter = setInterval(() => { 
                intervalo()
            }, tempo);
        }
    }else{
        td3.innerText = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`
        if(pausa){
        inter = setInterval(() => { 
            intervalo()
       }, tempo); 
    }
    }
}
}
function intervalo(){
    ss2++
    if(ss2 > 59){
        ss2 = 0
        mm2++
    }else if(mm2 > 59){
        mm2 = 0 
        hh2++
    }

}
function limpar(){
    window.location.reload(true);

}

