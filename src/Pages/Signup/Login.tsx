import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../../Assets/logo.svg";
import Loading from "./Spinner";
import ErrorMessage from "./errorMessage";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);

  const handle = () => {
    setCookie("user", "gowtham", {
      path: "/",
    });
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();

    const config = {
      withCredentials: true,
    };
    setLoading(true);

    await axios
      .post(
        "http://192.168.0.195:3008/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("Success:", response);
        setLoading(false);
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
        <form
          //  onSubmit={submitHandler}
          method="post"
          action="http://192.168.0.195:3008/users/login"
        >
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

          <Button>
            <a href="http://192.168.0.53:3008/users/google">
              Use Google Account
            </a>
          </Button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Login;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--deepGrey-background);
  display: flex;
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
`;
