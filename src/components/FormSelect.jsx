import { PropTypes } from "prop-types";
const FormSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue.value}>
              {itemValue.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
FormSelect.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
