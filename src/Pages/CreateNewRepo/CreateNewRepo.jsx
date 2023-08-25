import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
// import UploadCodeFile from "./UploadCodeFile";
const CreateNewRepo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //onsubmit function for  posting new repository



  const onSubmit = (data) => {
    const { repoDescription, repoName, repoType, repoCategory, repoStatus } =
      data;
    const newRepoDetails = {
      repoName,
      category: repoCategory,
      repoDescription,
      types: repoType,
      status: repoStatus,
    };

    console.log(newRepoDetails);


    // posting new repository
    fetch("http://localhost:5000/new", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRepoDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Repository been added",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className=" px-[4%] py-[3%]">
      {/* <UploadCodeFile></UploadCodeFile> */}
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
            <label className="text-lg text-gray-500 font-semibold">
              Repository Name
            </label>{" "}
            <br />
            <input
              className="mt-2 mb-4 p-4 w-1/2 bg-violet-50 rounded focus:outline-none"
              placeholder="Repository name"
              {...register("repoName", { required: true })}
            />
            <br />
            <label className="text-lg text-gray-500 font-semibold">
              Description{" "}
              <span className="text-base font-normal">(optional)</span>
            </label>
            <br />
            <textarea
              className="border p-2 w-1/2 mb-4 mt-2 bg-violet-50 rounded"
              placeholder="Enter description"
              {...register("repoDescription")}
            />
            {/* <input
              type="textarea"
              className="mt-2 mb-4 p-1 5-[500px] h-[100px] bg-slate-300"
              {...register("repoDescription")}
            /> */}





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
            <div className="flex gap-x-6 mb-5">
              <select className="btn-style " {...register("repocategory")}>
                <option value="Single">Single</option>
                <option value="Group">Group</option>
              </select>
              <select className=" btn-style" {...register("repoStatus")}>
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>
          </div>
          <div>
            <input
              className="btn-style "
              value="Create Repository"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewRepo;
