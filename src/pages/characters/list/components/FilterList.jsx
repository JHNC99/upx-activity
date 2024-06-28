import { useCharacters } from "../../../../hooks";
import { FormInput, FormSelect } from "../../../../components";
const FilterList = () => {
  const {
    optimizedDebounce,
    localSearch,
    handleSubmit,
    isLoading,
    handleSearch,
    searchStatus,
  } = useCharacters();
  const status = [
    {
      label: "Todos",
      value: "",
    },
    {
      label: "Dead",
      value: "dead",
    },
    {
      label: "unknown",
      value: "unknown",
    },
    {
      label: "Alive",
      value: "alive",
    },
  ];

  return (
    <form className="row align-items-end">
      <div className="col-12 col-md-4 col-lg-4">
        <FormInput
          labelText="Personaje"
          type="text"
          name="search"
          value={localSearch}
          handleChange={optimizedDebounce}
          placeholder="Ej. Morty"
        />
      </div>
      <div className="col-12 col-md-4 col-lg-4">
        <FormSelect
          labelText="status"
          name="searchStatus"
          value={searchStatus}
          handleChange={handleSearch}
          list={status}
        />
      </div>

      <div className="col-12 col-md-2 col-lg-2 mb-3">
        <button
          className="btn btn-block btn-danger w-100"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          clear filters
        </button>
      </div>
    </form>
  );
};

export default FilterList;
