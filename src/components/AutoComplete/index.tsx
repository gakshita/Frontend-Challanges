import { useEffect, useState } from "react";
import { getSuggestions } from "./utils";
type SuggestionListProps = {
    list: string[];
    onClick: (i: string) => void;
};

const SuggestionList: React.FC<SuggestionListProps> = ({ list, onClick }) => {
    return (
        list && (
            <div className="border">
                {list.map((suggestion: string, index: number) => {
                    return (
                        <div
                            key={index}
                            onClick={() => onClick(suggestion)}
                            className="cursor-pointer"
                        >
                            {suggestion}
                        </div>
                    );
                })}
            </div>
        )
    );
};

const AutoComplete: React.FC = () => {
    const [input, setInput] = useState("");
    const [suggestionList, setSuggestionList] = useState<string[]>([]);

    const handleSearch = async () => {
        let res: string[] = await getSuggestions(input);
        setSuggestionList(res);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            handleSearch();
        }, 400);

        return () => {
            clearTimeout(debounce);
        };
    }, [input]);

    return (
        <div>
            <h1>AutoComplete</h1>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                className="rounded h-[50px] mt-[50px] w-[100%] px-[20px]"
            />
            <SuggestionList
                list={suggestionList}
                onClick={(i: string) => setInput(i)}
            />
        </div>
    );
};

export default AutoComplete;
