import { useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

import { getImgUrl } from "../../utils/getImgUrl";
import { useFetchBookByIdQuery } from "../../redux/features/cart/booksApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleBook = () => {
    const { id } = useParams();
    const { data, isError, isLoading } = useFetchBookByIdQuery(id);

    const book = data?.book;

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };


    if (isLoading) <span className="text-xl font-semibold text-slate-500">Loading...</span>;

    if (isError) <span className="text-xl font-semibold text-pink-500">Something wnt to wrong when data fetching..</span>;

    if (!book && !isLoading) {
        return <span className="text-xl font-semibold text-slate-500">Book not found.</span>;
    };


    return (
        <div className="container mx-auto p-6 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white border-2 rounded shadow p-6">
                {/* Book Cover */}
                <div className="w-full md:w-1/3 relative group">
                    <img
                        src={`${getImgUrl(book?.coverImage)}`}
                        alt={book?.title}
                        className="w-full h-full rounded-lg shadow-lg transform transition-transform group-hover:scale-[1.04] duration-300"
                    />
                    {book?.trending && (
                        <span className="absolute top-3 left-3 bg-green-500 text-white font-semibold py-1 px-3 rounded-full shadow-md">
                            Trending
                        </span>
                    )}
                </div>

                {/* Book Info */}
                <div className="w-full md:w-2/3 space-y-4">
                    <h1 className="text-4xl font-bold text-gray-800 leading-snug">{book?.title}</h1>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">{book?.category}</p>

                    <p className="text-gray-700 leading-relaxed">{book?.description}</p>

                    {/* Price Section */}
                    <div className="flex items-center gap-4">
                        <p className="text-3xl font-bold text-green-600">${book?.newPrice}</p>
                        <p className="text-lg text-gray-400 line-through">${book?.oldPrice}</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => handleAddToCart(book)}
                        className="flex items-center justify-center w-full sm:w-auto space-x-2 px-6 py-2 rounded bg-slate-700 hover:bg-slate-800 active:bg-slate-900 duration-200 text-white font-medium cursor-pointer"
                    >
                        <BsCartPlus className="text-lg" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SingleBook;
