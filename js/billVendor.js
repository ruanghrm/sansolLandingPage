
document.addEventListener('DOMContentLoaded', function() {
    var contaComSolar = localStorage.getItem('contaComSolar');

    if (contaComSolar) {
        contaComSolar = parseFloat(contaComSolar);
        console.log(contaComSolar);
        document.getElementById('total-to-pay').textContent = `R$ ${contaComSolar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        
    } else {
        console.log("Valor não encontrado!");
    }
});

$(document).ready(function() {
    var name = localStorage.getItem('name');
    if (name) {
        console.log(name);
        $('#name').text(name);
    }

    var phone = localStorage.getItem('phone');
    if (phone) {
        var formattedPhone = phone.replace(/\D/g, '');

        if (!formattedPhone.startsWith('55')) {
            formattedPhone = '55' + formattedPhone;
        }

        $('#whatsApp-link').attr('href', 'https://wa.me/' + formattedPhone);
    }
});

