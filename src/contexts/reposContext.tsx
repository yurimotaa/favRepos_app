import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Id, toast } from "react-toastify";

export interface IDefaultProps {
  children: ReactNode;
}

interface IReposContext {
  newRepo: string;
  repos: string[];
  loading: boolean;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  getRepo: () => Promise<Id | undefined>;
  deleteRepo: (repo: string) => void;
}

export const ReposContext = createContext({} as IReposContext);

export const ReposContextProvider = ({ children }: IDefaultProps) => {
  const [newRepo, setNewRepo] = useState("");
  const [repos, setRepos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("repos");

    if (local) {
      setRepos(JSON.parse(local));
    }
  }, []);

  const handleInputChange = (e: any) => {
    setNewRepo(e.target.value);
  };

  const getRepo = async () => {
    setLoading(true);
    try {
      if (newRepo === "") {
        return toast.warning("Digite um repositório");
      }

      const response = await api.get(`repos/${newRepo}`);

      const findedRepo = repos.find((repo) => repo === response.data.full_name);

      if (findedRepo) {
        setNewRepo("");
        return toast.error("Repositorio já adicionado");
      }

      const updatedRepos = [...repos, response.data.full_name];
      localStorage.setItem("repos", JSON.stringify(updatedRepos));

      setRepos(updatedRepos);
      setNewRepo("");
      toast.success("Repositório adicionado");
    } catch (error) {
      console.error("Erro ao adicionar repositório:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    getRepo();
  };

  const deleteRepo = (repo: string) => {
    const filteredRepos = repos.filter((r) => r !== repo);

    localStorage.setItem("repos", JSON.stringify(filteredRepos));
    setRepos(filteredRepos);
  };

  return (
    <ReposContext.Provider
      value={{
        newRepo,
        loading,
        repos,
        handleInputChange,
        handleSubmit,
        getRepo,
        deleteRepo,
      }}
    >
      {children}
    </ReposContext.Provider>
  );
};
