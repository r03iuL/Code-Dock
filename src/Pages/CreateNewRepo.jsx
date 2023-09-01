import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateNewRepo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //onsubmit function for  posting new repository
  const onSubmit = (data) => {
    const { repoDescription, repoName, repoType, repoCategory } = data;
    const newRepoDetails = {
      repoName,
      repoCategory,
      repoDescription,
      repoType,
    };

    return (
      <section className="m-8 bg-white ps-20 py-20">
        <div>
          <h2 className="text-3xl font-bold">Create a new repository</h2>
          <p className="mt-2 text-lg">
            A repository contains all project files, including the revision
            history. Want to create a repository?
          </p>
        </div>
        <div className="divider"></div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <div>
              <label htmlFor="repoName" className="text-xl font-bold">Repository Name</label>{" "}
              <br />
              <input
                id="repoName" className="my-5 p-4 w-[500px] bg-slate-300"
                {...register("repoName", { required: true })}
              />
              <br />
              <label htmlFor="repoDescription" className="text-xl font-bold">
                Description{" "}
                <span className="text-lg font-normal">(optional)</span>
              </label>
              <br />
              <input
                id='repoDescription' className="my-5 p-4 w-[500px] h-[100px] bg-slate-300"
                {...register("repoDescription")}
              />
              <br />
              <label htmlFor="repoDescription" className="text-xl font-bold">
                Description{" "}
                <span className="text-lg font-normal">(optional)</span>
              </label>
              <br />
              <input
                id='repoDescription' className="my-5 p-4 w-[500px] h-[100px] bg-slate-300"
                {...register("repoDescription")}
              />
              <br />
              <select
                className="mb-5 p-5 text-2xl bg-indigo-400 rounded-lg"
                {...register("repoType")}
              >
                <option value="Single">Single</option>
                <option value="Group">Group</option>
              </select>
              <select
                className="mb-5 ms-8 p-5 text-2xl bg-indigo-400 rounded-lg"
                {...register("repoCategory")}
              >
                <option value="Private">Private</option>
                <option value="Public">Public</option>
              </select>
            </div>
            <div>
              <input
                className="btn btn-primary px-16"
                value="Create Repository"
                type="submit"
              />
            </div>
          </form>
        </div>
      </section>
    );
  };
};

export default CreateNewRepo;
