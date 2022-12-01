import { List } from "../List";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Card = ({ beer }) => {
  const navigate = useNavigate();

  return (
    <article className="card">
      <div className="card-image">
        <figure>
          <img src={beer.image_url} alt={beer.name} />
        </figure>
      </div>
      <h2 className=" is-size-3 has-text-centered">{beer.name}</h2>
      <div className="card-content has-text-centered ">
        <p className="content is-size-6 has-text-justified">
          {beer.description}
        </p>
        <p className="content is-size-6">alcohol: {beer.abv}</p>
        <List list={beer.food_pairing}></List>
        <button
          className="button is-warning is-rounded "
          onClick={() => navigate(`/beers/${beer.id}`)}
        >
          DETAILS
        </button>
      </div>
    </article>
  );
};
