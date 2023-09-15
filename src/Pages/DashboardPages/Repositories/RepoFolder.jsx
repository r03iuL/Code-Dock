import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { AiTwotoneFile } from "react-icons/ai";

const RepoFolder = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [fileUrlLists, setFileUrlLists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myRepositoriesId/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFileUrlLists(data?.fileUrlList || []);
      });
  }, [id]);

  const getFileExtension = (url) => {
    const parts = url?.split("/");
    return parts[parts.length - 1];
  };

  return (
    <div className="px-[4%] py-[3%]">
      <ul className="box-style items-center mb-8 p-10 grid grid-cols-2 gap-10">
        {fileUrlLists.map((url, i) => (
          <li key={i} className="text-2xl">
            <Link to={url} target="_blank" className="text-violet-600 flex items-center "><AiTwotoneFile></AiTwotoneFile>.{getFileExtension(url)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoFolder;
