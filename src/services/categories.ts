import api from "./axios";

export const getAllCategories = async () => {
  try {
    const response = await api.get("/categories");

    if (response.status !== 200) {
      throw new Error("something went wrong try again later");
    }

    return response.data.data;
  } catch (error) {
    console.log("the error is", error);
  }
};

export const getcategoriesById = async (categoryId: string | undefined) => {
  try {
    const response = await api.get(`/categories/${categoryId}`);

    if (response.status !== 200) {
      throw new Error("something went wrong try again later");
    }

    console.log("the response data is", response.data);

    return response.data;
  } catch (error) {
    console.log("the error is", error);
  }
};
