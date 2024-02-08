// Função para aplicar desconto de 10% nas quartas-feiras e 5% nas segundas-feiras
function aplicarDesconto(valorTotal, diaDaSemana) {
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

//função para calcular o valor das compras
function calcularCompras() {
const nome = document.getElementById('nome').value;
const carneBoi = parseFloat(document.getElementById('carneBoi').value);
const carneFrango = parseFloat(document.getElementById('carneFrango').value);
const linguica = parseFloat(document.getElementById('linguica').value);
const diaSemana = parseFloat(document.getElementById('diaSemana').value);

const precoCarneBoi = 25.0
const precoCarneFrango = 15.0
const precoLiguica = 20.0

const valorTotal = ( carneBoi * precoCarneBoi) + (carneFrango * precoCarneFrango) + (linguica * precoLiguica);
const valorComDesconto = aplicarDesconto(valorTotal, diaSemana);

//exibe os resultados na página
document.getElementById("resultado").innerHTML = `
<p>Cliente: ${nome}</p>
<p>Valor total das compras: R$ ${valorTotal.toFixed(2)}</p>
<p>Valor com desconto: R$ ${valorComDesconto.toFixed(2)}</p>
`;
}

/*
Aqui estão as explicações para cada parte do código:

aplicarDesconto(valorTotal, diaDaSemana): Esta função recebe o valor total das compras e o dia da semana (representado por um número, onde 0 é domingo, 1 é segunda-feira, etc.).
Ela verifica se o dia é quarta-feira (diaDaSemana === 3) ou segunda-feira (diaDaSemana === 1) e aplica o desconto correspondente.
Caso contrário, retorna o valor total sem desconto.

calcularCompras(): Esta função é chamada quando o botão “Calcular” é clicado.
Ela obtém os valores dos campos de entrada (nome, quantidade de carne de boi, carne de frango, linguiça e dia da semana),
calcula o valor total das compras e aplica o desconto usando a função aplicarDesconto(). Em seguida, exibe os resultados na página.

Variáveis de preço: As variáveis precoCarneBoi, precoCarneFrango e precoLinguica armazenam os preços unitários para cada tipo de carne.
*/