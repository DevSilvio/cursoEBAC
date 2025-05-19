document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();

        function validaNome(nomeCompleto) {
            const palavras = nomeCompleto.trim().split(/\s+/).filter(palavra => /^[a-zA-ZÀ-ÿ]+$/.test(palavra));
            return palavras.length >= 2;
        }
    })
})