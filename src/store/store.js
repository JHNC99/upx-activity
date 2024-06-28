import { configureStore } from "@reduxjs/toolkit";
import allCharacterSlice from "./slices/allCharacters/allCharactersSlice";
export const store = configureStore({
  reducer: {
    allCharacters: allCharacterSlice,
  },
});
