import { data } from "./data.ts";

export const getSuggestions = (input: string): Promise<string[]> => {
    const filteredData =
        input.length === 0
            ? []
            : data.filter((d: string, i: number) =>
                  d.toLowerCase().startsWith(input.toLowerCase())
              );
    console.log("filteredData", filteredData);
    return new Promise((resolve) =>
        setTimeout(() => resolve(filteredData), 1000)
    );
};
