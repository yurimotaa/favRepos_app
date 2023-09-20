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
import { Link } from "react-router-dom";

const Main = () => {
  const {
    newRepo,
    handleInputChange,
    handleSubmit,
    deleteRepo,
    loading,
    repos,
  } = useContext(ReposContext);

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
            <Link to={`/repositorio/${encodeURIComponent(repo)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </StyledList>
    </StyledMain>
  );
};

export default Main;
