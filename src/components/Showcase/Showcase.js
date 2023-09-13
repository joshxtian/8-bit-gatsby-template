import * as React from "react";
import { usePokemon } from "../../hooks";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchContext } from "../../context/searchContext";
const Showcase = () => {
  const { searchString } = useSearchContext();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const { pokemon } = usePokemon(searchString);
  useEffect(() => {
    setCurrentPokemon(pokemon);
  }, [pokemon]);
  return (
    <div className="">
      {!!currentPokemon && (
        <div className="aspect-square w-[200px]  mx-auto">
          <img
            className="w-full h-full"
            alt={currentPokemon?.name}
            src={currentPokemon?.sprites?.front_default}
          />
        </div>
      )}

      <h2 className="text-center">{currentPokemon?.name?.toUpperCase()}</h2>
    </div>
  );
};

// const fetchPokemonByName = async (searchString, errCB, pokCB, loaCB) => {
//   loaCB(true);
//   try {
//     const headers = new Headers();
//     headers.append("Content-Type", "application/json");
//     const responseData = await fetch("https://pokeapi.co/api/v2/pokemon/" + searchString, {
//       method: "GET",
//     });
//     const res = await responseData.json();
//     if (res) {
//       pokCB(res);
//     }
//   } catch (error) {
//     errCB(error);
//   } finally {
//     console.log("Fetch Finished");
//   }
// };

export default Showcase;
