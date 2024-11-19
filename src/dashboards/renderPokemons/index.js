import { useEffect, useState } from "react"
import { API_URL } from "../../constants";


const RenderPokemonDetails = ({pokemon}) =>{

    const [pokemonData, setPokemonData] = useState({});

    const fetchPokemon = async(selectedPokemon) =>{
        try{
            const PokemonsList  = await fetch(selectedPokemon);
            const pokemon = await PokemonsList.json();
            setPokemonData(pokemon);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchPokemon(pokemon)
    }, [pokemon]);

    return <div className="pokemon__details">
        {!pokemonData ? <div>Please select any one pokemon</div>:<div>{pokemonData.name}</div>}
        </div>
}

export default RenderPokemonDetails;