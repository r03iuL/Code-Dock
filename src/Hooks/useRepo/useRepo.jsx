import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const useRepo = () => {
  const [allRepositories, setAllRepositories] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/myRepositories/${user?.email}`)
    .then(res => res.json())
    .then(data => setAllRepositories(data))
  }, []);

  return [allRepositories];
};

export default useRepo;
