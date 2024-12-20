import { Link } from "react-router-dom"
import { BsCartPlus } from "react-icons/bs";
import { getImgUrl } from "../../utils/getImgUrl"
import { useDispatch } from 'react-redux'
import { addToCart } from "../../redux/features/cart/cartSlice"


const BookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className=" rounded-lg transition-shadow duration-300">
            <div
                className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
            >
                <div className="sm:h-72 sm:flex-shrink-0">
                    <Link to={`/books/${book?._id}`} >
                        <img
                            src={`${getImgUrl(book?.coverImage)}`}
                            alt="book cover"
                            className="w-full h-full bg-cover rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
                        />
                    </Link>
                </div>

                <div className="flex flex-col justify-between h-full">
                    <Link to={`/books/${book?._id}`}>
                        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
                            {book?.title}
                        </h3>
                    </Link>

                    <p className="text-gray-600 mb-5 line-clamp-3">{book?.description}</p>
                    <p className="font-medium mb-5">
                        ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
                    </p>

                    <button
                        onClick={() => handleAddToCart(book)}
                        className="flex items-center justify-center w-48 space-x-2 px-6 py-2 rounded bg-slate-700 hover:bg-slate-800 active:bg-slate-900 duration-200 text-white font-medium cursor-pointer"
                    >
                        <BsCartPlus className="text-lg" />
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </div >
    )
}
export default BookCard