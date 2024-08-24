import create from "zustand";
import { User } from "../interfaces/user.interface";

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  setUser: (user) => { 
    set({ user }) 
  },
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
