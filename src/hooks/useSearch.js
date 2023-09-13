import { useState } from "react";
import { useSearchContext } from "../context/searchContext";
import { useEffect } from "react";

const useSearch = () => {
    const [search, setSearch] = useState("");
    const {updateSearchString } = useSearchContext();

    const searchCB = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    };

    useEffect(() => {
        updateSearchString(search);
    }, [search]);
    
    return { searchCB};
}

export default useSearch;