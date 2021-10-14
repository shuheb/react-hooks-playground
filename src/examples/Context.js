import WithContextHookComponent from "./context/WithContextHook";
import WithoutContextHookComponent from "./context/WithoutContextHook";
const ContextComponent = () => {


  return (
    <div className="component-wrapper">
      <WithoutContextHookComponent />
      <WithContextHookComponent />
    </div>
  );
};

export default ContextComponent;
