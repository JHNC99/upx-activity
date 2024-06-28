import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changePage,
  handleChange,
  clearFilters,
  getAllCharacters,
} from "../../store/slices/allCharacters";
const useCharacters = () => {
  const [localSearch, setLocalSearch] = useState("");
  const {
    isLoading,
    search,
    totalCharacters,
    page,
    numOfPages,
    characters,
    searchStatus,
  } = useSelector((store) => store.allCharacters);
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(getAllCharacters());
  };

  /* paginate */
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const setPage = (num) => {
    dispatch(changePage(num));
  };

  /* filters */
  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch, page, search,searchStatus]);

  return {
    isLoading,
    page,
    numOfPages,
    characters,
    search,
    totalCharacters,
    pages,
    fetchData,
    setPage,
    handleSearch,
    debounce,
    optimizedDebounce,
    localSearch,
    handleSubmit,
    searchStatus,
  };
};

export default useCharacters;
