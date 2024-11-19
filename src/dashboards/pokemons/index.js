import { useState } from "react";
import Dropdown from "../../components/common/dropdown"
import RenderPokemonDetails from "../renderPokemons";
import useFetchPokemons from "./hooks";

const Pokemon = () =>{
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const {list} = useFetchPokemons("");
   
    return <div className="pokemons__wrapper">
                <Dropdown name="pokemons" value = {selectedPokemon} options = {list}  onChangeHandler={(e)=>{
                    setSelectedPokemon(e.target.value)}}/>
                <RenderPokemonDetails pokemon = {selectedPokemon}/>

        </div>
}

export default Pokemon