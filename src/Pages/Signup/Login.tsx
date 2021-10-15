import React, { useState } from "react";
import axios, { Axios } from "axios";
import styled from "styled-components";
import Logo from "../../Assets/logo.svg";
import Loading from "./Spinner";
import ErrorMessage from "./errorMessage";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, _setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_cookies, setCookie] = useCookies(["user"]);

  const handle = () => {
    setCookie("user", "gowtham", {
      path: "/",
    });
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();

    interface AxiosInterface {
      email: string;
      password: string;
      token?: string;
    }
    setLoading(true);
    await axios
      .request<AxiosInterface>({
        url: "http://192.168.0.28:3008/users/login",
        method: "post",
        data: { email, password },
        withCredentials: true,
      })
      .then(async (response) => {
        console.log("Success:", response);
        setLoading(false);

        const token = response.data.token;
        await axios
          .request<{ msg: string }>({
            url: "http://192.168.0.28:3008/users/welcome",
            method: "get",
          })
          .catch((err) => {
            console.log("Without Token!: ", err.response.data.msg);
          });

        await axios
          .request<{ msg: string }>({
            url: "http://192.168.0.28:3008/users/welcome",
            headers: { token: token! },
            method: "get",
          })
          .then((response) => {
            console.log("With Token!: ", response.data.msg);
          });
      })
      .catch((error) => {
        console.log(error.response);
        // setError(error.response.data.message)
        setLoading(false);
      });
  };

  return (
    <Wrapper>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <div className="login">
        <img className="logo" src={Logo} alt="Login" />
        <BorderBottom />
        <form onSubmit={submitHandler}>
          <label>
            <h3> Email Address</h3>
            <Input
              type="text"
              placeholder="Enter Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <h3> Password</h3>
            <Input
              type="password"
              placeholder="Enter Paasword"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <Button onClick={handle}>Login </Button>
        </form>
      </div>
      <SSOWrapper>
        <a href="https://kojjac.herokuapp.com/users/google">
          <GoogleButton>Use Google Account</GoogleButton>
        </a>
        <a href="https://kojjac.herokuapp.com/users/auth/facebook/callback">
          <FacebookButton>Use Facebook Account</FacebookButton>
        </a>
      </SSOWrapper>
    </Wrapper>
  );
}

export default Login;

export const SSOWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GoogleButton = styled.button`
  width: 255px;
  height: 50px;
  border: none;
  border-radius: 25px;
  margin: 20px 25px;
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  background-color: var(--color-green);
  cursor: pointer;
`;
export const FacebookButton = styled.button`
  width: 255px;
  height: 50px;
  border: none;
  border-radius: 25px;
  margin: 20px 25px;
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  background-color: var(--color-green);
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--deepGrey-background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login {
    background-color: var(--white-background);
    width: 505px;
    height: 692px;
    padding: 20px;
  }
`;
export const BorderBottom = styled.div`
  margin: 40px 0px;
  border-bottom: 1px solid #ececec; ;
`;
export const Input = styled.input`
  background: var(--lightGrey-background);
  border-radius: 8px;
  display: block;
  width: 445px;
  height: 50px;
  border: none;
  margin: 10px 0;
  font-size: 20px;
  font-style: bold;
  padding: 25px;
`;

export const Button = styled.button`
  width: 444px;
  height: 50px;
  background-color: var(--color-green);
  border: none;
  border-radius: 25px;
  margin: 20px 0;
  font-family: Heebo;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  cursor: pointer;
`;
