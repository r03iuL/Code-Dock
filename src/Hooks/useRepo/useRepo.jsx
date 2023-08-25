import { useEffect, useState } from "react";

const useRepo = () => {
  const [allRepositories, setAllRepositories] = useState([]);

  useEffect(() => {
    fetch("/userRepo.json")
      .then((res) => res.json())
      .then((data) => {
        setAllRepositories(data);
      });
  }, []);

  return [allRepositories];
};

export default useRepo;
