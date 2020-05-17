import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;

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

    div {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    strong {
      margin-top: 20px;
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
  }
`;
