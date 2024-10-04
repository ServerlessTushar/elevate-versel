import { useState } from 'react';

function useCycle<T>(array: T[]): [T, () => void, () => void] {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % array.length);
    };

    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + array.length) % array.length);
    };

    const current: T = array[index];

    return [current, next, prev];
}

export default useCycle;
