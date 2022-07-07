import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  width: 100px;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid transparent;
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
    background-color: #5c636a;
    border-color: #565e64;
  }
  &:focus {
    color: #fff;
    background-color: #5c636a;
    border-color: #565e64;
    box-shadow: 0 0 0 0.25rem rgb(130 138 145 / 50%);
  }
  &:active {
    color: #fff;
    background-color: #565e64;
    border-color: #51585e;
  }
`;

export const Tname = styled.span`
  color: white;
  font-size: 18px;
`;

export const Tnumber = styled.span`
  color: white;
  margin-left: auto;
  margin-right: 30px;
  font-size: 18px;
`;
