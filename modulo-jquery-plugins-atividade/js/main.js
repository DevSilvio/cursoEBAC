$(document).ready(function () {
    $('#carousel-imagens').slick({ // o ID não estava correto, estava diferente do que esta no HTML
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000', { // Aqui estava com ".Mascara" que é errado o correto é ".mask"
        placeholder: '(DDD) 12345-6789'
    })
    
    $('#cpf').mask('000.000.000-00', { // Aqui estava com ".Mascara" que é errado o correto é ".mask"
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', { // Aqui estava com ".Mascara" que é errado o correto é ".mask"
        placeholder: '012345-678'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true // Aqui estava escrito "Requerido" que é errado o correto é "required"
            },
            email: {
                required: true, // Aqui estava escrito "Requerido" que é errado o correto é "required"
                email: true
            },
            telefone: {
                required: true // Aqui estava escrito "Requerido" que é errado o correto é "required"
            },
            endereco: {
                required: true // Aqui estava escrito "Requerido" que é errado o correto é "required"
            },
            cep: {
                required: true // Aqui estava escrito "Requerido" que é errado o correto é "required"
            },
            cpf: {
                required: true // Aqui estava escrito "Requerido" que é errado o correto é "required"
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})