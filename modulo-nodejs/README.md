### Sobre NODE JS

- Me surpreendi com node js "sass & scss" senti que ficou mais facil a personalização do CSS e também as divisões separadas por configuração e variaveis e main como principal, achei como fazer HTML. 
- Acho que melhor exemplo para isso é como pegar uma tag tipo "button" e dentro dela da para ir selecionando a classe com &. e logo abaixo já da pra fazer o &:hover e tudo isso dentro da tag button fica muito facil o entendimento sobre qual elemento estou estilizando.


            button {
            @include elementoForm();
            background-color: variaveis.$corSecundaria;
            font-size: 18px;
            font-weight: bold;
            border: none;
            cursor: pointer;
            color: #fff;

            &:hover {
                background-color: lighten(variaveis.$corSecundaria, 15%);
                }
            }



<p align="center">Clique para ver 👇</p>

<p align="center">
    <a href="https://ebac-modulo-nodejs.vercel.app/">
        <img src="images/Página demonstrativa utilizando NODE JS sass scss.png" alt="pagina demonstrativa onde utilizei NODE JS pela primeira vez"></img>
    </a>
</p>