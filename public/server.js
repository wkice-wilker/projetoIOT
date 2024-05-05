const express = require('express');
const app = express();
const port = 3000;

// Definir as variáveis fora do escopo da função de rota
let fluxoAcumulado = 0;
let metroCubico = 0;
let contaDeAgua = 0;
let calculoVazaoAcumulado = 0;
let metroCubicoAcumulado = 0;
let contaDeAguaAcumulada = 0;

// Rota para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Rota para fornecer os dados simulados
app.get('/dados', (req, res) => {
    // Simular os dados
    const contador = Math.random(); // Contador aleatório entre 0 e 1 (para simular vazamento coloque valor 0.059) para valor aleatório colocar Math.random();
    console.log("Contador:", contador);

    const calculoVazao = contador * 2.25; // Cálculo da vazão
    console.log("Calculo Vazao:", calculoVazao);

    fluxoAcumulado = fluxoAcumulado + calculoVazao / 1000; // Fluxo acumulado com duas casas decimais
    console.log("Fluxo Acumulado:", fluxoAcumulado);

    metroCubico = calculoVazaoAcumulado / 1000; // Metro cúbico com duas casas decimais
    console.log("Metro Cubico:", metroCubico);

    contaDeAgua = metroCubicoAcumulado * 3.59; // Conta de água com duas casas decimais
    console.log("Conta de Agua:", contaDeAgua);
    
    const calculoVazaoMinuto = calculoVazao * 60 / 1000; // Litros por minuto
    calculoVazaoAcumulado += calculoVazaoMinuto; // Acumulando os valores de litros por minuto
    metroCubicoAcumulado += metroCubico;
    contaDeAguaAcumulada += metroCubicoAcumulado;

    const dados = {
        litrosPorMinuto: parseFloat(calculoVazao.toFixed(2)), // Arredondar para duas casas decimais
        gastoTotalLitros: parseFloat(fluxoAcumulado.toFixed(2)), // Utilizando o valor já calculado
        metrosCubicosTotais: parseFloat(metroCubicoAcumulado.toFixed(2)), // Utilizando o valor já calculado
        custoAgua: parseFloat(contaDeAguaAcumulada.toFixed(2)), // Utilizando o valor já calculado e arredondando para duas casas decimais
        alerta: (calculoVazao > 0.01 && calculoVazao < 0.15) ? 'Possível vazamento de água detectado!' : '' // Alerta de vazamento
    };

    console.log("Dados:", dados);

    // Enviar os dados como JSON
    res.setHeader('Content-Type', 'application/json'); // Definir cabeçalho Content-Type como application/json
    res.json(dados);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
