import { useState } from "react";
import { useEffect } from "react";
import { SEARCH_BY_NAME } from "../constants/endpoints";

const usePokemon = (searchString) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // SEARCH POKEMON BY NAME
  useEffect(() => {
    let aborted = false;
    const controller = new AbortController();
    const debounce = setTimeout(() => {
      if (!!searchString)
        fetchPokemonByName(
          searchString.toLowerCase(),
          setError,
          setPokemon,
          setLoading,
        );
    }, 2000);

    return () => {
      clearTimeout(debounce);
      aborted = true;
      controller.abort();
    };
  }, [searchString]);

  return { pokemon, error, loading };
};
const fetchPokemonByName = async (searchString, errCB, pokCB, loaCB) => {
  loaCB(true);
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const responseData = await fetch(SEARCH_BY_NAME + searchString, {
      method: "GET",
    });
    const res = await responseData.json();
    if (res) {
      pokCB(res);
    }
  } catch (error) {
    errCB(error);
  } finally {
    console.log("Fetch Finished");
  }
};

export default usePokemon;
