import { Card } from "../../components/BeerCard/BeerCard";
<<<<<<< HEAD
export const BeerList = ({ beers, params }) => {
=======


export const BeerList = ({ beers, params }) => {

>>>>>>> 258bab15d0b074e1d421711400f97da538188def
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
<<<<<<< HEAD
              <li className="beer" key={beer.id}>
=======
              <li className="beer content" key={beer.id}>
>>>>>>> 258bab15d0b074e1d421711400f97da538188def
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
