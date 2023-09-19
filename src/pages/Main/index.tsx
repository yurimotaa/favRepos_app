import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import {
  StyledMain,
  StyledForm,
  StyledButtonSubmit,
  StyledList,
  StyledDeleteBtn,
} from "./styles";
import { useContext } from "react";
import { ReposContext } from "../../contexts/reposContext";

const Main = () => {
  const {
    newRepo,
    handleInputChange,
    handleSubmit,
    deleteRepo,
    loading,
    repos,
  } = useContext(ReposContext);
  console.log(repos);
  return (
    <StyledMain>
      <h1>
        <FaGithub size={25} />
        Repositórios Favoritos
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

      <StyledList>
        {repos.map((repo) => (
          <li key={crypto.randomUUID()}>
            <span>
              <StyledDeleteBtn type="button" onClick={() => deleteRepo(repo)}>
                <FaTrash size={14} />
              </StyledDeleteBtn>
              {repo}
            </span>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </StyledList>
    </StyledMain>
  );
};

export default Main;
