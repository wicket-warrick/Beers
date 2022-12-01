import { Card } from "../../components/BeerCard/BeerCard";


export const BeerList = ({ beers, params }) => {

  return (
    <ul >
      {beers.length ? (
        beers
          .sort((a, b) =>
            params.direction === "asc"
              ? a[params.orderBy] - b[params.orderBy]
              : b[params.orderBy] - a[params.orderBy]
          )
          .map((beer) => {
            return (
              <li className="beer content" key={beer.id}>
                <Card beer={beer}></Card>
              </li>
            );
          })
      ) : (
        <h2>Not results</h2>
      )}
    </ul>
  );
};
