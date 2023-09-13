import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

// INITIAL DATA
const intialSearchContext = {
    searchString: "",
};

// CREATE CONTEXT
const SearchContext = createContext(intialSearchContext);

// CREATE REDUCER
const SearchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_SEARCH":
      return {
        ...state,
        searchString: payload,
      };

    default:
      throw new Error(`No case for type ${type} found in SearchReducer`);
  }
};

// CREATE PROVIDER
const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, intialSearchContext);
  const { searchString } = state;

  const updateSearchString = useCallback(
    (search) => {
      dispatch({
        type: "UPDATE_SEARCH",
        payload: search,
      });
    },
    [dispatch],
  );

  const providerValue = useMemo(
    () => ({
        searchString,
        updateSearchString
    }),
    [searchString, updateSearchString],
  );
  return (
    <SearchContext.Provider value={providerValue}>
      {children}
    </SearchContext.Provider>
  );
};
// CONTEXT HOOK
const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within SearchContext");
  }

  return context;
};
// EXPORTS
export { SearchContext, SearchProvider, SearchReducer, useSearchContext };
