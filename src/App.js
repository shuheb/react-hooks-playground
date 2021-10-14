
import './App.css';

import StateComponent from './examples/State';

import EffectComponent from './examples/Effect';

import ContextComponent from './examples/Context';

import ReducerComponent from './examples/Reducer';

import MemoComponent from './examples/Memo';

import RefComponent from './examples/Ref';

import LayoutEffectComponent from './examples/LayoutEffect';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>React Hooks</h1>
      <StateComponent />
      <hr />
      <EffectComponent />
      <hr />
      <ContextComponent />
      <hr />
      <ReducerComponent />
      <hr />
      <MemoComponent />
      <hr />
      <RefComponent />
      <hr />
      <LayoutEffectComponent />
    </div>
  );
}

export default App;
