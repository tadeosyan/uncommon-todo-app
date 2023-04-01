import styled from "styled-components";

export const StyledBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  background: #ffffff;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 0px 20px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
`;

export const Button = styled.button<{ action: string }>`
  color: ${(props) => (props.action === "edit" ? "#3A85F7" : "#EB445A")};
  background-color: transparent;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #3a85f7;
  border-radius: 4px;
  padding: 10px 5px;
  &:focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
`;

export const FormButton = styled.button`
  background: #3a85f7;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
`;
