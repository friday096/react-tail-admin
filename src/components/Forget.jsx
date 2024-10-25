import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Forget = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle registration logic here
    };

    return (
        <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8">
            <div className="w-full sm:max-w-sm shadow-lg rounded-lg bg-white p-6">
                <div className="mb-5 text-center">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Forget Password
                    </h2>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>


                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center gap-5">
                    <p className="text-sm text-gray-600">
                        Back to Login?{' '}
                        <NavLink to="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Log In
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Forget;
