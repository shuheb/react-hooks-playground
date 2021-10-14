

import WithoutStateHookComponent from "./state/WithoutStateHook";

import WithStateHookComponent from "./state/WithStateHook";
const StateComponent = () => {

  return (<div className="component-wrapper">
    <WithoutStateHookComponent />
    <WithStateHookComponent />
  </div>)
}
export default StateComponent;
