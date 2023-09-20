import axios from "axios";
import { server } from "../store";

export const loginUser = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginUserRequest",
    });

    const { data } = await axios.post(`${server}/login`, {
      email: username,
      password: password,
    });

    dispatch({
      type: "loginUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loginUserFail",
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
