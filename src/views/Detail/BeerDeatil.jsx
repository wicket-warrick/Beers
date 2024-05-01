import { Link, NavLink, useParams } from "react-router-dom";
import { getBeer } from "../../services";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const BeerDetail = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const _getBeer = async (id) => {
      try {
        const beerFetch = await getBeer(id);

        setBeer(beerFetch);
      } catch (error) {
        console.log(error.message);
      }
    };
    _getBeer(id);
  }, [id, navigate]);

  return (
    <>
      <h>detalles da cervexa {id}</h>

      <div className="beer" key={beer.id}>
        <h2>{beer.name}</h2>
        <img src={beer.image_url} alt={beer.name} />
        <p>{beer.description}</p>
        <NavLink to={{ pathname: `/catalogue`, keepSearch: true }} exact>
          volver
        </NavLink>
        {/* <button className="detail-button" onClick={() => navigate(-1)}>
          {"< Back"}
        </button> */}
      </div>
    </>
  );
};
