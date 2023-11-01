import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  padding: 8px 16px;
  border-radius: 2px;
  background-color: #2d2f31a6;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #202122;
  }
`;