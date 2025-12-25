import api from "./axios";

export const getProductsByCategory = async (productId: string | undefined) => {
  try {
    const response = await api.get(`/products/${productId}`);

    if (response.status !== 200) {
      throw new Error("something went wrong, try again later");
    }

    return response.data;
  } catch (error) {
    console.log("the error is", error);
  }
};
