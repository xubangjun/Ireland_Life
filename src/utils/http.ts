import qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

interface config extends RequestInit {
  token?: String;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: config,
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? "Bearer ${token}" : "",
      "Content-Type": data ? "application/json" : "application/json",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status == 401) {
        // await auth.logout()
        window.location.reload();
        return Promise.reject({ message: "please login" });
      }

      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export {};
