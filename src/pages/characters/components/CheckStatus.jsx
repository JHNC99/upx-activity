import PropTypes from "prop-types";
const CheckStatus = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "pill-success";
      case "dead":
        return "pill-danger";
      case "unknown":
        return "bg-secondary";
      default:
        return "";
    }
  };

  return <span className={`badge ${getStatusClass(status)}`}>{status}</span>;
};

export default CheckStatus;
CheckStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
