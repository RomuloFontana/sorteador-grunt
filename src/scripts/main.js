document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo)

        let AleatorioNumero = Math.random() * numeroMaximo;
        AleatorioNumero = Math.floor(AleatorioNumero + 1)
        document.getElementById("resultado-valor").innerText = AleatorioNumero;
        document.querySelector(".resultado").style.display = 'block';
    })
})