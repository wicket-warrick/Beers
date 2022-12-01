export const getBeers = async (beerParams) => {
  let request = "";
  for (const param in beerParams) {
    if (beerParams[param] && beerParams[param] !== "") {
      request = `${request}${param}=${beerParams[param]}&`;
    }
  }

  const res = await fetch(`https://api.punkapi.com/v2/beers?${request}`);

  const results = await res.json();
  if(!res.ok) throw new Error(results.meesage)

  return results;
};

export const getBeer=async (id)=>{
  if (!getBeer.cache) getBeer.cache = {};
  if (!getBeer.cache[id]) {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const result = await res.json();

    getBeer.cache[id] = result[0];
  }

  return getBeer.cache[id];
}