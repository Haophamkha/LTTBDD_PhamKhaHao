import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { login, logout } from "./authSlice";

export function useAuth() {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.auth.user);
  const token = useSelector((state: RootState) => state.auth.token);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const loginUser = () => {
    dispatch(
      login({
        user: {
          id: "1",
          name: "Phạm Khả Hào",
          email: "phamkhahao@gmail.com",
        },
        token: "token999",
      }),
    );
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    token,
    isLoggedIn,
    login: loginUser,
    logout: logoutUser,
  };
}
