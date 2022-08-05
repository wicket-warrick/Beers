export const BeerList = ({ beers }) => {
  return beers.map((beer) => {
    return (
      <div className="beer" key={beer.id}>
        <h2>{beer.name}</h2>
        <img src={beer.image_url} alt={beer.name} />
        <p>{beer.description}</p>
      </div>
    );
  });
};
