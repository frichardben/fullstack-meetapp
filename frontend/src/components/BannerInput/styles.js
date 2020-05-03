import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    cursor: pointer;
    width: 100%;
    height: 300px;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &:hover {
      opacity: 0.7;
    }

    strong {
      position: absolute;
      margin-top: 50px;
      font-size: 20px;
      color: #999;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    input {
      display: none;
    }

    div {
      position: absolute;
      width: 100%;
      height: 60%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
