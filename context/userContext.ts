import { atom } from "jotai";

export const userAtom = atom({
  id: "",
  username: "",
  userType: "",
  loggedIn: false,
});
