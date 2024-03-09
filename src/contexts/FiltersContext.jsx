import React, { useContext, createContext, useState, useEffect } from "react";

const FiltersContext = createContext();

function FiltersProvider(props) {
  const { children } = props;
  // const [filteredGames, setFilteredGame] = useState([]);
  const [checkedFilters, setcheckedFilters] = useState([]);

  function handleCheckbox(option) {
    if (checkedFilters.includes(option)) {
      setcheckedFilters(checkedFilters.filter((checkedFiltersOption) => checkedFiltersOption !== option));
    } else {
      setcheckedFilters([...checkedFilters, option]);
    }
  }

  useEffect(() => {
    console.log('Filter checkedFilters', checkedFilters);
  }, [checkedFilters]);

  // function useFilters(game) {
  // }

  return (
    <FiltersContext.Provider value={{ checkedFilters, handleCheckbox }}>
      {children}
    </FiltersContext.Provider>
  );
}

function useFiltersContext() {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error('useFiltersContext must be used within FiltersContextProvider');
  }
  return context;
}

export { FiltersProvider, useFiltersContext };
