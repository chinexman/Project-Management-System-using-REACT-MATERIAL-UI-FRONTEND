import { authContext } from "../../Utils/Authcontext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import {Grid} from "../../components/Sidebar/sidebar.styles."
import Image from "../../Images/profile2.png";
import Icon from "../../Assets/design.svg"
import Logo from "../../Assets/logo.svg"



function TestHome() {
  console.log("rendering testHome");
  const backendUrl = process.env.REACT_APP_BACKEND_URL as string;
  const { token, signOut } = useContext(authContext);
  const [loading, setLoading] = useState(true);
  const [serverResponse, setResponse] = useState("");
  const history = useHistory();

  useEffect(() => {
    axios
      .request<{ msg: string }>({
        url: backendUrl + "/users/welcome",
        headers: {
          token: token as string,
        },
        method: "GET",
      })
      .then((response) => {
        console.log(response);
        setResponse(response.data.msg);

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
  }, []);

  const handleSignOut = () => {
    signOut();
    history.push("/login");
  };

  let sidebar = document.querySelector(".sidebar");
  function menuBtnChange() {
      sidebar?.classList.toggle("open");
  }  
  return loading ? (
    <h4>Loading... </h4>
  ) : (
    <Grid>
    <div className="sidebar">
    <div className="logo-details">
  <i className='bx bxl-c-plus-plus icon'><img style ={{width:'30%', marginRight:'1%'}}src={Logo} alt = "logo" /></i>
    <div className="logo_name">PROJECTUS</div>
    <i className='bx bx-menu' onClick={menuBtnChange} id="btn" ><svg fill="#fff" viewBox="0 0 100 80" width="20" height="20">
<rect width="100" height="20"></rect>x
<rect y="30" width="100" height="20"></rect>
<rect y="60" width="100" height="20"></rect>
</svg></i>
</div>
        <ul className="nav-list">
                 <li className="profile">
     <div className="profile-details">
       <img style= {{borderRadius: '50%'}} src={Image}alt="profileImg" />
       <div className="name_job">
         <div className="name" >Emilee Simchenko</div>
         <div className="job"id="job">Product Owner</div>
       </div>
     </div>
     <i className='bx bx-log-out' id="log_out" ></i>
 </li>
            <li>
                <i className='bx bx-search'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M15.6084 13.7175L12.1325 10.2417C12.114 10.2232 12.0924 10.2103 12.0731 10.1931C12.757 9.15561 13.1562 7.91371 13.1562 6.57816C13.1562 2.94512 10.2111 0 6.57809 0C2.94512 0 0 2.94512 0 6.57809C0 10.211 2.94506 13.1562 6.57803 13.1562C7.91364 13.1562 9.15549 12.757 10.193 12.0731C10.2102 12.0923 10.223 12.114 10.2415 12.1324L13.7175 15.6084C14.2396 16.1305 15.0862 16.1305 15.6084 15.6084C16.1305 15.0863 16.1305 14.2397 15.6084 13.7175ZM6.57809 10.8758C4.20448 10.8758 2.28035 8.95164 2.28035 6.57809C2.28035 4.20448 4.20455 2.28035 6.57809 2.28035C8.95158 2.28035 10.8758 4.20455 10.8758 6.57809C10.8758 8.95164 8.95158 10.8758 6.57809 10.8758Z" fill="white"/>
</svg>
</i>
                <input type="text" placeholder="Search..." />
            </li>
            <li>
                <a href="#">

                    <span className="links_name" id= "menu">MENU</span>
                </a>
                <span className="tooltip">Menu</span>
            </li>
            <li>
                <a href="#">
                    <span className="links_name">Home</span>
                </a>
                <span className="tooltip">Home</span>
            </li>
            <li>
                <a href="#">
                    <span className="links_name">My Tasks</span>
                </a>
                <span className="tooltip">My Tasks</span>
            </li>
            <li>
                <a href="#">
                    <span className="links_name">Notifications</span>
                </a>
                <span className="tooltip">Notifications</span>
            </li>

            <li>
                <a href="#">

                    <span className="links_name" id= "menu">PROJECTS</span>
                </a>
                <span className="tooltip">PROJECTS</span>
            </li>
            <li>
                <a href="#">
                  <img style={{width: '8%', height: '8%'}} src= {Icon} alt = "icon" />

                    <span className="links_name">Dashboard UI Kit</span>
                </a>
                <span className="tooltip">Dashboard UI Kit</span>
            </li>
            <li>
                <a href="#">
                <img style={{width: '8%', height: '8%'}} src= {Icon} alt = "icon" />
                    <span className="links_name">CRM System</span>
                </a>
                <span className="tooltip">CRM System</span>
            </li>
            <li>
                <a href="#">
                <img style={{width: '8%', height: '8%'}} src= {Icon} alt = "icon" />
                    <span className="links_name">Website Redesign</span>
                </a>
                <span className="tooltip">Website Redesign</span>
            </li>
            <li>
                <a href="#">
                <img style={{width: '8%', height: '8%'}} src= {Icon} alt = "icon" />
                    <span className="links_name" id="add" > +Add a Project</span>
                </a>
                <span className="tooltip">Notifications</span>
            </li>

            <li>
                <a href="#">

                    <span className="links_name" id= "menu">TEAMS</span>
                </a>
                <span className="tooltip">TEAMS</span>
            </li>
            <li>
                <a href="#">
                    
                    <span className="links_name">Designers</span>
                </a>
                <span className="tooltip">Designers</span>
            </li>
            <li>
                <a href="#">
                    <span className="links_name">Backend</span>
                </a>
                <span className="tooltip">Backend</span>
            </li>
            <li>
                <a href="#">
                    <span className="links_name">Frontend</span>
                </a>
                <span className="tooltip">Frontend</span>
            </li>
            <li>
                <a href="#">
                    <span className="links_name" id="add" > +Add a Project</span>
                </a>
                <span className="tooltip">Notifications</span>
            </li>
        </ul>
     
    </div>
    <section className="home-section">
            <h4 >{serverResponse}</h4>
  <button  onClick={handleSignOut}>SignOut </button>
        </section>
        </Grid>
  );
}

export default TestHome;