import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  width: 150px;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  background-color: ${props =>
    props.disabled ? 'rgba(134, 134, 135, 0.6)' : 'rgba(0, 0, 0, 0.34)'};
  border-color: #6c757d;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid #565e64;
  margin-top: 15px;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
    background-color: rgba(134, 134, 135, 0.6);
    border-color: #565e64;
  }
  &:focus {
    color: #fff;
    background-color: rgba(134, 134, 135, 0.6);
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgb(130 138 145 / 50%);
  }
  &:active {
    color: #fff;
    background-color: rgba(134, 134, 135, 0.6);
    border-color: #51585e;
  }
`;
