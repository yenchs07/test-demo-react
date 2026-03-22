import logo from './logo.svg';
import './App.css';
import '../src/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponents';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      Chuc mung sinh nhat em DAU &amp;Yen Chan
      <MyComponent></MyComponent>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Chuc mung sinh nhat em DAU
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}

export default App;
