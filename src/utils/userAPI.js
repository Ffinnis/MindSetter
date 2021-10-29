import { $host } from "./helper";

export const registration = async (username, password) => {
  const response = await $host
    .post("api/register", {
      username: username,
      password: password,
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

export const login = async (username, password) => {
  const response = await $host
    .post(
      "api/login",
      {
        username: username,
        password: password,
      },
      {
        credentials: "include",
      }
    )
    .catch((err) => {
      return {
        message: err.response.data,
        status: err.response.status,
      };
    });
  return response;
};

export const check = async () => {
  const response = await $host.post("api/check", {}).catch((e) => {
    alert(e.response.data);
  });
  return response;
};
