import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li`
  padding: 10px 15px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #3a85f7;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-top: none;
`;
