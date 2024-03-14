import { useDispatch } from "react-redux";
import { isloggedin } from "../feature/LoginSlice";

const useLogout = () => {
  let dispatch = useDispatch();
  return dispatch(isloggedin(false));
};
