import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.34);
  border-color: #6c757d;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 2px;
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
