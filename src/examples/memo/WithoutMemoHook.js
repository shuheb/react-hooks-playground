import { useState } from "react";

const fibonacci = (n) => {
    if (n <= 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

const WithoutMemoHookComponent = () => {
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const fib = fibonacci(num);

    return (
        <div className="component-item">
            <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
            <h1
                onClick={() => setIsGreen(!isGreen)}
                style={{ color: isGreen ? "limegreen" : "crimson" }}
            >
                Without useMemo
            </h1>
            <h2>
                Fibonacci of {num} is {fib}
            </h2>
            <button onClick={() => setNum(num + 1)}>➕</button>
        </div>
    );
};

export default WithoutMemoHookComponent;
