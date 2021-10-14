
import WithRefHookComponent from "./ref/WithRefHook";
import WithoutRefHookComponent from "./ref/WithoutRefHook";
const RefComponent = () => {


    return (
        <div className="component-wrapper" style={{ height: 500 }}>
            <WithoutRefHookComponent />
            <WithRefHookComponent />
        </div>
    );
};
export default RefComponent;
