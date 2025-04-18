const form = document.getElementById('formulario');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
const erroMensagem = document.querySelector('.mensagem-erro');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >=2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    
        const contaBeneficiario = document.getElementById('numero-conta');
        const valorDeposito = document.getElementById('valor');
        const mensagemDeSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente <b>${nomeBeneficiario.value}</b> - conta: <b>${contaBeneficiario.value}</b>`;
        if (formEValido){
            const sucessoMensagem = document.querySelector('.mensagem-sucesso');
            sucessoMensagem.innerHTML = mensagemDeSucesso;  
            sucessoMensagem.style.display = "block";
            erroMensagem.style.display = "none";
            
            nomeBeneficiario.value = ('');
            contaBeneficiario.value = ('');
            valorDeposito.value = ('');
        }else {
            erroMensagem.style.display = "block";
        }
    })
    
nomeBeneficiario.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if(!formEValido){
        nomeBeneficiario.classList.add('error');
        //nomeBeneficiario.style.border = "2px solid red";
        erroMensagem.style.display = "block";
    }else {
        nomeBeneficiario.classList.remove('error');
        //nomeBeneficiario.style.border = "1px solid green";
        erroMensagem.style.display = "none";
    }
});