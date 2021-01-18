(function () {
    //    função para ocultar o menu
    var $html = document.querySelector('html');
    var $btn = document.querySelector('.header-nav__hamburgger');

    var ariaControl = $btn.getAttribute('aria-controls');

    var $menu = document.getElementById(ariaControl);

    $btn.addEventListener('click', oculta);
    $html.classList.remove('no-js');
    $html.classList.add('js');

    function oculta() {
        $html.classList.toggle('menu-opened');
        // pegando o atributo e comparando seu valor se é V ou F
        var ariaExpanded = $btn.getAttribute('aria-expanded') === "true";

        // inserindo um valor para o aria-expanded V ou F
        $btn.setAttribute('aria-expanded', !ariaExpanded);
        $menu.setAttribute('aria-expanded', !ariaExpanded);
    }
    window.addEventListener('load', init);

    function init() {
        document.getElementById('sombra').style.boxShadow = "1px 1px 2px #14273d";
    }

    function anoAtual(){
        let data = new Date();
        document.getElementById('ano').innerHTML ='© ' + data.getFullYear();
        document.getElementById('ano').style.fontSize = '14px';
    }
    anoAtual();

    function relogio(){
        let $relogio = document.querySelector('.timer');
        $relogio.style.fontSize = '14px';
        $relogio.style.color = '#14273d';
        $relogio.style.textShadow = '-1px 0px 1px rgba(0,0,0,.4)';

        function RetornaData() {
            var data = new Date();

            var hora = formataHora(data.getHours());
            var min = formataHora(data.getMinutes());
            var sec = formataHora(data.getSeconds());

            return hora + ":" + min + ":" + sec;
        }

        function formataHora(tempo) {
            return tempo < 10 ? "0" + tempo : tempo;
        }

        function mostraRelogio(atual){
            $relogio.textContent = atual;
        }
        mostraRelogio(RetornaData());

        setInterval(function(){
            mostraRelogio(RetornaData());
        },1000)
    }
    relogio();
//    document.querySelector('relogio').innerHTML = relogio();

})();

$('#modalDicas').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

$('#modalBeneficio').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

