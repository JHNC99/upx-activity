import { useCharacters } from "../../../hooks";
import FilterList from "./components/FilterList";
import List from "./components/List";
import { Paginate } from "./components/Paginate";
const ListCharacters = () => {
  const { characters, numOfPages } = useCharacters();
  return (
    <div className="card">
      <div className="card-body">
        <FilterList />
        <div className="table-responsive  rounded">
          <table className="table align-middle text-nowrap mb-0">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Genero</th>
                <th>Locación</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {characters &&
                characters.map((character) => (
                  <List key={character.id} character={character} />
                ))}
            </tbody>
          </table>
          {numOfPages > 1 && <Paginate />}
        </div>
      </div>
    </div>
  );
};

export default ListCharacters;
