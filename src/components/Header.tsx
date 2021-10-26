import {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { authContext } from "../Utils/Authcontext";

interface propType {
  headerlinks: { name: string; link: string }[] | [];
  header: string;
  signOut: string;
}
export default function Header(props: propType) {
  const { token, signOut } = useContext(authContext);

  return (
    <ChangePasswordTopbarWrap>
      <div className="header">
        <h1>{props.header}</h1>
        <button  onClick={(e) => signOut()} className="button">{props.signOut}</button>
      </div>

      <Links>
        {props.headerlinks.map(
          (headerlink: { name: string; link: string }, index: number) => (
            <li>
              <Link key={index} className="linktag" to={`${headerlink.link}`}>
                {headerlink.name}
              </Link>
            </li>
          )
        )}
      </Links>
    </ChangePasswordTopbarWrap>
  );
}

export const Links = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  li {
    list-style-type: none;
    padding: 25px 28px 0px 29px;
    .linktag {
      text-decoration: none;
      color: #000000;
    }
    .linktag:hover {
      padding: 18px 0;
      border-bottom: 3px solid #ffc200;
    }
  }
`;
export const ChangePasswordTopbarWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: #ffffff;
  .header {
    padding: 25px 28px 0px 29px;
    display: flex ; 
    font-weight: 900;
font-size: 24px;
line-height: 47px;
     align-items: center;
    justify-content: space-between;
    .button{
      background: #CEF9C6;
border-radius: 20px;
width: 110px;
height: 40px;
cursor: pointer;
}
  }
  
`;

