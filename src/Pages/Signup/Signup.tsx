import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Logo from "../../Assets/logo.svg";
import Loading from "./Spinner";
import ErrorMessage from "./errorMessage";

function Signup() {
  const [fullname, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMesssage] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        "https://kojjac.herokuapp.com/users/signup",
        {
          fullname,
          email,
          password,
        }
      );

      console.log(data);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      console.log(error.response.data);
      // setError(error.response.data.message)
      setLoading(false);
    }
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
            <h3> Full Name</h3>
            <Input
              type="text"
              placeholder="Full Name"
              value={fullname}
              onChange={(e) => setfullName(e.target.value)}
              required
            />
          </label>
          <label>
            <h3> Email Address</h3>
            <Input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            <h3> Password</h3>
            <Input
              type="text"
              placeholder="Enter Paasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            <h3>Repeat Password </h3>
            <Input
              id="fn"
              type="text"
              placeholder="Repeat Password"
              required
              //   value ={name}
              //   onChange = {e => setfullName(e.target.value)}
            />
          </label>

          <Button>signup </Button>
        </form>
      </div>
    </Wrapper>
  );
}

export default Signup;

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
