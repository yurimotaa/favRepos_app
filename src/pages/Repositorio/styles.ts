import { styled } from "styled-components";

const StyledRepositorio = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
`;

const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    border-radius: 20%;
    margin: 20px 0;
  }

  h1 {
    font-size: 30px;
    color: #0d2636;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }

  a {
    border: 0;
    outline: 0;
    background: transparent;
    cursor: pointer;
  }
`;

const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const IssuesList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #0d2636;
    }

    div {
      flex: 1;
      margin-left: 12px;

      p {
        margin-top: 10px;
        font-size: 12px;
        color: #000;
      }
    }

    strong {
      font-size: 15px;

      a {
        text-decoration: none;
        color: #222;
        transition: 0.3s;

        &:hover {
          color: #0071db;
        }
      }

      span {
        background-color: #222;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        padding: 4px 7px;
        margin-left: 10px;
      }
    }
  }
`;

const PageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: 0;
    border: 0;
    background-color: #222;
    color: #fff;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;

const FilterList = styled.div`
  margin: 15px 0;

  button {
    outline: 0;
    border: 0;
    padding: 8px;
    border-radius: 4px;
    margin: 0 3px;
  }
`;

export {
  StyledRepositorio,
  Owner,
  Loading,
  IssuesList,
  PageActions,
  FilterList,
};
