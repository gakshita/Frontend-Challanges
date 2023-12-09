import React, { useEffect, useState } from "react";

const config = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];
type GridLightProps = {
    isActive: boolean;
    disabled: boolean;
    onClick: () => void;
};
const GridLight: React.FC<GridLightProps> = ({
    disabled,
    isActive,
    onClick
}) => {
    return (
        <button
            className={`h-[100px] ${disabled && "bg-transparent"} ${
                !disabled && "border border-grey cursor-pointer"
            } ${isActive && "bg-green-500"}`}
            onClick={() => !disabled && !isActive && onClick()}
        ></button>
    );
};

const MemoizedGridLight = React.memo(GridLight);

const GridLights = () => {
    const [greenLights, setGreenLights] = useState<number[]>([]);
    const timerRef = React.useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (greenLights.length == 0) return clearInterval(timerRef.current!);
        if (greenLights.length < config.flat().filter(Boolean).length) return;

        timerRef.current = setInterval(() => {
            if (greenLights.length == 0) {
                return;
            }
            setGreenLights((prev) => prev.slice(1));
        }, 300);
    }, [greenLights]);

    return (
        <div
            className={`grid gap-x-4 gap-y-4 grid-cols-${config[0].length} w-[320px]`}
        >
            {config.flat().map((val: number, i: number) => {
                return (
                    <MemoizedGridLight
                        key={i}
                        disabled={val == 0}
                        isActive={greenLights.includes(i)}
                        onClick={() => setGreenLights([i, ...greenLights])}
                    />
                );
            })}
        </div>
    );
};

export default GridLights;
