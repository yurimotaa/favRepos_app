import { styled } from "styled-components";

const StyledMain = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 10px;
    }
  }
`;

const StyledForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;

const StyledButtonSubmit = styled.button.attrs({
  type: "submit",
})`
  background-color: #0d2636;
  border: 0;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style: none;
  margin-top: 20px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    /* Ignora o primeiro li e continua do seguinte */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #0d2636;
      text-decoration: none;
    }
  }
`;

const StyledDeleteBtn = styled.button`
  padding: 8px 7px;
  background: transparent;
  color: #0d2636;
  border: none;
  outline: 0;
  border-radius: 4px;
`;

export {
  StyledMain,
  StyledForm,
  StyledButtonSubmit,
  StyledList,
  StyledDeleteBtn,
};
