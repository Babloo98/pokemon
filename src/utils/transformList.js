const transformList = (pokemons = []) =>{
    console.log(pokemons)
    return pokemons.map(pokemon =>{
        return {label : pokemon.name, value : pokemon.url}
    })
}

export default transformList