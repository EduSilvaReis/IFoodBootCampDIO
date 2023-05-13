
// const offset = 0;
// const limit = 10;

// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const loadMoreButton = document.getElementById('loadMoreButton')
const pokemonList = document.getElementById('pokemonList')

const maxRecords = 151;
const limit = 15;
let offset = 0;

function convertPokemonToList(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" 
                alt="${pokemon.name}">
            </div>

        </li>
    `
}

function loadPokemonItens(limit,offset) {
    
    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToList).join('')
        /*const newHtml = pokemons.map(convertPokemonToList).join('')
        pokemonList.innerHTML += newHtml
        */
    })
}

loadPokemonItens(limit, offset)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})


    // const listItems = []



    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItems.push(convertPokemonToHtml(pokemon))
       
    // }

    // console.log(listItems)
    


    // pokemonList.innerHTML += convertPokemonToHtml(pokemon)
    // .then(function (response) {
    //     return response.json()
    // })
    // .then(function (jsonBody) {
    //    console.log(jsonBody)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })
    // .finally(function () {
    //     console.log('Requisição cnocluída');
    // })