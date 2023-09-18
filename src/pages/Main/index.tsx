import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";
import { StyledMain, StyledForm, StyledButtonSubmit } from "./styles";
import { useContext } from "react";
import { ReposContext } from "../../contexts/reposContext";

const Main = () => {
  const { newRepo, handleInputChange, handleSubmit, loading } =
    useContext(ReposContext);

  return (
    <StyledMain>
      <h1>
        <FaGithub size={25} />
        Meus repositórios
      </h1>

      <StyledForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositórios"
          value={newRepo}
          onChange={handleInputChange}
        />

        <StyledButtonSubmit>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </StyledButtonSubmit>
      </StyledForm>
    </StyledMain>
  );
};

export default Main;
