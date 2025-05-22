document.addEventListener('DOMContentLoaded', function(){

    const nomeUsuario = document.getElementById('nomeCompleto');
    const nomeErro = document.querySelector('.nomeErro');
    const valores = document.getElementById('valor');
    const textarea = document.getElementById('textarea');
    const numeroDaConta = document.getElementById('numeroConta');
    let formValido = false;
    
    function validaNome(nomeCompleto) {
        const palavras = nomeCompleto.trim().split(/\s+/).filter(palavra => /^[a-zA-ZÀ-ÿ]+$/.test(palavra));
        return palavras.length >= 2;
    }

    function formatarConta(valor) {
        let numeros = valor.replace(/\D/g, '');
        numeros = numeros.slice(0, 6);
        if (numeros.length > 5) {
            return numeros.slice(0, 5) + '-' + numeros.slice(5);
        } else {
            return numeros;
        }
    }

    function validaConta(valor) {
        const regex = /^\d{5}-\d{1}$/;
        return regex.test(valor);
    }

    numeroDaConta.addEventListener('input', function(e) {
        e.target.value = formatarConta(e.target.value);
        const valor = numeroDaConta.value;
        if(!validaConta(valor)) {
            numeroDaConta.classList.add('erro');
        }else {
            numeroDaConta.classList.remove('erro');
        }
    });

    valores.addEventListener('input', function(e) {
        let valorDeposito = e.target.value;

        valorDeposito = valorDeposito.replace(/\D/g, '');

        const numeroDepositado = parseFloat(valorDeposito) / 100;

        const valorFormatado = numeroDepositado.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });

        e.target.value = valorFormatado;
    })

    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();

        const contaBancaria = document.getElementById('numeroConta');
        const mensagemSucesso = `Montante de <b>${valores.value}</b> depositado para o usuario <b>${nomeUsuario.value}</b> - conta: <b>${contaBancaria.value}</b>`;

        if (formValido) {
            const sucesso = document.querySelector('.mensagemSucesso');
            sucesso.innerHTML = mensagemSucesso;
            sucesso.style.display = "block";
            nomeErro.style.display = "none";

            nomeUsuario.value = ('');
            contaBancaria.value = ('');
            valores.value = ('');
            textarea.value = ('');
        } else {
            nomeErro.style.display = "block";
        }
    })

    nomeUsuario.addEventListener('keyup', function(e){
        console.log(e.target.value);
        formValido = validaNome(nomeUsuario.value);

        if(!formValido) {
            nomeUsuario.classList.add('erro');
            nomeErro.style.display = "block";
        } else {
            nomeUsuario.classList.remove('erro');
            nomeErro.style.display = "none";
        }
    })
})