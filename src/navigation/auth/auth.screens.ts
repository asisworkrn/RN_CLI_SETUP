import Login from "@src/screens/auth/Login";
import Signup from "@src/screens/auth/Signup";


export const AUTH_SCREENS = [
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Signup",
    component: Signup,
  },
] as const;