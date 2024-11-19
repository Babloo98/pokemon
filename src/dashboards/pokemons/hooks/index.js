import { useEffect, useState } from "react"
import { API_URL } from "../../../constants"
import transformList from "../../../utils/transformList";


const useFetchPokemons = (selectedPokemon = "") =>{

    const [pokemonsData, setPokemons] = useState([]);

    const fetchPokemonList = async() =>{
        try{
            const PokemonsList  = await fetch(API_URL.POKEMONS);
            const pokemons = await PokemonsList.json();
            setPokemons(transformList(pokemons.results));
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchPokemonList()
    },[selectedPokemon]);

    return {list : pokemonsData}
};

export default useFetchPokemons;