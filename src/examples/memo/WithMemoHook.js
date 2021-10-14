import { useState, useMemo } from "react";

const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

const WithMemoHookComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const fib = useMemo(() => fibonacci(num), [num]);

    return (
        <div className="component-item">
            <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
            <h1
                onClick={() => setIsGreen(!isGreen)}
                style={{ color: isGreen ? "limegreen" : "crimson" }}
            >
                useMemo
            </h1>
            <h2>
                Fibonacci of {num} is {fib}
            </h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
        </div>
    );
};

export default WithMemoHookComponent;
