let muestra = document.getElementById('xi');
let muestraD = document.getElementById('xiD');
let muestraP = document.getElementById('xiP');
let nMedia = document.getElementById('n')
let n = document.getElementById('nM');
let m = document.getElementById('m');
let nP = document.getElementById('nP')
let desviacionE = document.getElementById('desviacionE');
let submit = document.getElementById('buttonMedia');
let main = document.querySelector('main');



let failedM = document.getElementById('failedM');
let failedD = document.getElementById('failedD')
let failedV = document.getElementById('failedV')
let failedP = document.getElementById('failedP')


let valuetoShow = document.getElementById('showMedia');
let desviacionShow = document.getElementById('showDesviacion');
let mediaShow = document.getElementById('showVarianza');
let varianzaShow = document.getElementById('showVarianza');
let proporcionShow = document.getElementById('showProporcion');




let desviacionEstandar = document.getElementById('desviacionEstandar');
let buttonDesviacion = document.getElementById('buttonDesviacion');
let buttonVarianza = document.getElementById('buttonVarianza');
let buttonProporcion = document.getElementById('buttonProporcion');


let media = document.getElementById('media');
let varianza = document.getElementById('varianza');
let proporcion = document.getElementById('proporcion');

let values = document.querySelectorAll('.main');

let cDesviacionEstandar = document.querySelector('.cDesviacionEstandar');
let cMedia = document.querySelector('.cMedia');
let cVarianza = document.querySelector('.cVarianza');
let cProporcion = document.querySelector('.cProporcion');


media.addEventListener('click', () => {
    if (!cMedia.classList.contains('active')){
        cDesviacionEstandar.classList.remove('active')
        cVarianza.classList.remove('active')
        cProporcion.classList.remove('active')
        cMedia.classList.add('active')
    }
})



desviacionEstandar.addEventListener('click', () => {
    if (!cDesviacionEstandar.classList.contains('active')){
        cVarianza.classList.remove('active')
        cMedia.classList.remove('active')
        cProporcion.classList.remove('active')
        cDesviacionEstandar.classList.add('active')
    }
})

varianza.addEventListener('click', () => {
    if (!cVarianza.classList.contains('active')){
        cMedia.classList.remove('active')
        cDesviacionEstandar.classList.remove('active')
        cProporcion.classList.remove('active')
        cVarianza.classList.add('active')

    }
})

proporcion.addEventListener('click', () => {
    if (!cProporcion.classList.contains('active')){
        cMedia.classList.remove('active')
        cDesviacionEstandar.classList.remove('active')
        cVarianza.classList.remove('active')
        cProporcion.classList.add('active')
    }
})


submit.addEventListener('click', (e) => {
    if(muestra.value != '' && n != ''){
        failedM.classList.remove('active')
        let numbers = muestra.value.split(',');
        numbers = numbers.reduce((acumulador, valor) => acumulador + parseInt(valor), 0);
    
        result = numbers / parseInt(nMedia.value)
        valuetoShow.textContent = 'El resultado es igual a ' + result;
        valuetoShow.classList.add('show')
    }

    else{
        failedM.classList.add('active')
    }

})

buttonDesviacion.addEventListener('click', () => {

    if(muestraD.value != '' && n != ''){
        failedD.classList.remove('active')
        let numbers = muestraD.value.split(',');
        numbers = numbers.reduce((acumulador, valor) =>acumulador + Math.pow(parseInt(valor) - parseInt(m.value), 2), 0);

        result = numbers / parseInt(n.value);

        desviacionShow.textContent = 'El resultado es ' + result;

        desviacionShow.classList.add('show');
    }
    else{
        failedD.classList.add('active')
    }

})

buttonVarianza.addEventListener('click', () => {
    if(desviacionE.value != ''){
    failedV.classList.remove('active')
    result = Math.sqrt(parseInt(desviacionE.value));
    varianzaShow.textContent = 'El resultado es ' + result;
    varianzaShow.classList.add('show');
    }
    else{
        failedV.classList.add('active')
    }

})

buttonProporcion.addEventListener('click', () => {
    if(muestraP.value != '' & nP.value != ''){
    failedP.classList.remove('active')
    let numbers = muestraP.value.split(',');
    numbers = numbers.reduce((acumulador, valor) => acumulador + parseInt(valor), 0)
    result = numbers / parseInt(nP.value)

    proporcionShow.textContent = 'El resultado es ' + result;
    proporcionShow.classList.add('show')
    }
    else{
        failedP.classList.add('active')
    }
})














