const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const errocampoA = document.querySelector('.campoA');
const errocampoB = document.querySelector('.campoB');
const mensagem = document.querySelector('.mensagemSucesso');
const erroMensagem = document.querySelector('.mensagemErro');
const mensagemDeSucesso = `Correto! Campo B: <b>${campoB.value}</b> é maior que campo A: <b>${campoA.value}</b>`;
const mensagemDeErro = `ERRO! Campo A: <b>${campoA.value}</b> é maior que campo B: <b>${campoB.value}</b>`;
const mensagemEmpate = document.querySelector('.mensagemEmpate');
let formValido = false;

function validaCampos(){
    let valido = true;
    errocampoA.style.display='none';
    errocampoB.style.display='none';
    campoA.style.borde='';
    campoA.style.borde='';

    if(!campoA.value || campoA.value < 1){
        errocampoA.style.display='block';
        campoA.style.border = '2px solid red';
        valido = false;
    }

    if(!campoB.value || campoB.value < 1){
        errocampoB.style.display = 'block';
        campoB.style.border = '2px solid red';
        valido = false;
    }

    return valido;
}

function comparaCampos() {
    const valorA = +campoA.value; //convertendo string para num utilizando sinal de "+"
    const valorB = parseFloat(campoB.value);//convertendo string para num utilizando "parseFloat"

    mensagem.innerHTML = mensagemDeSucesso;
    mensagem.style.display='none';
    erroMensagem.innerHTML = mensagemDeErro;
    erroMensagem.style.display='none;'

    if (valorB > valorA){
        mensagem.style.display='block';
    }else if (valorA > valorB){
        erroMensagem.style.display='block';
    }else if (valorA === valorB){
        mensagemEmpate.style.display='block'
    }
}

campoA.addEventListener('keyup', function(){
    if(!campoA.value || campoA.value < 1){
        errocampoA.style.display='block';
        campoA.style.border = '2px solid red';
    }else {
        errocampoA.style.display='none';
        campoA.style.border = '';
    }
});

campoB.addEventListener('keyup', function(){
    if(!campoB.value || campoB.value < 1){
        errocampoB.style.display='block';
        campoB.style.border = '2px solid red';
    }else {
        errocampoB.style.display='none';
        campoB.style.border = '';
    }
});

form.addEventListener('submit', function(e){
    e.preventDefault();

        validaCampos();
        comparaCampos();
        campoA.value='';
        campoB.value='';
});
