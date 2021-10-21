/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { setTimeout } from "timers";
import Header from "../../components/Header";
import Image from "../../Images/avatar.jpg";
import Delete from "../../Images/Delete.svg";
import Home from "../Home/Home";

function Profile() {
  type teamType = string[];
  const [fullname, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  // const [location, setLocation] = useState('')
  const [profileImage, setProfileImage] = useState("");
  const [about, setAbout] = useState("");
  const [teams, setTeams] = useState<teamType>([]);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState("");
  const [file, setFile] = useState("");
  ////test array of teams
  const teamsArr = [
    "Front-end",
    "middle-end",
    "Front-end",
    "middle-end",
    "Front-end",
    "middle-end",
  ];
  const token = localStorage.getItem("token");
  useEffect(() => {
    setTeams(teamsArr); //the getAllteams endpoint
    axios
      .request({
        url: "https://kojjac.herokuapp.com/users/profile",
        method: "get",
        headers: { token: token! },
        withCredentials: true,
      })
      .then((response: any) => {
        setFullName(response.data.data.fullname);
        setRole(response.data.data.role);
        setGender(response.data.data.gender);
        setLocation(response.data.data.location);
        setAbout(response.data.data.about);
        setProfileImage(response.data.data.profileImage);

        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

    //getting the teams the user is on
    // axios.request({
    // url: "https://kojjac.herokuapp.com/users/profile",
    // })
  }, []);

  const cancelAll = () => {
    setFullName("");
    setRole("");
    setGender("");
    setLocation("");
    setAbout("");
    //i don't know if the teams should also be cancelled
  };

  const leaveTeamFunc = () => {
    //this should prompt the leave-team end-point
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    //this should prompt the update-[profile end-point
    axios
      .request({
        url: "https://kojjac.herokuapp.com/users/profile",
        method: "put",
        data: { fullname, role, gender, location, about },
        headers: { token: token! },
        withCredentials: true,
      })
      .then((response: any) => {
        setLoading(false);
        setFailed("Updated successfully");

        console.log(response);
      })
      .catch((err) => {
        setFailed(err.response.data.messsage);
        console.log(err.response);
      });
  };

  const changePicFile = (e: any) => {
    // e.preventDefault() ///to allow the reload of the page when the pic is changed
    axios
      .request({
        url: "https://kojjac.herokuapp.com/users/uploadPictureCloudinary",
        method: "post",
        data: { profileImage },
        headers: { token: token! },
        withCredentials: true,
      })
      .then((response: any) => {
        setLoading(false);
        setFailed("Updated successfully");
        console.log(response);
      })
      .catch((err) => {
        setFailed(err.response.data.messsage);
        console.log(err.response);
      });
    console.log(e.target.files[0]);
  };
  const headerlinks = [
    {
      name: "Profile",
      link: "/profile",
    },
    {
      name: "Change Password",
      link: "/changepassword",
    },
  ];

  return (
    <Home>
      <Header header="Profile Settings" headerlinks={headerlinks}></Header>
      <Wrapper>
        <div className="image">
          {/* <div onClick={changePic} className="change-pic-div">change</div> */}
          <input
            className="change-pic-div"
            value={profileImage}
            onChange={() => changePicFile}
            accept="Image/"
            type="file"
          />

          <img src={profileImage} alt="avatar" />
        </div>
        <Form className="profileForm" onSubmit={submitHandler}>
          <label>
            <h3> Name </h3>
            <Input
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              type=" text"
              placeholder="Enter name"
            />
          </label>
          <label>
            <h3> Role </h3>
            <Input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              type=" text"
              placeholder="Role"
            />
          </label>
          <label>
            <h3> Gender </h3>
            <Input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              type=" text"
              placeholder="Male"
            />
          </label>
          <label>
            <h3> Location </h3>
            <Input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type=" text"
              placeholder="Location "
            />
          </label>

          <label>
            <h3> About</h3>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="about-textBox"
              placeholder="About"
            />
          </label>
          <button disabled={loading} type="submit" className="button">
            {loading ? "Loading" : "Update Profile"}
          </button>
          {/* {failed ? <strong className="failure-tag">Failed to update</strong> :  <strong className="failure-tag">Update successful</strong>} */}
          <p>{failed}</p>
          <p className="cancel-btn" onClick={cancelAll}>
            {" "}
            Cancel
          </p>
        </Form>
      </Wrapper>
    </Home>
  );
}

export default Profile;

const Wrapper = styled.div`
  margin-top: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 49vw;
  min-width: 400px;
  /* height: 90vh; */
  background-color: #ffffff;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .profileForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #ffffff;
    position: relative;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /* position: absolute;

    clip-path: circle(); */
  }

  .change-pic-div {
    width: 100px;
    height: 35px;
    background-color: var(--lightGrey-background);
    position: absolute;
    /* position: relative;*/
    top: 100px;
    left: 25px;
    text-align: center;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px 5px 5px 5px;
  }

  .button {
    border-radius: 50px;
    background-color: var(--color-green);
    text-align: center;
    width: 40vw;
    min-width: 300px;
    height: 6vh;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  h3 {
    font-size: 1rem;
  }

  .cancel-btn {
    display: block;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
  }

  .about-textBox {
    padding: 10px;
    margin: 10px 0;
    width: 40vw;
    height: 15vh;
    border: none;
    border-radius: 10px;
    background-color: var(--lightGrey-background);
  }

  .teams-input {
    width: 40vw;
    min-width: 300px;
    /* height: 6vh; */
    /* min-height: 6vh; */
    background-color: var(--lightGrey-background);
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    padding: 15px;

    height: 80px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .team-div {
    margin-left: 5px;
    justify-content: center;
    align-items: center;
  }

  .team-tag {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 10px;
    margin-top: -10px;
    margin-right: 5px;
  }

  .removeTeam {
    cursor: pointer;
  }

  .failure-tag {
    font-style: italic;
    margin: 10px 0px;
    color: red;
  }
`;

const Input = styled.input`
  width: 40vw;
  min-width: 300px;
  height: 6vh;
  min-height: 6vh;
  padding: 1rem;
  background-color: var(--lightGrey-background);
  border: none;
  border-radius: 10px;
  margin: 10px 0;
  font-size: 1rem;
`;
