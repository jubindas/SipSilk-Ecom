import api from "./axios";

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
