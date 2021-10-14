import { useState } from "react";
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const RedCountComponent = props => {
    const { red, setRed } = props;

    return (<div>
        <span>Red: {red} </span>
        <button onClick={() => setRed(limitRGB(red + step))}>➕</button>
        <button onClick={() => setRed(limitRGB(red - step))}>➖</button>
    </div>)
}

const GreenCountComponent = props => {
    const { green, setGreen } = props;

    return (<div>
        <span>Green: {green} </span>
        <button onClick={() => setGreen(limitRGB(green + step))}>➕</button>
        <button onClick={() => setGreen(limitRGB(green - step))}>➖</button>
    </div>)
}

const BlueCountComponent = props => {
    const { blue, setBlue } = props;

    return (<div>
        <span>Blue: {blue} </span>
        <button onClick={() => setBlue(limitRGB(blue + step))}>➕</button>
        <button onClick={() => setBlue(limitRGB(blue - step))}>➖</button>
    </div>)
}

const WithoutReducerHookComponent = () => {
    const [colours, setColours] = useState({
        red: 0,
        green: 0,
        blue: 0
    });

    return (
        <div className="component-item">
            <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
            <h1 style={{ color: `rgb(${colours.red}, ${colours.green}, ${colours.blue})` }}>Without useReducer</h1>
            <RedCountComponent red={colours.red} setRed={(redCount) => setColours((state) => ({ ...state, red: redCount }))} />
            <GreenCountComponent green={colours.green} setGreen={(greenCount) => setColours((state) => ({ ...state, green: greenCount }))} />
            <BlueCountComponent blue={colours.blue} setBlue={(blueCount) => setColours((state) => ({ ...state, blue: blueCount }))} />
        </div>
    );
};

export default WithoutReducerHookComponent;
