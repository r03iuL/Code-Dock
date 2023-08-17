
import { useForm } from "react-hook-form";


const CreateNewRepo = () => {

    const { register, formState: { errors } } = useForm();

    return (
        <section className="m-8 bg-white ps-20 py-20">
            <div>
                <h2 className="text-3xl font-bold">Create a new repository</h2>
                <p className="mt-2 text-lg">A repository contains all project files, including the revision history. Want to create a repository?</p>
            </div>
            <div className="divider"></div>
            <div>
                <form >
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div >

                        <label className="text-xl font-bold">Repository Name</label> <br />
                        <input
                            className="my-5 p-4 w-[500px] bg-slate-300"
                            {...register("repoName", { required: true })}
                        />
                        <br />

                        <label className="text-xl font-bold">Description <span className="text-lg font-normal">(optional)</span></label><br />
                        <input
                            className="my-5 p-4 w-[500px] h-[100px] bg-slate-300"
                            {...register("repoName")}
                        />
                        <br />
                        <select className="mb-5 p-5 text-2xl bg-indigo-400" {...register("repoType")}>
                            <option value="Single">Single</option>
                            <option value="Group">Group</option>
                        </select>
                        <br />
                        <select className="mb-5 p-5 text-2xl bg-indigo-400" {...register("repoCategory")}>
                            <option value="Private">Private</option>
                            <option value="Public">Public</option>
                        </select>
                    </div>
                    <div>
                        <input className="btn btn-primary px-16" value="Create Repository" type="submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateNewRepo;