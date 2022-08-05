import { useEffect, useState } from "react";
import { BeerList } from "../../components/BeerList/BeerList";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getBeers } from "../../services";
import "./style.css";
export const CatalogueBeer = () => {
  const [beers, setBeers] = useState();
  const [searchParams, setSearchParams] = useState({
    abv_lt: 20,
    abv_gt: 0,
    ibu_lt: 200,
    ibu_gt: 0,
    malt: "",
  });
  const updateSearchParams = (e) => {
    setSearchParams({ ...searchParams, [e.target.id]: e.target.value });
  };
  const beerOrder = (e) => {
    const order = e.split(" ");
    console.log(order);
    setSearchParams({
      ...searchParams,
      orderBy: order[0],
      direction: order[1],
    });
  };

  useEffect(() => {
    const searchBeers = async () => {
      try {
        const beersFetch = await getBeers(searchParams);
        setBeers(beersFetch);
      } catch (error) {
        console.error(error.message);
      }
    };
    searchBeers();
  }, [searchParams]);
  return (
    <>
      <SearchBar
        params={[searchParams, updateSearchParams, beerOrder]}
      ></SearchBar>
      {beers ? (
        <BeerList beers={beers} params={searchParams} />
      ) : (
        <h2>Connecting...</h2>
      )}
    </>
  );
};
