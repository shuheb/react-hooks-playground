import { useReducer } from "react";

// fancy logic to make sure the number is between 0 and 255
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const initialColours = { red: 0, green: 0, blue: 0 };

const INCREMENT_RED = "INCREMENT_RED"
const DECREMENT_RED = "DECREMENT_RED"
const INCREMENT_GREEN = "INCREMENT_GREEN"
const DECREMENT_GREEN = "DECREMENT_GREEN"
const INCREMENT_BLUE = "INCREMENT_BLUE"
const DECREMENT_BLUE = "DECREMENT_BLUE"

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_RED:
            return { ...state, red: limitRGB(state.red + step) };
        case DECREMENT_RED:
            return { ...state, red: limitRGB(state.red - step) };
        case INCREMENT_GREEN:
            return { ...state, green: limitRGB(state.green + step) };
        case DECREMENT_GREEN:
            return { ...state, green: limitRGB(state.green - step) };
        case INCREMENT_BLUE:
            return { ...state, blue: limitRGB(state.blue + step) };
        case DECREMENT_BLUE:
            return { ...state, blue: limitRGB(state.blue - step) };
        default:
            return state;
    }
};

const RedCountComponent = props => {
    const { red, incrementRed, decrementRed } = props;

    return (<div>
        <span>Red: {red} </span>
        <button onClick={incrementRed}>➕</button>
        <button onClick={decrementRed}>➖</button>
    </div>)
}

const GreenCountComponent = props => {
    const { green, incrementGreen, decrementGreen } = props;

    return (<div>
        <span>Green: {green}</span>
        <button onClick={incrementGreen}>➕</button>
        <button onClick={decrementGreen}>➖</button>
    </div>)
}

const BlueCountComponent = props => {
    const { blue, incrementBlue, decrementBlue } = props;

    return (<div>
        <span>Blue: {blue}</span>
        <button onClick={incrementBlue}>➕</button>
        <button onClick={decrementBlue}>➖</button>
    </div>)
}
const WithReducerHookComponent = () => {
    const [colours, dispatch] = useReducer(reducer, initialColours);

    return (
        <div className="component-item">
            <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
            <h1 style={{ color: `rgb(${colours.red}, ${colours.green}, ${colours.blue})` }}>useReducer</h1>
            <RedCountComponent red={colours.red} incrementRed={() => dispatch({ type: INCREMENT_RED })} decrementRed={() => dispatch({ type: DECREMENT_RED })} />
            <GreenCountComponent green={colours.green} incrementGreen={() => dispatch({ type: INCREMENT_GREEN })} decrementGreen={() => dispatch({ type: DECREMENT_GREEN })} />
            <BlueCountComponent blue={colours.blue} incrementBlue={() => dispatch({ type: INCREMENT_BLUE })} decrementBlue={() => dispatch({ type: DECREMENT_BLUE })} />
        </div>
    );
};

export default WithReducerHookComponent;
