import "./style.css";

export const SearchBar = ({ params }) => {
  const [searchParams, updateSearchParams] = params;

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
          id="abv_lt"
          max={200}
          defaultValue={200}
          onChange={updateSearchParams}
        ></input>
      </fieldset>
    </form>
  );
};
