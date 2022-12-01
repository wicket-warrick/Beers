import { useContext } from "react";
import { useEffect, useState } from "react";
import { BeerList } from "../../components/BeerList/BeerList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import {
  BeerFormDataContext,
  
} from "../../context/BeerFormDataProvider";
import { getBeers } from "../../services";

import "./style.css";
export const CatalogueBeer = () => {
  const { beersFilter, setBeersFilter } = useContext(BeerFormDataContext);
  const [beers, setBeers] = useState();

  const updateBeersFilter = (e) => {
    setBeersFilter({ ...beersFilter, [e.target.id]: e.target.value });
  };
  const beerOrder = (e) => {
    const order = e.split(" ");

    setBeersFilter({
      ...beersFilter,
      orderBy: order[0],
      direction: order[1],
    });
  };

  useEffect(() => {
    const searchBeers = async () => {
      try {
        const beersFetch = await getBeers(beersFilter);
        setBeers(beersFetch);
      } catch (error) {
        console.error(error.message);
      }
    };
    searchBeers();
  }, [beersFilter]);
  return (
    <>
      <SearchBar
        // params={[beersFilter, updateBeersFilter, beerOrder]}
        params={[beersFilter, updateBeersFilter, beerOrder]}
      ></SearchBar>
      {beers ? (
        <BeerList beers={beers} params={beersFilter} />
      ) : (
        <h2>Connecting...</h2>
      )}
    </>
  );
};
