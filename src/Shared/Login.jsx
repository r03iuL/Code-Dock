import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import GoogleSignIn from "../Shared/GoogleSignIn";
import login from '../../src/assets/login.json'
import { Player } from '@lottiefiles/react-lottie-player';

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
        const user = result.user;
        console.log(user);
        
        Swal.fire({
            title: 'User Login SuccessFul',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
          navigate(from, { replace: true });
    })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
   
        else {
            setDisabled(true);
        }

    }


    return (
        <>
         <Helmet>
                <title>CodeDock | Login </title>
            </Helmet>
      <div className="min-h-screen ">
      <h1 className="text-5xl font-bold text-center pt-10 pb-5">Login now!</h1>
      <div className="hero  bg-base-200">        
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="text-center md:w-1/2 lg:text-left">
                    
                    <Player
                            autoplay
                            loop
                            src={login}
                            style={{ height: '500px' }}
                        >
                        </Player>
                </div>

                <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100 border border-blue-500">

                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha}  type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                           
                        </div>


                        <div className="form-control mt-6">
                            <input disabled={disabled} className="btn btn-primary " type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-center text-gray-900 font-bold">or</p>
        <div className="my-5 mb-5">
          <GoogleSignIn></GoogleSignIn>
        </div>
                    <p className='ml-2 mb-2'><small>New here? <Link to='/signup'> <span className='text-blue-600 font-bold'>Create a New Account</span></Link></small></p>
                </div>
            </div>
        </div>
      </div>
        </>
    );
};

export default Login;