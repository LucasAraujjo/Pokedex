
function searchPokemon() {
    // Obtenha o valor digitado na barra de pesquisa
    var searchValue = document.getElementById("pokemonSearch").value.toLowerCase();

    // Obtenha todos os cartões de Pokémon
    var pokemonCards = document.querySelectorAll(".cartao-pokemon");

    // Crie uma nova lista para os Pokémon pesquisados
    var searchedPokemonList = [];

    // Percorra os cartões e adicione à lista se corresponder à pesquisa
    pokemonCards.forEach(function (card) {
        var pokemonName = card.querySelector(".informacoes a").innerText.toLowerCase();
        if (pokemonName.includes(searchValue)) {
            searchedPokemonList.push(card.outerHTML);
        }
    });

    // Exiba a lista de Pokémon pesquisados no elemento com ID "pokemonList"
    document.getElementById("pokemonList").innerHTML = searchedPokemonList.join("");
}