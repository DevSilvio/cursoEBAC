
$(document).ready(function(){
    const avaliarTarefa = [];

    $('header button').click(function(){
        $('form').slideToggle();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('ol').on('click', 'li', function(){
        $(this).toggleClass('riscaTarefa');
    })

    $('form').on('submit',function(e){
        e.preventDefault();

        const tarefaNova = $('#novaTarefa').val();
        
        if(avaliarTarefa.includes(tarefaNova)){
            alert(`Tarefa: ${tarefaNova} já existe na lista`);
        }else {
            avaliarTarefa.push(tarefaNova);
                const tarefa = $(`<li style="display: none">${tarefaNova}</li>`);
                $(tarefa).appendTo('ol');
                $(tarefa).fadeIn(1000);
            }

        $('#novaTarefa').val('');
    });
})