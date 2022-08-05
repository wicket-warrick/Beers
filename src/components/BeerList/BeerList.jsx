export const BeerList = ({ beers, params }) => {
  console.log(beers);
  return (
    <ul>
      {beers.length ? (
        beers
          .sort((a, b) =>
            params.direction === "asc"
              ? a[params.orderBy] - b[params.orderBy]
              : b[params.orderBy] - a[params.orderBy]
          )
          .map((beer) => {
            return (
              <li className="beer" key={beer.id}>
                <h2>{beer.name}</h2>
                <img src={beer.image_url} alt={beer.name} />
                <p>{beer.description}</p>
              </li>
            );
          })
      ) : (
        <h2>Not results</h2>
      )}
    </ul>
  );
};
