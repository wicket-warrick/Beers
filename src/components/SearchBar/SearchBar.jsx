import "./style.css";

export const SearchBar = ({ params }) => {
  const [searchParams, updateSearchParams, beerOrder] = params;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="beer_name"
        onChange={updateSearchParams}
        autoFocus
        placeholder="search your beer..."
      />
      <fieldset>
        <legend>
          Alcohol By Volume {searchParams.abv_gt}-{searchParams.abv_lt}
        </legend>
        <label htmlFor="abv_gt">min</label>
        <input
          type="range"
          id="abv_gt"
          max={20}
          defaultValue={0}
          onChange={updateSearchParams}
        ></input>
        <label htmlFor="abv_lt">max</label>
        <input
          type="range"
          id="abv_lt"
          max={20}
          defaultValue={20}
          onChange={updateSearchParams}
        ></input>
      </fieldset>
      <fieldset>
        <legend>
          Bitterness {searchParams.ibu_gt}-{searchParams.ibu_lt}
        </legend>
        <label htmlFor="ibu_gt">min</label>
        <input
          type="range"
          id="ibu_gt"
          max={200}
          defaultValue={0}
          onChange={updateSearchParams}
        ></input>
        <label htmlFor="ibu_lt">max</label>
        <input
          type="range"
          id="ibu_lt"
          max={200}
          defaultValue={200}
          onChange={updateSearchParams}
        ></input>
      </fieldset>
      <fieldset>
        <label htmlFor="malt">Malts:</label>
        <select
          id="malt"
          name="malt"
          onChange={updateSearchParams}
          defaultValue={""}
        >
          <option value="">Select Malt...</option>
          <option value="Maris Otter Extra Pale">Maris Otter</option>
          <option value="Caramalt">Caramalt</option>
          <option value="Munich">Munich</option>
          <option value="Propino Pale Malt">Propino Pale</option>
          <option value="Wheat Malt">Wheat Malt</option>
          <option value="Dark Crystal">Dark Crystal</option>
          <option value="Wheat">Wheat</option>
          <option value="Lager Malt">Lager</option>
          <option value="Extra Pale">Extra Pale</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Flaked Oats">Flaked Oats</option>
          <option value="Crystal">Crystal</option>
          <option value="Peated Malt">Peated Malt</option>
          <option value="Amber">Amber</option>
          <option value="Brown">Brown</option>
          <option value="Crystal 150">Crystal 150</option>
          <option value="Pale Ale">Pale Ale</option>
          <option value="Smoked Weyermann">Smoked Weyermann</option>
          <option value="Roasted Barley">Roasted Barley</option>
          <option value="Smoked Malt">Smoked Malt</option>
          <option value="Acidulated Malt">Acidualted Malt</option>
        </select>
      </fieldset>
      <fieldset
        onChange={(e) => {
          beerOrder(e.target.id, e.target.value);
        }}
      >
        <legend>Order by:</legend>
        <label htmlFor="ibu asc">Bitterness asc:</label>
        <input type="radio" name="orderby" id="ibu asc" />
        <label htmlFor="ibu desc"> Bitterness desc:</label>
        <input type="radio" name="orderby" id="ibu desc" />
        <label htmlFor="abv asc">Alcohol asc:</label>
        <input type="radio" name="orderby" id="abv asc" />
        <label htmlFor="abv desc">Alcohol desc:</label>
        <input type="radio" name="orderby" id="abv desc" />
      </fieldset>
    </form>
  );
};
