import axios from "axios";
import { create } from "zustand";

const useRecipes = create((set) => ({
  response: null,
  totalPages: 0,
  loading: false,
  error: null,
  responsePost: null,

  fetchRecipes: async (jwt, limit, page, sort = "desc") => {
    set({ loading: true });
    try {
      const data = await axios.get(
        `http://103.214.113.5:3000/recipes?limit=${limit}&page=${page}&sort=${sort}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          withCredentials: true,
        }
      );
      set({ loading: false });
      set({ response: await data.data.recipes });
      set({ totalPages: await data.data.total_page });
      // console.log(data.data);
    } catch (error) {
      set({ error: error });
      // console.log(error);
    }
  },

  postRecipe: async (jwt, input) => {
    set({ loading: true });
    try {
      const data = await axios.post(
        "http://103.214.113.5:3000/recipes",
        input,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      set({ responsePost: await data.data });
      set({ loading: false });
      // console.log(data);
    } catch (error) {
      set({ error: error });
      // console.log(error);
    }
  },
}));

export default useRecipes;
