import styled from "styled-components";
import { FC, useContext, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Header from "../../components/Header";
import TaskDescription from "./TaskDescription";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TaskInterface } from "../../Interfaces/interface";
import { authContext } from "../../Utils/Authcontext";

export const DisplayTask: FC<{ setOpenTask: Function }> = ({ setOpenTask }) => {
  const { projectId } = useParams<{ projectId: string }>();
  const [backlogs, setBacklogs] = useState<TaskInterface[]>([]);
  const [todos, setTodos] = useState<TaskInterface[]>([]);
  const [done, setDone] = useState<TaskInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(authContext);

  const headerlinks = [
    { name: "Tasks", link: `/tasks/${projectId}` },
    { name: "Kanban", link: "/kanban" },
    { name: "Activity", link: "/activity" },
    { name: "Calendar", link: "/calendar" },
    { name: "Files", link: "/file" },
  ];

  useEffect(() => {
    //get task with backlog status
    axios
      .request<{ tasks: TaskInterface[] }>({
        url: `${
          process.env.REACT_APP_BACKEND_URL as string
        }/tasks/getTasks/${token}/backlog`,
        headers: { token: token! },
        method: "get",
      })
      .then((response) => {
        console.log("Success:", response.data.tasks);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error, unable to get Task by status");
      });

    //get task with todo status
    axios
      .request<{ tasks: TaskInterface[] }>({
        url: `${
          process.env.REACT_APP_BACKEND_URL as string
        }/tasks/getTasks/${token}/todo`,
        headers: { token: token! },
        method: "get",
      })
      .then((response) => {
        console.log("Success:", response.data.tasks);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error, unable to get Task by status");
      });

    //get task with done status
    //get task with backlog status
    axios
      .request<{ tasks: TaskInterface[] }>({
        url: `${
          process.env.REACT_APP_BACKEND_URL as string
        }/tasks/getTasks/${token}/done`,
        headers: { token: token! },
        method: "get",
      })
      .then((response) => {
        console.log("Success:", response.data.tasks);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error, unable to get Task by status");
      });
  });

  return (
    <div>
      <Header signOut="signOut" header="PROJECT PRIMUS" headerlinks={headerlinks} />
      <div style={{ display: "flex" }}>
        <DisplayTaskContainer>
          {/* Display tasks in backlog */}
          <TaskCardGroup title={"Backlog"} setOpenTask={setOpenTask}>
            {backlogs.length > 0 ? (
              <DisplayTaskCard
                title="E-mail after registration so that I can confirm my address"
                tag="Development"
              />
            ) : (
              <p>No backlogs</p>
            )}
            {/* */}
          </TaskCardGroup>

          <TaskCardGroup title={"Todo"} setOpenTask={setOpenTask}>
            {todos.length > 0 ? (
              <DisplayTaskCard
                title="E-mail after registration so that I can confirm my address"
                tag="UI/UX"
              />
            ) : (
              <p>No todos</p>
            )}
          </TaskCardGroup>

          <TaskCardGroup title={"Done"} setOpenTask={setOpenTask}>
            {done.length > 0 ? (
              <DisplayTaskCard
                title="E-mail after registration so that I can confirm my address"
                tag="Development"
                avatarUrl="https://res.cloudinary.com/projectmanagementgroupb/image/upload/v1634869516/vjjkzu5pxvy3n0sylgua.jpg"
              />
            ) : (
              <p>No task is done</p>
            )}
          </TaskCardGroup>
        </DisplayTaskContainer>
        <TaskDescription />
      </div>
    </div>
  );
};

const DisplayTaskCard: FC<{ title: string; tag: string; avatarUrl?: string }> =
  ({ title, tag, avatarUrl = "" }) => {
    const tagColorAndBg = generateRandomFontColor();

    return (
      <CardBody custom_background={generateRandomHexColor()}>
        <div style={{ display: "flex", margin: " 10px 0" }}>
          <TaskCardCheckBox type="checkbox" />
          <h3
            style={{
              display: "inline-block",
              marginLeft: "20px",
              lineHeight: "27px",
            }}
          >
            {title}
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "29px",
            alignItems: "center",
          }}
        >
          <div>
            {avatarUrl ? <Avatar src={avatarUrl} /> : <AccountCircleIcon />}
          </div>
          <TagContainer
            custom_color={tagColorAndBg.color}
            background={tagColorAndBg.background}
          >
            {tag}
          </TagContainer>
        </div>
      </CardBody>
    );
  };

const TaskCardGroup: FC<{ title: string; setOpenTask: Function }> = ({
  title,
  children,
  setOpenTask,
}) => {
  return (
    <TaskCardGroupContainer>
      <TaskCardGroupHeader>
        <h1 style={{ display: "inline-block" }}>{title}</h1>
        <AddTaskDiv onClick={(e) => setOpenTask(true)}>+ Add Task</AddTaskDiv>
      </TaskCardGroupHeader>
      <TaskCardGroupBody>{children}</TaskCardGroupBody>
    </TaskCardGroupContainer>
  );
};

export function generateRandomHexColor() {
  const colors = ["#F7F6F3", "#FFF8DD", "#EAEAEA"];
  const randomIndex = Math.floor(Math.random() * colors.length + 0);
  return colors[randomIndex];
}

export function generateRandomFontColor() {
  const backgroundOpacity = 0.1;
  const colors = [
    { color: [237, 100, 0, 1], background: [237, 100, 0, backgroundOpacity] },
    { color: [118, 76, 237, 1], background: [118, 76, 237, backgroundOpacity] },
    { color: [25, 117, 208, 1], background: [25, 117, 208, backgroundOpacity] },
  ];
  const randomIndex = Math.floor(Math.random() * colors.length + 0);
  return colors[randomIndex];
}

const DisplayTaskContainer = styled.div`
  background-color: white;
  width: 45% !important;
  padding: 30px;
  height: 82vh;
  margin-top: 5px;
  margin-bottom: 50px;
  overflow-y: auto;
`;

const CardBody = styled.div<{ custom_background: string }>`
  background-color: ${(props) => props.custom_background};
  margin: 20px 0;
  padding: 20px 20px;
  border-radius: 20px;
`;
const TaskCardGroupContainer = styled.div`
  background-color: white;
  margin-bottom: 40px;
`;
const TaskCardGroupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TaskCardGroupBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddTaskDiv = styled.div`
  background-color: #cef9c6;
  border-radius: 20px;
  padding: 15px 25px;
  font-weight: bold;
  cursor: pointer;
`;

const TaskCardCheckBox = styled.input`
  display: inline-block;
  border: 1px solid #000000;
  margin-top: 10px;
`;
const TagContainer = styled.div<{
  background: number[];
  custom_color: number[];
}>`
  font-weight: bold;
  line-height: 20px;
  font-family: Heebo;
  color: rgba(${(props) => props.custom_color.join()});
  background-color: rgba(${(props) => props.background.join()});
  padding: 4px 10px;
  border-radius: 20px;
  margin-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
`;
