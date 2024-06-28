import PropTypes from "prop-types";
import { FormInput, FormSelect } from "../../../../components";
const FilterList = ({
  optimizedDebounce,
  localSearch,
  handleSubmit,
  isLoading,
  handleSearch,
  searchStatus,
}) => {
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
FilterList.propTypes = {
  optimizedDebounce: PropTypes.func.isRequired,
  localSearch: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchStatus: PropTypes.string.isRequired,
};
