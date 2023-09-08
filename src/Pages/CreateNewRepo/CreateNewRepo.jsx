import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const CreateNewRepo = () => {
  const [files, setFiles] = useState([]);
  const [fileUrlList, setFileUrlList] = useState([]);
  const [submitDisable, setSubmitDisable] = useState(true)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  // console.log(user)

  //onsubmit function for  posting new repository
  const onSubmit = async (data) => {
    console.log({
      ...data,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      fileUrlList
    });
    // posting new repository
    if(fileUrlList.length > 0){
      fetch("http://localhost:5000/repositories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        fileUrlList
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        setSubmitDisable(true)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Repository been added",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  };

  
  const uploadImage = async () => {
    const uploaders = Array.from(files).map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "shunnoSupport");
      formData.append("cloud_name", "dtcoomque");
      formData.append("timestamp", Math.floor(Date.now() / 1000));

      return fetch("https://api.cloudinary.com/v1_1/dtcoomque/raw/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const fileURL = data.secure_url;
          return fileURL;
        });
    });

    try {
      const urls = await Promise.all(uploaders);
      setFileUrlList(urls); // Update the state with the array of URLs
      console.log(urls); // This will show the correct URLs
      setSubmitDisable(false)
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  // console.log(fileUrlList);

  return (
    <div className=" px-[4%] py-[3%]">
      <div className="box-style">
        <SectionTitle heading="Create new repository"></SectionTitle>
        <p className="text-gray-500 text-base">
          A repository contains all project files, including the revision
          history. Want to create a repository?
        </p>

        <div className="h-[3px] w-full bg-violet-600 my-[3%]"></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.exampleRequired && <span>This field is required</span>}
          <div>
            <label
              htmlFor="repoName"
              className="text-lg text-gray-500 font-semibold"
            >
              Repository Name
            </label>{" "}
            <br />
            <input
              id="repoName"
              className="mt-2 mb-4 p-4 w-1/2 bg-violet-50 rounded focus:outline-none"
              type="text"
              placeholder="Repository name"
              {...register("repoName", { required: true })}
            />
            <br />
            <label
              htmlFor="repoDescription"
              className="text-lg text-gray-500 font-semibold"
            >
              Description{" "}
              <span className="text-base font-normal">(optional)</span>
            </label>
            <br />
            <textarea
              id="repoDescription"
              className="border p-2 w-1/2 mb-4 mt-2 bg-violet-50 rounded"
              placeholder="Enter description"
              {...register("repoDescription")}
            />
            <br />
            <label className="text-lg text-gray-500 font-semibold">
              Type of your repositories{" "}
              <span className="text-base font-normal">
                (must be separated by &quot;,&quot;)
              </span>
            </label>
            <br />
            <textarea
              className="border p-2 w-1/2 mb-4 mt-2 bg-violet-50 rounded"
              placeholder="Enter description"
              {...register("repoType")}
            />
            <br />
            <label
              htmlFor="uploadCode"
              className="text-lg text-gray-500 font-semibold"
            >
              Upload your Code
            </label>
            <br />
            <input
              name="fileslist"
              multiple
              directory=""
              webkitdirectory=""
              // mozdirectory=""
              className="mt-2 mb-0 p-4 w-1/2 bg-violet-50 rounded focus:outline-none"
              type="file"
              id="uploadCode"
              {...register("uploadCode")}
            onChange={(e) => setFiles(e.target.files)}
            />
            <br />
            <button onClick={uploadImage} className="btn-style mt-1 mb-4">upload files</button>
            <br />
            <div className="flex gap-x-6 mb-5">
              <select className="select-style " {...register("repocategory")}>
                <option value="Single">Single</option>
                <option value="Group">Group</option>
              </select>
              <select className="select-style" {...register("repoStatus")}>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>
          </div>
          <div>
            <input
              className={`${submitDisable ? "btn" : 'btn-style'}`}
              value="Create Repository"
              type="submit"
              disabled={submitDisable}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewRepo;
