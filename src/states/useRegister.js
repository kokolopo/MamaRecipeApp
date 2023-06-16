import axios from "axios";
import { create } from "zustand";

const useRegister = create((set) => ({
  response: null,
  loading: false,
  error: null,
  userRegister: async (input) => {
    try {
      const res = await axios.post("http://103.214.113.5:3000/users", input, {
        withCredentials: true,
      });
      set({ response: await res.data });
      console.log(res.data);
    } catch (error) {
      set({ error: error });
      set({ loading: false });
    }
  },
}));

export default useRegister;
