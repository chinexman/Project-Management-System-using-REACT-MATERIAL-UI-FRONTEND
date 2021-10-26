import { authContext } from "../../Utils/Authcontext";
import { useContext, useEffect, useState, FC } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid } from "../../components/Sidebar/sidebar.styles.";
import Image from "../../Images/profile2.png";
import Icon from "../../Assets/design.svg";
import Logo from "../../Assets/logo.svg";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import AddTeam from "../../components/Add A Team/AddTeam";
import ProtectedRoute from "../../Utils/ProtectedRoute";
import Switch from "react-bootstrap/esm/Switch";
import Profile from "../profile/Profile";
import ChangePassword from "../changePassword/ChangePassword";
import Teams from "../team/Teams";
import { ProjectInterface, TeamInterface } from "../../Interfaces/interface";
import AddProject from "../../components/AddaProjedct/AddaPrjedct";
import Demo from "../../Assets/demo.svg";
import File from "../filesPage/File";
import { DisplayTask } from "../task/DisplayTask";
import AddTask from "../task/AddTask";
import Activity from "../activityPage/Activity";
import Homepage from "../Home_page/Homepage";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const useStylesProject = makeStyles((theme) => ({
  projectModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Home: FC<{}> = ({ children }) => {
  console.log("renderi");
  const backendUrl = process.env.REACT_APP_BACKEND_URL as string;
  const { token, signOut } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [serverResponse, setResponse] = useState("");
  const [user, setUser] = useState<{ [key: string]: any }>({ name: "" });
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openProject, setOpenProject] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [toggle, setToggle] = useState(true);
  const [teams, setTeams] = useState<TeamInterface[]>();
  const [projects, setProjects] = useState<ProjectInterface[]>([]);
  const [openTask, setOpenTask] = useState(false);

  useEffect(() => {
    axios
      .request<{ msg: string; data: { [key: string]: any } }>({
        url: backendUrl + "/users/profile",
        headers: {
          token: token as string,
        },
        method: "GET",
      })
      .then((response) => {
        console.log(response);
        setUser(response.data.data);
        setImgUrl(
          response.data.data.profileImage
            ? response.data.data.profileImage
            : Image
        );
        setLoading(false);
      })
      .catch((e) => {
        setResponse(e.response.data.msg);
        signOut();
        setLoading(false);
        if (e.response.status === 401) {
          history.push("/login");
        }
      });

    //get projects

    axios
      .request<{ msg: string; projects: ProjectInterface[] }>({
        url: backendUrl + "/projects/getproject",
        headers: {
          token: token as string,
        },
        method: "GET",
      })
      .then((response) => {
        console.log(response);
        setProjects(response.data.projects);
        setLoading(false);
      })
      .catch((e) => {
        setResponse(e.response.data.msg);
        setLoading(false);
        if (e.response.status === 401) {
          signOut();
        }
      });

    //get  teams
    getTeams();
  }, []);

  const getTeams = () => {
    axios
      .request<{ teams: TeamInterface[] }>({
        url: "https://kojjac.herokuapp.com/teams/all",
        method: "get",
        headers: { token: token! },
      })
      .then((response) => {
        setTeams(response.data.teams);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleSignOut = () => {
    signOut();
    history.push("/login");
  };

  const showSidebar = () => {
    setToggle(!toggle);
    let sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("open");
  };

  const classes = useStyles();
  const classe = useStylesProject();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenProject = () => {
    setOpenProject(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseProject = () => {
    setOpenProject(false);
  };

  const handleCloseTask = () => {
    setOpenTask(false);
  };

  return loading ? (
    <h4>Loading... </h4>
  ) : (
    <>
      <Grid>
        <div className="sidebar open">
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus icon">
              <img
                style={{ width: "30%", marginRight: "1%" }}
                src={Logo}
                alt="logo"
              />
            </i>
            <div className="logo_name">PROJECTUS</div>
            <i className="bx bx-menu" onClick={showSidebar} id="btn">
              <svg fill="#fff" viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="20"></rect>x
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
              </svg>
            </i>
          </div>
          <ul className="nav-list">
            <li className="profile">
              <div className="profile-details">
                <img
                  style={{ borderRadius: "50%" }}
                  src={imgUrl}
                  alt="profileImg"
                />
                <div className="name_job">
                  <div
                    className="name"
                    onClick={(e) => history.push("/profile")}
                    style={{ cursor: "pointer" }}
                  >
                    {user.fullname}
                  </div>
                  <div
                    className="job"
                    style={{ cursor: "pointer" }}
                    id="job"
                    onClick={(e) => signOut()}
                  >
                    Logout
                  </div>
                </div>
              </div>
              <i className="bx bx-log-out" id="log_out"></i>
            </li>
            <li>
              <i className="bx bx-search">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.6084 13.7175L12.1325 10.2417C12.114 10.2232 12.0924 10.2103 12.0731 10.1931C12.757 9.15561 13.1562 7.91371 13.1562 6.57816C13.1562 2.94512 10.2111 0 6.57809 0C2.94512 0 0 2.94512 0 6.57809C0 10.211 2.94506 13.1562 6.57803 13.1562C7.91364 13.1562 9.15549 12.757 10.193 12.0731C10.2102 12.0923 10.223 12.114 10.2415 12.1324L13.7175 15.6084C14.2396 16.1305 15.0862 16.1305 15.6084 15.6084C16.1305 15.0863 16.1305 14.2397 15.6084 13.7175ZM6.57809 10.8758C4.20448 10.8758 2.28035 8.95164 2.28035 6.57809C2.28035 4.20448 4.20455 2.28035 6.57809 2.28035C8.95158 2.28035 10.8758 4.20455 10.8758 6.57809C10.8758 8.95164 8.95158 10.8758 6.57809 10.8758Z"
                    fill="white"
                  />
                </svg>
              </i>
              <input type="text" placeholder="Search..." />
            </li>
            <li>
              <a href="#">
                <span className="links_name" id="menu">
                  MENU
                </span>
              </a>
              <span className="tooltip">Menu</span>
            </li>
            <li>
              <Link to="/home">
                <span className="links_name">Home</span>
              </Link>
              <span className="tooltip">Home</span>
            </li>
            <li>
              <Link to="/tasks">
                <span className="links_name">My Tasks</span>
              </Link>
              <span className="tooltip">My Tasks</span>
            </li>
            <li>
              <a href="#">
                <span className="links_name">Notifications</span>
              </a>
              <span className="tooltip">Notifications</span>
            </li>

            <li>
              <Link to="#">
                <span className="links_name" id="menu">
                  PROJECTS
                </span>
              </Link>
              <span className="tooltip">PROJECTS</span>
            </li>
            {projects?.map((project) => {
              return (
                <li>
                  <Link to={`/tasks/${project._id}`}>
                    <img
                      style={{ width: "8%", height: "8%" }}
                      src={Icon}
                      alt="icon"
                    />

                    <span className="links_name">{project.name}</span>
                  </Link>
                  <span className="tooltip">{project.name}</span>
                </li>
              );
            })}

            <li>
              <span className="tooltip">Notifications</span>
            </li>
            <li>
              <a href="#">
                <Button onClick={handleOpenProject}>
                  <span className="links_name" id="add">
                    +Add a Project
                  </span>
                </Button>
                {/* modal to create project */}
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classe.projectModal}
                  open={openProject}
                  onClose={handleCloseProject}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openProject}>
                    <div>
                      <AddProject
                        projects={projects as ProjectInterface[]}
                        setProjects={setProjects}
                      />
                    </div>
                  </Fade>
                </Modal>

                {/* modal for adding new task */}
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={openTask}
                  onClose={handleCloseTask}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openTask}>
                    <div>
                      <AddTask />
                    </div>
                  </Fade>
                </Modal>
              </a>
            </li>

            <li>
              <Link to="/teams">
                <span className="links_name" id="menu">
                  TEAMS
                </span>
              </Link>
              <span className="tooltip">TEAMS</span>
            </li>

            {teams?.map((team) => {
              return (
                <li>
                  <a href="#">
                    <span className="links_name">{team.teamName}</span>
                  </a>
                  <span className="tooltip">{team.teamName}</span>
                </li>
              );
            })}
            <li>
              <a href="#">
                <Button onClick={handleOpen}>
                  <span className="links_name" id="add">
                    {" "}
                    +Add Team
                  </span>
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div>
                      <AddTeam projects={projects} getTeams={getTeams} />
                    </div>
                  </Fade>
                </Modal>
              </a>
              <span className="tooltip">Notifications</span>
            </li>
            <li>
              <a>
                <span className="">Frontend</span>
              </a>
            </li>
          </ul>
        </div>
        <section className="home-section">
          <Switch>
            <ProtectedRoute path="/profile">
              <Profile setNavDisplayPicture={setImgUrl} />
            </ProtectedRoute>

            <ProtectedRoute path="/home">
              <Homepage />
            </ProtectedRoute>
            <ProtectedRoute path="/changepassword">
              <ChangePassword />
            </ProtectedRoute>
            <ProtectedRoute path="/teams">
              <Teams />
            </ProtectedRoute>

            <ProtectedRoute path="/file">
              <File />
            </ProtectedRoute>

            <ProtectedRoute path="/tasks/:projectId">
              <DisplayTask setOpenTask={setOpenTask} />
            </ProtectedRoute>

            <ProtectedRoute path="/activity">
              <Activity />
            </ProtectedRoute>
          </Switch>
        </section>
      </Grid>
    </>
  );
};

export default Home;
