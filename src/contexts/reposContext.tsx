import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";

export interface IDefaultProps {
  children: ReactNode;
}

interface IReposContext {
  newRepo: string;
  repos: IRepo[];
  loading: boolean;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  getRepo: () => Promise<void>;
}

interface IRepo {
  full_name: string;
}

export const ReposContext = createContext({} as IReposContext);

export const ReposContextProvider = ({ children }: IDefaultProps) => {
  const [newRepo, setNewRepo] = useState("");
  const [repos, setRepos] = useState<IRepo[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    setNewRepo(e.target.value);
  };

  const getRepo = async () => {
    setLoading(true);
    try {
      const response = await api.get(`repos/${newRepo}`);

      setRepos((prevRepos) => [...prevRepos, response.data.full_name]);
      setNewRepo("");
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

  return (
    <ReposContext.Provider
      value={{
        newRepo,
        loading,
        handleInputChange,
        handleSubmit,
        getRepo,
        repos,
      }}
    >
      {children}
    </ReposContext.Provider>
  );
};
