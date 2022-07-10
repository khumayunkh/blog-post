import axios from "axios";


const API_URL = "https://splunk.backpackertrail.de/";
const register = ( email, password) => {
  return axios.post(API_URL + "users",{
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "token/", {
      email,
      password,
    },
    {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }
  )
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

