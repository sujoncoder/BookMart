import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import BookCard from "../books/BookCard";


const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];

import { useFetchAllBooksQuery } from "../../redux/features/cart/booksApi";

const TopSellers = () => {
    const { data, error, isLoading } = useFetchAllBooksQuery();
    const books = data?.books || [];

    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    const filteredBooks = selectedCategory === "Choose a genre"
        ? books
        : books.filter((book) => book.category === selectedCategory.toLowerCase());

    if (isLoading) return <p>Loading books...</p>;
    if (error) return <p>Failed to load books: {error.message}</p>;

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

            {/* CATEGORY FILTER */}
            <div className="mb-8 flex items-center">
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category"
                    id="category"
                    className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                >
                    {categories.map(
                        (category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        )
                    )}
                </select>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 40 },
                    1024: { slidesPerView: 2, spaceBetween: 50 },
                    1180: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {Array.isArray(filteredBooks) && filteredBooks.length > 0 ? (
                    filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No books found for the selected category.</p>
                )}
            </Swiper>
        </div>
    );
};

export default TopSellers;
