import axios from "axios";

const apiUrl = import.meta.env.VITE_URL_API;
const customFetch = axios.create({
  baseURL: apiUrl,
});

export const checkErrorResponse = (error, thunkAPI) => {
  if (error.response.status === 404) {
    return thunkAPI.rejectWithValue("Error al buscar el elemento");
  }
  console.log(error);
  return thunkAPI.rejectWithValue("Error al intentar obtener el elemento");
};

export default customFetch;
