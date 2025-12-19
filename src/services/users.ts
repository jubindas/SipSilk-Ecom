import api from "./axios";

interface User {
  password: string;
  fullName: string;
  email: string;
}

export const registration = async (user: User) => {
  try {
    const response = await api.post(`/users/register`, user);

    if (response.status !== 201) {
      throw new Error("something went wrong, please try againg later");
    }

    return response.data;
  } catch (error) {
    console.log("the error is", error);
  }
};

interface login {
  email: string;
  password: string;
}
export const loginUser = async (login: login) => {
  try {
    const res = await api.post(`/users/login`, login);

    if (res.status !== 200) {
      throw new Error("something went wrong. try again");
    }

    return res.data.data;
  } catch (error) {
    console.log("the error is", error);
  }
};

export const getProfile = async () => {
  try {
    const response = await api.get(`/users/profile`);

    if (response.status !== 200) {
      throw new Error("something went wrong, please try again");
    }

    return response.data;
  } catch (error) {
    console.log("the error is", error);
  }
};
