import PropTypes from "prop-types";
import CheckStatus from "../../components/CheckStatus";
import CheckGender from "../../components/CheckGender";
const List = ({ character }) => {
  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
            src={character.image}
            className="rounded-circle"
            alt="modernize-img"
            width="56"
            height="56"
          />
          <div className="ms-3">
            <h6>{character.name}</h6>
            <p className="mb-0">
              <strong>Especie: </strong>
              <span>
                {character.species ? character.species : "Desconicido"}
              </span>
            </p>
          </div>
        </div>
      </td>
      <td>
        <CheckGender gender={character.gender} />
      </td>
      <td>
        <p>{character.location.name}</p>
      </td>
      <th>
        <CheckStatus status={character.status} />
      </th>
      <td>
        {/* 
          TODO:
            -View detail of the character
        */}
        <a href="">
          <i className="fa fa-eye"></i>
        </a>
      </td>
    </tr>
  );
};

export default List;
List.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    species: PropTypes.string,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
};
