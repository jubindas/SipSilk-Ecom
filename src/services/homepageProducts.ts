import api from "./axios";

export const getPopulerProducts = async () => {
  const response = await api.get("/products/special/featured?limit=4");

  if (response.status !== 200) {
    throw new Error("Failed to fetch populer products");
  }

  return response.data;
};

export const getNewArrivalProducts = async () => {
  const response = await api.get("/products/special/new-collection?limit=5");

  if (response.status !== 200) {
    throw new Error("Failed to fetch new arrival products");
  }
  console.log("the res is", response.data);

  return response.data;
};

export const getPopulerItems = async () => {
  const response = await api.get("/products/special/best-selling?limit=4");

  if (response.status !== 200) {
    throw new Error("Failed to fetch new arrival products");
  }

  return response.data;
};

export const searchQuery = async (query: string) => {
  console.log("the query backend is", query);

  const response = await api.get(
    `/products/search/query?query=${query}&limit=10`
  );

  if (response.status !== 200) {
    throw new Error("Something went wrong, try again later");
  }

  return response.data;
};
