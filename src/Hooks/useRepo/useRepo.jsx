import { useEffect, useState } from "react";

const useRepo = () => {
  const [allRepositories, setAllRepositories] = useState([]);

  useEffect(() => {
    fetch("https://code-dock-server.vercel.app/repositories")
      .then((res) => res.json())
      .then((data) => {
        setAllRepositories(data);
      });
  }, []);

  return [allRepositories];
};

export default useRepo;
