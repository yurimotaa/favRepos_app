import { useContext, useEffect, useState } from "react";
import {
  FilterList,
  IssuesList,
  Loading,
  Owner,
  PageActions,
  StyledRepositorio,
} from "./styles";
import { ReposContext } from "../../contexts/reposContext";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { api } from "../../services/api";
import { ILabel } from "../../interfaces/interfaces";

const Repositorio = () => {
  const { loadInfosRepo, repository, issues, setIssues, filters, loading } =
    useContext(ReposContext);

  console.log(issues);

  const { repositorio } = useParams();

  const [page, setPage] = useState(1);
  const [filterIndex, setFilterIndex] = useState(0);

  const handlePage = (action: string) => {
    setPage(action === "previous" ? page - 1 : page + 1);
  };

  const handleFilter = (index: number) => {
    setFilterIndex(index);
  };

  useEffect(() => {
    repository;
    loadInfosRepo(repositorio!);
  }, []);

  useEffect(() => {
    const loadIssue = async () => {
      const response = await api.get(`/repos/${repositorio}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page: page,
          per_page: 5,
        },
      });
      setIssues(response.data);
    };

    loadIssue();
  }, [page, filterIndex, filters]);

  if (loading) {
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

      <FilterList>
        {filters.map((filter, index) => (
          <button
            type="button"
            key={crypto.randomUUID()}
            onClick={() => handleFilter(index)}
          >
            {filter.label}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map((issue) => (
          <li key={crypto.randomUUID()}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a href={issue.html_url} target="blank">
                  {issue.title}
                </a>
                {issue.labels.map((label: ILabel) => (
                  <span key={crypto.randomUUID()}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}

        <PageActions>
          <button type="button" onClick={() => handlePage("previous")}>
            Voltar
          </button>

          <button type="button" onClick={() => handlePage("next")}>
            Proxima
          </button>
        </PageActions>
      </IssuesList>
    </StyledRepositorio>
  );
};

export default Repositorio;
