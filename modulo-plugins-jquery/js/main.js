$(document).ready(function(){
    $('#carousel-img').slick({
        autoplay:true,
    })

    $('.menu-hamburguer').click(function(e){
        e.stopPropagation();
        $('nav').slideToggle();
    })

    $(document).click(function(event){
        if(!$(event.target).closest('nav, .menu-hamburgue').length) {
            if($('nav').is(':visible')){
                $('nav').slideUp();
            }
        }
    })
    
    $('#telefone').mask('(00) 0 0000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor insira seu nome',
            telefone: 'Insira seu telefone',
            email: 'Coloque seu melhor email',
            mensagem: 'Escreva aqui sua mensagem'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.listaVeiculos button').click(function(){
        const destino = $('#contato');

        const veiculoInteressado = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(veiculoInteressado);
        
        $('html').animate({
            scrollTop: destino.offset().top
        },1000);
    })
})