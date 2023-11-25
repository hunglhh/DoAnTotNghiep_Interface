import Http from "../helpers/http";

const http = new Http();

const register = async (
    fullname,
    username,
    email,
    password,
    confirm_password
  ) => {
    const body = { fullname, username, email, password, confirm_password };
    return await http.post("/auth/register", body).then((response) => {
      return response;
    });
  };

  export const userService = {
    register,
  };