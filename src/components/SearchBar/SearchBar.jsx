
import "./style.css";


export const SearchBar = ({ params }) => {
  const [beersFilter, bupdateBeersFilter, beerOrder] = params;


  return (
    <form className="section columns searcher " onSubmit={(e) => e.preventDefault()}>
      <fieldset className="field column is-flex is-flex-direction-column is-align-items-center">
        <input
          className="input is-small is-rounded is-inline"
          type="text"
          id="beer_name"
          onChange={bupdateBeersFilter}
          autoFocus
          placeholder="Search your beer..."
        />
      </fieldset>

      <fieldset className="field is-grouped is-justify-content-center ">
        <legend className="label has-text-centered">
          Alcohol By Volume {beersFilter.abv_gt}-{beersFilter.abv_lt}
        </legend>
        <label htmlFor="abv_gt" className=" control">
          min
        </label>
        <div className="control">
          <input
            type="range"
            id="abv_gt"
            max={20}
            defaultValue={beersFilter.abv_gt}
            onChange={bupdateBeersFilter}
          ></input>
        </div>
        <label htmlFor="abv_lt" className="control ">
          max
        </label>
        <div className="control">
          <input
            type="range"
            id="abv_lt"
            max={20}
            defaultValue={20}
            onChange={bupdateBeersFilter}
          ></input>
        </div>
      </fieldset>
      <fieldset className="field is-grouped is-justify-content-center">
        <legend className='label has-text-centered'>
          Bitterness {beersFilter.ibu_gt}-{beersFilter.ibu_lt}
        </legend>
<<<<<<< HEAD
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
      <fieldset >
        <label  htmlFor="malt">Malts:</label>
        <div class='select'>
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
        </div>
      </fieldset>
      <fieldset  >
        <label  htmlFor="orderby">Order by:</label>
      <div class='select is-small'>
        <select  id='orderby' name='orderby' onChange={(e) => {
            beerOrder(e.target.value);
            
          }}>
          <option value="">Choose you option...</option>
          
          <option value="ibu asc" >Bitterness asc.</option>
          <option value="ibu desc" >Bitterness desc.</option>
          <option value="abv asc" >Alcohol asc.</option>
          <option value="abv desc" >Alcohol desc.</option>
  
          </select>
          </div>
          </fieldset>
        {/* <fieldset
        onChange={(e) => {
          beerOrder(e.target.id, e.target.value);
          console.log(e.target.id, e.target.value)
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
      </fieldset> */}
=======
        <label htmlFor="ibu_gt" className="control">
          min
        </label>
        <div className="control">
          <input
            type="range"
            id="ibu_gt"
            max={200}
            defaultValue={beersFilter.ibu_gt}
            onChange={bupdateBeersFilter}
          ></input>
        </div>
        <label htmlFor="ibu_lt" className="control">
          max
        </label>
        <div className="control">
          <input
            type="range"
            id="ibu_lt"
            max={200}
            defaultValue={200}
            onChange={bupdateBeersFilter}
          ></input>
        </div>
      </fieldset>
      <div className="field is-flex is-justify-content-space-around">
        <fieldset className="field">
          <div className="select is-rounded is-small selectors  ">
            <select
              id="malt"
              name="malt"
              onChange={bupdateBeersFilter}
              defaultValue={""}
            >
              <option value="">Malt...</option>
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
          </div>
        </fieldset>
        <fieldset className="field">
          <div className="select is-rounded is-small selectors">
            <select
              id="orderby"
              name="orderby"
              onChange={(e) => {
                beerOrder(e.target.value);
              }}
            >
              <option value="">Order by...</option>

              <option value="ibu asc">Bitterness asc.</option>
              <option value="ibu desc">Bitterness desc.</option>
              <option value="abv asc">Alcohol asc.</option>
              <option value="abv desc">Alcohol desc.</option>
            </select>
          </div>
        </fieldset>
      </div>
>>>>>>> 258bab15d0b074e1d421711400f97da538188def
    </form>
  );
};
