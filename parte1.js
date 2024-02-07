// Função para aplicar desconto de 10% nas quartas-feiras e 5% nas segundas-feiras
function aplicarDesconto(valorTotal) {
    const diaDaSemana = new Date().getDay(); // 0 para domingo, 1 para segunda-feira, etc.
    if (diaDaSemana ===3) { //quarta feira
        return valorTotal *0.9; //desconto de 10%
    }
    else if (diaDaSemana === 1) { //segunda feira
        return valorTotal * 0.95;//desconto de 5%
    }
    else {
        return valorTotal; //sem desconto
    }
}
 
//tabela de preços
const precoCarneBoi = 25.0;
const precoCarneFrango = 15.0;
const precoLiguica = 20.0;
const precoCarnePorco = 30.0;

//compras de João
const kgCarneBoiJoão = 2;
const kgCarneFrangoJoão = 1;
const kgLingucaJoão = 1;
const kgCarnePorcoJoão = 0;

const totalJoao = (precoCarnePorco * kgCarnePorcoJoão) + (precoCarneBoi * kgCarneBoiJoão) + (precoCarneFrango * kgCarneFrangoJoão) + (precoLiguica * kgLingucaJoão);

const totalJoaoComDesconto = aplicarDesconto(totalJoao);

console.log("Total das compras de João", totalJoaoComDesconto.toFixed(2));

//compras de Maria
const kgCarneBoiMaria = 0;
const kgCarneFrangoMaria = 2;
const kgLingucaMaria = 1;
const kgCarnePorcoMaria = 3;

const totalMaria = (precoCarnePorco * kgCarnePorcoMaria) + (precoCarneBoi * kgCarneBoiMaria) + (precoCarneFrango * kgCarneFrangoMaria) + (precoLiguica * kgLingucaMaria);

const totalMariaComDesconto = aplicarDesconto(totalMaria);

console.log("Total das compras da Maria", totalMariaComDesconto.toFixed(2));
