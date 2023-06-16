import axios from "axios";
import { create } from "zustand";

const useMyRecipes = create((set) => ({
  myRecipes: [],
  loading: false,
  error: null,
  getMyRecipes: async (jwt) => {
    set({ loading: true });

    try {
      const res = await axios.get("http://103.214.113.5:3000/my-recipes", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true,
      });

      set({ myRecipes: await res.data.recipes });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
}));
export default useMyRecipes;
