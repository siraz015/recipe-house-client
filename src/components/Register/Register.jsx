import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="pt-4 bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-semibold mb-4">Please Register!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Photo URL</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <p>You have already account? <Link to="/login">Please Login</Link></p>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;