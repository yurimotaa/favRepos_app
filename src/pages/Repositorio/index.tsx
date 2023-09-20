import { useContext, useEffect } from "react";
import { Loading, Owner, StyledRepositorio } from "./styles";
import { ReposContext } from "../../contexts/reposContext";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Repositorio = () => {
  const { loadInfosRepo, repository } = useContext(ReposContext);

  const { repositorio } = useParams();

  useEffect(() => {
    repository;
    loadInfosRepo(repositorio!);
  }, []);

  if (!repository) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <StyledRepositorio>
      <a href="/">
        <FaArrowLeft size={30} color="#000" />
      </a>
      <Owner>
        {repository.owner && (
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        )}
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>
    </StyledRepositorio>
  );
};

export default Repositorio;
