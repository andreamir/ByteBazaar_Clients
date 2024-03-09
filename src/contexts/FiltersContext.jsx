import React, { useContext, createContext, useState, useEffect } from "react";

const FiltersContext = createContext();

function FiltersProvider(props) {
  const { children } = props;
  const [filteredGames, setFilteredGame] = useState([]);
  const [checked, setChecked] = useState([]);

  function handleCheckbox(option) {
    if (checked.includes(option)) {
      setChecked(checked.filter((checkedOption) => checkedOption !== option));
    } else {
      setChecked([...checked, option]);
    }
  }

  useEffect(() => {
    console.log('Filter checked', checked);
  }, [checked]);

  function useFilters(game) {
    // Aquí puedes implementar la lógica de filtrado según tus necesidades
    // Por ejemplo, puedes aplicar filtros basados en el estado de "checked"
  }

  return (
    <FiltersContext.Provider value={{ useFilters, handleCheckbox }}>
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
