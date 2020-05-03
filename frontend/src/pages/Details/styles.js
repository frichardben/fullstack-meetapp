import styled from 'styled-components';

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
    max-width: 70%;
  }


  .icon {
    margin-right: 10px;
    vertical-align: -14%;
  }

  .btn {
    height: 44px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    padding: 0 15px;
    border-radius: 4px;
  }

  .btn-edit {
    background-color: #4dbaf9;
    color: #fff;
    margin-right: 20px;
  }
  .btn-cancel {
    background-color: #d44059;
    color: #fff;
  }

  .banner {
    height: 300px;
    object-fit: cover;
    border-radius: 4px;
    margin-top: 50px;

  }

  .description {
    margin-top: 25px;
    color: #fff;
    font-size: 18px
  }

  footer {
    margin-top: 40px;
    color: #808080;
    font-size: 16px;

    span {
      & + span {
        margin-left: 20px;
      }
    }
`;
