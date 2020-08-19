import axios from "axios";

const baseURL = "https://gitconnected.com/v1/portfolio/aniketbadole";

export const getProfile = () => {
  return axios.get(baseURL).then(({ data }) => {
    return data;
  });
};
