import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import GoogleSignIn from "../Shared/GoogleSignIn";
import { Player } from '@lottiefiles/react-lottie-player';
import signUp from '../../src/assets/signUp.json'



const SignUp = () => {
 
    const { register, handleSubmit, reset,  formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                 console.log('user profile info updated')
                 reset();
                 Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
            })
            .catch(error => console.log(error))
        } )

        
    };
    

    return (
        <>
        <Helmet>
                <title>CodeDock | Sign Up </title>
            </Helmet>
        <div className="min-h-screen">
        <h1 className="text-4xl font-bold md:ml-5 pt-10 text-center pb-5">Sign Up now!</h1>
        <div className="hero  bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left ">
                    
                    <Player
                            autoplay
                            loop
                            src={signUp}
                            style={{ height: '500px' }}
                        >
                        </Player>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-blue-500">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name="email"  placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true,
                                 minLength:6,
                                  maxLength: 20, 
                                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                              })} name="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6  characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one upper case, one lower case, one number and one special characters </p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-blue-600 text-white" type="submit" value="Sign Up" />
                          
                        </div>
                    </form>
                    <p className="text-center text-gray-900 font-bold">or</p>
        <div className="mt-2 mb-5">
          <GoogleSignIn></GoogleSignIn>
        </div>
                    <p className="ml-2 mb-2"><small>Already have an account<Link to='/login'> <span className="text-blue-600 font-bold ml-2">Login</span></Link> </small></p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default SignUp;