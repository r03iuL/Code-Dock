import { useState } from "react";


const useSearch = () => {
    
    const [search, setSearch] = useState([])
    const [searchText, setSearchText] = useState()

    // onChange={(e) => setSearchText(e.target.value)}

    const handelSearch = () => {
        fetch(`http://localhost:5000/searchRepoByText/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearch(data)
            })
    }
    return ([handelSearch(), setSearchText, search]);
};

export default useSearch;
