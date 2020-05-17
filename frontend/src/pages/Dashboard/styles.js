import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 920px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
  }

  h1 {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
  }

  button {
    height: 44px;
    background-color: #d44059;
    color: #fff;
    font-size: 16px;
    border: 0;
    padding: 0 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background-color: ${(darken, 0.08, '#d44059')};
    }
  }

  ul {
    margin-top: 50px;
    display: grid;
    grid-gap: 10px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 62px;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  strong {
    font-size: 18px;
    color: #fff;
  }

  span {
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
  }
`;
