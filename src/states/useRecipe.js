import axios from "axios";
import { create } from "zustand";

const useRecipe = create((set) => ({
  response: null,
  loading: false,
  error: null,

  editRecipe: async (id, input, jwt) => {
    set({ loading: true });
    try {
      const res = await axios.put(
        `http://103.214.113.5:3000/recipes/${id}`,
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
      set({ loading: false });
      set({ response: await res.data });
    } catch (error) {
      set({ error: error });
    }
  },
  deleteRecipe: async (id, jwt) => {
    try {
      const res = await axios.delete(
        `http://103.214.113.5:3000/recipes/${id}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
          withCredentials: true,
        }
      );
      set({ loading: false });
      set({ response: await res.data });
      console.log(res.data);
    } catch (error) {
      set({ error: error });
    }
  },
}));
export default useRecipe;
