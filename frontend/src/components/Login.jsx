import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const handleGoogleSignIn = () => {
        // Add your Google Sign-In logic here
        console.log("Google Sign-In clicked");
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-150px)]">
            <div className="w-[390px] p-8 bg-white border-2 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Welcome Back
                </h1>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        required
                        id="email"
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        required
                        id="password"
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Login Button */}
                <button className="w-full py-2 mb-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Log In
                </button>

                {/* Divider */}
                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">or</span>
                    </div>
                </div>

                {/* Google Sign-In Button */}
                <button
                    onClick={handleGoogleSignIn}
                    className="flex items-center justify-center w-full py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100"
                >
                    <FcGoogle className="w-5 h-5 mr-2" />
                    Sign in with Google
                </button>

                {/* Registration Link */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    New here?{" "}
                    <a
                        href="/register"
                        className="text-indigo-600 hover:underline"
                    >
                        Please register
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;