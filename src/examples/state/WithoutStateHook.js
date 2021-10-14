const WithoutStateHookComponent = () => {
  const step = 50;
  const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

  let red = 0;

  const incrementRed = (newValue) => {
    red = newValue;
    document.getElementById('red-counter').innerHTML = red;
    updateTitle();
  }

  const decrementRed = (newValue) => {
    red = newValue;
    document.getElementById('red-counter').innerHTML = red;
    updateTitle();
  }

  // update the style of the title to reflect state change
  const updateTitle = () => {
    document.getElementById('state-title').style.color = `rgb(${red},0,0)`
  }
  return (
    <div className="component-item">
      <h3>Last re-render {new Date().toLocaleTimeString()}</h3>
      <h1 id="state-title" style={{ color: `rgb(${red}, 0, 0)` }}>Without useState</h1>

      <div>
        <span>Red: <span id='red-counter'>{red}</span> </span>
        <button onClick={() => incrementRed(limitRGB(red + step))}>➕</button>
        <button onClick={() => decrementRed(limitRGB(red - step))}>➖</button>

      </div>

    </div>
  );
};

export default WithoutStateHookComponent;