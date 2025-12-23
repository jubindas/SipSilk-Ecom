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

    return response.data.data;
  } catch (error) {
    console.log("the error is", error);
  }
};

interface BankDetails {
  accountHolderName: string;
  accountNumber: string;
  ifsc: string;
  bankName: string;
  branchName: string;
}
export const addBankDetails = async (bankDetails: BankDetails) => {
  try {
    const response = await api.post(`/users/bank-details`, bankDetails);

    if (response.status !== 201) {
      throw new Error("something went wrong. please try again");
    }

    return response.data;
  } catch (error) {
    console.log("the error is", error);
  }
};

interface changePassword {
  oldPassword: string;
  newPassword: string;
}
export const changePassword = async (changePass: changePassword) => {
  try {
    const response = await api.put("/users/change-password", changePass);

    if (response.status !== 200) {
      throw new Error("something went wrong try again");
    }

    return response.data;
  } catch (error) {
    console.log("the error is", error);
  }
};

interface UpdateBankPayload {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
  ifsc: string;
  branchName: string;
}

export const updateBankDetails = async (bankDetails: UpdateBankPayload) => {
  const response = await api.put("/users/bank-details", bankDetails);

  if (response.status !== 200 && response.status !== 204) {
    throw new Error("Failed to update bank details");
  }

  return response.data;
};

