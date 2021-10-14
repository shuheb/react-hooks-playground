import { useState } from "react";
const step = 50;
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const RedCountComponent = (props) => {
    const { red, incrementRed, decrementRed } = props;
    return (<div>
        <span>Red: {red} </span>
        <button onClick={() => incrementRed(limitRGB(red + step))}>➕</button>
        <button onClick={() => decrementRed(limitRGB(red - step))}>➖</button>
    </div>)
}

const WithStateHookComponent = () => {
    const [red, setRed] = useState(0);
    return (
        <div className="component-item">
            <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
            <h1 style={{ color: `rgb(${red}, 0, 0)` }}>useState</h1>
            <RedCountComponent red={red} incrementRed={(redCount) => setRed(redCount)} decrementRed={(redCount) => setRed(redCount)} />
        </div>
    );
};

export default WithStateHookComponent;