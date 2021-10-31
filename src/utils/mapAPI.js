import { $host } from "./helper";

export const saveMapDB = async (id, json) => {
  const response = await $host
    .post("/api/map", {
      id: id,
      json: json,
    })
    .catch((err) => {
      return {
        message: err.response.data,
        status: err.response.status,
      };
    });
  console.log(response);
  return response;
};

export const getAllMaps = async (id) => {
  const response = await $host.get(`/api/map/${id}`).catch((err) => {
    return {
      message: err.response.data,
      status: err.response.status,
    };
  });
  console.log(response);
  return response;
};
