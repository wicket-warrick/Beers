import { createContext, useState, useContext } from "react";
export const BeerFormDataContext = createContext();

const BeerFormDataProvider = ({ children }) => {
  const [beersFilter, setBeersFilter] = useState({
    abv_lt: 20,
    abv_gt: 0,
    ibu_lt: 200,
    ibu_gt: 0,
    malt: "",
  });

  return (
    <BeerFormDataContext.Provider value={{ beersFilter, setBeersFilter }}>
      {children}
    </BeerFormDataContext.Provider>
  );
};

export default BeerFormDataProvider;
