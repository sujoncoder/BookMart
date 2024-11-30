import { useFetchAllBooksQuery } from "../../redux/features/cart/booksApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import BookCard from "../books/BookCard";

const Recommended = () => {
    const { data, error, isLoading } = useFetchAllBooksQuery();
    const books = data?.books || []; // Adjust this if your API response has a different structure

    if (isLoading) {
        return <p>Loading recommended books...</p>;
    }

    if (error) {
        return <p>Error fetching books: {error.message}</p>;
    }

    if (books.length === 0) {
        return <p>No recommended books available at the moment.</p>;
    }

    return (
        <div>
            <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {books.slice(8, 18).map((book, index) => (
                    <SwiperSlide key={index}>
                        <BookCard book={book} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recommended;
