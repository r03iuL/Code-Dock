import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
    const { user} = useContext(AuthContext);
    
    const { refetch, data: role, isLoading: isAdminLoading = [] } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://code-dock-backend.vercel.app/users/admin/${user?.email}`)
            return res.json();
        },
      })

      return [role?.admin, refetch, isAdminLoading]
};

export default useAdmin;