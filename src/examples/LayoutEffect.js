import WithoutLayoutEffectHookComponent from "./layout-effect/WithoutLayoutEffectHook";
import WithLayoutEffectHookComponent from "./layout-effect/WithLayoutEffectHook";
const LayoutEffectComponent = () => {

    return (<div className="component-wrapper">
        <WithoutLayoutEffectHookComponent />
        <WithLayoutEffectHookComponent />
    </div>)
}

export default LayoutEffectComponent;