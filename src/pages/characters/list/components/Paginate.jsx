import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
export const Paginate = ({ page, setPage, numOfPages }) => {
  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setPage(selectedPage);
  };
  return (
    <div className="mt-4">
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente"}
        breakLabel={"..."}
        pageCount={numOfPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={page - 1}
      />
    </div>
  );
};
Paginate.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  numOfPages: PropTypes.number.isRequired,
};
