import { useCharacters } from "../../../hooks";
import FilterList from "./components/FilterList";
import List from "./components/List";
import { Paginate } from "./components/Paginate";
const ListCharacters = () => {
  const {
    characters,
    numOfPages,
    setPage,
    page,
    optimizedDebounce,
    localSearch,
    isLoading,
    handleSubmit,
    handleSearch,
    searchStatus,
  } = useCharacters();
  return (
    <div className="card">
      <div className="card-body">
        <FilterList
          optimizedDebounce={optimizedDebounce}
          localSearch={localSearch}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          handleSearch={handleSearch}
          searchStatus={searchStatus}
        />
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
          {numOfPages > 1 && (
            <Paginate page={page} setPage={setPage} numOfPages={numOfPages} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListCharacters;
