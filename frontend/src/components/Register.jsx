import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const handleGoogleSignUp = () => {
        // Add your Google Sign-Up logic here
        console.log("Google Sign-Up clicked");
    };

    return (
        <div className="flex items-center justify-center h-[calc(100vh-50px)]">
            <div className="w-[440px] p-8 bg-white border-2 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                    Create an Account
                </h1>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        id="name"
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your name"
                    />
                </div>

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
                <div className="mb-4">
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

                {/* Confirm Password Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        required
                        id="confirmPassword"
                        className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Confirm your password"
                    />
                </div>

                {/* Register Button */}
                <button className="w-full py-2 mb-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                    Register
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

                {/* Google Sign-Up Button */}
                <button
                    onClick={handleGoogleSignUp}
                    className="flex items-center justify-center w-full py-2 text-sm font-medium text-gray-700 border rounded-md hover:bg-gray-100"
                >
                    <FcGoogle className="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>

                {/* Login Link */}
                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <a
                        href="/login"
                        className="text-indigo-600 hover:underline"
                    >
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
