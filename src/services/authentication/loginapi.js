import AxiosClient from "../AxiosClient";

export default async function loginapi({ email, password }) {
  console.log("+++++++++++++",email,password);
  return AxiosClient.post(`/api/v1/user/login`, {
    email,
    password,
  }).then((res) => res.data);
}
