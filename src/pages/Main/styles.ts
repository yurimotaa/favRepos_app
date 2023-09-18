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

export { StyledMain, StyledForm, StyledButtonSubmit };
