document.addEventListener('DOMContentLoaded', function() {
    var contaComSolar = localStorage.getItem('contaComSolar');

    if (contaComSolar) {
        contaComSolar = parseFloat(contaComSolar);

        document.getElementById('total-to-pay').textContent = `R$ ${contaComSolar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else {
        console.log("Valor não encontrado!");
    }
});
$(document).ready(function() {
    var name = localStorage.getItem('name');

    if (name) {
        $('#name').text(name);
    }
});

