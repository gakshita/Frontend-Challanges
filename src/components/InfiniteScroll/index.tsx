import { useEffect, useState, useRef, useCallback } from "react";
import useBookSearch from "./useBookSearch";

const InfiniteScroll = () => {
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

    const observer = useRef<IntersectionObserver>();
    const lastBookElement = useCallback(
        (node: Element) => {
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        setQuery((e.target as HTMLInputElement).value);
        setPageNumber(1);
    };

    return (
        <>
            <h1>InfiniteScroll</h1>
            <input type="text" value={query} onChange={handleInput} />
            {loading && <div>Loading...</div>}
            <div>
                {books.map((book: string, index: number) => {
                    return books.length === index + 1 ? (
                        <div key={index} ref={lastBookElement}>
                            <h2>{book}</h2>
                        </div>
                    ) : (
                        <div key={index}>
                            <h2>{book}</h2>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default InfiniteScroll;
