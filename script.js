const URL_PLANILHA = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhGX4J5H2XwyJfuP-fcZ12HZuEZuf73KJGvJHdypvpaGBHUSe4NBdlh1GMFo6u77KJvluZF2Y1NIEB/pub?output=csv';

const cardapio = document.getElementById('cardapio');

async function carregarCardapio() {
    const resposta = await fetch}(URL_PLANILHA);
    const texto = await resposta.text();

    const linhas = texto.trim().split('\n');
    linhas.shift();

    cardapio.innerHTML = '';

    linhas.forEach((linha) => {
        const [nome, preco, categoria] = )
}