import axios from "axios";
import { create } from "zustand";

import AsyncStorage from "@react-native-async-storage/async-storage";

const useLogin = create((set) => ({
  response: null,
  loading: false,
  error: null,
  token: null,
  userLogin: async (input) => {
    set({ loading: true });

    try {
      const res = await axios.post("http://103.214.113.5:3000/login", input, {
        withCredentials: true,
      });

      console.log(res);
      set({ loading: false });
      set({ response: await res.data });
      set({ token: await res.data.token });
    } catch (error) {
      set({ error: error });
      set({ loading: false });
      // console.log(error);
    }
  },

  removeError: () => {
    set({ error: null });
  },

  // removeCredential: () => {
  //   // set({ response: null });
  //   set({ token: null });
  //   set({ error: null });
  // },
}));
export default useLogin;
