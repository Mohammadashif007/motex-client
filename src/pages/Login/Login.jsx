import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setError("Invalid email/password please try again");
            });
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <h2 className="text-3xl font-bold">Please Login</h2>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-red-500">{error}</p>
                    </form>
                    <p className="p-5">
                        New here ? Please{" "}
                        <span className="text-blue-700">
                            <Link to="/registration">Register</Link>
                        </span>
                    </p>
                    <div className="form-control w-4/5 mx-auto mb-5">
                        <button onClick={signInWithGoogle} className="btn bg-[#EF1D26] text-white">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
