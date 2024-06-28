import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { getAllCharactersThunk } from "./allCharactersThunk";
const initialFiltersState = {
  search: "",
  searchStatus: "",
};
const initialState = {
  isLoading: true,
  totalCharacters: 0,
  numOfPages: 1,
  page: 1,
  characters: [],
  ...initialFiltersState,
};
export const getAllCharacters = createAsyncThunk(
  "allCharacters/getAllCharacters",
  getAllCharactersThunk
);

const allCharacterSlice = createSlice({
  name: "allCharacters",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...initialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCharacters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.numOfPages = payload.info.pages;
        state.totalCharacters = payload.info.count;
        state.characters = payload.results;
      })
      .addCase(getAllCharacters.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});
export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
  clearAllCharacters,
} = allCharacterSlice.actions;
export default allCharacterSlice.reducer;
