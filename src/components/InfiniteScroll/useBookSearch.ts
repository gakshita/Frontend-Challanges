import axios from "axios";
import { useEffect, useState } from "react";

const useBookSearch = (query: string, page: number) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [books, setBooks] = useState<any>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);

    const getBooks = async (signal: AbortSignal) => {
        setLoading(true);
        setError(false);
        try {
            const res = await axios.get("http://openlibrary.org/search.json", {
                params: {
                    q: query,
                    page: page
                },
                signal
            });
            console.log(res);
            setBooks((prevBooks: any) => [
                ...prevBooks,
                ...res.data.docs.map((book: any) => book.title)
            ]);
            setHasMore(res.data.docs.length > 0);
        } catch (err) {
            if (axios.isCancel(err)) return console.log("cancelled");
            console.log(err);
            setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        getBooks(signal);

        //cleanup function
        return () => {
            controller.abort();
        };
    }, [query, page]);

    useEffect(() => {
        setBooks([]);
    }, [query]);

    return { loading, error, books, hasMore };
};

export default useBookSearch;
