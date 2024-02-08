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

/*
Aqui estão as explicações para cada parte do código:

aplicarDesconto(valorTotal): Esta função recebe o valor total das compras e verifica o dia da semana usando new Date().getDay().
Se for quarta-feira (diaDaSemana === 3), aplica um desconto de 10%. Se for segunda-feira (diaDaSemana === 1), aplica um desconto de 5%.
Caso contrário, retorna o valor total sem desconto.

Variáveis de preço: As variáveis precoCarneBoi, precoCarneFrango, precoLinguica e precoCarnePorco armazenam os preços unitários para cada tipo de carne.

Compras de João e Maria: As quantidades de carne de boi, carne de frango, linguiça e carne de porco para João e Maria 
são multiplicadas pelos preços unitários correspondentes para calcular o valor total das compras.

totalJoaoComDesconto.toFixed(2) e totalMariaComDesconto.toFixed(2): Arredonda os valores totais com desconto para duas casas decimais.
*/