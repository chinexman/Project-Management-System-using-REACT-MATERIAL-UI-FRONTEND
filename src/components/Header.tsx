import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface propType {
  headerlinks: { name: string; link: string }[];
  header: string;
}
export default function Header(props: propType) {
  return (
    <ChangePasswordTopbarWrap>
      <div className="header">
        <h1>{props.header}</h1>
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
    margin: 20px;
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
  height: 136px;
  background-color: #ffffff;
  .header {
    padding: 20px;
  }
`;
