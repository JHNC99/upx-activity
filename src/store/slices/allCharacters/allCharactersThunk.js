import customFetch, { checkErrorResponse } from "../../../utils/customFecth";
export const getAllCharactersThunk = async (_, thunkAPI) => {
  const { page, search, searchStatus } = thunkAPI.getState().allCharacters;

  let url = `character/?page=${page}&status=${searchStatus}`;
  if (search) {
    url = url + `&name=${search}`;
  }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkErrorResponse(error, thunkAPI);
  }
};
