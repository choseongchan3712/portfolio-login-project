import axios from "axios";

const loginApi = axios.create({
  baseURL:"https://login-server-za79.onrender.com",
});

export const postRegister = async (username: string, password: string) => {
  return loginApi.post("/register", {
    username,
    password,
  });
};

export const login = (username:string, password:string) => {
  return loginApi.post("/login", {
    username,
    password,
  })
};