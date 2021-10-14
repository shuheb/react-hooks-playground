import React, {
    useState,
    useLayoutEffect
} from 'react';

const WithLayoutEffectHookComponent = () => {
    console.log('WithLayoutEffectHookComponent rendered')

    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200)
        }
    }, [value])

    return (<div className="component-item">
        <h1>useLayoutEffect</h1>
        <button onClick={() => setValue(0)}>value:{value}</button>
    </div>)
}

export default WithLayoutEffectHookComponent;

