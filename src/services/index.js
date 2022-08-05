export const getBeers = async (beerParams) => {
  let request = "";
  for (const param in beerParams) {
    if (beerParams[param] && beerParams[param] !== "") {
      request = `${request}${param}=${beerParams[param]}&`;
    }
  }

  const res = await fetch(`https://api.punkapi.com/v2/beers?${request}`);
  const results = await res.json();

  return results;
};
