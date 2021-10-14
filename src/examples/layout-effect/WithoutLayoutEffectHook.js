import React, {
    useState,
    useEffect,
} from 'react';


const WithoutLayoutEffectHookComponent = () => {
    console.log('WithoutLayoutEffectHookComponent rendered')
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (value === 0) {
            setValue(10 + Math.random() * 200)
        }
    }, [value])

    return (<div className="component-item">
        <h1>Without useLayoutEffect</h1>
        <button onClick={() => setValue(0)}>value:{value}</button>
    </div>)
}

export default WithoutLayoutEffectHookComponent;