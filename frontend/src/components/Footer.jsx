import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo and Quote */}
                <div>
                    <h2 className="text-4xl font-extrabold text-blue-400 mb-4">BookMart</h2>
                    <p className="italic text-gray-300">
                        "A reader lives a thousand lives before he dies." – George R.R. Martin
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about" className="hover:text-blue-400 transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/categories" className="hover:text-blue-400 transition">
                                Categories
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-blue-400 transition">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="hover:text-blue-400 transition">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Email Subscription */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Stay Updated</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Subscribe to our newsletter for the latest updates and special offers.
                    </p>
                    <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full sm:flex-1 px-4 py-2 rounded bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-medium transition shadow-lg"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-300">Follow Us</h3>
                    <p className="text-sm text-gray-300 mb-4">
                        Connect with us on our social platforms.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/iamsujonsheikh" className="text-gray-400 hover:text-blue-400 transition">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} BookMart. All rights reserved. Sujon Sheikh.
            </div>
        </footer>
    );
};

export default Footer;
