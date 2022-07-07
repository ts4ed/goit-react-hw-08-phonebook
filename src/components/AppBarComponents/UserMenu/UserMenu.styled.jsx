import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 991px) {
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const UserName = styled.span`
  font-weight: 700;
  color: #fff;
  margin-right: 12px;
`;

export const Button = styled.button`
  align-items: center;
  display: flex;
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
  padding: 0.375rem 0.75rem;
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

export const Text = styled.span`
  margin-right: 10px;
`;
