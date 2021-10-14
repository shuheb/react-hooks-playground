

import WithMemoHookComponent from "./memo/WithMemoHook";
import WithoutMemoHookComponent from "./memo/WithoutMemoHook";

const MemoComponent = () => {
  return (
    <div className="component-wrapper">
      <WithoutMemoHookComponent />
      <WithMemoHookComponent />
    </div>
  );
};

export default MemoComponent;
