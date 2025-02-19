$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active')
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item')

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none')
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '10%'
    })

    ScrollReveal().reveal('#simulations', {
        origin: 'right',
        duration: 2000,
        distance: '50%'
    })

    ScrollReveal().reveal('#about', {
        origin: 'left',
        duration: 2000,
        distance: '50%'
    })
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('phone').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        // Formata para (xx) 9xxxx-xxxx sem espaço extra após o 9
        if (value.length >= 3) {
            value = value.replace(/^(\d{2})(9)/, '($1) $2'); // (xx) 9
        }

        if (value.length > 8) {
            value = value.replace(/(\d{5})(\d{4})/, '$1-$2'); // 9xxxx-xxxx
        }

        if (value.length > 15) {
            value = value.slice(0, 11); // Limita ao formato esperado
        }

        e.target.value = value;
    });


    document.getElementById('name').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');
    });

    document.getElementById('bill').addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value) {
            value = parseInt(value, 10) / 100;
            e.target.value = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
    });

    document.getElementById('simulate-btn').addEventListener('click', function () {
        let numericCost = document.getElementById('bill').value;
        numericCost = numericCost.replace(/[^\d]/g, '');
        numericCost = parseFloat(numericCost) / 100;

        if (isNaN(numericCost) || numericCost <= 0) {
            alert('Por favor, insira um número válido para a conta de luz');
            console.log(numericCost);
            return;
        }

        else {
            console.log(numericCost);
        }

        let contaComSolar = 0;
        let economiaMensal = 0;
        let numeroMod = 0;
        let description = "";
        let parcelaBanco84 = 0;
        let valor25AnosCom = 0;
        let valor25AnosSem = 0;

        if (numericCost < 100) {
            contaComSolar = numericCost;
            economiaMensal = numericCost * 0.2;
            numeroMod = 1;
            description = "e 1 Inversor";
            parcelaBanco84 = 417.35;
            valor25AnosSem = numericCost * 300;
            valor25AnosCom = valor25AnosSem / 2;
        } else if (numericCost >= 100 && numericCost <= 531.45) {
            contaComSolar = 110.93;
            economiaMensal = 287.73;
            numeroMod = 5;
            description = "e 1 Inversor";
            parcelaBanco84 = 417.35;
            valor25AnosSem = 470479.63;
            valor25AnosCom = 339563.95;
        } else if (numericCost <= 664.24) {
            contaComSolar = 147.48;
            economiaMensal = 383.64;
            numeroMod = 7;
            description = "e 1 Inversor"
            parcelaBanco84 = 510.64;
            valor25AnosSem = 627235.36;
            valor25AnosCom = 452759.81;
        } else if (numericCost <= 813.31) {
            contaComSolar = 174.12;
            economiaMensal = 490.13
            numeroMod = 8;
            description = "e 1 Inversor"
            parcelaBanco84 = 563.42;
            valor25AnosSem = 783920.28;
            valor25AnosCom = 578430;
        } else if (numericCost <= 935.50) {
            contaComSolar = 200.39;
            economiaMensal = 612.93
            numeroMod = 10;
            description = "e 1 Inversor"
            parcelaBanco84 = 631.03;
            valor25AnosSem = 959853.69;
            valor25AnosCom = 723360.48;
        } else if (numericCost <= 1084.26) {
            contaComSolar = 226.67;
            economiaMensal = 708.84
            numeroMod = 11;
            description = "e 1 Inversor"
            parcelaBanco84 = 668.59;
            valor25AnosSem = 1104052.47;
            valor25AnosCom = 836544.53;
        } else if (numericCost <= 1206.45) {
            contaComSolar = 290.42;
            economiaMensal = 793.85
            numeroMod = 13;
            description = "e 1 Inversor"
            parcelaBanco84 = 766.25;
            valor25AnosSem = 1279620.03;
            valor25AnosCom = 936876.59;
        } else if (numericCost <= 1328.63) {
            contaComSolar = 316.69;
            economiaMensal = 889.77
            numeroMod = 14;
            description = "e 1 Inversor"
            parcelaBanco84 = 803.81;
            valor25AnosSem = 1423818.81;
            valor25AnosCom = 1050072, 44;
        } else if (numericCost <= 1477.56) {
            contaComSolar = 368.55;
            economiaMensal = 960.09
            numeroMod = 16;
            description = "e 1 Inversor"
            parcelaBanco84 = 908.98;
            valor25AnosSem = 1568017.59;
            valor25AnosCom = 1133067.88;
        } else if (numericCost <= 1599.74) {
            contaComSolar = 395.82;
            economiaMensal = 1081.75
            numeroMod = 18;
            description = "e 1 Inversor"
            parcelaBanco84 = 1062.57;
            valor25AnosSem = 1743773.97;
            valor25AnosCom = 1358267.62;
        } else if (numericCost <= 1721.93) {
            contaComSolar = 448.84;
            economiaMensal = 1150.91
            numeroMod = 19;
            description = "e 1 Inversor"
            parcelaBanco84 = 1102.21;
            valor25AnosSem = 1887972.75;
            valor25AnosCom = 1471463.47;
        } else if (numericCost <= 1844.11) {
            contaComSolar = 475.11;
            economiaMensal = 1246.83
            numeroMod = 21;
            description = "e 1 Inversor"
            parcelaBanco84 = 1229.09;
            valor25AnosSem = 2032171.53;
            valor25AnosCom = 1584647.52;
        } else if (numericCost <= 1966.30) {
            contaComSolar = 501.39;
            economiaMensal = 1342.73
            numeroMod = 22;
            description = "e 1 Inversor"
            parcelaBanco84 = 1284.60;
            valor25AnosSem = 2176370.31;
            valor25AnosCom = 1697843.37;
        } else if (numericCost <= 2088.48) {
            contaComSolar = 527.65;
            economiaMensal = 1438.65
            numeroMod = 24;
            description = "e 1 Inversor"
            parcelaBanco84 = 1363.89;
            valor25AnosSem = 2320569.09;
            valor25AnosCom = 1584647.52;
        } else if (numericCost <= 2210.67) {
            contaComSolar = 553.94;
            economiaMensal = 1534.55
            numeroMod = 25;
            description = "e Dois Inversores"
            parcelaBanco84 = 1403.54;
            valor25AnosSem = 2464767.87;
            valor25AnosCom = 1697843.37;
        } else if (numericCost <= 2332.86) {
            contaComSolar = 580.22;
            economiaMensal = 1630.46
            numeroMod = 27;
            description = "e Dois Inversores"
            parcelaBanco84 = 1562.13;
            valor25AnosSem = 2608966.65;
            valor25AnosCom = 1811027.43;
        } else if (numericCost <= 2455.04) {
            contaComSolar = 606.49;
            economiaMensal = 1726.38
            numeroMod = 28;
            description = "e Dois Inversores"
            parcelaBanco84 = 1601.78;
            valor25AnosSem = 2753165.43;
            valor25AnosCom = 1924211.48;
        } else if (numericCost <= 2577.23) {
            contaComSolar = 635.77;
            economiaMensal = 1726.38
            numeroMod = 30;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 1681.08;
            valor25AnosSem = 2897364.21;
            valor25AnosCom = 2037407.33;
        } else if (numericCost <= 2699.41) {
            contaComSolar = 685.32;
            economiaMensal = 1819.28
            numeroMod = 33;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 1903.10;
            valor25AnosSem = 3185761.76;
            valor25AnosCom = 2147050.89;
        } else if (numericCost <= 2943.78) {
            contaComSolar = 711.59;
            economiaMensal = 1918.20
            numeroMod = 35;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 1982.40;
            valor25AnosSem = 3329960.54;
            valor25AnosCom = 2263787.23;
        } else if (numericCost <= 3065.97) {
            contaComSolar = 737.87;
            economiaMensal = 2014.20
            numeroMod = 36;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2022.05;
            valor25AnosSem = 3474159.32;
            valor25AnosCom = 2376971.28;
        } else if (numericCost <= 3188.15) {
            contaComSolar = 764.15;
            economiaMensal = 2110.02
            numeroMod = 38;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2101.34;
            valor25AnosSem = 3618358.10;
            valor25AnosCom = 2490167.14;
        } else if (numericCost <= 3310.34) {
            contaComSolar = 790.42;
            economiaMensal = 2205.92
            numeroMod = 39;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2180.64;
            valor25AnosSem = 3762556.88;
            valor25AnosCom = 2603351.19;
        } else if (numericCost <= 3432.52) {
            contaComSolar = 816.70;
            economiaMensal = 2301.83
            numeroMod = 41;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2319.41;
            valor25AnosSem = 3906755.66;
            valor25AnosCom = 2716535.24;
        } else if (numericCost <= 3554.71) {
            contaComSolar = 842.97;
            economiaMensal = 2397.74
            numeroMod = 42;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2378, 88;
            valor25AnosSem = 4050954.55;
            valor25AnosCom = 2829731.09;
        } else if (numericCost <= 3554.71) {
            contaComSolar = 842.97; // corrigir
            economiaMensal = 2493.65
            numeroMod = 42;
            parcelaBanco84 = 2378, 88;
            valor25AnosSem = 4050954.55;
            valor25AnosCom = 2942915.14;
        } else if (numericCost <= 3679.89) {
            contaComSolar = 869.25;
            economiaMensal = 2589.65
            numeroMod = 44;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2442.32;
            valor25AnosSem = 4195153.22;
            valor25AnosCom = 3056110.99;
        } else if (numericCost <= 3799.08) {
            contaComSolar = 895.92;
            economiaMensal = 2685.47
            numeroMod = 46;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2521.61;
            valor25AnosSem = 4339352;
            valor25AnosCom = 3282018.83;
        } else if (numericCost <= 3921.26) {
            contaComSolar = 921.80;
            economiaMensal = 2780.98
            numeroMod = 47;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2561.26;
            valor25AnosSem = 4483550.78;
            valor25AnosCom = 3395674.95;
        } else if (numericCost <= 4043.45) {
            contaComSolar = 948.08;
            economiaMensal = 2877.29
            numeroMod = 49;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2640.56;
            valor25AnosSem = 4627749.56;
            valor25AnosCom = 3508859;
        } else if (numericCost <= 4165.63) {
            contaComSolar = 974.35;
            economiaMensal = 2973.19
            numeroMod = 50;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2680.21;
            valor25AnosSem = 4771948.34;
            valor25AnosCom = 3622054.85;
        } else if (numericCost <= 4287.82) {
            contaComSolar = 1000.63;
            economiaMensal = 2973.19
            numeroMod = 52;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2910.16;
            valor25AnosSem = 4916147.12;
            valor25AnosCom = 3735238.90;
        } else if (numericCost <= 4410.82) {
            contaComSolar = 1026.90;
            economiaMensal = 3069.11
            numeroMod = 53;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 2949.81;
            valor25AnosSem = 5060345.90;
            valor25AnosCom = 3848434.75;
        } else if (numericCost <= 4532.01) {
            contaComSolar = 1053.18;
            economiaMensal = 3165.01
            numeroMod = 55;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 3029.11;
            valor25AnosSem = 5204544.68;
            valor25AnosCom = 3961618.81;
        } else if (numericCost <= 4654.39) {
            contaComSolar = 1079.45;
            economiaMensal = 3260.93
            numeroMod = 56;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 3068.76;
            valor25AnosSem = 5384743.46;
            valor25AnosCom = 4074814.66;
        } else if (numericCost <= 4776.57) {
            contaComSolar = 1105.73;
            economiaMensal = 3356.84
            numeroMod = 58;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 3148.05;
            valor25AnosSem = 5492942.24;
            valor25AnosCom = 4187998.71;
        } else if (numericCost <= 4898.75) {
            contaComSolar = 1132;
            economiaMensal = 3452.75
            numeroMod = 59;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 3251.14;
            valor25AnosSem = 5637141.02;
            valor25AnosCom = 4301194.56;
        } else if (numericCost <= 5020.93) {
            contaComSolar = 1158.28;
            economiaMensal = 3740.48;
            numeroMod = 61;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 3401.80;
            valor25AnosSem = 5781339.80;
            valor25AnosCom = 4414378.61;
        } else if (numericCost <= 5143.12) {
            contaComSolar = 1184.56;
            economiaMensal = 3644.57;
            numeroMod = 63;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3496.95;
            valor25AnosSem = 5925538.58;
            valor25AnosCom = 4527562.66;
        } else if (numericCost <= 5265.30) {
            contaComSolar = 1210.83;
            economiaMensal = 3740.48;
            numeroMod = 64;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3544.53;
            valor25AnosSem = 6069737.35;
            valor25AnosCom = 4640758.52;
        } else if (numericCost <= 5387.49) {
            contaComSolar = 1237.11;
            economiaMensal = 3836.38;
            numeroMod = 66;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3639.69;
            valor25AnosSem = 6213936.13;
            valor25AnosCom = 4753942.57;
        } else if (numericCost <= 5509.67) {
            contaComSolar = 1263.38;
            economiaMensal = 4028.20;
            numeroMod = 67;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3687.26;
            valor25AnosSem = 6358134.91;
            valor25AnosCom = 4867138.42;
        } else if (numericCost <= 5631.86) {
            contaComSolar = 1289.66;
            economiaMensal = 4124.12;
            numeroMod = 69;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3782.42;
            valor25AnosSem = 6502333.69;
            valor25AnosCom = 4980322.47;
        } else if (numericCost <= 5754.04) {
            contaComSolar = 1315.93;
            economiaMensal = 4220.02;
            numeroMod = 70;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3830;
            valor25AnosSem = 6646532.47;
            valor25AnosCom = 5093518.32;
        } else if (numericCost <= 5876.23) {
            contaComSolar = 1342.21;
            economiaMensal = 4315.94;
            numeroMod = 72;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3925.15;
            valor25AnosSem = 6790731.25;
            valor25AnosCom = 5206702.37;
        } else if (numericCost <= 5998.41) {
            contaComSolar = 1368.49;
            economiaMensal = 4411.84;
            numeroMod = 73;
            description = "e 2 inversores Trifásicos"
            parcelaBanco84 = 3972.73;
            valor25AnosSem = 6934930.03;
            valor25AnosCom = 5319886.42;
        } else if (numericCost <= 6120.60) {
            contaComSolar = 1394.76;
            economiaMensal = 4507.75;
            numeroMod = 75;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 4067.89;
            valor25AnosSem = 7079128.81;
            valor25AnosCom = 5433082.28;
        } else if (numericCost <= 6242.79) {
            contaComSolar = 1421.04;
            economiaMensal = 4603.66;
            numeroMod = 77;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 4163.04;
            valor25AnosSem = 7223327.59;
            valor25AnosCom = 5546266.33;
        } else {
            contaComSolar = 1447.31;
            economiaMensal = 4795.49;
            numeroMod = 78;
            description = "e 1 inversor Trifásico"
            parcelaBanco84 = 4210.62;
            valor25AnosSem = 7367526.37;
            valor25AnosCom = 5659462.18;
        }

        document.getElementById('contaComSolar').textContent = `R$ ${contaComSolar.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.getElementById('economiaMensal').textContent = `R$ ${economiaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.getElementById('parcelaBanco84').textContent = `R$ ${parcelaBanco84.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.getElementById('numeroMod').textContent = numeroMod;
        document.getElementById('description').textContent = description;
        document.getElementById('valor25AnosSem').textContent = `R$ ${valor25AnosSem.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.getElementById('valor25AnosCom').textContent = `R$ ${valor25AnosCom.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

        document.getElementById('simulation-result').style.display = 'block';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const frame = document.getElementById("projects-frame");
    const icon = document.getElementById("projects-btn").querySelector("i");

    icon.style.transform = "rotate(0deg)";

    frame.style.display = "none";

    document.getElementById("projects-btn").addEventListener("click", function () {
        if (frame.style.display === "none" || frame.style.display === "") {
            frame.style.display = "flex"; 
            icon.style.transform = "rotate(180deg)";
        } else {
            frame.style.display = "none"; 
            icon.style.transform = "rotate(0deg)";
        }
    });
});

$(document).ready(function() {
    $('#simulate-btn').click(function(e) {
        e.preventDefault();

        var name = $('#name').val();
        var phone = $('#phone').val();
        var bill = $('#bill').val();

        var phoneRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            alert('O número deve estar no formato (xx) 9 xxxx-xxxx.');
            return;
        }

        if (name && phone && bill) {
            $.ajax({
                url: 'http://35.184.186.154:3000/clientes',
                type: 'POST',
                contentType: 'application/json', 
                data: JSON.stringify({
                    nome: name,
                    numero: phone,
                    contaLuz: bill
                }),
                success: function(response) {
                    console.log('✅ right', response);
                },
                error: function(xhr, status, error) {
                    console.error('❌ wrong: ' + error);
                }
            });
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});



