import WithReducerHookComponent from "./reducer/WithReducerHook";
import WithoutReducerHookComponent from "./reducer/WithoutReducerHook";
const ReducerComponent = () => {

  return (
    <div className="component-wrapper">
      <WithoutReducerHookComponent />
      <WithReducerHookComponent />
    </div>
  );
};

export default ReducerComponent;
