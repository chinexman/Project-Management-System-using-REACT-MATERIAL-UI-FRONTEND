import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { setTimeout } from "timers";
import { authContext } from "../../Utils/Authcontext";
// import Delete from "../../image/Delete.svg";

function AddTask() {
  type teamType = string[];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [Projects, setProjects] = useState<teamType>([]);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState("");
  const { token } = useContext(authContext);

  useEffect(() => {
    axios
      .request({
        url: "https://kojjac.herokuapp.com/",
        method: "get",
        headers: { token: token! },
        withCredentials: true,
      })
      .then((response: any) => {
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    //this should prompt the update-[profile end-point
    axios
      .request({
        url: "https://kojjac.herokuapp.com/",
        method: "post",
        data: { title, description, assignee },
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

  return (
    <div>
      <Wrapper>
        <div className="name">
          <h1>Add a New Task</h1>
          <BorderBottom />
        </div>
        <Form className="profileForm" onSubmit={submitHandler}>
          <label>
            <h3> Title </h3>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type=" text"
              placeholder="Title of task"
            />
          </label>

          <label>
            <h3> Description </h3>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type=" text"
              placeholder="Description of task"
            />
          </label>

          <label>
            <h3> Assignee </h3>
            <Select name="assignee">
              <option value="3223hdfh34">Kayode Odole</option>
              <option value="3223hdfh34">Jennifer Isintume</option>
              <option value="3223hdfh34">Muazu Abu</option>
              <option value="3223hdfh34">Jahswill Apata</option>
            </Select>
          </label>

          <button disabled={loading} type="submit" className="button">
            {loading ? "Loading" : "Create Task"}
          </button>
          {/* {failed ? <strong className="failure-tag">Failed to update</strong> :  <strong className="failure-tag">Update successful</strong>} */}
          <p>{failed}</p>
        </Form>
      </Wrapper>
    </div>
  );
}

export default AddTask;

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
  border-radius: 10px;
  .profileForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  .Projects-input {
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
    font-color: red;
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

const Select = styled.select`
  width: 40vw;
  min-width: 300px;
  height: 6vh;
  min-height: 6vh;
  background-color: var(--lightGrey-background);
  border: none;
  border-radius: 10px;
  margin: 10px 0;
  font-size: 1rem;
`;
export const BorderBottom = styled.div`
  margin: 40px 0px;
  border-bottom: 1px solid #ececec;
  width: 45vw;
`;
