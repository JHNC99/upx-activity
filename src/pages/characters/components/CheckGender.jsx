import { PropTypes } from "prop-types";
const CheckGender = ({ gender }) => {
  const getGenderClass = (gender) => {
    switch (gender.toLowerCase()) {
      case "female":
        return "badge pill-pink";
      case "male":
        return "badge pill-primary";
      case "genderless":
        return "badge pill-warning";
      case "unknown":
        return "badge bg-secondary";
      default:
        return "badge bg-secondary";
    }
  };

  return <span className={getGenderClass(gender)}>{gender}</span>;
};

export default CheckGender;
CheckGender.propTypes = {
  gender: PropTypes.string.isRequired,
};
